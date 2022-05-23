import React from 'react'
import {
  MoonDateContainer,
  Title,
  DateTime,
} from './moon-date.styles'

interface MoonDateProps {
  commingDate: string;
}

const MoonDateComponent: React.FC<MoonDateProps> = ({
  commingDate,
}) => {
  const FormattedCommingDate = commingDate.split(" ")[0].replace(/\//g, ".");
  return (
    <MoonDateContainer>
      <Title>MOON LANDING PARTY</Title>
      <DateTime>{FormattedCommingDate}</DateTime>
    </MoonDateContainer>
  )
}

export default MoonDateComponent;
