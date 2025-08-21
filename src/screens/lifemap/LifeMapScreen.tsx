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
          style={[styles.chartPlaceholder, { width: "100%", height: undefined, aspectRatio: 1.6 }]}
          resizeMode="contain"
        />

        {["2025", "2027", "2030"].map((year, idx) => (
          <View key={year} style={styles.timelineItem}>
            <View style={styles.timelineDot}><AText style={styles.timelineDotText}>{year}</AText></View>
            <View style={styles.timelineContent}>
              <AText style={styles.goalTitle}>
                {idx === 0 ? "Emergency Fund By 2025" : idx === 1 ? "Home Purchase by 2027" : "Retirement Fund Growth by 2030"}
              </AText>
              <View style={{ gap: 8 }}>
                <View style={styles.goalRow}><Icon name="savings" size={16} color="#6B6B6B" /><AText style={styles.goalText}>Set aside $5,000/year into a high-yield savings account.</AText></View>
                <View style={styles.goalRow}><Icon name="autorenew" size={16} color="#6B6B6B" /><AText style={styles.goalText}>Automate monthly transfers of $416.67 to ensure consistent savings.</AText></View>
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


