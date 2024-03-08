import { Preference } from "../util/Preference";

export const get = (url: string) => {
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      return data;
    });
  console.log("hit");
};
