# CG-Project-Viewer
CG-Project-Viewer is a simple webpage where you can add all the stuff that you do during the Computer Graphics course.

### How to use it
    1. Clone the repository
    2. Move your projects inside the repository folders *"Labs/"*, *"Projects/"* or *"Tests/"*
    3. Do the step "How to add projects to the webpage" mentioned below

### How to add projects to the webpage
Open the file *resources/js/main.js*. Inside this file, you want to add as a key-value pair ("PROJECT_NAME": "URL_TO_PROJECT_PAGE") to the element "PROJECT_LIST_LINKS".

#### Example
If you have a project with an index.html-file and it is located here: *"CG/CG-Project-Viewer/Projects/Project_1/index.html"*. Then you can change the element "PROJECT_LIST_LINKS" in main.js in the following way:

```
let PROJECT_LIST_LINKS = {
	'Project 1': './Projects/Project_1/index.html'
};
```

After this, reload the page and everything works!

### Note
This project ignores the files under the folders "Labs/", "Projects/" and "Tests/" so feel free to add your own projects there :)
