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
