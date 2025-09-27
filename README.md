# SPORTSEE

## Description
Développement des pages "profil de l'utilisateur", en intégrant des éléments graphiques avancés (bibliothèque Recharts) pour présenter les données d'analyse sportive.  
Connexion au backend et récupération des données via une API.  

> A noter : l'application est optimisée pour une résolution 1024x780px.   
Pas de responsive pour le moment.

## Prérequis
Avant de commnencer, veuillez vérifier que vous disposez les éléments suivants :  
- Node.js
- npm

## Installation
Suivez les étapes suivantes pour installer le projet localement :   
1. Clôner le dépôt du projet\
`git clone`<br/>

2. Aller dans le dossier où le projet est cloné\
`cd nom-de-votre-dossier`

3. Configuer le back-end<br/>
Merci de vous rendre sur le ReadMe du back-end ou [ICI](https://github.com/CaroleGrllt/ROLLAND_GRELLETY_Carole_12_sportsee_062025/tree/main/back-end)

4. Installer les dépendances du projet dans le dossier "frontend"\
`npm install`

## Lancement de l'application
Pour lancer l'application en mode développement, exécutez la commande suivante : 
`npm run dev`

> A noter : l'application est déployée. Le front-end est sur GitHub Pages. Le back-end est disponible à cette adresse :<br/>`https://rolland-grellety-carole-12-sportsee.onrender.com` <br/> Les utilisateurs ont les id 12 et 18.

Endpoints SportSee pour affichage des graphiques Recharts : <br/>
```
.../user/12
.../user/12/performance
.../user/12/activity
.../user/12/average-sessions
```

### WARNING : 
Le back-end est géré par render.com, en version gratuite. Le service se met en veille après 15 mins d'inactivité. Chaque redémarrage du service demande quelques secondes (et jusqu'à 1 min). Si les données ne s'affichent pas immédiatement, patientez quelques secondes puis rafraîchissez la page.

## Stack
- **React** : Framework JavaScript pour la création d'interfaces utilisateur.
- **Vite** : Outil de build rapide pour les applications React.
- **Recharts** : Bibliothèque de graphiques basée sur React.
- **SASS** : Préprocesseur CSS pour une meilleure gestion des styles.