package main

import (
	"fmt"
	"myapp/database"
	"myapp/routes"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	port := os.Getenv("PORT")
	fmt.Println(port)
	dns := os.Getenv("DATABASE_URL")
	fmt.Println(dns)
	database.Connect()

	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowCredentials: true, //so frontend can send cookie back
	})) //if we don't add this browser will not allow request

	routes.Setup(app)
	app.Listen(":8000")
}
