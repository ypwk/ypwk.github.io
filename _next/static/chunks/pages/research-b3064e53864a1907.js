(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[465],{5427:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/research",function(){return n(3193)}])},1207:function(e,i,n){"use strict";var a=n(5893),t=n(7294);i.Z=e=>{let{title:i,period:n,institution:r,location:s,advisor:c,link:o,description:l}=e,[d,u]=(0,t.useState)(!1),h=(0,t.useRef)(null),p=(0,t.useRef)(0);return(0,t.useEffect)(()=>{{let e=()=>{d&&h.current&&(h.current.style.height="auto",h.current.style.height="".concat(h.current.scrollHeight,"px"))},i=()=>{window.innerWidth!==p.current&&(p.current=window.innerWidth,e())};return p.current=window.innerWidth,window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}}},[d]),(0,a.jsxs)("div",{className:"expandable-item",children:[(0,a.jsxs)("div",{className:"expandable-header",onClick:()=>u(!d),children:[(0,a.jsxs)("div",{className:"title",children:[o?(0,a.jsx)("h3",{children:(0,a.jsx)("a",{href:o,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"underline"},children:i})}):(0,a.jsx)("h3",{children:i}),(0,a.jsxs)("div",{className:"details",children:[(0,a.jsxs)("div",{className:"left-details",children:[(0,a.jsx)("div",{className:"detail",children:n instanceof Array?n.join(" - "):n}),c&&(0,a.jsxs)("div",{className:"detail",children:["Advisor: ",c]})]}),(0,a.jsxs)("div",{className:"right-details",children:[r&&(0,a.jsx)("div",{className:"detail",children:r}),s&&(0,a.jsx)("div",{className:"detail",children:s})]})]})]}),(0,a.jsx)("div",{className:"caret ".concat(d?"open":""),children:"▼"})]}),(0,a.jsxs)("div",{className:"expandable-content ".concat(d?"expanded":""),ref:h,style:d&&null!==h.current?{height:h.current.scrollHeight+"px"}:{height:"0px"},children:[(0,a.jsx)("div",{className:"details-container"}),l.map((e,i)=>(0,a.jsx)("p",{children:e},i))]})]})}},4852:function(e,i,n){"use strict";var a=n(5893);n(7294);var t=n(9008),r=n.n(t);i.Z=e=>{let{tabName:i}=e;return(0,a.jsxs)(r(),{children:[(0,a.jsx)("title",{children:"Kevin Wu | "+i}),(0,a.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"images/apple-touch-icon.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"images/favicon-32x32.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"images/favicon-16x16.png"})]})}},3193:function(e,i,n){"use strict";n.r(i),n.d(i,{default:function(){return s}});var a=n(5893),t=n(4852),r=n(1207);function s(){return(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)(t.Z,{tabName:"Research"}),(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"project-title",children:(0,a.jsx)("h3",{children:"Publications"})}),(0,a.jsx)("ul",{children:(0,a.jsx)("li",{children:"Chi-Kwong Li, Kevin Y. Wu, and Zherui Zhang. Efficient Circuit-Based Quantum State Tomography via Sparse Entry Optimization. In preparation."})})]}),(0,a.jsx)("div",{className:"project-subtitle",children:(0,a.jsx)("h3",{children:"Research Experience"})}),(0,a.jsx)(r.Z,{title:"Honors Thesis: Surface Code Decoding",period:"2023 - Present",institution:"William & Mary",location:"Williamsburg, VA",advisor:"Dr. Qun Li",description:["Investigating surface code decoders."]}),(0,a.jsx)(r.Z,{title:"Applying Differential Learning to Quantum Federated Learning",period:"2023",institution:"William & Mary",location:"Williamsburg, VA",advisor:"Dr. Qun Li",description:["Trained a federated QCNN using the Qiskit Machine Learning library, achieving 89% simulator test accuracy and 70% IBM QPU test accuracy on the MNIST dataset.","Implemented differential privacy to obfuscate sensitive client data, and performed a hyperparameter search to find an appropriate level of privacy. "]}),(0,a.jsx)(r.Z,{title:"First AI/ML Challenge at Dahlgren",period:"2022 - 2023",institution:"Naval Surface Warfare Center Dahlgren Division",location:"Dahlgren, VA",advisor:"Qun Li",description:["Contributed to a white paper detailing relevant literature and proposed approaches on the weapon target assignment problem, which resulted in the team's acceptance to the competition.","Played a leading role in brainstorming and implementing approaches for automatic scheduling and coordination of advanced weapon systems.","Architected, implemented, and trained several approaches to reduce damage to high value assets, including a Deep Q-Learning agent and heuristic-driven Greedy agent.","The W&M team won 3rd place and $20,000 in prize money. "]}),(0,a.jsx)(r.Z,{title:"Quantum Operator Approximation via Nonconvex PSD Programming",period:"2022",institution:"William & Mary",location:"Williamsburg, VA",advisor:"Dr. Chi-Kwong Li",description:["Approximated arbitrary quantum operators using the Pauli product rotations, exponentiated elements of the Pauli group. ","Transformed problem into nonconvex positive semidefinite programming problem, and optimized using a trust-region approach."]})]})}},9008:function(e,i,n){e.exports=n(4764)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5427)}),_N_E=e.O()}]);