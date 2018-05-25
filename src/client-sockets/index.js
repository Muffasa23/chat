import * as types from '../constants/ActionTypes'
import { addUser, messageReceived, populateUsersList } from '../actions'
import socket from 'socket.io-client'

const setupSocket = (dispatch, username) => {
  socket = io()

  socket.on('addUser', name => {
      
  })

  return socket
}

export default setupSocket

/* 
socket.onopen = () => {
    socket.send(JSON.stringify({
      type: types.ADD_USER,
      name: username
    }))
  }
  socket.onmessage = (event) => {
    const data = JSON.parse(event.data)
    switch (data.type) {
      case types.ADD_MESSAGE:
        dispatch(messageReceived(data.message, data.author))
        break
      case types.ADD_USER:
        dispatch(addUser(data.name))
        break
      case types.USERS_LIST:
        dispatch(populateUsersList(data.users))
        break
      default:
        break
    }
  } */