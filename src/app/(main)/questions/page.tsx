"use client";

import { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import "./questions.css";

export default function QuestionsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mnjrodqn", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        const message =
          payload?.error ||
          "Something went wrong sending your question. Please try again.";
        throw new Error(message);
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong sending your question. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div
        style={{
          maxWidth: "520px",
          margin: "4rem auto 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
          textAlign: "center",
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "20px",
            background: "#1a2e1a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "28px",
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
                "repeating-linear-gradient(0deg, transparent, transparent 11px, rgba(255,255,255,0.05) 11px, rgba(255,255,255,0.05) 12px)",
            }}
          />
          <span style={{ position: "relative", zIndex: 1 }}>✉️</span>
        </div>

        <div>
          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.75rem",
              fontWeight: 600,
              color: "#111827",
              margin: "0 0 0.5rem",
              lineHeight: 1.2,
            }}
          >
            Question <em style={{ fontStyle: "italic", color: "#7c9e5e" }}>sent!</em>
          </h1>
          <p
            style={{
              fontSize: "15px",
              fontWeight: 300,
              color: "#6b7280",
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            Beni received your question and will reply as soon as possible.
            Keep practising in the meantime!
          </p>
        </div>

        <div style={{ width: "48px", height: "2px", borderRadius: "2px", background: "#c8dbb4" }} />

        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center" }}>
          <Link
            href="/lessons"
            style={{
              background: "#1a2e1a",
              color: "#f5e6a3",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 500,
              fontFamily: "Georgia, serif",
              padding: "0.65rem 1.25rem",
              borderRadius: "12px",
            }}
          >
            Review lessons
          </Link>
          <button
            onClick={() => setSubmitted(false)}
            style={{
              background: "white",
              color: "#374151",
              fontSize: "14px",
              fontWeight: 400,
              padding: "0.65rem 1.25rem",
              borderRadius: "12px",
              border: "0.5px solid #ddd8ce",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            Ask another question
          </button>
          <Link
            href="/"
            style={{
              background: "white",
              color: "#374151",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 400,
              padding: "0.65rem 1.25rem",
              borderRadius: "12px",
              border: "0.5px solid #ddd8ce",
            }}
          >
            Go to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-stack" style={{ maxWidth: "640px", margin: "0 auto" }}>
      <PageHeader
        badge="Direct to Beni"
        title="Ask a"
        titleAccent="Question"
        description="Any question about a lesson, homework or vocabulary — just send it here."
        accentColor="#e8b49a"
        badgeBg="rgba(184, 123, 94, 0.2)"
        badgeBorder="rgba(184, 123, 94, 0.35)"
      />

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
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
        >
          {error && (
            <div
              role="alert"
              style={{
                background: "#fef2f2",
                border: "0.5px solid #fecaca",
                borderRadius: "12px",
                padding: "0.75rem 1rem",
                fontSize: "13px",
                color: "#991b1b",
                lineHeight: 1.5,
              }}
            >
              {error}
            </div>
          )}

          <div className="form-grid-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div>
              <FieldLabel text="Your name" />
              <input type="text" name="name" required placeholder="e.g. Lea" style={inputStyle} />
            </div>
            <div>
              <FieldLabel text="Your email" />
              <input type="email" name="email" required placeholder="your@email.com" style={inputStyle} />
            </div>
          </div>

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

          <div>
            <FieldLabel text="Type of question" />
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {["Vocabulary", "Homework", "Grammar", "Pronunciation", "Speaking", "General"].map((type) => (
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
              ))}
            </div>
          </div>

          <div>
            <FieldLabel text="Your question" />
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Write your question here..."
              style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6, minHeight: "120px" }}
            />
          </div>

          <div style={{ height: "0.5px", background: "#eee8df" }} />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "0.75rem",
            }}
          >
            <p style={{ fontSize: "12px", color: "#9ca3af", fontWeight: 300, margin: 0 }}>
              Beni will reply as soon as possible.
            </p>
            <button type="submit" className="q-submit" disabled={loading}>
              {loading ? "Sending..." : "Send question →"}
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
