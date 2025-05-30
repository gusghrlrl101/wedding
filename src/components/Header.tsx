export default function Header() {
  const infoStyle = { margin: "9px 0", fontSize: "16px" };

  return (
    <header style={{ padding: "20px" }}>
      <img src="/main.jpeg" className="main-image" />
      <h1 style={{ margin: "40px 0 60px 0", fontSize: "30px" }}>
        손정민 <span style={{ fontSize: "0.6em" }}>♥</span> 임현호
      </h1>
      <h3 style={infoStyle}>2025년 8월 16일 토요일, 오후 2시 30분</h3>
      <h3 style={infoStyle}>더파티움 안양 7층 라포레홀</h3>
      <p style={{ margin: "60px 0 10px 0" }}>
        임용구, 홍영임의 아들 <strong>신랑 임현호</strong>
      </p>
      <p style={{ margin: "0 0 30px 0" }}>
        손관익, 김미경의 &nbsp;딸 &nbsp; <strong>신부 손정민</strong>
      </p>
    </header>
  );
}
