/* https://github.com/developit/htm */

import { html, Component, render, useState} from 'https://beforestorm.avantwing.com/0/common/standalone.module.js';


function Dynamite({x}) {


let descriptionScore;
let gradientWhich;
let sizeIcon;
const sizeIconMax=48;

let colorFont;
let colorFontOutline;
let sizeText = 0.9;


if (x > 2.5) {
    sizeIcon = 48;
}
else if (x < -2.5) {
    sizeIcon = 0;   
}
else if (x >= -2.5 && x <=2.5) {
    sizeIcon = (x+2.5) / 5 * 48;
}

if (x<1 && x>-1) {
    sizeText = 0;
}


if (x >= 0) {
    descriptionScore = "clear minions";
    colorFont ="#f8f8f8";
    colorFontOutline ="#53b";
} 
else if (x<0) {
    descriptionScore = "";
    colorFont ="";
    colorFontOutline ="";
}

gradientWhich = "#gradientDynamite";


return html`
<div class="divScoreIcon">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" 

class="scoreIcon"
style="height: ${sizeIcon}px; width: ${sizeIcon}px; z-index:3;">

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
    
    style="
    z-index:5;
    font-size: ${sizeText}rem; 
    line-height: ${sizeText*0.9}rem;
    color: ${colorFont};
    text-shadow: 
    1px 1px 0 ${colorFontOutline},
    -1px 1px 0 ${colorFontOutline},
    1px -1px 0 ${colorFontOutline},
    -1px -1px 0 ${colorFontOutline},
    0px 1px 0 ${colorFontOutline},
    0px -1px 0 ${colorFontOutline},
    -1px 0px 0 ${colorFontOutline},
    1px 0px 0 ${colorFontOutline};
    "
    >
        ${descriptionScore}
    </div>
    
<!--
<svg xmlns="http://www.w3.org/2000/svg" 
viewBox="0 0 500 500"
class="scoreIcon"
style="height: ${sizeIconMax-4}px; width: ${sizeIconMax-4}px; z-index:0;">
 
<g class="" transform="scale(0.94, 0.94) translate(15,15)" style="touch-action: none;">

<path  
    fill="#f8f8f8"
    stroke="#64c" 
    stroke-width="20" 
    
    d="
      M 0,250
      C 0,0 0,0 250,0
        500,0 500,0 500,250
        500,500 500,500 250,500
        0,500 0,500 0,250
    "
></path>    
    
</g></svg>
-->


    
</div>
`  
}



