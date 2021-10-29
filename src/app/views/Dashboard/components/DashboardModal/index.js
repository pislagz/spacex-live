import React from "react";
import { Modal } from "app/components/common/Modal";
import { selectDashboard, selectModal } from "app/redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "app/redux/slices/modalSlice";
import { Crew } from "app/components/common/Modal/components/views/Crew";

export const DashboardModal = () => {
  const dispatch = useDispatch();
  const { launches } = useSelector(selectDashboard);
  const { isOpen, type, launch } = useSelector(selectModal);

  return isOpen ? (
    <Modal
      isOpen={isOpen}
      closeModal={() => dispatch(closeModal())}
      type={type}
      launch={launch}
      data={{ ...launches[launch]?.data }}
      detailsList={launches[launch]?.detailsList}
    >
      {type === "crew" && <Crew crew={{ ...launches[launch]?.data?.crew }} />}
    </Modal>
  ) : null;
};
