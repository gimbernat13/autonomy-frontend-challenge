(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{233:function(e,t,n){},234:function(e,t,n){},249:function(e,t){},252:function(e,t){},255:function(e,t){},259:function(e,t){},285:function(e,t){},287:function(e,t){},296:function(e,t){},298:function(e,t){},308:function(e,t){},310:function(e,t){},426:function(e,t){},428:function(e,t){},435:function(e,t){},436:function(e,t){},539:function(e,t,n){},541:function(e,t,n){},542:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"uint256","name":"time","type":"uint256"},{"internalType":"address payable","name":"recipient","type":"address"}],"name":"sendEthAtTime","outputs":[],"stateMutability":"payable","type":"function"}]')},543:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"contract IStakeManager","name":"stakeMan","type":"address"},{"internalType":"contract IOracle","name":"oracle","type":"address"},{"internalType":"contract IForwarder","name":"userForwarder","type":"address"},{"internalType":"contract IForwarder","name":"gasForwarder","type":"address"},{"internalType":"contract IForwarder","name":"userGasForwarder","type":"address"},{"internalType":"string","name":"tokenName","type":"string"},{"internalType":"string","name":"tokenSymbol","type":"string"},{"internalType":"uint256","name":"totalAUTOSupply","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor","name":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address","name":"target","type":"address"},{"indexed":false,"internalType":"address payable","name":"referer","type":"address"},{"indexed":false,"internalType":"bytes","name":"callData","type":"bytes"},{"indexed":false,"internalType":"uint112","name":"initEthSent","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"ethForCall","type":"uint112"},{"indexed":false,"internalType":"bool","name":"verifyUser","type":"bool"},{"indexed":false,"internalType":"bool","name":"insertFeeAmount","type":"bool"},{"indexed":false,"internalType":"bool","name":"payWithAUTO","type":"bool"},{"indexed":false,"internalType":"bool","name":"isAlive","type":"bool"}],"name":"HashedReqAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"}],"name":"HashedReqCancelled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"bool","name":"wasRemoved","type":"bool"}],"name":"HashedReqExecuted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"}],"name":"HashedReqUnveriAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"}],"name":"HashedReqUnveriCancelled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"bool","name":"wasRemoved","type":"bool"}],"name":"HashedReqUnveriExecuted","type":"event"},{"inputs":[],"name":"BASE_BPS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"GAS_OVERHEAD_AUTO","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"GAS_OVERHEAD_ETH","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PAY_AUTO_BPS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PAY_ETH_BPS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"components":[{"internalType":"address payable","name":"user","type":"address"},{"internalType":"address","name":"target","type":"address"},{"internalType":"address payable","name":"referer","type":"address"},{"internalType":"bytes","name":"callData","type":"bytes"},{"internalType":"uint112","name":"initEthSent","type":"uint112"},{"internalType":"uint112","name":"ethForCall","type":"uint112"},{"internalType":"bool","name":"verifyUser","type":"bool"},{"internalType":"bool","name":"insertFeeAmount","type":"bool"},{"internalType":"bool","name":"payWithAUTO","type":"bool"},{"internalType":"bool","name":"isAlive","type":"bool"}],"internalType":"struct IRegistry.Request","name":"r","type":"tuple"}],"name":"cancelHashedReq","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"components":[{"internalType":"address payable","name":"user","type":"address"},{"internalType":"address","name":"target","type":"address"},{"internalType":"address payable","name":"referer","type":"address"},{"internalType":"bytes","name":"callData","type":"bytes"},{"internalType":"uint112","name":"initEthSent","type":"uint112"},{"internalType":"uint112","name":"ethForCall","type":"uint112"},{"internalType":"bool","name":"verifyUser","type":"bool"},{"internalType":"bool","name":"insertFeeAmount","type":"bool"},{"internalType":"bool","name":"payWithAUTO","type":"bool"},{"internalType":"bool","name":"isAlive","type":"bool"}],"internalType":"struct IRegistry.Request","name":"r","type":"tuple"},{"internalType":"bytes","name":"dataPrefix","type":"bytes"},{"internalType":"bytes","name":"dataSuffix","type":"bytes"}],"name":"cancelHashedReqUnveri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"components":[{"internalType":"address payable","name":"user","type":"address"},{"internalType":"address","name":"target","type":"address"},{"internalType":"address payable","name":"referer","type":"address"},{"internalType":"bytes","name":"callData","type":"bytes"},{"internalType":"uint112","name":"initEthSent","type":"uint112"},{"internalType":"uint112","name":"ethForCall","type":"uint112"},{"internalType":"bool","name":"verifyUser","type":"bool"},{"internalType":"bool","name":"insertFeeAmount","type":"bool"},{"internalType":"bool","name":"payWithAUTO","type":"bool"},{"internalType":"bool","name":"isAlive","type":"bool"}],"internalType":"struct IRegistry.Request","name":"r","type":"tuple"},{"internalType":"uint256","name":"expectedGas","type":"uint256"}],"name":"executeHashedReq","outputs":[{"internalType":"uint256","name":"gasUsed","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"components":[{"internalType":"address payable","name":"user","type":"address"},{"internalType":"address","name":"target","type":"address"},{"internalType":"address payable","name":"referer","type":"address"},{"internalType":"bytes","name":"callData","type":"bytes"},{"internalType":"uint112","name":"initEthSent","type":"uint112"},{"internalType":"uint112","name":"ethForCall","type":"uint112"},{"internalType":"bool","name":"verifyUser","type":"bool"},{"internalType":"bool","name":"insertFeeAmount","type":"bool"},{"internalType":"bool","name":"payWithAUTO","type":"bool"},{"internalType":"bool","name":"isAlive","type":"bool"}],"internalType":"struct IRegistry.Request","name":"r","type":"tuple"},{"internalType":"bytes","name":"dataPrefix","type":"bytes"},{"internalType":"bytes","name":"dataSuffix","type":"bytes"},{"internalType":"uint256","name":"expectedGas","type":"uint256"}],"name":"executeHashedReqUnveri","outputs":[{"internalType":"uint256","name":"gasUsed","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAUTOAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"getExecCountOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getGasForwarder","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"r","type":"bytes"},{"internalType":"bytes","name":"dataPrefix","type":"bytes"},{"internalType":"bytes","name":"dataPostfix","type":"bytes"}],"name":"getHashedIpfsReq","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getHashedReq","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getHashedReqUnveri","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getHashedReqs","outputs":[{"internalType":"bytes32[]","name":"","type":"bytes32[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getHashedReqsLen","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"startIdx","type":"uint256"},{"internalType":"uint256","name":"endIdx","type":"uint256"}],"name":"getHashedReqsSlice","outputs":[{"internalType":"bytes32[]","name":"","type":"bytes32[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getHashedReqsUnveri","outputs":[{"internalType":"bytes32[]","name":"","type":"bytes32[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getHashedReqsUnveriLen","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"startIdx","type":"uint256"},{"internalType":"uint256","name":"endIdx","type":"uint256"}],"name":"getHashedReqsUnveriSlice","outputs":[{"internalType":"bytes32[]","name":"","type":"bytes32[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"r","type":"bytes"},{"internalType":"bytes","name":"dataPrefix","type":"bytes"},{"internalType":"bytes","name":"dataPostfix","type":"bytes"}],"name":"getIpfsReqBytes","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"getOracle","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"getReferalCountOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address payable","name":"user","type":"address"},{"internalType":"address","name":"target","type":"address"},{"internalType":"address payable","name":"referer","type":"address"},{"internalType":"bytes","name":"callData","type":"bytes"},{"internalType":"uint112","name":"initEthSent","type":"uint112"},{"internalType":"uint112","name":"ethForCall","type":"uint112"},{"internalType":"bool","name":"verifyUser","type":"bool"},{"internalType":"bool","name":"insertFeeAmount","type":"bool"},{"internalType":"bool","name":"payWithAUTO","type":"bool"},{"internalType":"bool","name":"isAlive","type":"bool"}],"internalType":"struct IRegistry.Request","name":"r","type":"tuple"}],"name":"getReqBytes","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"getReqCountOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"rBytes","type":"bytes"}],"name":"getReqFromBytes","outputs":[{"components":[{"internalType":"address payable","name":"user","type":"address"},{"internalType":"address","name":"target","type":"address"},{"internalType":"address payable","name":"referer","type":"address"},{"internalType":"bytes","name":"callData","type":"bytes"},{"internalType":"uint112","name":"initEthSent","type":"uint112"},{"internalType":"uint112","name":"ethForCall","type":"uint112"},{"internalType":"bool","name":"verifyUser","type":"bool"},{"internalType":"bool","name":"insertFeeAmount","type":"bool"},{"internalType":"bool","name":"payWithAUTO","type":"bool"},{"internalType":"bool","name":"isAlive","type":"bool"}],"internalType":"struct IRegistry.Request","name":"r","type":"tuple"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"getStakeManager","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getUserForwarder","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getUserGasForwarder","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"callData","type":"bytes"},{"internalType":"uint256","name":"expectedGas","type":"uint256"},{"internalType":"uint256","name":"startIdx","type":"uint256"}],"name":"insertToCallData","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"bytes32","name":"hashedIpfsReq","type":"bytes32"}],"name":"newHashedReqUnveri","outputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"address payable","name":"referer","type":"address"},{"internalType":"bytes","name":"callData","type":"bytes"},{"internalType":"uint112","name":"ethForCall","type":"uint112"},{"internalType":"bool","name":"verifyUser","type":"bool"},{"internalType":"bool","name":"insertFeeAmount","type":"bool"},{"internalType":"bool","name":"isAlive","type":"bool"}],"name":"newReq","outputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"},{"internalType":"address payable","name":"referer","type":"address"},{"internalType":"bytes","name":"callData","type":"bytes"},{"internalType":"uint112","name":"ethForCall","type":"uint112"},{"internalType":"bool","name":"verifyUser","type":"bool"},{"internalType":"bool","name":"insertFeeAmount","type":"bool"},{"internalType":"bool","name":"payWithAUTO","type":"bool"},{"internalType":"bool","name":"isAlive","type":"bool"}],"name":"newReqPaySpecific","outputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]')},544:function(e,t,n){"use strict";n.r(t);var a,i,r,s,o,p,l,y,u,d,c,b,m,f,x,h,T,g=n(1),j=n.n(g),v=n(218),w=n.n(v),O=(n(233),n(22)),k=n(67),A=n(57),R=n(14),F=(n(234),n(13)),M=n(2),C=function(e){var t=e.clicked;return Object(M.jsxs)("svg",{onClick:t,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.6",children:[Object(M.jsx)("circle",{cx:"12",cy:"12",r:"5"}),Object(M.jsx)("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),Object(M.jsx)("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),Object(M.jsx)("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),Object(M.jsx)("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),Object(M.jsx)("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),Object(M.jsx)("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),Object(M.jsx)("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),Object(M.jsx)("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]})},S=function(e){var t=e.clicked;return Object(M.jsx)("svg",{onClick:t,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",opacity:"0.6",children:Object(M.jsx)("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})},U=n(121),q=n.n(U),H={body:"#FFF",text:"#363537 !important",toggleBorder:"#FFF",background:"#363537",cardBg:"white",inputBg:"rgb(247, 248, 250)",buttonBg:" rgb(205, 230, 254)",colorScheme:"light",border:"1px solid transparent",borderHover:"1px solid rgb(206, 208, 217)"},B={body:"#363537",text:"#FAFAFA !important",toggleBorder:"#6B8096",background:"#999",inputBg:" rgb(33, 36, 41);",cardBg:"rgb(25, 27, 31)",buttonBg:"rgba(21, 61, 111, 0.44)",colorScheme:"dark",border:"1px solid transparent",borderHover:"1px solid rgb(64, 68, 79);"},E=n(44),I=(n(539),F.b.button(a||(a=Object(R.a)(["\n  padding: 16px;\n  width: 100%;\n  font-weight: 500;\n  font-size: 16px;\n  text-align: center;\n  border-radius: 20px;\n  outline: none;\n  /* border: 1px solid rgb(237, 238, 242); */\n  border: none;\n  text-decoration: none;\n  display: flex;\n  -webkit-box-pack: center;\n  justify-content: center;\n  flex-wrap: nowrap;\n  -webkit-box-align: center;\n  align-items: center;\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n  will-change: transform;\n  transition: transform 450ms ease 0s;\n  transform: perspective(1px) translateZ(0px);\n  background: ",";\n  color: rgb(80, 144, 234);\n  &:disabled,\n  &[disabled] {\n    border: 1px solid #999999;\n    background-color: #cccccc;\n    color: #666666;\n    cursor: default;\n    filter: blur(1px);\n  }\n\n  /* background-color: rgb(205, 230, 254); */\n  &:hover {\n    filter: brightness(1.05);\n  }\n"])),(function(e){return e.theme.buttonBg}))),D=function(e){var t=e.onClick,n=(e.label,e.children);e.disabled;return Object(M.jsx)(I,{disabled:!1,type:"submit",onClick:t,className:"button",children:n})},P=F.b.div(i||(i=Object(R.a)(["\n  position: relative;\n  max-width: 480px;\n  width: 100%;\n  background: rgb(255, 255, 255);\n  background: ",";\n  color: ",";\n  box-shadow: rgb(0 0 0 / 1%) 0px 0px 1px, rgb(0 0 0 / 4%) 0px 4px 8px,\n    rgb(0 0 0 / 4%) 0px 16px 24px, rgb(0 0 0 / 1%) 0px 24px 32px;\n  border-radius: 24px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 5rem;\n  z-index: 1;\n"])),(function(e){return e.theme.cardBg}),(function(e){return e.theme.text})),N=F.b.div(r||(r=Object(R.a)(["\n  display: grid;\n  grid-template-rows: auto;\n  gap: 8px;\n  padding: 8px;\n"]))),W=function(e){var t=e.children;return Object(M.jsx)(P,{children:Object(M.jsx)(N,{children:t})})},_=(n(541),F.b.div(s||(s=Object(R.a)(["\n  border-radius: ",';\n  font-weight: "bolder";\n  &:hover {\n  }\n  &.focus {\n    border: 1px solid rgb(206, 208, 217);\n  }\n'])),"20px")),z=F.b.input(o||(o=Object(R.a)(["\n  font-size: 28px;\n  border-radius: 20px;\n  position: relative;\n  font-weight: 500;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  background-color: inherit;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n  color: ",";\n"])),(function(e){return e.theme.text})),L=function(e){var t=e.placeholder,n=e.type,a=e.onChange,i=e.value,r=e.id;return Object(M.jsx)(_,{children:Object(M.jsx)("div",{className:"input-flex-container",children:Object(M.jsx)(z,{id:r,onChange:a,step:"0.01",placeholder:t,type:n,value:i||"",className:"amount-input"})})})},G=F.b.input(p||(p=Object(R.a)(["\n  border-radius: 20px;\n  width: 100%;\n  position: relative;\n  border: none;\n  font-size: 28px;\n  color-scheme: ",";\n  font-size: 26px;\n  font-weight: 500;\n  background-color: inherit;\n\n  ::-webkit-datetime-edit {\n    /* padding: 4px; */\n  }\n  ::-webkit-inner-spin-button {\n    display: none;\n  }\n  ::-webkit-calendar-picker-indicator {\n    color: white;\n    fill: white;\n    stroke: white;\n    /* transform: scale(1.3); */\n    cursor: pointer;\n    /* margin-right: 18px; */\n  }\n"])),(function(e){return e.theme.colorScheme})),V=F.b.div(l||(l=Object(R.a)(["\n  width: 100%;\n  /* padding: 20px; */\n  cursor: pointer;\n"]))),J=function(e){var t=e.onChange,n=e.id,a=(e.value,e.name),i=(new Date).toISOString();return Object(M.jsx)(V,{children:Object(M.jsx)(G,{type:"datetime-local",id:n,onChange:t,name:a,min:i,max:"2024-06-14T00:00"})})},Y=F.b.div(y||(y=Object(R.a)(["\n  border-radius: 20px;\n  background: ",";\n  width: initial;\n  border: ",";\n  padding: 1rem;\n  &:hover {\n    border: ",";\n  }\n"])),(function(e){return e.theme.inputBg}),(function(e){return e.theme.border}),(function(e){return e.theme.borderHover})),X=F.b.div(u||(u=Object(R.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),Z=F.b.div(d||(d=Object(R.a)(["\n  display: flex;\n\n  justify-content: flex-end;\n"]))),K=F.b.div(c||(c=Object(R.a)(["\n  margin: 0px;\n  min-width: 0px;\n  font-weight: 500;\n  font-size: 14px;\n  color: rgb(143, 150, 172);\n  display: flex;\n  align-items: center;\n"]))),Q=F.b.div(b||(b=Object(R.a)(["\n  background-color: rgba(21, 61, 111, 0.44);\n  border: none;\n  border-radius: 12px;\n  color: rgb(33, 114, 229);\n  font-size: 11px;\n  font-weight: 500;\n  margin-left: 0.25rem;\n  opacity: 1;\n  padding: 4px 6px;\n  pointer-events: initial;\n  cursor: pointer;\n"]))),$=function(e){var t=e.balance,n=e.value,a=e.handleMaxInput;return Object(M.jsxs)(Y,{children:[Object(M.jsxs)(X,{children:[Object(M.jsx)(E.a,{name:"amount",as:L,placeholder:"Amount",type:"number",id:"amount",value:n}),Object(M.jsx)("div",{children:"ETH"})]}),Object(M.jsx)(Z,{children:Object(M.jsxs)(K,{children:["Balance : ",t,Object(M.jsx)(Q,{onClick:a,children:"MAX"})]})})]})},ee=F.b.div(m||(m=Object(R.a)(["\n  border-radius: 20px;\n  border: 1px solid rgb(25, 27, 31);\n  border: ",";\n  background: ",";\n  width: initial;\n  padding: 1rem;\n  &:hover {\n    border: ",";\n  }\n"])),(function(e){return e.theme.border}),(function(e){return e.theme.inputBg}),(function(e){return e.theme.borderHover})),te=function(e){var t=e.children;return Object(M.jsx)(ee,{children:t})},ne=function(e){var t=e.isConnected,n=e.isConnecting,a=e.onLoginHandler,i=e.message,r=e.ethSenderContract,s=e.registryContract,o=e.selectedAccount,p=e.balance,l=e.web3;return Object(M.jsx)("div",{children:Object(M.jsx)(E.c,{initialValues:{amount:0,address:"",dateAndTime:""},onSubmit:function(e,t){var n,a=e.dateAndTime,i=e.address,p=e.amount,y=l.utils.toWei(p.toString(),"ether"),u={target:"0xfa0a8b60b2af537dec9832f72fd233e93e4c8463",referer:"0x0000000000000000000000000000000000000000",callData:r.methods.sendEthAtTime((n=a,new Date(n).getTime()),i.toString()).encodeABI(),ethForCall:y,verifyUser:!1,insertFeeAmount:!1,payWithAUTO:!1,isAlive:!1},d=u.target,c=u.referer,b=u.callData,m=u.ethForCall,f=u.verifyUser,x=u.insertFeeAmount,h=u.isAlive,T=function(){var e=Object(k.a)(Object(O.a)().mark((function e(){var t;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.methods.newReq(d,c,b,m,f,x,h).send({from:o,value:y});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();T()},children:function(e){var r=e.setFieldValue,s=e.values;e.initialValues;return Object(M.jsx)(E.b,{children:Object(M.jsx)(W,{children:Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)("div",{className:"title",children:Object(M.jsx)("div",{children:i})}),Object(M.jsx)($,{handleMaxInput:function(){r("amount",p)},balance:p,value:s.amount}),Object(M.jsx)(te,{children:Object(M.jsx)(E.a,{name:"address",as:L,placeholder:"Address",id:"address"})}),Object(M.jsx)(te,{children:Object(M.jsx)(E.a,{name:"dateAndTime",as:J,placeholder:"Select Date",id:"dateAndTime"})}),t?Object(M.jsx)(D,{children:" Send Transaction "}):Object(M.jsx)(D,{onClick:a,children:Object(M.jsxs)(M.Fragment,{children:[!n&&!t&&"Connect Wallet",n&&!t&&"Loading..."]})})]})})})}})})},ae=window.ethereum,ie=new q.a(ae),re=n(542),se=n(543),oe=new ie.eth.Contract(re,"0xfa0a8b60b2af537dec9832f72fd233e93e4c8463"),pe=new ie.eth.Contract(se,"0x3C901dc595105934D61DB70C2170D3a6834Cb8B7"),le=Object(F.b)("div")(f||(f=Object(R.a)(["\n  width: 98%;\n  margin: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),ye=Object(F.b)("img")(x||(x=Object(R.a)(["\n  height: 40px;\n"]))),ue=Object(F.b)("div")(h||(h=Object(R.a)(["\n  display: flex;\n  align-items: center;\n"]))),de=Object(F.b)("div")(T||(T=Object(R.a)(["\n  -webkit-box-align: center;\n  align-items: center;\n  background: ",";\n  border: ",";\n  border-radius: 16px;\n  color: ",";\n  cursor: pointer;\n  display: flex;\n  font-weight: 500;\n  -webkit-box-pack: justify;\n  justify-content: space-between;\n  padding: 8px 12px;\n  /* max-width: 200px; */\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-right: 5px;\n"])),(function(e){return e.theme.cardBg}),(function(e){return e.theme.border}),(function(e){return e.theme.text}));var ce=function(){var e=j.a.useState(!1),t=Object(A.a)(e,2),n=t[0],a=t[1],i=Object(g.useState)(!1),r=Object(A.a)(i,2),s=r[0],o=r[1],p=Object(g.useState)(null),l=Object(A.a)(p,2),y=l[0],u=l[1],d=Object(g.useState)(0),c=Object(A.a)(d,2),b=c[0],m=c[1],f=Object(g.useState)(!1),x=Object(A.a)(f,2),h=x[0],T=x[1],v=window.ethereum.networkVersion,w=function(){var e;return window.ethereum?(e=window.ethereum,U(e)):window.web3?e=window.web3.currentProvider:window.alert("No Ethereum browser detected! Check out MetaMask"),e};Object(g.useEffect)((function(){w()}));var R=function(){var e=Object(k.a)(Object(O.a)().mark((function e(){var t;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=w())){e.next=7;break}return t!==window.ethereum&&console.error("Not window.ethereum provider. Do you have multiple wallet installed ?"),T(!0),e.next=6,t.request({method:"eth_requestAccounts"});case 6:T(!1);case 7:U(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(k.a)(Object(O.a)().mark((function e(t){var n,a,i;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new q.a(t),e.next=3,n.eth.getAccounts();case 3:if(0!==(a=e.sent).length){e.next=8;break}console.log("Please connect to MetaMask!"),e.next=17;break;case 8:if(a[0]===y){e.next=17;break}return u(a[0]),e.t0=n.utils,e.next=13,n.eth.getBalance(a[0]);case 13:e.t1=e.sent,i=e.t0.fromWei.call(e.t0,e.t1,"ether"),m(Number(i).toFixed(6)),o(!0);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=n?Object(M.jsx)("div",{children:Object(M.jsx)(S,{clicked:function(){return a(!n)}})}):Object(M.jsx)(C,{clicked:function(){return a(!n)}});return Object(M.jsx)(F.a,{theme:n?H:B,children:Object(M.jsxs)("div",{className:n?"light-theme":"dark-theme",children:[Object(M.jsxs)(le,{children:[Object(M.jsx)(ye,{src:"https://uploads-ssl.webflow.com/623d3c9e548e1a3b4dc0d912/623d3c9e548e1a4624c0d9e1_autonomy-network-logo-mark-white.svg",alt:""}),Object(M.jsx)("h3",{style:{color:"lightslategrey"},children:function(){if(3!==Number(v))return"\u26a0\ufe0f You are connected to an unsupported network, Please Switch to Ropsten"}()}),Object(M.jsxs)(ue,{children:[Object(M.jsxs)(de,{children:[" ",b," ETH"]}),Object(M.jsxs)(de,{children:[" ",{1:"Ethereum",2:"R",3:"Ropsten Testnet"}[v]]}),Object(M.jsxs)(de,{children:[" ",y]}),Object(M.jsx)(de,{children:E})]})]}),3===Number(v)?Object(M.jsx)(ne,{web3:ie,balance:b,selectedAccount:y,registryContract:pe,ethSenderContract:oe,isConnected:s,isConnecting:h,message:"Scheduled Transfer",onLoginHandler:R}):Object(M.jsx)(W,{children:Object(M.jsx)("div",{children:"Please use Ropsten Testnet"})})]})})},be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,548)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),r(e),s(e)}))};w.a.createRoot(document.getElementById("root")).render(Object(M.jsx)(j.a.StrictMode,{children:Object(M.jsx)(ce,{})})),be()}},[[544,1,2]]]);
//# sourceMappingURL=main.cf8495ad.chunk.js.map