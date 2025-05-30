import { useEffect } from "react";

interface MapProps {
  lat: number;
  lng: number;
  placeName?: string;
  height?: string;
}

export default function Map({
  lat,
  lng,
  placeName = "장소",
  height = "300px",
}: MapProps) {
  const encodedPlace = encodeURIComponent(placeName);

  const naverUrl = `nmap://search?query=${encodedPlace}`;
  const kakaoUrl = `kakaomap://search?q=${encodedPlace}&p=${lat},${lng}`;
  const tmapUrl = `tmap://search?name=${encodedPlace}&lon=${lng}&lat=${lat}`;

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
        disableDoubleTapZoom: true,
        pinchZoom: true,
        draggable: false,
      });

      const marker = new naver.maps.Marker({
        position: location,
        map,
        title: placeName,
      });

      var contentString = [
        "<div style='padding: 5px;'>",
        "<h3 style='margin:5px; font-size: 0.9em;'><strong>더파티움 안양</strong></h3>",
        "<p style='margin:5px; font-size: 0.9em;'>4호선 평촌역 3번 출구</p>",
        "</div>",
      ].join("");

      const infoWindow = new naver.maps.InfoWindow({
        content: contentString,
      });
      infoWindow.open(map, marker);
    });
  }, [lat, lng, placeName]);

  return (
    <>
      <div style={{ height, padding: "80px 0 0 0", margin: "20px" }}>
        <div id="map" style={{ width: "100%", height: "100%" }} />
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h3 style={{ marginBottom: "10px" }}>📍지도 앱으로 보기</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <a href={naverUrl} className="link">
            네이버 지도
          </a>
          <a href={kakaoUrl} className="link">
            카카오 지도
          </a>
          <a href={tmapUrl} className="link">
            T맵
          </a>
        </div>
      </div>
    </>
  );
}
