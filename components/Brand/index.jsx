import { Box, Typography, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import brandStyles from "./brandStyles";
import pawsImage from "../../src/assets/images/paws.png";
import animalIndustry from "../../src/assets/images/animal-industry.png";
import pawssionProject from "../../src/assets/images/website-logo.png";
import animalhouse from "../../src/assets/images/animal-house.png";

const images = [
  {
    id: 1,
    alt: "Paws Image",
    src: pawsImage,
  },
  {
    id: 2,
    alt: "Animal Industry Image",
    src: animalIndustry,
  },
  {
    id: 3,
    alt: "Pawssion Project Image",
    src: pawssionProject,
  },
  {
    id: 4,
    alt: "Animal House Image",
    src: animalhouse,
  },
];

const Brand = () => {
  return (
    <Box component="section" sx={brandStyles.brandSection}>
      <Typography sx={brandStyles.findOutText}>Find out more</Typography>

      <IconButton href="#features" sx={brandStyles.findOutArrowBox}>
        <KeyboardArrowDownIcon sx={brandStyles.findOutArrow} />
      </IconButton>

      <Box sx={brandStyles.brands}>
        {(images || []).map((item) => {
          const { id, alt, src } = item;
          return (
            <img key={id} src={src} alt={alt} style={brandStyles.brandImg} />
          );
        })}
      </Box>
    </Box>
  );
};

export default Brand;
