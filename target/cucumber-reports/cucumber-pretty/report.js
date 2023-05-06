$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Test fixer Get API",
  "description": "",
  "id": "test-fixer-get-api",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User is able to validate the fixer API response",
  "description": "",
  "id": "test-fixer-get-api;user-is-able-to-validate-the-fixer-api-response",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user sets the base apI request \u003curl\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User authenticates the API request with \u003ctoken\u003e and \u003cbaseValue\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User sends the API request to get all the response",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User validates the response status is \u003ccode\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "test-fixer-get-api;user-is-able-to-validate-the-fixer-api-response;",
  "rows": [
    {
      "cells": [
        "url",
        "token",
        "baseValue",
        "code"
      ],
      "line": 12,
      "id": "test-fixer-get-api;user-is-able-to-validate-the-fixer-api-response;;1"
    },
    {
      "cells": [
        "https://api.apilayer.com",
        "23iwW5wPEfmBz5QRO2WTUBpalQg9dyrZ",
        "NOK",
        "200"
      ],
      "line": 13,
      "id": "test-fixer-get-api;user-is-able-to-validate-the-fixer-api-response;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "User is able to validate the fixer API response",
  "description": "",
  "id": "test-fixer-get-api;user-is-able-to-validate-the-fixer-api-response;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user sets the base apI request https://api.apilayer.com",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User authenticates the API request with 23iwW5wPEfmBz5QRO2WTUBpalQg9dyrZ and NOK",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User sends the API request to get all the response",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User validates the response status is 200",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://api.apilayer.com",
      "offset": 31
    }
  ],
  "location": "LoginStepDef.user_sets_the_base_apI_request_URL(String)"
});
formatter.result({
  "duration": 564928702,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23iwW5wPEfmBz5QRO2WTUBpalQg9dyrZ",
      "offset": 40
    },
    {
      "val": "NOK",
      "offset": 77
    }
  ],
  "location": "LoginStepDef.user_authenticates_the_API_request_with_token(String,String)"
});
formatter.result({
  "duration": 132562340,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinitions.LoginStepDef.user_authenticates_the_API_request_with_token(LoginStepDef.java:43)\r\n\tat ✽.And User authenticates the API request with 23iwW5wPEfmBz5QRO2WTUBpalQg9dyrZ and NOK(login.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDef.user_sends_the_API_request_to_get_all_the_response()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 38
    }
  ],
  "location": "LoginStepDef.user_validates_the_response_status_is_code(int)"
});
formatter.result({
  "status": "skipped"
});
});