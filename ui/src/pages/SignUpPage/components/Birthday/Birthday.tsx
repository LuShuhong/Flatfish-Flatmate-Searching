interface Props {
  value: string;
  handleChange: (val: string) => void;
}

export const Birthday: React.FC<Props> = ({ value, handleChange }) => {
  return (
    <label className="flex flex-col justify-center w-full h-full">
      <div className="text-sm">
        birthday<sup className="text-red-600">*</sup>
      </div>
      <input
        type="date"
        className="h-3/5 w-95% rounded-lg p-2 border border-gray-400 bg-[#E5E5E5] text-sm"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      ></input>
    </label>
  );
};
