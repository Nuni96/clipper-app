package database

import (
	"myapp/models"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	connection, err := gorm.Open(mysql.Open("root:Inunacaljrp1.@/clipperapp"), &gorm.Config{}) //connect with database
	if err != nil {
		panic("could not connect to the database")
	}
	DB = connection
	connection.AutoMigrate(&models.User{}, &models.Questions{}) //automigrate users
}
