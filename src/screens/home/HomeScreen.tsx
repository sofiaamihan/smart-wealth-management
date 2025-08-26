import { useRouter } from "expo-router";
import React from "react";
import { Image, ImageBackground, Pressable, ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import { AText } from "../../components/AText";
import { Navbar } from "../../components/navbar";
import { styles } from "./styles";

type CardProps = {
  logo: any;
  subtitle: string;
  image: any;
  onPress: () => void;
  logoStyle?: any; 
};

const InfoCard: React.FC<CardProps> = ({ logo, subtitle, image, onPress, logoStyle }) => {
  return (
    <ImageBackground source={image} style={styles.card} imageStyle={{ borderRadius: 15 }}>
      <View>
        <Image source={logo} style={logoStyle} resizeMode="contain" />
        <AText style={styles.cardSubtitle}>{subtitle}</AText>
      </View>
      <Pressable style={styles.button} onPress={onPress}>
        <AText style={styles.buttonText}>Click for More Information</AText>
      </Pressable>
    </ImageBackground>
  );
};

const today = new Date();

const options: Intl.DateTimeFormatOptions = {
  weekday: 'long', // "Sunday"
  day: 'numeric',  // "20"
  month: 'long',   // "November"
};

const formattedDate = today.toLocaleDateString('en-US', options);

export function HomeScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safe} edges={["top","left", "right"]}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <AText style={styles.title}>Home</AText>
            <AText style={styles.subtitle}>{formattedDate}</AText>
          </View>
          <View style={styles.headerBadge}>
            <Icon name="notifications" size={24} color="#000" />
          </View>
        </View>

        <AText style={styles.sectionHeading}>Explore Available Products</AText>
        <ScrollView
          horizontal
          contentContainerStyle={styles.container}
          showsHorizontalScrollIndicator={false}
          snapToInterval={330+24}
          snapToAlignment="start"
          decelerationRate="fast"
          disableIntervalMomentum
          pagingEnabled={false}
        >
          <InfoCard
            logo={require("../../../assets/images/bank_logo/ubs_logo.png")}
            subtitle="Broad multi-asset alternatives access including private equity, hedge funds, real estate, and infrastructure."
            image={require("../../../assets/images/bank_logo/ubs_background.png")}
            onPress={() => router.push("/products_ubs")}
            logoStyle={styles.ubslogo}
          />

          <InfoCard
            logo={require("../../../assets/images/bank_logo/jb_logo.png")}
            subtitle="Internal auction platform offers explicit liquidity to help dispose positions if needed."
            image={require("../../../assets/images/bank_logo/jb_background.png")}
            onPress={() => router.push("/products_juliusbaer")}
            logoStyle={styles.jblogo}
          />

          <InfoCard
            logo={require("../../../assets/images/bank_logo/gs_logo.png")}
            subtitle="Broad multi-asset alternatives access including private equity, hedge funds, real estate, and infrastructure."
            image={require("../../../assets/images/bank_logo/gs_background.png")}
            onPress={() => router.push("/products_goldman-petershill")}
            logoStyle={styles.gslogo}
          />

          <InfoCard
            logo={require("../../../assets/images/bank_logo/jp_logo.png")}
            subtitle="Extensive sourcing, diligence, and access across four alternative pillars."
            image={require("../../../assets/images/bank_logo/jp_background.png")}
            onPress={() => router.push("/products_jpm-alternatives")}
            logoStyle={styles.jplogo}
          />
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


