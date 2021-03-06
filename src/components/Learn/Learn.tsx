/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { BackIcon, ContentBackground, IconButton } from "../styled";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { User, Word } from "../../redux/interfaces/interfaces";
import LearnItem from "./LearnItem";
import {
  Fake,
  LearnItemWrapper,
  WordsCounter,
  RestrictedBackgoundLearn,
} from "./styled";
import fire from "../../Firebase";
import { getUsers } from "../../redux/effects/Users";

const Learn: React.FC<any> = ({ history }) => {
  const [authorized, setAuthorized] = useState<boolean>(false);
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [currentUser, setCurrentUser] = useState<User>();
  const [words, setWords] = useState<Word[]>([]);
  const [wordsAreReady, setWordsAreReady] = useState<boolean>(false);
  const [wordIndex, setWordIndex] = useState<number>(0);

  const authData = useSelector((state: AppState) => state.authData);
  const users = useSelector((state: AppState) => state.users);

  const dispatch = useDispatch();

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
    if (currentUser && wordIndex === 0) {
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

  const handleRight = (word: Word): void => {
    saveWord(word);
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

  const saveWord = (nextWord: Word): void => {
    const userVocabulary: Word[] = [
      ...currentUser?.vocabulary.filter(
        (word: Word) => word.id !== nextWord.id
      ),
    ];

    userVocabulary.push(nextWord);

    fire
      .firestore()
      .collection("users")
      .doc(currentUser?.id)
      .update({
        vocabulary: userVocabulary,
      })
      .then(() => {
        dispatch(getUsers());
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const learnItem = (
    <>
      <LearnItem
        word={words[wordIndex]}
        rigthAnswer={(word: Word) => handleRight(word)}
        wrongAnswer={() => handleWrong()}
      />
      <WordsCounter>{`${wordIndex + 1}/${words.length}`}</WordsCounter>
    </>
  );

  return (
    <ContentBackground height={"100vh"} justifyContent={"space-between"}>
      <RestrictedBackgoundLearn>
        <IconButton onClick={() => handleLink("/main")}>
          <BackIcon />
        </IconButton>
        {wordsAreReady ? (
          <LearnItemWrapper>{learnItem}</LearnItemWrapper>
        ) : null}
        <Fake />
      </RestrictedBackgoundLearn>
    </ContentBackground>
  );
};

export default withRouter(Learn);
