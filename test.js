import { ver } from "https://javascriptextras.github.io/javascriptextras/jsx/main.js";
import { decimalAdd, decimalSub, decimalMul, decimalDiv } from "https://javascriptextras.github.io/javascriptextras/jsx/math.js";
import { replaceHTML, replaceATTRIB, addHTML } from "https://javascriptextras.github.io/javascriptextras/jsx/dom.js";
import { createButton, createLabel, createDiv } from "https://javascriptextras.github.io/javascriptextras/jsx/ui.js";
import { move, rotate, hide, show, fadeIn, fadeOut, slideIn, slideOut } from "https://javascriptextras.github.io/javascriptextras/jsx/animate.js";
console.log("JSX Version " + ver());
replaceHTML("tst", "JSX has been loaded! I should be bright blue now! Using JSX " + parseFloat(ver()));
replaceATTRIB("tst", "style", "color: var(--text-800)");
alert(decimalAdd(1, 0.4));
alert(decimalSub(0.3, 0.2));
alert(decimalMul(0.3, 0.4));
alert(decimalDiv(0.3, 0.2));

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function buttonClick() {
  addHTML("body", "<p>Don't belive me? Press CTRL + SHIFT + I and see the code!</p>");
  addHTML("body", "<p>And also another way to look at the code is at <a href=\"https://github.com/javascriptextras/javascriptextras/blob/main/jsx/\">Github - Module</a> or <a href=\"https://github.com/javascriptextras/javascriptextras.github.io\">Github - Website</a></p>");
  const buttonId = "JSXbutton-" + getRandomInt(99999);
  createButton("This was made with JSX!", buttonClick, buttonId, "body");
}

addHTML("body", '<p>I was added with JSX, and so is the button down here! \\/ \\/ \\/</p>');

const button = createButton("Click me, from JSX!", buttonClick, "JSXbutton", "body");
