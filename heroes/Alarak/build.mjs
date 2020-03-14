/* https://github.com/developit/htm */

import { html, Component, render } from 'https://ghtea.github.io/StormBook/0/common/standalone.module.js';

objHeroBuild.sort(function(a, b) { 
    return a.WinRate - b.WinRate;
})

const divTop = () => html`
   <div id="divTop"> 
      <div>
         <img src="../../0/images/heroes/Alarak.png"/>
         <p> <b>Alarak</b> </p>
      </div>
   </div>
`;
const divTabBack = () => html`
<div id= "divTabBack" >
<div id= "divTab" >
      <div id="tabBasic" > Basic </div>
      <div id="tabTalent" > Talents</div>
      <div id="tabBuild" >Builds</div>
      <div id="tabPick" >Pick</div>
      </div>
      </div>
`;

const Build = ({iBuild}) => html`
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
      <td> <img class="imgTalent"  src="../../0/images/talents/Alarak/04_Show_of_Force.png" /> </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      </tr>
      
   </table>
  
   <div class="divWinRate"> 
      <div>WinRate</div>
      <div class="barWinRate">  </div>
      <div> 55.5% </div>
   </div>
  
  </div>
`;

const All = () => html`
<${divTop}/>
<${divTabBack}/>
<${Build} iBuild=${0}/>
`;
   
   


render(html`<${All}/>`, document.body);
