const bonuses = [

// ----------------------------------------------------------- //
    {

    image:"../images/HUD/HUD_Skills/Arrow_Stroke.png",
    lang: "bonus1"

    },

    {

    image:"../images/HUD/HUD_Skills/DN015_Token.png",
    lang: "bonus2"

    },

    {

    image:"../images/HUD/HUD_Skills/DN016_Token.png",
    lang: "bonus3"

    },

    {

    image:"../images/HUD/HUD_Skills/DPB008_ViciousFatigue_Token.png",
    lang: "bonus4"

    },

    {

    image:"../images/HUD/HUD_Skills/DW005_Token.png",
    lang: "bonus5"

    },

    {

    image:"../images/HUD/HUD_Skills/DW011_Token.png",
    lang: "bonus6"

    },

    {

    image:"../images/HUD/HUD_Skills/DW012_Token.png",
    lang: "bonus7"

    },

    {

    image:"../images/HUD/HUD_Skills/Eye_Token.png",
    lang: "bonus8"

    },

    

    /* 20 */
    {

    image:"../images/HUD/HUD_Skills/Progress_Bar_xxs.png",
    lang: "bonus11"

    },

    {

    image:"../images/HUD/HUD_Skills/SC033_Token.png",
    lang: "bonus12"

    },

    

    {

    image:"../images/HUD/HUD_Skills/SC047_Token.png",
    lang: "bonus15"

    },

    

    {

    image:"../images/HUD/HUD_Skills/u1086_u0001_HUD_DP020_01_2d.png",
    lang: "bonus40"

    },

    /* 50 */
    {

    image:"../images/HUD/HUD_Skills/u1087_u0001_HUD_DN019_01_2d.png",
    lang: "bonus41"

    },

    {

    image:"../images/HUD/HUD_Skills/u1088_u0001_HUD_DN017_01_2d.png",
    lang: "bonus42"

    },

    

    {

    image:"../images/HUD/HUD_Skills/u1095_u0001_HUD_SC034_01_2d.png",
    lang: "bonus45"

    },

    {

    image:"../images/HUD/HUD_Skills/u1096_u0001_HUD_SC035_01_2d.png",
    lang: "bonus46"

    },

    

    {

    image:"../images/HUD/HUD_Skills/u2445_u0001_Glow_01_2d.png",
    lang: "bonus59"

    }

  ];
// -------------------------------------------------------- //
const currentLang = localStorage.getItem("lang") || "en";

const grid = document.getElementById("bonusGrid");

bonuses.forEach(bonus => {

    const card = document.createElement("div");

    card.className = "bonus-card";

    //innerHTML //
    card.innerHTML = `
        <img src="${bonus.image}" alt="Bonus">

        <h3 class="bonus-name">
            ${translations[currentLang][bonus.name]}
        </h3>

        <p class="bonus-description">
            ${translations[currentLang][bonus.lang]}
        </p>

        <div class="bonus-tags">

            <span class="tag-character">
                ${translations[currentLang][bonus.character] || bonus.character}
            </span>

            <span class="${bonus.team ? 'tag-team' : 'tag-self'}">
                ${bonus.team
                    ? translations[currentLang].teamBonus
                    : translations[currentLang].selfBonus}
            </span>

        </div>
    `;
    // -------------- //

    card.onclick = () => openModal(bonus);

    grid.appendChild(card);

});

const modal=document.createElement("div");

modal.className="modal";

modal.innerHTML=`

<div class="modal-content">

<img id="modalImage">

<p id="modalDescription"></p>

<button class="close">Fechar</button>

</div>

`;

document.body.appendChild(modal);

modal.querySelector(".close").onclick=()=>{

modal.classList.remove("active");

};

modal.onclick=e=>{

if(e.target===modal)

modal.classList.remove("active");

};

function openModal(bonus){

document.getElementById("modalImage").src=bonus.image;

document.getElementById("modalDescription").textContent =
    translations[currentLang][bonus.lang];

modal.classList.add("active");

}