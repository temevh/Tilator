import React from "react";
import SliderTemplate from "./SliderTemplate";

const SliderCope = () => {
  const copeMarks = [
    { value: 0, label: "0" },
    { value: 2, label: "2" },
    { value: 4, label: "4" },
    { value: 6, label: "6" },
    { value: 8, label: "8" },
    { value: 10, label: "10" },
  ];
  return (
    <>
      <SliderTemplate marks={copeMarks} stat={"Cope: "} />
    </>
  );
};

export default SliderCope;
