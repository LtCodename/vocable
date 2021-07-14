import styled from "styled-components";
import { FlexColumn } from "../styled";

export const MessageToastWrapper = styled(FlexColumn)`
  position: absolute;
  top: 0;
  z-index: 999;
  background: #b8dfd8;
  padding: 10px;
  color: #4c4c6d;
  font-weight: 600;
  line-height: 16px;
`;

export const MessageToastText = styled.span`
  text-align: center;
`;
