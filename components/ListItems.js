import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

const ListItems = ({ ListWidth, item, index, Circle }) => {
  const rStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 2) * ListWidth,
      (index - 1) * ListWidth,
      index * ListWidth,
      (index + 1) * ListWidth,
      (index + 2) * ListWidth,
    ];

    const outputRange = [0, -ListWidth / 3, -ListWidth / 2, -ListWidth / 3, 0];
    const translateY = interpolate(
      Circle.value,
      inputRange,
      outputRange,
      Extrapolate.CLAMP
    );

    const opacityOutputRange = [0.7, 0.9, 1, 0.9, 0.7];

    const scaleOutputRange = [0.7, 0.8, 1, 0.8, 0.7];

    const opacity = interpolate(
      Circle.value,
      inputRange,
      opacityOutputRange,
      Extrapolate.CLAMP
    );

    const scale = interpolate(
      Circle.value,
      inputRange,
      scaleOutputRange,
      Extrapolate.CLAMP
    );

    return {
      opacity,
      transform: [{ translateY }, { scale }],
    };
  });

  return (
    <Animated.View
      style={[
        {
          width: ListWidth,
          aspectRatio: 1,
          elevation: 5,
          shadowOpacity: 0.2,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowRadius: 20,
        },
        rStyle,
      ]}
    >
      <View
        style={{
          margin: 3,
          height: ListWidth,
          width: ListWidth,
          backgroundColor: "black",
          borderRadius: 200,
          borderWidth: 2,
          borderColor: "white",
        }}
      />
    </Animated.View>
  );
};

export default ListItems;

const styles = StyleSheet.create({});
