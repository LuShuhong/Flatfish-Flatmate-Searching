import { useState } from "react";
import { TextInput } from "../../../SignUpPage/components/TextInput/TextInput";
import { OptionsInput } from "../../../SignUpPage/components/OptionsInput/OptionsInput";
import { Birthday } from "../../../SignUpPage/components/Birthday/Birthday";
import { Age } from "../../../SignUpPage/components/Age/Age";
import { Description } from "../../../SignUpPage/components/Description/Description";
import { SignUpDetails } from "../../../../util/interfaces/SignUpDetails";
import { ProfilePic } from "../ProfilePic/ProfilePic";
import { Save } from "../Save/Save";
import { getAge } from "../../../../util/ageCalculator";
import { SignUpFieldWarning } from "../../../../util/interfaces/SignUpFieldWarning";

interface Props {
  user: SignUpDetails;
  updateField: (updatedField: Partial<SignUpDetails>) => void;
  handleSave: () => void;
  postFailed: boolean;
  fieldWarning: SignUpFieldWarning;
}

export const ProfileForm: React.FC<Props> = ({
  user,
  updateField,
  handleSave,
  postFailed,
  fieldWarning,
}) => {
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

  //to be included in a seperate component
  const [file, setFile] = useState<File | undefined>();
  const handleUpload = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("file", file);
    if (typeof file === "undefined") return;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "test-react-uploads-unsigned");
    formData.append("api_key", "441472483846922");
    const results = await fetch(
      "https://api.cloudinary.com/v1_1/dlnjjenrx/image/upload",
      {
        method: "POST",
        body: formData,
      }
    ).then((r) => r.json());
    console.log("results", results);
  };
  const handleImageChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement & {
      files: FileList;
    };
    console.log("target", target.files);
    setFile(target.files[0]);
    const file = new FileReader();
    file.onload = function () {
      updateField({ picture: file.result as string });
    };
    file.readAsDataURL(target.files[0]);
  };
  //end of a seperate component
  console.log(user.picture);
  return (
    <div className="h-full w-30%">
      <div className="flex h-3/16 w-full">
        <div className="flex items-center justify-center w-1/2 h-full">
          <ProfilePic
            pic={user.picture}
            handleImageChange={handleImageChange}
          />
          <button onClick={handleUpload}>Upload</button>
        </div>
        <div className="flex justify-center items-center text-2xl">
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
            warning={fieldWarning.name}
          />
        </div>
        <div className="w-1/3">
          <OptionsInput
            fieldName="gender"
            value={user.userGender}
            handleChange={handleGenderChange}
            noBackground
            warning={fieldWarning.userGender}
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
          warning={fieldWarning.userId}
        />
      </div>
      <div className="flex h-1/8 w-full">
        <div className="flex items-center w-2/3 h-full">
          <Birthday
            value={user.birthday}
            handleChange={handleBirthdayChange}
            warning={fieldWarning.birthday}
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
        {postFailed && (
          <div className="text-xs text-red-700">
            Something went wrong, please try again later
          </div>
        )}
      </div>
      <div className="flex items-center justify-center h-1/16 w-full">
        <Save handleSave={handleSave} />
      </div>
    </div>
  );
};
