export const LocationPreference: React.FC = () => {
  return (
    <div className="flex flex-col justify-center h-1/5 pl-8">
      <div className="flex w-1/2">
        <span className="flex-1">Location:</span>
        <input type="text" className="border-2" />
      </div>
      <div>
        <div className="">Radius</div>
        <input type="range" min={16} max={80} value={16} />
      </div>
    </div>
  );
};
