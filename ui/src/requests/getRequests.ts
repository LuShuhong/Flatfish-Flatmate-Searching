import { Profile } from "../util/Profile";

export const getProfiles = (url: string, variable: Profile[]): void => {
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => (variable = data));
};
