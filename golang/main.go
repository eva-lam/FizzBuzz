package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	twofer()
}

func twofer() {
	reader := bufio.NewReader(os.Stdin)
	fmt.Print("Enter text: ")
	text, _ := reader.ReadString('\n')

	if text == "" {
		fmt.Println("One for you, one for me")
	} else {
		fmt.Println("One for " + text + ",one for me")
	}

}
