import React, { useState, useEffect } from "react";
import { Word } from "../../redux/interfaces/interfaces";
import { IconButton } from "../styled";
import {
  LearWordsRow,
  LearnWordCell,
  LearnControls,
  ShowIcon,
  CheckIcon,
  CrossIcon,
  LernItemText,
} from "./styled";

interface Props {
  word: Word;
  rigthAnswer: Function;
  wrongAnswer: Function;
}

const LearnItem: React.FC<any> = ({
  word,
  rigthAnswer,
  wrongAnswer,
}: Props) => {
  const [displayTranslation, setDisplayTranslation] = useState<boolean>(false);

  useEffect(() => {}, []);

  const processWordType = (type: number): string => {
    switch (type) {
      case 0:
        return "verb";
      case 1:
        return "noun";
      case 2:
        return "adjective";
      case 3:
        return "phrase";
      default:
        return "n/a";
    }
  };

  const handleShow = (): void => {
    setDisplayTranslation(true);
  };

  const handleTrue = (): void => {
    setDisplayTranslation(false);

    const newWord: Word = {
      ...word,
      success: word.success < 5 ? (word.success += 1) : 5,
    };

    rigthAnswer(newWord);
  };

  const handleFalse = (): void => {
    wrongAnswer();
    setDisplayTranslation(false);
  };

  return (
    <>
      <LearWordsRow>
        <LearnWordCell
          width={"50%"}
          justifyContent={"center"}
          alingItems={"center"}
        >
          <LernItemText>{word.name}</LernItemText>
          <LernItemText>{word.transcription}</LernItemText>
          <LernItemText>{processWordType(word.type)}</LernItemText>
        </LearnWordCell>
        <LearnWordCell
          width={"50%"}
          justifyContent={"center"}
          alingItems={"center"}
        >
          {displayTranslation ? (
            <LernItemText>word.translation</LernItemText>
          ) : (
            ""
          )}
        </LearnWordCell>
      </LearWordsRow>
      <LearnControls>
        <IconButton onClick={handleShow}>
          <ShowIcon />
        </IconButton>
        <IconButton onClick={handleTrue}>
          <CheckIcon />
        </IconButton>
        <IconButton onClick={handleFalse}>
          <CrossIcon />
        </IconButton>
      </LearnControls>
    </>
  );
};

export default LearnItem;
