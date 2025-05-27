export default function Info() {
  return (
    <section style={{ padding: "20px" }}>
      <h2>예식 정보</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <strong>일시:</strong> 2025년 8월 16일 토요일 오후 2시 30분
        </li>
        <li>
          <strong>장소:</strong> 더파티움 안양 라포레홀 7층
        </li>
        <li>
          <strong>주소:</strong> 경기도 안양시 시민대로 311 금강스마트빌딩
        </li>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h3>🗓️ 캘린더에 일정 저장하기</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <a href="/wedding.ics" download className="link">
              기본 캘린더
            </a>
            <a
              href="https://www.google.com/calendar/render?action=TEMPLATE&text=임현호♥손정민 결혼식&dates=20250816T053000Z/20250816T073000Z&details=4호선 평촌역 3번 출구&location=더파티움 안양"
              className="link"
            >
              구글 캘린더
            </a>
          </div>
        </div>
      </ul>
    </section>
  );
}
