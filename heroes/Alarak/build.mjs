/* https://github.com/developit/htm */

import { html, Component, render } from 'https://ghtea.github.io/StormBook/common/standalone.module.js';

const Build = () => html` 
<div class="divBuild">
      <div class="divBuildTitle"> <p> Build 1
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
      <td><img src="../../images/talents/Alarak/04_Show_of_Force.png" class = "imgTalent"></td>
      <td><img class = "imgTalent"></td>
      <td><img class = "imgTalent"></td>
      <td><img class = "imgTalent"></td>
      <td><img class = "imgTalent"></td>
      <td><img class = "imgTalent"></td>
      <td><img class = "imgTalent"></td>
      </tr>
   </table>
  
   <div class="divWinRate"> 
      <div>WinRate</div>
      <div class="barWinRate">  </div>
      <div> 55.5% </div>
   </div>
  
  </div>
`;


render(html`<${Build}/>`, document.body);

/*
  const CountryName = ({ countryCode }) => html`<h1>${objCountryBasic[countryCode]['Country']}</h1>`;



const CountryFlag = ({ countryCode })=> html`  <img class="imgFlag" src=${"flagsPng/" + objCountryBasic[countryCode]['Alpha2'].toLowerCase()  + ".png"} />`;


const CounyryPopChart = ({ countryCode })=> html`
  <svg width="400" height="200"   class="chart">
  <polyline
     fill="none"
     stroke="#0074d9"
     stroke-width="2"
     points="
       0,0
       0,${objCountryPop[countryCode]['1950']/400}
       30,${objCountryPop[countryCode]['1960']/400}
       60,${objCountryPop[countryCode]['1970']/400}
       90,${objCountryPop[countryCode]['1980']/400}
       120,${objCountryPop[countryCode]['1990']/400}
       150,${objCountryPop[countryCode]['2000']/400}
       180,${objCountryPop[countryCode]['2010']/400}
       210,${objCountryPop[countryCode]['2020']/400}
       "/>
</svg>
`;


const Table = () => html`
  <${CountryName} countryCode=${countryCode}/> 
  <${CountryFlag} countryCode=${countryCode}/>
  <${CounyryPopChart} countryCode=${countryCode}/>
  `;

render(html`<${Country}  countryCode="4" />`, document.body);
*/