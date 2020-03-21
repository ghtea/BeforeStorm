/* https://github.com/developit/htm */

import { html, Component, render, useState } from 'https://ghtea.github.io/BeforeStorm/0/common/standalone.module.js';

const numHero = Object.keys(objHeroBasic).length
const numTop = 15;
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
/* role */
function getRoleClass(heroId) {
   switch(objHeroBasic[heroId]['Role']) {
   case "Tank":
      return "roleT";
      break;
   case "Bruiser":
      return "roleB";
      break;
   case "Melee Assassin":
      return "roleMA";
      break;
   case "Ranged Assassin":
      return "roleRA";
      break;
   case "Healer":
      return "roleT";
      break;
   case "Support":
      return "roleS";
      break;
   }
}

/* components */

function partStatic({changeRGW, cRatioGW, changeRED, cRatioED, changeMap, cMap, point}) {

   function changeRGW1(event) {
      changeRGW(event.target.value);
   }
   function changeRED1(event) {
      changeRED(event.target.value);
   }
   function changeMap1(event) {
      changeMap(event.target.value);
   }
   
return html`
   <div id="Header"> 
      <div>
         BEFORE STORM: 
      </div>
   </div>
   
   <div id="Tab" >
      <div id="TabFront" >
      <div id="tabMeta" >META</div>
      <div id="tabAbc" >ABC</div>
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
      <option value="All" selected >All Map </option>
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


function hero1({heroId, cMap}) {

var numWidth = (objHeroMap[cMap][heroId]['zWin'] + 2) * 75 / 7;
var numHeight = (objHeroMap[cMap][heroId]['zGame'] + 2) * 46 / 7;

if (numWidth < 2) {numWidth = 2;}
if (numHeight < 2) {numHeight = 2;}

var numWinRate = objHeroMap[cMap][heroId]['WinRate']
var numGameRate = objHeroMap[cMap][heroId]['GameRate']

return html`
         
   <div> 
      <div class="first divRank"> 1st </div>
      
      <div class="first backHero ${getRoleClass(heroId)}">
      <img class="imgHero" src="0/images/heroes/${heroId}.png" /> 
         </div>
         
      <div class="first groupBar">
         <div style="width:${numWidth}px; height:${numHeight}px;" class="bar1"> </div>
      </div>
      
      <div class="first groupLabel">
         <div> WinRate: </div>
         <div> GameRate: </div>
      </div>
      
      <div class="first groupNumber">
         <div> ${numWinRate}% </div>
         <div> ${numGameRate}% </div>
      </div>
         
   </div>
`;
}


function heroTop({heroId, cMap}) {

/* 허용된총너비가 6*std(1 여유해서 7), 중앙이 평균점 */

var numWidth = (objHeroMap[cMap][heroId]['zWin'] + 2) * adjustBarWidth;
var numHeight = (objHeroMap[cMap][heroId]['zGame'] + 2) * adjustBarHeight;

if (numWidth < 2) {numWidth = 2;}
if (numHeight < 2) {numHeight = 2;}

var numWinRate = objHeroMap[cMap][heroId]['WinRate']
var numGameRate = objHeroMap[cMap][heroId]['GameRate']

return html`
         
   <div> 
      <div class="backHero ${getRoleClass(heroId)}">
      <img class="imgHero" src="0/images/heroes/${heroId}.png" /> 
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


function heroOthers({heroId}) {

return html`
         
   <div> 
      <div class="backHero ${getRoleClass(heroId)}">
      <img class="imgHero" src="0/images/heroes/${heroId}.png" /> 
         </div>
         
   </div>
`;
}


function Heroes({point, cMap}) {
var pointTop = point.slice(1, numTop);
var pointOthers = point.slice(numTop,);

return html`
   <div id="Heroes">
      
      <div id="heroes1">
      <${hero1} heroId=${point[0]['HeroID']} cMap=${cMap}/>
      </div>
      
       
      <div id="heroesTop"> 
      
${pointTop.map((objHero, index)=> html`
   <${heroTop} heroId=${objHero['HeroID']} cMap=${cMap}/>
`)}
      </div>
      
      <div id="heroesOthers"> 
         ${pointOthers.map((objHero, index)=> html`
   <${heroOthers} heroId=${objHero['HeroID']}/>
`)}
      </div>
   </div>
`;
}

function card() {
return html`
   <div id="card">
      
      <div id="cardLeft"> 
      <img id="imgHeroCard" src="0/images/heroes/Kerrigan.png" /> 
      <div> #1 </div>
      </div>
      
      <div id="cardMid"> 
      <div> Kerrigan </div>
      <div> Melee Assassin</div>
      <div> Difficult </div>   
      <div> winrate: 55.5% </div> 
      <div> popularity: 22.3% </div> 
      </div>

      
      <div id="cardRight"> 
         <div><a>Basic</a></div>
         <div><a>Build</a></div>
         <div><a>Pick</a></div>
      </div>
      
   </div>
`;
}

/*
function partStatic() {
return html`
`;
}
*/

function All() {

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
   console.log(point);
   console.log(cRatioGW);
   console.log(cRatioED);
};

function changeMap(x){
   setMap(x); updatePoint();}
function changeRGW(x){setRGW(x); updatePoint();}
function changeRED(x){setRED(x); updatePoint();}

updatePoint();

return html`
<${partStatic} 
changeMap=${changeMap} cMap=${cMap} 
changeRGW=${changeRGW} cRatioGW=${cRatioGW}
changeRED=${changeRED} cRatioED=${cRatioED}
point=${point}
/>
   
<${Heroes} point=${point} cMap=${cMap} />
<${card}/>
`;   
}

render(html`<${All}/>`, document.body);
