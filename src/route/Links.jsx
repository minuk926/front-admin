import {NavLink} from "react-router-dom";

export default function Links() {
	return (

		<body className="m-20 text-left">
		code test area

		<div className="p-10 mb-10 w-full bg-gray-100 hover:bg-gray-200 transition">

			<span className="float-left mr-2">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
				</svg>
			</span>

			<div className="">Sample text1 화이팅</div>

		</div>

		<div className="links flex space-x-0">

			<div className="set">
				<h2>회원</h2>

				<ul>
					<li className=""><NavLink to="/login">Login<span className="tag"><span className="pong1"> </span><span className="pong2"> </span></span><p>로그인</p></NavLink>
					</li>
					<li><NavLink to="/sign-in">SignForm<span className="tag"><span className="pong1"> </span><span className="pong2"> </span></span><p>아이디 로그인</p></NavLink></li>
					<li><NavLink to="/join">JoinForm<span className="tag"><span className="pong1"> </span><span className="pong2"> </span></span><p>회원가입</p></NavLink></li>

					<li><NavLink to="/sign-up-complete">SignUPComplete<p>회원가입완료</p></NavLink></li>

					<li><NavLink to="/find-id">FindID<p>아이디찾기</p></NavLink></li>
					<li><NavLink to="/find-id-result">FindID-Result<p>아이디찾기 결과</p></NavLink></li>
					<li><NavLink to="/find-id-fail">FindID-Fail<p>아이디찾기 결과실패</p></NavLink></li>
					<li><NavLink to="/find-pw">FindPW<p>비밀번호 찾기</p></NavLink></li>
					<li><NavLink to="/find-pw-result">FindPW-Result<p>비밀번호 찾기 결과</p></NavLink></li>
					<li><NavLink to="/find-pw-fail">FindPW-Fail<p>비밀번호 찾기 결과실패</p></NavLink></li>

					<li><NavLink to="/member-modify">MemberModify<p>회원정보수정</p></NavLink></li>

				</ul>
			</div>

			<div className="set">
				<h2>게시판</h2>
				<ul>
					<li><NavLink to="/">List <p>List</p></NavLink></li>
					<li><NavLink to="/">View <p>View</p></NavLink></li>
					<li><NavLink to="/">Modify <p>Modify</p></NavLink></li>
					<li><NavLink to="">. <p>.</p></NavLink></li>
					<li><NavLink to="">. <p>.</p></NavLink></li>
				</ul>
			</div>

			<div className="set">
				<h2>title</h2>
				<ul>
					<li><NavLink to="">. <p>.</p></NavLink></li>
				</ul>
			</div>

			<div className="set">
				<h2>title</h2>
				<ul className="links">
					<li><NavLink to="">. <p>.</p></NavLink></li>
				</ul>
			</div>

			<div className="set">
				<h2>title</h2>
				<ul className="links">
					<li><NavLink to="">. <p>.</p></NavLink></li>
				</ul>
			</div>
		</div>

		</body>
	);
}