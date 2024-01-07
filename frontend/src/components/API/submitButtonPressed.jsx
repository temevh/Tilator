const sendDataToBackend = async (props) => {
  const statsToSend = props.stats;

  console.log("CLICKED");
  console.log("Tila ", statsToSend.tila);
  console.log("Cope ", statsToSend.cope);
  try {
    const response = await fetch("http://localhost:5000/api/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        value: { cope: statsToSend.cope, tila: statsToSend.tila },
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send data to the server");
    }

    console.log("Data sent successfully");
  } catch (error) {
    console.error("Error:", error.message);
  }
};

export default sendDataToBackend;
