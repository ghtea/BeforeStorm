/* https://github.com/developit/htm */

import { html, Component, render, useState} from 'https://beforestorm.avantwing.com/0/common/standalone.module.js';



const infoDate = "2020. 4. 14. (UTC +9)";
const infoVerHM = "2.49.4.78725";
const infoVerHH = "2.49";


const sourceDataText = "Heroes Profile API";
const sourceDataLink = "https://api.heroesprofile.com";

const sourceImgText = "Heroes of the Storm Wiki";
const sourceImgLink = "https://heroesofthestorm.gamepedia.com/Heroes_of_the_Storm_Wiki";

const sourceDiffText = "Heroes of the Storm Wiki";
const sourceDiffLink ="https://heroesofthestorm.gamepedia.com/Heroes_of_the_Storm_Wiki";

const numHero = Object.keys(objHeroBasic).length;

const numTop = 13;
const adjustBarWidth = 75/5;
const adjustBarHeight = 44/7;

const allRoles = ['Tank', 'Bruiser', 'Melee Assassin', 'Ranged Assassin', 'Healer', 'Support'];
var cRolesGlobal = ['Tank', 'Bruiser', 'Melee Assassin', 'Ranged Assassin', 'Healer', 'Support'];

var cRoleButtonsGlobal = {'Tank':"on", 'Bruiser':"on",  'Melee Assassin':"on", 'Ranged Assassin':"on",  'Healer':"on", 'Support':"on"};


   

/* components */

function partStatic({changeRoles, cRoles, numRerender}) {
   
   
   function changeRoles1(event) {
      var cRoleEach = event.target.getAttribute('data-role');
      if (cRoleEach == "All") {
         cRolesGlobal = ['Tank', 'Bruiser', 'Melee Assassin', 'Ranged Assassin', 'Healer', 'Support']
      } else if (cRoleEach == "None") {
         cRolesGlobal = [];
      } else {
         var index = cRolesGlobal.indexOf(cRoleEach);
         if (index > -1) { cRolesGlobal.splice(index, 1);}
         else { cRolesGlobal.push(cRoleEach); }
      }
      
      
      changeRoles(cRolesGlobal);
      
      /* for button's data-onoff */
      for (var iRole = 0; iRole < allRoles.length; iRole++) {
         var cRole = allRoles[iRole];
         if (cRolesGlobal.includes(cRole)) {
            cRoleButtonsGlobal[cRole] = "on";
         } else {
            cRoleButtonsGlobal[cRole] = "off";
         }
      }
      
   }
   
   
   
   
   /*setInterval(changeMessage, 10000);*/
   
return html`
   <div id="Header"> 
      <div id="BeforeStorm">
         BEFORE STORM: STYLE
      </div>
      
   </div>
   
   <div id="Tab" >
      <div id="TabFront" >
      
      <div> <a href="https://forms.gle/iYcMrUcJ52f8my5n6" >  TELL ME </a> </div>
      
      <div> <a href="meta.html" >  META </a> </div>
      
      <div> <a href="style.html" >  STYLE </a> </div>

      <div> <button id="btnCopy" class="btn" data-clipboard-text="beforestorm.avantwing.com/meta">
    COPY LINK
</button> </div>
      
      </div>
   </div>
   
   
   <div id="Setting" >
      
      <div>SORT: What is more important?</div>
      
      <div>
      <div>Number <br/> of Games</div>
      <div><input type="range"/></div>
      <div> WinRate</div>
      </div>
          
      <div>
      <div> difficulty: <br /> Easy </div>
      <div><input type="range"/></div>
      <div>Hard</div>
      </div>
         
   </div>
      

   <div id="divRole" >
      <div
         data-role="All"
         class="buttonRole"
         onClick=${changeRoles1}
         > All </div>
      
      <div
         data-onoff="${cRoleButtonsGlobal['Tank']}"
         data-role="Tank"
         class="buttonRole"
         onClick=${changeRoles1}
         > T </div>
         
      <div
         data-onoff="${cRoleButtonsGlobal['Bruiser']}"
         data-role="Bruiser"
         class="buttonRole"
         onClick=${changeRoles1}
         > B </div>
         
      <div
         data-onoff="${cRoleButtonsGlobal['Melee Assassin']}"
         data-role="Melee Assassin"
         class="buttonRole"
         onClick=${changeRoles1}
         > M </div>
         
      <div
         data-onoff="${cRoleButtonsGlobal['Ranged Assassin']}"
         data-role="Ranged Assassin"
         class="buttonRole"
         onClick=${changeRoles1}
         > R </div>
         
      <div
         data-onoff="${cRoleButtonsGlobal['Healer']}"
         data-role="Healer"
         class="buttonRole"
         onClick=${changeRoles1}
         > H </div>
         
      <div
         data-onoff="${cRoleButtonsGlobal['Support']}"
         data-role="Support"
         class="buttonRole"
         onClick=${changeRoles1}
         > S </div>
         
      <div
         data-role="None"
         class="buttonRole"
         onClick=${changeRoles1}
      > None </div>
   </div>
   `;}
   

function Shield() {

return html`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" 

class="styleIcon"
style="height: 40px; width: 40px;">

<path d="M0 0h512v512H0z" fill="blue" fill-opacity="1"></path>

<g class="" transform="translate(0,0)" style="touch-action: none;">
<path d="M48.906 19.656v10.782c0 103.173 10.53 206.07 41.313 289.53 30.78 83.463 82.763 148.094 164.53 170.563l2.188.626 2.25-.5c89.686-19.12 142.322-84.028 171.187-168.344 28.865-84.315 35.406-188.656 35.406-291.875v-10.78l-10.655 1.53C323.26 39.954 191.452 40 59.595 21.188l-10.69-1.53zM67.75 41.03c63.242 8.536 126.495 12.792 189.75 12.782v184.532h174.78c-4.905 27.572-11.31 53.747-19.592 77.937-27.348 79.884-73.757 137.33-155.157 155.564-.008-.003-.02.003-.03 0v-233.5H86.53c-12.87-60.99-18.277-128.81-18.78-197.313z" fill="#fff" fill-opacity="1">
</path>
</g>
</svg>
`  
}


function hero1({heroId, focusHero, cRoles}) {

if ( cRoles.includes(objHeroBasic[heroId]['Role']) ) { var onoff = "on";}
else { var onoff = "off";}





function focusHero1(event) {
   focusHero(event.target.getAttribute('data-heroId'));
};

return html`
         
   <div class="divEachHero" data-onoff="${onoff}">
      
      <div 
      class="first backHero"
      data-role="${objHeroBasic[heroId]['Role']}">
      
      <img
      data-heroId="${heroId}"
      class="imgHero" 
      src="0/images/heroes/${heroId}.png" 
      onClick=${focusHero1} 
      />
         </div>
         
      <div class="">
         <${Shield} />
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

const [cRoles, setRoles] = useState(['Tank', 'Bruiser', 'Melee Assassin', 'Ranged Assassin', 'Healer', 'Support']);

function changeRoles(x) {
   setRoles(x);
   forceRerender();
}

const [fHeroId, setFocus] = useState("Alarak");

function focusHero(x) {   
   if (x == "None") {
      setVisibleF(false);
   } else {
      setFocus(x);
      setVisibleF(true);
   }
}


return html`

<${partStatic}  
changeRoles=${changeRoles}
cRoles=${cRoles}
numRerender=${numRerender}
/>



<div id="divContent">
   <${hero1}
      heroId=${"Alarak"}
      focusHero=${"focusHero"}
      cRoles=${"cRoles"}
   />
</div>


`;   
}

render(html`<${All}/>`, document.body);
