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

var service1Price =  service1Speed * 2;
var service2Price =  service2Speed * 2;
var service3Price =  service3Speed * 2;
var service4Price =  service4Speed * 2;


/*
creating the table
*/

//This is just for the Basic
document.write("<tr><td>"); //Creates a new table row "tr" and first table cell "td"
document.write(service1Name); //Writes out the value stored in service1Name
document.write("</td>"); //closes table cell
document.write("<td>"); //creates new table cell 
document.write(service1Speed); //displays value for service 1
document.write("</td><td>"); //creates new table cell 
document.write("$" + service1Price); //displays price for service 1
document.write("</td></tr>"); //ends the table row

//Express
document.write("<tr><td>"); //Creates a new table row "tr" and first table cell "td"
document.write(service2Name); //Writes out the value stored in service1Name
document.write("</td>"); //closes table cell
document.write("<td>"); //creates new table cell 
document.write(service2Speed); //displays value for service 1
document.write("</td><td>"); //creates new table cell 
document.write("$" + service2Price); //displays price for service 1
document.write("</td></tr>"); //ends the table row

//Extreme
document.write("<tr><td>"); //Creates a new table row "tr" and first table cell "td"
document.write(service3Name); //Writes out the value stored in service1Name
document.write("</td>"); //closes table cell
document.write("<td>"); //creates new table cell 
document.write(service3Speed); //displays value for service 1
document.write("</td><td>"); //creates new table cell 
document.write("$" + service3Price); //displays price for service 1
document.write("</td></tr>"); //ends the table row

//Ultimate
document.write("<tr><td>"); //Creates a new table row "tr" and first table cell "td"
document.write(service4Name); //Writes out the value stored in service1Name
document.write("</td>"); //closes table cell
document.write("<td>"); //creates new table cell 
document.write(service4Speed); //displays value for service 1
document.write("</td><td>"); //creates new table cell 
document.write("$" + service4Price); //displays price for service 1
document.write("</td></tr>"); //ends the table row