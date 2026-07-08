const defaultTextStyle = {
  fontFamily: '"Nanum Pen Script", cursive',
  fontWeight: 400,
  fontSize: "40px",
  color: "#FF6254",
  lineHeight: "73.25px",
};

const ctaStyles = {
  ctaSection: {
    mt: 7,
    display: "grid",
    height: "450px",
    position: "relative",
    gridTemplateColumns: "1fr 1fr",
  },
  leftSection: {
    width: "404px",
  },
  firstP: {
    ...defaultTextStyle,
  },
  secondP: {
    fontWeight: 600,
    fontSize: "48.83px",
    lineHeight: "73.25px",
    mb: 7,
  },
  getAppButton: {
    color: "#FFF",
    width: "194px",
    height: "48px",
    background: "#FF6254",
    borderRadius: "200px",
    textTransform: "none",
  },
  rightSection: {
    display: "flex",
    alignItems: "end",
    justifyContent: "end",
  },
  image: {
    width: "450px",
    height: "auto",
  },
  thirdP: {
    ...defaultTextStyle,
    top: "83px",
    right: "212px",
    color: "unset",
    position: "absolute",
    transform: "rotate(-15deg)",
  },
  purpleCircle: {
    zIndex: -1,
    right: "85px",
    width: "300px",
    height: "300px",
    bottom: "-10px",
    position: "absolute",
    background: "#9d6af2",
    borderRadius: "150px",
  },
};

export default ctaStyles;
