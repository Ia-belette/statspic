'use client';
import { signIn } from 'next-auth/react';
import { Button, Flex, Heading, Text } from '@radix-ui/themes';

export const Intro = () => {
  return (
    <Flex
      align={'center'}
      direction={'column'}
      mx={'auto'}
      gap={'5'}
      maxWidth={'490px'}
    >
      <Heading
        weight={'bold'}
        size={{
          initial: '8',
          sm: '9',
        }}
        align={'center'}
        highContrast
      >
        Create Images from Your Spotify Stats
      </Heading>
      <Text
        size={{
          initial: '5',
          sm: '6',
        }}
        align={'center'}
      >
        Create personalized images of your stats. Useful for sharing your
        favorite artists and songs in a visually stunning way.
      </Text>
      <Button
        size={'4'}
        radius={'full'}
        className={'!flex !mx-auto'}
        onClick={() => signIn('spotify')}
      >
        Sign in With Spotify
      </Button>
    </Flex>
  );
};
