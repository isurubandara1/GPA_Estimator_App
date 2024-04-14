import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topicContainer}>
        <Text style={styles.topic}>GPA ESTIMATOR</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  topicContainer: {
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 80,
  },
  topic: {
    fontSize: 26,
    fontWeight: 'bold',
  },

});

export default App;
