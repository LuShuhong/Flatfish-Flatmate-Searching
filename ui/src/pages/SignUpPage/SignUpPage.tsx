import { SignUpForm } from "./components/SignUpForm/SignUpForm";
import { SignUpDetails } from "../../util/interfaces/SignUpDetails";
import { SignUpFieldWarning } from "../../util/interfaces/SignUpFieldWarning";
interface Props {
  user: SignUpDetails;
  updateField: (updatedField: Partial<SignUpDetails>) => void;
  fieldWarning: SignUpFieldWarning;
  handleRegistration: () => void;
  postFailed: boolean;
}

export const SignUpPage: React.FC<Props> = ({
  user,
  updateField,
  fieldWarning,
  handleRegistration,
  postFailed,
}) => {
  return (
    <div className="flex justify-center h-full w-full">
      <SignUpForm
        user={user}
        updateField={updateField}
        handleRegistration={handleRegistration}
        fieldWarning={fieldWarning}
        postFailed={postFailed}
      />
    </div>
  );
};
