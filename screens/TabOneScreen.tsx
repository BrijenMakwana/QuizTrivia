import axios from 'axios';
import { useEffect, useState } from 'react';
import {SafeAreaView, StyleSheet } from 'react-native';
import AnswerBlock from '../components/AnswerBlock';
import QuestionBoard from '../components/QuestionBoard';


export default function TabOneScreen() {
  const [triviaData,setTriviaData] = useState<any>([
    {
      question: "loading",
      correct_answer: "Loading",
      incorrect_answers:[
        "Loading","Loading","Loading"
      ]
  }
  ]);
  const [currentQuestion,setCurrentQuestion] = useState<number>(0);

  const getQuestions = async() => {
     await axios.get('https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple')
    .then( (response)=> {
      // handle success
      setTriviaData(response.data.results);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

  }

  const nextQuestion = () => {
    if(currentQuestion< triviaData.length - 1){
      setCurrentQuestion(currentQuestion + 1);
    }
    else{
      alert("You have reached the end");
    }
  }

  useEffect(() => {
    getQuestions();
  }, [])
  
  return (
    <SafeAreaView style={styles.container}>
      <QuestionBoard 
        question={triviaData[currentQuestion].question}
        currentQuestion={currentQuestion + 1}
        totalQuestions={triviaData.length}
      />
      <AnswerBlock 
        triviaData={triviaData[currentQuestion]}
        onNext={nextQuestion}
      /> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"

  },
  
});
