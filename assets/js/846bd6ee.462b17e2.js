"use strict";(self.webpackChunkpublic_docs=self.webpackChunkpublic_docs||[]).push([[433],{4689:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var r=n(5893),s=n(1151),i=n(2991);const c={sidebar_position:999},o="References",a={id:"references/references",title:"References",description:"",source:"@site/docs/references/references.md",sourceDirName:"references",slug:"/references/",permalink:"/references/",draft:!1,unlisted:!1,editUrl:"https://github.com/divviup/public-docs/tree/main/docs/references/references.md",tags:[],version:"current",sidebarPosition:999,frontMatter:{sidebar_position:999},sidebar:"docSidebar",previous:{title:"Operational Metrics",permalink:"/product-documentation/operational-metrics"},next:{title:"Glossary",permalink:"/glossary"}},l={},d=[];function u(e){const t={h1:"h1",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"references",children:"References"}),"\n",(0,r.jsx)(i.Z,{})]})}function f(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},2991:(e,t,n)=>{n.d(t,{Z:()=>j});n(7294);var r=n(512),s=n(2802),i=n(3692),c=n(3919),o=n(5999),a=n(2503);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(5893);function u(e){let{href:t,children:n}=e;return(0,d.jsx)(i.Z,{href:t,className:(0,r.Z)("card padding--lg",l.cardContainer),children:n})}function f(e){let{href:t,icon:n,title:s,description:i}=e;return(0,d.jsxs)(u,{href:t,children:[(0,d.jsxs)(a.Z,{as:"h2",className:(0,r.Z)("text--truncate",l.cardTitle),title:s,children:[n," ",s]}),i&&(0,d.jsx)("p",{className:(0,r.Z)("text--truncate",l.cardDescription),title:i,children:i})]})}function m(e){let{item:t}=e;const n=(0,s.LM)(t);return n?(0,d.jsx)(f,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const n=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.xz)(t.docId??void 0);return(0,d.jsx)(f,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(p,{item:t});case"category":return(0,d.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,s.jA)();return(0,d.jsx)(j,{items:n.items,className:t})}function j(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const i=(0,s.MN)(t);return(0,d.jsx)("section",{className:(0,r.Z)("row",n),children:i.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(h,{item:e})},t)))})}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>c});var r=n(7294);const s={},i=r.createContext(s);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);