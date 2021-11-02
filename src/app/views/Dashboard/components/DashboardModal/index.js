import React from "react";
import { Modal } from "app/components/common/Modal";
import { selectDashboard, selectModal } from "app/redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "app/redux/slices/modalSlice";
import { Crew } from "app/components/common/Modal/components/views/Crew";
import { Launchpad } from "app/components/common/Modal/components/views/Launchpad";
import { Landpad } from "app/components/common/Modal/components/views/Landpad";

export const DashboardModal = () => {
  const dispatch = useDispatch();
  const { launches } = useSelector(selectDashboard);
  const { isOpen, type, launch } = useSelector(selectModal);
  const currentLaunchData = launches[launch]?.data;

  return isOpen ? (
    <Modal
      isOpen={isOpen}
      closeModal={() => dispatch(closeModal())}
      type={type}
      launch={launch}
      data={{ ...launches[launch]?.data }}
      detailsList={launches[launch]?.detailsList}
    >
      {type === "crew" && <Crew crew={[...currentLaunchData.crew]} />}
      {type === "launchpad" && (
        <Launchpad launchpad={{ ...currentLaunchData.launchpad }} />
      )}
      {type.includes("landpad") && (
        <Landpad
          cores={[
            ...currentLaunchData.cores.map((core) =>
              core?.landpad?.name ? core : null
            ),
          ]}
        />
      )}
    </Modal>
  ) : null;
};
