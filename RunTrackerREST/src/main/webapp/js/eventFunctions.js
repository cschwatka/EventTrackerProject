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
	});

	document.createRunForm.create.addEventListener('click', createRun);

	document.getElementById("showRuns").addEventListener("click", getAllRuns);
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

function getAllRuns() {

	let xhr = new XMLHttpRequest();

	xhr.open('GET', 'api/runs');

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				// request completed successfully
				console.log(xhr.responseText);
				let runs = JSON.parse(xhr.responseText);
				displayRuns(runs);
			}
		}
		else {
			console.error('Request failed: ' + xhr.status);
		}

	};
	xhr.send();
}


function createRun(e) {
	e.preventDefault();

	let run = {
		startTime: document.createRunForm.startTime.value,
		endTime: document.createRunForm.endTime.value,
		name: document.createRunForm.name.value,
		distance: document.createRunForm.distance.value,
		heartRate: document.createRunForm.heartRate.value,
		coloriesBurned: document.createRunForm.coloriesBurned.value,
		comments: document.createRunForm.comments.value
	};
	console.log(run);

	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/runs');
	xhr.setRequestHeader("Content-type", "application/json");

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) { // Ok or Created
				let data = JSON.parse(xhr.responseText);
				console.log(data);
				// displayRun(data);
				getAllRuns();
			}
			else {
				console.error("POST request failed.");
				console.error(xhr.status + ': ' + xhr.responseText);
			}
		}
	};

	xhr.send(JSON.stringify(run));
	
	
}


function editRun(run) {

	let updateForm = document.createRunForm;

	document.getElementById("runFormHeader").textContent = "Update Run: " + run.id;
	let createRunButtonDiv = document.getElementById("createRunButtonDiv");
	let createRunButton = document.getElementById("createRunButton");

	let updateRunButton = document.createElement('button');
	let message = document.createElement('blockquote');


	updateRunButton.className = "ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";
	updateRunButton.textContent = "Update Run"

	createRunButtonDiv.removeChild(createRunButton);
	createRunButtonDiv.appendChild(updateRunButton);



	updateForm.startTime.value = run.startTime;
	updateForm.endTime.value = run.endTime;
	updateForm.name.value = run.name;
	updateForm.distance.value = run.distance;

	if (run.heartRate !== null && run.heartRate !== undefined) {
		updateForm.heartRate.value = run.heartRate;
	}

	if (run.caloriesBurned !== null && run.caloriesBurned !== undefined) {
		updateForm.caloriesBurned.value = run.caloriesBurned;
	}

	

	
	let runId = run.id;
	
	updateRunButton.addEventListener("click", function(e) {
			e.preventDefault();
			putRun(runId);

		});

}

function putRun(runId) {
	
	let runToUpdate = {
		// id: run.id,
		name: document.createRunForm.name.value,
		startTime: document.createRunForm.startTime.value,
		endTime: document.createRunForm.endTime.value,
		distance: document.createRunForm.distance.value,
		heartRate: document.createRunForm.heartRate.value,
		coloriesBurned: document.createRunForm.coloriesBurned.value,
		comments: document.createRunForm.comments.value
	};
	
	console.log(runToUpdate);
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/runs/' + runId);
	xhr.setRequestHeader("Content-type", "application/json");
	console.log(runToUpdate);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) { // Ok or Created
				let data = JSON.parse(xhr.responseText);
				console.log(data);
				getAllRuns();
			}
			else {
				console.error("PUT request failed.");
				console.error(xhr.status + ': ' + xhr.responseText);
			}
		}
	}
	console.log(runToUpdate);
	xhr.send(JSON.stringify(runToUpdate));
	

}



function displayRuns(runs) {
	let runTbody = document.getElementById('runTable');
	runTbody.textContent = ''; // reset the table content

	runs.forEach(function(run) {
		let row = document.createElement('tr');
		let id = document.createElement('td');
		let name = document.createElement('td');
		let startTime = document.createElement('td');
		let endTime = document.createElement('td');
		let distance = document.createElement('td');
		// let caloriesBurned = document.createElement('td');
		let actionTd = document.createElement('td');
		let action = document.createElement('a');
		let deleteTd = document.createElement('td');
		let deleteRunLink = document.createElement('a');

		let linkText = document.createTextNode("Edit");
		action.appendChild(linkText);
		action.title = "Edit";
		action.id = "editLink";

		let deleteText = document.createTextNode("Delete");
		deleteRunLink.appendChild(deleteText);
		deleteRunLink.title = "Delete";
		deleteRunLink.id = "deleteLink";


		id.textContent = run.id;
		name.textContent = run.name;
		startTime.textContent = run.startTime;
		endTime.textContent = run.endTime;
		distance.textContent = run.distance;
		// caloriesBurned.textContent = run.caloriesBurned;
		actionTd.appendChild(action);
		deleteTd.appendChild(deleteRunLink);


		id.className = "whitespace-nowrap px-2 py-2 text-sm text-gray-500";
		name.className = "whitespace-nowrap px-2 py-2 text-sm text-gray-500";
		startTime.className = "whitespace-nowrap px-2 py-2 text-sm text-gray-500";
		endTime.className = "whitespace-nowrap px-2 py-2 text-sm text-gray-500";
		distance.className = "whitespace-nowrap px-2 py-2 text-sm text-gray-500";
		// caloriesBurned.className = "whitespace-nowrap px-2 py-2 text-sm text-gray-500";
		action.className = "text-indigo-600 hover:text-indigo-900";
		deleteRunLink.className = "text-red-600 hover:text-red-900";

		row.appendChild(id);
		row.appendChild(name);
		row.appendChild(startTime);
		row.appendChild(endTime);
		row.appendChild(distance);
		// row.appendChild(caloriesBurned);
		row.appendChild(actionTd);
		row.appendChild(deleteTd);
		runTbody.appendChild(row);

		action.addEventListener("click", function(e) {
			e.preventDefault();
			editRun(run);

		});
		
		deleteRunLink.addEventListener("click", function(e) {
			e.preventDefault();
			let runIdtoDelete = run.id;
			deleteRun(runIdtoDelete);

		});

	})

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


	let distance = document.createElement('li');
	distance.textContent = run.distance;
	ul.appendChild(distance);

	let startTime = document.createElement('li');
	startTime.textContent = run.startTime;
	ul.appendChild(startTime);

	dataDiv.appendChild(ul);

	let endTime = document.createElement('li');
	endTime.textContent = run.endTime;
	ul.appendChild(endTime);

	let heartRate = document.createElement('li');
	heartRate.textContent = run.heartRate;
	ul.appendChild(heartRate);

	let caloriesBurned = document.createElement('li');
	caloriesBurned.textContent = run.caloriesBurned;
	ul.appendChild(caloriesBurned);

	dataDiv.appendChild(ul);

}

function deleteRun(runIdtoDelete) {

	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/runs/' + runIdtoDelete);

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) { // Ok or Created
				let data = JSON.parse(xhr.responseText);
				console.log(data);
				displayRun(data);
			}
			else {
				console.error("DELETE request failed.");
				console.error(xhr.status + ': ' + xhr.responseText);
			}
		}
	};

	xhr.send();
	
}
	

