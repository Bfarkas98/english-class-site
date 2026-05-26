import "./questions.css";

export default function QuestionsPage() {
  return (
    <div style={{ maxWidth: "640px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1.25rem" }}>

      {/* Page header */}
      <div
        style={{
          background: "#1a2e1a",
          borderRadius: "20px",
          padding: "1.75rem 2rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 27px, rgba(255,255,255,0.04) 27px, rgba(255,255,255,0.04) 28px)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0, left: 0, right: 0,
            height: "3px",
            background: "linear-gradient(90deg, #f5e6a3, #e8c97a, #f5e6a3)",
            opacity: 0.7,
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "rgba(184, 123, 94, 0.2)",
              border: "0.5px solid rgba(184, 123, 94, 0.35)",
              color: "#e8b49a",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "4px 11px",
              borderRadius: "100px",
              marginBottom: "0.75rem",
            }}
          >
            Direct to Beni
          </div>
          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.5rem",
              fontWeight: 600,
              color: "#f0ece0",
              margin: "0 0 0.4rem",
              lineHeight: 1.2,
            }}
          >
            Ask a <em style={{ fontStyle: "italic", color: "#f5e6a3" }}>Question</em>
          </h1>
          <p
            style={{
              fontSize: "14px",
              fontWeight: 300,
              color: "rgba(240, 236, 224, 0.55)",
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            Any question about a lesson, homework or vocabulary — just send it here.
          </p>
        </div>
      </div>

      {/* Form card */}
      <div
        style={{
          background: "white",
          border: "0.5px solid #ddd8ce",
          borderRadius: "20px",
          padding: "1.75rem 2rem",
        }}
      >
        <form
          action="https://formspree.io/f/mnjrodqn"
          method="POST"
          style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
        >
          {/* Redirect to thank you page after submission */}
          <input type="hidden" name="_next" value="/questions/thank-you" />

          {/* Name + Email row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div>
              <FieldLabel text="Your name" />
              <input
                type="text"
                name="name"
                required
                placeholder="e.g. Erzsébet"
                style={inputStyle}
              />
            </div>
            <div>
              <FieldLabel text="Your email" />
              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                style={inputStyle}
              />
            </div>
          </div>

          {/* Lesson */}
          <div>
            <FieldLabel text="Which lesson?" />
            <select name="lesson" style={inputStyle}>
              <option>Lesson 1 — Talking About Yourself</option>
              <option>Lesson 2 — Family &amp; Home</option>
              <option>Lesson 3 — Food &amp; Shopping</option>
              <option>Lesson 4 — Work &amp; Daily Routine</option>
              <option>Lesson 5 — Travel &amp; Directions</option>
              <option>Lesson 6 — Past Tense Basics</option>
              <option>Lesson 7 — Health &amp; Doctor</option>
              <option>Lesson 8 — Plans &amp; Future</option>
            </select>
          </div>

          {/* Question type */}
          <div>
            <FieldLabel text="Type of question" />
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {["Vocabulary", "Homework", "Grammar", "Pronunciation", "Speaking", "General"].map(
                (type) => (
                  <label key={type} className="q-pill">
                    <input
                      type="radio"
                      name="questionType"
                      value={type}
                      defaultChecked={type === "Vocabulary"}
                      style={{ accentColor: "#b87b5e", margin: 0 }}
                    />
                    {type}
                  </label>
                )
              )}
            </div>
          </div>

          {/* Question textarea */}
          <div>
            <FieldLabel text="Your question" />
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Write your question here..."
              style={{
                ...inputStyle,
                resize: "vertical",
                lineHeight: 1.6,
                minHeight: "120px",
              }}
            />
          </div>

          {/* Divider */}
          <div style={{ height: "0.5px", background: "#eee8df" }} />

          {/* Submit */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <p style={{ fontSize: "12px", color: "#9ca3af", fontWeight: 300, margin: 0 }}>
              Beni will reply as soon as possible.
            </p>
            <button type="submit" className="q-submit">
              Send question →
            </button>
          </div>
        </form>
      </div>

    </div>
  );
}

function FieldLabel({ text }: { text: string }) {
  return (
    <label
      style={{
        display: "block",
        fontSize: "12px",
        fontWeight: 500,
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        color: "#6b7280",
        marginBottom: "0.5rem",
      }}
    >
      {text}
    </label>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  background: "#f9f7f3",
  border: "0.5px solid #e8e3da",
  borderRadius: "12px",
  padding: "0.65rem 0.9rem",
  fontSize: "14px",
  color: "#111827",
  fontFamily: "inherit",
  outline: "none",
  appearance: "none",
  WebkitAppearance: "none",
};
