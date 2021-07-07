import AuthModule from "../Authentication/AuthModule";
import { FlexColumn, SectionName } from "../styled";

const Main: React.FC<any> = () => {
  return (
    <FlexColumn height={"100vh"}>
      <SectionName>Main Page</SectionName>
      <AuthModule />
    </FlexColumn>
  );
};

export default Main;
