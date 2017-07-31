import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NotFoundPage from './containers/NotFoundPage.js';
import LoginPage from './containers/LoginPage';
import FormPage from './containers/FormPage';
import TablePage from './containers/TablePage';
import Dashboard from './containers/DashboardPage';
import SlaResponseForm from './containers/SlaResponseForm';
import SlaOnsiteForm from './containers/SlaOnsiteForm';
import SlaWorkaroundForm from './containers/SlaWorkaroundForm';
import SlaResolutionForm from './containers/SlaResolutionForm';

export default (
  <Route>
    <Route path="login" component={LoginPage}/>
    <Route path="/" component={App}>
      <IndexRoute component={TablePage}/>
      <Route path="form" component={FormPage}/>
      <Route path="table" component={TablePage}/>
      <Route path="slaresponseform" component={SlaResponseForm} />
      <Route path="slaonsiteform" component={SlaOnsiteForm} />
      <Route path="slaworkaroundform" component={SlaWorkaroundForm} />
      <Route path="slaresolutionform" component={SlaResolutionForm} />
      <Route path="*" component={NotFoundPage}/>

    </Route>
  </Route>
);
