const Joi = require("joi");

const validateEmail = (email) => {
	const schema = Joi.string().email().required();
	return schema.validate(email);
};

const validatePhoneNumber = (phoneNumber) => {
	const schema = Joi.string()
		.pattern(/^\+(?:[0-9] ?){6,14}[0-9]$/)
		.required();
	return schema.validate(phoneNumber);
};

const validatePassword = (password) => {
	const schema = Joi.string().min(8).required();
	return schema.validate(password);
};

module.exports = {
	validateEmail,
	validatePhoneNumber,
	validatePassword,
};
