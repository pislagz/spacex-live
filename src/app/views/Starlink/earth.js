import Globe from "react-globe.gl";

export const Earth = ({ gData }) => (
  <Globe
    globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
    backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
    pointsData={gData}
    pointAltitude={0.001}
    pointColor="color"
    pointLabel="label"
    showGraticules
    pointRadius={0.35}
    height={900}
  />
);
