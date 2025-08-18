import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AText } from "../../components/AText";
import { styles } from "./styles";

export function LoginScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safe} edges={["left", "right"]}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Image
            source={require("../../../assets/images/login_background.jpg")}
            style={styles.backgroundImage}
            resizeMode="cover"
          />
          <Image
            source={require("../../../assets/images/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <View style={styles.card}>
          <AText style={styles.heading}>Welcome to UBS</AText>

          <View style={styles.ctaWrap}>
          <Pressable style={styles.primaryButton} onPress={() => router.replace("/home")}>
              <AText style={styles.primaryButtonText}>Log In</AText>
            </Pressable>

            <Pressable style={styles.secondaryButton}>
              <AText style={styles.secondaryButtonText}>Register for online access</AText>
            </Pressable>
          </View>

          <View style={styles.legalBlock}>
            <AText style={styles.legalLabel}>Statement of Financial Condition:</AText>
            <View style={styles.linkRow}>
              <AText style={styles.linkText}>Privacy & Security</AText>
              <AText style={styles.linkText}>Disclosures</AText>
              <AText style={styles.linkText}>Support</AText>
            </View>
          </View>

          <View style={styles.footerRow}>
            <AText style={styles.footerLeft}>UBS Financial Inc.</AText>
            <AText style={styles.footerRight}>55.0.0.0</AText>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


