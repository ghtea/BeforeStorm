/* https://github.com/developit/htm */
import { html, Component, render, useState } from 'https://ghtea.github.io/combiname/common/standalone.module.js';


const listLevelText = ['01', '04', '07', '10', '13', '16', '20'];
const listLevel = [1,4,7,10,13,16,20];

const talentAll = {};
talentAll['01'] = [];
talentAll['04'] = [];
talentAll['07'] = [];
talentAll['10'] = [];
talentAll['13'] = [];
talentAll['16'] = [];
talentAll['20'] = [];

const listTalentId = Object.keys(objTalentMeta);

const HeroID = objTalentMeta[listTalentId[0]]['HeroID'];

console.log(listTalentId);


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

/* zfill ex: (1).pad(3) // => "001" */
Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {s = "0" + s;}
  return s;
}

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

function Talent ({talentId, focusTalent, talentIdF}) {

   function focusTalent1(event) {
focusTalent(event.target.getAttribute('data-talentId'));

  };
  var strImgClass = "imgTalent";
  
  if (talentIdF == talentId) {
      strImgClass = "imgTalent imgEffect";
   } else {
      strImgClass = "imgTalent";
   };
  
   return html`
  <div><img 
  data-talentId="${talentId}"
  class="${strImgClass}"
  src="../../0/images/talents/${HeroID}/${talentId}.png" 
  onClick=${focusTalent1}
  /></div>
`
}


function Level ({level, focusTalent, talentIdF}) {

  let LevelText = level.pad(2);
  
   return html`
<div class="colLevel">
   <div class="textLevel"> ${LevelText}
   </div>
   ${talentAll[LevelText].map((talent, index)=> html`
   <${Talent} focusTalent=${focusTalent} talentIdF=${talentIdF} />
   `)}
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
   <${Level} focusTalent=${focusTalent} talentIdF=${talentIdF} />
   `)}
   </div>
`;
}



function divTalentInfo ({ talentIdF}) { 

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

