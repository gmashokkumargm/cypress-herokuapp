TechStack:
 - Cypress
 - Typescript

Folder structure:
 - Cypress - main folder for all cypress codes such as spec files, custom commands, fixture files
 - e2e - The folder which contains all spec files. There are two spec files one is for UI Automation and the other one is for API.
 - fixtures - For test data
 - support - This folder contains all custom commands that can be reusable in Cypress tests
 - TsConfig file -> To support typescript
 - GitIgnore -> To avoid pushing unwanted files to the git
 - Cypress.config.js -> All Cypress configuration goes under this config file and some scenarios such as creating test data for the tests.
 - Packet.json -> Dependency management

Execution:
- In this project before hook is used for each spec file which will create the Test data and store it in the variable. 
- Test 1: Hitting the URL, adding new advertisement by filling all the fields, and validating the response from the /api/advertisement.
- Test 2: Hitting the URL, adding a new advertisement by hitting the API, just to make sure the test does not depends on other test and then grabbing the newly added advertisement then editing and validating the response. 

 - API spec: 
    - Test 1: Hitting the API with the proper body to create a new advertisement and validate the response.
    - Test 2: Before editing the advertisement, the new advertisement is created just to make the test independent and then with the response of the newly created advertisement ID, editing that advertisement and validating the response.


How to run the tests:
 - `npm install` or `npm i`
 - To run the test in headless mode use `npm test`
 - To run through Cypress UI use `npm run open` to select End-to-End testing, then select browser, then click start E2E testing which will open the selected browser and show a list of specs, then click any specs to run the test and verify the commands.


                    *********************** THANK YOU ***********************
