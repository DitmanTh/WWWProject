/**
	* FetchModel - Fetch a model from the web server.
	*     url - string - The URL to issue the GET request.
	* Returns: a Promise that should be filled
	* with the response of the GET request parsed
	* as a JSON object and returned in the property
	* named "data" of an object.
	* If the requests has an error the promise should be
	* rejected with an object contain the properties:
	*    status:  The HTTP response status
	*    statusText:  The statusText from the xhr request
	*
*/

function fetchModel(url) {
	return new Promise(function (resolve, reject) {
		//console.log(url);
		//setTimeout(() => reject(new Error({status: 501, statusText: 'Not Implemented'})), 0);
		// On Success return:

		const xhr = new XMLHttpRequest();
		//xhr.addEventListener('load', () => resolve({data: JSON.parse(xhr.response)}));

		xhr.open('GET', 'http://localhost:3001' + url);
		xhr.onload = () => resolve({data: JSON.parse(xhr.responseText)});
		xhr.send();
		// resolve({data: getResponseObject});
	});
}

export default fetchModel;
