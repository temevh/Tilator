import React from "react";
import Leaderboard from "./components/leaderboard/Leaderboard";
import Stats from "./components/stats/Stats";

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
      </div>
    </div>
  );
}

export default App;
