import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Custom components
import Pokedex from './components/containers/Pokedex';
import UIAbout from './components/ui/UIAbout';
import UIContact from './components/ui/UIContact';
import UINavbar from './components/ui/UINavbar';
import UINoMatch from './components/ui/UINoMatch';
import UIHome from './components/ui/UIHome';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <UINavbar />
          <Switch>
            <Route exact path="/" component={UIHome} />
            <Route path="/pokedex" component={Pokedex} />
            <Route path="/about" component={UIAbout} />
            <Route path="/contact" component={UIContact} />
            <Route path="*" component={UINoMatch} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
