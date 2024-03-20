interface Props {
  fieldName: string;
  placeholder: string;
  type: string;
  mandatory: boolean;
}

export const TextInput: React.FC<Props> = ({
  fieldName,
  placeholder,
  type,
  mandatory,
}) => {
  return (
    <label className="flex flex-col justify-center w-full h-full">
      <div className="text-sm">
        {fieldName}
        {mandatory && <sup className="text-red-600">*</sup>}
      </div>
      <input
        type={type}
        className="h-3/5 w-95% rounded-lg p-2 border border-gray-400 bg-[#E5E5E5] text-sm"
        placeholder={placeholder}
      ></input>
    </label>
  );
};
