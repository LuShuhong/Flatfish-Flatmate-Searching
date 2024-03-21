export const deleteSaved = (url: string): void => {
  fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to delete ");
      }
      console.log("deleted");
    })
    .catch((error) => console.error("Error deleting resource:", error));
};
