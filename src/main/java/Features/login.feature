Feature: Test fixer Get API

Scenario Outline: User is able to validate the fixer API response
	Given user sets the base apI request <url>
	And User authenticates the API request with <token> and <baseValue>
	When User sends the API request to get all the response
	Then User validates the response status is <code>

Examples:
	| url | token | baseValue | code |
	| https://api.apilayer.com/fixer/latest |23iwW5wPEfmBz5QRO2WTUBpalQg9dyrZ | EUR | 200 |
	
			
Scenario Outline: Verify response code is 401 when apikey and base value is not passed
	Given user sets the base apI request <url>
	When User sends the API request to get all the response
	Then User validates the response status is <code>
	
Examples:
	| url | code |
	| https://api.apilayer.com | 401 |	
	
	
Scenario Outline: Verify proper message displayed when apikey and base value is not passed
	Given user sets the base apI request <url>
	When User sends the API request to get all the response
	Then User validates the response status is <message>
	
Examples:
	| url | message |
	| https://api.apilayer.com | No API key found in request |		

	
Scenario Outline: Verify default currency value is EUR
	Given user sets the base apI request <url>
	And User authenticates the API request with only <token>
	When User sends the API request to get all the response
	Then User validates the response base value is <base>
	
Examples:
	| url | token | base | 
	| https://api.apilayer.com/fixer/latest |23iwW5wPEfmBz5QRO2WTUBpalQg9dyrZ | EUR | 

	
Scenario Outline: Verify proper message displayed when Invalid apikey and base value is passed
	Given user sets the base apI request <url>
	And User authenticates the API request with only <token>
	When User sends the API request to get all the response
	Then User validates the response status is <message>	

Examples:
	| url | token | message | 
	| https://api.apilayer.com/fixer/latest |invaliadapi | Invalid authentication credentials | 

	
	

	
	
	