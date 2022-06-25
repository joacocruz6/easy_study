const request = (endpoint, config) => {
	let url = [process.env.REACT_APP_BACKEND_URL, endpoint].join("");
	return fetch(url, config);
};

const getRequest = (endpoint, config) => {
	return request(endpoint, config);
};

const postRequest = (endpoint, config, data) => {
	config["method"] = "POST";
	config["body"] = JSON.stringify(data);
	return request(endpoint, config);
};

const postFileRequest = () => {};

const requests = {
	request: request,
	get: getRequest,
	post: postRequest,
	postFile: postFileRequest,
};

export default requests;
