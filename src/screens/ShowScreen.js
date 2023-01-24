import React, { useContext } from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Context } from "../context/blogReducer"
import { Feather } from "@expo/vector-icons"

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context)
  const id = navigation.getParam("id")

  const blogPost = state.find((blogPost) => blogPost.id === id)

  return (
    <View style={styles.row}>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.title}>{blogPost.content}</Text>
    </View>
  )
}

ShowScreen.navigationOptions = ({ navigation }) => {
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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "grey",
  },
  title: { fontSize: 18 },
  icon: {
    fontSize: 24,
    color: "black",
    marginRight: 15,
  },
})

export default ShowScreen
