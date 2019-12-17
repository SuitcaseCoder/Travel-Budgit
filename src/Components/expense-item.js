import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ExpenseItem extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <section class="expense">
                <h2>Expense</h2>
                <ul>
                    <li>Air: $800</li>
                    <li>Food: $150</li>
                    <li>Hotel: $100</li>
                </ul>

                <Link to="/new-expense">+ new expense</Link>
            </section>
        )
    }
}

export default ExpenseItem;


// --------------------- API CALLS -----------------------------------
// on page RENDER -> match ID of expense being created to ID of TRIP -> IF trip id & expense id matches -> make GET REQUEST -> RENDER SAID Expenses
