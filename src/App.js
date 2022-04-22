import "./App.css";
import Home from "./components/home.js";
import About from "./components/about.js";
import Booking from "./components/booking.js"

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Booking/>
    </div>
  );
}

export default App;
