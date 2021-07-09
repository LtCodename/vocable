import React, { useState } from "react";
import { Word } from "../../redux/interfaces/interfaces";
import { BackIcon, IconButton } from "../styled";
import {
  WordEditModalWrapper,
  EditInput,
  EditPropsWrapper,
  EditLabel,
  EditPropItem,
  EditSelect,
  SaveIcon,
  WordlEditModalContent,
} from "./styled";

interface Props {
  word?: Word;
  show: boolean;
  back: Function;
  save: Function;
}

const WordEditModal: React.FC<any> = ({ word, show, back, save }: Props) => {
  const [nameInputValue, setNameInputValue] = useState<string>(
    word ? word.name : ""
  );
  const [newSelectValue, setNewSelectValue] = useState<string>(
    word ? (word.new ? "y" : "n") : "y"
  );
  const [typeSelectValue, setTypeSelectValue] = useState<string>(
    word ? word.type.toString() : "0"
  );
  const [translationInputValue, setTranslationInputValue] = useState<string>(
    word ? word.translation : ""
  );
  const [transcriptionInputValue, setTranscriptionInputValuee] =
    useState<string>(word ? word.transcription : "");

  const handleBack = (): void => {
    back();
  };

  const handleSave = (): void => {
    if (
      nameInputValue.length === 0 ||
      transcriptionInputValue.length === 0 ||
      translationInputValue.length === 0
    ) {
      return;
    }

    const nextWord: Word = {
      id: word ? word.id : Date.now().toString(),
      success: word ? word.success : 0,
      new: word ? (newSelectValue === "y" ? true : false) : true,
      name: nameInputValue,
      transcription: transcriptionInputValue,
      translation: translationInputValue,
      type: parseInt(typeSelectValue),
    };

    save(nextWord);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.id) {
      case "name":
        setNameInputValue(e.target.value);
        return;
      case "transcription":
        setTranscriptionInputValuee(e.target.value);
        return;
      case "translation":
        setTranslationInputValue(e.target.value);
        return;
      default:
        return;
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.id) {
      case "new":
        setNewSelectValue(e.target.value);
        return;
      case "type":
        setTypeSelectValue(e.target.value);
        return;
      default:
        return;
    }
  };

  const newOptions = (
    <>
      <option value="y">Yes</option>
      <option value="n">No</option>
    </>
  );

  const typeOptions = (
    <>
      <option value={0}>Verb</option>
      <option value={1}>Noun</option>
      <option value={2}>Adjective</option>
      <option value={3}>Phrase</option>
    </>
  );

  return (
    <WordEditModalWrapper show={show}>
      <WordlEditModalContent>
        <IconButton onClick={handleBack}>
          <BackIcon />
        </IconButton>
        <EditPropsWrapper>
          <EditPropItem>
            <EditLabel>Word</EditLabel>
            <EditInput
              value={nameInputValue}
              placeholder={"Word"}
              onChange={handleInputChange}
              id={"name"}
            />
          </EditPropItem>
          <EditPropItem>
            <EditLabel>Transcription</EditLabel>
            <EditInput
              value={transcriptionInputValue}
              placeholder={"Transcription"}
              onChange={handleInputChange}
              id={"transcription"}
            />
          </EditPropItem>
          <EditPropItem>
            <EditLabel>Translation</EditLabel>
            <EditInput
              value={translationInputValue}
              placeholder={"Translation"}
              onChange={handleInputChange}
              id={"translation"}
            />
          </EditPropItem>
          {word ? (
            <EditPropItem>
              <EditLabel>New</EditLabel>
              <EditSelect
                value={newSelectValue}
                onChange={handleSelectChange}
                id={"new"}
              >
                {newOptions}
              </EditSelect>
            </EditPropItem>
          ) : null}
          <EditPropItem>
            <EditLabel>Type Of Speech</EditLabel>
            <EditSelect
              value={typeSelectValue}
              onChange={handleSelectChange}
              id={"type"}
            >
              {typeOptions}
            </EditSelect>
          </EditPropItem>
          <IconButton onClick={handleSave}>
            <SaveIcon />
          </IconButton>
        </EditPropsWrapper>
      </WordlEditModalContent>
    </WordEditModalWrapper>
  );
};

export default WordEditModal;
