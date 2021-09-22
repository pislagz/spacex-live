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
import { InfoTile } from "app/components/InfoTile";
import { Flex } from "app/components/common/ui";

export const Root = () => {
  const [isMobileMenuVisible, setMobileMenuVisibility] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Sidebar
          isMobileMenuVisible={isMobileMenuVisible}
          setMobileMenuVisibility={setMobileMenuVisibility}
        />
        <Header setMobileMenuVisibility={setMobileMenuVisibility} />
        <Content>
          <Flex alignItems="center" flexDirection="column">
            <InfoTile i="1" />
            <InfoTile i="2" />
          </Flex>
          <Flex alignItems="center" flexDirection="column">
            <InfoTile i="3" />
            <InfoTile i="4" />
          </Flex>

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
        </Content>
      </Layout>
    </ThemeProvider>
  );
};
