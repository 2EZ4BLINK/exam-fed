import { Box, Button, Typography } from "@mui/material";
import { IoPawSharp } from "react-icons/io5";

import outerHeaderStyles from "./outerHeaderStyles";

const OuterHeader = () => {
  return (
    <Box sx={outerHeaderStyles.containerPosition}>
      <Box sx={outerHeaderStyles.container}>
        <Box component="header" sx={outerHeaderStyles.headerSection}>
          <Box sx={outerHeaderStyles.navLogo}>
            <IoPawSharp style={outerHeaderStyles.pawIcon} />
            <Typography sx={outerHeaderStyles.pageTitle} fontWeight={700}>
              Tindog
            </Typography>
          </Box>

          <Box component="nav" sx={outerHeaderStyles.navLinks}>
            <Button disableRipple sx={outerHeaderStyles.navlinkText}>
              Features
            </Button>
            <Button disableRipple sx={outerHeaderStyles.navlinkText}>
              Testimonials
            </Button>
            <Button disableRipple sx={outerHeaderStyles.navlinkText}>
              Guides
            </Button>

            <Button disableRipple sx={outerHeaderStyles.navlinkButton}>
              Get the app
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OuterHeader;
