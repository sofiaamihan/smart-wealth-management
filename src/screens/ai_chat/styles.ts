import { StyleSheet } from "react-native";

const H_PADDING = 20;

export const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#ECECEC", paddingTop: 10, paddingBottom:20 },
  scrollContent: { paddingHorizontal: H_PADDING, paddingTop: 8, paddingBottom: 90 },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 14, paddingLeft: 12, paddingRight: 12 },
  headerLeft: { flexDirection: "row", alignItems: "center", gap: 10 },
  headerButton: { width: 32, height: 32, borderRadius: 16, backgroundColor: "#FFFFFF", alignItems: "center", justifyContent: "center", elevation: 2 },
  headerBadge: { width: 36, height: 36, borderRadius: 18, backgroundColor: "#EF6060", alignItems: "center", justifyContent: "center", elevation: 2 },
  title: { fontSize: 24, fontWeight: "700", color: "#111" },
  subtitle: { marginTop: 2, fontSize: 18, color: "#6B6B6B" },
  floatingBtn: { position: 'absolute', bottom: 10, right: 10, },
  chatChunk: { flexDirection: "row", padding: 10 },
  chatType: { fontWeight: "bold", marginRight: 5 },
  userInput: { fontSize: 18, flex: 1, borderWidth: 1, borderColor: "#ccc", borderRadius: 8, paddingHorizontal: 10, paddingVertical: 10, marginRight: 8, },
  userBtn: { backgroundColor: "#111", paddingVertical: 10, paddingHorizontal: 16, borderRadius: 8, },
  userBtnText: { color: "#fff", fontSize: 18 },
  messageBubble: { maxWidth: "75%", padding: 10, borderRadius: 16, marginVertical: 4, },
  userBubble: { backgroundColor: "#ff9292ff", alignSelf: "flex-end", borderBottomRightRadius: 0, },
  botBubble: { backgroundColor: "#D9D9D9", alignSelf: "flex-start", borderBottomLeftRadius: 0, },
  messageText: { color: "#141414", fontSize: 18 },
  quickPromptView: { height: 50, justifyContent: "center", backgroundColor: "rgba(255, 255, 255, 0)" },
  footer: { flexDirection: "row", alignItems: "center", borderColor: "#eee", paddingLeft: 12, paddingRight: 12 },
  flatListContainer: { paddingHorizontal: 20, paddingVertical: 10 },
  dot: { padding:10 },
  quickPrompt: { backgroundColor: "#f0f0f0", borderColor: "#6B6B6B", borderWidth: 0.5, paddingHorizontal: 12, paddingVertical: 8, borderRadius: 16, marginRight: 8, },
  scrollViewContainer: { paddingHorizontal: 10, paddingVertical: 5, backgroundColor: "rgba(255, 255, 255, 0)" },
  card: { backgroundColor: "#FFFFFF", borderRadius: 16, padding: 16, marginBottom: 14, elevation: 1 },
  term: { fontSize: 20, fontWeight: "800", color: "#1B1B1B", textAlign: "center", marginBottom: 8 },
  definition: { fontSize: 13, color: "#3C3C3C", lineHeight: 18, textAlign: "center" },
  cardFooter: { marginTop: 12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  moreLink: { color: "#E15454", textDecorationLine: "underline" },

});


