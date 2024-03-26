interface Props {
  value: number;
  noBox?: boolean;
}

export const Age: React.FC<Props> = ({ value, noBox }) => {
  return (
    <label className="flex flex-col justify-center w-full h-full">
      <div className="text-sm">Age</div>

      {noBox ? (
        <div className="flex items-center h-3/5 w-5/6 rounded-lg p-2 text-sm text-gray-400">
          {value}
        </div>
      ) : (
        <input
          type="number"
          className="h-3/5 w-5/6 rounded-lg p-2 border border-gray-400 bg-[#E5E5E5] text-sm text-gray-400"
          value={value}
          disabled
        />
      )}
    </label>
  );
};
