import React from "react";
interface Props {
  gender: string;
  curGender: "MALE" | "FEMALE" | "UNSPECIFIED";
  genderCode: "MALE" | "FEMALE" | "UNSPECIFIED";
  handleGender: (val: "MALE" | "FEMALE" | "UNSPECIFIED") => void;
}

export const GenderOption: React.FC<Props> = ({
  gender,
  curGender,
  genderCode,
  handleGender,
}) => {
  return (
    <label className="flex items-center">
      <span className="text-md mr-4 font-roboto-condensed">{gender}</span>
      <input
        type="radio"
        className=""
        name="gender"
        onClick={() => handleGender(genderCode)}
        defaultChecked={curGender === genderCode ? true : false}
      />
    </label>
  );
};
