import React from "react";
import { Modal } from "app/components/common/Modal";
import { selectDashboard, selectModal } from "app/redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "app/redux/slices/modalSlice";

export const DashboardModal = () => {
  const dispatch = useDispatch();
  const { launches } = useSelector(selectDashboard);
  const modal = useSelector(selectModal);

  return modal.isOpen ? (
    <Modal
      isOpen={modal.isOpen}
      closeModal={() => dispatch(closeModal())}
      type={modal.type}
      launch={modal.launch}
      data={{ ...launches[modal.launch]?.data }}
      detailsList={launches[modal.launch]?.detailsList}
    ></Modal>
  ) : null;
};
