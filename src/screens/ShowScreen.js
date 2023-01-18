import React, { useContext } from "react"
import { View, Text, StyleSheet } from "react-native"
import { Context } from "../context/blogReducer"

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context)

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParams("id")
  )

  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default ShowScreen
