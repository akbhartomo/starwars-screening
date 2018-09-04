import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { store } from '../../store/store'

import { Base } from '../base';
import { MovieList } from '../movieList/component';

export class AppRoute extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Base} />
            <Route path="/home" component={Base} />
            <Route path="/films/:id" component={MovieList} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default AppRoute;
