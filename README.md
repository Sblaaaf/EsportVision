# **Exercice 1 : Back-end d'une Plateforme d'Analyse E-sportive**

## **Pitch du projet

Dans cet exercice, vous allez développer la logique
principale (le back-end) d'une plateforme d'analyse
e-sportive nommée "Esport Vision". Vous apprendrez à
structurer des données avec des classes et à les manipuler
avec les méthodes de tableau modernes pour gérer un
calendrier de matchs.

## **Contexte / Scénario**

Vous rejoignez la startup "Esport Vision" en tant que
développeur. Votre première mission est de construire le
prototype du système qui gérera et analysera les matchs à
venir des ligues françaises de **League of Legends (LFL)**
et **Valorant (VCT)** pour l'année 2025. La fiabilité des
données et la pertinence des analyses sont cruciales pour le
succès de la plateforme.

-----

## **Données de Départ**

Copiez-collez le tableau suivant au début de votre fichier JavaScript. Il représente le calendrier des prochains matchs que votre système devra gérer.
<!-- vous pouvez modifier comme bon vous semble les données, ce ne sont que des données par défaut, des données de bases. -->

```javascript
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
    probabiliteA: 0.48, // 48% de chance pour M8, donc BDS est favori
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
  }
];
```

-----

## **5. Les Étapes à Réaliser**

### **Étape 1 : Modéliser les données avec la classe `Match`**

L'objectif est de créer une classe pour nos objets `match` afin de garantir une structure de données cohérente.

1. **Créez une classe `Match`**.
2. Son **`constructor`** doit accepter et initialiser les propriétés suivantes : `id`, `jeu`, `competition`, `equipeA`, `equipeB`, `probabiliteA`, et `statut`.
3. **Ajoutez une méthode `getFavori()`** à cette classe. Cette méthode ne prend aucun paramètre et doit retourner le nom de l'équipe ayant la plus haute probabilité de victoire. Si `probabiliteA` est supérieure à 0.5, elle retourne `equipeA`, sinon elle retourne `equipeB`.

### **Étape 2 : Créer le gestionnaire avec la classe `Plateforme`**

Cette classe sera le cœur de notre système, elle gérera l'ensemble des matchs.

1. **Créez une classe `Plateforme`**.
2. Son **`constructor`** doit accepter un `nom` et initialiser une propriété `matchs` avec un tableau vide.
3. **Implémentez la méthode `chargerMatchs(matchsACcharger)`**. Cette méthode prend en paramètre un tableau d'objets (comme `calendrierMatchs`), et pour chaque objet, elle doit créer une **nouvelle instance de la classe `Match`** et l'ajouter au tableau `this.matchs`.
4. **Implémentez la méthode `afficherCalendrier()`**. En utilisant une boucle (`forEach`), cette méthode doit afficher dans la console le résumé de chaque match sous un format lisible. Par exemple :
    `[LFL] Karmine Corp vs. Solary - Jeu: League of Legends`

### **Étape 3 : Implémenter les fonctionnalités d'analyse**

Maintenant, ajoutez des méthodes à la classe `Plateforme` pour permettre l'analyse des données.

1. **`getMatchsParJeu(jeu)`** :

    * Utilisez la méthode **`.filter()`** sur le tableau `this.matchs`.
    * Cette méthode doit retourner un **nouveau tableau** contenant uniquement les matchs correspondant au jeu passé en paramètre (ex: "Valorant").

2. **`getMatchsRisques()`** :

      * Utilisez la méthode **`.filter()`**.
      * Cette méthode doit retourner les matchs considérés comme "serrés", c'est-à-dire ceux où la probabilité de victoire du favori est faible. Retournez les matchs où `probabiliteA` est comprise entre `0.45` et `0.55`.

3. **`getMatchById(id)`** :

      * Utilisez la méthode **`.find()`**.
      * Cette méthode doit retrouver et retourner l'instance du match correspondant à l'ID fourni.

### **Étape 4 : Mettre en pratique**

À la fin de votre fichier, écrivez le script qui utilisera vos classes pour faire fonctionner le système.

1. Créez une instance de votre `Plateforme` nommée `esportVision`.
2. Utilisez `chargerMatchs()` pour y ajouter les données de `calendrierMatchs`.
3. Appelez `afficherCalendrier()` pour vérifier que tout est bien chargé.
4. Testez chacune de vos méthodes d'analyse (`getMatchsParJeu`, `getMatchsRisques`, `getMatchById`) et affichez leurs résultats dans la console avec des `console.log` clairs pour bien voir ce que chaque méthode retourne.
<!-- je me fiche de la façon de faire globale, l'idée, est que vous me prouviez que vous avez bien compris tout ça ! -->

-----

### **6. Pour aller plus loin (Bonus)**

Si vous avez terminé et que vous souhaitez aller plus loin, essayez d'implémenter ces fonctionnalités :
<!-- cette partie constituera un bonus et vous offrira des points bonus ;) -->

* **Ajoutez une méthode `simulerResultat(idMatch)`** à la `Plateforme`. Elle trouve le match, utilise `Math.random()` et les probabilités pour désigner un vainqueur, puis change le statut du match en "Terminé" en y ajoutant une propriété `resultat` avec le nom du gagnant.
* **Ajoutez une méthode `getStatsEquipe(nomEquipe)`**. Elle doit retourner un objet contenant le nombre de matchs joués par l'équipe et son taux de victoire (basé sur les matchs simulés).

-----

### **7. ATTENTION ! TOUTE TRICHE SERA SÉVÉREMENT PUNIE !**

Les personnes rendant le même code se partageront simplement la note. Un 10/20 deviendra un 5/20 pour les deux, ou un 3/20 pour les trois personnes ayant essayé de tricher !
Ça n'a aucun intérêt, ni pour vous, ni pour moi !