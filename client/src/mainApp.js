import "./App.css";
import Home from "./components/home.js";
import About from "./components/about.js";
import Booking from "./components/booking.js";
import Menu from "./components/menu.js";
import CorpEvents from "./components/corp-pro-events.js";
import Leagues from "./components/leagues.js";
import MerchGCSocials from "./components/merch-gc-socials.js";
import Gallery from "./components/gallery.js";
import Footer from "./components/footer.js";

function MainApp() {
  return (
    <div className="mainApp">
      <Home />
      <About />
      <Booking />
      <Menu />
      <CorpEvents />
      <Leagues />
      <MerchGCSocials />
      <Gallery />
      <Footer />
    </div>
  );
}

export default MainApp;
