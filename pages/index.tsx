import React, { useState } from 'react'
import MoonDate from '../components/MoonLanding/MoonDate/MoonDate'
import MoonCounterTime from '../components/MoonLanding/MoonCounter/MoonCounter'
import Modal from '../components/common/Modal/Modal'
import { Button } from '../components/common/Button/Button'
import ModalContent from '../components/ModalContent/ModalContent'
import {
  Container,
  ButtonContainer
} from './index.styles'
import { COMMING_DATE } from '../constants'

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
      setShowModal(!showModal);
  }
  return (
    <Container>
      <MoonDate commingDate={COMMING_DATE} />
      <MoonCounterTime commingDate={COMMING_DATE} />
      <ButtonContainer>
        <Button title={"Share Event"} onClick={handleModal} />
      </ButtonContainer>
      {showModal && <Modal handleModal={handleModal} Content={<ModalContent />} />}
    </Container>
  )
}

export default Home;
