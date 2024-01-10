import React, { useState } from "react";
import { Button, MenuItem, TextField } from "@mui/material/";

import SliderTila from "./components/sliders/SliderTila";
import SliderCope from "./components/sliders/SliderCope";
import SliderBojoing from "./components/sliders/SliderBojoing";
import SliderSekavuus from "./components/sliders/SliderSekavuus";
import SliderTurvotus from "./components/sliders/SliderTurvotus";

import sendDataToBackend from "./components/API/submitButtonPressed";
import getLeaderboardData from "./components/API/getLeaderboardData";

function App() {
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

  let leaderboardData;

  const fetchLeaderboard = async () => {
    leaderboardData = await getLeaderboardData();
    console.log(leaderboardData);
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
        justifyContent: "center",
        height: "100vh",
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
      <Button onClick={fetchLeaderboard}>Leaderboard get</Button>
      <p>{leaderboardData}</p>
    </div>
  );
}

export default App;
