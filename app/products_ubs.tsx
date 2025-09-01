import { AText } from "@/src/components/AText";
import { BackButton } from "@/src/components/BackButton";
import React from "react";
import { Image, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function UBSProduct() {
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
        <AText style={{ fontSize: 18, fontWeight: "600", color: "#1A1A1A" }}>UBS Wealth Management</AText>
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
          <Image source={require("@/assets/images/bank_logo/ubs_logo.png")} style={{ width: 240, height: 72 }} resizeMode="contain" />
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
          <AText style={{ fontSize: 24, fontWeight: "bold", marginBottom: 8, color: "#1A1A1A" }}>UBS Wealth Management</AText>
          <AText style={{ fontSize: 16, color: "#6C757D", marginBottom: 20 }}>Comprehensive Financial Solutions</AText>
          
          <View style={{ marginBottom: 20 }}>
            <AText style={{ fontSize: 18, fontWeight: "600", marginBottom: 12, color: "#1A1A1A" }}>Services Overview</AText>
            <AText style={{ fontSize: 14, lineHeight: 22, marginBottom: 12, color: "#495057" }}>
              UBS offers a comprehensive suite of wealth management services designed for high-net-worth individuals and families. 
              Our global network provides access to exclusive investment opportunities and personalized financial planning.
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
          <AText style={{ fontSize: 18, fontWeight: "600", marginBottom: 12, color: "#1A1A1A" }}>Investment Solutions</AText>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>• Global equity and fixed income portfolios</AText>
          </View>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>• Alternative investments and hedge funds</AText>
          </View>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>• Private equity and venture capital</AText>
          </View>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>• Real estate and infrastructure</AText>
          </View>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>• Sustainable and impact investing</AText>
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
          <AText style={{ fontSize: 18, fontWeight: "600", marginBottom: 12, color: "#1A1A1A" }}>Wealth Planning Services</AText>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>• Estate and succession planning</AText>
          </View>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>• Tax optimization strategies</AText>
          </View>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>• Philanthropy and charitable giving</AText>
          </View>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>• Family governance and education</AText>
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
          <AText style={{ fontSize: 18, fontWeight: "600", marginBottom: 12, color: "#1A1A1A" }}>Client Benefits</AText>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>• Dedicated relationship managers</AText>
          </View>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>• Access to exclusive investment opportunities</AText>
          </View>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>• Global research and market insights</AText>
          </View>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>• Digital wealth management platform</AText>
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
          <AText style={{ fontSize: 18, fontWeight: "600", marginBottom: 12, color: "#1A1A1A" }}>Minimum Requirements</AText>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>Private Banking: <AText style={{ fontWeight: "600", color: "#1A1A1A" }}>$2 million</AText> investable assets</AText>
          </View>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>Wealth Management: <AText style={{ fontWeight: "600", color: "#1A1A1A" }}>$5 million</AText> investable assets</AText>
          </View>
          <View style={{ marginBottom: 8 }}>
            <AText style={{ fontSize: 14, lineHeight: 22, color: "#495057" }}>Family Office: <AText style={{ fontWeight: "600", color: "#1A1A1A" }}>$25 million</AText> investable assets</AText>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}