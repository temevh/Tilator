import React, { useState } from "react";
import SliderTemplate from "./SliderTemplate";

const SliderBojoing = ({ onSliderChange }) => {
  const BojoingMarks = [
    { value: 0, label: "0" },
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
  ];

  const [bojoingValue, setbojoingValue] = useState(2);

  const handleBojoingChange = (event, newValue) => {
    setbojoingValue(newValue);
    onSliderChange(newValue);
  };

  return (
    <>
      <SliderTemplate
        value={bojoingValue}
        onChange={handleBojoingChange}
        marks={BojoingMarks}
        stat={"Bojoing: "}
        min={0}
        max={4}
      />
    </>
  );
};

export default SliderBojoing;
