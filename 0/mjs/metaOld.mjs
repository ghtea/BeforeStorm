/* https://github.com/developit/htm */

import { html, Component, render, useState} from 'https://beforestorm.avantwing.com/0/common/standalone.module.js';

const infoDate = "2020. 3. 28. (UTC +9)";
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

const allRoles = ['Tank', 'Bruiser', 'Melee Assassin', 'Ranged Assassin', 'Healer', 'Support'];
var cRolesGlobal = ['Tank', 'Bruiser', 'Melee Assassin', 'Ranged Assassin', 'Healer', 'Support'];

var cRoleButtonsGlobal = {'Tank':"on", 'Bruiser':"on",  'Melee Assassin':"on", 'Ranged Assassin':"on",  'Healer':"on", 'Support':"on"};

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
   /* var cDiff = objHeroBasic[Object.keys(objHeroBasic)[iHero]]["zDiff"]; */
   
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
   

/* components */

function partStatic({changeRGW, cRatioGW, changeRED, cRatioED, changeRoles, cRoles, changeMap, cMap, point, numRerender}) {
   
   
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
   
   
   function changeRoles1(event) {
      var cRoleEach = event.target.getAttribute('data-role');
      if (cRoleEach == "All") {
         cRolesGlobal = ['Tank', 'Bruiser', 'Melee Assassin', 'Ranged Assassin', 'Healer', 'Support']
      } else if (cRoleEach == "None") {
         cRolesGlobal = [];
      } else {
         var index = cRolesGlobal.indexOf(cRoleEach);
         if (index > -1) { cRolesGlobal.splice(index, 1);}
         else { cRolesGlobal.push(cRoleEach); }
      }
      
      
      changeRoles(cRolesGlobal);
      
      /* for button's data-onoff */
      for (var iRole = 0; iRole < allRoles.length; iRole++) {
         var cRole = allRoles[iRole];
         if (cRolesGlobal.includes(cRole)) {
            cRoleButtonsGlobal[cRole] = "on";
         } else {
            cRoleButtonsGlobal[cRole] = "off";
         }
      }
      
      console.log("cRoles: ", cRoles);
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
      "🎉 Role Filter added!"
      </div>
      
   </div>
   
   <div id="Tab" >
      <div id="TabFront" >
      
      <div id="tab1"><a href="https://forms.gle/iYcMrUcJ52f8my5n6" > GIVE ME FEEDBACK </a> </div>
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
      

   <div id="divRole" >
      <div
         data-role="All"
         class="buttonRole"
         onClick=${changeRoles1}
         > All </div>
      
      <div
         data-onoff="${cRoleButtonsGlobal['Tank']}"
         data-role="Tank"
         class="buttonRole"
         onClick=${changeRoles1}
         > T </div>
         
      <div
         data-onoff="${cRoleButtonsGlobal['Bruiser']}"
         data-role="Bruiser"
         class="buttonRole"
         onClick=${changeRoles1}
         > B </div>
         
      <div
         data-onoff="${cRoleButtonsGlobal['Melee Assassin']}"
         data-role="Melee Assassin"
         class="buttonRole"
         onClick=${changeRoles1}
         > M </div>
         
      <div
         data-onoff="${cRoleButtonsGlobal['Ranged Assassin']}"
         data-role="Ranged Assassin"
         class="buttonRole"
         onClick=${changeRoles1}
         > R </div>
         
      <div
         data-onoff="${cRoleButtonsGlobal['Healer']}"
         data-role="Healer"
         class="buttonRole"
         onClick=${changeRoles1}
         > H </div>
         
      <div
         data-onoff="${cRoleButtonsGlobal['Support']}"
         data-role="Support"
         class="buttonRole"
         onClick=${changeRoles1}
         > S </div>
         
      <div
         data-role="None"
         class="buttonRole"
         onClick=${changeRoles1}
      > None </div>
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


function hero1({heroId, cMap, focusHero, cRoles}) {

if ( cRoles.includes(objHeroBasic[heroId]['Role']) ) { var onoff = "on";}
else { var onoff = "off";}

var numWidth = (objHeroMap[cMap][heroId]['zWin'] + 2) * adjustBarWidth;
var numHeight = (objHeroMap[cMap][heroId]['zGame'] + 2) * adjustBarHeight;

if (numWidth < 2) {numWidth = 2;}
if (numHeight < 2) {numHeight = 2;}

var numWinRate = objHeroMap[cMap][heroId]['WinRate']
var numGameRate = objHeroMap[cMap][heroId]['GameRate']



function focusHero1(event) {
   focusHero(event.target.getAttribute('data-heroId'));
};

return html`
         
   <div data-onoff="${onoff}">
      <div class="first divRank"> 1st </div>
      
      <div 
      class="first backHero"
      data-role="${objHeroBasic[heroId]['Role']}">
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


function heroTop({heroId, cMap,focusHero, cRoles}) {

var onoff;
if ( cRoles.includes(objHeroBasic[heroId]['Role']) ) { onoff = "on";}
else { onoff = "off";}

/* 허용된총너비가 6*std(1 여유해서 7), 중앙이 평균점 */

var numWidth = (objHeroMap[cMap][heroId]['zWin'] + 2) * adjustBarWidth;
var numHeight = (objHeroMap[cMap][heroId]['zGame'] + 2) * adjustBarHeight;

if (numWidth < 2) {numWidth = 2;}
if (numHeight < 2) {numHeight = 2;}

var numWinRate = objHeroMap[cMap][heroId]['WinRate']
var numGameRate = objHeroMap[cMap][heroId]['GameRate']


function focusHero1(event) {
   focusHero(event.target.getAttribute('data-heroId'));
};

return html`
         
   <div data-onoff="${onoff}">
      <div 
      class="backHero"
      data-role="${objHeroBasic[heroId]['Role']}">
      <img
      data-heroId="${heroId}"
      data-role="${objHeroBasic[heroId]['Role']}"
      
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


function heroOthers({heroId,focusHero, cRoles}) {

var onoff;
if ( cRoles.includes(objHeroBasic[heroId]['Role']) ) { onoff = "on";}
else { onoff = "off";}



function focusHero1(event) {
   focusHero(event.target.getAttribute('data-heroId'));
};
return html`
         
   <div data-onoff="${onoff}">
      <div 
      class="backHero"
      data-role="${objHeroBasic[heroId]['Role']}">
      <img
      data-heroId="${heroId}"
      data-role="${objHeroBasic[heroId]['Role']}"
      
      class="imgHero" 
      src="0/images/heroes/${heroId}.png" 
      onClick=${focusHero1} 
      />
         </div>
         
   </div>
`;
}


function Heroes({point, cMap, focusHero, cRoles, numRerender}) {
var pointTop = point.slice(1, numTop);
var pointOthers = point.slice(numTop,);



return html`
   <div id="Heroes">
      
      <div id="heroes1">
      <${hero1} heroId=${point[0]['HeroID']} cMap=${cMap} focusHero=${focusHero} cRoles=${cRoles}/>
      </div>
      
       
      <div id="heroesTop"> 
      
${pointTop.map((objHero, index)=> html`
   <${heroTop} heroId=${objHero['HeroID']} cMap=${cMap} focusHero=${focusHero} cRoles=${cRoles}/>
`)}
      </div>
      
      <div id="heroesOthers"> 
         ${pointOthers.map((objHero, index)=> html`
   <${heroOthers} heroId=${objHero['HeroID']} focusHero=${focusHero} cRoles=${cRoles}/>
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
      <div data-role="${objHeroBasic[fHeroId]['Role']}">  ${objHeroBasic[fHeroId]['Role']} </div>
      <div>  ${objHeroBasic[fHeroId]['DiffText']}  </div>   
      <div> WinRate: ${numWinRate}% </div> 
      <div> Popularity: ${numGameRate}% </div> 
      </div>

      
      <div id="cardRight"> 
         <!--<div><a>Basic</a></div>-->
         <div><a href="heroes/${fHeroId}/talents.html">Talents</a></div>
         <div><a href="heroes/${fHeroId}/builds.html">Builds</a></div>
         <!--<div><a>Pick</a></div>-->
      </div>
      
   </div>
   `;
   }

else {return html``;}
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

const [numRerender, setRerender] = useState(0);
function forceRerender() {
   setRerender(numRerender + 1);
}


const [visibleF, setVisibleF] = useState(false);

const [cRatioGW, setRGW] = useState(50);
const [cRatioED, setRED] = useState(50);

const [cMap, setMap] = useState('All');

const [cRoles, setRoles] = useState(['Tank', 'Bruiser', 'Melee Assassin', 'Ranged Assassin', 'Healer', 'Support']);


const [point, setPoint] = useState(listObjHeroPoint);


function updatePoint() {
   for (var iHero = 0; iHero < numHero; iHero++) {
       var cHero = listObjHeroPoint[iHero]['HeroID']
       
       listObjHeroPoint[iHero]['Point'] =
           (100 - cRatioGW) * objHeroMap[cMap][cHero]['zGame']
           + cRatioGW * objHeroMap[cMap][cHero]['zWin']
           + (cRatioED - 50) * objHeroBasic[cHero]["zDiff"]
   }
   
   listObjHeroPoint = listObjHeroPoint.sort((a, b) => (a.Point > b.Point) ? -1 : 1);
   
   setPoint(listObjHeroPoint);
   
};



function changeMap(x){
   setMap(x); updatePoint();}
   
function changeRoles(x) {
   setRoles(x);
   forceRerender();
}

   
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
changeRoles=${changeRoles}
cRoles=${cRoles}
numRerender=${numRerender}
/>

   
<${Heroes} 
point=${point} 
cMap=${cMap}  
focusHero=${focusHero} 
cRoles=${cRoles}
numRerender=${numRerender}
/>

<${Card} focusHero=${focusHero} fHeroId=${fHeroId} point=${point} cMap=${cMap} visibleF=${visibleF} />

<${Data} />

`;   
}

render(html`<${All}/>`, document.body);


