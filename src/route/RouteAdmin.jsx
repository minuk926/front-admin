import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "../pages/sign/Login";
import SignForm from "../pages/sign/SignForm";
import JoinForm from "../pages/sign/JoinForm";
import SignUPComplete from "../pages/sign/SignUPComplete";
import FindId from "../pages/sign/FindId";
import FindIdResult from "../pages/sign/FindIdResult";
import FindIdFail from "../pages/sign/FindIdFail";
import FindPw from "../pages/sign/FindPw";
import FindPwResult from "../pages/sign/FindPwResult";
import FindPwFail from "../pages/sign/FindPwFail";
import MemberModify from "../pages/sign/MemberModify";
import Links from "./Links";

export default function RouteAdmin() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/login" component={Login}/>
				<Route path="/sign-in" component={SignForm}/>
				<Route path="/join" component={JoinForm}/>
				<Route path="/sign-up-Complete" component={SignUPComplete}/>
				<Route path="/find-id" component={FindId}/>
				<Route path="/find-id-result" component={FindIdResult}/>
				<Route path="/find-id-fail" component={FindIdFail}/>
				<Route path="/find-pw" component={FindPw}/>
				<Route path="/find-pw-result" component={FindPwResult}/>
				<Route path="/find-pw-fail" component={FindPwFail}/>
				<Route path="/member-modify" component={MemberModify}/>
				<Route path="/" exact component={Links}/>
			</Switch>
		</BrowserRouter>
	);
}