(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function w(){}function _e(t){return t()}function ae(){return Object.create(null)}function U(t){t.forEach(_e)}function ie(t){return typeof t=="function"}function E(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function we(t){return Object.keys(t).length===0}function ge(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Z(t,e,n){t.$$.on_destroy.push(ge(e,n))}function b(t,e){t.appendChild(e)}function D(t,e,n){t.insertBefore(e,n||null)}function B(t){t.parentNode&&t.parentNode.removeChild(t)}function V(t){return document.createElement(t)}function H(t){return document.createTextNode(t)}function S(){return H(" ")}function Ve(){return H("")}function q(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function v(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $e(t){return t===""?null:+t}function Ie(t){return Array.from(t.childNodes)}function me(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function fe(t,e){t.value=e==null?"":e}function C(t,e,n){t.classList[n?"add":"remove"](e)}let X;function F(t){X=t}function ke(){if(!X)throw new Error("Function called outside component initialization");return X}function Ae(t){ke().$$.on_mount.push(t)}function Ce(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(l=>l.call(this,e))}const K=[],te=[],W=[],ne=[],Re=Promise.resolve();let le=!1;function Se(){le||(le=!0,Re.then(ve))}function se(t){W.push(t)}function Te(t){ne.push(t)}const j=new Set;let Q=0;function ve(){const t=X;do{for(;Q<K.length;){const e=K[Q];Q++,F(e),Ee(e.$$)}for(F(null),K.length=0,Q=0;te.length;)te.pop()();for(let e=0;e<W.length;e+=1){const n=W[e];j.has(n)||(j.add(n),n())}W.length=0}while(K.length);for(;ne.length;)ne.pop()();le=!1,j.clear(),F(t)}function Ee(t){if(t.fragment!==null){t.update(),U(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(se)}}const Y=new Set;let z;function ze(){z={r:0,c:[],p:z}}function Me(){z.r||U(z.c),z=z.p}function R(t,e){t&&t.i&&(Y.delete(t),t.i(e))}function T(t,e,n,l){if(t&&t.o){if(Y.has(t))return;Y.add(t),z.c.push(()=>{Y.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}function Le(t,e){T(t,1,1,()=>{e.delete(t.key)})}function Ue(t,e,n,l,s,r,c,f,o,i,d,h){let a=t.length,p=r.length,u=a;const g={};for(;u--;)g[t[u].key]=u;const _=[],m=new Map,I=new Map;for(u=p;u--;){const y=h(s,r,u),k=n(y);let A=c.get(k);A?l&&A.p(y,e):(A=i(k,y),A.c()),m.set(k,_[u]=A),k in g&&I.set(k,Math.abs(u-g[k]))}const ue=new Set,ce=new Set;function O(y){R(y,1),y.m(f,d),c.set(y.key,y),d=y.first,p--}for(;a&&p;){const y=_[p-1],k=t[a-1],A=y.key,J=k.key;y===k?(d=y.first,a--,p--):m.has(J)?!c.has(A)||ue.has(A)?O(y):ce.has(J)?a--:I.get(A)>I.get(J)?(ce.add(A),O(y)):(ue.add(J),a--):(o(k,c),a--)}for(;a--;){const y=t[a];m.has(y.key)||o(y,c)}for(;p;)O(_[p-1]);return _}function Be(t,e,n){const l=t.$$.props[e];l!==void 0&&(t.$$.bound[l]=n,n(t.$$.ctx[l]))}function x(t){t&&t.c()}function M(t,e,n,l){const{fragment:s,after_update:r}=t.$$;s&&s.m(e,n),l||se(()=>{const c=t.$$.on_mount.map(_e).filter(ie);t.$$.on_destroy?t.$$.on_destroy.push(...c):U(c),t.$$.on_mount=[]}),r.forEach(se)}function L(t,e){const n=t.$$;n.fragment!==null&&(U(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ne(t,e){t.$$.dirty[0]===-1&&(K.push(t),Se(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function N(t,e,n,l,s,r,c,f=[-1]){const o=X;F(t);const i=t.$$={fragment:null,ctx:[],props:r,update:w,not_equal:s,bound:ae(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:ae(),dirty:f,skip_bound:!1,root:e.target||o.$$.root};c&&c(i.root);let d=!1;if(i.ctx=n?n(t,e.props||{},(h,a,...p)=>{const u=p.length?p[0]:a;return i.ctx&&s(i.ctx[h],i.ctx[h]=u)&&(!i.skip_bound&&i.bound[h]&&i.bound[h](u),d&&Ne(t,h)),a}):[],i.update(),d=!0,U(i.before_update),i.fragment=l?l(i.ctx):!1,e.target){if(e.hydrate){const h=Ie(e.target);i.fragment&&i.fragment.l(h),h.forEach(B)}else i.fragment&&i.fragment.c();e.intro&&R(t.$$.fragment),M(t,e.target,e.anchor,e.customElement),ve()}F(o)}class P{$destroy(){L(this,1),this.$destroy=w}$on(e,n){if(!ie(n))return w;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const s=l.indexOf(n);s!==-1&&l.splice(s,1)}}$set(e){this.$$set&&!we(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const G=[];function Pe(t,e){return{subscribe:oe(t,e).subscribe}}function oe(t,e=w){let n;const l=new Set;function s(f){if(E(t,f)&&(t=f,n)){const o=!G.length;for(const i of l)i[1](),G.push(i,t);if(o){for(let i=0;i<G.length;i+=2)G[i][0](G[i+1]);G.length=0}}}function r(f){s(f(t))}function c(f,o=w){const i=[f,o];return l.add(i),l.size===1&&(n=e(s)||w),f(t),()=>{l.delete(i),l.size===0&&(n(),n=null)}}return{set:s,update:r,subscribe:c}}function Ge(t,e,n){const l=!Array.isArray(t),s=l?[t]:t,r=e.length<2;return Pe(n,c=>{let f=!1;const o=[];let i=0,d=w;const h=()=>{if(i)return;d();const p=e(l?o[0]:o,c);r?c(p):d=ie(p)?p:w},a=s.map((p,u)=>ge(p,g=>{o[u]=g,i&=~(1<<u),f&&h()},()=>{i|=1<<u}));return f=!0,h(),function(){U(a),d()}})}let re=oe(10);const $=oe([{coord:"0-0",realValue:"1",userInputValue:"",isValidValue:void 0,isReplaceable:void 0,isActiveTile:!1}]);Ge($,()=>{});function qe(){const t=[];for(let e=0;e<9;e++)for(let n=0;n<9;n++)t.push({coord:`${e}-${n}`,realValue:"",userInputValue:"",isValidValue:!0,isReplaceable:void 0,isActiveTile:!1,isUserInput:!1});return t}function xe(t,e){const n=t.split("");let l=0;for(;l<=e;){const s=Ke(0,t.length);n[s]="x",l=De(n.join(""))}return n.join("")}function De(t){return t.match(/x/g).length}function Ke(t,e){return Math.floor(Math.random()*(e-t+1))+t}const Fe=["1","2","3","4","5","6","7","8","9","Delete"],He=["649123875827465139135789264518934627276518493493672518752346981364891752981257346","679518243543729618821634957794352186358461729216897534485276391962183475137945862","371986524846521379592473861463819752285347916719652438634195287128734695957268143","748391562365248791912675483421786935589413276673529814834962157296157348157834629","298317645764285139153946278327168954981453726645792813539821467872634591416579382","142895637975136824836742519398467152451328796267519348529673481613284975784951263"];function Xe(t){for(const e of t)if(!e.userInputValue)return!1;for(let e=0;e<9;e++){const n=[];for(let l=0;l<9;l++){const s=t.find(r=>r.coord===`${e}-${l}`);n.push(s.userInputValue)}if(ee(n))return!1}for(let e=0;e<9;e++){const n=[];for(let l=0;l<9;l++){const s=t.find(r=>r.coord===`${l}-${e}`);n.push(s.userInputValue)}if(ee(n))return!1}for(let e=0;e<9;e+=3)for(let n=0;n<9;n+=3){const l=[];for(let s=0;s<3;s++)for(let r=0;r<3;r++){const c=t.find(f=>f.coord===`${e+s}-${n+r}`);l.push(c.userInputValue)}if(ee(l))return!1}return!0}function ee(t){return new Set(t).size!==t.length}function de(t,e){const n=t.coord[0],l=t.coord[2],s=Math.floor(n/3)*3,r=Math.floor(l/3)*3,c=[1,2,3,4,5,6,7,8,9].map(o=>o.toString()),f=new Set(c);for(let o=0;o<9;o++){if(o!==n){const i=e.find(d=>d.coord===`${o}-${l}`);f.delete(i.userInputValue)}if(o!==l){const i=e.find(d=>d.coord===`${n}-${o}`);f.delete(i.userInputValue)}}for(let o=s;o<s+3;o++)for(let i=r;i<r+3;i++)if(o!==n&&i!==l){const d=e.find(h=>h.coord===`${o}-${i}`);f.delete(d.userInputValue)}return[...f]}function Je(t,e,n){n=n.toString();const l=Qe(t,e).map(i=>i.userInputValue),s=We(t,e).map(i=>i.userInputValue),r=Ye(t,e).map(i=>i.userInputValue),c=l.includes(n),f=s.includes(n),o=r.includes(n);return![c,f,o].some(i=>i===!0)}function Qe(t,e){const n=parseInt(be(e)),l=parseInt(ye(e)),s=[0,1,2],r=[3,4,5],c=[6,7,8];let f;s.includes(n)?f=0:r.includes(n)?f=3:c.includes(n)&&(f=6);let o;s.includes(l)?o=0:r.includes(l)?o=3:c.includes(l)&&(o=6);const i=[];for(let d=f;d<f+3;d++)for(let h=o;h<o+3;h++)i.push(`${d}-${h}`);return t.filter(d=>i.includes(d.coord))}function We(t,e){const n=be(e),l=new RegExp(`${n}-[0-8]`);return t.filter(s=>s.coord.match(l))}function Ye(t,e){const n=ye(e),l=new RegExp(`[0-8]-${n}`);return t.filter(s=>s.coord.match(l))}function be(t){return t.coord.match(/([0-8])-[0-8]/)[1]}function ye(t){return t.coord.match(/[0-8]-([0-8])/)[1]}function Ze(t){let e,n,l,s;return{c(){e=V("div"),n=H(t[1]),v(e,"class","tile svelte-1bk9x2e"),C(e,"active-tile",t[4]),C(e,"user-input",t[5]),C(e,"replaceable-tile",t[3]),C(e,"non-replaceable-tile",!t[3]),C(e,"invalid-tile",!t[2])},m(r,c){D(r,e,c),b(e,n),l||(s=q(e,"click",t[8]),l=!0)},p(r,[c]){c&2&&me(n,r[1]),c&16&&C(e,"active-tile",r[4]),c&32&&C(e,"user-input",r[5]),c&8&&C(e,"replaceable-tile",r[3]),c&8&&C(e,"non-replaceable-tile",!r[3]),c&4&&C(e,"invalid-tile",!r[2])},i:w,o:w,d(r){r&&B(e),l=!1,s()}}}function Oe(t,e,n){let{coord:l}=e,{userInputValue:s}=e,{isValidValue:r}=e,{isReplaceable:c}=e,{isActive:f}=e,{isUserInput:o}=e;function i(a,p){$.update(u=>{const g=u.find(_=>_.coord===a);return p?g.isActiveTile=!1:g.isActiveTile=!0,u})}function d(a){$.update(p=>(p.forEach(u=>{u.coord!==a&&(u.isActiveTile=!1)}),p))}const h=()=>{d(l),i(l,f)};return t.$$set=a=>{"coord"in a&&n(0,l=a.coord),"userInputValue"in a&&n(1,s=a.userInputValue),"isValidValue"in a&&n(2,r=a.isValidValue),"isReplaceable"in a&&n(3,c=a.isReplaceable),"isActive"in a&&n(4,f=a.isActive),"isUserInput"in a&&n(5,o=a.isUserInput)},[l,s,r,c,f,o,i,d,h]}class je extends P{constructor(e){super(),N(this,e,Oe,Ze,E,{coord:0,userInputValue:1,isValidValue:2,isReplaceable:3,isActive:4,isUserInput:5})}}function et(t){let e,n,l,s,r,c,f,o,i,d,h,a,p,u,g;return{c(){e=V("div"),n=V("div"),l=V("label"),l.textContent="Speed",s=S(),r=V("input"),c=S(),f=V("span"),o=H(t[0]),i=H("ms"),d=S(),h=V("button"),h.textContent="Solve",a=S(),p=V("button"),p.textContent="Clear",v(l,"for","speed-slider"),v(l,"class","svelte-fr7lly"),v(r,"type","range"),v(r,"min","10"),v(r,"max","700"),v(r,"id","speed-slider"),v(r,"step","10"),v(r,"class","svelte-fr7lly"),v(f,"class","slider-val svelte-fr7lly"),v(n,"class","slider-cont svelte-fr7lly"),v(h,"class","btn solve svelte-fr7lly"),v(p,"class","btn clear svelte-fr7lly"),v(e,"class","viz-controls svelte-fr7lly")},m(_,m){D(_,e,m),b(e,n),b(n,l),b(n,s),b(n,r),fe(r,t[0]),b(n,c),b(n,f),b(f,o),b(f,i),b(e,d),b(e,h),b(e,a),b(e,p),u||(g=[q(r,"change",t[3]),q(r,"input",t[3]),q(h,"click",t[2]),q(p,"click",t[1])],u=!0)},p(_,[m]){m&1&&fe(r,_[0]),m&1&&me(o,_[0])},i:w,o:w,d(_){_&&B(e),u=!1,U(g)}}}function tt(t,e,n){let l,s;Z(t,$,o=>n(4,l=o)),Z(t,re,o=>n(0,s=o));function r(){l.forEach(o=>{o.isReplaceable&&(o.userInputValue="",o.isValidValue=!1)}),$.set(l)}function c(o){Ce.call(this,t,o)}function f(){s=$e(this.value),re.set(s)}return[s,r,c,f]}class nt extends P{constructor(e){super(),N(this,e,tt,et,E,{})}}function pe(t,e,n){const l=t.slice();return l[11]=e[n].coord,l[12]=e[n].isActiveTile,l[13]=e[n].userInputValue,l[14]=e[n].isUserInput,l[15]=e[n].isReplaceable,l[16]=e[n].isValidValue,l[17]=e,l[18]=n,l}function he(t,e){let n,l,s,r;function c(o){e[6](o,e[12],e[17],e[18])}let f={coord:e[11],userInputValue:e[13],isUserInput:e[14],isReplaceable:e[15],isValidValue:e[16]};return e[12]!==void 0&&(f.isActive=e[12]),l=new je({props:f}),te.push(()=>Be(l,"isActive",c)),{key:t,first:null,c(){n=Ve(),x(l.$$.fragment),this.first=n},m(o,i){D(o,n,i),M(l,o,i),r=!0},p(o,i){e=o;const d={};i&1&&(d.coord=e[11]),i&1&&(d.userInputValue=e[13]),i&1&&(d.isUserInput=e[14]),i&1&&(d.isReplaceable=e[15]),i&1&&(d.isValidValue=e[16]),!s&&i&1&&(s=!0,d.isActive=e[12],Te(()=>s=!1)),l.$set(d)},i(o){r||(R(l.$$.fragment,o),r=!0)},o(o){T(l.$$.fragment,o),r=!1},d(o){o&&B(n),L(l,o)}}}function lt(t){let e,n,l=[],s=new Map,r,c,f,o,i,d=t[0];const h=a=>a[11];for(let a=0;a<d.length;a+=1){let p=pe(t,d,a),u=h(p);s.set(u,l[a]=he(u,p))}return c=new nt({}),c.$on("click",t[7]),{c(){e=V("div"),n=V("div");for(let a=0;a<l.length;a+=1)l[a].c();r=S(),x(c.$$.fragment),v(n,"class","board svelte-1ewb9pw"),v(e,"class","board-and-controls svelte-1ewb9pw")},m(a,p){D(a,e,p),b(e,n);for(let u=0;u<l.length;u+=1)l[u].m(n,null);b(e,r),M(c,e,null),f=!0,o||(i=q(window,"keydown",t[5]),o=!0)},p(a,[p]){p&1&&(d=a[0],ze(),l=Ue(l,p,h,1,a,d,s,n,Le,he,null,pe),Me())},i(a){if(!f){for(let p=0;p<d.length;p+=1)R(l[p]);R(c.$$.fragment,a),f=!0}},o(a){for(let p=0;p<l.length;p+=1)T(l[p]);T(c.$$.fragment,a),f=!1},d(a){a&&B(e);for(let p=0;p<l.length;p+=1)l[p].d();L(c),o=!1,i()}}}function st(t){return t.isReplaceable}function rt(t){return new Promise((e,n)=>{setTimeout(e,t)})}function it(t,e,n){let l,s;Z(t,re,u=>n(8,l=u)),Z(t,$,u=>n(0,s=u)),Ae(()=>{r(),c()});function r(){$.update(u=>qe())}function c(){const u=He[4],g=xe(u,45);$.update(_=>(_.forEach((m,I)=>{m.realValue=u[I],g[I]!="x"?(m.userInputValue=u[I],m.isReplaceable=!1,m.isValidValue=!0):(m.userInputValue="",m.isReplaceable=!0,m.isValidValue=!1)}),_))}function f(){return s.find(u=>u.isActiveTile)}function o(u){u.isValidValue=!1,u.userInputValue="",u.isReplaceable=!0,$.set(s)}function i(u,g){u.isValidValue=Je(s,u,g),u.userInputValue=g,u.isUserInput=!0,$.set(s)}async function d(){if(Xe(s))return console.log("Solution found!"),!0;let u=null,g=10;for(const m of s)if(!m.userInputValue){const I=de(m,s);I.length<g&&(u=m,g=I.length)}const _=de(u,s);for(const m of _){if(i(u,m),await rt(l),d())return!0;console.log(u),o(u)}return!1}const h=u=>{const g=u.key,_=f();if(!!_&&!!Fe.includes(g)){if(g==="Delete"){o(_);return}!st(_)||i(_,g)}};function a(u,g,_,m){_[m].isActiveTile=u,$.set(s)}return[s,f,o,i,d,h,a,()=>d()]}class ot extends P{constructor(e){super(),N(this,e,it,lt,E,{})}}function ut(t){let e;return{c(){e=V("div"),e.textContent="M's Sudoku Visualizer",v(e,"class","header svelte-jzwt4")},m(n,l){D(n,e,l)},p:w,i:w,o:w,d(n){n&&B(e)}}}class ct extends P{constructor(e){super(),N(this,e,null,ut,E,{})}}class at extends P{constructor(e){super(),N(this,e,null,null,E,{})}}class ft extends P{constructor(e){super(),N(this,e,null,null,E,{})}}function dt(t){let e,n,l,s,r,c,f,o,i,d;return n=new ct({}),r=new ft({}),f=new ot({}),i=new at({}),{c(){e=V("main"),x(n.$$.fragment),l=S(),s=V("div"),x(r.$$.fragment),c=S(),x(f.$$.fragment),o=S(),x(i.$$.fragment),v(s,"class","container svelte-1hd16o6"),v(e,"class","svelte-1hd16o6")},m(h,a){D(h,e,a),M(n,e,null),b(e,l),b(e,s),M(r,s,null),b(s,c),M(f,s,null),b(s,o),M(i,s,null),d=!0},p:w,i(h){d||(R(n.$$.fragment,h),R(r.$$.fragment,h),R(f.$$.fragment,h),R(i.$$.fragment,h),d=!0)},o(h){T(n.$$.fragment,h),T(r.$$.fragment,h),T(f.$$.fragment,h),T(i.$$.fragment,h),d=!1},d(h){h&&B(e),L(n),L(r),L(f),L(i)}}}class pt extends P{constructor(e){super(),N(this,e,null,dt,E,{})}}new pt({target:document.getElementById("app")});
