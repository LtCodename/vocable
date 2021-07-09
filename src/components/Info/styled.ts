import styled from "styled-components";
import { FlexColumn } from "../styled";

export const RestrictedBackgoundInfo = styled(FlexColumn)`
  max-width: 420px;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;

export const InfoText = styled.span`
  color: #4c4c6d;
  text-align: center;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
