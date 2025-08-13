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

  tipBox: { backgroundColor: "#FFFFFF", borderRadius: 12, padding: 12, marginBottom: 14, elevation: 1 },
  tipText: { fontSize: 13, color: "#3C3C3C" },

  stepCard: { backgroundColor: "#FFFFFF", borderRadius: 18, padding: 16, marginBottom: 12, elevation: 1 },
  stepRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 10 },
  stepTitle: { fontSize: 14, fontWeight: "700", color: "#1B1B1B" },
  stepStatus: { fontSize: 12, color: "#8A8A8A" },
  progressBg: { height: 6, borderRadius: 3, backgroundColor: "#E9EEF1" },
  progressFill: { height: 6, borderRadius: 3, backgroundColor: "#E15454" },

  consultCta: { marginTop: 10, backgroundColor: "#FCEBEB", flexDirection: "row", alignItems: "center", gap: 8, borderRadius: 12, padding: 14 },
  consultText: { color: "#E15454", fontWeight: "700" },

  fab: { position: "absolute", right: 20, bottom: 86, width: 64, height: 64, borderRadius: 32, backgroundColor: "#E15454", alignItems: "center", justifyContent: "center", elevation: 4 },
});


