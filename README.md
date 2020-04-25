# nlp
Natural launguage processing app

* Architecture

- Project has a structure like the one in the lessons (src folder contains client and server folders).
- All files shown are present and the app successfully renders a home page when started via an npm command like ‘npm run start’

* Other requirements:

- the Readme file has non-default text in it that is specific to this project. 

- the git ignore file contains both the node_modules and dist folders. 

* Configs

- Both webpack config files are present and set up similar to the course for development and production.

- A build script runs successfully with no errors and generate a dist folder

- project has working dev mode
- webpack dev server is set up and that they have an npm script that starts the server

* Content

- Only one html file is present and it is stired at src/views/. It contains valid semantic html

- There are 2 javascript files in the src/js folder. All files in the js folder are found by webpack.

- There is scss folder. The header, footer, form, and main files are added to by the student, similar to the course.

* Functionality

* API

- The app makes a successful call to the api on form submission. If this is successful, the api keys and response handling is done correctly.
- api keys are stored in .env file, it included in git for reviewer's comfort and will be emitted at public rollout
- Information from the api response shows up in the view

* Offline Functionality

- The project has set up service workers in webpack.

* Testing

- Project has Jest installed, there is an npm script to run Jest and all the tests all pass. 
- I have two src/js files - app.js and /utils/apirequest.js, each of them has a dedicated test. Please, run Jest with a to have both tests run.

* Interactions

- The page includes single field form that uses the correct html tags and structure
- There is validation process for the form input. 
- Texts shorter than 20 simbols are not allowed and empty request has dedicated error message in place. 
