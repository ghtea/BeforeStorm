/* https://github.com/developit/htm */

import { html, Component, render, useState } from 'https://ghtea.github.io/combiname/common/standalone.module.js';

const infoDate = "2020. 3. 24. (UTC +9)";
const infoVerHM = "2.49.4.78679~";
const infoVerHH = "2.49";


const sourceDataText = "Heroes Profile API";
const sourceDataLink = "https://api.heroesprofile.com";

const sourceImgText = "Heroes of the Storm Wiki";
const sourceImgLink = "https://heroesofthestorm.gamepedia.com/Heroes_of_the_Storm_Wiki"

const sourceDiffText = "Heroes of the Storm Wiki";
const sourceDiffLink ="https://heroesofthestorm.gamepedia.com/Heroes_of_the_Storm_Wiki";

const numHero = Object.keys(objHeroBasic).length
const numTop = 13;
const adjustBarWidth = 75/5;
const adjustBarHeight = 46/7;

/* first make of point */
var listObjHeroPoint = [];
for (var iHero = 0; iHero < numHero; iHero++) {
       listObjHeroPoint.push({
         "HeroID": objHeroBasic[Object.keys(objHeroBasic)[iHero]]["HeroID"],
         "Point": 0
       })
   }
   
/* difficulty */
for (var iHero = 0; iHero < numHero; iHero++) {
   var cDiff = objHeroBasic[Object.keys(objHeroBasic)[iHero]]["zDiff"];
   
   var stageDiff = objHeroBasic[Object.keys(objHeroBasic)[iHero]]["Difficulty"];
   
   var cDiffText = "";
   
   if (stageDiff == 5) {
      cDiffText = "Very Hard";
   } else if (stageDiff == 4) {
      cDiffText = "Hard";
   } else if  (stageDiff == 3) {
      cDiffText = "Medium";
   } else if  (stageDiff == 2) {
      cDiffText = "Easy";
   } else {
      cDiffText = "Very Easy";
   }
   
   /*
   if (cDiff > 1.5) {
      cDiffText = "Very Hard";
   } else if (cDiff > 0.5) {
      cDiffText = "Hard";
   } else if  (cDiff > -0.5) {
      cDiffText = "Normal";
   } else if  (cDiff > -1.5) {
      cDiffText = "Easy";
   } else {
      cDiffText = "Very Easy";
   }
   
   */
   
   objHeroBasic[Object.keys(objHeroBasic)[iHero]]["DiffText"] = cDiffText;
}
   

/* role */
function getRoleClass(heroId) {
   var resultClass;
   switch(objHeroBasic[heroId]['Role']) {
   case "Tank":
      resultClass = "roleT";
      break;
   case "Bruiser":
      resultClass = "roleB";
      break;
   case "Melee Assassin":
      resultClass = "roleMA";
      break;
   case "Ranged Assassin":
      resultClass = "roleRA";
      break;
   case "Healer":
      resultClass = "roleH";
      break;
   case "Support":
      resultClass = "roleS";
      break;
   }
   return resultClass;
}


/* components */

function partStatic({changeRGW, cRatioGW, changeRED, cRatioED, changeMap, cMap, point}) {
   /*
   not smooth
   const [iMessage, setMessage] = useState(0);
   
   function changeMessage() {
      if (iMessage == messages.length -1) {k = 0;} else {k+=1;}
      setMessage(k);
   }
   */

   function changeRGW1(event) {
      changeRGW(event.target.value);
   }
   function changeRED1(event) {
      changeRED(event.target.value);
   }
   function changeMap1(event) {
      changeMap(event.target.value);
   }
   
   /*setInterval(changeMessage, 10000);*/
   
return html`
   <div id="Header"> 
      <div id="BeforeStorm">
         BEFORE STORM
      </div>
      
      <div id="divMessage">
      "Do you have <a href="https://forms.gle/ziWSuQG148dJYmqu7"> any opinions </a> on this website?"
      </div>
      
   </div>
   
   <div id="Tab" >
      <div id="TabFront" >
      <div id="tabMeta" >META</div>
      <!--<div id="tabAbc" >ABC  (SOON<sup>TM</sup>)</div> -->
      </div>
   </div>
   
   
   <div id="Setting" >
      
      <div>SORT: What is more important?</div>
      
      <div>
      <div>Number <br/> of Games</div>
      <div><input type="range" value=${cRatioGW} onChange=${changeRGW1}/></div>
      <div> WinRate</div>
      </div>
          
      <div>
      <div> difficulty: <br /> Easy </div>
      <div><input type="range" value=${cRatioED} onChange=${changeRED1}/></div>
      <div>Hard</div>
      </div>
         
   </div>
      
   <div id="divMap">
      <select id="selectMap" value=${cMap} onChange=${changeMap1}>
      <option value="All" selected >All Battlegrounds </option>
      <option value="Alterac Pass"> Alterac Pass </option>
      <option value="Battlefield of Eternity">Battlefield of Eternity</option>
      <option value="Braxis Holdout">Braxis Holdout</option>
      <option value="Cursed Hollow">Cursed Hollow</option>
      <option value="Dragon Shire">Dragon Shire</option>
      <option value="Hanamura Temple">Hanamura Temple</option>
      <option value="Infernal Shrines">Infernal Shrines</option>
      <option value="Sky Temple">Sky Temple</option>
      <option value="Tomb of the Spider Queen">Tomb of the Spider Queen</option>
      <option value="Towers of Doom">Towers of Doom</option>
      <option value="Volskaya Foundry">Volskaya Foundry</option>
      </select>
   </div>
`;
}


