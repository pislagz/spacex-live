export const getLaunchOptions = ({ isUpcoming, sortDir }) => {
  return {
    query: {
      upcoming: isUpcoming,
    },
    options: {
      limit: 1,
      sort: {
        date_utc: sortDir,
      },
      select: {
        name: 1,
        id: 1,
        date_local: 1,
        date_utc: 1,
        flight_number: 1,
        details: 1,
        links: 1,
        success: 1,
        failures: 1,
        date_precision: 1,
      },
      populate: [
        {
          path: "launchpad",
          select: {
            name: 1,
            full_name: 1,
            details: 1,
            region: 1,
            timezone: 1,
          },
        },
        {
          path: "rocket",
          select: {
            name: 1,
            id: 1,
          },
        },
        {
          path: "fairings",
          select: {
            recovered: 1,
          },
        },
        {
          path: "capsules",
          select: {
            type: 1,
            serial: 1,
            id: 1,
            launches: 1,
          },
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
              select: { name: 1, full_name: 1, type: 1, id: 1 },
            },
          ],
        },
      ],
    },
  };
};

export const getLaunchByNumber = (flightNo) => ({
  query: {
    flight_number: flightNo,
  },
  options: {
    limit: 1,
    populate: [
      {
        path: "launchpad",
        select: {
          name: 1,
          full_name: 1,
          details: 1,
          region: 1,
          timezone: 1,
        },
      },
      {
        path: "rocket",
        select: {
          name: 1,
          id: 1,
        },
      },
      {
        path: "fairings",
        select: {
          recovered: 1,
        },
      },
      {
        path: "capsules",
        select: {
          type: 1,
          serial: 1,
          id: 1,
          launches: 1,
        },
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
            select: { name: 1, full_name: 1, type: 1, id: 1 },
          },
        ],
      },
    ],
  },
});
