import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import getLeaderboardData from "../API/getLeaderboardData";
import MostTemplate from "./MostTemplate";
import styled from "@emotion/styled";

const LeaderboardContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    fetchLeaderboard();
  });

  const fetchLeaderboard = async () => {
    try {
      const data = await getLeaderboardData();
      const uniqueNames = {}; // Object to store unique names
      const transformedData = [];

      data.forEach((item) => {
        const name = item.value.person;

        // Check if name is already processed
        if (!uniqueNames[name]) {
          uniqueNames[name] = true; // Mark name as processed
          transformedData.push({
            name,
            stats: {
              cope: item.value.cope,
              tila: item.value.tila,
              bojoing: item.value.bojoing,
              sekavuus: item.value.sekavuus,
              turvotus: item.value.turvotus,
            },
          });
        }
      });

      setLeaderboardData(transformedData);
    } catch (error) {
      console.error("Error fetching leaderboard data:", error);
    }
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Button
        onClick={fetchLeaderboard}
        style={{ fontWeight: "bold", fontSize: 18, color: "white" }}
      >
        Refresh leaderboard
      </Button>
      <LeaderboardContainer>
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
        <MostTemplate
          name="Hölmöys"
          stats={leaderboardData.map(({ name, stats }) => ({
            person: name,
            cope: stats.bojoing,
          }))}
        />
        <MostTemplate
          name="Sekavuus"
          stats={leaderboardData.map(({ name, stats }) => ({
            person: name,
            cope: stats.sekavuus,
          }))}
        />
        <MostTemplate
          name="Turvotus"
          stats={leaderboardData.map(({ name, stats }) => ({
            person: name,
            cope: stats.turvotus,
          }))}
        />
      </LeaderboardContainer>
    </div>
  );
};

export default Leaderboard;
