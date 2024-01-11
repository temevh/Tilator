import getLeaderboardData from "../API/getLeaderboardData";
import { Button } from "@mui/material";
import { useEffect } from "react";

const Leaderboard = () => {
  let leaderboardData;

  useEffect(() => {
    console.log("Fetched leaderboard data");
    fetchLeaderboard();
  });

  const fetchLeaderboard = async () => {
    leaderboardData = await getLeaderboardData();
    console.log(leaderboardData);

    refreshLeaderboard();
  };

  function refreshLeaderboard() {}

  return (
    <>
      <Button onClick={fetchLeaderboard}>Leaderboard get</Button>;
      <p>{leaderboardData}</p>
    </>
  );
};

export default Leaderboard;