function hero1({heroId, cMap, focusHero}) {

var numWidth = (objHeroMap[cMap][heroId]['zWin'] + 2) * adjustBarWidth;
var numHeight = (objHeroMap[cMap][heroId]['zGame'] + 2) * adjustBarHeight;

if (numWidth < 2) {numWidth = 2;}
if (numHeight < 2) {numHeight = 2;}

var numWinRate = objHeroMap[cMap][heroId]['WinRate']
var numGameRate = objHeroMap[cMap][heroId]['GameRate']

var strClassDiv = "first backHero " + getRoleClass(heroId);

function focusHero1(event) {
   focusHero(event.target.getAttribute('data-heroId'));
};

return html`
         
   <div> 
      <div class="first divRank"> 1st </div>
      
      <div class="${strClassDiv}">
      <img
      data-heroId="${heroId}"
      class="imgHero" 
      src="0/images/heroes/${heroId}.png" 
      onClick=${focusHero1} 
      />
         </div>
         
      <div class="first groupBar">
         <div style="width:${numWidth}px; height:${numHeight}px;" class="bar1"> </div>
      </div>
      
      <div class="first groupLabel">
         <div> ↔ WinRate: </div>
         <div> ↕ Popularity: </div>
      </div>
      
      <div class="first groupNumber">
         <div> ${numWinRate}% </div>
         <div> ${numGameRate}% </div>
      </div>
         
   </div>
`;
}


function heroTop({heroId, cMap,focusHero}) {

/* 허용된총너비가 6*std(1 여유해서 7), 중앙이 평균점 */

var numWidth = (objHeroMap[cMap][heroId]['zWin'] + 2) * adjustBarWidth;
var numHeight = (objHeroMap[cMap][heroId]['zGame'] + 2) * adjustBarHeight;

if (numWidth < 2) {numWidth = 2;}
if (numHeight < 2) {numHeight = 2;}

var numWinRate = objHeroMap[cMap][heroId]['WinRate']
var numGameRate = objHeroMap[cMap][heroId]['GameRate']

var strClassDiv = "backHero " + getRoleClass(heroId);

function focusHero1(event) {
   focusHero(event.target.getAttribute('data-heroId'));
};

return html`
         
   <div> 
      <div class="${strClassDiv}">
      <img
      data-heroId="${heroId}"
      class="imgHero" 
      src="0/images/heroes/${heroId}.png" 
      onClick=${focusHero1} 
      />
         </div>
         
      <div class="groupBar">
         <div style="width:${numWidth}px; height:${numHeight}px;" class="bar1"> </div>
      </div>
         
      <div class="groupNumber">
         <div> ${numWinRate}% </div>
         <div> ${numGameRate}% </div>
      </div>
         
   </div>
`;
}


function heroOthers({heroId,focusHero}) {

var strClassDiv = "backHero " + getRoleClass(heroId);

function focusHero1(event) {
   focusHero(event.target.getAttribute('data-heroId'));
};
return html`
         
   <div> 
      <div class="${strClassDiv}">
      <img
      data-heroId="${heroId}"
      class="imgHero" 
      src="0/images/heroes/${heroId}.png" 
      onClick=${focusHero1} 
      />
         </div>
         
   </div>
`;
}


