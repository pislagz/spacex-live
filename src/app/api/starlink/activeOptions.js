export const getActiveOptions = () => {
  return {
    query: {
      "spaceTrack.DECAYED": 0,
    },
    options: {
      limit: 1000000,
      select: {
        id: 1,
      },
    },
  };
};
