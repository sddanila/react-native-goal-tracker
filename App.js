

import { useState } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  View
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [modalIsVisible, setIsModalVisible] = useState(false)
  const [goalsList, setGoalsList] = useState([])

  function startAddGoalHandler() {
    setIsModalVisible(true)
  }
  
  function endAddGoalHandler() {
    setIsModalVisible(false)
  }
  
  function addGoalHandler(enteredText) {
    setGoalsList((currentGoalsList) => [
      ...currentGoalsList,
      { text: enteredText, id: Math.random().toString() }
    ])
    endAddGoalHandler()
  }

  function deleteGoalHandler(id){
    setGoalsList(currentGoalsList => {
      return currentGoalsList.filter((goal) => goal.id !== id)
    })
  }

  return (
    <>
      <StatusBar style="light"/>
      <View style={styles.appContainer}>
        <Button
          title='Add New Goal'
          color='#e4d0ff'
          onPress={startAddGoalHandler}
        />
        <GoalInput 
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
        
        <View style={styles.goalsContainer}>
          <FlatList
            data={goalsList}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  id={itemData.item.id}
                  text={itemData.item.text}
                  onDelete={deleteGoalHandler}
                />
              )
            }} 
            alwaysBounceVertical={false}
            keyExtractor={(item, index) => {
              item.id
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 4,
    paddingTop: 16
  }
});
