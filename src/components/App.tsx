import * as C from "./AppStyle";
import { GlobalStyle } from "../globalStyle";
import { Header } from "./header";
import { CardsSection } from "./cards";
import { Footer } from "./footer";
import { SwitchedProvider } from "../contexts/switchTheme";

export const App = () => {
  return (
    <C.App>
      <SwitchedProvider>
        <GlobalStyle />
        <Header />
        <CardsSection />
        <Footer />
      </SwitchedProvider>
    </C.App>
  );
};
