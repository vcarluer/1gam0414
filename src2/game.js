game = function (divId) {
	this.init(divId);
};

(function () {
	"use strict";

	game.prototype.init = function (divId) {
		this.ui = {};
		this.dom = {};

		this.dom.mainDiv = document.getElementById(divId);
		this.ui.scene1 = new game.scene1(this);
	}

	game.prototype.run = function () {
		this.ui.scene1.show();
	};
}());

