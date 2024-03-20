import { TextInput } from "../../../SignUpPage/components/TextInput/TextInput";
import { OptionsInput } from "../../../SignUpPage/components/OptionsInput/OptionsInput";
import { Birthday } from "../../../SignUpPage/components/Birthday/Birthday";
import { Age } from "../../../SignUpPage/components/Age/Age";
import { Description } from "../../../SignUpPage/components/Description/Description";
import { SignUpDetails } from "../../../../util/interfaces/SignUpDetails";
import { ProfilePic } from "../ProfilePic/ProfilePic";
import { Save } from "../Save/Save";

interface Props {
  user: SignUpDetails;
}

export const ProfileForm: React.FC<Props> = ({ user }) => {
  const handleNameChange = (): void => {};
  const handleGenderChange = (): void => {};
  const handleEmailChange = (): void => {};
  const handleBirthdayChange = (): void => {};
  const handleInstagramChange = (): void => {};
  const handleDescriptionChange = (): void => {};
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
          />
        </div>
        <div className="w-1/3">
          <OptionsInput
            fieldName="gender"
            value={user.userGender}
            handleChange={handleGenderChange}
            warning={false}
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
        />
      </div>
      <div className="flex h-1/8 w-full">
        <div className="flex items-center w-2/3 h-full">
          <Birthday
            value={user.birthday}
            handleChange={handleBirthdayChange}
            warning={false}
          />
        </div>
        <div className="w-1/3">
          <Age value={user.age} />
        </div>
      </div>
      <div className="flex h-1/8 w-full">
        <TextInput
          fieldName="instagram"
          placeholder="JohnSmithInstaFollow"
          type="text"
          value={user.instagram}
          handleChange={handleInstagramChange}
        />
      </div>
      <div className="flex flex-col h-1/4 w-full">
        <Description
          value={user.description}
          handleChange={handleDescriptionChange}
        />
      </div>
      <div className="flex items-center justify-center h-1/16 w-full">
        <Save />
      </div>
    </div>
  );
};
