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

  const sendDataToBackend = async () => {
    console.log("CLICKED");
    try {
      const response = await fetch("http://localhost:5000/api/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ value: sliderValue }), // Wrap sliderValue in an object
      });

      if (!response.ok) {
        throw new Error("Failed to send data to the server");
      }

      console.log("Data sent successfully");
    } catch (error) {
      console.error("Error:", error.message);
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
        onClick={sendDataToBackend}
      >
        Submit
      </Button>
    </div>
  );
}

export default App;
