export const checkDetailsAvailability = (response) => {
  const rocket = response?.rocket?.name?.length ? true : false;
  const crew = response?.crew?.length ? true : false;
  const payloads = crew
    ? false
    : response?.payloads
        ?.map((item) => (item?.name?.length ? true : false))
        ?.includes(true)
    ? true
    : false;
  const launchpad = response?.launchpad?.name?.length ? true : false;
  const landpad = response?.cores
    ?.map((item) => item?.landpad?.name?.length && true)
    ?.includes(true);
  const capsule = payloads
    ? false
    : response?.capsules
        ?.map((item) => (item?.type?.length ? true : false))
        ?.includes(true)
    ? true
    : false;

  return {
    rocket: rocket,
    payloads: payloads,
    capsule: capsule,
    crew: crew,
    launchpad: launchpad,
    landpad: landpad,
  };
};

export const getAvailableDetailsList = (availability) =>
  Object.keys(availability).filter((key) => availability[key]);
