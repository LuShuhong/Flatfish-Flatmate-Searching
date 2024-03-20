interface Props {
  fieldName: string;
  value: "SELECT" | "MALE" | "FEMALE";
  handleChange: (val: "SELECT" | "MALE" | "FEMALE") => void;
  warning: boolean;
}

export const OptionsInput: React.FC<Props> = ({
  fieldName,
  value,
  handleChange,
  warning,
}) => {
  return (
    <label className="flex flex-col justify-center w-full h-full">
      <div className="flex items-center ">
        <div className="text-sm">
          {fieldName}
          <sup className="text-red-600">*</sup>
        </div>
        {warning && (
          <div className="text-xs text-red-700">This field is required</div>
        )}
      </div>
      <select
        className="h-3/5 w-5/6 rounded-lg p-2 border border-gray-400 bg-[#E5E5E5] text-sm"
        value={value}
        onChange={(e) =>
          handleChange(e.target.value as "MALE" | "SELECT" | "FEMALE")
        }
      >
        <option value="SELECT">select</option>
        <option value="MALE">male</option>
        <option value="FEMALE">female</option>
      </select>
    </label>
  );
};
