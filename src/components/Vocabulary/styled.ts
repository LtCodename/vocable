import styled from "styled-components";
import { FlexColumn, FlexRow } from "../styled";

export const WordsTable = styled(FlexColumn)`
  width: 100%;
  margin-top: 10px;
`;

export const WordsRow = styled(FlexRow)`
  width: 100%;
  border-right: 3px solid #ffe194;
  border-left: 3px solid #ffe194;
  border-bottom: 3px solid #ffe194;

  :first-child {
    border-top: 3px solid #ffe194;
  }
`;

export const WordCell = styled(FlexRow)<{
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
