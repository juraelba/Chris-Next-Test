import styled from "styled-components";

export const CopylinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 8px 8px 12px;
  height: 56px;
  background: #22252D;
  border: 1px solid rgba(73, 78, 91, 0.3);
  border-radius: 250px;
`;

export const Imagelink = styled.div`
  display: flex;
  align-items: center;
`

export const CopiedLInk = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #7F8596;
  margin: 0 0 0 8px;
  @media (max-width: 496px) {
    font-size: 14px;
  }
`
