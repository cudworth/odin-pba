import { Component } from "react";
import "./OpenLayersMap.css";

import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import { fromLonLat } from "ol/proj";
import GeoJSON from "ol/format/GeoJSON";
import { Vector as VectorSource } from "ol/source";
import { Vector as VectorLayer } from "ol/layer";
import { Circle as CircleStyle, Stroke, Style } from "ol/style";

const source = new VectorSource({
  url: "mapdata.geojson",
  format: new GeoJSON(),
});

const image = new CircleStyle({
  radius: 5,
  fill: null,
  stroke: new Stroke({ color: "red", width: 1 }),
});

const style = new Style({
  image: image,
});

const vectorLayer = new VectorLayer({
  source: source,
  style: style,
});

class OpenLayersMap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.map = this.map = new Map({
      target: "OpenLayersMap",
      layers: [
        new TileLayer({
          source: new XYZ({
            url: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          }),
        }),
        vectorLayer,
      ],
      view: new View({
        center: fromLonLat([-122.5075, 47.701667]),
        zoom: 9,
      }),
    });
  }

  render() {
    return (
      <div className="Map">
        <div id="OpenLayersMap"></div>
      </div>
    );
  }
}

export default OpenLayersMap;
