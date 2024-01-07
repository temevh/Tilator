import React, { useState } from "react";
import SliderTemplate from "./SliderTemplate";
const SliderCope = ({ onSliderChange }) => {
  const copeMarks = [
    { value: 0, label: "0" },
    { value: 2, label: "2" },
    { value: 4, label: "4" },
    { value: 6, label: "6" },
    { value: 8, label: "8" },
    { value: 10, label: "10" },
  ];
  const [copeValue, setCopeValue] = useState(5);
  const handleCopeChange = (event, newValue) => {
    setCopeValue(newValue);
    onSliderChange(newValue);
  };
  return (
    <>
      <SliderTemplate
        value={copeValue}
        onChange={handleCopeChange}
        marks={copeMarks}
        stat={"Cope: "}
        min={0}
        max={10}
      />
    </>
  );
};
export default SliderCope;
