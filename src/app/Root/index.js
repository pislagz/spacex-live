import { GlobalStyles } from "app/styles/global-styles";
import { Header } from "app/components/common/Header";
import { Content } from "app/components/common/ui/Content";
import { Sidebar } from "app/components/common/Sidebar";
import { theme } from "app/styles/theme";
import { ThemeProvider } from "styled-components";

export const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Sidebar />
    <Content>
      <Header />
    </Content>
  </ThemeProvider>
);
