import React, { Component } from 'react';
import MessageList from './MessageList';
import Messager from './Messager';
import UserInput from './UserInput';

const initialState = {
  newMessage: '',
  threads: [
    {
      target: {
        name: 'FW Maple',
      },
      messages: [
        { fromMe: false, text: '楓棠17歲，其他隊洗洗睡', time: '12:27am' },
        { fromMe: true, text: '閉嘴，拉機', time: '12:27am' },
      ]
    },
    {
      target: {
        name: 'TSM Bjersen',
      },
      messages: [
        { fromMe: false, text: '西門打球，球你帶', time: '14:51pm' },
      ]
    },
    {
      target: {
        name: 'KZ Khan',
      },
      messages: [
        { fromMe: false, text: '4 Chinese can\'t win', time: '16:24pm' },
      ]
    }
  ],
  currentIndex: 0
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleMessageChange(event) {
    this.setState({ newMessage: event.target.value });
  }

  handleMessagerChange(event) {
    this.setState({ currentIndex: event });
  }

  handleKeyDown(event) {
    const message = event.target.value;
    const time = new Date().toDateString();
    const addMessage = {fromMe: true, text: message, time: time};

    if (event.keyCode === 13 && message !== '') {
      const {threads, currentIndex} = this.state;
      threads[currentIndex].messages.push(addMessage);

      this.setState({
        newMessage: '',
        threads: threads
      });
    }
  }

  render() {
    const { threads, currentIndex } = this.state;
    return (
      <div className="chat-app clearfix">
        <div className="chat-app_left">
          <div className="thread-list">
            {threads.map((thread, id) => {
              const { target, messages } = thread;
              const lastMessage = messages[messages.length - 1];
              let bgColor = this.state.currentIndex === id ? "rgb(149,217,208)" : "rgb(243, 234, 219)";
              return (
                <Messager
                  key={id}
                  name={target.name}
                  content={lastMessage.text}
                  time={lastMessage.time}
                  handleMessagerChange={this.handleMessagerChange.bind(this, id)}
                  style={bgColor}
                />
              );
            })}
          </div>
        </div>
        <div className="chat-app_right">
          <div className="heading">
            <div className="current-target">{threads[currentIndex].target.name}</div>
          </div>
          <div className="message-list">
            <MessageList threads={threads} index={currentIndex} />
          </div>
          <div className="footer">
            <UserInput newMessage={this.state.newMessage}
                       messageChange={this.handleMessageChange.bind(this)}
                       handleKeyDown={this.handleKeyDown.bind(this)} />
            <div className = 'send-icon'></div>
          </div>
        </div>
      </div>
    );
  }
}