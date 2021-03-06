import React from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import App from './App';
import Login from './pages/login'
import Admin from "./Admin";
import Button from "./pages/ui/button";
import NoMatch from "./pages/no_match";
import Modals from "./pages/ui/modals";
import Spin from "./pages/ui/spin";
import Notify from "./pages/ui/notify";
import messages from "./pages/ui/message";
import Tabs from "./pages/ui/tabs";
import Gallery from "./pages/ui/gallery";
import Carousels from "./pages/ui/carousel";
import LoginForm from "./pages/form/login";
import Register from "./pages/form/register";
import BasicTable from "./pages/table/basic";
import Advance from "./pages/table/advance";
import City from "./pages/city";

export default class IRouter extends React.Component{

  render() {
    return (
      <Router>
        <App>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/admin" render={() =>
              <Admin>
                <Switch>
                  <Route path="/admin/ui/buttons" component={Button}/>
                  <Route path="/admin/ui/modals" component={Modals}/>
                  <Route path="/admin/ui/loadings" component={Spin}/>
                  <Route path="/admin/ui/notification" component={Notify}/>
                  <Route path="/admin/ui/messages" component={messages}/>
                  <Route path="/admin/ui/tabs" component={Tabs}/>
                  <Route path="/admin/ui/gallery" component={Gallery}/>
                  <Route path="/admin/ui/carousel" component={Carousels}/>
                  <Route path="/admin/form/login" component={LoginForm}/>
                  <Route path="/admin/form/reg" component={Register}/>
                  <Route path="/admin/table/basic" component={BasicTable}/>
                  <Route path="/admin/table/high" component={Advance}/>
                  <Route path="/admin/city" component={City}/>
                  <Route component={NoMatch} />
                </Switch>
              </Admin>
            } />
            <Route component={NoMatch} />
          </Switch>
        </App>
      </Router>
    );
  }
}