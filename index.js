sap.ui.define([
	"sap/m/Text",
	"sap/m/VBox"
], (Text,VBox) => {
	"use strict";

	var oText = new Text({
		text: "Hello World mohaideen and hari and pradish"
	});
	var oText = new Text({
		text: "from test2"
	});
	var oText = new Text({
		text: "Hello World mohaideen and hari and mani"
	});
	new VBox({
		ustifyContent: "Center",
		alignItems: "Center",
		items: [oText]
	}).placeAt("content");
	new VBox({
		ustifyContent: "Center",
		alignItems: "Center",
		items: [oText]
	}).placeAt("content");
});