import React from "react";
// import { Slider, Typography } from "@mui/material";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
interface Props {
  handleFunction: (val: [min: number, max: number]) => void;
  range: [min: number, max: number];
  sliderName: string;
  sliderProperty: string;
  thumbNames: [string, string];
}

// Define Roboto Condensed font in your theme
const theme = createTheme({
  typography: {
    fontFamily: [
      "Roboto Condensed", // Replace this with the correct font family name
      "Arial",
      "sans-serif",
    ].join(","),
  },
});
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
      <div className="italic font-serif-display text-lg">{sliderName}</div>
      <div className="flex justify-between">
        <ThemeProvider theme={theme}>
          <Typography gutterBottom sx={{ fontFamily: "Roboto Condensed" }}>
            {sliderProperty} Min: {value[0]}
          </Typography>
          <Typography align="right" className="font-roboto-condensed">
            {sliderProperty} Max: {value[1]}
          </Typography>
        </ThemeProvider>
      </div>
      <Slider
        style={{ color: "#52847e" }}
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
