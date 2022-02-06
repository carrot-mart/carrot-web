import { Link } from "react-router-dom";

import Navigation from "./components/Navigation";
import MainPage from "./pages/MainPage/MainPage";
import Bottom from "./components/Bottom";

function App() {
  return (
    <>
      <Navigation />
      <MainPage />
      <Bottom />
    </>
  );
}

export default App;
