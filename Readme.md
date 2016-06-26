# CV - Tim Sermier
## Table des matières

 - [Installation de node.js](#Installation-de-node.js)
 - [Installation de Yeoman](#Installation-de-Yeoman)
 - [Création d'un nouveau projet](#Création-d'un-nouveau-projet)
 - [Git](#Git)
	 - [Initialisation de git](#Initialisation-de-git)
	 - [Gestion des modifications avec git](#Gestion-des-modifications-avec-git)
 - [Les dépendances](#Les-dépendances)
	 - [Installation de dépendance](#Installation-de-dépendance)
	 - [jquery-smooth-scroll](#jquery-smooth-scroll)
	 - [bootswatch](#bootswatch)
	 - [chart.js](#chart.js)
 - [Bootstrap](#Bootstrap)
	 - [Système de grille](#Système-de-grille)
	 - [Modal](#Modal)
	 - [progressBar](#progressBar)
 - [IDE](#IDE)
 - [JavaScript](#JavaScript)

<a id="Installation-de-node.js"></a>
## Installation de node.js 

Télécharger et installer node.js (https://nodejs.org/en/).

Cela permet de récupérer npm pour les étapes suivantes

<a id="Installation-de-Yeoman"></a>
## Installation de Yeoman

Dans le shell node (comme cela on est sûr que le path npm fonctionne) taper la commande suivante :

    npm install -g yo bower gulp generator-webapp
    
Cela va permettre d'installer les paquets suivants :

    Yo : Permet de générer des templates de projets modifiables par la suite
    Bower : Outil qui va nous permettre de simplifier fortement la gestion des dépendances
    Gulp :  Outil qui va nous permettre d'automatiser des tâches telles que le déploiement du serveur local, 
            le rafraîchissement automatique du navigateur lors de la modification de fichiers, etc...
    La commande generator-webapp permet simplement d'installer yo en mode générateur d'applications webs

<a id="Création-d'un-nouveau-projet"></a>
## Création d'un nouveau projet
Tout d'abord, créer un dossier "Github" dans votre répertoire "Documents"

    Lancer l'invite de commande
    Taper la commande mkdir NomDuProjet
    Taper la commande cd NomDuProjet
    Taper la commande yo webapp (lance la création du projet)
    À la première question, laisser au minimum cochées les cases Bootrstrap et Modernizr
    Laisser les choix suivants par défaut
    Lancer le serveur avec la commande gulp serve


<a id="Git"></a>
## Git

<a id="Initialisation-de-git"></a>
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

<a id="Gestion-des-modifications-avec-git"></a>
### Gestion des modifications avec git
Avant tout, insérer les éléments dont on ne veut pas gérer la version dans le fichier .gitignore

Ensuite lors de modifications sur les fichiers du projet, taper les commandes suivantes pour commiter le tout :

	- git add . --> Permet de mettre les fichiers en mode "staged"
	- git commit -m '<message>' --> Permet de valider les modifications des fichiers, de les "commiter"...
**Attention les messages du commit doivent être explicites et exprimer clairement les modifications qui ont été apportées**

Pour envoyer le tout sur le dossier distant de github.com, voici la manière la plus simple de le faire (**Attention à bien être sur la branche master !!!**) :

	- Sur le client lourd github, appuyer sur le bouton "sync" en haut à droite. 

Pour publier les modifications et les rendre visibles en ligne, voici la suite de commande à taper dans l'invite de commande :

	- git build --> Permet de "compiler" la branche master (racine du projet) dans le dossier "dist" (branche gh-pages)
	- git deploy --> Permet d'envoyer le contenu du dossier "dist" dans la branche "gh-pages" sur github.com

Il existe également d'autres commandes git dont voici une courte liste descriptive :
	
	- git status --> Permet de voir le statut courant du projet
	- git log --> Sorte de journal permettant de voir tous les commits effectués sur le projet
	- git pull --> Permet de récupérer les modifications effectuées sur le repo en ligne (par d'autres personnes par exemple)
	- git diff HEAD --> Permet de voir les différences depuis le dernier commit
	- git diff --staged --> Permet de voir les changements qui ont été "stagées" (grâce à git add)
	- git reset --> Permet d'annuler les éléments qui ont été "stagées" (git add)
	- git checkout --> Permet d'annuler le dernier commit
	- git checkout branch --> Permet de changer de branche
	- git rm --> Permet de supprimer des éléments

<a id="Les-dépendances"></a>
## Les dépendances
Voici la liste des dépendances utilisées dans ce projet :

	- jquery-smooth-scroll
	- bootswatch
	- chart.js

<a id="Installation-de-dépendance"></a>
### Installation de dépendance

	- Tout d'abord trouver le paquet désiré
		- Une liste des paquets est disponible sur https://bower.io/search/
	- Dans l'invite de commande, taper la commande suivante :
		- bower install nom_du_paquet --save
		- Si le paquet n'est pas disponible avec bootswatch, alors faire une recherche du paquet avec npm
			- npm install nom_du_paquet --save
		- Pour être sûr que la dépendance s'installe bien, taper la commande :
			- gulp wiredep

<a id="jquery-smooth-scroll"></a>
### jquery-smooth-scroll
L'installation du smooth scroll se fait par la commande suivante :
	
	bower install jquery-smooth-scroll --save

Pour faire fonctionner le smooth scroll, rien de plus simple :
		
	Dans le fichier main.js, insérer les lignes suivantes :
	$(document).ready(function(){
	'use strict';
	$('a').smoothScroll();
	});
La première ligne permet simplement d'exécuter le code une fois que la page a été chargée
	La ligne $('a').smoothScroll(); permet de mettre en oeuvre le smooth scroll.
	Pour ralentir la vitesse, il suffit simplement d'insérer un chiffre entre les parenthèses de smoothScroll(); (plus le chiffre est grand plus la vitesse est faible).

Voici la page de documentation complète : https://github.com/kswedberg/jquery-smooth-scroll

<a id="bootswatch"></a>
### bootswatch
L'installation de bootswatch se fait par la commande suivante :

	bower install bootswatch --save

Pour faire fonctionner bootswatch avec sass utiliser la documentation suivante : 
	http://adam.merrifield.ca/2016/03/29/swiips-gulp-angular-and-bootswatch-sass-themes/

En gros, il suffit d'ajouter ces lignes avant le code bower :
	
	@import '../../bower_components/bootswatch/sandstone/variables';
	$icon-font-path: "../../bower_components/bootstrap-sass/assets/fonts/bootstrap/";
	Attention à bien supprimer la ligne $navbar-inverse-link-color...
	
Puis cette ligne après le code bower
	
	@import '../../bower_components/bootswatch/sandstone/bootswatch';
Remplacer sandstone par le theme souhaité (une liste des thèmes est disponbile ici : https://bootswatch.com/)

<a id="chart.js"></a>
### chart.js
L'installation de chart.js se fait par la commande suivante :

	bower install Chart.js --save

Une documentation très complète est disponible ici : http://www.chartjs.org/docs/

Voici le code utilisé pour le chart doughnut de ce projet :
	
	var myChart = new Chart(newElement, {
                type: 'doughnut',
                data: {
                    labels: [
                        texte, ''
                    ],
                    datasets: [
                        {
                            data: [progressValue, 100 - progressValue],
                            backgroundColor: [
                                backGroundColor,
                                '#FFFFFF'
                            ],
                            hoverBackgroundColor: [
                                borderColor
                                ,'#FFFFFF'
                            ],
                            borderColor: [
                                borderColor, '#FFFFFF'
                            ],
                            hoverBorderColor:[
                                backGroundColor,'#FFFFFF'
                            ]
                            
                        }]
                },
                options: {
                    maintainAspectRatio: false,
                    responsive: true,
                    tooltips: {
                        enabled: false
                    }
                }
            }

Ce code est à insérer dans le bloc $(document).ready(function (){...} de main.js

<a id="Bootstrap"></a>
## Bootstrap
Les documentations utilisées dans le cadre de se projet se trouve ici : 

	http://getbootstrap.com/getting-started/
	http://v4-alpha.getbootstrap.com/
	
<a id="Système-de-grille"></a>
### Système de grille
Le système de grille à 12 colonnes a été utilisé pour gérer l'affichage selon la taille de l'écran.

Ainsi les adaptations suivantes ont été faites :

	- Le menu de navigation est remplacé par un bouton sur petits écrans.
	- La photo de profil vient en dessous du texte au lieu de rester à droite sur petits écrans
	- Les graphes viennent l'un en dessous de l'autre sur petits écrans

Ces adaptations en fonction de la taille de l'écran se fait principalement grâce à la classe col-tailleEcran-colonne
	
	col-xs-12 --> Le bloc prend 12 colonnes même sur petits écrans
	col-md-6 col-xs-12 --> Le bloc prend 6 colonne sur écran de taille moyenne et 12 sur petit écran

<a id="Modal"></a>
### Modal
Lors de click sur les graphes, un modal affichant le détail des compétences s'affiche.

Pour cela, il faut ajouter ces attributs sur la balise canvas :

	data-toggle="modal" data-target="#myModalId"

Puis créer les modals de cette manière

	<div class="modal fade" id="myModalId" tabindex="-1" role="dialog" aria-labelledby="myModalLabelId" aria-hidden="true">
	    <div class="modal-dialog" role="document">
	        <div class="modal-content col-xs-12">
	            <div class="modal-header">
	                <h4 class="modal-title" id="myModalLabelId">Title</h4>
	            </div>
	            <div class="modal-body">
	                content
	            </div>
	        </div>
	    </div>
	</div>
      
<a id="progressBar"></a>                  
### progressBar
Si le javascript ne fonctionne pas, l'élément de base est une progressBar bootstrap.
	Voici comment cette dernière s'implémente :
	
	<div class="progress">
	   <div id="programmation" class="progress-bar" role="progressbar" aria-valuenow="80"
	        aria-valuemin="0" aria-valuemax="100" style="width:80%" data-toggle="modal" data-target="#myModalprogrammation">Programmation      
	   </div>
	</div>
La valeur de la progressBar est simplement définie dans l'attribut aria-valuenow
	Le label qui s'affichera à l'écran est le texte entre les balises div progress-bar
	 
<a id="IDE"></a>       
## IDE
Yo rafraîchissant directement la page, le choix de l'IDE s'est basé sur des critères comme l'auto-complétion, l'indentation automatique et la détection automatique des erreurs.

Ainsi, NetBeans s'est révélé être parfait pour ce rôle-ci.

Il a également utilisé l'outil de développement Chrome qui, une fois mappé au dossier local, permet de faire des modifications directement dans le navigateur Web.

<a id="JavaScript"></a>       
##JavaScript
Comme vu précédemment, JavaScript a principalement été utilisé pour générer les graphes.

Le but était de générer les graphes selon les progressBar déjà présentes dans le fichier html de base (en récupérant les valeurs et le label).

Pour cela, il fallait utiliser la fonction jQuery "each" qui permettant de se positionner sur chaque div avec la classe "progress" :
	
	$('div.progress').each(function (i, obj) {...}
Une fois dans la boucle, il fallait récupérer la valeur (définie par l'attribut aria-valuenow) et le text de la progressBar :
	
	var progressValue = parseInt($(obj).find('div').attr('aria-valuenow'));
    var texte = $(obj).find('div').text();
Il nous faut aussi ici récupérer l'id de la progressBar mais ceci uniquement afin d'ouvrir le modal correspondant :
	
	var idEle = $(obj).find('div').attr('id');
Nous déclarons ensuite l'élément canvas qui va remplacer la progressBar :
	
	var newElement = $('<canvas data-toggle="modal" data-target="#myModal' + idEle + '" height="300" width="700px"></canvas>');
	Les attributs permettront ensuite d'ouvrir le modal correspondant
Dans le cadre de ce projet, il a été décidé de gérer les couleurs dynamiquement en fonction de la couleur des modals qui vont s'ouvrir. 
	Pour cela, des variables backGroundColor et borderColor vont être remplies selon l'id qui a été récupéré précédemment :
	
	switch (idEle) {
                case 'programmation':
                    backGroundColor = 'rgba(0, 113, 162, 0.4)';
                    borderColor = 'rgba(0, 113, 162, 1)';
                    break;
                case 'reseau':
                    backGroundColor = 'rgba(0, 150, 0, 0.4)';
                    borderColor = 'rgba(0, 150, 0, 1)';
                    break;
                case 'bdd':
                    backGroundColor = 'rgba(215, 44, 44, 0.4)';
                    borderColor = 'rgba(215, 44, 44, 1)';
                    break;
                case 'virtualisation':
                    backGroundColor = 'rgba(172, 160, 0, 0.4)';
                    borderColor = 'rgba(172, 160, 0, 1)';
                    break;
                case 'web':
                    backGroundColor = 'rgba(172, 160, 236, 0.4)';
                    borderColor = 'rgba(172, 160, 236, 1)';
                    break;
                case 'autres':
                    backGroundColor = 'rgba(130, 149, 38, 0.4)';
                    borderColor = 'rgba(130, 149, 38, 1)';
                    break;
                default:
                    backGroundColor = 'white';
            }
Une fois toutes les valeurs de la progressBar récupérées, il faut maintenant remplacer cette dernière avec l'élément canvas déclaré précédemment :
	
	$(obj).replaceWith(newElement);
Puis on décide d'entourer cet élément canvas avec une div qui nous permettra de gérer l'affichage avec bootstrap :
	
	$(newElement).wrap('<div class=\'col-md-4 col-xs-12 can\'></div>');
Finalement, on construit le graphe en lui donnant la valeur et le label de la progressBar puis le nouvel élément créé :
	
	var myChart = new Chart(newElement, {
                type: 'doughnut',
                data: {
                    labels: [
                        texte, ''
                    ],
                    datasets: [
                        {
                            data: [progressValue, 100 - progressValue],
                            backgroundColor: [
                                backGroundColor,
                                '#FFFFFF'
                            ],
                            hoverBackgroundColor: [
                                borderColor
                                ,'#FFFFFF'
                            ],
                            borderColor: [
                                borderColor, '#FFFFFF'
                            ],
                            hoverBorderColor:[
                                backGroundColor,'#FFFFFF'
                            ]
                            
                        }]
                },
                options: {
                    maintainAspectRatio: false,
                    responsive: true,
                    tooltips: {
                        enabled: false
                    }
                }
            });
