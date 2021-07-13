import React from "react";
import { Fake } from "../Learn/styled";
import { BackIcon, ContentBackground, FlexColumn, IconButton } from "../styled";
import { RestrictedBackgoundInfo, InfoText } from "./styled";
import { withRouter } from "react-router-dom";
import { VERSION } from "../../App";

const Info: React.FC<any> = ({ history }) => {
  const handleLink = (page: string): void => {
    history.push(page);
  };

  return (
    <ContentBackground height={"100vh"} justifyContent={"space-between"}>
      <RestrictedBackgoundInfo>
        <IconButton onClick={() => handleLink("/main")}>
          <BackIcon />
        </IconButton>
        <FlexColumn>
          <InfoText>{`Version: ${VERSION}`}</InfoText>
          <InfoText>
            Hey there! Name's Yevhen, nice to meet you. This here small and
            humble app is not as simple as it looks. It's made with functional
            React (hooks!), state management is done with Redux, backend and
            hosting are implemented with the help of Google Firebase, styles are
            done with styled-components and on top of that - I'm using
            TypeScript. It was finished in a couple of days in July 2021 and
            fully represents my Front-End knowledge and coding skills. Feel free
            to poke around.
          </InfoText>
          <InfoText>
            Basically, I needed a simple app to help me learn new English words,
            and I've made one.
          </InfoText>
          <InfoText>
            It's mainly designed to be used on mobile devices and can look...
            weird when used on big screens.
          </InfoText>
          <InfoText>
            A couple of tips: double-tap the word in the table to edit it. Tap
            the word name once to see its transcription.
          </InfoText>
        </FlexColumn>
        <Fake />
      </RestrictedBackgoundInfo>
    </ContentBackground>
  );
};

export default withRouter(Info);
