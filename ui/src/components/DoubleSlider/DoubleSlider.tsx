import React from "react";
import { Slider, Typography } from "@mui/material";

interface Props {
  handleFunction: (val: [min: number, max: number]) => void;
  range: [min: number, max: number];
  sliderName: string;
  sliderProperty: string;
  thumbNames: [string, string];
}

export const DoubleSlider: React.FC<Props> = ({
  handleFunction,
  range,
  sliderName,
  sliderProperty,
  thumbNames,
}) => {
  const [value, setValue] = React.useState<number[]>([range[0], range[1]]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    if (typeof newValue === "number") {
      handleFunction([newValue, newValue]);
    } else {
      handleFunction([newValue[0], newValue[1]]);
    }
  };

  return (
    <>
      <div className="italic">{sliderName}</div>
      <div className="flex justify-between">
        <Typography gutterBottom>
          {sliderProperty} Min: {value[0]}
        </Typography>
        <Typography align="right">
          {sliderProperty} Max: {value[1]}
        </Typography>
      </div>
      <Slider
        name={sliderName}
        aria-label={sliderName}
        getAriaLabel={(i) => thumbNames[i]}
        getAriaValueText={(value, i) => `${thumbNames[i]}: ${value}`}
        value={value}
        defaultValue={[20, 40]}
        onChange={handleChange}
        valueLabelDisplay="off"
        disableSwap
        min={range[0]}
        max={range[1]}
      />
    </>
  );
};
