export const checkDetailsAvailability = (response) => ({
  rocket: response?.rocket?.name?.length ? true : false,
  payloads: response?.payloads
    ?.map((item) => (item?.name?.length ? true : false))
    ?.includes(true)
    ? true
    : false,
  crew: response?.crew?.length ? true : false,
  cores: response?.cores?.[0]?.core === null ? false : true,
  customers: response?.payloads
    ?.map((item) => (item?.customers?.length ? true : false))
    ?.includes(true)
    ? true
    : false,
  launchpad: response?.launchpad?.name?.length ? true : false,
  landpad: response?.cores
    ?.map((item) => item?.landpad?.name?.length && true)
    ?.includes(true),
});
