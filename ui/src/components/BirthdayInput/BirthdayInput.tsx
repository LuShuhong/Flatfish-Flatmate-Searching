interface Props {
  birthday: string | undefined;
  handleUserBirthdate: (val: string) => void;
}

export const BirthdayInput: React.FC<Props> = ({
  birthday,
  handleUserBirthdate,
}) => {
  return (
    <div className="w-40%">
      <label className="flex flex-col text-xs w-full">
        birthday
        <input
          type="date"
          value={birthday}
          className="w-full h-55% p-3 text-xs bg-[#E5E5E5] border border-gray-400 rounded-xl mt-1"
          onChange={(e) => handleUserBirthdate(e.target.value)}
        />
      </label>
    </div>
  );
};
