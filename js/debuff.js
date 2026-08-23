const bonuses = [

// ----------------------------------------------------------- //
    {

    image:"../images/HUD/HUD_Skills/Arrow_Stroke.png",
    lang: "bonus1"

    },

    {
    image:"../images/HUD/HUD_Skills/DN015_Token.png",
    name: "debuff67",
    character: "Evil Ash's basics and elite",
    team: true, // coletivo
    lang: "bonus2"
    },

    {

    image:"../images/HUD/HUD_Skills/DN016_Token.png",
    name: "debuff68",
    character: "Evil Ash's basics and elite",
    team: true, // coletivo
    lang: "bonus3"

    },

    {

    image:"../images/HUD/HUD_Skills/DPB008_ViciousFatigue_Token.png",
    name: "debuff63",
    character: "Witch boss, basic and elite",
    team: true, // coletivo
    lang: "bonus4"

    },

    {

    image:"../images/HUD/HUD_Skills/DW005_Token.png",
    name: "debuff64",
    character: "Henrietta Basics",
    team: false, // individual
    lang: "bonus7"

    },

    {

    image:"../images/HUD/HUD_Skills/DW011_Token.png",
    name: "debuff6",
    character: "Henrietta Basics",
    team: false, // individual
    lang: "bonus6"

    },

    {

    image:"../images/HUD/HUD_Skills/DW012_Token.png",
    name: "debuff5",
    character: "Henrietta Basics",
    team: false, // individual
    lang: "bonus5"

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
    name: "debuff70",
    character: "Eligos Boss",
    team: false, // individual
    lang: "bonus40"

    },

    /* 50 */
    {

    image:"../images/HUD/HUD_Skills/u1087_u0001_HUD_DN019_01_2d.png",
    lang: "bonus41"

    },

    {
    image:"../images/HUD/HUD_Skills/u1088_u0001_HUD_DN017_01_2d.png",
    name: "debuff69",
    character: "Evil Ash Boss",
    team: false, // individual
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

    },

    // ==============================
    // NOVOS
    // ==============================
    {
    image:"../images/HUD_Demon/Demon_Skills/IAmTheDarkness_Token.png",
    name: "debuff60",
    character: "Baal Boss",
    team: true, // coletivo
    lang: "bonus60"
    },

    {
    image:"../images/HUD_Demon/Demon_Skills/ReignOfTerror_Token.png",
    name: "debuff66",
    character: "Baal Boss",
    team: true, // coletivo
    lang: "bonus65"

    },
    {
    image:"../images/HUD_Demon/Demon_Skills/ActiveSkill_Plaguebringuer_WitchRecipe.png",
    name: "debuff62",
    character: "Witch's cauldron",
    team: true, // coletivo
    lang: "bonus62"
    },

    {
    image:"../images/HUD_Demon/Demon_Skills/CorruptedWater_Token.png",
    name: "debuff64",
    character: "Witch's Elite",
    team: true, // coletivo
    lang: "bonus64"
    },

    {
    image:"../images/HUD_Demon/Demon_Skills/MarkedToDeath_Token.png",
    name: "debuff61",
    character: "Baal Boss",
    team: true, // coletivo
    lang: "bonus61"

    },

    

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