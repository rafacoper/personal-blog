import createDataContext from "./createDataContext"

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_post":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content
        },
      ];
      case "delete_Post":
        return state.filter((blogPost) => blogPost.id !== action.payload)
      case "edit_post":
        return state.map((post) => {
          if (post.id === action.payload.id) {
            return action.payload
          }
        })
        default:
      return state
  }
}

const deletePost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_Post", payload: id })
  }
}

const addPost = (dispatch) => {
  return (title, content, callBack) => {
    dispatch({ type: "add_post", payload: { title, content } })
    if (callBack) { 
      callBack()
    }
  }
}

const editPost = (dispatch) => {
  return (id, title, content, callBack) => {
    dispatch({ type: "edit_post", payload: { id, title, content } })
    if (callBack) { 
      callBack()
    }
  }
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addPost, deletePost, editPost },
  []
)
