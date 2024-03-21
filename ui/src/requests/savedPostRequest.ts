export const postrq = (
  url: string,
  //   requestId: string,
  userId: string,
  savedUserId: string
) => {
  const requestBody = {
    userId: userId,
    savedUserId: savedUserId,
  };
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody), // Corrected the object syntax
  })
    .then(() => console.log("success"))
    .catch((error) => console.log(error));
  console.log("done");
};
