import{S as x,i as $,s as ee,k as p,a as O,l as y,m as g,h as u,c as D,n as l,B as H,b as X,C as c,D as Ee,A as ce,E as he,e as pe,F as J,G as K,H as ye,q as V,v as Q,r as Y,w as R,x as W,f as q,t as G,y as Z,o as Ce,I as ze,J as Ae,K as Ie,L as Le}from"../../chunks/index-654eed6b.js";import{w as Oe}from"../../chunks/index-67a82dfc.js";const U=Oe({menuToggler:!1,nav:!1,header:!1});function De(r){let e,t,a,f,n,s,h,m;return{c(){e=p("button"),t=p("div"),a=O(),f=p("div"),n=O(),s=p("div"),this.h()},l(d){e=y(d,"BUTTON",{class:!0});var v=g(e);t=y(v,"DIV",{class:!0}),g(t).forEach(u),a=D(v),f=y(v,"DIV",{class:!0}),g(f).forEach(u),n=D(v),s=y(v,"DIV",{class:!0}),g(s).forEach(u),v.forEach(u),this.h()},h(){l(t,"class","svelte-vht1o4"),l(f,"class","svelte-vht1o4"),l(s,"class","svelte-vht1o4"),l(e,"class","menu-toggler svelte-vht1o4"),H(e,"active",r[0].menuToggler)},m(d,v){X(d,e,v),c(e,t),c(e,a),c(e,f),c(e,n),c(e,s),h||(m=Ee(e,"click",r[1]),h=!0)},p(d,[v]){v&1&&H(e,"active",d[0].menuToggler)},i:ce,o:ce,d(d){d&&u(e),h=!1,m()}}}function Ne(r,e,t){let a;he(r,U,n=>t(0,a=n));function f(n){U.update(s=>({...s,menuToggler:!s.menuToggler,nav:!s.nav}))}return[a,f]}class Te extends x{constructor(e){super(),$(this,e,Ne,De,ee,{})}}const ue=parseFloat;function ve(r,e=";"){let t;if(Array.isArray(r))t=r.filter(a=>a);else{t=[];for(const a in r)r[a]&&t.push(`${a}:${r[a]}`)}return t.join(e)}function Se(r,e,t,a){let f,n;const s="1em";let h,m,d,v="-.125em";const i="visible";return a&&(d="center",n="1.25em"),t&&(f=t),e&&(e=="lg"?(m="1.33333em",h=".75em",v="-.225em"):e=="xs"?m=".75em":e=="sm"?m=".875em":m=e.replace("x","em")),ve([ve({float:f,width:n,height:s,"line-height":h,"font-size":m,"text-align":d,"vertical-align":v,"transform-origin":"center",overflow:i}),r])}function Me(r,e,t,a,f,n=1,s="",h=""){let m=1,d=1;return f&&(f=="horizontal"?m=-1:f=="vertical"?d=-1:m=d=-1),ve([`translate(${ue(e)*n}${s},${ue(t)*n}${s})`,`scale(${m*ue(r)},${d*ue(r)})`,a&&`rotate(${a}${h})`]," ")}function be(r){let e,t,a,f,n,s,h;function m(i,_){return typeof i[7][4]=="string"?Be:je}let d=m(r),v=d(r);return{c(){e=J("svg"),t=J("g"),a=J("g"),v.c(),this.h()},l(i){e=K(i,"svg",{id:!0,class:!0,style:!0,viewBox:!0,"aria-hidden":!0,role:!0,xmlns:!0});var _=g(e);t=K(_,"g",{transform:!0,"transform-origin":!0});var b=g(t);a=K(b,"g",{transform:!0});var E=g(a);v.l(E),E.forEach(u),b.forEach(u),_.forEach(u),this.h()},h(){l(a,"transform",r[10]),l(t,"transform",f=`translate(${r[7][0]/2} ${r[7][1]/2})`),l(t,"transform-origin",n=`${r[7][0]/4} 0`),l(e,"id",r[0]),l(e,"class",s=ye(r[8])+" svelte-1cj2gr0"),l(e,"style",r[9]),l(e,"viewBox",h=`0 0 ${r[7][0]} ${r[7][1]}`),l(e,"aria-hidden","true"),l(e,"role","img"),l(e,"xmlns","http://www.w3.org/2000/svg")},m(i,_){X(i,e,_),c(e,t),c(t,a),v.m(a,null)},p(i,_){d===(d=m(i))&&v?v.p(i,_):(v.d(1),v=d(i),v&&(v.c(),v.m(a,null))),_&1024&&l(a,"transform",i[10]),_&128&&f!==(f=`translate(${i[7][0]/2} ${i[7][1]/2})`)&&l(t,"transform",f),_&128&&n!==(n=`${i[7][0]/4} 0`)&&l(t,"transform-origin",n),_&1&&l(e,"id",i[0]),_&256&&s!==(s=ye(i[8])+" svelte-1cj2gr0")&&l(e,"class",s),_&512&&l(e,"style",i[9]),_&128&&h!==(h=`0 0 ${i[7][0]} ${i[7][1]}`)&&l(e,"viewBox",h)},d(i){i&&u(e),v.d()}}}function je(r){let e,t,a,f,n,s,h,m,d,v;return{c(){e=J("path"),s=J("path"),this.h()},l(i){e=K(i,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),g(e).forEach(u),s=K(i,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),g(s).forEach(u),this.h()},h(){l(e,"d",t=r[7][4][0]),l(e,"fill",a=r[3]||r[1]||"currentColor"),l(e,"fill-opacity",f=r[6]!=!1?r[4]:r[5]),l(e,"transform",n=`translate(${r[7][0]/-2} ${r[7][1]/-2})`),l(s,"d",h=r[7][4][1]),l(s,"fill",m=r[2]||r[1]||"currentColor"),l(s,"fill-opacity",d=r[6]!=!1?r[5]:r[4]),l(s,"transform",v=`translate(${r[7][0]/-2} ${r[7][1]/-2})`)},m(i,_){X(i,e,_),X(i,s,_)},p(i,_){_&128&&t!==(t=i[7][4][0])&&l(e,"d",t),_&10&&a!==(a=i[3]||i[1]||"currentColor")&&l(e,"fill",a),_&112&&f!==(f=i[6]!=!1?i[4]:i[5])&&l(e,"fill-opacity",f),_&128&&n!==(n=`translate(${i[7][0]/-2} ${i[7][1]/-2})`)&&l(e,"transform",n),_&128&&h!==(h=i[7][4][1])&&l(s,"d",h),_&6&&m!==(m=i[2]||i[1]||"currentColor")&&l(s,"fill",m),_&112&&d!==(d=i[6]!=!1?i[5]:i[4])&&l(s,"fill-opacity",d),_&128&&v!==(v=`translate(${i[7][0]/-2} ${i[7][1]/-2})`)&&l(s,"transform",v)},d(i){i&&u(e),i&&u(s)}}}function Be(r){let e,t,a,f;return{c(){e=J("path"),this.h()},l(n){e=K(n,"path",{d:!0,fill:!0,transform:!0}),g(e).forEach(u),this.h()},h(){l(e,"d",t=r[7][4]),l(e,"fill",a=r[1]||r[2]||"currentColor"),l(e,"transform",f=`translate(${r[7][0]/-2} ${r[7][1]/-2})`)},m(n,s){X(n,e,s)},p(n,s){s&128&&t!==(t=n[7][4])&&l(e,"d",t),s&6&&a!==(a=n[1]||n[2]||"currentColor")&&l(e,"fill",a),s&128&&f!==(f=`translate(${n[7][0]/-2} ${n[7][1]/-2})`)&&l(e,"transform",f)},d(n){n&&u(e)}}}function Ve(r){let e,t=r[7][4]&&be(r);return{c(){t&&t.c(),e=pe()},l(a){t&&t.l(a),e=pe()},m(a,f){t&&t.m(a,f),X(a,e,f)},p(a,[f]){a[7][4]?t?t.p(a,f):(t=be(a),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:ce,o:ce,d(a){t&&t.d(a),a&&u(e)}}}function Ye(r,e,t){let{class:a=""}=e,{id:f=""}=e,{style:n=""}=e,{icon:s}=e,{size:h=""}=e,{color:m=""}=e,{fw:d=!1}=e,{pull:v=""}=e,{scale:i=1}=e,{translateX:_=0}=e,{translateY:b=0}=e,{rotate:E=""}=e,{flip:k=!1}=e,{spin:C=!1}=e,{pulse:L=!1}=e,{primaryColor:j=""}=e,{secondaryColor:A=""}=e,{primaryOpacity:S=1}=e,{secondaryOpacity:P=.4}=e,{swapOpacity:B=!1}=e,z,w,N,I;return r.$$set=o=>{"class"in o&&t(11,a=o.class),"id"in o&&t(0,f=o.id),"style"in o&&t(12,n=o.style),"icon"in o&&t(13,s=o.icon),"size"in o&&t(14,h=o.size),"color"in o&&t(1,m=o.color),"fw"in o&&t(15,d=o.fw),"pull"in o&&t(16,v=o.pull),"scale"in o&&t(17,i=o.scale),"translateX"in o&&t(18,_=o.translateX),"translateY"in o&&t(19,b=o.translateY),"rotate"in o&&t(20,E=o.rotate),"flip"in o&&t(21,k=o.flip),"spin"in o&&t(22,C=o.spin),"pulse"in o&&t(23,L=o.pulse),"primaryColor"in o&&t(2,j=o.primaryColor),"secondaryColor"in o&&t(3,A=o.secondaryColor),"primaryOpacity"in o&&t(4,S=o.primaryOpacity),"secondaryOpacity"in o&&t(5,P=o.secondaryOpacity),"swapOpacity"in o&&t(6,B=o.swapOpacity)},r.$$.update=()=>{r.$$.dirty&8192&&t(7,z=s&&s.icon||[0,0,"",[],""]),r.$$.dirty&12584960&&t(8,w=ve([a,"svelte-fa",C&&"spin",L&&"pulse"]," ")),r.$$.dirty&118784&&t(9,N=Se(n,h,v,d)),r.$$.dirty&4063232&&t(10,I=Me(i,_,b,E,k,512))},[f,m,j,A,S,P,B,z,w,N,I,a,n,s,h,d,v,i,_,b,E,k,C,L]}class Pe extends x{constructor(e){super(),$(this,e,Ye,Ve,ee,{class:11,id:0,style:12,icon:13,size:14,color:1,fw:15,pull:16,scale:17,translateX:18,translateY:19,rotate:20,flip:21,spin:22,pulse:23,primaryColor:2,secondaryColor:3,primaryOpacity:4,secondaryOpacity:5,swapOpacity:6})}}const ke=Pe;/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */var we={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};function Xe(r){let e,t,a,f,n,s,h,m,d,v,i,_,b,E,k,C,L,j,A,S,P,B,z,w,N;return w=new ke({props:{icon:we,scale:2.5}}),{c(){e=p("ul"),t=p("li"),a=p("a"),f=V("Accueil"),n=O(),s=p("li"),h=p("a"),m=V("\xC0 propos"),d=O(),v=p("li"),i=p("a"),_=V("Comp\xE9tences"),b=O(),E=p("li"),k=p("a"),C=V("Projets"),L=O(),j=p("li"),A=p("a"),S=V("Contact"),P=O(),B=p("li"),z=p("a"),Q(w.$$.fragment),this.h()},l(I){e=y(I,"UL",{class:!0});var o=g(e);t=y(o,"LI",{class:!0});var te=g(t);a=y(te,"A",{href:!0,class:!0});var M=g(a);f=Y(M,"Accueil"),M.forEach(u),te.forEach(u),n=D(o),s=y(o,"LI",{class:!0});var F=g(s);h=y(F,"A",{href:!0,class:!0});var T=g(h);m=Y(T,"\xC0 propos"),T.forEach(u),F.forEach(u),d=D(o),v=y(o,"LI",{class:!0});var le=g(v);i=y(le,"A",{href:!0,class:!0});var ae=g(i);_=Y(ae,"Comp\xE9tences"),ae.forEach(u),le.forEach(u),b=D(o),E=y(o,"LI",{class:!0});var se=g(E);k=y(se,"A",{href:!0,class:!0});var re=g(k);C=Y(re,"Projets"),re.forEach(u),se.forEach(u),L=D(o),j=y(o,"LI",{class:!0});var ne=g(j);A=y(ne,"A",{href:!0,class:!0});var ie=g(A);S=Y(ie,"Contact"),ie.forEach(u),ne.forEach(u),P=D(o),B=y(o,"LI",{class:!0});var fe=g(B);z=y(fe,"A",{href:!0,target:!0,class:!0});var oe=g(z);R(w.$$.fragment,oe),oe.forEach(u),fe.forEach(u),o.forEach(u),this.h()},h(){l(a,"href","#"),l(a,"class","svelte-vl2pz4"),l(t,"class","svelte-vl2pz4"),l(h,"href","#about"),l(h,"class","svelte-vl2pz4"),l(s,"class","svelte-vl2pz4"),l(i,"href","#skills"),l(i,"class","svelte-vl2pz4"),l(v,"class","svelte-vl2pz4"),l(k,"href","#projects"),l(k,"class","svelte-vl2pz4"),l(E,"class","svelte-vl2pz4"),l(A,"href","#contact"),l(A,"class","svelte-vl2pz4"),l(j,"class","svelte-vl2pz4"),l(z,"href","https://github.com/DamienSn"),l(z,"target","_blank"),l(z,"class","svelte-vl2pz4"),l(B,"class","svelte-vl2pz4"),l(e,"class","svelte-vl2pz4")},m(I,o){X(I,e,o),c(e,t),c(t,a),c(a,f),c(e,n),c(e,s),c(s,h),c(h,m),c(e,d),c(e,v),c(v,i),c(i,_),c(e,b),c(e,E),c(E,k),c(k,C),c(e,L),c(e,j),c(j,A),c(A,S),c(e,P),c(e,B),c(B,z),W(w,z,null),N=!0},p:ce,i(I){N||(q(w.$$.fragment,I),N=!0)},o(I){G(w.$$.fragment,I),N=!1},d(I){I&&u(e),Z(w)}}}class Fe extends x{constructor(e){super(),$(this,e,null,Xe,ee,{})}}function He(r){let e,t,a,f,n,s,h,m,d,v,i,_,b,E,k,C,L,j,A,S,P,B,z,w,N,I,o,te;return N=new ke({props:{icon:we,scale:2.5}}),{c(){e=p("aside"),t=p("ul"),a=p("li"),f=p("a"),n=V("Accueil"),s=O(),h=p("li"),m=p("a"),d=V("\xC0 propos"),v=O(),i=p("li"),_=p("a"),b=V("Comp\xE9tences"),E=O(),k=p("li"),C=p("a"),L=V("Projets"),j=O(),A=p("li"),S=p("a"),P=V("Contact"),B=O(),z=p("li"),w=p("a"),Q(N.$$.fragment),this.h()},l(M){e=y(M,"ASIDE",{class:!0});var F=g(e);t=y(F,"UL",{class:!0});var T=g(t);a=y(T,"LI",{class:!0});var le=g(a);f=y(le,"A",{href:!0,class:!0});var ae=g(f);n=Y(ae,"Accueil"),ae.forEach(u),le.forEach(u),s=D(T),h=y(T,"LI",{class:!0});var se=g(h);m=y(se,"A",{href:!0,class:!0});var re=g(m);d=Y(re,"\xC0 propos"),re.forEach(u),se.forEach(u),v=D(T),i=y(T,"LI",{class:!0});var ne=g(i);_=y(ne,"A",{href:!0,class:!0});var ie=g(_);b=Y(ie,"Comp\xE9tences"),ie.forEach(u),ne.forEach(u),E=D(T),k=y(T,"LI",{class:!0});var fe=g(k);C=y(fe,"A",{href:!0,class:!0});var oe=g(C);L=Y(oe,"Projets"),oe.forEach(u),fe.forEach(u),j=D(T),A=y(T,"LI",{class:!0});var _e=g(A);S=y(_e,"A",{href:!0,class:!0});var me=g(S);P=Y(me,"Contact"),me.forEach(u),_e.forEach(u),B=D(T),z=y(T,"LI",{class:!0});var de=g(z);w=y(de,"A",{href:!0,target:!0,class:!0});var ge=g(w);R(N.$$.fragment,ge),ge.forEach(u),de.forEach(u),T.forEach(u),F.forEach(u),this.h()},h(){l(f,"href","#"),l(f,"class","svelte-addvkb"),l(a,"class","svelte-addvkb"),l(m,"href","#about"),l(m,"class","svelte-addvkb"),l(h,"class","svelte-addvkb"),l(_,"href","#skills"),l(_,"class","svelte-addvkb"),l(i,"class","svelte-addvkb"),l(C,"href","#projects"),l(C,"class","svelte-addvkb"),l(k,"class","svelte-addvkb"),l(S,"href","#contact"),l(S,"class","svelte-addvkb"),l(A,"class","svelte-addvkb"),l(w,"href","https://github.com/DamienSn"),l(w,"target","_blank"),l(w,"class","svelte-addvkb"),l(z,"class","svelte-addvkb"),l(t,"class","svelte-addvkb"),l(e,"class","nav-mobile svelte-addvkb"),H(e,"active",r[0].nav)},m(M,F){X(M,e,F),c(e,t),c(t,a),c(a,f),c(f,n),c(t,s),c(t,h),c(h,m),c(m,d),c(t,v),c(t,i),c(i,_),c(_,b),c(t,E),c(t,k),c(k,C),c(C,L),c(t,j),c(t,A),c(A,S),c(S,P),c(t,B),c(t,z),c(z,w),W(N,w,null),I=!0,o||(te=Ee(e,"click",r[1]),o=!0)},p(M,[F]){F&1&&H(e,"active",M[0].nav)},i(M){I||(q(N.$$.fragment,M),I=!0)},o(M){G(N.$$.fragment,M),I=!1},d(M){M&&u(e),Z(N),o=!1,te()}}}function qe(r,e,t){let a;he(r,U,n=>t(0,a=n));function f(){U.update(n=>({...n,menuToggler:!n.menuToggler,nav:!n.nav}))}return[a,f]}class Ge extends x{constructor(e){super(),$(this,e,qe,He,ee,{})}}function Ue(r){let e,t,a,f,n,s,h,m,d,v,i,_;return s=new Fe({}),d=new Te({}),i=new Ge({}),{c(){e=p("nav"),t=p("span"),a=V("DS."),f=O(),n=p("div"),Q(s.$$.fragment),h=O(),m=p("div"),Q(d.$$.fragment),v=O(),Q(i.$$.fragment),this.h()},l(b){e=y(b,"NAV",{class:!0});var E=g(e);t=y(E,"SPAN",{class:!0});var k=g(t);a=Y(k,"DS."),k.forEach(u),f=D(E),n=y(E,"DIV",{class:!0});var C=g(n);R(s.$$.fragment,C),C.forEach(u),h=D(E),m=y(E,"DIV",{class:!0});var L=g(m);R(d.$$.fragment,L),v=D(L),R(i.$$.fragment,L),L.forEach(u),E.forEach(u),this.h()},h(){l(t,"class","svelte-15k9yot"),l(n,"class","nav-lg svelte-15k9yot"),l(m,"class","nav-sm svelte-15k9yot"),l(e,"class","svelte-15k9yot"),H(e,"black",r[0].header),H(e,"nav",r[0].nav)},m(b,E){X(b,e,E),c(e,t),c(t,a),c(e,f),c(e,n),W(s,n,null),c(e,h),c(e,m),W(d,m,null),c(m,v),W(i,m,null),_=!0},p(b,[E]){E&1&&H(e,"black",b[0].header),E&1&&H(e,"nav",b[0].nav)},i(b){_||(q(s.$$.fragment,b),q(d.$$.fragment,b),q(i.$$.fragment,b),_=!0)},o(b){G(s.$$.fragment,b),G(d.$$.fragment,b),G(i.$$.fragment,b),_=!1},d(b){b&&u(e),Z(s),Z(d),Z(i)}}}function Je(r,e,t){let a;return he(r,U,f=>t(0,a=f)),Ce(()=>{window.addEventListener("scroll",f=>{window.pageYOffset>50?U.update(n=>({...n,header:!0})):U.update(n=>({...n,header:!1}))})}),[a]}class Ke extends x{constructor(e){super(),$(this,e,Je,Ue,ee,{})}}function Qe(r){let e,t,a;e=new Ke({});const f=r[1].default,n=ze(f,r,r[0],null);return{c(){Q(e.$$.fragment),t=O(),n&&n.c()},l(s){R(e.$$.fragment,s),t=D(s),n&&n.l(s)},m(s,h){W(e,s,h),X(s,t,h),n&&n.m(s,h),a=!0},p(s,[h]){n&&n.p&&(!a||h&1)&&Ae(n,f,s,s[0],a?Le(f,s[0],h,null):Ie(s[0]),null)},i(s){a||(q(e.$$.fragment,s),q(n,s),a=!0)},o(s){G(e.$$.fragment,s),G(n,s),a=!1},d(s){Z(e,s),s&&u(t),n&&n.d(s)}}}function Re(r,e,t){let{$$slots:a={},$$scope:f}=e;return r.$$set=n=>{"$$scope"in n&&t(0,f=n.$$scope)},[f,a]}class xe extends x{constructor(e){super(),$(this,e,Re,Qe,ee,{})}}export{xe as default};
