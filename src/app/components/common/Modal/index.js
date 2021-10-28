import StyledReactModal from "styled-react-modal";
import styled from "styled-components";
import { Flex, Box } from "app/components/common/ui";
import { Button } from "app/components/common/ui/Button";
import { CloseIcon } from "assets/icons/functional/CloseIcon";
import { colors } from "app/styles/theme/colors";
import { radii } from "app/styles/theme/sizings";
import { Topbar } from "app/components/common/Modal/components/Topbar";
import { mediaQuery } from "app/styles/theme/breakpoints";
import { fontSizes } from "app/styles/theme/texts";

export const Modal = ({
  closeModal,
  isOpen,
  children,
  type,
  launch,
  name,
  detailsList,
  data,
}) => {
  const availableDetails = detailsList
    ? detailsList
        .filter(({ isAvailable }) => isAvailable)
        .map(({ label }) => label)
    : [];

  return (
    <S.StyledModal
      isOpen={isOpen}
      onBackgroundClick={closeModal}
      onEscapeKeydown={closeModal}
    >
      <S.Topbar>
        {console.log({ "modal headers": availableDetails })}
        <Topbar name={data.name} list={availableDetails} type={type} />
        <S.CloseIconWrapper onClick={closeModal}>
          <CloseIcon />
        </S.CloseIconWrapper>
      </S.Topbar>
      This is a {type} view ({launch} launch).
      <S.Contents>{children}</S.Contents>
    </S.StyledModal>
  );
};

const S = {
  StyledModal: StyledReactModal.styled`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.white};
  border-radius: ${radii.lg};
  min-height: 20rem;
  // max-width: 300px;
  height: 90vh;

  padding: 1rem;
  
  ${mediaQuery.xl}{
    padding: 3rem;
    width: 1150px;
    height: 800px;
    max-height: 80vh;
  }
  `,
  Topbar: styled(Flex)`
    width: 100%;
    font-size: ${fontSizes.md};
  `,
  Contents: styled(Flex)`
    justify-self: center;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  `,
  CloseIconWrapper: styled(Button)`
    display: flex;
    top: 0.5rem;
    right: 1rem;
    padding: 0, 5rem;
    cursor: pointer;
    margin-left: auto;
  `,
  RoutesWrapper: styled(Flex).attrs({ as: "ul", m: "0", p: "0" })`
    list-style: none;
  `,
  ModalRoute: styled(Box).attrs({ as: "li", m: "0", p: "0" })``,
};

// const Wrapper = styled(Flex).attrs({ flexDirection: column, width: "100%" })``;
// const TopbarX = () => (
//   <Wrapper>
//     <Navigation list={availableDetails} type={type} />
//     <UnmountClosed></UnmountClosed>
//   </Wrapper>
// );
