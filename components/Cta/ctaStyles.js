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
    gridTemplateColumns: "1fr 1fr",
    height: "450px",
    overflow: "hidden !important",
    position: "relative",
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
    width: "194px",
    height: "48px",
    background: "#FF6254",
    borderRadius: "200px",
    textTransform: "none",
    color: "#FFF",
  },
  rightSection: {
    display: "flex",
    justifyContent: "end",
    alignItems: "end",
  },
  image: {
    width: "450px",
    height: "auto",
  },
  thirdP: {
    position: "absolute",
    right: "212px",
    top: "83px",
    ...defaultTextStyle,
    color: "unset",
    transform: "rotate(-15deg)",
  },
  purpleCircle: {
    position: "absolute",
    right: "85px",
    bottom: "-10px",
    background: "#9d6af2",
    width: "300px",
    height: "300px",
    borderRadius: "150px",
    zIndex: -1,
  },
};

export default ctaStyles;
