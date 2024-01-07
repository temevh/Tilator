import React, { useState } from "react";
import { Button, MenuItem, TextField } from "@mui/material/";

import SliderTila from "./components/sliders/SliderTila";
import SliderCope from "./components/sliders/SliderCope";
import SliderBojoing from "./components/sliders/SliderBojoing";
import SliderSekavuus from "./components/sliders/SliderSekavuus";

import sendDataToBackend from "./components/API/submitButtonPressed";

function App() {
  const [tilaValue, setTilaValue] = useState(5);
  const [copeValue, setCopeValue] = useState(5);
  const [bojoingValue, setBojoingValue] = useState(2);
  const [sekavuusValue, setSekavuusValue] = useState(4);
  const [selectedPerson, setSelectedPerson] = useState("");

  const people = ["Juho", "Aku", "Kapo", "Teemu", "Eekki"];

  const handleTilaChange = (newValue) => {
    setTilaValue(newValue);
  };

  const handleCopeChange = (newValue) => {
    setCopeValue(newValue);
  };

  const handleBojoingChange = (newValue) => {
    setBojoingValue(newValue);
  };

  const handleSekavuusChange = (newValue) => {
    setSekavuusValue(newValue);
  };

  const changeSelectedPerson = (newValue) => {
    setSelectedPerson(newValue);
  };

  const submitClicked = () => {
    const statsMap = {
      person: selectedPerson,
      tila: tilaValue,
      cope: copeValue,
      bojoing: bojoingValue,
      sekavuus: sekavuusValue,
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
      <TextField
        select
        label="Henkilö"
        value={selectedPerson}
        onChange={(e) => changeSelectedPerson(e.target.value)}
        style={{ width: 300 }}
        variant="standard"
        color="primary"
        InputProps={{
          style: {
            color: "white",
            backgroundColor: "black",
            borderColor: "primary",
          },
        }}
      >
        {people.map((person) => (
          <MenuItem key={person} value={person}>
            {person}
          </MenuItem>
        ))}
      </TextField>

      <SliderTila onSliderChange={handleTilaChange} />
      <SliderCope onSliderChange={handleCopeChange} />
      <SliderBojoing onSliderChange={handleBojoingChange} />
      <SliderSekavuus onSliderChange={handleSekavuusChange} />
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
