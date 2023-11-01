import './App.scss';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Heading from './components/heading/Heading';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="overlay">
      <Heading />
      <Routes>
        <Route path="/Home" element={<Home/>}></Route>
      </Routes>
</div>
    </div>
    </BrowserRouter>
  );
}

export default App;
