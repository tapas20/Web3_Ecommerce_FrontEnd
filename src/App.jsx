import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Body";
import Landing from "./Pages/Landing";

function App() {
  return (
    <div>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Landing />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
