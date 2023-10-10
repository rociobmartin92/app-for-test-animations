import { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateX, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: false,
        }),
        Animated.timing(translateX, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: false,
        }),
      ]),
      { iterations: -1 }
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.gradientAnimated,
          {
            transform: [
              {
                translateX: translateX.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 800],
                }),
              },
            ],
          },
        ]}
      />

      <LinearGradient
        colors={["transparent", "#00ccff"]}
        style={styles.gradient}
      >
        <Text style={styles.text}>Mi contenido</Text>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  gradient: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  gradientAnimated: {
    width: "100%",
    height: "100%",
    backgroundColor: "#8b0000",
  },
  text: {
    fontSize: 24,
    color: "black",
    textAlign: "center",
  },
});
