import React, { useState, useEffect } from "react";
import { Word } from "../../redux/interfaces/interfaces";
import { BackIcon, IconButton } from "../styled";
import { WordEditModalWrapper } from "./styled";

interface Props {
  word: Word;
  show: boolean;
  back: Function;
}

const WordEditModal: React.FC<any> = ({ word, show, back }: Props) => {
  const [displayType, setDisplayType] = useState<string>("");

  useEffect(() => {}, []);

  const handleBack = (): void => {
    back();
  };

  return (
    <WordEditModalWrapper show={show}>
      <IconButton onClick={handleBack}>
        <BackIcon />
      </IconButton>
    </WordEditModalWrapper>
  );
};

export default WordEditModal;
