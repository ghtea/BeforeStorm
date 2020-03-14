/* https://github.com/developit/htm */

import { html, Component, render } from 'https://ghtea.github.io/StormBook/0/common/standalone.module.js';

/* manipulate data */
objHeroBuild.sort(function(a, b) { 
    return b.WinRate - a.WinRate;
})
const listLevel = ['01', '04', '07', '10', '13', '16', '20'];

const HeroID = objHeroBuild[0]['HeroID']


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

   return html`
<div class="divBuild">
      <div class="divBuildTitle"> <p> Build ${iBuild + 1}
      </p></div>
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
      <td><img class="imgTalent"  src="../../0/images/talents/${HeroID}/${"01_"+(objHeroBuild[iBuild]['01']).replace(/\s/g, '_')}.png" /></td>
      <td><img class="imgTalent"  src="../../0/images/talents/${HeroID}/${"04_"+(objHeroBuild[iBuild]['04']).replace(/\s/g, '_')}.png" /></td>
      <td><img class="imgTalent"  src="../../0/images/talents/${HeroID}/${"07_"+(objHeroBuild[iBuild]['07']).replace(/\s/g, '_')}.png" /></td>
      <td><img class="imgTalent"  src="../../0/images/talents/${HeroID}/${"10_"+(objHeroBuild[iBuild]['10']).replace(/\s/g, '_')}.png" /></td>
      <td><img class="imgTalent"  src="../../0/images/talents/${HeroID}/${"13_"+(objHeroBuild[iBuild]['13']).replace(/\s/g, '_')}.png" /></td>
      <td><img class="imgTalent"  src="../../0/images/talents/${HeroID}/${"16_"+(objHeroBuild[iBuild]['16']).replace(/\s/g, '_')}.png" /></td>
      <td><img class="imgTalent"  src="../../0/images/talents/${HeroID}/${"20_"+(objHeroBuild[iBuild]['20']).replace(/\s/g, '_')}.png" /></td>
      </tr>

   </table>
  
   <div class="divWinRate"> 
      <div>WinRate</div>
      <div class="barWinRate" style="height: 20px; width: ${(objHeroBuild[iBuild]['WinRate']-40)*8}px;">  </div>
      <div> ${(Math.round(objHeroBuild[iBuild]['WinRate']*10)/10).toString() + "%"} </div>
   </div>
  
  </div>
`;
}

const divContent = () => html`
   ${objHeroBuild.map((build, index)=> html`
      <${Build} iBuild=${index}/>`)}
`



const All = () => html`
<${divTop}/>
<${divTabBack}/>
<${divContent} />
`;
   
   
render(html`<${All}/>`, document.body);
