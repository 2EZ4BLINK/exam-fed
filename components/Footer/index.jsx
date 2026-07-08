import { Box, Typography } from "@mui/material";

import logo from "../../src/assets/images/tindog-logo.png";
import email from "../../src/assets/images/email.png";
import phone from "../../src/assets/images/phone.png";
import twitter from "../../src/assets/images/twitter.png";
import meta from "../../src/assets/images/meta.png";
import googlePlayStore from "../../src/assets/images/google-play.png";
import appleStore from "../../src/assets/images/apple-store.png";
import footerStyles from "./footerStyles";

const contacts = [
  {
    id: 1,
    src: meta,
    alt: "Facebook",
  },
  {
    id: 2,
    src: twitter,
    alt: "Twitter",
  },
  {
    id: 3,
    src: phone,
    alt: "Phone",
  },
  {
    id: 4,
    src: email,
    alt: "Email",
  },
];

const Footer = () => {
  return (
    <Box component="footer" sx={footerStyles.footerSection}>
      <Box sx={footerStyles.container}>
        <Box sx={footerStyles.grid}>
          <Box sx={footerStyles.firstColumn}>
            <Box sx={footerStyles.navLogo}>
              <img src={logo} alt="Tindog logo" style={footerStyles.img} />
              <Typography
                component="h2"
                sx={footerStyles.pageTitle}
                fontWeight={700}
              >
                Tindog
              </Typography>
            </Box>

            <Typography sx={footerStyles.firstColumnText}>
              Tindog assists dog owners whose pets are lonely. Tindog also
              collaborated with veterinarians and a dog adoption project. Be a
              part of this change
            </Typography>

            <Box component="ul" sx={footerStyles.contacts}>
              {(contacts || []).map((item) => {
                const { id, src, alt } = item;

                return (
                  <Box component="li" key={id}>
                    <img
                      src={src}
                      alt={alt}
                      style={footerStyles.contactImages}
                    />
                  </Box>
                );
              })}
            </Box>
          </Box>

          <Box component="nav" sx={footerStyles.secondColumn}>
            <Typography component="h3" sx={footerStyles.secondColmunTextTitle}>
              Quick Links
            </Typography>
            <Typography sx={footerStyles.secondColumnText}>Guides</Typography>
            <Typography sx={footerStyles.secondColumnText}>
              Terms and Conditions
            </Typography>
            <Typography sx={footerStyles.secondColumnText}>
              Privacy Policy
            </Typography>
          </Box>

          <Box sx={footerStyles.secondColumn}>
            <Typography sx={footerStyles.secondColmunTextTitle}>
              Contact Us
            </Typography>
            <Typography sx={footerStyles.secondColumnText}>
              Local Sales: (632) 5324.8888
            </Typography>
            <Typography sx={footerStyles.secondColumnText}>
              Local Sales: (632) 5324.8888
            </Typography>
            <Typography sx={footerStyles.secondColumnText}>
              Local Sales: (632) 5324.8888
            </Typography>
            <Typography sx={footerStyles.secondColumnText}>
              Local Sales: (632) 5324.8888
            </Typography>
          </Box>

          <Box sx={footerStyles.fourthColumn}>
            <Typography sx={footerStyles.fourthColumnText}>
              Download the app now
            </Typography>
            <Box sx={footerStyles.stores}>
              <Box sx={footerStyles.storeLogoBox}>
                <img src={googlePlayStore} alt="google play store" />
              </Box>
              <Box sx={footerStyles.storeLogoBox}>
                <img src={appleStore} alt="apple store" />
              </Box>
            </Box>
          </Box>
        </Box>
        <Typography sx={footerStyles.copyright}>
          Tindog &copy; 2026 All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
