import {NavLink} from "react-router-dom";

export default function Links(){
	return (
		<ul>
			<li><NavLink to="/login">Login</NavLink></li>
			<li><NavLink to="/sign-in">Sign-in</NavLink></li>
			<li><NavLink to="/sign-up">Sign-up</NavLink></li>
		</ul>
	);
}