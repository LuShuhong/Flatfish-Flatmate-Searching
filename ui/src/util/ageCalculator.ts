export const getAge = (birthday: string): number => {
  const today = new Date();
  const birthdate = new Date(birthday);
  const millisecs = today.getTime() - birthdate.getTime();
  return Math.floor(millisecs / 1000 / 60 / 60 / 24 / 365.25);
};
