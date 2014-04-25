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
(function() {
	"use strict";
	Game.Scene.Scene1 = function (game) {
		this.init(game);
	};

	Game.Scene.Scene1.prototype.init = function (game) {
		this.id = "Scene1";
		this.game = game;
	};

	Game.Scene.Scene1.prototype.prepare = function () {
		this.game.currentScene = this;
		this.coinRenderer = new Game.Renderer.SpriteRenderer({
			game: this.game,
			image: this.game.res.images.coins,
			count: 10,
			tickDelta: 100,
			loop: true
		});
	};

	Game.Scene.Scene1.prototype.render = function (delta) {
		this.game.ctx.clearRect(0, 0, this.game.dom.canvas.width, this.game.dom.canvas.height);
		this.coinRenderer.render(delta);
	};
}());
