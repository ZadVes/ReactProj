package main

import (
	"net/http"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)


var items = []string{"Элемент 1", "Элемент 2", "Элемент 3"}


func getItems(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"items": items})
}


func createItem(c *gin.Context) {
	var newItem struct {
		Name string `json:"name"`
	}

	if err := c.BindJSON(&newItem); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Неверный формат запроса"})
		return
	}

	items = append(items, newItem.Name)
	c.JSON(http.StatusCreated, gin.H{"message": "Элемент добавлен", "items": items})
}

func main() {
	r := gin.Default()

	
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE"},
		AllowHeaders:     []string{"Content-Type"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	
	r.GET("/items", getItems)
	r.POST("/items", createItem)

	r.Run(":8080") 
}
