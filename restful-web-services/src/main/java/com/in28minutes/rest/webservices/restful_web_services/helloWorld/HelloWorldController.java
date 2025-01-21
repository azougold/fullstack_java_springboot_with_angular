package com.in28minutes.rest.webservices.restful_web_services.helloWorld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

//Controller
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class HelloWorldController {

	
	
	@GetMapping(path="/hello-word")
	public String helloWorld() {
		return "Hello World";
	}
	// hello-world-Bean
	@GetMapping(path="/hello-world-bean")
	public HelloWorldBean helloWorldBean() {
		return new HelloWorldBean("Hello World");
	}
	
	@GetMapping(path="/hello-world/path-variable/{name}")
	public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
		
		//throw new RuntimeException("Some Error Happend!");
		return new HelloWorldBean(String.format("HelloWorld, %s", name));
	}
	
}
