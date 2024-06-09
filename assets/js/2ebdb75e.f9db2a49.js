"use strict";(self.webpackChunk_bimo_docs_website=self.webpackChunk_bimo_docs_website||[]).push([[2497],{7573:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var r=s(4848),a=s(8453),i=s(6888);const t={slug:"extraire-automatiquement-des-images-de-plans-de-voies-\xe0-partir-de-la-cartographie-hastus",title:"Extraire automatiquement des images de plans de voies \xe0 partir de la cartographie Hastus",lead:"En utilisant des services Bimo et le projet Open Source Mapshaper, on arrive en moins d'une centaine de lignes de code \xe0 \xe9crire un script assez puissant!",date:"2022-11-27",authors:["gael"],tags:["hastus","cartographie","geo","mapshaper","lieux"],hide_blog_post_date:!0},o=void 0,l={permalink:"/examples/extraire-automatiquement-des-images-de-plans-de-voies-\xe0-partir-de-la-cartographie-hastus",source:"@site/examples/extraire-automatiquement-des-images-de-plans-de-voies-\xe0-partir-de-la-cartographie-hastus/index.mdx",title:"Extraire automatiquement des images de plans de voies \xe0 partir de la cartographie Hastus",description:"Origine du besoin",date:"2022-11-27T00:00:00.000Z",tags:[{inline:!0,label:"hastus",permalink:"/examples/tags/hastus"},{inline:!0,label:"cartographie",permalink:"/examples/tags/cartographie"},{inline:!0,label:"geo",permalink:"/examples/tags/geo"},{inline:!0,label:"mapshaper",permalink:"/examples/tags/mapshaper"},{inline:!0,label:"lieux",permalink:"/examples/tags/lieux"}],hasTruncateMarker:!1,authors:[{name:"Ga\xebl Ham\xe9on",title:"Cr\xe9ateur de Bimo",url:"https://github.com/gaelhameon",imageURL:"https://github.com/gaelhameon.png",key:"gael"}],frontMatter:{slug:"extraire-automatiquement-des-images-de-plans-de-voies-\xe0-partir-de-la-cartographie-hastus",title:"Extraire automatiquement des images de plans de voies \xe0 partir de la cartographie Hastus",lead:"En utilisant des services Bimo et le projet Open Source Mapshaper, on arrive en moins d'une centaine de lignes de code \xe0 \xe9crire un script assez puissant!",date:"2022-11-27",authors:["gael"],tags:["hastus","cartographie","geo","mapshaper","lieux"],hide_blog_post_date:!0},unlisted:!1,prevItem:{title:"Cr\xe9er un nouveau service Bimo",permalink:"/examples/creation-du-service-get-bbox-for-place"}},u={authorsImageUrls:[void 0]},c=[{value:"Origine du besoin",id:"origine-du-besoin",level:2},...i.RM,{value:"Exploration des solutions",id:"exploration-des-solutions",level:2},{value:"Processus global",id:"processus-global",level:3},{value:"Commandes mapshaper",id:"commandes-mapshaper",level:3},{value:"Automatisation",id:"automatisation",level:2},{value:"Cr\xe9ation du service <code>getBboxForPlace</code>",id:"cr\xe9ation-du-service-getbboxforplace",level:3},{value:"Cr\xe9ation du script <code>generate-station-svg</code>",id:"cr\xe9ation-du-script-generate-station-svg",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"origine-du-besoin",children:"Origine du besoin"}),"\n",(0,r.jsx)(i.Ay,{}),"\n",(0,r.jsxs)(n.p,{children:["Un ",(0,r.jsx)(n.a,{href:"./r%C3%A9concilier-les-lieux-de-deux-syst%C3%A8mes-diff%C3%A9rents-avec-find-best-match-for-target-among-candidates/",children:"autre article"})," d\xe9crira \xe9ventuellement comment des services Bimo ont \xe9t\xe9 utilis\xe9s pour initialiser ce travail, mais cela restera n\xe9anmoins toujours une initialisation : dans certains cas, on n'arrive pas \xe0 faire le rapprochement entre les voies automatiquement, et il faut demander \xe0 un humain d'intervenir."]}),"\n",(0,r.jsx)(n.p,{children:"Afin de faciliter cette intervention, on souhaite mettre \xe0 disposition des humains en question une IHM qui affichera, pour une gare donn\xe9e:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"la liste des voies disponibles dans le syst\xe8me SNCF maison"}),"\n",(0,r.jsx)(n.li,{children:"la liste des voies disponibles dans Hastus"}),"\n",(0,r.jsx)(n.li,{children:"les \xe9quivalences trouv\xe9es automatiquement par les algos"}),"\n",(0,r.jsx)(n.li,{children:"une image du plan de voie de la gare dans Hastus, et de la position des voies Hastus sur ce plan de voie"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"En effet, il existe souvent plusieurs \"alias\" pour une m\xeame voie, et le nom de voie utilis\xe9 dans Hastus n'est pas toujours celui avec lequel les utilisateurs sont le plus familier. En leur montrant \xe0 quelle voie correspond un nom sur le plan de voie, on facilite grandement le travail. On aurait pu aussi se contenter de dire aux utilisateurs d'ouvrir la carte Hastus, et de trouver dans la carte la gare concern\xe9e \xe0 chaque fois. Mais cela aurait ajout\xe9 des manipulations et du temps \xe0 une t\xe2che d\xe9j\xe0 pas tr\xe8s amusante ... et mon r\xf4le sur ce projet est pr\xe9cis\xe9ment de m'amuser \xe0 automatiser et acc\xe9l\xe9rer des manipulations pas tr\xe8s amusantes pour des humains."}),"\n",(0,r.jsx)(n.h2,{id:"exploration-des-solutions",children:"Exploration des solutions"}),"\n",(0,r.jsx)(n.h3,{id:"processus-global",children:"Processus global"}),"\n",(0,r.jsx)(n.p,{children:"Pour ne pas r\xe9inventer la roue, on consid\xe8re que l'IHM qui sera pr\xe9sent\xe9e aux utilisateurs sera un fichier Excel par r\xe9gion, contenant un onglet pour chaque gare de la r\xe9gion. Sur cet onglet, on voudrait afficher le plan de voie, les listes de voies, et pr\xe9voir un endroit o\xf9 les utilisateurs pourront confirmer/corriger la correspondance.\nCes fichiers pourront ensuite \xeatre relus automatiquement pour en extraire les correspondances valid\xe9es."}),"\n",(0,r.jsx)(n.p,{children:"On souhaite donc produire des images de plan de voie \xe0 partir de la carte Hastus, dans un format qui pourra \xeatre incorpor\xe9 dans un fichier Excel."}),"\n",(0,r.jsxs)(n.p,{children:["Les fonctionnalit\xe9s standard Hastus permettent d'extraire la carte en format Shapefile et on conna\xeet un tr\xe8s bon outil open source pour manipuler des fichiers Shapefile: ",(0,r.jsx)(n.a,{href:"https://mapshaper.org",children:"mapshaper"})]}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Note sur la s\xe9curit\xe9 des donn\xe9es"}),(0,r.jsx)(n.p,{children:"Pour ceux qui s'inqui\xe9teraient de l'utilisation d'outils internet grand public pour la manipulation de donn\xe9es potentiellement sensibles, sachez que mapshaper traite toutes les donn\xe9es c\xf4t\xe9 client - jamais nos donn\xe9es ne quittent notre poste. Et si cela ne suffisait pas, j'incorpore dans certaines distributions Bimo un \"fork\" de mapshaper qui pourrait vous rassurer encore plus: apr\xe8s avoir t\xe9l\xe9charg\xe9 Bimo, vous pouvez couper toute connexion internet, lancer Bimo et avoir une instance mapshaper qui tourne."})]}),"\n",(0,r.jsxs)(n.p,{children:["Une v\xe9rification rapide montre que mapshaper permet d'exporter une carte au format ",(0,r.jsx)(n.code,{children:"svg"})," et qu'Excel permet d'incorporer des images dans ce format."]}),"\n",(0,r.jsxs)(n.p,{children:["On va donc utiliser mapshaper pour produire des ",(0,r.jsx)(n.code,{children:"svg"})," de toutes les gares, puis on pourra incorporer ces svg dans les fichiers Excel."]}),"\n",(0,r.jsx)(n.h3,{id:"commandes-mapshaper",children:"Commandes mapshaper"}),"\n",(0,r.jsx)(n.p,{children:"Mapshaper peut \xeatre utilis\xe9 via l'IHM web, mais fourni aussi un CLI node, d\xe9j\xe0 incorpor\xe9 dans le backend Bimo. Mais en plus, l'IHM web permet d'utiliser une console pour tester des commandes."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Manipulations pour afficher la console dans l&#39;IHM Mapshaper",src:s(7884).A+"",width:"1916",height:"1025"})}),"\n",(0,r.jsx)(n.p,{children:"L'aide est disponible directement dans la console, ou sur le repo Github du projet."}),"\n",(0,r.jsxs)(n.p,{children:["On y trouve la commande ",(0,r.jsx)(n.a,{href:"https://github.com/mbloch/mapshaper/wiki/Command-Reference#-clip",children:"clip"}),", qui va permettre de produire un nouveau calque \xe0 partir d'un calque existant, en conservant uniquement une zone d\xe9limit\xe9e par des coordonn\xe9es ou par une g\xe9om\xe9trie pr\xe9sente sur un autre calque."]}),"\n",(0,r.jsx)(n.p,{children:'En testant un peu, on conclut que la commande ci-dessous semble donner satisfaction. Notez bien l\'utilisation du "+" qui indique de cr\xe9er un nouveau calque, et donc de pr\xe9server le calque cible tel qu\'il \xe9tait. L\'argument "name" donne le nom du nouveau calque.'}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"clip target=calque_initial bbox=xmin,ymin,xmax,ymax + name=clip_de_gare_1"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Exemple d&#39;application de la commande clip",src:s(3126).A+"",width:"1916",height:"1025"})}),"\n",(0,r.jsx)(n.p,{children:"\xc7a marche tr\xe8s bien pour extraire la g\xe9om\xe9trie des voies \xe0 partir du mapshaper extrait d'Hastus. Par contre les lieux-voies n'apparaissent pas ... En effet, dans Hastus, les lieux sont des objets \xe0 part, qui sont associ\xe9s \xe0 des segments de la carte, mais n'en font pas partie."}),"\n",(0,r.jsx)(n.p,{children:"On devra donc obtenir un autre fichier contenant les donn\xe9es sur les lieux, et l'importer en tant que calque suppl\xe9mentaire dans Mapshaper (ceci pourrait faire l'objet d'un autre article si \xe7a int\xe9resse quelqu'un !)."}),"\n",(0,r.jsx)(n.p,{children:"\xc0 ce stade, on arrive \xe0 produire une image dans laquelle on a les voies, ainsi que des points correspondant aux lieux. Mais il manque toujours les libell\xe9s."}),"\n",(0,r.jsxs)(n.p,{children:["On va donc utiliser la commande ",(0,r.jsx)(n.code,{children:"style"})," de mapshaper pour les faire appara\xeetre."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"style target=calque_des_lieux\" label-text='plcIdentifier' dx=5 dy=5 ..."})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"R\xe9sultat avec des libell\xe9s",src:s(2695).A+"",width:"1920",height:"1040"})}),"\n",(0,r.jsx)(n.p,{children:"\xc7a commence \xe0 ressembler pas mal \xe0 ce qu'on souhaite ! On va donc se lancer dans l'automatisation."}),"\n",(0,r.jsx)(n.h2,{id:"automatisation",children:"Automatisation"}),"\n",(0,r.jsx)(n.p,{children:'On veut g\xe9n\xe9rer une image pour chaque gare et on souhaite que cette image englobe toutes les voies de la gare. Dans Hastus, on peut consid\xe9rer qu\'une gare est \xe0 peu pr\xe8s \xe9quivalente \xe0 "lieu de r\xe9f\xe9rence", qui n\'existe pas sur la carte, mais qui est associ\xe9 \xe0 plusieurs "lieux-voies", qui ont eux des coordonn\xe9es.'}),"\n",(0,r.jsx)(n.p,{children:"On va donc:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["it\xe9rer sur tous les lieux de r\xe9f\xe9rence","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["pour chaque lieu de r\xe9f\xe9rence, r\xe9cup\xe9rer tout ses lieux-voies","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'\xe0 partir des coordonn\xe9es de tous les lieux-voies, calculer les coordonn\xe9es d\'une "Bounding Box"'}),"\n",(0,r.jsx)(n.li,{children:'prendre un clip des calques "voies" et "lieux-voies" avec cette bbox'}),"\n",(0,r.jsx)(n.li,{children:"g\xe9rer le style du clip pour ajouter les libell\xe9s"}),"\n",(0,r.jsx)(n.li,{children:"exporter le clip au format SVG, avec un nom de fichier correspondant \xe0 l'identifiant de la gare"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"On n'est pas sur un sujet r\xe9current ici, et on n'a pas vraiment besoin que ce travail puisse \xeatre fait facilement par n'importe quel utilisateur. On va donc tout simplement cr\xe9er un nouveau \"script\" dans Bimo, qui ne pourra \xeatre ex\xe9cut\xe9 que par les utilisateurs qui ont acc\xe8s au code source, et qui s'appuiera sur les services et utilitaires Bimo existants, notamment:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"const { getEntityFromOirDataAtPath } = require('@bimo-test/utils-get-test-data');"})," va permettre de charger facilement un jeu de lieux, puis d'it\xe9rer sur les lieux de r\xe9f\xe9rence, obtenir leurs lieux-voies et leurs coordonn\xe9es"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"const { api: mapshaper } = require('@bimo/mapshaper');"})," va permettre d'int\xe9grer des commandes mapshaper dans notre script"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"cr\xe9ation-du-service-getbboxforplace",children:["Cr\xe9ation du service ",(0,r.jsx)(n.code,{children:"getBboxForPlace"})]}),"\n",(0,r.jsx)(n.p,{children:"Le sujet du calcul d'une Bbox pour un lieu est nouveau. Il est assez simple \xe0 premi\xe8re vue, mais:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"c'est exactement le genre de code dans lequel il est tr\xe8s facile d'introduire des bugs par de mauvais copier/coller ou autre"}),"\n",(0,r.jsxs)(n.li,{children:["ce th\xe8me peut en r\xe9alit\xe9 \xeatre assez complexe:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"quelles marges ajouter autour des coordonn\xe9es des lieux voies ?"}),"\n",(0,r.jsx)(n.li,{children:"pourrions-nous (pour d'autres usages) vouloir passer directement un lieu voie, et avoir une bbox centr\xe9e autour de celui-ci ?"}),"\n",(0,r.jsx)(n.li,{children:"et si on voulait un jour une bbox d'une autre forme ? Un cercle, ou un rectangle orient\xe9 \xe0 45 degr\xe9s"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"On va donc cr\xe9er un nouveau service Bimo, avec des tests unitaires, pour ce sujet. Cela peut sembler \xeatre une perte de temps \xe0 court terme, mais devrait nous en faire gagner \xe0 long terme."}),"\n","\n",(0,r.jsxs)(n.h3,{id:"cr\xe9ation-du-script-generate-station-svg",children:["Cr\xe9ation du script ",(0,r.jsx)(n.code,{children:"generate-station-svg"})]}),"\n",(0,r.jsx)(n.p,{children:"On a maintenant tous les services de base dont on a besoin pour notre script, dont vous trouverez ci-dessous une version simplifi\xe9e et comment\xe9e du code final."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'title="script.js"',children:"const path = require('path');\nconst { fsBimo } = require('@bimo/core-utils-filesystem'); // Un package qui nous aide \xe0 interagir avec le syst\xe8me de fichier\nconst { api: mapshaper } = require('@bimo/mapshaper'); // La fork \"bimo\" de mapshaper\n\nconst {\n  getEntityFromOirDataAtPath,\n} = require('@bimo/test-utils-get-test-data'); // Une fonction pour simplifier le chargement de donn\xe9es oig/oir\nconst getBboxForPlace = require('@bimo/core-services-get-bbox-for-place'); // le script qu'on a \xe9crit \xe0 l'\xe9tape pr\xe9c\xe9dente!\nconst { featureCollection } = require('@turf/helpers'); // un package externe qui aide \xe0 manipuler des geojson\n\nconst createGeojsonFeatureFromPlace = require('@bimo/core-services-create-geojson-feature-from-place');\n// un package interne qui aide \xe0 cr\xe9er des geojson \xe0 partir de lieux\n\nconst { PlacesCollection } = require('@bimo/core-entities');\n// La classe qui d\xe9finit un jeu de lieux\n\nconst PATH_TO_PLACES_COLLECTION_FOLDER = path.join(\n  __dirname,\n  'input',\n  'places-collection'\n);\n// On d\xe9finit un dossier d'entr\xe9e dans lequel l'utilisateur devra d\xe9poser\n// une extraction des lieux d'un environnement Hastus, et le fichier OIR\n// qui d\xe9crit le format de l'extraction...\n\nconst PATH_TO_TRACKS_MAP = path.join(\n  __dirname,\n  'input',\n  'tracks-map',\n  'tracks.geojson'\n);\n// ... et un fichier correspondant \xe0 une carte des voies (obtenue soit depuis Hastus, ou une autre source)\n\nconst PATH_TO_FULL_PLACES_COLLECTION_MAP = path.join(\n  __dirname,\n  'output',\n  'places-map',\n  'places.geojson'\n);\n// c'est ici que le script d\xe9posera la carte des lieux produite \xe0 partir du jeu de lieux\n\nasync function main() {\n  const startTime = new Date(); // pour mesurer le temps \xe9coul\xe9 \xe0 la fin\n\n  // \xc9tape 1: on va cr\xe9er une carte repr\xe9sentant tous les lieux voies et\n  // l'exporter \xe0 un endroit o\xf9 mapshaper pourra ensuite aller la charger\n  const placesCollection = await getEntityFromOirDataAtPath(\n    PATH_TO_PLACES_COLLECTION_FOLDER,\n    OscarPlacesCollection\n  );\n\n  await fsBimo.outputJSON(\n    PATH_TO_FULL_PLACES_COLLECTION_MAP,\n    createPlacesFeatureCollection(placesCollection)\n  ); // voir \xe0 la fin du script pour la d\xe9finition de createPlacesFeatureCollection\n\n  // \xc9tape 2: on va maintenant fabriquer les commandes que l'on va soumettre\n  // \xe0 mapshaper\n  const commandLines = [\n    `-i ${PATH_TO_FULL_PLACES_COLLECTION_MAP} name=places`,\n    `-i ${PATH_TO_TRACKS_MAP} name=tracks`,\n    `-style target=places r=4 label-text='plcIdentifier' text-anchor=start dx=10 dy=10 fill=red`,\n  ];\n  // on commence par charger la carte des lieux et la carte des voies, et on\n  // applique un style global \xe0 la carte des lieux:\n  // on va afficher un cercle de rayon 4 sur chaque lieu, avec \xe0 c\xf4t\xe9 un\n  // libell\xe9 contenant le \"plcIdentifier\", d\xe9cal\xe9 de 10\n  // par rapport au point, et affich\xe9 en rouge\n\n  placesCollection\n    .placesByReferencePlace()\n    .forEach((places, referencePlace) => {\n      // On parcourt tous les PR du jeu de lieux, et pour chacun:\n\n      const { plcIdentifier } = referencePlace;\n\n      const pathToOutput = path.join(\n        __dirname,\n        'output',\n        'svgs',\n        `${plcIdentifier}.svg`\n      );\n      // on va produire un fichier nomm\xe9 selon l'ID de lieu\n\n      const bBoxString =\n        getBboxForPlace(referencePlace).getMapshaperStyleString();\n      // on calcule la \"Bounding Box\" qui englobe tous les lieux voies\n\n      commandLines.push(\n        `-clip target=places bbox=${bBoxString} + name=${plcIdentifier}_1`,\n        `-clip target=tracks bbox=${bBoxString} + name=${plcIdentifier}_2`,\n        // on prend des clips des deux cartes, aux mesures de la bounding box\n\n        `-o target=${plcIdentifier}_1,${plcIdentifier}_2 ${pathToOutput}`,\n        // on exporte ces clips sous forme de .svg\n\n        `-drop target=${plcIdentifier}_1,${plcIdentifier}_2`\n        // on supprime les clips pour \xe9viter de surcharger la m\xe9moire\n      );\n    });\n\n  // \xe0 l'issue de cette boucle, commandeLines contient:\n  // - les 3 commandes initiales permettant de charger et styliser les donn\xe9es\n  // - x commandes permettant de g\xe9n\xe9rer, exporter et supprimer les clips pour chaque gare\n\n  await mapshaper.runCommands(commandLines.join('\\n'));\n  // on balance toutes les commandes \xe0 mapshaper et on attend ...\n\n  console.log(`Done in ${(new Date() - startTime) / 1000} seconds`);\n  // Et voil\xe0 !\n}\n\nfunction createPlacesFeatureCollection(placesCollection) {\n  // cette fonction est relativement simple: on utilise le service existant \"createGeojsonFeatureFromPlace\"\n  // pour cr\xe9er, pour chaque lieu, un objet \"point\" en geojson, qui permettra de constituer une carte de tous\n  // les lieux voies\n  const placeFeatures = [];\n  placesCollection.forEach((place) => {\n    if (place.isLocated) {\n      try {\n        placeFeatures.push(createGeojsonFeatureFromPlace(place));\n      } catch (error) {\n        console.log(\n          `Erreur lors de la cr\xe9ation de la feature correspondant au lieu ${place.slo}: ${error}`\n        );\n      }\n    }\n  });\n  return featureCollection(placeFeatures);\n}\n\n// on lance la fonction principale\nmain();\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Et voil\xe0 ! En s'appuyant sur des services Bimo r\xe9utilisables et sur la librairie Open Source ",(0,r.jsx)(n.a,{href:"https://mapshaper.org",children:"mapshaper"}),", on arrive, en moins d'une centaine de lignes de codes, \xe0 \xe9crire un script assez puissant, qui nous donne des images semblables \xe0 celle-ci:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Exemple d&#39;image produite par le script",src:s(7072).A+"",width:"800",height:"300"})}),"\n",(0,r.jsx)(n.p,{children:"On peut \xe9ventuellement le raffiner, ajuster le style des libell\xe9s des lieux, par exemple, ou la couleur des voies etc."}),"\n",(0,r.jsx)(n.p,{children:"On peut \xe9galement se poser la question de la performance: \xe0 l'heure actuelle, pour chaque gare, mapshaper doit faire un clip de l'\xe9norme carte de la France enti\xe8re, ce qui repr\xe9sente pas mal de travail. Avec cette version de base, il aurait fallu laisser tourner le script un peu moins de deux heures pour produire des images des quelques 5000 gares qui pouvaient nous int\xe9resser."}),"\n",(0,r.jsx)(n.p,{children:"Ce n'est pas r\xe9dhibitoire, mais quand m\xeame pas tr\xe8s pratique."}),"\n",(0,r.jsx)(n.p,{children:"Dans un prochain article, on verra comment on a pu am\xe9liorer les performances pour descendre de 2h \xe0 moins de 10 minutes !"}),"\n"]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},6888:(e,n,s)=>{s.d(n,{Ay:()=>o,RM:()=>i});var r=s(4848),a=s(8453);const i=[];function t(e){const n={li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"On a:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"d'une part, un environnement Hastus dans lequel l'ensemble du R\xe9seau Ferr\xe9 National fran\xe7ais est cartographi\xe9 dans le module Geo, et ou chaque voie \xe0 quai d'une gare commerciale est mod\xe9lis\xe9e par un lieu"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"d'autre part, un outil SNCF maison o\xf9 des informations importantes sur les voies \xe0 quai ont \xe9t\xe9 saisies manuellement"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"On souhaite \xe9tablir une \xe9quivalence entre les r\xe9f\xe9rentiels de voies \xe0 quai de ces deux syst\xe8mes afin de pouvoir importer dans Hastus les informations saisies dans le syst\xe8me maison."})]})}function o(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},3126:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/commande-clip-a20f59b23ddc710b0aebca5683f5ab24.gif"},7072:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/exemple-svg-gare-e9ad80ad4a51d6897a24fc27dcbd52e9.svg"},7884:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/mapshaper-console-5222092c093209dc92084c559f528636.gif"},2695:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/test-avec-libelles-178d8bb33becb68cf4d14844f4ac5853.png"},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>o});var r=s(6540);const a={},i=r.createContext(a);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);