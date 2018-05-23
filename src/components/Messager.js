import React, { Component} from 'react';

import PropTypes from 'prop-types';

export default class Messager extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    handleMessagerChange: PropTypes.func.isRequired,
    style: PropTypes.string.isRequired
  }

  render() {
    const { name, content, time, handleMessagerChange,style } = this.props;
    let opacity = style === "rgb(149,217,208)" ? 1: 1;
    return (
      <li className="thread-item" style={{backgroundColor: style,opacity: opacity}} onClick={handleMessagerChange}>
        <a href="#">
          <div className="clearfix">
            <div className="thread-item_left">
              <img className="img" />
            </div>
            <div className="thread-item_right">
              <div className="thread-from">
                {name}
              </div>
              <div>
                <span className="thread-content">{content}</span>
              </div>
              <span className="thread-time">{time}</span>
            </div>
          </div>
        </a>
      </li>
    );
  }
}

/* export default class UserList extends Component {
    render() {
        const userlistElement = []
        const userlist = this.props.userlist
        const usernums = Object.keys(userlist).length

        for(let uid in userlist) {
            const username = userlist[uid].username

            userlistElement.push(<ListItem style={{ backgroundColor: listbkColor }}  key={ uid } primaryText={ username } />)
        }

        return(
            <div>
                <Subheader>
                    { `Online Users: ${usernums}` }
                </Subheader>
                <List>
                    { userlistElement }
                </List>
            </div>
        )
    }
} */

