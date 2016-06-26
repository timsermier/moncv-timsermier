# (CV - Tim Sermier)
## Installation de node.js

Télécharger et installer node.js (https://nodejs.org/en/).

Cela permet de récupérer npm pour les étapes suivantes

## Installation de Yeoman

Dans le shell node (comme cela on est sûr que le path npm fonctionne) taper la commande suivante :

    npm install -g yo bower gulp generator-webapp
    
Cela va permettre d'installer les paquets suivants :

    Yo : Permet de générer des templates de projets modifiables par la suite
    Bower : Outil qui va nous permettre de simplifier fortement la gestion des dépendances
    Gulp :  Outil qui va nous permettre d'automatiser des tâches telles que le déploiement du serveur local, 
            le rafraîchissement automatique du navigateur lors de la modification de fichiers, etc...
    La commande generator-webapp permet simplement d'installer yo en mode générateur d'applications webs

## Création d'un nouveau projet
Tout d'abord, créer un dossier "Github" dans votre répertoire "Documents"

    Lancer l'invite de commande
    Taper la commande mkdir NomDuProjet
    Taper la commande cd NomDuProjet
    Taper la commande yo webapp (lance la création du projet)
    À la première question, laisser au minimum cochées les cases Bootrstrap et Modernizr
    Laisser les choix suivants par défaut
    Lancer le serveur avec la commande gulp serve


## Git
### Initialisation de git
L'installation de git va permettre de versionner les fichiers de notre projet.

Pour créer un repo git :
	
	Lancer l'invite de commande
	Se rendre à la racine du projet
	Taper la commande git init

Un dossier .git a été créé à la racine du projet si la manipulation a fonctionné

Puis, afin de pouvoir publier le contenu de notre dossier sur notre repo github.com, il faut créer un dossier "dist".
	Pour réaliser cela, il suffit de taper les commandes suivantes dans l'invite de commande :

	À la racine du projet : 
	- gulp build --> Permet de créer le dossier dist et y insère le contenu nécessaire à l'exécution du site
	
	Dans le dossier dist : 
	- git init
	- git checkout -b gh-pages --> Permet de créer la branche gh-pages et de travailler directement dessus (la branche gh-pages devient la branche active)
	- git add . --> Permet d'ajouter les fichiers à la branche gh-pages
	- git commit -m --> Permet de commiter les fichiers ajouter
	- git remote add origin git@github.com:<chemin du repo> (git@github.com:heg-web/moncv_timsermier.git) --> Permet d'ajouter le repo distant stocké sur github.com
	- git push --set-upstream origin gh-pages --> Permet de pousser les éléments sur la branche gh-pages en ligne

Ensuite, afin d'automatiser cette tâche pour les prochaines fois, taper la commande suivante :

	- npm install --save-dev gulp-deploy-git --> Permet d'installer le paquet npm gulp deploy

Puis, à la racine du projet, ajouter les lignes suivantes au fichier gulpfile.js :

	var deploy = require('gulp-deploy-git');
	gulp.task('deploy', function() {
	  return gulp.src('**/*',  { read: false, cwd: 'dist'  })
	    .pipe(deploy({
	      repository: 'git@github.com:heg-web/moncv-timsermier.git',
	      remoteBranch:   'gh-pages'
	    }))
	});

Il suffit ensuite de lancer la commande "gulp deploy" pour envoyer le contenu du dossier dist sur la branche gh-pages en ligne.

À partir de là, les modifications seront visibles sur le site en ligne

### Gestion des modifications avec git
Avant tout, insérer les éléments dont on ne veut pas gérer la version dans le fichier .gitignore



