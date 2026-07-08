const outerHeaderStyles = {
  containerPosition: {
    top: 0,
    zIndex: 1,
    width: "100%",
    position: "fixed",
  },
  container: {
    px: 3,
    pt: "20px",
    mx: "auto",
    maxWidth: "1200px",
  },
  pawIcon: {
    fontSize: "44px",
    color: "#FF6254",
  },
  headerSection: {
    mt: 3,
    zIndex: 3,
    display: "flex",
    alignItems: "center",
    padding: "15px 25px",
    borderRadius: "9999px",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.10)",
  },
  navLogo: {
    gap: 1,
    display: "flex",
    alignItems: "center",
  },
  pageTitle: {
    fontWeight: 600,
    fontSize: "39.06px",
    lineHeight: " 41.25px",
    color: "#FF6254",
    display: "inline-block",
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: 6,
  },
  navlinkText: {
    color: "#FF6254",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "41.25px",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  navlinkButton: {
    width: "194px",
    height: "48px",
    borderRadius: "200px",
    background: "#FF6254",
    color: "#FFFFFF",
    textTransform: "none",
  },
};

export default outerHeaderStyles;
