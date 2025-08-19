import { usePathname, useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";

import { AText } from "./AText";

type BottomNavItem = {
  key: string;
  icon: string;
  label: string;
  path: "/home" | "/aicompanionchat"| "/settings";
  onPress?: () => void;
};

type NavbarProps = {
  items?: BottomNavItem[];
};

export function Navbar({ items }: NavbarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const insets = useSafeAreaInsets();
  const navItems: BottomNavItem[] =
    items ?? [
      { key: "home", icon: "home", label: "Home", path: "/home" },
      { key: "conversation", icon: "chat", label: "AI Companion", path: "/aicompanionchat" },
      { key: "settings", icon: "settings", label: "Settings", path: "/settings" },
    ];

  return (
    <View style={stylesRoot.container}>
      <View style={[stylesRoot.bar, { paddingBottom: insets.bottom }]}>
        {navItems.map((item) => {
          const isActive = pathname === item.path || pathname?.startsWith(item.path + "/");
          const tint = isActive ? "#111" : "#7C7C7C";
          const handlePress = item.onPress ?? (() => router.replace(item.path));
          return (
            <Pressable key={item.key} onPress={handlePress} style={stylesRoot.item} hitSlop={8}>
              <Icon name={item.icon as any} size={22} color={tint} />
              <AText style={[stylesRoot.label, { color: tint }]}>{item.label}</AText>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const stylesRoot = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
  },
  bar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    paddingVertical: 8,
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  item: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
  label: {
    fontSize: 10,
    color: "#7C7C7C",
  },
});