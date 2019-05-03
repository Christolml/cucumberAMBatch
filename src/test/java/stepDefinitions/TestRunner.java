package stepDefinitions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

//@CucumberOptions(strict = false, features = &quot;features&quot;, format = { &quot;pretty&quot;,
//&quot;html:target/site/cucumber-pretty&quot;,
//&quot;json:target/cucumber.json&quot; }, tags = { &quot;~@ignore&quot; })

@RunWith(Cucumber.class)
@CucumberOptions(
//		features = "classpath:login/MyAccount-Login.feature",
		features = "classpath:login/Tagging.feature",
		glue = "stepDefinitions",
//		plugin = {"html:target/test-report", "junit:target/junit-xml-report.xml", "json:target/json-report.json"},
		format = {"pretty","html:target/test-report", "junit:target/junit-xml-report.xml", "json:target/json-report.json"},
		dryRun = false,
		monochrome = true,
		strict = false,
		tags = {"@SanityTest"}
		)
public class TestRunner {

}
