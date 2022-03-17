import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AnswerItem from './AnswerItem';

export type AnswerBlockProps = {
  triviaData:{
    correct_answer: string;
    incorrect_answers:[string];
  }
  onNext: () => void;
}
const AnswerBlock = (props: AnswerBlockProps) => {

  return (
    <View style={styles.container}>
      {
        props.triviaData.incorrect_answers.map((item,index)=>(
          <AnswerItem 
            title={item} 
            key={index} 
            currectAnswer={props.triviaData.correct_answer} 
            onNext={props.onNext}
          />
        ))
      }
      <AnswerItem 
        title={props.triviaData.correct_answer} 
        currectAnswer={props.triviaData.correct_answer}
        onNext={props.onNext}
      />
    </View>
  )
}

export default AnswerBlock

const styles = StyleSheet.create({
  container:{
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40
   
  }
})