const fn_cmm = {
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
	 * @param days - supports any cookie option like path, expires, maxAge and domain. [MDN Cookie Reference](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie)
	 */
	setCookie: (name, value, days) => {
		let expiredDate = new Date();
		if(expiredDate) {
			document.cookie = `${name}=${encodeURIComponent(value)}${
				{expires: expiredDate.setDate(expiredDate.getDate() + days).toUTCString()}
			}`;
		}else{
			document.cookie = `${name}=${encodeURIComponent(value)}`
		}
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
