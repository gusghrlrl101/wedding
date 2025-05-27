// src/components/AccountInfo.tsx

export default function AccountInfo() {
  return (
    <section
      style={{
        padding: "30px",
        backgroundColor: "#fffdf9",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "22px",
          marginBottom: "20px",
        }}
      >
        💌 마음 전하실 곳
      </h2>

      <div
        style={{
          maxWidth: "400px",
          margin: "0 auto",
          fontSize: "16px",
          lineHeight: "1.8",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <strong>신랑측</strong>
          <br />
          <span
            onClick={() => {
              navigator.clipboard.writeText("토스뱅크 1000-0688-1565");
              alert("계좌번호가 복사되었습니다!");
            }}
            style={{ cursor: "pointer", textDecoration: "underline" }}
          >
            토스뱅크 1000-0688-1565
          </span>
          <br />
          예금주: 임현호
        </div>

        <div>
          <strong>신부측</strong>
          <br />
          <span
            onClick={() => {
              navigator.clipboard.writeText("우리은행 1002-148-148984");
              alert("계좌번호가 복사되었습니다!");
            }}
            style={{ cursor: "pointer", textDecoration: "underline" }}
          >
            우리은행 1002-148-148984
          </span>
          <br />
          예금주: 손정민
        </div>
      </div>
    </section>
  );
}
