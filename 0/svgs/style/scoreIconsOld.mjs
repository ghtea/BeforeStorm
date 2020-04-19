/* https://github.com/developit/htm */

import { html, Component, render, useState} from 'https://beforestorm.avantwing.com/0/common/standalone.module.js';



function Basic({cAttackRange, cDiffText}) {

const widthIcon=58;
const heightIcon=24;

let descriptionAr;
let descriptionDt;

let gradientWhichAr;
let gradientWhichDt;

let colorFontAr ="#f8f8f8";
let colorFontOutlineAr ="#333";

let colorFontDt;
let colorFontOutlineDt;
let sizeText = 0.9;



if (cAttackRange == "Melee") {
    descriptionAr = "Melee";
    gradientWhichAr = "#gradientMelee";
    colorFontOutlineAr = "#422";
} 
else if (cAttackRange == "Ranged") {
    descriptionAr = "Ranged";
    gradientWhichAr = "#gradientRanged";
} 
else if (cAttackRange == "Both") {
    descriptionAr = "Both";
    gradientWhichAr = "#gradientBoth";
} 


if (cDiffText == "Very Hard") {
    descriptionDt = "Very Hard";
    gradientWhichDt = "#gradientVeryHard";
    colorFontOutlineDt = "#422";
} 
else if (cDiffText == "Hard") {
    descriptionDt = "Hard";
    gradientWhichDt = "#gradientHard";
    colorFontOutlineDt = "#422";
} 
else if (cDiffText == "Medium") {
    descriptionDt = "Medium";
    gradientWhichDt = "#gradientMedium";
    colorFontOutlineDt = "#422";
} 
else if (cDiffText == "Easy") {
    descriptionDt = "Easy";
    gradientWhichDt = "#gradientEasy";
    colorFontOutlineDt = "#422";
} 
else if (cDiffText == "Very Easy") {
    descriptionDt = "Very Easy";
    gradientWhichDt = "#gradientVeryEasy";
    colorFontOutlineDt = "#422";
} 
 


return html`
<div class="divBasicIcon">

<div class="divArIcon">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 240" 

class="basicIcon"
style="height: ${heightIcon}px; width: ${widthIcon}px;">

<defs>
<linearGradient id="gradientMelee" gradientTransform="rotate(30)" >
    <stop offset="10%" stop-color="#ff0066" />
    <stop offset="90%" stop-color="#7a0000" />
</linearGradient>

<linearGradient id="gradientRanged" gradientTransform="rotate(30)" >
    <stop offset="10%" stop-color="#aa35ff" />
    <stop offset="90%" stop-color="#6666ff" />
</linearGradient>

<linearGradient id="gradientBoth" gradientTransform="rotate(30)" >
    <stop offset="20%" stop-color="#ff0066" />
    <stop offset="60%" stop-color="#7a0000" />
    
    <stop offset="70%" stop-color="#6666ff" />
    <stop offset="90%" stop-color="#aa35ff" />
</linearGradient>

</defs>

<g class="" transform="scale(1,1) translate(0,0)" style="touch-action: none;">

<path fill="url("${gradientWhichAr}")" stroke="" 
    d="
      M 0,120
      C 0,0 0,0 300,0
        600,0 600,0 600,120
        600,240 600,240 300,240
        0,240 0,240 0,120
    "
></path>    
    
</g></svg>

    <div
    class="textIconBasic"
    style="
    z-index:5;
    font-size: ${sizeText}rem; 
    line-height: ${sizeText*0.9}rem;
    color: ${colorFontAr};
    "
    >
        ${descriptionAr}
    </div>
    </div>




<div class="divDtIcon">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 240" 

class="basicIcon"
style="height: ${heightIcon}px; width: ${widthIcon}px;">


<defs>

</defs>

<g class="" transform="scale(1,1) translate(0,0)" style="touch-action: none;">

<path fill="url("${gradientWhichDt}")" stroke="" 
    d="
      M 0,120
      C 0,0 0,0 300,0
        600,0 600,0 600,120
        600,240 600,240 300,240
        0,240 0,240 0,120
    "
></path>    
    
</g></svg>

    <div
    class="textIconBasic"
    style="
    z-index:5;
    font-size: ${sizeText}rem; 
    line-height: ${sizeText*0.9}rem;
    color: ${colorFontAr};
    
    "
    >
        ${descriptionDt}
    </div>
    </div>


</div>
`  
}




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


if (x >= 2) {
    descriptionScore = "clear minions best";
} 
else if (x >= 1) {
    descriptionScore = "clear minions well";
} 
else if (x > 0) {
    descriptionScore = "clear minions";
} 
else {
    descriptionScore = "";
}
    
if (x >= 0) {
    colorFont ="#f8f8f8";
    colorFontOutline ="#53b";
}    
else {
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
<linearGradient id="gradientDynamite" gradientTransform="rotate(30)" >
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


if (x >= 2) {
    descriptionScore = "kill heroes best";
} 
else if (x >= 1) {
    descriptionScore = "kill heroes well";
} 
else if (x > 0) {
    descriptionScore = "kill heroes";
} 
else {
    descriptionScore = "";
}
    
if (x >= 0) {
    colorFont ="#f8f8f8";
    colorFontOutline ="#c22";
}    
else {
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
<linearGradient id="gradientKnife" gradientTransform="rotate(30)" >
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
    descriptionScore = "avoid damage well";
}
else if (x <= -0) {
    descriptionScore = "avoid damage";
}
else if (x >= 1.5) {
    descriptionScore = "bear damage well";
}
else if (x >= 0.5) {
    descriptionScore = "bear damage";
}
else if (x<0.5 && x>0) {
    descriptionScore = "";
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
<linearGradient id="gradientShield" gradientTransform="rotate(30)" >
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


if (x >= 2) {
    descriptionScore = "clear minions best";
} 
else if (x >= 1) {
    descriptionScore = "clear minions well";
} 
else if (x > 0) {
    descriptionScore = "clear minions";
} 
else {
    descriptionScore = "";
}




if (x <= -1.5) {
    descriptionScore = "very early game";
}
else if (x <= -0.5) {
    descriptionScore = "early game";
}
else if (x >= 1.5) {
    descriptionScore = "very late game";
}
else if (x >= 0.5) {
    descriptionScore = "late game";
}
else if (x<0.5 && x>-0.5) {
    descriptionScore = "";
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


if (x <= -1.5) {
    descriptionScore = "stay around well";
}
else if (x <= -0.5) {
    descriptionScore = "stay around";
}
else if (x >= 1.5) {
    descriptionScore = "go around well";
}
else if (x >= 0.5) {
    descriptionScore = "go around";
}
else if (x<0.5 && x>-0.5) {
    descriptionScore = "";
}

if (x >= 0) {
    colorFont ="#f8f8f8";
    colorFontOutline ="#333";
} 
else if (x<0) {
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





export {Basic, Dynamite, Knife, Shield};
