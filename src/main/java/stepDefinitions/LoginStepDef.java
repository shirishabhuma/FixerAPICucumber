package stepDefinitions;


import org.testng.Assert;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.http.Method;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class LoginStepDef {
	
	private static final String ApiKey = "23iwW5wPEfmBz5QRO2WTUBpalQg9dyrZ";
	private static final String Base = "EUR";
	private static final String PASSWORD = "Test@@123";
	private static final String BASE_URL = "https://api.apilayer.com";
	
	//RequestSpecBuilder reqBuilder = new RequestSpecBuilder();

	RequestSpecification httpRequest;
	Response response;

      @Given("^user sets the base apI request (.*)$")
	   public void user_sets_the_base_apI_request_URL(String url) throws Throwable {
		RestAssured.baseURI = url;
	   	}

	@And("^User authenticates the API request with (.*) and (.*)$")
	public void user_authenticates_the_API_request_with_token(String token, String baseValue) throws Throwable {
		
		httpRequest = RestAssured.given().header("apikey", token).queryParam("base", baseValue);
		

		}

	
	@When("^User sends the API request to get all the response$")
	public void user_sends_the_API_request_to_get_all_the_response() throws Throwable {
	   			
		System.out.println("And function Request1: "+httpRequest);
		String path ="/fixer/latest";
	   // response = request.get(path).then().extract().response();
	    response = httpRequest.when().get().then().extract().response();
	    		}

	@Then("^User validates the response status is (.*)$")
	public void user_validates_the_response_status_is_code(int code) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
	Assert.assertEquals(code,response.getStatusCode());
		
	    throw new PendingException();
	}


   @Then("^User validates the response base value is EUR$")
   public void user_validates_the_response_base_value_is_EUR() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
   throw new PendingException();
}

   @Given("^User authenticates the API request with only (.*)$")
   public void user_authenticates_the_API_request_with_only(String token) throws Throwable {
	   httpRequest = RestAssured.given().header("apikey", token);
       throw new PendingException();
   }


}
