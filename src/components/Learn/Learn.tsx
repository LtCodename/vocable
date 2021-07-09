/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { BackIcon, ContentBackground, IconButton } from "../styled";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { User, Word } from "../../redux/interfaces/interfaces";
import LearnItem from "./LearnItem";
import { WordsCounter } from "./styled";

const Learn: React.FC<any> = ({ history }) => {
  const [authorized, setAuthorized] = useState<boolean>(false);
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [currentUser, setCurrentUser] = useState<User>();
  const [words, setWords] = useState<Word[]>([]);
  const [wordsAreReady, setWordsAreReady] = useState<boolean>(false);
  const [wordIndex, setWordIndex] = useState<number>(0);

  const authData = useSelector((state: AppState) => state.authData);
  const users = useSelector((state: AppState) => state.users);

  useEffect(() => {
    if (users.users.length) {
      setAllUsers(users.users);
    }
  }, [users]);

  useEffect(() => {
    if (authData.authData) {
      if (authData.authData.uid.length) {
        setAuthorized(true);
      } else {
        history.push("/main");
      }
    }
  }, [authData]);

  useEffect(() => {
    if (allUsers.length && authorized) {
      const foundUser = allUsers.find(
        (user: User) => user.uid === authData.authData.uid
      );
      setCurrentUser(foundUser);
    }
  }, [allUsers, authorized]);

  useEffect(() => {
    if (currentUser) {
      reshuffle();
    }
  }, [currentUser]);

  useEffect(() => {
    if (words.length) {
      setWordsAreReady(true);
    }
  }, [words]);

  const shuffle = (wordsArray: Word[]): Word[] => {
    for (let i = wordsArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = wordsArray[i];
      wordsArray[i] = wordsArray[j];
      wordsArray[j] = temp;
    }

    return wordsArray;
  };

  const reshuffle = (): void => {
    if (currentUser) {
      const wordsToLearn: Word[] = currentUser.vocabulary.filter(
        (word: Word) => word.new
      );

      if (wordsToLearn.length === 0) {
        history.push("/vocabulary");
      }

      const shuffled: Word[] = shuffle(wordsToLearn);

      setWords(shuffled);
    }
  };

  const handleLink = (page: string): void => {
    history.push(page);
  };

  const handleRight = (): void => {
    nextWord();
  };

  const handleWrong = (): void => {
    nextWord();
  };

  const nextWord = (): void => {
    let currentIndex: number = wordIndex;

    if (currentIndex === words.length - 1) {
      reshuffle();
      setWordIndex(0);
    } else {
      setWordIndex((currentIndex += 1));
    }
  };

  return (
    <ContentBackground height={"100vh"} justifyContent={"flex-start"}>
      <IconButton onClick={() => handleLink("/main")}>
        <BackIcon />
      </IconButton>
      {wordsAreReady ? (
        <>
          <LearnItem
            word={words[wordIndex]}
            rigthAnswer={() => handleRight()}
            wrongAnswer={() => handleWrong()}
          />
          <WordsCounter>{`${wordIndex + 1}/${words.length}`}</WordsCounter>
        </>
      ) : null}
    </ContentBackground>
  );
};

export default withRouter(Learn);
