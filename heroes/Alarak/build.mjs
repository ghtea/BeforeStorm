/* https://github.com/developit/htm */

import { html, Component, render } from 'https://ghtea.github.io/Countries/common/standalone.module.js';



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