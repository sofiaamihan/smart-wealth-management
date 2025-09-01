import { AText } from "@/src/components/AText";
import { BackButton } from "@/src/components/BackButton";
import React from "react";
import { Image, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function JuliusBaerProduct() {
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
        <AText style={{ fontSize: 18, fontWeight: "600", color: "#1A1A1A" }}>Julius Baer</AText>
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
          <Image source={require("@/assets/images/bank_logo/jb_logo.png")} style={{ width: 240, height: 72 }} resizeMode="contain" />
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
          <AText style={{ fontSize: 24, fontWeight: "bold", marginBottom: 8, color: "#1A1A1A" }}>Julius Baer Private Markets</AText>
          <AText style={{ fontSize: 16, color: "#6C757D", marginBottom: 20 }}>Private Markets with Auction Liquidity Option</AText>
          
          <View style={{ marginBottom: 20 }}>
            <AText style={{ fontSize: 18, fontWeight: "600", marginBottom: 12, color: "#1A1A1A" }}>Product Overview</AText>
            <AText style={{ fontSize: 14, lineHeight: 22, marginBottom: 12, color: "#495057" }}>
              Julius Baer's Private Markets platform offers access to exclusive private equity, real estate, and infrastructure investments 
              with the unique benefit of auction-based liquidity options, providing flexibility in an otherwise illiquid asset class.
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
          <AText style={{ fontSize: 18, fontWeight: "600", marginBottom: 12, color: "#1A1A1A" }}>Investment Categories</AText>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>• Private Equity (Buyout, Growth, Venture Capital)</AText>
          </View>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>• Real Estate (Core, Value-Add, Opportunistic)</AText>
          </View>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>• Infrastructure (Transport, Energy, Digital)</AText>
          </View>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>• Private Credit (Direct Lending, Mezzanine)</AText>
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
          <AText style={{ fontSize: 18, fontWeight: "600", marginBottom: 12, color: "#1A1A1A" }}>Auction Liquidity Feature</AText>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>• Quarterly auction windows for liquidity</AText>
          </View>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>• Transparent pricing through competitive bidding</AText>
          </View>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>• No minimum holding period requirements</AText>
          </View>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>• Access to secondary market opportunities</AText>
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
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>Minimum Investment: <AText style={{ fontWeight: "600", color: "#1A1A1A" }}>$500,000</AText></AText>
          </View>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>Typical Investment Horizon: <AText style={{ fontWeight: "600", color: "#1A1A1A" }}>5-8 years</AText></AText>
          </View>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>Management Fee: <AText style={{ fontWeight: "600", color: "#1A1A1A" }}>1.0% - 1.5%</AText> annually</AText>
          </View>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>Performance Fee: <AText style={{ fontWeight: "600", color: "#1A1A1A" }}>15% - 20%</AText> of profits</AText>
          </View>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>Auction Fee: <AText style={{ fontWeight: "600", color: "#1A1A1A" }}>2%</AText> of transaction value</AText>
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
          <AText style={{ fontSize: 18, fontWeight: "600", marginBottom: 12, color: "#1A1A1A" }}>Key Benefits</AText>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>• Access to exclusive private market opportunities</AText>
          </View>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>• Enhanced liquidity through auction mechanism</AText>
          </View>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>• Diversification across multiple private market strategies</AText>
          </View>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>• Professional due diligence and selection</AText>
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
            Private market investments carry significant risks including illiquidity, lack of transparency, and potential loss of principal. 
            The auction liquidity feature may not guarantee exit at desired prices. Suitable for sophisticated investors only.
          </AText>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


