"use strict";
window.onload = function () {
	var mygame = new game("gameDiv");
	mygame.run();
}

function showText(elem) {
	if (textDiv) {
		while (textDiv.firstChild) {
			textDiv.removeChild(textDiv.firstChild);
		}

		if (elem.text) {
			var text = document.createElement("p");
			text.innerHTML = elem.text;
			textDiv.appendChild(text);
		}

		if (elem.choices && elem.choices.length > 0) {
			for (var i = 0; i < elem.choices.length; i++) {
				addChoice(elem.choices[i]);
			}
		}

	}	
}

function addChoice(choice) {
	var a = document.createElement("a");
	a.setAttribute("href", "#");
	var selection = choice;
	a.innerHTML = selection;
	var selectedElem = texts[selection];
	a.onclick = function () {
		showText(selectedElem);
	};
	textDiv.appendChild(a);
	textDiv.appendChild(document.createElement("br"));
}
