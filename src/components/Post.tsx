import { useState } from "react";
import { db } from "../utils/firebase";
import { setDoc, doc, Timestamp } from "firebase/firestore";

export default function Post() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) {
      alert("이름을 남겨주세요!");
      return;
    }

    setSubmitting(true);

    try {
      const timestamp = Timestamp.now();
      await setDoc(doc(db, "guestbook", String(timestamp.toMillis())), {
        name,
        message,
        createdAt: timestamp,
      });
      alert(
        "귀중한 시간 내어 작성해주셔서 감사합니다.\n편지는 신랑 신부에게 잘 전달되었습니다.\n그럼 8월 16일에 만나요!"
      );
      setSubmitted(true);
    } catch (err) {
      console.error("🔥 Firebase 저장 오류:", err);
      alert("편지 보내기에 실패했어요.. 개발자인 신랑에게 연락을..");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ padding: "20px", paddingTop: "80px" }}
    >
      <h3 style={{ marginBottom: "0px" }}>📮 우체통</h3>
      <p style={{ marginTop: "10px" }}>
        현호와 정민이에게 이름과 함께 편지를 남겨주세요.
        <br />
        아래 두 분께 마음을 담은 선물을 드릴 예정이에요.
      </p>
      <p>
        <strong>"웃음 피식 상"</strong>
        <br />
        <span style={{ color: "grey" }}>
          웃음이 나오는 유쾌한 편지를 써주신 분께
        </span>
      </p>
      <p>
        <strong>"눈물 찔끔 상"</strong>
        <br />
        <span style={{ color: "grey" }}>
          눈물이 나오는 감동적인 편지를 써주신 분께
        </span>
        <br />
      </p>
      <p style={{ paddingTop: "20px" }}>
        <input
          type="text"
          placeholder="보내는 이"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "80%", padding: "8px", marginBottom: "10px" }}
        />
        <textarea
          placeholder="편지 내용"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          style={{ width: "80%", padding: "8px", marginBottom: "10px" }}
        />
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (!submitting && !submitted) handleSubmit(e);
          }}
          role="button"
          className="link"
        >
          {submitting
            ? "보내는 중..."
            : submitted
            ? "편지가 잘 보내졌어요!"
            : "편지 보내기"}
        </a>
      </p>
    </form>
  );
}
