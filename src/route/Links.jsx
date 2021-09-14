import {NavLink} from "react-router-dom";

export default function Links(){
	return (

		<body className="m-20 text-left">
		code test area

		<div className="p-10 mb-10 w-full h20 bg-gray-100 hover:bg-gray-200 transition">
			<div className="">sample text</div>
		</div>

		<div className="links flex space-x-0">

			<div className="set">
			<h2>회원</h2>

			<ul >
				<li className=""><NavLink to="/login">Login<span className="tag"><span className="pong1"> </span><span className="pong2"> </span></span><p>로그인</p></NavLink></li>
				<li><NavLink to="/sign-in">Sign-in <p>아이디 로그인<span className="tag"><span className="pong1"> </span><span className="pong2"> </span></span></p></NavLink></li>
				<li><NavLink to="/sign-up">Sign-up <p>회원가입<span className="tag"><span className="pong1"> </span><span className="pong2"> </span></span></p></NavLink></li>

				<li><NavLink to="">name<p>아이디찾기</p></NavLink></li>
				<li><NavLink to="">name<p>회원가입완료</p></NavLink></li>
				<li><NavLink to="">name<p>아이디찾기 결과</p></NavLink></li>
				<li><NavLink to="">name<p>아이디찾기 결과실패</p></NavLink></li>
				<li><NavLink to="">name<p>비밀번호 찾기</p></NavLink></li>
				<li><NavLink to="">name<p>비밀번호 찾기 결과</p></NavLink></li>
				<li><NavLink to="">name<p>비밀번호 찾기 결과실패</p></NavLink></li>
				<li><NavLink to="">name <p>회원정보수정</p></NavLink></li>
			</ul>
			</div>

			<div className="set">
				<h2>title</h2>
				<ul>
					<li><NavLink to="">name <p>title</p></NavLink></li>
				</ul>
			</div>

			<div className="set">
				<h2>title</h2>
				<ul>
					<li><NavLink to="">name <p>title</p></NavLink></li>
				</ul>
			</div>

			<div className="set">
				<h2>title</h2>
				<ul className="links">
					<li><NavLink to="">name <p>title</p></NavLink></li>
				</ul>
			</div>

			<div className="set">
				<h2>title</h2>
				<ul className="links">
					<li><NavLink to="">name <p>title</p></NavLink></li>
				</ul>
			</div>
		</div>

		</body>
	);
}