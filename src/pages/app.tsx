import React from 'react';
import { ApolloClient } from './../services';
import { ApolloProvider } from 'react-apollo';
import { HomePage } from './index';
import { Header, Footer } from '@components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';

export default () => {
  return (
    <Provider store={store}>
      <ApolloProvider client={ApolloClient}>
        <Header />
        <Router>
          <Switch>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </ApolloProvider>
    </Provider>
  );
};
