import React from "react";
import Image from 'next/image'
import {
  CopylinkContainer,
  Imagelink,
  CopiedLInk,
} from "./copylink.styles";
import LinkImage from '/assets/link.png'
import  {Button}  from "../Button/Button";

interface CopylinkProps {
  link: string;
}

const Copylink: React.FC<CopylinkProps> = ({ link }) => {

  const handleCopy = () => {
    var textArea = document.createElement("textarea");
    textArea.value = link;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
  }

  return (
    <CopylinkContainer>
      <Imagelink>
        <Image
          src={LinkImage}
          alt="link icon"
          width={14}
          height={17}
        />
        <CopiedLInk>{link}</CopiedLInk>
      </Imagelink>
      <Button title={"Copy"} onClick={handleCopy} />
    </CopylinkContainer>
  );
};

export default Copylink;
