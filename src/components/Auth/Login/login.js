import React, { Component } from 'react';
import { StyledSection, StyledAuth, StyledLogoText, StyledLog, StyledLogo, StyledInput, StyledForm, StyledButton } from './styles'
import Log from '../../../assets/images/log.png'
import Logo from '../../../assets/images/logo.png'
import { graphql, compose } from 'react-apollo'
import { loginMutation } from '../../../queries'

class Login extends Component {
    constructor(props){
        super(props);
        this.handleClickSignUp = this.handleClickSignUp.bind(this);
        this.state = {
            email: "",
            password: "",
        }
    }

    submitForm(e){
        e.preventDefault();
        this.props.loginMutation({
            variables: {
                email: this.state.email,
                password: this.state.password,
            }
        })
    }

    handleClickSignUp(){
        this.props.changeIsLogin()
    }

    render() {
        console.log("****", this.state)
        return (
            <StyledAuth>
                <StyledSection>
                    <div>
                        <StyledLog src={Log} alt=""/>
                        <StyledLogo src={Logo} alt=""/>
                        <StyledLogoText>habitat</StyledLogoText>
                    </div>
                    <StyledForm onSubmit={this.submitForm.bind(this)}>
                        <div>
                            <StyledInput type="text" placeholder="Email Address" name="email" onChange={(e) => this.setState({ email: e.target.value })} />
                            <StyledInput type="password" placeholder="Password" name="password" onChange={(e) => this.setState({ password: e.target.value })} />
                        </div>
                        <a href="#" className="span_forgot">Forgot your password ?</a>
                        <div>
                            <StyledButton className="button_sign-in">Sign In</StyledButton>
                        </div>
                        <div className="buttons_container">
                            <StyledButton className="button_other" type="button" onClick={ this.handleClickSignUp}>Create Account</StyledButton>
                            <StyledButton className="button_other" type="button">Learn More</StyledButton>
                        </div>
                    </StyledForm>

                    <span className="span_copyrights">2014 inkling Systems, Inc.</span>
                </StyledSection>
            </StyledAuth>
        );
    }
}

export default compose(
    graphql(loginMutation, {name:"loginMutation"})
)(Login);
