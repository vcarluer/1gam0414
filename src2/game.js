Game = function (divId) {
	this.init(divId);
};

(function () {
	"use strict";
	Game.Service = function(){};
	Game.Scene = function(){};
	Game.Renderer = function () {};

	Game.prototype.init = function (divId) {
		this.scene = {};
		this.dom = {};
		this.service = {};
		this.res = {};

		// dom
		this.dom.mainDivId = divId;
		this.dom.mainDiv = document.getElementById(divId);

		// resources
		this.res.imagesSources = {
			coins: "coin-sprite-animation-sprite-sheet.png"
		};

		// Services
		this.service.imageLoader = new Game.Service.ImageLoader(this);
		this.service.updateService = new Game.Service.UpdateService(this);
		this.service.canvasLoader = new Game.Service.CanvasLoader(this);

		// scene
		this.scene.scene1 = new Game.Scene.Scene1(this);
	};

	Game.prototype.run = function () {
		var self = this;
		this.service.canvasLoader.createCanvas();
		this.service.imageLoader.load(this.res.imagesSources, function () {
			self.resourceLoaded();
		});
	};

	Game.prototype.resourceLoaded = function () {
			this.scene.scene1.prepare();
			this.service.updateService.loop();
	};
}());

