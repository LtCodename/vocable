import AuthModule from "../Authentication/AuthModule";
import { FlexColumn } from "../styled";

const Main: React.FC<any> = () => {
  return (
    <FlexColumn height={"100vh"}>
      <span>Main Page</span>
      <AuthModule />
    </FlexColumn>
  );
};

export default Main;
