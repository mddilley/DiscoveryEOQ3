import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import Axios from "axios";
import GetLocation from 'react-native-get-location';

export default class Login extends React.Component {
  state = {
    input: ""
  };

  handleInputChange = input => {
    this.setState({ input });
  };

  handleOnSubmit = () => {
    Axios({
      method: "POST",
      url: "https://api.knack.com/v1/objects/object_1/records",
      headers: {
        "X-Knack-Application-Id": "5daa188f00392700181dff63",
        "X-Knack-REST-API-KEY": "a95522f0-f1e3-11e9-bab7-2db33a93111d",
        "content-type": "application/json"
      },
      data: {
        field_1: this.state.input,
        field_2: "Pothole Repair",
        field_3: "Sandbox",
        field_4: "Open",
        field_14: "TRAVIS"
      }
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    const { input } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <FormInput
          name="issue"
          value={input}
          placeholder="Enter issue"
          autoCapitalize="none"
          onChangeText={this.handleInputChange}
          iconName="ios-document"
          iconColor="#2C384A"
        />
        <View style={styles.buttonContainer}>
          <FormButton
            buttonType="outline"
            onPress={this.handleOnSubmit}
            title="SUBMIT"
            buttonColor="#039BE5"
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  buttonContainer: {
    margin: 25
  }
});
