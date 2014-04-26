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

// Global tooling
TmxReader = function () {};
(function () {
	"use strict";

	TmxReader.GetTileId = function (map, layer, x, y) {
		var idx = x + y * map.width;
		var data = map.layers[layer].data[idx];
		return data;
	};

	TmxReader.GetTileCoord = function (map, image, tileId) {
		// no margin or padding
		var id = tileId - 1,
			cols = image.width / map.tilewidth,
			rows = image.height / map.tileheight,
			yOff = Math.floor(id / cols),
			xOff = id - (yOff * cols);

		return {
			x: xOff * map.tilewidth,
			y: yOff * map.tileheight
		};
	};
}());