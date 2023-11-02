import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Home />
          <Routes>
            <Route path="/Home" element={<Home />}></Route>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
