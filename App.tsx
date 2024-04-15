import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topicContainer}>
        <Text style={styles.topic}>GPA ESTIMATOR</Text>
      </View>
      <View style={styles.firstSentContainer}>
        <Text style={styles.firstSentence}>
          You can enter your results and see GPA accourding to your degree
          programm
        </Text>
      </View>
      <View>
        <View style={styles.yearContainer}>
          <Text style={styles.yearText}>For first year(1)</Text>
        </View>
        <View style={styles.userValueContainer}>
          <TextInput
            style={styles.firstTextInput}
            placeholder="Enter number of courses"
            placeholderTextColor="white"
          />
          <View style={{width: 70}}>
            <Button title="OK" onPress={() => {}} />
          </View>
        </View>
      </View>
      <View style={styles.yearContainer}>
        <Text style={styles.yearText}>For second year(2)</Text>
      </View>
      <View style={styles.yearContainer}>
        <Text style={styles.yearText}>For third year(3)</Text>
      </View>
      <View style={styles.yearContainer}>
        <Text style={styles.yearText}>For forth year(4)</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
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
  firstSentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  firstSentence: {
    fontSize: 20,
    fontWeight: '300',
    textAlign: 'center',
  },
  yearContainer: {
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 10,
    alignItems: 'center',
  },
  yearText: {
    fontSize: 20,
    fontStyle: 'italic',
  },
  userValueContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  firstTextInput: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'white',
    width: '50%',
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
    marginRight: 30,
  },
  firstButton: {
    width: 200,
  },
});

export default App;
