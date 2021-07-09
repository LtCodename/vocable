import styled from "styled-components";
import { FlexColumn, FlexRow, Icon, Input } from "../styled";

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

export const Tabs = styled(FlexRow)`
  width: 100%;
  margin-top: 10px;
`;

export const Tab = styled(FlexRow)<{
  active?: boolean;
}>`
  width: 100%;
  border-bottom: 3px solid #4c4c6d;
  padding-bottom: 5px;
  background: ${(props) =>
    props.active ? "rgb(76, 76, 109, 0.2)" : "transparent"};

  :not(:last-child) {
    margin-right: 10px;
  }
`;

export const TabName = styled.span`
  font-size: 20px;
  font-weight: bolder;
  color: #4c4c6d;
`;

export const WordEditModalWrapper = styled.div<{ show?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #e8f6ef;
  padding: 10px;
  flex-direction: column;
  display: ${(props) => (props.show ? "flex" : "none")};
  z-index: 999;
  align-items: center;
`;

export const EditInput = styled(Input)`
  margin-bottom: 10px;
  width: 100%;
  font-size: 15px;
`;

export const EditPropsWrapper = styled(FlexColumn)`
  margin-top: 10px;
  width: 100%;
`;

export const EditLabel = styled.span`
  font-weight: 500;
  margin-bottom: 10px;
  color: #4c4c6d;
`;

export const EditPropItem = styled(FlexColumn)`
  width: 100%;
`;

export const EditSelect = styled.select`
  border: none;
  width: 100%;
  background: #ffe194;
  padding: 5px 10px 5px 5px;
  color: #4c4c6d;
  outline: none;
  margin-bottom: 10px;
`;

export const SaveIcon = styled(Icon)`
  background-image: url("/icons/save.svg");
  width: 50px;
  height: 50px;
  margin-top: 10px;
`;

export const VocabularyHeader = styled(FlexRow)``;

export const AddIcon = styled(Icon)`
  background-image: url("/icons/add.svg");
  width: 50px;
  height: 50px;
`;

export const CheckIcon = styled(Icon)`
  background-image: url("/icons/check.svg");
  width: 30px;
  height: 30px;
`;

export const RestrictedBackgoundVocabulary = styled(FlexColumn)`
  max-width: 420px;
`;
