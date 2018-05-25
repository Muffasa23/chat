import { connect } from 'react-redux'
import MessagerComponent from '../components/Messager'

export const Messager = connect(state => ({
  users: state.users,
  messages: state.messages
}), {})(MessagerComponent)