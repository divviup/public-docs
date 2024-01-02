"use strict";(self.webpackChunkpublic_docs=self.webpackChunkpublic_docs||[]).push([[162],{5736:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=t(5893),i=t(1151);const s={slug:"/glossary"},a="Glossary",o={id:"references/glossary",title:"Glossary",description:"This glossary provides definitions of terms specific to Divvi Up and the",source:"@site/docs/references/glossary.md",sourceDirName:"references",slug:"/glossary",permalink:"/glossary",draft:!1,unlisted:!1,editUrl:"https://github.com/divviup/public-docs/tree/main/docs/references/glossary.md",tags:[],version:"current",frontMatter:{slug:"/glossary"},sidebar:"docSidebar",previous:{title:"References",permalink:"/references/"},next:{title:"Janus Errors",permalink:"/references/janus-errors"}},l={},c=[{value:"Aggregator",id:"aggregator",level:3},{value:"Client",id:"client",level:3},{value:"Collector",id:"collector",level:3},{value:"Distributed Aggregation Protocol (DAP)",id:"distributed-aggregation-protocol-dap",level:3},{value:"Helper",id:"helper",level:3},{value:"Leader",id:"leader",level:3},{value:"Query type",id:"query-type",level:3},{value:"Report",id:"report",level:3},{value:"Subscriber",id:"subscriber",level:3},{value:"Task",id:"task",level:3}];function d(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"glossary",children:"Glossary"}),"\n",(0,n.jsx)(r.p,{children:"This glossary provides definitions of terms specific to Divvi Up and the\nprotocols it uses."}),"\n",(0,n.jsx)(r.h3,{id:"aggregator",children:"Aggregator"}),"\n",(0,n.jsxs)(r.p,{children:["A server that implements the aggregation subprotocol of\n",(0,n.jsx)(r.a,{href:"#distributed-aggregation-protocol-dap",children:"DAP"}),". Divvi Up and its partners operate\nDAP-compliant aggregators. Aggregators can also be self-hosted."]}),"\n",(0,n.jsxs)(r.p,{children:["Aggregators ingest measurements sent from ",(0,n.jsx)(r.a,{href:"#client",children:"clients"}),". They aggregate\nreports into batches, and service ",(0,n.jsx)(r.a,{href:"#collector",children:"collector"})," requests."]}),"\n",(0,n.jsxs)(r.p,{children:["Aggregators can be in one of two roles: ",(0,n.jsx)(r.a,{href:"#leader",children:"Leader"})," or ",(0,n.jsx)(r.a,{href:"#helper",children:"Helper"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["Examples of aggregator software include ",(0,n.jsx)(r.a,{href:"https://github.com/divviup/janus",children:"Janus (ISRG)"}),", and ",(0,n.jsx)(r.a,{href:"https://github.com/cloudflare/daphne",children:"Daphne\n(Cloudflare, helper-only)"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"client",children:"Client"}),"\n",(0,n.jsxs)(r.p,{children:["An end-user app that uses the client subprotocol of\n",(0,n.jsx)(r.a,{href:"#distributed-aggregation-protocol-dap",children:"DAP"})," to contribute measurements to a\n",(0,n.jsx)(r.a,{href:"#task",children:"task"}),". Typically, app developers will integrate a DAP client library to\nachieve this."]}),"\n",(0,n.jsx)(r.h3,{id:"collector",children:"Collector"}),"\n",(0,n.jsxs)(r.p,{children:["An application that implements the collector subprotocol of\n",(0,n.jsx)(r.a,{href:"#distributed-aggregation-protocol-dap",children:"DAP"}),". It collects aggregated batches\nfrom the aggregators and provides the final aggregate to the\n",(0,n.jsx)(r.a,{href:"#subscriber",children:"subscriber"}),". This is most often operated by the application\ndeveloper."]}),"\n",(0,n.jsxs)(r.p,{children:["A library suitable for building collectors is found in the Rust crate\n",(0,n.jsx)(r.a,{href:"https://docs.rs/janus_collector/latest/janus_collector/",children:(0,n.jsx)(r.code,{children:"janus_collector"})}),". A primitive collector implementation is\navailable in ",(0,n.jsx)(r.a,{href:"https://github.com/divviup/janus/blob/main/tools/src/bin/collect.rs",children:"Janus"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"distributed-aggregation-protocol-dap",children:"Distributed Aggregation Protocol (DAP)"}),"\n",(0,n.jsxs)(r.p,{children:["A protocol that describes a multi-party distributed system for privacy\npreserving aggregation of measurements. It is currently in the draft phase. Its\nspecification can be viewed on the ",(0,n.jsx)(r.a,{href:"https://datatracker.ietf.org/doc/draft-ietf-ppm-dap/",children:"IETF data tracker"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["Each participant in a DAP system adopts one of these roles: ",(0,n.jsx)(r.a,{href:"#client",children:"client"}),",\n",(0,n.jsx)(r.a,{href:"#collector",children:"collector"}),", ",(0,n.jsx)(r.a,{href:"#leader",children:"leader"}),", or ",(0,n.jsx)(r.a,{href:"#helper",children:"helper"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"helper",children:"Helper"}),"\n",(0,n.jsxs)(r.p,{children:["A ",(0,n.jsx)(r.a,{href:"#distributed-aggregation-protocol-dap",children:"DAP"})," aggregator that performs\naggregation and collection in response to direction from the Leader."]}),"\n",(0,n.jsx)(r.p,{children:"The system and network bandwidth requirements for a helper are lower than those\nfor a leader."}),"\n",(0,n.jsx)(r.h3,{id:"leader",children:"Leader"}),"\n",(0,n.jsxs)(r.p,{children:["A ",(0,n.jsx)(r.a,{href:"#distributed-aggregation-protocol-dap",children:"DAP"})," aggregator that directly ingests\n",(0,n.jsx)(r.a,{href:"#report",children:"reports"})," from clients, and drives the aggregation and collection\nprocesses with the helper. The leader determines how reports are to be batched."]}),"\n",(0,n.jsx)(r.p,{children:"The system and network bandwidth requirements for a leader are higher than for\nthose for a helper."}),"\n",(0,n.jsx)(r.h3,{id:"query-type",children:"Query type"}),"\n",(0,n.jsxs)(r.p,{children:["Describes how ",(0,n.jsx)(r.a,{href:"#report",children:"reports"})," are grouped into batches for aggregation. There\nare two query types defined by ",(0,n.jsx)(r.a,{href:"#distributed-aggregation-protocol-dap",children:"DAP"}),":"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Time-interval: Reports are grouped into batches based on the timestamp of the\nreport."}),"\n",(0,n.jsx)(r.li,{children:"Fixed-size: Reports are grouped into batches of fixed size by the leader."}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"report",children:"Report"}),"\n",(0,n.jsx)(r.p,{children:"A client-submitted measurement. Each report is composed of two report shares:\none for the leader, and one for the helper."}),"\n",(0,n.jsx)(r.p,{children:"Each report share contains the following data:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"An encrypted shard of the original measurement."}),"\n",(0,n.jsx)(r.li,{children:"A public share, containing additional data required for validation. Not all\nmeasurement types require a public share."}),"\n",(0,n.jsx)(r.li,{children:"A randomly generated report identifier."}),"\n",(0,n.jsx)(r.li,{children:"The time at which the report was generated."}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"subscriber",children:"Subscriber"}),"\n",(0,n.jsx)(r.p,{children:"An organization or individual who is using Divvi Up to implement privacy\nperserving metrics for their application."}),"\n",(0,n.jsx)(r.h3,{id:"task",children:"Task"}),"\n",(0,n.jsxs)(r.p,{children:["The core entity that Divvi Up and clients use for submitting and aggregating\nmeasurements. Determines the type of measurement (count, sum, histogram, et.\nal.), which ",(0,n.jsx)(r.a,{href:"#aggregator",children:"aggregators"})," will be used, which aggregation function\nto use, and additional metadata depending on the\n",(0,n.jsx)(r.a,{href:"#distributed-aggregation-protocol-dap",children:"DAP"})," participant."]}),"\n",(0,n.jsxs)(r.p,{children:["An ",(0,n.jsx)(r.a,{href:"#client",children:"client"})," application will have a task for each kind of measurement\nit takes."]})]})}function h(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,r,t)=>{t.d(r,{Z:()=>o,a:()=>a});var n=t(7294);const i={},s=n.createContext(i);function a(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);