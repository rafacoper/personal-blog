import React, { useContext } from "react"
import { Context } from "../context/blogReducer"
import BlogPostForm from "../components/BlogPostForm"

const CreateScreen = ({ navigation }) => {
  const { addPost } = useContext(Context)

  return <BlogPostForm onSubmit={(title, content) => {
    addPost(title, content, () => navigation.navigate('Index'))
  }}/>
}

export default CreateScreen
