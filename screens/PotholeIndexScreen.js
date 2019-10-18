import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import axios from "axios";

export default function PotholeIndexScreen() {
  const [potholeData, setPotholeData] = useState(false);
  const [potholeHeaders, setPotholeHeaders] = useState(false);
  const [potholeRows, setPotholeRows] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://data.austintexas.gov/resource/xwdj-i9he.json?sr_status_desc=Open&sr_type_desc=Shared Micromobility"
      )
      .then(res => {
        setPotholeData(res.data);
        getPotholeHeaders(res.data);
        getPotholeRows(res.data);
      });
  }, []);

  const getPotholeHeaders = data => setPotholeHeaders(Object.keys(data[0]));

  const getPotholeRows = data =>
    setPotholeRows(
      data.map(record => {
        const values = Object.values(record);
        return values.map(
          value =>
            (value = typeof value === "string" ? value : JSON.stringify(value))
        );
      })
    );

  return (
    <ScrollView style={styles.container}>
      {potholeData && potholeHeaders && potholeRows && (
        <View style={styles.container}>
          <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
            <Row
              data={potholeHeaders}
              style={styles.head}
              textStyle={styles.text}
            />
            <Rows
              data={potholeRows}
              textStyle={styles.text}
              style={styles.row}
            />
          </Table>
        </View>
      )}
    </ScrollView>
  );
}

PotholeIndexScreen.navigationOptions = {
  title: "Potholes"
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#f1f8ff", width: 200 },
  text: { margin: 6 },
  row: { height: 40, width: 200 }
});
