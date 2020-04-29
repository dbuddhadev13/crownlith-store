import React, { useState } from 'react';

import './sign-up-form.style.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../Custom-Button/custom-button.component';

import { signUpStart } from '../../redux/user/user.action';
import { connect } from 'react-redux';

const SignUpForm = ({ signUpStart }) => {
    const [signUpCredentials, setSignUpCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { displayName, email, password, confirmPassword } = signUpCredentials;
    const handleSubmit = async event => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert("Passwords Dont Match");
            return;
        }

        signUpStart(email, password, displayName)
    }

    const handleChange = event => {
        const { name, value } = event.target;

        setSignUpCredentials({ ...signUpCredentials, [name]: value })
    }

    return(
        <div className="sign-up">
            <h2 className="title">I do not have a account</h2>
            <span>Sign Up with your Email and Password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={handleChange}
                    label="Display Name"
                    required
                />
                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    label="Email"
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    label="Password"
                    required
                />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    label="Confirm Password"
                    required
                />
                <CustomButton type="Submit">SIGN UP</CustomButton>
            </form>
        </div>
    )
}
 
const mapDispatchToProps = dispatch => ({
    signUpStart: (email, password, displayName) => dispatch(signUpStart({email, password, displayName}))
})

export default connect(null, mapDispatchToProps)(SignUpForm);