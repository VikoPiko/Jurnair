package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

func helloHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*") 
	w.Header().Set("Content-Type", "application/json") // Important!

	if r.Method != http.MethodGet {
		http.Error(w, "ONLY GET IS ALLOWED", http.StatusMethodNotAllowed)
		return
	}

	// Only send JSON
	response := map[string]string{"message": "Hello World"}
	json.NewEncoder(w).Encode(response)
}

func main() {
	http.HandleFunc("/hello", helloHandler)
	fmt.Println("Server is running on 8080")
	http.ListenAndServe(":8080", nil)
}
