const defaultTextStyle = (
  weight = 400,
  size = "40px",
  height = "100%",
  fontFam = '"Nanum Pen Script", cursive',
) => {
  return {
    color: "#FFFFFF",
    fontWeight: weight,
    fontSize: size,
    lineHeight: height,
    fontFamily: fontFam,
  };
};

const heroStyles = {
  heroSection: {
    mt: "100px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
  leftSection: {
    width: "100%",
    maxWidth: "503px",
  },
  rightSection: {
    position: "relative",
  },
  firstP: {
    ...defaultTextStyle(),
  },
  secondPBox: {
    height: "144px",
  },
  secondP: {
    ...defaultTextStyle(600, "48px", "70px", "unset"),
  },
  thirdP: {
    mt: "15px",
    ...defaultTextStyle("", "16px", "26px", "unset"),
  },
  fourthP: {
    mt: "15px",
    ...defaultTextStyle("", "40px", "73.25px"),
  },
  fifthP: {
    ...defaultTextStyle(),
    position: "absolute",
    top: "20px",
    left: "80px",
  },
  sixthP: {
    ...defaultTextStyle(),
    position: "absolute",
    bottom: "180px",
    right: "-40px",
    transform: "rotate(-40deg)",
  },
  purpleCircle: {
    position: "absolute",
    background: "#9d69f0",
    top: "50%",
    left: "50%",
    transform: " translate(-50%, -50%)",
    zIndex: -1,
    borderRadius: "190px",
    width: "385px",
    height: "385px",
  },
  stores: {
    display: "flex",
    gap: 3,
  },
  storeLogoBox: {
    width: "166px",
    height: "48px",
    borderRadius: "4px",
    background: "#000202",

    display: "flex",
    justifyContent: "center",
  },
};

export default heroStyles;
