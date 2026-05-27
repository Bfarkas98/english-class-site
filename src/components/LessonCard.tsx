"use client";

import { useState } from "react";

type VocabularyWord = {
  english: string;
  hungarian: string;
  example: string;
};

type LessonCardProps = {
  title: string;
  date?: string;
  memo: string;
  homework: string;
  vocab: VocabularyWord[];
};

export default function LessonCard({
  title,
  date,
  memo,
  homework,
  vocab,
}: LessonCardProps) {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <article
      style={{
        background: "white",
        border: "0.5px solid #ddd8ce",
        borderRadius: "20px",
        overflow: "hidden",
        fontFamily:
          "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* Card header — chalkboard strip */}
      <div
        style={{
          background: "#1a2e1a",
          padding: "1.75rem 2rem 1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ruled lines texture */}
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
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "linear-gradient(90deg, #f5e6a3, #e8c97a, #f5e6a3)",
            opacity: 0.7,
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          {date && (
            <p
              style={{
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(245, 230, 163, 0.6)",
                margin: "0 0 0.4rem",
              }}
            >
              {date}
            </p>
          )}
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.5rem",
              fontWeight: 600,
              color: "#f0ece0",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            {title}
          </h2>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "2rem" }}>

        {/* Lesson Memo */}
        <section>
          <SectionLabel color="#7c9e5e" icon="📝" label="Lesson memo" />
          <div
            style={{
              fontSize: "15px",
              lineHeight: 1.8,
              color: "#374151",
              whiteSpace: "pre-line",
              paddingLeft: "0.75rem",
              borderLeft: "2px solid #c8dbb4",
            }}
          >
            {memo}
          </div>
        </section>

        {/* Homework */}
        <section>
          <SectionLabel color="#b87b5e" icon="✏️" label="Homework" />
          <div
            style={{
              fontSize: "15px",
              lineHeight: 1.8,
              color: "#374151",
              whiteSpace: "pre-line",
              paddingLeft: "0.75rem",
              borderLeft: "2px solid #e8c4ae",
            }}
          >
            {homework}
          </div>
        </section>

        {/* Vocabulary */}
        {vocab.length > 0 && (
          <section>
            <SectionLabel color="#5e7eb8" icon="📖" label="Vocabulary" />

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {vocab.map((word, i) => (
                <div
                  key={i}
                  onClick={() => setFlipped(flipped === i ? null : i)}
                  style={{
                    background: flipped === i ? "#1a2e1a" : "#f9f7f3",
                    border: `0.5px solid ${flipped === i ? "transparent" : "#e8e3da"}`,
                    borderRadius: "12px",
                    padding: "0.85rem 1rem",
                    cursor: "pointer",
                    transition: "background 0.2s, border-color 0.2s",
                    display: "grid",
                    gridTemplateColumns: flipped === i ? "1fr 1fr" : "1fr 1fr auto",
                    gap: "0.75rem",
                    alignItems: "center",
                  }}
                >
                  {/* English */}
                  <span
                    style={{
                      fontWeight: 500,
                      fontSize: "14px",
                      color: flipped === i ? "#f5e6a3" : "#111827",
                      fontFamily: "Georgia, serif",
                    }}
                  >
                    {word.english}
                  </span>

                  {/* Hungarian */}
                  <span
                    style={{
                      fontSize: "14px",
                      color: flipped === i ? "rgba(240,236,224,0.65)" : "#6b7280",
                    }}
                  >
                    {word.hungarian}
                  </span>

                  {/* Example — revealed on click */}
                  {flipped === i ? (
                    <span
                      style={{
                        gridColumn: "1 / -1",
                        fontSize: "13px",
                        color: "rgba(240,236,224,0.5)",
                        fontStyle: "italic",
                        borderTop: "0.5px solid rgba(245,230,163,0.15)",
                        paddingTop: "0.5rem",
                        marginTop: "0.1rem",
                      }}
                    >
                     {`"${word.example}"`}
                    </span>
                  ) : (
                    <span
                      style={{
                        fontSize: "11px",
                        color: "#9ca3af",
                        justifySelf: "end",
                        whiteSpace: "nowrap",
                      }}
                    >
                      tap for example
                    </span>
                  )}
                </div>
              ))}
            </div>

            <p
              style={{
                marginTop: "0.75rem",
                fontSize: "12px",
                color: "#9ca3af",
                fontWeight: 300,
                textAlign: "right",
              }}
            >
              {vocab.length} word{vocab.length !== 1 ? "s" : ""} this lesson
            </p>
          </section>
        )}
      </div>
    </article>
  );
}

function SectionLabel({
  color,
  icon,
  label,
}: {
  color: string;
  icon: string;
  label: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "7px",
        marginBottom: "0.85rem",
      }}
    >
      <span style={{ fontSize: "15px" }}>{icon}</span>
      <h3
        style={{
          fontFamily: "Georgia, serif",
          fontSize: "0.95rem",
          fontWeight: 600,
          color: "#111",
          margin: 0,
          letterSpacing: "-0.01em",
        }}
      >
        {label}
      </h3>
      <div
        style={{
          flex: 1,
          height: "1px",
          background: `linear-gradient(90deg, ${color}55, transparent)`,
          marginLeft: "4px",
        }}
      />
    </div>
  );
}
