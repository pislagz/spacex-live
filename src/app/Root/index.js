import { GlobalStyles } from "app/styles/global-styles";
import { Header } from "app/components/common/Header";
import { Sidebar } from "app/components/common/Sidebar";
import { theme } from "app/styles/theme";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { InnerBackground, OuterBackground, Gradient } from "./styled";
import { Route, Switch } from "react-router";
import { ROUTES } from "app/constants/routes";

export const Root = () => {
  const [isMobileMenuVisible, setMobileMenuVisibility] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <OuterBackground>
        <InnerBackground>
          <Sidebar
            isMobileMenuVisible={isMobileMenuVisible}
            setMobileMenuVisibility={setMobileMenuVisibility}
          />
          <Gradient>
            <Header setMobileMenuVisibility={setMobileMenuVisibility} />
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
