const glossaryTerms = [

    {
        term: "Billy",
        definition: "glossary_billy"
    },

    {
        term: "DB",
        definition: "glossary_double_barrel"
    },

    {
        term: "BB",
        definition: "glossary_balance_bar"
    },

    {
        term: "DB",
        definition: "glossary_damage_bar"
    },

    {
        term: "DR",
        definition: "glossary_damage_reduction"
    },

    {
        term: "AOE",
        definition: "glossary_aoe"
    },

    {
        term: "Pup",
        definition: "glossary_pup"
    },

    {
        term: "Rotation",
        definition: "glossary_rotation"
    },

    {
        term: "Proxy",
        definition: "glossary_proxy_portal"
    },

    {
        term: "Flute",
        definition: "glossary_flute"
    },

    {
        term: "Soloq",
        definition: "glossary_soloq"
    },

    {
        term: "LAsh",
        definition: "glossary_LAsh"
    },

    {
        term: "WAsh",
        definition: "glossary_WAsh"
    },

    {
        term: "HAsh",
        definition: "glossary_HAsh"
    },

    {
        term: "SAsh",
        definition: "glossary_SAsh"
    },

    {
        term: "Comp",
        definition: "glossary_comp"
    },

    {
        term: "Speed Witch",
        definition: "glossary_speedwitch"
    },

    {
        term: "Speed Witch",
        definition: "glossary_speedwitch"
    },

    {
        term: "P0",
        definition: "glossary_p0"
    },

    {
        term: "P1",
        definition: "glossary_p1"
    },

    {
        term: "P2",
        definition: "glossary_p2"
    },

    {
        term: "P3",
        definition: "glossary_p3"
    },

    {
        term: "P4",
        definition: "glossary_p4"
    },

    {
        term: "P5",
        definition: "glossary_p5"
    },

    {
        term: "Lego",
        definition: "glossary_lego"
    },

    {
        term: "Smurf",
        definition: "glossary_smurf"
    },

    {
        term: "Sweatlord",
        definition: "glossary_sweatlord"
    }

];


const glossaryList = document.getElementById("glossaryList");
const glossarySearch = document.getElementById("glossarySearch");
const glossaryEmpty = document.getElementById("glossaryEmpty");


function getCurrentLang() {

    return localStorage.getItem("lang") || "en";

}


function getTranslation(key) {

    const lang = getCurrentLang();

    return translations?.[lang]?.[key] || key;

}


function renderGlossary(searchTerm = "") {

    if (!glossaryList) return;

    const normalizedSearch = searchTerm
        .trim()
        .toLowerCase();


    const filteredTerms = glossaryTerms.filter(item => {

        const translatedDefinition =
            getTranslation(item.definition);

        return (
            item.term
                .toLowerCase()
                .includes(normalizedSearch) ||

            translatedDefinition
                .toLowerCase()
                .includes(normalizedSearch)
        );

    });


    glossaryList.innerHTML = "";


    filteredTerms.forEach(item => {

        const glossaryItem =
            document.createElement("article");

        glossaryItem.className = "glossary-item";


        const term =
            document.createElement("div");

        term.className = "glossary-term";

        term.textContent = item.term;


        const definition =
            document.createElement("div");

        definition.className =
            "glossary-definition";

        definition.textContent =
            getTranslation(item.definition);


        glossaryItem.appendChild(term);

        glossaryItem.appendChild(definition);

        glossaryList.appendChild(glossaryItem);

    });


    if (glossaryEmpty) {

        glossaryEmpty.classList.toggle(
            "visible",
            filteredTerms.length === 0
        );

    }

}


if (glossarySearch) {

    glossarySearch.addEventListener("input", () => {

        renderGlossary(glossarySearch.value);

    });

}


document.addEventListener("DOMContentLoaded", () => {

    renderGlossary();

});