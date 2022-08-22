import { Pressable, StyleSheet, Text, View } from 'react-native';

function GoalItem(props) {
    return (
      <Pressable
        android_ripple={{color: '#dddddd'}}
        onPress={props.onDelete.bind(this, props.id)}
        style={({pressed}) => pressed && styles.pressedItem}
      >
        <View style={styles.goalItemView}>
          <Text style={styles.goalItem}>
            {props.text}
          </Text>
        </View>
      </Pressable>
      )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalsContainer: {
      flex: 4,
      paddingTop: 16
    },
    goalItemView: {
      margin: 8, 
      borderRadius: 10,
      backgroundColor: '#5808cc',
    },
    goalItem: {
      padding: 8,
      color: 'white'
    },
    pressedItem: {
      opacity: 0.5
    }
  });