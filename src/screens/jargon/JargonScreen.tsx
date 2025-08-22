import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import { AText } from "../../components/AText";
import { BackButton } from "../../components/BackButton";
import { Navbar } from "../../components/navbar";
import { styles } from "./styles";

export function JargonScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={["top","left", "right"]}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <BackButton style={styles.headerButton} />
            <View>
              <AText style={styles.title}>Jargon Translator</AText>
              <AText style={styles.subtitle}>Understand Financial Terminology</AText>
            </View>
          </View>
          <View style={styles.headerBadge}><Icon name="notifications" size={18} color="#111" /></View>
        </View>

        {["Liquidity", "Diversification", "Bull Market"].map((term, idx) => (
          <View key={term} style={styles.card}>
            <AText style={styles.term}>{term}</AText>
            <AText style={styles.definition}>
              n. (wɜːd): {term === "Liquidity"
                ? "Liquidity refers to how easily an asset can be converted into cash without affecting its market price."
                : term === "Diversification"
                ? "Diversification is the strategy of spreading investments across various assets to reduce risk."
                : "A bull market is a period when prices of securities are rising or are expected to rise."}
            </AText>
            <View style={styles.cardFooter}>
              <AText style={styles.moreLink}>See more meanings</AText>
              <Icon name="arrow-right-alt" size={18} color="#E15454" />
            </View>
          </View>
        ))}
      </ScrollView>
      
      <Navbar />
    </SafeAreaView>
  );
}


