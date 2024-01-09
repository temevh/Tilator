const getLeaderboardData = async () => {
  try {
    const response = await fetch("https://localhost:5000/api/data", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data (leaderboardData)");
    }

    console.log("Data sent succesfully");
  } catch (error) {
    console.log("Error", error.message);
  }
};

export default getLeaderboardData;
