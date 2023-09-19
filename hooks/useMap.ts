// SWR을 이용해서 naver.map 을 전역으로 참조 가능하도록
//map 객첼르 보관
import { mutate } from "swr";
import { NaverMap } from '@/types/map';
import { useCallback } from "react";

import { Cordinates } from "@/types/info";
export const INITIAL_CENTER: Cordinates = [37.3595704, 127.105399];
export const INITIAL_ZOOM = 10;
export const INITIAL_MIM = 6;
// 네이버 맵 전역 저장하기

export const MAP_KEY = "/map";
const useMap = () => {
  const initializeMap = useCallback((map: NaverMap) => {
    // 지도를 보관한다.
    mutate(MAP_KEY, map);
  }, []);
  return {
    initializeMap,
  };
};
export default useMap;
