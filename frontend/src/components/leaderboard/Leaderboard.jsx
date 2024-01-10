import getLeaderboardData from "../API/getLeaderboardData";
import { Button } from "@mui/material";

const Leaderboard = () => {
  let leaderboardData;

  const fetchLeaderboard = async () => {
    leaderboardData = await getLeaderboardData();
    console.log(leaderboardData);

    refreshLeaderboard();
  };

  function refreshLeaderboard() {}

  return <Button onClick={fetchLeaderboard}>Leaderboard get</Button>;
};

export default Leaderboard;
