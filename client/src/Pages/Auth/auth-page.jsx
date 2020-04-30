import React from 'react'

import './auth-page.style.scss';
import SignInForm from '../../Components/Auth-Form/sign-in-form.component';
import SignUpForm from '../../Components/Auth-Form/sign-up-form.component';

const AuthPage = () => (
    <div className="auth">
        <SignInForm />
        <SignUpForm />
    </div>
)

export default AuthPage;