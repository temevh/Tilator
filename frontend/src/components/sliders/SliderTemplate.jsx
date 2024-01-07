import React from "react";
import { Slider } from "@mui/material";

const SliderTemplate = (props) => {
  const [sliderValue, setSliderValue] = React.useState(5);

  const handleChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  return (
    <>
      <Slider
        value={sliderValue}
        onChange={handleChange}
        valueLabelDisplay="auto"
        marks={props.marks}
        min={0}
        max={10}
        style={sliderStyle}
      />
      <p style={{ color: "white" }}>
        {props.stat}
        {sliderValue}
      </p>
    </>
  );
};

const sliderStyle = {
  marginBottom: -4,
  width: 300,
};

export default SliderTemplate;
