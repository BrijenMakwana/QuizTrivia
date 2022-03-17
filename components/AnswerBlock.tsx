import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AnswerItem from './AnswerItem'

const AnswerBlock = () => {
  return (
    <View style={styles.container}>
      <AnswerItem/>
      <AnswerItem/>
      <AnswerItem/>
      <AnswerItem/>
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