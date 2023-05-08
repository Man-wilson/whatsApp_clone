import React, { useEffect, useState } from "react";
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, Zocial, MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar } from "react-native-elements";

export const ChatScreen = ({ route }) => {
  const { userId, name, avatar } = route.params;
  const navigation = useNavigation();
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState({
    _id: userId,
    name: name,
    avatar: avatar,
  });

  const getChatHistory = async () => {
    try {
      const chatHistory = await AsyncStorage.getItem(`chatHistory_${user._id}`);
      if (chatHistory !== null) {
        setMessages(JSON.parse(chatHistory));
      }
    } catch (e) {
      console.log("Failed to load chat history", e);
    }
  };

  const saveChatHistory = async () => {
    try {
      await AsyncStorage.setItem(
        `chatHistory_${user._id}`,
        JSON.stringify(messages)
      );
    } catch (e) {
      console.log("Failed to save chat history", e);
    }
  };

  const onSend = (newMessages = []) => {
    setMessages((previousMessage) =>
      GiftedChat.append(previousMessage, newMessages)
    );
  };

  const renderAvatar = (props) => {
    return <Avatar source={{ uri: props.currentMessage.user.avatar }} />;
  };

  useEffect(() => {
    getChatHistory();
  }, []);

  useEffect(() => {
    saveChatHistory();
  }, [messages]);

  return (
    // <SafeAreaView>
    <View style={{ flex: 1, marginTop: 30 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "seagreen",
          height: 60,
        }}
      >
        <Ionicons
          name="arrow-back-outline"
          size={24}
          onPress={() => navigation.goBack()}
          color="white"
        />
        <Avatar
          containerStyle={{ marginLeft: 10 }}
          size="small"
          rounded
          source={{
            uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
          }}
        />

        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginLeft: 16,
            color: "white",
          }}
        >
          {name}
        </Text>
        <View>
          <TouchableOpacity style={{flexDirection:'row', marginLeft: 100, width: 130, justifyContent:'space-between'}}>
          <Ionicons name="videocam" size={24} color="white" />
        <Zocial name="call" size={24} color="white"/>
        <MaterialCommunityIcons name="dots-vertical" size={24} color="white"/>
          </TouchableOpacity>
        </View>
      </View>
      <GiftedChat
        messages={messages}
        onSend={(newMessages) => onSend(newMessages)}
        user={{
          user: user,
          avatar: avatar,
          name: name,
        }}
        renderBubble={(props) => <Bubble {...props} />}
        renderAvatar={renderAvatar}
      />
    </View>
    // </SafeAreaView>
  );
};
