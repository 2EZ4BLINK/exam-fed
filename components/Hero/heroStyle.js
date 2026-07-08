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
  rightSection: {},
  leftSection: {
    width: "100%",
    maxWidth: "503px",
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
