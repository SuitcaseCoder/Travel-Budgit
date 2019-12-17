import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Hero extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <section id="hero">
            <div class="hero-inner">
                <h1>Budgit 2.0</h1>
                <h2>An easy way to financially plan your upcoming travels</h2>
                <button>Sign Up Now</button>
                <Link to="/create-account"> 
                Already have an account? 
                </Link>
            </div>
        </section>
        )
    }
}

export default Hero;