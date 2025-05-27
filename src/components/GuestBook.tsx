import { useState } from "react";
import { db } from "../utils/firebase";
import { setDoc, doc, Timestamp } from "firebase/firestore";

export default function Guestbook() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [attending, setAttending] = useState(true);

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
        attending,
        createdAt: timestamp,
      });

      if (attending) alert("감사합니다~ 결혼식에서 만나요!");
      else alert("감사합니다~ 다음에 만나요!");
    } catch (err) {
      console.error("🔥 Firebase 저장 오류:", err);
      alert("저장에 실패했어요..");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
      <h2>📖 참석 여부</h2>
      <p>
        결혼식에 와주신다면 참석 여부를 남겨주세요.
        <br />
        저희에게 전하고 싶은 메시지도 남겨주시면 좋아요.
      </p>
      <label style={{ display: "block", margin: "10px 0" }}>
        <input
          type="checkbox"
          checked={attending === true}
          onChange={(e) => setAttending(e.target.checked)}
        />
        참석할게요!
      </label>
      <input
        type="text"
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ width: "80%", padding: "8px", marginBottom: "10px" }}
      />
      <br />
      <textarea
        placeholder="메시지를 남겨주세요!"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={4}
        style={{ width: "80%", padding: "8px", marginBottom: "10px" }}
      />
      <br />
      <button type="submit" disabled={submitting}>
        {submitting ? "작성 중..." : "작성하기"}
      </button>
    </form>
  );
}
