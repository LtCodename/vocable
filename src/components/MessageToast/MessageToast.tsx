import React from "react";
import { MessageToastWrapper, MessageToastText } from "./styled";

interface Props {
  messageText: string;
}

const MessageToast: React.FC<any> = ({ messageText }: Props) => {
  return (
    <MessageToastWrapper>
      <MessageToastText>{messageText}</MessageToastText>
    </MessageToastWrapper>
  );
};

export default MessageToast;
