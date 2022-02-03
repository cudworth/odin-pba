import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import MapContainer from "./components/MapContainer";
import InfoBar from "./components/InfoBar.js";

function App() {
  return (
    <div className="App col">
      <Header />
      <div className="row grow">
        <NavBar />
        <MapContainer />
        <InfoBar />
      </div>
    </div>
  );
}

export default App;
