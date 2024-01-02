"use strict";(self.webpackChunkpublic_docs=self.webpackChunkpublic_docs||[]).push([[826],{596:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(5893),i=n(1151);const s={},a="Emulating Categorical Histograms with DAP draft-04",o={id:"product-documentation/categorical-histogram-dap-04",title:"Emulating Categorical Histograms with DAP draft-04",description:"The Prio3Histogram VDAF has changed between drafts 04 and 07 of DAP. Initially,",source:"@site/docs/product-documentation/categorical-histogram-dap-04.md",sourceDirName:"product-documentation",slug:"/product-documentation/categorical-histogram-dap-04",permalink:"/product-documentation/categorical-histogram-dap-04",draft:!1,unlisted:!1,editUrl:"https://github.com/divviup/public-docs/tree/main/docs/product-documentation/categorical-histogram-dap-04.md",tags:[],version:"current",frontMatter:{},sidebar:"docSidebar",previous:{title:"Product Documentation",permalink:"/product-documentation/"},next:{title:"References",permalink:"/references/"}},d={},c=[{value:"Background",id:"background",level:2},{value:"Prio3Histogram, DAP draft-04",id:"prio3histogram-dap-draft-04",level:3},{value:"Prio3Histogram, DAP draft-07",id:"prio3histogram-dap-draft-07",level:3},{value:"Solution",id:"solution",level:2},{value:"Multidimensional Histograms",id:"multidimensional-histograms",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"emulating-categorical-histograms-with-dap-draft-04",children:"Emulating Categorical Histograms with DAP draft-04"}),"\n",(0,r.jsx)(t.p,{children:"The Prio3Histogram VDAF has changed between drafts 04 and 07 of DAP. Initially,\nit provided the functionality of a conventional histogram of a continuous\nvariable. As of draft-07, its API has changed to be more flexible, supporting\nother use cases like categorical variables, multidimensional histograms, etc.\nThis guide covers how to emulate this behavior and use Prio3Histogram as of DAP\ndraft-04 to count occurrences of different values of a categorical variable.\nThis is only applicable to deployments using older versions of the protocol;\nnewer deployments using draft-07 or later can disregard this guide."}),"\n",(0,r.jsx)(t.h2,{id:"background",children:"Background"}),"\n",(0,r.jsx)(t.h3,{id:"prio3histogram-dap-draft-04",children:"Prio3Histogram, DAP draft-04"}),"\n",(0,r.jsxs)(t.p,{children:["This version uses the\n",(0,r.jsx)(t.a,{href:"https://www.ietf.org/archive/id/draft-irtf-cfrg-vdaf-05.html#name-prio3histogram",children:"definition of Prio3Histogram from VDAF draft-05"}),".\nThe VDAF has one parameter, ",(0,r.jsx)(t.code,{children:"buckets"}),", which is a list of integers in ascending\norder. The measurement is an integer, which gets compared to each value in the\n",(0,r.jsx)(t.code,{children:"buckets"})," parameter."]}),"\n",(0,r.jsxs)(t.p,{children:["Measurements are encoded into a vector that has a 1 in one element and a 0\nelsewhere. The length of the encoded vector is one more than the length of the\n",(0,r.jsx)(t.code,{children:"buckets"})," parameter. The encoding procedure divides the number line into\nintervals, separated at the numbers in the ",(0,r.jsx)(t.code,{children:"buckets"})," parameter, and assigns each\nelement of the encoded measurement vector to one of the intervals, in increasing\norder. Then, for any measurement, the interval that contains that measurement\nvalue is identified, the corresponding vector element is set to 1, and the rest\nare set to 0. Each interval includes its maximum boundary value and excludes its\nminimum boundary value. In particular, if the measurement is less than or equal\nto ",(0,r.jsx)(t.code,{children:"buckets[0]"}),", then the output is ",(0,r.jsx)(t.code,{children:"<1, 0, 0, 0, ... 0>"}),". If the measurement is\ngreater than ",(0,r.jsx)(t.code,{children:"buckets[0]"})," and less than or equal to ",(0,r.jsx)(t.code,{children:"buckets[1]"}),", then the\noutput is ",(0,r.jsx)(t.code,{children:"<0, 1, 0, 0, ... 0>"}),". If the measurement is greater than\n",(0,r.jsx)(t.code,{children:"buckets[len(buckets) - 1]"}),", then the output is ",(0,r.jsx)(t.code,{children:"<0, 0, 0, ... 0, 1>"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"prio3histogram-dap-draft-07",children:"Prio3Histogram, DAP draft-07"}),"\n",(0,r.jsxs)(t.p,{children:["This version uses the\n",(0,r.jsx)(t.a,{href:"https://www.ietf.org/archive/id/draft-irtf-cfrg-vdaf-07.html#name-prio3histogram",children:"definition of Prio3Histogram from VDAF draft-07"}),".\nThe vdaf has two parameters, ",(0,r.jsx)(t.code,{children:"length"})," and ",(0,r.jsx)(t.code,{children:"chunk_length"}),", both positive\nintegers. The measurement is an integer between 0 and ",(0,r.jsx)(t.code,{children:"length - 1"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["As before, measurements get encoded into a vector , such that one vector element\nis 1, and the rest are 0. The length of the encoded vector is equal to the\n",(0,r.jsx)(t.code,{children:"length"})," parameter (the ",(0,r.jsx)(t.code,{children:"chunk_length"})," parameter is not relevant to measurement\nencoding). In this case, the encoding procedure is much simpler. The measurement\nis used as an index into the encoded vector, and the element that the index\npoints to is set to 1."]}),"\n",(0,r.jsx)(t.h2,{id:"solution",children:"Solution"}),"\n",(0,r.jsxs)(t.p,{children:["In order to emulate a categorical histogram using DAP draft-04, we will do some\nadditional measurement pre-processing, and craft a ",(0,r.jsx)(t.code,{children:"buckets"})," list parameter that\naligns with this preprocessing. If our categorical variable has ",(0,r.jsx)(t.code,{children:"n"})," levels, then\nwe will map each level to one of ",(0,r.jsx)(t.code,{children:"n"})," different numbers, and provide that number\nto the ",(0,r.jsx)(t.code,{children:"Prio3Histogram"})," measurement sharding function."]}),"\n",(0,r.jsxs)(t.p,{children:["In order to have the VDAF produce ",(0,r.jsx)(t.code,{children:"n"})," different counters, we need to provide a\n",(0,r.jsx)(t.code,{children:"buckets"})," VDAF parameter with length ",(0,r.jsx)(t.code,{children:"n - 1"}),". Additionally, it must map each of\nour remapped input numbers to a different bucket interval. Since measurements\nequal to a bucket boundary value get placed in the bucket to the left, and\nmeasurements between ",(0,r.jsx)(t.code,{children:"buckets[len(buckets) - 1]"})," and positive infinity get\nplaced in the last bucket, we can simply set ",(0,r.jsx)(t.code,{children:"buckets"})," to the first ",(0,r.jsx)(t.code,{children:"n - 1"})," of\nour remapped numbers."]}),"\n",(0,r.jsxs)(t.p,{children:["Concretely, let us use a sequence starting at zero for our remapped numbers.\nThen, we will remap our categorical value to ",(0,r.jsx)(t.code,{children:"0"})," through ",(0,r.jsx)(t.code,{children:"n - 1"})," to produce a\nmeasurement for the VDAF. The ",(0,r.jsx)(t.code,{children:"buckets"})," VDAF parameter will be\n",(0,r.jsx)(t.code,{children:"[0, 1, 2, ... n - 2]"}),". The aggregate results produced by the VDAF will be\nvectors of ",(0,r.jsx)(t.code,{children:"n"})," numbers, corresponding to the different levels of our original\ncategorical value, in the order in which they were mapped to ",(0,r.jsx)(t.code,{children:"0"})," through\n",(0,r.jsx)(t.code,{children:"n - 1"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:['For example, if we want to make a categorical histogram of the letters "A", "B",\n"C", and "D", we would remap measurements using the following lookup table, and\ninstantiate Prio3Histogram with ',(0,r.jsx)(t.code,{children:"buckets = [0, 1, 2]"}),"."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Original measurement"}),(0,r.jsx)(t.th,{children:"Remapped measurement"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"A"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"B"}),(0,r.jsx)(t.td,{children:"1"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"C"}),(0,r.jsx)(t.td,{children:"2"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"D"}),(0,r.jsx)(t.td,{children:"3"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:'If we get an aggregate result of "7, 15, 1, 29", that means there were seven "A"\nmeasurements, fifteen "B" measurements, etc.'}),"\n",(0,r.jsx)(t.h3,{id:"multidimensional-histograms",children:"Multidimensional Histograms"}),"\n",(0,r.jsx)(t.p,{children:"This same strategy can be used for multidimensional histograms. Instead of\nremapping a single categorical variable to a number, you would instead define a\nmapping from a tuple of all input variables to one number."}),"\n",(0,r.jsxs)(t.p,{children:["For example, a multidimensional histogram of two categorical variables, with\nthree levels each, could be implemented using the lookup table below, and by\ninstantiating Prio3Histogram with ",(0,r.jsx)(t.code,{children:"buckets = [0, 1, 2, 3, 4, 5, 6, 7]"})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Original measurement"}),(0,r.jsx)(t.th,{children:"Remapped measurement"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"A, X"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"A, Y"}),(0,r.jsx)(t.td,{children:"1"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"A, Z"}),(0,r.jsx)(t.td,{children:"2"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"B, X"}),(0,r.jsx)(t.td,{children:"3"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"B, Y"}),(0,r.jsx)(t.td,{children:"4"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"B, Z"}),(0,r.jsx)(t.td,{children:"5"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"C, X"}),(0,r.jsx)(t.td,{children:"6"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"C, Y"}),(0,r.jsx)(t.td,{children:"7"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"C, Z"}),(0,r.jsx)(t.td,{children:"8"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var r=n(7294);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);