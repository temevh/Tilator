import React from "react";
import { Slider, Button } from "@mui/material";
import SliderTila from "./components/sliders/SliderTila";
import SliderCope from "./components/sliders/SliderCope";
import sendDataToBackend from "./components/API/submitButtonPressed";

// Tila, cope, sekavuus, kenergy, turvotus
function App() {
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
      <SliderTila />
      <SliderCope />
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: 50 }}
        onClick={sendDataToBackend}
      >
        Submit
      </Button>
    </div>
  );
}

export default App;
