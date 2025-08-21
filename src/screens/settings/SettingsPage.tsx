import { useRouter } from "expo-router";
import { Pressable, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import { AText } from "../../components/AText";
import { Navbar } from "../../components/navbar";
import { styles } from "./styles";

export function SettingsPage() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safe} edges={["top","left", "right"]}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.titleWrap}>
            <AText style={styles.title}>Settings</AText>
            <AText style={styles.subtitle}>Sunday, 20 November</AText>
          </View>
          <View style={styles.headerBadge}>
            <Icon name="notifications" size={20} color="#000" />
          </View>
        </View>

        <View style={styles.profileCard}>
          <View style={styles.profileRow}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={styles.avatar}>
                <Icon name="person" size={20} color="#111" />
              </View>
              <View style={styles.profileTextWrap}>
                <AText style={styles.profileName}>Alex</AText>
                <AText style={styles.profileHandle}>@user12345</AText>
              </View>
            </View>
            <View style={styles.editIconWrap}>
              <Icon name="edit" size={16} color="#FFFFFF" />
            </View>
          </View>
        </View>

        <View style={styles.listWrap}>
          <View style={styles.item}>
            <View style={styles.itemLeft}>
              <View style={styles.itemIcon}>
                <Icon name="notifications" size={18} color="#111" />
              </View>
              <View style={{ flex: 1 }}>
                <AText style={styles.itemTitle}>Alerts</AText>
              </View>
            </View>
            <Icon name="chevron-right" size={20} color="#8A8A8A" />
          </View>

          <View style={styles.item}>
            <View style={styles.itemLeft}>
              <View style={styles.itemIcon}>
                <Icon name="security" size={18} color="#111" />
              </View>
              <View style={{ flex: 1 }}>
                <AText style={styles.itemTitle}>Privacy & Security</AText>
              </View>
            </View>
            <Icon name="chevron-right" size={20} color="#8A8A8A" />
          </View>

          <View style={styles.item}>
            <View style={styles.itemLeft}>
              <View style={styles.itemIcon}>
                <Icon name="language" size={18} color="#111" />
              </View>
              <View style={{ flex: 1 }}>
                <AText style={styles.itemTitle}>Language</AText>
              </View>
            </View>
            <Icon name="chevron-right" size={20} color="#8A8A8A" />
          </View>

          <View style={styles.item}>
            <View style={styles.itemLeft}>
              <View style={styles.itemIcon}>
                <Icon name="history" size={18} color="#111" />
              </View>
              <View style={{ flex: 1 }}>
                <AText style={styles.itemTitle}>Recent History</AText>
              </View>
            </View>
            <Icon name="chevron-right" size={20} color="#8A8A8A" />
          </View>
        </View>

        <View style={styles.logoutItem}>
          <View style={styles.logoutRow}>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center" }}
              onPress={() => router.replace("/")}
            >
              <View style={styles.logoutIcon}>
                <Icon name="logout" size={18} color="#111" />
              </View>
              <AText style={styles.logoutTitle}>Log Out</AText>
            </Pressable>
          </View>
        </View>
      </ScrollView>
      <View style={styles.fab}>
        <Icon name="smart_toy" size={26} color="#000" />
      </View>
      <Navbar />
    </SafeAreaView>
  );
}   