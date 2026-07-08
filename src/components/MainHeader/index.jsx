import { Box, Button, Typography } from "@mui/material";

import headerStyles from "./headerStyles";
import logo from "../../assets/images/tindog-logo.png";

const Header = () => {
  return (
    <Box component="header" sx={headerStyles.headerSection}>
      <Box sx={headerStyles.navLogo}>
        <img src={logo} alt="Tindog logo" style={headerStyles.img} />
        <Typography sx={headerStyles.pageTitle} fontWeight={700}>
          Tindog
        </Typography>
      </Box>

      <Box component="nav" sx={headerStyles.navLinks}>
        <Button disableRipple sx={headerStyles.navlinkText}>
          Features
        </Button>
        <Button disableRipple sx={headerStyles.navlinkText}>
          Testimonials
        </Button>
        <Button disableRipple sx={headerStyles.navlinkText}>
          Guides
        </Button>

        <Button disableRipple sx={headerStyles.navlinkButton}>
          Get the app
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
