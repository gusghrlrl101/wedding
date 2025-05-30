export default function Parking() {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "10px" }}>🚗 주차 정보</h2>
      <p className="link" style={{ margin: "0 20px", fontWeight: "normal" }}>
        <p>
          2시간 무료 주차입니다.
          <br />
          주차 등록은 7층에서 태블릿으로 할 수 있어요.
        </p>
        <p>
          <p style={{ marginBottom: "0" }}>
            예식장 건물 만차시 가까운 주차장에
            <br />
            주차하실 수 있도록 안내드릴 예정입니다.
          </p>
          <p style={{ color: "grey", marginTop: "5px" }}>
            (매우 가깝습니다! 도보 1~3분)
          </p>
        </p>
      </p>
    </div>
  );
}
