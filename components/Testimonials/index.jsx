import { Box, Typography } from "@mui/material";
import { IoStarSharp } from "react-icons/io5";

import testimonialStyles from "./testimonialStyles";
import petDog from "../../src/assets/images/pet-dog.png";
import human from "../../src/assets/images/human.png";

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
  //   {
  //     id: 4,
  //     dogSrc: petDog,
  //     ownerSrc: human,
  //     petBreed: "Husky",
  //     ownerName: "Jane Doe",
  //     dogAlt: "Pet Dog Image",
  //     ownerAlt: "Owner Image",
  //     description:
  //       "I really like Tindog for my pet Huskier. Tindog really gave me an accurate and safe results. Will recommend this one!",
  //   },
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
    <Box sx={testimonialStyles.section}>
      <Box sx={testimonialStyles.margins}>
        <Typography sx={testimonialStyles.firstP}>
          Superb testimonials
        </Typography>
        <Typography sx={testimonialStyles.secondP}>
          See what they say about us
        </Typography>

        <Box sx={testimonialStyles.carouselBox}>
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
              <Box key={id} sx={testimonialStyles.carousel}>
                <Typography sx={testimonialStyles.carouselOwnerText}>
                  {ownerName}
                </Typography>
                <Typography sx={testimonialStyles.carouselPetText}>
                  Pet: {petBreed}
                </Typography>
                <Box sx={testimonialStyles.starIcon}>
                  {(stars || []).map((item) => item)}
                </Box>
                <Typography sx={testimonialStyles.carouselDesc}>
                  {description}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonials;
