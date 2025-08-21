import { useRouter } from "expo-router";
import { Image, Pressable, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AText } from "../../components/AText";
import { styles } from "./styles";

export function LoginScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safe} edges={["top","left", "right"]}>
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
              <AText style={styles.primaryButtonText}>Log In (Client)</AText>
            </Pressable>
            <Pressable style={styles.primaryButton} onPress={() => router.replace("/advisor")}>
              <AText style={styles.primaryButtonText}>Log In (Advisor)</AText>
            </Pressable>
          </View>

          <View style={styles.legalRow}>
            <AText style={styles.legalLabel}>Statement of Financial Condition:</AText>
          </View>
          <View style={styles.linkRow}>
            <AText style={styles.linkText}>Privacy & Security</AText>
            <AText style={styles.linkText}>Disclosures</AText>
            <AText style={styles.linkText}>Support</AText>
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



