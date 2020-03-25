/* https://github.com/developit/htm */
import { html, Component, render, useState } from 'https://ghtea.github.io/combiname/common/standalone.module.js';

const allHDT = 500;
const minHDT = 44;

const listLevel = [1,4,7,10,13,16,20];
const listLevelText = ['01', '04', '07', '10', '13', '16', '20'];

var lengthEachLevel = {};

var talentAll = {};
talentAll['01'] = [];
talentAll['04'] = [];
talentAll['07'] = [];
talentAll['10'] = [];
talentAll['13'] = [];
talentAll['16'] = [];
talentAll['20'] = [];

const listTalentId = Object.keys(objTalentMeta);

const HeroID = objTalentMeta[listTalentId[0]]['HeroID'];


/* 특성들 레벨별로 정리*/
for (var iTalent = 0; iTalent < listTalentId.length; iTalent++) {

   let cTalent = objTalentMeta[listTalentId[iTalent]];
   
   switch(cTalent['Level']) {
   case 1:
      talentAll['01'].push(cTalent);
      break;
   case 4:
      talentAll['04'].push(cTalent);
      break;
   case 7:
      talentAll['07'].push(cTalent);
      break;
   case 10:
      talentAll['10'].push(cTalent);
      break;
   case 13:
      talentAll['13'].push(cTalent);
      break;
   case 16:
      talentAll['16'].push(cTalent);
      break;
   case 20:
      talentAll['20'].push(cTalent);
      break;
   }   
}

for (var iLevel = 0; iLevel < listLevelText.length; iLevel++) {
   var cLevel = listLevelText[iLevel];
   lengthEachLevel[cLevel] = talentAll[cLevel].length;
   
   talentAll[cLevel].sort(function(a, b) { 
    return b.Popularity - a.Popularity;
})
}



/* zfill ex: (1).pad(3) // => "001" */
Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {s = "0" + s;}
  return s;
}


/*  color blend  rgb: [255, 255, 255] */
function blendColor(ZeroToOne, rgbStart, rgbEnd){

    var wStart = 1 - ZeroToOne;
    var wEnd = ZeroToOne;

    var rgb = [Math.round(rgbStart[0] * wStart + rgbEnd[0] * wEnd),
        Math.round(rgbStart[1] * wStart + rgbEnd[1] * wEnd),
            Math.round(rgbStart[2] * wStart + rgbEnd[2] * wEnd)];
    return rgb;
};


/* components */

function divTop() {
return html`
   <div id="divTop"> 
      <div>
         <img src="../../0/images/heroes/${HeroID}.png"/>
         <p> <b>${objHeroBasic[HeroID]['HeroName']}</b> </p>
      </div>
   </div>
`;
}

function divTabBack() {
return html`
<div id="divTabBack" >
<div id="divTab" >
      <!--<div id="tabBasic" > Basic </div> -->
      <div id="tabTalent" > Talents </div> 
      <div id="tabBuild" > <a href="ss"> Builds </a> </div>
      <!--<div id="tabPick" >Pick</div>-->
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

function Talent ({talentId, levelText, focusTalent, talentIdF}) {

   console.log(levelText);
   
   function focusTalent1(event) {
focusTalent(event.target.getAttribute('data-talentId'));

  };
  var strImgClass = "imgTalent";
  
  if (talentIdF == talentId) {
      strImgClass = "imgTalent imgEffect";
   } else {
      strImgClass = "imgTalent";
   };
   
   
   var wZeroToOne = 0;
   
   if (objTalentMeta[talentId]['WinRate'] < 35) {
      wZeroToOne = 0;
   } else if (objTalentMeta[talentId]['WinRate'] > 65) {
      wZeroToOne = 1;
   } else {
      wZeroToOne = (objTalentMeta[talentId]['WinRate'] - 35) / 30;
   }
   
   
   var rgbListW = blendColor(wZeroToOne, [255,0,0], [0,255,0]);
   
   
   
  
   var heigthDivTalent = minHDT + (allHDT - minHDT * lengthEachLevel[levelText]) * objTalentMeta[talentId]['Popularity'] / 100;
  
   return html`
  <div
   class="divTalent"
   style="
      height:${heigthDivTalent};
      background-color:rgb(${rgbListW[0]}, ${rgbListW[1]}, ${rgbListW[2]});
      "
   >
  
  <img 
  data-talentId="${talentId}"
  class="${strImgClass}"
  src="../../0/images/talents/${HeroID}/${talentId}.png" 
  onClick=${focusTalent1}
  />
  
  </div>
`
}


function Level ({level, focusTalent, talentIdF}) {

  var levelText = level.pad(2);
  
   return html`
<div class="colLevel">
   <div class="textLevel"> ${levelText}
   </div>
   <div class="divTalentGroup">
   ${talentAll[levelText].map((talent, index)=> html`
   <${Talent} talentId=${talent['TalentId']} focusTalent=${focusTalent} talentIdF=${talentIdF}  levelText=${levelText} />
   `)}
   </div>
</div>
`
}


/*
   <div class="divWinRate"> 
      <div>WinRate</div>
      <div class="barWinRate" style="height: 20px; width: ${(objHeroBuild[iBuild]['WinRate'] - 40)*8}px;"></div>
      <div> ${(Math.round(objHeroBuild[iBuild]['WinRate']*10)/10).toString() + "%"} </div>
   </div>
  </div>
`;
};
*/



function divContent({focusTalent, talentIdF}){
return html`
   <div id="divContent">
   ${listLevel.map((level, index)=> html`
   <${Level} level=${level} focusTalent=${focusTalent} talentIdF=${talentIdF} />
   `)}
   </div>
`;
}



function divTalentInfo ({talentIdF}) { 

   if (talentIdF == "0") {
      var strClass = "";
      var strTalentName= "";
      var strTalentDescription = "";
   } else {
      var strClass ="allVisible";
      var strTalentName= objHeroTalent[talentIdF]['TalentName'];
      var strTalentDescription = objHeroTalent[talentIdF]["Description"];
   }
   
   return html`
   <div id="divTalentInfo" class=${strClass}>
      <div class="divTalentName">${strTalentName} </div>
      <div class="divTalentDescription"> ${strTalentDescription}
   </div>   
   </div>
`;
};

function All() {
   const [talentIdF, setTalent] = useState('None');
   function focusTalent(x){
    setTalent(x);
   }
return html`
<${divMenu}/>
<${divContent} focusTalent=${focusTalent} talentIdF=${talentIdF}  />
<${divTalentInfo} talentIdF=${talentIdF} />
`;   
}

render(html`<${All}/>`, document.body);

