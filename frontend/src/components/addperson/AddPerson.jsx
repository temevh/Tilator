import { Button, TextField } from "@mui/material";
import addPersonToDb from "../API/addPersonToDb";
import { useState } from "react";

const AddPerson = () => {
  const [name, setName] = useState("");

  const addPersonClicked = () => {
    console.log("click");
    console.log(name);
    addPersonToDb({ name: name });
    setName("");
  };

  const updateName = (event) => {
    setName(event.target.value);
    console.log(name);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <TextField
        style={{ color: "white" }}
        onChange={updateName}
        value={name}
      ></TextField>
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: 10, marginBottom: 35 }}
        onClick={addPersonClicked}
      >
        Add Person
      </Button>
    </div>
  );
};

export default AddPerson;
