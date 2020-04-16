/* https://github.com/developit/htm */

import { html, Component, render, useState} from 'https://beforestorm.avantwing.com/0/common/standalone.module.js';


function Dynamite({x}) {

let descriptionScore;
let gradientWhich;
let sizeIcon;
let sizeText;

if (x < -2) {
    sizeIcon = 25;
    sizeText = 0.45;
}
else if (x > 2) {
    sizeIcon = 50;
    sizeText = 0.9;
} else if (x >= -2) {
    sizeIcon = 25 + (x+2)/4 * 25;
    sizeText = 0.45 + (x+2)/4 * 0.45;
}

descriptionScore = "clear minions";
gradientWhich = "#gradientDynamite";

return html`
<div class="divScoreIcon">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" 

class="scoreIcon"
style="height: ${sizeIcon}px; width: ${sizeIcon}pxpx;">

<defs>
<linearGradient id="gradientDynamite">
    <stop offset="10%" stop-color="#75d" />
    <stop offset="90%" stop-color="#42a" />
</linearGradient>
</defs>

<g class="" transform="scale(1,1) translate(0,0)" style="touch-action: none;">

<path fill="url("${gradientWhich}")" stroke="" 
    d="
      M 0,250
      C 0,0 0,0 250,0
        500,0 500,0 500,250
        500,500 500,500 250,500
        0,500 0,500 0,250
    "
></path>    
    
</g></svg>

    <div
        class="textIcon"
        style="font-size: ${sizeText}rem; line-height: ${sizeText*0.9}rem;"
    >
        ${descriptionScore}
    </div>

</div>
`  
}



function Knife({x}) {

let descriptionScore;
let gradientWhich;
let sizeIcon;
let sizeText;

if (x < -2) {
    sizeIcon = 25;
    sizeText = 0.45;
}
else if (x > 2) {
    sizeIcon = 50;
    sizeText = 0.9;
} else if (x >= -2) {
    sizeIcon = 25 + (x+2)/4 * 25;
    sizeText = 0.45 + (x+2)/4 * 0.45;
}

descriptionScore = "kill heroes";
gradientWhich = "#gradientKnife";

return html`
<div class="divScoreIcon">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" 

class="scoreIcon"
style="height: ${sizeIcon}px; width: ${sizeIcon}pxpx;">

<defs>
<linearGradient id="gradientKnife">
    <stop offset="10%" stop-color="#e33" />
    <stop offset="90%" stop-color="#b00" />
</linearGradient>
</defs>

<g class="" transform="scale(1,1) translate(0,0)" style="touch-action: none;">

<path fill="url("${gradientWhich}")" stroke="" 
    d="
      M 0,250
      C 0,0 0,0 250,0
        500,0 500,0 500,250
        500,500 500,500 250,500
        0,500 0,500 0,250
    "
></path>    
    
</g></svg>

    <div
        class="textIcon"
        style="font-size: ${sizeText}rem; line-height: ${sizeText*0.9}rem;"
    >
        ${descriptionScore}
    </div>

</div>
`  
}




function OneIcon({x, whichScore}) {

const listOneIcon = ["Shield", "Dynamite", "Knife"];
const listTwoIcon = ["Timer", "Shoes"];

let descriptionScore;
let gradientWhich;
let sizeIcon;
let sizeText;

if (listOneIcon.includes(whichScore)){
if (x < -2) {
    sizeIcon = 25;
    sizeText = 0.5;
}
else if (x > 2) {
    sizeIcon = 50;
    sizeText = 1;
} else if (x >= -2) {
    sizeIcon = 25 + (x+2)/4 * 25;
    sizeText = 0.5 + (x+2)/4 * 0.5;
}
}


if (listTwoIcon.includes(whichScore)){
if (x == 0) {
    sizeIcon = 25;
    sizeText = 0.5;
}
else if (x > 2) {
    sizeIcon = 50;
    sizeText = 1;
} else if (x > 0) {
    sizeIcon = 25 + x/2 * 25;
    sizeText = 0.5 + x/2 * 0.5;
} else if (x < -2) {
    sizeIcon = 50;
    sizeText = 1;
} else if (x < 0) {
    sizeIcon = 25 + -x/2 * 25;
    sizeText = 0.5 + -x/2 * 0.5;
}
}


if (whichScore == "Shield") {
    descriptionScore = "bear damage";
    gradientWhich = "#gradientShield";
}

else if (whichScore == "Dynamite") {
    descriptionScore = "kill minions";
    gradientWhich = "#gradientDynamite";
}

else if (whichScore == "Knife") {
    descriptionScore = "kill heroes";
    gradientWhich = "#gradientKnife";
}

else if (whichScore == "Timer") {
    descriptionScore = "late game";
    gradientWhich = "#gradientTimer";
}
else if (whichScore == "Shoes") {
    if (x >= 0) { 
        descriptionScore = "go around";
    } else if (x < 0) {
        descriptionScore = "stay around";
    }
    gradientWhich = "#gradientTimer";
}


return html`
<div class="divScoreIcon">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" 

class="scoreIcon"
style="height: ${sizeIcon}px; width: ${sizeIcon}pxpx;">

<defs>
<linearGradient id="gradientShield">
    <stop offset="10%" stop-color="#7bc" />
    <stop offset="90%" stop-color="#339" />
</linearGradient>

<linearGradient id="gradientDynamite">
    <stop offset="10%" stop-color="#75d" />
    <stop offset="90%" stop-color="#42a" />
</linearGradient>

<linearGradient id="gradientKnife">
    <stop offset="10%" stop-color="#e33" />
    <stop offset="90%" stop-color="#b00" />
</linearGradient>

<linearGradient id="gradientTimer">
    <stop offset="10%" stop-color="#456" />
    <stop offset="90%" stop-color="#333" />
</linearGradient>

<linearGradient id="gradientShoes">
    <stop offset="10%" stop-color="#fff" />
    <stop offset="90%" stop-color="#fff" />
</linearGradient>

</defs>

<g class="" transform="scale(1,1) translate(0,0)" style="touch-action: none;">

<path fill="url("${gradientWhich}")" stroke="" 
    d="
      M 0,250
      C 0,0 0,0 250,0
        500,0 500,0 500,250
        500,500 500,500 250,500
        0,500 0,500 0,250
    "
></path>    
    
</g></svg>

    <div
        class="textIcon"
        style="font-size: ${sizeText}rem; line-height: ${sizeText*0.9}rem;"
    >
        ${descriptionScore}
    </div>

</div>
`  
}






export {Dynamite, Knife, OneIcon};
