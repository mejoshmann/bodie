import './App.scss';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Heading from './components/heading/Heading';
import Gear from './components/gear/Gear';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Heading />
      <Routes>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Gear" element={<Gear/>}></Route>
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
