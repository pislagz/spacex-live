import React from "react";
import Modal from "styled-react-modal";
import { Box } from "app/components/common/ui";

export const CrewDetailsModal = ({ isOpen, closeModal, data }) => (
  <Modal
    isOpen={isOpen}
    onBackgroundClick={closeModal}
    onEscapeKeydown={closeModal}
  >
    <Box bg="white" p="3rem">
      <p>CrewDetailsModal</p>
      <button onClick={closeModal}>Close modal</button>
    </Box>
  </Modal>
);
