interface Props {
  gender: string;
  genderCode: "m" | "f" | "none";
  handleGender: (val: "m" | "f" | "none") => void;
}

export const GenderOption: React.FC<Props> = ({
  gender,
  genderCode,
  handleGender,
}) => {
  return (
    <label className="flex items-center">
      <span className="text-sm mr-4">{gender}</span>
      <input
        type="radio"
        className=""
        name="gender"
        onClick={() => handleGender(genderCode)}
        checked
      />
    </label>
  );
};
