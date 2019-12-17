import React from 'react';

class Signup extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
        <section class="signup">
            <h1>Sign Up for BudgIt 2.0</h1>
            <form>
                <label for="">Full Name</label>
                <input type="text" />
                <label for="">Email</label>
                <input type="email" />
                <button>Enter</button>
            </form>
        </section>
        )
    }
  
}

export default Signup;
