import { Box, CloseButton, Button } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Modal from "styled-react-modal";
import { selectModal } from "app/redux/selectors";
import { openModal, closeModal } from "app/redux/reducers/modalReducer";
import { GlobalStyles } from "app/theme/GlobalStyles";

const Wrapper = styled(Box)`
  width: 100%;
  background: #353535;
  height: 100%;
`;

export const Root = () => {
  const modal = useSelector(selectModal);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(modal);
  }, [modal]);

  return (
    <>
      <GlobalStyles />
      <Modal isOpen={modal.isOpen}>
        <Box bg="white" p="3rem">
          <CloseButton
            onClick={() =>
              dispatch(closeModal({ type: "", data: "modal-closed" }))
            }
          />{" "}
          eluwina
        </Box>
      </Modal>
      <Wrapper>
        <Button
          onClick={() =>
            dispatch(openModal({ type: "main", data: "modal-opened" }))
          }>
          Open modal
        </Button>
      </Wrapper>
    </>
  );
};
