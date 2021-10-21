import { DateTime } from "luxon";

export const localZoneName = DateTime.now().offsetNameShort;

export const dateFormats = {
  quarter: "q'Q' yyyy",
  half: "half",
  year: "yyyy",
  month: "MMMM yyyy",
  day: "LLLL dd",
  hour: "LLL dd hh':'mm a",
};

export const showDate = (dateUtc, precision, timezone = "utc") => {
  const luxonDate = DateTime.fromISO(dateUtc).setZone(timezone);

  if (precision === "half") {
    return luxonDate.month > 6
      ? `H2 ${luxonDate.year}`
      : `H1 ${luxonDate.year}`;
  } else {
    return luxonDate.toFormat(precision);
  }
};
