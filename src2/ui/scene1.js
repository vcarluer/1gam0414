(function() {
	"use strict";
	game.scene1 = function (game) {
		this.init(game);
	};

	game.scene1.prototype.init = function (game) {
		this.id = "scene1";
		this.game = game;
	};

	game.scene1.prototype.show = function () {
		this.game.dom.mainDiv.innerHTML = this.id;
	};
}());
