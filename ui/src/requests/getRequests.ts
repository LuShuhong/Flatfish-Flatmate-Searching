import { Profile } from "../util/interfaces/Profile";

export const getProfiles = (
  url: string,
  setter: React.Dispatch<React.SetStateAction<Profile[]>>
): void => {
  fetch(url)
    .then((resp) => resp.json())
    .then((data) =>
      setter(() => {
        console.log(data);
        return data;
      })
    )
    .catch((error) => console.log(error));
};

export const getSavedProfiles = async (url: string): Promise<Profile[]> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    return []; // Return an empty array as a fallback
  }
};

export const getAllMatchedProfiles = (
  url: string,
  setter: React.Dispatch<React.SetStateAction<Profile[] | null>>
): void => {
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => setter(() => data))
    .catch((error) => console.log(error));
};
