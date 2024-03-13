import React, { useState } from "react";
import { NameInput } from "../NameInput/NameInput";

export const NameInputs: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const handleFirstName = (val: string): void =>

  return (
    <div className="flex items-center justify-between h-1/5 w-full">
      <NameInput
        fieldName="first name"
        value={firstName}
        handleUsername={handleFirstName}
      />
      <NameInput fieldName="last name" />
    </div>
  );
};
