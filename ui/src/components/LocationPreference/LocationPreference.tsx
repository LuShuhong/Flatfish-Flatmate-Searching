interface Props {
  location: string;
  handleLocation: (val: string) => void;
}

export const LocationPreference: React.FC<Props> = ({
  location,
  handleLocation,
}) => {
  return (
    <div className="flex flex-col pl-8 mb-4">
      <div className="flex w-70%">
        <span className="flex-1 italic">Location:</span>
        <input
          type="text"
          className="border-2 w-9/12"
          value={location}
          onChange={(e) => handleLocation(e.target.value)}
        />
      </div>
    </div>
  );
};
