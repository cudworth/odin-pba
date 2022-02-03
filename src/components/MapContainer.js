import "./MapContainer.css";
import OpenLayersMap from "./OpenLayersMap";

function MapContainer(props) {
  return (
    <div className="MapContainer grow">
      <nav>
        <a>Home</a>
        <a>Public Beaches</a>
        <a>Search Results</a>
      </nav>
      <h2>Find Public Beaches: Search Results</h2>
      <OpenLayersMap />
    </div>
  );
}

export default MapContainer;
