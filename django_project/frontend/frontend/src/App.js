import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    if (!text.trim()) return alert("Please enter some text!");
    setLoading(true);

    const backendUrl =
      "http://fca0f84a-98f5-47f6-b3cc-3781110bd736-00-3tmz1ntxfhrck.sisko.replit.dev"; // or your Replit backend URL

    try {
      const res = await fetch(`${backendUrl}/summarize/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      if (!res.ok) throw new Error("Network response was not ok");
      const data = await res.json();
      console.log("✅ Response:", data);
    } catch (error) {
      console.error("❌ Error fetching summary:", error);
    }
  };

  return (
    <div style={{ padding: 30, fontFamily: "sans-serif" }}>
      <h1>AI Study Buddy</h1>
      <textarea
        rows="10"
        cols="60"
        placeholder="Paste your study notes here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <br />
      <button onClick={handleSummarize} disabled={loading}>
        {loading ? "Summarizing..." : "Summarize"}
      </button>

      {summary && (
        <div style={{ marginTop: "20px" }}>
          <h3>Summary:</h3>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}

export default App;
