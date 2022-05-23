import styled from 'styled-components';

export const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3px;
  gap: 16px;
`

export const Title = styled.div`
  font-family: 'Montserrat';
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  @media (max-width: 540px) {
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;
  }
`
