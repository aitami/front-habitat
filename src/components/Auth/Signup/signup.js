import React, { Component } from 'react';
import { StyledSection, StyledAuth, StyledLogoText, StyledLog, StyledLogo, StyledInput, StyledForm, StyledButton } from './styles'
import Log from '../../../assets/images/log.png'
import Logo from '../../../assets/images/logo.png'
import { graphql, compose } from 'react-apollo'
import { signupMutation } from '../../../queries'

class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
        }
    }

    submitForm(e){
        console.log("+++++")
        e.preventDefault();
        this.props.signupMutation({
            variables: {
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
                password: this.state.password,
            }
        })
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
                            <StyledInput type="text" placeholder="First name" name="firstname" onChange={(e) => this.setState({ firstname: e.target.value })}/>
                            <StyledInput type="text" placeholder="Last name" name="lastname" onChange={(e) => this.setState({ lastname: e.target.value })} />
                            <StyledInput type="text" placeholder="Email Address" name="email" onChange={(e) => this.setState({ email: e.target.value })} />
                            <StyledInput type="password" placeholder="Password" name="password" onChange={(e) => this.setState({ password: e.target.value })} />

                            <StyledButton className="button_sign-in">Sign up</StyledButton>
                        </div>
                    </StyledForm>

                    <span className="span_copyrights">2014 inkling Systems, Inc.</span>
                </StyledSection>
            </StyledAuth>
        );
    }
}

export default compose(
    graphql(signupMutation, {name:"signupMutation"})
)(Signup);
