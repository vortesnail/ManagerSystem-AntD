import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import Login from './pages/login/index';
import Admin from './Admin';
import Buttons from './pages/ui/button';
import Modals from './pages/ui/modals';
import NoMatch from './pages/noMatch/index';

class IRouter extends Component {

  render() {
    return (
      <HashRouter>
        <App>
          <Route path="/login" component={Login}/>
          <Route path="/admin" render={() => 
            <Admin>
              <Switch>
                <Route path="/admin/ui/buttons" component={Buttons}/>
                <Route path="/admin/ui/modals" component={Modals}/>
                <Route component={NoMatch}/>
              </Switch>
            </Admin>
          }/>
          <Route path="/oreder/detail" component={Login}/>
        </App>
      </HashRouter>
    )
  }
}

export default IRouter;