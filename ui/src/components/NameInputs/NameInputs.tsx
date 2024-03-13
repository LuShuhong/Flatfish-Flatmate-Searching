import { NameInput } from "../NameInput/NameInput";
import { convertName } from "../../util/nameConverter";

interface Props {
  username: string | undefined;
}

export const NameInputs: React.FC<Props> = ({ username }) => {
  return (
    <div className="flex items-center justify-between h-1/5 w-full">
      <NameInput fieldName="first name" value={convertName(username)} />
      <NameInput fieldName="last name" value={""} />
    </div>
  );
};
