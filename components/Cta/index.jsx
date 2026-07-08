import { Box, Typography, Button } from "@mui/material";

import smilingDog from "../../src/assets/images/smiling-dog.png";
import ctaStyles from "./ctaStyles";

const Cta = () => {
  return (
    <Box sx={ctaStyles.ctaSection}>
      <Box sx={ctaStyles.leftSection}>
        <Typography sx={ctaStyles.firstP}>
          Don’t make your dog lonely
        </Typography>
        <Typography sx={ctaStyles.secondP}>
          Get your dog a partner in life
        </Typography>
        <Button disableRipple sx={ctaStyles.getAppButton}>
          Get the App
        </Button>
      </Box>

      <Box sx={ctaStyles.rightSection}>
        <Box sx={ctaStyles.imageBox}>
          <img
            src={smilingDog}
            alt="Smiling Dog Image"
            style={ctaStyles.image}
          />
        </Box>
      </Box>

      <Typography sx={ctaStyles.thirdP}>Get me a partner, hooman!</Typography>
      <Box sx={ctaStyles.purpleCircle} />
    </Box>
  );
};

export default Cta;
