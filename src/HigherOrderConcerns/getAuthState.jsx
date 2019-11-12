import React, { Component} from 'react'
import {fetchCurrentUser} from '../store/actions/users'
import { connect } from 'react-redux'

function SetsAuthUserState(WrappedComponent) {
    // ...and returns another component...
    const fn = class extends Component {
      constructor(props) {
        super(props);
      }
  
      componentDidMount() {
        // ... that takes care of the subscription...
        if (localStorage.getItem("token")) {
            this.props.getCurrentUser()
        }
        else {
            this.props.history.push("/login")
        }
      }
     
  
      render() {
        // ... and renders the wrapped component with the fresh data!
        // Notice that we pass through any additional props
        return <WrappedComponent {...this.props} />;
      }
    };

    return connect(null, mapDispatchToProps)(SetsAuthUserState);
  }

  const mapDispatchToProps = dispatch => {
      return { getCurrentUser: ()=> dispatch(fetchCurrentUser())}
  }

 

  export default SetsAuthUserState