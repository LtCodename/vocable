import React from "react";
import { MessageToastWrapper } from "./styled";

interface Props {
  messageText: string;
}

const MessageToast: React.FC<any> = ({ messageText }: Props) => {
  return (
    <MessageToastWrapper>
      <span>{messageText}</span>
    </MessageToastWrapper>
  );
};

export default MessageToast;
