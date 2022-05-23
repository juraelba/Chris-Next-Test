import React from 'react'
import {
  CounterWrapper,
  CounterValue,
  CounterTitle,
} from './counter.styles'

interface CounterProps {
  title: string;
  value: number;
}

const Counter: React.FC<CounterProps> = ({
  title,
  value,
}) => {
  return (
    <CounterWrapper>
      <CounterValue>{value}</CounterValue>
      <CounterTitle>{title}</CounterTitle>
    </CounterWrapper>
)
}
export default Counter;
