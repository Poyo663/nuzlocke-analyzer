import { Routes, Route } from "react-router-dom";

import NavBar from "./routes/navbar/navbar.route";
import WelcomePage from "./routes/welcome-page/welcome-page.route";
import HomePage from "./routes/home-page/home-page.route";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/home" element={<NavBar />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
