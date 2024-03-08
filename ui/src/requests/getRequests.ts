import { Profile } from "../util/Profile";

export const getProfiles = (
  url: string,
  setter: React.Dispatch<React.SetStateAction<Profile[]>>
): void => {
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => setter(() => data))
    .catch((error) => console.log(error));
};
