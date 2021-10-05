import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Overveiw } from './Pages/Overview';
import { Dashboard } from './Pages/Dashboard';
import { DashboardCurrentCountry } from './Pages/DashboardCurrentCountry';
import { APIDocumentation } from './Pages/APIDocumentation';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Overveiw} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/dashboard/:name" component={DashboardCurrentCountry} />
          <Route exact path="/documentation" component={APIDocumentation} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
