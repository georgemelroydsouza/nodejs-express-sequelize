var config = {
	
	mongoDb: {
		default: 'mongodb://mongodatabase:27017/supadu'
	},
	
	page: {
		start: 0,
		limit: 10
	},
	
	joi: {
		options: {
			abortEarly: false, // include all errors
			allowUnknown: true, // ignore unknown props
			stripUnknown: true // remove unknown props
		}
	},
	
	responseCodes: {
		bad_request: 400,
		success: 200,
		token_gone: 410
	},
	
	validTLD: [ "com", "net", "biz", "co", "uk" ]	// valid top level domains
	
}

module.exports = config;