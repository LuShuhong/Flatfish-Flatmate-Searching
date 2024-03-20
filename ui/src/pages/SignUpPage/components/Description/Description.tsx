export const Description: React.FC = () => {
  return (
    <label className="flex flex-col justify-center w-full h-full">
      <div className="text-sm">description</div>
      <textarea className="h-3/5 w-95% rounded-lg p-2 border border-gray-400 bg-[#E5E5E5] text-sm resize-none"></textarea>
    </label>
  );
};
