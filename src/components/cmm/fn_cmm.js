import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'
import {useCallback, useEffect, useState} from "react";

const SweetAlert = withReactContent(Swal);

axios.interceptors.request.use(function(config) {

	Swal.fire({
		title: '<img src="/images/roll.gif" style="object-fit: contain; margin-right: 10px;">데이터 수신중<style>.swal2-popup{width: 220px!important; height: 69px!important;    min-height: auto!important;    width: 340px!important;-webkit-box-shadow: 0px 0px 10px -2px rgba(0,0,0,0.75);-moz-box-shadow: 0px 0px 10px -2px rgba(0,0,0,0.75);box-shadow: 0px 0px 10px -2px rgba(0,0,0,0.75);}</style>',
		showConfirmButton: false,
		allowOutsideClick: false
	});
	return config;
}, function(error) {
	Swal.close();
	console.log("ERROR :: request loading finished!!!");
	return Promise.reject(error);
});

axios.interceptors.response.use(function(response) {
	Swal.close({});
	return Promise.resolve(response);
}, function(error) {
	Swal.close();
	console.log("ERROR :: response loading finished!!!", error);
	return Promise.reject(error);
});

const fn_cmm = {
	requestApi: async (method, url, data, callback, headers) => {
		headers = Object.assign({"Content-Type": "application/json;charset=UTF-8"}, headers);  //, "Authorization": session.get('token')};
		console.log(`process.env.NODE_ENV`, process.env.NODE_ENV);
		try {
			const res = await axios({
				// package.json 의 proxy 설정시 도메인을 제외해야만 proxy 적용됨
				url: process.env.NODE_ENV === 'development' ? url : process.env.REACT_APP_API + url,
				method,
				data,
				headers,
				// proxy cors : true, 운영은 false
				withCredentials: process.env.NODE_ENV === 'development',   // 개발시만 사용 : crossdomain
			});
			if (res.status === 200 && res.data.success) {
				console.log(JSON.stringify(res.data));
				callback(res.data);
			} else {
				console.log(`@@@@@@@@@@@ ERROR @@@@@@@@@@@@@`);
				alert(`Error:${res.data.message}res.data.code?[${res.data.code}]:''`);
				callback(res.data);
			}
		} catch (e) {
			console.log(`@@@@@@@@@@@ EXCEPTION ERROR @@@@@@@@@@@@@`);
			alert(e)
			callback(e);

		} finally {

		}
	},


	// RequestApi: (method, url, data, callback, headers) => {
	// 	const [payload, setPayload] = useState(null);
	// 	const [loading, setLoading] = useState(true);
	// 	const [error, setError] = useState("");
	//
	// 	const CallUrl = async () => {
	// 		try {
	// 			headers = Object.assign({"Content-Type": "application/json;charset=UTF-8"}, headers);  //, "Authorization": session.get('token')};
	// 			console.log(`process.env.NODE_ENV`, process.env.NODE_ENV);
	// 			const {res} = await axios({
	// 				// package.json 의 proxy 설정시 도메인을 제외해야만 proxy 적용됨
	// 				url: process.env.NODE_ENV === 'development' ? url : process.env.REACT_APP_API + url,
	// 				method,
	// 				data,
	// 				headers,
	// 				// proxy cors : true, 운영은 false
	// 				withCredentials: process.env.NODE_ENV === 'development',   // 개발시만 사용 : crossdomain
	// 			});
	// 			if (res.status === 200 && res.data.success) {
	// 				console.log(JSON.stringify(res.data));
	// 				callback(setPayload(res.data));
	// 			} else {
	// 				console.log(`@@@@@@@@@@@ ERROR @@@@@@@@@@@@@`);
	// 				alert(`Error:${res.data.message}res.data.code?[${res.data.code}]:''`);
	// 				callback(res.data);
	// 			}
	// 			setPayload(res);
	//
	// 		} catch (e) {
	// 			console.log(`@@@@@@@@@@@ EXCEPTION ERROR @@@@@@@@@@@@@`);
	// 			alert(e)
	// 			setError(e);
	// 		} finally {
	// 			setLoading(false);
	// 		}
	// 	}
	// 	useEffect(() => {
	// 		const {payload, loading, error} = CallUrl();
	// 		//CallUrl();
	// 	}, [])
	// 	//return {payload, loading, error};
	//
	// },

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

	alertMessage: async (message, title = '관리자 시스템') => {
		return await SweetAlert.fire({
			title: `<p>${title}</p>`,
			html: `<p>${message}</p>`,
			footer: 'Copyright 2018',
			timer: 1500
		}).then(res => res)
	},

	confirmMessage: async(message = '진행 하시겠습니까?', title = '관리자 시스템') => {
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
