import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Gear from "./components/gear/Gear";
import About from "./components/about/About.jsx";
import Heading from "./components/heading/Heading";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Heading />
        {/* <Home /> */}
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/About" element={<About/>}></Route>
            <Route path="/Gear" element={<Gear/>}></Route>
            {/* <Route path="/Media" element={<Media/>}></Route>  */}
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
