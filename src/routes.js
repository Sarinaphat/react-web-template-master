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
import SlaTable from './containers/SlaTable';
import TeamSlaTable from './containers/TeamSlaTable';
import TeamSlaCreateTeam from './containers/TeamSlaCreateTeam';
import ServerSlideData from './containers/ServerSlideData';
import SlaNumberTeamSupport from './containers/SlaNumberTeamSupport';
import SlaFindContract from './containers/SlaFindContract';
import SlaRenderProjectInfo from './containers/SlaRenderProjectInfo';
import SlaEnduserCompany from './containers/SlaEnduserCompany';
import SlaTeamDefaultDefault from './containers/SlaTeamDefaultDefault';
import BarChartV from './containers/charts/BarChartV';
import calendar from './containers/calendar';
import CreateTaskForm from './containers/CreateTaskForm';
import RoleCreateForm from './containers/Role/RoleCreateForm';
import RoleMain from './containers/AdminWebComponent/RoleMain';

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
      <Route path="slatable" component={SlaTable} />
      <Route path="teamslatable" component={TeamSlaTable} />
      <Route path="teamslacreateteam" component={TeamSlaCreateTeam} />
      <Route path="serverslidedata" component={ServerSlideData} />
      <Route path="slanumberteamsupport" component={SlaNumberTeamSupport} />
      <Route path="slafindcontract" component={SlaFindContract} />
      <Route path="slarenderprojectinfo" component={SlaRenderProjectInfo} />
      <Route path="slaendusercompany" component={SlaEnduserCompany} />
      <Route path="slateamdefaultdefault" component={SlaTeamDefaultDefault} />
      <Route path="barchartv" component={BarChartV} />
      <Route path="calendar" component={calendar} />
      <Route path="createtaskform" component={CreateTaskForm} />
      <Route path="rolecreateform" component={RoleCreateForm} />
      <Route path="rolemain" component={RoleMain} />
      <Route path="*" component={NotFoundPage}/>

    </Route>
  </Route>
);
