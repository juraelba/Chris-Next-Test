import styled from 'styled-components'

export const ModalContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const ModalTitle = styled.p`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #FCFCF9;
  margin: 0;
  padding: 0 20px;
  @media (max-width: 496px) {
    font-size: 20px;
  }
`

export const CopyLinkTitle = styled.p`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #7F8596;
  margin-top: 32px;
  margin-bottom: 16px;
`
