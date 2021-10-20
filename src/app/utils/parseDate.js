import { DateTime } from "luxon";

export const dateFormats = {
  quarter: "q'Q' yyyy",
  half: "half",
  year: "yyyy",
  month: "MMMM yyyy",
  day: "LLLL dd",
  hour: "LLL dd hh':'mm a", //"hh:mm a LLL dd U7C"
};

export const showDate = (dateUtc, precision) => {
  const luxonDate = DateTime.fromISO(dateUtc);

  if (precision === "half") {
    return luxonDate.month > 6
      ? `H2 ${luxonDate.year}`
      : `H1 ${luxonDate.year}`;
  } else {
    return luxonDate.toFormat(precision);
  }
};
