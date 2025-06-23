import { Route, Routes } from "react-router-dom";
import Start from "./Component/Pages/Start";
import Play from "./Component/Pages/Play";
import Home from "./Component/Pages/home";


function App() {
  return (
    <>
      <Routes>
        <Route path="/play" element={<Play />} />
        <Route path="/start" element={<Start />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<div> not found </div>} />
      </Routes>

      
    </>
  );
}
export default App;
