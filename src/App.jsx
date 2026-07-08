import { Box } from "@mui/material";

import {
  Brand,
  Cta,
  Footer,
  Header,
  Hero,
  OuterHeader,
  Testimonials,
} from "../components";
import appStyles from "../styles/appStyles";

function App() {
  return (
    <>
      <Box sx={appStyles.root}>
        <Box sx={appStyles.customContainer}>
          <Header />
          <Hero />
        </Box>
        <Brand />
        <Testimonials />

        <Box sx={appStyles.container}>
          <Cta />
        </Box>
        <Footer />
      </Box>
      <OuterHeader />
    </>
  );
}

export default App;
