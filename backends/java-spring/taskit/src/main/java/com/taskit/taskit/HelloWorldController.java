package com.taskit.taskit;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/helloworld")
    public String helloWorld() {
        return "HelloWorld from Java";
    }
}
