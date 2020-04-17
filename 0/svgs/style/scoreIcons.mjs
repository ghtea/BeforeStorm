/* https://github.com/developit/htm */

import { html, Component, render, useState} from 'https://beforestorm.avantwing.com/0/common/standalone.module.js';


function Dynamite({x}) {

let descriptionScore = "clear minions";
let gradientWhich;
let sizeIcon;
let sizeText;

if (x < -2.5) {
    sizeIcon = 10;
}
else if (x > 2.5) {
    sizeIcon = 50;
    sizeText = 0.9;
} else if (x >= -2) {
    sizeIcon = 10 + (x+2.5)/5 * 40;
    sizeText = 0.18 + (x+2.5)/5 * 0.72;
}

if (x<0) {
    descriptionScore = "";
}


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




function Shield({x}) {

let descriptionScore;
let gradientWhich;
let sizeIcon;
const sizeIconMax=48;
let colorFont;
let sizeText = 0.9;

if (x > 2.5) {
    sizeIcon = 0;
}
else if (x < -2.5) {
    sizeIcon = 48;
}
else if (x >= -2.5 && x <=2.5) {
    sizeIcon = (2.5-x) / 5 * 48;
}


if (x<1 && x>-1) {
    sizeText = 0;
}

/*
if (x > 2.5) {
    sizeText = 0.9;
}
else if (x >= 1) {
    sizeText = 0.9 * 1/2.5 + (x-1) / (2.5-1) * 0.9 * (1 - 1/2.5);
    
} 
else if (x < -2.5) {
    sizeText = 0.9;
}
else if (x <= -1) {
    sizeText = 0.9 * 1/2.5 + (-1-x) / (2.5-1) * 0.9 * (1 - 1/2.5);
} 
else {
    sizeText = 0;
}
*/


if (x >= 0) {
    descriptionScore = "strong body";
    colorFont = "#dddde8";
} 
else if (x<0) {
    descriptionScore = "weak body";
    colorFont = "#333";
}

gradientWhich = "#gradientShield";

return html`
<div class="divScoreIcon">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" 

class="scoreIcon"
style="height: ${sizeIcon}px; width: ${sizeIcon}px; z-index:1;">

<g class="" transform="scale(1,1) translate(0,0)" style="touch-action: none;">

<path fill="#f8f8f8" stroke="" 
    d="
      M 0,250
      C 0,0 0,0 250,0
        500,0 500,0 500,250
        500,500 500,500 250,500
        0,500 0,500 0,250
    "
></path>    
    
</g></svg>


<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" 

class="scoreIcon"
style="height: ${sizeIconMax}px; width: ${sizeIconMax}px; z-index:0;">


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
        style="
    font-size: ${sizeText}rem; 
    line-height: ${sizeText*0.9}rem; 
    z-index:2;
    color: ${colorFont};
    "
    >
        ${descriptionScore}
    </div>

</div>
`  
}



function Timer({x}) {

let descriptionScore;
let gradientWhich;
let positionIcon;
const sizeIconMax=48;

let colorFont = "#dddde8";
let sizeText = 0.9;

if (x > 2.5) {
    positionIcon = 36;
}
else if (x < -2.5) {
    positionIcon = 0;
}
else if (x >= -2.5 && x <=2.5) {
    positionIcon = (x+2.5) / 5 * 36;
}


if (x<1 && x>-1) {
    sizeText = 0;
}
console.log(positionIcon);




if (x >= 0) {
    descriptionScore = "late game";
} 
else if (x<0) {
    descriptionScore = "early game";
}

gradientWhich = "#gradientShield";

return html`
<div class="divScoreIcon">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125 500" 

class=""
style="height: 44px; width: 11px; z-index:2;
position: absolute;
left:${positionIcon}px;
 ">

<g class="" transform="scale(1,1) translate(0,0)" style="touch-action: none;">

<path fill="url("${gradientWhich}")" stroke="" 
    d="
      M 0,250
      C 0,0 0,0 62.5,0
        125,0 125,0 125,250
        125,500 125,500 62.5,500
        0,500 0,500 0,250
    "
></path>    
    
</g></svg>


<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" 

class="scoreIcon"
style="height: ${sizeIconMax -6}px; width: ${sizeIconMax -6}px; z-index:1;">

<g class="" transform="scale(1,1) translate(0,0)" style="touch-action: none;">

<path fill="#f8f8f8" stroke="" 
    d="
      M 0,250
      C 0,0 0,0 250,0
        500,0 500,0 500,250
        500,500 500,500 250,500
        0,500 0,500 0,250
    "
></path>    
    
</g></svg>


<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" 

class="scoreIcon"
style="height: ${sizeIconMax}px; width: ${sizeIconMax}px; z-index:0;">


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
        style="
    font-size: ${sizeText}rem; 
    line-height: ${sizeText*0.9}rem; 
    z-index:5;
    color: ${colorFont};
    "
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


<linearGradient id="gradientDynamite">
    <stop offset="10%" stop-color="#75d" />
    <stop offset="90%" stop-color="#42a" />
</linearGradient>

<linearGradient id="gradientKnife">
    <stop offset="10%" stop-color="#e33" />
    <stop offset="90%" stop-color="#b00" />
</linearGradient>


<linearGradient id="gradientShield">
    <stop offset="10%" stop-color="#567" />
    <stop offset="90%" stop-color="#444" />
</linearGradient>

<linearGradient id="gradientTimer">
    <stop offset="10%" stop-color="#567" />
    <stop offset="90%" stop-color="#444" />
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






export {Dynamite, Knife, Shield, Timer, OneIcon};
