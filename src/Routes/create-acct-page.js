import React from 'react';

import Login from '../Components/login';
import Signup from '../Components/signup';



class CreateAccount extends React.Component {
    render(){
        return(
            <section>
                <h1>Login/Signup Page</h1>
                <Login />
                <Signup />
            </section>
        )
    }
}


export default CreateAccount;
// functional components - just functions. aka: stateless
// stateful components

