const DEFAULT_CALENDAR_ID =
  "e6a3fdfa398116f35b98a056f021eb09b56858a6c2e25b239769f97f8671595b@group.calendar.google.com";

const TIMEZONE = "Europe/Budapest";

export function getGoogleCalendarEmbedUrl(): string {
  const calendarId =
    process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID ?? DEFAULT_CALENDAR_ID;

  const params = new URLSearchParams({
    src: calendarId,
    ctz: TIMEZONE,
    mode: "MONTH",
    showTitle: "0",
    showNav: "1",
    showPrint: "0",
    showTabs: "0",
    showCalendars: "0",
  });

  return `https://calendar.google.com/calendar/embed?${params.toString()}`;
}

export function getGoogleCalendarPublicUrl(): string {
  const calendarId =
    process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID ?? DEFAULT_CALENDAR_ID;

  return `https://calendar.google.com/calendar/u/0?cid=${encodeURIComponent(calendarId)}`;
}

export const CALENDAR_TIMEZONE_LABEL = "Europe / Budapest";
