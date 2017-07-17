# How to contribute to this repository
Create a fork of this repository and check it out. 

To make everything work you need to symlink the src directory to the app folder once. You can do this manually or by running `npm run link-mod`. 

Once this is done you can run `npm start` to start the development server.

If you implement a new feature it is always a good idea to also add an example of it to the demo application.

## Commit guidelines
In general this repo tries to adhere to the [angular commit guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit).

## Dev tasks
There are several scripts defined in the package.json

`npm start`: Starts the development server.

`npm run` **test-watch**: Runs the unit tests via karma.

`npm run` **test**: Runs the unit tests once.

`npm run` **test-coverage**: Runs the unit tests with a coverage report.

`npm run` **build**: Creates a compiled version of your library inside the dist folder.

`npm run` **demo.deploy**: 
Builds the demo app to demo/dist, copies the readme to it and publishes everything to github pages.
 
`npm run` **release.changelog**:
Creates a changelog based on the [angular commit conventions](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md).  
 
`npm run` **link-mod**: Creates a symlink to the module inside the demo/src folder. This is required for compiling the app with aot.
 
`npm run` **lint**: Lints all demo and library files
 
`npm run` **e2e**: Runs the end2end tests.