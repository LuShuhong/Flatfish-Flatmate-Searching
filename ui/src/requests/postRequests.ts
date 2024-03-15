import { PostBody } from "../util/interfaces/PostBody";

export const postPreference = (url: string, body: PostBody) => {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(() => console.log("success"))
    .catch((error) => console.log(error));
};
