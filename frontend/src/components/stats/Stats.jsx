import React, { useState, useEffect } from "react";
import { Button, MenuItem, TextField } from "@mui/material/";

import SliderTila from "../sliders/SliderTila";
import SliderCope from "../sliders/SliderCope";
import SliderBojoing from "../sliders/SliderBojoing";
import SliderSekavuus from "../sliders/SliderSekavuus";
import SliderTurvotus from "../sliders/SliderTurvotus";

import sendDataToBackend from "../API/submitButtonPressed";
import getPeople from "../API/getPeople";

const Stats = () => {
  const [tilaValue, setTilaValue] = useState(5);
  const [copeValue, setCopeValue] = useState(5);
  const [bojoingValue, setBojoingValue] = useState(2);
  const [sekavuusValue, setSekavuusValue] = useState(4);
  const [turvotusValue, setTurvotusValue] = useState(5);
  const [selectedPerson, setSelectedPerson] = useState("");
  const [namesArray, setNamesArray] = useState([]);

  useEffect(() => {
    async function fetchPeople() {
      let people = await getPeople();
      setNamesArray(people.map((obj) => obj.name));
      console.log("fetched people", namesArray);
    }

    fetchPeople();
  }, []);

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
          backgroundColor: "white",
          borderRadius: 4,
          marginTop: 30,
          marginBottom: 10,
        }}
        SelectProps={{
          style: {
            color: "black",
          },
        }}
      >
        {namesArray.map((person) => (
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
        style={{ marginTop: 10 }}
        onClick={submitClicked}
      >
        Submit
      </Button>
    </div>
  );
};

export default Stats;
