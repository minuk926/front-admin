import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'
import {useState} from "react";

const SweetAlert = withReactContent(Swal);

/**
 *
 */
axios.interceptors.request.use(function(config) {
	Swal.fire({
		title: 'Please Wait ...',
		//html: '',
		//imageUrl:
		timer: 10000,
		didOpen: () => Swal.showLoading()
	}).then(r=>{})
	return config;
}, error => {
	Swal.close();
	console.log("ERROR :: request loading finished!!!", error);
	return Promise.reject(error);
});

/**
 *
 */
axios.interceptors.response.use(function(response) {
//	Swal.close();
	return Promise.resolve(response);
}, error => {
	Swal.close();
	console.log("ERROR :: response loading finished!!!", error);
	return Promise.reject(error);
});

const fn_cmm = {
	/**
	 *
	 * @param methodType
	 * @param url
	 * @param params
	 * @param headers
	 * @returns {Promise<*>}
	 */
	requestApi: async (methodType, url, params, headers) => {
		console.log(`process.env.NODE_ENV`, process.env.NODE_ENV);
		console.table(params)

		headers = Object.assign({"Content-Type": "application/json;charset=UTF-8"}, headers);  //, "Authorization": session.get('token')};
		let options = {
			url: process.env.NODE_ENV === 'development' ? url : process.env.REACT_APP_API + url,
			method: methodType,
			headers: headers,
			// proxy cors : true, 운영은 false
			withCredentials: process.env.NODE_ENV === 'development',   // 개발시만 사용 : crossdomain
			timeout: 100000
		};
		// get 요청은 body 없이 call
		if(methodType === 'get' || methodType === 'GET') 	options = {...options, params};
		else                                                options = {...options, data: params};

		// 요청 처리
		let res = null;
		try {
			res = await axios(options); //{...config, ...options});//.then(res => {
		} catch (e) {
			console.log(`@@@@@@@@@@@ requestApi EXCEPTION @@@@@@@@@@@@@`);
			await SweetAlert.fire({
				//title: `Error`,
				icon: 'error',
				html: `<p>${e}</p>`,
				footer: 'Copyright 2018',
				timer: 3000
			})
			return e;
		} finally {

		}
		if (res.status === 200 && res.data.success) {
			console.log(JSON.stringify(res.data));
			await SweetAlert.fire({
				title: `Inpix Administrator`,
				html: `처리되었습니다`,
				//footer: 'Copyright 2018',
				timer: 500
			});

		} else {
			console.log(`@@@@@@@@@@@ requestApi ERROR @@@@@@@@@@@@@`);
			let code = res.data.code != null ? `[${res.data.code}]` : "";
			await SweetAlert.fire({
				title: `Inpix Administrator`,
				html: `<p>${res.data.message} ${code}</p>`,
				//footer: 'Copyright 2018',
				timer: 3000
			});
		}
		return res.data;
	},

	/**
	 *
	 * @param defaultValue
	 * @returns {{onChange: onChange, value: unknown}}
	 */
	useInput: (defaultValue = null) => {
		const [value, setValue] = useState(defaultValue);
		const onChange = e => {
			setValue(e.target.value);
		}
		return {value, onChange};
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

	/**
	 *
	 * @param message
	 * @param title
	 * @returns {Promise<SweetAlertResult<any>>}
	 */
	alertMessage: async (message, title = '관리자 시스템') => {
		return await SweetAlert.fire({
			title: `<p>${title}</p>`,
			html: `<p>${message}</p>`,
			footer: 'Copyright 2018',
			timer: 1500
		}).then(r => r);
	},

	confirmMessage: async(message = '진행 하시겠습니까?', title = '관리자 시스템') => {
		return await SweetAlert.fire({
			title: `<p>${title}</p>`,
			html: `<p>${message}</p>`,
			footer: 'Copyright 2021',
			showCancelButton: true,
			confirmButtonText: "예",
			cancelButtonText: "아니오",
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
		}).then(r => r.isConfirmed);
	},


	/**
	 * 현재 URL에서 파라메터 GET
	 * @param name
	 * @returns string
	 */
	getParameterByName: (name) => {
		name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		let regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(window.location.search);
		return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	},

	/**
	 * 현재 URL의 파라메터를 JSON으로 return
	 * @returns {}
	 */
	getQuery: () => {
		let url = document.location.href;
		let qs = url.substring(url.indexOf('?') + 1).split('&');
		let result = {}
		for (let i = 0; i < qs.length; i++) {
			qs[i] = qs[i].split('=');
			result[qs[i][0]] = decodeURIComponent(qs[i][1]);
		}
		return result;
	},

	/**
	 * 현재 URL에서 파라메터 GET
	 * @param name
	 * @returns {string|number|null}
	 */
	urlParam: (name) => {
		//var url = decodeURIComponent(window.location.href);
		let results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
		if (results == null) {
			return null;
		} else {
			return results[1] || 0;
		}
	},



	/**
	 * 현재 URL에서 파라메터 GET
	 * @param paramName
	 * @returns {string}
	 */
	getParameters: (paramName) => {
		// 리턴값을 위한 변수 선언
		let returnValue;

		// 현재 URL 가져오기
		let url = window.location.href;

		// get 파라미터 값을 가져올 수 있는 ? 를 기점으로 slice 한 후 split 으로 나눔
		let parameters = (url.slice(url.indexOf('?') + 1, url.length)).split('&');

		// 나누어진 값의 비교를 통해 paramName 으로 요청된 데이터의 값만 return
		for (let i = 0; i < parameters.length; i++) {
			let varName = parameters[i].split('=')[0];
			if (varName.toUpperCase() === paramName.toUpperCase()) {
				returnValue = parameters[i].split('=')[1];
				return decodeURIComponent(returnValue);
			}
		}
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
