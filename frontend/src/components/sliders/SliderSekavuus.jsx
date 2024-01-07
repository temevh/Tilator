import React, { useState } from "react";
import SliderTemplate from "./SliderTemplate";

const SliderSekavuus = ({ onSliderChange }) => {
  const SekavuusMarks = [
    { value: 0, label: "0" },
    { value: 2, label: "2" },
    { value: 4, label: "4" },
    { value: 6, label: "6" },
    { value: 8, label: "8" },
    { value: 10, label: "10" },
  ];

  const [SekavuusValue, setSekavuusValue] = useState(5);

  const handleSekavuusChange = (event, newValue) => {
    setSekavuusValue(newValue);
    onSliderChange(newValue);
  };

  return (
    <>
      <SliderTemplate
        value={SekavuusValue}
        onChange={handleSekavuusChange}
        marks={SekavuusMarks}
        stat={"Sekavuus: "}
        min={0}
        max={8}
      />
    </>
  );
};

export default SliderSekavuus;
