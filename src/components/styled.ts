import styled from "styled-components";

export const FlexRow = styled.div<{
  justifyContent?: string;
  alingItems?: string;
  height?: string;
}>`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: ${(props) => (props.alingItems ? props.alingItems : "center")};
  height: ${(props) => (props.height ? props.height : "auto")};
`;

export const FlexColumn = styled.div<{
  justifyContent?: string;
  alingItems?: string;
  height?: string;
}>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: ${(props) => (props.alingItems ? props.alingItems : "center")};
  height: ${(props) => (props.height ? props.height : "auto")};
`;

export const Button = styled.button`
  outline: none;
  padding: 5px 10px;
  cursor: pointer;
  border: 1px solid #000000;
  background: #ffffff;
  color: #000000;
  transition: all 0.3s;

  &:hover {
    background: #000000;
    color: #ffffff;
    border: 1px solid #ffffff;
  }
`;

export const Input = styled.input`
  outline: none;
  padding: 5px 10px;
`;

export const IconButton = styled.button`
  border: none;
  background: transparent;
  display: flex;
`;

export const Icon = styled.span`
  background-repeat: no-repeat;
  background-position: center;
`;

export const BackIcon = styled(Icon)`
  background-image: url("/icons/back.svg");
  width: 50px;
  height: 50px;
  margin-top: 10px;
`;

export const ContentBackground = styled(FlexColumn)`
  background: #e8f6ef;
  padding: 10px;
`;
