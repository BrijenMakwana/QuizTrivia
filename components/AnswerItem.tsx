import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';

export type AnswerItemProps = {
  title: string;
  currectAnswer: string;
  onNext: () => void;
  scoreIncrement: () => void;
}

const AnswerItem = (props: AnswerItemProps) => {
  const [answerBlockColor,setAnswerBlockColor] = useState("#fff");
  const [answerTextColor,setAnswerTextColor] = useState("#17C3B2");

  const revealAnswer = () => {
    if(props.title === props.currectAnswer){
      setAnswerBlockColor("#17C3B2");
      setAnswerTextColor("#fff");
      props.scoreIncrement();
    }
    else{
      setAnswerBlockColor("#FE6D73");
      setAnswerTextColor("#fff");
    }
    
    setTimeout(() => {
      props.onNext();
      setAnswerBlockColor("#fff");
      setAnswerTextColor("#17C3B2");
    }, 1000);
    
  }
  return (
    <Pressable style={[styles.container,{
      backgroundColor: answerBlockColor
    }]} onPress={revealAnswer}>
      <Text style={[styles.title,{
        color: answerTextColor
      }]}>{props.title}</Text>
    </Pressable>
  )
}

export default AnswerItem

const styles = StyleSheet.create({
  container:{
    width: "80%",
    alignSelf: "center",
    padding: 15,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#17C3B2",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    shadowOpacity: 0.2,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset:{
      height: 5,
      width: 5
    }
  },
  title:{
    fontSize: 18,
    fontWeight: "700"
  }
})