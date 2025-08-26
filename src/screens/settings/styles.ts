import { Dimensions, StyleSheet } from "react-native";

const { width: screenWidth } = Dimensions.get("window");
const H_PADDING = 20;

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#ECECEC",
  },
  scrollContent: {
    paddingHorizontal: H_PADDING,
    paddingTop: 8,
    paddingBottom: 90,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  titleWrap: {},
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111",
  },
  subtitle: {
    marginTop: 2,
    fontSize: 18,
    color: "#6B6B6B",
  },
  headerBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  profileCard: {
    borderRadius: 14,
    padding: 14,
    paddingRight: 45,
    marginBottom: 16,
    backgroundColor: "#E15454",
  },
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    overflow: "hidden",
  },
  profileTextWrap: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  profileHandle: {
    marginTop: 4,
    fontSize: 16,
    color: "#F5F5F5",
  },
  editIconWrap: {
    marginRight: 20,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "rgba(255,255,255,0.2)",
    alignItems: "center",
    justifyContent: "center",
  },

  listWrap: {
    gap: 14,
  },
  item: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  itemIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#F4F4F4",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1B1B1B",
  },
  itemSubtitle: {
    marginTop: 2,
    fontSize: 16,
    color: "#6B6B6B",
  },

  logoutItem: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginTop: 14,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  logoutRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoutIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#F4F4F4",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  logoutTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1B1B1B",
  },

  fab: {
    position: "absolute",
    right: 20,
    bottom: 86,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#E15454",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
});

