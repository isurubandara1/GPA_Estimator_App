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

  const [Aplus, setAplus] = useState('');
  const [A, setA] = useState('');
  const [Amin, setAmin] = useState('');
  const [Bplus, setBplus] = useState('');
  const [B, setB] = useState('');
  const [Bmin, setBmin] = useState('');
  const [Cplus, setCplus] = useState('');
  const [C, setC] = useState('');
  const [Cmin, setCmin] = useState('');
  const [Dplus, setDplus] = useState('');
  const [D, setD] = useState('');
  const [Dmin, setDmin] = useState('');
  const [E, setE] = useState('');

  const handleOkPress = (year) => {
    const fields = [];
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

  const handleCountChange = (year, value) => {
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
      <View>
        <Text style={styles.numberingText}>1.  Add Grade Points Accourding to Grades</Text>
        <View style={styles.gpaListcontainer}>
          <Text style={styles.gpaListText}>A+</Text>
           <TextInput
                style={styles.gpaTextInput}
                placeholderTextColor="white"
                keyboardType="numeric"
                autoFocus={true}
                onChangeText={setAplus}
              />
              <Text  style={styles.gpaListText}>A </Text>
           <TextInput
                style={styles.gpaTextInput}
                placeholderTextColor="grey"
                keyboardType="numeric"
                onChangeText={setA}
              />
        </View>
        <View style={styles.gpaListcontainer}>
          <Text style={styles.gpaListText}>A -</Text>
           <TextInput
                style={styles.gpaTextInput}
                placeholderTextColor="grey"
                keyboardType="numeric"
                onChangeText={setAmin}
              />
              <Text  style={styles.gpaListText}>B+</Text>
           <TextInput
                style={styles.gpaTextInput}
                placeholderTextColor="grey"
                keyboardType="numeric"
                onChangeText={setBplus}
              />
        </View>
        <View style={styles.gpaListcontainer}>
          <Text style={styles.gpaListText}>  B</Text>
           <TextInput
                style={styles.gpaTextInput}
                placeholderTextColor="grey"
                keyboardType="numeric"
                onChangeText={setB}
              />
              <Text  style={styles.gpaListText}> B-</Text>
           <TextInput
                style={styles.gpaTextInput}
                placeholderTextColor="grey"
                keyboardType="numeric"
                onChangeText={setBmin}
              />
        </View>
        <View style={styles.gpaListcontainer}>
          <Text style={styles.gpaListText}>C+</Text>
           <TextInput
                style={styles.gpaTextInput}
                placeholderTextColor="grey"
                keyboardType="numeric"
                onChangeText={setCplus}
              />
              <Text  style={styles.gpaListText}>C  </Text>
           <TextInput
                style={styles.gpaTextInput}
                placeholderTextColor="grey"
                keyboardType="numeric"
                onChangeText={setC}
              />
        </View>
        <View style={styles.gpaListcontainer}>
          <Text style={styles.gpaListText}>C-</Text>
           <TextInput
                style={styles.gpaTextInput}
                placeholderTextColor="grey"
                keyboardType="numeric"
                onChangeText={setCmin}
              />
              <Text  style={styles.gpaListText}>D+</Text>
           <TextInput
                style={styles.gpaTextInput}
                placeholderTextColor="grey"
                keyboardType="numeric"
                onChangeText={setDplus}
              />
        </View>
        <View style={styles.gpaListcontainer}>
          <Text style={styles.gpaListText}>D</Text>
           <TextInput
                style={styles.gpaTextInput}
                placeholderTextColor="grey"
                keyboardType="numeric"
                onChangeText={setD}
              />
              <Text  style={styles.gpaListText}>D-</Text>
           <TextInput
                style={styles.gpaTextInput}
                placeholderTextColor="grey"
                keyboardType="numeric"
                onChangeText={setDmin}
              />
        </View>
        <View style={styles.gpaListcontainer}>
          <Text style={styles.gpaListText}>E</Text>
           <TextInput
                style={styles.gpaTextInput}
                placeholderTextColor="grey"
                keyboardType="numeric"
                onChangeText={setE}
              />
        </View>
        
      </View>
      <Text style={styles.numberingText}>2.  Enter your number of courses and click ok button accourding to praticular year. </Text>
      <Text style={styles.numberingText}>After, mention the course result grade and credit value. Ex A- (2)  </Text>
        {[1, 2, 3, 4].map(year => (
          <View key={year}>
            <View style={styles.yearContainer}>
              <Text style={styles.yearText}>For year {year}</Text>
            </View>
            <View style={styles.userValueContainer}>
              <TextInput
                style={styles.firstTextInput}
                placeholder="Enter number of courses"
                placeholderTextColor="grey"
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
        <Button title='view GPA'/>
        <Text>your gpa is</Text>
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
  numberingText:{
    fontSize:20,
    textAlign:'center'
  },
  gpaListcontainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:15,
    backgroundColor:'#f76aba',
    height:65
  },
  gpaListText:{
    fontSize:25,
    marginRight:10,
    marginLeft:20,
  },
  gpaTextInput:{
    borderWidth: 3,
    borderRadius: 20,
    borderColor: 'white',
    width: '20%',
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
    marginRight: 20,

  },
  yearContainer: {
    marginTop: 15,
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
    marginBottom:5,
    marginTop:5,
  },
  firstTextInput: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'white',
    width: '30%',
    fontSize: 15,
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
