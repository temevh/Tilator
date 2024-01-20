import React from "react";
import Leaderboard from "./components/leaderboard/Leaderboard";
import Stats from "./components/stats/Stats";
import AddPerson from "./components/addperson/AddPerson";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        paddingTop: 100,
        overflow: "hidden",
      }}
    >
      <div>
        <Leaderboard />
        <Stats />
        <AddPerson />
      </div>
    </div>
  );
}

export default App;
