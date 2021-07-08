import React, { useState, useEffect } from "react";
import { Word } from "../../redux/interfaces/interfaces";
import { IconButton } from "../styled";
import { CheckIcon, WordCell, WordsRow } from "./styled";
import WordEditModal from "./WordEditModal";

interface Props {
  word: Word;
  save: Function;
}

const WordItem: React.FC<any> = ({ word, save }: Props) => {
  const [displayType, setDisplayType] = useState<string>("name");
  const [clickCounter, setClickCounter] = useState<number>(0);
  const [showEditWindow, setShowEditWindow] = useState<boolean>(false);

  useEffect(() => {
    resetClick();

    if (clickCounter === 2) {
      setShowEditWindow(true);
      setClickCounter(0);
    }
  }, [clickCounter]);

  const processType = (type: number): string => {
    switch (type) {
      case 0:
        return "v.";
      case 1:
        return "n.";
      case 2:
        return "adj.";
      case 3:
        return "phr.";
      default:
        return "n/a";
    }
  };

  const handleNameDisplay = (): void => {
    setDisplayType(displayType === "name" ? "transcription" : "name");
  };

  const handleClick = (): void => {
    let clicks: number = clickCounter;
    clicks = clicks += 1;
    setClickCounter(clicks);
  };

  const resetClick = (): void => {
    setTimeout(() => {
      setClickCounter(0);
    }, 300);
  };

  const back = (): void => {
    setShowEditWindow(false);
  };

  const saveNextWord = (nextWord: Word): void => {
    save(nextWord);
    setShowEditWindow(false);
  };

  const handleCheck = (): void => {
    const prevoiusWord: Word = { ...word };
    prevoiusWord.new = false;
    save(prevoiusWord);
  };

  const check = (
    <IconButton onClick={handleCheck}>
      <CheckIcon />
    </IconButton>
  );

  return (
    <>
      <WordsRow onClick={() => handleClick()}>
        <WordCell
          width={"30%"}
          justifyContent={"flex-start"}
          alingItems={"center"}
          onClick={handleNameDisplay}
        >
          {displayType === "name" ? word.name : word.transcription}
        </WordCell>
        <WordCell width={"10%"} justifyContent={"center"} alingItems={"center"}>
          {processType(word.type)}
        </WordCell>
        <WordCell
          width={word.new ? "50%" : "60%"}
          justifyContent={"flex-start"}
          alingItems={"center"}
        >
          {word.translation}
        </WordCell>
        {word.new ? (
          <WordCell
            width={"10%"}
            justifyContent={"center"}
            alingItems={"center"}
          >
            {word.success === 5 ? check : `${word.success}/5`}
          </WordCell>
        ) : null}
      </WordsRow>
      {showEditWindow ? (
        <WordEditModal
          show={showEditWindow}
          word={word}
          back={back}
          save={(nextWord: Word) => saveNextWord(nextWord)}
        />
      ) : null}
    </>
  );
};

export default WordItem;
