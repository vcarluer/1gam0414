(function() {
	"use strict";
	game.scene.scene1 = function (game) {
		this.init(game);
	};

	game.scene.scene1.prototype.init = function (game) {
		this.id = "scene1";
		this.game = game;
	};

	game.scene.scene1.prototype.prepare = function () {
		this.game.currentScene = this;
		this.coinRenderer = new game.renderer.spriteRenderer({
			game: this.game,
			image: this.game.res.images.coins,
			count: 10,
			tickDelta: 100,
			loop: true
		});
	};

	game.scene.scene1.prototype.render = function (delta) {
		this.game.ctx.clearRect(0, 0, this.game.dom.canvas.width, this.game.dom.canvas.height);
		this.coinRenderer.render(delta);
	};
}());
