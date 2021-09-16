import {useHistory} from "react-router-dom";
import axios from "axios";
import {LockClosedIcon} from '@heroicons/react/solid'


import adminUrl from "components/cmm/admin_url";
import {useState} from "react";

export default function SignForm() {
	let history = useHistory();

	const [userId, setUserId] = useState();
	const [userPassword, setUserPassword] = useState();

	function onChangeUserId(e) {
		setUserId(e.target.value);
	}

	function onChangeUserPassword(e) {
		setUserPassword(e.target.value);
	}

	function goJoin(e) {
		e.preventDefault();
		history.push('/join');
	}

	function login(e) {
		e.preventDefault();
		e.stopPropagation();



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
		// 숫자, 영문만 입력 가능
		const regExpId = /^[0-9a-z]{5,20}$/;

		// 비밀번호 규칙 정규식
		// : 숫자, 특문, 영문 각 1개 이상 사용하여 8자리 이상 입력
		const regExpPw = /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{1,50}).{8,50}$/;

		// 이메일주소 형식 체크 정규식
		const regExpEm = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

		if(!regExpId.test(userId)){
			alert(`id를 다시 입력해 주세요[숫자, 영문, 5자리 이상]`);
			//	return false;
		}

		if(!regExpPw.test(userPassword)){
			alert(`비밀번호를 다시 입력해 주세요[숫자, 특문, 영문 각 1개 이상 사용, 8자리 이상]`);
			//	return false;
		}



		//
		// let form = document.querySelector("#frmLogin");
		// form.action = url;
		// form.method = 'POST';
		// form.target = "_self";
		// if (data) {
		// 	for (var key in data) {
		// 		var input = document.createElement("textarea");
		// 		input.name = key;
		// 		input.value = typeof data[key] === "object"
		// 			? JSON.stringify(data[key])
		// 			: data[key];
		// 		form.appendChild(input);
		// 	}
		// }
		// form.style.display = 'none';
		// document.body.appendChild(form);
		// form.submit();


		axios.post(
			adminUrl.LOGIN,
			{
				userId: userId,
				userPswd: userPassword
			}

		// 	{header:''}
		//axios.get('http://localhost:8090/api/auth/login')
		).then(res => {
				alert(JSON.stringify(res.data[0]));
				//history.push()
			}).catch(e => {
			alert(e)
			console.log(e.response);
			console.log(e.request);
		})

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
							<input id="userId" name="userId" onChange={onChangeUserId} value={userId} required
								   className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								   placeholder="아이디"/>

						</div>
						<div>
							<label htmlFor="userPwsd" className="sr-only">패스워드</label>
							<input id="userPwsd" name="userPwsd" type="password" onChange={onChangeUserPassword} value={userPassword} required
								   className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
								className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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