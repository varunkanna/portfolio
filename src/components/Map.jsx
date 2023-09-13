import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
    const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 1600
      }}
      style={{
        width: "100%", height:"100%"
      }}
    >
      <Geographies
        // geography={geoUrl}
        geography="/features.json"
        fill="#2c065d"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[2.3522, 48.8566]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Paris"}
        </text>
      </Annotation>
      <Annotation
        subject={[9.922515, 78.118141]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Madurai"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;

// import React from "react";
// import {
//   ComposableMap,
//   Geographies,
//   Geography,
//   Annotation,
//   ZoomableGroup
// } from "react-simple-maps";

// const MapChart = () => {
//   return (
//     <ComposableMap
//       projection="geoAzimuthalEqualArea"
//       projectionConfig={{
//         rotate: [-127.0, -73.0, 20],
//         center: [-25, -40],
//         scale: 800
//       }}
//       style={{
//                 width: "100%", height:"100%"
//               }}
//     >
//       <Geographies
//         geography="https://raw.githubusercontent.com/deldersveld/topojson/master/continents/asia.json"
//         // fill="#D6D6DA"
//         fill="#2c065d"
//         stroke="#FFFFFF"
// //         stroke="#FFFFFF"
//         strokeWidth={0.5}
//       >
//         {({ geographies }) =>
//           geographies.map((geo) => (
//             <Geography key={geo.rsmKey} geography={geo} />
//           ))
//         }
//       </Geographies>
//       <Annotation
//         subject={[78.35232, 11.85]}
//         dx={-90}
//         dy={-30}
//         connectorProps={{
//           stroke: "white",
//           strokeWidth: 3,
//           strokeLinecap: "round"
//         }}
//       >
//         <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
//           {"Madurai"}
//         </text>
//       </Annotation>
//       <Annotation
//         subject={[102.35232, 3.85]}
//         dx={-90}
//         dy={-30}
//         connectorProps={{
//           stroke: "white",
//           strokeWidth: 3,
//           strokeLinecap: "round"
//         }}
//       >
//         <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
//           {"Singapore"}
//         </text>
//       </Annotation>
//     </ComposableMap>
//   );
// };

// export default MapChart;