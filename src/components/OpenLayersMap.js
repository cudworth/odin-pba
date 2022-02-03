import { Component } from "react";
import "./OpenLayersMap.css";

import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import GeoJSON from "ol/format/GeoJSON";
import { Vector as VectorSource } from "ol/source";
import { Vector as VectorLayer } from "ol/layer";
import { Circle as CircleStyle, Stroke, Style } from "ol/style";

import proj4 from "proj4";
import { register } from "ol/proj/proj4";
import { get as getProjection } from "ol/proj";

proj4.defs(
  "EPSG:2927",
  "+proj=lcc +lat_1=47.33333333333334 +lat_2=45.83333333333334 +lat_0=45.33333333333334 +lon_0=-120.5 +x_0=500000.0001016001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs"
);

register(proj4);

const waProjection = getProjection("EPSG:2927");

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
          source: new OSM(),
        }),
        vectorLayer,
      ],
      view: new View({
        projection: waProjection,
        center: [1017596.98118837, 827391.41697951],
        zoom: 9,
        minZoom: 9,
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
