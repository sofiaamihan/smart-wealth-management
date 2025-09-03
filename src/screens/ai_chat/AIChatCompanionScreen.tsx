import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  View
} from "react-native";
import { FlatList, TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { AText } from "../../components/AText";
import { BackButton } from "../../components/BackButton";
import { styles } from "./styles";


import OpenAI from "openai";


type Message = {
  type: "user" | "bot";
  text: string;
};

// This should actually be stored in environment variables
const client = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

export function AIChatScreen() {
  const [data, setData] = useState<Message[]>([]);
  const [textInput, setTextInput] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);

  const quickPrompts = [
    "Should I rebalance my portfolio?",
    "What are some investment opportunities?",
    "What are some life milestones I must take note of?",
  ];


 const handleSend = async (customPrompt?: string) => {
    const promptToSend = customPrompt || textInput;
    if (!promptToSend.trim()) return;

    const userMessage: Message = { type: "user", text: promptToSend };
    setData((prev) => [...prev, userMessage]);
    setTextInput("");
    setIsBotTyping(true);

    const systemPrompt = `
You are a UBS financial advisor. 

These are 7 COMPULSORY REQUIREMENTS you have to fulfill when answering.
1. Respond in a professional, conversational tone as if speaking with a client. 
2. Avoid fluttery words like defining the question, be concise when answering.
3. Respond as a human, making information concise in maximum 2 paragraphs.
4. Always end your responses with "Consider contacting your advisor to explore more."
5. Keep answers clear, concise, and client-focused. 
6. DO NOT PUT ANY ASTERISKS AT ALL, DO NOT BOLD ANYTHING.
7. If applicable, be specific like from which banks / assets of approximately how much you are referring to.

Below includes the client's assets.

=== SINGAPORE HWNI PORTFOLIO ===

TOTAL AUM (Assets Under Management): S$5,000,000 (US$3.6M)
TANGIBLE ASSETS: S$0
Note: Primary residence excluded from AUM calculation.

--- PRIMARY RESIDENCE (EXCLUDED) ---
Owner: John
Asset Type: Primary Home
Description: 4-bedroom condo in prime district (Orchard/Marina Bay)
Estimated Value: S$3,200,000

--- LIQUID INVESTMENTS (S$4,200,000) ---
Owner: John
1. UBS Managed Investment Portfolio | Discretionary mandate - Global Balanced Strategy | S$2,000,000
2. UBS MY Way Portfolio | Semi-discretionary with building blocks approach | S$800,000
3. UBS Structured Products | Principal-protected notes on Asian indices | S$500,000
4. Singapore Blue Chips | DBS, OCBC, UOB via UBS advisory | S$400,000
5. UBS Bond Solutions | Multi-currency bond mandate (SGD/USD focus) | S$500,000

--- ALTERNATIVE INVESTMENTS (S$600,000) ---
Owner: John
1. UBS Alternative Investment Solutions | Access to hedge funds and private markets | S$400,000
2. UBS Structured Credit | Credit-linked notes on Asian corporates | S$200,000

--- CASH & EQUIVALENTS (S$200,000) ---
Owner: John
1. Cash | High-yield savings + fixed deposits | S$150,000
2. Gold/Commodities | Physical gold allocation | S$50,000

--- ANNUAL INCOME (S$450,000) ---
1. Business Income | Director fees/dividends from local SME | S$200,000
2. Employment | Senior executive role | S$180,000
3. Investment Income | Dividends + interest from portfolio | S$70,000

--- LIABILITIES (S$2,000,000) ---
1. Mortgage | Primary residence (60% LTV) | S$1,600,000
2. Car Loan | Luxury car financing (depreciating asset) | S$200,000
3. Investment Loan | Securities-backed lending facility | S$200,000

--- NET WORTH SUMMARY ---
Liquid AUM: S$5,000,000
Total Assets: S$8,200,000 (including residence)
Total Liabilities: S$2,000,000
Net Worth: S$6,200,000
Note: Car treated as liability due to depreciation (COE ~S$100K, annual depreciation S$12-14K).

--- PORTFOLIO CHARACTERISTICS ---
- UBS House View integration for global market insights
- Professional portfolio management via UBS Managed Investment Portfolio
- Semi-discretionary approach through UBS MY Way for learning
- Structured products from S$50K minimum with digital platform access
- Multi-currency approach (SGD/USD focus)
- Local CIO investment specialist ensuring regulatory compliance
- Gradual sophistication pathway built into UBS advisory model
`;

    try {
      const response = await client.responses.create({
        model: "gpt-4o-mini",
        input: [
          { role: "system", content: systemPrompt },
          { role: "user", content: promptToSend },
        ],
      });

      const botReply =
        response.output_text ?? "Sorry, I could not generate a response.";
      const botMessage: Message = { type: "bot", text: botReply };
      setData((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching response:", error);
      const errorMessage: Message = {
        type: "bot",
        text: "Error fetching response.",
      };
      setData((prev) => [...prev, errorMessage]);
    } finally {
      setIsBotTyping(false);
    }
  };

return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? -15 : 0} 
    >
      <SafeAreaView style={styles.safe} edges={["top","left", "right"]}>
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <BackButton />
              <View>
                <AText style={styles.title}>Intelligent Companion</AText>
                <AText style={styles.subtitle}>AI Core</AText>
              </View>
            </View>
            <View style={styles.headerBadge}>
                <Image
                  source={require("../../../assets/images/ai-chat.png")} 
                  style={{ width: 24, height: 24, borderRadius: 4 }} 
                  resizeMode="contain"
                />
            </View>
          </View>

        <FlatList
          data={data}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={styles.flatListContainer}
          style={{ flex: 1 }}
          renderItem={({ item }) => (
            <View
              style={[
                styles.messageBubble,
                item.type === "user" ? styles.userBubble : styles.botBubble,
              ]}
            >
              <AText style={styles.messageText}>{item.text}</AText>
            </View>
          )}
          ListFooterComponent={
            isBotTyping ? (
              <View style={[styles.messageBubble, styles.botBubble]}>
                <AText style={styles.messageText}>...</AText>
              </View>
            ) : null
          }
        />        

          <View style={styles.quickPromptView}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scrollViewContainer}
            >
              {quickPrompts.map((prompt, idx) => (
                <TouchableOpacity
                  key={idx}
                  style={styles.quickPrompt}
                  onPress={() => handleSend(prompt)}
                >
                  <AText style={styles.subtitle}>{prompt}</AText>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>



        <View
          style={styles.footer}
        >
          <TextInput
            style={styles.userInput}
            value={textInput}
            onChangeText={setTextInput}
            placeholder="How may I assist you today?"
          />
          <TouchableOpacity onPress={() => handleSend()} style={styles.userBtn}>
            <AText style={styles.userBtnText}>Send</AText>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}




