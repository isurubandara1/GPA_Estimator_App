import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  // State variables for grade points, course counts, text fields, and GPA button
  const [gradePoints, setGradePoints] = useState({
    'A+': '',
    A: '',
    'A-': '',
    'B+': '',
    B: '',
    'B-': '',
    'C+': '',
    C: '',
    'C-': '',
    'D+': '',
    D: '',
    'D-': '',
    E: '',
  });

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

  const [button, setButton] = useState('');

// Function to calculate GPA
  const viewGpa = () => {
    let totalGradePoints = 0;
    let totalCredits = 0;

// Loop through each year and each course to calculate total grade points and credits
    for (let year = 1; year <= 4; year++) {
      for (let i = 0; i < courseCounts[`year${year}`]; i++) {
        const grade = textFields[`year${year}`][i].grade;
        const credit = textFields[`year${year}`][i].credit;

        totalGradePoints += getGradePoints(grade) * credit;
        totalCredits += credit;
      }
    }

// Calculate GPA
    const gpa = totalGradePoints / totalCredits;
    setButton(gpa.toFixed(4));
  };

// Function to get grade points based on grade
  const getGradePoints = grade => {
    return gradePoints[grade] ? parseFloat(gradePoints[grade]) : 0;
  };

// Function to set grade points
  const setGradePoint = (grade, value) => {
    setGradePoints(prevGradePoints => ({
      ...prevGradePoints,
      [grade]: value,
    }));
  };

// Function to handle OK button press for entering course counts
  const handleOkPress = year => {
    const fields = [];
    for (let i = 0; i < courseCounts[year]; i++) {
      fields.push({
        grade: '',
        credit: 0,
      });
    }
    setTextFields(prevTextFields => ({
      ...prevTextFields,
      [year]: fields,
    }));
  };

// Function to handle change in course counts  
  const handleCountChange = (year, value) => {
    setCourseCounts(prevCounts => ({
      ...prevCounts,
      [year]: parseInt(value) || 0,
    }));
  };

// Function to handle change in course grade
  const handleGradeChange = (year, index, grade) => {
    const updatedFields = [...textFields[year]];
    updatedFields[index].grade = grade;
    setTextFields(prevTextFields => ({
      ...prevTextFields,
      [year]: updatedFields,
    }));
  };

