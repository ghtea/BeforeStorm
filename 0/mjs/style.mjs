/* https://github.com/developit/htm */

import { html, Component, render, useState} from 'https://beforestorm.avantwing.com/0/common/standalone.module.js';

import {Basic, Dynamite, Knife, Shield} from '../svgs/style/scoreIcons.mjs';



const infoDate = "2020. 4. 14. (UTC +9)";
const infoVerHM = "2.49.4.78725";
const infoVerHH = "2.49";


const sourceDataText = "Heroes Profile API";
const sourceDataLink = "https://api.heroesprofile.com";

const sourceImgText = "Heroes of the Storm Wiki";
const sourceImgLink = "https://heroesofthestorm.gamepedia.com/Heroes_of_the_Storm_Wiki";

const sourceDiffText = "Heroes of the Storm Wiki";
const sourceDiffLink ="https://heroesofthestorm.gamepedia.com/Heroes_of_the_Storm_Wiki";

const numHero = Object.keys(objHeroBasic).length;

const numTop = 13;
const adjustBarWidth = 75/5;
const adjustBarHeight = 44/7;

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


/* components */

function partStatic({changeRoles, cRoles, numRerender}) {
   
   
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
   
   
   
   
   /*setInterval(changeMessage, 10000);*/
   
return html`
   <div id="Header"> 
      <div id="BeforeStorm">
         BEFORE STORM: STYLE
      </div>
      
   </div>
   
   <div id="Tab" >
      <div id="TabFront" >
      
      <div id="tabFeedback"> <a href="https://forms.gle/iYcMrUcJ52f8my5n6" >  📨 </a> </div>
      
      <div id="tabMeta"> <a href="meta.html" >  META </a> </div>
      
      <div id="tabStyle"> <a href="style.html" >  STYLE </a> </div>

      <div id="tabLink"><button id="btnCopy" class="btn" data-clipboard-text="beforestorm.avantwing.com/meta">
    🔗
</button> </div>
      
      </div>
   </div>
   
   
   <div id="Setting" >
      
      <div>SORT: What is more important?</div>
      
      <div>
      <div>Number <br/> of Games</div>
      <div><input type="range"/></div>
      <div> WinRate</div>
      </div>
          
      <div>
      <div> difficulty: <br /> Easy </div>
      <div><input type="range"/></div>
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
   `;}
   








function hero1({heroId, focusHero, cRoles}) {


if ( cRoles.includes(objHeroBasic[heroId]['Role']) ) { var onoff = "on";}
else { var onoff = "off";}




let listSubScore2 = [];
let listSubScore1 = [];

for (let iOtherScore = 1; iOtherScore < Object.keys(objHeroOtherScoreZ[heroId]).length; iOtherScore++) {
   
   let cOtherScoreName = Object.keys(objHeroOtherScoreZ[heroId])[iOtherScore]
   let cOtherScore = objHeroOtherScoreZ[heroId][cOtherScoreName]
   
   if (cOtherScore >= 2) {
listSubScore2.push(cOtherScoreName)
      
   }
   
   else if (cOtherScore >= 1) {
listSubScore1.push(cOtherScoreName)
      
   }
}




for (let iManualScore = 1; iManualScore < Object.keys(objHeroManualScoreZ[heroId]).length; iManualScore++) {
   
   let cManualScoreName = Object.keys(objHeroManualScoreZ[heroId])[iManualScore]
   let cManualScore = objHeroManualScoreZ[heroId][cManualScoreName]
   
   if (cManualScore >= 2) {
listSubScore2.push(cManualScoreName)
      
   }
   
   else if (cManualScore >= 1) {
listSubScore1.push(cManualScoreName)
      
   }
}



let cTimer = objHeroFactorScoreZ[heroId]['Timer']
if (cTimer <= -2) {
    listSubScore2.push("very early game");
}
else if (cTimer <= -1) {
    listSubScore1.push("early game");
}
else if (cTimer >= 2) {
    listSubScore2.push("very late game");
}
else if (cTimer >= 1) {
    listSubScore1.push("late game");
}


let cShoes = objHeroFactorScoreZ[heroId]['Shoes']
if (cShoes <= -2) {
    listSubScore2.push("stay around well");
}
else if (cShoes <= -1) {
    listSubScore1.push("stay around");
}
else if (cShoes >= 2) {
    listSubScore2.push("go around well");
}
else if (cShoes >= 1) {
    listSubScore1.push("go around");
}


function focusHero1(event) {
   focusHero(event.target.getAttribute('data-heroId'));
};

return html`
         
   <div class="divEachHero" data-onoff="${onoff}">
      
      <div 
         class="leftEachHero"
         data-role="${objHeroBasic[heroId]['Role']}"
         >
      <div 
      class="backHero"
      data-role="${objHeroBasic[heroId]['Role']}">
      
         <img
         data-heroId="${heroId}"
         class="imgHero" 
         src="0/images/heroes/${heroId}.png" 
         onClick=${focusHero1} 
         />
      </div>
      </div>
      
      
      
      <div class="rightEachHero">
      
      <div class="rightTopEachHero">
      
      
      
      <div class="groupScoreIcon">
      
      <${Basic} 
         cAttackRange=${objHeroBasic[heroId]["Attack Range"]}
         cDiffText=${objHeroBasic[heroId]["DiffText"]}
         />
      
         <${Shield} 
            x=${objHeroFactorScoreZ[heroId]["Shield"]}
         />
         
         <${Dynamite}
            x=${objHeroFactorScoreZ[heroId]["Dynamite"]}
         />
         <${Knife} 
            x=${objHeroFactorScoreZ[heroId]["Knife"]}
         />
         
      </div>
         
      
      
      </div>
   
   <div class="rightBottomEachHero">
   <div class="groupSubScoreIcon">
      
      ${listSubScore2.map((nameScore) => html`
   <div
      data-score="${nameScore}"
      class="divSubScore"
   >
      ${nameScore}
   </div>
   `)}

${listSubScore1.map((nameScore) => html`
   <div
      data-score="${nameScore}"
      class="divSubScore"
   >
      ${nameScore}
   </div>
   `)}
      
   </div>
   </div>
   </div>
   
   </div>
`;
}
   

function All() {

const [numRerender, setRerender] = useState(0);
function forceRerender() {
   setRerender(numRerender + 1);
}

const [point, setPoint] = useState(listObjHeroPoint);


const [visibleF, setVisibleF] = useState(false);

const [cRoles, setRoles] = useState(['Tank', 'Bruiser', 'Melee Assassin', 'Ranged Assassin', 'Healer', 'Support']);



function changeRoles(x) {
   setRoles(x);
   forceRerender();
}

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
changeRoles=${changeRoles}
cRoles=${cRoles}
numRerender=${numRerender}
/>


<div id="divContent">
   <div id="Heroes">
   
   ${point.map((objHero, index)=> html`
   <${hero1} 
   heroId=${objHero['HeroID']} 
   focusHero=${focusHero}
   cRoles=${cRoles}
   />
   `)}
   
   </div>
</div>


`;   
}

render(html`<${All}/>`, document.body);
