import styled from "styled-components";
import { FlexColumn, Icon } from "../styled";

export const MainWrapper = styled(FlexColumn)`
  background: #e8f6ef;
  padding: 10px;
`;

export const UserInfoWrapper = styled(FlexColumn)``;

export const LogoutIcon = styled(Icon)`
  background-image: url("/icons/logout.svg");
  width: 50px;
  height: 50px;
`;

export const FakeSpace = styled.span`
  width: 50px;
  height: 50px;
`;
