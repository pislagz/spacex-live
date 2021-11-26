import React from "react";
import { Modal } from "app/components/common/Modal";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "app/redux/slices/modalSlice";
import { selectRockets, selectModal } from "app/redux/selectors";
import { Overview } from "app/components/common/Modal/components/views/rocket/Overview";
import { Photos } from "app/components/common/Modal/components/views/rocket/Photos";

export const RocketsModal = () => {
  const dispatch = useDispatch();
  const { rockets } = useSelector(selectRockets);
  const { isOpen, type, item } = useSelector(selectModal);
  const choosenRocketData = rockets.filter(({ name }) => name === item)[0];

  return isOpen ? (
    <Modal
      isOpen={isOpen}
      closeModal={() => dispatch(closeModal())}
      type={type}
      item={item}
      data={choosenRocketData}
      detailsList={[
        { label: "Overview", isAvailable: true },
        { label: "Photos", isAvailable: true },
      ]}
    >
      {type === "Overview" && (
        <Overview data={rockets.filter(({ name }) => name === item)[0]} />
      )}
      {type === "Photos" && <Photos data={choosenRocketData.flickr_images} />}
    </Modal>
  ) : null;
};
