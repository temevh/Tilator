const getLeaderboardData = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/data", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data (leaderboardData)");
    }

    console.log("Data sent successfully");
    return response;
  } catch (error) {
    console.error("Error", error.message);
    throw error; // Re-throw the error for higher-level handling
  }
};

export default getLeaderboardData;
