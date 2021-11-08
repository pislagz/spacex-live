export const firstToUpperCase = (string) =>
  string[0].toUpperCase() + string.slice(1);

export const addSeparators = (num) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
