import { useEffect } from "react";

interface NaverMapProps {
  lat: number;
  lng: number;
  placeName?: string;
  height?: string;
}

export default function NaverMap({
  lat,
  lng,
  placeName = "장소",
  height = "300px",
}: NaverMapProps) {
  useEffect(() => {
    const loadScript = () => {
      return new Promise<void>((resolve, reject) => {
        if (document.getElementById("naver-map-script")) {
          resolve();
          return;
        }

        const clientId = "nologu1ewo";
        const script = document.createElement("script");
        script.id = "naver-map-script";
        script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${clientId}`;
        script.onload = () => resolve();
        script.onerror = () => reject();
        document.head.appendChild(script);
      });
    };

    loadScript().then(() => {
      const { naver } = window as any;
      if (!naver) return;

      const location = new naver.maps.LatLng(lat, lng);
      const map = new naver.maps.Map("map", {
        center: location,
        zoom: 16,
      });

      new naver.maps.Marker({
        position: location,
        map,
        title: placeName,
      });
    });
  }, [lat, lng, placeName]);

  return (
    <div style={{ width: "100%", height }}>
      <div id="map" style={{ width: "100%", height: "100%" }} />
    </div>
  );
}
