import { Profile } from "../util/interfaces/Profile";

export const getProfiles = (
  url: string,
  setter: React.Dispatch<React.SetStateAction<Profile[]>>
): void => {
  fetch(url)
    .then((resp) => resp.json())
    .then((data) =>
      setter(() => {
        console.log(data[0].name);
        return data;
      })
    )
    .catch((error) => console.log(error));
};
