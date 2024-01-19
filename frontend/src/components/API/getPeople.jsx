const getPeople = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/users/getPeople", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (error) {
    console.log("Error", error.message);
    throw error;
  }
};

export default getPeople;
