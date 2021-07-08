import React, { useState } from "react";
import { Word } from "../../redux/interfaces/interfaces";
import { WordCell, WordsRow } from "./styled";

interface Props {
  word: Word;
}

const WordItem: React.FC<any> = ({ word }: Props) => {
  const [displayType, setDisplayType] = useState<string>("name");

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

  return (
    <WordsRow>
      <WordCell
        width={"30%"}
        justifyContent={"flex-start"}
        alingItems={"center"}
        onClick={handleNameDisplay}
      >
        {displayType === "name" ? word.name : word.transcription}
      </WordCell>
      <WordCell
        width={"10%"}
        justifyContent={"flex-start"}
        alingItems={"center"}
      >
        {processType(word.type)}
      </WordCell>
      <WordCell
        width={"60%"}
        justifyContent={"flex-start"}
        alingItems={"center"}
      >
        {word.translation}
      </WordCell>
    </WordsRow>
  );
};

export default WordItem;
