/* eslint-disable @typescript-eslint/no-floating-promises */
import opaTest from "sap/ui/test/opaQunit";
import MainPage from "./pages/MainPage";

const onTheMainPage = new MainPage();

QUnit.module("Sample Ts Tests");

opaTest("Should show location Heidelberg", function () {
	// Arrangements
	onTheMainPage.iStartMyUIComponent({
		componentConfig: {
			name: "com.mhc.tptest"
		}
	});

	// Actions
	onTheMainPage.iEnterLocationHeidelberg();

	// Assertions
	onTheMainPage.iShouldSeeTheLocationHeidelberg();

	// Cleanup
	onTheMainPage.iTeardownMyApp();
});