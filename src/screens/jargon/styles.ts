import { StyleSheet } from "react-native";

const H_PADDING = 20;

export const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#ECECEC" },
  scrollContent: { paddingHorizontal: H_PADDING, paddingTop: 8, paddingBottom: 90 },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 14 },
  headerLeft: { flexDirection: "row", alignItems: "center", gap: 10 },
  headerButton: { width: 32, height: 32, borderRadius: 16, backgroundColor: "#FFFFFF", alignItems: "center", justifyContent: "center", elevation: 2 },
  headerBadge: { width: 36, height: 36, borderRadius: 18, backgroundColor: "#FFFFFF", alignItems: "center", justifyContent: "center", elevation: 2 },
  title: { fontSize: 24, fontWeight: "700", color: "#111" },
  subtitle: { marginTop: 2, fontSize: 18, color: "#6B6B6B" },

  card: { backgroundColor: "#FFFFFF", borderRadius: 16, padding: 16, marginBottom: 14, elevation: 1 },
  term: { fontSize: 20, fontWeight: "800", color: "#1B1B1B", textAlign: "center", marginBottom: 8 },
  definition: { fontSize: 16, color: "#3C3C3C", lineHeight: 18, textAlign: "center" },
  cardFooter: { marginTop: 12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  moreLink: { color: "#E15454", textDecorationLine: "underline" },

  fab: { position: "absolute", right: 20, bottom: 86, width: 64, height: 64, borderRadius: 32, backgroundColor: "#E15454", alignItems: "center", justifyContent: "center", elevation: 4 },
});


