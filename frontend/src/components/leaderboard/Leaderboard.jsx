import React, { useState } from "react";
import { Button } from "@mui/material";
import getLeaderboardData from "../API/getLeaderboardData";

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [mostCope, setMostCope] = useState("");

  const fetchLeaderboard = async () => {
    try {
      const data = await getLeaderboardData();
      console.log(data);

      setLeaderboardData(data);
    } catch (error) {
      console.error("Error fetching leaderboard data:", error);
    }
  };

  const calculateRankings = () => {
    const sortedData = [...leaderboardData].sort((a, b) => b.cope - a.cope);
    const rankings = {};

    sortedData.forEach((item, index) => {
      console.log(
        index > 0 ? rankings[sortedData[index - 1].value.person] : null
      );
    });

    return rankings;
  };

  const rankings = calculateRankings();

  return (
    <div>
      {leaderboardData.length === 0 ? (
        <p style={{ color: "white" }}>No people</p>
      ) : (
        <div>
          <h2 style={{ color: "white" }}>Leaderboard</h2>
          <ol>
            {leaderboardData.map((item, index) => (
              <li key={index} style={{ color: "white" }}>
                <strong style={{ color: "white" }}>{item.person}</strong> -
                Cope: {item.cope} - Rank: {rankings[item.person]}
              </li>
            ))}
          </ol>
        </div>
      )}
      <Button onClick={fetchLeaderboard}>Leaderboard get</Button>
    </div>
  );
};

export default Leaderboard;
