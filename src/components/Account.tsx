import { useState } from "react";

export default function Account() {
  const [expandedTab, setExpandedTab] = useState<"groom" | "bride" | null>(
    null
  );

  const buttonStyle = {
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "10px 10px",
  };

  return (
    <p
      style={{
        padding: "20px",
        backgroundColor: "#fffdf9",
      }}
    >
      <h2>마음 전하실 곳</h2>
      <p>
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
      </p>

      {expandedTab === "groom" && (
        <>
          <p>
            <strong>신랑</strong>
            {AccountInfo({
              bankName: "토스뱅크",
              accountNumber: "1000-0688-1565",
            })}
            예금주: 임현호
          </p>
          <p>
            <strong>신랑 아버지</strong>
            {AccountInfo({
              bankName: "신한은행",
              accountNumber: "110-058-259853",
            })}
            예금주: 임용구
          </p>
          <p>
            <strong>신랑 어머니</strong>
            {AccountInfo({
              bankName: "국민은행",
              accountNumber: "209-21-1467-673",
            })}
            예금주: 홍영임
          </p>
        </>
      )}
      {expandedTab === "bride" && (
        <p>
          <strong>신부</strong>
          {AccountInfo({
            bankName: "우리은행",
            accountNumber: "1002-148-148984",
          })}
          예금주: 손정민
        </p>
      )}
    </p>
  );
}

interface AccountInfoProps {
  bankName: string;
  accountNumber: string;
}

function AccountInfo({ bankName, accountNumber }: AccountInfoProps) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`계좌번호가 복사되었습니다!\n${text}`);
    });
  };

  return (
    <>
      <br />
      <span
        onClick={() => copyToClipboard(accountNumber)}
        style={{ cursor: "pointer", textDecoration: "underline" }}
      >
        {bankName} {accountNumber}
      </span>
      <br />
    </>
  );
}
