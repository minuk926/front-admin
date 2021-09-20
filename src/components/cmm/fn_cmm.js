import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'

const SweetAlert = withReactContent(Swal);

const fn_cmm = {
	requestApi: async (method, url, data, callback, headers) => {
		headers = Object.assign({"Content-Type": "application/json;charset=UTF-8"}, headers);  //, "Authorization": session.get('token')};

		try {
			const res = await axios({
					url: process.env.REACT_APP_API+url,
				    method,
					data,
				    headers,
				    withCredentials: process.env.NODE_ENV === 'development',   // 개발시만 사용 : crossdomain
				}
			);
			if(res.status === 200 && res.data.success){
				console.log(JSON.stringify(res.data));
				callback(res.data);
			}else{
				console.log(`@@@@@@@@@@@ ERROR @@@@@@@@@@@@@`);
				alert(`Error:${res.data.message}res.data.code?[${res.data.code}]:''`);
				callback(res.data);
			}
		}catch(e){
			console.log(`@@@@@@@@@@@ EXCEPTION ERROR @@@@@@@@@@@@@`);
			alert(e)
			callback(e);
		}
	},

	/**
	 * form 데이타를 JSON 으로 return
	 * @param frm
	 * @returns {string}
	 */
	getJsonFromForm: (frm) => {
		let formData = new FormData(frm), result = {};

		for (let entry of formData.entries()) {
			result[entry[0]] = entry[1];
		}
		return JSON.stringify(result)
	},

	alertMessage: async (message, title = '관리자 시스템') => {
		return await SweetAlert.fire({
			title: `<p>${title}</p>`,
			html: `<p>${message}</p>`,
			footer: 'Copyright 2018',
			timer: 1500
		}).then(res => res)
	},

	confirmMessage: async(title = '', message = '진행 하시겠습니까?', callback) => {
		return await SweetAlert.fire({
			title: `<p>${title}</p>`,
			html: `<p>${message}</p>`,
			footer: 'Copyright 2021',
			showCancelButton: true,
			confirmButtonText: "예",
			cancelButtonText: "아니오",
		}).then(res => res.isConfirmed);
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
	 * @param expiredays - supports any cookie option like path, expires, maxAge and domain. [MDN Cookie Reference](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie)
	 */
	setCookie: (name, value, expiredays) => {
		let todayDate = new Date();
		todayDate.setTime (todayDate.getTime() + (expiredays*24*60*60*1000));
		let expired = todayDate.toGMTString();
		document.cookie = `${name} = ${escape(value)}; expires = ${expired}; path=/`;
	},

	/**
	 *
	 * @param name - The name of the cookie to be set
	 * @param value - The value of the cookie
	 * @param options - supports any cookie option like path, expires, maxAge and domain. [MDN Cookie Reference](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie)
	 */
	removeCookie: (name, value) => {
		document.cookie = `${name}=${encodeURIComponent(value)}${
			{expires: "Sun, 01-May-2019 14:00:00 UTC"}
		}`;
	},

	// setCookie: (name, value, expiredays) => {
	// 	let todayDate = new Date();
	// 	todayDate.setDate (todayDate.getDate() + expiredays);
	// 	document.cookie = `${name} = ${escape(value)}; path=/; expires = ${todayDate.toGMTString()};`;
	// },
	// getCookie: (name) => {
	// 	let nameOfCookie = name + "=";
	// 	let x = 0;
	// 	while (x <= document.cookie.length){
	// 		let y = (x + nameOfCookie.length);
	// 		if (document.cookie.substring(x, y) == nameOfCookie){
	// 			if ((endOfCookie = document.cookie.indexOf(";", y)) == -1){
	// 				endOfCookie = document.cookie.length;
	// 			}
	// 			return unescape (document.cookie.substring(y, endOfCookie));
	// 		}
	// 		x = document.cookie.indexOf (" ", x) + 1;
	// 		if (x == 0) break;
	// 	}
	// 	return "";
	// }
}

export default fn_cmm;
