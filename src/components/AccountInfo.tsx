import { useState } from "react";
import Account from "../utils/Account";

export default function AccountInfo() {
  const [expandedTab, setExpandedTab] = useState<"groom" | "bride" | null>(
    null
  );

  const accountStyle = {
    marginBottom: "16px",
  };
  const buttonStyle = {
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "10px",
  };

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

      <div>
        <a
          onClick={() =>
            setExpandedTab(expandedTab === "groom" ? null : "groom")
          }
          style={{
            ...buttonStyle,
            backgroundColor: expandedTab === "groom" ? "#f2c94c" : undefined,
          }}
          className="link"
        >
          신랑측 {expandedTab === "groom" ? "▲" : "▼"}
        </a>
        <a
          onClick={() =>
            setExpandedTab(expandedTab === "bride" ? null : "bride")
          }
          style={{
            ...buttonStyle,
            backgroundColor: expandedTab === "bride" ? "#f2c94c" : undefined,
          }}
          className="link"
        >
          신부측 {expandedTab === "bride" ? "▲" : "▼"}
        </a>
      </div>

      <div>
        {expandedTab === "groom" && (
          <div style={{ padding: "20px 0" }}>
            <div style={accountStyle}>
              <strong>신랑</strong>
              {Account({
                bankName: "토스뱅크",
                accountNumber: "1000-0688-1565",
              })}
              예금주: 임현호
            </div>
            <div style={accountStyle}>
              <strong>신랑 아버지</strong>
              {Account({
                bankName: "신한은행",
                accountNumber: "110-058-259853",
              })}
              예금주: 임용구
            </div>
            <div style={accountStyle}>
              <strong>신랑 어머니</strong>
              {Account({
                bankName: "국민은행",
                accountNumber: "209-21-1467-673",
              })}
              예금주: 홍영임
            </div>
          </div>
        )}
        {expandedTab === "bride" && (
          <div style={{ padding: "20px 0" }}>
            <div style={accountStyle}>
              <strong>신부</strong>
              {Account({
                bankName: "우리은행",
                accountNumber: "1002-148-148984",
              })}
              예금주: 손정민
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
