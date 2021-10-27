import { GlobalStyles } from "app/styles/global-styles";
import { Header } from "app/components/common/Header";
import { Sidebar } from "app/components/common/Sidebar";
import { theme } from "app/styles/theme";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { Layout } from "app/components/common/Layout";
import { Route, Switch } from "react-router";
import { ROUTES } from "app/constants/routes";
import { Content } from "app/components/common/Content";

export const Root = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout isMobileMenuVisible={isMobileMenuVisible}>
        <Sidebar
          isMobileMenuVisible={isMobileMenuVisible}
          setIsMobileMenuVisible={setIsMobileMenuVisible}
        />
        <Header setIsMobileMenuVisible={setIsMobileMenuVisible} />
        <Content>
          <Switch>
            {ROUTES.map(({ name, route, component: View }) => {
              return (
                <Route
                  key={name}
                  exact
                  path={route}
                  render={(props) => <View {...props} />}
                />
              );
            })}
          </Switch>
        </Content>
      </Layout>
    </ThemeProvider>
  );
};
