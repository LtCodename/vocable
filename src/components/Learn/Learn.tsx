import React from "react";
import { withRouter } from "react-router-dom";
import { BackIcon, ContentBackground, IconButton } from "../styled";

const Learn: React.FC<any> = ({ history }) => {
  const handleLink = (page: string): void => {
    history.push(page);
  };

  return (
    <ContentBackground height={"100vh"} justifyContent={"flex-start"}>
      <IconButton onClick={() => handleLink("/main")}>
        <BackIcon />
      </IconButton>
    </ContentBackground>
  );
};

export default withRouter(Learn);
