/* https://github.com/developit/htm */

import { html, Component, render, useState} from 'https://beforestorm.avantwing.com/0/common/standalone.module.js';



function OneIcon({x, whichScore}) {

let descriptionScore;
let gradientWhich;

if (whichScore == "Shield") {
    descriptionScore = "strong body";
    gradientWhich = "#gradientShield";
}

else if (whichScore == "Dynamite") {
    descriptionScore = "kill minions";
    gradientWhich = "#gradientDynamite";
}


return html`
<div class="divScoreIcon">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" 

class="scoreIcon"
style="height: 50px; width: 50px;">

<defs>
<linearGradient id="gradientShield">
    <stop offset="10%" stop-color="#88a" />
    <stop offset="90%" stop-color="#446" />
</linearGradient>

<linearGradient id="gradientDynamite">
    <stop offset="10%" stop-color="#d8d" />
    <stop offset="90%" stop-color="#a6a" />
</linearGradient>

<linearGradient id="gradientKnife">
    <stop offset="10%" stop-color="#fff" />
    <stop offset="90%" stop-color="#fff" />
</linearGradient>

<linearGradient id="gradientTimer">
    <stop offset="10%" stop-color="#fff" />
    <stop offset="90%" stop-color="#fff" />
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

    <div class="textIcon">
        ${descriptionScore}
    </div>

</div>
`  
}






export {OneIcon};
