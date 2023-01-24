import React, { useContext, useEffect } from "react"
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native"
import { Context } from "../context/blogReducer"
import { Ionicons, FontAwesome } from "@expo/vector-icons"

const IndexScreen = ({ navigation }) => {
  const { state, getBlogPosts, deletePost } = useContext(Context)

  useEffect(() => {
    getBlogPosts()
  }, [])

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(state) => state.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>
                  {item.id}: {item.title} - {item.content}
                </Text>
                <TouchableOpacity onPress={() => deletePost(item.id)}>
                  <Ionicons name="trash-bin-outline" style={styles.icon} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <FontAwesome name="plus-square-o" style={styles.icon2} />
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
  },
  icon2: {
    fontSize: 30,
    color: "black",
    marginRight: 15,
  },
})

export default IndexScreen
