import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "../pages/sign/Login";
import SignIn from "../pages/sign/SignIn";
import SignUp from "../pages/sign/SignUp";
import SignUPComplete from "../pages/sign/SignUPComplete";
import FindId from "../pages/sign/FindId";
import FindIdResult from "../pages/sign/FindIdResult";
import FindIdFail from "../pages/sign/FindIdFail";
import FindPw from "../pages/sign/FindPw";
import FindPwResult from "../pages/sign/FindPwResult";
import FindPwFail from "../pages/sign/FindPwFail";
import Links from "./Links";

export default function RouteAdmin() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/login" component={Login}/>
				<Route path="/sign-in" component={SignIn}/>
				<Route path="/sign-up" component={SignUp}/>
				<Route path="/sign-up-Complete" component={SignUPComplete}/>
				<Route path="/find-id" component={FindId}/>
				<Route path="/find-id-result" component={FindIdResult}/>
				<Route path="/find-id-fail" component={FindIdFail}/>
				<Route path="/find-pw" component={FindPw}/>
				<Route path="/find-pw-result" component={FindPwResult}/>
				<Route path="/find-pw-fail" component={FindPwFail}/>
				<Route path="/" exact component={Links}/>
			</Switch>
		</BrowserRouter>
	);
}