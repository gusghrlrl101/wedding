import { useState } from "react";
import { db } from "../utils/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export default function Guestbook() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;

    setSubmitting(true);

    try {
      await addDoc(collection(db, "guestbook"), {
        name,
        message,
        createdAt: Timestamp.now(),
      });

      setName("");
      setMessage("");
      alert("방명록이 작성되었습니다!");
    } catch (err) {
      console.error("🔥 Firebase 저장 오류:", err);
      alert("저장에 실패했어요.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
      <h2>📖 방명록</h2>
      <p>
        신랑 신부에게 전하고 싶은 메시지를 남겨주세요. <br />이 메시지는 신랑
        신부에게만 전달됩니다.
      </p>
      <input
        type="text"
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ width: "80%", padding: "8px", marginBottom: "10px" }}
      />
      <br />
      <textarea
        placeholder="메시지를 입력하세요"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
        style={{ width: "80%", padding: "8px" }}
      />
      <br />
      <button type="submit" disabled={submitting}>
        {submitting ? "작성 중..." : "작성하기"}
      </button>
    </form>
  );
}
