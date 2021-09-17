import { GlobalStyles } from "app/styles/global-styles";
import { Header } from "app/components/common/Header";
import { Sidebar } from "app/components/common/Sidebar";
import { theme } from "app/styles/theme";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { useWindowSize } from "app/hooks/useWindowSize";
import { getSanitizedBreakpoint } from "app/styles/theme/breakpoints";
import { InnerBackground, OuterBackground, Gradient } from "./styled";
import { Route, Router, Switch } from "react-router";
import { ROUTES } from "app/constants/routes";
import { Dashboard } from "app/views/Dashboard";
import { Starlink } from "app/views/Starlink";

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
          <Sidebar
            isVisible={size.width > largeWidth || isMobileMenuVisible}
            isMobileMenuVisible={isMobileMenuVisible}
            setMobileMenuVisibility={setMobileMenuVisibility}
          />
          <Gradient>
            {size.width >= largeWidth ? null : (
              <Header setMobileMenuVisibility={setMobileMenuVisibility} />
            )}
            <Switch>
              {ROUTES.map(({ name, route, component: View }) => {
                return (
                  <Route
                    exact
                    path={route}
                    render={(props) => <View {...props} />}
                  />
                );
              })}
            </Switch>
          </Gradient>
        </InnerBackground>
      </OuterBackground>
    </ThemeProvider>
  );
};
