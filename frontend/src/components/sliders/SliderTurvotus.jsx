import React, { useState } from "react";
import SliderTemplate from "./SliderTemplate";

const SliderTurvotus = ({ onSliderChange }) => {
  const turvotusMarks = [
    { value: 0, label: "0" },
    { value: 2, label: "2" },
    { value: 4, label: "4" },
    { value: 6, label: "6" },
    { value: 8, label: "8" },
    { value: 10, label: "10" },
  ];

  const [turvotusValue, setTurvotusValue] = useState(2);

  const handleTurvotusChange = (event, newValue) => {
    setTurvotusValue(newValue);
    onSliderChange(newValue);
  };

  return (
    <>
      <SliderTemplate
        value={turvotusValue}
        onChange={handleTurvotusChange}
        marks={turvotusMarks}
        stat={"turvotus: "}
        min={0}
        max={10}
      />
    </>
  );
};

export default SliderTurvotus;
