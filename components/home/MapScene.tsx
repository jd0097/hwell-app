import React from "react";
import Map from "./Map";
import Markers from "./Markers";
import useMap from "@/hooks/useMap";
import { NaverMap } from "@/types/map";

//Marker 를 그려야 합니다
//Marker 는 naver.map 객체에 그려야 합니다. (전역참조)

const MapScene = () => {
  const {initializeMap} = useMap()
  const onLoadMap = (map:NaverMap) => {
    initializeMap(map)
  };
  return (
    <>
      <Map onLoad={onLoadMap} />
      <Markers />
    </>
  );
};

export default MapScene;
