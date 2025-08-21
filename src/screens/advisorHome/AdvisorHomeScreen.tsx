import { useRouter } from "expo-router";
import { Image, Pressable, ScrollView, View } from "react-native";
import { FAB } from 'react-native-elements';
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import { AText } from "../../components/AText";
import { AdvisorNavbar } from "../../components/advisorNavbar";
import { styles } from "./styles";

export function AdvisorScreen() {
  const router = useRouter();
  const BAR_HEIGHTS = [65, 80, 75, 48, 62, 55, 70, 30, 45, 52, 28, 88];
  return (
    <SafeAreaView style={styles.safe} edges={["top","left", "right"]}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <AText style={styles.title}>Advisor Dashboard</AText>
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
              Good morning. You have 3 clients requiring immediate attention and 2 pending recommendations to review.
            </AText>
          </View>
        </View>

        <AText style={styles.sectionHeading}>Client Recommendations</AText>
        <View style={{ gap: 14 }}>
          <Pressable style={styles.clientCard}>
            <View style={styles.clientHeader}>
              <View style={styles.clientAvatar}>
                <AText style={styles.clientInitials}>JS</AText>
              </View>
              <View style={{ flex: 1 }}>
                <AText style={styles.clientName}>John Smith</AText>
                <AText style={styles.clientPortfolio}>Portfolio: $2.1M</AText>
              </View>
              <View style={styles.urgencyBadge}>
                <AText style={styles.urgencyText}>URGENT</AText>
              </View>
            </View>
            <View style={styles.recommendationContent}>
              <AText style={styles.recommendationTitle}>Liquidity Recommendation</AText>
              <AText style={styles.recommendationDetail}>
                Move $500k into liquidity for child's graduation expenses expected in Q2 2024.
              </AText>
              <AText style={styles.recommendationAction}>Recommended Action: High-yield savings allocation</AText>
            </View>
          </Pressable>

          <Pressable style={styles.clientCard}>
            <View style={styles.clientHeader}>
              <View style={styles.clientAvatar}>
                <AText style={styles.clientInitials}>MB</AText>
              </View>
              <View style={{ flex: 1 }}>
                <AText style={styles.clientName}>Maria B</AText>
                <AText style={styles.clientPortfolio}>Portfolio: $3.8M</AText>
              </View>
              <View style={[styles.urgencyBadge, { backgroundColor: "#FFF3CD" }]}>
                <AText style={[styles.urgencyText, { color: "#856404" }]}>REVIEW</AText>
              </View>
            </View>
            <View style={styles.recommendationContent}>
              <AText style={styles.recommendationTitle}>Home Purchase Strategy</AText>
              <AText style={styles.recommendationDetail}>
                Considering $1.2M home purchase. Evaluate mortgage vs cash options for optimal tax efficiency.
              </AText>
              <AText style={styles.recommendationAction}>Recommended Action: 80% mortgage, 20% down payment</AText>
            </View>
          </Pressable>

          <Pressable style={styles.clientCard}>
            <View style={styles.clientHeader}>
              <View style={styles.clientAvatar}>
                <AText style={styles.clientInitials}>JD</AText>
              </View>
              <View style={{ flex: 1 }}>
                <AText style={styles.clientName}>James D</AText>
                <AText style={styles.clientPortfolio}>Portfolio: $1.6M</AText>
              </View>
              <View style={[styles.urgencyBadge, { backgroundColor: "#D1ECF1" }]}>
                <AText style={[styles.urgencyText, { color: "#0C5460" }]}>PENDING</AText>
              </View>
            </View>
            <View style={styles.recommendationContent}>
              <AText style={styles.recommendationTitle}>Retirement Acceleration</AText>
              <AText style={styles.recommendationDetail}>
                Early retirement goal moved up 2 years. Requires portfolio rebalancing for income generation.
              </AText>
              <AText style={styles.recommendationAction}>Recommended Action: Increase dividend-focused allocations</AText>
            </View>
          </Pressable>
        </View>

        <AText style={styles.sectionHeading}>Advisor Tools</AText>
        <View style={{ gap: 14 }}>
          <View style={styles.serviceRow}>
            <View style={[styles.servicePillIcon, { backgroundColor: "#E8F4FD" }]}>
              <Icon name="analytics" size={24} color="#000" />
            </View>
            <Pressable style={{ flex: 1 }}>
              <AText style={styles.serviceTitle}>Portfolio Analytics</AText>
              <AText style={styles.serviceSubtitle}>Advanced Performance Tracking</AText>
            </Pressable>
          </View>

          <View style={styles.serviceRow}>
            <View style={[styles.servicePillIcon, { backgroundColor: "#F0F8E8" }]}>
              <Icon name="people" size={24} color="#000" />
            </View>
            <Pressable style={{ flex: 1 }}>
              <AText style={styles.serviceTitle}>Client Management</AText>
              <AText style={styles.serviceSubtitle}>Comprehensive Client Overview</AText>
            </Pressable>
          </View>

          <View style={styles.serviceRow}>
            <View style={[styles.servicePillIcon, { backgroundColor: "#FFF5E6" }]}>
              <Icon name="trending-up" size={24} color="#000" />
            </View>
            <Pressable style={{ flex: 1 }}>
              <AText style={styles.serviceTitle}>Market Research</AText>
              <AText style={styles.serviceSubtitle}>Real-time Market Insights</AText>
            </Pressable>
          </View>

          <View style={styles.serviceRow}>
            <View style={[styles.servicePillIcon, { backgroundColor: "#F3E8FF" }]}>
              <Icon name="assignment" size={24} color="#000" />
            </View>
            <Pressable style={{ flex: 1 }}>
              <AText style={styles.serviceTitle}>Proposal Generator</AText>
              <AText style={styles.serviceSubtitle}>Automated Client Proposals</AText>
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

      <AdvisorNavbar />
    </SafeAreaView>
  );
}


