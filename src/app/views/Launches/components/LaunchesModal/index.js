import React, { useCallback, useEffect, useState } from "react";
import { Modal } from "app/components/common/Modal";
import { selectModal } from "app/redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "app/redux/slices/modalSlice";
import { api } from "app/api";
import { getDetailsList } from "app/utils/getDetailsList";

import { Crew } from "app/components/common/Modal/components/views/mission/Crew";
import { Launchpad } from "app/components/common/Modal/components/views/mission/Pads/Launchpad";
import { Landpad } from "app/components/common/Modal/components/views/mission/Pads/Landpad";
import { Rocket } from "app/components/common/Modal/components/views/mission/Rocket";
import { Payload } from "app/components/common/Modal/components/views/mission/Payload";

export const LaunchesModal = () => {
  const dispatch = useDispatch();
  const { isOpen, type, launch } = useSelector(selectModal);

  const [launchData, setLaunchData] = useState(null);

  const getData = useCallback(async () => {
    const response = await api.launch.getLaunchByFlightNumber(launch);
    console.log(getDetailsList(response));
    setLaunchData({
      data: response,
      detailsList: getDetailsList(response),
    });
  }, [launch]);

  useEffect(() => {
    console.log({ launch });
    if (launch) {
      getData();
    }
  }, [getData, launch]);

  return isOpen && launchData && launch ? (
    <Modal
      isOpen={isOpen}
      closeModal={() => dispatch(closeModal())}
      type={type}
      launch={launch}
      data={{ ...launchData?.data }}
      detailsList={launchData?.detailsList}
    >
      {type === "crew" && <Crew crew={[...launchData.data.crew]} />}
      {type === "launchpad" && (
        <Launchpad launchpad={{ ...launchData.data.launchpad }} />
      )}
      {type.includes("landpad") && (
        <Landpad
          type={type}
          cores={[
            ...launchData.data.cores.map((core) =>
              core?.landpad?.name ? core : null
            ),
          ]}
        />
      )}

      {type === "rocket" && (
        <Rocket
          cores={launchData.data.cores}
          rocketName={launchData.data.rocket.name}
          capsule={launchData.data.capsules[0]}
          fairings={launchData.data.fairings}
        />
      )}

      {type === "payload" && <Payload payloads={launchData.data.payloads} />}
    </Modal>
  ) : null;
};
