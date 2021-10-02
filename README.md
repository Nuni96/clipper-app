# Clipper App
App for asking questions and recieving answers from registrated users. 



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).\
This project is using MySql Database


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### Tasks not done:
-Editing and deleting answers from current user\
-No notification when somebody answers users question\

# Steps to run application: 
1. Set up local instance of MySQL Database
  - go to clipper-app-backend/database/connection.go file
  - on line 15 change path to your database (local instance that you have set up in MySQL Workbench)
  - you could use my path to online database like b2ca8f94b1c948:f885ad87@tcp(eu-cdbr-west-01.cleardb.com)/heroku_38e9cde3a9f4547   - IT IS NOT RECCOMMENDED TO USE REMOTE DATABASE SINCE IT IS FREE VERSION - HENCE IT IS TOO SLOW  
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
