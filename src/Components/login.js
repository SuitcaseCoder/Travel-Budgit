import React from 'react';

class Login extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
        <section class="login">
            <h1>Login to BudgIt 2.0</h1>
            <form>
                <label for="">Email</label>
                <input type="email" />
                <label for="">Password</label>
                <input type="text" />
                <button>Enter</button>
            </form>
        </section>
        )
    }
  
}

export default Login;


