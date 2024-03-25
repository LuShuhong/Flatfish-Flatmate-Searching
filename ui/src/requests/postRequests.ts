import { PostBody } from "../util/interfaces/PostBody";

export const post = (url: string, body: PostBody | object) =>
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
