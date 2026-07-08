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
    maxWidth: "1200px",
    pt: "36px",
    mx: "auto",
    px: 3,
  },
  firstP: {
    ...defaultTextStyle(undefined, undefined, undefined, undefined, undefined),
    textAlign: "center",
    mb: "20px",
  },
  secondP: {
    ...defaultTextStyle("", 500, "32px", "", ""),
    textAlign: "center",
    mb: "100px",
  },
  carouselBox: {
    display: "flex",
    gap: 5,
    mb: 5,
  },
  carousel: {
    width: "394px",
    height: "351px",
    borderRadius: "25px",
    border: "1px solid #000000",
    boxShadow: "0px 4px 1px 0px #F29D6A",
    position: "relative",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    gap: 1,
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
    position: "absolute",
    left: 12,
    top: 177,
    color: "#9f6bf2",
    fontSize: "30px",
  },
  imageWrapper: {
    position: "absolute",
    top: "-45px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    alignItems: "center",
  },
  ownerImg: {
    width: "83px",
    height: "auto",
    borderRadius: "50%",
    zIndex: 2,
  },
  petImg: {
    width: "83px",
    height: "auto",
    borderRadius: "50%",
    marginLeft: "-20px",
  },
  toggleBox: {
    display: "flex",
    justifyContent: "center",
    gap: 1,
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
