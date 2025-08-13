import React from "react";
import { Text as RNText, TextProps } from "react-native";

export function AText(props: TextProps) {
  const { style, ...rest } = props;
  return <RNText {...rest} style={[{ fontFamily: "Actor_400Regular" }, style]} />;
}


