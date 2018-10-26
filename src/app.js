import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import IndexRoute from './components/IndexRoute';
import ShowRoute from './components/ShowRoute';

import 'bulma';
import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <main className="container">
          <header className="header">
            <img src="http://pong.kano.me/assets/kano-logo.png" alt="Kano logo" />
          </header>
          <Switch>
            <Route path="/:id" component={ShowRoute} />
            <Route path="/" component={IndexRoute} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