function Knife({x}) {

let descriptionScore;
let gradientWhich;
let sizeIcon;
const sizeIconMax=48;

let colorFont;
let colorFontOutline;
let sizeText = 0.9;


if (x > 2.5) {
    sizeIcon = 48;
}
else if (x < -2.5) {
    sizeIcon = 0;   
}
else if (x >= -2.5 && x <=2.5) {
    sizeIcon = (x+2.5) / 5 * 48;
}

if (x<1 && x>-1) {
    sizeText = 0;
}


if (x >= 0) {
    descriptionScore = "kill heroes";
    colorFont ="#f8f8f8"
    colorFontOutline ="#c22";
} 
else if (x<0) {
    descriptionScore = "";
    colorFont ="";
    colorFontOutline ="";
}

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
    style="
    z-index:5;
    font-size: ${sizeText}rem; 
    line-height: ${sizeText*0.9}rem;
    color: ${colorFont};
        text-shadow: 
    1px 1px 0 ${colorFontOutline},
    -1px 1px 0 ${colorFontOutline},
    1px -1px 0 ${colorFontOutline},
    -1px -1px 0 ${colorFontOutline},
    0px 1px 0 ${colorFontOutline},
    0px -1px 0 ${colorFontOutline},
    -1px 0px 0 ${colorFontOutline},
    1px 0px 0 ${colorFontOutline};
    "
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
let colorFontOutline;

let sizeText = 0.9;

if (x > 2.5) {
    sizeIcon = 0;
}
else if (x < -2.5) {
    sizeIcon = 48;
}
else if (x <= 2.5 && x >= -2.5) {
    sizeIcon = (2.5-x) / 5 * 48;
}


if (x <= -1) {
    descriptionScore = "avoid damage";
}
else if (x >= 1) {
    descriptionScore = "bear damage";
}
else if (x<1 && x>-1) {
    descriptionScore = "medium";
}


if (x >= 0) {
    colorFont = "#f8f8f8";
    colorFontOutline = "#667";
} 
else if (x<0) {
    colorFont = "#667";
    colorFontOutline = "#f8f8f8";
}


gradientWhich = "#gradientShield";

return html`
<div class="divScoreIcon">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" 

class="scoreIcon"
style="height: ${sizeIcon}px; width: ${sizeIcon}px; z-index:1;">

<defs>
<linearGradient id="gradientShield">
    <stop offset="10%" stop-color="#aab" />
    <stop offset="90%" stop-color="#334" />
</linearGradient>
</defs>


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
    z-index:5;
    font-size: ${sizeText}rem; 
    line-height: ${sizeText*0.9}rem;
    color: ${colorFont};
        text-shadow: 
    1px 1px 0 ${colorFontOutline},
    -1px 1px 0 ${colorFontOutline},
    1px -1px 0 ${colorFontOutline},
    -1px -1px 0 ${colorFontOutline},
    0px 1px 0 ${colorFontOutline},
    0px -1px 0 ${colorFontOutline},
    -1px 0px 0 ${colorFontOutline},
    1px 0px 0 ${colorFontOutline};
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

let colorFont = "#333";
let colorFontOutline ="#f8f8f8";
let sizeText = 0.9;


if (x > 2.5) {
    positionIcon = 33;
}
else if (x < -2.5) {
    positionIcon = 3;
}
else if (x >= -2.5 && x <=2.5) {
    positionIcon = 3 + (x+2.5) / 5 * 33;
}


if (x <= -1) {
    descriptionScore = "early game";
}
else if (x >= 1) {
    descriptionScore = "late game";
}
else if (x<1 && x>-1) {
    descriptionScore = "normal game";
}

gradientWhich = "#gradientTimer";

return html`
<div class="divScoreIcon">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125 500" 

class=""
style="height: 44px; width: 11px; z-index:2;
position: absolute;
left:${positionIcon}px;
 ">
 
 <defs>
 <linearGradient id="gradientTimer">
    <stop offset="10%" stop-color="#567" />
    <stop offset="90%" stop-color="#444" />
</linearGradient>
 </defs>
 
 

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
style="height: ${sizeIconMax -4}px; width: ${sizeIconMax -4}px; z-index:1;">

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
    text-shadow: 
    1px 1px 0 ${colorFontOutline},
    -1px 1px 0 ${colorFontOutline},
    1px -1px 0 ${colorFontOutline},
    -1px -1px 0 ${colorFontOutline},
    0px 1px 0 ${colorFontOutline},
    0px -1px 0 ${colorFontOutline},
    -1px 0px 0 ${colorFontOutline},
    1px 0px 0 ${colorFontOutline};
    "
    >
        ${descriptionScore}
    </div>

</div>
`  
}


function Shoes({x}) {

let descriptionScore;
let gradientWhich;
let sizeIcon;
const sizeIconMax=48;

let colorFont;
let colorFontOutline;
let sizeText = 0.9;

if (x > 2.5) {
    sizeIcon = 48;
}
else if (x < -2.5) {
    sizeIcon = 0;   
}
else if (x >= -2.5 && x <=2.5) {
    sizeIcon = (x+2.5) / 5 * 48;
}

if (x<1 && x>-1) {
    sizeText = 0;
}


if (x >= 0) {
    descriptionScore = "go around";
    colorFont ="#f8f8f8";
    colorFontOutline ="#333";
} 
else if (x<0) {
    descriptionScore = "stay around";
    colorFont ="#333";
    colorFontOutline ="#f8f8f8";
}

gradientWhich = "#gradientShoes";

return html`
<div class="divScoreIcon">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" 

class="scoreIcon"
style="height: ${sizeIcon}px; width: ${sizeIcon}pxpx;">

<defs>
<linearGradient id="gradientShoes">
    <stop offset="10%" stop-color="#567" />
    <stop offset="90%" stop-color="#444" />
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
        style="
        font-size: ${sizeText}rem; 
        line-height: ${sizeText*0.9}rem;
        color: ${colorFont};
        text-shadow: 
    1px 1px 0 ${colorFontOutline},
    -1px 1px 0 ${colorFontOutline},
    1px -1px 0 ${colorFontOutline},
    -1px -1px 0 ${colorFontOutline},
    0px 1px 0 ${colorFontOutline},
    0px -1px 0 ${colorFontOutline},
    -1px 0px 0 ${colorFontOutline},
    1px 0px 0 ${colorFontOutline};
    "
    >
        ${descriptionScore}
    </div>

</div>
`  
}





export {Dynamite, Knife, Shield, Timer, Shoes};
