
# Customer Feedback Application 

Customer Feedback Application is a MERN stack application, dealing with collection and representation of feedback on either a Product or Service. 

This is a SAMPLE app that is meant to demonstrate how to develop, build, test and deploy a MERN stack app. 

## Tools / libraries

#### MERN STACK 
* ##### MongoDB 
  https://www.mongodb.com/ 
  A document-based open source database, that provides you scalability 
  and flexibility.
* ##### ExpressJS 
  https://expressjs.com/ 
  A structured base designed to develop web applications and APIs.
* ##### ReactJS 
  https://reactjs.org/ 
  A Javascript Front-end library for building user interfaces. 
  Maintained by Facebook.
* ##### NodeJS 
  https://nodejs.org/en/  A javascript runtime built on Chrome’s V8 JS 
  engine.

### Other key tools 
* Build Tool - Webpack, Babel and Travis CI (Not fully implemented)
* Deployment - Heroku (Not implemented yet)

## Features
* Add new feedback - name, email-id, comment and star rating 
* View feedbacks 
* Filter feedbacks based on name, email, comment and rating (value only) 
* View Chart showing a trend of ratings (1-5)

## Installation

#### Clone the repository 
```` bash
$ cd <project directory>
$ git clone https://github.com/cchandan2020/CustFeedback
$ cd <CustFeedback directory>
$ npm install express body-parser cors mongoose nodemon 
````
#### Install MongoDB 
````
$ brew tap mongodb/brew
$ brew install mongodb-community
$ brew services start mongodb-community
If you have a previous version of mongodb
$ brew services stop mongodb
$ brew uninstall mongodb

$ brew tap mongodb/brew
$ brew install mongodb-community
$ brew services start mongodb-community
````
### Start the Client 
````
$cd CustomerFeedback/client 
$node server.js
````
### Start the Server
```` 
$cd CustomerFeedback/server   
$node server.js
````

### WebUI 
Click on HOME to create new feedback or view old feedbacks 

## Backlog

* Build Scripts to complete
* Test scripts to complete
* Fix the star rating to capture rating value 
* Add a trend chart showing the ratings 
* Build scripts using TravisCI to deploy to Heroku 
* Add more validation to Date and Email input fields  
* Fix the grid view to make it fitting into a smaller container. 
* Enhance the filter criteria to search for words within a string. (e.g. search a word that appears within a comment) 

## License
[TekBucket] 
