export const convertName = (name: string | undefined): string => {
  let res = "";
  if (!name) {
    return res;
  }
  for (const char of name) {
    if (char.toLowerCase() >= "a" && char.toLowerCase() <= "z") {
      res += char;
    } else {
      break;
    }
  }
  return res;
};
