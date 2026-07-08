import { Box, Typography } from "@mui/material";

import heroStyles from "./heroStyle";
import appleStore from "../../assets/images/apple-store.png";
import dogImage from "../../assets/images/doggy.png";
import googlePlayStore from "../../assets/images/google-play.png";

const Hero = () => {
  return (
    <Box component="section" sx={heroStyles.heroSection}>
      <Box sx={heroStyles.leftSection}>
        <Typography sx={heroStyles.firstP}>
          Don’t make your dog lonely
        </Typography>

        <Box sx={heroStyles.secondPBox}>
          <Typography component="h1" sx={heroStyles.secondP}>
            Get your dog a partner in life
          </Typography>
        </Box>

        <Typography sx={heroStyles.thirdP}>
          Tindog assists dog owners whose pets are lonely. Tindog also
          collaborates with veterinarians and a dog adoption project. Be a part
          of this change.
        </Typography>

        <Typography sx={heroStyles.fourthP}>Download the app now</Typography>

        <Box sx={heroStyles.stores}>
          <a href="#" aria-label="Download Tindog on Google Play">
            <Box sx={heroStyles.storeLogoBox}>
              <img src={googlePlayStore} alt="Download Tindog on Google Play" />
            </Box>
          </a>

          <a href="#" aria-label="Download Tindog on the App Store">
            <Box sx={heroStyles.storeLogoBox}>
              <img src={appleStore} alt="Download Tindog on the App Store" />
            </Box>
          </a>
        </Box>
      </Box>

      <Box sx={heroStyles.rightSection}>
        <Typography sx={heroStyles.fifthP}>100+ breeders</Typography>

        <img src={dogImage} alt="A happy dog representing the Tindog app" />

        <Box aria-hidden="true" sx={heroStyles.purpleCircle} />

        <Typography sx={heroStyles.sixthP}>1,000 dogs adopted</Typography>
      </Box>
    </Box>
  );
};

export default Hero;
