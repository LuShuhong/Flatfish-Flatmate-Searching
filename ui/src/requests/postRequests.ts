import { Profile } from "../util/Profile";

export const post = (url: string, body: Profile) => {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};
