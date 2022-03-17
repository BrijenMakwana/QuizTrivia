import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AnswerItem = () => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.title}>Harry Potter</Text>
    </Pressable>
  )
}

export default AnswerItem

const styles = StyleSheet.create({
  container:{
    width: "80%",
    alignSelf: "center",
    backgroundColor: "#fff",
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
    color: "#17C3B2",
    fontSize: 18,
    fontWeight: "700"
  }
})