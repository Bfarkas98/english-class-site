export type CalendarView = "AGENDA" | "MONTH";

const DEFAULT_CALENDAR_ID =
  "e6a3fdfa398116f35b98a056f021eb09b56858a6c2e25b239769f97f8671595b@group.calendar.google.com";

const TIMEZONE = "Europe/Budapest";

function getCalendarId(): string {
  return process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID ?? DEFAULT_CALENDAR_ID;
}

export function getGoogleCalendarEmbedUrl(
  view: CalendarView = "MONTH",
  height = 680
): string {
  const params = new URLSearchParams({
    src: getCalendarId(),
    ctz: TIMEZONE,
    mode: view,
    height: String(height),
    wkst: "2",
    bgcolor: "#ffffff",
    showTitle: "0",
    showNav: "1",
    showDate: "1",
    showPrint: "0",
    showTabs: "0",
    showCalendars: "0",
  });

  return `https://calendar.google.com/calendar/embed?${params.toString()}`;
}

export function getGoogleCalendarPublicUrl(): string {
  return `https://calendar.google.com/calendar/u/0?cid=${encodeURIComponent(getCalendarId())}`;
}

export function getGoogleCalendarMobileUrl(): string {
  return `https://calendar.google.com/calendar/r?cid=${encodeURIComponent(getCalendarId())}`;
}

export const CALENDAR_TIMEZONE_LABEL = "Europe / Budapest";

export const DEFAULT_MOBILE_VIEW: CalendarView = "AGENDA";
export const DEFAULT_DESKTOP_VIEW: CalendarView = "MONTH";