function Heroes({point, cMap, focusHero}) {
var pointTop = point.slice(1, numTop);
var pointOthers = point.slice(numTop,);

return html`
   <div id="Heroes">
      
      <div id="heroes1">
      <${hero1} heroId=${point[0]['HeroID']} cMap=${cMap} focusHero=${focusHero}/>
      </div>
      
       
      <div id="heroesTop"> 
      
${pointTop.map((objHero, index)=> html`
   <${heroTop} heroId=${objHero['HeroID']} cMap=${cMap} focusHero=${focusHero}/>
`)}
      </div>
      
      <div id="heroesOthers"> 
         ${pointOthers.map((objHero, index)=> html`
   <${heroOthers} heroId=${objHero['HeroID']} focusHero=${focusHero}/>
`)}
      </div>
   </div>
`;
}

function Card({focusHero, fHeroId, cMap, point, visibleF}) {

var numWinRate = objHeroMap[cMap][fHeroId]['WinRate'];
var numGameRate = objHeroMap[cMap][fHeroId]['GameRate'];

var numRank = point.findIndex(x => x['HeroID'] == fHeroId) + 1;

function closeCard() {
   focusHero("None");
};

if (visibleF) {
   return html`
   <div id="cardFocus">
      
      <div id="cardLeft"> 
      
      <div id="closeCard" onClick=${closeCard} > close </div>
      
      <div>
      <img id="imgHeroCard" src="0/images/heroes/${fHeroId}.png" /> 
      <div> #${numRank} </div>
      </div>
      
      </div>
      
      <div id="cardMid"> 
      <div> ${objHeroBasic[fHeroId]['HeroName']} </div>
      <div class="${getRoleClass(fHeroId)}">  ${objHeroBasic[fHeroId]['Role']} </div>
      <div>  ${objHeroBasic[fHeroId]['DiffText']}  </div>   
      <div> WinRate: ${numWinRate}% </div> 
      <div> Popularity: ${numGameRate}% </div> 
      </div>

      
      <div id="cardRight"> 
         <!--<div><a>Basic</a></div>-->
         <div><a href="https://beforestorm.avantwing.com/heroes/${fHeroId}/builds">Builds</a></div>
         <!--<div><a>Pick</a></div>-->
      </div>
      
   </div>
   `;
   }

else {
   return html`
   
   `;
   }
}


function Data() {
   return html`
   
   <div id="divInfo" >
      <div> update: ${infoDate} </div> 
      <div> data: <a href="${sourceDataLink}">${sourceDataText}</a></div>
      <div> hero-map: v${infoVerHM} </div>
      <div> hero-hero: v${infoVerHH}</div>
      <div> images: <a href="${sourceImgLink}">${sourceImgText}</a></div>
      <div> hero difficulty: <a href="${sourceDiffLink}">${sourceDiffText}</a></div>
      
   </div>
   
   `

}


function All() {
const [visibleF, setVisibleF] = useState(false);

const [cMap, setMap] = useState('All');
const [cRatioGW, setRGW] = useState(50);
const [cRatioED, setRED] = useState(50);

const [point, setPoint] = useState(listObjHeroPoint);


function updatePoint() {
   for (var iHero = 0; iHero < numHero; iHero++) {
       var cHero = listObjHeroPoint[iHero]['HeroID']
       
       listObjHeroPoint[iHero]['Point'] =
           (100 - cRatioGW) * objHeroMap[cMap][cHero]['zGame']
           + cRatioGW * objHeroMap[cMap][cHero]['zWin']
           + (cRatioED - 50) * objHeroBasic[cHero]["Difficulty"]
   }
   
   listObjHeroPoint = listObjHeroPoint.sort((a, b) => (a.Point > b.Point) ? -1 : 1);
   
   setPoint(listObjHeroPoint);
};

function changeMap(x){
   setMap(x); updatePoint();}
function changeRGW(x){setRGW(x); updatePoint();}
function changeRED(x){setRED(x); updatePoint();}

updatePoint();

const [fHeroId, setFocus] = useState("Alarak");

function focusHero(x) {   
   if (x == "None") {
      setVisibleF(false);
   } else {
      setFocus(x);
      setVisibleF(true);
   }
}


return html`
<${partStatic} 
changeMap=${changeMap} cMap=${cMap} 
changeRGW=${changeRGW} cRatioGW=${cRatioGW}
changeRED=${changeRED} cRatioED=${cRatioED}
point=${point} 
/>
   
<${Heroes} point=${point} cMap=${cMap}  focusHero=${focusHero}/>


<${Card} focusHero=${focusHero} fHeroId=${fHeroId} point=${point} cMap=${cMap} visibleF=${visibleF} />

<${Data} />

`;   
}

render(html`<${All}/>`, document.body);
