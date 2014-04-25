"use strict";
var textDiv = null;
var texts = [];

window.onload = function () {
	textDiv = document.getElementById("text");
	var start = {
		title: "start",
		text: "Hello world",
		choices: ["hello", "fuck off"]

	};

	texts[start.title] = start;
	var hello = { 
		title: "hello",
		text: "You are polite thank you",
		choices: []
	}

	texts[hello.title] = hello;

	var fuckoff = {
		title: "fuck off",
		text: "Don't talk to a poor computer like this",
		choices: []
	}

	texts[fuckoff.title] = fuckoff;

	showText(start);

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
