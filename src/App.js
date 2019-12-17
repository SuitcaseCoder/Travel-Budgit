import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Components/header';
import LandingPage from './Routes/landing-page';
import CreateAccount from './Routes/create-acct-page';
import TripsPage from './Routes/trips-page';
import TripsSummaryPage from './Routes/trips-summary-page';
import AddTrip from './Routes/add-trip-page';
import AddExpense from './Routes/add-expense-page';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <section class-name="main-section">

        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/create-account' component={CreateAccount} />
          <Route exact path='/trips' component={TripsPage} />
          <Route exact path='/trips-summary' component={TripsSummaryPage} />
          <Route exact path='/new-trip' component={AddTrip} />
          <Route exact path='/new-expense' component={AddExpense} />
        </Switch>
      </section>
    </div>
  );
}

export default App;
