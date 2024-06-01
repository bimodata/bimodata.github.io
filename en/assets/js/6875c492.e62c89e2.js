"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[813],{2389:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var a=n(3193),s=n(9666),i=n(4848);function r(e){const{metadata:t}=e,{previousPage:n,nextPage:r}=t;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,a.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,i.jsx)(s.A,{permalink:n,title:(0,i.jsx)(a.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),r&&(0,i.jsx)(s.A,{permalink:r,title:(0,i.jsx)(a.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},7616:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var a=n(8655),s=n(4275),i=n(4848);function r(e){let{items:t,component:n=s.A}=e;return(0,i.jsx)(i.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,i.jsx)(a.i,{content:t,children:(0,i.jsx)(n,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)}))})}},3009:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});n(6540);var a=n(1750),s=n(3193),i=n(9317),r=n(9269),o=n(7347),l=n(8074),c=n(8438),d=n(2389),g=n(7003),u=n(7616),m=n(3289),h=n(7456),p=n(4848);function x(e){const t=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,s.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,s.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function j(e){let{tag:t}=e;const n=x(t);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r.be,{title:n,description:t.description}),(0,p.jsx)(g.A,{tag:"blog_tags_posts"})]})}function b(e){let{tag:t,items:n,sidebar:a,listMetadata:i}=e;const r=x(t);return(0,p.jsxs)(c.A,{sidebar:a,children:[t.unlisted&&(0,p.jsx)(m.A,{}),(0,p.jsxs)("header",{className:"margin-bottom--xl",children:[(0,p.jsx)(h.A,{as:"h1",children:r}),t.description&&(0,p.jsx)("p",{children:t.description}),(0,p.jsx)(l.A,{href:t.allTagsPath,children:(0,p.jsx)(s.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,p.jsx)(u.A,{items:n}),(0,p.jsx)(d.A,{metadata:i})]})}function f(e){return(0,p.jsxs)(r.e3,{className:(0,a.A)(o.G.wrapper.blogPages,o.G.page.blogTagPostListPage),children:[(0,p.jsx)(j,{...e}),(0,p.jsx)(b,{...e})]})}},3289:(e,t,n)=>{n.d(t,{A:()=>m});n(6540);var a=n(1750),s=n(3193),i=n(7472),r=n(4848);function o(){return(0,r.jsx)(s.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,r.jsx)(s.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(i.A,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(7347),g=n(8326);function u(e){let{className:t}=e;return(0,r.jsx)(g.A,{type:"caution",title:(0,r.jsx)(o,{}),className:(0,a.A)(t,d.G.common.unlistedBanner),children:(0,r.jsx)(l,{})})}function m(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(u,{...e})]})}},3849:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var a=n(2433),s=n(8655),i=n(4848);function r(e){const{isBlogPostPage:t}=(0,s.e)();let n=e.children;return t||(n=e.children.type.frontMatter.lead??e.children),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(a.A,{...e,children:n})})}},323:(e,t,n)=>{n.d(t,{A:()=>u});n(6540);var a=n(1750),s=n(3193),i=n(9317),r=n(8655),o=n(3177);const l={container:"container_iJTo"};var c=n(4848);function d(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,i.W)();return t=>{const n=Math.ceil(t);return e(n,(0,s.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,c.jsx)(c.Fragment,{children:n(t)})}function g(e){let{date:t,formattedDate:n}=e;return(0,c.jsx)("time",{dateTime:t,children:n})}function u(e){let{className:t}=e;const{metadata:n}=(0,r.e)(),{date:s,readingTime:i,frontMatter:u}=n,m=(0,o.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"}),h=void 0!==i,p=!u.hide_blog_post_date,x=()=>!(!h||!p)&&(0,c.jsx)(c.Fragment,{children:" \xb7 "});return(0,c.jsxs)("div",{className:(0,a.A)(l.container,"margin-vert--md",t),children:[p&&(0,c.jsx)(g,{date:s,formattedDate:(j=s,m.format(new Date(j)))}),(0,c.jsx)(x,{}),h&&(0,c.jsx)(d,{readingTime:i})]});var j}},4275:(e,t,n)=>{n.d(t,{A:()=>d});n(6540);var a=n(8579),s=n(8655),i=n(2171),r=n(6297),o=n(6542),l=n(4848);function c(){const{colorMode:e}=(0,r.G)(),{currentLocale:t}=(0,o.A)().i18n;return(0,l.jsx)(i.A,{repo:"bimodata/bimo",repoId:"R_kgDOJItDIQ",category:"Announcements",categoryId:"DIC_kwDOJItDIc4Cfxoo",mapping:"title",strict:"0",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",theme:e,lang:t,loading:"lazy",crossorigin:"anonymous",async:!0})}function d(e){const{isBlogPostPage:t}=(0,s.e)();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.A,{...e}),t&&(0,l.jsxs)("div",{children:[(0,l.jsx)("hr",{}),(0,l.jsx)(c,{})]})]})}}}]);