const headerStyles = {
  img: {
    width: "auto",
    height: "100%",
  },
  headerSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
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
    color: "#FFFFFF",
    display: "inline-block",
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: 6,
  },
  navlinkText: {
    color: "#FFFFFF",
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
    background: "#FFFFFF",
    color: "#FF6254",
  },
};

export default headerStyles;
