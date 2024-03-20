import Text from "sap/m/Text";
import UI5Element from "sap/ui/core/Element";
import Opa5 from "sap/ui/test/Opa5";
import EnterText from "sap/ui/test/actions/EnterText";

const viewName = "com.mhc.tptest.view.Main";

export default class MainPage extends Opa5 {
	// Actions
	iEnterLocationHeidelberg() {
		this.waitFor({
			id: "location",
			viewName,
			actions: new EnterText({
				text: "Heidelberg"
			}),
			errorMessage: "Did not find the 'location' input on the Main view"
		});
	}

	// Assertions
	iShouldSeeTheLocationHeidelberg() {
		this.waitFor({
			controlType: "sap.m.Text",
			viewName,
			check: function(text: UI5Element[]): boolean {
				return (<Text> text[1]).getText(false).includes("km");
			},
			success: function () {
				Opa5.assert.ok(true, "The km is displayed");
			},
			errorMessage: "Did not find the text control"
		});
	}
}