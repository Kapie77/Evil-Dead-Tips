function setLang(lang) {
  localStorage.setItem("lang", lang);
  location.reload();
}

// Translation
const translations = {

  /* PORTUGUÊS */
  pt: {
    title: "Evil Dead Tips",
    back: "Voltar",
    strengths: "Pontos Fortes",
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
    exclusive: "Exclusivo",
    voice_lines: "Fala dos Personagens",
    unreleased: "Não-lançado",

    /* Personagens */
    lash: "Ash (Líder)",
    wash: "Ash (Guerreiro)",
    hash: "Ash (Caçador)",
    sash: "Ash (Suporte)",
    eligos: "Eligos - Marionetista",
    puppeteer: "Marionetista",
    necromancer: "Necromante",
    warlord: "Senhor da Guerra",
    plaguebringer: "Portador da Peste",
    schemer: "Intrigante",
    evilash: "Ash Maligno",
    witch: "Bruxa",

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
    AttackSpeed: "Velocidade de Ataque",
    AmountConvertedToBleedingDamage: "Valor Convertido em Dano de Sangramento",
    BleedingDuration: "Duração do Sangramento",
    FearThreshold: "Limiar do Medo",
    MaximumDamage: "Dano Máximo",
    FearIncreasePerSecond: "Aumento do Medo Por Segundo",
    FearReductionPerKill: "Redução do Medo Por Morte",
    MeleeDamage: "Dano Corpo a Corpo",
    NoMastery: "Este personagem não possui maestria de arma.",

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
      harpoon: "Lançador de Arpão",
      flamethrower: "Lança-chamas",
      nodescription: "Sem descrição.",
      crates: "Caixas",

      /* Caixas */
      crate_common: "Caixa Comum",
      crate_rare: "Caixa Rara",
      crate_epic: "Caixa Épica",
      crate_legendary: "Caixa Lendária",
      treasure_chest: "Baú do Tesouro",

        /* Caixas descrição */
        cratecommondesc: "Esta caixa comum é extremamente simples e tem poucas chances de conter algo de valor significativo.",
        crateraredesc: "Essa caixa rara pode ter algo legal dentro. Mas também pode não ter.",
        crateepicdesc: "Esta caixa épica tem grandes chances de conter várias garrafas de Pink F e armas de qualidade superior.",
        cratelegendarydesc: "Esta caixa contém uma arma lendária e vários frascos de Pink F.",
        treasurechestdesc: "Contém itens de alta qualidade.",

        /* Loots */
        onepinkf: "1 Pink F",
        twopinkf: "2 Pink F",
        threepinkf: "3 Pink F",
        fourpinkf: "4 Pink F",
        oneweapon: "1 Arma",
        oneamulet: "1 Amuleto",
        oneshemps: "1 Refrigerante Shemp",

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
      minigundesc: "Puxe o gatilho, sinta a força, mande-os de volta para o inferno.",
      harpoondesc: "Originalmente concebida para caçar criaturas marinhas, essa arma é ainda mais eficaz para empalar Deadites.",
      
        /* minigun voice lines*/
        minigunvc1: " Essas coisas são perigosas",
        minigunvc2: " Yeah, quer mais um pouco?",
        minigunvc3: " Coma chumbo.",
        minigunvc4: " Hum. Pesado.",
        minigunvc5: " Ei, bebê!",

        /* harpoon voice lines */
        harpoonvc1: " Empalamento à distância! Brilhante!",
        harpoonvc2: " Mal em um espeto.",
        harpoonvc3: " O míssil com farpas acerta o alvo!",
        harpoonvc4: " No espeto!",
        harpoonvc5: " Espetadinho!",
        harpoonvc6: " Shish kabob.",
        harpoonvc7: " Se você me irritar, vai levar arpão.",
        harpoonvc8: " Nós estamos caçando baleia?",
        harpoonvc9: " Arpoar Deadite com arpão cruzado riscado da minha lista de desejos.",
    
        /* flamethrower voice lines */
        flamethrowervc1: " Um lançador de fogo -- meus homens precisam de um!",
        flamethrowervc2: " Exatamente o que eu sempre quis!",
        flamethrowervc3: " Às vezes os sonhos se realizam.",
        flamethrowervc4: " Torradinho!",
        flamethrowervc5: " Sempre quis experimentar um desses.",
        flamethrowervc6: " Ah, que tal extra crocante?",
        flamethrowervc7: " Pra onde você vai, melhor já estar pegando fogo. Queime, demônio!",
        flamethrowervc8: " Desculpa cara, você tá queimado.",
        flamethrowervc9: " Provedor da sensação de queimadura.",
      
    /* Classes */
    leaderdesc: "Os Líderes possuem auras específicas que melhoram suas estatísticas e as dos Sobreviventes próximos. Eles também são mais resistentes ao medo.",
    warriordesc: "Os Guerreiros têm mais vida e causam mais dano corpo a corpo.",
    hunterdesc: "Os Caçadores causam mais dano com armas de longo alcance, podem carregar mais munição e têm um consumo de stamina mais lento.",
    supportdesc: "Os Sobreviventes da classe Suporte começam com um Refrigerante Shemp's e um amuleto, e podem carregar mais Shemp's e amuletos. Se Shemp's ou amuletos forem usados, os Sobreviventes dentro da sua aura também ganham os efeitos positivos.",

    /* Perfil dos personagens */
    attributes: "Atributos",
    defense: "Defesa",
    melee: "Armas corpo-a-corpo",
    range: "Armas de longo alcance",
    support2: "Assistência à equipe",

    /* Habilidades */
    abilities: "Habilidades",
    specialabilities: "Habilidades Especiais",
    showabilities: "Mostrar Habilidades",
    showprofile: "Mostrar Perfil",
    duration: "Duração",
    cooldown: "Tempo de recarga",
    dismembermentdamage: "Dano de desmembramento",
    balancebardamage: "Dano a barra de equilíbrio",
    ReloadSpeedIncrease: "Aumento da velocidade de recarga",
    FearReductionSpeed: "Velocidade de Redução do Medo",
    PossessionCostIncrease: "Aumento do Custo de Possessão",
    DamageReduction: "Redução de Danos",
    EffectDuration: "Duração do Efeito",
    AuraEffectRange: "Alcance do Efeito de Aura",
    InfernalEnergyReductionPerHit: "Redução de Energia Infernal Por Golpe",
    InfernalEnergyCost: "Custo da Energia Infernal",
    FearReduction: "Redução de Medo",
    ExtraDuration: "Duração Extra",
    DamageIncrease: "Aumento de Dano",
    HealthRestored: "Saúde Recuperada",
    ExplosionDamage: "Dano de Explosão",
    ShieldBarRestored: "Barra de Escudo Restaurada",
    DamageRestoredAsHealth: "Dano Restaurado Como Saúde",
    InfernalEnergyReduction: "Redução da Energia Infernal",
    batterylife: "Duração da bateria",
    ImpactRadius: "Raio de Impacto",
    DamageDealtToNearbyEnemies: "Dano Causado a Inimigos Próximos",

    /* Ed */
    EdAbilityDescription: "Quando ativada, essa habilidade permite o uso de uma lanterna especial que te ajuda a detectar e desarmar temporariamente armadilhas demoníacas.",
    edab1: "Luz Perene",
    edab2: "Maestria de Armas: Bestas",
    edab3: "O Colecionador",
    edabdc1: "Aumenta a duração da bateria da sua lanterna",
    edabdc2: "As bestas têm uma velocidade de recarga mais rápida e causam mais danos à saúde, à barra de equilíbrio e desmembramento",
    edabdc3: "Aumenta a chance de os inimigos derrotados deixarem cair itens; também aumenta a chance de encontrar itens de maior raridade",
    
    edspecialtitle1: "É UMA ARMADILHA",
    edspecialtitle2: "LUZ PERENE",
    edspecialtitle3: "MAESTRIA DE ARMA: BESTAS",
    edspecialtitle4: "O COLECIONADOR",
    edspecialhability1: "Quando ativada, essa habilidade permite o uso de uma lanterna especial que te ajuda a detectar e desarmar temporariamente armadilhas demoníacas.",
    edspecialhability2: "Aumenta a duração da bateria da sua lanterna.",
    edspecialhability3: "As bestas têm uma velocidade de recarga mais rápida e causam mais dano à saúde, à barra de equilíbrio e de desmembramento.",
    edspecialhability4: "Aumenta a chance de os inimigos derrotados deixarem cair itens; também aumenta a chance de encontrar caixas de maior raridade.",

    /* Mia */
    MiaAbilityDescription: "Quando ativada, Mia não pode ser possuída, mas seu nível de medo aumenta e não pode ser reduzido. No entanto, quando a habilidade é desativada, seu nível de medo diminui de acordo com o número de unidades malignas que ela matou enquanto a habilidade estava ativa.",
    miaab1: "O Medo Leva à Raiva",
    miaab2: "Chuva de Sangue",
    miaab3: "Maestria de Arma: Facão",
    miaabdc1: "Quando o nível de medo de Mia atinge um determinado limite, seu potencial de dano aumenta à medida que o medo cresce. Quanto mais assustada ela fica, mais dano causa.",
    miaabdc2: "Uma porcentagem do dano de ataque pesado de Mia é convertida em dano de sangramento prolongado.",
    miaabdc3: "O Facão tem uma velocidade de ataque maior e aumenta o dano à saúde, à barra de equilíbrio e de desmembramento.",
    miaspecialhability1: "Quando ativada, Mia não pode ser possuída, mas seu nível de medo aumenta e não pode ser reduzido. No entanto, quando a habilidade é desativada, seu nível de medo diminui de acordo com o número de unidades malignas que ela matou enquanto a habilidade estava ativa.",
    miaspecialhability2: "Quando o nível de medo de Mia atinge um determinado limite, seu potencial de dano aumenta à medida que o medo cresce. Quanto mais assustada ela fica, mais dano causa.",
    miaspecialhability3: "Uma porcentagem do dano de ataque pesado de Mia é convertida em dano de sangramento prolongado.",
    miaspecialhability4: "O Facão tem uma velocidade de ataque maior e aumenta o dano à saúde, à barra de equilíbrio e de desmembramento.",
    miaspecialtitle1: "Incontrolável",
    miaspecialtitle2: "O Medo Leva à Raiva",
    miaspecialtitle3: "Chuva de Sangue",
    miaspecialtitle4: "Maestria de Arma: Facão",

    /* David */
    DavidAbilityDescription: "Reduz o medo em você e em quaisquer companheiros de equipe que estejam dentro da aura da chama. As unidades malignas dentro da aura precisam de uma quantidade maior de Energia Infernal para serem possuídas.",
    davidab1: "Estouro de Refrigerante",
    davidab2: "Maestria de Armas: Pistola de Pregos",
    davidab3: "Farol Turbinado",
    davidabdc1: "Quando David bebe um Shemp's, ele e todos os Sobreviventes próximos recebem menos dano por um tempo limitado.",
    davidabdc2: "A pistola de pregos têm uma velocidade de recarga mais rápida e causa mais danos à saúde, à barra de equilíbrio e de desmembramento.",
    davidabdc3: "Aumenta o alcance da aura do Farol da Esperança e o custo de Energia Infernal para manter a possessão dentro da aura. Atacar uma unidade maligna possuída dentro da aura reduz a Energia Infernal do demônio.",
    davidspecialhability1: "Reduz o medo em você e em quaisquer companheiros de equipe que estejam dentro da aura da chama. As unidades malignas dentro da aura precisam de uma quantidade maior de Energia Infernal para serem possuídas.",
    davidspecialhability2: "Quando David bebe um Shemp's, ele e todos os Sobreviventes próximos recebem menos dano por um tempo limitado.",
    davidspecialhability3: "A pistola de pregos têm uma velocidade de recarga mais rápida e causa mais danos à saúde, à barra de equilíbrio e de desmembramento.",
    davidspecialhability4: "Aumenta o alcance da aura do Farol da Esperança e o custo de Energia Infernal para manter a possessão dentro da aura. Atacar uma unidade maligna possuída dentro da aura reduz a Energia Infernal do demônio.",
    davidspecialtitle1: "Farol da Esperança",
    davidspecialtitle2: "Estouro de Refrigerante",
    davidspecialtitle3: "Maestria de Armas: Pistola de Pregos",
    davidspecialtitle4: "Farol Turbinado",

    /* Lord Arthur */
    LordArthurAbilityDescription: "Quando ativada, essa habilidade aumenta o dano causado pelos seus ataques corpo a corpo e pelos de seus companheiros de equipe próximos, além de reduzir os níveis de medo; se Lord Arthur estiver com uma espada, ele causa dano extra.",
    lordarthurab1: "Mestre das Armas: Ataques Corpo a Corpo",
    lordarthurab2: "Maestria de Arma: Espada",
    lordarthurab3: "Abasteça o Fogo",
    lordarthurabdc1: "Você e todos os companheiros de equipe dentro do raio de ação da aura causam mais dano com ataques corpo a corpo; comece a partida com uma espada.",
    lordarthurabdc2: "A Espada tem uma velocidade de ataque maior e causa mais dano à vida, à barra de equilíbrio e de desmembramento.",
    lordarthurabdc3: "Se você executar um golpe final enquanto a Cólera do Lord estiver ativa, a habilidade dura mais tempo.",
    lordarthurspecialtitle1: "A Cólera do Lord",
    lordarthurspecialtitle2: "Mestre das Armas: Ataques Corpo a Corpo",
    lordarthurspecialtitle3: "Mestre em Armas: Espada",
    lordarthurspecialtitle4: "Abasteça o Fogo",
    lordarthurspecialhability1: "Quando ativada, essa habilidade aumenta o dano causado pelos seus ataques corpo a corpo e pelos de seus companheiros de equipe próximos, além de reduzir os níveis de medo; se Lord Arthur estiver com uma espada, ele causa dano extra.",
    lordarthurspecialhability2: "Você e todos os companheiros de equipe dentro do raio de ação da aura causam mais dano com ataques corpo a corpo; comece a partida com uma espada.",
    lordarthurspecialhability3: "A Espada tem uma velocidade de ataque maior e causa mais dano à vida, à barra de equilíbrio e de desmembramento.",
    lordarthurspecialhability4: "Se você executar um golpe final enquanto a Cólera do Lord estiver ativa, a habilidade dura mais tempo.",

    /* Ash Warrior */
    AshWarriorAbilityDescription: "Quando ativada, essa habilidade proporcionará recuperação de vida, redução do efeito de medo, aumento do dano causado e redução do dano recebido.",
    ashwarriorab1: "Explosão do Escudo",
    ashwarriorab2: "Finalize Forte",
    ashwarriorab3: "Maestria de Arma: Motosserra",
    ashwarriorabdc1: "Cada vez que o seu escudo perde uma barra, ocorre uma explosão que causa dano a todos os inimigos próximos.",
    ashwarriorabdc2: "Depois que Ash mata um inimigo com um golpe finalizador, ele recupera parte da barra de escudo.",
    ashwarriorabdc3: "A motosserra tem uma velocidade de ataque maior e causa mais dano à saúde, à barra de equilíbrio e de desmembramento.",
    ashwarriorspecialtitle1: "Poção do Sábio",
    ashwarriorspecialtitle2: "Explosão do Escudo",
    ashwarriorspecialtitle3: "Finalize Forte",
    ashwarriorspecialtitle4: "Maestria de Arma: Motosserra",
    ashwarriorspecialhability1: "Quando ativada, essa habilidade proporcionará recuperação de vida, redução do efeito de medo, aumento do dano causado e redução do dano recebido.",
    ashwarriorspecialhability2: "Cada vez que o seu escudo perde uma barra, ocorre uma explosão que causa dano a todos os inimigos próximos.",
    ashwarriorspecialhability3: "Depois que Ash mata um inimigo com um golpe finalizador, ele recupera parte da barra de escudo.",
    ashwarriorspecialhability4: "A motosserra tem uma velocidade de ataque maior e causa mais dano à saúde, à barra de equilíbrio e de desmembramento.",

    /* Ash Support */
    ashsupportspecialtitle1: "Presença Reconfortante",
    ashsupportspecialtitle2: "Cura Alternativa",
    ashsupportspecialtitle3: "Alvo Marcado: Dano",
    ashsupportspecialtitle4: "Alvo Marcado: Cura",
    ashsupportspecialhability1: "Quando ativada, essa habilidade reduz os níveis de medo em você e nos companheiros de equipe próximos.",
    ashsupportspecialhability2: "Ataques corpo a corpo pesados bem-sucedidos restauram parcialmente a saúde para você e para seus companheiros de equipe próximos.",
    ashsupportspecialhability3: "Os tiros na cabeça marcam o alvo por um tempo limitado; durante esse período, os tiros subsequentes disparados por você ou por seus companheiros de equipe causam dano adicional.",
    ashsupportspecialhability4: "Os tiros na cabeça marcam o alvo por um tempo limitado; durante esse período, os tiros subsequentes disparados por você ou por seus companheiros de equipe restauram uma porcentagem do dano causado como vida para vocês.",

    /* Ash Hunter */
    ashhunterspecialtitle1: "Exorcista",
    ashhunterspecialtitle2: "Caçador de Tesouros",
    ashhunterspecialtitle3: "Sou o cara com o cano duplo",
    ashhunterspecialtitle4: "Maestria de Arma: Cano duplo",
    ashhunterspecialhability1: "A ativação dessa habilidade expulsa o demônio de qualquer Sobrevivente ou unidade básica possuída. Se usada em uma unidade de elite ou chefe possuída, a habilidade drena parte da Energia Infernal do demônio.",
    ashhunterspecialhability2: "Ver caixas de suprimentos através das paredes a curta distância.",
    ashhunterspecialhability3: "Comece a partida com o cano duplo.",
    ashhunterspecialhability4: "O Cano Duplo tem uma velocidade de recarga mais rápido e causa mais dano à saúde, à barra de equilíbrio e de desmembramento.",

    /* Scotty */
    scottyspecialtitle1: "Impulso Trovão",
    scottyspecialtitle2: "Danos Colaterais",
    scottyspecialtitle3: "Terapia de Exposição",
    scottyspecialtitle4: "Maestria de Arma: Machado de Lenhador",
    scottyspecialhability1: "Quando ativada, essa habilidade explosiva causa dano a todos os inimigos na área ao redor.",
    scottyspecialhability2: "Seus ataques corpo a corpo pesados infligem dano adicional aos inimigos próximos.",
    scottyspecialhability3: "Reduz parcialmente seus níveis de medo a cada inimigo que você mata.",
    scottyspecialhability4: "O Machado de Lenhador tem uma velocidade de ataque maior e causa mais dano à saúde, à barra de equilíbrio e de desmembramento.",

    /* Pontos Fortes */
    edstrength: "Por ser caçador ele tem muita stamina.",

    miastrength: "Ela tem o maior dano do jogo.",

    davidstrength: "É o único Suporte útil, e forte, no livro.",

    lordarthurstrength: "Pode abaixar o próprio medo sozinho.",

    ashwarriorstrength: "Ganha barra de escudo realizando finalizador nos demônios.",

    ashsupportstrength: "Consegue abaixar o próprio medo.",
    ashsupportstrength2: "Consegue se curar sozinho ao acertar ataques pesados nos demônios.",

    scottystrength: "Ele tem maestria com a arma de corpo a corpo mais forte do jogo.",

    /* Pontos Fracos */
    weaknesses: "Pontos Fracos",
    edweak1: "Ele possui pouca saúde por ser Caçador.",

    miaweak1: "O medo dela sobe muito rápido, então você precisa vigiar seu nível de medo constantemente para que o demônio não saiba onde você está.",

    davidweak1: "Ele tem maestria com uma arma arma horrível, que dá pouco dano e gasta muita munição.",

    lordarthurweak1: "A espada tem um manejo difícil.",

    ashwarriorweak1: "Por ser Guerreiro tem pouca stamina.",

    ashsupportweak1: "Ataques pesados são lentos, então companheiros de equipe podem matar os demônios, ou realizar um finalizador, antes que você acerte o golpe e cure todos.",

    scottyweak1: "A habilidade especial dele é horrível.",

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

      MiaTip1: "Mia, diferente dos outros Guerreiros, não tem build de dano a barra de equilibro, mas sim uma build de dano. E isso, somado ao fato das habilidades especiais dela aumentarem seu dano quanto maior for seu medo, e dano de sangramento, torna ela a personagem com mais dano do jogo. Por isso, se você utilizar a arma com mais dano do jogo, o machado, ela ficará muito forte. Seu foco com ela, então, deve ser em dano!",

      DavidTip1: "Se você estiver sozinho no meio do nada e o demônio te achar, a Chama Azul é a sua salvação! A chama irá drenar toda a energia do demônio se ele possuir alguma unidade e tentar te matar. Você pode apenas se esquivar e ganhar tempo com ele na chama, mas se puder bater nele é melhor ainda, porque ele perderá energia mais rápido. E mesmo que ele não entre na chama, fique esperando ela acabar, ele irá perder tempo e energia, fazendo você recuperar stamina, ter seu medo diminuido, e ganhando tempo para pensar no que fazer ou tempo para seus amigos chegarem e te ajudar.",
      DavidTip2: "Tenha cuidado ao usar a Chama Azul porque se o demônio te assustar, ou te possuir, a animação é cortada, o poder não é usado, mas o tempo é resetado como se tivesse sido usado, então você terá que esperar muito tempo para conseguir usa sua habilidade de novo.",
      DavidTip3: "Lembre-se que seu refrigerante não só cura, mas faz diminuir o dano tomado pra todos os companheiros de equipe próximos, e isso é fundamental no livro. Então, saiba usar Shemp's pensando não só em curar, mas também pensando em fazer todos receberem menos dano — mesmo que todos estejam com a vida cheia; mas você teria que ter muitos refrigerantes e saber administrá-los.",
      DavidTip4: "Use a Chama Azul assim que o livro aparecer, pois assim conseguirá usá-la mais uma vez no final.",

      LordArthurTip1: "A espada é muito difícil de manejar e é lenta, então você terá que ter paciência e treinar bastante com ela. Uma dica é upar o Melee (corpo-a-corpo) pro máximo assim você terá +20% de velocidade de ataque corpo-a-corpo, além de +20% de dano corpo a corpo claro.",
      LordArthurTip2: "O poder de Lord Arthur não só aumenta o dano corpo-a-corpo, mas diminui o medo também, então ele é util para abaixar seu medo quando precisar. Não abaixa tanto, mas ajuda muitas vezes.",

      AshWarriorTip1: "Coloque os primeiros pontos na barra de escudo dele, focando em deixá-la no máximo. É fundamental que seu wAsh esteja com a barra de escudo cheia (ou pelo menos não vazia) para usar a habilidade de explosão dele, que é muito útil.",
      AshWarriorTip2: "Sempre finalize os inimigos, porque isso aumentará sua barra de escudo e você precisa disso.",
      AshWarriorTip3: "Esteja sempre com escudos ativos.",

      AshSupportTip1: "Seus ataques pesados resturam o dano como vida 20% (25% no P1), então quanto maior for seu ataque maior será a vida recuperada, por isso foque em armas com mais dano como machado, e monte uma build que aumente dano também.",
      AshSupportTip2: "Seus ataques pesados curam um pouco de vida, mas não tanto, então sempre se esquive se ver que o demõnio vai te bater e só depois bata nele, porque o que ele dá de dano é maior do que o que você recupera de vida.",
      AshSupportTip3: "Fique perto do seu time e use ataques pesados porque isso além de te curar, irá curá-los também.",

      AshHunterTip1: "Coloque os primeiros pontos na Stamina. Foque em deixá-la no máximo. Assim você terá stamina para catar os mapas, correr do demõnio e se esquivar se precisar. Contudo, se o demônio for um jogador experiente e te achar no inicio da partida a melhor opção pode ser colocar os pontos em Longo Alcance, porque assim você recarregará a arma mais rápido e dará mais dano.",
      AshHunterTip2: "Comece a partida rushando todos os mapas. Caçador é a classe que tem mais stamina, você consegue correr muito, e ainda tem o poder de exorcizar se for preciso caso o demônio te ache sozinho.",
      AshHunterTip3: "Antes de usar a habilidade de exorcizar mate todos os demônio em volta, porque senão você irá exorcizar a unidade possuida e ele irá possuir algum outro demônio ao redor e continuará te batendo, então não irá adiantar nada.",
      AshHunterTip4: "Vale a pena ter Recarga Rápida com ele, porque você precisará muito do poder dele. Calculos caso queira conferir: 90s (1 minuto e 30 segundos) - 10% (9 segundos) = 81s (1 minuto e 21 segundos). 85s [P5] (1 minuto e 25 segundos) - 10% (8,5 segundos) = 76,5s (1 minuto e 16 segundos)",
      AshHunterTip5: "Você não pode exorcizar unidades de elite e chefe possuidas, mas ao usar a habilidade de exorcizar você irá drenar a energia infernal do demônio e isso pode ser muito util, pois assim poderá diminuir o tempo de possessão dele ou mesmo acabar com a possessão porque ele pode estar com pouca energia infernal.",

      ScottyTip1: "Os ataques pesados dele fazem ele perde um pouco de medo, assim como companheiros ao redor, então use ataques pesado quando estiver nos primeiros objetivos para abaixar o medo o máximo que der e evitar ser possuído. O nível de medo abaixado é bem pouco, mas já ajuda.",
      ScottyTip2: "Ataques pesados causam dano em area, então é bom contra demônios que colocam muitas unidades, como Eligos e Ash Maligno. E é algo especialmente bom no livro.",

    /* DICAS GERAIS */
    generaltips: "Dicas Gerais",
    geraltip1: "Se pegar um carro ou atirar o Demônio conseguirá ver sua localização, então jamais faça isso no inicio da partida! Só faça isso quando já tiver pegado todas as partes do mapa e já estiver na Adaga/Página.",
    geraltip2: "Apresse-se em fazer os objetivos. Assim que a partida começar já vá atrás das partes do mapa e pegue coisas pelo caminho, mas na direção das partes do mapa. Quanto mais tempo você demorar, mais forte o Demônio ficará, e quanto mais forte ele ficar pior será para você seu time.",
    geraltip3: "Se o Demônio for fraco dá para 2 pessoas fazerem a Adaga e 2 fazerem a Página ao mesmo tempo, assim o jogo acaba mais rápido, nerfa o Demônio e ele não saberá o que fazer (tendo que decidir em qual deles ir). Da pra tentar isso com um cara mediano, mas você tem que se garantir (com alguém forte não faça isso!).",
    geraltip4: "Se o Demônio possuir algum companheiro seu, largue sua arma e bata nele no soco, pois você terá muita velocidade, baterá sem parar, e ele não conseguirá fazer nada! Mas isso não é um metodo 100% garantido e você tem que acertar o timming.",
    geraltip5: "Se você estiver usando uma arma rápida, tipo facão, seringa, picareta, etc, e seu medo estiver alto, jogue-a no chão, senão o Demônio vai te possuir e bater tão rápido nos seus companheiros que eles não poderão fazer nada e vão cair (pelo menos na Adaga/Página porque o Demônio terá muita vida).",
    geraltip6: "Diferente do que fazem não jogue sua arma de corpo-a-corpo no chão se tiver com medo alto, porque senão o Demônio vai se possuir e bater no soco em seus amigos e não tem como se esquivar disso, então ou eles vão morrer ou perder bastante saúde!",
    geraltip7: "Contra Demônios que são faceis de matar como Eligos e Baal use armas rápidas como picareta, facão, faca, etc, e contra demônios fortes/resistentes como Ash Maligno e Henrietta use armas fortes como machado, marreta, etc.",
    geraltip8: "O responsável por matar o Flautista é o Suporte, senão o Lider. O Guerreiro é a força do time, então ele não pode sair do objetivo por nada, e o Caçador é o segundo mais forte, as vezes ele é até mesmo mais forte que o Guerreiro, então também não pode sair, mesmo tendo mais stamina e podendo matar o Flautista de longe.",
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

      /* Dicas Gerais Demônio*/
      demongeneraltip1: "Para invocar o Chefe não tem custo de energia infernal, apenas para mantê-lo.",
      demongeneraltip2: "Sobreviventes podem usar glitchs, como o de correr usando a habilidade especial/refrigerante Shemp's ou bater sem parar, então tenha cuidado.",
      demongeneraltip3: "Verá que tudo depende do livro. Tem jogadores demônio fracos que perdem facil em todos os objetivos, mas conseguem destruir o livro e ganham a partida. Então foque em uma build para isso, ou seja, foque em aumentar a barra de equilibrio das suas unidades e dano delas.",
      demongeneraltip4: "Quando o Chefe morre ele dropa um refrigerante Shemp's ou um amuleto, então se ver que vai morrer vá para longe e esconda-se para os Sobreviventes não verem e pegarem o item de cura.",
      demongeneraltip5: "Destrua todos os carros próximo quando os Sobreviventes ativarem a Adaga ou a Página de imediato. Dê prioridade para destruir os carros antes de ataca-los. Existem carros intocaveis, pois só spawnam quando um sobrevivente chega perto. Se um desses carros estiver próximo do objetivo você pode possuir um sobrevivente e levá-lo até o carro para spawnar ele e depois é só destruí-lo. Se não estiver próximo, nem vá atrás dos sobreviventes porque eles vão pegar o carro e escapar, então foque em botar armadilhas no próximo objetivo.",

      /* Eligos */
      EligosBio: "Eligos pode ser chamado de muitas coisas, mas “demônio menor” não é uma delas. Além da habilidade de lançar pedras com a mente, ele possui o poder telecinético de atordoar temporariamente todos os Sobreviventes próximos. Ele também fica invisível quando se move, então boa sorte para detê-lo.",
      EligosAbility: "As unidades que você possui têm mais vida, causam mais dano e seus ataques aumentam o medo nos alvos. Além disso, as unidades malignas possuídas causam dano de sangramento.",
      EligosAb1: "Onda Telecinética",
      EligosAb2: "Lançamento de Pedras",
      EligosAb3: "Aperto Psíquico",
      EligosAbInfo1: "Eligos usa o poder telecinético para imobilizar os Sobreviventes próximos.",
      EligosAbInfo2: "Eligos lança pedras nos Sobreviventes.",
      EligosAbInfo3: "Eligos usa a telecinesia para imobilizar e causar dano a um Sobrevivente. Este ataque não pode ser esquivado. Para quebrar a imobilização, outros Sobreviventes devem atacar Eligos.",

    edbio: "Sendo um caçador de relíquias, o Professor Associado Ed Getly entende a importância de uma lanterna. A bateria da lanterna de Ed duram mais tempo e sua tecnica ativa lhe permite usar uma lanterna especial para detectar e desarmar armadilhas demoniacas. ele tem 'o jeito' para encontrar armas de melhor qualidade e, simplesmente por estar por perto, ele proporicona essa vantagem a todos os membros de equipe da partida. Como se isso tudo não fosse o bastante, ele ainda é perito de besta.",
    miabio: "Mia Allen jurou manter o controle. Além de ter maestria com o facão, ela aprendeu a transformar seu medo em força. Ela tem a capacidade de aumentar seu próprio nível de medo, tornando-se invulnerável à possessão e permitindo-lhe causar mais danos à medida que esse nível aumenta. Os inimigos temem seus ataques poderosos porque uma porcentagem do dano que causam é automaticamente convertida em sangramento prolongado.",
    davidbio: "David Allen nem sempre esteve presente para seus entes queridos. Desta vez, ele não vai mais fugir. Sua coragem renovada é simbolizada pela capacidade de acender uma fogueira improvisada que, ao mesmo tempo, diminui o medo dos outros Sobreviventes e enfraquece a capacidade do demônio de possuí-los.",
    lordarthurbio: "Senhor protetor do Castelo de Kandar, Arthur é um líder extraordinariamente inspirador. Ele aumenta automaticamente o dano corpo a corpo causado por qualquer Sobrevivente próximo. Se Arthur decidir liberar totalmente sua ira, os companheiros que estiverem por perto recebem um aumento ainda maior no dano corpo a corpo causado e uma redução de medo.",
    ashwarriorbio: "Ele teve a chance de se tornar rei. Em vez disso, este Ash voltou da Idade Média para salvar o mundo do mal. Extremamente resistente em combate, ele consegue regenerar parcialmente seu escudo ao desferir ataques finalizadores. Quando esgotado, seu escudo explode, causando dano aos inimigos próximos. Ele é um mestre da motosserra, mas, se tudo mais falhar, pode beber a poção do Sábio para ganhar uma melhoria.",
    ashsupportbio: "Esse Ash, de rosto jovem, está sempre cuidando do seu grupo. Sua habilidade ativa reduz o nível de medo dos Sobreviventes próximos, e uma parte do dano causado por seus ataques corpo a corpo pesados sempre concede cura aos companheiros de equipe próximos. Seus tiros na cabeça também marcam os alvos, de modo que o próximo Sobrevivente a acertar esse inimigo causa dano extra e recebe um pouco de cura.",
    ashhunterbio: "Depois de perder o amor de sua vida para as forças das trevas, esse Ash logo encontrou um novo amor: seu cano duplo. Ele começa todas as partidas com ele e sabe manuseá-lo com mais eficácia do que qualquer outra pessoa no planeta. Sua experiência lhe conferiu a capacidade de detectar caixas de suprimentos próximas através das paredes e uma habilidade única que lhe permite expulsar o demônio de qualquer humano ou Deadite que esteja por perto.",
    scottybio: "Seja para contar uma piada ou acabar com uma Deadite, Scotty, o melhor amigo de Ash, está sempre pronto! Um mestre com um machado de lenhador, os ataques corpo a corpo pesados de Scotty causam dano colateral aos inimigos ao redor, e seus níveis de medo diminuem a cada morte. Ele possui uma habilidade única capaz de desencadear uma explosão devastadora que causa dano a todos os inimigos ao seu redor com um único impulso."
  },

  /* ENGLISH */
  en: {
    title: "Evil Dead Tips",
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
    exclusive: "Exclusive",
    voice_lines: "Voice Lines",
    unreleased: "Unreleased",
    nodescription: "No description.",
    crates: "Crates",

    /* Personagens */
    lash: "Ash (Leader)",
    wash: "Ash (Warrior)",
    hash: "Ash (Hunter)",
    sash: "Ash (Support)",
    eligos: "Eligos - Puppeteer",
    puppeteer: "Puppeteer",
    necromancer: "Necromancer",
    warlord: "Warlord",
    plaguebringer: "Plaguebringer",
    schemer: "Schemer",
    evilash: "Evil Ash",
    witch: "Witch",

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
    AttackSpeed: "Attack Speed",
    AmountConvertedToBleedingDamage: "Amount Converted To Bleeding Damage",
    BleedingDuration: "Bleeding Duration",
    FearThreshold: "Fear Threshold",
    MaximumDamage: "Maximum Damage",
    FearIncreasePerSecond: "Fear Increase Per Second",
    FearReductionPerKill: "Fear Reduction Per Kill",
    MeleeDamage: "Melee Damage",
    NoMastery: "This character does not have any weapon mastery.",

    /* Caixas */
      crate_common: "Crate Common",
      crate_rare: "Crate Rare",
      crate_epic: "Crate Epic",
      crate_legendary: "Crate Legendary",
      treasure_chest: "Treasure Chest",

      cratecommondesc: "This common crate is as basic as they came and has a low chance of yielding anything with serious value.",
      crateraredesc: "This rare crate might have something nice inside. Then again, it might not.",
      crateepicdesc: "This epic crate has a high chance of containing several bottles of Pink F and higher quality weapons.",
      cratelegendarydesc: "This crate contains a legendary weapon and multiple bottles of Pink F.",
      treasurechestdesc: "Contains high quality loot.",
    
    /* Loots */
      onepinkf: "1 Pink F",
      twopinkf: "2 Pink F",
      threepinkf: "3 Pink F",
      fourpinkf: "4 Pink F",
      oneweapon: "1 Weapon",
      oneamulet: "1 Amulet",
      oneshemps: "1 Shemp's Cola",


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
      bat: "Nailed Bat",
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
      harpoon: "Harpoon Launcher",
      flamethrower: "Flamethrower",

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
      minigundesc: "Pull the trigger, feel the power, send them back to hell.",
      harpoondesc: "Originally designed to hunt sea creatures, this weapon is even better at skewering Deadites.",

        /* minigun voice lines */
        minigunvc1: " These things are dangerous",
        minigunvc2: " Yeah you want some more?",
        minigunvc3: " Eat lead.",
        minigunvc4: " Mmm. Heavy.",
        minigunvc5: " Hey baby!",
        
        /* harpoon voice lines */
        harpoonvc1: " Impalement from afar! Brilliant!",
        harpoonvc2: " Evil on a stick.",
        harpoonvc3: " Barbed missile hits its mark!",
        harpoonvc4: " Skewered!",
        harpoonvc5: " Spiked one!",
        harpoonvc6: " Shish kabob.",
        harpoonvc7: " You piss me off, you're gonna get the harpoon.",
        harpoonvc8: " Are we hunting whales?",
        harpoonvc9: " Cross harpooning a Deadite off my bucket list.",

        /* flamethrower voice lines */
        flamethrowervc1: " A fire-hurler -- my men must have one!",
        flamethrowervc2: " Just what I've always wanted!",
        flamethrowervc3: " Sometimes dreams come true.",
        flamethrowervc4: " Roasted!",
        flamethrowervc5: " Always wanted to try one of these.",
        flamethrowervc6: " Ah, how 'bout extra crispy?",
        flamethrowervc7: " Where you're going, you might as well be on fire. Flame on, evil!",
        flamethrowervc8: " Sorry man, you're fired.",
        flamethrowervc9: " Provider of the burning sensation.",

    /* Classes */
    leaderdesc: "Leaders have specific auras that improve their stats and the stats of nearby Survivors. They're also more resistant to fear.",
    warriordesc: "Warriors have more health and inflict more melee damage.",
    hunterdesc: "Hunters inflict more ranged weapon damage, can carry more ammo, and have slower stamina consumption.",
    supportdesc: "Support class Survivors start with a Shemp's Cola and an amulet, and can carry more Shemp's and amulets. If Shemp's or amulets are used, Survivors in your aura also gain the positive effects.",

    /* Perfil dos personagens */
    attributes: "Attributes",
    defense: "Defense",
    melee: "Melee weapons",
    range: "Ranged weapons",
    support2: "Team Assistance",

    /* Habilidades */
    abilities: "Abilities",
    specialabilities: "Special Abilities",
    showabilities: "Show Abilities",
    showprofile: "Show Profile",
    duration: "Duration",
    cooldown: "Cooldown",
    dismembermentdamage: "Dismemberment damage",
    balancebardamage: "Balance bar damage",
    ReloadSpeedIncrease: "Reload speed increase",
    FearReductionSpeed: "Fear Reduction Speed",
    PossessionCostIncrease: "Possession Cost Increase",
    DamageReduction: "Damage Reduction",
    EffectDuration: "Effect Duration",
    AuraEffectRange: "Aura Effect Range",
    InfernalEnergyReductionPerHit: "Infernal Energy Reduction Per Hit",
    InfernalEnergyCost: "Infernal Energy Cost",
    FearReduction: "Fear Reduction",
    ExtraDuration: "Extra Duration",
    DamageIncrease: "Damage Increase",
    HealthRestored: "Health Restored",
    ExplosionDamage: "Explosion Damage",
    ShieldBarRestored: "Shield Bar Restored",
    DamageRestoredAsHealth: "Damage Restored As Health",
    InfernalEnergyReduction: "Infernal Energy Reduction",
    batterylife: "Battery life",
    ImpactRadius: "Impact Radius",
    DamageDealtToNearbyEnemies: "Damage Dealt to Nearby Enemies",


    /* Ed */
    EdAbilityDescription: "When activated, this ability grants use of a unique flashlight that allows you to detect and temporarily disarm demon traps.",
    edab1: "Enduring Light",
    edab2: "Weapon Master: Crossbows",
    edab3: "The Collector",
    edabdc1: "Increases the battery life of your flashlight",
    edabdc2: "Crossbows have a faster reload speed and deal increased health, balance bar and dismemberment damage",
    edabdc3: "Increases the chance that defeated enemies will drop items; also improves the chance of finding creates of higher rarity",
    
    edspecialtitle1: "IT'S A TRAP",
    edspecialtitle2: "ENDURING LIGHT",
    edspecialtitle3: "WEAPON MASTER: CROSSBOWS",
    edspecialtitle4: "THE COLLECTOR",
    edspecialhability1: "When activated, this ability grants use of a unique flashlight that allows you to detect and temporarily disarm demon traps.",
    edspecialhability2: "Increases the battery life of your flashlight.",
    edspecialhability3: "Crossbows have a faster reload speed and deal increased health, balance bar and dismemberment damage.",
    edspecialhability4: "Increases the chance that defeated enemies will drop items; also improves the chance of finding crates of higher rarity.",

    /* Mia */
    MiaAbilityDescription: "When activated, Mia cannot be possessed but her fear level increases and cannot be decreased. However, when the ability deactivates, her fear level drops according to how many evil units she killed while it was active.",
    miaab1: "Fear Leads To Anger",
    miaab2: "Blood Rain",
    miaab3: "Weapon Master: Machete",
    miaabdc1: "When Mia's fear level reaches a specific threshold, her damage potential increases as her fear rises. The more scared she is, the more damage she deals.",
    miaabdc2: "A percentage of Mia's heavy attack damage is converted to prolonged bleeding damage.",
    miaabdc3: "The Machete has a faster attack speed and deals increased health, balance bar and dismembermemt damage.",
    miaspecialhability1: "When activated, Mia cannot be possessed but her fear level increases and cannot be decreased. However, when the ability deactivates, her fear level drops according to how many evil units she killed while it was active.",
    miaspecialhability2: "When Mia's fear level reaches a specific threshold, her damage potential increases as her fear rises. The more scared she is, the more damage she deals.",
    miaspecialhability3: "A percentage of Mia's heavy attack damage is converted to prolonged bleeding damage.",
    miaspecialhability4: "The Machete has a faster attack speed and deals increased health, balance bar and dismembermemt damage.",
    miaspecialtitle1: "Uncontrollable",
    miaspecialtitle2: "Fear Leads To Anger",
    miaspecialtitle3: "Blood Rain",
    miaspecialtitle4: "Weapon Master: Machete",

    /* David */
    DavidAbilityDescription: "Reduces fear for you and any teammates within the flame's aura. Evil units within the aura require and increased amount of Infernal Energy to possess.",
    davidab1: "Soda Pop",
    davidab2: "Weapon Master: Nail Gun",
    davidab3: "Boosted Beacon",
    davidabdc1: "When David drinks a Shemp's, he and all nearby Survivors take less damage for a limited time.",
    davidabdc2: "Nail guns have a faster reload speed and deal increased health, balance bar and dismemberment damage.",
    davidabdc3: "Increases the range of Beacon of Hope's aura and the Infernal Energy cost to maintain possession within the aura. Attacking a possessed evil unit within the aura reduces the demon's Infernal Energy.",
    davidspecialhability1: "Reduces fear for you and any teammates within the flame's aura. Evil units within the aura require and increased amount of Infernal Energy to possess.",
    davidspecialhability2: "When David drinks a Shemp's, he and all nearby Survivors take less damage for a limited time.",
    davidspecialhability3: "Nail guns have a faster reload speed and deal increased health, balance bar and dismemberment damage.",
    davidspecialhability4: "Increases the range of Beacon of Hope's aura and the Infernal Energy cost to maintain possession within the aura. Attacking a possessed evil unit within the aura reduces the demon's Infernal Energy.",
    davidspecialtitle1: "Beancon of Hope",
    davidspecialtitle2: "Soda Pop",
    davidspecialtitle3: "Weapon Master: Nail Gun",
    davidspecialtitle4: "Boosted Beacon",

    /* Lord Arthur */
    LordArthurAbilityDescription: "When activated, this ability increases the damage inflicted by your melee attacks and those of your nearby teammates, in addition to reducing fear levels; if Lord Arthur has a sword, he inflicts extra damage.",
    lordarthurab1: "Weapon Master: Melee Attacks",
    lordarthurab2: "Weapon Master: Sword",
    lordarthurab3: "Fuel the Fire",
    lordarthurabdc1: "You and all teammates within the aura's radius deal increased damage with melee attacks; start the match with a sword.",
    lordarthurabdc2: "The Sword has a faster attack speed and deals increased health, balance bar and dismemberment damage.",
    lordarthurabdc3: "If you perform a finisher while the Lord's Wrath is active, the ability lasts longer.",
    lordarthurspecialtitle1: "The Lord's Wrath",
    lordarthurspecialtitle2: "Weapon Master: Melee Attacks",
    lordarthurspecialtitle3: "Weapon Master: Sword",
    lordarthurspecialtitle4: "Fuel the Fire",
    lordarthurspecialhability1: "When activated, this ability increases the damage inflicted by your melee attacks and those of your nearby teammates, in addition to reducing fear levels; if Lord Arthur has a sword, he inflicts extra damage.",
    lordarthurspecialhability2: "You and all teammates within the aura's radius deal increased damage with melee attacks; start the match with a sword.",
    lordarthurspecialhability3: "The Sword has a faster attack speed and deals increased health, balance bar and dismemberment damage.",
    lordarthurspecialhability4: "If you perform a finisher while the Lord's Wrath is active, the ability lasts longer.",

    /* Ash Warrior */
    AshWarriorAbilityDescription: "When activated, this ability will grant you health restoration, fear reduction, increased damage dealing and reduction of damage received.",
    ashwarriorab1: "Shield Blast",
    ashwarriorab2: "Finish Strong",
    ashwarriorab3: "Weapon Master: Chainsaw",
    ashwarriorabdc1: "Each time your shield loses a bar, it triggers an explosion, damaging any nearby enemies.",
    ashwarriorabdc2: "After Ash kills an enemy with a finisher he recovers part of his shield bar.",
    ashwarriorabdc3: "The Chainsaw has a faster attack speed and deals increased health, balance bar and dismemberment damage.",
    ashwarriorspecialtitle1: "Wiseman's Potion",
    ashwarriorspecialtitle2: "Shield Blast",
    ashwarriorspecialtitle3: "Finish Strong",
    ashwarriorspecialtitle4: "Weapon Master: Chainsaw",
    ashwarriorspecialhability1: "When activated, this ability will grant you health restoration, fear reduction, increased damage dealing and reduction of damage received.",
    ashwarriorspecialhability2: "Each time your shield loses a bar, it triggers an explosion, damaging any nearby enemies.",
    ashwarriorspecialhability3: "After Ash kills an enemy with a finisher he recovers part of his shield bar.",
    ashwarriorspecialhability4: "The Chainsaw has a faster attack speed and deals increased health, balance bar and dismemberment damage.",

    /* Ash Support */
    ashsupportspecialtitle1: "Reassuring Presence",
    ashsupportspecialtitle2: "Alternative Healing",
    ashsupportspecialtitle3: "Marked Target: Damage",
    ashsupportspecialtitle4: "Marked Target: Healing",
    ashsupportspecialhability1: "When activated, this ability reduces fear levels for you and nearby teammates.",
    ashsupportspecialhability2: "Successful heavy melee attacks partially restore health for your and nearby teammates.",
    ashsupportspecialhability3: "Headshots mark a target for a limited time; during this period, follow up shots from you or your teammates deal additional damage.",
    ashsupportspecialhability4: "Headshots mark a target for a limited time; during this period, follow up shots from you or your teammates restore a percentage of the damage back to you as health.",

    /* Ash Hunter */
    ashhunterspecialtitle1: "Exorcist",
    ashhunterspecialtitle2: "Treasure Hunter",
    ashhunterspecialtitle3: "I'm the guy with the double-barrel",
    ashhunterspecialtitle4: "Weapon Master: Double-barrel",
    ashhunterspecialhability1: "Activating this ability exorcises the demon from any possessed Survivor or basic unit. If used on a possessed elite or boss unit, the ability drains some Infernal Energy from the demon.",
    ashhunterspecialhability2: "See supply crates through walls at close range.",
    ashhunterspecialhability3: "Start the match with the double-barrel.",
    ashhunterspecialhability4: "The Double-Barrel has a faster reload speed and deals increased health, balance bar and dismemberment damage.",

    /* Scotty */
    scottyspecialtitle1: "Thunder Thrust",
    scottyspecialtitle2: "Collateral Damage",
    scottyspecialtitle3: "Exposure Therapy",
    scottyspecialtitle4: "Weapon Master: Lumberjack Axe",
    scottyspecialhability1: "When activated, this explosive ability damages all enemies in the surrounding area.",
    scottyspecialhability2: "Your heavy melee attacks inflict additional damage to nearby enemies.",
    scottyspecialhability3: "Partially reduces your fear levels with every enemy you kill.",
    scottyspecialhability4: "The Lumberjack Axe has a faster attacks speed and deals increased health, balance bar and dismemberment damage.",

    /* Pontos Fortes */
    edstrength: "Since he's a hunter, he has a lot of stamina.",

    miastrength: "She deals the most damage in the game.",

    davidstrength: "It is the only useful, and strong, Support in the book.",

    lordarthurstrength: "He can reduce his fear on his own.",

    ashwarriorstrength: "Earn a shield bar by performing finisher on demons.",

    ashsupportstrength: "He is able to lower his own level of fear.",
    ashsupportstrength2: "He can heal himself by landing heavy attacks on demons.",

    scottystrength: "He has mastery over the game's most powerful melee weapon.",

    /* Pontos Fracos*/
    weaknesses: "Weaknesses",
    edweak1: "He has low health because he is a Hunter.",

    miaweak1: "Her fear rises very quickly, so you need to keep a constant eye on her fear level so the demon doesn't know where you are.",

    davidweak1: "He have mastery with of a terrible weapon that deals little damage and uses up a lot of ammunition.",

    lordarthurweak1: "The sword is difficult to handle.",

    ashwarriorweak1: "Because he's a Warrior, he has low stamina.",

    ashsupportweak1: "Heavy attacks are slow, so your teammates can kill the demons, or land a finisher, before you land your attack and heal everyone.",

    scottyweak1: "His special ability is terrible.",

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

      MiaTip1: "Unlike the other Warriors, Mia doesn't have a balance bar damage build; instead, she has a pure damage build. Combined with the fact that her special abilities increase her damage the more fear she has, plus her bleed damage, this makes her the highest-damage character in the game. Therefore, if you equip her with the game's highest-damage weapon, the lumberjack axe, she'll be extremely powerful. Your focus with her, then, should be on damage!",

      DavidTip1: "If you're alone in the middle of nowhere and the demon finds you, the Blue Flame is your salvation! The flame will drain all the demon's energy if it has any left and tries to kill you. You can just dodge and stall it in the flame, but if you can hit it, that’s even better, because he will lose energy faster. And even if he doesn’t enter the flame, just wait for it to burn out, he will waste time and energy, allowing you to regain stamina, reduce your fear, and buy time to figure out what to do or for your friends to arrive and help you.",
      DavidTip2: "Be careful when using the Blue Flame, because if the demon scares you, or possesses you, the animation is cut short, the ability isn't used, but the cooldown is reset as if it had been used, so you'll have to wait a long time before you can use your ability again.",
      DavidTip3: "Remember that your soda not only heals you, but also reduces the damage taken by all nearby teammates, and this is crucial in the game. So, learn to use Shemp's not just to heal, but also to help everyone take less damage — even if everyone is at full health; but you'll need to have plenty of sodas and know how to manage them.",
      DavidTip4: "Use the Blue Flame as soon as the book appears, because that way you'll be able to use it one more time at the end.",

      LordArthurTip1: "The sword is very difficult to handle and it's slow, so you'll need to be patient and practice a lot with it. One tip is to max out your Melee stat, which will give you a +20% melee attack speed bonus, as well as a +20% melee damage bonus, of course.",
      LordArthurTip2: "Lord Arthur's ability not only increases melee damage but also reduces fear, so it's useful for lowering your fear level when you need to. It doesn't lower it by much, but it often helps.",

      AshWarriorTip1: "Put your early points into his shield bar and focus on maxing it. It's crucial that your wAsh has a full shield bar (or at least not empty) to use his Shield Blast, which is a very useful ability.",
      AshWarriorTip2: "Always finish off your enemies, because that will increase your shield bar, and you need it.",
      AshWarriorTip3: "Always keep your shields up.",

      AshSupportTip1: "Your heavy attacks restore damage as health at a rate of 20% (25% at P1), so the higher your attack, the more health you’ll recover. That’s why you should focus on high-damage weapons like axes and build a setup that also increases your damage.",
      AshSupportTip2: "His heavy attacks restore a little health, but not that much, so always dodge if you see the demon about to hit you, and only then attack him, because the damage he deals is greater than the health you regain.",
      AshSupportTip3: "Stay close to your team and use heavy attacks, because that will not only heal you but also heal them.",

      AshHunterTip1: "Put your first points into Stamina. Focus on maxing it out. That way, you’ll have enough stamina to scavenge for pieces of the map, run from the demon, and dodge if you need to. However, if the demon is an experienced player and finds you early in the match, the best option might be to put your points into Long Range, because that way you’ll reload your weapon faster and deal more damage.",
      AshHunterTip2: "Start the match by rushing through all the pieces of the map. The Hunter is the class with the most stamina, you can run a long way, and you also have the ability to exorcise if necessary, in case the demon finds you alone.",
      AshHunterTip3: "Before using the exorcism ability, kill all the demons around you, because otherwise you’ll exorcise the possessed unit, and he will possess another demon nearby and keep attacking you, so hitwon’t do any good.",
      AshHunterTip4: "It's worth having Quick Recharge with him, because you'll really need his power. Here are the calculations if you want to check: 90s (1 minute and 30 seconds) - 10% (9 seconds) = 81s (1 minute and 21 seconds). 85s [P5] (1 minute and 25 seconds) - 10% (8.5 seconds) = 76.5s (1 minute and 16 seconds)",
      AshHunterTip5: "You cannot exorcise possessed elite and boss units, but using the exorcism ability will drain the demon’s infernal energy, which can be very useful because it can shorten the duration of the possession or even end it altogether if the demon is low on infernal energy.",

      ScottyTip1: "His heavy attacks cause him to lose a little fear, as do his nearby allies, so use heavy attacks when you’re facing the first objectives to lower their fear as much as possible and avoid being possessed. The reduction in fear is very small, but it helps.",
      ScottyTip2: "Heavy attacks deal area damage, so they're effective against demons that deploy many units, such as Eligos and Evil Ash. And it's particularly useful in the book.",
    
    /* General tips */
    generaltips: "General Tips",
    geraltip1: "If you get in a car or shoot, the Demon will be able to see your location, so never do that at the start of the match! Only do that once you’ve collected all the map pieces and are already at the Dagger/Page.",
    geraltip2: "Hurry up and complete the objectives. As soon as the match starts, head straight for the map pieces and pick up items along the way, but keep moving toward the map pieces. The longer you take, the stronger the Demon will become, and the stronger it gets, the worse it will be for you and your team.",
    geraltip3: "If the Demon is weak, two people can make the Dagger and two can make the Page at the same time, so the game ends faster. This nerfs the Demon, and it won’t know what to do (since it has to decide which one to go for). You can try this with an average Demon, but you have to be careful (don’t do this with a strong one!).",
    geraltip4: "If the Demon possesses one of your teammates, drop your weapon and start punching him, because you’ll have incredible speed, you’ll keep hitting him nonstop, and he won’t be able to do a thing! But this isn't a foolproof method, and you have to get the timing right.",
    geraltip5: "If you're using a fast weapon—like a machete, syringe, pickaxe, etc.—and your fear level is high, drop it on the ground; otherwise, the Demon will possess you and attack your teammates so quickly that they won't be able to do anything and will fall (at least in the Dagger/Page, because the Demon will have a lot of infernal energy).",
    geraltip6: "Unlike what others do, don't throw your melee weapon on the ground if your fear level is high, because otherwise the Demon will possess you and punch your teammates—and there's no way to dodge that, so they'll either die or lose a lot of health!",
    geraltip7: "Against Demons that are easy to kill, such as Eligos and Baal, use fast weapons like a pickaxe, machete, knife, etc., and against strong/tough demons like Evil Ash and Henrietta, use powerful weapons like an axe, sledgehammer, etc.",
    geraltip8: "The one responsible for killing the Flutist is the Support, or else the Leader. The Warrior is the team’s main source of strength, so he can’t stray from the objective under any circumstances, and the Hunter is the second strongest, sometimes even stronger than the Warrior, so he can’t stray either, even though he has more stamina and can kill the Flutist from a distance.",
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

    /* Dicas Gerais Demônio*/
      demongeneraltip1: "Summoning the Boss doesn't cost any inernal energy; it only costs infernal energy to keep him active.",
      demongeneraltip2: "Survivors can do glitches, such as running while using Shemp's/special ability or attacking nonstop, so be careful.",
      demongeneraltip3: "You'll see that it all depends on the book. There are weak players who lose easily in every objective but manage to destroy the book and win the match. So focus on a build for that—in other words, focus on increasing your units' health and damage.",
      demongeneraltip4: "When the Boss dies, he drops a Shemp's cola or an amulet, so if you see that your boss is about to die, move away and hide so the Survivors don't see you and take the healing item.",
      demongeneraltip5: "Destroy all nearby cars immediately when Survivors activate the Dagger or the Page. Prioritize destroying the cars before attacking them. There are untouchable cars, as they only spawn when a survivor gets close. If one of these cars is near the objective, you can possess a survivor and take them to the car to spawn it, then just destroy it. If it’s not nearby, don’t even go after the survivors because they’ll take the car and escape, so focus on setting traps at the next objective.",

      /* Eligos */
      EligosBio: "Eligos can be called a lot of things, but a 'minor demon' is not one of them. In addition to the ability to throw rocks with his mind, he wields the telekinetic power to temporarily stun all nearby Survivors. He's also invisible when moving, so good luck stopping him.",
      EligosAbility: "Units you possess have more health, deal more damage, and their attacks increase fear in their targets. Additionally, possessed evil units inflict bleeding damage.",
      EligosAb1: "Telekinetic Surge",
      EligosAb2: "Casting Stones",
      EligosAb3: "Psychic Squeeze",
      EligosAbInfo1: "Eligos uses telekinetic power to immobilize nearby Survivors.",
      EligosAbInfo2: "Eligos launches rocks at Survivors.",
      EligosAbInfo3: "Eligos use telekinesis to immobilize and damage a Survivor. This attack cannot be dodged. To break the hold, other Survivors must attack Eligos.",

    edbio: "As a relic hunter, Associate Professor Ed Getley understands the importance of a flashlight. Ed's flashlight batteries last longer and his active ability allows him to use a special flashlight to detect demonic traps and disarm them. Ed has a knack for finding higher quality weapons and his mere presence provides this advantage to all team members in a match. If that isn't enough, the guy is also a crossbow master.",
    miabio: "Mia Allen has vowed to stay in control. Not only has she mastered the machete, but she's learned to channel her terror into strength. She has the ability to increase her own fear level, making her invulnerable to possession and allowing her to deal greater damage as that level rises. Enemies fear her heavy attacks because a percentage of the damage they inflict is automatically converted to prolonged bleeding.",
    davidbio: "David Allen hasn't always been there for his loved ones. This time, he's through running away. His bolstered courage is symbolized by the ability to light an improvised bonfire that both reduces the fear of other Survivors and weakens the demon's ability to possess them.",
    lordarthurbio: "Lord protector of Castle Kandar, Arthur is an extraordinarily inspiring leader. He automatically increases the melee damage dealt by any nearby Survivors. If Arthur decides to fully unleash his wrath, comrades who are close at hand experience an even greater boost in melee damage dealt and a reduction of fear.",
    ashwarriorbio: "He had the chance to be king. Instead, this Ash is back from the middle ages to save the world from evil. Exceptionally resilient in combat, he can partially regenerate his shield when delivering finisher attacks. Once depleted, his shield explodes, damaging nearby enemies. He's a master of the chainsaw, but, if all else fails, he can drink the Wiseman's potion for a boost.",
    ashsupportbio: "This fresh-faced Ash is always looking out for his crew. His active skill reduces the fear level of nearby Survivors and a portion of the damage caused by his heavy melee attacks always grants healing to nearby teammates. his head shots also mark their targets so the next Survivor to hit this enemy deals extra damage and receives some healing.",
    ashhunterbio: "After losing the love of his life to the forces of darkness, this Ash soon found a new love: his double-barrel. He begins every match with it and can wield it more effectively than anyone else on the planet. His experience has granted him the ability to sense nearby supply crates through walls and a unique skill which allows him to expel the demon from any nearby human or Deadite.",
    scottybio: "Whether it's to crack a joke or kill a Deadite, Ash's best friend Scotty is always down! A master with a lumberjack axe, Scotty's heavy melee attacks cause splash damage to surrounding enemies and his fear levels are reduced with each kill. He possesses a unique skill which can unleash a devastating blast that damages all enemies around him with a single thrust."

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