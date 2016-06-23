1)  Il faut tout d'abord télécharger et installer node.js (https://nodejs.org/en/) Cela permet de récupérer npm pour les étapes suivantes

2)  Dans le shell node (comme cela on est sûr que le path npm fonctionne) taper la commande suivante :
      npm install -g yo bower gulp generator-webapp
    Cela va permettre d'installer les paquets suivants :
      Yo : Permet de générer des templates de projets modifiables par la suite
      Bower : Outil qui va nous permettre de simplifier fortement la gestion des dépendances
      Gulp : Outil qui va nous permettre d'automatiser des tâches telles que le déploiement du serveur local, 
      le rafraîchissement automatique du navigateur lors de la modification de fichiers, etc...
    La commande generator-webapp permet simplement d'installer yo en mode générateur d'applications webs
    
3)  Création d'un nouveau projet
    - Tout d'abord, créer un dossier "Github" dans votre répertoire "Documents"
    - Lancer l'invite de commande
    - Se rendre dans le dossier précédemment créé
    - Taper la commande mkdir NomDuProjet
    - Taper la commande cd NomDuProjet
    - Taper la commande yo webapp (lance la création du projet)
    - À la première question, laisser au minimum cochées les cases Bootrstrap et Modernizr
    - Laisser les choix suivants par défaut
    - Lancer le serveur avec la commande gulp serve
