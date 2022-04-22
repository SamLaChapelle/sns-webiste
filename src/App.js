import "./App.css";
import Home from "./components/home.js";
import About from "./components/about.js";
import Booking from "./components/booking.js";
import CorpEvents from "./components/corp-pro-events.js";

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Booking/>
      <CorpEvents/>
    </div>
  );
}

export default App;
