/* https://github.com/developit/htm */

import { html, Component, render, useState } from 'https://ghtea.github.io/combiname/common/standalone.module.js';

const mainHeroID = objMatchupFriend[Object.keys(objMatchupFriend)[0]]['mainHeroID'];


const numHero = Object.keys(objHeroBasic).length
const numTop = 6;
const adjustBarWidth = 75/5;
const adjustBarHeight = 46/7;

/* first make of point */

/* listObjPointFriend, Counter */
var listOPF = [];
for (var iHero = 0; iHero < numHero; iHero++) {
       listOPF.push({
         "HeroID": objHeroBasic[Object.keys(objHeroBasic)[iHero]]["HeroID"],
         "Point": 0
       })
   }
var listOPC = [];
for (var iHero = 0; iHero < numHero; iHero++) {
       listOPC.push({
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
function divTop() {
return html`
   <div id="divTop"> 
      <div>
         <img src="../../0/images/heroes/${mainHeroID}.png"/>
         <p> <b>${objHeroBasic[mainHeroID]['HeroName']}</b> </p>
      </div>
   </div>
`;
}

function divTabBack() {
return html`
<div id="divTabBack" >
<div id="divTab" >
      <!--<div id="tabBasic" > Basic </div> -->
      <div id="tabTalents" > <a href="talents.html"> Talents </a> </div> 
      <div id="tabBuilds" > <a href="builds.html"> Builds </a> </div>
      <div id="tabMatchups" > Match-Ups</div>
      </div>
      </div>
`;
};

function divMenu() {
   return html`
   <div id="divMenu">
      <${divTop} />
      <${divTabBack} />
   </div>
`;
};


function Setting({changeRGW, cRatioGW, changeRED, cRatioED}) {
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
   
   /*setInterval(changeMessage, 10000);*/
   
return html`
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
      
   
`;
}



function heroTop({heroId,focusHero, which}) {

   if (which == "Friend") {
      var obj = objMatchupFriend;
   } else {
      var obj = objMatchupCounter;
   }
/* 허용된총너비가 6*std(1 여유해서 7), 중앙이 평균점 */

var numWidth = (obj[heroId]['zWin'] + 2) * adjustBarWidth;
var numHeight = (obj[heroId]['zTry'] + 2) * adjustBarHeight;

if (numWidth < 2) {numWidth = 2;}
if (numHeight < 2) {numHeight = 2;}

var numWinRate = obj[heroId]['WinRate']
var numTryRate = obj[heroId]['TryRate']

var strClassDiv = "backHero " + getRoleClass(heroId);

function focusHero1(event) {
focusHero(event.target.getAttribute('data-heroId'), event.target.getAttribute('data-which') );
};

return html`
         
   <div> 
      <div class="${strClassDiv}">
      <img
      data-which="${which}"
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
         <div> ${numTryRate}% </div>
      </div>
         
   </div>
`;
}


function heroOthers({heroId,focusHero, which}) {

var strClassDiv = "backHero " + getRoleClass(heroId);

function focusHero1(event) {
focusHero(event.target.getAttribute('data-heroId'), event.target.getAttribute('data-which') );
};

return html`
         
   <div> 
      <div class="${strClassDiv}">
      <img
      data-which="${which}"
      data-heroId="${heroId}"
      class="imgHero" 
      src="0/images/heroes/${heroId}.png" 
      onClick=${focusHero1} 
      />
         </div>
         
   </div>
`;
}


function Heroes({point, focusHero, which}) {

var pointTop = point.slice(0, numTop);
var pointOthers = point.slice(numTop,);

return html`
   <div class="Heroes">
       
      <div class="heroesTop"> 
      
${pointTop.map((objHero, index)=> html`
   <${heroTop} heroId=${objHero['HeroID']} focusHero=${focusHero} which=${which}/>
`)}
      </div>
      
      <div class="heroesOthers"> 
         ${pointOthers.map((objHero, index)=> html`
   <${heroOthers} heroId=${objHero['HeroID']} focusHero=${focusHero} which=${which}/>
`)}
      </div>
   </div>
`;
}


function Card({focusHero, fHeroId, visibleF, fwhich}) {

if (fwhich == "Friend") {
      var obj = objMatchupFriend;
      var point = listOPF;
   } else {
      var obj = objMatchupCounter;
      var point = listOPC;
   }

var numWinRate = obj[fHeroId]['WinRate'];
var numTryRate = obj[fHeroId]['TryRate'];

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
      <div> Popularity: ${numTryRate}% </div> 
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

else {
   return html`
   
   `;
   }
}




function All() {
const [visibleF, setVisibleF] = useState(false);


const [cRatioGW, setRGW] = useState(50);
const [cRatioED, setRED] = useState(50);

const [pointFriend, setPointFriend] = useState(listOPF);
const [pointCounter, setPointCounter] = useState(listOPC);

const [fHeroId, setFocus] = useState("None");
const [fWhich, setWhich] = useState("Friend");

function updatePoint(which) {

   if (which == "Friend") {
      var obj = objMatchupFriend;
      var point = listOPF;
   } else {
      var obj = objMatchupCounter;
      var point = listOPC;
   }
   
   for (var iHero = 0; iHero < numHero; iHero++) {
       var cHero = point[iHero]['HeroID']
       point[iHero]['Point'] =
           (100 - cRatioGW) * obj[cHero]['zTry']
           + cRatioGW * obj[cHero]['zWin']
           + (cRatioED - 50) * obj[cHero]["zDiff"]
   }
   
   point = point.sort((a, b) => (a.Point > b.Point) ? -1 : 1);
   
   
   if (which == "Friend") {
      listOPF = point;
   } else {
      listOPC = point;
   }
   
   setPointFriend(listOPF);
   setPointCounter(listOPC);
};


function changeRGW(x){
   setRGW(x); 
   updatePoint("Friend");
   updatePoint("Counter");
}
   
function changeRED(x){
   setRED(x); 
   updatePoint("Friend");
   updatePoint("Counter");
}

updatePoint(listOPF);
updatePoint(listOPC);


 


function focusHero(x, y) {   
   if (x == "None") {
      setVisibleF(false);
   } else {
      setFocus(x);
      setWhich(y);
      setVisibleF(true);
   }
}


return html`
<${divMenu} />

<${Setting}  
changeRGW=${changeRGW} cRatioGW=${cRatioGW}
changeRED=${changeRED} cRatioED=${cRatioED} 
/>
   
<div id="divContent">
<${Heroes} point=${pointFriend}  focusHero=${focusHero} which=${"Friend"}/>
<${Heroes} point=${pointCounter}  focusHero=${focusHero} which=${"Counter"}/>
</div>

<${Card} focusHero=${focusHero} fHeroId=${fHeroId}  visibleF=${visibleF} fWhich=${fWhich}/>


`;   
}

render(html`<${All}/>`, document.body);

