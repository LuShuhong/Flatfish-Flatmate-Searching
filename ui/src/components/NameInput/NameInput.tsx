interface Props {
  fieldName: string;
  value: string | undefined;
}

export const NameInput: React.FC<Props> = ({ fieldName, value }) => {
  return (
    <div className="w-1/2 h-full text-xs">
      <label className="text-xs w-full">
        {fieldName}
        <input
          type="text"
          className="w-95% h-55% text-lg p-1 rounded-xl border border-gray-400 bg-[#E5E5E5] mt-1"
          value={value}
        />
      </label>
    </div>
  );
};
