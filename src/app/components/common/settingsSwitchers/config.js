export const CONFIG = {
  dashboard: [
    {
      switchesCount: 2,
      name: "Time",
      labels: ["UTC", "Local"],
      setting: "timezone",
      options: ["utc", "local"],
    },
    {
      switchesCount: 2,
      name: "Temperature",
      labels: ["°C", "°F"],
      setting: "temp",
      options: ["celsius", "fahrenheit"],
    },
    {
      switchesCount: 2,
      name: "Windspeed",
      labels: ["m/s", "kt"],
      setting: "windspeed",
      options: ["ms", "kt"],
    },
  ],
};
