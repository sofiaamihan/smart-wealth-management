import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import { Alert, Pressable, ScrollView, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AText } from "../../components/AText";
import { BackButton } from "../../components/BackButton";

type Params = {
  name?: string;
  initials?: string;
  portfolio?: string;
  title?: string;
  detail?: string;
  action?: string;
  amount?: string;
  type?: "liquidity" | "home" | "retirement" | string;
};

export default function RecommendationDetailScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<Params>();

  const [timeHorizon, setTimeHorizon] = useState<string>("6-12m");
  const [courseOfAction, setCourseOfAction] = useState<string>(params.action || "");
  const [amount, setAmount] = useState<string>(params.amount || "");

  const actionOptions = useMemo(() => {
    const type = params.type;
    if (type === "liquidity") {
      return [
        "High-yield savings allocation",
        "Short-term T-bills",
        "Money market fund",
      ];
    }
    if (type === "home") {
      return [
        "75% bank loan, 25% down (CPF/cash)",
        "60% bank loan, 40% down (CPF/cash)",
        "50% bank loan, 50% down (CPF/cash)",
      ];
    }
    if (type === "retirement") {
      return [
        "Increase dividend-focused allocations",
        "Laddered bond strategy",
        "Balanced income portfolio",
      ];
    }
    return [params.action || "Proposed action", "Alternative A", "Alternative B"];
  }, [params.type, params.action]);

  const horizonOptions = ["0-6m", "6-12m", "1-3y", "3-5y", ">5y"];

  const handleSave = () => {
    Alert.alert("Saved", "Recommendation updated for the client.");
    router.back();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ECECEC" }} edges={["top", "left", "right"]}>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 8, paddingBottom: 24 }} showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
          <BackButton to="/advisor" />
          <AText style={{ fontSize: 18, fontWeight: "700", color: "#111" }}>Recommendation</AText>
          <View style={{ width: 32 }} />
        </View>

        <View style={{ backgroundColor: "#FFFFFF", borderRadius: 16, padding: 16, gap: 12, shadowColor: "#000", shadowOpacity: 0.05, shadowRadius: 8, shadowOffset: { width: 0, height: 2 }, elevation: 1 }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
            <View style={{ width: 44, height: 44, borderRadius: 22, backgroundColor: "#E15454", alignItems: "center", justifyContent: "center" }}>
              <AText style={{ color: "#FFFFFF", fontSize: 16, fontWeight: "700" }}>{params.initials || ""}</AText>
            </View>
            <View style={{ flex: 1 }}>
              <AText style={{ fontSize: 16, fontWeight: "700", color: "#1B1B1B" }}>{params.name || "Client"}</AText>
              <AText style={{ fontSize: 12, color: "#6B6B6B", marginTop: 2 }}>Portfolio: ${params.portfolio || "-"}M</AText>
            </View>
          </View>

          <View style={{ gap: 6 }}>
            <AText style={{ fontSize: 14, fontWeight: "700", color: "#1B1B1B" }}>{params.title || "Recommendation"}</AText>
            <AText style={{ fontSize: 13, color: "#3C3C3C", lineHeight: 18 }}>{params.detail || ""}</AText>
            <AText style={{ fontSize: 12, color: "#E15454", fontWeight: "600", marginTop: 4 }}>AI Suggestion: {params.action || ""}</AText>
          </View>
        </View>

        <AText style={{ marginTop: 18, marginBottom: 10, fontSize: 20, fontWeight: "700", color: "#222" }}>Adjust Recommendation</AText>

        <View style={{ backgroundColor: "#FFFFFF", borderRadius: 16, padding: 16, gap: 16, shadowColor: "#000", shadowOpacity: 0.05, shadowRadius: 8, shadowOffset: { width: 0, height: 2 }, elevation: 1 }}>
          <View style={{ gap: 8 }}>
            <AText style={{ fontSize: 13, color: "#6B6B6B" }}>Time Horizon</AText>
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
              {horizonOptions.map((opt) => (
                <Pressable key={opt} onPress={() => setTimeHorizon(opt)} style={{ paddingHorizontal: 12, paddingVertical: 8, borderRadius: 20, backgroundColor: timeHorizon === opt ? "#1E2B34" : "#F0F0F0" }}>
                  <AText style={{ color: timeHorizon === opt ? "#FFFFFF" : "#333" }}>{opt}</AText>
                </Pressable>
              ))}
            </View>
          </View>

          <View style={{ gap: 8 }}>
            <AText style={{ fontSize: 13, color: "#6B6B6B" }}>Course of Action</AText>
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
              {actionOptions.map((opt) => (
                <Pressable key={opt} onPress={() => setCourseOfAction(opt)} style={{ paddingHorizontal: 12, paddingVertical: 8, borderRadius: 20, backgroundColor: courseOfAction === opt ? "#1E2B34" : "#F0F0F0" }}>
                  <AText style={{ color: courseOfAction === opt ? "#FFFFFF" : "#333" }}>{opt}</AText>
                </Pressable>
              ))}
            </View>
          </View>

          <View style={{ gap: 8 }}>
            <AText style={{ fontSize: 13, color: "#6B6B6B" }}>Amount</AText>
            <View style={{ borderRadius: 12, backgroundColor: "#F7F7F7", paddingHorizontal: 12, paddingVertical: 10 }}>
              <TextInput
                value={amount}
                onChangeText={setAmount}
                keyboardType="numeric"
                placeholder="$"
                placeholderTextColor="#999"
                style={{ fontSize: 16, color: "#111" }}
              />
            </View>
          </View>
        </View>

        <Pressable onPress={handleSave} style={{ marginTop: 18, backgroundColor: "#1E2B34", borderRadius: 14, paddingVertical: 14, alignItems: "center" }}>
          <AText style={{ color: "#FFFFFF", fontSize: 16, fontWeight: "700" }}>Save Recommendation</AText>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}


