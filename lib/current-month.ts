const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const d = new Date();
const currentMonth = months[d.getMonth()];

export const CURRENT_MONTH = `${currentMonth}'s`;
