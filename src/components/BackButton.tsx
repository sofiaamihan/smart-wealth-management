import React from "react";
import { router } from "expo-router";
import { Pressable, StyleSheet, ViewStyle } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

type BackButtonProps = {
  style?: ViewStyle | ViewStyle[];
  size?: number;
  color?: string;
  to?: "/home";
};

const styles = StyleSheet.create({
  headerButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
});

export function BackButton({ style, size = 18, color = "#111", to = "/home" }: BackButtonProps) {
  const handlePress = () => router.replace(to);
  return (
    <Pressable style={[styles.headerButton, style]} onPress={handlePress} hitSlop={8}>
      <Icon name="arrow-back" size={size} color={color} />
    </Pressable>
  );
}


