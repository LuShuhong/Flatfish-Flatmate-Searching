export const EmailInput: React.FC = () => {
  return (
    <div className="h-1/5 w-full">
      <label className="text-xs w-full">
        email
        <input
          type="text"
          className="w-97.5% h-55% text-lg p-1 rounded-xl border border-gray-400 bg-[#E5E5E5] mt-1"
        />
      </label>
    </div>
  );
};
