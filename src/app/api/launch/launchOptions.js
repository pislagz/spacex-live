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
