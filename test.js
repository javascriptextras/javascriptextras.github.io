function buttonClick() {
  addHTML("body", "<p>You may look at the code: <a href=\"https://github.com/javascriptextras/javascriptextras/blob/main/jsx/\">Github</a>");
  createButton("Show Code", "buttonClick()", "button", "body");
}

import { ver } from "https://javascriptextras.github.io/javascriptextras/jsx/main.js";
import { decimalAdd, decimalSub, decimalMul, decimalDiv } from "https://javascriptextras.github.io/javascriptextras/jsx/math.js";
import { replaceHTML, replaceATTRIB, addHTML } from "https://javascriptextras.github.io/javascriptextras/jsx/dom.js";
import { createButton, createLabel, createDiv } from "https://javascriptextras.github.io/javascriptextras/jsx/ui.js";
console.log("JSX Version " + ver());
alert(decimalAdd(1, 0.4));
alert(decimalSub(0.3, 0.2));
alert(decimalMul(0.3, 0.4));
alert(decimalDiv(0.3, 0.2));
replaceHTML("tst", "Yeah!");
replaceATTRIB("tst", "style", "color: red");
addHTML("body", '<p>Yeah</p>');
createButton("Show Code", "buttonClick()", "button", "body");
