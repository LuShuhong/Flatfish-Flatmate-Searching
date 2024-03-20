import { NameInputs } from "../NameInputs/NameInputs";
import { EmailInput } from "../EmailInput/EmailInput";
import { BirthdayInput } from "../BirthdayInput/BirthdayInput";
import { AgeInput } from "../AgeInput/AgeInput";
import { GenderInput } from "../GenderInput/GenderInput";
import { InstagramInput } from "../InstagramInput/InstagramInput";
import { SaveProfileButton } from "../SaveProfileButton/SaveProfileButton";
import { Profile } from "../../util/interfaces/Profile";
import { getAge } from "../../util/ageCalculator";
import { post } from "../../requests/postRequests";
import { useState, useCallback } from "react";
import React from "react";
// import { FileInput } from "../FileInput/FileInput";

interface Props {
  user: Partial<Profile>;
  updateProfile: (updatedField: Partial<Profile>) => void;
}

export const ProfileInputFields: React.FC<Props> = ({
  user,
  updateProfile,
}) => {
  const [deactivate, setDeactivate] = useState<boolean>(false);
  const handleFirstName = (val: string): void => updateProfile({ name: val });
  const handleUserEmail = (val: string): void => updateProfile({ email: val });
  const handleUserBirthdate = (val: string): void => {
    updateProfile({ birthday: val });
    updateProfile({ age: getAge(val).toString() });
  };
  const handleUserGender = (val: string): void =>
    updateProfile({ gender: val });
  const handleUserInstagram = (val: string): void =>
    updateProfile({ instagram: val });

  const [state, setState] = useState('ready');
  const [file, setFile] = useState<File | undefined>()
  
  const handleSaveProfile = () => {
    setDeactivate(() => true);
    // http://localhost:8080/api/v1
    // https://flatfish-backend.pq46c.icekube.ics.cloud/api/v1
    post("http://localhost:8080/api/v1", {
      userId: user.email,
      name: user.name,
      decription: "temp",
      birthday: user.birthday,
      age: user.age,
      userGender:
        user.gender === "m" ? "MALE" : user.gender === "f" ? "FEMALE" : "none",
      instagram: user.instagram,
    });
  };

  async function handleOnSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    if (typeof file === 'undefined') return;

    const formData = new FormData();

    formData.append('file', file);
    formData.append('upload_preset', 'test-react-uploads-unsigned');
    formData.append('api_key', import.meta.env.VITE_CLOUDINARY_API_KEY)

    console.log('file', file)
    setState('sent');
  }

  function handleOnChange(e: React.FormEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement & {
      files: FileList;
    }
    setFile(target.files[0]);
  }
  return (
    <div className="h-4/5 w-full">
      <NameInputs username={user.name} handleFirstName={handleFirstName} />
      <EmailInput email={user.email} handleUserEmail={handleUserEmail} />
      <div className="flex justify-between w-97.5%">
        <BirthdayInput
          birthday={user.birthday ? user.birthday : ""}
          handleUserBirthdate={handleUserBirthdate}
        />
        <AgeInput age={user.birthday ? getAge(user.birthday) : 0} />
        <GenderInput gender={user.gender} handleUserGender={handleUserGender} />
      </div>
      <InstagramInput
        instagram={user.instagram}
        handleUserInstagram={handleUserInstagram}
      />
      <div className="flex gap-4">
        <input type="file" name="image" onChange={handleOnChange}/>
      </div>
      <div className="flex items-center justify-center w-97.5% h-1/5">
        <SaveProfileButton
          handleSaveProfile={handleSaveProfile}
          status={deactivate}
        />
      </div>
    </div>
  );
};


// async function handleOnSubmit(e: React.SyntheticEvent) {
//   e.preventDefault();

//   if (!file) {
//       console.error('No file selected');
//       return;
//   }

//   const formData = new FormData();
//   formData.append('file', file);

//   try {
//       const response = await fetch('http://localhost:8080/api/v1/upload', {
//           method: 'POST',
//           body: formData,
//       });

//       if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const result = await response.json();
//       console.log(result);
//       setState('uploaded');
//   } catch (error) {
//       console.error('Upload failed:', error);
//       setState('error');
//   }
// }