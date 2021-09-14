import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "../pages/sign/Login";
import SignIn from "../pages/sign/SignIn";
import SignUp from "../pages/sign/SignUp";
import SignUPComplete from "../pages/sign/SignUPComplete";
import NotFound from "../pages/NotFound";
import Links from "./Links";

export default function RouteAdmin() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/login" component={Login}/>
				<Route path="/sign-in" component={SignIn}/>
				<Route path="/sign-up" component={SignUp}/>
				<Route path="/sign-up-Complete" component={SignUPComplete}/>
				<Route path="/" exact component={Links}/>
				<Route component={NotFound}/>
			</Switch>
		</BrowserRouter>
	);
}