// Function to handle change in course credit
  const handleCreditChange = (year, index, credit) => {
    const updatedFields = [...textFields[year]];
    updatedFields[index].credit = parseInt(credit) || 0;
    setTextFields(prevTextFields => ({
      ...prevTextFields,
      [year]: updatedFields,
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
          <Text style={styles.numberingText}>
            1. Add Grade Points According to Grades
          </Text>
          <View style={styles.gpaListcontainer}>
            <View style={styles.gradeRow}>
              <Text style={styles.gpaListText}>A+</Text>
              <TextInput
                style={styles.gpaTextInput}
                placeholderTextColor="white"
                keyboardType="numeric"
                onChangeText={value => setGradePoint('A+', value)}
              />
              <Text style={styles.gpaListText}>A </Text>
              <TextInput
                style={styles.gpaTextInput}
                placeholderTextColor="white"
                keyboardType="numeric"
                onChangeText={value => setGradePoint('A', value)}
              />
            </View>
            <View style={styles.gradeRow}>
              <Text style={styles.gpaListText}>A- </Text>
              <TextInput
                style={styles.gpaTextInput}
                placeholderTextColor="white"
                keyboardType="numeric"
                onChangeText={value => setGradePoint('A-', value)}
              />
              <Text style={styles.gpaListText}>B+</Text>
              <TextInput
                style={styles.gpaTextInput}
                placeholderTextColor="white"
                keyboardType="numeric"
                onChangeText={value => setGradePoint('B+', value)}
              />
            </View>
            <View style={styles.gradeRow}>
              <Text style={styles.gpaListText}>B </Text>
              <TextInput
                style={styles.gpaTextInput}
                placeholderTextColor="white"
                keyboardType="numeric"
                onChangeText={value => setGradePoint('B', value)}
              />
              <Text style={styles.gpaListText}>B-</Text>
              <TextInput
                style={styles.gpaTextInput}
                placeholderTextColor="white"
                keyboardType="numeric"
                onChangeText={value => setGradePoint('B-', value)}
              />
            </View>
            <View style={styles.gradeRow}>
              <Text style={styles.gpaListText}>C+</Text>
              <TextInput
                style={styles.gpaTextInput}
                placeholderTextColor="white"
                keyboardType="numeric"
                onChangeText={value => setGradePoint('C+', value)}
              />
              <Text style={styles.gpaListText}>C </Text>
              <TextInput
                style={styles.gpaTextInput}
                placeholderTextColor="white"
                keyboardType="numeric"
                onChangeText={value => setGradePoint('C', value)}
              />
            </View>
            <View style={styles.gradeRow}>
              <Text style={styles.gpaListText}>C- </Text>
              <TextInput
                style={styles.gpaTextInput}
                placeholderTextColor="white"
                keyboardType="numeric"
                onChangeText={value => setGradePoint('C-', value)}
              />
              <Text style={styles.gpaListText}>D+</Text>
              <TextInput
                style={styles.gpaTextInput}
                placeholderTextColor="white"
                keyboardType="numeric"
                onChangeText={value => setGradePoint('D+', value)}
              />
            </View>
            <View style={styles.gradeRow}>
              <Text style={styles.gpaListText}>D </Text>
              <TextInput
                style={styles.gpaTextInput}
                placeholderTextColor="white"
                keyboardType="numeric"
                onChangeText={value => setGradePoint('D', value)}
              />
              <Text style={styles.gpaListText}>D-</Text>
              <TextInput
                style={styles.gpaTextInput}
                placeholderTextColor="white"
                keyboardType="numeric"
                onChangeText={value => setGradePoint('D-', value)}
              />
            </View>
            <View style={styles.gradeRow}>
              <Text style={styles.gpaListText}>E</Text>
              <TextInput
                style={styles.gpaTextInput}
                placeholderTextColor="white"
                keyboardType="numeric"
                onChangeText={value => setGradePoint('E', value)}
              />
            </View>
          </View>
        </View>
        <Text style={styles.numberingText}>
          2. Enter number of courses and click OK button for some year
        </Text>
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
                {textFields[`year${year}`]?.map((course, index) => (
                  <View key={index} style={styles.rowContainer}>
                    <TextInput
                      style={[styles.inputText, styles.gradeInput]}
                      placeholder={`Course ${index + 1} Grade`}
                      placeholderTextColor="white"
                      onChangeText={grade =>
                        handleGradeChange(`year${year}`, index, grade)
                      }
                    />
                    <TextInput
                      style={[styles.inputText, styles.creditInput]}
                      placeholder={`Course ${index + 1} Credit`}
                      placeholderTextColor="white"
                      keyboardType="numeric"
                      onChangeText={credit =>
                        handleCreditChange(`year${year}`, index, credit)
                      }
                    />
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
        ))}
        <TouchableOpacity style={styles.viewGpaButton} onPress={viewGpa}>
          <Text style={styles.buttonText}>View GPA</Text>
        </TouchableOpacity>

        <Text style={styles.gpaText}>Your GPA is {button}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
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
  numberingText: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  gpaListcontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  gpaListText: {
    fontSize: 25,
    marginRight: 10,
    marginLeft: 20,
  },
  gradeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  gpaTextInput: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'black',
    width: '20%',
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
    marginRight: 10,
    marginLeft: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  gradeInput: {
    flex: 1,
    marginRight: 5,
  },
  creditInput: {
    flex: 1,
    marginLeft: 5,
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
    marginBottom: 5,
    marginTop: 5,
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
  viewGpaButton: {
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '',
    width: '0%',
    alignSelf: 'center',
  },
  gpaText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    color:'white',
  },
  viewGpaButton: {
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: 'green', 
    width: 200, 
    alignSelf: 'center',
    height: 40, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
