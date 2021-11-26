import { DateTime } from "luxon";

export const localZoneName = DateTime.now().offsetNameShort;

export const dateFormats = {
  quarter: "q'Q' yyyy",
  half: "half",
  year: "yyyy",
  month: "MMMM yyyy",
  day: "LLL dd',' yyyy",
  hour: "LLL dd',' hh':'mm a",
  hourYear: "dd LLL yyyy',' hh':'mm a",
};

export const showDate = (dateUtc, precision, timezone = "utc", showYear) => {
  const luxonDate = DateTime.fromISO(dateUtc, { locale: "en" }).setZone(
    timezone
  );

  if (precision === "half") {
    return luxonDate.month > 6
      ? `H2 ${luxonDate.year}`
      : `H1 ${luxonDate.year}`;
  } else {
    return luxonDate.toFormat(
      dateFormats[showYear && precision === "hour" ? "hourYear" : precision]
    );
  }
};

export const showOffset = (dateUtc, timezone = "utc") =>
  DateTime.fromISO(dateUtc).setZone(timezone).offsetNameShort;
