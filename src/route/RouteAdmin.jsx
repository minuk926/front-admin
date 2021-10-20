import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MemberModify from '../pages/sign/MemberModify';
import Admin from '../pages/admin/Admin';
import AdminMemberList from '../pages/admin/AdminMemberList';
import AdminMemberView from '../pages/admin/AdminMemberView';
import List from '../pages/admin/List';
import Modify from '../pages/admin/Modify';
import Links from './Links';
import NotFound from '../pages/NotFound';
import loadable from '@loadable/component';

export default function RouteAdmin() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={loadable(() => import('pages/sign/Login'))} />
        <Route path="/sign-in" component={loadable(() => import('pages/sign/SignForm'))} />
        <Route path="/join" component={loadable(() => import('pages/sign/JoinForm'))} />
        <Route path="/sign-up-Complete" component={loadable(() => import('pages/sign/SignUPComplete'))} />
        <Route path="/find-id" component={loadable(() => import('pages/sign/FindId'))} />
        <Route path="/find-id-result" component={loadable(() => import('pages/sign/FindIdResult'))} />
        <Route path="/find-id-fail" component={loadable(() => import('pages/sign/FindIdFail'))} />
        <Route path="/find-pw" component={loadable(() => import('pages/sign/FindPw'))} />
        <Route path="/find-pw-result" component={loadable(() => import('pages/sign/FindPwResult'))} />
        <Route path="/find-pw-fail" component={loadable(() => import('pages/sign/FindPwFail'))} />
        <Route path="/member-modify" component={MemberModify} />
        <Route path="/admin" component={Admin} />
        <Route path="/admin-member-list" component={AdminMemberList} />
        <Route path="/user-list" component={loadable(() => import('components/admin/user'))} />
        <Route path="/admin-member-view" component={AdminMemberView} />
        <Route path="/list" component={List} />
        <Route path="/modify" component={Modify} />
        <Route path="/" exact component={Links} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
