import "./globalStyles.css";
import MainPage from "./pages/MainPage/MainPage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <MainPage />
    </div>
  );
}

export default App;
