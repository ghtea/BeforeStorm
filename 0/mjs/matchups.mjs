/* https://github.com/developit/htm */

import { html, Component, render, useState} from 'https://beforestorm.avantwing.com/0/common/standalone.module.js';



const mainHeroID = objMatchupFriend[Object.keys(objMatchupFriend)[0]]['mainHeroID'];


const numHero = Object.keys(objHeroBasic).length
const numTop = 6;
const adjustBarWidth = 75/5;
const adjustBarHeight = 44/11;

const allRoles = ['Tank', 'Bruiser', 'Melee Assassin', 'Ranged Assassin', 'Healer', 'Support'];
var cRolesGlobal = ['Tank', 'Bruiser', 'Melee Assassin', 'Ranged Assassin', 'Healer', 'Support'];

var cRoleButtonsGlobal = {'Tank':"on", 'Bruiser':"on",  'Melee Assassin':"on", 'Ranged Assassin':"on",  'Healer':"on", 'Support':"on"};

   
/* 0:Friend, 1:Counter */
var bothPoint = [[],[]];

for (var iPoint=0; iPoint < bothPoint.length; iPoint++) {

for (var iHero = 0; iHero < numHero; iHero++) {

   if ( mainHeroID != objHeroBasic[Object.keys(objHeroBasic)[iHero]]["HeroID"] ) 
   
   {
       bothPoint[iPoint].push({
         "HeroID": objHeroBasic[Object.keys(objHeroBasic)[iHero]]["HeroID"],
         "Point": 0
       })   
   }
}

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
function divTop() {
return html`
   <div id="divTop"> 
   
      <div>
         <img src="../../0/images/heroes/${mainHeroID}.png"/>
         <div> ${objHeroBasic[mainHeroID]['HeroName']}</div>
      </div>
         
      <div> <a href="https://beforestorm.avantwing.com/meta"> HOME </a> </div>
         
   </div>
`;
}

function divTabBack() {
return html`
<div id="divTabBack" >
<div id="divTab" >

      <div id="tabTalents" > <a href="talents.html"> Talents </a> </div> 
      <div id="tabBuilds" > <a href="builds.html"> Builds </a> </div>
      <div id="tabMatchups" > <a href="matchups.html"> Match-Ups </a> </div>
      
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

function partStatic({
changeRGW, cRatioGW, 
changeRED, cRatioED, 
changeRoles, cRoles, 
pointFriend, pointCounter, 
numRerender,
changeAboutBan, aboutBan
}) {

var textAboutBan;
if (aboutBan == "zPlay") {
   textAboutBan = 'SORT: "Adjusting Played Games Only"';
} else {
   textAboutBan = 'SORT: "Including Ban Numbers Too"';
}
   
   function changeRGW1(event) {
      changeRGW(event.target.value);
   }
   function changeRED1(event) {
      changeRED(event.target.value);
   }
   
   function changeAboutBan1() {
      changeAboutBan();
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
      
   }
   
   
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
      
   <div id="divAboutBan">
      <div>${textAboutBan} </div>
      <div 
         id="buttonAboutBan"
         onClick=${changeAboutBan1}
         > CHANGE
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
      
   
`;
}


function heroTop({heroId, focusHero, cRoles, which}) {
   
   var obj;
   var iPoint;
   
if (which == "friend") {
   obj = objMatchupFriend;
   iPoint = 0;
} else {
   obj = objMatchupCounter;
   iPoint = 1;
}


var onoff;
if ( cRoles.includes(objHeroBasic[heroId]['Role']) ) { onoff = "on";}
else { onoff = "off";}

/* 허용된총너비가 6*std(1 여유해서 7), 중앙이 평균점 */

var numWidth = (obj[heroId]['zWin'] + 2) * adjustBarWidth;
var numHeight = (obj[heroId]['zPlay'] + 2) * adjustBarHeight;

var widthBar50 = 2;
var numLeft50 = 2 * adjustBarWidth - widthBar50 / 2;

var numWinRate = obj[heroId]['WinRate']
var numTryRate = obj[heroId]['TryRate']

var numPlayRate = obj[heroId]['PlayRate']
var numPlays = obj[heroId]['Plays'];;

if (numWidth < 2) {numWidth = 2;}
if (numHeight < 2) {numHeight = 2;}


function focusHero1(event) {
   focusHero(event.target.getAttribute('data-heroId'), event.target.getAttribute('data-which'));
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
      src="../../0/images/heroes/${heroId}.png" 
      
      data-which="${which}"
      onClick=${focusHero1} 
      />
         </div>
         
      <div class="groupBar">
         <div style="width:${numWidth}px; height:${numHeight}px;" class="barMain"> </div>
         <div style="left:${numLeft50}px;" class="bar50"></div>
      </div>
         
      <div class="groupNumber">
         <div> ${numWinRate}% </div>
         <div> ${numPlayRate}% </div>
      </div>
         
   </div>
`;
}


function heroOthers({heroId,focusHero, cRoles, which}) {

var onoff;
if ( cRoles.includes(objHeroBasic[heroId]['Role']) ) { onoff = "on";}
else { onoff = "off";}


function focusHero1(event) {
   focusHero(event.target.getAttribute('data-heroId'), event.target.getAttribute('data-which'));
   
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
      src="../../0/images/heroes/${heroId}.png" 
      
      data-which="${which}"
      onClick=${focusHero1} 
      />
         </div>
         
   </div>
`;
}


function Heroes({pointFriend, pointCounter, focusHero, cRoles, numRerender, which}) {

   var obj;
   var iPoint;
   
if (which == "friend") {
   obj = objMatchupFriend;
   iPoint = 0;
   
} else {
   obj = objMatchupCounter;
   iPoint = 1;
}
   
var pointTop = bothPoint[iPoint].slice(0, numTop);
var pointOthers = bothPoint[iPoint].slice(numTop,(numHero-1));



return html`
   <div class="Heroes">
      
      <div class="heroesTop"> 
      
${pointTop.map((objHero, index)=> html`
   <${heroTop} 
      heroId=${objHero['HeroID']} 
      focusHero=${focusHero} 
      cRoles=${cRoles} 
      which=${which} 
      />
`)}
      </div>
      
      <div class="heroesOthers"> 
         ${pointOthers.map((objHero, index)=> html`
   <${heroOthers} 
      heroId=${objHero['HeroID']} 
      focusHero=${focusHero} 
      cRoles=${cRoles}
      which=${which}
      />
`)}
      </div>
   </div>
`;
}


function Card({focusHero, fHeroId, visibleF, which}) {

var obj;
var iPoint;
var conjunction;

if (which == "friend") {
      obj = objMatchupFriend;
      iPoint = 0;
      conjunction = "with"; 
   } else {
      obj = objMatchupCounter;
      iPoint = 1;
      conjunction = "vs";
   }

var numWinRate = obj[fHeroId]['WinRate'];
var numTryRate = obj[fHeroId]['TryRate'];

var numPlayRate = obj[fHeroId]['PlayRate'];
var numPlays = obj[fHeroId]['Plays'];


var numRank = bothPoint[iPoint].findIndex(x => x['HeroID'] == fHeroId) + 1;

function closeCard() {
   focusHero("None", "friend");
};

if (visibleF) {
   
   return html`
   <div id="cardFocus" data-which="${which}">
      
      <div id="cardLeft"> 
      
      <div id="closeCard" onClick=${closeCard} > close </div>
      
      <div>
      <img id="imgHeroCard" src="../../0/images/heroes/${fHeroId}.png" /> 
      <div> #${numRank} </div>
      </div>
      
      </div>
      
      
   <div id="cardMid"> 
      <div> ${objHeroBasic[fHeroId]['HeroName']} </div>
      <div data-conjunction="${which}">  ${conjunction} </div>
      <div> ${objHeroBasic[mainHeroID]['HeroName']} </div>   
      <div> WinRate: ${numWinRate}% </div> 
      <div> MatchRate: ${numPlayRate}% </div> 
      </div>

      
   <div id="cardRight"> 
         
         <div><a href="../../heroes/${fHeroId}/talents.html">Talents</a></div>
         <div><a href="../../heroes/${fHeroId}/builds.html">Builds</a></div>
         
         <div><a href="../../heroes/${fHeroId}/matchups.html">Match-Ups</a></div>
         
      </div>  
      
      
      
   </div>
   `;
   }

else {
   return html``;
   }
}


function All() {

const [numRerender, setRerender] = useState(0);
function forceRerender() {
   setRerender(numRerender + 1);
}


const [visibleF, setVisibleF] = useState(false);

const [cRatioGW, setRGW] = useState(50);
const [cRatioED, setRED] = useState(50);

const [cRoles, setRoles] = useState(['Tank', 'Bruiser', 'Melee Assassin', 'Ranged Assassin', 'Healer', 'Support']);

const [aboutBan, setAboutBan] = useState('zPlay');


const [pointFriend, setPointFriend] = useState(bothPoint[0]);
const [pointCounter, setPointCounter] = useState(bothPoint[1]);

const [fHeroId, setFocus] = useState("None");

const [fWhich, setWhich] = useState("friend");



/* 한 쪽만 따로 */
function updatePoint(which, aboutBan) {

   var obj;
   var iPoint;
   
if (which == "friend") {
   obj = objMatchupFriend;
   iPoint = 0;
   
} else {
   obj = objMatchupCounter;
   iPoint = 1;
}

   
   /* 자기자신 제외! */
   for (var iHero = 0; iHero < (numHero - 1); iHero++) {
       var cHero = bothPoint[iPoint][iHero]['HeroID']
       bothPoint[iPoint][iHero]['Point'] =
           (100 - cRatioGW) * obj[cHero][aboutBan]
           + cRatioGW * obj[cHero]['zWin']
           + (cRatioED - 50) * objHeroBasic[cHero]["zDiff"]
   }
   
   bothPoint[iPoint] = bothPoint[iPoint].sort((a, b) => (a.Point > b.Point) ? -1 : 1);
   
   
   if (which == "friend") {
   setPointFriend(bothPoint[iPoint]);
   } 
   
   else {
   setPointCounter(bothPoint[iPoint]);
   }
   
};





function changeRoles(x) {
   setRoles(x);
   forceRerender();
}

function changeAboutBan() {
   if (aboutBan == "zPlay") {
      setAboutBan("zTry")   
   } else {
      setAboutBan("zPlay") 
   }
   updatePoint("friend",aboutBan);
   updatePoint("counter",aboutBan);
}
   
function changeRGW(x){setRGW(x); updatePoint("friend",aboutBan);
updatePoint("counter",aboutBan);}

function changeRED(x){setRED(x); updatePoint("friend",aboutBan);
updatePoint("counter",aboutBan);}


updatePoint("friend",aboutBan);
updatePoint("counter",aboutBan);


function focusHero(x, which) {   
   if (x == "None") {
      setVisibleF(false);
   } else {
      setFocus(x);
      setVisibleF(true);
      setWhich(which);
   }
}


return html`
<${divMenu}/>

<${partStatic}  
changeRGW=${changeRGW} cRatioGW=${cRatioGW}
changeRED=${changeRED} cRatioED=${cRatioED}
pointFriend=${pointFriend}  pointCounter=${pointCounter} 
changeRoles=${changeRoles}
cRoles=${cRoles}
numRerender=${numRerender}
changeAboutBan=${changeAboutBan}
aboutBan=${aboutBan}
/>


<div id="divContent">

<div id="colFriend">
<div id="titleFriend"> Best Friends </div>
<${Heroes} 
pointFriend=${pointFriend} 
pointCounter=${pointCounter} 
focusHero=${focusHero} 
cRoles=${cRoles}
numRerender=${numRerender}
which=${"friend"}
/>
</div>

<div id="colCounter">
<div id="titleCounter"> Best Counters </div>
<${Heroes} 
pointFriend=${pointFriend} 
pointCounter=${pointCounter} 
focusHero=${focusHero} 
cRoles=${cRoles}
numRerender=${numRerender}
which=${"counter"}
/>
</div>

</div>

<${Card} 
focusHero=${focusHero} 
fHeroId=${fHeroId}  
visibleF=${visibleF} 
which=${fWhich}
/>

`;   
}

render(html`<${All}/>`, document.body);



