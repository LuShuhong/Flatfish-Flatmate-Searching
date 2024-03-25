
import { Profile } from "../util/interfaces/Profile";

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

async function fetchData(input: RequestInfo, init?: RequestInit) {
  const response = await fetch(input, init);
  if (response.ok) {
      return response;
  } else {
      const errorBody = await response.json();
      const errorMessage = errorBody.error;
      throw Error(errorMessage || "Unknown Error Occurred");
  }
}

export async function deleteSavedProfile(savingUserId : string, savedUserId : string) {
  const response = await fetchData(`https://flatfish-backend.pq46c.icekube.ics.cloud/api/v1/savedprofiles/${savingUserId}/${savedUserId}` , {method: "DELETE"});
}

// https://flatfish-backend.pq46c.icekube.ics.cloud/api/v1/