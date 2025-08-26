import { Dimensions, StyleSheet } from "react-native";
import { HORIZONTAL_PADDING } from "../home/constants";

const { width: screenWidth } = Dimensions.get("window");

export const CHART_CARD_WIDTH = screenWidth - HORIZONTAL_PADDING * 2.1;
export const CHART_CARD_GAP = 14;

export const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#ECECEC" },
  scrollContent: { paddingHorizontal: HORIZONTAL_PADDING, paddingTop: 8, paddingBottom: 90 },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 14 },
  headerLeft: { flexDirection: "row", alignItems: "center", gap: 10 },
  headerButton: { width: 32, height: 32, borderRadius: 16, backgroundColor: "#FFFFFF", alignItems: "center", justifyContent: "center", elevation: 2 },
  headerBadge: { width: 36, height: 36, borderRadius: 18, backgroundColor: "#FFFFFF", alignItems: "center", justifyContent: "center", elevation: 2 },
  title: { fontSize: 24, fontWeight: "700", color: "#111" },
  subtitle: { marginTop: 2, fontSize: 18, color: "#6B6B6B" },

  chartsContainer: { marginBottom: 16 },
  chartCard: { alignItems: "center", height: 200, borderRadius: 12, backgroundColor: "#FFFFFF", marginRight: CHART_CARD_GAP, elevation: 1, overflow: "hidden" },
  chartImage: { width: 400, height: 220, },

  inlineCardsRow: { flexDirection: "row", gap: 14, marginBottom: 16 },
  statCard: { flex: 1, backgroundColor: "#FFFFFF", borderRadius: 14, padding: 14, elevation: 1 },
  dotPink: { width: 8, height: 8, borderRadius: 4, backgroundColor: "#E15454", marginBottom: 8 },
  dotGreen: { width: 8, height: 8, borderRadius: 4, backgroundColor: "#2ECC71", marginBottom: 8 },
  statValue: { fontSize: 18, fontWeight: "800", color: "#111" },
  statLabel: { marginTop: 2, fontSize: 16, color: "#6B6B6B" },

  walletCard: { backgroundColor: "#FFFFFF", borderRadius: 18, padding: 16, marginBottom: 14, elevation: 1 },
  walletTitle: { fontSize: 18, color: "#6B6B6B", marginBottom: 8 },
  walletRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 10 },
  walletValue: { fontSize: 18, fontWeight: "800", color: "#111" },
  walletPercentPositive: { fontSize: 14, color: "#2ECC71", fontWeight: "700" },
  walletPercentNegative: { fontSize: 14, color: "#E15454", fontWeight: "700" },
  progressBg: { height: 6, borderRadius: 3, backgroundColor: "#E9EEF1" },
  progressFill: { height: 6, borderRadius: 3, backgroundColor: "#2ECC71" },
  progressFillPink: { height: 6, borderRadius: 3, backgroundColor: "#E15454" },

  fab: { position: "absolute", right: 20, bottom: 86, width: 64, height: 64, borderRadius: 32, backgroundColor: "#E15454", alignItems: "center", justifyContent: "center", elevation: 4 },
  subtitle2: { marginTop: 2, fontSize: 12, color: "#6B6B6B" },
});


