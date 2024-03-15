import { NameInput } from "../NameInput/NameInput";
import { convertName } from "../../util/nameConverter";
import { useState } from "react";

interface Props {
  username: string | undefined;
  handleFirstName: (val: string) => void;
}

export const NameInputs: React.FC<Props> = ({ username, handleFirstName }) => {
  const [surname, setSurname] = useState<string>("");
  const handleSurname = (val: string): void => {
    setSurname(() => val);
  };
  return (
    <div className="flex items-center justify-between h-1/5 w-full">
      <NameInput
        fieldName="first name"
        value={convertName(username)}
        handleUsername={handleFirstName}
      />
      <NameInput
        fieldName="last name"
        value={surname}
        handleUsername={handleSurname}
      />
    </div>
  );
};
