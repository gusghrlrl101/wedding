import React from "react";

interface MapLinksProps {
  lat: number;
  lng: number;
  placeName: string;
}

export default function MapLinks({ lat, lng, placeName }: MapLinksProps) {
  const encodedPlace = encodeURIComponent(placeName);

  const naverUrl = `nmap://search?query=${encodedPlace}`;
  const kakaoUrl = `kakaomap://search?q=${encodedPlace}&p=${lat},${lng}`;
  const tmapUrl = `tmap://search?name=${encodedPlace}&lon=${lng}&lat=${lat}`;

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h3>📍 지도 앱으로 보기</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <a href={naverUrl} style={linkStyle}>
          네이버 지도
        </a>
        <a href={kakaoUrl} style={linkStyle}>
          카카오 지도
        </a>
        <a href={tmapUrl} style={linkStyle}>
          T맵
        </a>
      </div>
    </div>
  );
}

const linkStyle: React.CSSProperties = {
  display: "inline-block",
  padding: "10px 16px",
  backgroundColor: "#f0f0f0",
  borderRadius: "8px",
  textDecoration: "none",
  color: "#333",
  fontWeight: "bold",
  fontSize: "14px",
};
