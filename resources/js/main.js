let project_iframe;

/*
 * Add here a key value pair for you project name and the url to that projects index.html page
 */
let PROJECT_LIST_LINKS = {
	'Three.js': 'https://threejs.org/',
	'Project-1': './Projects/Project-1/index.html'
};

function setIframeUrl(url) {
	project_iframe = document.getElementById('project-shower-iframe');
	project_iframe.src = url;
}

function addProjectsToNavbar() {
	project_nav_list = document.getElementById('project_nav_list');
	for (let project_name in PROJECT_LIST_LINKS) {
		if (PROJECT_LIST_LINKS.hasOwnProperty(project_name)) {
			console.log(project_name + ' -> ' + PROJECT_LIST_LINKS[project_name]);
			let project_url = PROJECT_LIST_LINKS[project_name];
			let list_element = getListElement(project_name, project_url);
			project_nav_list.innerHTML += list_element;
		}
	}
}

function getListElement(project_name, project_url) {
	return '<li onclick="setIframeUrl(this.dataset.iframe_url)" data-iframe_url="' + project_url + '">' + project_name + '</li>';
}

document.addEventListener('DOMContentLoaded', function() {
	console.log('Your document is ready!');
	console.log('Starting addProjectsToNavbar()...');
	addProjectsToNavbar();
});
