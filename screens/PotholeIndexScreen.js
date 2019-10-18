import React, { useEffect, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";
import axios from "axios";

export default function PotholeIndexScreen() {
  const [potholeData, setPotholeData] = useState(false);
  const [potholeHeaders, setPotholeHeaders] = useState(false);
  const [potholeRows, setPotholeRows] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  const widthArr = [
    250,
    110,
    110,
    100,
    110,
    100,
    100,
    180,
    200,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100,
    100
  ];

  useEffect(() => {
    axios

      .get(
        `https://api.knack.com/v1/objects/object_1/records?page=${pageNumber}&rows_per_page=10`,
        {
          headers: {
            "X-Knack-Application-Id": "5daa188f00392700181dff63",
            "X-Knack-REST-API-Key": "a95522f0-f1e3-11e9-bab7-2db33a93111d"
          }
        }
      )
      .then(res => {
        console.log(res);
        setPotholeData(res.data.records);
        getPotholeHeaders(res.data.records);
        getPotholeRows(res.data.records);
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
    <ScrollView horizontal={true}>
      {potholeData && potholeHeaders && potholeRows && (
        <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
          <Row
            data={potholeHeaders}
            style={styles.head}
            textStyle={styles.text}
            widthArr={widthArr}
          />
          <Rows
            data={potholeRows}
            textStyle={styles.text}
            style={styles.row}
            widthArr={widthArr}
          />
        </Table>
      )}
    </ScrollView>
  );
}

PotholeIndexScreen.navigationOptions = {
  title: "Potholes"
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  row: { height: 40, backgroundColor: "#fff" },
  text: { margin: 6 }
});
