export const AgePreference: React.FC = () => {
  return (
    <div className="flex flex-col justify-center h-1/5 pl-8 mb-2">
      <div>
        <div className="italic">Min age</div>
        <input
          type="range"
          className="ageSlider"
          min={16}
          max={80}
          value={16}
        />
      </div>
      <div>
        <div className="italic">Max age</div>
        <input
          type="range"
          className="ageSlider"
          min={16}
          max={80}
          value={80}
        />
      </div>
    </div>
  );
};
