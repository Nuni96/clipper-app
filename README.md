# Clipper App
App for asking questions and recieving answers from registrated users. 



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).\
This project is using MySql Database



## Tasks not done:
-Editing and deleting answers from current user\
-No notification when somebody answers users question\

# Steps to run application: 
1. Set up local instance of MySQL Database
  - go to clipper-app-backend/database/connection.go file
  - on line 15 change path to your database (local instance that you have set up in MySQL Workbench)
  - you could use my path to online database like b2ca8f94b1c948:f885ad87@tcp(eu-cdbr-west-01.cleardb.com)/heroku_38e9cde3a9f4547
  - IT IS NOT RECCOMMENDED TO USE REMOTE DATABASE SINCE IT IS FREE VERSION - HENCE IT IS TOO SLOW  
  - should look like "username:password@/db_name"
  - verify that connection to database was made and tables are set
  - 
2. To run backend\
   -cd clipper-app-backend\
   -go run main.go
   
3. To run frontend\
   -npm start



### backend is hosted on [http://localhost:8080](http://localhost:8080)


## Enjoy my first ReactJS-Golang-MySQL App built from scratch
