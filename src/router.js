import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import Home from './pages/home/index';
import Login from './pages/login/index';
import Admin from './Admin';
import Buttons from './pages/ui/button';
import Modals from './pages/ui/modals';
import Loadings from './pages/ui/loadings';
import Notices from './pages/ui/notices';
import Messages from './pages/ui/messages';
import Tabs from './pages/ui/tabs';
import Gallery from './pages/ui/gallery';
import Carousels from './pages/ui/carousels';
import FormLogin from './pages/form/login';
import FormRegister from './pages/form/register';
import BasicTable from './pages/table/basicTable';

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
                <Route path="/admin/home" component={Home}/>
                <Route path="/admin/ui/buttons" component={Buttons}/>
                <Route path="/admin/ui/modals" component={Modals}/>
                <Route path="/admin/ui/loadings" component={Loadings}/>
                <Route path="/admin/ui/notices" component={Notices}/>
                <Route path="/admin/ui/messages" component={Messages}/>
                <Route path="/admin/ui/tabs" component={Tabs}/>
                <Route path="/admin/ui/gallery" component={Gallery}/>
                <Route path="/admin/ui/carousel" component={Carousels}/>
                <Route path="/admin/form/login" component={FormLogin}/>
                <Route path="/admin/form/register" component={FormRegister}/>
                <Route path="/admin/table/basic" component={BasicTable}/>
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