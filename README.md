# nlp
# Natural launguage processing app

This is a single-page app, which accepts text and provides an analisys of sentiment. Based on Aylien API and Vanilla JS for Udacity Fronf End Developer Nanodegree. 

# Content
* Project is created in two folders:
/client 
- HTML file, SCSS styles
- app.js - grabs user query from the page and passes it further to updater.js
- updater.js - makes request to server and updates the page with received analytical data 
/server
- index.js - kinda boilerplate in order to be able to test express app with jest(separates listen function)
- app.js - server side code, node js with express configuration 


# Extra Features 

* Project is running with service worker, which enables static files accessibility in offline mode 