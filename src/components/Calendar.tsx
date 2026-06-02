"use client";

import { useEffect, useState } from "react";
import {
  CALENDAR_TIMEZONE_LABEL,
  getGoogleCalendarPublicUrl,
} from "@/lib/calendar";

type CalendarProps = {
  src: string;
};

export default function Calendar({ src }: CalendarProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const publicUrl = getGoogleCalendarPublicUrl();

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      if (!loaded) {
        setFailed(true);
      }
    }, 15000);

    return () => window.clearTimeout(timeout);
  }, [loaded]);

  return (
    <div
      style={{
        background: "white",
        border: "0.5px solid #ddd8ce",
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: "0.85rem 1.25rem",
          borderBottom: "0.5px solid #eee8df",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "#5e7eb8",
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontSize: "13px",
            fontWeight: 500,
            color: "#374151",
            fontFamily: "Georgia, serif",
          }}
        >
          English Class with Beni
        </span>
        <span
          style={{
            fontSize: "12px",
            color: "#9ca3af",
            marginLeft: "auto",
            fontWeight: 300,
          }}
        >
          {CALENDAR_TIMEZONE_LABEL}
        </span>
        <a
          href={publicUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "12px",
            color: "#5e7eb8",
            textDecoration: "none",
            fontWeight: 500,
            padding: "4px 10px",
            borderRadius: "8px",
            border: "0.5px solid #c5d4ef",
            background: "#f0f4fb",
            whiteSpace: "nowrap",
          }}
        >
          Open in Google Calendar ↗
        </a>
      </div>

      <div style={{ position: "relative", minHeight: "clamp(420px, 70vh, 680px)" }}>
        {!loaded && !failed && (
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem",
              background: "#f9f7f3",
              zIndex: 1,
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                border: "3px solid #e8e3da",
                borderTopColor: "#5e7eb8",
                animation: "calendar-spin 0.8s linear infinite",
              }}
            />
            <p
              style={{
                margin: 0,
                fontSize: "13px",
                color: "#9ca3af",
                fontWeight: 300,
              }}
            >
              Loading calendar…
            </p>
          </div>
        )}

        {failed && (
          <div
            role="alert"
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem",
              padding: "2rem",
              textAlign: "center",
              background: "#f9f7f3",
              zIndex: 2,
            }}
          >
            <span style={{ fontSize: "2rem" }} aria-hidden="true">
              📅
            </span>
            <p
              style={{
                margin: 0,
                fontSize: "15px",
                fontWeight: 500,
                color: "#374151",
                fontFamily: "Georgia, serif",
              }}
            >
              Calendar could not load here
            </p>
            <p
              style={{
                margin: 0,
                fontSize: "13px",
                color: "#6b7280",
                fontWeight: 300,
                maxWidth: "320px",
                lineHeight: 1.5,
              }}
            >
              Your browser may be blocking the embedded calendar. Open it
              directly in Google Calendar instead.
            </p>
            <a
              href={publicUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: "0.25rem",
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
              View calendar in Google ↗
            </a>
          </div>
        )}

        <iframe
          src={src}
          style={{
            border: 0,
            display: "block",
            width: "100%",
            height: "clamp(420px, 70vh, 680px)",
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
          title="Lesson calendar"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => {
            setLoaded(true);
            setFailed(false);
          }}
          onError={() => setFailed(true)}
        />
      </div>
    </div>
  );
}
