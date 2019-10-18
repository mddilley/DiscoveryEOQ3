import React from 'react'
import { StyleSheet, SafeAreaView, View } from 'react-native'
import { Button } from 'react-native-elements'
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'

export default class Login extends React.Component {
  state = {
    input: '',
    submitted: '',
  }

  handleInputChange = input => {
    this.setState({ input })
  };

  handleOnSubmit = () => {
    console.log(this.state.input);
    this.setState({
        submitted: this.state.input
    })
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
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  buttonContainer: {
    margin: 25
  }
})