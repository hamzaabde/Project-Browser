const add = document.querySelector('#add'),
	  remove = document.querySelector('#remove');

// listen for click event
add.addEventListener('click', addProject);

// declare add function
function addProject() {
	let projectTitle = prompt('Please! Enter the Project Title');
	let projectInfo = prompt('Enter a discription for the project');
	let projectLink = prompt('Enter the link for the project');

	function Project(title, link, info) {
		this.title = title;
		this.link = link;
		this.info = info;
	}

	let newProject = new Project(projectTitle, projectLink, projectInfo);

	console.log(newProject);
}
