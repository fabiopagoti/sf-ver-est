jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Materials in the list
// * All 3 Materials have at least one ToAvailability

sap.ui.require([
	"sap/ui/test/Opa5",
	"soufer/mm/availability/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"soufer/mm/availability/test/integration/pages/App",
	"soufer/mm/availability/test/integration/pages/Browser",
	"soufer/mm/availability/test/integration/pages/Master",
	"soufer/mm/availability/test/integration/pages/Detail",
	"soufer/mm/availability/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "soufer.mm.availability.view."
	});

	sap.ui.require([
		"soufer/mm/availability/test/integration/MasterJourney",
		"soufer/mm/availability/test/integration/NavigationJourney",
		"soufer/mm/availability/test/integration/NotFoundJourney",
		"soufer/mm/availability/test/integration/BusyJourney",
		"soufer/mm/availability/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});