import {useHistory} from "react-router-dom";
import {LockClosedIcon} from '@heroicons/react/solid';
import cmm from "components/cmm/fn_cmm";


import adminUrl from "components/cmm/admin_url";
import {useState} from "react";

export default function SignForm() {
	let history = useHistory();
console.log(history)
	const [userId, setUserId] = useState();
	const [userPswd, setUserPswd] = useState();

	function goJoin(e) {
		e.preventDefault();
		history.push('/join');
	}

	function login(e) {
		e.preventDefault();
		//e.stopPropagation();



		/*
		id저장 사용시
				cmm.setCookie("userid", "minuk926", 10);

				let savedId = cmm.getCookie("userid");
				const id = savedId? savedId : document.querySelector('#id').value;
				const password = document.querySelector('#password');

				if(savedId){
					document.querySelector('#id').value = savedId;
					cmm.setCookie("userid", id, 365);
				}
				// // id저장이 체크된 경우
				// // if ($("#chkId").is(":checked")) {
				// // 	document.cookie("userid", savedId, {"expires" : 365});
				// // } else {
				// // 	document.cookie = ;
				// // }
		*/
		// userId
		const regExpId = /^[0-9a-zA-Z@]{6,20}$/;

		// 비밀번호 규칙 정규식
		// : 숫자, 특문, 영문 각 1개 이상 사용하여 8자리 이상 입력
		const regExpPw = /^[0-9a-zA-Z~`!@#$%\^&*()-+=]{6,20}$/;

		if(!userId || !regExpId.test(userId)){
			cmm.alertMessage('id를 확인해 주세요.', '로그인')
				.then();
			document.querySelector('#userId').focus();
			return false;
		}
//return false;

		if(!userPswd || !regExpPw.test(userPswd)){
			cmm.alertMessage('비밀번호를 확인해 주세요.', '로그인')
				.then();
			document.querySelector('#userPswd').focus();
			return false;
		}

		cmm.requestApi(
			'post',
			adminUrl.LOGIN,
			{
				userId: userId,
				userPswd: userPswd
			},
			res => {
				alert(JSON.stringify(res));
				if(res.success){
					console.log(JSON.stringify(res));
					alert(`로그인완료`);
					history.push('/admin');
				}
			}
		).then()
	}

	return (

		<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<div>
					<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
						아이디 로그인
					</h2>
					<p className="mt-2 text-center text-sm text-gray-600">
						아이디와 패스워드를 입력하세요.
					</p>
				</div>
				<form id="frmLogin" className="mt-8 space-y-6">
					<input type="hidden" name="remember" defaultValue="true"/>
					<div className="rounded-md shadow-sm -space-y-px">
						<div>
							<label htmlFor="userId" className="sr-only">아이디</label>
							<input id="userId" name="userId" onChange={e=>setUserId(e.target.value)} value={userId} required
								   className="input-login w-full rounded-t-md"
								   placeholder="아이디"/>

						</div>
						<div>
							<label htmlFor="userPswd" className="sr-only">패스워드</label>
							<input id="userPswd" name="userPswd" type="password" onChange={e=>setUserPswd(e.target.value)} value={userPswd} required
								   className="input-login w-full rounded-b-md"
								   placeholder="패스워드"/>
						</div>
					</div>

					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<input id="remember-me" name="remember-me" type="checkbox" className="h-6 w-6 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
							<label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
								자동 로그인
							</label>
						</div>

						<div className="text-sm">
							<a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline">
								비밀번호 찾기
							</a>
						</div>
					</div>

					<div>
						<button onClick={login}
								className="bt-indigo group w-full flex">
							  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
								<LockClosedIcon className="h-6 w-6 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
							  </span>
							로그인
						</button>
					</div>

				</form>
				<div>

					<p className="mt-2 text-center text-sm text-gray-600">
						아직 계정이 없으신가요? <a href="#" onClick={goJoin} className="font-bold text-indigo-600 hover:text-indigo-500 hover:underline ">회원가입하기</a>
					</p>
				</div>
			</div>
		</div>
	)
}