game = function (divId) {
	this.init(divId);
};

(function () {
	"use strict";
	game.service = function(){};
	game.scene = function(){};
	game.renderer = function () {};

	game.prototype.init = function (divId) {
		this.scene = {};
		this.dom = {};
		this.service = {};
		this.res = {};
		this.renderer = {};

		// dom
		this.dom.mainDivId = divId;
		this.dom.mainDiv = document.getElementById(divId);

		// resources
		this.res.imagesSources = {
			coins: "coin-sprite-animation-sprite-sheet.png"
		};

		// Services
		this.service.imageLoader = new game.service.imageLoader(this);
		this.service.updateService = new game.service.updateService(this);
		this.service.canvasLoader = new game.service.canvasLoader(this);

		// scene
		this.scene.scene1 = new game.scene.scene1(this);
	}

	game.prototype.run = function () {
		var self = this;
		this.service.canvasLoader.createCanvas();
		this.service.imageLoader.load(this.res.imagesSources, function () {
			self.resourceLoaded();
		});
	};

	game.prototype.resourceLoaded = function () {
			this.scene.scene1.prepare();
			this.service.updateService.loop();
	};
}());

