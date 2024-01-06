import { Slider } from "@mui/material";

function App() {
  return (
    <div className="App">
      <div className="bg-gray-500">
        <Slider
          aria-label="Temperature"
          defaultValue={30}
          valueLabelDisplay="auto"
          step={10}
          marks
          min={10}
          max={110}
        />
        <Slider defaultValue={30} step={10} marks min={10} max={110} disabled />
      </div>
    </div>
  );
}

export default App;
