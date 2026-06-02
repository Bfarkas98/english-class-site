"use client";

import { useEffect, useMemo, useState } from "react";
import {
  CALENDAR_TIMEZONE_LABEL,
  type CalendarView,
  DEFAULT_DESKTOP_VIEW,
  DEFAULT_MOBILE_VIEW,
  getGoogleCalendarEmbedUrl,
  getGoogleCalendarMobileUrl,
  getGoogleCalendarPublicUrl,
} from "@/lib/calendar";
import { useIsMobileCalendar } from "@/hooks/useMediaQuery";

const IFRAME_HEIGHT = {
  AGENDA: { mobile: 560, desktop: 620 },
  MONTH: { mobile: 520, desktop: 680 },
} as const;

export default function Calendar() {
  const isMobile = useIsMobileCalendar();
  const [preferredView, setPreferredView] = useState<CalendarView | null>(null);
  const view =
    preferredView ?? (isMobile ? DEFAULT_MOBILE_VIEW : DEFAULT_DESKTOP_VIEW);

  const publicUrl = getGoogleCalendarPublicUrl();
  const mobileUrl = getGoogleCalendarMobileUrl();
  const openUrl = isMobile ? mobileUrl : publicUrl;

  const iframeHeight = IFRAME_HEIGHT[view][isMobile ? "mobile" : "desktop"];
  const embedUrl = useMemo(
    () => getGoogleCalendarEmbedUrl(view, iframeHeight),
    [view, iframeHeight]
  );

  return (
    <div className="calendar-shell">
      {isMobile && (
        <div className="calendar-mobile-cta">
          <div className="calendar-mobile-cta__icon" aria-hidden="true">
            📅
          </div>
          <div className="calendar-mobile-cta__copy">
            <p className="calendar-mobile-cta__title">Viewing on your phone?</p>
            <p className="calendar-mobile-cta__text">
              The list view below works best on mobile. For full navigation,
              open the schedule in Google Calendar.
            </p>
          </div>
          <a
            href={openUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="calendar-btn calendar-btn--primary calendar-btn--block"
          >
            Open lesson schedule ↗
          </a>
        </div>
      )}

      <div className="calendar-panel">
        <div className="calendar-panel__header">
          <div className="calendar-panel__brand">
            <span className="calendar-panel__dot" aria-hidden="true" />
            <span className="calendar-panel__name">English Class with Beni</span>
          </div>

          <div className="calendar-panel__actions">
            <span className="calendar-panel__timezone">
              {CALENDAR_TIMEZONE_LABEL}
            </span>

            <div
              className={`calendar-view-toggle${isMobile ? " calendar-view-toggle--mobile-inline" : ""}`}
              role="tablist"
              aria-label="Calendar view"
            >
              <ViewButton
                active={view === "AGENDA"}
                onClick={() => setPreferredView("AGENDA")}
                label="Upcoming"
              />
              <ViewButton
                active={view === "MONTH"}
                onClick={() => setPreferredView("MONTH")}
                label="Month"
              />
            </div>

            <a
              href={openUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="calendar-btn calendar-btn--soft calendar-btn--compact"
            >
              Open ↗
            </a>
          </div>
        </div>

        <CalendarFrame
          key={embedUrl}
          embedUrl={embedUrl}
          iframeHeight={iframeHeight}
          isMobile={isMobile}
          openUrl={openUrl}
        />
      </div>

      {isMobile && (
        <a
          href={openUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="calendar-sticky-open"
        >
          Open in Google Calendar ↗
        </a>
      )}
    </div>
  );
}

function CalendarFrame({
  embedUrl,
  iframeHeight,
  isMobile,
  openUrl,
}: {
  embedUrl: string;
  iframeHeight: number;
  isMobile: boolean;
  openUrl: string;
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (loaded) return;

    const timeout = window.setTimeout(() => {
      setFailed(true);
    }, isMobile ? 20000 : 15000);

    return () => window.clearTimeout(timeout);
  }, [loaded, isMobile, embedUrl]);

  return (
    <div
      className="calendar-frame-wrap"
      style={{ minHeight: iframeHeight }}
    >
      {!loaded && !failed && (
        <div className="calendar-frame-wrap__loading" aria-live="polite">
          <div className="calendar-spinner" aria-hidden="true" />
          <p>Loading calendar…</p>
        </div>
      )}

      {failed && (
        <div className="calendar-frame-wrap__error" role="alert">
          <span aria-hidden="true">📅</span>
          <p className="calendar-frame-wrap__error-title">
            Embedded calendar unavailable
          </p>
          <p className="calendar-frame-wrap__error-text">
            {isMobile
              ? "Use the button above to open your lesson schedule in Google Calendar."
              : "Your browser may be blocking the embed. Open the calendar directly instead."}
          </p>
          <a
            href={openUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="calendar-btn calendar-btn--primary"
          >
            View in Google Calendar ↗
          </a>
        </div>
      )}

      <iframe
        src={embedUrl}
        className="calendar-frame"
        style={{ height: iframeHeight }}
        title="Lesson calendar"
        allowFullScreen
        scrolling="auto"
        onLoad={() => {
          setLoaded(true);
          setFailed(false);
        }}
      />
    </div>
  );
}

function ViewButton({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      className={`calendar-view-toggle__btn${active ? " calendar-view-toggle__btn--active" : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
