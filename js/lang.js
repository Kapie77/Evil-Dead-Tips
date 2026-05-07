function setLang(lang) {
  localStorage.setItem("lang", lang);
  location.reload();
}

// Translation
const translations = {

  /* PORTUGUÊS */
  pt: {
    back: "Voltar",
    strong: "Pontos Fortes",
    stats: "Estatísticas",
    damage: "Dano",
    speed: "Velocidade",
    abilities: "Habilidades",
    weapons: "Armas",
    melee: "Corpo a Corpo",
    ranged: "Longo Alcance",
    subtitle: "Dicas e Estratégias",
    survivors: "Sobreviventes",
    demons: "Demônios",
    classes: "Classes",
    characters: "Personagens",
    leader: "Líder",
    warrior: "Guerreiro",
    hunter: "Caçador",
    support: "Suporte",

    /* Armas */
    TypesOfAmmunition: "Tipos de Munição",
    TypesOfMeleeWeapons: "Tipos de Arma Corpo-a-Corpo",
    HandGunAmmo: "Munição de Armas Curtas",
    LongGunAmmo: "Munição de Armas Longas",
    SpecialGunAmmo: "Munição de Armas Especiais",
    Onehandedmeleeweapons: "Armas Corpo-a-Corpo de Duas Mãos",
    Twohandedmeleeweapons: "Armas Corpo-a-Corpo de Uma Mão",
    BluntWeapons: "Armas Contundentes",
    SharpWeapons: "Armas Cortantes",
    WeaponMastery: "Maestria de Arma",

    Dismemberment: "Desmembramento",
    Balancebar: "Barra de equilíbrio",
    Reloadtime: "Tempo de recarga",
    Range: "Alcance",
    Damage: "Dano",
    AmmoCapacity: "Capacidade de munição",
    RateOfFire: "Frequência de disparos",

      /* Tipos */
      Common: "Comum",
      Rare: "Raro",
      Epic: "Épico",
      Legendary: "Lendário",

      /* Melee */
      chainsaw: "Motoserra",
      handaxe: "Machadinha",
      scythe: "Foice",
      huntingknife: "Faca de Caça",
      bat: "Taco de Pregos",
      lumberjackaxe: "Machado de Lenhador",
      sledgehammer: "Marreta",
      meatcleaver: "Cutelo",
      spear: "Lança Improvisada",
      meathammer: "Martelo de Carne",
      machete: "Facão",
      pickaxe: "Picareta",
      shovel: "Pá",
      sword: "Espada",
      arthursword: "Espada Lendária de Arthur",
      tranquilizer: "Seringa",
      pipe: "Cano",
      mace: "Maça",
      quarterstaff: "Cajado",
      fist: "Punho",
      powerglove: "Luva Poderosa",

      /* Ranged */
      crossbow: "Besta",
      explosivecrossbow: "Besta Explosiva",
      repeatingcrossbow: "Besta Repetidora",
      singleshotgun: "Bacamarte",
      grenadelauncher: "Lança-granadas",
      handgun: "Pistola",
      revolver: "Revolver",
      shotgun: "Escopeta",
      huntingrifle: "Rifle de Caça",
      leveractionrifle: "Rifle de Ação de Alavanca",
      longstick: "Cano Duplo",
      boomstick: "Pau de Fogo",
      nailgun: "Pistola de Prego",
      submachinegun: "Sub-metralhadora",
      sawgun: "Retalhadora",
      minigun: "Minigun",
      harpoon: "Arpão",

      /* Melee Desc */
      machetedesc: "Esta lâmina bem equilibrada oferece velocidade, dano e capacidade de desmembramento superiores. Cortante. Uma mão.",
      sledgehammerdesc: "Esta arma corpo-a-corpo gigantesca é tão lenta quanto destrutiva. Contundente. Duas mãos.",
      shoveldesc: "Não é rápido, mas nada bate como uma pá. Contundente. Duas mãos.",
      chainsawdesc: "Esta arma só pode ser usada pelo Ash de Evil Dead II, pelo Ash de Army of Darkness e pelo Ash de Ash vs. Evil Dead. Ela corta as Deadites com facilidade. Cortante. Uma mão.",
      lumberjackaxedesc: "Se você precisa de uma arma que cause muito dano e desmembramento, mas que não seja particularmente rápida, esta é a ideal para você. Cortante. Duas mãos.",
      knifedesc: "Esta arma compensa seu curto alcance com sua alta velocidade de ataque. Cortante. Uma mão.",
      sworddesc: "Esta arma nobre não é rápida, mas tem um golpe amplo e desmembra como só um sabre é capaz. Cortante. Duas mãos.",
      batdesc: "Claro, é lenta, mas essa arma causa muito dano e reduz a barra de equilíbrio dos inimigos com uma pancada forte na cabeça. Contundente. Duas mãos.",
      pickaxedesc: "Esta ferramenta de mineração possui estatísticas bem equilibradas e é particularmente útil para escavar cérebros de Deadites. Contundente. Uma mão.",
      meathammerdesc: "Tem dano e velocidade medianos, mas desencadeia ataques especiais com toda a força. Contundente. Uma mão.",
      meatcleaverdesc: "O que falta a esta arma em alcance, ela compensa com velocidade e capacidade de desmembramento. Cortante. Uma mão.",
      handaxedesc: "Esta arma oferece um equilíbrio entre dano, velocidade de ataque e desmembramento. Cortante. Uma mão.",
      speardesc: "Esta arma cortante e perfurante tem um alcance considerável. Cortante. Duas mãos.",
      tranquilizerdesc: "Você vai ter que chegar bem perto e pessoal para usar as seringas, mas um ataque com essas duas garotas más empunhadas causa um dano significativo na barra de equilíbrio de qualquer unidade maligna. Contundente. Duas mãos.",
      macedesc: "Esta arma é lenta, mas poderosa, perfeita para dar uma surra nas Deadites. Contundente. Uma mão.",
      pipedesc: "Este pedaço de metal abriga uma variante totalmente nova de tétano. Contundente. Duas mãos.",
      quarterstaffdesc: "Um clássico do design. A humilde vara resolve disputas desde o início dos tempos. Contundente. Duas mãos.",
      scythedesc: "Aja como a Morte e mande esses deadites para o além. Cortante. Duas mãos.",
      arthursworddesc: "O escudeiro de Lord Arthur tinha o trabalho mais tranquilo do Castelo de Kandar. Ele tinha UMA única tarefa: não perder a espada lendária. Esta geração não tem ética de trabalho.",
      arthur_mission: "Disponível apenas na Missão 5 “O Retorno do Rei”.",

      /* Ranged Desc */
      crossbowdesc: "Essa arma extremamente poderosa é dolorosamente lenta para recarregar, então faça com que cada tiro valha a pena.",
      repeatingcrossbowdesc: "Esta besta foi modificada para aumentar sua capacidade de munição e frequência de tiro. Certifique-se de que seu inimigo entenda a lição — repetidamente, em rápida sucessão.",
      explosivecrossbowdesc: "A recarga é lenta, mas a explosão vale a pena esperar.",
      handgundesc: "A pistola é uma arma de longo alcance versátil que dá conta do recado.",
      nailgundesc: "Tem uma frequência de tiro rápida e grande capacidade de munição, mas causa pouco dano.",
      boomstickdesc: "Mortal a curta distância, esta arma é a favorita de Ash por um motivo.",
      sawgundesc: "É uma arma que dispara lâminas de serra e uma máquina de desmembramento.",
      huntingrifledesc: "Mortal e precisa, o rifle de caça é perfeito para abates a longa distância.",
      submachinegundesc: "Altamente eficaz a curta e média distância, esta beleza certamente atende a muitos requisitos.",
      singleshotgundesc: "Claro, ela demora para recarregar e não tem o melhor alcance, mas tem um impacto e tanto a curta distância e faz você parecer um pirata.",
      revolverdesc: "É muito eficaz a curta distância contra um único alvo.",
      leveractionrifledesc: "Tem uma frequência de tiro e uma capacidade de munição razoáveis. Além disso, os cowboys usavam esse rifle. Quem não gostaria de atirar nas Deadites como um cowboy?",
      grenadelauncherdesc: "É hora de Travar, Carregar e KABOOOM nessas Deadites!",
      shotgundesc: "A escopeta dispara uma rajada de curto alcance capaz de derrubar vários inimigos de uma só vez.",

    /* Perfil dos personagens */
    attributes: "Atributos",
    defense: "Defesa",
    melee: "Armas corpo-a-corpo",
    range: "Armas de longo alcance",
    support2: "Assistência à equipe",

    /* Habilidades */
    abilities: "Habilidades",
    EdAbilityDescription: "Quando ativada, essa habilidade permite o uso de uma lanterna especial que te ajuda a detectar e desarmar temporariamente armadilhas demoníacas.",

    /* Ed */
    edab1: "Luz Perene",
    edab2: "Maestria de Armas: Bestas",
    edab3: "O Colecionador",
    edabdc1: "Aumenta a duração da bateria da sua lanterna",
    edabdc2: "As bestas têm uma velocidade de recarga mais rápida e causam mais danos à saúde, à barra de equilíbrio e desmembramento",
    edabdc3: "Aumenta a chance de os inimigos derrotados deixarem cair itens; também aumenta a chance de encontrar itens de maior raridade",

    /* Pontos Fortes */
    edstrength: "Por ser caçador ele tem muita stamina.",

    /* Pontos Fracos */
    Weaknesses: "Pontos Fracos",
    edweak1: "Ele possui pouca saúde por ser Caçador.",

    /* DICAS */
    tips: "Dicas",

      /* Ed */
      EdTip1: "Se você usar sua habilidade e desligar a lanterna, a sua habilidade será desligada também, então não desligue-a se estiver usando seu poder.",
      EdTip2: "Quando Baal aparece as lanternas de todos são desativadas, e só podem ser ligadas de novo depois de alguns segundos após ele morrer, então atente-se em não usar sua habilidade se ver o inimigo irá invocar Baal ou se ele já foi invocado. Se usou seu poder e Baal foi invocado você não terá opção a não ser matar ele o mais rápido possível para poder usar a lanterna de novo, ou, a outra opção, será aceitar que usou sua habilidade em vão.",
      EdTip3: "A luz da lanterna desarma armadilhas e não você, então não corra para cima de uma armadilha porque está usando sua habilidade, porque você poderá cair na armadilha! Isso acontece muito porque você pode chegar antes da luz desarmar a armadilha, principalmente por causa do lag, então aproxime-se com cautela de uma armadilha para desarmá-la e depois poderá passar por ela.",
      EdTip4: "Existem 3 tipos de besta: besta (padrão), que dá só um tiro por vez. Besta repetidora, que dá vários tiros seguidos. E a besta explosiva que dá um tiro explosivo em área por vez. Ed tem maestria com Bestas, não importa qual delas.",
      EdTip5: "Se o Demônio te possuir enquanto você está usando sua habilidade, sua lanterna se apagará, mas o tempo de uso estará contando, então quando ele te despossuir pode restar poucos segundos de habilidade ou até mesmo já ter acabado, assim se tiver com medo alto tente não usar sua habilidade.",
      EdTip6: "Umas das habilidades passivas de Ed é de aumentar a vida util da lanterna em 100%, então dificilmente acabará a bateria dela; ela costuma durar até a partida acabar. Então deixa-a ligada todo o tempo (mas, claro, sempre de olho para não acabar a bateria, pois as vezes algumas partidas são tão longas que acaba o tempo).",
      EdTip7: "Você só usará a habilidade de Ed umas 3 ou 4 vezes na partida, em média, e durante o inicio; quando chega nos Sombrios você não usará mais porque não tem onde usar, então não vale a pena colocar pontos em Recarga Rápida, que reduz 10% do cooldown da habilidade dele. Veja: 110s (1 minutos e 50 segundos) - 10% [11s] 99 segundos (1 minutos e 39 segundos) 105s (1 minuto e 45 segundos) [Prestigio 5] - 10% [10,55s] = 94,5 segundos (1 minuto e 34,5 segundos)",

    /* DICAS GERAIS */
    generaltips: "Dicas Gerais",
    geraltip1: "Se pegar um carro ou atirar o Demônio conseguirá ver sua localização, então jamais faça isso no inicio da partida! Só faça isso quando já tiver pegado todas as partes do mapa e já estiver na Adaga/Página.",
    geraltip2: "Apresse-se em fazer os objetivos. Assim que a partida começar já vá atrás das partes do mapa e pegue coisas pelo caminho, mas na direção das partes do mapa. Quanto mais tempo você demorar, mais forte o Demônio ficará, e quanto mais forte ele ficar pior será para você seu time.",
    geraltip3: "Se o Demônio for fraco dá para 2 pessoas fazerem a Adaga e 2 fazerem a Página ao mesmo tempo, assim o jogo acaba mais rápido, nerfa o Demônio e ele não saberá o que fazer (tendo que decidir em qual deles ir). Da pra tentar isso com um cara mediano, mas você tem que se garantir (com alguém forte não faça isso!).",
    geraltip4: "Se o Demônio possuir algum companheiro seu, largue sua arma e bata nele no soco, pois você terá muita velocidade, baterá sem parar, e ele não conseguirá fazer nada! Mas isso não é um metodo 100% garantido e você tem que acertar o timming.",
    geraltip5: "Se você estiver usando uma arma rápida, tipo facão, seringa, picareta, etc, e seu medo estiver alto, jogue-a no chão, senão o Demônio vai te possuir e bater tão rápido nos seus companheiros que eles não poderão fazer nada e vão cair (pelo menos na Adaga/Página porque o Demônio terá muita vida).",
    geraltip6: "Diferente do que fazem não jogue sua arma de corpo-a-corpo no chão se tiver com medo alto, porque senão o Demônio vai se possuir e bater no soco em seus amigos e não tem como se esquivar disso, então ou eles vão morrer ou perder bastante saúde!",
    geraltip7: "Contra Demônios que são faceis de matar como Eligos e Baal use armas rápidas como picareta, facão, faca, etc, e contra demônios fortes/resistentes como Ash Maligno e Henrietta use armas fortes como machado, marreta, etc.",
    geraltip8: "O responsável por matar o Flautista é o Caçador, porque ele tem mais stamina e pode matar de longe. O Guerreiro jamais pode sair do objetivo pra matá-lo porque ele é a força do time, o Suporte também não pode sair porque está curando o Guerreiro e os outros. Se o Caçador não puder ir, então quem deve ir é o Lider, se o Lider não puder, então o Suporte deve ir.",
    geraltip9: "O responsável por reviver alguém é o Suporte, porque se ele estiver com a build de cura, quando ele reviver alguém está pessoa levantará com mais vida e até menos medo. Caso o Suporte não consiga reviver alguém, então outros podem reviver, mas a preferência é do Suporte.",
    geraltip10: "Mesmo que você não seja Suporte, se tiver um Caçador na sua equipe cate munição para ajudá-lo.",
    geraltip11: "Para facilitar o catamento de munição pegue uma arma, assim você irá catar um tipo de munição, pelo menos, automaticamente ao passar perto da munição, isso economizará tempo e esforço.",
    geraltip12: "Não dê as costas para um Deadite possuida que está te batendo no meio do nada, porque você não conseguirá ver o momento em que ele vai te atacar para poder se esquivar, então você vai tomar muita porrada e poderá morrer sem conseguir fazer nada. Além disso outras deadites podem aparecer atrás de você e você nem saberá quem está te atacando ou quando esquivar.",
    geraltip13: "Existem glitchs de Demônios e muitos jogadores os usam, como o de energia infinita da Bruxa, então tenha cuidado.",
    geraltip14: "Se você caiu em uma armadilha ao tentar ir a algum lugar não use outro caminho, senão você poderá cair em outra armadilha. Isso parece ser um instinto natural dos jogadores, todos fazem isso, mas você não deve fazer isso ou irá cair em várias armadilhas. Você tem que passar pelo mesmo caminho que estava seguindo e caiu na armadilha porque já não terá mais armadilhas la´, porque você liberou o caminho.",
    geraltip15: "Conheça a sequência de golpes de cada Demônio/Deadite para poder se esquivar na hora certa! Tem uns que batem mais rápido, outros mais lentos, uns tem golpes a curta distancia, outros a grande distancia, outros tem uma sequência pequena, outro tem uma sequencia com vários golpes. E veja quais tipos de poder (normal ou pesado) e sequência o jogador Demônio está usando.",
    geraltip16: "Para dropar todas as munições de uma vez aperte o botão R.",
    geraltip17: "Baal pode colocar armadilhas para serem acionadas onde quiser e geralmente colocam na sua frente, então atente-se a isso, e se estiver correndo faça isso em zigue-zague para desviar das possiveis armadilhas que ele vai colocar, porque ele vai.",
    geraltip18: "Nem o Suporte nem o Atirador (que não poderá atirar no inicio) são fortes no corpo-a-corpo, então ajude-os se Deadites estiverem batendo neles e você for Guerreiro ou Lider.",
    geraltip19: "Quando o Chefe morre ele dropa um refrigerante ou um amuleto.",

    /* DEMONS */
      /* Eligos */
      EligosBio: "Eligos pode ser chamado de muitas coisas, mas “demônio menor” não é uma delas. Além da habilidade de lançar pedras com a mente, ele possui o poder telecinético de atordoar temporariamente todos os Sobreviventes próximos. Ele também fica invisível quando se move, então boa sorte para detê-lo.",
      EligosAbility: "As unidades que você possui têm mais vida, causam mais dano e seus ataques aumentam o medo nos alvos. Além disso, as unidades malignas possuídas causam dano de sangramento.",
      EligosAb1: "Onda Telecinética",
      EligosAb2: "Lançamento de Pedras",
      EligosAb3: "Aperto Psíquico",
      EligosAbInfo1: "Eligos usa o poder telecinético para imobilizar os Sobreviventes próximos.",
      EligosAbInfo2: "Eligos lança pedras nos Sobreviventes.",
      EligosAbInfo3: "Eligos usa a telecinesia para imobilizar e causar dano a um Sobrevivente. Este ataque não pode ser esquivado. Para quebrar a imobilização, outros Sobreviventes devem atacar Eligos.",

    edbio: "Sendo um caçador de relíquias, o Professor Associado Ed Getly entende a importância de uma lanterna. A bateria da lanterna de Ed duram mais tempo e sua tecnica ativa lhe permite usar uma lanterna especial para detectar e desarmar armadilhas demoniacas. ele tem 'o jeito' para encontrar armas de melhor qualidade e, simplesmente por estar por perto, ele proporicona essa vantagem a todos os membros de equipe da partida. Como se isso tudo não fosse o bastante, ele ainda é perito de besta."
  },

  /* ENGLISH */
  en: {
    back: "Back",
    strengths: "Strengths",
    stats: "Stats",
    damage: "Damage",
    speed: "Speed",
    abilities: "Abilities",
    weapons: "Weapons",
    melee: "Melee",
    ranged: "Ranged",
    subtitle: "Tips and Strategies",
    survivors: "Survivors",
    demons: "Demons",
    classes: "Classes",
    characters: "Characters",
    leader: "Leader",
    warrior: "Warrior",
    hunter: "Hunter",
    support: "Support",

    /* Armas */
    TypesOfAmmunition: "Types of Ammunition",
    TypesOfMeleeWeapons: "Types of Melee Weapons",
    HandGunAmmo: "Hand Gun Ammo",
    LongGunAmmo: "Long Gun Ammo",
    SpecialGunAmmo: "Special Gun Ammo",
    Onehandedmeleeweapons: "One Handed Melee Weapons",
    Twohandedmeleeweapons: "Two Handed Melee Weapons",
    BluntWeapons: "Blunt Weapons",
    SharpWeapons: "Sharp Weapons",
    WeaponMastery: "Weapon Mastery",

    Dismemberment: "Dismemberment",
    Balancebar: "Balance bar",
    Reloadtime: "Reload time",
    Range: "Range",
    Damage: "Damage",
    AmmoCapacity: "Ammo capacity",
    RateOfFire: "Rate of fire",


      /* Tipos */
      common: "Common",
      rare: "Rare",
      epic: "Epic",
      legendary: "Legendary",

      /* Melee */
      chainsaw: "Chainsaw",
      handaxe: "Hand Axe",
      scythe: "Scythe",
      huntingknife: "Hunting Knife",
      bat: "Nail Bat",
      lumberjackaxe: "Lumberjack Axe",
      sledgehammer: "Sledgehammer",
      meatcleaver: "Meat Cleaver",
      spear: "Improvised Spear",
      meathammer: "Meat Hammer",
      machete: "Machete",
      pickaxe: "Pickaxe",
      shovel: "Shovel",
      sword: "Sword",
      arthursword: "Arthur's Fabled Sword",
      tranquilizer: "Syringe",
      pipe: "Lead Pipe",
      mace: "Mace",
      quarterstaff: "Staff",
      fist: "Fist",
      powerglove: "Power Glove",

      /* Ranged */
      crossbow: "Crossbow",
      explosivecrossbow: "Explosive Crossbow",
      repeatingcrossbow: "Repeating Crossbow",
      singleshotgun: "Blunderbuss",
      grenadelauncher: "Grenade Launcher",
      handgun: "Handgun",
      revolver: "Revolver",
      shotgun: "Shotgun",
      huntingrifle: "Hunting Rifle",
      leveractionrifle: "Lever Action Rifle",
      longstick: "Double-Barrel",
      boomstick: "Boomstick",
      nailgun: "Nailgun",
      submachinegun: "Submachine Gun",
      sawgun: "Sawgun",
      minigun: "Minigun",
      harpoon: "hapoon",

      /* Melee Desc */
      machetedesc: "This well-balanced blade provides superior speed, damage and dismemberment. Sharp. One-handed.",
      sledgehammerdesc: "This beast of a melee weapon is as slow as it is destructive. Blunt. Two-handed.",
      shoveldesc: "It isn't fast, but nothing hits quite like a shovel. Blunt. Two-handed.",
      chainsawdesc: "This weapon can be used only by Evil Dead II Ash, Army of Darkness Ash, and Ash vs. Evil Dead Ash. It slices through Deadites with ease. Sharp. One-handed.",
      lumberjackaxedesc: "If you need a weapon that deals high damage and dismemberment, but isn't particularly fast, this one's for you. Sharp. Two-handed.",
      knifedesc: "This weapon makes up for its short range with its high attack speed. Sharp. One-handed.",
      sworddesc: "This noble weapon isn't fast but it swings wide and dismembers like only a saber can. Sharp. Two-handed.",
      batdesc: "Sure, it's slow, but the this weapon deals lots of damage and reduces enemies' balance bar with a grand slam to the head. Blunt. Two-handed.",
      pickaxedesc: "This mining tool has well-balanced stats and is particularly useful for excavating Deadite brains. Blunt. One-handed.",
      meathammerdesc: "It's got average damage and speed, but triggers special attacks like a boss. Blunt. One-handed.",
      meatcleaverdesc: "What this weapon lacks in range, it makes up for with speed and dismemberment ability. Sharp. One-handed.",
      handaxedesc: "This weapon balances damage, attack speed and dismemberment. Sharp. One-handed.",
      speardesc: "This slashing and piercing weapon has considerable range. Sharp. Two-handed.",
      tranquilizerdesc: "You'll have to get up close and personal to use the syringes, but ana attack by these dual-wielded bad boys deals significant balance bar damage to any evil unit. Blunt. Two-Handed.",
      macedesc: "This weapon is slow but powerful, perfect for going medieval on Deadites. Blunt. One-handed.",
      pipedesc: "This hunk of metal if home to a whole new variant of tetanus. Blunt. Two-handed.",
      quarterstaffdesc: "A design classic. The humble stick has settled disputes since the beginning of time. Blunt, two-handed.",
      scythedesc: "Act like the Grim Reaper and put these deadites to rest. Sharp. Two Handed.",
      arthursworddesc: "Lord Arthur's sword boy had the cushiest job at Castle Kandar. He had ONE job: Don't lose the fabled sword. This generation has no work ethic.",
      arthur_mission: "Available only in Mission 5, “Homecoming King”.",

      /* Ranged Desc */
      crossbowdesc: "This very powerful weapon is painfuly slow to reload, so make every shot count.",
      repeatingcrossbowdesc: "This crossbow was modified to increase its ammo capacity and rate of fire. Make sure your enemy gets the point - over and over again, in rapid succession.",
      explosivecrossbowdesc: "It's slow to reload but the blast is worth the wait.",
      handgundesc: "The Pistol is a versatile ranged weapon tht gets the job done.",
      nailgundesc: "It fires fast and holds a lot of ammo, but inflicts low damage.",
      boomstickdesc: "Deadly at close range, this firearm is Ash's favorite for a reason.",
      sawgundesc: "It's a gun that shoots saw blades and a dismemberment machine.",
      huntingrifledesc: "Deadly and accurate, the hunting rifle is perfect for long distance kills.",
      submachinegundesc: "Highly effective in the short and medium range, this beauty sure ticks many boxes.",
      singleshotgundesc: "Sure, it's slow to reload and doesn't have the best range, but it packs a punch up close and makes you look like a pirate.",
      revolverdesc: "It's powerful at short range against a single target.",
      leveractionrifledesc: "It's got a decent rate of fire and ammo capacity. Besides, cowboys used this rifle. Who doesn't want to shoot Deadites like a cowboy?",
      grenadelauncherdesc: "It's time to Lock, Load and KABOOOM these Deadites away!",
      shotgundesc: "The shotgun delivers a short-range blast that can take out several enemies at once.",

    /* Perfil dos personagens */
    attributes: "Attributes",
    defense: "Defense",
    melee: "Melee weapons",
    range: "Ranged weapons",
    support2: "Team Assistance",

    /* Habilidades */
    abilities: "Abilities",
    EdAbilityDescription: "When activated, this ability grants use of a unique flashlight that allows you to detect and temporarily disarm demon traps.",

    /* Ed */
    edab1: "Enduring Light",
    edab2: "Weapon Master: Crossbows",
    edab3: "The Collector",
    edabdc1: "Increases the battery life of your flashlight",
    edabdc2: "Crossbows have a faster reload speed and deal increased health, balance bar and dismemberment damage",
    edabdc3: "Increases the chance that defeated enemies will drop items; also improves the chance of finding creates of higher rarity",

    /* Pontos Fortes */
    edstrength: "Since he's a hunter, he has a lot of stamina.",

    /* Pontos Fracos*/
    weaknesses: "Weaknesses",
    edweak1: "He has low health because he is a Hunter.",

    /* DICAS */
    tips: "Tips",

      /* Ed */
      EdTip1: "If you use your ability and turn off the flashlight, your ability will also be turned off, so don't turn it off while you're using your power.",
      EdTip2: "When Baal appears, everyone’s flashlights are deactivated, and they can only be turned back on a few seconds after he dies, so be careful not to use your ability if you see the enemy is about to summon Baal or if he has already been summoned. If you used your ability and Baal was summoned, you’ll have no choice but to kill him as quickly as possible so you can use your flashlight again—or, alternatively, accept that you used your ability in vain.",
      EdTip3: "The flashlight disarms traps, not you, so don’t rush toward a trap just because you’re using your ability—you might end up triggering it! This happens a lot because you might reach the trap before the flashlight has a chance to disarm it, especially due to lag. So approach traps cautiously to disarm them, and then you can safely pass through.",
      EdTip4: "There are three types of crossbows: the standard crossbow, which fires only one shot at a time; the repeating crossbow, which fires several shots in a row; and the explosive crossbow, which fires one explosive area-of-effect shot at a time. Ed is a master of crossbows, no matter which type.",
      EdTip5: "If the Demon possesses you while you're using your ability, your flashlight will go out, but the ability's duration will still be counting down. So when he releases you, there might only be a few seconds left on the ability—or it might have already ended. Therefore, if you're at a high fear level, try not to use your ability.",
      EdTip6: "One of Ed's passive abilities is to increase the flashlight's battery life by 100%, so it's unlikely to run out of power; it usually lasts until the match ends. So keep it on the whole time (but, of course, keep an eye on the battery so it doesn't run out, since sometimes some matches is so long that the time runs out).",
      EdTip7: "You’ll only use Ed’s ability about 3 or 4 times per match, on average, and only during the early game; once you reach The Dark Ones, you won’t use it anymore because there’s nowhere to use it, so it’s not worth putting points into Quick Recharge, which reduces his ability’s cooldown by 10%. See: 110s (1 minute and 50 seconds) - 10% [11s] 99 seconds (1 minute and 39 seconds) 105s (1 minute and 45 seconds) [Prestige 5] - 10% [10.55s] = 94.5 seconds (1 minute and 34.5 seconds)",
    
    /* General tips */
    generaltips: "General Tips",
    geraltip1: "If you get in a car or shoot, the Demon will be able to see your location, so never do that at the start of the match! Only do that once you’ve collected all the map pieces and are already at the Dagger/Page.",
    geraltip2: "Hurry up and complete the objectives. As soon as the match starts, head straight for the map pieces and pick up items along the way, but keep moving toward the map pieces. The longer you take, the stronger the Demon will become, and the stronger it gets, the worse it will be for you and your team.",
    geraltip3: "If the Demon is weak, two people can make the Dagger and two can make the Page at the same time, so the game ends faster. This nerfs the Demon, and it won’t know what to do (since it has to decide which one to go for). You can try this with an average Demon, but you have to be careful (don’t do this with a strong one!).",
    geraltip4: "If the Demon possesses one of your teammates, drop your weapon and start punching him, because you’ll have incredible speed, you’ll keep hitting him nonstop, and he won’t be able to do a thing! But this isn't a foolproof method, and you have to get the timing right.",
    geraltip5: "If you're using a fast weapon—like a machete, syringe, pickaxe, etc.—and your fear level is high, drop it on the ground; otherwise, the Demon will possess you and attack your teammates so quickly that they won't be able to do anything and will fall (at least in the Dagger/Page, because the Demon will have a lot of infernal energy).",
    geraltip6: "Unlike what others do, don't throw your melee weapon on the ground if your fear level is high, because otherwise the Demon will possess you and punch your teammates—and there's no way to dodge that, so they'll either die or lose a lot of health!",
    geraltip7: "Against Demons that are easy to kill, such as Eligos and Baal, use fast weapons like a pickaxe, machete, knife, etc., and against strong/tough demons like Evil Ash and Henrietta, use powerful weapons like an axe, sledgehammer, etc.",
    geraltip8: "The Hunter is the one responsible for killing the Flutist, because he has more stamina and can kill from distance. The Warrior must never stray from his objective to kill him, because he is the team’s main source of strength; the Support can’t stray either, because he’s healing the Warrior and the others. If the Hunter can’t go, then the Leader should go; if the Leader can’t, then the Support should go.",
    geraltip9: "The Support is responsible for reviving players, because if they have the healing build, when they revive someone, that player will stand up with more health and even less fear. If the Support is unable to revive someone, others may do so, but the Support has priority.",
    geraltip10: "Even if you're not a Support, if you have a Hunter on your team, gather ammo to help him out.",
    geraltip11: "To make it easier to pick up ammo, grab a weapon—that way, you’ll automatically pick up at least one type of ammo whenever you walk past it, which will save you time and effort.",
    geraltip12: "Don't turn your back on a possessed Deadite that's attacking you in the middle of nowhere, because you won't be able to see when he's about to strike so you can dodge it—you'll just take a beating and might die without being able to do anything about it. Plus, other Deadites might appear behind you, and you won't even know who's attacking you or when to dodge.",
    geraltip13: "There are Demon glitches, and many players use them—like the Witch’s infinite energy glitch—so be careful.",
    geraltip14: "If you’ve fallen into a trap while trying to get somewhere, don’t take a different route, or you might fall into another trap. This seems to be a natural instinct for players—everyone does it—but you shouldn’t do it, or you’ll fall into several traps. You have to go back the same way you were going when you fell into the trap, because there won’t be any more traps there—you’ve already cleared the path.",
    geraltip15: "Learn each Demon/Deadite’s attack pattern so you can dodge at the right moment! Some attack faster, others slower; some use close-range attacks, others long-range; some have a short sequence, while others have a sequence with multiple attacks. And pay attention to what type of attack (normal or heavy) and sequence the Demon player is using.",
    geraltip16: "To drop all your ammunition at once, press the R button.",
    geraltip17: "Baal can set traps to go off wherever he wants, and he usually places them in front of you, so keep an eye out for them. If you’re running, zigzag to avoid the traps he’ll set—because he will.",
    geraltip18: "Neither the Support nor the Hunter (who can't shoot at the start) is very strong in melee combat, so help them if Deadites are attacking them and you're a Warrior or a Leader.",
    geraltip19: "When the Boss dies, he drops a Shemp's Cola or a Amulet.",

    /* DEMONS */
      /* Eligos */
      EligosBio: "Eligos can be called a lot of things, but a 'minor demon' is not one of them. In addition to the ability to throw rocks with his mind, he wields the telekinetic power to temporarily stun all nearby Survivors. He's also invisible when moving, so good luck stopping him.",
      EligosAbility: "Units you possess have more health, deal more damage, and their attacks increase fear in their targets. Additionally, possessed evil units inflict bleeding damage.",
      EligosAb1: "Telekinetic Surge",
      EligosAb2: "Casting Stones",
      EligosAb3: "Psychic Squeeze",
      EligosAbInfo1: "Eligos uses telekinetic power to immobilize nearby Survivors.",
      EligosAbInfo2: "Eligos launches rocks at Survivors.",
      EligosAbInfo3: "Eligos use telekinesis to immobilize and damage a Survivor. This attack cannot be dodged. To break the hold, other Survivors must attack Eligos.",

    edbio: "As a relic hunter, Associate Professor Ed Getley understands the importance of a flashlight. Ed's flashlight batteries last longer and his active ability allows him to use a special flashlight to detect demonic traps and disarm them. Ed has a knack for finding higher quality weapons and his mere presence provides this advantage to all team members in a match. If that isn't enough, the guy is also a crossbow master."

  },

  /* SPANISH */
  es: {
    subtitle: "Consejos y Estrategias",
    survivors: "Supervivientes",
    demons: "Demonios",
    classes: "Clases",
    characters: "Personajes",
    leader: "Líder",
    warrior: "Guerrero",
    hunter: "Cazador",
    support: "Apoyo",

    edbio: "Como cazador de reliquias, el profesor asociado Ed Getly es consciente de la importancia de una linterna. Las pilas de la linterna de Ed duran más, y su habilidad activa le permite utilizar una linterna especial para detectar y desactivar trampas demoníacas. Tiene un don especial para encontrar armas de mayor calidad y, con solo estar cerca, otorga esta ventaja a todos los miembros del grupo. Por si fuera poco, también es un experto en ballestas."

  }

};

function applyLang() {
  const lang = localStorage.getItem("lang") || "en"; // Lingua padrão "en" (english)

  document.querySelectorAll("[data-lang]").forEach(el => {
    const key = el.getAttribute("data-lang");

    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyLang();
});