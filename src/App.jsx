import { useState } from "react";
import Lay from "./components/lay";
import Lay2 from "./components/lay2";
import Navbar from "./components/navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Herosection from "./components/herosection";
import { Container } from "@mui/material";
import Cakesection from "./components/cakesection";
import Contect from "./components/contect";

const theme = createTheme({
  palette: {
    primary: {
      main: "#864313",
    },
  },
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Container>
          <Herosection />
          <Cakesection />
          <Contect/>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;