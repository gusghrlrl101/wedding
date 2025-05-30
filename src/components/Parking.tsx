export default function Parking() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h3 style={{ marginBottom: "10px" }}>🚗 주차 정보</h3>
      <p className="link" style={{ margin: "0 40px" }}>
        2시간 무료 주차입니다.
        <br />
        주차 등록은 7층에서 태블릿으로 할 수 있어요.
        <br />
        <br />
        예식장 건물 만차시 가까운 주차장에
        <br />
        주차하실 수 있도록 안내드릴 예정입니다.
        <p style={{ color: "grey", marginTop: "0" }}>
          (매우 가깝습니다! 도보 1~3분)
        </p>
      </p>
    </div>
  );
}
