import React from 'react'
import { CouterValue } from '../../../../types'
import Counter from '../../../common/Counter/Counter'
import {
  Container,
  Between,
} from './counter-group.styles'

interface CouterGroupProps {
  timeCounter: CouterValue[];
}

const CouterGroup: React.FC<CouterGroupProps> = ({
  timeCounter,
}) => {
  return (
    <Container>
        {timeCounter?.map((Timedata , index) => (
          <React.Fragment  key={index}>
            <Counter title={Timedata.title} value={Timedata.value} />
            {index != timeCounter.length - 1 && <Between>:</Between>}
          </React.Fragment >
        ))}
      
    </Container>
  )
}
export default CouterGroup;
