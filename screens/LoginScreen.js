// @flow
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { WebBrowser } from 'expo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MonoText } from '../components/StyledText';
import { makeActionRequestCollection } from '../src/action/actions';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';

export class LoginScreen extends React.Component<{
  actions: any
}> {
  static navigationOptions = {};

  state = {
    username: null,
    password: null
  };

  onLogin = () => {
    console.log(this.state);
    this.actions.SIGNIN_REQUEST({
      username: this.state.username,
      password: this.state.password
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ width: '100%' }}>
          <FormLabel>Username</FormLabel>
          <FormInput
            autoCapitalize="none"
            onChangeText={value => {
              this.setState({ username: value });
            }}
          />

          <FormLabel>Password</FormLabel>
          <FormInput
            secureTextEntry={true}
            autoCapitalize="none"
            textContentType="password"
            onChangeText={value => {
              this.setState({ password: value });
            }}
          />
        </View>

        <Button
          icon={{ name: 'login', type: 'material-community' }}
          title="Login"
          color="#260246"
          onPress={this.onLogin}
        />
      </View>
    );
  }
}

export default connect(
  state => {
    return {};
  },
  dispatch => {
    return {
      actions: bindActionCreators(makeActionRequestCollection(), dispatch)
    };
  }
)(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 20,
    paddingTop: 100
  }
});
