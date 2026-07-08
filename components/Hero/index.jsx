import { Box, Typography } from "@mui/material";

import heroStyles from "./heroStyle";
import appleStore from "../../src/assets/images/apple-store.png";
import dogImage from "../../src/assets/images/doggy.png";
import googlePlayStore from "../../src/assets/images/google-play.png";

const Hero = () => {
  return (
    <Box sx={heroStyles.heroSection}>
      <Box sx={heroStyles.leftSection}>
        <Typography sx={heroStyles.firstP}>
          Don’t make your dog lonely
        </Typography>
        <Box sx={heroStyles.secondPBox}>
          <Typography sx={heroStyles.secondP}>
            Get your dog a partner in life
          </Typography>
        </Box>
        <Typography sx={heroStyles.thirdP}>
          Tindog assists dog owners whose pets are lonely. Tindog also
          collaborated with veterinarians and a dog adoption project. Be a part
          of this change
        </Typography>

        <Typography sx={heroStyles.fourthP}>Download the app now</Typography>
        <Box sx={heroStyles.stores}>
          <Box sx={heroStyles.storeLogoBox}>
            <img src={googlePlayStore} alt="google play store" />
          </Box>
          <Box sx={heroStyles.storeLogoBox}>
            <img src={appleStore} alt="apple store" />
          </Box>
        </Box>
      </Box>

      <Box>
        <img src={dogImage} alt="dog image" />
      </Box>
    </Box>
  );
};

export default Hero;
