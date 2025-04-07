import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Body";
import Landing from "./Pages/LandingPage/Landing";
import ContactUs from "./Pages/ContactUs";
import TermAndCondition from "./Pages/T&C";
import Earn from "./Pages/Earn";
import BuyBitcoin from "./Pages/BuyBitcoin";
import Automotive from "./Pages/Automotive/automotive";
import Watches from "./Pages/Watches/Watches";
import Property from "./Pages/Property/Property";
import Sell from "./Pages/Sell/Sell";
import Sign from "./Pages/MyAccount/Sign";

function App() {
  return (
    <div>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Landing />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/terms" element={<TermAndCondition />} />
            <Route path="/earn" element={<Earn />} />
            <Route path="/buybitcoin" element={<BuyBitcoin />} />
            <Route path="/automotive" element={<Automotive />} />
            <Route path="/watches" element={<Watches />} />
            <Route path="/property" element={<Property />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/sign" element={<Sign />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
