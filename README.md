# Clipper App
App for asking questions and recieving answers from registrated users. 



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).\
This project is using MySql Database



## Tasks not done:
-Editing and deleting answers from current user\
-No notification when somebody answers users question

# Steps to run application: 
1. Install node_modules in root directory by entering npm install in terminal (root directory)

2. Set up local instance of MySQL Database
  - set up a local instance in MySQL Workbench
  - go to clipper-app-backend/database/connection.go file
  - on line 15 change path to your database (local instance that you have set up in MySQL Workbench)  
  - should look like "username:password@/db_name"
# Some examples of DB setup
![prva slika](https://user-images.githubusercontent.com/58827636/135763265-66f0e783-b5e5-446f-b142-32a6dfc3b916.png)
![slika 2](https://user-images.githubusercontent.com/58827636/135763282-f7160bad-666f-4651-b750-83e2d2645224.png)
![slika 3](https://user-images.githubusercontent.com/58827636/135763287-4deaea8c-a6b5-4cb9-9945-da08e29c9f07.png)

3. If you get errors running backend you might need to enter next commands in cd clipper-app-backend directory:
  - go mod init
  - go mod vendor
  - go get .


4. To run backend
   - cd clipper-app-backend
   - go run main.go
   - if you get an error try changing line 15. in clipper-app-backend/database/connections.go to          "username:password@tcp(127.0.0.1:3306)/db_name
   
5. To run frontend
   - open new terminal and in root directory type in terminal:
   - npm start



### backend is hosted on [http://localhost:8080](http://localhost:8080)


## Enjoy my first ReactJS-Golang-MySQL App built from scratch
