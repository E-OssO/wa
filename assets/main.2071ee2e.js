let A;async function q(){return A===void 0&&(A=_()),A}async function _(){return F(await WA.room.getTiledMap())}function F(n){const e=new Map;return j(n.layers,"",e),e}function j(n,e,r){for(const t of n)t.type==="group"?j(t.layers,e+t.name+"/",r):(t.name=e+t.name,r.set(t.name,t))}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var G=Object.prototype.toString,R=Array.isArray||function(e){return G.call(e)==="[object Array]"};function U(n){return typeof n=="function"}function $(n){return R(n)?"array":typeof n}function W(n){return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function M(n,e){return n!=null&&typeof n=="object"&&e in n}function B(n,e){return n!=null&&typeof n!="object"&&n.hasOwnProperty&&n.hasOwnProperty(e)}var D=RegExp.prototype.test;function H(n,e){return D.call(n,e)}var K=/\S/;function z(n){return!H(K,n)}var J={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function N(n){return String(n).replace(/[&<>"'`=\/]/g,function(r){return J[r]})}var Q=/\s*/,V=/\s+/,m=/\s*=/,X=/\s*\}/,Y=/#|\^|\/|>|\{|&|=|!/;function Z(n,e){if(!n)return[];var r=!1,t=[],s=[],a=[],l=!1,i=!1,o="",u=0;function p(){if(l&&!i)for(;a.length;)delete s[a.pop()];else a=[];l=!1,i=!1}var d,b,I;function L(g){if(typeof g=="string"&&(g=g.split(V,2)),!R(g)||g.length!==2)throw new Error("Invalid tags: "+g);d=new RegExp(W(g[0])+"\\s*"),b=new RegExp("\\s*"+W(g[1])),I=new RegExp("\\s*"+W("}"+g[1]))}L(e||v.tags);for(var c=new S(n),w,h,y,T,k,E;!c.eos();){if(w=c.pos,y=c.scanUntil(d),y)for(var P=0,O=y.length;P<O;++P)T=y.charAt(P),z(T)?(a.push(s.length),o+=T):(i=!0,r=!0,o+=" "),s.push(["text",T,w,w+1]),w+=1,T===`
`&&(p(),o="",u=0,r=!1);if(!c.scan(d))break;if(l=!0,h=c.scan(Y)||"name",c.scan(Q),h==="="?(y=c.scanUntil(m),c.scan(m),c.scanUntil(b)):h==="{"?(y=c.scanUntil(I),c.scan(X),c.scanUntil(b),h="&"):y=c.scanUntil(b),!c.scan(b))throw new Error("Unclosed tag at "+c.pos);if(h==">"?k=[h,y,w,c.pos,o,u,r]:k=[h,y,w,c.pos],u++,s.push(k),h==="#"||h==="^")t.push(k);else if(h==="/"){if(E=t.pop(),!E)throw new Error('Unopened section "'+y+'" at '+w);if(E[1]!==y)throw new Error('Unclosed section "'+E[1]+'" at '+w)}else h==="name"||h==="{"||h==="&"?i=!0:h==="="&&L(y)}if(p(),E=t.pop(),E)throw new Error('Unclosed section "'+E[1]+'" at '+c.pos);return re(ee(s))}function ee(n){for(var e=[],r,t,s=0,a=n.length;s<a;++s)r=n[s],r&&(r[0]==="text"&&t&&t[0]==="text"?(t[1]+=r[1],t[3]=r[3]):(e.push(r),t=r));return e}function re(n){for(var e=[],r=e,t=[],s,a,l=0,i=n.length;l<i;++l)switch(s=n[l],s[0]){case"#":case"^":r.push(s),t.push(s),r=s[4]=[];break;case"/":a=t.pop(),a[5]=s[2],r=t.length>0?t[t.length-1][4]:e;break;default:r.push(s)}return e}function S(n){this.string=n,this.tail=n,this.pos=0}S.prototype.eos=function(){return this.tail===""};S.prototype.scan=function(e){var r=this.tail.match(e);if(!r||r.index!==0)return"";var t=r[0];return this.tail=this.tail.substring(t.length),this.pos+=t.length,t};S.prototype.scanUntil=function(e){var r=this.tail.search(e),t;switch(r){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,r),this.tail=this.tail.substring(r)}return this.pos+=t.length,t};function C(n,e){this.view=n,this.cache={".":this.view},this.parent=e}C.prototype.push=function(e){return new C(e,this)};C.prototype.lookup=function(e){var r=this.cache,t;if(r.hasOwnProperty(e))t=r[e];else{for(var s=this,a,l,i,o=!1;s;){if(e.indexOf(".")>0)for(a=s.view,l=e.split("."),i=0;a!=null&&i<l.length;)i===l.length-1&&(o=M(a,l[i])||B(a,l[i])),a=a[l[i++]];else a=s.view[e],o=M(s.view,e);if(o){t=a;break}s=s.parent}r[e]=t}return U(t)&&(t=t.call(this.view)),t};function f(){this.templateCache={_cache:{},set:function(e,r){this._cache[e]=r},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}f.prototype.clearCache=function(){typeof this.templateCache!="undefined"&&this.templateCache.clear()};f.prototype.parse=function(e,r){var t=this.templateCache,s=e+":"+(r||v.tags).join(":"),a=typeof t!="undefined",l=a?t.get(s):void 0;return l==null&&(l=Z(e,r),a&&t.set(s,l)),l};f.prototype.render=function(e,r,t,s){var a=this.getConfigTags(s),l=this.parse(e,a),i=r instanceof C?r:new C(r,void 0);return this.renderTokens(l,i,t,e,s)};f.prototype.renderTokens=function(e,r,t,s,a){for(var l="",i,o,u,p=0,d=e.length;p<d;++p)u=void 0,i=e[p],o=i[0],o==="#"?u=this.renderSection(i,r,t,s,a):o==="^"?u=this.renderInverted(i,r,t,s,a):o===">"?u=this.renderPartial(i,r,t,a):o==="&"?u=this.unescapedValue(i,r):o==="name"?u=this.escapedValue(i,r,a):o==="text"&&(u=this.rawValue(i)),u!==void 0&&(l+=u);return l};f.prototype.renderSection=function(e,r,t,s,a){var l=this,i="",o=r.lookup(e[1]);function u(b){return l.render(b,r,t,a)}if(!!o){if(R(o))for(var p=0,d=o.length;p<d;++p)i+=this.renderTokens(e[4],r.push(o[p]),t,s,a);else if(typeof o=="object"||typeof o=="string"||typeof o=="number")i+=this.renderTokens(e[4],r.push(o),t,s,a);else if(U(o)){if(typeof s!="string")throw new Error("Cannot use higher-order sections without the original template");o=o.call(r.view,s.slice(e[3],e[5]),u),o!=null&&(i+=o)}else i+=this.renderTokens(e[4],r,t,s,a);return i}};f.prototype.renderInverted=function(e,r,t,s,a){var l=r.lookup(e[1]);if(!l||R(l)&&l.length===0)return this.renderTokens(e[4],r,t,s,a)};f.prototype.indentPartial=function(e,r,t){for(var s=r.replace(/[^ \t]/g,""),a=e.split(`
`),l=0;l<a.length;l++)a[l].length&&(l>0||!t)&&(a[l]=s+a[l]);return a.join(`
`)};f.prototype.renderPartial=function(e,r,t,s){if(!!t){var a=this.getConfigTags(s),l=U(t)?t(e[1]):t[e[1]];if(l!=null){var i=e[6],o=e[5],u=e[4],p=l;o==0&&u&&(p=this.indentPartial(l,u,i));var d=this.parse(p,a);return this.renderTokens(d,r,t,p,s)}}};f.prototype.unescapedValue=function(e,r){var t=r.lookup(e[1]);if(t!=null)return t};f.prototype.escapedValue=function(e,r,t){var s=this.getConfigEscape(t)||v.escape,a=r.lookup(e[1]);if(a!=null)return typeof a=="number"&&s===v.escape?String(a):s(a)};f.prototype.rawValue=function(e){return e[1]};f.prototype.getConfigTags=function(e){return R(e)?e:e&&typeof e=="object"?e.tags:void 0};f.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!R(e))return e.escape};var v={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(n){x.templateCache=n},get templateCache(){return x.templateCache}},x=new f;v.clearCache=function(){return x.clearCache()};v.parse=function(e,r){return x.parse(e,r)};v.render=function(e,r,t,s){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+$(e)+'" was given as the first argument for mustache#render(template, view, partials)');return x.render(e,r,t,s)};v.escape=N;v.Scanner=S;v.Context=C;v.Writer=f;console.log("Script started successfully");WA.onInit().then(async()=>{console.log("Scripting API ready"),console.log("Player tags: ",WA.player.tags);let n=await q();n.forEach((e,r)=>{WA.room.onEnterLayer(r).subscribe(async()=>{var s;if(console.log(r,e),r==="Room2/toggle"){const a="Room2/layerToToggle";let l=n.get(a);if(l){console.log("layerToToggle",l.visible);let i=(s=l.properties)==null?void 0:s.find(o=>o.name==="test");console.log("property test",i),l.visible?WA.room.hideLayer(a):(WA.room.showLayer(a),WA.room.setProperty(r,"test",1))}}if(r==="Room3/move"){const a="Room3/layerToMove";n.get(a)&&WA.room.setTiles([{x:26,y:4,tile:"blue",layer:a},{x:27,y:4,tile:"blue",layer:a},{x:28,y:4,tile:"blue",layer:a},{x:26,y:5,tile:"blue",layer:a},{x:27,y:5,tile:"blue",layer:a},{x:28,y:5,tile:"blue",layer:a},{x:26,y:6,tile:"blue",layer:a},{x:27,y:6,tile:"blue",layer:a},{x:28,y:6,tile:"blue",layer:a},{x:23,y:4,tile:null,layer:a},{x:24,y:4,tile:null,layer:a},{x:25,y:4,tile:null,layer:a},{x:23,y:5,tile:null,layer:a},{x:24,y:5,tile:null,layer:a},{x:25,y:5,tile:null,layer:a},{x:23,y:6,tile:null,layer:a},{x:24,y:6,tile:null,layer:a},{x:25,y:6,tile:null,layer:a}])}})})}).catch(n=>console.error(n));
