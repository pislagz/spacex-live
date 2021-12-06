import Globe from "react-globe.gl";
import { getLatLngObj } from "tle.js";
import * as THREE from "three";
import { useRef } from "react";
import { useWindowSize } from "app/hooks/useWindowSize";

export const Earth = ({ gData, handleClick, bp }) => {
  const globeEl = useRef(null);
  const { height } = useWindowSize();

  return (
    <Globe
      ref={globeEl}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
      customLayerData={gData}
      customLayerLabel={(d) => d.label}
      customThreeObject={(d) =>
        new THREE.Mesh(
          new THREE.SphereBufferGeometry(0.6),
          new THREE.MeshLambertMaterial({ color: "white" })
        )
      }
      customThreeObjectUpdate={(obj, d) => {
        Object.assign(
          obj.position,
          globeEl.current?.getCoords(
            getLatLngObj(d.lat).lat,
            getLatLngObj(d.lng).lng,
            d.alt * 0.1
          )
        );
      }}
      onCustomLayerClick={(point, event) => {
        handleClick(point);
      }}
      showGraticules
      height={bp === "xl" || bp === "2xl" || bp === "max" ? 900 : height}
    />
  );
};
