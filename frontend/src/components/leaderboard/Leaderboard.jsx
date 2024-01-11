import getLeaderboardData from "../API/getLeaderboardData";
import { Button, colors } from "@mui/material";
import { useEffect, useState } from "react";

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  /*useEffect(() => {
    console.log("Fetched leaderboard data");
    fetchLeaderboard();
  });*/

  const fetchLeaderboard = async () => {
    try {
      const data = await getLeaderboardData();
      console.log(data);

      setLeaderboardData(data.map((item) => item.value));
    } catch (error) {
      console.error("Error fetching leaderboar data:", error);
    }
  };

  return (
    <>
      <Button onClick={fetchLeaderboard}>Leaderboard get</Button>
      <div>
        {leaderboardData.length === 0 ? (
          <p style={{ color: "white" }}>No people</p>
        ) : (
          <p>Yes people!</p>
        )}
      </div>
    </>
  );
};

export default Leaderboard;
