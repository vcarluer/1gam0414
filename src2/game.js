/**
 Copyright 2014 Vincent Carluer.

 This file is part of 1gam0414.

 1gam0414 is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 1gam0414 is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with 1gam0414.  If not, see <http://www.gnu.org/licenses/>.
 */
window.onload = function () {
	var mygame = new Game("gameDiv");
	mygame.run();
};

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
		this.events = this.dom.mainDiv;

		// resources
		this.res.imagesSources = {
			coins: "res/coin-sprite-animation-sprite-sheet.png"
		};

		this.res.audioSources = {
		};

		this.res.audioSourcesLoop = {
			music: "res/music.ogg"
		};

		// Services
		this.service.imageLoader = new Game.Service.ImageLoader(this);
		this.service.audioLoader = new Game.Service.AudioLoader(this);
		this.service.updateService = new Game.Service.UpdateService(this);
		this.service.canvasLoader = new Game.Service.CanvasLoader(this);

		// scene
		this.scene.scene1 = new Game.Scene.Scene1(this);
	};

	Game.prototype.run = function () {
		var self = this;
		this.service.canvasLoader.createCanvas();
		this.service.imageLoader.load(this.res.imagesSources, function () {
			self.imagesLoaded();
		});
	};

	Game.prototype.imagesLoaded = function () {
		var self = this;
		this.service.audioLoader.load(this.res.audioSources, function () {
			self.audioLoaded();
		});
	};

	Game.prototype.audioLoaded = function () {
		var self = this;
		this.service.audioLoader.load(this.res.audioSourcesLoop, function () {
			self.resourceLoaded();
		}, true);
	};

	Game.prototype.resourceLoaded = function () {
		this.scene.scene1.prepare();
		this.service.updateService.loop();
	};
}());

