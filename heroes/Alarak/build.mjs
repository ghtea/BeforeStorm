/* https://github.com/developit/htm */

import { html, Component, render } from 'https://ghtea.github.io/StormBook/0/common/standalone.module.js';

/* manipulate data */
objHeroBuild.sort(function(a, b) { 
    return b.WinRate - a.WinRate;
})
const listLevel = ['01', '04', '07', '10', '13', '16', '20'];

const HeroID = objHeroBuild[0]['HeroID']

var currentTalent = '0';

/* making functions */
const changeCurrentTalent = (event) => {
   currentTalent = event.target.getAttribute('data-talentId');
};

/* components */

const divTop = () => html`
   <div id="divTop"> 
      <div>
         <img src="../../0/images/heroes/${HeroID}.png"/>
         <p> <b>${HeroID}</b> </p>
      </div>
   </div>
`;

const divTabBack = () => html`
<div id="divTabBack" >
<div id="divTab" >
      <div id="tabBasic" > Basic </div>
      <div id="tabTalent" > Talents</div>
      <div id="tabBuild" >Builds</div>
      <div id="tabPick" >Pick</div>
      </div>
      </div>
`;

const Build = ({iBuild}) => {
   let listTalent = [
objHeroBuild[iBuild]['01'], objHeroBuild[iBuild]['04'], objHeroBuild[iBuild]['07'], objHeroBuild[iBuild]['10'], objHeroBuild[iBuild]['13'], objHeroBuild[iBuild]['16'], objHeroBuild[iBuild]['20']]
   let listTalentId = listTalent.map((x, index) => listLevel[index] + "_" + x.replace(/\s/g, '_'));
   
   
   
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
      <td>
  <img 
  data-talentId="${talentId}"
  class="imgTalent"     
  src="../../0/images/talents/${HeroID}/${talentId}.png" 
  onClick=${changeCurrentTalent()}
  />
      </td>
      `)}
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

const divMenu = () => html`
   <div id="divMenu">
   <${divTop} />
   <${divTabBack} />
   </div>
`


const divContent = () => html`
   <div id="divContent">
   ${objHeroBuild.map((build, index)=> html`
      <${Build} iBuild=${index}/>`)}
   </div>
`;

const divTalentInfo = () => {
return html`
   <div id="divTalentInfo">
      <div class="divTalentName"> ${"COUNTER-STRIKE"}</div>
      <div class="divTalentDescription"> ${"hahahahahahahahhaa"}
   </div>   
   </div>
`;
}

const All = () => html`
<${divMenu}/>
<${divContent}/>
<${divTalentInfo}/>
`;   

render(html`<${All}/>`, document.body);
