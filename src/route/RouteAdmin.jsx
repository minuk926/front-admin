import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "../pages/sign/Login";
import SignIn from "../pages/sign/SignIn";
import SignUp from "../pages/sign/SignUp";
import NotFound from "../pages/NotFound";
import Links from "./Links";

export default function RouteAdmin() {
	return (
		<BrowserRouter>
			<Links/>
			<Switch>
				<Route path="/login" component={Login}/>
				<Route path="/sign-in" component={SignIn}/>
				<Route path="/sign-up" component={SignUp}/>
				<Route path="/" exact component={Login}/>
				<Route component={NotFound}/>
			</Switch>
		</BrowserRouter>
	);
}