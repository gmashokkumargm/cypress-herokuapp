Coding challenge - McMakler

TechStack:
 - Cypress
 - Typescript


Folder structure:

 - Cypress - main folder for all cypress codes such as spec files, custom commands, fixture files
 - e2e - The folder which contains all spec files. There are two spec files one is for UI Automation and another one is for API.
 - fixtures - For test data
 - support - This folder contains all custom commands which can be reusable in cypress tests
 - TsConfig file -> To support typescript
 - GitIgnore -> To avoid pushing unwanted files to the git
 - Cypress.config.js -> All cypress configuration goes under this config file, and some scenarios such as creating test data for the tests.
 - Packet.json -> Dependency management

How Test specs are working: 
 - Task:
    - This task function is used before each spec file which will create the Test data and store it in the variable. 

 - Advertisement spec: 
    - Test 1: Hitting the url, adding new advertisement by filling all the fields and validating the response from the /api/advertisement.
    - Test 2: Hitting the url, adding new advertisement by hitting the API, just to make sure the test is not depends on other test and then grabbing the newly added advertisement then edit and validate the response. 

 - API spec: 
    - Test 1: Hitting the api with proper body to create a new advertisement and validating the response.
    - Test 2: Before edit the advertisement, new advertisement is create just to make test independent and then with response of newly created advertisement id, editing that advertisement and validating the reponse.


How to run the tests:
 - `npm install` or `npm i`
 - To run the test in headless mode use `npm test`
 - To run through Cypress UI use `npm run open` then select End-to-End testing, then select browser, then click start E2E testing which will open the selected browser and will show list of specs, then click any specs to run the test and verify the commands.


                    *********************** THANK YOU ***********************