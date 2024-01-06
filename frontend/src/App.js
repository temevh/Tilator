import React from "react";
import { Slider, Button } from "@mui/material";

// Define the common style for sliders
const sliderStyle = {
  marginBottom: 16,
  width: 300,
};

// Tila, cope, sekavuus, kenergy, turvotus
function App() {
  const tilaMarks = [
    { value: 0, label: "0" },
    { value: 2, label: "2" },
    { value: 4, label: "4" },
    { value: 6, label: "6" },
    { value: 8, label: "8" },
    { value: 10, label: "10" },
  ];

  const [sliderValue, setSliderValue] = React.useState(5);

  const handleChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  const handleSubmit = async () => {
    try {
      // Make an HTTP POST request to your backend
      const response = await fetch("http://localhost:8000/api/post-stat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ value: sliderValue }),
      });

      if (response.ok) {
        console.log("Stat submitted successfully");
      } else {
        console.error("Failed to submit stat");
      }
    } catch (error) {
      console.error("Error submitting stat:", error);
    }
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
      <Slider
        value={sliderValue}
        onChange={handleChange}
        valueLabelDisplay="auto"
        marks={tilaMarks}
        min={0}
        max={10}
        style={sliderStyle}
      />
      <p style={{ color: "white" }}>{sliderValue}</p>

      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: 50 }}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </div>
  );
}

export default App;
