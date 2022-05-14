window.addEventListener('load', function(e) {
	console.log('document loaded');
	init();
});

function init() {
	document.runForm.lookup.addEventListener('click', function(event) {
		event.preventDefault();
		let runId = document.runForm.runId.value;
		if (!isNaN(runId) && runId > 0) {
			getRun(runId);
		}
	})
}

function getRun(runId) {

	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/runs/' + runId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let run = JSON.parse(xhr.responseText);
				console.log(run);
				displayRun(run);
			} else {
				console.log('Run not found.')
			}
		}
	};
	xhr.send();
}


function displayRun(run) {
	let dataDiv = document.getElementById('runData');
	dataDiv.textContent = ''; // resets the div content
	// TODO:
	// * Create and append elements to the data div to display:
	let h1 = document.createElement('h1');
	h1.textContent = run.name;
	dataDiv.appendChild(h1);

	let bq = document.createElement('blockquote');
	bq.textContent = run.comments;
	dataDiv.appendChild(bq);
	// * Film title (h1) and description (blockquote).
	// * Rating, release year, and length as an unordered list.

	let ul = document.createElement('ul');
	
	let date = document.createElement('li');
	date.textContent = run.date;
	ul.appendChild(date);

	let distance = document.createElement('li');
	distance.textContent = run.distance;
	ul.appendChild(distance);

	let startTime = document.createElement('li');
	startTime.textContent = run.startTime;
	ul.appendChild(startTime);
	
	dataDiv.appendChild(ul);

}

