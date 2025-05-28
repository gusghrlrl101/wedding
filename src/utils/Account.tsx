interface AccountProps {
  bankName: string;
  accountNumber: string;
}

export default function Account({ bankName, accountNumber }: AccountProps) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("계좌번호가 복사되었습니다!");
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
