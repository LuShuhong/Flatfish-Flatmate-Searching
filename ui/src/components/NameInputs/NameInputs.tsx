import { NameInput } from "../NameInput/NameInput";

export const NameInputs: React.FC = () => {
  return (
    <div className="flex items-center justify-between h-1/5 w-full">
      <NameInput fieldName="first name" />
      <NameInput fieldName="last name" />
    </div>
  );
};
