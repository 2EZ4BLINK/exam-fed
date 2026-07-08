import { Box, Typography } from "@mui/material";
import { IoStarSharp } from "react-icons/io5";
import { ImQuotesLeft } from "react-icons/im";

import testimonialStyles from "./testimonialStyles";
import petDog from "../../assets/images/pet-dog.png";
import human from "../../assets/images/human.png";

const testimonialData = [
  {
    id: 1,
    dogSrc: petDog,
    ownerSrc: human,
    petBreed: "Husky",
    ownerName: "Jane Doe",
    dogAlt: "Pet Dog Image",
    ownerAlt: "Owner Image",
    description:
      "I really like Tindog for my pet Huskier. Tindog really gave me an accurate and safe results. Will recommend this one!",
  },
  {
    id: 2,
    dogSrc: petDog,
    ownerSrc: human,
    petBreed: "Husky",
    ownerName: "Jane Doe",
    dogAlt: "Pet Dog Image",
    ownerAlt: "Owner Image",
    description:
      "I really like Tindog for my pet Huskier. Tindog really gave me an accurate and safe results. Will recommend this one!",
  },
  {
    id: 3,
    dogSrc: petDog,
    ownerSrc: human,
    petBreed: "Husky",
    ownerName: "Jane Doe",
    dogAlt: "Pet Dog Image",
    ownerAlt: "Owner Image",
    description:
      "I really like Tindog for my pet Huskier. Tindog really gave me an accurate and safe results. Will recommend this one!",
  },
];

const stars = [
  <IoStarSharp />,
  <IoStarSharp />,
  <IoStarSharp />,
  <IoStarSharp />,
  <IoStarSharp />,
];

const Testimonials = () => {
  return (
    <Box id="features" sx={testimonialStyles.section}>
      <Box sx={testimonialStyles.margins}>
        <Box component="header">
          <Typography sx={testimonialStyles.firstP}>
            Superb testimonials
          </Typography>

          <Typography component="h2" sx={testimonialStyles.secondP}>
            See what they say about us
          </Typography>
        </Box>

        <Box component="ul" sx={testimonialStyles.carouselBox}>
          {(testimonialData || []).map((item) => {
            const {
              id,
              dogSrc,
              dogAlt,
              ownerSrc,
              ownerAlt,
              petBreed,
              ownerName,
              description,
            } = item;

            return (
              <Box component="li" key={id} sx={testimonialStyles.carousel}>
                <Typography sx={testimonialStyles.carouselOwnerText}>
                  {ownerName}
                </Typography>
                <Typography sx={testimonialStyles.carouselPetText}>
                  Pet: {petBreed}
                </Typography>

                <Box sx={testimonialStyles.starIcon}>
                  {(stars || []).map((item) => item)}
                </Box>

                <Box sx={{ width: "288px" }}>
                  <Typography sx={testimonialStyles.carouselDesc}>
                    {description}
                  </Typography>
                </Box>

                <Box sx={testimonialStyles.quotesBox}>
                  <ImQuotesLeft />
                </Box>

                <Box sx={testimonialStyles.imageWrapper}>
                  <img
                    src={ownerSrc}
                    alt={ownerAlt}
                    style={testimonialStyles.ownerImg}
                  />
                  <img
                    src={dogSrc}
                    alt={dogAlt}
                    style={testimonialStyles.petImg}
                  />
                </Box>
              </Box>
            );
          })}
        </Box>

        <Box sx={testimonialStyles.toggleBox}>
          <Box sx={testimonialStyles.toggle} />
          <Box sx={testimonialStyles.toggleGray} />
          <Box sx={testimonialStyles.toggleGray} />
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonials;
