import { Image, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import { AText } from "../../components/AText";
import { BackButton } from "../../components/BackButton";
import { Navbar } from "../../components/navbar";
import { styles } from "./styles";

export function PrivateVaultScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={["top","left", "right"]}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <BackButton style={styles.headerButton} />
            <View>
              <AText style={styles.title}>PrivateVault™</AText>
              <AText style={styles.subtitle}>Secure 360° Wealth View</AText>
            </View>
          </View>
          <View style={styles.headerBadge}><Icon name="notifications" size={18} color="#111" /></View>
        </View>

        <Image
          source={require("../../../assets/images/Graph.png")}
          style={[styles.chartPlaceholder, { width: "100%" }]}
          resizeMode="cover"
        />

        <View style={styles.inlineCardsRow}>
          <View style={styles.statCard}>
            <View style={styles.dotPink} />
            <AText style={styles.statValue}>$2,000,000</AText>
            <AText style={styles.statLabel}>Total Expenses</AText>
          </View>
          <View style={styles.statCard}>
            <View style={styles.dotGreen} />
            <AText style={styles.statValue}>$8,200,000</AText>
            <AText style={styles.statLabel}>Total Assets</AText>
          </View>
        </View>

        <View style={styles.walletCard}>
          <AText style={styles.walletTitle}>IBKR (ETFs)</AText>
          <View style={styles.walletRow}>
            <AText style={styles.walletValue}>$918483.95</AText>
            <AText style={styles.walletPercentPositive}>+ 32%</AText>
          </View>
          <View style={styles.progressBg}><View style={[styles.progressFill, { width: "32%" }]} /></View>
        </View>

        <View style={styles.walletCard}>
          <AText style={styles.walletTitle}>Wecow (Gold, Commodities)</AText>
          <View style={styles.walletRow}>
            <AText style={styles.walletValue}>$120131.62</AText>
            <AText style={styles.walletPercentNegative}>- 20%</AText>
          </View>
          <View style={styles.progressBg}><View style={[styles.progressFillPink, { width: "20%" }]} /></View>
        </View>

        <View style={styles.walletCard}>
          <AText style={styles.walletTitle}>CPF (OA, SA)</AText>
          <View style={styles.walletRow}>
            <AText style={styles.walletValue}>$1124285.58</AText>
            <AText style={styles.walletPercentPositive}>+ 7.91%</AText>
          </View>
          <View style={styles.progressBg}><View style={[styles.progressFill, { width: "79.1%" }]} /></View>
        </View>

        <View style={styles.walletCard}>
          <AText style={styles.walletTitle}>Personal Accident Insurance (RHI BUPA)</AText>
          <View style={styles.walletRow}>
            <AText style={styles.walletValue}>$5000000.00</AText>
          </View>
          <View style={styles.walletRow}>
          <AText style={styles.subtitle2}>Fully covered in the event of death or TPD.</AText>
          </View>
          <View style={styles.progressBg}><View style={[styles.progressFill, { width: "100%" }]} /></View>
        </View>
      </ScrollView>

      
      <Navbar />
    </SafeAreaView>
  );
}


