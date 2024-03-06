interface Props {
  ageRange: [min: number, max: number];
  handleAge: (val: number, index: 0 | 1) => void;
}

export const AgePreference: React.FC<Props> = ({ ageRange, handleAge }) => {
  return (
    <div className="flex flex-col pl-8 mb-4">
      <div>
        <div className="italic">Min age</div>
        <input
          type="range"
          className="ageSlider"
          min={16}
          max={80}
          value={ageRange[0]}
          onInput={(e) => handleAge(e.currentTarget.valueAsNumber, 0)}
        />
      </div>
      <div>
        <div className="italic">Max age</div>
        <input
          type="range"
          className="ageSlider"
          min={16}
          max={80}
          value={ageRange[1]}
          onInput={(e) => handleAge(e.currentTarget.valueAsNumber, 1)}
        />
      </div>
    </div>
  );
};
