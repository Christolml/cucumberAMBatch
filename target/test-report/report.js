$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login/Tagging.feature");
formatter.feature({
  "line": 1,
  "name": "Tags in cucumber",
  "description": "",
  "id": "tags-in-cucumber",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Verify login",
  "description": "",
  "id": "tags-in-cucumber;verify-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@SanityTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "This is valid login test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinitions.this_is_valid_login_test()"
});
formatter.result({
  "duration": 380567000,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Verify logout",
  "description": "",
  "id": "tags-in-cucumber;verify-logout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@SanityTest"
    },
    {
      "line": 7,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "this is logout test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefinitions.this_is_logout_test()"
});
formatter.result({
  "duration": 73200,
  "status": "passed"
});
});