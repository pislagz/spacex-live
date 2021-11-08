import React from "react";
import { Modal } from "app/components/common/Modal";
import { selectDashboard, selectModal } from "app/redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "app/redux/slices/modalSlice";
import { Crew } from "app/components/common/Modal/components/views/Crew";
import { Launchpad } from "app/components/common/Modal/components/views/Launchpad";
import { Landpad } from "app/components/common/Modal/components/views/Landpad";

import { Rocket } from "app/components/common/Modal/components/views/Rocket";
import { Payload } from "app/components/common/Modal/components/views/Payload";
import { Capsule } from "app/components/common/Modal/components/views/Capsule";

export const DashboardModal = () => {
  const dispatch = useDispatch();
  const { launches } = useSelector(selectDashboard);
  const { isOpen, type, launch } = useSelector(selectModal);
  const currentLaunch = launches[launch]?.data;

  return isOpen ? (
    <Modal
      isOpen={isOpen}
      closeModal={() => dispatch(closeModal())}
      type={type}
      launch={launch}
      data={{ ...launches[launch]?.data }}
      detailsList={launches[launch]?.detailsList}
    >
      {type === "crew" && <Crew crew={[...currentLaunch.crew]} />}
      {type === "launchpad" && (
        <Launchpad launchpad={{ ...currentLaunch.launchpad }} />
      )}
      {type.includes("landpad") && (
        <Landpad
          type={type}
          cores={[
            ...currentLaunch.cores.map((core) =>
              core?.landpad?.name ? core : null
            ),
          ]}
        />
      )}

      {type === "rocket" && <Rocket />}

      {type === "payload" && <Payload payloads={currentLaunch.payloads} />}

      {type === "capsule" && <Capsule capsule={currentLaunch.capsules[0]} />}
    </Modal>
  ) : null;
};
