import React from "react";
import Modal from "styled-react-modal";
import { Box } from "app/components/common/ui";

export const LaunchpadDetailsModal = ({ isOpen, closeModal, data }) => (
  <Modal isOpen={isOpen}>
    <Box bg="white" p="3rem">
      <p>LaunchpadDetailsModal</p>
      <button onClick={closeModal}>Close modal</button>
    </Box>
  </Modal>
);
