import axios from 'axios';
import { useEffect, useState } from 'react';
import {SafeAreaView, StyleSheet, Text,View } from 'react-native';
import AnswerBlock from '../components/AnswerBlock';
import QuestionBoard from '../components/QuestionBoard';


export default function TabOneScreen() {
  const [triviaData,setTriviaData] = useState<any>([
    {
      question: "",
      correct_answer: "",
      incorrect_answers:[
        "","",""
      ]
  }
  ]);
  const [currentQuestion,setCurrentQuestion] = useState<number>(0);
  const [score,setScore] = useState<number>(0);

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
    console.log(triviaData)
  }, [])
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.score}>Score: <Text style={styles.scoreNumber}>{score}</Text></Text>
      <View>
        <QuestionBoard 
          question={triviaData[currentQuestion].question}
          currentQuestion={currentQuestion + 1}
          totalQuestions={triviaData.length}
        />
        <AnswerBlock 
          triviaData={triviaData[currentQuestion]}
          onNext={nextQuestion}
          scoreIncrement={()=>setScore(score + 1)}
        /> 
       </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // justifyContent: "space-between"
  },
  score:{
    fontSize: 20,
    marginLeft: 30,
    marginTop: 5,
    color: "#000",
    fontWeight: "bold"
  },
  scoreNumber:{
    fontSize: 25,
    color: "#17C3B2"
  }
  
});
