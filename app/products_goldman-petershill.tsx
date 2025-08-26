import { AText } from "@/src/components/AText";
import React from "react";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function GoldmanPetershillProduct() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF", padding: 16 }}>
      <View style={{ alignItems: "center", marginBottom: 16 }}>
        <Image source={require("@/assets/images/bank_logo/gs_logo.png")} style={{ width: 240, height: 72 }} resizeMode="contain" />
      </View>
      <AText>Goldman Sachs – Petershill (GP stakes via GS Alternatives)</AText>
    </SafeAreaView>
  );
}


