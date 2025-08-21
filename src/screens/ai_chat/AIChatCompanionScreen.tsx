import { useState } from "react";
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
});

export function AIChatScreen() {
  const [data, setData] = useState<Message[]>([]);
  const [textInput, setTextInput] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);

  const quickPrompts = [
    "How are my assets?",
    "What are my top 3 spending categories?",
    "How can I save more this month?",
  ];


 const handleSend = async (customPrompt?: string) => {
    const promptToSend = customPrompt || textInput;
    if (!promptToSend.trim()) return;

    const userMessage: Message = { type: "user", text: promptToSend };
    setData((prev) => [...prev, userMessage]);
    setTextInput("");
    setIsBotTyping(true);

    const systemPrompt =
      "You are a UBS financial advisor. Respond in a professional, conversational tone as if speaking with a client. Keep answers clear, concise, and client-focused. DO NOT PUT ANY ASTERISKS AT ALL.";

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
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0} 
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




