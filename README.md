
# Customer Feedback Application 

Customer Feedback Application is a MERN stack application, dealing with collection and representation of feedback on either a Product or Service. 

This is a SAMPLE app that is meant to demonstrate how to develop, build, test and deploy a MERN stack app. 

## Tools / libraries 
##### MERN stack 

* MongoDB - https://www.mongodb.com/ 
* ExpressJS - https://expressjs.com/ 
* ReactJS - https://reactjs.org/ 
* NodeJS - https://nodejs.org/en/  

* Build Tool - Travis CI (Not fully implemented)
* Deployment - Heroku (Not implemented yet)

## Features
* Add new feedback - name, email-id, comment and star rating 
* View feedbacks 
* Filter feedbacks based on name, email, comment and rating (value only) 
* View Chart showing a trend of ratings (1-5)

## Installation
Clone the repository 

```` bash
$ git clone https://github.com/cchandan2020/CustFeedback 
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

## Build with TravisCI 
```` bash
$npm build 

````

## Backlog

* Build scripts using TravisCI to deploy to Heroku 
* Add more Test scripts  
* Fix the star rating to capture rating value 
* Add a trend chart showing the ratings 
* Add more validation to Date and Email input fields  
* Make the Stars customisable
* Fix the grid view 
* Enhance the filter criteria to search for words within a string. (e.g. search a word that appears within a comment) 

## License
[TekBucket]
