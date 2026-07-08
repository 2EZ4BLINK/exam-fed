import { Box } from "@mui/material";

import { Brand, Header, Hero, OuterHeader, Testimonials } from "../components";
import appStyles from "../styles/appStyles";

function App() {
  return (
    <>
      <Box sx={appStyles.root}>
        <Box sx={appStyles.container}>
          <Header />
          <Hero />
        </Box>
        <Brand />
        <Testimonials />
      </Box>
      <OuterHeader />
    </>
  );
}

export default App;
