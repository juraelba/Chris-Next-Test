import React, {useState, useEffect} from 'react'
import  TimeComponent  from './CounterGroup/CounterGroup'
import { getSeperatedTimeFromNow } from '../../../utils';
import { CouterValue } from '../../../types';
import {
  CounterContainer,
  Title,
} from './moon-counter.styles'

interface CounterProps {
  commingDate: string;
}

const MoonCounterTime: React.FC<CounterProps> = ({
  commingDate,
}) => {
  const [timeCounter, setTimeCounter] = useState<CouterValue[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
    const timeCounter = getSeperatedTimeFromNow(commingDate);
    setTimeCounter(timeCounter);
    }, 1000);
    return () => clearInterval(interval);
  }, [])

  return (
    <CounterContainer>
      <Title>Anniversary starts in:</Title>
      <TimeComponent timeCounter={timeCounter}></TimeComponent>
    </CounterContainer>
  )
}

export default MoonCounterTime;
