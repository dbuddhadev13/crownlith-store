import React, { useState } from 'react'

import './sign-in-form.style.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../Custom-Button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.action';
import { connect } from 'react-redux';


const SignInForm = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredential, setUserCredential] = useState({email: '', password: ''})

    const {email, password} = userCredential;
    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart(email,password)
    }

    const handleChange = event => {
        const { value, name } = event.target;

        setUserCredential({...userCredential, [name]: value })
    }

    return(
        <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email ID and password</span>

        <form onSubmit={handleSubmit}>
            <FormInput handleChange={handleChange} type="email" name="email" value={email} required label="Email" />
            <FormInput handleChange={handleChange} type="password" name="password" value={password} required label="Password" />
            <div className="buttons">
                <CustomButton type="submit">Sign In</CustomButton>
                <CustomButton type="button" isGoogleButton onClick={googleSignInStart} >Sign In With Google</CustomButton>
            </div>
        </form>
    </div>
    )

}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email,password) => dispatch(emailSignInStart({email, password}))
})
 
export default connect(null, mapDispatchToProps)(SignInForm);