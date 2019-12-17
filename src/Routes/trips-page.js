import React from 'react';

import Trip from '../Components/trip';


class TripsPage extends React.Component {
    render(){
        return(
            <section>
                <h1>Trips Page</h1>
                <ul>
                    <li>
                        <Trip />
                    </li>
                </ul>
            </section>
        )
    }
}


export default TripsPage;
// functional components - just functions. aka: stateless
// stateful components

