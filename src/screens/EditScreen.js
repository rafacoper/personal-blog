import React, { useContext } from "react"
import { Context } from "../context/blogReducer"
import BlogPostForm from "../components/BlogPostForm"

const EditScreen = ({ navigation }) => {
  const { state, editPost } = useContext(Context)
  const id = navigation.getParam("id")

  console.log("STATE ::: ", state)
  console.log("ID ::: ", id)
  const blogPost = state.map((blogPost) => {
    if (blogPost.id === id)
      return {
        id: blogPost.id,
        title: blogPost.title,
        content: blogPost.content,
      }
  })

  console.log("ON EDIT SCREEN ::: ", blogPost)

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editPost(id, title, content, () => navigation.navigate("Index"))
      }}
    />
  )
}

export default EditScreen
