(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[465],{5427:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/research",function(){return t(3193)}])},1207:function(e,i,t){"use strict";var n=t(5893),a=t(7294);i.Z=e=>{let{title:i,period:t,institution:r,location:s,advisor:o,link:c,description:l}=e,[d,p]=(0,a.useState)(!1),h=(0,a.useRef)(null),u=(0,a.useRef)(0);return(0,a.useEffect)(()=>{{let e=()=>{d&&h.current&&(h.current.style.height="auto",h.current.style.height="".concat(h.current.scrollHeight,"px"))},i=()=>{window.innerWidth!==u.current&&(u.current=window.innerWidth,e())};return u.current=window.innerWidth,window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}}},[d]),(0,n.jsxs)("div",{className:"expandable-item",children:[(0,n.jsxs)("div",{className:"expandable-header",onClick:()=>p(!d),children:[(0,n.jsxs)("div",{className:"title",children:[c?(0,n.jsx)("h3",{children:(0,n.jsx)("a",{href:c,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"underline"},children:i})}):(0,n.jsx)("h3",{children:i}),(0,n.jsxs)("div",{className:"details",children:[(0,n.jsxs)("div",{className:"left-details",children:[(0,n.jsx)("div",{className:"detail",children:t instanceof Array?t.join(" - "):t}),o&&(0,n.jsxs)("div",{className:"detail",children:["Advisor: ",o]})]}),(0,n.jsxs)("div",{className:"right-details",children:[r&&(0,n.jsx)("div",{className:"detail",children:r}),s&&(0,n.jsx)("div",{className:"detail",children:s})]})]})]}),(0,n.jsx)("div",{className:"caret ".concat(d?"open":""),children:"▼"})]}),(0,n.jsxs)("div",{className:"expandable-content ".concat(d?"expanded":""),ref:h,style:d&&null!==h.current?{height:h.current.scrollHeight+"px"}:{height:"0px"},children:[(0,n.jsx)("div",{className:"details-container"}),l.map((e,i)=>(0,n.jsx)("p",{children:e},i))]})]})}},4852:function(e,i,t){"use strict";var n=t(5893);t(7294);var a=t(9008),r=t.n(a);i.Z=e=>{let{tabName:i}=e;return(0,n.jsxs)(r(),{children:[(0,n.jsx)("title",{children:"Kevin Wu | "+i}),(0,n.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"images/apple-touch-icon.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"images/favicon-32x32.png"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"images/favicon-16x16.png"})]})}},3193:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return s}});var n=t(5893),a=t(4852),r=t(1207);function s(){return(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)(a.Z,{tabName:"Research"}),(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"project-title",children:(0,n.jsx)("h3",{children:"Publications"})}),(0,n.jsx)("ul",{children:(0,n.jsx)("li",{children:"Chi-Kwong Li, Kevin Y. Wu, and Zherui Zhang. Efficient Circuit-Based Quantum State Tomography via Sparse Entry Optimization. In review."})})]}),(0,n.jsx)("div",{className:"project-subtitle",children:(0,n.jsx)("h3",{children:"Research Experience"})}),(0,n.jsx)(r.Z,{title:"Computer Generated Holography for Creating Optical Tweezers",period:"2024 - Now",institution:"University of Washington",location:"Seattle, WA",advisor:"Dr. Maxwell Parsons",description:["Implemented iterative phase reconstruction algorithms to generate spot arrays using a phase spatial light modulators, reaching 92% simulated power efficiency.","Investigating alternative neural network phase reconstruction algorithms for improved power efficiency and trap depth.","Extending algorithm to 3D trap arrays through wavefront propagation techniques."]}),(0,n.jsx)(r.Z,{title:"Improving the Scalability of Neural Network Surface Code Decoders",period:"2023 - 2024",institution:"William & Mary",location:"Williamsburg, VA",advisor:"Dr. Qun Li",description:["Designed transformer and structured selective state space models to decode the rotated planar code, a type of quantum error correction code.","Implemented and trained the models using PyTorch to decode low distance rotated planar codes.","Scaled decoders to higher distance codes using state compression techniques."]}),(0,n.jsx)(r.Z,{title:"Applying Differential Learning to Quantum Federated Learning",period:"2023",institution:"William & Mary",location:"Williamsburg, VA",advisor:"Dr. Qun Li",description:["Trained a federated QCNN using the Qiskit Machine Learning library, achieving 89% simulator test accuracy and 70% IBM QPU test accuracy on the MNIST dataset.","Implemented differential privacy to obfuscate sensitive client data, and performed a hyperparameter search to find an appropriate level of privacy. "]}),(0,n.jsx)(r.Z,{title:"First AI/ML Challenge at Dahlgren",period:"2022 - 2023",institution:"NSWCDD",location:"Dahlgren, VA",advisor:"Dr. Qun Li",description:["Contributed to a white paper detailing relevant literature and proposed approaches on the weapon target assignment problem, which resulted in the team's acceptance to the competition.","Played a leading role in brainstorming and implementing approaches for automatic scheduling and coordination of advanced weapon systems.","Architected, implemented, and trained several approaches to reduce damage to high value assets, including a Deep Q-Learning agent and heuristic-driven Greedy agent.","The W&M team won 3rd place and $20,000 in prize money. "]}),(0,n.jsx)(r.Z,{title:"Quantum Operator Approximation via Nonconvex PSD Programming",period:"2022",institution:"William & Mary",location:"Williamsburg, VA",advisor:"Dr. Chi-Kwong Li",description:["Approximated arbitrary quantum operators using the Pauli product rotations, exponentiated elements of the Pauli group. ","Transformed problem into nonconvex positive semidefinite programming problem, and optimized using a trust-region approach."]})]})}},9008:function(e,i,t){e.exports=t(4764)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5427)}),_N_E=e.O()}]);