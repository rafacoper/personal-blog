import React, { useState, useContext } from "react"
import { Context } from "../context/blogReducer"
import BlogPostForm from "../components/BlogPostForm"

const EditScreen = ({ navigation }) => {
  const { state, editPost } = useContext(Context)
  const id = navigation.getParam("id")
  
  const blogPost = state.find(blogPost => blogPost.id === id)

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editPost(id, title, content, () => navigation.pop())
      }}
    />
  )
}

export default EditScreen
