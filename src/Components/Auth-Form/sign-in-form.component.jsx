import React, { Component } from 'react'

import './sign-in-form.style.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../Custom-Button/custom-button.component';
import { signInWithGoogle } from '../../config/firebase/firebase.util';

class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() { 
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email ID and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} type="email" name="email" value={this.state.email} required label="Email" />
                    <FormInput handleChange={this.handleChange} type="password" name="password" value={this.state.password} required label="Password" />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton isGoogleButton onClick={signInWithGoogle} >Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default SignInForm;