import { GlobalStyles } from "app/styles/global-styles";
import { Header } from "app/components/common/Header";
import { Content } from "app/components/common/ui/Content";
import { Sidebar } from "app/components/common/Sidebar";
import { theme } from "app/styles/theme";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { useWindowSize } from "app/hooks/useWindowSize";
import { getSanitizedBreakpoint } from "app/styles/theme/breakpoints";

export const Root = () => {
  const [isMobileMenuVisible, setMobileMenuVisibility] = useState(false);
  const size = useWindowSize();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* ↓↓↓ Accesibility optimization, unmounting the sidebar when it's not in sight ↓↓↓*/}
      {(size.width > getSanitizedBreakpoint("lg") || isMobileMenuVisible) && (
        <Sidebar
          isMobileMenuVisible={isMobileMenuVisible}
          setMobileMenuVisibility={setMobileMenuVisibility}
        />
      )}
      <Content>
        <Header setMobileMenuVisibility={setMobileMenuVisibility} />
      </Content>
    </ThemeProvider>
  );
};
