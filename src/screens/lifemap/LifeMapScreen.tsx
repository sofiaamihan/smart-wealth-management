import React from "react";
import { Image, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import { AText } from "../../components/AText";
import { BackButton } from "../../components/BackButton";
import { Navbar } from "../../components/navbar";
import { styles } from "./styles";

export function LifeMapScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={["top","left", "right",]}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <BackButton style={styles.headerButton} />
            <View>
              <AText style={styles.title}>LifeMap</AText>
              <AText style={styles.subtitle}>Goal-Based Journey Planning</AText>
            </View>
          </View>
          <View style={styles.headerBadge}><Icon name="notifications" size={18} color="#111" /></View>
        </View>

        <Image
          source={require("../../../assets/images/Chart.png")}
          style={[styles.chartPlaceholder, { width: "100%", height:"40%", backgroundColor:"#ECECEC"}]}
          resizeMode="contain"
        />

        {["2027", "2030", "2035"].map((year, idx) => (
          <View key={year} style={styles.timelineItem}>
            <View style={styles.timelineDot}><AText style={styles.timelineDotText}>{year}</AText></View>
            <View style={styles.timelineContent}>
              <AText style={styles.goalTitle}>
                {idx === 0 ? "2nd Home Purchase by 2027" : idx === 1 ? "Trust fund for your child by 2030" : "Retirement Fund Growth by 2035"}
              </AText>
              <View style={{ gap: 8 }}>
                <View style={styles.goalRow}><Icon name="savings" size={16} color="#6B6B6B" /><AText style={styles.goalText}>Set aside $5,000/month into a high-yield savings account.</AText></View>
                <View style={styles.goalRow}><Icon name="autorenew" size={16} color="#6B6B6B" /><AText style={styles.goalText}>Automate monthly transfers of $5000.00 to ensure consistent savings.</AText></View>
              </View>
              <View style={styles.addGoalCta}><AText style={styles.addGoalText}>Add Goal</AText></View>
            </View>
          </View>
        ))}
      </ScrollView>
      
      <Navbar />
    </SafeAreaView>
  );
}


