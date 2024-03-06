export const GenderPreference: React.FC = () => {
  return (
    <div className="flex flex-col w-1/3 pl-8 mt-2 mb-4">
      <div className="italic">Gender:</div>
      <label className="flex items-center">
        <span className="flex-1 text-sm ml-4">male</span>
        <input
          type="radio"
          id="male"
          className="h-1/2"
          value="male"
          name="gender"
        />
      </label>
      <label className="flex items-center">
        <span className="flex-1 text-sm ml-4">female</span>
        <input
          type="radio"
          id="male"
          className="h-1/2 checked:bg-formElementColor"
          value="female"
          name="gender"
        />
      </label>
      <label className="flex items-center">
        <span className="flex-1 text-sm ml-4">no preference</span>
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
