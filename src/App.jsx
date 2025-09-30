import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import PageNotFound from "./Components/PageNotFound";
import Feed from "./pages/Feed";
import Protected from "./Components/Protected";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<Protected Component={Feed} />} />
        <Route
          path="/profile/:username"
          element={<Protected Component={Profile} />}
        />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
