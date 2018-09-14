document.addEventListener('DOMContentLoaded', main(), true);
function main() {
	console.log('Awesome!');
	var wrapper = document.getElementById('wrapper'),
	description = document.createElement('div');
	description.innerHTML = "Hi! Our names is Nikita & Nikita. This is a page about our projects. Please stand by new projects.";
	description.classList.add('description');
	description.setAttribute('id', 'description');
	wrapper.appendChild(description);

	addNightTheme(wrapper);

	function addNightTheme(wrapper) {
		var checkBack = document.createElement('div');
		checkBack.classList.add('checkBackMouseOut');
		checkBack.innerHTML = '&#9789;';
		checkBack.onmouseover = function() {
			var checkBack = event.target;
			checkBack.classList.add('checkBack');
			checkBack.innerHTML = 'Night theme ';

		}
		checkBack.onmouseout = function() {
			var checkBack = event.target;
			checkBack.classList.add('checkBackMouseOut');
			checkBack.innerHTML = '&#9789;';
		}

		
		checkBack.onclick = function() {
			var checkBack = event.target;
				checkBack.classList.toggle('checkBack');
				checkBack.classList.toggle('checkBackNightTheme');


					changeClasses();


					function changeClasses() {
						var mainTitle = document.getElementById('mainTitle'),
						description = document.getElementById('description'),
						wrapper = document.getElementById('wrapper'),
						back = document.getElementById('back');
							
						back.classList.toggle('back');
						back.classList.toggle('nightBack');

						mainTitle.classList.toggle('mainTitle');
						mainTitle.classList.toggle('nightMainTitle');

						wrapper.classList.toggle('wrapper');
						wrapper.classList.toggle('nightWrapper');

						description.classList.toggle('description');
						description.classList.toggle('nightDescription');
					}
			
		}
		wrapper.appendChild(checkBack);
	}
}