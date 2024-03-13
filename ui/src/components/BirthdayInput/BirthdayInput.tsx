export const BirthdayInput: React.FC = () => {
  return (
    <div className="h-1/5 w-full">
      <label className="flex flex-col text-xs w-full">
        birthday
        <input
          type="date"
          className="w-2/5 h-55% p-3 text-xs bg-[#E5E5E5] border border-gray-400 rounded-xl mt-1"
        />
      </label>
    </div>
  );
};
