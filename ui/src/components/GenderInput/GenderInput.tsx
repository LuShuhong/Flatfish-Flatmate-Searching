interface Props {
  gender: string | undefined;
  handleUserGender: (val: string) => void;
}

export const GenderInput: React.FC<Props> = ({ gender, handleUserGender }) => {
  return (
    <div className="w-30%">
      <label className="flex flex-col text-xs w-full">
        gender
        <select
          className="bg-[#E5E5E5] border border-gray-400 rounded-xl mt-1 text-lg p-2"
          defaultValue={gender}
          onChange={(e) => handleUserGender(e.target.value)}
        >
          <option value="select">select</option>
          <option value="m">male</option>
          <option value="f">female</option>
        </select>
      </label>
    </div>
  );
};
