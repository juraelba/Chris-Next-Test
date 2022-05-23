import styled from 'styled-components'

export const MoonDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`

export const Title = styled.label`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 32px;
  text-transform: uppercase;
  color: #CDAC5A;
  line-height: 100%;
  @media (max-width: 540px) {
    font-size: 24px;
  }
`

export const DateTime = styled.label`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 82px;
  text-align:center;
  color: #FFFFFF;
  line-height: 100%;
  @media (max-width: 540px) {
    font-size: 70px;
  }
`