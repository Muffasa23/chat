import { combineReducers } from "redux"
import messages from "./message"
import users from "./users"

const chat = combineReducers({
  messages,
  users
});

export default chat

/* 我們的 state tree 是 messages 和 users */

/* Reducers接收action和prev state，並回傳新的state，action只傳遞要改變的類型(type)。 */