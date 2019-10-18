import React, { useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ExpoLinksView } from "@expo/samples";
import axios from "axios";

export default function PotholeIndexScreen() {
  useEffect(() => {
    axios
      .get("https://data.austintexas.gov/resource/xwdj-i9he.json")
      .then(res => {
        console.log(res);
      });
  }, []);

  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
      {/* <ExpoLinksView /> */}
    </ScrollView>
  );
}

PotholeIndexScreen.navigationOptions = {
  title: "Potholes"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
