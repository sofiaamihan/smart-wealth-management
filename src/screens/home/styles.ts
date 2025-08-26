import { Dimensions, StyleSheet } from "react-native";
import { HORIZONTAL_PADDING } from "./constants";

const { width: screenWidth } = Dimensions.get("window");
// export const CARD_WIDTH = screenWidth - HORIZONTAL_PADDING * 2.1;
// export const CARD_GAP = 14;

export const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#ECECEC", },
  scrollContent: { paddingHorizontal: HORIZONTAL_PADDING, paddingTop: 8, },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 16, },
  title: { fontSize: 24, fontWeight: "700", color: "#111",},
  subtitle: { marginTop: 2, fontSize: 18, color: "#6B6B6B", },
  headerBadge: { width: 36, height: 36, borderRadius: 18, backgroundColor: "#FFFFFF", alignItems: "center", justifyContent: "center", shadowColor: "#000", shadowOpacity: 0.08, shadowRadius: 6, shadowOffset: { width: 0, height: 2 }, elevation: 2, },
  headerBadgeText: { fontSize: 18, },
  greetingBlock: { flexDirection: "row", gap: 10, backgroundColor: "#FFFFFF", borderRadius: 14, padding: 14, marginBottom: 16, shadowColor: "#000", shadowOpacity: 0.05, shadowRadius: 8, shadowOffset: { width: 0, height: 2 }, elevation: 1, },
  greetingBullet: { fontSize: 18, color: "#3C3C3C", marginTop: 2, },
  greetingText: { fontSize: 18, color: "#3C3C3C", lineHeight: 20, },
  insightsStrip: { paddingBottom: 8, },
  // productCard: {
  //   backgroundColor: "#FFFFFF",
  //   borderRadius: 16,
  //   padding: 16,
  //   marginRight: CARD_GAP,
  //   shadowColor: "#000",
  //   shadowOpacity: 0.05,
  //   shadowRadius: 8,
  //   shadowOffset: { width: 0, height: 2 },
  //   elevation: 1,
  // },
  productLogo: {
    width: 200,
    height: 60,
    marginBottom: 16,
    alignSelf: "center",
  },
  productTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1B1B1B",
    marginBottom: 6,
  },
  productDesc: {
    fontSize: 16,
    color: "#6B6B6B",
  },
  // darkCard: {
  //   backgroundColor: "#1E2B34",
  //   borderRadius: 16,
  //   padding: 18,
  //   marginRight: CARD_GAP,
  //   overflow: "hidden",
  // },
  cardLabel: {
    color: "#B9C7CF",
    fontSize: 18,
    marginBottom: 6,
  },
  incomeRow: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 4,
  },
  brandDots: {
    position: "absolute",
    right: 14,
    bottom: 14,
    flexDirection: "row",
    gap: 6,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  barRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginTop: 10,
    gap: 8,
  },
  // barCol: {
  //   width: (CARD_WIDTH - 18 * 2 - 8 * (12 - 1)) / 12,
  //   height: 84,
  //   justifyContent: "flex-end",
  // },
  barBg: {
    flex: 1,
    backgroundColor: "#2D3A43",
    borderRadius: 4,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  barFill: {
    width: "100%",
    backgroundColor: "#E15454",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  sectionHeading: {
    marginTop: 18,
    marginBottom: 10,
    marginHorizontal: 12,
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
  },
  serviceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
    marginHorizontal: 12
  },
  servicePillIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  servicePillIconText: {
    fontSize: 20,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1B1B1B",
  },
  serviceSubtitle: {
    marginTop: 2,
    fontSize: 16,
    color: "#6B6B6B",
  },
  fab: { position: "absolute", right: 20, bottom: 100, zIndex: 10, backgroundColor:"#E15454", borderRadius: 50, padding: 16, elevation: 5, shadowColor: "#000",},
  container: {
    paddingLeft: 12,
    paddingRight: 12,
    gap: 20,
  },
  card: {
    height: 200,
    width: 330,
    justifyContent: "flex-end",
    borderRadius: 15,
    overflow: "hidden",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    padding: 10
  },
  cardSubtitle: {
    fontSize: 16,
    color: "#fff",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10
  },
  logo: {
    width: 100,
    height: 40,
    margin: 6,
  },
  button: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  buttonText: {
    textAlign: "left",
    fontWeight: "500",
    color: "#3333338b",
  },
});


