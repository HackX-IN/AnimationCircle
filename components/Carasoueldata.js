import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSharedValue } from "react-native-reanimated";
import ListItems from "./ListItems";

const { width } = Dimensions.get("window");

const ListWidth = width / 4;

const Carasoueldata = ({ data }) => {
  const Circle = useSharedValue(0);
  return (
    <FlatList
      data={data}
      scrollEventThrottle={16}
      horizontal
      style={{ position: "absolute", bottom: 0, height: 300 }}
      keyExtractor={(_, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      onScroll={(event) => {
        Circle.value = event.nativeEvent.contentOffset.x;
      }}
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 1.5 * ListWidth,
        // paddingRight: 1.5 * ListItemWidth,
        // paddingLeft: 1.5 * ListItemWidth,
      }}
      pagingEnabled
      snapToInterval={ListWidth}
      renderItem={({ item, index }) => (
        <ListItems
          ListWidth={ListWidth}
          item={item}
          key={index}
          index={index}
          Circle={Circle}
        />
      )}
    />
  );
};

export default Carasoueldata;

const styles = StyleSheet.create({});
