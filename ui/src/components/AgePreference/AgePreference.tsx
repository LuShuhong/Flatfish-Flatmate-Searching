export const AgePreference: React.FC = () => {
  return (
    <div className="flex flex-col justify-center h-1/5 pl-8">
      <div>
        <div className="">Min age</div>
        <input type="range" min={16} max={80} value={16} />
      </div>
      <div>
        <div className="">Max age</div>
        <input type="range" min={16} max={80} value={80} />
      </div>
    </div>
  );
};
