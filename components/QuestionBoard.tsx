import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import {  FontAwesome } from '@expo/vector-icons';

export type QuestionBoardProps = {
  question: string;
  currentQuestion: number;
  totalQuestions: number;
}

const QuestionBoard = (props: QuestionBoardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.numberContainer}>
        <Text style={styles.number}>{`${props.currentQuestion} / ${props.totalQuestions}`}</Text>
      </View>
      <Text style={styles.question}>
        {props.question}
      </Text>
      <View style={styles.questionMark}>
      <FontAwesome name="question" size={24} color="#17C3B2" />
      </View>
    </View>
  )
}

export default QuestionBoard

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: "#FFCB77",
    height: "40%",
    width: "85%",
    padding: 20,
    alignSelf: "center",
    borderRadius: 15,
    marginTop: 15
  },
  question:{
    fontSize: 18,
    color: "#000",
    fontWeight: "300"
  },
  numberContainer:{
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: -20
  },
  number:{
    color: "#17C3B2",
    fontSize: 20
  },
  questionMark:{
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: -20,
    width: 40,
    height: 40
  }
})