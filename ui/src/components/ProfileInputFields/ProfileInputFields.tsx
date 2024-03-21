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
import { Form } from "react-router-dom";
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
  const [file, setFile] = useState<File | undefined>();
  const [preview, setPreview] = useState<string |ArrayBuffer | null>(null);
  
  // const handleSaveProfile = () => {
  //   setDeactivate(() => true);
  //   // http://localhost:8080/api/v1
  //   // https://flatfish-backend.pq46c.icekube.ics.cloud/api/v1
  //   post("http://localhost:8080/api/v1", {
  //     userId: user.email,
  //     name: user.name,
  //     decription: "temp",
  //     birthday: user.birthday,
  //     age: user.age,
  //     userGender:
  //       user.gender === "m" ? "MALE" : user.gender === "f" ? "FEMALE" : "none",
  //     instagram: user.instagram,
  //   });
  // };

  const handleSaveProfile = async () => {

    if (!file) {
      console.log("No file selected.");
      return;
    }
  
    const formData = new FormData();
    formData.append("userId", user.email ?? "");
    formData.append("name", user.name ?? "");
    formData.append("description", "temp");
    formData.append("birthday", user.birthday ?? "");
    formData.append("age", user.age?.toString() ?? ""); 
    formData.append("userGender", user.gender === "m" ? "MALE" : user.gender === "f" ? "FEMALE" : "none");
    formData.append("instagram", user.instagram ?? "");
    formData.append("picture", file); // Append the file
  
    try {
      const response = await fetch("http://localhost:8080/api/v1/users", { 
        method: "POST",
        body: formData, // No headers are needed as 'Content-Type' will be set to 'multipart/form-data' automatically
      });
  
      if (response.ok) {
        console.log("Profile saved successfully");
        setDeactivate(true); // Assuming you want to deactivate some UI element upon successful save
        // Handle successful save (e.g., navigate to another page or show a success message)
      } else {
        console.error("Failed to save profile");
        // Handle failure (e.g., show an error message)
      }
    } catch (error) {
      console.error("Error submitting form", error);
      // Handle error (e.g., show an error message)
    }
  };

  function handleOnChange(e: React.FormEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement & {
      files: FileList;
    }
    setFile(target.files[0]);

    const file = new FileReader;

    file.onload = function() {
      // console.log('file', file.result);
      setPreview(file.result);
    }

    file.readAsDataURL(target.files[0])
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
      <div className="mb-5">
        <label htmlFor="message">Image</label>
        <input 
          type="file" 
          name="image" 
          accept="image/png, image/jpg" 
          onChange={handleOnChange}
          multiple />
        <img src={preview ? preview.toString() : undefined} alt="" />
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
//     alert('No file selected!');
//     return;
//   }

//   const formData = new FormData();
//   formData.append('file', file);

//   const response = await fetch('' , {
//     method: 'POST',
//     body: formData,
//   });

//   console.log('file', file)
//   setState('sent');

//   if (response.ok) {
//     const result = await response.json();
//     console.log('Upload successful: ', result);
//     setState('success')
//   } else {
//     console.error('Upload failed: ', response);
//     setState('error');
//   }
// }
