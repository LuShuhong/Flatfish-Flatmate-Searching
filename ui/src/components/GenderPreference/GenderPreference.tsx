export const GenderPreference: React.FC = () => {
  return (
    <div className="flex flex-col justify-center h-1/5 w-1/3 pl-8 mb-1">
      <div className="italic">Gender:</div>
      <label className="flex items-center">
        <span className="flex-1 text-sm">&emsp; male</span>
        <input
          type="radio"
          id="male"
          className="h-1/2"
          value="male"
          name="gender"
        />
      </label>
      <label className="flex items-center">
        <span className="flex-1 text-sm">&emsp; female</span>
        <input
          type="radio"
          id="male"
          className="h-1/2 checked:bg-formElementColor"
          value="female"
          name="gender"
        />
      </label>
      <label className="flex items-center">
        <span className="flex-1 text-sm">&emsp; no preference</span>
        <input
          type="radio"
          id="male"
          className="h-1/2 checked:bg-formElementColor"
          value="no preference"
          name="gender"
        />
      </label>
    </div>
  );
};
