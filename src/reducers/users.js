import * as types from '../constants/ActionTypes'
//import io from 'socket.io-client'


const users = (state = [], action) => {
  switch (action.type) {
    case types.ADD_USER:
      //return state.concat([{ name: action.name, id: action.id, socket: io() }])
      return [
        ...state,
        {
          name: action.name,
          id: action.id,
          //socket: io()
        }
    ];
    case types.USERS_LIST:
      return action.users
    default:
      return state
  }
}

export default users

/* return [
          ...state,
          {
            name: action.name,
            id: action.id,
          }
      ];   */