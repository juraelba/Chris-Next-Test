import React from 'react'
import Image from 'next/image'
import FaceBookIcon from '/assets/facebook.png'
import TwitterIcon from '/assets/twiter.png'
import {
  SocialButtonGroup,
  TwiterButton,
  FacebookButton,
} from './social-button.styles'

const SocialButtons: React.FC = () => {
  return (
    <SocialButtonGroup>
      <TwiterButton>
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          <Image
            src={TwitterIcon}
            alt="twitter icon"
            width={20}
            height={16}
            />
          </a>
        </TwiterButton>
      <FacebookButton>
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          <Image
            src={FaceBookIcon}
            alt="facebook icon"
            width={10}
            height={18}
          />
        </a>
      </FacebookButton>
    </SocialButtonGroup>
  )
}
export default SocialButtons;
