import React, { Component } from 'react';

import './sign-up-form.style.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../Custom-Button/custom-button.component';

import { auth } from '../../config/firebase/firebase.util';
import {createUserProfileDocument} from '../../config/firebase/firebase.function'

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;
        if(password !== confirmPassword) {
            alert("Passwords Dont Match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email, 
                password
            )

            await createUserProfileDocument(user, {displayName});
            
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''    
            })
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() { 
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span>Sign Up with your Email and Password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label="Display Name"
                        required
                    />
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label="Email"
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label="Password"
                        required
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label="Confirm Password"
                        required
                    />
                    <CustomButton type="Submit">SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
}
 
export default SignUpForm;