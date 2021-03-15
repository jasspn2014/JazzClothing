import React from 'react';
import './signin-signup-page.styles.scss';

import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/signup/signup.component';

const SignInAndSignUpPage = () => (
    <div className="signin-and-signup">
        <SignIn />

        <SignUp />
    </div>
);

export default SignInAndSignUpPage;