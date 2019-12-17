import React from 'react';

import TripSummary from '../Components/trip-summary';

class TripsSummaryPage extends React.Component {
    render(){
        return(
            <section>
                <h1>Trips Summary Page</h1>
                <ul>
                    <li>
                    <TripSummary />
                    </li>
                </ul>
            </section>
        )
    }
}


export default TripsSummaryPage;
// functional components - just functions. aka: stateless
// stateful components

// filter through all trips summary 
//  