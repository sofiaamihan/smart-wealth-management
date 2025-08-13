import { Actor_400Regular, useFonts } from "@expo-google-fonts/actor";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useEffect } from "react";
import { Text, View } from "react-native";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Actor_400Regular,
  });

  // keeping splash screen until fonts are loaded
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  // hiding splash screen once first frame that uses the fonts is ready
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // if fonts aren't ready yet, render nothing and let the splash stay on
  if (!fontsLoaded) return null;

  // apply Actor as default font for all native Text
  (Text as any).defaultProps = (Text as any).defaultProps || {};
  (Text as any).defaultProps.style = [
    { fontFamily: "Actor_400Regular" },
    (Text as any).defaultProps.style,
  ];

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Stack />
    </View>
  );
}