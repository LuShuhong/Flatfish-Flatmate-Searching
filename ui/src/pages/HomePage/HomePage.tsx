import { PreferenceInput } from "./components/PreferenceInput/PreferenceInput";
import MapComponent from "./components/Map/Map";
import React from "react";
import { SignUpDetails } from "../../util/interfaces/SignUpDetails";

interface Props {
  getPreferences: (userDetails: SignUpDetails) => void;
  email: string | undefined;
  user: SignUpDetails;
}

export const HomePage: React.FC<Props> = ({ getPreferences, email, user }) => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <PreferenceInput
        user={user}
        getPreferences={getPreferences}
        email={email}
      />
      <MapComponent></MapComponent>
    </div>
  );
};
