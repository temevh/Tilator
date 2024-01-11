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
      }}
    >
      <Stats />
      <div style={{ paddingLeft: 100 }}></div>
      <Leaderboard />
    </div>
  );
}

export default App;
