import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth, { type NextAuthConfig } from 'next-auth';
import Spotify from 'next-auth/providers/spotify';

import prisma from '@/prisma/client';

import { refreshAccessToken } from '@/lib/refresh-token';

const scopes = [
  'user-read-email,user-top-read,user-read-recently-played,user-read-currently-playing',
].join(',');

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env;

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Spotify({
      clientId: SPOTIFY_CLIENT_ID,
      clientSecret: SPOTIFY_CLIENT_SECRET,
      authorization: `https://accounts.spotify.com/authorize?scope=${scopes}`,
    }),
  ],
  trustHost: true,
  callbacks: {
    async session({ session, user }) {
      try {
        const userAccount = await prisma.user.findUnique({
          where: { id: user.id },
          include: { account: true },
        });

        if (!userAccount) throw new Error('User account not found');

        const account = userAccount.account[0];

        const now = Math.floor(Date.now() / 1000);

        if (!account) throw new Error('Account not found');

        if (!account.expires_at)
          throw new Error('Account expires_at not found');

        const expiresIn = (account.expires_at - now) / 60;

        if (expiresIn <= 10) {
          if (!account.refresh_token) {
            throw new Error('account.refresh_token is undefined');
          }
          const { accessToken, tokenExpiresIn, refreshToken } =
            await refreshAccessToken(account.refresh_token);

          await prisma.account.update({
            where: {
              provider_providerAccountId: {
                provider: 'spotify',
                providerAccountId: account.providerAccountId,
              },
            },
            data: {
              access_token: accessToken,
              expires_at: Math.floor(Date.now() / 1000 + tokenExpiresIn),
              refresh_token: refreshToken,
            },
          });
          // @ts-ignore
          session.access_token = accessToken;
          return session;
        } else {
          // @ts-ignore
          session.access_token = account.access_token;
          return session;
        }
      } catch (error) {
        return session;
      }
    },
  },
} satisfies NextAuthConfig);
