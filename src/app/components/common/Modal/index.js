import StyledReactModal from "styled-react-modal";
import styled from "styled-components";

const StyledModal = StyledReactModal.styled``;

export const Modal = ({ children }) => (
  <Wrapper>
    <Inner>{children}</Inner>
  </Wrapper>
);

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
