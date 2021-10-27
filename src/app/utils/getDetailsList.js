import { Capsule } from "assets/icons/buttons/Capsule";
import { Crew } from "assets/icons/buttons/Crew";
import { Landpad } from "assets/icons/buttons/Landpad";
import { Launchpad } from "assets/icons/buttons/Launchpad";
import { Rocket } from "assets/icons/buttons/Rocket";
import { Payload } from "assets/icons/buttons/Payload";

export const getDetailsList = (response) => {
  const { rocket, crew, payloads, launchpad, cores, capsules } = response;

  if (response) {
    const isCrew = !!crew?.length;
    const isPayloads =
      !isCrew &&
      payloads?.map(({ name: { length } }) => !!length)?.includes(true);

    const landpads = cores?.filter(({ landpad }) => !!landpad?.name?.length);
    const landpad = {
      isAvailable: !!landpads?.length,
      isMultiple: landpads.filter((it) => it === true)?.length > 1,
    };

    return Object.values({
      rocket: {
        label: "rocket",
        isAvailable: !!rocket?.name?.length,
        icon: Rocket,
      },
      payloads: {
        label: "payload",
        isAvailable: isPayloads,
        icon: Payload,
      },
      capsule: {
        label: "capsule",
        isAvailable: !isPayloads && !!capsules?.[0]?.id,
        icon: Capsule,
      },
      crew: {
        label: "crew",
        isAvailable: isCrew,
        icon: Crew,
      },
      launchpad: {
        label: "launchpad",
        isAvailable: !!launchpad?.name?.length,
        icon: Launchpad,
      },
      landpad: {
        label: `landpad${landpad.isMultiple ? "s" : ""}`,
        icon: Landpad,
        ...landpad,
      },
    });
  } else return null;
};
