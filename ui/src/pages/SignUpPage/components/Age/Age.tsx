export const Age: React.FC = () => {
  return (
    <label className="flex flex-col justify-center w-full h-full">
      <div className="text-sm">age</div>
      <input
        type="number"
        className="h-3/5 w-5/6 rounded-lg p-2 border border-gray-400 bg-[#E5E5E5] text-sm"
        disabled
      />
    </label>
  );
};
