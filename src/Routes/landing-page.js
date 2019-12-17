import React from 'react';

import Hero from '../Components/hero';


class LandingPage extends React.Component {
    render(){
        return(
        <section className="landing">
            <h1>Landing Page</h1>
            <Hero />
        </section>
        )
    }
}


export default LandingPage;
// functional components - just functions. aka: stateless
// stateful components

