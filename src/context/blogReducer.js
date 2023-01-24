import jsonServer from "../api/jsonServer"
import createDataContext from "./createDataContext"

const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogPosts":
      return action.payload
    case "add_post":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ]
    case "delete_Post":
      return state.filter((blogPost) => blogPost.id !== action.payload)
    case "edit_post":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost
      })
    default:
      return state
  }
}

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/blogposts")

    dispatch({ type: "get_blogPosts", payload: response.data })
  }
}

const addPost = (dispatch) => {
  return async (title, content, callBack) => {
    await jsonServer.post("/blogposts", { title, content })
    dispatch({ type: "add_post", payload: { title, content } })
    if (callBack) {
      callBack()
    }
  }
}

const deletePost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`blogposts/${id}`)
    dispatch({ type: "delete_Post", payload: id })
  }
}

const editPost = (dispatch) => {
  return async (id, title, content, callBack) => {
    await jsonServer.put(`blogposts/${id}`, { title, content })
    dispatch({ type: "edit_post", payload: { id, title, content } })
    if (callBack) {
      callBack()
    }
  }
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addPost, deletePost, editPost, getBlogPosts },
  []
)
