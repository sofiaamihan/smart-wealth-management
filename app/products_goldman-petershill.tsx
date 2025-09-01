import { AText } from "@/src/components/AText";
import { BackButton } from "@/src/components/BackButton";
import React from "react";
import { Image, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function GoldmanPetershillProduct() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F8F9FA" }}>
      <View style={{ 
        backgroundColor: "#FFF", 
        paddingHorizontal: 16, 
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#E9ECEF",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        <BackButton />
        <AText style={{ fontSize: 18, fontWeight: "600", color: "#1A1A1A" }}>Goldman Sachs</AText>
        <View style={{ width: 32 }} />
      </View>
      
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }} contentContainerStyle={{ padding: 16 }}>
        <View style={{ 
          alignItems: "center", 
          marginBottom: 24,
          paddingVertical: 20,
          backgroundColor: "#FFF",
          borderRadius: 12,
          shadowColor: "#000",
          shadowOpacity: 0.05,
          shadowRadius: 8,
          shadowOffset: { width: 0, height: 2 },
          elevation: 2
        }}>
          <Image source={require("@/assets/images/bank_logo/gs_logo.png")} style={{ width: 240, height: 72 }} resizeMode="contain" />
        </View>
        
        <View style={{ 
          backgroundColor: "#FFF", 
          borderRadius: 12, 
          padding: 20, 
          marginBottom: 16,
          shadowColor: "#000",
          shadowOpacity: 0.05,
          shadowRadius: 8,
          shadowOffset: { width: 0, height: 2 },
          elevation: 2
        }}>
          <AText style={{ fontSize: 24, fontWeight: "bold", marginBottom: 8, color: "#1A1A1A" }}>Goldman Sachs – Petershill</AText>
          <AText style={{ fontSize: 16, color: "#6C757D", marginBottom: 20 }}>GP stakes via GS Alternatives</AText>
          
          <View style={{ marginBottom: 20 }}>
            <AText style={{ fontSize: 18, fontWeight: "600", marginBottom: 12, color: "#1A1A1A" }}>Product Overview</AText>
            <AText style={{ fontSize: 14, lineHeight: 22, marginBottom: 12, color: "#495057" }}>
              Petershill Partners is a leading global private equity firm that acquires minority stakes in alternative asset managers. 
              Through Goldman Sachs Alternatives, investors gain access to a diversified portfolio of high-quality alternative investment managers.
            </AText>
          </View>
        </View>
        
        <View style={{ 
          backgroundColor: "#FFF", 
          borderRadius: 12, 
          padding: 20, 
          marginBottom: 16,
          shadowColor: "#000",
          shadowOpacity: 0.05,
          shadowRadius: 8,
          shadowOffset: { width: 0, height: 2 },
          elevation: 2
        }}>
          <AText style={{ fontSize: 18, fontWeight: "600", marginBottom: 12, color: "#1A1A1A" }}>Key Features</AText>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>• Access to premier alternative asset managers</AText>
          </View>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>• Diversified exposure across multiple strategies</AText>
          </View>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>• Long-term capital appreciation potential</AText>
          </View>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>• Professional management by Goldman Sachs</AText>
          </View>
        </View>
        
        <View style={{ 
          backgroundColor: "#FFF", 
          borderRadius: 12, 
          padding: 20, 
          marginBottom: 16,
          shadowColor: "#000",
          shadowOpacity: 0.05,
          shadowRadius: 8,
          shadowOffset: { width: 0, height: 2 },
          elevation: 2
        }}>
          <AText style={{ fontSize: 18, fontWeight: "600", marginBottom: 12, color: "#1A1A1A" }}>Investment Details</AText>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>Minimum Investment: <AText style={{ fontWeight: "600", color: "#1A1A1A" }}>$250,000</AText></AText>
          </View>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>Investment Horizon: <AText style={{ fontWeight: "600", color: "#1A1A1A" }}>7-10 years</AText></AText>
          </View>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>Management Fee: <AText style={{ fontWeight: "600", color: "#1A1A1A" }}>1.5% annually</AText></AText>
          </View>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>Performance Fee: <AText style={{ fontWeight: "600", color: "#1A1A1A" }}>20% of profits</AText></AText>
          </View>
        </View>
        
        <View style={{ 
          backgroundColor: "#FFF", 
          borderRadius: 12, 
          padding: 20, 
          marginBottom: 20,
          shadowColor: "#000",
          shadowOpacity: 0.05,
          shadowRadius: 8,
          shadowOffset: { width: 0, height: 2 },
          elevation: 2
        }}>
          <AText style={{ fontSize: 18, fontWeight: "600", marginBottom: 12, color: "#1A1A1A" }}>Risk Profile</AText>
          <AText style={{ fontSize: 14, lineHeight: 22, marginBottom: 12, color: "#495057" }}>
            This investment involves significant risks including illiquidity, market volatility, and potential loss of principal. 
            Suitable for sophisticated investors with high risk tolerance and long-term investment horizons.
          </AText>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


