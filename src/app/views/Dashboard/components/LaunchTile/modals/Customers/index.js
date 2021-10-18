import React from "react";
import Modal from "styled-react-modal";
import { Box } from "app/components/common/ui";

export const CustomersDetailsModal = ({ isOpen, closeModal, data }) => (
  <Modal isOpen={isOpen}>
    <Box bg="white" p="3rem">
      <p>CustomersDetailsModal</p>
      <button onClick={closeModal}>Close modal</button>
    </Box>
  </Modal>
);
