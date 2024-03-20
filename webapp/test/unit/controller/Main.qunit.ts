import Main from "com/mhc/tptest/controller/Main.controller";

QUnit.module("Sample Main controller test");

QUnit.test("The Main controller class has all custom mehtods", function (assert) {
	// as a very basic test example just check the presence of the "sayHello" method
	assert.expect(1);
	assert.strictEqual(typeof Main.prototype.loadWeatherData, "function");
});
