interface Props {
  fieldName: string;
}

export const NameInput: React.FC<Props> = ({ fieldName }) => {
  return (
    <div className="w-1/2 h-full text-xs">
      <label className="">
        {fieldName}
        <input
          type="text"
          className="w-95% h-55% text-lg p-1 rounded-xl border border-gray-400 bg-[#E5E5E5] mt-1"
        />
      </label>
    </div>
  );
};
