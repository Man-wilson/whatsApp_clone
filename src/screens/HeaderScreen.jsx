import { View, Text, Pressable, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, Entypo, EvilIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Camera, CameraType } from "expo-camera";

export const HeaderScreen = () => {
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [hasPermission, requestPermission] = Camera.useCameraPermissions();
  const [showCamera, setShowCamera] = useState(false);

  useEffect(() => {
    requestPermission();
  }, []);

  function toggleCameraType() {
    setType((current) =>
      current === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  }

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="seagreen" style="light" />
      <View
        style={{
          backgroundColor: "seagreen",
          paddingTop: 20,
          paddingBottom: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 23,
            paddingLeft: 15,
            fontWeight: "600",
            color: "white",
          }}
        >
          WhatsApp
        </Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{ paddingRight: 20 }}
            onPress={() => setShowCamera(true)}
          >
            <Feather name="camera" size={24} color="white" />
          </TouchableOpacity>
          <View style={{ paddingRight: 20 }}>
            <EvilIcons name="search" size={27} color="white" />
          </View>
          <View style={{ paddingRight: 10 }}>
            <Entypo name="dots-three-vertical" size={20} color="white" />
          </View>
        </View>
      </View>
      {showCamera && hasPermission && (
        <Camera
          style={StyleSheet.absoluteFillObject}
          type={type}
          captureAudio={false}
          autoFocus={Camera.Constants.AutoFocus.on}
          flashMode={Camera.Constants.FlashMode.off}
        >
          <TouchableOpacity
            style={{ paddingRight: 20 }}
            onPress={() => setShowCamera(false)}
          >
            <Feather name="x" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ paddingRight: 20 }}
            onPress={toggleCameraType}
          >
            <Feather name="camera" size={24} color="white" />
          </TouchableOpacity>
        </Camera>
      )}
    </SafeAreaView>
  );
};
