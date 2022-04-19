import { ThemeProvider } from "styled-components";
import { Body } from "./basics/Body";
import { Page } from "./basics/Page";
import { Header } from "./basics/Header";
import { Footer } from "./basics/Footer";

const Layout = (props) => {
  const { theme, header, footer, children } = props;

  return (
    <ThemeProvider theme={theme}>
      <Page>
        <Header>{header}</Header>
        <Body>{children}</Body>
        <Footer>{footer}</Footer>
      </Page>
    </ThemeProvider>
  );
};

export default Layout;
