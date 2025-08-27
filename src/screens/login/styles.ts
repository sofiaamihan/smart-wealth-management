import { Dimensions, StyleSheet } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContent: {
    paddingTop: 0,
  },
  header: {
    width: "100%",
    height: screenHeight * 0.6,
    overflow: "hidden",
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "relative",
  },
  backgroundImage: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
  },
  logo: {
    width: screenWidth * 0.44,
    height: 56,
    marginTop: 28,
  },
  card: {
    marginTop: 0,
    width: "100%",
    backgroundColor: "#FFFFFF",
    paddingTop: 12,
    paddingBottom: 5,
  },
  ctaWrap: {
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
  },
  heading: {
    fontSize: 22,
    fontWeight: "400",
    color: "#1B1B1B",
    marginBottom: 14,
    marginLeft: 40,
  },
  primaryButton: {
    width: "80%",
    height: 48,
    borderRadius: 8,
    backgroundColor: "#565A5E",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "400",
  },
  secondaryButton: {
    width: "80%",
    height: 48,
    borderRadius: 8,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",    
    borderColor: "#E2E2E2",
  },
  secondaryButtonText: {
    color: "#1B1B1B",
    fontSize: 15,
    fontWeight: "500",
  },
  legalBlock: {
    marginTop: 18,
    gap: 8,
  },
  legalRow: {
    marginTop: 18,
    paddingHorizontal: 40,
  },
  legalLabel: {
    color: "black",
    fontSize: 12,
  },
  linkRow: {
    marginTop: 6,
    paddingHorizontal: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 18,
  },
  linkText: {
    color: "#4B72C2",
    fontSize: 12,
    textDecorationLine: "underline",
  },
  footerRow: {
    marginTop: 8,
    paddingHorizontal: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  footerLeft: {
    color: "#1B1B1B",
    fontSize: 11,
  },
  footerRight: {
    color: "#1B1B1B",
    fontSize: 11,
  },
});