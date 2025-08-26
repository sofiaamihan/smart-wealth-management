import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import { AText } from "../../components/AText";
import { Navbar } from "../../components/navbar";
import { CARD_GAP, CARD_WIDTH, styles } from "./styles";
// import { FAB } from "react-native-paper";

export function HomeScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safe} edges={["top","left", "right"]}>
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

        <AText style={styles.sectionHeading}>Explore Products</AText>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.insightsStrip}
          snapToInterval={CARD_WIDTH + CARD_GAP}
          snapToAlignment="start"
          decelerationRate="fast"
          disableIntervalMomentum
          pagingEnabled={false}
        >
          <Pressable style={[styles.productCard, { width: CARD_WIDTH }]} onPress={() => router.push("/products_juliusbaer")}>
            <Image
              source={require("../../../assets/images/bank_logo/julius_baer_logo.jpeg")}
              style={styles.productLogo}
              resizeMode="contain"
            />
            <AText style={styles.productTitle}>Private Markets with auction liquidity option</AText>
            <AText style={styles.productDesc}>
              Internal auction platform offers explicit liquidity to help dispose positions if needed.
            </AText>
          </Pressable>

          <Pressable style={[styles.productCard, { width: CARD_WIDTH }]} onPress={() => router.push("/products_goldman-petershill")}>
            <Image
              source={require("../../../assets/images/bank_logo/Goldman_Sachs.png")}
              style={styles.productLogo}
              resizeMode="contain"
            />
            <AText style={styles.productTitle}>Goldman Sachs – Petershill</AText>
            <AText style={styles.productDesc}>
              GS Alternatives markets GP-stakes via Petershill—distinctive alt sleeve for wealth clients.
            </AText>
          </Pressable>

          <Pressable style={[styles.productCard, { width: CARD_WIDTH }]} onPress={() => router.push("/products_jpm-alternatives")}>
            <Image
              source={require("../../../assets/images/bank_logo/jpmorgan.png")}
              style={styles.productLogo}
              resizeMode="contain"
            />
            <AText style={styles.productTitle}>J.P. Morgan Private Bank – Alternatives</AText>
            <AText style={styles.productDesc}>
              Extensive sourcing, diligence, and access across four alternative pillars.
            </AText>
          </Pressable>
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
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.fab}
        onPress={() => router.push("/aicompanionchat")}
      >
        <Image
          source={require("../../../assets/images/ai-chat.png")}
          style={{ width: 40, height: 40, borderRadius: 4 }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Navbar />
    </SafeAreaView>
  );
}


