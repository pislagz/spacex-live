import React, { useEffect } from "react";
import { Box, Flex } from "app/components/common/ui";
import { colors } from "app/styles/theme/colors";
import { Label } from "app/components/common/Label";
import { useDispatch, useSelector } from "react-redux";
import { selectModal } from "app/redux/selectors";
import Modal from "styled-react-modal";
import { openModal, closeModal } from "app/redux/reducers/modalReducer";

export const IconButton = ({ icon, label }) => {
  const modal = useSelector(selectModal);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(modal);
  }, [modal]);

  return (
    <Flex
      as="li"
      flexDirection="column"
      alignItems="center"
      m="5px"
      width={{ _: "74px", md: "91px" }}
    >
      <Modal isOpen={modal.isOpen}>
        <Box bg="white" p="3rem">
          <button
            onClick={() =>
              dispatch(closeModal({ type: "", data: "modal-closed" }))
            }
          >
            Close modal
          </button>
        </Box>
      </Modal>
      <Flex
        as="button"
        border="none"
        borderRadius={{ _: "sm" }}
        background={colors.gray.dark}
        width="60px"
        height="40px"
        alignItems="center"
        justifyContent="center"
        style={{ cursor: "pointer" }}
        onClick={() =>
          dispatch(openModal({ type: "main", data: "modal-opened" }))
        }
      >
        {icon}
      </Flex>
      <Label mt="xxs" fontSize={{ _: "xxxs", md: "xxs" }}>
        {label}
      </Label>
    </Flex>
  );
};
