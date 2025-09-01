import { AText } from "@/src/components/AText";
import { BackButton } from "@/src/components/BackButton";
import React from "react";
import { Image, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function JPMAlternativesProduct() {
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
        <AText style={{ fontSize: 18, fontWeight: "600", color: "#1A1A1A" }}>J.P. Morgan</AText>
        <View style={{ width: 32 }} />
      </View>
      
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }} contentContainerStyle={{ padding: 16 }}>
        <View style={{ 
          alignItems: "center", 
          marginBottom: 24,
          paddingVertical: 20,
          backgroundColor: "#6C757D",
          borderRadius: 12,
          shadowColor: "#000",
          shadowOpacity: 0.05,
          shadowRadius: 8,
          shadowOffset: { width: 0, height: 2 },
          elevation: 2
        }}>
          <Image source={require("@/assets/images/bank_logo/jp_logo.png")} style={{ width: 240, height: 72 }} resizeMode="contain" />
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
          <AText style={{ fontSize: 24, fontWeight: "bold", marginBottom: 8, color: "#1A1A1A" }}>J.P. Morgan Private Bank</AText>
          <AText style={{ fontSize: 16, color: "#6C757D", marginBottom: 20 }}>Alternatives Investment Platform</AText>
          
          <View style={{ marginBottom: 20 }}>
            <AText style={{ fontSize: 18, fontWeight: "600", marginBottom: 12, color: "#1A1A1A" }}>Platform Overview</AText>
            <AText style={{ fontSize: 14, lineHeight: 22, marginBottom: 12, color: "#495057" }}>
              J.P. Morgan Private Bank's Alternatives platform provides access to a curated selection of hedge funds, 
              private equity, real estate, and other alternative investments designed to enhance portfolio diversification 
              and potentially improve risk-adjusted returns.
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
          <AText style={{ fontSize: 18, fontWeight: "600", marginBottom: 12, color: "#1A1A1A" }}>Investment Strategies</AText>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>• Hedge Funds (Long/Short, Global Macro, Event-Driven)</AText>
          </View>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>• Private Equity (Buyout, Growth, Venture Capital)</AText>
          </View>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>• Real Estate (Core, Value-Add, Opportunistic)</AText>
          </View>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>• Infrastructure and Natural Resources</AText>
          </View>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>• Private Credit and Direct Lending</AText>
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
          <AText style={{ fontSize: 18, fontWeight: "600", marginBottom: 12, color: "#1A1A1A" }}>Due Diligence Process</AText>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>• Comprehensive manager evaluation</AText>
          </View>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>• Risk assessment and monitoring</AText>
          </View>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>• Operational due diligence</AText>
          </View>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>• Ongoing performance analysis</AText>
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
          <AText style={{ fontSize: 18, fontWeight: "600", marginBottom: 12, color: "#1A1A1A" }}>Investment Requirements</AText>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>Minimum Portfolio: <AText style={{ fontWeight: "600", color: "#1A1A1A" }}>$10 million</AText></AText>
          </View>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>Alternatives Allocation: <AText style={{ fontWeight: "600", color: "#1A1A1A" }}>10% - 40%</AText> of portfolio</AText>
          </View>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>Individual Fund Minimums: <AText style={{ fontWeight: "600", color: "#1A1A1A" }}>$250,000 - $1,000,000</AText></AText>
          </View>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>Lock-up Periods: <AText style={{ fontWeight: "600", color: "#1A1A1A" }}>1-10 years</AText> depending on strategy</AText>
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
          <AText style={{ fontSize: 18, fontWeight: "600", marginBottom: 12, color: "#1A1A1A" }}>Fee Structure</AText>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>Platform Access Fee: <AText style={{ fontWeight: "600", color: "#1A1A1A" }}>0.25% - 0.50%</AText> annually</AText>
          </View>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>Manager Fees: <AText style={{ fontWeight: "600", color: "#1A1A1A" }}>1.5% - 2.0%</AText> management fee</AText>
          </View>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>Performance Fees: <AText style={{ fontWeight: "600", color: "#1A1A1A" }}>15% - 20%</AText> of profits</AText>
          </View>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>Transaction Costs: <AText style={{ fontWeight: "600", color: "#1A1A1A" }}>Varies</AText> by investment</AText>
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
          <AText style={{ fontSize: 18, fontWeight: "600", marginBottom: 12, color: "#1A1A1A" }}>Client Services</AText>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>• Dedicated alternatives specialist</AText>
          </View>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>• Regular portfolio reviews and rebalancing</AText>
          </View>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>• Access to exclusive investment opportunities</AText>
          </View>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>• Comprehensive reporting and analytics</AText>
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
          <AText style={{ fontSize: 18, fontWeight: "600", marginBottom: 12, color: "#1A1A1A" }}>Risk Considerations</AText>
          <AText style={{ fontSize: 14, lineHeight: 22, marginBottom: 12, color: "#495057" }}>
            Alternative investments involve significant risks including illiquidity, leverage, lack of transparency, 
            and potential loss of principal. Past performance does not guarantee future results. 
            Suitable for sophisticated investors with high risk tolerance.
          </AText>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


