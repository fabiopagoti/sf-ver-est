jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"soufer/mm/availability/test/integration/NavigationJourneyPhone",
		"soufer/mm/availability/test/integration/NotFoundJourneyPhone",
		"soufer/mm/availability/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});