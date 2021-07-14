import styled from "styled-components";
import { FlexColumn, Icon } from "../styled";

export const UserInfoWrapper = styled(FlexColumn)`
  height: 100%;
`;

export const LogoutIcon = styled(Icon)`
  background-image: url("/icons/logout.svg");
  width: 50px;
  height: 50px;
`;

export const FakeSpace = styled.span`
  width: 50px;
  height: 50px;
`;

export const LearnIcon = styled(Icon)`
  background-image: url("/icons/learn.svg");
  width: 50px;
  height: 50px;
  margin-top: 10px;
`;

export const InfoIcon = styled(Icon)`
  background-image: url("/icons/info.svg");
  width: 50px;
  height: 50px;
  margin-top: 10px;
`;

export const VocabularyIcon = styled(Icon)`
  background-image: url("/icons/vocabulary.svg");
  width: 50px;
  height: 50px;
  margin-top: 10px;
`;

export const MainPageMessage = styled.span`
  text-align: center;
  color: #4c4c6d;
`;

export const RestrictedBackgoundMain = styled(FlexColumn)`
  max-width: 420px;
  height: 100%;
`;

export const VocabuaryIconWrapper = styled.span`
  position: relative;
`;

export const ReadyCounter = styled.span`
  position: absolute;
  background: #4c4c6d;
  padding: 1px 6px 2px 6px;
  border-radius: 9px;
  color: #ffe194;
  font-weight: bolder;
  bottom: -40px;
  left: 53%;
  transform: translate(-50%, -50%);
`;

export const LoadingSign = styled.span`
  color: #4c4c6d;
`;
