interface Props {
  handleGender: (val: "m" | "f" | "na") => void;
}

export const GenderPreference: React.FC<Props> = ({ handleGender }) => {
  return (
    <div className="flex flex-col w-1/3 pl-8 mt-2 mb-4">
      <div className="italic">Gender:</div>
      <label className="flex items-center">
        <span className="flex-1 text-sm ml-4">male</span>
        <input
          type="radio"
          id="male"
          className="h-1/2"
          name="gender"
          onClick={() => handleGender("m")}
        />
      </label>
      <label className="flex items-center">
        <span className="flex-1 text-sm ml-4">female</span>
        <input
          type="radio"
          id="male"
          className="h-1/2 checked:bg-formElementColor"
          name="gender"
          onClick={() => handleGender("f")}
        />
      </label>
      <label className="flex items-center">
        <span className="flex-1 text-sm ml-4">no preference</span>
        <input
          type="radio"
          id="male"
          className="h-1/2 checked:bg-formElementColor"
          name="gender"
          onClick={() => handleGender("na")}
        />
      </label>
    </div>
  );
};
