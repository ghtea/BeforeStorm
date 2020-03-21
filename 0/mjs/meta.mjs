/* https://github.com/developit/htm */

import { html, Component, render, useState } from 'https://ghtea.github.io/BeforeStorm/0/common/standalone.module.js';

const numHero = Object.keys(objHeroBasic).length

/* first make of point */
var listObjHeroPoint = [];
for (var iHero = 0; iHero < numHero; iHero++) {
       listObjHeroPoint.push({
         "HeroID": objHeroBasic[Object.keys(objHeroBasic)[iHero]]["HeroID"],
         "Point": 0
       })
   }
console.log(listObjHeroPoint);



/* components */

function partStatic({changeMap, cMap, point}) {

   function changeMap1(event) {
      changeMap(event.target.value);
   }
   
return html`
   <div id="Header"> 
      <div>
         BEFORE STORM: ${cMap}
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
      <div>Winrate</div>
      <div><input type="range"/></div>
      <div> Number <br/> of Games</div>
      </div>
          
      <div>
      <div> difficulty: <br /> Easy </div>
      <div><input type="range"/></div>
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


function Heroes() {
return html`
   <div id="Heroes">
      <div id="heroesTop"> 
      
         <div> 
         
         <div class="backHero roleMA">
         <img class="imgHero" src="0/images/heroes/Alarak.png" /> 
         </div>
         
         <div class="groupBar">
            <div style="width:44px height: 30px" class="bar1"> </div>
         </div>
         
         <div class="groupNumber">
            <div> 55.4% </div>
            <div> 1 / 15.5 </div>
         </div>
         
         </div>
         
         <div> </div>
         <div> </div>
         <div> </div>
         <div> </div>
         <div> </div>
         <div> </div>
         <div> </div>
         <div> </div>
         <div> </div>
      </div>
      
      <div id="heroesOthers"> 
         <div> </div>
         <div> </div>
         <div> </div>
         <div> </div>
         <div> </div>
         <div> </div>
         <div> </div>
         <div> </div>
         <div> </div>
         <div> </div>
         <div> </div>
         <div> </div>
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

const [point, setPoint] = useState([]);


function updatePoint() {
   for (var iHero = 0; iHero < numHero; iHero++) {
       var cHero = listObjHeroPoint[iHero]['HeroID']
       
       
       listObjHeroPoint[iHero]['Point'] =
           (100 - cRatioGW) * objHeroMap[cMap][cHero]['zGame']
           + cRatioGW * objHeroMap[cMap][cHero]['zWin']
           + (cRatioED - 50) * objHeroBasic[cHero]["Difficulty"]
   }
   
   listObjHeroPoint = listObjHeroPoint.sort((a, b) => (a.Point > b.Point) ? 1 : -1);
   
   setPoint(listObjHeroPoint);
   
   console.log(listObjHeroPoint);
   console.log('point: ', point);
};

function changeMap(x){
   setMap(x); updatePoint();}
function changeRGW(x){setRGW(x)}
function changeRED(x){setRED(x)}


return html`
<${partStatic} 
changeMap=${changeMap} cMap=${cMap} 
changeRGW=${changeMap} cRatioGW=${cRatioGW}
changeRED=${changeRED} cRatioED=${cRatioED}
point = ${point}
/>
   
<${Heroes} />
<${card}/>
`;   
}

render(html`<${All}/>`, document.body);
