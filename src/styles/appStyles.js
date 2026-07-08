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
  customContainer: {
    ...defaultSpacing,
    zIndex: 2,
    height: "849px",
    position: "relative",
    background: "linear-gradient(111.52deg, #F29D6A 10.78%, #FF6254 83.54%)",
  },
  curve: {
    position: "relative",
    height: "180px",
  },
};

export default appStyles;
