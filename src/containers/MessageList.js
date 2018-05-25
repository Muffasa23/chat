import { connect } from 'react-redux'
import MessageListComponent from '../components/MessageList'

export const MessageList = connect(state => ({
  messages: state.messages
}), {})(MessageListComponent)

/* map state to props ，若state.messages改變;MessageListComponent的props 也會改變*/

/* connect() 用來產生 container component */