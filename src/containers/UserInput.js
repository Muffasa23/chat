import { connect } from 'react-redux'
import UserInputComponent from '../components/UserInput'
import { addMessage } from '../actions'

const mapDispatchToProps = dispatch => ({
  dispatch: (message, author) => {
    dispatch(addMessage(message, author))
  }
})

export const UserInput = connect(state => ({
  users: state.users
}), mapDispatchToProps)(UserInputComponent)