import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ExpenseItem from './expense-item';


class Trip extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <section class="trips">
            <h2>Trips</h2>
            <ul>
                <li>
                    <p>Trip: Peru</p>
                    <p>Trip budget: $1500</p>
                    <ul>
                        <li>
                            <ExpenseItem />
                        </li>
                    </ul>
                </li>
            </ul>

            <Link to="/new-trip"> + new trip </Link>

        </section>
        )
    }
}

export default Trip;

// user will have foreign key to all the trips
// each trip will have its own id
// in the user table the trip id will be a foreign key linking user to trip id
// map to loop through all expense items connected to that trip 

// trip one (foreign key ex: 001) > expenses (id = foreign key in trip ex: 001) > expense one (each expense will have its own id), expense two, expense three 

// finish react static
// set up api calls with dummy data (json object)
// postgres
// 


// --------------------- API CALLS -----------------------------------
// on page RENDER && IF user state isLoggedIn:true -> make GET REQUEST from list of all TRIPS
// ELSE IF user state isLoggedIn:false -> redirect to Landing Page

// when 'submit' is clicked -> create POST request to ADD entire EXPENSE onto TRIP >> IF ID MATCHES TRIP ID << -> RE-RENDER