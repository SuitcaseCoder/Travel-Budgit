import React, { Component } from 'react';

class TripSummary extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
        <section class="expense-summary">
            <ul>
                <li>
                    {/* pulled from list of completed trips */}
                    <p>Trip . Location</p>
                    <p>Trip id . goal </p>
                    <p>Trip id . total spent </p>
                    {/* id: if saved - green if not - red */}
                </li>
            </ul>
        </section>
        )
    }
}

export default TripSummary;


// --------------------- API CALLS -----------------------------------
// on PAGE RENDER -> make a GET REQUEST from the list of all COMPLETED TRIPS >> IF the state of a TRIP is isCompleted:true THEN include << -> RENDER 