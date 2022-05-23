import styled from "styled-components";

export const StyledModalBackground = styled.div`
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledModalContentWrapper = styled.div<{
  width?: string;
  height?: string;
}>`
  height: ${(props) => props.height || "80%"};
  width: ${(props) => props.width || "80%"};
  border-radius: 32px;
  box-shadow: 0px 32px 64px -16px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(49, 52, 63, 0.75);
  background: #1F2128;
  position: relative;
  padding: 104px 40px 40px;
  @media (max-width: 496px) {
    width:100%;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 36px;
  right: 51px;
  color: #494E5B;
  font-size: 30px;
  cursor: pointer;
`
