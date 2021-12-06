export const getSatsOptions = () => {
  return {
    query: {
      longitude: {
        $ne: null,
      },
    },
    options: {
      pagination: false,
      populate: [
        {
          path: "launch",
          select: {
            name: 1,
            date_utc: 1,
            id: 1,
            flight_number: 1,
          },
        },
      ],
    },
  };
};
