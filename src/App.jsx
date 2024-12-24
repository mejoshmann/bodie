import "./App.scss";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Landing from "./components/landing/Landing";

function App() {
  return (
      <div className="App">
        <Landing/>
        <Home />
        <Footer/> 
      </div>
  );
}

export default App;
