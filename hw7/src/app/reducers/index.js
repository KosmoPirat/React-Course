import { combineReducers } from "redux"

import users from "./usersReducer"
import posts from "./postsReducer"
import comments from "./commentsReducer"

export default combineReducers({
    users: users,
    posts: posts,
    comments: comments,

})