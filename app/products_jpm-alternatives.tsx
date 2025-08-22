import { AText } from "@/src/components/AText";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function JPMAlternativesProduct() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF", padding: 16 }}>
      <View style={{ alignItems: "center", marginBottom: 16 }}>
        <Image source={require("@/assets/images/bank_logo/jpmorgan.png")} style={{ width: 240, height: 72 }} resizeMode="contain" />
      </View>
      <AText>J.P. Morgan Private Bank – Alternatives</AText>
    </SafeAreaView>
  );
}


