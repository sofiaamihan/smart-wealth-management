import { useRouter } from "expo-router";
import { Image, Pressable, ScrollView, View } from "react-native";
import { FAB } from 'react-native-elements';
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import { AText } from "../../components/AText";
import { Navbar } from "../../components/navbar";
import { CARD_GAP, CARD_WIDTH, styles } from "./styles";
// import { FAB } from "react-native-paper";

export function HomeScreen() {
  const router = useRouter();
  const BAR_HEIGHTS = [65, 80, 75, 48, 62, 55, 70, 30, 45, 52, 28, 88];
  return (
    <SafeAreaView style={styles.safe} edges={["left", "right"]}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <AText style={styles.title}>Home</AText>
            <AText style={styles.subtitle}>Sunday, 20 November</AText>
          </View>
          <View style={styles.headerBadge}>
            <Icon name="notifications" size={24} color="#000" />
          </View>
        </View>

        <View style={styles.greetingBlock}>
          <AText style={styles.greetingBullet}>✴︎</AText>
          <View style={{ flex: 1 }}>
            <AText style={styles.greetingText}>
              Good morning, Alex. Based on your current trajectory, you’re ahead on your passive income goal.
            </AText>
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.insightsStrip}
          snapToInterval={CARD_WIDTH + CARD_GAP}
          snapToAlignment="center"
          decelerationRate="fast"
          disableIntervalMomentum
        >
          <View style={[styles.darkCard, { width: CARD_WIDTH }]}>
            <AText style={styles.cardLabel}>Passive Income</AText>
            <View style={styles.incomeRow}>
              <AText style={styles.incomeValue}>$521,985.00</AText>
              <AText style={styles.perMonth}>/Month</AText>
            </View>
            <AText style={styles.tapHint}>Tap to View Suggestions</AText>
          </View>

          <View style={[styles.darkCard, { width: CARD_WIDTH }]}>
            <AText style={styles.cardLabel}>Investment Focus: Moderate Growth</AText>
            <View style={styles.barRow}>
              {BAR_HEIGHTS.map((h, idx) => (
                <View key={`bar-${idx}`} style={styles.barCol}>
                  <View style={styles.barBg}>
                    <View style={[styles.barFill, { height: `${h}%` }]} />
                  </View>
                </View>
              ))}
            </View>
            <AText style={styles.tapHint}>Tap to Adjust</AText>
          </View>
        </ScrollView>

        {/* Services */}
        <AText style={styles.sectionHeading}>Services</AText>
        <View style={{ gap: 14 }}>
          <View style={styles.serviceRow}>
            <View style={[styles.servicePillIcon, { backgroundColor: "#F7D7D7" }]}>
              <Icon name="map" size={24} color="#000" />
            </View>
            <Pressable style={{ flex: 1 }} onPress={() => router.replace("/lifemap")}>
              <AText style={styles.serviceTitle}>LifeMap</AText>
              <AText style={styles.serviceSubtitle}>Goal-Based Journey Planning</AText>
            </Pressable>
          </View>

          <View style={styles.serviceRow}>
            <View style={[styles.servicePillIcon, { backgroundColor: "#F7D7D7" }]}>
              <Icon name="assignment" size={24} color="#000" />
            </View>
            <Pressable style={{ flex: 1 }} onPress={() => router.replace("/legacy")}>
              <AText style={styles.serviceTitle}>Legacy Planner</AText>
              <AText style={styles.serviceSubtitle}>Step-by-Step Progression</AText>
            </Pressable>
          </View>

          <View style={styles.serviceRow}>
            <View style={[styles.servicePillIcon, { backgroundColor: "#F7D7D7" }]}>
              <Icon name="help" size={24} color="#000" />
            </View>
            <Pressable style={{ flex: 1 }} onPress={() => router.replace("/jargon")}>
              <AText style={styles.serviceTitle}>Jargon Translator</AText>
              <AText style={styles.serviceSubtitle}>Understand Financial Terminology</AText>
            </Pressable>
          </View>

          <View style={styles.serviceRow}>
            <View style={[styles.servicePillIcon, { backgroundColor: "#F7D7D7" }]}>
              <Icon name="lock" size={24} color="#000" />
            </View>
            <Pressable style={{ flex: 1 }} onPress={() => router.replace("/privatevault")}>
              <AText style={styles.serviceTitle}>PrivateVault™</AText>
              <AText style={styles.serviceSubtitle}>Secure 360° Wealth View</AText>
            </Pressable>
          </View>
        </View>

        <View style={{ height: 24 }} />
      </ScrollView>
      <FAB
        icon={
          <Image
            source={require("../../../assets/images/ai-chat.png")}
            style={{ width: 30, height: 30, borderRadius: 4 }}
            resizeMode="contain"
          />
        }
        color="#E15454"
        style={styles.fab}
        placement="right"
        onPress={() => router.push("/aicompanionchat")}
      />

      <Navbar />
    </SafeAreaView>
  );
}


