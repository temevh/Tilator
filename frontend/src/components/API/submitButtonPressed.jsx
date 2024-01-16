const sendDataToBackend = async (props) => {
  const statsToSend = props.stats;

  try {
    const response = await fetch("http://localhost:5000/api/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        value: {
          person: statsToSend.person,
          cope: statsToSend.cope,
          tila: statsToSend.tila,
          bojoing: statsToSend.bojoing,
          sekavuus: statsToSend.sekavuus,
          turvotus: statsToSend.turvotus,
        },
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send data to the server");
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
};

export default sendDataToBackend;
