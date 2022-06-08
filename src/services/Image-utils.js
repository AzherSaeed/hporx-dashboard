// setting form data
export function setFormData(imgFiles, data) {

	console.log('this is form data receieved' ,imgFiles, data );

	const formData = new FormData();
	Object.keys(imgFiles).forEach(key => {
		if (imgFiles[key] !== null) {
			formData.append(key, imgFiles[key]);
		}
	});
	Object.keys(data).forEach(key => formData.append(key, data[key]));
	return formData;
}

export function setOnlyFieldFormData(data) {
	const formData = new FormData();
	Object.keys(data).forEach(key => formData.append(key, data[key]));
	return formData;
}