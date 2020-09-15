(this["webpackJsonptyleryep.github.io"]=this["webpackJsonptyleryep.github.io"]||[]).push([[0],{31:function(e,t,a){e.exports=a(39)},39:function(e,t,a){"use strict";a.r(t);var r=a(28),n=a(21),i=a(12),o=a(0),d=a.n(o),s=a(11),c=a.n(s),l=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function m(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var u=a(26),g=a(22),f=a(29),h={id:"cs198",index:2,image:"cs198.png",overlay:"blue",text:"CS198",modalText:"I was a section leader for CS 106A and CS106B, the introductory CS courses at Stanford!"},p={id:"stanford-1",index:1,image:"stanford.jpg",overlay:"red",text:"Stanford",modalText:"This is the university where I have spent four years learning, growing, and thinking! Here, I have met some of the most incredible people I have ever known, and have worked with esteemed professors and researchers."},v=[{year:2017,lanes:[[{id:"edutech",index:2,image:"edutech.jpg",overlay:"green",text:"EduTech",modalText:"I worked on this project with my teammates in EE 15N: The Art & Science of Engineering Design. Our goal was to make a website for 8th grade Social Studies teachers to use to incorporate more project-based learning in their classes."}],[{id:"marker-0",index:0,image:"marker",text:""},p,{id:"marker-1",index:2,image:"marker",text:"Winter Quarter"},{id:"marker-2",index:3,image:"marker",text:"Spring Quarter"},{id:"openproof",index:4,image:"openproof.jpg",overlay:"green",text:"Openproof",modalText:"I learned a ton about web development and about working in a small group to accelerate the new version of a 10+ year old Logic curriculum website."},{id:"marker-3",index:5,image:"marker",text:"Summer Quarter"}],[],[Object(f.a)(Object(f.a)({},h),{},{index:3}),{id:"marker-4",index:4,image:"marker",text:"Summer Quarter"},{id:"marker-5",index:5,image:"marker",text:""}]],connections:[["stanford-1","openproof"],["stanford-1","edutech"],["marker-0","stanford-1"],["openproof","marker-3"],["marker-1","cs198"],["cs198","marker-5"]]},{year:2018,lanes:[[{id:"wolfbot",index:3,image:"wolfbot.jpg",overlay:"yellow",text:"WolfBot",modalText:"The most exciting project I have worked on for CS 221: Artificial Intelligence. Working with my project partner Harry Sha, we created two game-playing AIs that could navigate a social game of lies and deceit, designing and adapting machine learning algorithms to understand the game and choose optimal statements. The game solver determines which players are lying using consistent statement subsets, and the Wolf AI uses Expectimax + Reinforcement Learning to choose the best lie to evade detection."}],[{id:"marker-0",index:0,image:"marker",text:""},{id:"stanford-2",index:1,image:"stanford2.jpg",overlay:"red",text:"Stanford",modalText:"This is the university where I have spent four years learning, growing, and thinking! Here, I have met some of the most incredible people I have ever known, and have worked with esteemed professors and researchers."},{id:"marker-1",index:2,image:"marker",text:"Winter Quarter"},{id:"marker-2",index:3,image:"marker",text:"Spring Quarter"},{id:"intuit",index:4,image:"intuit.png",overlay:"blue",text:"Intuit",modalText:"I worked here in the summer of 2018, working in the Payroll team (100+ people), to create a UI automation framework that could be used by all Payroll subteams for regression testing! I developed an automated UI test framework for Payroll teams, designed reliable click/ input functions using XPath selectors, integrated framework with Jenkins and backend service tests, and built a dashboard app to aggregate build results using React/Node.js."},{id:"marker-3",index:5,image:"marker",text:""}],[{id:"vhil",index:2,image:"vhil.jpg",overlay:"red",text:"VHIL",modalText:"I created VR worlds for the Virtual Human Interaction Lab to use in PhD research, implemented a multiplayer VR full-body experience using Unity, SteamVR, and Photon, and set up online VR studies using WebVR and Django to reach more participants."},{id:"marker-4",index:3,image:"marker",text:"Spring Quarter"}],[{id:"marker-5",index:0,image:"marker",text:""},h,{id:"marker-6",index:5,image:"marker",text:""}]],connections:[["marker-0","stanford-2"],["stanford-2","intuit"],["intuit","marker-3"],["stanford-2","vhil"],["vhil","marker-4"],["marker-4","intuit"],["marker-1","wolfbot"],["marker-5","cs198"],["cs198","marker-6"]]},{year:2019,lanes:[[{id:"self-driving",index:3,image:"self-driving.jpg",overlay:"green",text:"Self-Driving",modalText:"My project for CS 231N: Convolutional Neural Networks for Visual Recognition. For our final project, my friend Woody and I trained a car simulator model to drive by responding to high-level controls (e.g. take the next available left turn). We used branched ResNet architecture to predict throttle and steering angle, and the final model car stays in its lane, completes turns, and follows directions."}],[{id:"marker-0",index:0,image:"marker",text:""},p,{id:"marker-1",index:2,image:"marker",text:"Winter Quarter"},{id:"marker-2",index:3,image:"marker",text:"Spring Quarter"},{id:"bridgewater",index:4,image:"bridgewater.png",overlay:"red",text:"Bridgewater",modalText:"Developed features for DSL built on Scala used to author investment logic, on a feature that explains claims in financial reports and generates systematic reports with new data. Used React/Redux, a custom Scala backend, and a PostgreSQL database."},{id:"marker-3",index:5,image:"marker",text:""}],[],[{id:"marker-4",index:0,image:"marker",text:""},{id:"marker-5",index:1,image:"marker",text:"Fall Quarter"},h]],connections:[["marker-0","stanford-1"],["stanford-1","bridgewater"],["marker-4","cs198"],["marker-1","self-driving"],["bridgewater","marker-3"],["cs198","bridgewater"]]},{year:2020,lanes:[[],[{id:"marker-0",index:0,image:"marker",text:""},p,{id:"marker-1",index:2,image:"marker",text:"Winter Quarter"},{id:"marker-2",index:3,image:"marker",text:"Spring Quarter"},{id:"robinhood",index:4,image:"robinhood.png",overlay:"green",text:"Robinhood",modalText:"For the summer of my Senior year, I interned at Robinhood using the COVID-19 pandemic. Over the summer, I designed a new checkout flow backend API to place trades via ACH transfer on the Robinhood app, implemented the backend API in the Django backend and the frontend in the web app using React/Redux, and then integrated with Bonfire, a unified HTTP proxy layer."},{id:"marker-3",index:5,image:"marker",text:""}],[],[h,{id:"marker-4",index:3,image:"marker",text:"Fall Quarter"}]],connections:[["marker-0","stanford-1"],["stanford-1","robinhood"],["marker-0","cs198"],["cs198","marker-4"],["marker-4","robinhood"]]}];var k=["zero","one","two","three","four","five"],x=d.a.forwardRef((function(e,t){return"marker"===e.image?d.a.createElement("div",{id:"marker-".concat(e.index),className:"marker ".concat(k[e.index]),ref:t,title:e.text,"data-tooltip":e.text}):d.a.createElement("div",{id:e.image,ref:t,className:"bubble ".concat(k[e.index]),onClick:e.openModal({title:e.text,body:e.modalText})},d.a.createElement("img",{src:"img/projects/".concat(e.image),alt:e.text}),d.a.createElement("span",{className:"overlay ".concat(e.overlay)},d.a.createElement("p",{className:"text"},e.text)))}));function w(e){return d.a.createElement("div",{className:e.top?"lane top":"lane"},e.bubbles.map((function(t){return d.a.createElement(x,Object.assign({key:t.id,ref:e.refs[t.id],openModal:e.openModal},t))})))}function y(e){return d.a.createElement(g.a,{show:e.displayModal,onHide:e.handleClose,size:"lg",centered:!0},d.a.createElement(g.a.Header,{closeButton:!0},d.a.createElement(g.a.Title,null,e.modalContent.title)),d.a.createElement(g.a.Body,null,d.a.createElement("p",null,e.modalContent.body)))}function b(e){var t=d.a.useState(0),a=Object(i.a)(t,2),o=a[0],s=a[1],c=d.a.useState(!1),l=Object(i.a)(c,2),m=l[0],g=l[1],f=d.a.useState({}),h=Object(i.a)(f,2),p=h[0],v=h[1],k=function(e){return function(){v(e),g(!0)}},x=d.a.useState((function(){var t,a={},r=Object(n.a)(e.data);try{for(r.s();!(t=r.n()).done;){var i=t.value;a[i.year]={};var o,s=Object(n.a)(i.lanes);try{for(s.s();!(o=s.n()).done;){var c,l=o.value,m=Object(n.a)(l);try{for(m.s();!(c=m.n()).done;){var u=c.value;if(void 0===u.id)throw new Error("Undefined carousel data id: ".concat(JSON.stringify(u)));if(u.id in a[i.year])throw new Error("Duplicate carousel data id: ".concat(u.id));a[i.year][u.id]=d.a.createRef()}}catch(g){m.e(g)}finally{m.f()}}}catch(g){s.e(g)}finally{s.f()}}}catch(g){r.e(g)}finally{r.f()}return a})),b=Object(i.a)(x,1)[0],E=d.a.useState({height:window.innerHeight,width:window.innerWidth}),S=Object(i.a)(E,2),j=S[0],I=S[1];return d.a.useEffect((function(){function e(){I({height:window.innerHeight,width:window.innerWidth})}return window.addEventListener("resize",e),function(t){window.removeEventListener("resize",e)}})),d.a.useEffect((function(){var t,a=Object(n.a)(document.getElementsByClassName("svg-canvas"));try{for(a.s();!(t=a.n()).done;){t.value.textContent=""}}catch(m){a.e(m)}finally{a.f()}for(var d=0,s=[].concat(Object(r.a)(document.getElementsByClassName("carousel-control-prev")),Object(r.a)(document.getElementsByClassName("carousel-control-next")));d<s.length;d++){s[d].href="#projects"}var c=e.data[o],l=document.getElementById("svg-canvas-".concat(c.year));c.textContent="",c.connections.forEach((function(e){for(var t=Object(i.a)(e,2),a=t[0],r=t[1],n=b[c.year],o=0,d=[a,r];o<d.length;o++){var s=d[o];if(!(s in n))throw new Error("Invalid carousel data id: ".concat(s))}l.appendChild(function(e,t,a){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"lightseagreen",n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:10,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:.6;function o(e){for(var t=0,a=0,r=e;null!=r;r=r.offsetParent)t+=r.offsetLeft,a+=r.offsetTop;return{x:t,y:a}}var d=o(e.current),s=o(t.current),c=3*a.height,l=d.x,m=d.y-c,u=s.x,g=s.y-c,f=(u-l)*i,h=l+f,p=m,v=u-f,k=g,x="M ".concat(l," ").concat(m," C ").concat(h," ").concat(p," ").concat(v," ").concat(k," ").concat(u," ").concat(g),w="http://www.w3.org/2000/svg",y=document.createElementNS(w,"path");return y.setAttribute("d",x),y.setAttribute("stroke",r),y.setAttribute("class","path"),y.setAttribute("style","fill: none;"),y.setAttribute("stroke-width",n),y}(n[a],n[r],j))}))})),d.a.createElement(d.a.Fragment,null,d.a.createElement("h1",null,"Projects"),d.a.createElement(u.a,{id:"project",interval:null,onSlide:s},e.data.map((function(e){return d.a.createElement(u.a.Item,{key:e.year},d.a.createElement("svg",{id:"svg-canvas-".concat(e.year),className:"svg-canvas"}),d.a.createElement("img",{src:"img/home/stars.jpg",alt:"stars"}),d.a.createElement(u.a.Caption,null,d.a.createElement("h2",{className:"year"},e.year),e.lanes.map((function(t,a){return d.a.createElement(w,{refs:b[e.year],key:a,top:0===a,bubbles:t,openModal:k})}))))}))),d.a.createElement(y,{displayModal:m,modalContent:p,handleClose:function(){return g(!1)}}))}c.a.render(d.a.createElement(d.a.Fragment,null,d.a.createElement(b,{data:v})),document.querySelector("#projects")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");l?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var r=a.headers.get("content-type");404===a.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):m(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):m(t,e)}))}}()}},[[31,1,2]]]);
//# sourceMappingURL=main.fdeb8c71.chunk.js.map