(this.webpackJsonppandora_legend=this.webpackJsonppandora_legend||[]).push([[1],{1206:function(e,n){},1213:function(e,n){},1235:function(e,n){},1237:function(e,n){},1249:function(e,n){},1250:function(e,n){},1273:function(e,n){},1276:function(e,n){},1278:function(e,n){},1502:function(e,n){},1564:function(e,n){},1571:function(e,n){},1633:function(e,n,t){},1635:function(e,n,t){},1636:function(e,n){},1644:function(e,n,t){"use strict";t.r(n);var a=t(20),i=t.n(a),r=t(573),o=t.n(r),u=(t(628),t(1)),s=t.n(u),c=t(128),p=t(93),d=t(574),f=t.n(d),l=t(148),y=t(1660),m=t(576),b=t(577),h=t(578),v=t(579),w=t(580),T=t(583),g=t(586),x=t(589),k=t(591),j=t(592),O=t(593),C=t(594),A=t(595),M="https://mainnet.infura.io/v3/84842078b09946638c03157f83405213",I="https://rinkeby.infura.io/v3/84842078b09946638c03157f83405213",E=new m.a({supportedChainIds:[1,3,4,5,42,56,97]});new b.a({urls:{1:M,4:I},defaultChainId:1}),new h.a({rpc:{1:M},qrcode:!0}),new v.a({url:M,appName:"web3-react example",supportedChainIds:[1,3,4,5,42,10,137,69,420,80001]}),new w.a({chainId:1,url:M,pollingInterval:12e3}),new T.a({chainId:1,url:M,pollingInterval:12e3,manifestEmail:"dummy@abc.xyz",manifestAppUrl:"http://localhost:1234"}),new g.a({chainId:4,appName:"web3-react",url:I}),new x.a({supportedChainIds:[1]}),new k.a({chainId:42}),new j.a({apiKey:"pk_test_A6260FCBAA2EBDFB",chainId:4}),new O.a({apiKey:"pk_test_398B82F5F0E88874",chainId:4,email:"hello@example.org"}),new C.a({dAppId:"e9be171c-2b7f-4ff0-8db9-327707511ee2",networks:[1,100]}),new A.a({chainId:1});var S=t(310),F=(t(1633),t(39)),B=function(e){return Object(F.jsx)("div",{style:Object(S.a)(Object(S.a)({},e.style),{},{marginTop:"30px"}),children:Object(F.jsxs)("button",{className:"button",onClick:e.onClick,disabled:e.loading,children:[e.loading&&Object(F.jsx)("i",{className:"fa fa-refresh fa-spin",style:{marginRight:"5px"}}),e.children]})})},R=[{inputs:[{internalType:"address",name:"rewardToken",type:"address"},{internalType:"address",name:"checkToken",type:"address"},{internalType:"address",name:"approveTo",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"rewardToken",type:"address"},{indexed:!1,internalType:"address",name:"who",type:"address"}],name:"AirdropTaken",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"start",type:"uint256"},{indexed:!1,internalType:"uint256",name:"finish",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"NewAirdropCreated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"rewardToken",type:"address"},{indexed:!1,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"RamainTokenWithdrawed",type:"event"},{inputs:[],name:"AIRDROP_COUNT_EVERY_ADDRESS",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"airdropTakenCountRecord",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"airdropTotalCountRecord",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"finishTimestamp",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getAirdropTakenUserCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"page",type:"uint256"},{internalType:"uint256",name:"pageCount",type:"uint256"}],name:"getAirdropTakenUsers",outputs:[{internalType:"address[]",name:"",type:"address[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"start",type:"uint256"},{internalType:"uint256",name:"finish",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"newAirdrop",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"rewardTokenAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"startTimestamp",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"takeAirdrop",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"}],name:"withdrawRemainTokens",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"}],L=[{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"}];t(1635);function _(e){var n=new y.a(e);return n.pollingInterval=12e3,n}function N(){return Object(F.jsx)(l.a,{getLibrary:_,children:Object(F.jsx)(D,{})})}function D(){var e="0xfbbB798186020F7B4822CB6AE8E431bFd4f22188",n="0xFEa19831aCE7648a06b60bf3C07C0378E9e30A54",t=new Date("2021-10-18 20:00:00"),r=Object(l.b)(),o=r.connector,u=r.library,d=r.account,y=r.activate,m=i.a.useState(),b=Object(p.a)(m,2),h=b[0],v=b[1];i.a.useEffect((function(){h&&h===o&&v(void 0)}),[h,o]);var w=i.a.useState(null),T=Object(p.a)(w,2),g=T[0],x=T[1];i.a.useEffect((function(){if(u){var e=new f.a(u.provider);e.eth.handleRevert=!0,x(e)}}),[u]),i.a.useEffect((function(){y(E)}),[y]);var k=i.a.useState("Get Airdrop"),j=Object(p.a)(k,2),O=j[0],C=j[1],A=i.a.useState(!1),M=Object(p.a)(A,2),I=M[0],S=M[1],_=i.a.useState(),N=Object(p.a)(_,2),D=N[0],G=N[1];!function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=Object(l.b)(),t=n.active,i=n.error,r=n.activate;Object(a.useEffect)((function(){var n=window.ethereum;if(n&&n.on&&!t&&!i&&!e){var a=function(){console.log("Handling 'connect' event"),r(E)},o=function(e){console.log("Handling 'chainChanged' event with payload",e),r(E)},u=function(e){console.log("Handling 'accountsChanged' event with payload",e),e.length>0&&r(E)},s=function(e){console.log("Handling 'networkChanged' event with payload",e),r(E)};return n.on("connect",a),n.on("chainChanged",o),n.on("accountsChanged",u),n.on("networkChanged",s),function(){n.removeListener&&(n.removeListener("connect",a),n.removeListener("chainChanged",o),n.removeListener("accountsChanged",u),n.removeListener("networkChanged",s))}}}),[t,i,e,r])}(!function(){var e=Object(l.b)(),n=e.activate,t=e.active,i=Object(a.useState)(!1),r=Object(p.a)(i,2),o=r[0],u=r[1];return Object(a.useEffect)((function(){E.isAuthorized().then((function(e){e?n(E,void 0,!0).catch((function(){u(!0)})):u(!0)}))}),[]),Object(a.useEffect)((function(){!o&&t&&u(!0)}),[o,t]),o}()||!!h),i.a.useEffect((function(){var e=setInterval((function(){var e=new Date,n=Math.round((t.getTime()-e.getTime())/1e3),a=(n%60).toString().padStart(2,"0"),i=((n=Math.round(n/60))%60).toString().padStart(2,"0");n=Math.round(n/60);var r=Math.round(n%24).toString().padStart(2,"0"),o=Math.round(n/24).toString().padStart(2,"0"),u="".concat(o,":").concat(r,":").concat(i,":").concat(a),s=document.getElementById("remainCountdownTime");s&&(s.innerText=u)}),1e3);return function(){clearInterval(e)}}),[]),i.a.useEffect((function(){var n=function(){var n=Object(c.a)(s.a.mark((function n(){var t,a;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=new g.eth.Contract(R,e),n.next=3,t.methods.getAirdropTakenUserCount().call();case 3:return a=n.sent,n.abrupt("return",1234+parseInt(a));case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),t=setInterval(Object(c.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:t=e.sent,(a=document.getElementById("takenCunt"))&&(a.innerText=t.toString());case 5:case"end":return e.stop()}}),e)}))),5e3);return function(){clearInterval(t)}}),[g]);var H=function(){var e=Object(c.a)(s.a.mark((function e(t){var a,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new g.eth.Contract(L,"0x79030E6eA324E9c111B27deaAe2a205C27Cff664"),e.next=3,a.methods.allowance(d,n).call();case 3:if(i=e.sent,!(g.utils.toBN(i)>0)){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,a.methods.approve(n,"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff").send({from:d}).once("sending",(function(e){console.log(e)})).once("sent",(function(e){console.log(e)})).once("transactionHash",(function(e){console.log(e)})).once("receipt",(function(e){console.log(e)})).on("error",(function(e){t(e)})).then((function(e){console.log(e)}));case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),U=function(){var n=Object(c.a)(s.a.mark((function n(){var t,a,i;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=!1,a=function(){var e=Object(c.a)(s.a.mark((function e(n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=!0,G("reason"in n?Y(n.reason):"");case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),n.prev=2,S(!0),C("Getting Airdrop"),G(""),n.next=8,H(a);case 8:if(!t){n.next=11;break}return C("Get Failed"),n.abrupt("return");case 11:return C("Getting Airdrop"),i=new g.eth.Contract(R,e),n.next=15,i.methods.takeAirdrop().send({from:d,gasLimit:2e5}).once("sending",(function(e){console.log(e)})).once("sent",(function(e){console.log(e)})).once("transactionHash",(function(e){console.log(e)})).once("receipt",(function(e){console.log(e)})).on("error",(function(e){a(e)})).then((function(e){console.log(e),C("Get Success")})).catch((function(e){a(e),C("Get Failed")}));case 15:n.next=21;break;case 17:n.prev=17,n.t0=n.catch(2),a(n.t0),C("Get Failed");case 21:return n.prev=21,S(!1),n.finish(21);case 24:case"end":return n.stop()}}),n,null,[[2,17,21,24]])})));return function(){return n.apply(this,arguments)}}(),Y=function(e){return e.search("You are not allowed to take airdrop")>=0?"You are not allowed to take airdrop":e.search("All tokens have been taken")>=0?"All tokens have been taken":e.search("You have already taken airdrop")>=0?"You have already taken airdrop":e.search("Airdrop not started or finished")>=0?"Airdrop not started or finished":e};return Object(F.jsxs)("div",{children:[Object(F.jsx)(B,{loading:I,onClick:U,children:O}),D?Object(F.jsx)("div",{className:"error",children:D}):Object(F.jsx)(F.Fragment,{})]})}var G=function(e){e&&e instanceof Function&&t.e(16).then(t.bind(null,2306)).then((function(n){var t=n.getCLS,a=n.getFID,i=n.getFCP,r=n.getLCP,o=n.getTTFB;t(e),a(e),i(e),r(e),o(e)}))};o.a.render(Object(F.jsx)(i.a.StrictMode,{children:Object(F.jsx)(N,{})}),document.getElementById("wallet")),G()},628:function(e,n,t){},640:function(e,n){},643:function(e,n){},645:function(e,n){},649:function(e,n){},672:function(e,n){},674:function(e,n){},683:function(e,n){},685:function(e,n){},694:function(e,n){},696:function(e,n){},824:function(e,n){},861:function(e,n){},863:function(e,n){},870:function(e,n){},871:function(e,n){},889:function(e,n){},897:function(e,n){},904:function(e,n){},952:function(e,n){},996:function(e,n){}},[[1644,2,3]]]);
//# sourceMappingURL=main.93438b56.chunk.js.map