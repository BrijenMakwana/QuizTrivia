import { Pressable, StyleSheet } from 'react-native';
import { View,Text } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Select Difficulty</Text>
      <Pressable style={styles.optionsContainer}>
        <View style={styles.choiceContainer}>
          <Text style={styles.choiceText}>Easy</Text>
        </View>
        <View style={styles.choiceContainer}>
          <Text style={styles.choiceText}>Meduim</Text>
        </View>
        <View style={styles.choiceContainer}>
          <Text style={styles.choiceText}>Hard</Text>
        </View>
        
      </Pressable>

      <Text style={styles.heading}>Select Type</Text>
      <Pressable style={styles.optionsContainer}>
        <View style={styles.choiceContainer}>
          <Text style={styles.choiceText}>Multiple Choice</Text>
        </View>
        <View style={styles.choiceContainer}>
          <Text style={styles.choiceText}>True / False</Text>
        </View>
        
        
      </Pressable>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    alignItems: "center"
  },
  heading:{
    fontSize: 20,
    color: "#17C3B2",
    fontWeight: "bold"
  },
  optionsContainer:{
    alignItems: "center",
    marginTop: 20,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly"
  },
  choiceContainer:{
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: "#FFCB77",
    // marginLeft: 20,
  },
  choiceText:{
    fontSize: 18,
    color: "#000",
  }
});
