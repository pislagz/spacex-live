export const getDetailsList = (response) => {
  const { rocket, crew, payloads, launchpad, cores } = response;

  if (response) {
    const isCrew = !!crew?.length;
    const isPayloads =
      !isCrew &&
      payloads?.map(({ name: { length } }) => !!length)?.includes(true);

    const landpads = cores?.filter(({ landpad }) => !!landpad?.name?.length);
    const landpad = {
      isAvailable: !!landpads?.length,
      isMultiple: landpads.filter((it) => it.landpad.name)?.length > 1,
    };

    return Object.values({
      rocket: {
        label: "rocket",
        isAvailable: !!rocket?.name?.length,
      },
      payloads: {
        label: "payload",
        isAvailable: isPayloads,
      },
      crew: {
        label: "crew",
        isAvailable: isCrew,
      },
      launchpad: {
        label: "launchpad",
        isAvailable: !!launchpad?.name?.length,
      },
      landpad: {
        label: `landpad${landpad.isMultiple ? "s" : ""}`,
        ...landpad,
      },
    });
  } else return null;
};
