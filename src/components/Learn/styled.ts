import styled from "styled-components";
import { FlexColumn, FlexRow, Icon } from "../styled";

export const LearWordsRow = styled(FlexRow)`
  width: 100%;
  border: 3px solid #ffe194;
`;

export const LearnWordCell = styled(FlexColumn)<{
  width?: string;
}>`
  flex-grow: 1;
  width: ${(props) => (props.width ? props.width : "auto")};
  height: 100%;
  padding: 5px;
  display: flex;

  :not(:last-child) {
    border-right: 3px solid #ffe194;
  }
`;

export const LearnControls = styled(FlexRow)`
  margin-top: 10px;
`;

export const ShowIcon = styled(Icon)`
  background-image: url("/icons/show.svg");
  width: 50px;
  height: 50px;
`;

export const CheckIcon = styled(Icon)`
  background-image: url("/icons/check.svg");
  width: 50px;
  height: 50px;
`;

export const CrossIcon = styled(Icon)`
  background-image: url("/icons/cross.svg");
  width: 50px;
  height: 50px;
`;

export const WordsCounter = styled.span`
  margin-top: 10px;
  color: #4c4c6d;
`;

export const LernItemText = styled.span`
  color: #4c4c6d;
  text-align: center;
`;

export const Fake = styled.span`
  height: 52px;
`;

export const LearnItemWrapper = styled(FlexColumn)`
  width: 100%;
`;

export const RestrictedBackgoundLearn = styled(FlexColumn)`
  max-width: 420px;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;
