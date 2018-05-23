import React, { Component } from 'react'

export default class ChatInput extends Component {
    handleMessages() {
        const message = this.refs.msgField.input.value

        if(message) {
            const messageObj = {
                uid: this.props.uid,
                username: this.props.username,
                content: message,
                time: this.getTime()
            }

            this.props.socket.emit('updateMessages', messageObj)
            this.refs.msgField.input.value = ''
            this.props.actions.setErrorInfo('')
        }else {
            this.props.actions.setErrorInfo('You don\'t input any messages.')
        }
    }

    handleKeyPress(e) {
        if(e.key === 'Enter') {
            this.handleMessages()
        }
    }

    getTime() {
        const date = new Date()
        let [ hour, minute ] = [ date.getHours(), date.getMinutes() ]
        hour = hour < 10 ? '0' + hour : hour
        minute = minute < 10 ? '0' + minute : minute

        return hour + ':' + minute
    }

    render() {
        return(
            <input className="new-message" placeholder="type something..." ref="msgField" errorText={ this.props.errorinfo } onKeyPress={ this.handleKeyPress.bind(this) } />
        )
    }
}


/* import PropTypes from 'prop-types';

export default class UserInput extends Component {
  static propTypes = {
    messageChange: PropTypes.func.isRequired,
    handleKeyDown: PropTypes.func.isRequired,
    newMessage: PropTypes.string.isRequired
  }

  render() {
    const { newMessage, messageChange, handleKeyDown} = this.props;
    return (
        <input className="new-message"
              value={newMessage}
              onChange={messageChange}
              onKeyDown={handleKeyDown}
              placeholder="type something..." />
    );

  }
} */