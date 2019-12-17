import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component{
    
    render() {
        return(
        <div className="navbar">
            <NavLink to='/'>Home</NavLink>
                        {/* <div class="subnav">
                        <a href="#current-month-page">Months</a>
                        <!-- <div class="subnav-content">
                            <a href="#current-month-page">January</a>
                            <a href="#current-month-page">February</a>
                            <a href="#current-month-page">March</a>
                            <a href="#current-month-page">April</a>
                            <a href="#current-month-page">May</a>
                            <a href="#current-month-page">June</a>
                        </div> -->
                        </div> */}
            <NavLink to='/trips'>My Trips</NavLink>
            <NavLink to='/create-account'>Sign up</NavLink>
            <NavLink to='/trips-summary'>Trips Summary</NavLink>
            <NavLink to='/new-trip'>New trip</NavLink>
            <NavLink to='/new-expense'>New expense</NavLink>
        </div>
        

        )
    }
}

export default Header;


// --------------------- OTHER LOGIC -----------------------------------
// IF user state isLoggedIn:true THEN render LOGOUT ELSE render LOGIN
