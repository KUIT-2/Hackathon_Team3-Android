import { Normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import Router from "./pages";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  h3, h4, p {
    margin: 0;
  }
`;

function App() {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
