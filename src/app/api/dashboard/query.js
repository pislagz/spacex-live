export const nextOrPrevQuery = (upcomingOrPrevious) => {
  let upcoming = null;
  let sortDir = null;

  if (upcomingOrPrevious === "upcoming") {
    upcoming = "true";
    sortDir = "asc";
  } else if (upcomingOrPrevious === "previous") {
    upcoming = "false";
    sortDir = "desc";
  }

  return {
    query: {
      upcoming: upcoming,
    },
    options: {
      sort: {
        flight_number: sortDir,
      },
      limit: 1,
      populate: [
        {
          path: "rocket",
        },
        {
          path: "capsules",
          populate: [
            {
              path: "launches",
            },
          ],
        },
        {
          path: "launchpad",
        },
        {
          path: "payloads",
        },
        {
          path: "cores",
          populate: [
            {
              path: "core",
            },
          ],
        },
        {
          path: "crew",
          populate: [
            {
              path: "crew",
            },
          ],
        },
      ],
    },
  };
};

export const flightNoQuery = (flightNo) => ({
  query: {
    flight_number: flightNo,
  },
  options: {
    limit: 1,
    populate: [
      {
        path: "rocket",
      },
      {
        path: "capsules",
        populate: [
          {
            path: "launches",
          },
        ],
      },
      {
        path: "launchpad",
      },
      {
        path: "payloads",
      },
      {
        path: "cores",
        populate: [
          {
            path: "core",
          },
        ],
      },
      {
        path: "crew",
        populate: [
          {
            path: "crew",
          },
        ],
      },
    ],
  },
});
