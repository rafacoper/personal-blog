import React, { useState } from "react"
import { View, Text, StyleSheet, TextInput, Button } from "react-native"

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  return (
    <View>
      <Text style={styles.labelStyle}>Enter Title</Text>
      <TextInput
        value={title}
        placeholder="Título"
        onChangeText={setTitle}
        style={styles.inputStyle}
      />
      <Text style={styles.labelStyle}>Enter Content</Text>
      <TextInput
        value={content}
        placeholder="Conteúdo"
        onChangeText={setContent}
        style={styles.inputStyle}
      />
      <Button title="Add Post" onPress={() => navigation.navigate("Index")} />
    </View>
  )
}

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5
  },
  labelStyle: {
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 5
  },
})

export default CreateScreen
