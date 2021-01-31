/*
  Project:   Hands-On Project 1-2
	Author:    Guillermo Molina Matus
	Date:      1/31/21
	Purpose:   To illustrate variable initialization and use in a method
*/

//initialize variables for service names and speeds

var service1Name = "Basic";
var service2Name = "Express";
var service3Name = "Extreme";
var service4Name = "Ultimate";

var service1Speed =  5;
var service2Speed =  25;
var service3Speed =  50;
var service4Speed =  150;



/*
creating the table
*/

document.write("<tr><td>"); //Creates a new table row "tr" and first table cell "td"
document.write(service1Name); //Writes out the value stored in service1Name
document.write("</td>"); //closes table cell
document.write("<td>"); //creates new table cell 
document.write(service1Speed); //displays value for service 1
document.write("</td></tr>"); //ends the table row