import {NavLink, Router, useHistory} from "react-router-dom";

import SignIn from "../pages/sign/SignIn";
import axios from "axios";

const sign = {
	login(e) {
		e.preventDefault();
		e.stopPropagation();
		/*
		id저장 사용시
				this.setCookie("userid", "minuk926", 10);

				let savedId = this.getCookie("userid");
				const id = savedId? savedId : document.querySelector('#id').value;
				const password = document.querySelector('#password');

				if(savedId){
					document.querySelector('#id').value = savedId;
					this.setCookie("userid", id, 365);
				}
				// // id저장이 체크된 경우
				// // if ($("#chkId").is(":checked")) {
				// // 	document.cookie("userid", savedId, {"expires" : 365});
				// // } else {
				// // 	document.cookie = ;
				// // }
		*/
		const id = document.querySelector('#id').value;
		const password = document.querySelector('#password').value;

		// 숫자, 영문만 입력 가능
		const regExpId = /^[0-9a-z]{5,20}$/;

        // 비밀번호 규칙 정규식
        // : 숫자, 특문, 영문 각 1개 이상 사용하여 8자리 이상 입력
		const regExpPw = /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{1,50}).{8,50}$/;

        // 이메일주소 형식 체크 정규식
		const regExpEm = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

		if(!regExpId.test(id)){
			alert(`id를 다시 입력해 주세요[숫자, 영문, 5자리 이상]`);
			return false;
		}

		if(!regExpPw.test(password)){
			alert(`비밀번호를 다시 입력해 주세요[숫자, 특문, 영문 각 1개 이상 사용, 8자리 이상]`);
			return false;
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


		axios.get(
			//'http://localhost:8090/',
			'./db.json',
			{
				userId: id,
				userPwd: password
			},

			//{header:''}
		).then(res => {
			console.log(res);
		}).catch(e => {
			console.log(e.response);
			console.log(e.request);
		})

	},
	idLogin: () => {
		window.location.href = "/sign-in";
	},

	googleLogin: () => {
		alert('googleLogin(추후 지원 예정)');
	},

	kakaoLogin: () => {
		alert('kakaoLogin(추후 지원 예정)');
	},

	join: (e) => {
		e.preventDefault();
		window.location.href = "/sign-up";
	},

	/**
	 * Returns a cookie value if a name is specified. Otherwise returns the entire cookies as an object
	 * @param [name] - The name of the cookie to fetch the value for. Returns the entire map of cookies if not specified
	 * @returns {string|Object} - The value of the cookie specified by `name` if specified. Otherwise returns a name value map of the available cookies
	 */
	getCookie: (name) => {
		const cookies = document.cookie.split(';')
			.reduce((acc, cookieString) => {
				const [key, value] = cookieString.split('=').map(s => s.trim());
				if (key && value) {
					acc[key] = decodeURIComponent(value);
				}
				return acc;
			}, {});
		return name ? cookies[name] || '' : cookies;
	},

	/**
	 *
	 * @param name - The name of the cookie to be set
	 * @param value - The value of the cookie
	 * @param options - supports any cookie option like path, expires, maxAge and domain. [MDN Cookie Reference](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie)
	 */
	removeCookie: (name, value) => {
		document.cookie = `${name}=${encodeURIComponent(value)}${
			{expires: "Sun, 01-May-2019 14:00:00 GMT"}
		}`;
	},

	/**
	 *
	 * @param name - The name of the cookie to be set
	 * @param value - The value of the cookie
	 * @param expiredays - supports any cookie option like path, expires, maxAge and domain. [MDN Cookie Reference](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie)
	 */
	setCookie: (name, value, expiredays) => {
		let todayDate = new Date();
		todayDate.setTime (todayDate.getTime() + (expiredays*24*60*60*1000));
		let expired = todayDate.toGMTString();
		document.cookie = `${name} = ${escape(value)}; expires = ${expired}; path=/`;
	},

}

export default sign;

//debugger;
// const btnIdLogin = document.querySelector('#btnIdLogin');
// btnIdLogin.addEventListener('click', () => document.location = 'sign-in.html');
//
// const btnGoogleLogin = document.querySelector('#btnGoogleLogin');
// btnGoogleLogin.addEventListener('click', sign.googleLogin);
//
// const btnKakaoLogin = document.querySelector('#btnKakaoLogin');
// btnKakaoLogin.addEventListener('click', sign.kakaoLogin);

// const btnLogin = document.querySelector('#btnLogin');
// btnLogin.addEventListener('click', sign.login);

