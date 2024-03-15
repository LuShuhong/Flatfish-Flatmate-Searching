import { Preference } from "../util/interfaces/Preference";
import { PostBody } from "../util/interfaces/PostBody";

export const postPreference = (url: string, body: Preference) => {
  const postBody: PostBody = {
    userId: body.userId,
    budgetMin: body.budgetRange[0],
    budgetMax: body.budgetRange[1],
    ageMin: body.ageRange[0],
    ageMax: body.ageRange[1],
    gender: body.gender,
    smoker: true,
    location: body.location,
  };
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postBody),
  })
    .then(() => console.log("success"))
    .catch((error) => console.log(error));
};
