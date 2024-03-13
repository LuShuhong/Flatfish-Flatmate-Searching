export const convertName = (name: string): string => {
  let res = "";
  for (const char of name) {
    if (char.toLowerCase() >= "a" && char.toLowerCase() <= "z") {
      res += char;
    } else {
      break;
    }
  }
  return res;
};
