const addPersonToDb = async (props) => {
  const person = props.name;
  console.log("adding", person);

  try {
    const response = await fetch("http://localhost/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: person,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send 'add person' data to the server");
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
};

export default addPersonToDb;
