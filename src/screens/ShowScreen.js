import React, { useContext } from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Context } from "../context/blogReducer"
import { Feather } from "@expo/vector-icons"

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context)
  const id = navigation.getParam("id")

  const blogPost = state.find((blogPost) => blogPost.id === id)

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  )
}
// PROPS NÃO ESTÃO SENDO PASSADAS
ShowScreen.navigationOptions = ({ navigation, blogPost }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", {
            id: navigation.getParam("id"),
          })
        }
      >
        <Feather name="edit-3" style={styles.icon} />
      </TouchableOpacity>
    ),
  }
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 24,
    color: "black",
    marginRight: 15,
  },
})

export default ShowScreen
