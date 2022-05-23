import styled from 'styled-components'

export const CounterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    width: 102px;
    height: 84px;
    background: rgba(119, 126, 144, 0.18);
    border-radius: 8px;
    @media (max-width: 540px) {
        width: 70px;
        height: 67px;
    }
`
export const CounterValue = styled.p`
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 24px;
    line-height: 100%;
    color: #FFFFFF;
    margin: 0;
    @media (max-width: 540px) {
        font-size: 18px;
    }
`

export const CounterTitle = styled.p`
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: rgba(255, 255, 255, 0.6);
    margin: 0;
    @media (max-width: 540px) {
        font-size: 14px;
    }
`
