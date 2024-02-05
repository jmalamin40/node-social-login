const axios = require('axios');

/**
 *  User facebookLogin.
 *
 * @returns {Object}
 * @param req
 * @param res
 */

exports.facebookLogin = async (accessToken) => {
	try {
		const response = await axios.get(`https://graph.facebook.com/me`, {
			params: {
				access_token: accessToken,
				fields: 'id,cover,name,email,first_name,last_name,age_range,link,gender,locale,picture,timezone,updated_time,verified'
			}
		});
		return response.data;
	} catch (error) {
		return false;
	}
};

/**
 *  User googleLogin.
 *
 * @returns {Object}
 * @param req
 * @param res
 */

exports.googleLogin = async (accessToken) => {
	try {
		const response = await axios.get(`https://www.googleapis.com/oauth2/v3/userinfo`, {
			params: {
				access_token: accessToken
			}
		});
		return response.data;
	} catch (error) {
		return false;
	}
};

/**
 *  User appleLogin.
 *
 * @returns {Object}
 * @param req
 * @param res
 */

exports.appleLogin = async (accessToken) => {
	try {
		const response = await axios.get(`https://appleid.apple.com/auth/userinfo`, {
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		});
		return response.data;
	} catch (error) {
		return false;
	}
};
