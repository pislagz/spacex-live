import React from "react";
import Modal from "styled-react-modal";
import { Box } from "app/components/common/ui";

export const LandpadDetailsModal = ({ isOpen, closeModal, data }) => (
  <Modal isOpen={isOpen}>
    <Box bg="white" p="3rem">
      <p>LandpadDetailsModal</p>
      <button onClick={closeModal}>Close modal</button>
    </Box>
  </Modal>
);
