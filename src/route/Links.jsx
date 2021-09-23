import {NavLink} from "react-router-dom";

export default function Links() {
	return (

		<body className="m-20 text-left">


		<div className="links flex space-x-0">

			<div className="set">
				<h2>회원</h2>

				<ul>
					<li className=""><NavLink to="/login">Login<span className="tag"><span className="pong1"> </span><span className="pong2"> </span></span><p>로그인</p></NavLink>
					</li>
					<li><NavLink to="/sign-in">SignForm<span className="tag"><span className="pong1"> </span><span className="pong2"> </span></span><p>아이디 로그인</p></NavLink></li>
					<li><NavLink to="/join">JoinForm<span className="tag"><span className="pong1"> </span><span className="pong2"> </span></span><p>회원가입</p></NavLink></li>

					<li><NavLink to="/sign-up-complete">SignUPComplete<span className="tag"><span className="pong1"> </span><span className="pong2"> </span></span><p>회원가입완료</p></NavLink></li>

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
				<h2>관리자</h2>
				<ul className="links">
					<li><NavLink to="/admin">Admin <p>관리자</p></NavLink></li>
					<li><NavLink to="/admin-member-list">AdminMemberList<p>회원관리 List</p></NavLink></li>
					<li><NavLink to="/list">List <p>List</p></NavLink></li>
					<li><NavLink to="/view">View <p>View</p></NavLink></li>
					<li><NavLink to="/modify">Modify <p>Modify</p></NavLink></li>
				</ul>
			</div>
		</div>

		</body>
	);
}