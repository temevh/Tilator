import React, { useState } from "react";
import { Button, MenuItem, TextField } from "@mui/material/";

import SliderTila from "../sliders/SliderTila";
import SliderCope from "../sliders/SliderCope";
import SliderBojoing from "../sliders/SliderBojoing";
import SliderSekavuus from "../sliders/SliderSekavuus";
import SliderTurvotus from "../sliders/SliderTurvotus";

import sendDataToBackend from "../API/submitButtonPressed";

const Stats = () => {
  const [tilaValue, setTilaValue] = useState(5);
  const [copeValue, setCopeValue] = useState(5);
  const [bojoingValue, setBojoingValue] = useState(2);
  const [sekavuusValue, setSekavuusValue] = useState(4);
  const [turvotusValue, setTurvotusValue] = useState(5);
  const [selectedPerson, setSelectedPerson] = useState("");

  const people = ["Juppe15", "Big Stunna", "Nikokaporotta", "Teme", "Eekki"];

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

  const handleTurvotusChange = (newValue) => {
    setTurvotusValue(newValue);
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
      turvotus: turvotusValue,
    };
    sendDataToBackend({ stats: statsMap });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "black",
        padding: 20,
        height: "85.1vh",
      }}
    >
      <TextField
        select
        label="Henkilö"
        variant="filled"
        value={selectedPerson}
        onChange={(e) => changeSelectedPerson(e.target.value)}
        style={{
          width: 200,
          backgroundColor: "gray",
          border: "2px blue solid",
          borderRadius: 4,
        }}
        SelectProps={{
          style: {
            color: "black",
          },
        }}
      >
        {people.map((person) => (
          <MenuItem key={person} value={person} style={{ color: "black" }}>
            {person}
          </MenuItem>
        ))}
      </TextField>
      <SliderTila onSliderChange={handleTilaChange} />
      <SliderCope onSliderChange={handleCopeChange} />
      <SliderBojoing onSliderChange={handleBojoingChange} />
      <SliderSekavuus onSliderChange={handleSekavuusChange} />
      <SliderTurvotus onSliderChange={handleTurvotusChange} />
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
};

export default Stats;
