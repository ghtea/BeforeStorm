/* https://github.com/developit/htm */

import { html, Component, render, useState } from 'https://ghtea.github.io/combiname/common/standalone.module.js';

/* manipulate data */
objHeroBuild.sort(function(a, b) { 
    return b.WinRate - a.WinRate;
})
const listLevel = ['01', '04', '07', '10', '13', '16', '20'];

const HeroID = objHeroBuild[0]['HeroID'];


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
      <div id="tabTalent" > <a href="talents.html"> Talents </a> </div> 
      <div id="tabBuild" > <a href="builds.html"> Builds </a> </div>
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


function Talent ({changeTalent3,talentId, currentTalent}) {
   function changeTalent4(event) {
changeTalent3(event.target.getAttribute('data-talentId'));
  };
  var strImgClass = "imgTalent";
  
  if (currentTalent == talentId) {
      strImgClass = "imgTalent imgEffect";
   } else {
      strImgClass = "imgTalent";
   };
  
   return html`
  <td><img 
  data-talentId="${talentId}"
  class="${strImgClass}"
  src="../../0/images/talents/${HeroID}/${talentId}.png" 
  onClick=${changeTalent4}
  /></td>
`
}

function Build({iBuild,changeTalent2, currentTalent}) {
   let listTalent = [
objHeroBuild[iBuild]['01'], objHeroBuild[iBuild]['04'], objHeroBuild[iBuild]['07'], objHeroBuild[iBuild]['10'], objHeroBuild[iBuild]['13'], objHeroBuild[iBuild]['16'], objHeroBuild[iBuild]['20']]
   let listTalentId = listTalent.map((x, index) => listLevel[index] + "_" + x.replace(/\s/g, '_').replace(/:/g,""));
   
   return html`
<div class="divBuild">
   <div class="divBuildTop">
      <div class="divBuildTitle"> <p> Build ${iBuild + 1}
      </p></div></div>     
      <table>  
      
      <colgroup>
          <col class="colS" />
          <col class="colS" />
          <col class="colS" />
          <col class="colS" />
          <col class="colS" />
          <col class="colS" />
          <col class="colS" />
      </colgroup>
      
      <tr>
      <th>1</th>
      <th>4</th>
      <th>7</th>
      <th>10</th>
      <th>13</th>
      <th>16</th>
      <th>20</th>
      </tr>
      
      <tr class="rowTalent">
      ${listTalentId.map((talentId, index)=> html`
      <${Talent} changeTalent3=${changeTalent2} talentId=${talentId} currentTalent=${currentTalent}
      />`
      )}
      </tr>

   </table>
  
   <div class="divWinRate"> 
      <div>WinRate</div>
      <div class="barWinRate" style="height: 20px; width: ${(objHeroBuild[iBuild]['WinRate'] - 40)*8}px;"></div>
      <div> ${(Math.round(objHeroBuild[iBuild]['WinRate']*10)/10).toString() + "%"} </div>
   </div>
  </div>
`;
};

/*  arrow function makes error */
function divContent({changeTalent1, currentTalent}){
return html`
   <div id="divContent">
   ${objHeroBuild.map((build, index)=> html`
      <${Build} changeTalent2=${changeTalent1} iBuild=${index} currentTalent=${currentTalent} />`)}
   </div>
`;
}

function divTalentInfo ({ currentTalent}) { 

   if (currentTalent == "0") {
      var strClass = "";
      var strTalentName= "";
      var strTalentDescription = "";
   } else {
      var strClass ="allVisible";
      var strTalentName= objHeroTalent[currentTalent]['TalentName'];
      var strTalentDescription = objHeroTalent[currentTalent]["Description"];
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
   const [currentTalent, setTalent] = useState('0');
   function changeTalent0(x){
    setTalent(x);
   }
return html`
<${divMenu}/>
<${divContent} changeTalent1=${changeTalent0} currentTalent=${currentTalent}  />
<${divTalentInfo} currentTalent=${currentTalent} />
`;   
}

render(html`<${All}/>`, document.body);
