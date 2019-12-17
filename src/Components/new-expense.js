import React, { Component } from 'react';

class NewExpense extends Component {

    render(){
        return(
        <section class="add-expense">
            <form action="" class="add-expense-form">
                <h2>Add New Expense</h2>
                <select name="fixed-expenses" id="">
                    <option value="Air">Air/Land/Water</option>
                    <option value="Transport">Transportation</option>
                    <option value="Food">Food/Drinks</option>
                    <option value="Stay">Stay</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Tourism">Tourism</option>
                    <option value="Other">Other</option>
                </select>
                <label for="amt">Amount</label>
                <input type="number" />
                <button>Submit</button>
            </form>
        </section>
        )
    }
}

export default NewExpense;


// --------------------- API CALLS -----------------------------------
// when 'submit' is clicked -> create POST request to ADD entire EXPENSE onto TRIP >> IF ID MATCHES TRIP ID << -> RE-RENDER
// once item has successfully been added - confirm to user and either re-direct back to re-rendered trips page OR somehow confirm to user that item has been added 