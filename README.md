# Project Name
This project is an automated testing project for a website using Playwright and Jest.

## Pre-requisites
Before running this project, you should have the following installed on your machine:

Node.js

## Installation
* Clone this repository to your local machine
* Navigate to the project directory in your terminal
* Run `npm install `to install all required dependencies

## Usage
* Set up the credentials in the credentials.json file
* Run the tests using the command `npm test`

## DDT
The credentials.json file stores the login scenarios for the website. This file is used to keep the login information separated from the test code and to follow DDT approach. The file is structured like this:

```json
{
  "incorrectPassword": {
          "username": "standard_user",
          "password": "incorrect_password"
    },
      "emptyUsername": {
          "username": "",
          "password": "secret_sauce"
    }
}
```
In this example, there are two sets of login scenarios: incorrectPassword and emptyUsername. Each set contains a username and password field to execute exact scenarios. 

## Approach
* In this project, we used Playwright as the automation library to interact with the website, Jest as the testing framework. 
* We also used the Page Object Model design pattern to keep our code modular and organized. 
* To follow DDT approach, we are storing the login data in a separate JSON file and divide them by different scenarios, which is imported and used in the tests. 