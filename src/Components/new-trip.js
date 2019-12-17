import React, { Component } from 'react';

class NewTrip extends Component {

    render(){
        return(
        <section class="add-trip">
            <form action="" class="add-trip-form">
                <h2>Add New Trip</h2>
                <label for="location">Location</label>
                <input type="text" />
                <label for="budget-goal">Trip Budget Goal</label>
                <input type="number" />
                <button>Submit</button>
            </form>
        </section>
        )
    }
}

export default NewTrip;

// --------------------- API CALLS -----------------------------------
// when 'submit' is clicked -> create POST request to ADD entire item onto LIST OF TRIPS -> RE-RENDER 
// once item has successfully been added - confirm to user and either re-direct back to re-rendered trips page OR somehow confirm to user that item has been added 