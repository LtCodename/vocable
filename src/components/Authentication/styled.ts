import styled from "styled-components";
import { FlexColumn, Icon } from "../styled";
import { Input } from "../styled";

export const AuthInput = styled(Input)`
  margin-bottom: 10px;
`;

export const LoginIcon = styled(Icon)`
  background-image: url("/icons/login.svg");
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

export const DemoIcon = styled(Icon)`
  background-image: url("/icons/demo.svg");
  width: 50px;
  height: 50px;
`;

export const AuthColumn = styled(FlexColumn)`
  position: relative;
  height: 100%;
`;
