interface Props {
  fieldName: string;
}

export const OptionsInput: React.FC<Props> = ({ fieldName }) => {
  return (
    <label className="flex flex-col justify-center w-full h-full">
      <div className="text-sm">
        {fieldName}
        <sup className="text-red-600">*</sup>
      </div>
      <select className="h-3/5 w-5/6 rounded-lg p-2 border border-gray-400 bg-[#E5E5E5] text-sm">
        <option value="SELECT">select</option>
        <option value="MALE">male</option>
        <option value="FEMALE">female</option>
      </select>
    </label>
  );
};
