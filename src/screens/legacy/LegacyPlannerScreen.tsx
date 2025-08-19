import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import { AText } from "../../components/AText";
import { BackButton } from "../../components/BackButton";
import { Navbar } from "../../components/navbar";
import { styles } from "./styles";

type Step = { title: string; status: "Completed" | "Pending" | "Incomplete"; progress: `${number}%`; color: string };

const STEPS: Step[] = [
  { title: "Draft Will", status: "Pending", progress: "60%", color: "#E15454" },
  { title: "Medical Proxy", status: "Completed", progress: "100%", color: "#E15454" },
  { title: "Philanthropy Plan", status: "Incomplete", progress: "10%", color: "#E15454" },
  { title: "Power of Attorney", status: "Completed", progress: "100%", color: "#E15454" },
  { title: "Trusts", status: "Pending", progress: "40%", color: "#E15454" },
  { title: "Burial Arrangements", status: "Incomplete", progress: "0%", color: "#E15454" },
];

export function LegacyPlannerScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={["left", "right"]}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <BackButton style={styles.headerButton} />
            <View>
              <AText style={styles.title}>Legacy Planner</AText>
              <AText style={styles.subtitle}>Step-by-Step Progression</AText>
            </View>
          </View>
          <View style={styles.headerBadge}><Icon name="notifications" size={18} color="#111" /></View>
        </View>

        <View style={styles.tipBox}>
          <AText style={styles.tipText}>✴︎ Hello Alex. You’ve set up 2 of 6 legacy building blocks.</AText>
        </View>

        {STEPS.map((s) => (
          <View key={s.title} style={styles.stepCard}>
            <View style={styles.stepRow}>
              <AText style={styles.stepTitle}>{s.title}</AText>
              <AText style={styles.stepStatus}>{s.status}</AText>
            </View>
            <View style={styles.progressBg}><View style={[styles.progressFill, { width: s.progress, backgroundColor: s.color }]} /></View>
          </View>
        ))}

        <View style={styles.consultCta}>
          <Icon name="call" size={18} color="#E15454" />
          <AText style={styles.consultText}>Schedule Consultation with Advisor</AText>
        </View>
      </ScrollView>

      
      <Navbar />
    </SafeAreaView>
  );
}


