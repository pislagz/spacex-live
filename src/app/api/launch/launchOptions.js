export const getLaunchOptions = ({ query, sortDir = "asc", limit = 1 }) => {
  return {
    query: query,
    options: {
      limit: limit,
      sort: {
        date_utc: sortDir,
      },
      populate: [
        {
          path: "cores",
        },
        {
          path: "launchpad",
        },
        {
          path: "rocket",
          select: {
            name: 1,
          },
        },
        {
          path: "fairings",
        },
        {
          path: "capsules",
        },
        {
          path: "payloads",
        },
        {
          path: "crew",
          populate: [
            {
              path: "crew",
            },
          ],
        },
        {
          path: "cores",
          populate: [
            {
              path: "core",
            },
            {
              path: "landpad",
            },
          ],
        },
      ],
    },
  };
};

export const getBasicOptions = () => ({
  query: {},
  options: {
    sort: {
      flight_number: "desc",
    },
    limit: 10000,
    select: {
      flight_number: 1,
      name: 1,
      date_utc: 1,
      date_precision: 1,
      upcoming: 1,
      links: 1,
      success: 1,
    },
    populate: [
      {
        path: "rocket",
        select: {
          name: 1,
        },
      },
      {
        path: "launchpad",
        select: {
          name: 1,
        },
      },
    ],
  },
});
