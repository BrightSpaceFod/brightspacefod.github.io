(this["webpackJsonp@shibabitcoin/interface"]=this["webpackJsonp@shibabitcoin/interface"]||[]).push([[11],{1143:function(e,t,n){"use strict";n.r(t);var i=n(8),a=n.n(i),r=n(41),c=n(58),l=n(10),s=n(13),o=n(1),u=n(28),d=n(107),b=n.n(d),j=n(741),p=n(162),x=n(276),h=n(768),g=n(87),f=n(47),O=n(60),v=n(163),m=n(108),y=n(52),w=n(24),T=n(3),k=n(82),S=n(844),C=n(132),E=n(91),A=n(92),P=n(114),B=n(845),N=n(32),M=n(42),F=n(158),L=n(31),z=n(175),H=n.n(z),I=n(703),Y=n(704),W=n(705),G=n(706),R=n(51),_=n(20),X=n(54),D=n(29),q=n(72),U=n(0);t.default=Object(u.b)((function(e){return{tokenData:e.common.tokenData}}),(function(e){return{setTokenData:function(t){return e(Object(j.a)(t))}}}))((function(){var e=Object(q.a)(),t=Object(o.useState)(!1),n=Object(s.a)(t,2),i=n[0],u=(n[1],Object(o.useState)([])),d=Object(s.a)(u,2),j=d[0],z=d[1],Q=Object(o.useState)("all"),K=Object(s.a)(Q,2),J=K[0],V=K[1],Z=Object(o.useState)(!1),$=Object(s.a)(Z,2),ee=$[0],te=$[1],ne=Object(o.useState)(!1),ie=Object(s.a)(ne,2),ae=ie[0],re=ie[1],ce=Object(o.useState)(""),le=Object(s.a)(ce,2),se=le[0],oe=le[1],ue=Object(o.useState)(!1),de=Object(s.a)(ue,2),be=de[0],je=de[1],pe=Object(o.useState)(!1),xe=Object(s.a)(pe,2),he=xe[0],ge=xe[1],fe=Object(o.useState)(!1),Oe=Object(s.a)(fe,2),ve=Oe[0],me=Oe[1],ye=Object(o.useState)(!1),we=Object(s.a)(ye,2),Te=we[0],ke=we[1],Se=function(e,t){me(!ve),t&&(setNftAddress(t.address),lt(t.tid),dt(t.detailInfo))},Ce=function(e,t){ke(!Te),t&&(lt(t.tid),dt(t.detailInfo))},Ee=Object(o.useState)(!1),Ae=Object(s.a)(Ee,2),Pe=Ae[0],Be=Ae[1];Object(o.useEffect)((function(){var e=se;if(!Pe){var t=parseInt((j.length+1)/12);Be(!0);var n={unit:12,page:t};n.search=e||"0x",n.verifiedOnly=ee,n.sortMode=ae,n.isSales=!0,b.a.get(f.a+"/tokens-search",{params:n}).then((function(e){var t=e.data.map((function(e){var t;return Object(l.a)(Object(l.a)({},e),{},{logo:null===e||void 0===e||null===(t=e.logo)||void 0===t?void 0:t.replace("ipfs/",f.b)})}));z([].concat(Object(c.a)(JSON.parse(JSON.stringify(j))),Object(c.a)(t)))})).catch((function(e){console.error("Fetch on Market error",e)})).finally((function(){ge(!1),Be(!1)}))}}),[se,be]),Object(o.useEffect)((function(){var e=!0;return e&&(ge(!0),Be(!1)),function(){e=!1}}),[]);Object(o.useEffect)((function(){z([]),je(!be)}),[ee,ae]);var Ne=Object(w.a)(),Me=Ne.account,Fe=Ne.chainId,Le=Ne.library,ze=Object(E.h)(Fe),He=Object(E.d)(Fe),Ie=Object(E.g)(Fe),Ye=Object(o.useState)(!1),We=Object(s.a)(Ye,2),Ge=We[0],Re=We[1],_e=Object(o.useState)(!1),Xe=Object(s.a)(_e,2),De=Xe[0],qe=Xe[1],Ue=Object(o.useState)(v.TokenObject.WETH.symbol),Qe=Object(s.a)(Ue,2),Ke=Qe[0],Je=Qe[1],Ve=Object(o.useState)({}),Ze=Object(s.a)(Ve,2),$e=Ze[0],et=Ze[1],tt=Object(y.b)(!!Me&&Fe===X.b&&v.TokenAssets.WETH[0],m.c),nt=Object(y.b)(!!Me&&Fe===X.b&&Ie,m.a),it=Object(m.f)(null===$e||void 0===$e?void 0:$e.address,null===$e||void 0===$e?void 0:$e.tokenType,Fe),at=Object(o.useState)(""),rt=Object(s.a)(at,2),ct=rt[0],lt=rt[1],st=Object(o.useState)({}),ot=Object(s.a)(st,2),ut=ot[0],dt=ot[1],bt=Object(N.i)(),jt=Object(o.useState)(!1),pt=Object(s.a)(jt,2),xt=pt[0],ht=pt[1],gt=Object(o.useState)(!1),ft=Object(s.a)(gt,2),Ot=ft[0],vt=ft[1],mt=Object(o.useState)(""),yt=Object(s.a)(mt,2),wt=yt[0],Tt=yt[1],kt=Object(o.useState)(!1),St=Object(s.a)(kt,2),Ct=St[0],Et=St[1],At=Object(o.useState)(!1),Pt=Object(s.a)(At,2),Bt=Pt[0],Nt=Pt[1],Mt=Object(o.useState)(""),Ft=Object(s.a)(Mt,2),Lt=Ft[0],zt=Ft[1],Ht=Object(o.useState)(!1),It=Object(s.a)(Ht,2),Yt=It[0],Wt=It[1],Gt=Object(o.useState)(0),Rt=Object(s.a)(Gt,2),_t=Rt[0],Xt=Rt[1],Dt=Object(o.useState)(0),qt=Object(s.a)(Dt,2),Ut=qt[0],Qt=qt[1],Kt=Object(o.useState)(0),Jt=Object(s.a)(Kt,2),Vt=Jt[0],Zt=Jt[1],$t=Object(o.useState)(0),en=Object(s.a)($t,2),tn=en[0],nn=en[1],an=Object(o.useState)({}),rn=Object(s.a)(an,2),cn=rn[0],ln=rn[1],sn=Object(o.useState)(!1),on=Object(s.a)(sn,2),un=on[0],dn=on[1],bn=Object(C.c)([Me]),jn=Object(C.d)(Me,!!Me&&v.TokenObject.WETH),pn=Object(o.useMemo)((function(){var e,t;return bn&&Me&&bn[Me]?L.a.utils.formatUnits(null===(e=bn[Me].numerator)||void 0===e?void 0:e.toString(),null===(t=bn[Me].currency)||void 0===t?void 0:t.decimals):0}),[bn,Me]),xn=Object(o.useMemo)((function(){var e,t;return jn?L.a.utils.formatUnits(null===jn||void 0===jn||null===(e=jn.numerator)||void 0===e?void 0:e.toString(),null===jn||void 0===jn||null===(t=jn.currency)||void 0===t?void 0:t.decimals):0}),[jn]),hn=Object(o.useMemo)(Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(jn){e.next=2;break}return e.abrupt("return",0);case 2:return e.next=4,null===it||void 0===it?void 0:it.isApprovedForAll(Me,ze);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)}))),[Me,ze]),gn=Object(S.a)(!!Me&&v.TokenObject.WETH,Me,He),fn=Object(o.useMemo)((function(){var e,t;return gn?L.a.utils.formatUnits(null===gn||void 0===gn||null===(e=gn.numerator)||void 0===e?void 0:e.toString(),null===gn||void 0===gn||null===(t=gn.currency)||void 0===t?void 0:t.decimals):0}),[gn]),On=Object(k.d)(),vn=function(e,t){Re(!Ge),t&&(et({address:t.address,tokenType:t.tokenType}),lt(t.tid),dt(t.detailInfo),Xt(v.TXTYPE.PLACE_BID),Je(v.TokenObject.WETH.symbol),nn(0),Qt(0))},mn=function(e,t){qe(!De),t&&(et({address:t.address,tokenType:t.tokenType}),lt(t.tid),dt(t.detailInfo),Zt(t.myNFTBalance),Xt(v.TXTYPE.TRANSFER),nn(0),Qt(""))},yn=Object(o.useCallback)((function(){vt(!1),Tt("")}),[wt]),wn="0x0000000000000000000000000000000000000000"===Ut;Object(o.useEffect)(Object(r.a)(a.a.mark((function e(){var t,n,i,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={},xn,e.t0=!!Me,e.next=e.t0===(_t===v.TXTYPE.PUT_ON_SALE)?5:e.t0===(_t===v.TXTYPE.PLACE_BID)?9:e.t0===(_t===v.TXTYPE.BUY_NOW)?14:e.t0===(_t===v.TXTYPE.SELL_NOW)?19:e.t0===(_t===v.TXTYPE.TRANSFER)?29:33;break;case 5:return 1*tn!==parseInt(tn)&&(t.quantity="Quantity invalid"),(1*tn<=0||1*tn>1*(null===ut||void 0===ut?void 0:ut.supply))&&(t.quantity="Quantity invalid"),1*Ut<=0&&(t.payAmount="Pay amount invalid"),e.abrupt("break",35);case 9:return 1*tn!==parseInt(tn)&&(t.quantity="Quantity invalid"),(1*tn<=0||1*tn>1*(null===ut||void 0===ut?void 0:ut.supply))&&(t.quantity="Quantity invalid"),1*Ut<=0&&(t.payAmount="Pay amount invalid"),1*xn<Ut*tn*(1+v.sellerFee/1e4)&&(t.payAmount="Pay amount invalid"),e.abrupt("break",35);case 14:return 1*tn!==parseInt(tn)&&(t.quantity="Quantity invalid"),(1*tn<=0||1*tn>1*(null===ut||void 0===ut?void 0:ut.supply))&&(t.quantity="Quantity invalid"),1*Ut<=0&&(t.payAmount="Pay amount invalid"),1*xn+1*pn<=Ut*tn*(1+v.sellerFee/1e4)&&(t.payAmount="Pay amount invalid"),e.abrupt("break",35);case 19:return 1*tn!==parseInt(tn)&&(t.quantity="Quantity invalid"),(1*tn<=0||1*tn>1*(null===ut||void 0===ut?void 0:ut.supply))&&(t.quantity="Quantity invalid"),n=sellOrderData.owner,e.next=24,tt.balanceOf(n);case 24:return i=e.sent,r=L.a.utils.formatUnits(i.toString(),18),setBuyerWbnbBalance(r),1*r<Ut*tn*(1+v.sellerFee/1e4)&&(t.quantity="Buyer balance insufficient"),e.abrupt("break",35);case 29:return 1*tn!==parseInt(tn)&&(t.quantity="Quantity invalid"),(1*tn<=0||1*tn>1*Vt)&&(t.quantity="Quantity insufficient"),Object(R.b)(Ut)||(t.payAmount="Address format invalid"),e.abrupt("break",35);case 33:return t={error:"Condition error"},e.abrupt("break",35);case 35:Object.keys(t).length>0?Wt(!1):Wt(!0),ln(t);case 37:case"end":return e.stop()}}),e)}))),[Ut,tn,_t]);var Tn=function(){var e=Object(r.a)(a.a.mark((function e(t,n){var i,r,c,l,o,u,d,b,j,p,x,h,g,f,O,y,w,T,k,S,C,E,A,P,B,N,M,F,z,I,Y,W;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.ethers=L.a,!xt){e.next=3;break}return e.abrupt("return");case 3:Tt(""),Et(!0),vt(!0),Nt(!0),ht(!0),e.prev=8,e.t0=t,e.next=e.t0===v.TXTYPE.LIKE||e.t0===v.TXTYPE.PUT_ON_MARKET?12:e.t0===v.TXTYPE.APPROVE_ALL?26:e.t0===v.TXTYPE.PUT_ON_SALE?47:e.t0===v.TXTYPE.PLACE_BID?61:e.t0===v.TXTYPE.DEPOSIT?75:e.t0===v.TXTYPE.SELL_NOW?96:e.t0===v.TXTYPE.BUY_NOW?120:e.t0===v.TXTYPE.CANCEL?147:e.t0===v.TXTYPE.TRANSFER?160:191;break;case 12:return p={owner:Me,creator:null===ut||void 0===ut?void 0:ut.owner,tokenId:ct},i=L.a.utils.keccak256(L.a.utils.defaultAbiCoder.encode(["string"],[p.tokenId])).slice(2),e.next=16,Le.getSigner(Me).signMessage(i);case 16:if(l=e.sent){e.next=24;break}return Nt(!1),Tt(""),zt("Cancelled to ".concat(t===v.TXTYPE.PUT_ON_MARKET?"put on market":"like this token",".")),ht(!1),vt(!0),e.abrupt("return");case 24:return bt.post("/publish-token",{item:p,rawSig:l}).then((function(e){dn(!un),vt(!0),Et(!1),ht(!1),Tt(""),zt("".concat(t===v.TXTYPE.PUT_ON_MARKET?"Putting on market":"Liking this token"," have done."))})),e.abrupt("break",192);case 26:return e.next=28,Le.getGasPrice().then((function(e){return e.mul(L.a.BigNumber.from(150)).div(L.a.BigNumber.from(100))}));case 28:return u=e.sent,e.next=31,null===it||void 0===it?void 0:it.estimateGas.setApprovalForAll(ze,!0);case 31:return o=e.sent,e.next=34,null===it||void 0===it?void 0:it.setApprovalForAll(ze,!0,{gasLimit:Object(v.calculateGasMargin)(o,v.GAS_MARGIN),gasPrice:u});case 34:if(d=e.sent,j="Approve ".concat(null===ut||void 0===ut?void 0:ut.name," for Put On Sale"),!d){e.next=46;break}return Et(!1),Tt(d.hash),On(d,{summary:j}),e.next=42,d.wait();case 42:b=e.sent,Boolean(b.status)?(dn(!un),Tt(""),zt("Approve have done successfully.")):(Nt(!1),Tt(""),zt("Approve failed.")),ht(!1),vt(!0);case 46:return e.abrupt("break",192);case 47:return r=[[Me,H()().unix(),[null===$e||void 0===$e?void 0:$e.address,ct,2],v.TokenAssets[Ke]],tn,L.a.utils.parseUnits((Ut*tn).toString(),18).toString(),v.sellerFee],c=L.a.utils.keccak256(L.a.utils.defaultAbiCoder.encode([m.b],[r])).slice(2),e.next=51,Le.getSigner(Me).signMessage(c);case 51:if(l=e.sent){e.next=59;break}return Nt(!1),Tt(""),zt("Failed to put on market."),ht(!1),vt(!0),e.abrupt("return");case 59:return bt.post("/put-on-sale",{signedMessageForSell:l,order:r,buyerFee:v.buyerFee},{headers:{"Content-Type":"application/json"}}).then((function(e){dn(!un),vt(!0),Et(!1),ht(!1),Tt(""),zt("Putting on market have done.")})),e.abrupt("break",192);case 61:return r=[[Me,H()().unix(),v.TokenAssets[Ke],[null===$e||void 0===$e?void 0:$e.address,ct,2]],L.a.utils.parseUnits((Ut*tn).toString(),18).toString(),tn,v.sellerFee],c=L.a.utils.keccak256(L.a.utils.defaultAbiCoder.encode([m.b],[r])).slice(2),e.next=65,Le.getSigner(Me).signMessage(c);case 65:if(l=e.sent){e.next=73;break}return Nt(!1),Tt(""),zt("Cancelled to put on market."),ht(!1),vt(!0),e.abrupt("return");case 73:return bt.post("/put-on-sale",{signedMessageForSell:l,order:r,buyerFee:v.buyerFee},{headers:{"Content-Type":"application/json"}}).then((function(e){dn(!un),vt(!0),Et(!1),ht(!1),Tt(""),zt("Place bid have done.")})),e.abrupt("break",192);case 75:return e.next=77,Le.getGasPrice().then((function(e){return e.mul(L.a.BigNumber.from(150)).div(L.a.BigNumber.from(100))}));case 77:return u=e.sent,e.next=80,tt.estimateGas.approve(He,v.maxHex);case 80:return o=e.sent,e.next=83,tt.approve(He,v.maxHex,{gasLimit:Object(v.calculateGasMargin)(o,v.GAS_MARGIN),gasPrice:u});case 83:if(d=e.sent,j="Deposit for buying ".concat(null===ut||void 0===ut?void 0:ut.name),!d){e.next=95;break}return Et(!1),Tt(d.hash),On(d,{summary:j}),e.next=91,d.wait();case 91:b=e.sent,Boolean(b.status)?(dn(!un),Tt(""),zt("Deposit have done successfully.")):(Nt(!1),Tt(""),zt("Deposit failed.")),ht(!1),vt(!0);case 95:return e.abrupt("break",192);case 96:return x=sellOrderData.sale,h=x.buyerFeeSig,g=x.sig,f=x.order,O=Object(s.a)(f,3),y=O[1],w=O[2],T=BigNumber.from(y).div(w).mul(tn),e.next=101,Le.getGasPrice().then((function(e){return e.mul(L.a.BigNumber.from(150)).div(L.a.BigNumber.from(100))}));case 101:return u=e.sent,e.next=104,nt.estimateGas.exchange(f,[g.v,g.r,g.s],v.buyerFee,[h.v,h.r,h.s],T,Me);case 104:return o=e.sent,e.next=107,nt.exchange(f,[g.v,g.r,g.s],v.buyerFee,[h.v,h.r,h.s],T,Me,{gasLimit:Object(v.calculateGasMargin)(o,v.GAS_MARGIN),gasPrice:u});case 107:if(d=e.sent,j="Sell now for ".concat(null===ut||void 0===ut?void 0:ut.name),!d){e.next=119;break}return Et(!1),Tt(d.hash),On(d,{summary:j}),e.next=115,d.wait();case 115:b=e.sent,Boolean(b.status)?(dn(!un),Tt(""),zt("Selling ".concat(null===ut||void 0===ut?void 0:ut.name," have done successfully."))):(Nt(!1),Tt(""),zt("Selling failed.")),ht(!1),vt(!0);case 119:return e.abrupt("break",192);case 120:return S=buyOrderData.sale,C=S.buyerFeeSig,E=S.sig,A=S.order,P=Object(s.a)(A,3),B=P[1],N=P[2],M=BigNumber.from(N).div(B).mul(tn),F=M.mul(v.buyerFee).div(1e4),z=M.add(F),Ke===(null===(k=v.TokenObject.WETH)||void 0===k?void 0:k.symbol)&&(z="0x0"),e.next=128,Le.getGasPrice().then((function(e){return e.mul(L.a.BigNumber.from(150)).div(L.a.BigNumber.from(100))}));case 128:return u=e.sent,e.next=131,nt.estimateGas.exchange(A,[E.v,E.r,E.s],v.buyerFee,[C.v,C.r,C.s],tn,Me,{from:Me,value:z});case 131:return o=e.sent,e.next=134,nt.exchange(A,[E.v,E.r,E.s],v.buyerFee,[C.v,C.r,C.s],tn,Me,{from:Me,value:z,gasLimit:Object(v.calculateGasMargin)(o,v.GAS_MARGIN),gasPrice:u});case 134:if(d=e.sent,j="Buy now for ".concat(null===ut||void 0===ut?void 0:ut.name),!d){e.next=146;break}return Et(!1),Tt(d.hash),On(d,{summary:j}),e.next=142,d.wait();case 142:b=e.sent,Boolean(b.status)?(dn(!un),Tt(""),zt("Buying ".concat(null===ut||void 0===ut?void 0:ut.name," have done successfully."))):(Nt(!1),Tt(""),zt("Buying failed.")),ht(!1),vt(!0);case 146:return e.abrupt("break",192);case 147:return I=L.a.utils.keccak256(L.a.utils.defaultAbiCoder.encode(["string"],[n])).slice(2),e.next=150,Le.getSigner(Me).signMessage(I);case 150:if(l=e.sent){e.next=158;break}return Nt(!1),Tt(""),zt("Cancelling failed."),ht(!1),vt(!0),e.abrupt("return");case 158:return bt.post("/cancel-order",{_id:n,rawSig:l}).then((function(e){dn(!un),vt(!0),Et(!1),ht(!1),Tt(""),zt("Action cancelled successfully.")})),e.abrupt("break",192);case 160:return e.next=162,Le.getGasPrice().then((function(e){return e.mul(L.a.BigNumber.from(150)).div(L.a.BigNumber.from(100))}));case 162:if(u=e.sent,!wn){e.next=173;break}return e.next=166,null===it||void 0===it?void 0:it.estimateGas.burn(Me,ct+"",tn+"");case 166:return o=e.sent,e.next=169,null===it||void 0===it?void 0:it.burn(Me,ct+"",tn+"",{gasLimit:Object(v.calculateGasMargin)(o,v.GAS_MARGIN),gasPrice:u});case 169:d=e.sent,j="Burn ".concat(tn," of ").concat(null===ut||void 0===ut?void 0:ut.name),e.next=180;break;case 173:return e.next=175,null===it||void 0===it?void 0:it.estimateGas.safeTransferFrom(Me,Ut,ct+"",tn+"",[]);case 175:return o=e.sent,e.next=178,null===it||void 0===it?void 0:it.safeTransferFrom(Me,Ut,ct+"",tn+"",[],{gasLimit:Object(v.calculateGasMargin)(o,v.GAS_MARGIN),gasPrice:u});case 178:d=e.sent,j="Transfer ".concat(tn," of ").concat(null===ut||void 0===ut?void 0:ut.name," to ").concat(Ut);case 180:if(!d){e.next=190;break}return Et(!1),Tt(d.hash),On(d,{summary:j}),e.next=186,d.wait();case 186:b=e.sent,Boolean(b.status)?(dn(!un),Tt(""),zt("".concat(wn?"Burn":"Transfer"," have done successfully."))):(Nt(!1),Tt(""),zt("".concat(wn?"Burn":"Transfer"," failed."))),ht(!1),vt(!0);case 190:case 191:return e.abrupt("break",192);case 192:e.next=203;break;case 194:e.prev=194,e.t1=e.catch(8),console.error("Tx / SignMessage error",e.t1),zt((null===(Y=e.t1.data)||void 0===Y?void 0:Y.message)?null===(W=e.t1.data)||void 0===W?void 0:W.message:null===e.t1||void 0===e.t1?void 0:e.t1.message),vt(!0),ht(!1),Et(!1),Nt(!1),Tt("");case 203:case"end":return e.stop()}}),e,null,[[8,194]])})));return function(t,n){return e.apply(this,arguments)}}(),kn="".concat(window.location.origin,"/#/token/").concat(null===$e||void 0===$e?void 0:$e.address,"/").concat(null===$e||void 0===$e?void 0:$e.tokenType,"/").concat(ct);return Object(U.jsxs)(p.c,{children:[Object(U.jsx)(x.a,{tokens:null===j||void 0===j?void 0:j.filter((function(e){return!J.startsWith("image")&&"video"!==J||e.type===J})),media:J,setMedia:V,setVerflag:te,setSearchdata:oe,onSearchButtonClick:function(){z([]),je(!be)},tokenloading:he,verflag:ee,setSortflag:re,onBidModal:vn,onTransferModal:mn,onBurnModal:function(e,t){qe(!De),t&&(et({address:t.address,tokenType:t.tokenType}),lt(t.tid),dt(t.detailInfo),Zt(t.myNFTBalance),Xt(v.TXTYPE.TRANSFER),nn(0),Qt("0x0000000000000000000000000000000000000000"))},showModal:Se,reportModal:Ce,onLikeAction:function(e,t){t.tid&&(et({address:t.address,tokenType:t.tokenType}),lt(t.tid),dt(t.detailInfo),Tn(v.TXTYPE.LIKE))}}),Object(U.jsx)("div",{style:{display:"flex",width:"100%",justifyContent:"center",margin:"20px 0 40px"},children:Object(U.jsxs)(h.a,{onClick:function(){je(!be)},toggle:!i,children:[!Pe&&"Load More",!!Pe&&Object(U.jsxs)(U.Fragment,{children:["Loading\xa0",Object(U.jsx)(_.b,{size:"20px",className:"wait-loading-div"})]})]})}),Object(U.jsxs)(O.a,{visible:ve,onClick:Se,width:"auto",align:"unset",children:[Object(U.jsx)(T.c,{style:{paddingTop:10},children:Object(U.jsx)(T.h,{children:"Share NFT"})}),Object(U.jsxs)(T.c,{direction:"column",margin:"20px 30px",children:[Object(U.jsxs)(T.i,{fontSize:"32px",padding:"30px 28px 0",lineHeight:1.2,children:[null===ut||void 0===ut?void 0:ut.name," #",Object(D.f)(ct)]}),Object(U.jsxs)(T.c,{padding:"0px 28px 10px",wrap:"wrap",justify:"space-around",margin:"15px 0 0 0",children:[Object(U.jsx)(T.l,{children:Object(U.jsxs)(I.a,{title:null===ut||void 0===ut?void 0:ut.name,url:kn,windowWidth:750,windowHeight:600,style:{alignItems:"center",flexDirection:"column",display:"flex"},children:[Object(U.jsx)(g.a,{width:"58px",height:"58px",children:Object(U.jsx)("svg",{viewBox:"0 0 18 16",fill:"none",width:"18.48",height:"18.48",xlmns:"http://www.w3.org/2000/svg",children:Object(U.jsx)("path",{d:"M17.9655 2.42676C17.3018 2.71851 16.593 2.91726 15.8468 3.00801C16.6073 2.54976 17.1922 1.82751 17.469 0.965759C16.7558 1.38201 15.9653 1.68501 15.1238 1.85376C14.4518 1.13451 13.494 0.684509 12.4305 0.684509C10.3927 0.684509 8.7405 2.33676 8.7405 4.37226C8.7405 4.66476 8.77425 4.94601 8.83575 5.21526C5.76825 5.07051 3.0495 3.59751 1.23 1.37076C0.90975 1.91226 0.7305 2.54151 0.7305 3.22701C0.7305 4.50951 1.383 5.63676 2.3715 6.29901C1.76625 6.27951 1.197 6.11301 0.7005 5.83701V5.88276C0.7005 7.67151 1.97025 9.16326 3.66 9.50301C3.35025 9.58626 3.02325 9.63126 2.688 9.63126C2.4525 9.63126 2.22675 9.60876 2.001 9.56676C2.47425 11.0315 3.83475 12.0995 5.454 12.1295C4.194 13.1188 2.59725 13.7083 0.8775 13.7083C0.585 13.7083 0.29325 13.691 0 13.658C1.64175 14.7035 3.576 15.3148 5.66775 15.3148C12.4583 15.3148 16.167 9.69276 16.167 4.82526C16.167 4.66851 16.167 4.51026 16.1558 4.35276C16.8765 3.83601 17.5057 3.18276 18.0007 2.44176L17.9655 2.42676Z",fill:e.bg1})})}),"Twitter"]})}),Object(U.jsx)(T.l,{children:Object(U.jsxs)(Y.a,{quote:null===ut||void 0===ut?void 0:ut.name,url:kn,windowWidth:750,windowHeight:600,style:{alignItems:"center",flexDirection:"column",display:"flex"},children:[Object(U.jsx)(g.a,{width:"58px",height:"58px",children:Object(U.jsx)("svg",{viewBox:"0 0 24 24",width:"18.48",height:"18.48",xlmns:"http://www.w3.org/2000/svg",children:Object(U.jsx)("path",{d:"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z",fill:e.bg1})})}),"Facebook"]})}),Object(U.jsx)(T.l,{children:Object(U.jsxs)(W.a,{title:null===ut||void 0===ut?void 0:ut.name,url:kn,windowWidth:750,windowHeight:600,style:{alignItems:"center",flexDirection:"column",display:"flex"},children:[Object(U.jsx)(g.a,{width:"58px",height:"58px",children:Object(U.jsx)("svg",{viewBox:"0 0 16 14",fill:"none",width:"18.48",height:"18.48",xlmns:"http://www.w3.org/2000/svg",children:Object(U.jsx)("path",{d:"M15.9513 1.29916L13.5438 13.1556C13.377 13.997 12.8902 14.1987 12.21 13.8093L8.542 10.979L6.76804 12.7662C6.56797 12.9748 6.40125 13.1556 6.03445 13.1556C5.55428 13.1556 5.63431 12.9679 5.47425 12.495L4.20714 8.19051L0.572523 7.00834C-0.214421 6.76495 -0.22109 6.20168 0.745918 5.7914L14.9243 0.0891779C15.5711 -0.209841 16.1914 0.256072 15.9446 1.29221L15.9513 1.29916Z",fill:e.bg1})})}),"Telegram"]})}),Object(U.jsx)(T.l,{children:Object(U.jsxs)(G.a,{subject:null===ut||void 0===ut?void 0:ut.name,body:"".concat(null===ut||void 0===ut?void 0:ut.name,": ").concat(null===ut||void 0===ut?void 0:ut.image),url:kn,windowWidth:750,windowHeight:600,style:{alignItems:"center",flexDirection:"column",display:"flex"},children:[Object(U.jsx)(g.a,{width:"58px",height:"58px",children:Object(U.jsx)("svg",{viewBox:"0 0 24 24",width:"18.48",height:"18.48",xlmns:"http://www.w3.org/2000/svg",children:Object(U.jsx)("path",{d:"M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z",fill:e.bg1})})}),"E-mail"]})})]})]})]}),Object(U.jsxs)(O.a,{visible:Te,onClick:Ce,width:"320px",height:"380px",children:[Object(U.jsx)(T.c,{style:{paddingTop:10},children:Object(U.jsx)(T.h,{children:"Why are you reporting?"})}),Object(U.jsxs)(T.c,{direction:"column",padding:"10px 28px 28px",children:[Object(U.jsx)(T.c,{width:"100%",children:Object(U.jsx)(T.i,{fontSize:"14px",align:"left",width:"100%",color:O.b.labels,children:"Describe why you think this item should be removed from marketplace"})}),Object(U.jsx)(T.c,{width:"100%",children:Object(U.jsx)(T.i,{fontSize:"17px",align:"left",width:"100%",margin:"20px 0px 0px",children:"Message"})}),Object(U.jsxs)(T.c,{direction:"column",margin:"20px 0px 0px",align:"left",width:"100%",children:[Object(U.jsx)(A.c,{children:Object(U.jsx)("input",{placeholder:"Tell us some details"})}),Object(U.jsxs)(T.c,{children:[Object(U.jsx)(M.a,{variant:"lightBlue",margin:"16px 0px 0px",width:"100%",height:"48px",children:"Report"}),Object(U.jsx)(M.a,{variant:"blue",margin:"16px 0px 0px",width:"100%",height:"48px",onClick:function(){Ce()},children:"Cancel"})]})]})]})]}),Object(U.jsxs)(O.a,{visible:Ge,onClick:vn,width:"320px",children:[Object(U.jsx)(T.c,{style:{paddingTop:10},children:Object(U.jsx)(T.h,{children:"Place a Bid"})}),Object(U.jsxs)(T.c,{direction:"column",padding:"10px 28px 28px",children:[Object(U.jsx)(T.c,{width:"100%",children:Object(U.jsxs)(T.i,{fontSize:"15px",align:"left",width:"100%",children:["You are about to place a bid for ",null===ut||void 0===ut?void 0:ut.name," #",Object(D.f)(ct)]})}),Object(U.jsx)(T.c,{width:"100%",children:Object(U.jsx)(T.i,{fontSize:"19px",align:"left",width:"100%",margin:"20px 0px 0px",children:"Your Bid"})}),Object(U.jsxs)(T.c,{direction:"column",margin:"16px 0px 0px",minHeight:"48px",align:"left",width:"100%",children:[Object(U.jsxs)(A.c,{style:{borderBottomColor:cn.quantity?O.b.inputError:O.b.inputNormal},children:[Object(U.jsx)("input",{placeholder:"Enter quantity",type:"number",value:tn,onChange:function(e){return nn(e.target.value)}}),Object(U.jsx)(T.i,{margin:"0px 0px 4px",align:"left",fontSize:"14px",lineHeight:"23.46px",color:O.b.labels,whiteSpace:"nowrap",children:f.c})]}),Object(U.jsxs)(T.i,{align:"left",margin:"5px 0px 0px",fontSize:"15px",lineHeight:"20.7px",fontWeight:"500",color:O.b.labels,children:["Enter quantity. ",null===ut||void 0===ut?void 0:ut.supply," available"]})]}),Object(U.jsxs)(T.c,{direction:"column",margin:"20px 0px 0px",align:"left",width:"100%",children:[Object(U.jsxs)(A.c,{style:{borderBottomColor:cn.payAmount?O.b.inputError:O.b.inputNormal},children:[Object(U.jsx)("input",{placeholder:"Enter bid",type:"number",value:Ut,onChange:function(e){return Qt(e.target.value)}}),Object(U.jsxs)(P.c,{list:B.a,click:function(e){Je(e.label)},children:[Object(U.jsx)("span",{style:{fontSize:14,marginRight:5},children:Ke}),Object(U.jsx)("svg",{viewBox:"0 0 11 7",fill:"none",width:"14",height:"14",xlmns:"http://www.w3.org/2000/svg",children:Object(U.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.00146 6.41431L9.70857 1.7072C10.0991 1.31668 10.0991 0.683511 9.70857 0.292986C9.31805 -0.097538 8.68488 -0.097538 8.29436 0.292986L5.00146 3.58588L1.70857 0.292986C1.31805 -0.097538 0.684882 -0.097538 0.294358 0.292986C-0.0961662 0.68351 -0.0961662 1.31668 0.294358 1.7072L5.00146 6.41431Z",fill:"currentColor"})})]})]}),Object(U.jsxs)(T.c,{justify:"space-between",margin:"15px 0px 0px",children:[Object(U.jsx)(T.i,{align:"left",fontSize:"14px",lineHeight:"20.7px",fontWeight:"500",color:O.b.labels,children:"Your Bidding Balance"}),Object(U.jsxs)(T.i,{align:"left",fontSize:"14px",lineHeight:"20.7px",fontWeight:"500",children:[Ke===v.TokenObject.ETH.symbol?Object(N.b)(pn):Object(N.b)(xn)," ",Ke]})]}),Object(U.jsxs)(T.c,{justify:"space-between",margin:"4px 0px 0px",children:[Object(U.jsx)(T.i,{align:"left",fontSize:"14px",lineHeight:"20.7px",fontWeight:"500",color:O.b.labels,children:"Your balance"}),Object(U.jsxs)(T.i,{align:"left",fontSize:"14px",lineHeight:"20.7px",fontWeight:"500",children:[Object(N.b)(xn,4)," ",Ke]})]}),Object(U.jsxs)(T.c,{justify:"space-between",margin:"4px 0px 0px",children:[Object(U.jsx)(T.i,{align:"left",fontSize:"14px",lineHeight:"20.7px",fontWeight:"500",color:O.b.labels,children:"Service fee"}),Object(U.jsxs)(T.i,{align:"left",fontSize:"14px",lineHeight:"20.7px",fontWeight:"500",children:[Object(N.b)(Ut*tn*(v.sellerFee/1e4),4)," ",Ke]})]}),Object(U.jsxs)(T.c,{justify:"space-between",margin:"4px 0px 0px",children:[Object(U.jsx)(T.i,{align:"left",fontSize:"14px",lineHeight:"20.7px",fontWeight:"500",color:O.b.labels,children:"Total bid amount"}),Object(U.jsxs)(T.i,{align:"left",fontSize:"14px",lineHeight:"20.7px",fontWeight:"500",children:[Object(N.b)(Ut*tn*(1+v.sellerFee/1e4),4)," ",Ke]})]}),Object(U.jsx)(T.c,{margin:"16px 0px 0px",width:"100%",children:Object(U.jsx)(M.a,{variant:hn?"blue":"lightBlue",width:"100%",disabled:hn,onClick:function(){Tn(v.TXTYPE.APPROVE_ALL)},children:"Approve"})}),Object(U.jsx)(T.c,{margin:"8px 0px 0px",width:"100%",children:Object(U.jsx)(M.a,{variant:1*fn>tn*Ut?"blue":"lightBlue",width:"100%",disabled:1*fn>tn*Ut,onClick:function(){Tn(v.TXTYPE.DEPOSIT)},children:"Deposit"})}),Object(U.jsx)(T.c,{margin:"8px 0px 0px",width:"100%",children:Object(U.jsx)(M.a,{variant:Yt?"lightBlue":"blue",width:"100%",disabled:!Yt,onClick:function(){Tn(v.TXTYPE.PLACE_BID)},children:"Place a Bid"})})]})]})]}),Object(U.jsxs)(O.a,{visible:De,onClick:mn,width:"350px",children:[Object(U.jsx)(T.c,{style:{paddingTop:10},children:Object(U.jsxs)(T.h,{children:[wn?"Burn":"Transfer"," NFT"]})}),Object(U.jsxs)(T.c,{direction:"column",padding:"10px 28px 28px",children:[Object(U.jsx)(T.c,{children:Object(U.jsxs)(T.i,{fontSize:"15px",align:"left",children:["You are about to ",wn?"burn":"transfer"," ",null===ut||void 0===ut?void 0:ut.name," #",Object(D.f)(ct)]})}),!wn&&Object(U.jsx)(T.c,{direction:"column",margin:"16px 0px 0px",minHeight:"48px",align:"left",width:"100%",children:Object(U.jsxs)(A.c,{style:{borderBottomColor:cn.payAmount?O.b.inputError:O.b.inputNormal},children:[Object(U.jsx)("input",{placeholder:"Enter Receiver Address",type:"text",value:Ut,onChange:function(e){return Qt(e.target.value)}}),Object(U.jsx)(T.i,{margin:"0px 0px 4px",align:"left",fontSize:"14px",lineHeight:"23.46px",color:O.b.labels,children:Object(U.jsxs)("svg",{viewBox:"0 0 512 512",width:"14",height:"14",xlmns:"http://www.w3.org/2000/svg",children:[Object(U.jsx)("path",{d:"m399.7,460.2h-287.4v-215.6h287.3v215.6h0.1zm-234-318c0-49.8 40.5-90.3 90.3-90.3 49.8,0 90.3,40.5 90.3,90.3v61.6h-180.6v-61.6zm254.4,61.6h-32.9v-61.6c-5.68434e-14-72.4-58.9-131.2-131.2-131.2-72.3,0-131.2,58.8-131.2,131.2v61.6h-32.9c-11.3,0-20.4,9.1-20.4,20.4v256.4c0,11.3 9.1,20.4 20.4,20.4h328.1c11.3,0 20.4-9.1 20.4-20.4v-256.4c0.1-11.3-9.1-20.4-20.3-20.4z",fill:O.b.labels}),Object(U.jsx)("path",{d:"m256,420c11.3,0 20.4-9.1 20.4-20.4v-36.7c0-11.3-9.1-20.4-20.4-20.4s-20.4,9.1-20.4,20.4v36.7c2.84217e-14,11.2 9.1,20.4 20.4,20.4z",fill:O.b.labels})]})})]})}),Object(U.jsxs)(T.c,{direction:"column",margin:"16px 0px 0px",align:"left",width:"100%",children:[Object(U.jsxs)(A.c,{style:{borderBottomColor:cn.quantity?O.b.inputError:O.b.inputNormal},children:[Object(U.jsx)("input",{placeholder:"Enter Amount",type:"number",value:tn,onChange:function(e){return nn(e.target.value)}}),Object(U.jsx)(T.i,{margin:"0px 0px 4px",align:"left",fontSize:"14px",lineHeight:"23.46px",color:O.b.labels,whiteSpace:"nowrap",children:f.c})]}),Object(U.jsxs)(T.i,{align:"left",margin:"5px 0px 0px",fontSize:"15px",lineHeight:"20.7px",fontWeight:"500",color:O.b.labels,children:["Enter quantity. ",Vt," available"]}),Object(U.jsxs)(T.c,{justify:"space-between",margin:"16px 0px 0px",children:[Object(U.jsx)(T.i,{align:"left",fontSize:"14px",lineHeight:"20.7px",fontWeight:"500",color:O.b.labels,children:"Your NFT balance"}),Object(U.jsx)(T.i,{align:"left",fontSize:"14px",lineHeight:"20.7px",fontWeight:"500",children:Vt})]}),Object(U.jsx)(T.c,{margin:"16px 0px 0px",children:Object(U.jsx)(M.a,{variant:Yt?"lightBlue":"blue",width:"100%",disabled:!Yt,onClick:function(){Tn(v.TXTYPE.TRANSFER)},children:wn?"Burn":"Transfer"})})]})]})]}),Object(U.jsx)(F.c,{isOpen:Ot,onDismiss:yn,attemptingTxn:Ct,hash:wt,content:function(){return Object(U.jsx)(F.b,{title:"Confirmation",onDismiss:yn,topContent:function(){return Object(U.jsx)(U.Fragment,{})},bottomContent:function(){return Object(U.jsx)("div",{style:{whiteSpace:"pre-line"},children:Bt?"".concat(Lt):"Action failed!: \n\n".concat(Lt)})}})},pendingText:"Action is pending."})]})}))},741:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(131),a=function(e){return{type:i.h,payload:e}}},768:function(e,t,n){"use strict";var i,a,r=n(7),c=n(19),l=(n(1),n(4)),s=n(73),o=n(0),u=Object(l.default)(s.c)(i||(i=Object(r.a)(["\n  visibility: ",";\n\n  max-width: 300px;\n  border-radius: 50px;\n\n  // :before {\n  //   content: '';\n  //   position: absolute;\n  //   inset: 0px;\n  //   z-index: -1;\n  //   margin: 2px;\n  //   border-radius: inherit;\n  //   background: linear-gradient(\n  //     to right,\n  //     ",",\n  //     ",",\n  //     ","\n  //   );\n  //   background-blend-mode: difference;\n  // }\n"])),(function(e){return e.toggle?"visible":"hidden"}),(function(e){var t=e.theme;return Object(c.b)(.5,t.primary1)}),(function(e){var t=e.theme;return Object(c.b)(.5,t.primary2)}),(function(e){var t=e.theme;return Object(c.b)(.5,t.primary3)}));l.default.div(a||(a=Object(r.a)(["\n"])));t.a=function(e){var t=e.onClick,n=e.toggle,i=e.children;return Object(o.jsx)(u,{onClick:t,toggle:n,children:i})}},844:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var i=n(14),a=n(1),r=n(34),c=n(52);function l(e,t,n){var l=Object(c.h)(null===e||void 0===e?void 0:e.address,!1),s=Object(a.useMemo)((function(){return[t,n]}),[t,n]),o=Object(r.c)(l,"allowance",s).result;return Object(a.useMemo)((function(){return e&&o?i.a.fromRawAmount(e,o.toString()):void 0}),[e,o])}},845:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a}));var i=[{id:1,label:"WETH"}],a=[{id:2,label:"WETH"},{id:1,label:"ETH"}]}}]);