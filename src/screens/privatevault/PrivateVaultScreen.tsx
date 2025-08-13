import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import { AText } from "../../components/AText";
import { styles } from "./styles";

export function PrivateVaultScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <View style={styles.headerButton}><Icon name="arrow-back" size={18} color="#111" /></View>
            <View>
              <AText style={styles.title}>PrivateVault™</AText>
              <AText style={styles.subtitle}>Secure 360° Wealth View</AText>
            </View>
          </View>
          <View style={styles.headerBadge}><Icon name="notifications" size={18} color="#111" /></View>
        </View>

        <View style={styles.chartPlaceholder} />

        <View style={styles.inlineCardsRow}>
          <View style={styles.statCard}>
            <View style={styles.dotPink} />
            <AText style={styles.statValue}>$459.23</AText>
            <AText style={styles.statLabel}>Total Spent</AText>
          </View>
          <View style={styles.statCard}>
            <View style={styles.dotGreen} />
            <AText style={styles.statValue}>$2049.95</AText>
            <AText style={styles.statLabel}>Total Received</AText>
          </View>
        </View>

        <View style={styles.walletCard}>
          <AText style={styles.walletTitle}>Main Wallet</AText>
          <View style={styles.walletRow}>
            <AText style={styles.walletValue}>$2049.95</AText>
            <AText style={styles.walletPercentPositive}>+ 32%</AText>
          </View>
          <View style={styles.progressBg}><View style={[styles.progressFill, { width: "68%" }]} /></View>
        </View>

        <View style={styles.walletCard}>
          <AText style={styles.walletTitle}>Savings Wallet</AText>
          <View style={styles.walletRow}>
            <AText style={styles.walletValue}>$32.42</AText>
            <AText style={styles.walletPercentNegative}>- 0.4%</AText>
          </View>
          <View style={styles.progressBg}><View style={[styles.progressFillPink, { width: "24%" }]} /></View>
        </View>

        <View style={styles.walletCard}>
          <AText style={styles.walletTitle}>Summer Wallet</AText>
          <View style={styles.walletRow}>
            <AText style={styles.walletValue}>$332.42</AText>
            <AText style={styles.walletPercentPositive}>+ 2.6%</AText>
          </View>
          <View style={styles.progressBg}><View style={[styles.progressFill, { width: "46%" }]} /></View>
        </View>
      </ScrollView>

      <View style={styles.fab}><Icon name="smart_toy" size={26} color="#000" /></View>
    </SafeAreaView>
  );
}


