const brandStyles = {
  brandSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    py: 8,
    height: "350px",

    maxWidth: "1200px",
    pt: "36px",
    mx: "auto",
    px: 3,
  },
  findOutText: {
    fontWeight: 400,
    fontSize: "32px",
    color: "#000000",
    lineHeight: "26px",
    textAlign: "center",
    fontFamily: '"Nanum Pen Script", cursive',
  },
  findOutArrowBox: {
    display: "flex",
    flexDirection: "column",
    color: "black",
    mb: 5,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  findOutArrow: {
    fontSize: "35px",
  },
  brands: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  brandImg: {
    width: "auto",
    height: "100px",
    filter: "grayscale(100%)",
  },
};

export default brandStyles;
