const defaultSpacing = {
  maxWidth: "1200px",
  pt: "36px",
  mx: "auto",
  px: 3,
};

const appStyles = {
  root: {
    height: "849px",
    background: "linear-gradient(111.52deg, #F29D6A 10.78%, #FF6254 83.54%)",
  },
  container: {
    ...defaultSpacing,
  },
  curve: {
    height: "180px",
    backgroundColor: "#fff",
    borderTopLeftRadius: "95% 100%",
    borderTopRightRadius: "95% 100%",
    marginTop: "-90px",
  },
  curveContent: {
    ...defaultSpacing,
    pt: 0,
  },
};

export default appStyles;
