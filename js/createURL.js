	createWindowsBox();
function createWindowsBox() {
	var wrapper = document.getElementById('wrapper'),
	windowsBox = document.createElement('div'),
	url = document.createElement('a');

	url.setAttribute('href', 'https://free-football.000webhostapp.com/');
	url.setAttribute('target', '_self');
	url.innerHTML = 'кликай сюда';
	windowsBox.classList.add('windowsBox');
	windowsBox.appendChild(url);
	wrapper.appendChild(windowsBox);
	console.log('i""m here' );
}