import { connect } from 'react-redux'
import LoginComponent from '../components/login'
import { addUser } from '../actions'

const mapDispatchToProps = dispatch => ({
  dispatch: (name) => {
    dispatch(addUser(name));
  },
});

export const Login = connect( state => ({
    users: state.users
  }), mapDispatchToProps)(LoginComponent)