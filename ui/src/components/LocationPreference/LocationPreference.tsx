interface Props {
  location: string;
  handleLocation: (val: string) => void;
}

const locations = ["Select", "Deansgate", "Piccadily Station", "Oxford Road"];

export const LocationPreference: React.FC<Props> = ({
  location,
  handleLocation,
}) => {
  return (
    <div className="flex flex-col mb-4">
      <div className="flex w-full">
        <span className="flex-1 italic">Location:</span>
        <select
          className="border-2 w-9/12 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-300"
          value={location}
          onChange={(e) => handleLocation(e.target.value)}
        >
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
