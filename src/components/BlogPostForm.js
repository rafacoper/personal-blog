import React, { useState } from "react"
import { View, Text, TextInput, Button, StyleSheet } from "react-native"

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title)
  const [content, setContent] = useState(initialValues.content)

  return (
    <View>
      <Text style={styles.labelStyle}>Enter Title</Text>
      <TextInput
        value={title}
        placeholder="Título"
        onChangeText={(text) => setTitle(text)}
        style={styles.inputStyle}
      />
      <Text style={styles.labelStyle}>Enter Content</Text>
      <TextInput
        value={content}
        placeholder="Conteúdo"
        onChangeText={(text) => setContent(text)}
        style={styles.inputStyle}
      />
      <Button title="Save Blog Post" onPress={() => onSubmit(title, content)} />
    </View>
  )
}

BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
}

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  labelStyle: {
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 5,
  },
})

export default BlogPostForm
