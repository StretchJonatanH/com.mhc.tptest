// karma-ui5 usage: https://github.com/SAP/karma-ui5
process.env.CHROME_BIN =
"C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe"

module.exports = function (config) {
	config.set({
		frameworks: ["ui5"],
		browsers: ["Edge"]
	});
};
