import React, { Component } from 'react';
import Login from './Login/login'
import Signup from './Signup/signup'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient ({
    uri: 'http://localhost:3000/'
})

class Auth extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLogin: true
        }
    }

    changeIsLogin(){
        this.setState({
            isLogin: false
        })
    }

    render() {
        return (
            <ApolloProvider client={client}>
                {this.state.isLogin ?
                    <Login changeIsLogin={this.changeIsLogin.bind(this)}/>
                :
                    <Signup />
                }
            </ApolloProvider>
        );
    }
}

export default Auth;
