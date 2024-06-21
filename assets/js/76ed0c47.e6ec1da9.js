"use strict";(self.webpackChunk_bimo_docs_website=self.webpackChunk_bimo_docs_website||[]).push([[9907],{4767:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(2540),s=n(3023),o=n(3480);const i={sidebar_position:20,hide_blog_post_date:!1},a="Charger des donn\xe9es",c={id:"getting-started/load-data/load-data",title:"Charger des donn\xe9es",description:"Comme \xe9voqu\xe9 dans l'introduction, l'objectif de Bimo est de faciliter le traitement de donn\xe9es de toutes sources gr\xe2ce \xe0 des plugins. Les plugins ne sont toutefois pas encore disponibles en Open Source. (N'h\xe9sitez pas \xe0 nous contacter pour \xe9voquer vos besoins - cela pourrait nous motiver \xe0 acc\xe9l\xe9rer la publication d'un plugin particulier.)",source:"@site/docs/getting-started/load-data/load-data.mdx",sourceDirName:"getting-started/load-data",slug:"/getting-started/load-data/",permalink:"/docs/getting-started/load-data/",draft:!1,unlisted:!1,editUrl:"https://github.com/bimodata/bimo/tree/develop/docs-website/docs/getting-started/load-data/load-data.mdx",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,hide_blog_post_date:!1},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/getting-started/installation/"},next:{title:"Charger des donn\xe9es depuis HASTUS",permalink:"/docs/getting-started/load-data/from-hastus"}},l={},d=[];function u(e){const t={a:"a",h1:"h1",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"charger-des-donn\xe9es",children:"Charger des donn\xe9es"}),"\n",(0,r.jsxs)(t.p,{children:["Comme \xe9voqu\xe9 dans l'",(0,r.jsx)(t.a,{href:"/docs/intro/",children:"introduction"}),", l'objectif de Bimo est de faciliter le traitement de donn\xe9es de toutes sources gr\xe2ce \xe0 des plugins. Les plugins ne sont toutefois pas encore disponibles en Open Source. (N'h\xe9sitez pas \xe0 nous contacter pour \xe9voquer vos besoins - cela pourrait nous motiver \xe0 acc\xe9l\xe9rer la publication d'un plugin particulier.)"]}),"\n",(0,r.jsxs)(t.p,{children:["Avec les modules publi\xe9s pour le moment, il est possible de charger facilement des donn\xe9es qui auraient \xe9t\xe9 export\xe9es depuis HASTUS avec un OIG standard. Voir ",(0,r.jsx)(t.a,{href:"/docs/getting-started/load-data/from-hastus",children:"charger des donn\xe9es depuis Hastus"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Une autre option est de mettre vos donn\xe9es au format JSON, avec une structure correspondant au mod\xe8le-objet Bimo. Voir ",(0,r.jsx)(t.a,{href:"/docs/getting-started/load-data/from-json",children:"charger des donn\xe9es JSON"}),"."]}),"\n","\n",(0,r.jsx)(o.A,{})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},3480:(e,t,n)=>{n.d(t,{A:()=>b});n(3696);var r=n(1750),s=n(5220),o=n(3587),i=n(2815),a=n(2616),c=n(6590),l=n(1381);const d={cardContainer:"cardContainer_H47c",cardTitle:"cardTitle_tTnA",cardDescription:"cardDescription_rTl4"};var u=n(2540);function p(e){let{href:t,children:n}=e;return(0,u.jsx)(o.A,{href:t,className:(0,r.A)("card padding--lg",d.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:s,description:o}=e;return(0,u.jsxs)(p,{href:t,children:[(0,u.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:s,children:[n," ",s]}),o&&(0,u.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:o,children:o})]})}function h(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,u.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function g(e){let{item:t}=e;const n=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,u.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(g,{item:t});case"category":return(0,u.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,s.$S)();return(0,u.jsx)(b,{items:n.items,className:t})}function b(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(x,{...e});const o=(0,s.d1)(t);return(0,u.jsx)("section",{className:(0,r.A)("row",n),children:o.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(f,{item:e})},t)))})}},2815:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(3696),s=n(7032);const o=["zero","one","two","few","many","other"];function i(e){return o.filter((t=>e.includes(t)))}const a={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),a}}),[e])}function l(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),o=n.pluralForms.indexOf(s);return r[Math.min(o,r.length-1)]}(n,t,e)}}},3023:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(3696);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);