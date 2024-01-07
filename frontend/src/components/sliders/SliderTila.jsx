import React, { useState } from "react";
import SliderTemplate from "./SliderTemplate";

const SliderTila = ({ onSliderChange }) => {
  const tilaMarks = [
    { value: 0, label: "0" },
    { value: 2, label: "2" },
    { value: 4, label: "4" },
    { value: 6, label: "6" },
    { value: 8, label: "8" },
    { value: 10, label: "10" },
  ];

  const [tilaValue, setTilaValue] = useState(5);

  const handleTilaChange = (event, newValue) => {
    setTilaValue(newValue);
    onSliderChange(newValue);
  };

  return (
    <>
      <SliderTemplate
        value={tilaValue}
        onChange={handleTilaChange}
        marks={tilaMarks}
        stat={"Tila: "}
        min={0}
        max={10}
      />
    </>
  );
};

export default SliderTila;
