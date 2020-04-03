/* https://github.com/developit/htm */

import { html, Component, render, useState} from 'https://beforestorm.avantwing.com/0/common/standalone.module.js';



const HeroID = obj1HeroMaps[Object.keys(obj1HeroMaps)[0]]['HeroID'];


const numMap = Object.keys(obj1HeroMaps).length

const adjustBarWidth = 100/5;
const adjustBarHeight = 25;

let pointGlobal = [];
   


for (var iMap = 0; iMap < numMap; iMap++) {
       pointGlobal.push({
         "Map": obj1HeroMaps[Object.keys(obj1HeroMaps)[iMap]]["Map"],
         "Point": 0
       })   
}


 


/* components */
function divTop() {
return html`
   <div id="divTop"> 
   
      <div>
         <img src="../../0/images/heroes/${HeroID}.png"/>
         <div> ${objHeroBasic[HeroID]['HeroName']}</div>
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
      <div id="tabMaps" > <a href="maps.html"> Maps </a> </div>
      
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
 
point, 
numRerender,
changeAboutBan, aboutBan
}) {

var textAboutBan;
if (aboutBan == "zPlay") {
   textAboutBan = '"Number of Games = Plays + Bans"';
} else {
   textAboutBan = '"Number of Games = Plays"';
}
   
   function changeRGW1(event) {
      changeRGW(event.target.value);
   }
   
   
   function changeAboutBan1() {
      changeAboutBan();
   }
   
return html`
   
   
   <div id="Setting" >
      
      <div>SORT: What is more important?</div>
      
      <div>
      <div>Number <br/> of Games</div>
      <div><input type="range" value=${cRatioGW} onChange=${changeRGW1}/></div>
      <div> WinRate</div>
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
   
`;
}


function map({cMap, aboutBan}) {

var numWidth = (obj1HeroMaps[cMap]['zWin'] + 2) * adjustBarWidth;
var numHeight = obj1HeroMaps[cMap]['Plays']/meanTrys * adjustBarHeight;
var numHeightBan = obj1HeroMaps[cMap]['Bans']/meanTrys * adjustBarHeight;

if (numWidth < 2) {numWidth = 2;}
if (numHeight < 2) {numHeight = 2;}
if (numHeightBan < 2) {numHeightBan = 2;}

var widthBar50 = 2;
var numLeft50 = 2 * adjustBarWidth;

var numWinRate = obj1HeroMaps[cMap]['WinRate']
var numPlays = obj1HeroMaps[cMap]['Plays']
var numBans = Math.round(obj1HeroMaps[cMap]['Bans'])



return html`
         
   <div class="map">
      
      <div 
      class="nameMap"
      > ${obj1HeroMaps[cMap]['Map']}
      </div>
         
      <div class="groupBar">
      
         <div class="barsMain">
         <div 
         class="barPlays"
         style="width:${numWidth}px; height:${numHeight}px;" > </div>
         
         <div 
         class="barBans"
         style="width:${numWidth}px; height:${numHeightBan}px;" > </div>
         </div>
         
         <div 
         class="bar50"
         style="left:${numLeft50}px;" > </div>
         
      </div>
      
      
      <div class="groupLabel">
         <div> ↔ WinRate: </div>
         <div> ↕ Plays: </div>
         <div> ↕ Bans: </div>
      </div>
      
      <div class="groupNumber">
         <div> ${numWinRate}% </div>
         <div> ${numPlays} </div>
         <div> ${numBans} </div>
      </div>
         
   </div>
`;
}



function All() {


const [numRerender, setRerender] = useState(0);

function forceRerender() {
   setRerender(numRerender + 1);
}


const [visibleF, setVisibleF] = useState(false);

const [cRatioGW, setRGW] = useState(66);


const [point, setPoint] = useState(pointGlobal);

const [fMap, setFocus] = useState("None");

const [aboutBan, setAboutBan] = useState('zPlay');



function updatePoint(aboutBan) {

   
   for (var iMap = 0; iMap < numMap; iMap++) {
       var cMap = pointGlobal[iMap]['Map']
       pointGlobal[iMap]['Point'] =
           (100 - cRatioGW) * obj1HeroMaps[cMap][aboutBan]
           + cRatioGW * obj1HeroMaps[cMap]['zWin']
   }
   
   pointGlobal = pointGlobal.sort((a, b) => (a.Point > b.Point) ? -1 : 1);
   
   setPoint(pointGlobal);
};




   
function changeRGW(x){
   setRGW(x); 
   updatePoint(aboutBan);
}


updatePoint(aboutBan);



function changeAboutBan() {
   if (aboutBan == "zPlay") {
      setAboutBan("zTry");
   } else {
      setAboutBan("zPlay");
   }
   updatePoint(aboutBan);
}



return html`
<${divMenu}/>

<${partStatic}  
changeRGW=${changeRGW} 
cRatioGW=${cRatioGW}

point=${point}  

numRerender=${numRerender}

changeAboutBan=${changeAboutBan}
aboutBan=${aboutBan}
/>

<div id="divContent">
${point.map((objMap, index)=> html`
   <${map} 
      cMap=${objMap['Map']} 
      aboutBan=${aboutBan} 
   />
`)}
</div>


`;   
}

render(html`<${All}/>`, document.body);




   
