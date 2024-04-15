import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
} from 'react-native';

const App = () => {
  const [courseCounts, setCourseCounts] = useState({
    year1: 0,
    year2: 0,
    year3: 0,
    year4: 0,
  });

  const [textFields, setTextFields] = useState({
    year1: [],
    year2: [],
    year3: [],
    year4: [],
  });

  const handleOkPress = (year: string) => {
    const fields: React.JSX.Element[] = [];
    for (let i = 0; i < courseCounts[year]; i++) {
      fields.push(
        <TextInput
          key={i}
          style={styles.inputText}
          placeholder={`Course ${i + 1}`}
          placeholderTextColor="white"
        />,
      );
    }
    setTextFields(prevTextFields => ({
      ...prevTextFields,
      [year]: fields,
    }));
  };

  const handleCountChange = (year: string, value: string) => {
    setCourseCounts(prevCounts => ({
      ...prevCounts,
      [year]: parseInt(value) || 0,
    }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.topicContainer}>
        <Text style={styles.topic}>GPA ESTIMATOR</Text>
      </View>
      <View style={styles.firstSentContainer}>
        <Text style={styles.firstSentence}>
          You can enter your results and see GPA according to your degree
          program
        </Text>
      </View>
      <ScrollView>
        {[1, 2, 3, 4].map(year => (
          <View key={year}>
            <View style={styles.yearContainer}>
              <Text style={styles.yearText}>For year {year}</Text>
            </View>
            <View style={styles.userValueContainer}>
              <TextInput
                style={styles.firstTextInput}
                placeholder="Enter number of courses"
                placeholderTextColor="white"
                keyboardType="numeric"
                onChangeText={text => handleCountChange(`year${year}`, text)}
              />
              <View style={{width: 70}}>
                <Button
                  title="OK"
                  onPress={() => handleOkPress(`year${year}`)}
                />
              </View>
            </View>
            <View style={styles.userValueContainer}>
              <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {textFields[`year${year}`]}
              </ScrollView>
            </View>
          </View>
        ))}
      </ScrollView>
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
    fontSize: 25,
    fontStyle: 'italic',
    color: 'yellow',
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
  scrollViewContent: {
    flexGrow: 1,
  },
  inputText: {
    borderWidth: 1,
    width: '100%',
    padding: 10,
    marginBottom: 10,
  },
});

export default App;
