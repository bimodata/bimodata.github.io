"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[322],{4847:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var i=s(4848),a=s(8453);const t={slug:"creation-du-service-get-bbox-for-place",title:"Cr\xe9er un nouveau service Bimo",lead:"Un exemple du processus de cr\xe9ation d'un nouveau service Bimo.",date:"2022-11-28",authors:["gael"],tags:["cartographie","lieux","getBboxForPlace"],hide_blog_post_date:!0},o=void 0,r={permalink:"/examples/creation-du-service-get-bbox-for-place",source:"@site/examples/creation-du-service-get-bbox-for-place.mdx",title:"Cr\xe9er un nouveau service Bimo",description:"Dans Extraire automatiquement des images de plans de voies \xe0 partir de la cartographie Hastus, on a eu besoin de cr\xe9er un nouveau service. Nous allons voir comment cela se passe dans cet article.",date:"2022-11-28T00:00:00.000Z",tags:[{inline:!0,label:"cartographie",permalink:"/examples/tags/cartographie"},{inline:!0,label:"lieux",permalink:"/examples/tags/lieux"},{inline:!0,label:"getBboxForPlace",permalink:"/examples/tags/get-bbox-for-place"}],hasTruncateMarker:!1,authors:[{name:"Ga\xebl Ham\xe9on",title:"Cr\xe9ateur de Bimo",url:"https://github.com/gaelhameon",imageURL:"https://github.com/gaelhameon.png",key:"gael"}],frontMatter:{slug:"creation-du-service-get-bbox-for-place",title:"Cr\xe9er un nouveau service Bimo",lead:"Un exemple du processus de cr\xe9ation d'un nouveau service Bimo.",date:"2022-11-28",authors:["gael"],tags:["cartographie","lieux","getBboxForPlace"],hide_blog_post_date:!0},unlisted:!1,prevItem:{title:"R\xe9concilier les lieux de deux syst\xe8mes diff\xe9rents",permalink:"/examples/r\xe9concilier-les-lieux-de-deux-syst\xe8mes-diff\xe9rents-avec-find-best-match-for-target-among-candidates"},nextItem:{title:"Extraire automatiquement des images de plans de voies \xe0 partir de la cartographie Hastus",permalink:"/examples/extraire-automatiquement-des-images-de-plans-de-voies-\xe0-partir-de-la-cartographie-hastus"}},l={authorsImageUrls:[void 0]},c=[{value:"Initialiser le service",id:"initialiser-le-service",level:2},{value:"R\xe9diger le README",id:"r\xe9diger-le-readme",level:2},{value:"R\xe9diger les tests",id:"r\xe9diger-les-tests",level:2},{value:"Coder le service",id:"coder-le-service",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"\xc9pilogue",id:"\xe9pilogue",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Dans ",(0,i.jsx)(n.a,{href:"./extraire-automatiquement-des-images-de-plans-de-voies-%C3%A0-partir-de-la-cartographie-hastus/#automatisation",children:"Extraire automatiquement des images de plans de voies \xe0 partir de la cartographie Hastus"}),", on a eu besoin de cr\xe9er un nouveau service. Nous allons voir comment cela se passe dans cet article."]}),"\n",(0,i.jsx)(n.h2,{id:"initialiser-le-service",children:"Initialiser le service"}),"\n",(0,i.jsxs)(n.p,{children:["Nous sommes petit \xe0 petit en train de migrer vers l'outil ",(0,i.jsx)(n.a,{href:"https://nx.dev/",children:"nx"})," pour g\xe9rer le repo bimo. Id\xe9alement, nous utiliserions donc un ",(0,i.jsx)(n.a,{href:"https://nx.dev/recipes/generators#generators",children:"g\xe9n\xe9rateur"})," pour initialiser un nouveau service."]}),"\n",(0,i.jsx)(n.p,{children:"Mais pour le moment, nous allons simplement faire un copier coller d'un service existant."}),"\n",(0,i.jsx)(n.p,{children:"Ensuite, afin d'avoir du code bien document\xe9 et test\xe9, on commence toujours par r\xe9diger le README et les tests."}),"\n",(0,i.jsx)(n.h2,{id:"r\xe9diger-le-readme",children:"R\xe9diger le README"}),"\n",(0,i.jsxs)(n.p,{children:["On veut donc un service qui re\xe7oit un lieu, des param\xe8tres, et retourne une \"Bounding Box\". Mais qu'est-ce qu'une bounding box ? Pour le cas d'usage qui nous pousse \xe0 cr\xe9er ce service, on va vouloir passer les coordonn\xe9es sous forme de string ",(0,i.jsx)(n.code,{children:"xmin,ymin,xmax,ymax"})," \xe0 une commande mapshaper, mais ce serait dommage de s'enfermer dans ce format."]}),"\n",(0,i.jsx)(n.p,{children:"On va donc cr\xe9er une nouvelle classe, qui nous permettra facilement de cr\xe9er des bbox \xe0 partir de plusieurs sources ou formats de donn\xe9es, puis de les exprimer sous plusieurs formes, notamment sous forme de string mapshaper. On ne va pas s'y attarder ici, mais le code est disponible ci-dessous:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:"file=BoundingBox.js",children:"const {\n  getAllChildClasses,\n  serializeThis,\n  parseThis,\n} = require('@bimo/core-utils-serialization');\nconst getAndValidatePropFromProps = require('@bimo/core-utils-get-and-validate-prop-from-props');\nconst Item = require('@bimo/core-utils-item');\nconst { pick } = require('lodash');\n\nconst childClasses = [];\n\nclass BoundingBox extends Item {\n  constructor(rawProps) {\n    const props = Array.isArray(rawProps)\n      ? {\n          xMin: rawProps[0],\n          yMin: rawProps[1],\n          xMax: rawProps[2],\n          yMax: rawProps[3],\n        }\n      : rawProps;\n    super(props, 'BoundingBox');\n    this.activeCoordinatesSystemName = getAndValidatePropFromProps(\n      'activeCoordinatesSystemName',\n      rawProps,\n      'string',\n      'default'\n    );\n    this.coordinatesBySystemName = getAndValidatePropFromProps(\n      'coordinatesBySystemName',\n      rawProps,\n      Object,\n      {}\n    );\n    if (Object.keys(this.coordinatesBySystemName).length === 0) {\n      this.coordinatesBySystemName.default = pick(props, [\n        'xMin',\n        'xMax',\n        'yMin',\n        'yMax',\n      ]);\n    }\n  }\n\n  get xMin() {\n    return this.coordinatesBySystemName[this.activeCoordinatesSystemName].xMin;\n  }\n\n  get yMin() {\n    return this.coordinatesBySystemName[this.activeCoordinatesSystemName].yMin;\n  }\n\n  get xMax() {\n    return this.coordinatesBySystemName[this.activeCoordinatesSystemName].xMax;\n  }\n\n  get yMax() {\n    return this.coordinatesBySystemName[this.activeCoordinatesSystemName].yMax;\n  }\n\n  get dX() {\n    return this.xMax - this.xMin;\n  }\n\n  get dY() {\n    return this.yMax - this.yMin;\n  }\n\n  get mapshaperStyleString() {\n    return `${this.xMin},${this.yMin},${this.xMax},${this.yMax}`;\n  }\n\n  get shortLoggingOutput() {\n    return `bbox: ${this.mapshaperStyleString}`;\n  }\n\n  get mediumLoggingOutput() {\n    return `${this.shortLoggingOutput} dX: ${this.dX}  dY: ${this.dY}`;\n  }\n\n  setActiveCoordinatesSystemName(coordinatesSystemName) {\n    this.activeCoordinatesSystemName = coordinatesSystemName;\n  }\n}\n\nBoundingBox.allChildClasses = getAllChildClasses(childClasses);\nBoundingBox.prototype.serializeModel = serializeThis;\nBoundingBox.parseModel = parseThis;\n\nmodule.exports = BoundingBox;\n"})}),"\n",(0,i.jsx)(n.p,{children:"Par ailleurs, toujours pour notre cas d'usage initial, on va vouloir \xe9largir un peu la bounding box autour des coordonn\xe9es des lieux. Il faudrait donc que le service soit param\xe9trable et qu'on puisse sp\xe9cifier les marges \xe0 prendre autour des lieux."}),"\n",(0,i.jsx)(n.p,{children:'On a donc maintenant une d\xe9finition claire des objets manipul\xe9s par notre service: il re\xe7oit un lieu et des param\xe8tres, et retourne une "Bounding Box".'}),"\n",(0,i.jsx)(n.p,{children:"On va d\xe9crire ceci dans le README, et donner des exemples de code qui utiliseraient ce service:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-markdown",metastring:"file=README.md collapsedNumberOfLines=10",children:"# `@bimo/core-services-get-bbox-for-place`\n\nReturns a bounding box for a place, according to various parameters.\n\nMost importantly, if the place is a reference place, this will look at the coordinates of all places associated to this place, and return a bounding box that includes all these places, with a default padding of 100 units unless otherwise specified.\n\n## Usage\n"})}),"\n",(0,i.jsx)(n.p,{children:"(La partie ci-dessous est incluse dans le README mais on la s\xe9pare ici pour qu'elle soit plus lisible)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:"file=README.md",children:"const { PlacesCollection } = require('@bimo/core-entities');\n\nconst placesCollection = new PlacesCollection({\n  items: [\n    { plcIdentifier: 'A' },\n    {\n      plcIdentifier: 'A1',\n      plcReferencePlace: 'A',\n      locaLocMethod: '5',\n      locaXCoord: '20',\n      locaYCoord: '20',\n    },\n    {\n      plcIdentifier: 'A2',\n      plcReferencePlace: 'A',\n      locaLocMethod: '5',\n      locaXCoord: '0',\n      locaYCoord: '0',\n    },\n  ],\n});\n\nconst getBboxForPlace = require('@bimo/core-services-get-bbox-for-place');\n\nconst placeA = placesCollection.getByBusinessId('A');\nconst bBox1 = getBboxForPlace(placeA, { padding: 10 }, { placesCollection });\nconsole.log(typeof bBox1);\n// BoundingBox\n\nconsole.log(bBox1.mapshaperStyleString);\n// \"-10,-10,30,30\"\n\nconst bBox2 = getBboxForPlace(\n  placeA,\n  {\n    xPadding: 10,\n    yMinPadding: 5,\n    yMaxPadding: 0,\n  },\n  { placesCollection }\n);\n\nconst { xMin, yMin, xMax, yMax } = bBox2;\nconsole.log({ xMin, yMin, xMax, yMax });\n// { xMin: -10, yMin: -5, xMax: 30, yMax: 20 }\n"})}),"\n",(0,i.jsx)(n.p,{children:"Voil\xe0, on a maintenant des exemples concrets de comment on voudrait que ce service soit utilis\xe9. On va partir de \xe7a pour r\xe9diger des tests."}),"\n",(0,i.jsx)(n.h2,{id:"r\xe9diger-les-tests",children:"R\xe9diger les tests"}),"\n",(0,i.jsx)(n.p,{children:'D\'abord, on pr\xe9pare des donn\xe9es de test, dans un fichier "prepareData.js":'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:"file=prepareData.js",children:"const { PlacesCollection } = require('@bimo/core-entities');\nconst deepFreeze = require('deep-freeze-es6');\n\nmodule.exports = () => {\n  let placesCollection = new PlacesCollection({\n    items: [\n      { plcIdentifier: 'A' },\n      { plcIdentifier: 'B' },\n      {\n        plcIdentifier: 'A1',\n        plcReferencePlace: 'A',\n        locaLocMethod: '5',\n        locaXCoord: '20',\n        locaYCoord: '20',\n      },\n      {\n        plcIdentifier: 'A2',\n        plcReferencePlace: 'A',\n        locaLocMethod: '5',\n        locaXCoord: '0',\n        locaYCoord: '0',\n      },\n      {\n        plcIdentifier: 'B1',\n        plcReferencePlace: 'B',\n        locaLocMethod: '5',\n        locaXCoord: '-10',\n        locaYCoord: '0',\n      },\n      {\n        plcIdentifier: 'B2',\n        plcReferencePlace: 'B',\n        locaLocMethod: '5',\n        locaXCoord: '0',\n        locaYCoord: '-10',\n      },\n      {\n        plcIdentifier: 'B3',\n        plcReferencePlace: 'B',\n        locaLocMethod: '5',\n        locaXCoord: '10',\n        locaYCoord: '0',\n      },\n      {\n        plcIdentifier: 'B4',\n        plcReferencePlace: 'B',\n        locaLocMethod: '5',\n        locaXCoord: '0',\n        locaYCoord: '10',\n      },\n    ],\n  });\n  // Force calculation of cached values\n  const dummy = placesCollection.placesByReferencePlace;\n  placesCollection = deepFreeze(placesCollection);\n\n  return { placesCollection };\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["On fabrique simplement un jeu de lieux, avec des donn\xe9es fictives. On calcule le ",(0,i.jsx)(n.code,{children:"placesByReferencePlace"})," puis on \"freeze\" l'objet. C'est une bonne habitude \xe0 prendre pour les tests des services qui n'ont pas vocation \xe0 modifier des objets: si jamais notre code avait des effets de bord ind\xe9sirables qui essaieraient de modifier l'objet, le test \xe9chouerait."]}),"\n",(0,i.jsx)(n.p,{children:"On va ensuite utiliser ces donn\xe9es dans le fichier de test:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:"file=getBboxForPlace.spec.js",children:"const { expect } = require('chai');\nconst logger = require('@bimo/core-utils-logging').getStupidLogger(true);\n\nconst getBboxForPlace = require('../src/getBboxForPlace');\n\nconst { placesCollection } = require('./prepareData')();\n\nconst serviceContext = { logger };\n\ndescribe('getBboxForPlace', () => {\n  const testParamsByTestName = {\n    'default config on place A': {\n      placeId: 'A', // pour rappel, le lieu A a deux lieux voies, un \xe0 [0,0] et un \xe0 [20, 20]\n      config: {},\n      expectedResult: `-100,-100,120,120`, // la config par d\xe9faut ajouter des marges de 100 unit\xe9s dans chaque direction\n    },\n    'default config on place B': {\n      placeId: 'B', // pour rappel, le lieu B a quatre lieux voies, \xe0 [-10,0], [10,0], [0,-10], [0,10]\n      config: {},\n      expectedResult: `-110,-110,110,110`,\n    },\n    'custom padding on place A': {\n      placeId: 'A',\n      config: { padding: 5 },\n      expectedResult: `-5,-5,25,25`,\n    },\n    'custom padding only on X on place A': {\n      // so the y padding will remain the default = 100\n      placeId: 'A',\n      config: { xPadding: 5 },\n      expectedResult: `-5,-100,25,120`,\n    },\n  };\n  Object.entries(testParamsByTestName).forEach(([testName, testParams]) => {\n    it(`works with ${testName}`, () => {\n      const { placeId, config, expectedResult } = testParams;\n      const place = placesCollection.getByBusinessId(placeId);\n      const bBox = getBboxForPlace(place, config, serviceContext);\n      expect(bBox.mapshaperStyleString).to.equal(expectedResult);\n    });\n  });\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"On utilise des tests param\xe9trables, ce qui permet d'ajouter facilement des cas de tests pour de nouvelles options de configuration qui pourraient appara\xeetre dans le futur."}),"\n",(0,i.jsx)(n.p,{children:"\xc0 ce stade, si on lance les tests, tout devrait \xe9chouer, et c'est normal !"}),"\n",(0,i.jsx)(n.h2,{id:"coder-le-service",children:"Coder le service"}),"\n",(0,i.jsx)(n.p,{children:"On va maintenant pouvoir coder la fonction et relancer les tests au fur et \xe0 mesure, en ajoutant les options de configuration n\xe9cessaires etc. Ici pour abr\xe9ger on va directement passer \xe0 la version finale. Ci-dessous, une version largement comment\xe9e directement dans le code."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:"file=getBboxForPlace.js",children:"const { BoundingBox } = require('@bimo/core-entities');\nconst retrievePlace = require('@bimo/core-services-retrieve-place');\n\nfunction getBboxForPlace(placeLike, config = {}, context = {}) {\n  const {\n    padding = 100,\n    xPadding = padding,\n    yPadding = padding,\n    xMinPadding = xPadding,\n    xMaxPadding = xPadding,\n    yMinPadding = yPadding,\n    yMaxPadding = yPadding,\n  } = config;\n  /**\n   * Par d\xe9faut, on ajoute des marges de 100 de tous les c\xf4t\xe9s, ou alors la\n   * marge sp\xe9cifi\xe9e par l'utiliateur de tous les c\xf4t\xe9s, mais on laisse\n   * aussi l'utilisateur sp\xe9cifier des marges diff\xe9rentes en X et Y, voire\n   * m\xeame \xe0 droite, \xe0 gauche, en haut et en bas.\n   */\n\n  const sourcePlace = retrievePlace(\n    placeLike,\n    context.placesCollection,\n    context\n  );\n  /** Il arrive souvent qu'on manipule des objets qui ressemblent \xe0 des lieux,\n   * mais n'en sont pas vraiment. Par exemple, quand on manipule un voyage, sa\n   * propri\xe9t\xe9 Trip.trpPlaceStart contient seulement un ID de lieu, mais dans\n   * l'esprit de tout le monde, c'est un lieu. Pour \xe9viter de devoir recoder\n   * chaque fois le travail d'aller chercher un lieu dans un jeu de lieu sur la\n   * base de son ID, on utilise le service \"retrievePlace\". Si on lui passe\n   * quelque chose qui est d\xe9j\xe0 un lieu en bonne et due forme, il ne fait rien.\n   * Si on lui passe autre chose, il va essayer de l'interpr\xe9ter, et de\n   * r\xe9cup\xe9rer un vrai lieu \xe0 partir de cette autre chose et du jeu de lieux.\n   */\n\n  let xMin = Number.POSITIVE_INFINITY;\n  let yMin = Number.POSITIVE_INFINITY;\n  let xMax = Number.NEGATIVE_INFINITY;\n  let yMax = Number.NEGATIVE_INFINITY;\n\n  const allPlaces = [sourcePlace, ...sourcePlace.childrenPlaces];\n  /** Pour le moment, la seule \"intelligence\" de notre service est ici: on sait\n   * que pour un lieu donn\xe9, on va vouloir contr\xf4ler les coordonn\xe9es de ce lieu\n   * et de tous les lieux qui lui sont rattach\xe9s. \xc9ventuellement, on pourrait\n   * faire \xe9voluer ceci pour ne le faire que si certaines options sont\n   * pr\xe9cis\xe9es dans la config.\n   */\n\n  allPlaces.forEach((place) => {\n    if (place.isLocated) {\n      const x = parseFloat(place.locaXCoord);\n      const y = parseFloat(place.locaYCoord);\n      if (x < xMin) xMin = x;\n      if (x > xMax) xMax = x;\n      if (y < yMin) yMin = y;\n      if (y > yMax) yMax = y;\n    }\n  });\n\n  if (xMin === Number.POSITIVE_INFINITY)\n    throw new Error(`Could not compute BBox for ${sourcePlace.slo}`);\n  // Si xMin n'a toujours pas boug\xe9, il y a eu un probl\xe8me ...\n\n  return new BoundingBox({\n    xMin: xMin - xMinPadding,\n    yMin: yMin - yMinPadding,\n    xMax: xMax + xMaxPadding,\n    yMax: yMax + yMaxPadding,\n  });\n  // Il y a un deuxi\xe8me petit bout de valeur ajout\xe9e \xe0 notre service ici, qui g\xe8re les marges.\n}\n\nmodule.exports = getBboxForPlace;\n"})}),"\n",(0,i.jsx)(n.p,{children:"On peut maintenant v\xe9rifier que \xe7a fonctionne pour tous nos tests:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-txt",metastring:"file=consoleOutput",children:"  getBboxForPlace\n    \u2714 works with default config on place A\n    \u2714 works with default config on place B\n    \u2714 works with custom padding on place A\n    \u2714 works with custom padding only on X on place A\n"})}),"\n",(0,i.jsx)(n.p,{children:"Et c'est bien le cas !"}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(n.p,{children:"Le temps passer \xe0 r\xe9diger le README et les tests a probablement \xe9t\xe9 plus long que le temps pass\xe9 \xe0 r\xe9diger le code du service lui-m\xeame. Et \xe0 premi\xe8re vue \xe7a peut sembler \xeatre une perte de temps. Mais si on n'avait pas fait comme \xe7a, on aurait fait comment ?"}),"\n",(0,i.jsx)(n.p,{children:"On aurait \xe9crit la fonction directement dans le script qui en avait besoin. Pour la tester, il aurait fallu lancer \xe0 chaque fois le script complet, qui allait charger \xe0 chaque fois un jeu de lieux complet (donc prendre du temps) ... \xe0 moins qu'on prenne le temps de pr\xe9parer un jeu de lieux partiel pour tester le script ?"}),"\n",(0,i.jsx)(n.p,{children:"On aurait regard\xe9 le r\xe9sultat global du script - les images des gares - et si on avait vu qu'elles ne correspondaient pas \xe0 ce qu'on souhaitait, on aurait d\xe9bugg\xe9: est-ce que le probl\xe8me vient du calcul de la bBox ? Ou d'un bug dans la commande mapshaper ? Ou simplement de donn\xe9es qui sont fausses ? On aurait ajout\xe9 des \"console.log\" un peu partout dans le script ..."}),"\n",(0,i.jsx)(n.p,{children:"Bref, ne serait-ce que pour le d\xe9veloppement de ce script, au final, on n'aurait pas n\xe9cessairement pass\xe9 moins de temps si on n'avait pas pris la peine de faire un service s\xe9par\xe9 avec des tests s\xe9par\xe9s."}),"\n",(0,i.jsx)(n.p,{children:"Mais en plus, maintenant:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"si on a besoin de calculer une bBox pour un autre script ou un autre besoin, on a d\xe9j\xe0 un service sp\xe9cifique qu'on peut importer individuellement n'importe o\xf9"}),"\n",(0,i.jsxs)(n.li,{children:["si on veut faire \xe9voluer ce service pour y ajouter des fonctionnalit\xe9s:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"on a d\xe9j\xe0 toute la structure pour ajouter des cas de tests correspondants aux nouvelles fonctionnalit\xe9s"}),"\n",(0,i.jsx)(n.li,{children:"mais surtout: on n'a pas peur de casser les fonctionnalit\xe9s existantes, puisqu'on a des tests pour celles-ci. On peut donc m\xeame se lancer dans une r\xe9\xe9criture compl\xe8te du service si on le souhaite: tant qu'il passe toujours nos tests actuels \xe0 la fin, on sait que les usages actuels fonctionneront toujours"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Cette discipline de modularisation des services et de r\xe9daction de tests est ce qui permet \xe0 Bimo d'\xe9voluer rapidement sans r\xe9gressions !"}),"\n",(0,i.jsx)(n.h2,{id:"\xe9pilogue",children:"\xc9pilogue"}),"\n",(0,i.jsx)(n.p,{children:"2 semaines apr\xe8s avoir r\xe9dig\xe9 ce service, un nouveau besoin semblable est apparu, qui a conduit \xe0 cr\xe9er un nouveau service getBboxForPlaces (avec un s)."}),"\n",(0,i.jsx)(n.p,{children:"En effet, pour ce nouveau besoin, on veut une bBox autour de plusieurs lieux qui n'ont pas n\xe9cessairement de lien entre eux."}),"\n",(0,i.jsx)(n.p,{children:"On a donc transf\xe9r\xe9 le code de getBboxForPlace vers getBboxForPlaces, puis on l'a modifi\xe9 un peu pour qu'il accepte directement un array de lieux."}),"\n",(0,i.jsx)(n.p,{children:"D\xe9sormais, getBboxForPlace ne conserve que la logique qui construit un array de lieu avec les lieux enfants d'un lieu de r\xe9f\xe9rence, puis fait appel \xe0 getBboxForPlaces."}),"\n",(0,i.jsx)(n.p,{children:"Les tests de getBboxForPlace restent les m\xeames, et passent toujours. On a facilement pu mutualiser du code, et gagner du temps ..."})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>r});var i=s(6540);const a={},t=i.createContext(a);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);