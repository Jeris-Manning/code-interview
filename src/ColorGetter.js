
const COLOR_API_URL = 'http://colormind.io/api/';

export const FetchRandomColors = async (setTheme) => {
	
	const reqOptions = {
		method: 'POST',
		body: JSON.stringify({
			model: 'default',
			// input: [[55, 55, 55], 'N', 'N', 'N', 'N']
		})
	};
	
	const response = await fetch(COLOR_API_URL, reqOptions);
	// console.log('response', response.json());
	
	const json =
		await response.json();
	// hello
	// console.log(json);
	
	const colorArr = json.result;
	
	let colors = {
		// text: `rgb(${colorArr[0]}`,
		// header: '#be3e3e',
		// footer: '#d28a8a',
		// background: '#d59898',
		// button: '#ff0000',
		text: `rgb(${colorArr[0]}`,
		header: `rgb(${colorArr[1]}`,
		footer: `rgb(${colorArr[2]}`,
		background: `rgb(${colorArr[3]}`,
		button: `rgb(${colorArr[4]}`,
		buttonHover: '#ff5151',
		buttonActive: '#a60202',
	};
	
	setTheme({
		colors: colors,
	});
	
};