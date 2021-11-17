import StyledReactModal from "styled-react-modal";
import styled from "styled-components";
import { Flex, Box } from "app/components/common/ui";
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
      <Topbar name={data.name} list={availableDetails} type={type} />

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

  height: 100%;
  width: 100%;
  padding: 1rem;
  overflow-y: auto;
  
  ${mediaQuery.sm}{
    height: 90%;
    width: 90%;
    border-radius: ${radii.lg};
  }

  ${mediaQuery.md}{
    padding: 2rem;
    width: 95%;
    height: 80%;
    max-height: 80vh;
  }

  ${mediaQuery.xl}{
    
    padding: 4rem;
    width: 1150px;
    height: 700px;
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
    width: 100%;
    height: 100%;

    ${mediaQuery.lg} {
      justify-content: flex-start;
      align-items: flex-start;
    }
  `,
  RoutesWrapper: styled(Flex).attrs({ as: "ul", m: "0", p: "0" })`
    list-style: none;
  `,
  ModalRoute: styled(Box).attrs({ as: "li", m: "0", p: "0" })``,
};
