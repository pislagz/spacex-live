import { GlobalStyles } from "app/styles/global-styles";
import { Header } from "app/components/common/Header";
import { Content, Wrapper, Background } from "./styled";
import { Sidebar } from "app/components/common/Sidebar";

export const Root = () => (
  <>
    <GlobalStyles />
    <Background />
    <Wrapper>
      <Sidebar />
      <Content>
        <Header />
      </Content>
    </Wrapper>
  </>
);
