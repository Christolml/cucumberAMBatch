
Feature: MyAccount-Login Feature
Description: This feature will test a login functionality

#Scenario: Log-in with valid username and password
#Given open browser
#When Enter the url "http://practice.automationtesting.in/"
#And Click on My Account Menu
#And Enter registeres username and password
#And Click on login button
#Then User must successfully login to the web page



#Scenario Outline: Log-in with valid username and password
#	Given open browser
#	When Enter the url "http://practice.automationtesting.in/"
#	And Click on My Account Menu
#	And Enter registered username "<username>" and password "<password>"
#	And Click on login button
#	Then Verify login
#	
#	Examples:
#		|	username				|	password					|
#		|	pavanoltraining	|	Test@selenium			|
#		| pavanol					|	Test@selenium123	|
#		|	pavanol					|	Test@selenium			|



# Simple login with Data table params
Scenario: Log-in with valid username and password
	Given open browser
	When Enter the url "http://practice.automationtesting.in/"
	And Click on My Account Menu
	And Enter registered username and password
		|	pavanoltraining	|	Test@selenium123			|
	And Click on login button
	Then Usert must successfully login  to the web page

















