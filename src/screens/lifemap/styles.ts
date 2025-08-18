import { StyleSheet } from "react-native";

const H_PADDING = 20;

export const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#ECECEC" },
  scrollContent: { paddingHorizontal: H_PADDING, paddingTop: 8, paddingBottom: 90 },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 14 },
  headerLeft: { flexDirection: "row", alignItems: "center", gap: 10 },
  headerButton: { width: 32, height: 32, borderRadius: 16, backgroundColor: "#FFFFFF", alignItems: "center", justifyContent: "center", elevation: 2 },
  headerBadge: { width: 36, height: 36, borderRadius: 18, backgroundColor: "#FFFFFF", alignItems: "center", justifyContent: "center", elevation: 2 },
  title: { fontSize: 22, fontWeight: "700", color: "#111" },
  subtitle: { marginTop: 2, fontSize: 12, color: "#6B6B6B" },

  chartPlaceholder: { height: 140, borderRadius: 10, backgroundColor: "#DFE6EA", marginBottom: 16, opacity: 0.6 },

  timelineItem: { flexDirection: "row", marginBottom: 18 },
  timelineDot: { width: 50, alignItems: "center" },
  timelineDotText: { backgroundColor: "#E15454", color: "#FFFFFF", paddingVertical: 4, paddingHorizontal: 6, borderRadius: 14, fontWeight: "700" },
  timelineContent: { flex: 1, paddingLeft: 8 },
  goalTitle: { fontSize: 16, fontWeight: "800", color: "#1B1B1B", marginBottom: 8 },
  goalRow: { flexDirection: "row", alignItems: "center", gap: 8 },
  goalText: { fontSize: 13, color: "#3C3C3C", flex: 1 },
  addGoalCta: { marginTop: 10, backgroundColor: "#FFFFFF", alignSelf: "flex-start", borderRadius: 10, paddingVertical: 8, paddingHorizontal: 14, elevation: 1 },
  addGoalText: { fontWeight: "700", color: "#1B1B1B" },

  fab: { position: "absolute", right: 20, bottom: 86, width: 64, height: 64, borderRadius: 32, backgroundColor: "#E15454", alignItems: "center", justifyContent: "center", elevation: 4 },
});


