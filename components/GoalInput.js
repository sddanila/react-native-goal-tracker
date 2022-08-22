import { useState } from 'react';
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View
} from 'react-native';


export default function GoalInput(props) {
  const [enteredText, setEnteredText] = useState('')
  function goalInputHandler(enteredText) {
    setEnteredText(enteredText)
  }

  function addGoalHandler() {
    props.onAddGoal(enteredText);
    setEnteredText('');
  }

  return (
    <Modal
      visible={props.visible}
      animationType="slide"
    >
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput
          placeholder='Your course goal'
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Cancel' onPress={props.onCancel} color='#f31282'/>
          </View>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={addGoalHandler} color='#b180f0'/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '40%',
    marginHorizontal: 8
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row"
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 24,
    padding: 16,
    backgroundColor: '#311b6b'
    },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 16
  }
});