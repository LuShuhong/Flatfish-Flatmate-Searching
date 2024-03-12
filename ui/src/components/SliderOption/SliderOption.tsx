interface Props {
  sliderName: string;
  value: number;
  range: [min: number, max: number];
  index: 0 | 1;
  handleFunction: (val: number, index: 0 | 1) => void;
}

export const SliderOption: React.FC<Props> = ({
  sliderName,
  value,
  range,
  index,
  handleFunction,
}) => {
  return (
    <div>
      <div className="italic">{sliderName}</div>
      <div className="flex items-center justify-between">
        <input
          type="range"
          className="ageSlider"
          min={range[0]}
          max={range[1]}
          value={value}
          onInput={(e) => handleFunction(e.currentTarget.valueAsNumber, index)}
        />
        <div className="">{value}</div>
      </div>
    </div>
  );
};
