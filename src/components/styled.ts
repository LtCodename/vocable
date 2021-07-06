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
