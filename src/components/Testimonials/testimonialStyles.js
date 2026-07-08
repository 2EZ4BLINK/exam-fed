const defaultTextStyle = (
  color = "#FF6254",
  weight = 400,
  size = "32px",
  height = "26px",
  fontFam = '"Nanum Pen Script", cursive',
) => {
  return {
    color: color,
    fontWeight: weight,
    fontSize: size,
    lineHeight: height,
    fontFamily: fontFam,
  };
};

const toggleStyle = {
  width: "17px",
  height: "17px",
  background: "#FF6254",
  borderRadius: "100%",
};

const testimonialStyles = {
  section: {
    height: "694px",
    background: "#FAFAFA",
  },
  margins: {
    px: 3,
    pt: "36px",
    mx: "auto",
    maxWidth: "1200px",
  },
  firstP: {
    ...defaultTextStyle(),
    textAlign: "center",
    mb: "20px",
  },
  secondP: {
    ...defaultTextStyle("", 500, "32px", "", ""),
    textAlign: "center",
    mb: "100px",
  },
  carouselBox: {
    mb: 5,
    gap: 5,
    display: "flex",
  },
  carousel: {
    gap: 1,
    width: "394px",
    height: "351px",
    padding: "20px",
    display: "flex",
    position: "relative",
    borderRadius: "25px",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    border: "1px solid #000000",
    boxShadow: "0px 4px 1px 0px #F29D6A",
  },
  carouselOwnerText: {
    ...defaultTextStyle(
      "#808080",
      400,
      "25px",
      undefined,
      '"Nanum Pen Script", cursive',
    ),
  },
  carouselPetText: {
    ...defaultTextStyle(
      "#000000",
      400,
      "31.25px",
      "26px",
      '"Nanum Pen Script", cursive',
    ),
  },
  starIcon: {
    mb: 3,
    display: "flex",
    color: "#FFC400",
    fontSize: "30px",
  },
  carouselDesc: {
    ...defaultTextStyle("#000000", 400, "16px", "26px", ""),
    textAlign: "center",
  },
  quotesBox: {
    left: 12,
    top: 177,
    color: "#9f6bf2",
    fontSize: "30px",
    position: "absolute",
  },
  imageWrapper: {
    top: "-45px",
    left: "50%",
    display: "flex",
    position: "absolute",
    alignItems: "center",
    transform: "translateX(-50%)",
  },
  ownerImg: {
    zIndex: 2,
    width: "83px",
    height: "auto",
    borderRadius: "50%",
  },
  petImg: {
    width: "83px",
    height: "auto",
    borderRadius: "50%",
    marginLeft: "-20px",
  },
  toggleBox: {
    gap: 1,
    display: "flex",
    justifyContent: "center",
  },
  toggle: {
    ...toggleStyle,
  },
  toggleGray: {
    ...toggleStyle,
    background: "#757575",
  },
};

export default testimonialStyles;
