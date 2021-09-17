import { GlobalStyles } from "app/styles/global-styles";
import { Header } from "app/components/common/Header";
import { Sidebar } from "app/components/common/Sidebar";
import { theme } from "app/styles/theme";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { useWindowSize } from "app/hooks/useWindowSize";
import { getSanitizedBreakpoint } from "app/styles/theme/breakpoints";
import { InnerBackground, OuterBackground, Gradient } from "./styled";

export const Root = () => {
  const [isMobileMenuVisible, setMobileMenuVisibility] = useState(false);
  const size = useWindowSize();
  const largeWidth = getSanitizedBreakpoint("lg");

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <OuterBackground>
        <InnerBackground>
          {/* ↓↓↓ Accesibility optimization, unmounting the sidebar when it's not in sight ↓↓↓*/}
          {(size.width > largeWidth || isMobileMenuVisible) && (
            <Sidebar
              isMobileMenuVisible={isMobileMenuVisible}
              setMobileMenuVisibility={setMobileMenuVisibility}
            />
          )}
          <Gradient>
            {size.width >= largeWidth ? null : (
              <Header setMobileMenuVisibility={setMobileMenuVisibility} />
            )}
          </Gradient>
        </InnerBackground>
      </OuterBackground>
    </ThemeProvider>
  );
};
