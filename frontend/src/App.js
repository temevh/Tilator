import React, { useState } from "react";
import SliderTila from "./components/sliders/SliderTila";
import Button from "@mui/material/Button";
import SliderCope from "./components/sliders/SliderCope";
import sendDataToBackend from "./components/API/submitButtonPressed";

function App() {
  const [tilaValue, setTilaValue] = useState(5);
  const [copeValue, setCopeValue] = useState(5);

  const handleTilaChange = (newValue) => {
    setTilaValue(newValue);
  };

  const handleCopeChange = (newValue) => {
    setCopeValue(newValue);
  };

  const submitClicked = () => {
    const statsMap = {
      tila: tilaValue,
      cope: copeValue,
    };
    sendDataToBackend({ stats: statsMap });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "black",
      }}
    >
      <SliderTila onSliderChange={handleTilaChange} />
      <SliderCope onSliderChange={handleCopeChange} />
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: 50 }}
        onClick={submitClicked}
      >
        Submit
      </Button>
    </div>
  );
}

export default App;
