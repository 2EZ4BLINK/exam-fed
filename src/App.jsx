import { Box } from "@mui/material";

import { Brand, Header, Hero, Testimonials } from "../components";
import appStyles from "../styles/appStyles";

function App() {
  return (
    <>
      <Box sx={appStyles.root}>
        <Box sx={appStyles.container}>
          <Header />
          <Hero />
        </Box>
      </Box>

      <Box sx={appStyles.curve}>
        <Brand />
        <Testimonials />
      </Box>
    </>
  );
}

export default App;
