import { TextInput } from "../../../SignUpPage/components/TextInput/TextInput";
import { OptionsInput } from "../../../SignUpPage/components/OptionsInput/OptionsInput";
import { Birthday } from "../../../SignUpPage/components/Birthday/Birthday";
import { Age } from "../../../SignUpPage/components/Age/Age";
import { Description } from "../../../SignUpPage/components/Description/Description";
import { SignUpDetails } from "../../../../util/interfaces/SignUpDetails";
import { ProfilePic } from "../ProfilePic/ProfilePic";
import { Save } from "../Save/Save";
import { getAge } from "../../../../util/ageCalculator";

interface Props {
  user: SignUpDetails;
  updateField: (updatedField: Partial<SignUpDetails>) => void;
}

export const ProfileForm: React.FC<Props> = ({ user, updateField }) => {
  const handleNameChange = (val: string): void => updateField({ name: val });
  const handleGenderChange = (val: "MALE" | "FEMALE" | "SELECT"): void =>
    updateField({ userGender: val });
  const handleEmailChange = (): void => {};
  const handleBirthdayChange = (val: string): void => {
    updateField({ age: getAge(val) });
    updateField({ birthday: val });
  };
  const handleInstagramChange = (val: string): void =>
    updateField({ instagram: val });
  const handleDescriptionChange = (val: string): void =>
    updateField({ description: val });
  return (
    <div className="h-full w-30%">
      <div className="flex h-3/16 w-full">
        <div className="flex items-center justify-center w-1/3 h-full">
          <ProfilePic pic={user.picture} />
        </div>
        <div className="flex items-center w-2/3 h-full text-2xl">
          My Profile
        </div>
      </div>
      <div className="flex h-1/8 w-full">
        <div className="flex items-center w-2/3 h-full">
          <TextInput
            fieldName="name"
            placeholder="John"
            type="text"
            mandatory
            value={user.name}
            handleChange={handleNameChange}
            edittable
          />
        </div>
        <div className="w-1/3">
          <OptionsInput
            fieldName="gender"
            value={user.userGender}
            handleChange={handleGenderChange}
            warning={false}
            noBackground
          />
        </div>
      </div>
      <div className="flex h-1/8 w-full">
        <TextInput
          fieldName="email"
          placeholder="johnsmith69@gmail.com"
          type="email"
          mandatory
          value={user.userId}
          handleChange={handleEmailChange}
          disabled
          edittable
          strictUserId
        />
      </div>
      <div className="flex h-1/8 w-full">
        <div className="flex items-center w-2/3 h-full">
          <Birthday
            value={user.birthday}
            handleChange={handleBirthdayChange}
            warning={false}
            noBackground
          />
        </div>
        <div className="w-1/3">
          <Age value={user.age} noBox />
        </div>
      </div>
      <div className="flex h-1/8 w-full">
        <TextInput
          fieldName="instagram"
          placeholder="JohnSmithInstaFollow"
          type="text"
          value={user.instagram}
          handleChange={handleInstagramChange}
          edittable
        />
      </div>
      <div className="flex flex-col h-1/4 w-full">
        <Description
          value={user.description}
          handleChange={handleDescriptionChange}
          noBackground
        />
      </div>
      <div className="flex items-center justify-center h-1/16 w-full">
        <Save />
      </div>
    </div>
  );
};
