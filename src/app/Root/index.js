import { GlobalStyles } from "app/styles/global-styles";
import { Header } from "app/components/common/Header";
import { Content } from "app/components/common/ui/Content";
import { Sidebar } from "app/components/common/Sidebar";
import { theme } from "app/styles/theme";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

export const Root = () => {
  const [isMobileMenuVisible, setMobileMenuVisibility] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Sidebar
        isMobileMenuVisible={isMobileMenuVisible}
        setMobileMenuVisibility={setMobileMenuVisibility}
      />
      <Content>
        <Header setMobileMenuVisibility={setMobileMenuVisibility} />
      </Content>
    </ThemeProvider>
  );
};
