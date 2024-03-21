interface Props {
  value: string;
  handleChange: (val: string) => void;
  warning: boolean;
  noBackground?: boolean;
}

export const Birthday: React.FC<Props> = ({
  value,
  handleChange,
  warning,
  noBackground,
}) => {
  return (
    <label className="flex flex-col justify-center w-full h-full">
      <div className="flex items-center">
        <div className="text-sm">
          birthday<sup className="text-red-600">*</sup>
        </div>
        {warning && (
          <div className="text-xs text-red-700 ml-1">
            This field is required
          </div>
        )}
      </div>
      <input
        type="date"
        className={`h-3/5 w-95% rounded-lg p-2 border border-gray-400 ${
          noBackground ? "bg-transparent" : "bg-[#E5E5E5]"
        } text-sm`}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      ></input>
    </label>
  );
};
