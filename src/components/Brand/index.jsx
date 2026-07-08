import { Box, Typography, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import brandStyles from "./brandStyles";
import pawsImage from "../../assets/images/paws.png";
import animalIndustry from "../../assets/images/animal-industry.png";
import pawssionProject from "../../assets/images/website-logo.png";
import animalhouse from "../../assets/images/animal-house.png";

const images = [
  {
    id: 1,
    alt: "Philippine Animal Welfare Society (PAWS)",
    src: pawsImage,
  },
  {
    id: 2,
    alt: "Bureau of Animal Industry",
    src: animalIndustry,
  },
  {
    id: 3,
    alt: "Pawssion Project",
    src: pawssionProject,
  },
  {
    id: 4,
    alt: "Animal House",
    src: animalhouse,
  },
];

const Brand = () => {
  const handleScrollInto = () => {
    document.getElementById("features")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Box component="section" sx={brandStyles.brandSection}>
      <IconButton
        onClick={handleScrollInto}
        sx={brandStyles.findOutArrowBox}
        aria-label="Scroll to features section"
      >
        <Typography sx={brandStyles.findOutText}>Find out more</Typography>

        <KeyboardArrowDownIcon sx={brandStyles.findOutArrow} />
      </IconButton>

      <Box
        component="ul"
        sx={{
          ...brandStyles.brands,
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        {images.map(({ id, alt, src }) => (
          <Box
            key={id}
            component="li"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <img src={src} alt={alt} style={brandStyles.brandImg} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Brand;
