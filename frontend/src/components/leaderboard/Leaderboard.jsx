import React, { useState } from "react";
import { Button } from "@mui/material";
import getLeaderboardData from "../API/getLeaderboardData";
import MostTemplate from "./MostTemplate";

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  const fetchLeaderboard = async () => {
    try {
      const data = await getLeaderboardData();
      const transformedData = data.map((item) => ({
        name: item.value.person,
        stats: {
          cope: item.value.cope,
          tila: item.value.tila,
          bojoing: item.value.bojoing,
          sekavuus: item.value.sekavuus,
          turvotus: item.value.turvotus,
        },
      }));

      console.log(transformedData);

      setLeaderboardData(transformedData);
    } catch (error) {
      console.error("Error fetching leaderboard data:", error);
    }
  };

  return (
    <div>
      {leaderboardData.length === 0 ? (
        <p style={{ color: "white" }}>No people</p>
      ) : (
        <div>
          <p>Yes people</p>
        </div>
      )}
      <Button onClick={fetchLeaderboard}>Leaderboard get</Button>
      <MostTemplate
        name="Tila"
        stats={leaderboardData.map(({ name, stats }) => ({
          person: name,
          cope: stats.tila,
        }))}
      />
      <MostTemplate
        name="Cope"
        stats={leaderboardData.map(({ name, stats }) => ({
          person: name,
          cope: stats.cope,
        }))}
      />
    </div>
  );
};

export default Leaderboard;
