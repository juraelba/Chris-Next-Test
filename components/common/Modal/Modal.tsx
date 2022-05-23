import { useState, useRef, useEffect, ReactNode } from "react";
import {
  StyledModalBackground,
  StyledModalContentWrapper,
  CloseButton,
} from "./modal.styles";

interface ModalProps {
  handleModal: () => void;
  Content: ReactNode;
}

const DefaultModal: React.FC<ModalProps> = ({ handleModal, Content }) => {

  return (
    <StyledModalBackground>
      <StyledModalContentWrapper width="496px" height="412px">
        <CloseButton onClick={handleModal}>
          &times;
        </CloseButton>
        {Content}
      </StyledModalContentWrapper>
    </StyledModalBackground>
  );
};

export default DefaultModal;
