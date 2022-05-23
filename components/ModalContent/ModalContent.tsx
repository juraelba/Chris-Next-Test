import React from 'react'
import SocialButtons  from './SocialButtons/SocialButtons'
import Copylink  from '../common/Copylink/CopyLink'
import {
  ModalContentWrapper,
  ModalTitle,
  CopyLinkTitle
} from "./modal-content.styles"
import { LINK_URL } from '../../constants'

const ModalContent: React.FC = () => {
  return (
    <ModalContentWrapper>
      <ModalTitle>Share this event with your social community</ModalTitle>        
      <SocialButtons />
      <CopyLinkTitle>Or copy link</CopyLinkTitle>       
      <Copylink link={LINK_URL}/>
    </ModalContentWrapper>
  )
}
export default ModalContent;
