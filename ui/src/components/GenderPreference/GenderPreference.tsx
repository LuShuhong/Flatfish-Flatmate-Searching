export const GenderPreference: React.FC = () => {
  return (
    <div className="flex flex-col justify-center h-1/5 w-1/3 pl-8">
      Gender:
      <label className="flex">
        <span className="flex-1 text-sm">&emsp; male</span>
        <input type="radio" id="male" className="" value="male" name="gender" />
      </label>
      <label className="flex">
        <span className="flex-1 text-sm">&emsp; female</span>
        <input
          type="radio"
          id="male"
          className=""
          value="female"
          name="gender"
        />
      </label>
      <label className="flex">
        <span className="flex-1 text-sm">&emsp; no preference</span>
        <input
          type="radio"
          id="male"
          className=""
          value="no preference"
          name="gender"
        />
      </label>
    </div>
  );
};
