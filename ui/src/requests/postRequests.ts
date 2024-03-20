import { PostBody } from "../util/interfaces/PostBody";

export const post = (
  url: string,
  body: PostBody | object,
  jwt: string = ""
) => {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: jwt,
    },
    body: JSON.stringify(body),
  })
    .then(() => console.log("success"))
    .catch((error) => console.log(error));
};
