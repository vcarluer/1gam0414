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

		this.map = map3;
		var tileId = TmxReader.GetTileId(this.map, 0, 5, 99);
		this.tilecoord = TmxReader.GetTileCoord(this.map, tileId);
	};

	Game.Scene.Scene1.prototype.update = function (delta) {
		if (!this.musicPlay) {
			this.musicPlay = true;
			// this.game.res.sounds.music.play();
		}

		if (!this.tweenTest) {
			this.tweenTest = true;
			this.game.model.coin = {
				x: 0
			};

			this.tweenCoin = createjs.Tween.get(this.game.model.coin, {loop:true}).to({x:200}, 2000).to({x:0}, 2000, createjs.Ease.elasticInOut);
		}

		this.tweenCoin.tick(delta);
		this.game.ctx.clearRect(0, 0, this.game.dom.canvas.width, this.game.dom.canvas.height);
		this.game.ctx.drawImage(this.game.res.images.map3, this.tilecoord.x, this.tilecoord.y, this.map.tilewidth, this.map.tileheight, 0, 0, this.map.tilewidth, this.map.tileheight);
		this.coinRenderer.render(delta, this.game.model.coin.x);
		this.game.ctx.font = "48px threedfont";
		this.game.ctx.fillStyle = "red";
		this.game.ctx.textBaseline = "top";
		this.game.ctx.fillText(this.game.t.getText("warmup"), 0, 50);
	};
}());
