(this["webpackJsonp@shibabitcoin/interface"]=this["webpackJsonp@shibabitcoin/interface"]||[]).push([[13],{1145:function(n,e,t){"use strict";t.r(e);var i=t(58),a=t(10),r=t(8),o=t.n(r),c=t(41),l=t(13),d=t(1),s=t.n(d),u=t(76),b=t(46),p=t(728),x=t(42),h=t(87),j=t(51),f=t(24),v=t(117),g=t(32),m=t(47),O=t(86),w=t(158),y=t(108),k=t(52),T=t(132),C=t(82),S=t(163),E=t(60),N=t(3),L=t(92),A=t(31),z=t(703),I=t(704),B=t(705),M=t(706),P=t(20),F=t(29),Y=t(215),_=t(739),R=t(276),H=t(768),D=t(107),X=t.n(D),q=t(71),U=t(141),W=t(27),G=t(72),Q=t(0);e.default=function(n){var e,t,r=Object(G.a)(),D=Object(u.i)().id,K=Object(f.a)(),J=K.account,V=K.library,Z=K.chainId,$=s.a.useRef(null),nn=Object(d.useState)(!1),en=Object(l.a)(nn,2),tn=en[0],an=en[1],rn=Object(d.useState)(!1),on=Object(l.a)(rn,2),cn=on[0],ln=on[1],dn=Object(d.useState)(0),sn=Object(l.a)(dn,2),un=sn[0],bn=sn[1],pn=null===(e=Object(g.j)("".concat(m.a,"/collections/getInfo"),{address:D},cn))||void 0===e?void 0:e.data,xn=null===pn||void 0===pn?void 0:pn.creator,hn=(null===xn||void 0===xn?void 0:xn.toLowerCase())===(null===J||void 0===J?void 0:J.toLowerCase()),jn=null===U.DEFAULT_COLLECTION||void 0===U.DEFAULT_COLLECTION?void 0:U.DEFAULT_COLLECTION.filter((function(n){var e,t;return(null===(e=n.address)||void 0===e?void 0:e.toLowerCase())===(null===pn||void 0===pn||null===(t=pn.address)||void 0===t?void 0:t.toLowerCase())}));(null===jn||void 0===jn||null===(t=jn[0])||void 0===t?void 0:t.image)&&(null===pn||void 0===pn?void 0:pn.address)&&(pn.logo=jn[0].image);var fn={address:null===pn||void 0===pn?void 0:pn.address,tokenType:null===pn||void 0===pn?void 0:pn.type},vn=Object(d.useState)(!1),gn=Object(l.a)(vn,2),mn=gn[0],On=gn[1],wn=Object(d.useState)(!1),yn=Object(l.a)(wn,2),kn=yn[0],Tn=yn[1],Cn=function(n,e){On(!mn),e&&(Pn(e.tid),Rn(e.detailInfo))},Sn=Object(d.useState)(!1),En=Object(l.a)(Sn,2),Nn=En[0],Ln=En[1],An=Object(k.b)(S.TokenAssets.WETH[0],y.c),zn=Object(y.f)(D,null===pn||void 0===pn?void 0:pn.type,Z),In=Object(d.useState)(""),Bn=Object(l.a)(In,2),Mn=Bn[0],Pn=Bn[1],Fn=Object(d.useState)({}),Yn=Object(l.a)(Fn,2),_n=Yn[0],Rn=Yn[1],Hn=Object(g.i)(),Dn=Object(d.useState)(!1),Xn=Object(l.a)(Dn,2),qn=Xn[0],Un=Xn[1],Wn=Object(d.useState)(!1),Gn=Object(l.a)(Wn,2),Qn=Gn[0],Kn=Gn[1],Jn=Object(d.useState)(""),Vn=Object(l.a)(Jn,2),Zn=Vn[0],$n=Vn[1],ne=Object(d.useState)(!1),ee=Object(l.a)(ne,2),te=ee[0],ie=ee[1],ae=Object(d.useState)(!1),re=Object(l.a)(ae,2),oe=re[0],ce=re[1],le=Object(d.useState)(""),de=Object(l.a)(le,2),se=de[0],ue=de[1],be=Object(d.useState)(!1),pe=Object(l.a)(be,2),xe=pe[0],he=pe[1],je=Object(d.useState)(0),fe=Object(l.a)(je,2),ve=fe[0],ge=fe[1],me=Object(d.useState)(0),Oe=Object(l.a)(me,2),we=Oe[0],ye=Oe[1],ke=Object(d.useState)(0),Te=Object(l.a)(ke,2),Ce=Te[0],Se=Te[1],Ee=Object(d.useState)(0),Ne=Object(l.a)(Ee,2),Le=Ne[0],Ae=Ne[1],ze=Object(d.useState)({}),Ie=Object(l.a)(ze,2),Be=Ie[0],Me=Ie[1],Pe=null===pn||void 0===pn?void 0:pn.name,Fe=null===pn||void 0===pn?void 0:pn.symbol,Ye=null===pn||void 0===pn?void 0:pn.website,_e=Object(T.c)([J]),Re=Object(T.d)(J,S.TokenObject.WETH),He=Object(d.useMemo)((function(){var n,e;return _e&&J&&_e[J]?A.a.utils.formatUnits(null===(n=_e[J].numerator)||void 0===n?void 0:n.toString(),null===(e=_e[J].currency)||void 0===e?void 0:e.decimals):0}),[_e,J]),De=Object(d.useMemo)((function(){var n,e;return Re?A.a.utils.formatUnits(null===Re||void 0===Re||null===(n=Re.numerator)||void 0===n?void 0:n.toString(),null===Re||void 0===Re||null===(e=Re.currency)||void 0===e?void 0:e.decimals):0}),[Re]),Xe=Object(C.d)(),qe=function(n,e){Ln(!Nn),e&&(Pn(e.tid),Rn(e.detailInfo),Se(e.myNFTBalance),ge(S.TXTYPE.TRANSFER),Ae(0),ye(""))},Ue=Object(d.useCallback)((function(){Kn(!1),$n("")}),[Zn]),We="0x0000000000000000000000000000000000000000"===we;Object(d.useEffect)(Object(c.a)(o.a.mark((function n(){var e,t,i,a;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e={},De,n.t0=!0,n.next=n.t0===(ve===S.TXTYPE.PUT_ON_SALE)?5:n.t0===(ve===S.TXTYPE.PLACE_BID)?9:n.t0===(ve===S.TXTYPE.BUY_NOW)?14:n.t0===(ve===S.TXTYPE.SELL_NOW)?19:n.t0===(ve===S.TXTYPE.TRANSFER)?29:33;break;case 5:return 1*Le!==parseInt(Le)&&(e.quantity="Quantity invalid"),(1*Le<=0||1*Le>1*(null===_n||void 0===_n?void 0:_n.supply))&&(e.quantity="Quantity invalid"),1*we<=0&&(e.payAmount="Pay amount invalid"),n.abrupt("break",35);case 9:return 1*Le!==parseInt(Le)&&(e.quantity="Quantity invalid"),(1*Le<=0||1*Le>1*(null===_n||void 0===_n?void 0:_n.supply))&&(e.quantity="Quantity invalid"),1*we<=0&&(e.payAmount="Pay amount invalid"),1*De<we*Le*(1+S.sellerFee/1e4)&&(e.payAmount="Pay amount invalid"),n.abrupt("break",35);case 14:return 1*Le!==parseInt(Le)&&(e.quantity="Quantity invalid"),(1*Le<=0||1*Le>1*(null===_n||void 0===_n?void 0:_n.supply))&&(e.quantity="Quantity invalid"),1*we<=0&&(e.payAmount="Pay amount invalid"),1*De+1*He<=we*Le*(1+S.sellerFee/1e4)&&(e.payAmount="Pay amount invalid"),n.abrupt("break",35);case 19:return 1*Le!==parseInt(Le)&&(e.quantity="Quantity invalid"),(1*Le<=0||1*Le>1*(null===_n||void 0===_n?void 0:_n.supply))&&(e.quantity="Quantity invalid"),t=sellOrderData.owner,n.next=24,An.balanceOf(t);case 24:return i=n.sent,a=A.a.utils.formatUnits(i.toString(),18),setBuyerWbnbBalance(a),1*a<we*Le*(1+S.sellerFee/1e4)&&(e.quantity="Buyer balance insufficient"),n.abrupt("break",35);case 29:return 1*Le!==parseInt(Le)&&(e.quantity="Quantity invalid"),(1*Le<=0||1*Le>1*Ce)&&(e.quantity="Quantity insufficient"),Object(j.b)(we)||(e.payAmount="Address format invalid"),n.abrupt("break",35);case 33:return e={error:"Condition error"},n.abrupt("break",35);case 35:Object.keys(e).length>0?he(!1):he(!0),Me(e);case 37:case"end":return n.stop()}}),n)}))),[we,Le,ve]);var Ge=function(){var n=Object(c.a)(o.a.mark((function n(e,t){var i,a,r,c,l,d,s,u,b,p;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(window.ethers=A.a,!qn){n.next=3;break}return n.abrupt("return");case 3:$n(""),ie(!0),Kn(!0),ce(!0),Un(!0),n.prev=8,n.t0=e,n.next=n.t0===S.TXTYPE.LIKE||n.t0===S.TXTYPE.PUT_ON_MARKET?12:n.t0===S.TXTYPE.TRANSFER?26:57;break;case 12:return u={owner:J,creator:null===_n||void 0===_n?void 0:_n.owner,tokenId:Mn},i=A.a.utils.keccak256(A.a.utils.defaultAbiCoder.encode(["string"],[u.tokenId])).slice(2),n.next=16,V.getSigner(J).signMessage(i);case 16:if(a=n.sent){n.next=24;break}return ce(!1),$n(""),ue("Cancelled to ".concat(e===S.TXTYPE.PUT_ON_MARKET?"put on market":"like this token",".")),Un(!1),Kn(!0),n.abrupt("return");case 24:return Hn.post("/publish-token",{item:u,rawSig:a}).then((function(n){ln(!cn),Kn(!0),ie(!1),Un(!1),$n(""),ue("".concat(e===S.TXTYPE.PUT_ON_MARKET?"Putting on market":"Liking this token"," have done."))})),n.abrupt("break",58);case 26:return n.next=28,V.getGasPrice().then((function(n){return n.mul(A.a.BigNumber.from(150)).div(A.a.BigNumber.from(100))}));case 28:if(c=n.sent,!We){n.next=39;break}return n.next=32,null===zn||void 0===zn?void 0:zn.estimateGas.burn(J,Mn,Le+"");case 32:return r=n.sent,n.next=35,null===zn||void 0===zn?void 0:zn.burn(J,Mn+"",Le+"",{gasLimit:Object(S.calculateGasMargin)(r,S.GAS_MARGIN),gasPrice:c});case 35:l=n.sent,s="Burn ".concat(Le," of ").concat(null===_n||void 0===_n?void 0:_n.name),n.next=46;break;case 39:return n.next=41,null===zn||void 0===zn?void 0:zn.estimateGas.safeTransferFrom(J,we,Mn+"",Le+"",[]);case 41:return r=n.sent,n.next=44,null===zn||void 0===zn?void 0:zn.safeTransferFrom(J,we,Mn+"",Le+"",[],{gasLimit:Object(S.calculateGasMargin)(r,S.GAS_MARGIN),gasPrice:c});case 44:l=n.sent,s="Transfer ".concat(Le," of ").concat(null===_n||void 0===_n?void 0:_n.name," to ").concat(we);case 46:if(!l){n.next=56;break}return ie(!1),$n(l.hash),Xe(l,{summary:s}),n.next=52,l.wait();case 52:d=n.sent,Boolean(d.status)?(ln(!cn),$n(""),ue("".concat(We?"Burn":"Transfer"," have done successfully."))):(ce(!1),$n(""),ue("".concat(We?"Burn":"Transfer"," failed."))),Un(!1),Kn(!0);case 56:case 57:return n.abrupt("break",58);case 58:n.next=69;break;case 60:n.prev=60,n.t1=n.catch(8),console.error("Tx / SignMessage error",n.t1),ue((null===(b=n.t1.data)||void 0===b?void 0:b.message)?null===(p=n.t1.data)||void 0===p?void 0:p.message:null===n.t1||void 0===n.t1?void 0:n.t1.message),Kn(!0),Un(!1),ie(!1),ce(!1),$n("");case 69:case"end":return n.stop()}}),n,null,[[8,60]])})));return function(e,t){return n.apply(this,arguments)}}(),Qe=Object(d.useState)([]),Ke=Object(l.a)(Qe,2),Je=Ke[0],Ve=Ke[1],Ze=Object(d.useState)("all"),$e=Object(l.a)(Ze,2),nt=$e[0],et=$e[1],tt=Object(d.useState)(!1),it=Object(l.a)(tt,2),at=it[0],rt=it[1],ot=Object(d.useState)(!1),ct=Object(l.a)(ot,2),lt=ct[0],dt=ct[1],st=Object(d.useState)(""),ut=Object(l.a)(st,2),bt=ut[0],pt=ut[1],xt=Object(d.useState)(!1),ht=Object(l.a)(xt,2),jt=ht[0],ft=ht[1],vt=Object(d.useState)(!1),gt=Object(l.a)(vt,2),mt=gt[0],Ot=gt[1],wt=Object(d.useState)(!1),yt=Object(l.a)(wt,2),kt=yt[0],Tt=yt[1];Object(d.useEffect)((function(){var n=bt;if(!kt){var e=parseInt((Je.length+1)/8);Tt(!0);var t={unit:8,page:e};t.search=n||"0x",t.address=D,t.verifiedOnly=at,t.sortMode=lt,t.isSales=!0,X.a.post("".concat(m.a,"/collections/getTokens"),t).then((function(n){var e,t,r;if(null===n||void 0===n||null===(e=n.data)||void 0===e?void 0:e.status){var o=null===n||void 0===n||null===(t=n.data)||void 0===t||null===(r=t.data)||void 0===r?void 0:r.map((function(n){var e;return Object(a.a)(Object(a.a)({},n),{},{logo:null===n||void 0===n||null===(e=n.logo)||void 0===e?void 0:e.replace("ipfs/",m.b)})}));Ve([].concat(Object(i.a)(JSON.parse(JSON.stringify(Je))),Object(i.a)(o)))}})).catch((function(n){console.error("Fetch on Market error",n)})).finally((function(){Ot(!1),Tt(!1)}))}}),[jt]);var Ct=function(){var n=Object(c.a)(o.a.mark((function n(e){var t,i,a,r,c,l;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(hn){n.next=2;break}return n.abrupt("return");case 2:if(t=e.target.files,an(!0),Kn(!1),i=new FormData,console.log(" --- changing image:"),!t[0]){n.next=39;break}return a=JSON.stringify({account:J,timestamp:+new Date}),n.prev=9,n.next=12,V.getSigner(xn).signMessage(a);case 12:if(c=n.sent){n.next=15;break}throw new Error("User cancelled action");case 15:return i.append("userData",a),i.append("signMessage",c),i.append("collection_address",null===pn||void 0===pn||null===(r=pn.address)||void 0===r?void 0:r.toLowerCase()),i.append("collection_type",null===pn||void 0===pn?void 0:pn.type),i.append("banner",t[0],t[0].name),n.next=22,Object(g.a)("".concat(m.a,"/collections/update-banner"),i);case 22:if(null===(l=n.sent)||void 0===l?void 0:l.status){n.next=25;break}throw new Error(null===l||void 0===l?void 0:l.error);case 25:ln(!cn),ce(!0),ue("Collection banner is updated successfully"),an(!1),Kn(!0),n.next=39;break;case 32:n.prev=32,n.t0=n.catch(9),ln(!cn),ce(!1),ue("".concat((null===n.t0||void 0===n.t0?void 0:n.t0.message)?null===n.t0||void 0===n.t0?void 0:n.t0.message:n.t0)),an(!1),Kn(!0);case 39:case"end":return n.stop()}}),n,null,[[9,32]])})));return function(e){return n.apply(this,arguments)}}();Object(d.useEffect)((function(){Ve([]),ft(!jt)}),[at,lt]);var St="".concat(window.location.origin,"/#/token/").concat(null===fn||void 0===fn?void 0:fn.address,"/").concat(null===fn||void 0===fn?void 0:fn.tokenType,"/").concat(Mn);return Object(Q.jsxs)(p.c,{children:[Object(Q.jsxs)(p.f,{children:[hn&&Object(Q.jsx)("div",{onMouseEnter:function(){return bn(1)},onMouseOut:function(){return bn(0)},style:{position:"absolute",width:"100%",height:"100%"}}),Object(Q.jsx)("img",{src:(null===pn||void 0===pn?void 0:pn.banner)?"".concat(m.a,"/images/").concat(null===pn||void 0===pn?void 0:pn.banner):_.a,style:{position:"absolute",width:"100%",height:"100%",objectFit:"cover",pointerEvents:"none"}}),Object(Q.jsx)("div",{className:"centericon",children:Object(Q.jsx)(p.b,{children:Object(Q.jsx)("div",{className:"iconimg",children:Object(Q.jsx)("img",{alt:"Identicon",src:(null===jn||void 0===jn?void 0:jn.length)>0?null===pn||void 0===pn?void 0:pn.logo:(null===pn||void 0===pn?void 0:pn.logo)?"".concat(m.a,"/images/").concat(null===pn||void 0===pn?void 0:pn.logo):Y.a,style:{width:"100%",height:"100%",objectFit:"cover"}})})})}),hn&&Object(Q.jsxs)("div",{style:{position:"absolute",right:0,bottom:0,opacity:un},onMouseEnter:function(){return bn(1)},children:[Object(Q.jsx)(x.a,{onClick:function(n){hn&&($.current.value="",$.current.click())},style:{padding:"5px 20px"},children:"Update Banner"}),Object(Q.jsx)("input",{type:"file",ref:$,style:{display:"none"},onChange:function(n){return Ct(n)},accept:"image/*"})]})]}),Object(Q.jsxs)(p.d,{children:[Object(Q.jsxs)(p.l,{children:[Object(Q.jsxs)(N.j,{style:{marginTop:0},children:[!!Pe&&Pe," (",!!Fe&&Fe,")"]}),Object(Q.jsxs)(N.e,{style:{width:"100%",maxWidth:700},children:[Object(Q.jsxs)(N.f,{isHidden:!1,style:{flexDirection:"row",padding:0},children:[Object(Q.jsxs)("div",{className:"collection-info-block",children:[Object(Q.jsx)("span",{className:"mainText",children:null===pn||void 0===pn?void 0:pn.lastPendingTokenId}),Object(Q.jsx)("span",{children:"items"})]}),Object(Q.jsxs)("div",{className:"collection-info-block",children:[Object(Q.jsx)("span",{className:"mainText",children:null===pn||void 0===pn?void 0:pn.ownerCount}),Object(Q.jsx)("span",{children:"owners"})]}),Object(Q.jsxs)("div",{className:"collection-info-block",children:[Object(Q.jsx)("span",{className:"mainText",children:null===pn||void 0===pn?void 0:pn.tradeAmountOneMonth}),Object(Q.jsx)("span",{children:"volume traded"})]})]}),Object(Q.jsxs)(N.f,{isHidden:!1,style:{flexDirection:"row",padding:0},children:[Object(Q.jsxs)("div",{className:"collection-info-block",children:[Object(Q.jsx)("span",{children:"Standard"}),Object(Q.jsx)("span",{className:"mainText",children:Object(F.e)(null===pn||void 0===pn?void 0:pn.type,Z)})]}),Object(Q.jsxs)("div",{className:"collection-info-block",children:[Object(Q.jsx)("span",{children:"Address"}),Object(Q.jsxs)("div",{className:"mainText",children:[Object(Q.jsx)(W.s,{}),Object(Q.jsx)(P.d,{href:Object(q.b)(Z,D,q.a.TOKEN),children:!!D&&Object(j.c)(D,3)}),Object(Q.jsx)(v.a,{toCopy:D,isStringHidden:!0})]})]}),Object(Q.jsxs)("div",{className:"collection-info-block",children:[Object(Q.jsx)("span",{style:{flex:1},children:"Created By"}),Object(Q.jsxs)("div",{className:"mainText",children:[Object(Q.jsx)("span",{children:Object(Q.jsx)(O.a,{account:xn,size:18})}),Object(Q.jsx)(P.g,{to:"/items/".concat(xn),children:!!xn&&Object(j.c)(xn,3)}),Object(Q.jsx)(v.a,{toCopy:xn,isStringHidden:!0})]})]}),!!Ye&&Object(Q.jsxs)("div",{className:"collection-info-block",children:[Object(Q.jsx)("span",{style:{flex:1},children:"Official Site"}),Object(Q.jsxs)("div",{className:"mainText",children:[Object(Q.jsx)(W.r,{size:20}),Object(Q.jsx)(P.d,{href:Ye,children:Ye})]})]})]})]}),!!(null===pn||void 0===pn?void 0:pn.description)&&Object(Q.jsx)(p.m,{children:Object(Q.jsx)("span",{style:{whiteSpace:"pre-line",textAlign:"center",paddingTop:20},children:null===pn||void 0===pn?void 0:pn.description})}),Object(Q.jsx)("div",{className:"buttonwrapper",style:{},children:hn&&xn&&Object(Q.jsx)(b.c,{to:"/".concat((null===pn||void 0===pn?void 0:pn.type)===U.COLLECTION_TYPE.ERC721?"single":"multiple","/dd"),children:Object(Q.jsx)(x.a,{variant:"lightBlue",children:"Edit Metadata"})})})]}),Object(Q.jsx)(R.a,{tokens:null===Je||void 0===Je?void 0:Je.filter((function(n){return nt.startsWith("image")||"video"===nt?n.type===nt:n})),media:nt,setMedia:et,setVerflag:rt,setSearchdata:pt,onSearchButtonClick:function(){Ve([]),ft(!jt)},tokenloading:mt,verflag:at,setSortflag:dt,onTransferModal:qe,onBurnModal:function(n,e){Ln(!Nn),e&&(Pn(e.tid),Rn(e.detailInfo),Se(e.myNFTBalance),ge(S.TXTYPE.TRANSFER),Ae(0),ye("0x0000000000000000000000000000000000000000"))},showModal:Cn,reportModal:function(n,e){Tn(!kn),e&&(Pn(e.tid),Rn(e.detailInfo))},onLikeAction:function(n,e){e.tid&&(Pn(e.tid),Rn(e.detailInfo),Ge(S.TXTYPE.LIKE))}}),Object(Q.jsx)("div",{style:{display:"flex",width:"100%",justifyContent:"center",margin:"20px 0 40px"},children:Object(Q.jsxs)(H.a,{onClick:function(){ft(!jt)},toggle:!0,children:[!kt&&"Load More",!!kt&&Object(Q.jsxs)(Q.Fragment,{children:["Loading\xa0",Object(Q.jsx)(P.b,{size:"20px",className:"wait-loading-div"})]})]})})]}),Object(Q.jsx)(w.a,{isOpen:tn,pendingText:"Updating cover image"}),Object(Q.jsxs)(E.a,{visible:mn,onClick:Cn,width:"auto",align:"unset",children:[Object(Q.jsx)(N.c,{style:{paddingTop:10},children:Object(Q.jsx)(N.h,{children:"Share NFT"})}),Object(Q.jsxs)(N.c,{direction:"column",margin:"20px 30px",children:[Object(Q.jsxs)(N.i,{fontSize:"32px",padding:"30px 28px 0",lineHeight:1.2,children:[null===_n||void 0===_n?void 0:_n.name," #",Object(F.f)(Mn)]}),Object(Q.jsxs)(N.c,{padding:"0px 28px 10px",wrap:"wrap",justify:"space-around",margin:"15px 0 0 0",children:[Object(Q.jsx)(N.l,{children:Object(Q.jsxs)(z.a,{title:null===_n||void 0===_n?void 0:_n.name,url:St,windowWidth:750,windowHeight:600,style:{alignItems:"center",flexDirection:"column",display:"flex"},children:[Object(Q.jsx)(h.a,{width:"58px",height:"58px",children:Object(Q.jsx)("svg",{viewBox:"0 0 18 16",fill:"none",width:"18.48",height:"18.48",xlmns:"http://www.w3.org/2000/svg",children:Object(Q.jsx)("path",{d:"M17.9655 2.42676C17.3018 2.71851 16.593 2.91726 15.8468 3.00801C16.6073 2.54976 17.1922 1.82751 17.469 0.965759C16.7558 1.38201 15.9653 1.68501 15.1238 1.85376C14.4518 1.13451 13.494 0.684509 12.4305 0.684509C10.3927 0.684509 8.7405 2.33676 8.7405 4.37226C8.7405 4.66476 8.77425 4.94601 8.83575 5.21526C5.76825 5.07051 3.0495 3.59751 1.23 1.37076C0.90975 1.91226 0.7305 2.54151 0.7305 3.22701C0.7305 4.50951 1.383 5.63676 2.3715 6.29901C1.76625 6.27951 1.197 6.11301 0.7005 5.83701V5.88276C0.7005 7.67151 1.97025 9.16326 3.66 9.50301C3.35025 9.58626 3.02325 9.63126 2.688 9.63126C2.4525 9.63126 2.22675 9.60876 2.001 9.56676C2.47425 11.0315 3.83475 12.0995 5.454 12.1295C4.194 13.1188 2.59725 13.7083 0.8775 13.7083C0.585 13.7083 0.29325 13.691 0 13.658C1.64175 14.7035 3.576 15.3148 5.66775 15.3148C12.4583 15.3148 16.167 9.69276 16.167 4.82526C16.167 4.66851 16.167 4.51026 16.1558 4.35276C16.8765 3.83601 17.5057 3.18276 18.0007 2.44176L17.9655 2.42676Z",fill:r.bg1})})}),"Twitter"]})}),Object(Q.jsx)(N.l,{children:Object(Q.jsxs)(I.a,{quote:null===_n||void 0===_n?void 0:_n.name,url:St,windowWidth:750,windowHeight:600,style:{alignItems:"center",flexDirection:"column",display:"flex"},children:[Object(Q.jsx)(h.a,{width:"58px",height:"58px",children:Object(Q.jsx)("svg",{viewBox:"0 0 24 24",width:"18.48",height:"18.48",xlmns:"http://www.w3.org/2000/svg",children:Object(Q.jsx)("path",{d:"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z",fill:r.bg1})})}),"Facebook"]})}),Object(Q.jsx)(N.l,{children:Object(Q.jsxs)(B.a,{title:null===_n||void 0===_n?void 0:_n.name,url:St,windowWidth:750,windowHeight:600,style:{alignItems:"center",flexDirection:"column",display:"flex"},children:[Object(Q.jsx)(h.a,{width:"58px",height:"58px",children:Object(Q.jsx)("svg",{viewBox:"0 0 16 14",fill:"none",width:"18.48",height:"18.48",xlmns:"http://www.w3.org/2000/svg",children:Object(Q.jsx)("path",{d:"M15.9513 1.29916L13.5438 13.1556C13.377 13.997 12.8902 14.1987 12.21 13.8093L8.542 10.979L6.76804 12.7662C6.56797 12.9748 6.40125 13.1556 6.03445 13.1556C5.55428 13.1556 5.63431 12.9679 5.47425 12.495L4.20714 8.19051L0.572523 7.00834C-0.214421 6.76495 -0.22109 6.20168 0.745918 5.7914L14.9243 0.0891779C15.5711 -0.209841 16.1914 0.256072 15.9446 1.29221L15.9513 1.29916Z",fill:r.bg1})})}),"Telegram"]})}),Object(Q.jsx)(N.l,{children:Object(Q.jsxs)(M.a,{subject:null===_n||void 0===_n?void 0:_n.name,body:"".concat(null===_n||void 0===_n?void 0:_n.name,": ").concat(null===_n||void 0===_n?void 0:_n.image),url:St,windowWidth:750,windowHeight:600,style:{alignItems:"center",flexDirection:"column",display:"flex"},children:[Object(Q.jsx)(h.a,{width:"58px",height:"58px",children:Object(Q.jsx)("svg",{viewBox:"0 0 24 24",width:"18.48",height:"18.48",xlmns:"http://www.w3.org/2000/svg",children:Object(Q.jsx)("path",{d:"M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z",fill:r.bg1})})}),"E-mail"]})})]})]})]}),Object(Q.jsxs)(E.a,{visible:Nn,onClick:qe,width:"350px",children:[Object(Q.jsx)(N.c,{style:{paddingTop:10},children:Object(Q.jsxs)(N.h,{children:[We?"Burn":"Transfer"," NFT"]})}),Object(Q.jsxs)(N.c,{direction:"column",padding:"10px 28px 28px",children:[Object(Q.jsx)(N.c,{children:Object(Q.jsxs)(N.i,{fontSize:"15px",align:"left",children:["You are about to ",We?"burn":"transfer"," ",null===_n||void 0===_n?void 0:_n.name," #",Object(F.f)(Mn)]})}),!We&&Object(Q.jsx)(N.c,{direction:"column",margin:"16px 0px 0px",minHeight:"48px",align:"left",width:"100%",children:Object(Q.jsxs)(L.c,{style:{borderBottomColor:Be.payAmount?E.b.inputError:E.b.inputNormal},children:[Object(Q.jsx)("input",{placeholder:"Enter Receiver Address",type:"text",value:we,onChange:function(n){return ye(n.target.value)}}),Object(Q.jsx)(N.i,{margin:"0px 0px 4px",align:"left",fontSize:"14px",lineHeight:"23.46px",color:E.b.labels,children:Object(Q.jsxs)("svg",{viewBox:"0 0 512 512",width:"14",height:"14",xlmns:"http://www.w3.org/2000/svg",children:[Object(Q.jsx)("path",{d:"m399.7,460.2h-287.4v-215.6h287.3v215.6h0.1zm-234-318c0-49.8 40.5-90.3 90.3-90.3 49.8,0 90.3,40.5 90.3,90.3v61.6h-180.6v-61.6zm254.4,61.6h-32.9v-61.6c-5.68434e-14-72.4-58.9-131.2-131.2-131.2-72.3,0-131.2,58.8-131.2,131.2v61.6h-32.9c-11.3,0-20.4,9.1-20.4,20.4v256.4c0,11.3 9.1,20.4 20.4,20.4h328.1c11.3,0 20.4-9.1 20.4-20.4v-256.4c0.1-11.3-9.1-20.4-20.3-20.4z",fill:E.b.labels}),Object(Q.jsx)("path",{d:"m256,420c11.3,0 20.4-9.1 20.4-20.4v-36.7c0-11.3-9.1-20.4-20.4-20.4s-20.4,9.1-20.4,20.4v36.7c2.84217e-14,11.2 9.1,20.4 20.4,20.4z",fill:E.b.labels})]})})]})}),Object(Q.jsxs)(N.c,{direction:"column",margin:"16px 0px 0px",align:"left",width:"100%",children:[Object(Q.jsxs)(L.c,{style:{borderBottomColor:Be.quantity?E.b.inputError:E.b.inputNormal},children:[Object(Q.jsx)("input",{placeholder:"Enter Amount",type:"number",value:Le,onChange:function(n){return Ae(n.target.value)}}),Object(Q.jsx)(N.i,{margin:"0px 0px 4px",align:"left",fontSize:"14px",lineHeight:"23.46px",color:E.b.labels,whiteSpace:"nowrap",children:m.c})]}),Object(Q.jsxs)(N.i,{align:"left",margin:"5px 0px 0px",fontSize:"15px",lineHeight:"20.7px",fontWeight:"500",color:E.b.labels,children:["Enter quantity. ",Ce," available"]}),Object(Q.jsxs)(N.c,{justify:"space-between",margin:"16px 0px 0px",children:[Object(Q.jsx)(N.i,{align:"left",fontSize:"14px",lineHeight:"20.7px",fontWeight:"500",color:E.b.labels,children:"Your NFT balance"}),Object(Q.jsx)(N.i,{align:"left",fontSize:"14px",lineHeight:"20.7px",fontWeight:"500",children:Ce})]}),Object(Q.jsx)(N.c,{margin:"16px 0px 0px",children:Object(Q.jsx)(x.a,{variant:xe?"lightBlue":"blue",width:"100%",disabled:!xe,onClick:function(){Ge(S.TXTYPE.TRANSFER)},children:We?"Burn":"Transfer"})})]})]})]}),Object(Q.jsx)(w.c,{isOpen:Qn,onDismiss:Ue,attemptingTxn:te,hash:Zn,content:function(){return Object(Q.jsx)(w.b,{title:"Confirmation",onDismiss:Ue,topContent:function(){return Object(Q.jsx)(Q.Fragment,{})},bottomContent:function(){return Object(Q.jsx)("div",{style:{whiteSpace:"pre-line"},children:oe?"".concat(se):"Action failed!: \n\n".concat(se)})}})},pendingText:"Action is pending."})]})}},728:function(n,e,t){"use strict";t.d(e,"c",(function(){return z})),t.d(e,"f",(function(){return I})),t.d(e,"b",(function(){return B})),t.d(e,"d",(function(){return M})),t.d(e,"l",(function(){return P})),t.d(e,"m",(function(){return F})),t.d(e,"e",(function(){return Y})),t.d(e,"k",(function(){return _})),t.d(e,"i",(function(){return R})),t.d(e,"h",(function(){return H})),t.d(e,"g",(function(){return D})),t.d(e,"j",(function(){return X})),t.d(e,"a",(function(){return q}));var i,a,r,o,c,l,d,s,u,b,p,x,h,j,f,v,g,m,O,w,y,k,T,C,S,E,N=t(7),L=t(19),A=t(4),z=A.default.div(i||(i=Object(N.a)(["\n  display: flex;\n  max-width: 100%;\n  width: 100%;\n  flex: 1 0 auto;\n  flex-direction: column;\n  border-color: rgb(255, 255, 255);\n"]))),I=A.default.div(a||(a=Object(N.a)(["\n  height: 260px;\n  background-position: center;\n  background-color: ",";\n  // border-radius: 10px;\n  position: relative;\n  & .headerbar {\n    transform: translateY(100px);\n    opacity: 0;\n    z-index: 10;\n    // transition: all 0.12s ease-in-out 0s;\n  }\n  & .centericon {\n    position: absolute;\n    bottom: -30px;\n    left: 50%;\n    overflow: hidden;\n    transform: translateX(-50%);\n    z-index: 10;\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    flex-basis: auto;\n  }\n"])),(function(n){return n.theme.bg1})),B=A.default.div(r||(r=Object(N.a)(["\n  border: 2px solid ","\n  border-radius: 100%;\n  position: relative;\n  display: flex;\n  flex-basis: auto;\n  flex-direction: column;\n  & .iconimg {\n    display: flex;\n    -webkit-box-align: center;\n    align-items: center;\n    -webkit-box-pack: center;\n    justify-content: center;\n    flex-flow: column;\n    border-radius: 100%;\n    width: 120px;\n    height: 120px;\n    overflow: hidden;\n    background-color: ","\n  }\n"])),(function(n){return n.theme.white}),(function(n){return n.theme.bg1})),M=A.default.div(o||(o=Object(N.a)(["\n  margin: 52px 0px 0px;\n  display: flex;\n  flex-flow: column;\n"]))),P=A.default.div(c||(c=Object(N.a)(['\n  position: relative;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  // padding: 0 0 40px;\n\n  :after{\n    position: relative;\n    content: "";\n    left: 0;\n    width: 100%;\n    height: 2px;\n    margin-top: 40px;\n    z-index: 10;\n    background-image: ',";\n  }\n\n  & .wrapper {\n    display: flex;\n    flex-flow: row;\n    & span {\n      color: ",";\n      font-size: 28px;\n      line-height: 33.6px;\n      font-weight: 900;\n      text-align: center;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n    & button {\n      width: auto;\n      padding: 0px;\n      background: transparent;\n      border: none;\n      &:focus {\n        outline: none;\n      }\n    }\n  }\n  & .buttonwrapper {\n    display: flex;\n    flex-flow: row;\n    margin: 16px 0px 0px;\n  }\n"])),(function(n){var e=n.theme;return"linear-gradient(to right, ".concat(Object(L.b)(0,e.primary2),", ").concat(Object(L.b)(0,e.primary3),", ").concat(Object(L.b)(0,e.primary1),")}}")}),(function(n){return n.theme.primary3})),F=(A.default.div(l||(l=Object(N.a)(["\n  display: flex;\n  flex-flow: column;\n  margin: 32px 0px 0px;\n"]))),A.default.div(d||(d=Object(N.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n"]))),A.default.div(s||(s=Object(N.a)(["\n  padding-top: 10px;\n  width: 25%;\n  @media screen and (max-width: 1323px) {\n    width: 25%;\n  }\n  @media screen and (max-width: 1024px) {\n    width: 50%;\n  }\n  @media screen and (max-width: 430px) {\n    width: 100%;\n  }\n"]))),A.default.div(u||(u=Object(N.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n"]))),A.default.div(b||(b=Object(N.a)(["\n  & span {\n    display: inline-flex;\n    flex-direction: row;\n    -webkit-box-align: center;\n    align-items: center;\n    max-width: 100%;\n    text-decoration: none;\n    color: ",";\n    font-size: inherit;\n    line-height: inherit;\n    &.avatar-container{\n      margin-right: 5px;\n      border-radius: 200px;\n      border: 1px solid ",";\n    }\n  }\n  & button {\n    display: inline-flex;\n    background: transparent;\n    border: none;\n    cursor: pointer;\n    overflow: visible;\n    outline: none;\n  }\n"])),(function(n){return n.theme.text3}),(function(n){return n.theme.primary1}))),Y=A.default.div(p||(p=Object(N.a)(["\n  padding: 32px 0;\n  max-width: 1400px;\n  width: 100%;\n"]))),_=A.default.div(x||(x=Object(N.a)(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]))),R=A.default.div(h||(h=Object(N.a)(["\n  padding: 15px;\n  width: ",";\n  height: ",";\n  display: flex;  \n  overflow: hidden;\n  @media screen and (max-width: 600px) {\n    max-width: 350px;\n    max-height: 370px;\n  }\n"])),(function(n){var e;return null!==(e=null===n||void 0===n?void 0:n.width)&&void 0!==e?e:"450px"}),(function(n){var e;return null!==(e=null===n||void 0===n?void 0:n.height)&&void 0!==e?e:"410px"})),H=A.default.div(j||(j=Object(N.a)(["\n  border-radius: 16px;\n  position: relative;\n  // transition: all 0.1s ease-in-out 0s;\n  width: 100%;\n  height: 100%;\n  // display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ",";\n  border: 1px solid ",";\n  padding: 8px;\n  // overflow: hidden;\n  margin: 1px;\n  &:hover {\n    margin: 0 2px 2px 0;\n    box-shadow: 2px 2px 5px ",";\n  }\n  .mainLink{\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 0;\n  }\n  video{    \n    border-radius: 8px;\n    height: 100%;\n    background-position: center;\n    width: 100%;\n    overflow: hidden;\n    object-fit: cover;\n  }  \n\n  .card-info {\n    position: absolute;\n    top: 58%;\n    left: 0px;\n    width: 100%;\n    max-height: 130px;\n    padding: 10px 20px 15px;\n    // padding-right: 40px;\n    overflow: hidden;\n    // background-color: ",";\n    border-radius: 16px;  \n    transition: .2s;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    align-items: center;    \n    div{\n      position: relative;\n      vertical-align: middle;\n      font-size: 16px;\n      font-weight: normal;\n      color: ",";      \n    }\n    >div{\n      display: flex;\n      width: auto;\n      pointer-events: none;\n      &.subLink{\n        pointer-events: auto;\n      }\n    }\n  }\n"])),(function(n){var e=n.theme;return Object(L.b)(0,e.bg1)}),(function(n){var e=n.theme;return Object(L.b)(.8,e.text1)}),(function(n){var e=n.theme;return Object(L.b)(.8,e.text1)}),(function(n){var e=n.theme;return Object(L.b)(.1,e.bg1)}),(function(n){return n.theme.text2})),D=A.default.div(f||(f=Object(N.a)(["\n  border-radius: 8px;\n  border: 1px solid ",";\n  // background-color: ",";\n  background-image: url(",");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  // transition: transform 0.3s ease-in-out 0s;\n  // min-width: 220px;\n  height: 56%;\n  &:hover {\n    .hero-background {\n      transform: scale(1.1);\n    }\n  }\n  pointer-events: none;\n"])),(function(n){return n.theme.text5}),(function(n){return n.theme.bg0}),(function(n){return n.bkImage||"none"})),X=A.default.div(v||(v=Object(N.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  pointer-events: none;\n  div {\n    border-radius: 200px;\n    overflow: hidden;\n    border: 1px solid ",";\n    background-image: url(",");\n    background-size: 100% 100%;\n    width: 80px;\n    height: 80px;\n  }\n  .type-flag {\n    position: absolute;\n    right: 15px;\n    top: 15px;\n    font-size: 16px;\n    background-color: rgba(0,0,0,.5);\n    color: white;\n    padding: 5px 10px;\n    border-radius: 5px;\n  }\n"])),(function(n){return n.theme.white}),(function(n){return n.bkImage||"none"})),q=A.default.div(g||(g=Object(N.a)(["\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: column;\n  border-radius: 100%;\n  width: auto;\n  height: auto;\n  margin: 0 5px;\n  margin-bottom: 3px;\n  overflow: unset;\n  border: 1px solid ",";\n"])),(function(n){var e=n.theme;return Object(L.b)(.3,e.primary1)}));A.default.video(m||(m=Object(N.a)(["\n  height: 100%;\n  background-size: cover;\n  background-position: center center;\n  // transition: transform 0.3s ease-in-out 0s;\n  width: 241px;\n  over-flow: hidden;\n"]))),A.default.div(O||(O=Object(N.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 18px;\n  h3 {\n    display: flex;\n  }\n"]))),A.default.div(w||(w=Object(N.a)(["\n  display: flex;\n  flex-direction: column;\n  margin: 28px 0px 0px;\n  margin-bottom: 30px;\n  h3 {\n    display: flex;\n  }\n"]))),A.default.div(y||(y=Object(N.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 30px;\n"]))),A.default.div(k||(k=Object(N.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex: 1;\n  margin-top: 30px;\n\n  h2 {\n    margin-right: 15px;\n    margin-bottom: 10px;\n  }\n\n  & .ExploreButtonGroupArea {\n    display: flex;\n    flex: 1;\n    flex-direction: row;\n    padding-right: 10px;\n    padding-bottom: 10px;\n    align-items: center;\n    overflow-x: auto;\n    & .ButtonContainer {\n      margin-right: 10px;\n    }\n  }\n\n  & .FilterButtonArea {\n    @media screen and (max-width: 600px) {\n      align-self: flex-end;\n    }\n    @media screen and (min-width: 600px) {\n      display: flex;\n    }\n\n    justify-content: flex-end;\n    & div {\n      // margin-left: 10px;\n    }\n  }\n\n  @media screen and (max-width: 600px) {\n    flex-direction: column;\n  }\n"]))),A.default.div(T||(T=Object(N.a)(["\n  display: inline-flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-self: center;\n  width: 100%;\n"]))),A.default.div(C||(C=Object(N.a)(["\n  padding-top: 10px;\n  width: 25%;\n  @media screen and (min-width: 1201px) {\n    width: 25%;\n  }\n  @media screen and (max-width: 1200px) {\n    width: 25%;\n  }\n\n  @media screen and (max-width: 970px) {\n    width: 33%;\n  }\n  @media screen and (max-width: 750px) {\n    width: 50%;\n  }\n  @media screen and (max-width: 480px) {\n    width: 100%;\n  }\n"]))),A.default.div(S||(S=Object(N.a)(["\n  display: flex;\n  flex-direction: row;\n  min-height: 48px;\n  align-items: center;\n  border-width: 0px 0px 2px;\n  border-bottom-color: rgba(0, 0, 0, 0.07);\n  border-style: solid;\n  & input {\n    visible: false;\n    background: transparent;\n    border-width: 0px;\n    padding: 0px;\n    disabled\n    color: rgba(255, 255, 255, 0.8);\n    font-weight: 500;\n    overflow: hidden;\n    outline: none;\n    width: 100px;\n  }\n  & :focus {\n    border-color: white;\n  }\n"]))),A.default.img(E||(E=Object(N.a)(["\n  width: 400px;\n  height: 400px;\n  border-radius: 10px;\n  background-color: white;\n"])))},739:function(n,e,t){"use strict";e.a=t.p+"static/media/default-cover.064d20fa.jpg"},768:function(n,e,t){"use strict";var i,a,r=t(7),o=t(19),c=(t(1),t(4)),l=t(73),d=t(0),s=Object(c.default)(l.c)(i||(i=Object(r.a)(["\n  visibility: ",";\n\n  max-width: 300px;\n  border-radius: 50px;\n\n  // :before {\n  //   content: '';\n  //   position: absolute;\n  //   inset: 0px;\n  //   z-index: -1;\n  //   margin: 2px;\n  //   border-radius: inherit;\n  //   background: linear-gradient(\n  //     to right,\n  //     ",",\n  //     ",",\n  //     ","\n  //   );\n  //   background-blend-mode: difference;\n  // }\n"])),(function(n){return n.toggle?"visible":"hidden"}),(function(n){var e=n.theme;return Object(o.b)(.5,e.primary1)}),(function(n){var e=n.theme;return Object(o.b)(.5,e.primary2)}),(function(n){var e=n.theme;return Object(o.b)(.5,e.primary3)}));c.default.div(a||(a=Object(r.a)(["\n"])));e.a=function(n){var e=n.onClick,t=n.toggle,i=n.children;return Object(d.jsx)(s,{onClick:e,toggle:t,children:i})}}}]);