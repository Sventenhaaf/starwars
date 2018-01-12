import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux'
import store from '../store'
import Navigator from './Navigator'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Navigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

export default App
