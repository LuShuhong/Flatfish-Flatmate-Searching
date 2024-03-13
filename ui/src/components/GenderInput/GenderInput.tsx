export const GenderInput: React.FC = () => {
  return (
    <div className="w-30%">
      <label className="flex flex-col text-xs w-full">
        gender
        <input
          type="text"
          className="p-agePadding text-sm bg-[#E5E5E5] border border-gray-400 rounded-xl mt-1"
        />
      </label>
    </div>
  );
};
