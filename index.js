const calendrierMatchs = [
  {
    id: 'LFL_KC_SLY',
    jeu: 'League of Legends',
    competition: 'LFL',
    equipeA: 'Karmine Corp',
    equipeB: 'Solary',
    probabiliteA: 0.65, // 65% de chance pour KC
    statut: 'À venir'
  },
  {
    id: 'VCT_VIT_M8',
    jeu: 'Valorant',
    competition: 'VCT EMEA',
    equipeA: 'Team Vitality',
    equipeB: 'Mandatory',
    probabiliteA: 0.55, // 55% de chance pour Vitality
    statut: 'À venir'
  },
  {
    id: 'LFL_GO_BDS',
    jeu: 'League of Legends',
    competition: 'LFL',
    equipeA: 'Gentle Mates',
    equipeB: 'BDS Academy',
    probabiliteA: 0.48, // 48% de chance pour GM, donc BDS est favori
    statut: 'À venir'
  },
  {
    id: 'LFL_KC_M8',
    jeu: 'Valorant',
    competition: 'VCT EMEA',
    equipeA: 'Karmine Corp',
    equipeB: 'Mandatory',
    probabiliteA: 0.52,
    statut: 'À venir'
  },
  {
    id: 'GTA_A_B',
    jeu: 'GTA 6',
    competition: 'GTA',
    equipeA: 'A',
    equipeB: 'B',
    probabiliteA: 0.72,
    statut: 'Terminé'
  },
   {
    id: 'GTA_Ali_Bob',
    jeu: 'GTA 6',
    competition: 'GTA',
    equipeA: 'Team Ali',
    equipeB: 'Bobby Team',
    probabiliteA: 0.51,
    statut: 'À venir'
  }
];

/*ETAPE 1*/

class Match {
  constructor(id, jeu, competition, equipeA, equipeB, probabiliteA, statut) {
    this.id = id;
    this.jeu = jeu;
    this.competition = competition;
    this.equipeA = equipeA;
    this.equipeB = equipeB;
    this.probabiliteA = probabiliteA;
    this.statut = statut;
  }

  // Retourne l'équipe avec la + haute proba
  getFavori() {
    if (this.probabiliteA > 0.5) {
      return this.equipeA;  // Si > 50%, équipe A est favorite
    } else {
      return this.equipeB;
    }
  }
}

/*ETAPE 2*/

class Plateforme {
  constructor(nom) {
    this.nom = nom;
    this.matchs = [];
  }

    chargerMatchs(matchsACharger) {
    matchsACharger.forEach(matchData => {
        const nouveauMatch = new Match(
        matchData.id,
        matchData.jeu,
        matchData.competition,
        matchData.equipeA,
        matchData.equipeB,
        matchData.probabiliteA,
        matchData.statut
        );
        // Ajoute au tableau matchs
        this.matchs.push(nouveauMatch);
    });
}

afficherCalendrier() {
console.log(`\nCalendrier de ${this.nom}:`);
this.matchs.forEach(match => {
    console.log(`[${match.competition}] ${match.equipeA} vs. ${match.equipeB} - ${match.jeu}`);
});
}

/* ETAPE 3 */

getMatchsParJeu(jeu) {
// filter() crée un tableau avec condition "jeu"
return this.matchs.filter(
    match => match.jeu === jeu
);
}

getMatchsRisques() {
// proba : 0.45 et 0.55 "serrés"
return this.matchs.filter(match => 
    match.probabiliteA >= 0.45 && match.probabiliteA <= 0.55
);
}

getMatchById(id) {
// find() retourne le 1er ID
return this.matchs.find(match => match.id === id);
} 


/* ALLER PLUIS LOIN */

simulerResultat(idMatch) {
  const match = this.getMatchById(idMatch);

  if (match.statut === 'Terminé') {
    console.log(`!! ${match.equipeA} vs ${match.equipeB} : Match terminé !!`);
    return;
  }

  // Nombre aléatoire entre 0 et 1
  const resultat = Math.random();

  let vainqueur;
  if (resultat < match.probabiliteA) {
    vainqueur = match.equipeA;
  } else {
    vainqueur = match.equipeB; // Sinon B
  }

  // Afficher résultat
  match.statut = 'Terminé';
  match.resultat = vainqueur;
  console.log(`- ${match.equipeA} vs ${match.equipeB} :`);
  console.log(`> ${vainqueur} gagne !`);
}

}

/* ETAPE 4 -- TEST */

console.log("ESPORT VISION");
// Instance de la plateforme
const esportVision = new Plateforme("EsportVision");
// Matchs de calendrierMatchs
esportVision.chargerMatchs(calendrierMatchs);
// Affiche calendrier
esportVision.afficherCalendrier();

console.log("\n______");

// getMatchsParJeu League of Legends
console.log("\nLeague of Legends:");
const matchsLoL = esportVision.getMatchsParJeu("League of Legends");
matchsLoL.forEach(match => {
  console.log(`- ${match.equipeA} vs ${match.equipeB} (+ ${match.getFavori()})`);
});

// ..Valorant
console.log("\nValorant:");
const matchsValorant = esportVision.getMatchsParJeu("Valorant");
matchsValorant.forEach(match => {
  console.log(`- ${match.equipeA} vs ${match.equipeB} (+ ${match.getFavori()})`);
});

// ..GTA 6
console.log("\nGTA:");
const matchsGTA = esportVision.getMatchsParJeu("GTA 6");
matchsGTA.forEach(match => {
  console.log(`- ${match.equipeA} vs ${match.equipeB} (+ ${match.getFavori()})`);
});

// Proba 0.45 0.55
console.log("\nMatchs serrées:");
const matchsRisques = esportVision.getMatchsRisques();
if (matchsRisques.length > 0) {
  matchsRisques.forEach(match => {
    const pourcentage = Math.round(match.probabiliteA * 100);
    console.log(`- ${match.equipeA} vs ${match.equipeB} (${pourcentage}% - ${match.equipeA})`);
  });
} else {
  console.log("Aucun match serré");
}

// getMatchById
console.log("\nRecherche 'GTA_Ali_Bob':");
const matchRecherche = esportVision.getMatchById("GTA_Ali_Bob");
if (matchRecherche) {
  console.log(`${matchRecherche.equipeA} vs ${matchRecherche.equipeB}, ${matchRecherche.jeu}`);
  console.log(`${matchRecherche.competition}`);
  console.log(`Favori: ${matchRecherche.getFavori()}`);
} else {
  console.log("Introuvable !");
}

console.log("\n______");

// Simulation
console.log("\nSimulation de matchs:");
esportVision.simulerResultat("LFL_KC_SLY");
esportVision.simulerResultat("VCT_VIT_M8");
esportVision.simulerResultat("GTA_A_B");
esportVision.simulerResultat("GTA_Ali_Bob");