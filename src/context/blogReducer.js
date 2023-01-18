import createDataContext from "./createDataContext"

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_post":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: `Post #${state.length + 1}`,
        },
      ]
    case "delete_Post":
      return state.filter((blogPost) => blogPost.id !== action.payload)
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
	return () => {
    dispatch({ type: "add_post" })
  }
}

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addPost, deletePost },
  []
)
