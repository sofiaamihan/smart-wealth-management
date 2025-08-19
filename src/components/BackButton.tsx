import React from "react";
import { Pressable, ViewStyle } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { router } from "expo-router";

type BackButtonProps = {
  style?: ViewStyle | ViewStyle[];
  size?: number;
  color?: string;
  to?: "/home";
};

export function BackButton({ style, size = 18, color = "#111", to = "/home" }: BackButtonProps) {
  const handlePress = () => router.replace(to);
  return (
    <Pressable style={style as any} onPress={handlePress} hitSlop={8}>
      <Icon name="arrow-back" size={size} color={color} />
    </Pressable>
  );
}


