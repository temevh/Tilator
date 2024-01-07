import React from "react";
import { Slider } from "@mui/material";

const SliderTemplate = ({ value, onChange, marks, stat }) => {
  return (
    <>
      <Slider
        value={value}
        onChange={onChange}
        valueLabelDisplay="auto"
        marks={marks}
        min={0}
        max={10}
        style={sliderStyle}
      />
      <p style={{ color: "white" }}>
        {stat}
        {value}
      </p>
    </>
  );
};

const sliderStyle = {
  marginBottom: -4,
  width: 300,
};

export default SliderTemplate;
