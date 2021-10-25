import StyledReactModal from "styled-react-modal";
import styled from "styled-components";
import { Flex, Box } from "app/components/common/ui";
import { Button } from "app/components/common/ui/Button";
import { CloseIcon } from "assets/icons/functional/CloseIcon";
import { colors } from "app/styles/theme/colors";
import { radii } from "app/styles/theme/sizings";

export const Modal = ({
  closeModal,
  isOpen,
  children,
  type,
  launch,
  name,
  availableDetails,
  data,
}) => {
  return (
    <S.StyledModal
      isOpen={isOpen}
      onBackgroundClick={closeModal}
      onEscapeKeydown={closeModal}
    >
      <S.Topbar>
        <S.RoutesWrapper>
          {data.name}
          {" | "}
          {availableDetails?.map((title) => (
            <S.ModalRoute key={title}>| {title} |</S.ModalRoute>
          ))}
          {console.log(availableDetails)}
        </S.RoutesWrapper>
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
  border-radius: ${radii.lg};
  min-width: 20rem;
  min-height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.white};
  padding: 1rem;
  `,
  Topbar: styled(Flex)`
    width: 100%;
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

// <Wrapper>
//   <Inner>{children}</Inner>
// </Wrapper>

// export const ModalBackground = styled.div`
//   @keyframes animateOnShows {
//     0% {
//       opacity: 0%;
//     }

//     100% {
//       opacity: 100%;
//     }
//   }

//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background: rgba(0, 0, 0, 0.5);
//   z-index: 999;
//   animation: animateOnShows 0.2s ease-out;
// `;

// const CloseButton = styled.button`
//   position: absolute;
//   top: 1rem;
//   right: 1rem;
//   border: none;
//   outline: none;
//   background: none;
//   cursor: pointer;
//   transition: 0.3s all;

//   &:hover {
//     transform: scale(1.05);
//   }
//   img {
//     height: 2rem;
//   }
// `;

// const Inner = styled(Flex)`
//   position: relative;
//   width: 80%;
//   max-width: 1260px;

//   @keyframes animateOn {
//     0% {
//       opacity: 0%;
//       transform: translateY(50px);
//     }

//     100% {
//       opacity: 100%;
//       transform: translateY(0px);
//     }
//   }

//   width: 90%;
//   min-height: 400px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   background: white;
//   animation: animateOn 0.3s ease-out;

//   img {
//     object-fit: contain;
//   }

//   h3 {
//     font-weight: 500;
//     margin: 1rem 0;
//   }
// `;

// const StyledModal = StyledReactModal.styled`
//   display: flex;
//   justify-content: center;
//   align-items: flex-start;
//   position: relative;
//   height: 100%;
//   background: rgba(0,0,0,0);
//   padding: 3rem 0;
//   width: 100%;
//   overflow-y: auto;
//   max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "initial")};
// `;

// export const Modal = ({ children, closeModal, isOpen, maxWidth }) => {
//   return (
//     <StyledModal isOpen={isOpen} maxWidth={maxWidth}>
//       <Inner>
//         {children}{" "}
//         <CloseButton>
//           <img
//             src={"/assets/icons/close.svg"}
//             alt="close modal"
//             onClick={closeModal}
//           />
//         </CloseButton>
//       </Inner>
//     </StyledModal>
//   );
// };
