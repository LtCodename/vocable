import styled from "styled-components";
import { Icon } from "../styled";
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

export const AuthErrorText = styled.span`
  text-align: center;
  font-size: 14px;
  max-width: 180px;
  margin-bottom: 5px;
  color: #4c4c6d;
`;
