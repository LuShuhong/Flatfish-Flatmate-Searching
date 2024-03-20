interface Props {
  fieldName: string;
  placeholder: string;
  type: string;
  mandatory?: boolean;
  value: string;
  handleChange: (val: string) => void;
  warning?: boolean;
  disabled?: boolean;
}

export const TextInput: React.FC<Props> = ({
  fieldName,
  placeholder,
  type,
  mandatory,
  value,
  handleChange,
  warning,
  disabled,
}) => {
  return (
    <label className="flex flex-col justify-center w-full h-full">
      <div className="flex items-center">
        <div className="text-sm">
          {fieldName}
          {mandatory && <sup className="text-red-600">*</sup>}
        </div>
        {warning && (
          <div className="text-xs text-red-700 ml-1">
            This field is required
          </div>
        )}
      </div>
      <input
        type={type}
        className="h-3/5 w-95% rounded-lg p-2 border border-gray-400 bg-[#E5E5E5] text-sm"
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        disabled={disabled}
      ></input>
    </label>
  );
};
