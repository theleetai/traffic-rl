import{Ab as v0,Da as h0,Ia as d0,M as m0,Pa as g0,Q as ll,Qa as x0,Ra as y0,U as f0,Ua as b0,Wa as w0,Xa as C0,a as No,bb as S0,c as Jr,d as to,e as xc,f as B,l as c0,m as Os,z as p0}from"./chunk-XSCUIATP.js";var j0=Jr((D5,K0)=>{"use strict";K0.exports=he;var eo=null;try{eo=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function he(r,e,t){this.low=r|0,this.high=e|0,this.unsigned=!!t}he.prototype.__isLong__;Object.defineProperty(he.prototype,"__isLong__",{value:!0});function Dr(r){return(r&&r.__isLong__)===!0}he.isLong=Dr;var z0={},M0={};function da(r,e){var t,o,n;return e?(r>>>=0,(n=0<=r&&r<256)&&(o=M0[r],o)?o:(t=de(r,(r|0)<0?-1:0,!0),n&&(M0[r]=t),t)):(r|=0,(n=-128<=r&&r<128)&&(o=z0[r],o)?o:(t=de(r,r<0?-1:0,!1),n&&(z0[r]=t),t))}he.fromInt=da;function ro(r,e){if(isNaN(r))return e?ha:oo;if(e){if(r<0)return ha;if(r>=W0)return q0}else{if(r<=-V0)return $r;if(r+1>=V0)return H0}return r<0?ro(-r,e).neg():de(r%eu|0,r/eu|0,e)}he.fromNumber=ro;function de(r,e,t){return new he(r,e,t)}he.fromBits=de;var fm=Math.pow;function Eg(r,e,t){if(r.length===0)throw Error("empty string");if(r==="NaN"||r==="Infinity"||r==="+Infinity"||r==="-Infinity")return oo;if(typeof e=="number"?(t=e,e=!1):e=!!e,t=t||10,t<2||36<t)throw RangeError("radix");var o;if((o=r.indexOf("-"))>0)throw Error("interior hyphen");if(o===0)return Eg(r.substring(1),e,t).neg();for(var n=ro(fm(t,8)),s=oo,i=0;i<r.length;i+=8){var a=Math.min(8,r.length-i),l=parseInt(r.substring(i,i+a),t);if(a<8){var u=ro(fm(t,a));s=s.mul(u).add(ro(l))}else s=s.mul(n),s=s.add(ro(l))}return s.unsigned=e,s}he.fromString=Eg;function To(r,e){return typeof r=="number"?ro(r,e):typeof r=="string"?Eg(r,e):de(r.low,r.high,typeof e=="boolean"?e:r.unsigned)}he.fromValue=To;var B0=65536,c_=1<<24,eu=B0*B0,W0=eu*eu,V0=W0/2,G0=da(c_),oo=da(0);he.ZERO=oo;var ha=da(0,!0);he.UZERO=ha;var tu=da(1);he.ONE=tu;var U0=da(1,!0);he.UONE=U0;var kg=da(-1);he.NEG_ONE=kg;var H0=de(-1,2147483647,!1);he.MAX_VALUE=H0;var q0=de(-1,-1,!0);he.MAX_UNSIGNED_VALUE=q0;var $r=de(0,-2147483648,!1);he.MIN_VALUE=$r;var at=he.prototype;at.toInt=function(){return this.unsigned?this.low>>>0:this.low};at.toNumber=function(){return this.unsigned?(this.high>>>0)*eu+(this.low>>>0):this.high*eu+(this.low>>>0)};at.toString=function(e){if(e=e||10,e<2||36<e)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq($r)){var t=ro(e),o=this.div(t),n=o.mul(t).sub(this);return o.toString(e)+n.toInt().toString(e)}else return"-"+this.neg().toString(e);for(var s=ro(fm(e,6),this.unsigned),i=this,a="";;){var l=i.div(s),u=i.sub(l.mul(s)).toInt()>>>0,c=u.toString(e);if(i=l,i.isZero())return c+a;for(;c.length<6;)c="0"+c;a=""+c+a}};at.getHighBits=function(){return this.high};at.getHighBitsUnsigned=function(){return this.high>>>0};at.getLowBits=function(){return this.low};at.getLowBitsUnsigned=function(){return this.low>>>0};at.getNumBitsAbs=function(){if(this.isNegative())return this.eq($r)?64:this.neg().getNumBitsAbs();for(var e=this.high!=0?this.high:this.low,t=31;t>0&&(e&1<<t)==0;t--);return this.high!=0?t+33:t+1};at.isZero=function(){return this.high===0&&this.low===0};at.eqz=at.isZero;at.isNegative=function(){return!this.unsigned&&this.high<0};at.isPositive=function(){return this.unsigned||this.high>=0};at.isOdd=function(){return(this.low&1)===1};at.isEven=function(){return(this.low&1)===0};at.equals=function(e){return Dr(e)||(e=To(e)),this.unsigned!==e.unsigned&&this.high>>>31===1&&e.high>>>31===1?!1:this.high===e.high&&this.low===e.low};at.eq=at.equals;at.notEquals=function(e){return!this.eq(e)};at.neq=at.notEquals;at.ne=at.notEquals;at.lessThan=function(e){return this.comp(e)<0};at.lt=at.lessThan;at.lessThanOrEqual=function(e){return this.comp(e)<=0};at.lte=at.lessThanOrEqual;at.le=at.lessThanOrEqual;at.greaterThan=function(e){return this.comp(e)>0};at.gt=at.greaterThan;at.greaterThanOrEqual=function(e){return this.comp(e)>=0};at.gte=at.greaterThanOrEqual;at.ge=at.greaterThanOrEqual;at.compare=function(e){if(Dr(e)||(e=To(e)),this.eq(e))return 0;var t=this.isNegative(),o=e.isNegative();return t&&!o?-1:!t&&o?1:this.unsigned?e.high>>>0>this.high>>>0||e.high===this.high&&e.low>>>0>this.low>>>0?-1:1:this.sub(e).isNegative()?-1:1};at.comp=at.compare;at.negate=function(){return!this.unsigned&&this.eq($r)?$r:this.not().add(tu)};at.neg=at.negate;at.add=function(e){Dr(e)||(e=To(e));var t=this.high>>>16,o=this.high&65535,n=this.low>>>16,s=this.low&65535,i=e.high>>>16,a=e.high&65535,l=e.low>>>16,u=e.low&65535,c=0,p=0,m=0,f=0;return f+=s+u,m+=f>>>16,f&=65535,m+=n+l,p+=m>>>16,m&=65535,p+=o+a,c+=p>>>16,p&=65535,c+=t+i,c&=65535,de(m<<16|f,c<<16|p,this.unsigned)};at.subtract=function(e){return Dr(e)||(e=To(e)),this.add(e.neg())};at.sub=at.subtract;at.multiply=function(e){if(this.isZero())return oo;if(Dr(e)||(e=To(e)),eo){var t=eo.mul(this.low,this.high,e.low,e.high);return de(t,eo.get_high(),this.unsigned)}if(e.isZero())return oo;if(this.eq($r))return e.isOdd()?$r:oo;if(e.eq($r))return this.isOdd()?$r:oo;if(this.isNegative())return e.isNegative()?this.neg().mul(e.neg()):this.neg().mul(e).neg();if(e.isNegative())return this.mul(e.neg()).neg();if(this.lt(G0)&&e.lt(G0))return ro(this.toNumber()*e.toNumber(),this.unsigned);var o=this.high>>>16,n=this.high&65535,s=this.low>>>16,i=this.low&65535,a=e.high>>>16,l=e.high&65535,u=e.low>>>16,c=e.low&65535,p=0,m=0,f=0,h=0;return h+=i*c,f+=h>>>16,h&=65535,f+=s*c,m+=f>>>16,f&=65535,f+=i*u,m+=f>>>16,f&=65535,m+=n*c,p+=m>>>16,m&=65535,m+=s*u,p+=m>>>16,m&=65535,m+=i*l,p+=m>>>16,m&=65535,p+=o*c+n*u+s*l+i*a,p&=65535,de(f<<16|h,p<<16|m,this.unsigned)};at.mul=at.multiply;at.divide=function(e){if(Dr(e)||(e=To(e)),e.isZero())throw Error("division by zero");if(eo){if(!this.unsigned&&this.high===-2147483648&&e.low===-1&&e.high===-1)return this;var t=(this.unsigned?eo.div_u:eo.div_s)(this.low,this.high,e.low,e.high);return de(t,eo.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?ha:oo;var o,n,s;if(this.unsigned){if(e.unsigned||(e=e.toUnsigned()),e.gt(this))return ha;if(e.gt(this.shru(1)))return U0;s=ha}else{if(this.eq($r)){if(e.eq(tu)||e.eq(kg))return $r;if(e.eq($r))return tu;var i=this.shr(1);return o=i.div(e).shl(1),o.eq(oo)?e.isNegative()?tu:kg:(n=this.sub(e.mul(o)),s=o.add(n.div(e)),s)}else if(e.eq($r))return this.unsigned?ha:oo;if(this.isNegative())return e.isNegative()?this.neg().div(e.neg()):this.neg().div(e).neg();if(e.isNegative())return this.div(e.neg()).neg();s=oo}for(n=this;n.gte(e);){o=Math.max(1,Math.floor(n.toNumber()/e.toNumber()));for(var a=Math.ceil(Math.log(o)/Math.LN2),l=a<=48?1:fm(2,a-48),u=ro(o),c=u.mul(e);c.isNegative()||c.gt(n);)o-=l,u=ro(o,this.unsigned),c=u.mul(e);u.isZero()&&(u=tu),s=s.add(u),n=n.sub(c)}return s};at.div=at.divide;at.modulo=function(e){if(Dr(e)||(e=To(e)),eo){var t=(this.unsigned?eo.rem_u:eo.rem_s)(this.low,this.high,e.low,e.high);return de(t,eo.get_high(),this.unsigned)}return this.sub(this.div(e).mul(e))};at.mod=at.modulo;at.rem=at.modulo;at.not=function(){return de(~this.low,~this.high,this.unsigned)};at.and=function(e){return Dr(e)||(e=To(e)),de(this.low&e.low,this.high&e.high,this.unsigned)};at.or=function(e){return Dr(e)||(e=To(e)),de(this.low|e.low,this.high|e.high,this.unsigned)};at.xor=function(e){return Dr(e)||(e=To(e)),de(this.low^e.low,this.high^e.high,this.unsigned)};at.shiftLeft=function(e){return Dr(e)&&(e=e.toInt()),(e&=63)===0?this:e<32?de(this.low<<e,this.high<<e|this.low>>>32-e,this.unsigned):de(0,this.low<<e-32,this.unsigned)};at.shl=at.shiftLeft;at.shiftRight=function(e){return Dr(e)&&(e=e.toInt()),(e&=63)===0?this:e<32?de(this.low>>>e|this.high<<32-e,this.high>>e,this.unsigned):de(this.high>>e-32,this.high>=0?0:-1,this.unsigned)};at.shr=at.shiftRight;at.shiftRightUnsigned=function(e){if(Dr(e)&&(e=e.toInt()),e&=63,e===0)return this;var t=this.high;if(e<32){var o=this.low;return de(o>>>e|t<<32-e,t>>>e,this.unsigned)}else return e===32?de(t,0,this.unsigned):de(t>>>e-32,0,this.unsigned)};at.shru=at.shiftRightUnsigned;at.shr_u=at.shiftRightUnsigned;at.toSigned=function(){return this.unsigned?de(this.low,this.high,!1):this};at.toUnsigned=function(){return this.unsigned?this:de(this.low,this.high,!0)};at.toBytes=function(e){return e?this.toBytesLE():this.toBytesBE()};at.toBytesLE=function(){var e=this.high,t=this.low;return[t&255,t>>>8&255,t>>>16&255,t>>>24,e&255,e>>>8&255,e>>>16&255,e>>>24]};at.toBytesBE=function(){var e=this.high,t=this.low;return[e>>>24,e>>>16&255,e>>>8&255,e&255,t>>>24,t>>>16&255,t>>>8&255,t&255]};he.fromBytes=function(e,t,o){return o?he.fromBytesLE(e,t):he.fromBytesBE(e,t)};he.fromBytesLE=function(e,t){return new he(e[0]|e[1]<<8|e[2]<<16|e[3]<<24,e[4]|e[5]<<8|e[6]<<16|e[7]<<24,t)};he.fromBytesBE=function(e,t){return new he(e[4]<<24|e[5]<<16|e[6]<<8|e[7],e[0]<<24|e[1]<<16|e[2]<<8|e[3],t)}});var PC=Jr((uu,LC)=>{"use strict";var Z_=function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")},Na=Z_();LC.exports=uu=Na.fetch;Na.fetch&&(uu.default=Na.fetch.bind(Na));uu.Headers=Na.Headers;uu.Request=Na.Request;uu.Response=Na.Response});var zC=Jr(()=>{"use strict"});var aS=Jr((iS,Nx)=>{"use strict";(function(r,e,t){function o(a){var l=this,u=i();l.next=function(){var c=2091639*l.s0+l.c*23283064365386963e-26;return l.s0=l.s1,l.s1=l.s2,l.s2=c-(l.c=c|0)},l.c=1,l.s0=u(" "),l.s1=u(" "),l.s2=u(" "),l.s0-=u(a),l.s0<0&&(l.s0+=1),l.s1-=u(a),l.s1<0&&(l.s1+=1),l.s2-=u(a),l.s2<0&&(l.s2+=1),u=null}function n(a,l){return l.c=a.c,l.s0=a.s0,l.s1=a.s1,l.s2=a.s2,l}function s(a,l){var u=new o(a),c=l&&l.state,p=u.next;return p.int32=function(){return u.next()*4294967296|0},p.double=function(){return p()+(p()*2097152|0)*11102230246251565e-32},p.quick=p,c&&(typeof c=="object"&&n(c,u),p.state=function(){return n(u,{})}),p}function i(){var a=4022871197,l=function(u){u=String(u);for(var c=0;c<u.length;c++){a+=u.charCodeAt(c);var p=.02519603282416938*a;a=p>>>0,p-=a,p*=a,a=p>>>0,p-=a,a+=p*4294967296}return(a>>>0)*23283064365386963e-26};return l}e&&e.exports?e.exports=s:t&&t.amd?t(function(){return s}):this.alea=s})(iS,typeof Nx=="object"&&Nx,typeof define=="function"&&define)});var uS=Jr((lS,Ix)=>{"use strict";(function(r,e,t){function o(i){var a=this,l="";a.x=0,a.y=0,a.z=0,a.w=0,a.next=function(){var c=a.x^a.x<<11;return a.x=a.y,a.y=a.z,a.z=a.w,a.w^=a.w>>>19^c^c>>>8},i===(i|0)?a.x=i:l+=i;for(var u=0;u<l.length+64;u++)a.x^=l.charCodeAt(u)|0,a.next()}function n(i,a){return a.x=i.x,a.y=i.y,a.z=i.z,a.w=i.w,a}function s(i,a){var l=new o(i),u=a&&a.state,c=function(){return(l.next()>>>0)/4294967296};return c.double=function(){do var p=l.next()>>>11,m=(l.next()>>>0)/4294967296,f=(p+m)/(1<<21);while(f===0);return f},c.int32=l.next,c.quick=c,u&&(typeof u=="object"&&n(u,l),c.state=function(){return n(l,{})}),c}e&&e.exports?e.exports=s:t&&t.amd?t(function(){return s}):this.xor128=s})(lS,typeof Ix=="object"&&Ix,typeof define=="function"&&define)});var pS=Jr((cS,Tx)=>{"use strict";(function(r,e,t){function o(i){var a=this,l="";a.next=function(){var c=a.x^a.x>>>2;return a.x=a.y,a.y=a.z,a.z=a.w,a.w=a.v,(a.d=a.d+362437|0)+(a.v=a.v^a.v<<4^(c^c<<1))|0},a.x=0,a.y=0,a.z=0,a.w=0,a.v=0,i===(i|0)?a.x=i:l+=i;for(var u=0;u<l.length+64;u++)a.x^=l.charCodeAt(u)|0,u==l.length&&(a.d=a.x<<10^a.x>>>4),a.next()}function n(i,a){return a.x=i.x,a.y=i.y,a.z=i.z,a.w=i.w,a.v=i.v,a.d=i.d,a}function s(i,a){var l=new o(i),u=a&&a.state,c=function(){return(l.next()>>>0)/4294967296};return c.double=function(){do var p=l.next()>>>11,m=(l.next()>>>0)/4294967296,f=(p+m)/(1<<21);while(f===0);return f},c.int32=l.next,c.quick=c,u&&(typeof u=="object"&&n(u,l),c.state=function(){return n(l,{})}),c}e&&e.exports?e.exports=s:t&&t.amd?t(function(){return s}):this.xorwow=s})(cS,typeof Tx=="object"&&Tx,typeof define=="function"&&define)});var fS=Jr((mS,kx)=>{"use strict";(function(r,e,t){function o(i){var a=this;a.next=function(){var u=a.x,c=a.i,p,m,f;return p=u[c],p^=p>>>7,m=p^p<<24,p=u[c+1&7],m^=p^p>>>10,p=u[c+3&7],m^=p^p>>>3,p=u[c+4&7],m^=p^p<<7,p=u[c+7&7],p=p^p<<13,m^=p^p<<9,u[c]=m,a.i=c+1&7,m};function l(u,c){var p,m,f=[];if(c===(c|0))m=f[0]=c;else for(c=""+c,p=0;p<c.length;++p)f[p&7]=f[p&7]<<15^c.charCodeAt(p)+f[p+1&7]<<13;for(;f.length<8;)f.push(0);for(p=0;p<8&&f[p]===0;++p);for(p==8?m=f[7]=-1:m=f[p],u.x=f,u.i=0,p=256;p>0;--p)u.next()}l(a,i)}function n(i,a){return a.x=i.x.slice(),a.i=i.i,a}function s(i,a){i==null&&(i=+new Date);var l=new o(i),u=a&&a.state,c=function(){return(l.next()>>>0)/4294967296};return c.double=function(){do var p=l.next()>>>11,m=(l.next()>>>0)/4294967296,f=(p+m)/(1<<21);while(f===0);return f},c.int32=l.next,c.quick=c,u&&(u.x&&n(u,l),c.state=function(){return n(l,{})}),c}e&&e.exports?e.exports=s:t&&t.amd?t(function(){return s}):this.xorshift7=s})(mS,typeof kx=="object"&&kx,typeof define=="function"&&define)});var dS=Jr((hS,Ex)=>{"use strict";(function(r,e,t){function o(i){var a=this;a.next=function(){var u=a.w,c=a.X,p=a.i,m,f;return a.w=u=u+1640531527|0,f=c[p+34&127],m=c[p=p+1&127],f^=f<<13,m^=m<<17,f^=f>>>15,m^=m>>>12,f=c[p]=f^m,a.i=p,f+(u^u>>>16)|0};function l(u,c){var p,m,f,h,g,d=[],x=128;for(c===(c|0)?(m=c,c=null):(c=c+"\0",m=0,x=Math.max(x,c.length)),f=0,h=-32;h<x;++h)c&&(m^=c.charCodeAt((h+32)%c.length)),h===0&&(g=m),m^=m<<10,m^=m>>>15,m^=m<<4,m^=m>>>13,h>=0&&(g=g+1640531527|0,p=d[h&127]^=m+g,f=p==0?f+1:0);for(f>=128&&(d[(c&&c.length||0)&127]=-1),f=127,h=4*128;h>0;--h)m=d[f+34&127],p=d[f=f+1&127],m^=m<<13,p^=p<<17,m^=m>>>15,p^=p>>>12,d[f]=m^p;u.w=g,u.X=d,u.i=f}l(a,i)}function n(i,a){return a.i=i.i,a.w=i.w,a.X=i.X.slice(),a}function s(i,a){i==null&&(i=+new Date);var l=new o(i),u=a&&a.state,c=function(){return(l.next()>>>0)/4294967296};return c.double=function(){do var p=l.next()>>>11,m=(l.next()>>>0)/4294967296,f=(p+m)/(1<<21);while(f===0);return f},c.int32=l.next,c.quick=c,u&&(u.X&&n(u,l),c.state=function(){return n(l,{})}),c}e&&e.exports?e.exports=s:t&&t.amd?t(function(){return s}):this.xor4096=s})(hS,typeof Ex=="object"&&Ex,typeof define=="function"&&define)});var xS=Jr((gS,Ax)=>{"use strict";(function(r,e,t){function o(i){var a=this,l="";a.next=function(){var c=a.b,p=a.c,m=a.d,f=a.a;return c=c<<25^c>>>7^p,p=p-m|0,m=m<<24^m>>>8^f,f=f-c|0,a.b=c=c<<20^c>>>12^p,a.c=p=p-m|0,a.d=m<<16^p>>>16^f,a.a=f-c|0},a.a=0,a.b=0,a.c=-1640531527,a.d=1367130551,i===Math.floor(i)?(a.a=i/4294967296|0,a.b=i|0):l+=i;for(var u=0;u<l.length+20;u++)a.b^=l.charCodeAt(u)|0,a.next()}function n(i,a){return a.a=i.a,a.b=i.b,a.c=i.c,a.d=i.d,a}function s(i,a){var l=new o(i),u=a&&a.state,c=function(){return(l.next()>>>0)/4294967296};return c.double=function(){do var p=l.next()>>>11,m=(l.next()>>>0)/4294967296,f=(p+m)/(1<<21);while(f===0);return f},c.int32=l.next,c.quick=c,u&&(typeof u=="object"&&n(u,l),c.state=function(){return n(l,{})}),c}e&&e.exports?e.exports=s:t&&t.amd?t(function(){return s}):this.tychei=s})(gS,typeof Ax=="object"&&Ax,typeof define=="function"&&define)});var yS=Jr(()=>{"use strict"});var wS=Jr((bS,_m)=>{"use strict";(function(r,e,t){var o=256,n=6,s=52,i="random",a=t.pow(o,n),l=t.pow(2,s),u=l*2,c=o-1,p;function m(w,C,S){var E=[];C=C==!0?{entropy:!0}:C||{};var A=d(g(C.entropy?[w,y(e)]:w??x(),3),E),$=new f(E),_=function(){for(var L=$.g(n),M=a,V=0;L<l;)L=(L+V)*o,M*=o,V=$.g(1);for(;L>=u;)L/=2,M/=2,V>>>=1;return(L+V)/M};return _.int32=function(){return $.g(4)|0},_.quick=function(){return $.g(4)/4294967296},_.double=_,d(y($.S),e),(C.pass||S||function(L,M,V,G){return G&&(G.S&&h(G,$),L.state=function(){return h($,{})}),V?(t[i]=L,M):L})(_,A,"global"in C?C.global:this==t,C.state)}function f(w){var C,S=w.length,E=this,A=0,$=E.i=E.j=0,_=E.S=[];for(S||(w=[S++]);A<o;)_[A]=A++;for(A=0;A<o;A++)_[A]=_[$=c&$+w[A%S]+(C=_[A])],_[$]=C;(E.g=function(L){for(var M,V=0,G=E.i,W=E.j,U=E.S;L--;)M=U[G=c&G+1],V=V*o+U[c&(U[G]=U[W=c&W+M])+(U[W]=M)];return E.i=G,E.j=W,V})(o)}function h(w,C){return C.i=w.i,C.j=w.j,C.S=w.S.slice(),C}function g(w,C){var S=[],E=typeof w,A;if(C&&E=="object")for(A in w)try{S.push(g(w[A],C-1))}catch{}return S.length?S:E=="string"?w:w+"\0"}function d(w,C){for(var S=w+"",E,A=0;A<S.length;)C[c&A]=c&(E^=C[c&A]*19)+S.charCodeAt(A++);return y(C)}function x(){try{var w;return p&&(w=p.randomBytes)?w=w(o):(w=new Uint8Array(o),(r.crypto||r.msCrypto).getRandomValues(w)),y(w)}catch{var C=r.navigator,S=C&&C.plugins;return[+new Date,r,S,r.screen,y(e)]}}function y(w){return String.fromCharCode.apply(0,w)}if(d(t.random(),e),typeof _m=="object"&&_m.exports){_m.exports=m;try{p=yS()}catch{}}else typeof define=="function"&&define.amd?define(function(){return m}):t["seed"+i]=m})(typeof self<"u"?self:bS,[],Math)});var Uc=Jr((xat,CS)=>{"use strict";var xP=aS(),yP=uS(),bP=pS(),wP=fS(),CP=dS(),SP=xS(),Oa=wS();Oa.alea=xP;Oa.xor128=yP;Oa.xorwow=bP;Oa.xorshift7=wP;Oa.xor4096=CP;Oa.tychei=SP;CS.exports=Oa});var MF=["*"],N0=class r{variant="primary";size="md";disabled=!1;type="button";fullWidth=!1;click=new d0;get buttonClasses(){let e="inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",t={primary:"bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",secondary:"bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500",danger:"bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",success:"bg-green-600 text-white hover:bg-green-700 focus:ring-green-500"},o={sm:"px-3 py-1.5 text-sm",md:"px-4 py-2 text-sm",lg:"px-6 py-3 text-base"},n=this.fullWidth?"w-full":"",s=this.disabled?"opacity-50 cursor-not-allowed":"";return[e,t[this.variant],o[this.size],n,s].filter(Boolean).join(" ")}onClick(){this.disabled||this.click.emit()}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=h0({type:r,selectors:[["app-button"]],inputs:{variant:"variant",size:"size",disabled:"disabled",type:"type",fullWidth:"fullWidth"},outputs:{click:"click"},ngContentSelectors:MF,decls:2,vars:4,consts:[[3,"click","type","disabled"]],template:function(t,o){t&1&&(w0(),x0(0,"button",0),b0("click",function(){return o.onClick()}),C0(1),y0()),t&2&&(S0(o.buttonClasses),g0("type",o.type)("disabled",o.disabled))},dependencies:[v0],encapsulation:2})};var Ji=class{constructor(e,t){this.backend=e,this.dataMover=t,this.data=new WeakMap,this.dataIdsCount=0}get(e){return this.data.has(e)||this.dataMover.moveData(this.backend,e),this.data.get(e)}set(e,t){this.dataIdsCount++,this.data.set(e,t)}has(e){return this.data.has(e)}delete(e){return this.dataIdsCount--,this.data.delete(e)}numDataIds(){return this.dataIdsCount}},mn=class{refCount(e){return Ar("refCount")}incRef(e){return Ar("incRef")}timerAvailable(){return!0}time(e){return Ar("time")}read(e){return Ar("read")}readSync(e){return Ar("readSync")}readToGPU(e,t){return Ar("readToGPU")}numDataIds(){return Ar("numDataIds")}disposeData(e,t){return Ar("disposeData")}write(e,t,o){return Ar("write")}move(e,t,o,n,s){return Ar("move")}createTensorFromGPUData(e,t,o){return Ar("createTensorFromGPUData")}memory(){return Ar("memory")}floatPrecision(){return Ar("floatPrecision")}epsilon(){return this.floatPrecision()===32?1e-7:1e-4}dispose(){return Ar("dispose")}};function Ar(r){throw new Error(`'${r}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}function I0(r){let e=r.length,t=0;for(;e>0;)t=Math.random()*e|0,e--,Vp(r,e,t)}function BF(r,e){if(r.length!==e.length)throw new Error(`Array sizes must match to be shuffled together First array length was ${r.length}Second array length was ${e.length}`);let t=r.length,o=0;for(;t>0;)o=Math.random()*t|0,t--,Vp(r,t,o),Vp(e,t,o)}function ul(r,e,t){return Math.max(r,Math.min(e,t))}function VF(r){return r%2===0?r:r+1}function Vp(r,e,t){let o=r[e];r[e]=r[t],r[t]=o}function GF(r){let e=0;for(let t=0;t<r.length;t++)e+=r[t];return e}function WF(r,e){let t=Math.random();return e*t+(1-t)*r}function UF(r,e){let t=0;for(let o=0;o<r.length;o++){let n=Number(r[o])-Number(e[o]);t+=n*n}return t}function k(r,e){if(!r)throw new Error(typeof e=="string"?e:e())}function Gp(r,e,t=""){k(Ls(r,e),()=>t+` Shapes ${r} and ${e} must match`)}function yc(r){k(r!=null,()=>"The input to the tensor constructor must be a non-null value.")}function zt(r){if(r.length===0)return 1;let e=r[0];for(let t=1;t<r.length;t++)e*=r[t];return e}function HF(r){return r.length===0}function qF(r,e){if(r===e)return!0;if(r==null||e==null||r.length!==e.length)return!1;for(let t=0;t<r.length;t++)if(r[t]!==null&&e[t]!==null&&r[t]!==e[t])return!1;return!0}function Ls(r,e){if(r===e)return!0;if(r==null||e==null||r.length!==e.length)return!1;for(let t=0;t<r.length;t++)if(r[t]!==e[t])return!1;return!0}function fn(r){return r%1===0}function KF(r){if(Math.tanh!=null)return Math.tanh(r);if(r===1/0)return 1;if(r===-1/0)return-1;{let e=Math.exp(2*r);return(e-1)/(e+1)}}function jF(r){let e=Math.ceil(Math.sqrt(r));return[e,Math.ceil(r/e)]}function XF(r){let e=new Uint32Array(r);for(let t=0;t<r;++t)e[t]=t;return I0(e),e}function ea(r,e){return e<=r.length?r:r+" ".repeat(e-r.length)}function YF(r,e=n=>0,t,o){return new Promise((n,s)=>{let i=0,a=()=>{if(r()){n();return}i++;let l=e(i);if(t!=null&&i>=t){s();return}o!=null?o(a,l):setTimeout(a,l)};a()})}function ZF(r,e){let t=1,o=-1;for(let s=0;s<r.length;++s)if(r[s]>=0)t*=r[s];else if(r[s]===-1){if(o!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${o} and dim ${s}`);o=s}else if(r[s]<0)throw Error(`Shapes can not be < 0. Found ${r[s]} at dim ${s}`);if(o===-1){if(e>0&&e!==t)throw Error(`Size(${e}) must match the product of shape ${r}`);return r}if(t===0)throw Error(`Cannot infer the missing size in [${r}] when there are 0 elements`);if(e%t!==0)throw Error(`The implicit shape can't be a fractional number. Got ${e} / ${t}`);let n=r.slice();return n[o]=e/t,n}function Ae(r,e){let t=e.length;return r=r==null?e.map((o,n)=>n):[].concat(r),k(r.every(o=>o>=-t&&o<t),()=>`All values in axis param must be in range [-${t}, ${t}) but got axis ${r}`),k(r.every(o=>fn(o)),()=>`All values in axis param must be integers but got axis ${r}`),r.map(o=>o<0?t+o:o)}function gg(r,e){let t=[],o=[],n=e!=null&&Array.isArray(e)&&e.length===0,s=e==null||n?null:Ae(e,r).sort(),i=0;for(let a=0;a<r.length;++a){if(s!=null){if(s[i]===a&&r[a]!==1)throw new Error(`Can't squeeze axis ${a} since its dim '${r[a]}' is not 1`);(s[i]==null||s[i]>a)&&r[a]===1&&(t.push(r[a]),o.push(a)),s[i]<=a&&i++}r[a]!==1&&(t.push(r[a]),o.push(a))}return{newShape:t,keptDims:o}}function QF(r,e){return Wp(r,e)}function Wp(r,e){let t=null;if(r==null||r==="float32")t=new Float32Array(e);else if(r==="int32")t=new Int32Array(e);else if(r==="bool")t=new Uint8Array(e);else if(r==="string")t=new Array(e);else throw new Error(`Unknown data type ${r}`);return t}function xg(r,e){for(let t=0;t<r.length;t++){let o=r[t];if(isNaN(o)||!isFinite(o))throw Error(`A tensor of type ${e} being uploaded contains ${o}.`)}}function yg(r){return r==="bool"||r==="complex64"||r==="float32"||r==="int32"||r==="string"}function JF(r,e){return!(e==="complex64"||e==="float32"&&r!=="complex64"||e==="int32"&&r!=="float32"&&r!=="complex64"||e==="bool"&&r==="bool")}function cl(r){if(r==="float32"||r==="int32")return 4;if(r==="complex64")return 8;if(r==="bool")return 1;throw new Error(`Unknown dtype ${r}`)}function bg(r){if(r==null)return 0;let e=0;return r.forEach(t=>e+=t.length),e}function pl(r){return typeof r=="string"||r instanceof String}function T0(r){return typeof r=="boolean"}function k0(r){return typeof r=="number"}function Ps(r){return Array.isArray(r)?Ps(r[0]):r instanceof Float32Array?"float32":r instanceof Int32Array||r instanceof Uint8Array||r instanceof Uint8ClampedArray?"int32":k0(r)?"float32":pl(r)?"string":T0(r)?"bool":"float32"}function ml(r){return!!(r&&r.constructor&&r.call&&r.apply)}function fl(r,e){for(let t=e;t<r;++t)if(r%t===0)return t;return r}function Go(r){let e=r.length;if(e<2)return[];let t=new Array(e-1);t[e-2]=r[e-1];for(let o=e-3;o>=0;--o)t[o]=t[o+1]*r[o+1];return t}function E0(r,e,t,o=!1){let n=new Array;if(e.length===1){let s=e[0]*(o?2:1);for(let i=0;i<s;i++)n[i]=t[r+i]}else{let s=e[0],i=e.slice(1),a=i.reduce((l,u)=>l*u)*(o?2:1);for(let l=0;l<s;l++)n[l]=E0(r+l*a,i,t,o)}return n}function ta(r,e,t=!1){if(r.length===0)return e[0];let o=r.reduce((n,s)=>n*s)*(t?2:1);if(o===0)return[];if(o!==e.length)throw new Error(`[${r}] does not match the input size ${e.length}${t?" for a complex tensor":""}.`);return E0(0,r,e,t)}function t_(r,e){if(Array.isArray(r))return r;if(e==="float32")return r instanceof Float32Array?r:new Float32Array(r);if(e==="int32")return r instanceof Int32Array?r:new Int32Array(r);if(e==="bool"||e==="string")return Uint8Array.from(new Int32Array(r));throw new Error(`Unknown dtype ${e}`)}function bc(r,e){let t=hl(r,e);for(let o=0;o<t.length;o++)t[o]=1;return t}function hl(r,e){if(e==null||e==="float32"||e==="complex64")return new Float32Array(r);if(e==="int32")return new Int32Array(r);if(e==="bool")return new Uint8Array(r);throw new Error(`Unknown data type ${e}`)}function e_(r,e){let t=r.reduce((o,n)=>o*n,1);if(e==null||e==="float32")return ta(r,new Float32Array(t));if(e==="int32")return ta(r,new Int32Array(t));if(e==="bool")return ta(r,new Uint8Array(t));throw new Error(`Unknown data type ${e}`)}function We(r){r.forEach(e=>{k(Number.isInteger(e)&&e>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${r}].`)})}function r_(r,e,t){if(e===0)return 0;if(e===1)return r[0];let o=r[r.length-1];for(let n=0;n<r.length-1;++n)o+=t[n]*r[n];return o}function o_(r,e,t){if(e===0)return[];if(e===1)return[r];let o=new Array(e);for(let n=0;n<o.length-1;++n)o[n]=Math.floor(r/t[n]),r-=o[n]*t[n];return o[o.length-1]=r,o}function ra(r){return r&&r.then&&typeof r.then=="function"}var A0="tfjsflags",wc=class{constructor(e){this.global=e,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=s_,this.populateURLFlags()}setPlatform(e,t){this.platform!=null&&(P().getBool("IS_TEST")||P().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${e}.`)),this.platformName=e,this.platform=t}registerFlag(e,t,o){if(this.flagRegistry[e]={evaluationFn:t,setHook:o},this.urlFlags[e]!=null){let n=this.urlFlags[e];P().getBool("IS_TEST")||P().getBool("PROD")||console.warn(`Setting feature override from URL ${e}: ${n}.`),this.set(e,n)}}getAsync(e){return B(this,null,function*(){return e in this.flags?this.flags[e]:(this.flags[e]=yield this.evaluateFlag(e),this.flags[e])})}get(e){if(e in this.flags)return this.flags[e];let t=this.evaluateFlag(e);if(ra(t))throw new Error(`Flag ${e} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[e]=t,this.flags[e]}getNumber(e){return this.get(e)}getBool(e){return this.get(e)}getString(e){return this.get(e)}getFlags(){return this.flags}get features(){return this.flags}set(e,t){if(this.flagRegistry[e]==null)throw new Error(`Cannot set flag ${e} as it has not been registered.`);this.flags[e]=t,this.flagRegistry[e].setHook!=null&&this.flagRegistry[e].setHook(t)}evaluateFlag(e){if(this.flagRegistry[e]==null)throw new Error(`Cannot evaluate flag '${e}': no evaluation function found.`);return this.flagRegistry[e].evaluationFn()}setFlags(e){this.flags=Object.assign({},e)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;let e=this.getQueryParams(this.global.location.search);A0 in e&&e[A0].split(",").forEach(o=>{let[n,s]=o.split(":");this.urlFlags[n]=a_(n,s)})}};function s_(r){let e={};return r.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(t,...o)=>(i_(e,o[0],o[1]),o.join("="))),e}function i_(r,e,t){r[decodeURIComponent(e)]=decodeURIComponent(t||"")}function a_(r,e){let t=e.toLowerCase();return t==="true"||t==="false"?t==="true":`${+t}`===t?+t:e}function P(){return wg}var wg=null;function $0(r){wg=r}var Cg;function Sg(){if(Cg==null){let r;if(typeof window<"u")r=window;else if(typeof global<"u")r=global;else if(typeof process<"u")r=process;else if(typeof self<"u")r=self;else throw new Error("Could not find a global object");Cg=r}return Cg}function l_(){let r=Sg();return r._tfGlobals==null&&(r._tfGlobals=new Map),r._tfGlobals}function Cc(r,e){let t=l_();if(t.has(r))return t.get(r);{let o=e();return t.set(r,o),t.get(r)}}var zs="Abs",hn="Acos",dn="Acosh",Io="Add",dl="AddN",gl="All",xl="Any",Ms="ArgMax",Bs="ArgMin",gn="Asin",xn="Asinh",yn="Atan",bn="Atanh",wn="Atan2",Vs="AvgPool",yl="AvgPoolGrad",Gs="AvgPool3D",bl="AvgPool3DGrad",Ws="BatchMatMul",Us="BatchToSpaceND",wl="Bincount",Sc="BitwiseAnd",D0="BroadcastTo",Up="BroadcastArgs",Wo="Cast",Cn="Ceil",Sn="ClipByValue",Cl="Complex",Hs="ComplexAbs",qs="Concat",Ks="Conv2D",Sl="Conv2DBackpropFilter",js="Conv2DBackpropInput",Xs="Conv3D",vl="Conv3DBackpropFilterV2",Nl="Conv3DBackpropInputV2",vn="Cos",Nn="Cosh",Il="Cumprod",Ys="Cumsum",Tl="CropAndResize",kl="DenseBincount",El="DepthToSpace",Zs="DepthwiseConv2dNative",Al="DepthwiseConv2dNativeBackpropFilter",$l="DepthwiseConv2dNativeBackpropInput",Hp="Diag",Qs="Dilation2D",vc="Dilation2DBackpropInput",Nc="Dilation2DBackpropFilter",R0="Draw",In="RealDiv",Dl="Einsum",Tn="Elu",Rl="EluGrad",kn="Erf",oa="Equal",En="Exp",Js="ExpandDims",An="Expm1",Fl="FFT",_l="Fill",Ol="FlipLeftRight",$n="Floor",Dn="FloorDiv",ti="FusedBatchNorm",ei="GatherV2",qp="GatherNd",na="Greater",Rn="GreaterEqual",Uo="Identity",Ll="IFFT",Pl="Imag",Fn="IsFinite",_n="IsInf",On="IsNan",ri="LeakyRelu",sa="Less",ia="LessEqual",Kp="LinSpace",Ln="Log",Pn="Log1p",aa="LogicalAnd",la="LogicalNot",ua="LogicalOr";var F0="LogSoftmax";var oi="LRN",zl="LRNGrad";var ni="Max",zn="Maximum",si="MaxPool",Ml="MaxPoolGrad",ii="MaxPool3D",Bl="MaxPool3DGrad",jp="MaxPoolWithArgmax",ai="Mean",li="Min",Mn="Minimum",ui="MirrorPad",Bn="Mod",Xp="Multinomial",Vn="Multiply",ci="Neg",ca="NotEqual",Vl="NonMaxSuppressionV3",Gl="NonMaxSuppressionV4",Wl="NonMaxSuppressionV5",pi="OnesLike",mi="OneHot",fi="Pack",hi="PadV2";var Gn="Pow",di="Prelu",gi="Prod",Yp="RaggedGather",Zp="RaggedRange",Qp="RaggedTensorToTensor",Ul="Range",Hl="Real",Wn="Reciprocal",Un="Relu",xi="Reshape",yi="ResizeNearestNeighbor",ql="ResizeNearestNeighborGrad",bi="ResizeBilinear",Kl="ResizeBilinearGrad",Hn="Relu6",wi="Reverse",qn="Round",Kn="Rsqrt",Jp="ScatterNd",tm="TensorScatterUpdate",em="SearchSorted",Ci="Select",jn="Selu",Si="Slice",Xn="Sin",Yn="Sinh",Zn="Sign",Qn="Sigmoid",Jn="Softplus",ts="Sqrt",vi="Sum",Ni="SpaceToBatchND",Ii="SplitV",Ti="Softmax",rm="SparseFillEmptyRows",om="SparseReshape",nm="SparseSegmentMean",sm="SparseSegmentSum",im="SparseToDense",es="SquaredDifference",jl="Square",Ic="StaticRegexReplace",Xl="StridedSlice",am="StringNGrams",lm="StringSplit",um="StringToHashBucketFast",rs="Sub",os="Tan",ns="Tanh",Ho="Tile",Yl="TopK",Zl="Transform",qo="Transpose",Ql="Unique",ki="Unpack",Ei="UnsortedSegmentSum";var Ai="ZerosLike",ss="Step",_0="FromPixels",Jl="RotateWithOffset",pa="_FusedMatMul",ma="FusedConv2D",fa="FusedDepthwiseConv2D";function Ko(...r){P().getBool("IS_TEST")||P().getBool("PROD")||console.warn(...r)}function u_(...r){P().getBool("IS_TEST")||P().getBool("PROD")||console.log(...r)}var cm=Cc("kernelRegistry",()=>new Map),vg=Cc("gradRegistry",()=>new Map);function Ng(r,e){let t=P0(r,e);return cm.get(t)}function Ig(r){return vg.get(r)}function Tg(r){let e=cm.entries(),t=[];for(;;){let{done:o,value:n}=e.next();if(o)break;let[s,i]=n,[a]=s.split("_");a===r&&t.push(i)}return t}function pm(r){let{kernelName:e,backendName:t}=r,o=P0(e,t);cm.has(o)&&Ko(`The kernel '${e}' for backend '${t}' is already registered`),cm.set(o,r)}function L0(r){let{kernelName:e}=r;vg.has(e)&&P().getBool("DEBUG")&&Ko(`Overriding the gradient for '${e}'`),vg.set(e,r)}function P0(r,e){return`${e}_${r}`}var b={};to(b,{arraysEqual:()=>Ls,arraysEqualWithNull:()=>qF,assert:()=>k,assertNonNegativeIntegerDimensions:()=>We,assertNonNull:()=>yc,assertShapesMatch:()=>Gp,bytesFromStringArray:()=>bg,bytesPerElement:()=>cl,checkConversionForErrors:()=>xg,clamp:()=>ul,computeStrides:()=>Go,convertBackendValuesAndArrayBuffer:()=>t_,createScalarValue:()=>g_,createShuffledIndices:()=>XF,decodeString:()=>nu,distSquared:()=>UF,encodeString:()=>ou,fetch:()=>y_,fingerPrint64:()=>d_,flatten:()=>Di,getArrayFromDType:()=>Wp,getTypedArrayFromDType:()=>QF,hasEncodingLoss:()=>JF,hexToLong:()=>Tc,indexToLoc:()=>o_,inferDtype:()=>Ps,inferFromImplicitShape:()=>ZF,isBoolean:()=>T0,isFunction:()=>ml,isInt:()=>fn,isNumber:()=>k0,isPromise:()=>ra,isScalarShape:()=>HF,isString:()=>pl,isTypedArray:()=>or,isValidDtype:()=>yg,locToIndex:()=>r_,makeOnesTypedArray:()=>bc,makeZerosNestedTypedArray:()=>e_,makeZerosTypedArray:()=>hl,nearestDivisor:()=>fl,nearestLargerEven:()=>VF,now:()=>ya,parseAxisParam:()=>Ae,randUniform:()=>WF,repeatedTry:()=>YF,rightPad:()=>ea,shuffle:()=>I0,shuffleCombo:()=>BF,sizeFromShape:()=>zt,sizeToSquarishShape:()=>jF,squeezeShape:()=>gg,sum:()=>GF,swap:()=>Vp,tanh:()=>KF,toNestedArray:()=>ta,toTypedArray:()=>ru});function mm(r){return r instanceof Float32Array||r instanceof Int32Array||r instanceof Uint8Array||r instanceof Uint8ClampedArray}var $g=xc(j0());var xa=$g.default||$g;function Tc(r){return xa.fromString(r,!0,16)}var Y0=Tc("c3a5c85c97cb3127"),ga=Tc("b492b66fbe98f273"),ur=Tc("9ae16a3b2f90404f");function Ag(r){return r.xor(r.shru(47))}function Z0(r,e,t){let o=r.slice(e,e+t);return xa.fromBytes(Array.from(o),!0,!0)}function ue(r,e){return Z0(r,e,8)}function X0(r,e){return Z0(r,e,4)}function Ue(r,e){return e===0?r:r.shru(e).or(r.shl(64-e))}function $i(r,e,t=Tc("9ddfea08eb382d69")){let o=r.xor(e).mul(t);o=o.xor(o.shru(47));let n=e.xor(o).mul(t);return n=n.xor(n.shru(47)),n=n.mul(t),n}function p_(r,e,t,o,n,s){n=n.add(r),s=Ue(s.add(n).add(o),21);let i=n;return n=n.add(e),n=n.add(t),s=s.add(Ue(n,44)),[n.add(o),s.add(i)]}function hm(r,e,t,o){return p_(ue(r,e),ue(r,e+8),ue(r,e+16),ue(r,e+24),t,o)}function m_(r,e=r.length){if(e>=8){let t=ur.add(e*2),o=ue(r,0).add(ur),n=ue(r,e-8),s=Ue(n,37).mul(t).add(o),i=Ue(o,25).add(n).mul(t);return $i(s,i,t)}if(e>=4){let t=ur.add(e*2),o=X0(r,0);return $i(o.shl(3).add(e),X0(r,e-4),t)}if(e>0){let t=r[0],o=r[e>>1],n=r[e-1],s=t+(o<<8),i=e+(n<<2);return Ag(ur.mul(s).xor(Y0.mul(i))).mul(ur)}return ur}function f_(r,e=r.length){let t=ur.add(e*2),o=ue(r,0).mul(ga),n=ue(r,8),s=ue(r,e-8).mul(t),i=ue(r,e-16).mul(ur);return $i(Ue(o.add(n),43).add(Ue(s,30)).add(i),o.add(Ue(n.add(ur),18)).add(s),t)}function h_(r,e=r.length){let t=ur.add(e*2),o=ue(r,0).mul(ur),n=ue(r,8),s=ue(r,e-8).mul(t),i=ue(r,e-16).mul(ur),a=Ue(o.add(n),43).add(Ue(s,30)).add(i),l=$i(a,o.add(Ue(n.add(ur),18)).add(s),t),u=ue(r,16).mul(t),c=ue(r,24),p=a.add(ue(r,e-32)).mul(t),m=l.add(ue(r,e-24)).mul(t);return $i(Ue(u.add(c),43).add(Ue(p,30)).add(m),u.add(Ue(c.add(o),18)).add(p),t)}function d_(r,e=r.length){let t=xa.fromNumber(81,!0);if(e<=32)return e<=16?m_(r,e):f_(r,e);if(e<=64)return h_(r,e);let o=t,n=t.mul(ga).add(113),s=Ag(n.mul(ur).add(113)).mul(ur),i=[xa.UZERO,xa.UZERO],a=[xa.UZERO,xa.UZERO];o=o.mul(ur).add(ue(r,0));let l=0,u=(e-1>>6)*64,c=u+(e-1&63)-63;do o=Ue(o.add(n).add(i[0]).add(ue(r,l+8)),37).mul(ga),n=Ue(n.add(i[1]).add(ue(r,l+48)),42).mul(ga),o=o.xor(a[1]),n=n.add(i[0]).add(ue(r,l+40)),s=Ue(s.add(a[0]),33).mul(ga),i=hm(r,l,i[1].mul(ga),o.add(a[0])),a=hm(r,l+32,s.add(a[1]),n.add(ue(r,l+16))),[s,o]=[o,s],l+=64;while(l!==u);let p=ga.add(s.and(255).shl(1));return l=c,a[0]=a[0].add(e-1&63),i[0]=i[0].add(a[0]),a[0]=a[0].add(i[0]),o=Ue(o.add(n).add(i[0]).add(ue(r,l+8)),37).mul(p),n=Ue(n.add(i[1]).add(ue(r,l+48)),42).mul(p),o=o.xor(a[1].mul(9)),n=n.add(i[0].mul(9).add(ue(r,l+40))),s=Ue(s.add(a[0]),33).mul(p),i=hm(r,l,i[1].mul(p),o.add(a[0])),a=hm(r,l+32,s.add(a[1]),n.add(ue(r,l+16))),[s,o]=[o,s],$i($i(i[0],a[0],p).add(Ag(n).mul(Y0)).add(s),$i(i[1],a[1],p).add(o),p)}function g_(r,e){return e==="string"?ou(r):ru([r],e)}function x_(r,e){return r instanceof Float32Array&&e==="float32"||r instanceof Int32Array&&e==="int32"||r instanceof Uint8Array&&e==="bool"}function ru(r,e){if(e==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(r)&&(r=Di(r)),P().getBool("DEBUG")&&xg(r,e),x_(r,e))return r;if(e==null||e==="float32"||e==="complex64")return new Float32Array(r);if(e==="int32")return new Int32Array(r);if(e==="bool"){let t=new Uint8Array(r.length);for(let o=0;o<t.length;++o)Math.round(r[o])!==0&&(t[o]=1);return t}else throw new Error(`Unknown data type ${e}`)}function ya(){return P().platform.now()}function y_(r,e){return P().platform.fetch(r,e)}function ou(r,e="utf-8"){return e=e||"utf-8",P().platform.encode(r,e)}function nu(r,e="utf-8"){return e=e||"utf-8",P().platform.decode(r,e)}function or(r){return P().platform.isTypedArray!=null?P().platform.isTypedArray(r):mm(r)}function Di(r,e=[],t=!1){if(e==null&&(e=[]),typeof r=="boolean"||typeof r=="number"||typeof r=="string"||ra(r)||r==null||or(r)&&t)e.push(r);else if(Array.isArray(r)||or(r))for(let o=0;o<r.length;++o)Di(r[o],e,t);else{let o=-1;for(let n of Object.keys(r))/^([1-9]+[0-9]*|0)$/.test(n)&&(o=Math.max(o,Number(n)));for(let n=0;n<=o;n++)Di(r[n],e,t)}return e}var dm=class{constructor(e,t){this.backendTimer=e,this.logger=t,t==null&&(this.logger=new Dg)}profileKernel(e,t,o){let n,s=()=>{n=o()},i,a=ya();if(this.backendTimer.timerAvailable())i=this.backendTimer.time(s);else{s();for(let u of n)u.dataSync();i=Promise.resolve({kernelMs:ya()-a})}if(P().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let u=0;u<n.length;u++){let c=n[u];c.data().then(p=>{b_(p,c.dtype,e)})}return{kernelName:e,outputs:n,inputs:t,timeMs:i.then(u=>u.kernelMs),extraInfo:i.then(u=>u.getExtraProfileInfo!=null?u.getExtraProfileInfo():"")}}logKernelProfile(e){let{kernelName:t,outputs:o,timeMs:n,inputs:s,extraInfo:i}=e;o.forEach(a=>{Promise.all([a.data(),n,i]).then(l=>{this.logger.logKernelProfile(t,a,l[0],l[1],s,l[2])})})}};function b_(r,e,t){if(e!=="float32")return!1;for(let o=0;o<r.length;o++){let n=r[o];if(isNaN(n)||!isFinite(n))return console.warn(`Found ${n} in the result of '${t}'`),!0}return!1}var Dg=class{logKernelProfile(e,t,o,n,s,i){let a=typeof n=="number"?ea(`${n}ms`,9):n.error,l=ea(e,25),u=t.rank,c=t.size,p=ea(t.shape.toString(),14),m="";for(let f in s){let h=s[f];if(h!=null){let g=h.shape||t.shape,d=g.length;m+=`${f}: ${d}D ${d>0?g:""} `}}console.log(`%c${l}	%c${a}	%c${u}D ${p}	%c${c}	%c${m}	%c${i}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}};function Q0(r,e,t){let o={},n={};for(let l=0;l<e.length;l++)o[e[l].id]=!0;for(let l=0;l<r.length;l++){let u=r[l],c=u.inputs;for(let p in c){let m=c[p],f=!1;for(let h=0;h<e.length;h++)if(o[m.id]){u.outputs.forEach(g=>o[g.id]=!0),f=!0,n[u.id]=!0;break}if(f)break}}let s={};s[t.id]=!0;let i={};for(let l=r.length-1;l>=0;l--){let u=r[l],c=u.inputs;for(let p=0;p<u.outputs.length;p++)if(s[u.outputs[p].id]){for(let m in c)s[c[m].id]=!0,i[u.id]=!0;break}}let a=[];for(let l=0;l<r.length;l++){let u=r[l];if(n[u.id]&&i[u.id]){let c={};for(let m in u.inputs){let f=u.inputs[m];o[f.id]&&(c[m]=f)}let p=Object.assign({},u);p.inputs=c,p.outputs=u.outputs,a.push(p)}}return a}function J0(r,e,t,o){for(let n=e.length-1;n>=0;n--){let s=e[n],i=[];if(s.outputs.forEach(l=>{let u=r[l.id];u!=null?i.push(u):i.push(null)}),s.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${s.kernelName}.`);let a=s.gradient(i);for(let l in s.inputs){if(!(l in a))throw new Error(`Cannot backprop through input ${l}. Available gradients found: ${Object.keys(a)}.`);let u=t(()=>a[l]());if(u.dtype!=="float32")throw new Error(`Error in gradient for op ${s.kernelName}. The gradient of input ${l} must have 'float32' dtype, but has '${u.dtype}'`);let c=s.inputs[l];if(!Ls(u.shape,c.shape))throw new Error(`Error in gradient for op ${s.kernelName}. The gradient of input '${l}' has shape '${u.shape}', which does not match the shape of the input '${c.shape}'`);if(r[c.id]==null)r[c.id]=u;else{let p=r[c.id];r[c.id]=o(p,u),p.dispose()}}}}var tC=20,kc=3,Rg=7;function eC(r,e,t,o){let n=Go(e),s=w_(r,e,t,n),i=e.length,a=gm(r,e,t,n,s),l=["Tensor"];return o&&(l.push(`  dtype: ${t}`),l.push(`  rank: ${i}`),l.push(`  shape: [${e}]`),l.push("  values:")),l.push(a.map(u=>"    "+u).join(`
`)),l.join(`
`)}function w_(r,e,t,o){let n=zt(e),s=o[o.length-1],i=new Array(s).fill(0),a=e.length,l=t==="complex64"?Ac(r):r;if(a>1)for(let u=0;u<n/s;u++){let c=u*s;for(let p=0;p<s;p++)i[p]=Math.max(i[p],Ec(l[c+p],0,t).length)}return i}function Ec(r,e,t){let o;return Array.isArray(r)?o=`${parseFloat(r[0].toFixed(Rg))} + ${parseFloat(r[1].toFixed(Rg))}j`:pl(r)?o=`'${r}'`:t==="bool"?o=rC(r):o=parseFloat(r.toFixed(Rg)).toString(),ea(o,e)}function rC(r){return r===0?"false":"true"}function gm(r,e,t,o,n,s=!0){let i=t==="complex64"?2:1,a=e[0],l=e.length;if(l===0){if(t==="complex64"){let g=Ac(r);return[Ec(g[0],0,t)]}return t==="bool"?[rC(r[0])]:[r[0].toString()]}if(l===1){if(a>tC){let d=kc*i,x=Array.from(r.slice(0,d)),y=Array.from(r.slice((a-kc)*i,a*i));return t==="complex64"&&(x=Ac(x),y=Ac(y)),["["+x.map((w,C)=>Ec(w,n[C],t)).join(", ")+", ..., "+y.map((w,C)=>Ec(w,n[a-kc+C],t)).join(", ")+"]"]}return["["+(t==="complex64"?Ac(r):Array.from(r)).map((d,x)=>Ec(d,n[x],t)).join(", ")+"]"]}let u=e.slice(1),c=o.slice(1),p=o[0]*i,m=[];if(a>tC){for(let g=0;g<kc;g++){let d=g*p,x=d+p;m.push(...gm(r.slice(d,x),u,t,c,n,!1))}m.push("...");for(let g=a-kc;g<a;g++){let d=g*p,x=d+p;m.push(...gm(r.slice(d,x),u,t,c,n,g===a-1))}}else for(let g=0;g<a;g++){let d=g*p,x=d+p;m.push(...gm(r.slice(d,x),u,t,c,n,g===a-1))}let f=l===2?",":"";m[0]="["+(a>0?m[0]+f:"");for(let g=1;g<m.length-1;g++)m[g]=" "+m[g]+f;let h=`,
`;for(let g=2;g<l;g++)h+=`
`;return m[m.length-1]=" "+m[m.length-1]+"]"+(s?"":h),m}function Ac(r){let e=[];for(let t=0;t<r.length;t+=2)e.push([r[t],r[t+1]]);return e}var Ut=class{constructor(e,t,o){if(this.dtype=t,this.shape=e.slice(),this.size=zt(e),o!=null){let n=o.length;k(n===this.size,()=>`Length of values '${n}' does not match the size inferred by the shape '${this.size}'.`)}if(t==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=o||Wp(t,this.size),this.strides=Go(e)}set(e,...t){t.length===0&&(t=[0]),k(t.length===this.rank,()=>`The number of provided coordinates (${t.length}) must match the rank (${this.rank})`);let o=this.locToIndex(t);this.values[o]=e}get(...e){e.length===0&&(e=[0]);let t=0;for(let n of e){if(n<0||n>=this.shape[t]){let s=`Requested out of range element at ${e}.   Buffer shape=${this.shape}`;throw new Error(s)}t++}let o=e[e.length-1];for(let n=0;n<e.length-1;++n)o+=this.strides[n]*e[n];return this.values[o]}locToIndex(e){if(this.rank===0)return 0;if(this.rank===1)return e[0];let t=e[e.length-1];for(let o=0;o<e.length-1;++o)t+=this.strides[o]*e[o];return t}indexToLoc(e){if(this.rank===0)return[];if(this.rank===1)return[e];let t=new Array(this.shape.length);for(let o=0;o<t.length-1;++o)t[o]=Math.floor(e/this.strides[o]),e-=t[o]*this.strides[o];return t[t.length-1]=e,t}get rank(){return this.shape.length}toTensor(){return ko().makeTensor(this.values,this.shape,this.dtype)}},ko=null,su=null,C_=null;function oC(r){ko=r}function nC(r){su=r}function sC(r){C_=r}var Bt=class{constructor(e,t,o,n){this.kept=!1,this.isDisposedInternal=!1,this.shape=e.slice(),this.dtype=t||"float32",this.size=zt(e),this.strides=Go(e),this.dataId=o,this.id=n,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}buffer(){return B(this,null,function*(){let e=yield this.data();return su.buffer(this.shape,this.dtype,e)})}bufferSync(){return su.buffer(this.shape,this.dtype,this.dataSync())}array(){return B(this,null,function*(){let e=yield this.data();return ta(this.shape,e,this.dtype==="complex64")})}arraySync(){return ta(this.shape,this.dataSync(),this.dtype==="complex64")}data(){return B(this,null,function*(){this.throwIfDisposed();let e=ko().read(this.dataId);if(this.dtype==="string"){let t=yield e;try{return t.map(o=>nu(o))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return e})}dataToGPU(e){return this.throwIfDisposed(),ko().readToGPU(this.dataId,e)}dataSync(){this.throwIfDisposed();let e=ko().readSync(this.dataId);if(this.dtype==="string")try{return e.map(t=>nu(t))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return e}bytes(){return B(this,null,function*(){this.throwIfDisposed();let e=yield ko().read(this.dataId);return this.dtype==="string"?e:new Uint8Array(e.buffer)})}dispose(){this.isDisposed||(this.kerasMask&&this.kerasMask.dispose(),ko().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(e=!1){return su.print(this,e)}clone(){return this.throwIfDisposed(),su.clone(this)}toString(e=!1){let t=this.dataSync();return eC(t,this.shape,this.dtype,e)}cast(e){return this.throwIfDisposed(),su.cast(this,e)}variable(e=!0,t,o){return this.throwIfDisposed(),ko().makeVariable(this,e,t,o)}};Object.defineProperty(Bt,Symbol.hasInstance,{value:r=>!!r&&r.data!=null&&r.dataSync!=null&&r.throwIfDisposed!=null});function D(){return Cc("Tensor",()=>Bt)}D();var is=class extends Bt{constructor(e,t,o,n){super(e.shape,e.dtype,e.dataId,n),this.trainable=t,this.name=o}assign(e){if(e.dtype!==this.dtype)throw new Error(`dtype of the new value (${e.dtype}) and previous value (${this.dtype}) must match`);if(!Ls(e.shape,this.shape))throw new Error(`shape of the new value (${e.shape}) and previous value (${this.shape}) must match`);ko().disposeTensor(this),this.dataId=e.dataId,ko().incRef(this,null)}dispose(){ko().disposeVariable(this),this.isDisposedInternal=!0}};Object.defineProperty(is,Symbol.hasInstance,{value:r=>r instanceof Bt&&r.assign!=null&&r.assign instanceof Function});var iC=function(r){return r.float32="float32",r.int32="int32",r.bool="int32",r.complex64="complex64",r}(iC||{}),aC=function(r){return r.float32="float32",r.int32="int32",r.bool="bool",r.complex64="complex64",r}(aC||{}),lC=function(r){return r.float32="float32",r.int32="float32",r.bool="float32",r.complex64="complex64",r}(lC||{}),uC=function(r){return r.float32="complex64",r.int32="complex64",r.bool="complex64",r.complex64="complex64",r}(uC||{}),S_={float32:lC,int32:iC,bool:aC,complex64:uC};function Te(r,e){if(r==="string"||e==="string"){if(r==="string"&&e==="string")return"string";throw new Error(`Can not upcast ${r} with ${e}`)}return S_[r][e]}function ba(r){return Te(r,"int32")}function xm(r){return r!=null&&typeof r=="object"&&"texture"in r&&r.texture instanceof WebGLTexture}function ym(r){return typeof GPUBuffer<"u"&&r!=null&&typeof r=="object"&&"buffer"in r&&r.buffer instanceof GPUBuffer}function $t(r,e){if(r.dtype===e.dtype)return[r,e];let t=Te(r.dtype,e.dtype);return[r.cast(t),e.cast(t)]}function bm(r){let e=[];return cC(r,e,new Set),e}function cC(r,e,t){if(r==null)return;if(r instanceof Bt){e.push(r);return}if(!v_(r))return;let o=r;for(let n in o){let s=o[n];t.has(s)||(t.add(s),cC(s,e,t))}}function v_(r){return Array.isArray(r)||typeof r=="object"}function Fg(r){return r.kernelName!=null}var wm=class{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(e=>e.name)))}}}dispose(){for(let e in this.registeredVariables)this.registeredVariables[e].dispose()}},I_=(()=>{class r{constructor(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new wm}ready(){return B(this,null,function*(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;let t=this.getSortedBackends();for(let o=0;o<t.length;o++){let n=t[o];if(yield this.initializeBackend(n).success){yield this.setBackend(n);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")})}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){let{name:t,asyncInit:o}=this.initializeBackendsAndReturnBest();if(o)throw new Error(`The highest priority backend '${t}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(t)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(t){if(!(t in this.registry))if(t in this.registryFactory){let{asyncInit:o}=this.initializeBackend(t);if(o)return null}else return null;return this.registry[t]}findBackendFactory(t){return t in this.registryFactory?this.registryFactory[t].factory:null}registerBackend(t,o,n=1){return t in this.registryFactory?(Ko(`${t} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[t]={factory:o,priority:n},!0)}setBackend(t){return B(this,null,function*(){if(this.registryFactory[t]==null)throw new Error(`Backend name '${t}' not found in registry`);if(this.backendName=t,this.registry[t]==null){this.backendInstance=null;let{success:o,asyncInit:n}=this.initializeBackend(t);if(!(n?yield o:o))return!1}return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new dm(this.backendInstance),!0})}setupRegisteredKernels(){Tg(this.backendName).forEach(o=>{o.setupFunc!=null&&o.setupFunc(this.backendInstance)})}disposeRegisteredKernels(t){Tg(t).forEach(n=>{n.disposeFunc!=null&&n.disposeFunc(this.registry[t])})}initializeBackend(t){let o=this.registryFactory[t];if(o==null)throw new Error(`Cannot initialize backend ${t}, no registration found.`);try{let n=o.factory();if(n&&!(n instanceof mn)&&typeof n.then=="function"){let s=++this.pendingBackendInitId,i=n.then(a=>s<this.pendingBackendInitId?!1:(this.registry[t]=a,this.pendingBackendInit=null,!0)).catch(a=>(s<this.pendingBackendInitId||(this.pendingBackendInit=null,Ko(`Initialization of backend ${t} failed`),Ko(a.stack||a.message)),!1));return this.pendingBackendInit=i,{success:i,asyncInit:!0}}else return this.registry[t]=n,{success:!0,asyncInit:!1}}catch(n){return Ko(`Initialization of backend ${t} failed`),Ko(n.stack||n.message),{success:!1,asyncInit:!1}}}removeBackend(t){if(!(t in this.registryFactory))throw new Error(`${t} backend not found in registry`);this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((t,o)=>this.registryFactory[o].priority-this.registryFactory[t].priority)}initializeBackendsAndReturnBest(){let t=this.getSortedBackends();for(let o=0;o<t.length;o++){let n=t[o],{success:s,asyncInit:i}=this.initializeBackend(n);if(i||s)return{name:n,asyncInit:i}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(t,o){let n=this.state.tensorInfo.get(o),s=n.backend,i=this.readSync(o),a=s.refCount(o);s.disposeData(o,!0),n.backend=t,t.move(o,i,n.shape,n.dtype,a),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(t,o){let n=null;if(o==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");o=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof o!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");n=t}let s;return this.scopedRun(()=>this.startScope(n),()=>this.endScope(s),()=>(s=o(),s instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),s))}scopedRun(t,o,n){t();try{let s=n();return o(),s}catch(s){throw o(),s}}nextTensorId(){return r.nextTensorId++}nextVariableId(){return r.nextVariableId++}clone(t){let o=I.runKernel(Uo,{x:t}),n={x:t},s=a=>({x:()=>{let l="float32",u={x:a},c={dtype:l};return I.runKernel(Wo,u,c)}}),i=[];return this.addTapeNode(this.state.activeScope.name,n,[o],s,i,{}),o}runKernel(t,o,n){if(this.backendName==null&&this.backend,!(Ng(t,this.backendName)!=null))throw new Error(`Kernel '${t}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:t,inputs:o,attrs:n})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(t,o,n){let s=this.backend.numDataIds(),i=0;n.forEach(u=>{i+=u.dtype==="complex64"?3:1});let a=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],l=s-o-i-a;if(l>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${l} data ids) after running '${t}'`)}runKernelFunc(t){let o,n=[],s=this.isTapeOn(),i=this.state.numBytes,a=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let l;this.backendName==null&&this.backend;let u,c=Fg(t)?t.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(Fg(t)){let{kernelName:g,inputs:d,attrs:x}=t;this.backendName==null&&this.backend;let y=Ng(g,this.backendName);k(y!=null,()=>`Cannot find registered kernel '${g}' for backend '${this.backendName}'`),l=()=>{let w=this.backend.numDataIds();u=y.kernelFunc({inputs:d,attrs:x,backend:this.backend});let C=Array.isArray(u)?u:[u];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(g,w,C);let S=C.map(E=>E.rank!=null?E:this.makeTensorFromTensorInfo(E));if(s){let E=this.getTensorsForGradient(g,d,S);n=this.saveTensorsForBackwardMode(E)}return S}}else{let{forwardFunc:g}=t,d=x=>{s&&(n=x.map(y=>this.keep(this.clone(y))))};l=()=>{let x=this.backend.numDataIds();u=this.tidy(()=>g(this.backend,d));let y=Array.isArray(u)?u:[u];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(c,x,y),y}}let{inputs:p,attrs:m}=t,f=Fg(t)?null:t.backwardsFunc,h;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?o=l():(h=this.profiler.profileKernel(c,p,()=>l()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(h),o=h.outputs)}),s&&this.addTapeNode(c,p,o,f,n,m),this.state.profiling&&this.state.activeProfile.kernels.push({name:c,bytesAdded:this.state.numBytes-i,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-a,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(p).map(g=>p[g]!=null?p[g].shape:null),outputShapes:o.map(g=>g.shape),kernelTimeMs:h.timeMs,extraInfo:h.extraInfo}),Array.isArray(u)?o:o[0]}saveTensorsForBackwardMode(t){return t.map(n=>this.keep(this.clone(n)))}getTensorsForGradient(t,o,n){let s=Ig(t);if(s!=null){let i=s.inputsToSave||[],a=s.outputsToSave||[],l;s.saveAllInputs?(k(Array.isArray(o),()=>"saveAllInputs is true, expected inputs to be an array."),l=Object.keys(o).map(c=>o[c])):l=i.map(c=>o[c]);let u=n.filter((c,p)=>a[p]);return l.concat(u)}return[]}makeTensor(t,o,n,s){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");n=n||"float32",s=s||this.backend;let i=t;n==="string"&&pl(t[0])&&(i=t.map(u=>ou(u)));let a=s.write(i,o,n),l=new Bt(o,n,a,this.nextTensorId());if(this.trackTensor(l,s),n==="string"){let u=this.state.tensorInfo.get(a),c=bg(i);this.state.numBytes+=c-u.bytes,u.bytes=c}return l}makeTensorFromDataId(t,o,n,s){n=n||"float32";let i={dataId:t,shape:o,dtype:n};return this.makeTensorFromTensorInfo(i,s)}makeTensorFromTensorInfo(t,o){let{dataId:n,shape:s,dtype:i}=t,a=new Bt(s,i,n,this.nextTensorId());return this.trackTensor(a,o),a}makeVariable(t,o=!0,n,s){n=n||this.nextVariableId().toString(),s!=null&&s!==t.dtype&&(t=t.cast(s));let i=new is(t,o,n,this.nextTensorId());if(this.state.registeredVariables[i.name]!=null)throw new Error(`Variable with name ${i.name} was already registered`);return this.state.registeredVariables[i.name]=i,this.incRef(i,this.backend),i}trackTensor(t,o){this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++;let n=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(n=t.size*cl(t.dtype)),this.state.numBytes+=n,this.state.tensorInfo.has(t.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(t.dataId,{backend:o||this.backend,dtype:t.dtype,shape:t.shape,bytes:n})),t instanceof is||this.track(t)}incRef(t,o){this.trackTensor(t,o),this.backend.incRef(t.dataId)}removeDataId(t,o){this.state.tensorInfo.has(t)&&this.state.tensorInfo.get(t).backend===o&&(this.state.tensorInfo.delete(t),this.state.numDataBuffers--)}disposeTensor(t){if(!this.state.tensorInfo.has(t.dataId))return;let o=this.state.tensorInfo.get(t.dataId);if(this.state.numTensors--,t.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=o.bytes),t.dtype!=="complex64"&&t.dtype!=="string"){let n=t.size*cl(t.dtype);this.state.numBytes-=n}o.backend.disposeData(t.dataId)&&this.removeDataId(t.dataId,o.backend)}disposeVariables(){for(let t in this.state.registeredVariables){let o=this.state.registeredVariables[t];this.disposeVariable(o)}}disposeVariable(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]}memory(){let t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t}profile(t){return B(this,null,function*(){this.state.profiling=!0;let o=this.state.numBytes,n=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=yield t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(s=>s.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-o,this.state.activeProfile.newTensors=this.state.numTensors-n;for(let s of this.state.activeProfile.kernels)s.kernelTimeMs=yield s.kernelTimeMs,s.extraInfo=yield s.extraInfo;return this.state.activeProfile})}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(t,o,n,s,i,a){let l={id:this.state.nextTapeNodeId++,kernelName:t,inputs:o,outputs:n,saved:i},u=Ig(t);u!=null&&(s=u.gradFunc),s!=null&&(l.gradient=c=>(c=c.map((p,m)=>{if(p==null){let f=n[m],h=hl(f.size,f.dtype);return this.makeTensor(h,f.shape,f.dtype)}return p}),s(c.length>1?c:c[0],i,a))),this.state.activeTape.push(l)}keep(t){return t.kept=!0,t}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(t){let o={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(o.name=t),this.state.scopeStack.push(o),this.state.activeScope=o}endScope(t){let o=bm(t),n=new Set(o.map(i=>i.id));for(let i=0;i<this.state.activeScope.track.length;i++){let a=this.state.activeScope.track[i];!a.kept&&!n.has(a.id)&&a.dispose()}let s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],o.forEach(i=>{!i.kept&&i.scopeId===s.id&&this.track(i)})}gradients(t,o,n,s=!1){if(k(o.length>0,()=>"gradients() received an empty list of xs."),n!=null&&n.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${n.dtype}'`);let i=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",t));k(i instanceof Bt,()=>"The result y returned by f() must be a tensor.");let a=Q0(this.state.activeTape,o,i);if(!s&&a.length===0&&o.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{let l={};l[i.id]=n??T_(i.shape),J0(l,a,c=>this.tidy(c),k_);let u=o.map(c=>l[c.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(c=>{for(let p of c.saved)p.dispose()}),this.state.activeTape=null),{value:i,grads:u}})}customGrad(t){return k(ml(t),()=>"The f passed in customGrad(f) must be a function."),(...o)=>{k(o.every(l=>l instanceof Bt),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let n,s={};o.forEach((l,u)=>{s[u]=l});let i=(l,u)=>(n=t(...o,u),k(n.value instanceof Bt,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),k(ml(n.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),n.value),a=(l,u)=>{let c=n.gradFunc(l,u),p=Array.isArray(c)?c:[c];k(p.length===o.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),k(p.every(f=>f instanceof Bt),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");let m={};return p.forEach((f,h)=>{m[h]=()=>f}),m};return this.runKernelFunc({forwardFunc:i,backwardsFunc:a,inputs:s})}}readSync(t){return this.state.tensorInfo.get(t).backend.readSync(t)}read(t){return this.state.tensorInfo.get(t).backend.read(t)}readToGPU(t,o){return this.state.tensorInfo.get(t).backend.readToGPU(t,o)}time(t){return B(this,null,function*(){let o=ya(),n=yield this.backend.time(t);return n.wallMs=ya()-o,n})}track(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new wm;for(let t in this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}return r.nextTensorId=0,r.nextVariableId=0,r})();function T_(r){let e=bc(zt(r),"float32");return I.makeTensor(e,r,"float32")}function _g(){let r=Sg();if(r._tfengine==null){let e=new wc(r);r._tfengine=new I_(e)}return $0(r._tfengine.ENV),oC(()=>r._tfengine),r._tfengine}var I=_g();function k_(r,e){let t={a:r,b:e};return I.runKernel(Io,t)}var Ri={};to(Ri,{isBrowser:()=>Lg,isMobile:()=>$_,mockIsMobile:()=>A_});function E_(){return typeof navigator<"u"&&navigator!=null}var Og;function A_(r){Og=r}function $_(r){if(Og!==void 0)return Og;if(r||E_()){if(r||(r=navigator),r.product==="ReactNative")return!0;let e=r.userAgent||r.vendor||(typeof window<"u"?window.opera:"");if(!e){let t=r;return t.userAgentData&&t.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))}return!1}function Lg(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}var br=P();br.registerFlag("DEBUG",()=>!1,r=>{r&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")});br.registerFlag("IS_BROWSER",()=>Lg());br.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u");br.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor));br.registerFlag("IS_SAFARI",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor));br.registerFlag("PROD",()=>!1);br.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>br.getBool("DEBUG"));br.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0);br.registerFlag("IS_TEST",()=>!1);br.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>br.getBool("DEBUG"));br.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);br.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1);br.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);function wa(r,e){let t=r;if(or(r))return e==="string"?[]:[r.length];if(xm(r)){let n=r.channels||"RGBA";return[r.height,r.width*n.length]}else if(ym(r))return[r.buffer.size/(e==null?4:cl(e))];if(!Array.isArray(r))return[];let o=[];for(;Array.isArray(t)||or(t)&&e!=="string";)o.push(t.length),t=t[0];return Array.isArray(r)&&P().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&mC(r,o,[]),o}function mC(r,e,t){if(t=t||[],!Array.isArray(r)&&!or(r)){k(e.length===0,()=>`Element arr[${t.join("][")}] is a primitive, but should be an array/TypedArray of ${e[0]} elements`);return}k(e.length>0,()=>`Element arr[${t.join("][")}] should be a primitive, but is an array of ${r.length} elements`),k(r.length===e[0],()=>`Element arr[${t.join("][")}] should have ${e[0]} elements, but has ${r.length} elements`);let o=e.slice(1);for(let n=0;n<r.length;++n)mC(r[n],o,t.concat(n))}function pC(r,e,t,o){if(r!=="string_or_numeric"){if(r==null)throw new Error("Expected dtype cannot be null.");if(r!=="numeric"&&r!==e||r==="numeric"&&e==="string")throw new Error(`Argument '${t}' passed to '${o}' must be ${r} tensor, but got ${e} tensor`)}}function N(r,e,t,o="numeric"){if(r instanceof D())return pC(o,r.dtype,e,t),r;let n=Ps(r);if(n!=="string"&&["bool","int32","float32"].indexOf(o)>=0&&(n=o),pC(o,n,e,t),r==null||!or(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string"){let l=r==null?"null":r.constructor.name;throw new Error(`Argument '${e}' passed to '${t}' must be a Tensor or TensorLike, but got '${l}'`)}let s=wa(r,n);!or(r)&&!Array.isArray(r)&&(r=[r]);let a=n!=="string"?ru(r,n):Di(r,[],!0);return I.makeTensor(a,s,n)}function Cm(r,e,t,o="numeric"){if(!Array.isArray(r))throw new Error(`Argument ${e} passed to ${t} must be a \`Tensor[]\` or \`TensorLike[]\``);return r.map((s,i)=>N(s,`${e}[${i}]`,t,o))}var D_="__op";function T(r){let e=Object.keys(r);if(e.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${e.length} keys.`);let t=e[0],o=r[t];t.endsWith("_")&&(t=t.substring(0,t.length-1)),t=t+D_;let n=(...s)=>{I.startScope(t);try{let i=o(...s);return ra(i)&&console.error("Cannot return a Promise inside of tidy."),I.endScope(i),i}catch(i){throw I.endScope(null),i}};return Object.defineProperty(n,"name",{value:t,configurable:!0}),n}function R_(r,e){let t=N(r,"real","complex"),o=N(e,"imag","complex");Gp(t.shape,o.shape,`real and imag shapes, ${t.shape} and ${o.shape}, must match in call to tf.complex().`);let n={real:t,imag:o};return I.runKernel(Cl,n)}var Ur=T({complex_:R_});function Fi(r,e,t,o){if(o==null)o=Ps(r);else if(o==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(ym(r)||xm(r)){if(o!=="float32"&&o!=="int32")throw new Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${o}.`);return I.backend.createTensorFromGPUData(r,e||t,o)}if(!or(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(e!=null){We(e);let n=zt(e),s=zt(t);k(n===s,()=>`Based on the provided shape, [${e}], the tensor should have ${n} values but has ${s}`);for(let i=0;i<t.length;++i){let a=t[i],l=i===t.length-1?a!==zt(e.slice(i)):!0;k(t[i]===e[i]||!l,()=>`Error creating a new Tensor. Inferred shape (${t}) does not match the provided shape (${e}). `)}}return!or(r)&&!Array.isArray(r)&&(r=[r]),e=e||t,r=o!=="string"?ru(r,o):Di(r,[],!0),I.makeTensor(r,e,o)}function Hr(r,e,t){let o=wa(r,t);return Fi(r,e,o,t)}var as={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};var Ze=class r{static join(e){return new r(e).slice()}constructor(e){if(this.shards=[],this.previousShardIndex=0,e==null||(e instanceof Array||(e=[e]),e=e.map(o=>or(o)?o.buffer:o),e.length===0))return;this.bufferUniformSize=e[0].byteLength;let t=0;for(let o=0;o<e.length;o++){let n=e[o];o!==e.length-1&&n.byteLength!==this.bufferUniformSize&&(this.bufferUniformSize=void 0);let s=t+n.byteLength;this.shards.push({buffer:n,start:t,end:s}),t=s}this.shards.length===0&&(this.byteLength=0),this.byteLength=this.shards[this.shards.length-1].end}slice(e=0,t=this.byteLength){if(this.shards.length===0)return new ArrayBuffer(0);if(e=isNaN(Number(e))?0:e,t=isNaN(Number(t))?0:t,e=Math.max(0,e),t=Math.min(this.byteLength,t),t<=e)return new ArrayBuffer(0);let o=this.findShardForByte(e);if(o===-1)throw new Error(`Could not find start shard for byte ${e}`);let n=t-e,s=new ArrayBuffer(n),i=new Uint8Array(s),a=0;for(let l=o;l<this.shards.length;l++){let u=this.shards[l],p=e+a-u.start,m=a,h=Math.min(t,u.end)-u.start,g=new Uint8Array(u.buffer,p,h-p);if(i.set(g,m),a+=g.length,t<u.end)break}return s}findShardForByte(e){if(this.shards.length===0||e<0||e>=this.byteLength)return-1;if(this.bufferUniformSize!=null)return this.previousShardIndex=Math.floor(e/this.bufferUniformSize),this.previousShardIndex;function t(n){return e<n.start?-1:e>=n.end?1:0}if(t(this.shards[this.previousShardIndex])===0)return this.previousShardIndex;let o=F_(this.shards,t);return o===-1?-1:(this.previousShardIndex=o,this.previousShardIndex)}};function F_(r,e){let t=0,o=r.length;for(;t<=o;){let n=Math.floor((o-t)/2)+t,s=e(r[n]);if(s===0)return n;s<0?o=n:t=n+1}return-1}function __(r){P().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(r+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}sC(__);function no(){return I}function $c(){return I.memory()}function z(r,e){return I.tidy(r,e)}function Ct(r){bm(r).forEach(t=>t.dispose())}function _e(r){return I.keep(r)}function fC(){return I.backendName}function Sm(r,e,t=1){return I.registerBackend(r,e,t)}function vm(){return I.backend}var _i=4;function gC(r,e){return B(this,null,function*(){let t=[],o=[],n=Array.isArray(r)?r.map(i=>i.name):Object.keys(r);for(let i=0;i<n.length;++i){let a=n[i],l=Array.isArray(r)?r[i].tensor:r[a];if(l.dtype!=="float32"&&l.dtype!=="int32"&&l.dtype!=="bool"&&l.dtype!=="string"&&l.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${a}': ${l.dtype}`);let u={name:a,shape:l.shape,dtype:l.dtype};if(l.dtype==="string"){let c=new Promise(p=>B(null,null,function*(){let m=yield l.bytes(),f=m.reduce((d,x)=>d+x.length,0)+_i*m.length,h=new Uint8Array(f),g=0;for(let d=0;d<m.length;d++){let x=m[d],y=new Uint8Array(new Uint32Array([x.length]).buffer);h.set(y,g),g+=_i,h.set(x,g),g+=x.length}p(h)}));o.push(c)}else o.push(l.data());e!=null&&(u.group=e),t.push(u)}let s=yield Promise.all(o);return{data:P_(s),specs:t}})}function Nm(r,e){let t=new Ze(r),o={},n=0;for(let s of e){let i=O_(s,(a,l)=>t.slice(n+a,n+l));o[s.name]=xC(s,t.slice(n,n+i)),n+=i}return o}function O_(r,e){let t=zt(r.shape),o;if("quantization"in r){let n=r.quantization;o=as[n.dtype]}else if(r.dtype==="string"){let n=0;for(let s=0;s<t;s++)n+=_i+new Uint32Array(e(n,n+_i))[0];return n}else o=as[r.dtype];return t*o}function L_(r,e){return B(this,null,function*(){let t=zt(r.shape),o;if("quantization"in r){let n=r.quantization;o=as[n.dtype]}else if(r.dtype==="string"){let n=0;for(let s=0;s<t;s++)n+=_i+new Uint32Array(yield e(n,n+_i))[0];return n}else o=as[r.dtype];return t*o})}function xC(r,e){let t=r.name,o=r.dtype,n=r.shape,s=zt(n),i,a=0;if("quantization"in r){let l=r.quantization;if(l.dtype==="uint8"||l.dtype==="uint16"){if(!("min"in l&&"scale"in l))throw new Error(`Weight ${r.name} with quantization ${l.dtype} doesn't have corresponding metadata min and scale.`)}else if(l.dtype==="float16"){if(o!=="float32")throw new Error(`Weight ${r.name} is quantized with ${l.dtype} which only supports weights of type float32 not ${o}.`)}else throw new Error(`Weight ${r.name} has unknown quantization dtype ${l.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);let u=as[l.dtype],c=l.dtype==="uint8"?new Uint8Array(e):new Uint16Array(e);if(o==="float32")if(l.dtype==="uint8"||l.dtype==="uint16"){i=new Float32Array(c.length);for(let p=0;p<c.length;p++){let m=c[p];i[p]=m*l.scale+l.min}}else if(l.dtype==="float16")i=V_()(c);else throw new Error(`Unsupported quantization type ${l.dtype} for weight type float32.`);else if(o==="int32"){if(l.dtype!=="uint8"&&l.dtype!=="uint16")throw new Error(`Unsupported quantization type ${l.dtype} for weight type int32.`);i=new Int32Array(c.length);for(let p=0;p<c.length;p++){let m=c[p];i[p]=Math.round(m*l.scale+l.min)}}else throw new Error(`Unsupported dtype in weight '${t}': ${o}`);a+=s*u}else if(o==="string"){let l=zt(r.shape);i=[];for(let u=0;u<l;u++){let c=new Uint32Array(e.slice(a,a+_i))[0];a+=_i;let p=new Uint8Array(e.slice(a,a+c));i.push(p),a+=c}}else{let l=as[o];if(o==="float32")i=new Float32Array(e);else if(o==="int32")i=new Int32Array(e);else if(o==="bool")i=new Uint8Array(e);else if(o==="complex64"){i=new Float32Array(e);let u=new Float32Array(i.length/2),c=new Float32Array(i.length/2);for(let h=0;h<u.length;h++)u[h]=i[h*2],c[h]=i[h*2+1];let p=Hr(u,n,"float32"),m=Hr(c,n,"float32"),f=Ur(p,m);return p.dispose(),m.dispose(),f}else throw new Error(`Unsupported dtype in weight '${t}': ${o}`);a+=s*l}return Hr(i,n,o)}function hC(r,e,t){return B(this,null,function*(){let o=new Uint8Array(e);for(;o.byteLength<t;){let{done:n,value:s}=yield r.read();if(n&&s==null){let a=t-o.byteLength;throw new Error(`Reader is done but ${a} bytes are still expected`)}let i=new Uint8Array(o.length+s.byteLength);i.set(o,0),i.set(new Uint8Array(s),o.length),o=i}return o.buffer})}function Pg(r,e){return B(this,null,function*(){let t={},o=r.getReader(),n=new ArrayBuffer(0);for(let s of e){let i=yield L_(s,(u,c)=>B(null,null,function*(){return n=yield hC(o,n,c),n.slice(u,c)}));n=yield hC(o,n,i);let a=n.slice(0,i);n=n.slice(i);let l=xC(s,a);if(t[s.name]=l,fC()==="webgpu"){let u=vm();"uploadToGPU"in u&&zt(l.shape)>=P().get("WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD")&&u.uploadToGPU(l.dataId)}}return t})}function P_(r){if(r===null)throw new Error(`Invalid input value: ${JSON.stringify(r)}`);let e=0,t=[];r.forEach(s=>{if(e+=s.byteLength,t.push(s.byteLength===s.buffer.byteLength?s:new s.constructor(s)),!(s instanceof Float32Array||s instanceof Int32Array||s instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${s.constructor.name}`)});let o=new Uint8Array(e),n=0;return t.forEach(s=>{o.set(new Uint8Array(s.buffer),n),n+=s.byteLength}),o.buffer}var zg=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function dC(r){return zg?Buffer.byteLength(r,"utf8"):new Blob([r]).size}function yC(r){if(zg)return Buffer.from(r).toString("base64");let e=new Uint8Array(r),t="";for(let o=0,n=e.length;o<n;o++)t+=String.fromCharCode(e[o]);return btoa(t)}function bC(r){if(zg){let o=Buffer.from(r,"base64");return o.buffer.slice(o.byteOffset,o.byteOffset+o.byteLength)}let e=atob(r),t=new Uint8Array(e.length);for(let o=0;o<e.length;++o)t.set([e.charCodeAt(o)],o);return t.buffer}function wC(r){return Ze.join(r)}function Mg(r){let e="/";for(r=r.trim();r.endsWith(e);)r=r.slice(0,r.length-1);let t=r.split(e);return t[t.length-1]}function Im(r,e){let t={modelTopology:r.modelTopology,format:r.format,generatedBy:r.generatedBy,convertedBy:r.convertedBy,weightsManifest:e};return r.signature!=null&&(t.signature=r.signature),r.userDefinedMetadata!=null&&(t.userDefinedMetadata=r.userDefinedMetadata),r.modelInitializer!=null&&(t.modelInitializer=r.modelInitializer),r.initializerSignature!=null&&(t.initializerSignature=r.initializerSignature),r.trainingConfig!=null&&(t.trainingConfig=r.trainingConfig),t}function Bg(r,e,t){let o={modelTopology:r.modelTopology,format:r.format,generatedBy:r.generatedBy,convertedBy:r.convertedBy};if(r.trainingConfig!=null&&(o.trainingConfig=r.trainingConfig),r.weightsManifest!=null){if(!e)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!t)throw new Error("modelJSON has weightsManifest but weightData is null");o.weightSpecs=e,o.weightData=t}return r.signature!=null&&(o.signature=r.signature),r.userDefinedMetadata!=null&&(o.userDefinedMetadata=r.userDefinedMetadata),r.modelInitializer!=null&&(o.modelInitializer=r.modelInitializer),r.initializerSignature!=null&&(o.initializerSignature=r.initializerSignature),o}function iu(r,e){return B(this,null,function*(){let t,o;return r.weightsManifest!=null&&([t,o]=yield e(r.weightsManifest)),Bg(r,t,o)})}function jo(r){if(r.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:r.modelTopology==null?0:dC(JSON.stringify(r.modelTopology)),weightSpecsBytes:r.weightSpecs==null?0:dC(JSON.stringify(r.weightSpecs)),weightDataBytes:r.weightData==null?0:new Ze(r.weightData).byteLength}}function Dc(r){let e=[];for(let t of r)e.push(...t.weights);return e}function z_(){let r=t=>{let o=t<<13,n=0;for(;(o&8388608)===0;)n-=8388608,o<<=1;return o&=-8388609,n+=947912704,o|n},e=new Uint32Array(2048);e[0]=0;for(let t=1;t<1024;t++)e[t]=r(t);for(let t=1024;t<2048;t++)e[t]=939524096+(t-1024<<13);return e}function M_(){let r=new Uint32Array(64);r[0]=0,r[31]=1199570944,r[32]=2147483648,r[63]=3347054592;for(let e=1;e<31;e++)r[e]=e<<23;for(let e=33;e<63;e++)r[e]=2147483648+(e-32<<23);return r}function B_(){let r=new Uint32Array(64);for(let e=0;e<64;e++)r[e]=1024;return r[0]=r[32]=0,r}function V_(){let r=z_(),e=M_(),t=B_();return o=>{let n=new ArrayBuffer(4*o.length),s=new Uint32Array(n);for(let i=0;i<o.length;i++){let a=o[i],l=r[t[a>>10]+(a&1023)]+e[a>>10];s[i]=l}return new Float32Array(n)}}var Oe=class r{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return r.instance==null&&(r.instance=new r),r.instance}static registerSaveRouter(e){r.getInstance().saveRouters.push(e)}static registerLoadRouter(e){r.getInstance().loadRouters.push(e)}static getSaveHandlers(e){return r.getHandlers(e,"save")}static getLoadHandlers(e,t){return r.getHandlers(e,"load",t)}static getHandlers(e,t,o){let n=[];return(t==="load"?r.getInstance().loadRouters:r.getInstance().saveRouters).forEach(i=>{let a=i(e,o);a!==null&&n.push(a)}),n}},CC=r=>Oe.registerSaveRouter(r),SC=r=>Oe.registerLoadRouter(r),vC=r=>Oe.getSaveHandlers(r),NC=(r,e)=>Oe.getLoadHandlers(r,e);var Vg="tensorflowjs",Gg=1,Ca="models_store",Oi="model_info_store";function IC(){if(!P().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");let r=typeof window>"u"?self:window,e=r.indexedDB||r.mozIndexedDB||r.webkitIndexedDB||r.msIndexedDB||r.shimIndexedDB;if(e==null)throw new Error("The current browser does not appear to support IndexedDB.");return e}function Wg(r){let e=r.result;e.createObjectStore(Ca,{keyPath:"modelPath"}),e.createObjectStore(Oi,{keyPath:"modelPath"})}var Sa=(()=>{class r{constructor(t){if(this.indexedDB=IC(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}save(t){return B(this,null,function*(){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,t)})}load(){return B(this,null,function*(){return this.databaseAction(this.modelPath)})}databaseAction(t,o){return new Promise((n,s)=>{let i=this.indexedDB.open(Vg,Gg);i.onupgradeneeded=()=>Wg(i),i.onsuccess=()=>{let a=i.result;if(o==null){let l=a.transaction(Ca,"readonly"),c=l.objectStore(Ca).get(this.modelPath);c.onsuccess=()=>{if(c.result==null)return a.close(),s(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));n(c.result.modelArtifacts)},c.onerror=p=>(a.close(),s(c.error)),l.oncomplete=()=>a.close()}else{o.weightData=Ze.join(o.weightData);let l=jo(o),u=a.transaction(Oi,"readwrite"),c=u.objectStore(Oi),p;try{p=c.put({modelPath:this.modelPath,modelArtifactsInfo:l})}catch(f){return s(f)}let m;p.onsuccess=()=>{m=a.transaction(Ca,"readwrite");let f=m.objectStore(Ca),h;try{h=f.put({modelPath:this.modelPath,modelArtifacts:o,modelArtifactsInfo:l})}catch(g){return s(g)}h.onsuccess=()=>n({modelArtifactsInfo:l}),h.onerror=g=>{c=u.objectStore(Oi);let d=c.delete(this.modelPath);d.onsuccess=()=>(a.close(),s(h.error)),d.onerror=x=>(a.close(),s(h.error))}},p.onerror=f=>(a.close(),s(p.error)),u.oncomplete=()=>{m==null?a.close():m.oncomplete=()=>a.close()}}},i.onerror=a=>s(i.error)})}}return r.URL_SCHEME="indexeddb://",r})();var TC=r=>P().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(Sa.URL_SCHEME)?G_(r.slice(Sa.URL_SCHEME.length)):null;Oe.registerSaveRouter(TC);Oe.registerLoadRouter(TC);function G_(r){return new Sa(r)}function W_(r){return r.startsWith(Sa.URL_SCHEME)?r.slice(Sa.URL_SCHEME.length):r}var Tm=class{constructor(){this.indexedDB=IC()}listModels(){return B(this,null,function*(){return new Promise((e,t)=>{let o=this.indexedDB.open(Vg,Gg);o.onupgradeneeded=()=>Wg(o),o.onsuccess=()=>{let n=o.result,s=n.transaction(Oi,"readonly"),a=s.objectStore(Oi).getAll();a.onsuccess=()=>{let l={};for(let u of a.result)l[u.modelPath]=u.modelArtifactsInfo;e(l)},a.onerror=l=>(n.close(),t(a.error)),s.oncomplete=()=>n.close()},o.onerror=n=>t(o.error)})})}removeModel(e){return B(this,null,function*(){return e=W_(e),new Promise((t,o)=>{let n=this.indexedDB.open(Vg,Gg);n.onupgradeneeded=()=>Wg(n),n.onsuccess=()=>{let s=n.result,i=s.transaction(Oi,"readwrite"),a=i.objectStore(Oi),l=a.get(e),u;l.onsuccess=()=>{if(l.result==null)return s.close(),o(new Error(`Cannot find model with path '${e}' in IndexedDB.`));{let c=a.delete(e),p=()=>{u=s.transaction(Ca,"readwrite");let f=u.objectStore(Ca).delete(e);f.onsuccess=()=>t(l.result.modelArtifactsInfo),f.onerror=h=>o(l.error)};c.onsuccess=p,c.onerror=m=>(p(),s.close(),o(l.error))}},l.onerror=c=>(s.close(),o(l.error)),i.oncomplete=()=>{u==null?s.close():u.oncomplete=()=>s.close()}},n.onerror=s=>o(n.error)})})}};var ls="/",au="tensorflowjs_models",kC="info",U_="model_topology",H_="weight_specs",q_="weight_data",K_="model_metadata";function EC(r){return{info:[au,r,kC].join(ls),topology:[au,r,U_].join(ls),weightSpecs:[au,r,H_].join(ls),weightData:[au,r,q_].join(ls),modelMetadata:[au,r,K_].join(ls)}}function AC(r){for(let e of Object.values(r))window.localStorage.removeItem(e)}function j_(r){let e=r.split(ls);if(e.length<3)throw new Error(`Invalid key format: ${r}`);return e.slice(1,e.length-1).join(ls)}function X_(r){return r.startsWith(va.URL_SCHEME)?r.slice(va.URL_SCHEME.length):r}var va=(()=>{class r{constructor(t){if(!P().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=EC(this.modelPath)}save(t){return B(this,null,function*(){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{let o=JSON.stringify(t.modelTopology),n=JSON.stringify(t.weightSpecs),s=jo(t),i=Ze.join(t.weightData);try{this.LS.setItem(this.keys.info,JSON.stringify(s)),this.LS.setItem(this.keys.topology,o),this.LS.setItem(this.keys.weightSpecs,n),this.LS.setItem(this.keys.weightData,yC(i));let a={format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,signature:t.signature!=null?t.signature:void 0,userDefinedMetadata:t.userDefinedMetadata!=null?t.userDefinedMetadata:void 0,modelInitializer:t.modelInitializer!=null?t.modelInitializer:void 0,initializerSignature:t.initializerSignature!=null?t.initializerSignature:void 0,trainingConfig:t.trainingConfig!=null?t.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(a)),{modelArtifactsInfo:s}}catch{throw AC(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${s.modelTopologyBytes}, weightSpecsBytes=${s.weightSpecsBytes}, weightDataBytes=${s.weightDataBytes}.`)}}})}load(){return B(this,null,function*(){let t=JSON.parse(this.LS.getItem(this.keys.info));if(t==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");let o={},n=JSON.parse(this.LS.getItem(this.keys.topology));if(n==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);o.modelTopology=n;let s=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(s==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);o.weightSpecs=s;let i=this.LS.getItem(this.keys.modelMetadata);if(i!=null){let l=JSON.parse(i);o.format=l.format,o.generatedBy=l.generatedBy,o.convertedBy=l.convertedBy,l.signature!=null&&(o.signature=l.signature),l.userDefinedMetadata!=null&&(o.userDefinedMetadata=l.userDefinedMetadata),l.modelInitializer!=null&&(o.modelInitializer=l.modelInitializer),l.initializerSignature!=null&&(o.initializerSignature=l.initializerSignature),l.trainingConfig!=null&&(o.trainingConfig=l.trainingConfig)}let a=this.LS.getItem(this.keys.weightData);if(a==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return o.weightData=bC(a),o})}}return r.URL_SCHEME="localstorage://",r})();var $C=r=>P().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(va.URL_SCHEME)?Y_(r.slice(va.URL_SCHEME.length)):null;Oe.registerSaveRouter($C);Oe.registerLoadRouter($C);function Y_(r){return new va(r)}var km=class{constructor(){k(P().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),k(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}listModels(){return B(this,null,function*(){let e={},t=au+ls,o=ls+kC;for(let n=0;n<this.LS.length;++n){let s=this.LS.key(n);if(s.startsWith(t)&&s.endsWith(o)){let i=j_(s);e[i]=JSON.parse(this.LS.getItem(s))}}return e})}removeModel(e){return B(this,null,function*(){e=X_(e);let t=EC(e);if(this.LS.getItem(t.info)==null)throw new Error(`Cannot find model at path '${e}'`);let o=JSON.parse(this.LS.getItem(t.info));return AC(t),o})}};var lu="://",Eo=class r{constructor(){this.managers={}}static getInstance(){return r.instance==null&&(r.instance=new r),r.instance}static registerManager(e,t){k(e!=null,()=>"scheme must not be undefined or null."),e.endsWith(lu)&&(e=e.slice(0,e.indexOf(lu))),k(e.length>0,()=>"scheme must not be an empty string.");let o=r.getInstance();k(o.managers[e]==null,()=>`A model store manager is already registered for scheme '${e}'.`),o.managers[e]=t}static getManager(e){let t=r.getInstance().managers[e];if(t==null)throw new Error(`Cannot find model manager for scheme '${e}'`);return t}static getSchemes(){return Object.keys(r.getInstance().managers)}};function Em(r){if(r.indexOf(lu)===-1)throw new Error(`The url string provided does not contain a scheme. Supported schemes are: ${Eo.getSchemes().join(",")}`);return{scheme:r.split(lu)[0],path:r.split(lu)[1]}}function DC(r,e,t=!1){return B(this,null,function*(){k(r!==e,()=>`Old path and new path are the same: '${r}'`);let o=Oe.getLoadHandlers(r);k(o.length>0,()=>`Copying failed because no load handler is found for source URL ${r}.`),k(o.length<2,()=>`Copying failed because more than one (${o.length}) load handlers for source URL ${r}.`);let n=o[0],s=Oe.getSaveHandlers(e);k(s.length>0,()=>`Copying failed because no save handler is found for destination URL ${e}.`),k(s.length<2,()=>`Copying failed because more than one (${o.length}) save handlers for destination URL ${e}.`);let i=s[0],a=Em(r).scheme,l=Em(r).path,u=a===Em(r).scheme,c=yield n.load();t&&u&&(yield Eo.getManager(a).removeModel(l));let p=yield i.save(c);return t&&!u&&(yield Eo.getManager(a).removeModel(l)),p.modelArtifactsInfo})}function RC(){return B(this,null,function*(){let r=Eo.getSchemes(),e={};for(let t of r){let o=yield Eo.getManager(t).listModels();for(let n in o){let s=t+lu+n;e[s]=o[n]}}return e})}function FC(r){return B(this,null,function*(){let e=Em(r);return Eo.getManager(e.scheme).removeModel(e.path)})}function _C(r,e){return B(this,null,function*(){return DC(r,e,!1)})}function OC(r,e){return B(this,null,function*(){return DC(r,e,!0)})}var Ug=class{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(e,t){return fetch(e,t)}now(){return performance.now()}encode(e,t){if(t!=="utf-8"&&t!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${t}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(e)}decode(e,t){return new TextDecoder(t).decode(e)}setTimeoutCustom(e,t){if(typeof window>"u"||!P().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(e,t);return}this.functionRefs.push(e),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},t),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",o=>{if(o.source===window&&o.data.name===this.messageName){o.stopPropagation();let n=this.functionRefs[o.data.index];n(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}isTypedArray(e){return mm(e)}};if(P().get("IS_BROWSER")){P().setPlatform("browser",new Ug);try{Eo.registerManager(va.URL_SCHEME,new km)}catch{}try{Eo.registerManager(Sa.URL_SCHEME,new Tm)}catch{}}var Q_={importFetch:()=>PC()},Hg;var qg=class{constructor(){this.util=zC(),this.textEncoder=new this.util.TextEncoder}fetch(e,t){return P().global.fetch!=null?P().global.fetch(e,t):(Hg==null&&(Hg=Q_.importFetch()),Hg(e,t))}now(){let e=process.hrtime();return e[0]*1e3+e[1]/1e6}encode(e,t){if(t!=="utf-8"&&t!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${t}`);return this.textEncoder.encode(e)}decode(e,t){return e.length===0?"":new this.util.TextDecoder(t).decode(e)}isTypedArray(e){return this.util.types.isFloat32Array(e)||this.util.types.isInt32Array(e)||this.util.types.isUint8Array(e)||this.util.types.isUint8ClampedArray(e)}};P().get("IS_NODE")&&!P().get("IS_BROWSER")&&P().setPlatform("node",new qg);function ft(r,e="float32",t){return e=e||"float32",We(r),new Ut(r,e,t)}function J_(r,e){let t=N(r,"x","cast");if(!yg(e))throw new Error(`Failed to cast to unknown dtype ${e}`);if(e==="string"&&t.dtype!=="string"||e!=="string"&&t.dtype==="string")throw new Error("Only strings can be casted to strings");let o={x:t},n={dtype:e};return I.runKernel(Wo,o,n)}var Y=T({cast_:J_});function tO(r){let t={x:N(r,"x","clone","string_or_numeric")};return I.runKernel(Uo,t)}var Rr=T({clone_:tO});function MC(r,e=!1){console.log(r.toString(e))}_g();var eO={buffer:ft,cast:Y,clone:Rr,print:MC};nC(eO);function rO(r,e){let t=N(r,"a","add"),o=N(e,"b","add");[t,o]=$t(t,o);let n={a:t,b:o};return I.runKernel(Io,n)}var j=T({add_:rO});function oO(r,e){let t=N(r,"a","floorDiv"),o=N(e,"b","floorDiv");[t,o]=$t(t,o);let n={a:t,b:o};return I.runKernel(Dn,n)}var Am=T({floorDiv_:oO});function nO(r,e){let t=N(r,"a","div"),o=N(e,"b","div");if([t,o]=$t(t,o),t.dtype==="int32"&&o.dtype==="int32")return Am(t,o);let n={a:t,b:o},s={};return I.runKernel(In,n,s)}var ot=T({div_:nO});function sO(r,e){let t=N(r,"a","mul"),o=N(e,"b","mul");[t,o]=$t(t,o);let n={a:t,b:o};return I.runKernel(Vn,n)}var R=T({mul_:sO});function iO(r){let e=N(r,"x","abs");if(e.dtype==="complex64"){let t={x:e};return I.runKernel(Hs,t)}else{let t={x:e};return I.runKernel(zs,t)}}var ke=T({abs_:iO});function aO(r){let t={x:N(r,"x","acos")};return I.runKernel(hn,t)}var Kg=T({acos_:aO});function lO(r){let t={x:N(r,"x","acosh")};return I.runKernel(dn,t)}var jg=T({acosh_:lO});function uO(r,e=null,t=!1){let n={x:N(r,"x","all","bool")},s={axis:e,keepDims:t};return I.runKernel(gl,n,s)}var Rc=T({all_:uO});function cO(r,e=null,t=!1){let n={x:N(r,"x","any","bool")},s={axis:e,keepDims:t};return I.runKernel(xl,n,s)}var cu=T({any_:cO});function pO(r,e=0){let o={x:N(r,"x","argMax")},n={axis:e};return I.runKernel(Ms,o,n)}var us=T({argMax_:pO});function mO(r,e=0){let o={x:N(r,"x","argMin")},n={axis:e};return I.runKernel(Bs,o,n)}var BC=T({argMin_:mO});function fO(r){let t={x:N(r,"x","asin")};return I.runKernel(gn,t)}var Xg=T({asin_:fO});function hO(r){let t={x:N(r,"x","asinh")};return I.runKernel(xn,t)}var Yg=T({asinh_:hO});function dO(r){let t={x:N(r,"x","atan")};return I.runKernel(yn,t)}var Zg=T({atan_:dO});function gO(r,e){let t=N(r,"a","atan2"),o=N(e,"b","atan2");[t,o]=$t(t,o);let n={a:t,b:o};return I.runKernel(wn,n)}var VC=T({atan2_:gO});function xO(r){let t={x:N(r,"x","atanh")};return I.runKernel(bn,t)}var Qg=T({atanh_:xO});function yO(r,e,t,o,n="NHWC",s){let i=r[3],a=[...e,i],l=WC(n);return Ia(r,a,t,s,o,null,null,l)}function tx(r,e,t,o,n,s,i="channelsLast"){let[a,l]=Fc(e),u;if(i==="channelsLast")u=[a,l,r[3],r[3]];else if(i==="channelsFirst")u=[a,l,r[1],r[1]];else throw new Error(`Unknown dataFormat ${i}`);return Ia(r,u,t,o,n,s,!1,i)}function bO(r,e,t,o,n,s,i="NDHWC"){let[a,l,u]=Jg(e),c,p;if(i==="NDHWC")p="channelsLast",c=[a,l,u,r[4],r[4]];else if(i==="NCDHW")p="channelsFirst",c=[a,l,u,r[1],r[1]];else throw new Error(`Unknown dataFormat ${i}`);return GC(r,c,t,o,n,!1,p,s)}function Ia(r,e,t,o,n,s,i=!1,a="channelsLast"){let[l,u,c,p]=[-1,-1,-1,-1];if(a==="channelsLast")[l,u,c,p]=r;else if(a==="channelsFirst")[l,p,u,c]=r;else throw new Error(`Unknown dataFormat ${a}`);let[m,f,,h]=e,[g,d]=Fc(t),[x,y]=Fc(o),w=pu(m,x),C=pu(f,y),{padInfo:S,outHeight:E,outWidth:A}=SO(n,u,c,g,d,w,C,s,a),$=i?h*p:h,_;return a==="channelsFirst"?_=[l,$,E,A]:a==="channelsLast"&&(_=[l,E,A,$]),{batchSize:l,dataFormat:a,inHeight:u,inWidth:c,inChannels:p,outHeight:E,outWidth:A,outChannels:$,padInfo:S,strideHeight:g,strideWidth:d,filterHeight:m,filterWidth:f,effectiveFilterHeight:w,effectiveFilterWidth:C,dilationHeight:x,dilationWidth:y,inShape:r,outShape:_,filterShape:e}}function GC(r,e,t,o,n,s=!1,i="channelsLast",a){let[l,u,c,p,m]=[-1,-1,-1,-1,-1];if(i==="channelsLast")[l,u,c,p,m]=r;else if(i==="channelsFirst")[l,m,u,c,p]=r;else throw new Error(`Unknown dataFormat ${i}`);let[f,h,g,,d]=e,[x,y,w]=Jg(t),[C,S,E]=Jg(o),A=pu(f,C),$=pu(h,S),_=pu(g,E),{padInfo:L,outDepth:M,outHeight:V,outWidth:G}=vO(n,u,c,p,x,y,w,A,$,_,a),W=s?d*m:d,U;return i==="channelsFirst"?U=[l,W,M,V,G]:i==="channelsLast"&&(U=[l,M,V,G,W]),{batchSize:l,dataFormat:i,inDepth:u,inHeight:c,inWidth:p,inChannels:m,outDepth:M,outHeight:V,outWidth:G,outChannels:W,padInfo:L,strideDepth:x,strideHeight:y,strideWidth:w,filterDepth:f,filterHeight:h,filterWidth:g,effectiveFilterDepth:A,effectiveFilterHeight:$,effectiveFilterWidth:_,dilationDepth:C,dilationHeight:S,dilationWidth:E,inShape:r,outShape:U,filterShape:e}}function wO(r,e,t,o,n){o==null&&(o=ex(r,e,t));let s=r[0],i=r[1],a=_c((s-e+2*o)/t+1,n),l=_c((i-e+2*o)/t+1,n);return[a,l]}function CO(r,e,t,o,n,s){n==null&&(n=ex(r,e[0],o[0]));let i=[0,0,0,t];for(let a=0;a<3;a++)r[a]+2*n>=e[a]&&(i[a]=_c((r[a]-e[a]+2*n)/o[a]+1,s));return i}function ex(r,e,t,o=1){let n=pu(e,o);return Math.floor((r[0]*(t-1)-t+n)/2)}function Fc(r){return typeof r=="number"?[r,r,r]:r.length===2?[r[0],r[1],1]:r}function Jg(r){return typeof r=="number"?[r,r,r]:r}function pu(r,e){return e<=1?r:r+(r-1)*(e-1)}function SO(r,e,t,o,n,s,i,a,l){let u,c,p;if(typeof r=="number"){u={top:r,bottom:r,left:r,right:r,type:r===0?"VALID":"NUMBER"};let f=wO([e,t],s,o,r,a);c=f[0],p=f[1]}else if(r==="same"){c=Math.ceil(e/o),p=Math.ceil(t/n);let m=Math.max(0,(c-1)*o+s-e),f=Math.max(0,(p-1)*n+i-t),h=Math.floor(m/2),g=m-h,d=Math.floor(f/2),x=f-d;u={top:h,bottom:g,left:d,right:x,type:"SAME"}}else if(r==="valid")u={top:0,bottom:0,left:0,right:0,type:"VALID"},c=Math.ceil((e-s+1)/o),p=Math.ceil((t-i+1)/n);else if(typeof r=="object"){let m=l==="channelsLast"?r[1][0]:r[2][0],f=l==="channelsLast"?r[1][1]:r[2][1],h=l==="channelsLast"?r[2][0]:r[3][0],g=l==="channelsLast"?r[2][1]:r[3][1];u={top:m,bottom:f,left:h,right:g,type:m===0&&f===0&&h===0&&g===0?"VALID":"EXPLICIT"},c=_c((e-s+m+f)/o+1,a),p=_c((t-i+h+g)/n+1,a)}else throw Error(`Unknown padding parameter: ${r}`);return{padInfo:u,outHeight:c,outWidth:p}}function vO(r,e,t,o,n,s,i,a,l,u,c){let p,m,f,h;if(r==="valid"&&(r=0),typeof r=="number"){p={top:r,bottom:r,left:r,right:r,front:r,back:r,type:r===0?"VALID":"NUMBER"};let d=CO([e,t,o,1],[a,l,u],1,[n,s,i],r,c);m=d[0],f=d[1],h=d[2]}else if(r==="same"){m=Math.ceil(e/n),f=Math.ceil(t/s),h=Math.ceil(o/i);let g=(m-1)*n+a-e,d=(f-1)*s+l-t,x=(h-1)*i+u-o,y=Math.floor(g/2),w=g-y,C=Math.floor(d/2),S=d-C,E=Math.floor(x/2),A=x-E;p={top:C,bottom:S,left:E,right:A,front:y,back:w,type:"SAME"}}else throw Error(`Unknown padding parameter: ${r}`);return{padInfo:p,outDepth:m,outHeight:f,outWidth:h}}function _c(r,e){if(!e)return Math.trunc(r);switch(e){case"round":return Math.round(r);case"ceil":return Math.ceil(r);case"floor":return Math.floor(r);default:throw new Error(`Unknown roundingMode ${e}`)}}function qr(r){let[e,t,o]=Fc(r);return e===1&&t===1&&o===1}function He(r,e){return qr(r)||qr(e)}function Xo(r){return Fc(r).every(e=>e>0)}function WC(r){if(r==="NHWC")return"channelsLast";if(r==="NCHW")return"channelsFirst";throw new Error(`Unknown dataFormat ${r}`)}function Zt(r,e,t){if(t!=null){if(typeof e=="string")throw Error(`Error in ${r}: pad must be an integer when using dimRoundingMode ${t} but got pad ${e}.`);if(typeof e=="number")k(fn(e),()=>`Error in ${r}: pad must be an integer when using dimRoundingMode ${t} but got pad ${e}.`);else if(typeof e=="object")e.forEach(o=>{o.forEach(n=>{k(fn(n),()=>`Error in ${r}: pad must be an integer when using dimRoundingMode ${t} but got pad ${n}.`)})});else throw Error(`Error in ${r}: Unknown padding parameter: ${e}`)}}function NO(r,e){let o={x:N(r,"x","reshape","string_or_numeric")},n={shape:e};return I.runKernel(xi,o,n)}var F=T({reshape_:NO});function IO(r,e,t,o,n){let s=N(r,"x","avgPool","float32"),i=1;k(He(t,i),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${t} and dilations '${i}'`);let a=s,l=!1;s.rank===3&&(l=!0,a=F(s,[1,s.shape[0],s.shape[1],s.shape[2]])),k(a.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${a.rank}.`),Zt("avgPool",o,n);let u={x:a},c={filterSize:e,strides:t,pad:o,dimRoundingMode:n},p=I.runKernel(Vs,u,c);return p=Y(p,s.dtype),l?F(p,[p.shape[1],p.shape[2],p.shape[3]]):p}var Ta=T({avgPool_:IO});function TO(r,e,t,o,n,s="NDHWC"){let i=N(r,"x","avgPool3d","float32"),a=i,l=!1;i.rank===4&&(l=!0,a=F(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),k(a.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${a.rank}.`),k(s==="NDHWC",()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${s}`),k(typeof t=="number"&&t>0||Array.isArray(t)&&t[0]>0&&t[1]>0&&t[2]>0,()=>`Error in avgPool3d: Stride must be > 0, but got '${t}'`),Zt("avgPool3d",o,n);let u={x:a},c={filterSize:e,strides:t,pad:o,dimRoundingMode:n,dataFormat:s},p=I.runKernel(Gs,u,c);return p=Y(p,a.dtype),l?F(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}var rx=T({avgPool3d_:TO});function kO(r,e=0){k(r.length>=1,()=>"Pass at least one tensor to concat");let t=Cm(r,"tensors","concat","string_or_numeric");if(t[0].dtype==="complex64"&&t.forEach(s=>{if(s.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${s.dtype}. `)}),t.length===1)return Rr(t[0]);let o=t,n={axis:e};return I.runKernel(qs,o,n)}var te=T({concat_:kO});function EO(r,e,t=!1,o=!1){let n=N(r,"a","matMul"),s=N(e,"b","matMul");[n,s]=$t(n,s);let i={a:n,b:s},a={transposeA:t,transposeB:o};return I.runKernel(Ws,i,a)}var Mt=T({matMul_:EO});function AO(r){let t={x:N(r,"x","sigmoid","float32")};return I.runKernel(Qn,t)}var so=T({sigmoid_:AO});function $O(r,e,t){let o=N(r,"x","slice","string_or_numeric");if(o.rank===0)throw new Error("Slicing scalar is not possible");let n={x:o},s={begin:e,size:t};return I.runKernel(Si,n,s)}var Ft=T({slice_:$O});function DO(r){let t={x:N(r,"x","tanh","float32")};return I.runKernel(ns,t)}var ka=T({tanh_:DO});function RO(r,e,t){let o=N(r,"x","batchToSpaceND"),n=e.reduce((a,l)=>a*l);k(o.rank>=1+e.length,()=>`input rank is ${o.rank} but should be > than blockShape.length ${e.length}`),k(t.length===e.length,()=>`crops.length is ${t.length} but should be equal to blockShape.length  ${e.length}`),k(o.shape[0]%n===0,()=>`input tensor batch is ${o.shape[0]} but is not divisible by the product of the elements of blockShape ${e.join(" * ")} === ${n}`);let s={x:o},i={blockShape:e,crops:t};return I.runKernel(Us,s,i)}var mu=T({batchToSpaceND_:RO});function UC(r){let e;return r.rank===0||r.rank===1?e=F(r,[1,1,1,r.size]):r.rank===2?e=F(r,[1,1,r.shape[0],r.shape[1]]):r.rank===3?e=F(r,[1,r.shape[0],r.shape[1],r.shape[2]]):e=r,e}function FO(r,e,t,o,n,s){s==null&&(s=.001);let i=N(r,"x","batchNorm"),a=N(e,"mean","batchNorm"),l=N(t,"variance","batchNorm"),u;n!=null&&(u=N(n,"scale","batchNorm"));let c;o!=null&&(c=N(o,"offset","batchNorm")),k(a.rank===l.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),k(c==null||a.rank===c.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),k(u==null||a.rank===u.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");let m={x:UC(i),scale:u,offset:c,mean:a,variance:l},f={varianceEpsilon:s},h=I.runKernel(ti,m,f);return F(h,i.shape)}var Li=T({batchNorm_:FO});function _O(r,e,t,o,n,s){let i=N(r,"x","batchNorm"),a=N(e,"mean","batchNorm"),l=N(t,"variance","batchNorm"),u;n!=null&&(u=N(n,"scale","batchNorm"));let c;return o!=null&&(c=N(o,"offset","batchNorm")),k(i.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${i.rank}.`),k(a.rank===2||a.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${a.rank}.`),k(l.rank===2||l.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${l.rank}.`),u!=null&&k(u.rank===2||u.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${u.rank}.`),c!=null&&k(c.rank===2||c.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${c.rank}.`),Li(i,a,l,c,u,s)}var ox=T({batchNorm2d_:_O});function OO(r,e,t,o,n,s){let i=N(r,"x","batchNorm"),a=N(e,"mean","batchNorm"),l=N(t,"variance","batchNorm"),u;n!=null&&(u=N(n,"scale","batchNorm"));let c;return o!=null&&(c=N(o,"offset","batchNorm")),k(i.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${i.rank}.`),k(a.rank===3||a.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${a.rank}.`),k(l.rank===3||l.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${l.rank}.`),u!=null&&k(u.rank===3||u.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${u.rank}.`),c!=null&&k(c.rank===3||c.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${c.rank}.`),Li(i,a,l,c,u,s)}var nx=T({batchNorm3d_:OO});function LO(r,e,t,o,n,s){let i=N(r,"x","batchNorm"),a=N(e,"mean","batchNorm"),l=N(t,"variance","batchNorm"),u;n!=null&&(u=N(n,"scale","batchNorm"));let c;return o!=null&&(c=N(o,"offset","batchNorm")),k(i.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${i.rank}.`),k(a.rank===4||a.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${a.rank}.`),k(l.rank===4||l.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${l.rank}.`),u!=null&&k(u.rank===4||u.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${u.rank}.`),c!=null&&k(c.rank===4||c.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${c.rank}.`),Li(i,a,l,c,u,s)}var sx=T({batchNorm4d_:LO});function PO(r,e,t){let o=N(r,"x","bincount"),n=N(e,"weights","bincount");k(o.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${o.dtype}`),k(t>=0,()=>`size must be non-negative, but got ${t}.`),k(n.size===o.size||n.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${o.shape}, weights shape: ${n.shape}.`);let s={x:o,weights:n},i={size:t};return I.runKernel(wl,s,i)}var HC=T({bincount_:PO});function zO(r,e){let t=N(r,"broadcastTo","x"),o=t.shape;if(We(e),e.length<t.rank)throw new Error(`broadcastTo(): shape.length=${e.length} < input.rank=${t.rank}.`);if(e.length>t.rank){let u=t.shape.slice();for(;u.length<e.length;)u.unshift(1);t=F(t,u)}let n=t.shape,s=Array.from(e);for(let u=e.length-1;u>=0;u--)if(n[u]===e[u])s[u]=1;else if(t.shape[u]!==1)throw new Error(`broadcastTo(): [${o}] cannot be broadcast to [${e}].`);if(s.map((u,c)=>u>1?c:-1).filter(u=>u>=0).length===0)return Rr(t);let a={x:t},l={reps:s};return I.runKernel(Ho,a,l)}var cs=T({broadcastTo_:zO});function MO(r){let t={x:N(r,"x","ceil","float32")};return I.runKernel(Cn,t)}var ix=T({ceil_:MO});function ps(r,e,t){We(r),t=t||Ps(e);let o={shape:r,value:e,dtype:t};return I.runKernel(_l,{},o)}function BO(r,e,t){let o=N(r,"x","clipByValue");if(k(e<=t,()=>`Error in clip: min (${e}) must be less than or equal to max (${t}).`),e===t)return ps(o.shape,e,o.dtype);let n={x:o},s={clipValueMin:e,clipValueMax:t};return I.runKernel(Sn,n,s)}var qe=T({clipByValue_:BO});function VO(r){return te(r,0)}var ax=T({concat1d_:VO});function GO(r,e){return te(r,e)}var lx=T({concat2d_:GO});function WO(r,e){return te(r,e)}var ux=T({concat3d_:WO});function UO(r,e){return te(r,e)}var cx=T({concat4d_:UO});function HO(r,e,t,o,n="NHWC",s=[1,1],i){let a=N(r,"x","conv2d","float32"),l=N(e,"filter","conv2d","float32"),u=a,c=!1;a.rank===3&&(c=!0,u=F(a,[1,a.shape[0],a.shape[1],a.shape[2]])),k(u.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${u.rank}.`),k(l.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${l.rank}.`),Zt("conv2d",o,i);let p=n==="NHWC"?u.shape[3]:u.shape[1];k(p===l.shape[2],()=>`Error in conv2d: depth of input (${p}) must match input depth for filter ${l.shape[2]}.`),k(He(t,s),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${t} and dilations '${s}'`),k(Xo(s),()=>"Error in conv2D: Dilated rates should be larger than 0."),k(Xo(t),()=>"Error in conv2D: Strides should be larger than 0.");let m={x:u,filter:l},f={strides:t,pad:o,dataFormat:n,dilations:s,dimRoundingMode:i},h=I.runKernel(Ks,m,f);return c?F(h,[h.shape[1],h.shape[2],h.shape[3]]):h}var Fr=T({conv2d_:HO});function qO(r,e,t,o,n="NWC",s=1,i){let a=N(r,"x","conv1d"),l=N(e,"filter","conv1d"),u=a,c=!1;a.rank===2&&(c=!0,u=F(a,[1,a.shape[0],a.shape[1]])),k(u.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${u.rank}.`),k(l.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${l.rank}.`),Zt("conv1d",o,i),k(u.shape[2]===l.shape[1],()=>`Error in conv1d: depth of input (${u.shape[2]}) must match input depth for filter ${l.shape[1]}.`),k(He(t,s),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${t} and dilation '${s}'`),k(Xo(s),()=>"Error in conv1D: Dilated rates should be larger than 0."),k(Xo(t),()=>"Error in conv1D: Stride should be larger than 0."),k(n==="NWC",()=>`Error in conv1d: got dataFormat of ${n} but only NWC is currently supported.`);let p=F(l,[1,l.shape[0],l.shape[1],l.shape[2]]),m=F(u,[u.shape[0],1,u.shape[1],u.shape[2]]),d=Fr(m,p,[1,t],o,"NHWC",[1,s],i);return c?F(d,[d.shape[2],d.shape[3]]):F(d,[d.shape[0],d.shape[2],d.shape[3]])}var Oc=T({conv1d_:qO});function KO(r,e,t,o,n,s="NHWC",i){k(r.length===e.rank,()=>`Length of inShape (${r.length}) and rank of dy (${e.rank}) must match`);let a=r,l=e,u=!1;e.rank===3&&(u=!0,l=F(e,[1,e.shape[0],e.shape[1],e.shape[2]]),a=[1,r[0],r[1],r[2]]),k(a.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${a.length}.`),k(l.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${l.rank}`),k(t.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${t.rank}`);let c=s==="NHWC"?a[3]:a[1],p=s==="NHWC"?l.shape[3]:l.shape[1];k(c===t.shape[2],()=>`Error in conv2dDerInput: depth of input (${c}) must match input depth for filter ${t.shape[2]}.`),k(p===t.shape[3],()=>`Error in conv2dDerInput: depth of output (${p}) must match output depth for filter ${t.shape[3]}.`),Zt("conv2dDerInput",n,i);let m={dy:l,filter:t},f={strides:o,pad:n,dataFormat:s,dimRoundingMode:i,inputShape:a},h=I.runKernel(js,m,f);return u?F(h,[h.shape[1],h.shape[2],h.shape[3]]):h}var fu=T({conv2DBackpropInput_:KO});function jO(r,e,t,o,n,s){let i=N(r,"x","conv2dTranspose"),a=N(e,"filter","conv2dTranspose");return fu(t,i,a,o,n,"NHWC",s)}var Lc=T({conv2dTranspose_:jO});function XO(r,e,t,o,n="NDHWC",s=[1,1,1]){let i=N(r,"x","conv3d"),a=N(e,"filter","conv3d"),l=i,u=!1;i.rank===4&&(u=!0,l=F(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),k(l.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${l.rank}.`),k(a.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${a.rank}.`),k(l.shape[4]===a.shape[3],()=>`Error in conv3d: depth of input (${l.shape[4]}) must match input depth for filter ${a.shape[3]}.`),k(He(t,s),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${t} and dilations '${s}'`),k(n==="NDHWC",()=>`Error in conv3d: got dataFormat of ${n} but only NDHWC is currently supported.`),k(Xo(s),()=>"Error in conv3D: Dilated rates should be larger than 0."),k(Xo(t),()=>"Error in conv3D: Strides should be larger than 0.");let c={x:l,filter:a},p={strides:t,pad:o,dataFormat:n,dilations:s},m=I.runKernel(Xs,c,p);return u?F(m,[m.shape[1],m.shape[2],m.shape[3],m.shape[4]]):m}var px=T({conv3d_:XO});function YO(r,e,t,o,n){k(r.length===e.rank,()=>`Length of inShape (${r.length}) and rank of dy (${e.rank}) must match`);let s=r,i=e,a=!1;e.rank===4&&(a=!0,i=F(e,[1,e.shape[0],e.shape[1],e.shape[2],e.shape[3]]),s=[1,r[0],r[1],r[2],r[3]]);let l=s[4],u=i.shape[4];k(s.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${s.length}.`),k(i.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${i.rank}`),k(t.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${t.rank}`),k(l===t.shape[3],()=>`Error in conv3dDerInput: depth of input (${l}) must match input depth for filter ${t.shape[3]}.`),k(u===t.shape[4],()=>`Error in conv3dDerInput: depth of output (${u}) must match output depth for filter ${t.shape[4]}.`);let c={dy:i,filter:t},p={pad:n,strides:o,inputShape:s},m=I.runKernel(Nl,c,p);return a?F(m,[m.shape[1],m.shape[2],m.shape[3],m.shape[4]]):m}var $m=T({conv3DBackpropInput_:YO});function ZO(r,e,t,o,n){let s=N(r,"x","conv3dTranspose"),i=N(e,"filter","conv3dTranspose");return $m(t,s,i,o,n)}var mx=T({conv3dTranspose_:ZO});function QO(r){let t={x:N(r,"x","cos","float32")};return I.runKernel(vn,t)}var Ea=T({cos_:QO});function JO(r){let t={x:N(r,"x","cosh","float32")};return I.runKernel(Nn,t)}var Pc=T({cosh_:JO});function tL(r,e=0,t=!1,o=!1){let s={x:N(r,"x","cumprod")},i={axis:e,exclusive:t,reverse:o};return I.runKernel(Il,s,i)}var zc=T({cumprod_:tL});function eL(r,e=0,t=!1,o=!1){let s={x:N(r,"x","cumsum")},i={axis:e,exclusive:t,reverse:o};return I.runKernel(Ys,s,i)}var Dm=T({cumsum_:eL});function rL(r,e,t,o=!1){let n=N(r,"x","denseBincount"),s=N(e,"weights","denseBincount");k(n.dtype==="int32",()=>`Error in denseBincount: input dtype must be int32, but got ${n.dtype}`),k(n.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${n.rank}.`),k(t>=0,()=>`size must be non-negative, but got ${t}.`),k(s.size===n.size||s.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${n.shape}, weights shape: ${s.shape}.`);let i={x:n,weights:s},a={size:t,binaryOutput:o};return I.runKernel(kl,i,a)}var Rm=T({denseBincount_:rL});function oL(r,e,t="NHWC"){let o=N(r,"x","depthToSpace","float32"),n=t==="NHWC"?o.shape[1]:o.shape[2],s=t==="NHWC"?o.shape[2]:o.shape[3],i=t==="NHWC"?o.shape[3]:o.shape[1];k(e>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${e}`),k(n*e>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${n} and ${e}  for depthToSpace with input shape
    ${o.shape}`),k(s*e>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${s} and ${e} for depthToSpace with input shape
        ${o.shape}`),k(i%(e*e)===0,()=>`Dimension size must be evenly divisible by ${e*e} but is ${i} for depthToSpace with input shape ${o.shape}`);let a={x:o},l={blockSize:e,dataFormat:t};return I.runKernel(El,a,l)}var qC=T({depthToSpace_:oL});function nL(r,e,t,o,n="NHWC",s=[1,1],i){let a=N(r,"x","depthwiseConv2d","float32"),l=N(e,"filter","depthwiseConv2d","float32"),u=a,c=!1;a.rank===3&&(c=!0,u=F(a,[1,a.shape[0],a.shape[1],a.shape[2]])),k(u.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${u.rank}.`),k(l.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${l.rank}.`);let p=n==="NHWC"?u.shape[3]:u.shape[1];k(p===l.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${p}) must match the inChannels dimension in filter ${l.shape[2]}.`),Zt("depthwiseConv2d",o,i);let m={x:u,filter:l},f={strides:t,pad:o,dataFormat:n,dilations:s,dimRoundingMode:i},h=I.runKernel(Zs,m,f);return c?F(h,[h.shape[1],h.shape[2],h.shape[3]]):h}var ms=T({depthwiseConv2d_:nL});function sL(r,e,t,o,n=[1,1],s="NHWC"){let i=N(r,"x","dilation2d"),a=N(e,"filter","dilation2d");k(i.rank===3||i.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${i.rank}.`),k(a.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${a.rank}.`),k(s==="NHWC",()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${s}`);let l=i,u=!1;i.rank===3&&(l=F(i,[1,i.shape[0],i.shape[1],i.shape[2]]),u=!0),k(l.shape[3]===a.shape[2],()=>`Error in dilation2d:  input and filter must have the same depth: ${l.shape[3]} vs ${a.shape[2]}`);let c={x:l,filter:a},p={strides:t,pad:o,dilations:n},m=I.runKernel(Qs,c,p);return u?F(m,[m.shape[1],m.shape[2],m.shape[3]]):m}var KC=T({dilation2d_:sL});var _r={};to(_r,{assertAndGetBroadcastShape:()=>Nt,getBroadcastDims:()=>jC,getReductionAxes:()=>Kt});function jC(r,e){let t=r.length,o=[];for(let n=0;n<t;n++){let s=t-1-n,i=r[s]||1;(e[e.length-1-n]||1)>1&&i===1&&o.unshift(s)}return o}function Kt(r,e){let t=[];for(let o=0;o<e.length;o++){let n=r[r.length-o-1],s=e.length-o-1,i=e[s];(n==null||n===1&&i>1)&&t.unshift(s)}return t}function Nt(r,e){let t=Math.max(r.length,e.length),o=new Array(t);for(let n=0;n<t;n++){let s=r[r.length-n-1];s==null&&(s=1);let i=e[e.length-n-1];if(i==null&&(i=1),s===1)o[t-n-1]=i;else if(i===1)o[t-n-1]=s;else if(s!==i){let a=`Operands could not be broadcast together with shapes ${r} and ${e}.`;throw Error(a)}else o[t-n-1]=s}return o}function iL(r,e){let t=N(r,"a","equal","string_or_numeric"),o=N(e,"b","equal","string_or_numeric");[t,o]=$t(t,o),Nt(t.shape,o.shape);let n={a:t,b:o};return I.runKernel(oa,n)}var cr=T({equal_:iL});function aL(r,e,t){let o=N(e,"a","where"),n=N(t,"b","where"),s=N(r,"condition","where","bool"),i=Nt(Nt(s.shape,o.shape),n.shape),a=cs(s,i),l=cs(o,i),u=cs(n,i),c={condition:a,t:l,e:u};return I.runKernel(Ci,c)}var ee=T({where_:aL});function lL(r){let t={x:N(r,"x","zerosLike")};return I.runKernel(Ai,t)}var ht=T({zerosLike_:lL});function uL(r,e){let t=N(r,"a","div"),o=N(e,"b","div");[t,o]=$t(t,o);let n=ot(t,o),s=ht(n),i=cr(o,s);return ee(i,s,n)}var XC=T({divNoNan_:uL});function cL(r,e){let t=N(r,"t1","dot"),o=N(e,"t2","dot");k((t.rank===1||t.rank===2)&&(o.rank===1||o.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${t.rank} and ${o.rank}.`);let n=t.rank===1?t.size:t.shape[1],s=o.rank===1?o.size:o.shape[0];if(k(n===s,()=>`Error in dot: inner dimensions of inputs must match, but got ${n} and ${s}.`),t.rank===1&&o.rank===1){let i=F(t,[1,-1]),a=F(o,[-1,1]),l=Mt(i,a);return F(l,[])}else if(t.rank===1&&o.rank===2){let i=F(t,[1,-1]),a=F(o,[o.shape[0],o.shape[1]]),l=Mt(i,a);return F(l,[l.size])}else if(t.rank===2&&o.rank===1){let i=F(o,[-1,1]),a=Mt(t,i);return F(a,[a.size])}else{let i=F(o,[o.shape[0],o.shape[1]]);return Mt(t,i)}}var YC=T({dot_:cL});function pL(r,...e){let t=e.map((n,s)=>N(n,`tensors${s}`,"einsum")),o={equation:r};return I.runKernel(Dl,t,o)}var hu=T({einsum_:pL});function mL(r){let t={x:N(r,"x","elu","float32")};return I.runKernel(Tn,t)}var fs=T({elu_:mL});function fL(r){let e=N(r,"x","erf");k(e.dtype==="int32"||e.dtype==="float32",()=>"Input dtype must be `int32` or `float32`."),e.dtype==="int32"&&(e=Y(e,"float32"));let t={x:e};return I.runKernel(kn,t)}var Mc=T({erf_:fL});function fx(r,e){for(let t=0;t<r.length;++t)if(r[r.length-t-1]!==e-1-t)return!1;return!0}function ZC(r,e,t){let o=r.length+e.length,n=[],s=0,i=0;for(let a=0;a<o;a++)t.indexOf(a)===-1?n.push(r[s++]):n.push(e[i++]);return n}function hx(r,e){let t=[],o=r.length;for(let s=0;s<o;s++)e.indexOf(s)===-1&&t.push(r[s]);let n=e.map(s=>r[s]);return[t,n]}function Yo(r,e){let t=e.map(o=>1);return ZC(r,t,e)}function hL(r,e,t){k(fx(e,t),()=>`${r} supports only inner-most axes for now. Got axes ${e} and rank-${t} input.`)}function dx(r,e){if(fx(r,e))return null;let t=[];for(let o=0;o<e;++o)r.indexOf(o)===-1&&t.push(o);return r.forEach(o=>t.push(o)),t}function Bc(r){return r.map((e,t)=>[t,e]).sort((e,t)=>e[1]-t[1]).map(e=>e[0])}function dL(r,e){let t=[];for(let o=e-r;o<e;++o)t.push(o);return t}function gL(r,e=null,t=!1){let n={x:N(r,"x","max")},s={reductionIndices:e,keepDims:t};return I.runKernel(ni,n,s)}var Ke=T({max_:gL});function xL(r,e=null,t=!1){let n={x:N(r,"x","min")},s={axis:e,keepDims:t};return I.runKernel(li,n,s)}var Pi=T({min_:xL});function yL(r,e){let t=N(r,"base","pow"),o=N(e,"exp","pow");[t,o]=$t(t,o);let n={a:t,b:o};return I.runKernel(Gn,n)}var wr=T({pow_:yL});function xt(r,e){if((or(r)&&e!=="string"||Array.isArray(r))&&e!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(e==="string"&&or(r)&&!(r instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Fi(r,[],[],e)}function bL(r){let t={x:N(r,"x","sqrt","float32")};return I.runKernel(ts,t)}var jt=T({sqrt_:bL});function wL(r){let e=N(r,"x","square"),t={};return I.runKernel("Square",{x:e},t)}var At=T({square_:wL});function CL(r,e=null,t=!1){let o=N(r,"x","sum");o.dtype==="bool"&&(o=Y(o,"int32"));let n={x:o},s={axis:e,keepDims:t};return I.runKernel(vi,n,s)}var it=T({sum_:CL});function SL(r,e="euclidean",t=null,o=!1){r=N(r,"x","norm");let n=QC(r,e,t),s=n.shape;if(o){let i=Ae(t,r.shape);s=Yo(n.shape,i)}return F(n,s)}function QC(r,e,t=null){if(r.rank===0)return ke(r);if(r.rank!==1&&t===null)return QC(F(r,[-1]),e,t);if(r.rank===1||typeof t=="number"||Array.isArray(t)&&t.length===1){if(e===1)return it(ke(r),t);if(e===1/0)return Ke(ke(r),t);if(e===-1/0)return Pi(ke(r),t);if(e==="euclidean"||e===2)return jt(it(wr(ke(r),xt(2,"int32")),t));throw new Error(`Error in norm: invalid ord value: ${e}`)}if(Array.isArray(t)&&t.length===2){if(e===1)return Ke(it(ke(r),t[0]),t[1]-1);if(e===1/0)return Ke(it(ke(r),t[1]),t[0]);if(e===-1/0)return Pi(it(ke(r),t[1]),t[0]);if(e==="fro"||e==="euclidean")return jt(it(At(r),t));throw new Error(`Error in norm: invalid ord value: ${e}`)}throw new Error(`Error in norm: invalid axis: ${t}`)}var zi=T({norm_:SL});function vL(r,e=null,t=!1){return zi(r,"euclidean",e,t)}var JC=T({euclideanNorm_:vL});function NL(r){let t={x:N(r,"x","exp")};return I.runKernel(En,t)}var Le=T({exp_:NL});function IL(r,e=0){let t=N(r,"x","expandDims","string_or_numeric");k(e<=t.rank,()=>"Axis must be <= rank of the tensor");let o={input:t},n={dim:e};return I.runKernel(Js,o,n)}var ve=T({expandDims_:IL});function TL(r){let t={x:N(r,"x","expm1")};return I.runKernel(An,t)}var xx=T({expm1_:TL});function kL(r,e){let t=N(r,"x","tile","string_or_numeric");k(t.rank===e.length,()=>`Error in transpose: rank of input ${t.rank} must match length of reps ${e}.`);let o={x:t},n={reps:e};return I.runKernel(Ho,o,n)}var Qe=T({tile_:kL});function EL(r,e,t,o="float32"){e==null&&(e=r);let n=ft([r,e],o),s=r<=e?r:e;for(let a=0;a<s;++a)n.set(1,a,a);let i=F(n.toTensor(),[r,e]);if(t==null)return i;if(t.length===1)return Qe(ve(i,0),[t[0],1,1]);if(t.length===2)return Qe(ve(ve(i,0),0),[t[0],t[1],1,1]);if(t.length===3)return Qe(ve(ve(ve(i,0),0),0),[t[0],t[1],t[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${t.length}D.`)}var du=T({eye_:EL});function AL(r){let t={x:N(r,"x","floor","float32")};return I.runKernel($n,t)}var hs=T({floor_:AL});function $L(r,e,t=0,o=0){let n=N(r,"x","gather"),s=N(e,"indices","gather","int32"),i={x:n,indices:s},a={axis:t,batchDims:o};return I.runKernel(ei,i,a)}var Aa=T({gather_:$L});function DL(r,e){let t=N(r,"a","greater","string_or_numeric"),o=N(e,"b","greater","string_or_numeric");[t,o]=$t(t,o),Nt(t.shape,o.shape);let n={a:t,b:o};return I.runKernel(na,n)}var ge=T({greater_:DL});function RL(r,e){let t=N(r,"a","greaterEqual","string_or_numeric"),o=N(e,"b","greaterEqual","string_or_numeric");[t,o]=$t(t,o),Nt(t.shape,o.shape);let n={a:t,b:o};return I.runKernel(Rn,n)}var Cr=T({greaterEqual_:RL});function FL(r){let t={input:N(r,"input","imag")};return I.runKernel(Pl,t)}var gu=T({imag_:FL});function _L(r){let t={x:N(r,"x","isFinite")};return I.runKernel(Fn,t)}var yx=T({isFinite_:_L});function OL(r){let t={x:N(r,"x","isInf")};return I.runKernel(_n,t)}var bx=T({isInf_:OL});function LL(r){let t={x:N(r,"x","isNaN")};return I.runKernel(On,t)}var wx=T({isNaN_:LL});function PL(r,e=.2){let o={x:N(r,"x","leakyRelu")},n={alpha:e};return I.runKernel(ri,o,n)}var $a=T({leakyRelu_:PL});function zL(r,e){let t=N(r,"a","less","string_or_numeric"),o=N(e,"b","less","string_or_numeric");[t,o]=$t(t,o),Nt(t.shape,o.shape);let n={a:t,b:o};return I.runKernel(sa,n)}var Da=T({less_:zL});function ML(r,e){let t=N(r,"a","lessEqual","string_or_numeric"),o=N(e,"b","lessEqual","string_or_numeric");[t,o]=$t(t,o),Nt(t.shape,o.shape);let n={a:t,b:o};return I.runKernel(ia,n)}var io=T({lessEqual_:ML});function BL(r,e=5,t=1,o=1,n=.5){let s=N(r,"x","localResponseNormalization");k(s.rank===4||s.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${s.rank}.`),k(fn(e),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${e}.`);let i=s,a=!1;s.rank===3&&(a=!0,i=F(s,[1,s.shape[0],s.shape[1],s.shape[2]]));let l={x:i},u={depthRadius:e,bias:t,alpha:o,beta:n},c=I.runKernel(oi,l,u);return a?F(c,[c.shape[1],c.shape[2],c.shape[3]]):c}var tS=T({localResponseNormalization_:BL});function VL(r){let t={x:N(r,"x","log","float32")};return I.runKernel(Ln,t)}var pr=T({log_:VL});function GL(r){let t={x:N(r,"x","log1p")};return I.runKernel(Pn,t)}var Vc=T({log1p_:GL});function Cx(r,e){k(ml(r),()=>"The f passed in variableGrads(f) must be a function"),k(e==null||Array.isArray(e)&&e.every(u=>u instanceof is),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");let t=e!=null;if(!t){e=[];for(let u in I.registeredVariables)e.push(I.registeredVariables[u])}let o=t?e.filter(u=>!u.trainable):null,n=e.length;e=e.filter(u=>u.trainable),k(e.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${n} variables is trainable.`);let s=!0,{value:i,grads:a}=I.gradients(r,e,null,s);k(a.some(u=>u!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),k(i.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${i.rank} tensor`);let l={};return e.forEach((u,c)=>{a[c]!=null&&(l[u.name]=a[c])}),o?.forEach(u=>l[u.name]=null),{value:i,grads:l}}function jr(r){return I.customGrad(r)}function WL(r){let t={x:N(r,"x","neg")};return I.runKernel(ci,t)}var Lt=T({neg_:WL});function UL(r){let t={x:N(r,"x","softplus")};return I.runKernel(Jn,t)}var Zo=T({softplus_:UL});function HL(r){let e=N(r,"x","logSigmoid");return jr(o=>({value:Lt(Zo(Lt(o))),gradFunc:i=>R(i,so(Lt(o)))}))(e)}var Sx=T({logSigmoid_:HL});function qL(r,e){let t=N(r,"a","sub"),o=N(e,"b","sub");[t,o]=$t(t,o);let n={a:t,b:o};return I.runKernel(rs,n)}var lt=T({sub_:qL});function KL(r,e=-1){let t=N(r,"logits","logSoftmax");if(e===-1&&(e=t.rank-1),e!==t.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${t.rank} and axis was ${e}`);return jr((n,s)=>{let a=Ke(n,e,!0),l=lt(n,a),u=lt(Y(l,"float32"),pr(it(Le(l),e,!0)));return s([u]),{value:u,gradFunc:(p,m)=>{let[f]=m,h=!0,g=Le(f);return lt(p,R(it(p,e,h),g))}}})(t)}var Gc=T({logSoftmax_:KL});function jL(r,e=null,t=!1){let o=N(r,"x","logSumExp"),n=Ae(e,o.shape),s=Ke(o,n,!0),i=lt(o,s),a=Le(i),l=it(a,n),u=pr(l),c=j(F(s,u.shape),u);if(t){let p=Yo(c.shape,n);return F(c,p)}return c}var Wc=T({logSumExp_:jL});function XL(r,e){let t=N(r,"a","logicalAnd","bool"),o=N(e,"b","logicalAnd","bool");Nt(t.shape,o.shape);let n={a:t,b:o};return I.runKernel(aa,n)}var nr=T({logicalAnd_:XL});function YL(r){let t={x:N(r,"x","logicalNot","bool")};return I.runKernel(la,t)}var xu=T({logicalNot_:YL});function ZL(r,e){let t=N(r,"a","logicalOr","bool"),o=N(e,"b","logicalOr","bool");Nt(t.shape,o.shape);let n={a:t,b:o};return I.runKernel(ua,n)}var Fm=T({logicalOr_:ZL});function QL(r,e){let t=N(r,"a","logicalXor","bool"),o=N(e,"b","logicalXor","bool");return Nt(t.shape,o.shape),nr(Fm(r,e),xu(nr(r,e)))}var eS=T({logicalXor_:QL});function JL(r,e,t,o,n){let s=N(r,"x","maxPool"),i=1,a=s,l=!1;s.rank===3&&(l=!0,a=F(s,[1,s.shape[0],s.shape[1],s.shape[2]])),k(a.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${a.rank}.`),k(He(t,i),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${t} and dilations '${i}'`),Zt("maxPool",o,n);let u={x:a},c={filterSize:e,strides:t,pad:o,dimRoundingMode:n},p=I.runKernel(si,u,c);return l?F(p,[p.shape[1],p.shape[2],p.shape[3]]):p}var Ra=T({maxPool_:JL});function tP(r,e=[1,1,1],t,o,n,s="NDHWC"){let i=N(r,"x","maxPool3d"),a=i,l=!1;i.rank===4&&(l=!0,a=F(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),k(a.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${a.rank}.`),k(s==="NDHWC",()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${s}`),Zt("maxPool3d",o,n);let u={x:a},c={filterSize:e,strides:t,pad:o,dimRoundingMode:n,dataFormat:s},p=I.runKernel(ii,u,c);return l?F(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}var vx=T({maxPool3d_:tP});function eP(r,e){let t=N(r,"a","maximum"),o=N(e,"b","maximum");[t,o]=$t(t,o),t.dtype==="bool"&&(t=Y(t,"int32"),o=Y(o,"int32")),Nt(t.shape,o.shape);let n={a:t,b:o};return I.runKernel(zn,n)}var Or=T({maximum_:eP});function rP(r,e=null,t=!1){let n={x:N(r,"x","mean")},s={axis:e,keepDims:t};return I.runKernel(ai,n,s)}var ne=T({mean_:rP});function re(r,e="float32"){if(We(r),e==="complex64"){let o=re(r,"float32"),n=re(r,"float32");return Ur(o,n)}let t=hl(zt(r),e);return I.makeTensor(t,r,e)}function mr(r,e="float32"){if(We(r),e==="complex64"){let o=mr(r,"float32"),n=re(r,"float32");return Ur(o,n)}let t=bc(zt(r),e);return I.makeTensor(t,r,e)}function oP(r,e){let t=N(r,"a","minimum"),o=N(e,"b","minimum");[t,o]=$t(t,o),t.dtype==="bool"&&(t=Y(t,"int32"),o=Y(o,"int32")),Nt(t.shape,o.shape);let n={a:t,b:o};return I.runKernel(Mn,n)}var Qo=T({minimum_:oP});function nP(r,e,t){k(t==="reflect"||t==="symmetric",()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${t}.`);let o=N(r,"x","mirrorPad");if(o.rank===0)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");k(e.length===o.rank,()=>`Padding doesn't match input. Must be ${o.rank}. Got ${e.length}.`);let n=t==="reflect"?1:0;for(let a=0;a<o.rank;a++)k(e[a].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),k(e[a][0]>=0&&e[a][0]<=o.shape[a]-n&&e[a][1]>=0&&e[a][1]<=o.shape[a]-n,()=>`Padding in dimension ${a} cannot be greater than or equal to ${o.shape[a]-n} or less than 0 for input of shape ${o.shape}`);let s={paddings:e,mode:t},i={x:o};return I.runKernel(ui,i,s)}var rS=T({mirrorPad_:nP});function sP(r,e){let t=N(r,"a","mod"),o=N(e,"b","mod");[t,o]=$t(t,o);let n={a:t,b:o};return I.runKernel(Bn,n)}var oS=T({mod_:sP});function iP(r,e=null,t=!1){r=N(r,"x","moments");let o=Ae(e,r.shape),n=ne(r,o,t),s=n.shape;t||(s=Yo(n.shape,o));let i=At(lt(Y(r,"float32"),F(n,s))),a=ne(i,o,t);return{mean:n,variance:a}}var yu=T({moments_:iP});function aP(r,e){let t=N(r,"a","notEqual","string_or_numeric"),o=N(e,"b","notEqual","string_or_numeric");[t,o]=$t(t,o),Nt(t.shape,o.shape);let n={a:t,b:o};return I.runKernel(ca,n)}var Mi=T({notEqual_:aP});function lP(r,e,t=1,o=0,n="int32"){if(e<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${e}`);let i={indices:N(r,"indices","oneHot","int32")},a={dtype:n,depth:e,onValue:t,offValue:o};return I.runKernel(mi,i,a)}var bu=T({oneHot_:lP});function uP(r){let t={x:N(r,"x","onesLike")};return I.runKernel(pi,t)}var Pe=T({onesLike_:uP});function cP(r,e,t=0){let o=N(r,"x","pad");if(o.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");let n={paddings:e,constantValue:t},s={x:o};return I.runKernel(hi,s,n)}var Fa=T({pad_:cP});function pP(r,e,t){let o=N(r,"x","spaceToBatchND");k(o.rank>=1+e.length,()=>`input rank ${o.rank} should be > than [blockShape] ${e.length}`),k(t.length===e.length,()=>`paddings.shape[0] ${t.length} must be equal to [blockShape] ${e.length}`),k(o.shape.reduce((i,a,l)=>l>0&&l<=e.length?i&&(a+t[l-1][0]+t[l-1][1])%e[l-1]===0:i,!0),()=>`input spatial dimensions ${o.shape.slice(1)} with paddings ${t.toString()} must be divisible by blockShapes ${e.toString()}`);let n={x:o},s={blockShape:e,paddings:t};return I.runKernel(Ni,n,s)}var wu=T({spaceToBatchND_:pP});function mP(r,e,t,o,n,s,i){n==null&&(n=[1,1]),s==null&&(s=1),o===0&&(o="valid");let a=N(r,"x","maxPool"),l=a,u=!1;a.rank===3&&(u=!0,l=F(a,[1,a.shape[0],a.shape[1],a.shape[2]])),k(He(s,n),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${s} and dilations '${n}'`);let c=tx(l.shape,e,s,n,o),p=[c.dilationHeight,c.dilationWidth],m;o==="same"?m=hP([c.filterHeight,c.filterWidth],p):m=[[0,0],[0,0]];let f=p[0]===1&&p[1]===1,[h,g]=fP([c.inHeight,c.inWidth],p,m),d=f?o:"valid",x=f?l:wu(l,p,h),w=(t==="avg"?()=>Ta(x,e,s,d,i):()=>Ra(x,e,s,d,i))(),C=f?w:mu(w,p,g);return u?F(C,[C.shape[1],C.shape[2],C.shape[3]]):C}function fP(r,e,t){let o=t.map(c=>c[0]),n=t.map(c=>c[1]),s=r.concat(o,n),i=e.map((c,p)=>(c-s[p]%c)%c),a=n.map((c,p)=>c+i[p]),l=e.map((c,p)=>[o[p],a[p]]),u=e.map((c,p)=>[0,i[p]]);return[l,u]}function hP(r,e){let o=r.map((i,a)=>i+(i-1)*(e[a]-1)).map(i=>i-1),n=o.map(i=>Math.floor(i/2)),s=o.map((i,a)=>i-n[a]);return o.map((i,a)=>[n[a],s[a]])}var nS=T({pool_:mP});function dP(r,e){let t=N(r,"x","prelu"),o=N(e,"alpha","prelu"),n={x:t,alpha:o};return I.runKernel(di,n)}var _a=T({prelu_:dP});function gP(r,e=null,t=!1){let o=N(r,"x","prod");o.dtype==="bool"&&(o=Y(o,"int32"));let n={x:o},s={axis:e,keepDims:t};return I.runKernel(gi,n,s)}var sS=T({prod_:gP});var $x=xc(Uc());var Cu=class{constructor(e,t,o,n,s){this.mean=e,this.stdDev=t,this.dtype=o,this.nextVal=NaN,this.truncated=n,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);let i=s||Math.random();this.random=$x.alea(i.toString())}nextValue(){if(!isNaN(this.nextVal)){let n=this.nextVal;return this.nextVal=NaN,n}let e,t,o=!1;for(;!o;){let n,s,i;do n=2*this.random()-1,s=2*this.random()-1,i=n*n+s*s;while(i>=1||i===0);let a=Math.sqrt(-2*Math.log(i)/i);e=this.mean+this.stdDev*n*a,t=this.mean+this.stdDev*s*a,(!this.truncated||this.isValidTruncated(e))&&(o=!0)}return(!this.truncated||this.isValidTruncated(t))&&(this.nextVal=this.convertValue(t)),this.convertValue(e)}convertValue(e){return this.dtype==null||this.dtype==="float32"?e:Math.round(e)}isValidTruncated(e){return e<=this.upper&&e>=this.lower}};var Om=class{constructor(e=0,t=1,o,n){if(this.canReturnFloat=()=>this.dtype==null||this.dtype==="float32",this.min=e,this.range=t-e,this.dtype=o,n==null&&(n=Math.random()),typeof n=="number"&&(n=n.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${e} - ${t} <= 1 and dtype is not float`);this.random=$x.alea(n)}convertValue(e){return this.canReturnFloat()?e:Math.round(e)}nextValue(){return this.convertValue(this.min+this.range*this.random())}};function vP(r,e=0,t=1,o,n){if(We(r),o!=null&&o==="bool")throw new Error(`Unsupported data type ${o}`);let s=new Cu(e,t,o,!1,n),i=ft(r,o);for(let a=0;a<i.values.length;a++)i.values[a]=s.nextValue();return i.toTensor()}var Lm=T({randomNormal_:vP});function NP(r,e=0,t=1,o="float32",n){We(r);let s=ft(r,o),i=new Om(e,t,null,n);for(let a=0;a<s.values.length;a++)s.values[a]=i.nextValue();return s.toTensor()}var Ao=T({randomUniform_:NP});function ds(r,e,t=1,o="float32"){if(t===0)throw new Error("Cannot have a step of zero");let n={start:r,stop:e,step:t,dtype:o};return I.runKernel(Ul,{},n)}function IP(r){let t={input:N(r,"input","real")};return I.runKernel(Hl,t)}var La=T({real_:IP});function TP(r){let t={x:N(r,"x","reciprocal")};return I.runKernel(Wn,t)}var Dx=T({reciprocal_:TP});function kP(r){let t={x:N(r,"x","relu")};return I.runKernel(Un,t)}var Lr=T({relu_:kP});function EP(r){let t={x:N(r,"x","relu6")};return I.runKernel(Hn,t)}var Pm=T({relu6_:EP});function AP(r,e){let o={x:N(r,"x","reverse")},n={dims:e};return I.runKernel(wi,o,n)}var Xr=T({reverse_:AP});function $P(r){let t={x:N(r,"x","round")};return I.runKernel(qn,t)}var Hc=T({round_:$P});function DP(r){let t={x:N(r,"x","rsqrt","float32")};return I.runKernel(Kn,t)}var qc=T({rsqrt_:DP});function RP(r){let t={x:N(r,"x","selu")};return I.runKernel(jn,t)}var Kc=T({selu_:RP});function FP(r,e,t,o,n,s=[1,1],i="NHWC"){let a=N(r,"x","separableConv2d"),l=N(e,"depthwiseFilter","separableConv2d"),u=N(t,"pointwiseFilter","separableConv2d"),c=a,p=!1;if(a.rank===3&&(p=!0,c=F(a,[1,a.shape[0],a.shape[1],a.shape[2]])),i==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");k(c.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${c.rank}.`),k(l.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${l.rank}.`),k(u.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${l.rank}.`),k(u.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${u.shape[0]}.`),k(u.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${u.shape[1]}.`);let m=l.shape[2],f=l.shape[3];k(u.shape[2]===m*f,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${m*f}, but got ${u.shape[2]}.`);let h=ms(c,l,o,n,i,s),d=Fr(h,u,1,"valid",i);return p?F(d,[d.shape[1],d.shape[2],d.shape[3]]):d}var jc=T({separableConv2d_:FP});function _P(r){let t={x:N(r,"x","sign")};return I.runKernel(Zn,t)}var Rx=T({sign_:_P});function OP(r){let t={x:N(r,"x","sin","float32")};return I.runKernel(Xn,t)}var Xc=T({sin_:OP});function LP(r){let t={x:N(r,"x","sinh")};return I.runKernel(Yn,t)}var Yc=T({sinh_:LP});function PP(r,e,t){let o=N(r,"x","slice1d");return k(o.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${o.rank} tensor`),Ft(o,[e],[t])}var Zc=T({slice1d_:PP});function zP(r,e,t){let o=N(r,"x","slice2d");return k(o.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${o.rank} tensor`),Ft(o,e,t)}var zm=T({slice2d_:zP});function MP(r,e,t){let o=N(r,"x","slice3d");return k(o.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${o.rank} tensor`),Ft(o,e,t)}var Qc=T({slice3d_:MP});function BP(r,e,t){let o=N(r,"x","slice4d");return k(o.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${o.rank} tensor`),Ft(o,e,t)}var Su=T({slice4d_:BP});function VP(r,e=-1){let t=N(r,"logits","softmax","float32");if(e===-1&&(e=t.rank-1),e!==t.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${t.rank} and dim was ${e}`);let o={logits:t},n={dim:e};return I.runKernel(Ti,o,n)}var Pa=T({softmax_:VP});function GP(r){k(r.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${r.dtype}.`);let e={input:r};return I.runKernel(Fl,e)}var Jc=T({fft_:GP});function WP(r){k(r.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${r.dtype}.`);let e={input:r};return I.runKernel(Ll,e)}var vu=T({ifft_:WP});function UP(r){let e=r.shape[r.shape.length-1],t=r.size/e,o;if(e<=2){let n=F(r,[t,e]);o=vu(n)}else{let n=[t,2*(e-1)],s=F(La(r),[t,e]),i=F(gu(r),[t,e]),a=Xr(Ft(s,[0,1],[t,e-2]),1),l=R(Xr(Ft(i,[0,1],[t,e-2]),1),xt(-1)),u=te([s,a],1),c=te([i,l],1),p=F(Ur(u,c),[n[0],n[1]]);o=vu(p)}if(o=La(o),r.rank===3&&r.shape[0]!==0){let n=o,s=r.shape[0];o=F(o,[s,o.shape[0]/s,o.shape[1]]),n.dispose()}return o}var Fx=T({irfft_:UP});function HP(r,e,t=0){let n={x:N(r,"x","split")},s={numOrSizeSplits:e,axis:t};return I.runKernel(Ii,n,s)}var Re=T({split_:HP});function qP(r,e){k(r.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${r.dtype}`);let t=r.shape[r.shape.length-1],o=r.size/t,n;if(e!=null&&e<t){let h=r.shape.map(d=>0),g=r.shape.map(d=>d);g[r.shape.length-1]=e,n=Ft(r,h,g),t=e}else if(e!=null&&e>t){let h=r.shape.map(g=>g);h[r.shape.length-1]=e-t,n=te([r,re(h)],r.shape.length-1),t=e}else n=r;let s=ht(n),i=F(Ur(n,s),[o,t]),a=Jc(i),l=Math.floor(t/2)+1,u=La(a),c=gu(a),p=Re(u,[l,t-l],u.shape.length-1),m=Re(c,[l,t-l],c.shape.length-1),f=n.shape.slice();return f[n.shape.length-1]=l,F(Ur(p[0],m[0]),f)}var _x=T({rfft_:qP});function KP(r,e){let t=N(r,"a","squaredDifference"),o=N(e,"b","squaredDifference");[t,o]=$t(t,o),Nt(t.shape,o.shape);let n={a:t,b:o},s={};return I.runKernel(es,n,s)}var SS=T({squaredDifference_:KP});function jP(r,e){let t=N(r,"x","squeeze","string_or_numeric");return F(t,gg(t.shape,e).newShape)}var $o=T({squeeze_:jP});function XP(r,e=0){let t=Cm(r,"tensors","stack","string_or_numeric");k(t.length>=1,()=>"Pass at least one tensor to tf.stack"),t.length>0&&k(e<=t[0].rank,()=>"Axis must be <= rank of the tensor");let o=t,n={axis:e};return I.runKernel(fi,o,n)}var $e=T({stack_:XP});function YP(r,e=0){let o={x:N(r,"x","step")},n={alpha:e};return I.runKernel(ss,o,n)}var Do=T({step_:YP});function ZP(r,e,t,o,n=0,s=0,i=0,a=0,l=0){let c={x:N(r,"x","stridedSlice","string_or_numeric")},p={begin:e,end:t,strides:o,beginMask:n,endMask:s,ellipsisMask:i,newAxisMask:a,shrinkAxisMask:l};return I.runKernel(Xl,c,p)}var Ox=T({stridedSlice_:ZP});function QP(r){let t={x:N(r,"x","tan","float32")};return I.runKernel(os,t)}var Lx=T({tan_:QP});function Ne(r,e){yc(r);let t=wa(r,e);if(t.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return Fi(r,null,t,e)}function ao(r,e,t){if(yc(r),e!=null&&e.length!==2)throw new Error("tensor2d() requires shape to have two numbers");let o=wa(r,t);if(o.length!==2&&o.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(o.length===1&&e==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Fi(r,e,o,t)}function vS(r,e,t){let o=e.rank>1?e.shape[e.rank-1]:1,n=e.rank>1?e.rank-1:1,s=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${t.shape}, indices.shape: ${e.shape}, shape: ${r}, sliceDim: ${o}, and batchDim: ${n}.`;if(t.rank<n)throw new Error(s+` update.rank < ${n}. `);if(r.length<o+(t.rank-n))throw new Error(s+` Output shape length < ${o+(t.rank-n)}`);if(t.rank!==n+r.length-o)throw new Error(s+` update.rank != ${n+r.length-o}`);for(let i=0;i<n;++i)if(t.shape[i]!==e.shape[i])throw new Error(s+` updates.shape[${i}] (${t.shape[i]}) != indices.shape[${i}] (${e.shape[i]}).`);for(let i=0;i<t.rank-n;++i)if(t.shape[i+n]!==r[i+o])throw new Error(s+` updates.shape[${i+n}] (${t.shape[i+n]}) != shape[${i+n}] (${r[i+n]})`)}function JP(r,e,t){if(e.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${e.rank}.`);if(r.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${r.rank}.`);if(e.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${e.dtype}`);if(t.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${t}`);if(t.length===0){if(e.size===0)throw new Error(`Indices specified for empty output. indices shape: ${e.shape}`);if(r.size===0)throw new Error(`Updates specified for empty output. updates shape: ${r.shape}`)}vS(t,e,r)}function tz(r,e,t){let o=e.shape.length,n=o>1?e.shape[o-1]:1,s=t.length,i=1;for(let p=n;p<s;++p)i*=t[p];let a=n<1?1:n,l=zt(e.shape)/a,u=[...Go(t.slice(0,n)),1],c=zt(t);return{sliceRank:n,numUpdates:l,sliceSize:i,strides:u,outputSize:c}}function ez(r,e=1,t=!0){let o=N(r,"x","topk");if(o.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");let n=o.shape[o.shape.length-1];if(e<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${e}`);if(e>n)throw new Error(`'k' passed to topk() must be <= the last dimension (${n}) but got ${e}`);let s={x:o},i={k:e,sorted:t},[a,l]=I.runKernel(Yl,s,i);return{values:a,indices:l}}var NS=T({topk_:ez});function rz(r,e=0,t=1,o,n){if(We(r),o!=null&&o==="bool")throw new Error("Unsupported data type $ { dtype }");let s=new Cu(e,t,o,!0,n),i=ft(r,o);for(let a=0;a<i.values.length;a++)i.values[a]=s.nextValue();return i.toTensor()}var tp=T({truncatedNormal_:rz});function oz(r,e=0){let t=N(r,"x","unique","string_or_numeric");k(t.rank>0,()=>"The input tensor must be at least 1D");let o={x:t},n={axis:e},[s,i]=I.runKernel(Ql,o,n);return{values:s,indices:i}}var IS=T({unique_:oz});function nz(r,e,t){let o=N(r,"x","unsortedSegmentSum"),n=N(e,"segmentIds","unsortedSegmentSum","int32");k(fn(t),()=>"numSegments must be of dtype int");let s={x:o,segmentIds:n},i={numSegments:t};return I.runKernel(Ei,s,i)}var Mm=T({unsortedSegmentSum_:nz});function sz(r,e=0){let t=N(r,"x","unstack","string_or_numeric");k(e>=-t.shape.length&&e<t.shape.length,()=>`Axis = ${e} is not in [-${t.shape.length}, ${t.shape.length})`);let o={value:t},n={axis:e};return I.runKernel(ki,o,n)}var sr=T({unstack_:sz});function Px(r,e=!0,t,o){return I.makeVariable(r,e,t,o)}function TS(r,e){let t=[];for(let s=0;s<e.length;s++)e[s]&&t.push(s);let o=ft(r,"int32"),n=ft([t.length,r.length],"int32");for(let s=0;s<t.length;s++){let i=o.indexToLoc(t[s]),a=s*r.length;n.values.set(i,a)}return n.toTensor()}function iz(r,e,t){let o=N(r,"x","transpose");if(e==null&&(e=o.shape.map((i,a)=>a).reverse()),k(o.rank===e.length,()=>`Error in transpose: rank of input ${o.rank} must match length of perm ${e}.`),e.forEach(i=>{k(i>=0&&i<o.rank,()=>`All entries in 'perm' must be between 0 and ${o.rank-1} but got ${e}`)}),o.rank<=1)return o.clone();let n={x:o},s={perm:e};return o.dtype==="complex64"?z(()=>{let i=La(o),a=gu(o);return i=I.runKernel(qo,{x:i},s),a=I.runKernel(qo,{x:a},s),t&&(a=Lt(a)),Ur(i,a)}):I.runKernel(qo,n,s)}var Et=T({transpose_:iz});function kS(r,e){if(e==null)return r.shape.slice();if(Ls(r.shape,e))return e;if(r.shape.length===e.length){let t=[];for(let o=0;o<r.shape.length;o++)e[o]==null&&r.shape[o]!=null?t.push(r.shape[o]):t.push(e[o]);return t}return e}function az(r,e,t,o){let n=N(r,"x","dropout");if(k(n.dtype==="float32",()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${n.dtype} tensor instead.`),k(e>=0&&e<1,()=>`rate must be a float in the range [0, 1), but got ${e}.`),e===0)return r instanceof Bt?n.clone():n;let s=kS(n,t),i=1-e,a=ot(hs(j(Ao(s,0,1,"float32",o),i)),i);return R(n,a)}var ES=T({dropout_:az});var Ga={};to(Ga,{conv2d:()=>AS,depthwiseConv2d:()=>$S,matMul:()=>DS});function lz(r,e,t,o,n,s="NHWC",i){let a=r;r.rank===3&&(a=F(r,[1,r.shape[0],r.shape[1],r.shape[2]]));let l=e;l.rank===3&&(l=F(e,[1,e.shape[0],e.shape[1],e.shape[2]])),k(a.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${a.shape}.`),k(l.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${l.shape}.`),k(t.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${t}.`);let u=s==="NHWC"?a.shape[3]:a.shape[1],c=s==="NHWC"?l.shape[3]:l.shape[1];k(u===t[2],()=>`Error in conv2dDerFilter: depth of input ${u}) must match input depth in filter (${t[2]}.`),k(c===t[3],()=>`Error in conv2dDerFilter: depth of dy (${c}) must match output depth for filter (${t[3]}).`),Zt("conv2dDerFilter",n,i);let p={x:a,dy:l},m={strides:o,pad:n,dataFormat:s,dimRoundingMode:i,filterShape:t};return I.runKernel(Sl,p,m)}var Nu=T({conv2DBackpropFilter_:lz});function za(r,e,t){if(t==null||t==="linear")return r;if(t==="relu")return R(r,Do(e));throw new Error(`Cannot compute gradient for fused activation ${t}.`)}function Ma(r,e){let t=e,o=Kt(r.shape,e.shape);return o.length>0&&(t=it(t,o)),F(t,r.shape)}function Ba(r,e,t,o){if(e==="linear")return r;if(e==="relu")return Lr(r);if(e==="elu")return fs(r);if(e==="relu6")return Pm(r);if(e==="prelu")return _a(r,t);if(e==="leakyrelu")return $a(r,o);if(e==="sigmoid")return so(r);throw new Error(`Unknown fused activation ${e}.`)}var Va=(r,e)=>!(r>0)||e==="linear";function uz({x:r,filter:e,strides:t,pad:o,dataFormat:n="NHWC",dilations:s=[1,1],dimRoundingMode:i,bias:a,activation:l="linear",preluActivationWeights:u,leakyreluAlpha:c}){if(l=l||"linear",Va(I.state.gradientDepth,l)===!1){k(n==="NHWC",()=>`Error in fused conv2d: got dataFormat of ${n} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let E=Fr(r,e,t,o,n,s,i);return a!=null&&(E=j(E,a)),Ba(E,l,u,c)}let p=N(r,"x","conv2d","float32"),m=N(e,"filter","conv2d","float32"),f=p,h=!1;p.rank===3&&(h=!0,f=F(p,[1,p.shape[0],p.shape[1],p.shape[2]])),k(f.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${f.rank}.`),k(m.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${m.rank}.`),Zt("fused conv2d",o,i);let g=n==="NHWC"?f.shape[3]:f.shape[1];k(m.shape[2]===g,()=>`Error in conv2d: depth of input (${g}) must match input depth for filter ${m.shape[2]}.`),k(He(t,s),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${t} and dilations '${s}'`);let d=Ia(f.shape,m.shape,t,s,o,i),x;a!=null&&(x=N(a,"bias","fused conv2d"),[x]=$t(x,p),n==="NHWC"?Nt(d.outShape,x.shape):(k(x.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${x.shape.length}.`),k(x.shape.length===0||x.shape[0]===d.outChannels||x.shape[0]===1,()=>`Error in fused conv2d: bias shape (${x.shape}) is not compatible with the number of output channels (${d.outChannels})`)));let y;if(u!=null){let E=u.shape;if(k(E.length<=1||E.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${E.length}.`),E.length===1)k(E[0]===1||E[0]===d.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${E}) is not compatible with the number of output channels (${d.outChannels}).`);else if(E.length===3)try{Nt(E,d.outShape)}catch{let $=`Error in fused conv2d: PReLU activation weights (${E}) is not compatible with the output shape of the conv2d (${d.outShape}).`;throw Error($)}y=N(u,"prelu weights","fused conv2d")}let w=(E,A)=>{k(n==="NHWC",()=>`Error in gradient of fused conv2D: got dataFormat of ${n} but only NHWC is currently supported.`);let[$,_,L,M]=A,V=za(E,L,l);k(qr(s),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${s}'`);let G=fu(_.shape,V,$,t,o),W=Nu(_,V,$.shape,t,o),U=[G,W];if(M!=null){let K=Ma(M,V);U.push(K)}return U},C={x:f,filter:m,bias:x,preluActivationWeights:y},S={strides:t,pad:o,dataFormat:n,dilations:s,dimRoundingMode:i,activation:l,leakyreluAlpha:c};return a==null?jr((A,$,_)=>{let L=I.runKernel(ma,C,S);return _([$,A,L]),h&&(L=F(L,[L.shape[1],L.shape[2],L.shape[3]])),{value:L,gradFunc:w}})(f,m):jr((A,$,_,L)=>{let M=I.runKernel(ma,C,S);return L([$,A,M,_]),h&&(M=F(M,[M.shape[1],M.shape[2],M.shape[3]])),{value:M,gradFunc:w}})(f,m,x)}var AS=T({fusedConv2d_:uz});function cz(r,e,t,o,n,s=[1,1],i){let a=r;r.rank===3&&(a=F(r,[1,r.shape[0],r.shape[1],r.shape[2]]));let l=e;l.rank===3&&(l=F(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let u={x:a,dy:l},c={strides:o,pad:n,dimRoundingMode:i,dilations:s,filterShape:t};return I.runKernel(Al,u,c)}var Bm=T({depthwiseConv2dNativeBackpropFilter_:cz});function pz(r,e,t,o,n,s=[1,1],i){let a=e,l=!1;e.rank===3&&(l=!0,a=F(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let u={dy:a,filter:t},c={strides:o,pad:n,dimRoundingMode:i,dilations:s,inputShape:r},p=I.runKernel($l,u,c);return l?F(p,[p.shape[1],p.shape[2],p.shape[3]]):p}var Vm=T({depthwiseConv2dNativeBackpropInput_:pz});function mz({x:r,filter:e,strides:t,pad:o,dataFormat:n="NHWC",dilations:s=[1,1],dimRoundingMode:i,bias:a,activation:l="linear",preluActivationWeights:u,leakyreluAlpha:c}){if(Va(I.state.gradientDepth,l)===!1){let S=ms(r,e,t,o,n,s,i);return a!=null&&(S=j(S,a)),Ba(S,l,u,c)}let p=N(r,"x","depthwiseConv2d","float32"),m=N(e,"filter","depthwiseConv2d","float32"),f=p,h=!1;p.rank===3&&(h=!0,f=F(p,[1,p.shape[0],p.shape[1],p.shape[2]])),k(f.rank===4,()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${f.rank}.`),k(m.rank===4,()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${m.rank}.`),k(f.shape[3]===m.shape[2],()=>`Error in fused depthwiseConv2d: number of input channels (${f.shape[3]}) must match the inChannels dimension in filter ${m.shape[2]}.`),s==null&&(s=[1,1]),k(He(t,s),()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${t} and dilations '${s}'`),Zt("fused depthwiseConv2d",o,i);let g=Ia(f.shape,m.shape,t,s,o,i,!0),d;a!=null&&(d=N(a,"bias","fused conv2d"),[d]=$t(d,p),Nt(g.outShape,d.shape));let x;u!=null&&(x=N(u,"prelu weights","fused depthwiseConv2d"));let y=(S,E)=>{k(qr(s),()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${s}'`);let[A,$,_,L]=E,M=za(S,_,l),V=Vm($.shape,M,A,t,o,s,i),G=Bm($,M,A.shape,t,o,s,i);if(L!=null){let W=Ma(d,M);return[V,G,W]}return[V,G]},w={x:f,filter:m,bias:d,preluActivationWeights:x},C={strides:t,pad:o,dataFormat:n,dilations:s,dimRoundingMode:i,activation:l,leakyreluAlpha:c};return a==null?jr((E,A,$)=>{let _=I.runKernel(fa,w,C);return $([A,E,_]),h&&(_=F(_,[_.shape[1],_.shape[2],_.shape[3]])),{value:_,gradFunc:y}})(f,m):jr((E,A,$,_)=>{let L=I.runKernel(fa,w,C);return _([A,E,L,$]),h&&(L=F(L,[L.shape[1],L.shape[2],L.shape[3]])),{value:L,gradFunc:y}})(f,m,d)}var $S=T({fusedDepthwiseConv2d_:mz});function fz({a:r,b:e,transposeA:t=!1,transposeB:o=!1,bias:n,activation:s="linear",preluActivationWeights:i,leakyreluAlpha:a=.2}){if(Va(I.state.gradientDepth,s)===!1){let M=Mt(r,e,t,o);return n!=null&&(M=j(M,n)),Ba(M,s,i,a)}let l=N(r,"a","fused matMul"),u=N(e,"b","fused matMul");[l,u]=$t(l,u);let c=t?l.shape[l.rank-2]:l.shape[l.rank-1],p=o?u.shape[u.rank-1]:u.shape[u.rank-2],m=t?l.shape[l.rank-1]:l.shape[l.rank-2],f=o?u.shape[u.rank-2]:u.shape[u.rank-1],h=l.shape.slice(0,-2),g=u.shape.slice(0,-2),d=zt(h),x=zt(g);k(c===p,()=>`Error in fused matMul: inner shapes (${c}) and (${p}) of Tensors with shapes ${l.shape} and ${u.shape} and transposeA=${t} and transposeB=${o} must match.`);let w=Nt(l.shape.slice(0,-2),u.shape.slice(0,-2)).concat([m,f]),C=t?F(l,[d,c,m]):F(l,[d,m,c]),S=o?F(u,[x,f,p]):F(u,[x,p,f]),E;n!=null&&(E=N(n,"bias","fused matMul"),[E]=$t(E,l),Nt(w,E.shape));let A;i!=null&&(A=N(i,"prelu weights","fused matMul"));let $=(M,V)=>{let[G,W,U,K]=V,Z=za(F(M,U.shape),U,s),q,Q;if(!t&&!o?(q=Mt(Z,W,!1,!0),Q=Mt(G,Z,!0,!1)):!t&&o?(q=Mt(Z,W,!1,!1),Q=Mt(Z,G,!0,!1)):t&&!o?(q=Mt(W,Z,!1,!0),Q=Mt(G,Z,!1,!1)):(q=Mt(W,Z,!0,!0),Q=Mt(Z,G,!0,!0)),n!=null){let tt=Ma(K,Z);return[q,Q,tt]}else return[q,Q]},_={a:C,b:S,bias:E,preluActivationWeights:A},L={transposeA:t,transposeB:o,activation:s,leakyreluAlpha:a};return n==null?jr((V,G,W)=>{let U=I.runKernel(pa,_,L);return W([V,G,U]),{value:F(U,w),gradFunc:$}})(C,S):jr((V,G,W,U)=>{let K=I.runKernel(pa,_,L);return U([V,G,K,W]),{value:F(K,w),gradFunc:$}})(C,S,E)}var DS=T({fusedMatMul_:fz});function hz(r,e,t,o,n="bilinear",s=0){let i=N(r,"image","cropAndResize"),a=N(e,"boxes","cropAndResize","float32"),l=N(t,"boxInd","cropAndResize","int32"),u=a.shape[0];k(i.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${i.rank}.`),k(a.rank===2&&a.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${u},4] but had shape ${a.shape}.`),k(l.rank===1&&l.shape[0]===u,()=>`Error in cropAndResize: boxInd must be have size [${u}] but had shape ${a.shape}.`),k(o.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${o.length}.`),k(o[0]>=1&&o[1]>=1,()=>`cropSize must be atleast [1,1], but was ${o}`),k(n==="bilinear"||n==="nearest",()=>`method must be bilinear or nearest, but was ${n}`);let c={image:i,boxes:a,boxInd:l},p={method:n,extrapolationValue:s,cropSize:o};return I.runKernel(Tl,c,p)}var RS=T({cropAndResize_:hz});function dz(r){let e=N(r,"image","flipLeftRight","float32");k(e.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${e.rank}.`);let t={image:e};return I.runKernel(Ol,t,{})}var FS=T({flipLeftRight_:dz});function gz(r){let e=N(r,"image","grayscaleToRGB"),t=e.rank-1,o=e.shape[t];k(e.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${e.rank}.`),k(o===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${o}.`);let n=new Array(e.rank);return n.fill(1,0,t),n[t]=3,Qe(e,n)}var _S=T({grayscaleToRGB_:gz});function xz(r){let e=N(r,"image","RGBToGrayscale"),t=e.rank-1,o=e.shape[t];k(e.rank>=2,()=>`Error in RGBToGrayscale: images must be at least rank 2, but got rank ${e.rank}.`),k(o===3,()=>`Error in RGBToGrayscale: last dimension of an RGB image should be size 3, but got size ${o}.`);let n=e.dtype,s=Y(e,"float32"),i=Ne([.2989,.587,.114]),a;switch(e.rank){case 2:a=hu("ij,j->i",s,i);break;case 3:a=hu("ijk,k->ij",s,i);break;case 4:a=hu("ijkl,l->ijk",s,i);break;case 5:a=hu("ijklm,m->ijkl",s,i);break;case 6:a=hu("ijklmn,n->ijklm",s,i);break;default:throw new Error("Not a valid tensor rank.")}return a=ve(a,-1),Y(a,n)}var OS=T({rgbToGrayscale_:xz});function yz(r,e,t=0,o=.5){let n=N(r,"image","rotateWithOffset","float32");k(n.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${n.rank}.`);let s={image:n},i={radians:e,fillValue:t,center:o};return I.runKernel(Jl,s,i)}var LS=T({rotateWithOffset_:yz});function lo(r,e,t,o,n,s){o==null&&(o=.5),n==null&&(n=Number.NEGATIVE_INFINITY),s==null&&(s=0);let i=r.shape[0];return t=Math.min(t,i),k(0<=o&&o<=1,()=>`iouThreshold must be in [0, 1], but was '${o}'`),k(r.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${r.rank}'`),k(r.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${r.shape[1]}`),k(e.rank===1,()=>"scores must be a 1D tensor"),k(e.shape[0]===i,()=>`scores has incompatible shape with boxes. Expected ${i}, but was ${e.shape[0]}`),k(0<=s&&s<=1,()=>`softNmsSigma must be in [0, 1], but was '${s}'`),{maxOutputSize:t,iouThreshold:o,scoreThreshold:n,softNmsSigma:s}}function bz(r,e,t,o=.5,n=Number.NEGATIVE_INFINITY){let s=N(r,"boxes","nonMaxSuppression","float32"),i=N(e,"scores","nonMaxSuppression","float32"),a=lo(s,i,t,o,n);t=a.maxOutputSize,o=a.iouThreshold,n=a.scoreThreshold;let l={maxOutputSize:t,iouThreshold:o,scoreThreshold:n};return I.runKernel(Vl,{boxes:s,scores:i},l)}var PS=T({nonMaxSuppression_:bz});function zS(r,e,t){let o=wz(r,e,t),n=o<0?-(o+1):o;r.splice(n,0,e)}function wz(r,e,t){return Sz(r,e,t||Cz)}function Cz(r,e){return r>e?1:r<e?-1:0}function Sz(r,e,t){let o=0,n=r.length,s=0,i=!1;for(;o<n;){s=o+(n-o>>>1);let a=t(e,r[s]);a>0?o=s+1:(n=s,i=!a)}return i?o:-o-1}function Gm(r,e,t,o,n){return zx(r,e,t,o,n,0)}function Wm(r,e,t,o,n,s){return zx(r,e,t,o,n,0,!1,s,!0)}function Um(r,e,t,o,n,s){return zx(r,e,t,o,n,s,!0)}function zx(r,e,t,o,n,s,i=!1,a=!1,l=!1){let u=[];for(let d=0;d<e.length;d++)e[d]>n&&u.push({score:e[d],boxIndex:d,suppressBeginIndex:0});u.sort(MS);let c=s>0?-.5/s:0,p=[],m=[];for(;p.length<t&&u.length>0;){let d=u.pop(),{score:x,boxIndex:y,suppressBeginIndex:w}=d;if(x<n)break;let C=!1;for(let S=p.length-1;S>=w;--S){let E=vz(r,y,p[S]);if(E>=o){C=!0;break}if(d.score=d.score*Nz(o,c,E),d.score<=n)break}d.suppressBeginIndex=p.length,C||(d.score===x?(p.push(y),m.push(d.score)):d.score>n&&zS(u,d,MS))}let f=p.length,h=t-f;a&&h>0&&(p.push(...new Array(h).fill(0)),m.push(...new Array(h).fill(0)));let g={selectedIndices:p};return i&&(g.selectedScores=m),l&&(g.validOutputs=f),g}function vz(r,e,t){let o=r.subarray(e*4,e*4+4),n=r.subarray(t*4,t*4+4),s=Math.min(o[0],o[2]),i=Math.min(o[1],o[3]),a=Math.max(o[0],o[2]),l=Math.max(o[1],o[3]),u=Math.min(n[0],n[2]),c=Math.min(n[1],n[3]),p=Math.max(n[0],n[2]),m=Math.max(n[1],n[3]),f=(a-s)*(l-i),h=(p-u)*(m-c);if(f<=0||h<=0)return 0;let g=Math.max(s,u),d=Math.max(i,c),x=Math.min(a,p),y=Math.min(l,m),w=Math.max(x-g,0)*Math.max(y-d,0);return w/(f+h-w)}function Nz(r,e,t){let o=Math.exp(e*t*t);return t<=r?o:0}function MS(r,e){return r.score-e.score||r.score===e.score&&e.boxIndex-r.boxIndex}function Iz(s,i,a){return B(this,arguments,function*(r,e,t,o=.5,n=Number.NEGATIVE_INFINITY){let l=N(r,"boxes","nonMaxSuppressionAsync"),u=N(e,"scores","nonMaxSuppressionAsync"),c=lo(l,u,t,o,n);t=c.maxOutputSize,o=c.iouThreshold,n=c.scoreThreshold;let p=yield Promise.all([l.data(),u.data()]),m=p[0],f=p[1],{selectedIndices:h}=Gm(m,f,t,o,n);return l!==r&&l.dispose(),u!==e&&u.dispose(),Ne(h,"int32")})}var BS=Iz;function Tz(r,e,t,o=.5,n=Number.NEGATIVE_INFINITY,s=0){let i=N(r,"boxes","nonMaxSuppression"),a=N(e,"scores","nonMaxSuppression"),l=lo(i,a,t,o,n,s);t=l.maxOutputSize,o=l.iouThreshold,n=l.scoreThreshold,s=l.softNmsSigma;let u={boxes:i,scores:a},c={maxOutputSize:t,iouThreshold:o,scoreThreshold:n,softNmsSigma:s},p=I.runKernel(Wl,u,c);return{selectedIndices:p[0],selectedScores:p[1]}}var VS=T({nonMaxSuppressionWithScore_:Tz});function kz(i,a,l){return B(this,arguments,function*(r,e,t,o=.5,n=Number.NEGATIVE_INFINITY,s=0){let u=N(r,"boxes","nonMaxSuppressionAsync"),c=N(e,"scores","nonMaxSuppressionAsync"),p=lo(u,c,t,o,n,s);t=p.maxOutputSize,o=p.iouThreshold,n=p.scoreThreshold,s=p.softNmsSigma;let m=yield Promise.all([u.data(),c.data()]),f=m[0],h=m[1],{selectedIndices:g,selectedScores:d}=Um(f,h,t,o,n,s);return u!==r&&u.dispose(),c!==e&&c.dispose(),{selectedIndices:Ne(g,"int32"),selectedScores:Ne(d)}})}var GS=kz;function Ez(r,e,t,o=.5,n=Number.NEGATIVE_INFINITY,s=!1){let i=N(r,"boxes","nonMaxSuppression"),a=N(e,"scores","nonMaxSuppression"),l=lo(i,a,t,o,n,null),u=l.maxOutputSize,c=l.iouThreshold,p=l.scoreThreshold,m={boxes:i,scores:a},f={maxOutputSize:u,iouThreshold:c,scoreThreshold:p,padToMaxOutputSize:s},h=I.runKernel(Gl,m,f);return{selectedIndices:h[0],validOutputs:h[1]}}var WS=T({nonMaxSuppressionPadded_:Ez});function Az(i,a,l){return B(this,arguments,function*(r,e,t,o=.5,n=Number.NEGATIVE_INFINITY,s=!1){let u=N(r,"boxes","nonMaxSuppressionAsync"),c=N(e,"scores","nonMaxSuppressionAsync"),p=lo(u,c,t,o,n,null),m=p.maxOutputSize,f=p.iouThreshold,h=p.scoreThreshold,[g,d]=yield Promise.all([u.data(),c.data()]),{selectedIndices:x,validOutputs:y}=Wm(g,d,m,f,h,s);return u!==r&&u.dispose(),c!==e&&c.dispose(),{selectedIndices:Ne(x,"int32"),validOutputs:xt(y,"int32")}})}var US=Az;function $z(r,e,t=!1,o=!1){let n=N(r,"images","resizeBilinear");k(n.rank===3||n.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${n.rank}.`),k(e.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${e}.`),k(o===!1||t===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let s=n,i=!1;n.rank===3&&(i=!0,s=F(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let[]=e,a={images:s},l={alignCorners:t,halfPixelCenters:o,size:e},u=I.runKernel(bi,a,l);return i?F(u,[u.shape[1],u.shape[2],u.shape[3]]):u}var Hm=T({resizeBilinear_:$z});function Dz(r,e,t=!1,o=!1){let n=N(r,"images","resizeNearestNeighbor");k(n.rank===3||n.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${n.rank}.`),k(e.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${e}.`),k(n.dtype==="float32"||n.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),k(o===!1||t===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let s=n,i=!1;n.rank===3&&(i=!0,s=F(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let[]=e,a={images:s},l={alignCorners:t,halfPixelCenters:o,size:e},u=I.runKernel(yi,a,l);return i?F(u,[u.shape[1],u.shape[2],u.shape[3]]):u}var qm=T({resizeNearestNeighbor_:Dz});function Rz(r,e="binary",t=!1,o=.5){let n=N(r,"image","threshold"),s=.2989,i=.587,a=.114,l=n.shape[0]*n.shape[1],u=R(Ne([o]),255),c,p,m,f;if(k(n.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${n.rank}.`),k(n.shape[2]===3||n.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${n.shape[2]}.`),k(n.dtype==="int32"||n.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${n.dtype}.`),k(e==="otsu"||e==="binary",()=>`Method must be binary or otsu, but was ${e}`),n.shape[2]===3){[c,p,m]=Re(n,[1,1,1],-1);let d=R(c,s),x=R(p,i),y=R(m,a);f=j(j(d,x),y)}else f=r;if(e==="otsu"){let d=HC(Y(Hc(f),"int32"),Hr([]),256);u=Fz(d,l)}let h=t?io(f,u):ge(f,u);return Y(R(h,255),"int32")}function Fz(r,e){let t=Ne([-1]),o=Ne([0]),n=Ne([0]),s,i,a,l,u,c;for(let p=0;p<r.size-1;p++){s=Ft(r,0,p+1),i=Ft(r,p+1),u=ot(it(s),e),c=ot(it(i),e);let m=it(R(s,ds(0,s.size)));a=ot(m,it(s));let f=ps(i.shape,s.size),h=j(ds(0,i.size),f),g=R(i,h);l=ot(it(g),it(i));let d=lt(a,l),x=lt(a,l),y=R(u,c);n=R(R(y,d),x);let w=ge(n,o);o=ee(w,n,o),t=ee(w,Ne([p]),t)}return t}var HS=T({threshold_:Rz});function _z(r,e,t="nearest",o="constant",n=0,s){let i=N(r,"image","transform","float32"),a=N(e,"transforms","transform","float32");k(i.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${i.rank}.`),k(a.rank===2&&(a.shape[0]===i.shape[0]||a.shape[0]===1)&&a.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),k(s==null||s.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${s}.`);let l={image:i,transforms:a},u={interpolation:t,fillMode:o,fillValue:n,outputShape:s};return I.runKernel(Zl,l,u)}var qS=T({transform_:_z});function Oz(r,e,t){let o=N(r,"a","bandPart");k(o.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${o.rank}.`);let n=o.shape,[s,i]=o.shape.slice(-2),a,l;typeof e=="number"?(k(e%1===0,()=>`bandPart(): numLower must be an integer, got ${e}.`),k(e<=s,()=>`bandPart(): numLower (${e}) must not be greater than the number of rows (${s}).`),a=N(e<0?s:e,"numLower","bandPart")):(k(e.dtype==="int32",()=>"bandPart(): numLower's dtype must be an int32."),a=ee(Da(e,0),s,Qo(e,s))),typeof t=="number"?(k(t%1===0,()=>`bandPart(): numUpper must be an integer, got ${t}.`),k(t<=i,()=>`bandPart(): numUpper (${t}) must not be greater than the number of columns (${i}).`),l=N(t<0?i:t,"numUpper","bandPart")):(k(t.dtype==="int32",()=>"bandPart(): numUpper's dtype must be an int32."),l=ee(Da(t,0),i,Qo(t,i)));let u=F(ds(0,s,1,"int32"),[-1,1]),c=ds(0,i,1,"int32"),p=lt(u,c),m=nr(io(p,a),Cr(p,Lt(l))),f=re([s,i],o.dtype);return F($e(sr(F(o,[-1,s,i])).map(h=>ee(m,h,f))),n)}var KS=T({bandPart_:Oz});function Lz(r){let e;if(Array.isArray(r)){e=!1,k(r!=null&&r.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");let n=r[0].shape[0];for(let s=1;s<r.length;++s)k(r[s].shape[0]===n,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${r[s].shape[0]} vs. ${n})`)}else e=!0,r=Re(r,r.shape[0],0).map(n=>$o(n,[0]));k(r.length<=r[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${r.length}) exceeds number of dimensions (${r[0].shape[0]}).`);let t=[],o=r;for(let n=0;n<r.length;++n)t.push(I.tidy(()=>{let s=o[n];if(n>0)for(let i=0;i<n;++i){let a=R(it(R(t[i],s)),t[i]);s=lt(s,a)}return ot(s,zi(s,"euclidean"))}));return e?$e(t,0):t}var jS=T({gramSchmidt_:Lz});function Pz(r,e=!1){if(k(r.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${r.rank}`),r.rank===2)return XS(r,e);{let t=r.shape.slice(0,r.shape.length-2).reduce((l,u)=>l*u),o=sr(F(r,[t,r.shape[r.shape.length-2],r.shape[r.shape.length-1]]),0),n=[],s=[];o.forEach(l=>{let[u,c]=XS(l,e);n.push(u),s.push(c)});let i=F($e(n,0),r.shape),a=F($e(s,0),r.shape);return[i,a]}}function XS(r,e=!1){return I.tidy(()=>{k(r.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${r.shape.length}D Tensor.`);let t=r.shape[0],o=r.shape[1],n=du(t),s=Rr(r),i=ao([[1]],[1,1]),a=Rr(i),l=t>=o?o:t;for(let u=0;u<l;++u){let c=s,p=a,m=n;[a,s,n]=I.tidy(()=>{let f=Ft(s,[u,u],[t-u,1]),h=zi(f),g=Ft(s,[u,u],[1,1]),d=ee(ge(g,0),ao([[-1]]),ao([[1]])),x=lt(g,R(d,h)),y=ot(f,x);y.shape[0]===1?a=Rr(i):a=te([i,Ft(y,[1,0],[y.shape[0]-1,y.shape[1]])],0);let w=Lt(ot(Mt(d,x),h)),C=Ft(s,[u,0],[t-u,o]),S=R(w,a),E=Et(a);if(u===0)s=lt(C,Mt(S,Mt(E,C)));else{let _=lt(C,Mt(S,Mt(E,C)));s=te([Ft(s,[0,0],[u,o]),_],0)}let A=Et(S),$=Ft(n,[0,u],[t,n.shape[1]-u]);if(u===0)n=lt($,Mt(Mt($,a),A));else{let _=lt($,Mt(Mt($,a),A));n=te([Ft(n,[0,0],[t,u]),_],1)}return[a,s,n]}),Ct([c,p,m])}return!e&&t>o&&(n=Ft(n,[0,0],[t,o]),s=Ft(s,[0,0],[o,o])),[n,s]})}var YS=T({qr_:Pz});var Pr={flipLeftRight:FS,grayscaleToRGB:_S,resizeNearestNeighbor:qm,resizeBilinear:Hm,rgbToGrayscale:OS,rotateWithOffset:LS,cropAndResize:RS,nonMaxSuppression:PS,nonMaxSuppressionAsync:BS,nonMaxSuppressionWithScore:VS,nonMaxSuppressionWithScoreAsync:GS,nonMaxSuppressionPadded:WS,nonMaxSuppressionPaddedAsync:US,threshold:HS,transform:qS},ZS={bandPart:KS,gramSchmidt:jS,qr:YS};var H={};to(H,{Serializable:()=>ep,SerializationMap:()=>Km,getRegisteredName:()=>Mz,registerClass:()=>Bx});var zz=new Map,Mx=new Map,ep=class{getClassName(){return this.constructor.className}static fromConfig(e,t){return new e(t)}},Km=class r{constructor(){this.classNameMap={}}static getMap(){return r.instance==null&&(r.instance=new r),r.instance}static register(e){r.getMap().classNameMap[e.className]=[e,e.fromConfig]}};function Bx(r,e,t){k(r.className!=null,()=>"Class being registered does not have the static className property defined."),k(typeof r.className=="string",()=>"className is required to be a string, but got type "+typeof r.className),k(r.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),typeof e>"u"&&(e="Custom"),typeof t>"u"&&(t=r.className);let o=t,n=e+">"+o;return Km.register(r),zz.set(n,r),Mx.set(r,n),r}function Mz(r){return Mx.has(r)?Mx.get(r):r.className}var Je=class extends ep{minimize(e,t=!1,o){let{value:n,grads:s}=this.computeGradients(e,o);if(o!=null){let i=o.map(a=>({name:a.name,tensor:s[a.name]}));this.applyGradients(i)}else this.applyGradients(s);return Ct(s),t?n:(n.dispose(),null)}get iterations(){return this.iterations_==null&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(e,t){return Cx(e,t)}dispose(){this.iterations_!=null&&Ct(this.iterations_)}saveIterations(){return B(this,null,function*(){return this.iterations_==null&&(this.iterations_=0),{name:"iter",tensor:xt(this.iterations_,"int32")}})}getWeights(){return B(this,null,function*(){throw new Error("getWeights() is not implemented for this optimizer yet.")})}setWeights(e){return B(this,null,function*(){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)})}extractIterations(e){return B(this,null,function*(){return this.iterations_=(yield e[0].tensor.data())[0],e.slice(1)})}};Object.defineProperty(Je,Symbol.hasInstance,{value:r=>r.minimize!=null&&r.computeGradients!=null&&r.applyGradients!=null});var Iu=class extends Je{static get className(){return"Adadelta"}constructor(e,t,o=null){super(),this.learningRate=e,this.rho=t,this.epsilon=o,this.accumulatedGrads=[],this.accumulatedUpdates=[],o==null&&(this.epsilon=I.backend.epsilon())}applyGradients(e){(Array.isArray(e)?e.map(o=>o.name):Object.keys(e)).forEach((o,n)=>{let s=I.registeredVariables[o],i=!1;this.accumulatedGrads[n]==null&&(this.accumulatedGrads[n]={originalName:`${o}/accum_grad`,variable:z(()=>ht(s).variable(i))}),this.accumulatedUpdates[n]==null&&(this.accumulatedUpdates[n]={originalName:`${o}/accum_var`,variable:z(()=>ht(s).variable(i))});let a=Array.isArray(e)?e[n].tensor:e[o];if(a==null)return;let l=this.accumulatedGrads[n].variable,u=this.accumulatedUpdates[n].variable;z(()=>{let c=j(R(l,this.rho),R(At(a),1-this.rho)),p=R(ot(jt(j(u,this.epsilon)),jt(j(l,this.epsilon))),a),m=j(R(u,this.rho),R(At(p),1-this.rho));l.assign(c),u.assign(m);let f=j(R(p,-this.learningRate),s);s.assign(f)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(Ct(this.accumulatedGrads.map(e=>e.variable)),Ct(this.accumulatedUpdates.map(e=>e.variable)))}getWeights(){return B(this,null,function*(){let e=[...this.accumulatedGrads,...this.accumulatedUpdates];return[yield this.saveIterations()].concat(e.map(t=>({name:t.originalName,tensor:t.variable})))})}setWeights(e){return B(this,null,function*(){e=yield this.extractIterations(e);let t=e.length/2,o=!1;this.accumulatedGrads=e.slice(0,t).map(n=>({originalName:n.name,variable:n.tensor.variable(o)})),this.accumulatedUpdates=e.slice(t,t*2).map(n=>({originalName:n.name,variable:n.tensor.variable(o)}))})}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(e,t){return new e(t.learningRate,t.rho,t.epsilon)}};var Tu=class extends Je{static get className(){return"Adagrad"}constructor(e,t=.1){super(),this.learningRate=e,this.initialAccumulatorValue=t,this.accumulatedGrads=[]}applyGradients(e){(Array.isArray(e)?e.map(o=>o.name):Object.keys(e)).forEach((o,n)=>{let s=I.registeredVariables[o];this.accumulatedGrads[n]==null&&(this.accumulatedGrads[n]={originalName:`${o}/accumulator`,variable:z(()=>ps(s.shape,this.initialAccumulatorValue).variable(!1))});let i=Array.isArray(e)?e[n].tensor:e[o];if(i==null)return;let a=this.accumulatedGrads[n].variable;z(()=>{let l=j(a,At(i));a.assign(l);let u=j(R(ot(i,jt(j(l,I.backend.epsilon()))),-this.learningRate),s);s.assign(u)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&Ct(this.accumulatedGrads.map(e=>e.variable))}getWeights(){return B(this,null,function*(){return[yield this.saveIterations()].concat(this.accumulatedGrads.map(e=>({name:e.originalName,tensor:e.variable})))})}setWeights(e){return B(this,null,function*(){e=yield this.extractIterations(e);let t=!1;this.accumulatedGrads=e.map(o=>({originalName:o.name,variable:o.tensor.variable(t)}))})}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(e,t){return new e(t.learningRate,t.initialAccumulatorValue)}};var ku=class extends Je{static get className(){return"Adam"}constructor(e,t,o,n=null){super(),this.learningRate=e,this.beta1=t,this.beta2=o,this.epsilon=n,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],z(()=>{this.accBeta1=xt(t).variable(),this.accBeta2=xt(o).variable()}),n==null&&(this.epsilon=I.backend.epsilon())}applyGradients(e){let t=Array.isArray(e)?e.map(o=>o.name):Object.keys(e);z(()=>{let o=lt(1,this.accBeta1),n=lt(1,this.accBeta2);t.forEach((s,i)=>{let a=I.registeredVariables[s],l=!1;this.accumulatedFirstMoment[i]==null&&(this.accumulatedFirstMoment[i]={originalName:`${s}/m`,variable:z(()=>ht(a).variable(l))}),this.accumulatedSecondMoment[i]==null&&(this.accumulatedSecondMoment[i]={originalName:`${s}/v`,variable:z(()=>ht(a).variable(l))});let u=Array.isArray(e)?e[i].tensor:e[s];if(u==null)return;let c=this.accumulatedFirstMoment[i].variable,p=this.accumulatedSecondMoment[i].variable,m=j(R(c,this.beta1),R(u,1-this.beta1)),f=j(R(p,this.beta2),R(At(u),1-this.beta2)),h=ot(m,o),g=ot(f,n);c.assign(m),p.assign(f);let d=j(R(ot(h,j(jt(g),this.epsilon)),-this.learningRate),a);a.assign(d)}),this.accBeta1.assign(R(this.accBeta1,this.beta1)),this.accBeta2.assign(R(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&Ct(this.accumulatedFirstMoment.map(e=>e.variable)),this.accumulatedSecondMoment!=null&&Ct(this.accumulatedSecondMoment.map(e=>e.variable))}getWeights(){return B(this,null,function*(){let e=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[yield this.saveIterations()].concat(e.map(t=>({name:t.originalName,tensor:t.variable})))})}setWeights(e){return B(this,null,function*(){e=yield this.extractIterations(e),z(()=>{this.accBeta1.assign(wr(this.beta1,this.iterations_+1)),this.accBeta2.assign(wr(this.beta2,this.iterations_+1))});let t=e.length/2,o=!1;this.accumulatedFirstMoment=e.slice(0,t).map(n=>({originalName:n.name,variable:n.tensor.variable(o)})),this.accumulatedSecondMoment=e.slice(t,t*2).map(n=>({originalName:n.name,variable:n.tensor.variable(o)}))})}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon)}};var Eu=class extends Je{static get className(){return"Adamax"}constructor(e,t,o,n=null,s=0){super(),this.learningRate=e,this.beta1=t,this.beta2=o,this.epsilon=n,this.decay=s,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],z(()=>{this.iteration=xt(0).variable(),this.accBeta1=xt(t).variable()}),n==null&&(this.epsilon=I.backend.epsilon())}applyGradients(e){let t=Array.isArray(e)?e.map(o=>o.name):Object.keys(e);z(()=>{let o=lt(1,this.accBeta1),n=ot(-this.learningRate,j(R(this.iteration,this.decay),1));t.forEach((s,i)=>{let a=I.registeredVariables[s],l=!1;this.accumulatedFirstMoment[i]==null&&(this.accumulatedFirstMoment[i]={originalName:`${s}/m`,variable:ht(a).variable(l)}),this.accumulatedWeightedInfNorm[i]==null&&(this.accumulatedWeightedInfNorm[i]={originalName:`${s}/v`,variable:ht(a).variable(l)});let u=Array.isArray(e)?e[i].tensor:e[s];if(u==null)return;let c=this.accumulatedFirstMoment[i].variable,p=this.accumulatedWeightedInfNorm[i].variable,m=j(R(c,this.beta1),R(u,1-this.beta1)),f=R(p,this.beta2),h=ke(u),g=Or(f,h);c.assign(m),p.assign(g);let d=j(R(ot(n,o),ot(m,j(g,this.epsilon))),a);a.assign(d)}),this.iteration.assign(j(this.iteration,1)),this.accBeta1.assign(R(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&Ct(this.accumulatedFirstMoment.map(e=>e.variable)),this.accumulatedWeightedInfNorm!=null&&Ct(this.accumulatedWeightedInfNorm.map(e=>e.variable))}getWeights(){return B(this,null,function*(){throw new Error("getWeights() is not implemented for Adamax yet.")})}setWeights(e){return B(this,null,function*(){throw new Error("setWeights() is not implemented for Adamax yet.")})}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon,t.decay)}};var Bi=class extends Je{static get className(){return"SGD"}constructor(e){super(),this.learningRate=e,this.setLearningRate(e)}applyGradients(e){(Array.isArray(e)?e.map(o=>o.name):Object.keys(e)).forEach((o,n)=>{let s=Array.isArray(e)?e[n].tensor:e[o];if(s==null)return;let i=I.registeredVariables[o];z(()=>{let a=j(R(this.c,s),i);i.assign(a)})}),this.incrementIterations()}setLearningRate(e){this.learningRate=e,this.c!=null&&this.c.dispose(),this.c=_e(xt(-e))}dispose(){this.c.dispose()}getWeights(){return B(this,null,function*(){return[yield this.saveIterations()]})}setWeights(e){return B(this,null,function*(){if(e=yield this.extractIterations(e),e.length!==0)throw new Error("SGD optimizer does not have settable weights.")})}getConfig(){return{learningRate:this.learningRate}}static fromConfig(e,t){return new e(t.learningRate)}};var Au=class extends Bi{static get className(){return"Momentum"}constructor(e,t,o=!1){super(e),this.learningRate=e,this.momentum=t,this.useNesterov=o,this.accumulations=[],this.m=xt(this.momentum)}applyGradients(e){(Array.isArray(e)?e.map(o=>o.name):Object.keys(e)).forEach((o,n)=>{let s=I.registeredVariables[o];this.accumulations[n]==null&&(this.accumulations[n]={originalName:`${o}/momentum`,variable:z(()=>ht(s).variable(!1))});let i=this.accumulations[n].variable,a=Array.isArray(e)?e[n].tensor:e[o];a!=null&&z(()=>{let l,u=j(R(this.m,i),a);this.useNesterov?l=j(R(this.c,j(a,R(u,this.m))),s):l=j(R(this.c,u),s),i.assign(u),s.assign(l)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&Ct(this.accumulations.map(e=>e.variable))}setMomentum(e){this.momentum=e}getWeights(){return B(this,null,function*(){return[yield this.saveIterations()].concat(this.accumulations.map(e=>({name:e.originalName,tensor:e.variable})))})}setWeights(e){return B(this,null,function*(){e=yield this.extractIterations(e);let t=!1;this.accumulations=e.map(o=>({originalName:o.name,variable:o.tensor.variable(t)}))})}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(e,t){return new e(t.learningRate,t.momentum,t.useNesterov)}};var $u=class extends Je{static get className(){return"RMSProp"}constructor(e,t=.9,o=0,n=null,s=!1){if(super(),this.learningRate=e,this.decay=t,this.momentum=o,this.epsilon=n,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=s,n==null&&(this.epsilon=I.backend.epsilon()),e==null)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(e){(Array.isArray(e)?e.map(o=>o.name):Object.keys(e)).forEach((o,n)=>{let s=I.registeredVariables[o],i=!1;this.accumulatedMeanSquares[n]==null&&(this.accumulatedMeanSquares[n]={originalName:`${o}/rms`,variable:z(()=>ht(s).variable(i))}),this.accumulatedMoments[n]==null&&(this.accumulatedMoments[n]={originalName:`${o}/momentum`,variable:z(()=>ht(s).variable(i))}),this.accumulatedMeanGrads[n]==null&&this.centered&&(this.accumulatedMeanGrads[n]={originalName:`${o}/mg`,variable:z(()=>ht(s).variable(i))});let a=Array.isArray(e)?e[n].tensor:e[o];if(a==null)return;let l=this.accumulatedMeanSquares[n].variable,u=this.accumulatedMoments[n].variable;z(()=>{let c=j(R(l,this.decay),R(At(a),1-this.decay));if(this.centered){let p=this.accumulatedMeanGrads[n].variable,m=j(R(p,this.decay),R(a,1-this.decay)),f=ot(R(a,this.learningRate),jt(lt(c,j(At(m),this.epsilon)))),h=j(R(u,this.momentum),f);l.assign(c),p.assign(m),u.assign(h);let g=lt(s,h);s.assign(g)}else{let p=j(R(l,this.decay),R(At(a),1-this.decay)),m=j(R(u,this.momentum),ot(R(a,this.learningRate),jt(j(p,this.epsilon))));l.assign(p),u.assign(m);let f=lt(s,m);s.assign(f)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&Ct(this.accumulatedMeanSquares.map(e=>e.variable)),this.accumulatedMeanGrads!=null&&this.centered&&Ct(this.accumulatedMeanGrads.map(e=>e.variable)),this.accumulatedMoments!=null&&Ct(this.accumulatedMoments.map(e=>e.variable))}getWeights(){return B(this,null,function*(){let e=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&e.push(...this.accumulatedMeanGrads),[yield this.saveIterations()].concat(e.map(t=>({name:t.originalName,tensor:t.variable})))})}setWeights(e){return B(this,null,function*(){e=yield this.extractIterations(e);let t=this.centered?e.length/3:e.length/2,o=!1;this.accumulatedMeanSquares=e.slice(0,t).map(n=>({originalName:n.name,variable:n.tensor.variable(o)})),this.accumulatedMoments=e.slice(t,t*2).map(n=>({originalName:n.name,variable:n.tensor.variable(o)})),this.centered&&(this.accumulatedMeanGrads=e.slice(t*2,t*3).map(n=>({originalName:n.name,variable:n.tensor.variable(o)})))})}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(e,t){return new e(t.learningRate,t.decay,t.momentum,t.epsilon,t.centered)}};var Bz=[Iu,Tu,ku,Eu,Au,$u,Bi];function QS(){for(let r of Bz)Bx(r)}var uo={};to(uo,{CompositeArrayBuffer:()=>Ze,browserFiles:()=>tv,browserHTTPRequest:()=>sv,concatenateArrayBuffers:()=>wC,copyModel:()=>_C,decodeWeights:()=>Nm,decodeWeightsStream:()=>Pg,encodeWeights:()=>gC,fromMemory:()=>iv,fromMemorySync:()=>Kx,getLoadHandlers:()=>NC,getModelArtifactsForJSON:()=>iu,getModelArtifactsForJSONSync:()=>Bg,getModelArtifactsInfoForJSON:()=>jo,getSaveHandlers:()=>vC,getWeightSpecs:()=>Dc,http:()=>Xm,isHTTPScheme:()=>jm,listModels:()=>RC,loadWeights:()=>rv,moveModel:()=>OC,registerLoadRouter:()=>SC,registerSaveRouter:()=>CC,removeModel:()=>FC,weightsLoaderFactory:()=>Hx,withSaveHandler:()=>av,withSaveHandlerSync:()=>lv});var Vz="model",Gz=".json",Wz=".weights.bin";function JS(r){return new Promise(e=>setTimeout(e)).then(r)}var Vx=(()=>{class r{constructor(t){if(!P().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(r.URL_SCHEME)&&(t=t.slice(r.URL_SCHEME.length)),(t==null||t.length===0)&&(t=Vz),this.modelJsonFileName=t+Gz,this.weightDataFileName=t+Wz}save(t){return B(this,null,function*(){if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");let o=Ze.join(t.weightData),n=window.URL.createObjectURL(new Blob([o],{type:"application/octet-stream"}));if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{let s=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],i=Im(t,s),a=window.URL.createObjectURL(new Blob([JSON.stringify(i)],{type:"application/json"})),l=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(l.download=this.modelJsonFileName,l.href=a,yield JS(()=>l.dispatchEvent(new MouseEvent("click"))),t.weightData!=null){let u=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;u.download=this.weightDataFileName,u.href=n,yield JS(()=>u.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:jo(t)}}})}}return r.URL_SCHEME="downloads://",r})();var Gx=class{constructor(e){if(e==null||e.length<1)throw new Error(`When calling browserFiles, at least 1 file is required, but received ${e}`);this.jsonFile=e[0],this.weightsFiles=e.slice(1)}load(){return B(this,null,function*(){return new Promise((e,t)=>{let o=new FileReader;o.onload=n=>{let s=JSON.parse(n.target.result),i=s.modelTopology;if(i==null){t(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));return}if(s.weightsManifest==null){t(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));return}if(this.weightsFiles.length===0){e({modelTopology:i});return}let l=iu(s,u=>this.loadWeights(u));e(l)},o.onerror=n=>t(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),o.readAsText(this.jsonFile)})})}loadWeights(e){let t=[],o=[];for(let i of e)t.push(...i.weights),o.push(...i.paths);let n=this.checkManifestAndWeightFiles(e),s=o.map(i=>this.loadWeightsFile(i,n[i]));return Promise.all(s).then(i=>[t,i])}loadWeightsFile(e,t){return new Promise((o,n)=>{let s=new FileReader;s.onload=i=>{let a=i.target.result;o(a)},s.onerror=i=>n(`Failed to weights data from file of path '${e}'.`),s.readAsArrayBuffer(t)})}checkManifestAndWeightFiles(e){let t=[],o=this.weightsFiles.map(s=>Mg(s.name)),n={};for(let s of e)s.paths.forEach(i=>{let a=Mg(i);if(t.indexOf(a)!==-1)throw new Error(`Duplicate file basename found in weights manifest: '${a}'`);if(t.push(a),o.indexOf(a)===-1)throw new Error(`Weight file with basename '${a}' is not provided.`);n[i]=this.weightsFiles[o.indexOf(a)]});if(t.length!==this.weightsFiles.length)throw new Error(`Mismatch in the number of files in weights manifest (${t.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return n}},Uz=r=>P().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(Vx.URL_SCHEME)?Hz(r.slice(Vx.URL_SCHEME.length)):null;Oe.registerSaveRouter(Uz);function Hz(r="model"){return new Vx(r)}function tv(r){return new Gx(r)}function Wx(r,e,t,o){i(r),t=t??0,o=o??1,a(t,o);let n=0,s=l=>(l.then(u=>{let c=t+ ++n/r.length*(o-t);return e(c),u}),l);function i(l){k(l!=null&&Array.isArray(l)&&l.length>0,()=>"promises must be a none empty array")}function a(l,u){k(l>=0&&l<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${l}`),k(u>=0&&u<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${u}`),k(u>=l,()=>`startFraction must be no more than endFraction, but got startFraction ${l} and endFraction ${u}`)}return Promise.all(r.map(s))}function Ux(r,e){return B(this,null,function*(){e==null&&(e={});let t=e.fetchFunc==null?P().platform.fetch:e.fetchFunc,o=r.map(p=>t(p,e.requestInit,{isBinary:!0})),a=(e.onProgress==null?yield Promise.all(o):yield Wx(o,e.onProgress,0,.5)).map(p=>p.arrayBuffer());return e.onProgress==null?yield Promise.all(a):yield Wx(a,e.onProgress,.5,1)})}function ev(r,e){var t;let o=e.fetchFunc==null?P().platform.fetch:e.fetchFunc,n=0,s;return(t=e.onProgress)===null||t===void 0||t.call(e,0),new ReadableStream({pull:i=>B(null,null,function*(){for(var a;n<r.length;){s||(s=(yield o(r[n],e.requestInit,{isBinary:!0})).body.getReader());let{done:l,value:u}=yield s.read();if(l){n++,s=void 0,(a=e.onProgress)===null||a===void 0||a.call(e,n/r.length);continue}i.enqueue(u);return}i.close()})})}function rv(r,e="",t,o){return B(this,null,function*(){return Hx(i=>Ux(i,{requestInit:o}))(r,e,t)})}function Hx(r){return(e,t="",o)=>B(null,null,function*(){let n=e.map(()=>!1),s={},i=o!=null?o.map(()=>!1):[],a=[];if(e.forEach((f,h)=>{let g=0;f.weights.forEach(d=>{let x="quantization"in d?d.quantization.dtype:d.dtype,y=as[x]*zt(d.shape),w=()=>{n[h]=!0,s[h]==null&&(s[h]=[]),s[h].push({manifestEntry:d,groupOffset:g,sizeBytes:y})};o!=null?o.forEach((C,S)=>{C===d.name&&(w(),i[S]=!0)}):w(),a.push(d.name),g+=y})}),!i.every(f=>f)){let f=o.filter((h,g)=>!i[g]);throw new Error(`Could not find weights in manifest with names: ${f.join(", ")}. 
Manifest JSON has weights with names: ${a.join(", ")}.`)}let l=n.reduce((f,h,g)=>(h&&f.push(g),f),[]),u=[];l.forEach(f=>{e[f].paths.forEach(h=>{let g=t+(t.endsWith("/")?"":"/")+h;u.push(g)})});let c=yield r(u),p={},m=0;return l.forEach(f=>{let h=e[f].paths.length,g=new Ze(c.slice(m,m+h));s[f].forEach(x=>{let y=g.slice(x.groupOffset,x.groupOffset+x.sizeBytes),w=Nm(y,[x.manifestEntry]);for(let C in w)p[C]=w[C]}),m+=h}),p})}var qz="application/octet-stream",Kz="application/json",ov=(()=>{class r{constructor(t,o){if(this.DEFAULT_METHOD="POST",o==null&&(o={}),this.weightPathPrefix=o.weightPathPrefix,this.weightUrlConverter=o.weightUrlConverter,o.fetchFunc!=null?(k(typeof o.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=o.fetchFunc):this.fetch=P().platform.fetch,k(t!=null&&t.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(t)&&k(t.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${t.length}).`),this.path=t,o.requestInit!=null&&o.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=o.requestInit||{},this.loadOptions=o}save(t){return B(this,null,function*(){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");let o=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);o.body=new FormData;let n=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],s=Im(t,n);if(o.body.append("model.json",new Blob([JSON.stringify(s)],{type:Kz}),"model.json"),t.weightData!=null){let a=Ze.join(t.weightData);o.body.append("model.weights.bin",new Blob([a],{type:qz}),"model.weights.bin")}let i=yield this.fetch(this.path,o);if(i.ok)return{modelArtifactsInfo:jo(t),responses:[i]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${i.status}.`)})}loadModelJSON(){return B(this,null,function*(){let t=yield this.fetch(this.path,this.requestInit);if(!t.ok)throw new Error(`Request to ${this.path} failed with status code ${t.status}. Please verify this URL points to the model JSON of the model to load.`);let o;try{o=yield t.json()}catch{let a=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?a+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":a+=" Please make sure the server is serving valid JSON for this request.",new Error(a)}let n=o.modelTopology,s=o.weightsManifest;if(n==null&&s==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return o})}load(){return B(this,null,function*(){if(this.loadOptions.streamWeights)return this.loadStream();let t=yield this.loadModelJSON();return iu(t,o=>this.loadWeights(o))})}loadStream(){return B(this,null,function*(){let t=yield this.loadModelJSON(),o=yield this.getWeightUrls(t.weightsManifest),n=Dc(t.weightsManifest),s=()=>ev(o,this.loadOptions);return Object.assign(Object.assign({},t),{weightSpecs:n,getWeightStream:s})})}getWeightUrls(t){return B(this,null,function*(){let o=Array.isArray(this.path)?this.path[1]:this.path,[n,s]=jz(o),i=this.weightPathPrefix||n,a=[],l=[];for(let u of t)for(let c of u.paths)this.weightUrlConverter!=null?l.push(this.weightUrlConverter(c)):a.push(i+c+s);return this.weightUrlConverter&&a.push(...yield Promise.all(l)),a})}loadWeights(t){return B(this,null,function*(){let o=yield this.getWeightUrls(t),n=Dc(t),s=yield Ux(o,this.loadOptions);return[n,s]})}}return r.URL_SCHEME_REGEX=/^https?:\/\//,r})();function jz(r){let e=r.lastIndexOf("/"),t=r.lastIndexOf("?"),o=r.substring(0,e),n=t>e?r.substring(t):"";return[o+"/",n]}function jm(r){return r.match(ov.URL_SCHEME_REGEX)!=null}var nv=(r,e)=>{if(typeof fetch>"u"&&(e==null||e.fetchFunc==null))return null;{let t=!0;if(Array.isArray(r)?t=r.every(o=>jm(o)):t=jm(r),t)return Xm(r,e)}return null};Oe.registerSaveRouter(nv);Oe.registerLoadRouter(nv);function Xm(r,e){return new ov(r,e)}function sv(r,e){return Xm(r,e)}var rp=class{constructor(e){this.modelArtifacts=e}load(){return this.modelArtifacts}},Ym=class{constructor(e){this.saveHandler=e}save(e){return this.saveHandler(e)}},qx=class{constructor(e){e.load&&(this.load=()=>Promise.resolve(e.load())),e.save&&(this.save=t=>Promise.resolve(e.save(t)))}};function iv(r,e,t,o){let n=arguments;return new qx(Kx(...n))}function Kx(r,e,t,o){return arguments.length===1?r.modelTopology!=null||r.weightSpecs!=null?new rp(r):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new rp({modelTopology:r})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new rp({modelTopology:r,weightSpecs:e,weightData:t,trainingConfig:o}))}function av(r){return new Ym(r)}function lv(r){return new Ym(r)}function Xz(r,e){let t=r.shape.length,o=e.shape.length;if(t<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${t}.`);if(o<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${o}.`);if(e.dtype!=="int32")throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${e.dtype}.`);if(e.shape[o-1]>t)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${e.shape[o-1]} vs. ${t}`);if(zt(r.shape)===0)throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${r.shape}.`);let n=e.shape,s=n[n.length-1],i=1;for(let p=0;p<n.length-1;++p)i*=n[p];let a=r.shape,l=n.slice();l.pop();let u=1;for(let p=s;p<t;++p)u*=a[p],l.push(a[p]);let c=[...Go(r.shape).map(p=>p/u),1].slice(0,s);return[l,i,u,c]}var ze={};to(ze,{assertParamsValid:()=>Zz,computeFlatOffset:()=>rM,computeOutShape:()=>Jz,getNormalizedAxes:()=>tM,isSliceContinous:()=>eM,maskToAxes:()=>Qz,parseSliceParams:()=>Xx,sliceInfo:()=>oM,startForAxis:()=>gv,startIndicesWithElidedDims:()=>fv,stopForAxis:()=>xv,stopIndicesWithElidedDims:()=>hv,stridesForAxis:()=>dv,stridesWithElidedDims:()=>cv});var jx=-2,Yz=-1;function Zz(r,e,t){let o=r.shape.length;k(o===e.length,()=>`Error in slice${o}D: Length of begin ${e} must match the rank of the array (${o}).`),k(o===t.length,()=>`Error in slice${o}D: Length of size ${t} must match the rank of the array (${o}).`);for(let n=0;n<o;++n)k(e[n]+t[n]<=r.shape[n],()=>`Error in slice${o}D: begin[${n}] + size[${n}] (${e[n]+t[n]}) would overflow input.shape[${n}] (${r.shape[n]})`)}function Qz(r){let e=[],t=0;for(;r>0;)r&1&&e.push(t),r/=2,t++;return e}function Jz(r,e,t){let o=[];for(let n=0;n<r.length;n++)o[n]=Math.ceil((e[n]-r[n])/t[n]);return o}function cv(r,e,t,o){let n=[...r];for(let s=n.length;s<o.length;s++)n.push(1);for(let s=0;s<t;s++)s===0?n[e]=1:(n.splice(e,0,1),n.pop());return n}function pv(r,e,t){return t<=r?t:t-(e-1)}function mv(r,e){let t=[];for(let o=0;o<r;o++)t.push(e+o);return t}function tM(r,e,t,o,n,s,i,a,l){let u=r.length,c=new Array(u),p=new Array(u),m=new Array(u);if(e.length&&t>0){let f=e[0],h=t+1;c=fv(i,f,h,o,r),p=hv(a,f,h,n,r),m=cv(s,f,h,r)}else for(let f=0;f<u;f++)c[f]=gv(i,o,s,r,f,l),p[f]=xv(a,n,s,r,f,l),m[f]=dv(s,f,l);return{begin:c,end:p,strides:m}}function fv(r,e,t,o,n){let s=[...n],i=mv(t,e);for(let a=0;a<s.length;a++)if(i.indexOf(a)>-1)s[a]=0;else{let l=pv(e,t,a),u=o[l];r&1<<l&&(u=0),s[a]=u}return s}function hv(r,e,t,o,n){let s=[...n],i=mv(t,e);for(let a=0;a<s.length;a++)if(i.indexOf(a)>-1)s[a]=Number.MAX_SAFE_INTEGER;else{let l=pv(e,t,a),u=o[l];r&1<<l&&(u=Number.MAX_SAFE_INTEGER),s[a]=u}for(let a=0;a<s.length;a++){let l=n[a];s[a]<0&&(s[a]+=l),s[a]=ul(0,s[a],n[a])}return s}function dv(r,e,t){let o=r[e];return(t&1<<e||o==null)&&(o=1),o}function gv(r,e,t,o,n,s){let i=e[n],a=t[n]||1;(r&1<<n||s&1<<n||i==null)&&(a>0?i=Number.MIN_SAFE_INTEGER:i=Number.MAX_SAFE_INTEGER);let l=o[n];return i<0&&(i+=l),i=ul(0,i,l-1),i}function xv(r,e,t,o,n,s){let i=e[n],a=t[n]||1;(r&1<<n||s&1<<n||i==null)&&(a>0?i=Number.MAX_SAFE_INTEGER:i=Number.MIN_SAFE_INTEGER);let l=o[n];return i<0&&(i+=l),a>0?i=ul(0,i,l):i=ul(-1,i,l-1),i}function eM(r,e,t){let o=t.length;for(let n=0;n<t.length;n++)if(t[n]>1){o=n;break}for(let n=o+1;n<t.length;n++)if(e[n]>0||t[n]!==r[n])return!1;return!0}function rM(r,e){let t=r.length>0?r[r.length-1]:1;for(let o=0;o<r.length-1;o++)t+=r[o]*e[o];return t}function Xx(r,e,t){let o,n=r.shape.length;typeof e=="number"?o=[e,...new Array(n-1).fill(0)]:e.length<n?o=e.concat(new Array(n-e.length).fill(0)):o=e.slice(),o.forEach(i=>{k(i!==-1,()=>"slice() does not support negative begin indexing.")});let s;return t==null?s=new Array(n).fill(-1):typeof t=="number"?s=[t,...new Array(n-1).fill(-1)]:t.length<n?s=t.concat(new Array(n-t.length).fill(-1)):s=t,s=s.map((i,a)=>i>=0?i:(k(i===-1,()=>`Negative size values should be exactly -1 but got ${i} for the slice() size at index ${a}.`),r.shape[a]-o[a])),[o,s]}function oM(r,e,t,o,n,s,i,a,l){let u;if(o==null?(u=new Array(e.length),u.fill(1)):u=o,i!=null&&(i&i-1)!==0)throw new Error("Multiple ellipses in slice is not allowed.");let c=!1,p={dims:u.length,numAddAxisAfterEllipsis:0,begin:e.slice(),end:t.slice(),strides:u.slice(),beginMask:n,endMask:s,ellipsisMask:i,newAxisMask:a,shrinkAxisMask:l};for(let w=0;w<p.dims;w++)c&&(1<<w&a)!==0&&p.numAddAxisAfterEllipsis++,1<<w&i&&(c=!0);c||(p.ellipsisMask|=1<<p.dims,p.dims++);let m={dims:r.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};nM(p,m);let f=!0,h=!0,g=!0,d=[],x=[];for(let w=0;w<r.length;++w){if(m.strides[w]===0)throw Error(`strides[${w}] must be non-zero`);let C=!!(m.shrinkAxisMask&1<<w),S=r[w];if(S===-1){d.push(C?1:-1);continue}let E=[m.beginMask&1<<w,m.endMask&1<<w],A=[m.strides[w]>0?0:-1,m.strides[w]>0?S:S-1];if(C&&m.strides[w]<=0)throw Error("only stride 1 allowed on non-range indexing.");g=g&&m.strides[w]===1;let $=!!(m.beginMask&1<<w&&m.endMask&1<<w);if(m.beginValid&&m.endValid){if(C){let V=m.begin[w]<0?S+m.begin[w]:m.begin[w];if(m.begin[w]=V,m.end[w]=m.begin[w]+1,V<0||V>=S)throw Error(`slice index ${m.begin[w]} of dimension ${w} out of bounds.`)}else m.begin[w]=uv(m.begin[w],0,m.strides[w],S,E,A),m.end[w]=uv(m.end[w],1,m.strides[w],S,E,A);let M=m.strides[w]===1&&m.begin[w]===0&&m.end[w]===S;f=f&&M,h=h&&(w===0&&m.strides[w]===1||M)}else f=f&&m.strides[w]===1&&$,h=h&&(w===0&&m.strides[w]===1||$);let _,L=!1;if(m.beginValid&&m.endValid?(_=m.end[w]-m.begin[w],L=!0):C?(_=1,L=!0):$&&S>=0&&(m.strides[w]<0?_=-S:_=S,L=!0),L){let M;_===0||_<0!=m.strides[w]<0?M=0:M=Math.trunc(_/m.strides[w])+(_%m.strides[w]!==0?1:0),d.push(M)}else d.push(-1)}for(let w=0;w<m.finalShapeGatherIndices.length;++w){let C=m.finalShapeGatherIndices[w];C>=0?x.push(d[C]):C===jx&&x.push(1)}return{finalShapeSparse:x.filter((w,C)=>m.finalShapeGatherIndices[C]!==jx),finalShape:x,isIdentity:f,sliceDim0:h,isSimpleSlice:g,begin:m.begin,end:m.end,strides:m.strides}}function nM(r,e){e.beginMask=0,e.endMask=0,e.shrinkAxisMask=0;let t=0;e.beginValid=r.begin!=null,e.endValid=r.end!=null,e.begin=new Array(e.dims),e.end=new Array(e.dims),e.strides=new Array(e.dims),e.finalShapeGatherIndices=[],e.finalShapeGatherIndicesSparse=[],e.inputShapeGatherIndicesSparse=new Array(e.dims);for(let o=0;o<r.dims;o++)if(1<<o&r.ellipsisMask){let n=Math.min(e.dims-(r.dims-o)+1+r.numAddAxisAfterEllipsis,e.dims);for(;t<n;t++)e.begin[t]=0,e.end[t]=0,e.strides[t]=1,e.beginMask|=1<<t,e.endMask|=1<<t,e.finalShapeGatherIndices.push(t),e.finalShapeGatherIndicesSparse.push(-1),e.inputShapeGatherIndicesSparse[t]=o}else if(1<<o&r.newAxisMask)e.finalShapeGatherIndices.push(jx),e.finalShapeGatherIndicesSparse.push(-1);else{if(t===e.begin.length)throw Error(`Index out of range using input dim ${t}; input has only ${e.dims} dims, ${e.begin.length}.`);r.begin!=null&&(e.begin[t]=r.begin[o]),r.end!=null&&(e.end[t]=r.end[o]),e.strides[t]=r.strides[o],r.beginMask&1<<o&&(e.beginMask|=1<<t),r.endMask&1<<o&&(e.endMask|=1<<t),r.shrinkAxisMask&1<<o?(e.finalShapeGatherIndices.push(Yz),e.finalShapeGatherIndicesSparse.push(-1),e.shrinkAxisMask|=1<<t):(e.finalShapeGatherIndices.push(t),e.finalShapeGatherIndicesSparse.push(o)),e.inputShapeGatherIndicesSparse[t]=o,t++}}function uv(r,e,t,o,n,s){if(n[e])return t>0?s[e]:s[e+1&1];{let i=r<0?o+r:r;return i<s[0]?s[0]:i>s[1]?s[1]:i}}var Zm=class{static sgd(e){return new Bi(e)}static momentum(e,t,o=!1){return new Au(e,t,o)}static rmsprop(e,t=.9,o=0,n=null,s=!1){return new $u(e,t,o,n,s)}static adam(e=.001,t=.9,o=.999,n=null){return new ku(e,t,o,n)}static adadelta(e=.001,t=.95,o=null){return new Iu(e,t,o)}static adamax(e=.002,t=.9,o=.999,n=null,s=0){return new Eu(e,t,o,n,s)}static adagrad(e,t=.1){return new Tu(e,t)}};var Jo=Zm;var sM=typeof requestAnimationFrame<"u"?requestAnimationFrame:typeof setImmediate<"u"?setImmediate:r=>r();function op(){return new Promise(r=>sM(()=>r()))}var v={};to(v,{ERF_A1:()=>wM,ERF_A2:()=>CM,ERF_A3:()=>SM,ERF_A4:()=>vM,ERF_A5:()=>NM,ERF_P:()=>bM,PARALLELIZE_THRESHOLD:()=>Qm,RowPartitionType:()=>gs,SELU_SCALE:()=>Zx,SELU_SCALEALPHA:()=>Yx,applyActivation:()=>Ba,assertAndGetBroadcastShape:()=>Nt,assertAxesAreInnerMostDims:()=>hL,assertParamsConsistent:()=>iM,assignToTypedArray:()=>$M,axesAreInnerMostDims:()=>fx,calculateShapes:()=>tz,checkEinsumDimSizes:()=>LM,checkPadOnDimRoundingMode:()=>Zt,combineLocations:()=>ZC,combineRaggedTensorToTensorShapes:()=>lM,complexWithEvenIndex:()=>kM,complexWithOddIndex:()=>EM,computeConv2DInfo:()=>Ia,computeConv3DInfo:()=>GC,computeDefaultPad:()=>ex,computeDilation2DInfo:()=>yO,computeOptimalWindowSize:()=>mM,computeOutAndReduceShapes:()=>hx,computeOutShape:()=>aM,computePool2DInfo:()=>tx,computePool3DInfo:()=>bO,convertConv2DDataFormat:()=>WC,decodeEinsumEquation:()=>_M,eitherStridesOrDilationsAreOne:()=>He,expandShapeToKeepDim:()=>Yo,exponent:()=>RM,exponents:()=>DM,fromStringArrayToUint8:()=>o3,fromUint8ToStringArray:()=>r3,getAxesPermutation:()=>dx,getBroadcastDims:()=>jC,getComplexWithIndex:()=>AM,getEinsumComputePath:()=>PM,getEinsumPermutation:()=>OM,getFusedBiasGradient:()=>Ma,getFusedDyActivation:()=>za,getImageCenter:()=>fM,getInnerMostAxes:()=>dL,getPermuted:()=>dM,getRaggedRank:()=>cM,getReductionAxes:()=>Kt,getReshaped:()=>hM,getReshapedPermuted:()=>gM,getRowPartitionTypesHelper:()=>uM,getSliceBeginCoords:()=>xM,getSliceSize:()=>yM,getSparseFillEmptyRowsIndicesDenseShapeMismatch:()=>VM,getSparseFillEmptyRowsNegativeIndexErrorMessage:()=>GM,getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:()=>WM,getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:()=>qM,getSparseReshapeInputOutputMismatchErrorMessage:()=>jM,getSparseReshapeInputOutputMultipleErrorMessage:()=>KM,getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:()=>UM,getSparseReshapeNegativeOutputDimErrorMessage:()=>HM,getSparseSegmentReductionIndicesOutOfRangeErrorMessage:()=>QM,getSparseSegmentReductionNegativeSegmentIdsErrorMessage:()=>XM,getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:()=>YM,getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:()=>ZM,getUndoAxesPermutation:()=>Bc,isIdentityPermutation:()=>zM,log:()=>u_,mergeRealAndImagArrays:()=>IM,prepareAndValidate:()=>Xz,prepareSplitSize:()=>BM,segment_util:()=>Jx,shouldFuse:()=>Va,slice_util:()=>ze,splitRealAndImagArrays:()=>TM,stridesOrDilationsArePositive:()=>Xo,tupleValuesAreOne:()=>qr,upcastType:()=>Te,validateDefaultValueShape:()=>pM,validateInput:()=>JP,validateUpdateShape:()=>vS,warn:()=>Ko});function iM(r,e){let t=r[0].length;r.forEach((n,s)=>{k(n.length===t,()=>`Error in concat${t}D: rank of tensors[${s}] must be the same as the rank of the rest (${t})`)}),k(e>=0&&e<t,()=>`Error in concat${t}D: axis must be between 0 and ${t-1}.`);let o=r[0];r.forEach((n,s)=>{for(let i=0;i<t;i++)k(i===e||n[i]===o[i],()=>`Error in concat${t}D: Shape of tensors[${s}] (${n}) does not match the shape of the rest (${o}) along the non-concatenated axis ${s}.`)})}function aM(r,e){let t=r[0].slice();for(let o=1;o<r.length;o++)t[e]+=r[o][e];return t}var gs=function(r){return r[r.FIRST_DIM_SIZE=0]="FIRST_DIM_SIZE",r[r.VALUE_ROWIDS=1]="VALUE_ROWIDS",r[r.ROW_LENGTHS=2]="ROW_LENGTHS",r[r.ROW_SPLITS=3]="ROW_SPLITS",r[r.ROW_LIMITS=4]="ROW_LIMITS",r[r.ROW_STARTS=5]="ROW_STARTS",r}(gs||{});function lM(r,e,t){let o=new Array;if(t==null&&e==null)return o;if(e==null)for(;o.length<r+t.length;)o.push(-1);else o=e.slice();if(t==null)return o;if(r+t.length!==o.length)throw new Error(`rt input.shape and shape=${e} are incompatible: rt input.rank = ${r+t.length}, but shape.rank = ${o.length}`);for(let n=1;n<t.length;++n){let s=t[n],i=o[o.length-t.length+n],a=o[i];if(s>=0)if(a>=0){if(a!==s)throw new Error(`rt input.shape and shape=${e} are incompatible: rt input.shape[${n+r}] = ${s} but shape[${n+r}] = ${a}`)}else o[i]=s}return o}function uM(r){let e={FIRST_DIM_SIZE:gs.FIRST_DIM_SIZE,VALUE_ROWIDS:gs.VALUE_ROWIDS,ROW_LENGTHS:gs.ROW_LENGTHS,ROW_SPLITS:gs.ROW_SPLITS,ROW_LIMITS:gs.ROW_LIMITS,ROW_STARTS:gs.ROW_STARTS},t=[];for(let o of r)if(o in e)t.push(e[o]);else break;return t}function cM(r){return r.length===0?0:r[0]===gs.FIRST_DIM_SIZE?r.length-1:r.length}function pM(r,e){if(r==null||e==null)return;let t=r.length,o=e.length;if(t>=o)throw new Error(`defaultValue.shape=${r} and ragged tensor flatValues.shape=${e}, are incompatible: defaultValue.rank = ${t} must be less than ragged tensor input flatValues.rank = ${o})`);for(let n=0;n<Math.min(t,o-1);++n){let s=r[n],i=e[n+1];if(s>=0&&i>=0&&s!==1&&s!==i)throw new Error(`defaultValue.shape=${r}, and ragged tensor input flatValues.shape=${e} are incompatible: defaultValue.shape[${n-r.length}] = ${s} but ragged tensor input.flatValues.shape[${n-r.length}] = ${i}`)}}var Qm=30;function mM(r){return r<=Qm?r:fl(r,Math.floor(Math.sqrt(r)))}function fM(r,e,t){let o=t*(typeof r=="number"?r:r[0]),n=e*(typeof r=="number"?r:r[1]);return[o,n]}function hM(r,e,t,o=!0){let n=[];if(o)n=n.concat(e.slice(0)),n.push(r[0]/t),n=n.concat(r.slice(1));else{n=n.concat(r[0]);let s=e.length;for(let i=0;i<s;++i)n=n.concat([r[i+1]/e[i],e[i]]);n=n.concat(r.slice(s+1))}return n}function dM(r,e,t=!0){let o=[];if(t){o.push(e);for(let n=e+1;n<r;++n)n<=2*e?(o.push(n),o.push(n-(e+1))):o.push(n)}else{let n=[],s=[];for(let i=1;i<r;++i)i>=e*2+1||i%2===1?s.push(i):n.push(i);o.push(...n),o.push(0),o.push(...s)}return o}function gM(r,e,t,o=!0){let n=[];o?n.push(r[0]/t):n.push(r[0]*t);for(let s=1;s<r.length;++s)s<=e.length?o?n.push(e[s-1]*r[s]):n.push(r[s]/e[s-1]):n.push(r[s]);return n}function xM(r,e){let t=[0];for(let o=0;o<e;++o)t.push(r[o][0]);return t}function yM(r,e,t){let o=r.slice(0,1);for(let n=0;n<t;++n)o.push(r[n+1]-e[n][0]-e[n][1]);return o}var Yx=1.7580993408473768,Zx=1.0507009873554805;var bM=.3275911,wM=.254829592,CM=-.284496736,SM=1.421413741,vM=-1.453152027,NM=1.061405429;function IM(r,e){if(r.length!==e.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${r.length}, imag: ${e.length}.`);let t=new Float32Array(r.length*2);for(let o=0;o<t.length;o+=2)t[o]=r[o/2],t[o+1]=e[o/2];return t}function TM(r){let e=new Float32Array(r.length/2),t=new Float32Array(r.length/2);for(let o=0;o<r.length;o+=2)e[o/2]=r[o],t[o/2]=r[o+1];return{real:e,imag:t}}function kM(r){let e=Math.ceil(r.length/4),t=new Float32Array(e),o=new Float32Array(e);for(let n=0;n<r.length;n+=4)t[Math.floor(n/4)]=r[n],o[Math.floor(n/4)]=r[n+1];return{real:t,imag:o}}function EM(r){let e=Math.floor(r.length/4),t=new Float32Array(e),o=new Float32Array(e);for(let n=2;n<r.length;n+=4)t[Math.floor(n/4)]=r[n],o[Math.floor(n/4)]=r[n+1];return{real:t,imag:o}}function AM(r,e){let t=r[e*2],o=r[e*2+1];return{real:t,imag:o}}function $M(r,e,t,o){r[o*2]=e,r[o*2+1]=t}function DM(r,e){let t=new Float32Array(r/2),o=new Float32Array(r/2);for(let n=0;n<Math.ceil(r/2);n++){let s=(e?2:-2)*Math.PI*(n/r);t[n]=Math.cos(s),o[n]=Math.sin(s)}return{real:t,imag:o}}function RM(r,e,t){let o=(t?2:-2)*Math.PI*(r/e),n=Math.cos(o),s=Math.sin(o);return{real:n,imag:s}}var Qx="->",FM=/->/g,yv=",",bv="...";function _M(r,e){r=r.replace(/\s/g,"");let t=(r.length-r.replace(FM,"").length)/Qx.length;if(t<1)throw new Error("Equations without an arrow are not supported.");if(t>1)throw new Error(`Equation must contain exactly one arrow ("${Qx}").`);let[o,n]=r.split(Qx);k(o.indexOf(bv)===-1,()=>`The ellipsis notation ("${bv}") is not supported yet.`);let s=o.split(yv),i=s.length;if(e!==i)throw new Error(`Expected ${i} input tensors, received ${e}`);if(i>2)throw new Error("Support for more than 2 input tensors is not implemented yet.");let a=[];for(let m=0;m<n.length;++m){let f=n[m];if(!s.some(h=>h.indexOf(f)!==-1))throw new Error(`Output subscripts contain the label ${f} not present in the input subscripts.`);a.indexOf(f)===-1&&a.push(f)}for(let m=0;m<o.length;++m){let f=o[m];a.indexOf(f)===-1&&f!==yv&&a.push(f)}let l=new Array(s.length);for(let m=0;m<i;++m){if(new Set(s[m].split("")).size!==s[m].length)throw new Error(`Found duplicate axes in input component ${s[m]}. Support for duplicate axes in input is not implemented yet.`);l[m]=[];for(let f=0;f<s[m].length;++f)l[m].push(a.indexOf(s[m][f]))}let u=a.length,c=n.length,p=[];for(let m=c;m<u;++m)p.push(m);return{allDims:a,summedDims:p,idDims:l}}function OM(r,e){let t=new Array(r);t.fill(-1);for(let n=0;n<e.length;++n)t[e[n]]=n;let o=[];for(let n=0;n<r;++n)t[n]===-1&&o.push(n);return t=t.filter(n=>n!==-1),{permutationIndices:t,expandDims:o}}function LM(r,e,t){let o=new Array(r);for(let n=0;n<t.length;++n){let s=t[n].shape;for(let i=0;i<e[n].length;++i)o[e[n][i]]===void 0?o[e[n][i]]=s[i]:k(o[e[n][i]]===s[i],()=>`Expected dimension ${o[e[n][i]]} at axis ${i} of input shaped ${JSON.stringify(s)}, but got dimension ${s[i]}`)}}function PM(r,e){let t=r,o=[],n=0;r.length===0&&t.push(-1),n=r.length+1;for(let i=0;i<n;++i)o.push([]);let s=[];for(let i=0;i<t.length;++i){let a=t[i],l=MM(e,a);for(let u of l)s.indexOf(u)===-1&&(o[i].push(u),s.push(u))}return{path:t,steps:o}}function zM(r){return r.every((e,t)=>e===t)}function MM(r,e){let t=[];for(let o=0;o<r.length;++o)(r[o].length===0||r[o].indexOf(e)!==-1||e===-1)&&t.push(o);return t}function BM(r,e,t=0){let o=[];if(typeof e=="number")k(r.shape[t]%e===0,()=>"Number of splits must evenly divide the axis."),o=new Array(e).fill(r.shape[t]/e);else{let n=e.reduce((i,a)=>(a===-1&&(i+=1),i),0);k(n<=1,()=>"There should be only one negative value in split array.");let s=e.indexOf(-1);if(s!==-1){let i=e.reduce((a,l)=>l>0?a+l:a);e[s]=r.shape[t]-i}k(r.shape[t]===e.reduce((i,a)=>i+a),()=>"The sum of sizes must match the size of the axis dimension."),o=e}return o}function VM(r){return`Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${r}`}function GM(r,e){return`indices(${r}, 0) is invalid: ${e} < 0`}function WM(r,e,t){return`indices(${r}, 0) is invalid: ${e} >= ${t}`}function UM(r,e){return`only one output dimension may be -1, not both ${r} and ${e}`}function HM(r,e){return`size ${r} must be non-negative, not ${e}`}function qM(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function KM(r,e){let t=zt(r),o=zt(e);return`Input to reshape is a SparseTensor with ${t}
  dense values, but the requested shape requires a multiple of ${o}. inputShape=${r} outputShape= ${e}`}function jM(r,e){let t=zt(r),o=zt(e);return`Input to reshape is a tensor with ${t} dense values, but the requested shape has ${o}. inputShape=${r} outputShape=${e}`}function XM(){return"segment ids must be >= 0"}function YM(){return"segment ids are not increasing"}function ZM(r,e){return`Segment id ${r} out of range [0, ${e}), possibly because segmentIds input is not sorted.`}function QM(r,e,t){return`Bad: indices[${r}] == ${e} out of range [0, ${t})`}var Jx={};to(Jx,{collectGatherOpShapeInfo:()=>e3,computeOutShape:()=>t3,segOpComputeOptimalWindowSize:()=>JM});function JM(r,e){let t=!1,o;for(r<=Qm?(o=r,t=!0):o=fl(r,Math.floor(Math.sqrt(r)));!t;)o>e||o===r?t=!0:o=fl(r,o+1);return o}function t3(r,e,t){let o=[],n=r.length;for(let s=0;s<n;s++)s!==e?o.push(r[s]):o.push(t);return o}function e3(r,e,t,o){let n=e.shape.length,s=r.shape.length;if(o!==0&&(o<-n||o>n))throw new Error(`Expect batchDims in the range of [-${n}, ${n}], but got ${o}`);if(o<0&&(o+=n),o>s)throw new Error(`batchDims (${o}) must be less than rank(x) (
    ${s}).`);if(t<o)throw new Error(`batchDims (${o}) must be less than or equal to axis (${t}).`);for(let p=0;p<o;++p)if(r.shape[p]!==e.shape[p])throw new Error(`x.shape[${p}]: ${r.shape[p]} should be equal to indices.shape[${p}]: ${e.shape[p]}.`);let i=r.shape[t],a=[],l=1,u=1,c=1;for(let p=0;p<o;++p)a.push(r.shape[p]),l*=r.shape[p];for(let p=o;p<t;p++)a.push(r.shape[p]),u*=r.shape[p];for(let p=o;p<n;p++)a.push(e.shape[p]);for(let p=t+1;p<s;p++)a.push(r.shape[p]),c*=r.shape[p];return{batchSize:l,sliceSize:c,outerSize:u,dimSize:i,outputShape:a}}function r3(r){try{return r.map(e=>nu(e))}catch(e){throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${e}`)}}function o3(r){return r.map(e=>ou(e))}var tr={};to(tr,{nonMaxSuppressionV3Impl:()=>Gm,nonMaxSuppressionV4Impl:()=>Wm,nonMaxSuppressionV5Impl:()=>Um,whereImpl:()=>TS});QS();var Jm={kernelName:zs,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>R(r,Do(Y(t,"float32"),-1))}}};var wv={kernelName:hn,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>{let o=At(Y(t,"float32")),n=jt(lt(xt(1),o));return Lt(ot(r,n))}}}};var Cv={kernelName:dn,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>{let o=jt(lt(At(Y(t,"float32")),1));return ot(r,o)}}}};var Sv={kernelName:Io,inputsToSave:["a","b"],gradFunc:(r,e)=>{let[t,o]=e,n=Nt(t.shape,o.shape);return{a:()=>{let a=r,l=Kt(t.shape,n);return l.length>0&&(a=it(a,l)),F(a,t.shape)},b:()=>{let a=r,l=Kt(o.shape,n);return l.length>0&&(a=it(a,l)),F(a,o.shape)}}}};var vv={kernelName:dl,saveAllInputs:!0,gradFunc:(r,e)=>{let t={};return e.forEach((o,n)=>{t[n]=()=>r.clone()}),t}};var Nv={kernelName:Ms,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>ht(t)}}};var Iv={kernelName:Bs,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>ht(t)}}};var Tv={kernelName:gn,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>ot(r,jt(lt(xt(1),At(Y(t,"float32")))))}}};var kv={kernelName:xn,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>{let o=jt(j(xt(1),At(Y(t,"float32"))));return ot(r,o)}}}};var Ev={kernelName:wn,inputsToSave:["a","b"],gradFunc:(r,e)=>{let[t,o]=e,n=Nt(t.shape,o.shape);return{a:()=>{let a=j(At(t),At(o)),l=R(r,ot(o,a)),u=Kt(t.shape,n);return u.length>0&&(l=it(l,u)),F(l,t.shape)},b:()=>{let a=j(At(t),At(o)),l=Lt(R(r,ot(t,a))),u=Kt(o.shape,n);return u.length>0&&(l=it(l,u)),F(l,o.shape)}}}};var Av={kernelName:yn,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>ot(r,j(At(Y(t,"float32")),1))}}};var $v={kernelName:bn,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>ot(r,lt(xt(1),At(Y(t,"float32"))))}}};function n3(r,e,t,o,n,s){let i=N(r,"dy","avgPool3dGrad"),a=N(e,"input","avgPool3dGrad"),l=i,u=a,c=!1;a.rank===4&&(c=!0,l=F(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]]),u=F(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]])),k(l.rank===5,()=>`Error in avgPool3dGrad: dy must be rank 5 but got rank ${l.rank}.`),k(u.rank===5,()=>`Error in avgPool3dGrad: input must be rank 5 but got rank ${u.rank}.`),Zt("avgPool3dGrad",n,s);let p={dy:l,input:u},m={filterSize:t,strides:o,pad:n,dimRoundingMode:s},f=I.runKernel(bl,p,m);return c?F(f,[f.shape[1],f.shape[2],f.shape[3],f.shape[4]]):f}var Dv=T({avgPool3dGrad_:n3});var Rv={kernelName:Gs,inputsToSave:["x"],gradFunc:(r,e,t)=>{let[o]=e,{filterSize:n,strides:s,pad:i,dimRoundingMode:a}=t;return{x:()=>Dv(r,o,n,s,i,a)}}};function s3(r,e,t,o,n){let s=N(r,"dy","avgPoolGrad"),i=N(e,"input","avgPoolGrad");k(i.rank===s.rank,()=>`Rank of input (${i.rank}) does not match rank of dy (${s.rank})`);let a=i,l=s,u=!1;i.rank===3&&(u=!0,a=F(i,[1,i.shape[0],i.shape[1],i.shape[2]]),l=F(s,[1,s.shape[0],s.shape[1],s.shape[2]])),k(l.rank===4,()=>`Error in avgPoolGrad: dy must be rank 4 but got rank ${l.rank}.`),k(a.rank===4,()=>`Error in avgPoolGrad: input must be rank 4 but got rank ${a.rank}.`);let c={dy:l,input:a},p={filterSize:t,strides:o,pad:n},m=I.runKernel(yl,c,p);return u?F(m,[m.shape[1],m.shape[2],m.shape[3]]):m}var Fv=T({avgPoolGrad_:s3});var _v={kernelName:Vs,inputsToSave:["x"],gradFunc:(r,e,t)=>{let[o]=e,{filterSize:n,strides:s,pad:i}=t;return{x:()=>Fv(r,o,n,s,i)}}};var Ov={kernelName:Ws,inputsToSave:["a","b"],gradFunc:(r,e,t)=>{let[o,n]=e,{transposeA:s,transposeB:i}=t;return!s&&!i?{a:()=>Mt(r,n,!1,!0),b:()=>Mt(o,r,!0,!1)}:!s&&i?{a:()=>Mt(r,n,!1,!1),b:()=>Mt(r,o,!0,!1)}:s&&!i?{a:()=>Mt(n,r,!1,!0),b:()=>Mt(o,r,!1,!1)}:{a:()=>Mt(n,r,!0,!0),b:()=>Mt(r,o,!0,!0)}}};var Lv={kernelName:Us,gradFunc:(r,e,t)=>{let{blockShape:o,crops:n}=t;return{x:()=>wu(r,o,n)}}};var Pv={kernelName:D0,gradFunc:(r,e,t)=>{let o=t,n=o.inputShape,s=o.shape,i=Array.from(s);for(let l=n.length-1;l>=0;l--)if(n[l]===s[l])i[l]=1;else if(n[l]!==1)throw new Error(`broadcastTo(): [${n}] cannot be broadcast to [${s}].`);let a=[];for(let l=0;l<i.length;l++)i[l]>1&&a.push(l);return{x:()=>it(r,a,!0)}}};var zv={kernelName:Wo,gradFunc:r=>({x:()=>r.clone()})};var Mv={kernelName:Cn,gradFunc:r=>({x:()=>ht(r)})};var Bv={kernelName:Sn,inputsToSave:["x"],gradFunc:(r,e,t)=>{let[o]=e,{clipValueMin:n,clipValueMax:s}=t;return{x:()=>ee(nr(Cr(o,n),io(o,s)),r,ht(r))}}};var Vv={kernelName:Hs,inputsToSave:["x"],gradFunc:Jm.gradFunc};var Gv={kernelName:qs,saveAllInputs:!0,gradFunc:(r,e,t)=>{let o=e.map(l=>l.shape),{axis:n}=t,s=Ae(n,e[0].shape)[0],i=o.map(l=>l[s]);return Re(r,i,s).map(l=>()=>l)}};var Wv={kernelName:Ks,inputsToSave:["x","filter"],gradFunc:(r,e,t)=>{let[o,n]=e,{dilations:s,strides:i,pad:a,dataFormat:l}=t;return k(qr(s),()=>`Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${s}'`),{x:()=>fu(o.shape,r,n,i,a,l),filter:()=>Nu(o,r,n.shape,i,a,l)}}};var Uv={kernelName:js,inputsToSave:["dy","filter"],gradFunc:(r,e,t)=>{let[o,n]=e,{strides:s,pad:i,dataFormat:a,dimRoundingMode:l}=t;return{dy:()=>Fr(r,n,s,i,a,1,l),filter:()=>Nu(r,o,n.shape,s,i,a,l)}}};function i3(r,e,t,o,n){let s=r;r.rank===4&&(s=F(r,[1,r.shape[0],r.shape[1],r.shape[2],r.shape[3]]));let i=e;i.rank===4&&(i=F(e,[1,e.shape[0],e.shape[1],e.shape[2],e.shape[3]])),k(s.rank===5,()=>`Error in conv3dDerFilter: input must be rank 5, but got shape ${s.shape}.`),k(i.rank===5,()=>`Error in conv3dDerFilter: dy must be rank 5, but got shape ${i.shape}.`),k(t.length===5,()=>`Error in conv3dDerFilter: filterShape must be length 5, but got ${t}.`),k(s.shape[4]===t[3],()=>`Error in conv3dDerFilter: depth of input ${s.shape[4]}) must match input depth in filter (${t[3]}.`),k(i.shape[4]===t[4],()=>`Error in conv3dDerFilter: depth of dy (${i.shape[4]}) must match output depth for filter (${t[4]}).`);let a={x:s,dy:i},l={strides:o,pad:n,filterShape:t};return I.runKernel(vl,a,l)}var Hv=T({conv3DBackpropFilter_:i3});var qv={kernelName:Xs,inputsToSave:["x","filter"],gradFunc:(r,e,t)=>{let{dilations:o,strides:n,pad:s}=t;k(qr(o),()=>`Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${o}'`);let[i,a]=e;return{x:()=>$m(i.shape,r,a,n,s),filter:()=>Hv(i,r,a.shape,n,s)}}};var Kv={kernelName:vn,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>R(Lt(Xc(Y(t,"float32"))),r)}}};var jv={kernelName:Nn,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>R(Yc(Y(t,"float32")),r)}}};var Xv={kernelName:Ys,inputsToSave:["x"],gradFunc:(r,e,t)=>{let[o]=e,{axis:n,exclusive:s,reverse:i}=t;return{x:()=>{let a=dx([n],o.rank),l=Dm(r,n,s,!i);return a!=null&&(l=Et(l,a)),l}}}};var Yv={kernelName:Zs,inputsToSave:["x","filter"],gradFunc:(r,e,t)=>{let{dilations:o,strides:n,pad:s,dimRoundingMode:i}=t,a=o??[1,1];k(qr(a),()=>`Error in gradient of depthwiseConv2dNative: dilation rates greater than 1 are not yet supported. Got dilations '${a}'`);let[l,u]=e;return k(l.rank===4,()=>`Error in gradient of depthwiseConv2dNative: input must be rank 4, but got rank ${l.rank}.`),k(u.rank===4,()=>`Error in gradient of depthwiseConv2dNative: filter must be rank 4, but got rank ${u.rank}.`),k(l.shape[3]===u.shape[2],()=>`Error in gradient of depthwiseConv2d: number of input channels (${l.shape[3]}) must match the inChannels dimension in filter ${u.shape[2]}.`),k(He(n,a),()=>`Error in gradient of depthwiseConv2d: Either strides or dilations must be  1. Got strides ${n} and dilations '${a}'.`),Zt("depthwiseConv2d",s,i),{x:()=>Vm(l.shape,r,u,n,s,a,i),filter:()=>Bm(l,r,u.shape,n,s,a,i)}}};var Zv={kernelName:Qs,inputsToSave:["x","filter"],gradFunc:(r,e,t)=>{let[o,n]=e,s={x:o,filter:n,dy:r},i={x:o,filter:n,dy:r};return{x:()=>I.runKernel(vc,s,t),filter:()=>I.runKernel(Nc,i,t)}}};var Qv={kernelName:Tn,outputsToSave:[!0],gradFunc:(r,e)=>{let[t]=e,o={dy:r,y:t};return{x:()=>I.runKernel(Rl,o)}}};var Jv={kernelName:kn,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e,o=R(Le(Lt(At(t))),2/Math.sqrt(Math.PI));return{x:()=>R(r,o)}}};var tN={kernelName:En,outputsToSave:[!0],gradFunc:(r,e)=>{let[t]=e;return{x:()=>R(r,t)}}};var eN={kernelName:Js,inputsToSave:["input"],gradFunc:(r,e)=>{let[t]=e;return{input:()=>F(r,t.shape)}}};var rN={kernelName:An,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>R(r,Le(t))}}};var oN={kernelName:$n,gradFunc:r=>({x:()=>ht(r)})};var nN={kernelName:Dn,inputsToSave:["a","b"],gradFunc:(r,e)=>{let[t,o]=e,n=Nt(t.shape,o.shape);return{a:()=>{let a=ot(r,Y(o,"float32")),l=Kt(t.shape,n);return l.length>0?F(it(a,l),t.shape):a},b:()=>{let a=R(r,Y(t,"float32")),l=Kt(o.shape,n);l.length>0&&(a=F(it(a,l),o.shape));let u=At(o);return Lt(ot(a,Y(u,"float32")))}}}};var sN={kernelName:ti,inputsToSave:["x","mean","variance","scale"],gradFunc:(r,e,t)=>{let{varianceEpsilon:o}=t,[n,s,i,a]=e,l=a??xt(1),u=Kt(s.shape,n.shape),c=[];if(s.rank===1){for(let C=0;C<n.shape.length-1;++C)c.push(n.shape[C]);c.push(1)}let p=lt(n,s),m=R(r,l),f=qc(j(i,xt(o))),h=R(R(R(f,f),f),xt(-.5));return{x:()=>s.rank===1?F(R(R(r,Qe(F(f,[1,1,1,s.shape[0]]),c)),l),n.shape):F(R(R(r,f),l),n.shape),mean:()=>{let C=R(R(f,xt(-1)),m);return s.rank===1&&(C=it(C,u)),F(C,s.shape)},variance:()=>{let C=R(R(h,p),m);return s.rank===1&&(C=it(C,u)),F(C,s.shape)},scale:()=>{let C=R(p,f),S=R(r,C);return s.rank===1&&(S=it(S,u)),F(S,s.shape)},offset:()=>{let C=r;return s.rank===1&&(C=it(C,u)),F(C,s.shape)}}}};var lN={kernelName:ei,inputsToSave:["x","indices"],gradFunc:(r,e,t)=>{let[o,n]=e,{axis:s,batchDims:i}=t,a=Ae(s,o.shape)[0],l=(u,c,p)=>()=>{let m=u.shape,f=c.size,h=m.slice(0,a),g=h.length,d=m.slice(s,m.length).slice(1),x=d.length,y=iN(0,g),w=iN(g+1,g+1+x),C=aN([h,[f],d]),S=F(p,C),E=F(c,[f]),A=aN([[g],y,w]),$=Et(S,A),_=Mm($,E,u.shape[a]),L=Bc(A);return _=Et(_,L),_};if(i===1){let u=o.shape[0],c=o.split(u,0);return{x:()=>$e(c.map((f,h)=>l(f,n.slice(h,1),r.slice(h,1))())).reshape(o.shape),indices:()=>n}}else return{x:l(o,n,r),indices:()=>n}}};function iN(r,e){let t=[];for(let o=r;o<e;++o)t.push(o);return t}function aN(r){let e=[];for(let t=0;t<r.length;++t)for(let o=0;o<r[t].length;++o)e.push(r[t][o]);return e}var uN={kernelName:Rn,inputsToSave:["a","b"],gradFunc:(r,e)=>{let[t,o]=e;return{a:()=>ht(t),b:()=>ht(o)}}};var cN={kernelName:Uo,gradFunc:r=>({x:()=>Y(r,"float32")})};var pN={kernelName:Fn,gradFunc:r=>({x:()=>ht(r)})};var mN={kernelName:_n,gradFunc:r=>({x:()=>ht(r)})};var fN={kernelName:On,gradFunc:r=>({x:()=>ht(r)})};var hN={kernelName:ri,inputsToSave:["x"],gradFunc:(r,e,t)=>{let[o]=e,{alpha:n}=t,s=ge(o,0);return{x:()=>ee(s,r,R(r,n))}}};var dN={kernelName:Pn,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>ot(r,j(t,1))}}};var gN={kernelName:Ln,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>ot(r,Y(t,"float32"))}}};var xN={kernelName:F0,inputsToSave:[],outputsToSave:[!0],gradFunc:(r,e,t)=>{let[o]=e,{axis:n}=t;return{logits:()=>{let i=Le(o);return lt(r,R(it(r,n,!0),i))}}}};function a3(r,e,t,o=5,n=1,s=1,i=.5){let a={x:r,y:e,dy:t},l={depthRadius:o,bias:n,alpha:s,beta:i};return I.runKernel(zl,a,l)}var yN=T({localResponseNormalizationBackprop_:a3});var bN={kernelName:oi,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(r,e,t)=>{let[o,n]=e,{depthRadius:s,bias:i,alpha:a,beta:l}=t;return{x:()=>yN(o,n,r,s,i,a,l)}}};function tf(r,e,t,o){return e.rank<t.rank&&(e=F(e,Yo(e.shape,o))),r.rank<t.rank&&(r=F(r,Yo(r.shape,o))),{x:()=>R(r,Y(cr(t,e),r.dtype))}}var ty={kernelName:ni,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(r,e,t)=>{let o=t,{reductionIndices:n}=o,s=e[0],i=e[1],a=Ae(n,s.shape),l=tf(r,i,s,a);return{x:()=>l.x()}}};var wN={kernelName:zn,inputsToSave:["a","b"],gradFunc:(r,e)=>{let[t,o]=e;return{a:()=>R(r,Y(Cr(t,o),"float32")),b:()=>R(r,Y(Da(t,o),"float32"))}}};function l3(r,e,t,o,n,s,i){let a=N(r,"dy","maxPool3dGrad"),l=N(e,"input","maxPool3dGrad"),u=N(t,"output","maxPool3dGrad"),c=a,p=l,m=u,f=!1;l.rank===4&&(f=!0,c=F(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]]),p=F(l,[1,l.shape[0],l.shape[1],l.shape[2],l.shape[3]]),m=F(u,[1,u.shape[0],u.shape[1],u.shape[2],u.shape[3]])),k(c.rank===5,()=>`Error in maxPool3dGrad: dy must be rank 5 but got rank ${c.rank}.`),k(p.rank===5,()=>`Error in maxPool3dGrad: input must be rank 5 but got rank ${p.rank}.`),k(m.rank===5,()=>`Error in maxPool3dGrad: output must be rank 5 but got rank ${m.rank}.`),Zt("maxPool3dGrad",s,i);let h={dy:c,input:p,output:m},g={filterSize:o,strides:n,pad:s,dimRoundingMode:i},d=I.runKernel(Bl,h,g);return f?F(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}var CN=T({maxPool3dGrad_:l3});var SN={kernelName:ii,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(r,e,t)=>{let[o,n]=e,{filterSize:s,strides:i,pad:a,dimRoundingMode:l}=t;return{x:()=>CN(r,o,n,s,i,a,l)}}};function u3(r,e,t,o,n,s,i){let a=N(r,"dy","maxPoolGrad"),l=N(e,"input","maxPoolGrad"),u=N(t,"output","maxPoolGrad");k(l.rank===a.rank,()=>`Rank of input (${l.rank}) does not match rank of dy (${a.rank})`),k(a.rank===4,()=>`Error in maxPoolGrad: dy must be rank 4 but got rank ${a.rank}.`),k(l.rank===4,()=>`Error in maxPoolGrad: input must be rank 4 but got rank ${l.rank}.`),Zt("maxPoolGrad",s,i);let c={dy:a,input:l,output:u},p={filterSize:o,strides:n,pad:s,dimRoundingMode:i};return I.runKernel(Ml,c,p)}var vN=T({maxPoolGrad_:u3});var NN={kernelName:si,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(r,e,t)=>{let[o,n]=e,{filterSize:s,strides:i,pad:a}=t;return{x:()=>vN(r,o,n,s,i,a)}}};var IN={kernelName:ai,inputsToSave:["x"],gradFunc:(r,e,t)=>{let[o]=e,{axis:n}=t,s=Ae(n,o.shape),a=hx(o.shape,s)[1],l=zt(a);return{x:()=>{let c=o.shape.slice();s.forEach(f=>{c[f]=1});let p=F(r,c);return ot(R(p,mr(o.shape,"float32")),l)}}}};var TN={kernelName:li,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(r,e,t)=>{let o=t,{axis:n}=o,[s,i]=e,a=Ae(n,s.shape),l=tf(r,i,s,a);return{x:()=>l.x()}}};var kN={kernelName:Mn,inputsToSave:["a","b"],gradFunc:(r,e)=>{let[t,o]=e;return{a:()=>R(r,Y(io(t,o),"float32")),b:()=>R(r,Y(ge(t,o),"float32"))}}};var EN={kernelName:ui,inputsToSave:["x"],gradFunc:(r,e,t)=>{let o=e[0],{paddings:n}=t,s=n.map(i=>i[0]);return{x:()=>Ft(r,s,o.shape)}}};var AN={kernelName:Bn,inputsToSave:["a","b"],gradFunc:(r,e)=>{let[t,o]=e,n=Nt(t.shape,o.shape);return{a:()=>{let a=Kt(t.shape,n);return a.length>0?F(it(r,a),t.shape):r},b:()=>{let a=R(r,Lt(hs(ot(t,o)))),l=Kt(o.shape,n);return l.length>0?F(it(a,l),o.shape):a}}}};var $N={kernelName:Vn,inputsToSave:["a","b"],gradFunc:(r,e)=>{let[t,o]=e,n=Nt(t.shape,o.shape);return{a:()=>{let a=R(r,Y(o,"float32")),l=Kt(t.shape,n);return l.length>0?F(it(a,l),t.shape):a},b:()=>{let a=R(r,Y(t,"float32")),l=Kt(o.shape,n);return l.length>0?F(it(a,l),o.shape):a}}}};var DN={kernelName:ci,gradFunc:r=>({x:()=>Lt(r)})};var RN={kernelName:mi,inputsToSave:["indices"],gradFunc:(r,e)=>{let t=e[0];return{indices:()=>re(t.shape,"float32")}}};var FN={kernelName:pi,gradFunc:r=>({x:()=>ht(r)})};var _N={kernelName:fi,saveAllInputs:!0,gradFunc:(r,e,t)=>{let{axis:o}=t;return sr(r,o).map(s=>()=>s)}};var ey={kernelName:hi,inputsToSave:["x"],gradFunc:(r,e,t)=>{let o=e[0],{paddings:n}=t,s=n.map(i=>i[0]);return{x:()=>Ft(r,s,o.shape)}}};var ON={kernelName:Gn,inputsToSave:["a","b"],outputsToSave:[!0],gradFunc:(r,e)=>{let[t,o,n]=e,s=t,i=o,a=Nt(s.shape,i.shape);return{a:()=>{let c=Y(i,"float32"),p=R(r,R(c,wr(s,lt(c,xt(1))))),m=Kt(s.shape,a);return m.length>0&&(p=it(p,m)),F(p,s.shape)},b:()=>{let c=ge(s,0),p=ee(c,pr(s),ht(s)),m=R(r,R(n,p)),f=Kt(i.shape,a);return f.length>0&&(m=it(m,f)),F(m,i.shape)}}}};var LN={kernelName:di,inputsToSave:["x","alpha"],gradFunc:(r,e)=>{let[t,o]=e,n=ge(t,0);return{x:()=>ee(n,r,R(r,o)),alpha:()=>{let s=ee(n,ht(r),R(r,t)),i=Kt(o.shape,r.shape);return i.length>0&&(s=it(s,i)),F(s,o.shape)}}}};function c3(r,e,t){let o=r.shape.slice();o[t]=1;let n=F(e,o),s=zc(r,t,!0,!1),i=zc(r,t,!0,!0),a=R(s,i);return R(n,a)}function p3(r,e,t){let o=r.shape.length,n=o-t.length,s=v.getAxesPermutation(t,o),i=r;s!=null&&(i=Et(r,s));let a=i.shape.slice(),u=a.splice(o-t.length,t.length).reduce((m,f)=>m*f,1);a.push(u);let c=i.reshape(a),p=c3(c,e,n);if(p=p.reshape(i.shape),s!=null){let m=v.getUndoAxesPermutation(s);p=Et(p,m)}return p}var PN={kernelName:gi,inputsToSave:["x"],gradFunc:(r,e,t)=>{let[o]=e,{axis:n}=t,s=[];return n==null?s=o.shape.map((i,a)=>a):typeof n=="number"?s=[n]:s=n,{x:()=>p3(o,r,s)}}};var zN={kernelName:In,inputsToSave:["a","b"],gradFunc:(r,e)=>{let[t,o]=e,n=Nt(t.shape,o.shape);return{a:()=>{let a=ot(r,Y(o,"float32")),l=Kt(t.shape,n);return l.length>0?F(it(a,l),t.shape):a},b:()=>{let a=R(r,Y(t,"float32")),l=Kt(o.shape,n);l.length>0&&(a=F(it(a,l),o.shape));let u=At(o);return Lt(ot(a,Y(u,"float32")))}}}};var MN={kernelName:Wn,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>ot(r,Lt(At(t)))}}};var BN={kernelName:Hn,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e,o=R(io(t,6),Do(t));return{x:()=>R(r,Y(o,"float32"))}}};var VN={kernelName:Un,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>R(r,Y(Do(t),"float32"))}}};var GN={kernelName:xi,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>F(r,t.shape)}}};var WN={kernelName:bi,inputsToSave:["images"],gradFunc:(r,e,t)=>{let[o]=e,n={dy:r,images:o};return{images:()=>I.runKernel(Kl,n,t)}}};var UN={kernelName:yi,inputsToSave:["images"],gradFunc:(r,e,t)=>{let[o]=e,n={dy:r,images:o};return{images:()=>I.runKernel(ql,n,t)}}};var HN={kernelName:wi,gradFunc:(r,e,t)=>{let{dims:o}=t,n=Ae(o,r.shape);return{x:()=>Xr(r,n)}}};var qN={kernelName:qn,gradFunc:r=>({x:()=>ht(r)})};var KN={kernelName:Kn,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>Lt(ot(r,R(wr(t,1.5),2)))}}};var jN={kernelName:Ci,inputsToSave:["condition"],gradFunc:(r,e)=>{let[t]=e;return{condition:()=>Y(ht(t),"float32"),t:()=>R(r,Y(t,r.dtype)),e:()=>R(r,Y(xu(t),r.dtype))}}};var XN={kernelName:jn,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>{let o=ge(t,xt(0)),n=xt(Yx),s=xt(Zx),i=R(r,s),a=R(R(r,n),Le(Y(t,"float32")));return ee(o,i,a)}}}};var YN={kernelName:Qn,outputsToSave:[!0],gradFunc:(r,e)=>{let[t]=e;return{x:()=>R(r,R(t,lt(xt(1),t)))}}};var ZN={kernelName:Zn,gradFunc:r=>({x:()=>ht(r)})};var QN={kernelName:Xn,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>R(Ea(Y(t,"float32")),r)}}};var JN={kernelName:Yn,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>R(Pc(Y(t,"float32")),r)}}};var tI={kernelName:Si,inputsToSave:["x"],gradFunc:(r,e,t)=>{let[o]=e,{begin:n,size:s}=t,i=o.shape,[a,l]=Xx(o,n,s),u=[];for(let c=0;c<r.rank;c++)u.push([a[c],i[c]-a[c]-l[c]]);return{x:()=>Fa(r,u)}}};var eI={kernelName:Ti,outputsToSave:[!0],gradFunc:(r,e,t)=>{let[o]=e,{dim:n}=t,s=!0,i=R(r,o);return{logits:()=>lt(i,R(it(i,[n],s),o))}}};var rI={kernelName:Jn,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>R(r,so(t))}}};var ry={kernelName:Ni,gradFunc:(r,e,t)=>{let{blockShape:o,paddings:n}=t;return{x:()=>mu(r,o,n)}}};var oy={kernelName:Ii,gradFunc:(r,e,t)=>{let{axis:o}=t;return{x:()=>te(r,o)}}};var oI={kernelName:ts,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>ot(r,R(jt(Y(t,"float32")),2))}}};var nI={kernelName:jl,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>R(r,R(Y(t,"float32"),2))}}};var sI={kernelName:es,inputsToSave:["a","b"],gradFunc:(r,e)=>{let[t,o]=e,n=xt(2);return{a:()=>R(r,R(n,lt(t,o))),b:()=>R(r,R(n,lt(o,t)))}}};var iI={kernelName:ss,gradFunc:r=>({x:()=>ht(r)})};var aI={kernelName:rs,inputsToSave:["a","b"],gradFunc:(r,e)=>{let[t,o]=e,n=Nt(t.shape,o.shape);return{a:()=>{let a=r,l=Kt(t.shape,n);return l.length>0&&(a=it(a,l)),F(a,t.shape)},b:()=>{let a=r,l=Kt(o.shape,n);return l.length>0&&(a=it(a,l)),F(Lt(a),o.shape)}}}};var lI={kernelName:vi,inputsToSave:["x"],gradFunc:(r,e,t)=>{let[o]=e,n=o.shape.slice(),{axis:s}=t;Ae(s,o.shape).forEach(u=>{n[u]=1});let a=F(r,n),l=R(a,mr(o.shape,"float32"));return{x:()=>l}}};var uI={kernelName:os,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>ot(r,At(Ea(t)))}}};var cI={kernelName:ns,outputsToSave:[!0],gradFunc:(r,e)=>{let[t]=e;return{x:()=>R(lt(xt(1),At(t)),r)}}};var pI={kernelName:Ho,inputsToSave:["x"],gradFunc:(r,e,t)=>{let[o]=e,{reps:n}=t;return{x:()=>{let i=ht(o);if(o.rank===1)for(let a=0;a<n[0];++a)i=j(i,Ft(r,[a*o.shape[0]],[o.shape[0]]));else if(o.rank===2)for(let a=0;a<n[0];++a)for(let l=0;l<n[1];++l)i=j(i,Ft(r,[a*o.shape[0],l*o.shape[1]],[o.shape[0],o.shape[1]]));else if(o.rank===3)for(let a=0;a<n[0];++a)for(let l=0;l<n[1];++l)for(let u=0;u<n[2];++u)i=j(i,Ft(r,[a*o.shape[0],l*o.shape[1],u*o.shape[2]],[o.shape[0],o.shape[1],o.shape[2]]));else if(o.rank===4)for(let a=0;a<n[0];++a)for(let l=0;l<n[1];++l)for(let u=0;u<n[2];++u)for(let c=0;c<n[3];++c)i=j(i,Ft(r,[a*o.shape[0],l*o.shape[1],u*o.shape[2],c*o.shape[3]],[o.shape[0],o.shape[1],o.shape[2],o.shape[3]]));else throw new Error(`Gradient for tile operation is not implemented for rank-${o.rank} tensors yet.`);return i}}}};var mI={kernelName:qo,gradFunc:(r,e,t)=>{let o=t,{perm:n}=o,s=Bc(n);return{x:()=>Et(r,s)}}};var fI={kernelName:ki,gradFunc:(r,e,t)=>{let o=t,{axis:n}=o;return{value:()=>$e(r,n)}}};var hI={kernelName:Ei,inputsToSave:["segmentIds"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>m3(r,t)}}};function m3(r,e){let t=Or(e,ht(e)),o=Aa(r,t),n=Cr(e,xt(0,"int32")),s=o.rank-n.rank;for(let a=0;a<s;++a)n=ve(n,a+1);n=nr(n,mr(o.shape,"bool"));let i=ht(o);return ee(n,o,i)}var dI={kernelName:Ai,gradFunc:r=>({x:()=>ht(r)})};var f3=[Jm,wv,Cv,Sv,vv,Nv,Iv,Tv,kv,Ev,Av,$v,Rv,_v,Ov,Lv,Pv,zv,Mv,Bv,Vv,Gv,Uv,Wv,qv,Kv,jv,Xv,Yv,Zv,zN,Qv,Jv,tN,eN,rN,nN,oN,sN,lN,uN,cN,pN,mN,fN,hN,dN,gN,xN,bN,ty,ty,wN,SN,NN,IN,TN,kN,EN,AN,$N,DN,RN,FN,_N,ey,ey,ON,LN,PN,MN,BN,VN,GN,WN,UN,HN,qN,KN,jN,XN,YN,ZN,QN,JN,tI,eI,rI,ry,ry,oy,oy,oI,sI,nI,iI,aI,lI,uI,cI,pI,mI,fI,hI,dI];for(let r of f3)L0(r);D().prototype.abs=function(){return this.throwIfDisposed(),ke(this)};D().prototype.acos=function(){return this.throwIfDisposed(),Kg(this)};D().prototype.acosh=function(){return this.throwIfDisposed(),jg(this)};D().prototype.add=function(r){return this.throwIfDisposed(),j(this,r)};D().prototype.all=function(r,e){return this.throwIfDisposed(),Rc(this,r,e)};D().prototype.any=function(r,e){return this.throwIfDisposed(),cu(this,r,e)};D().prototype.argMax=function(r){return this.throwIfDisposed(),us(this,r)};D().prototype.argMin=function(r){return this.throwIfDisposed(),BC(this,r)};D().prototype.asScalar=function(){return this.throwIfDisposed(),k(this.size===1,()=>"The array must have only 1 element."),F(this,[])};D().prototype.asType=function(r){return this.throwIfDisposed(),Y(this,r)};D().prototype.as1D=function(){return this.throwIfDisposed(),F(this,[this.size])};D().prototype.as2D=function(r,e){return this.throwIfDisposed(),F(this,[r,e])};D().prototype.as3D=function(r,e,t){return this.throwIfDisposed(),F(this,[r,e,t])};D().prototype.as4D=function(r,e,t,o){return this.throwIfDisposed(),F(this,[r,e,t,o])};D().prototype.as5D=function(r,e,t,o,n){return this.throwIfDisposed(),F(this,[r,e,t,o,n])};D().prototype.asin=function(){return this.throwIfDisposed(),Xg(this)};D().prototype.asinh=function(){return this.throwIfDisposed(),Yg(this)};D().prototype.atan=function(){return this.throwIfDisposed(),Zg(this)};D().prototype.atan2=function(r){return this.throwIfDisposed(),VC(this,r)};D().prototype.atanh=function(){return this.throwIfDisposed(),Qg(this)};D().prototype.avgPool=function(r,e,t,o){return this.throwIfDisposed(),Ta(this,r,e,t,o)};D().prototype.batchToSpaceND=function(r,e){return this.throwIfDisposed(),mu(this,r,e)};D().prototype.batchNorm=function(r,e,t,o,n){return this.throwIfDisposed(),Li(this,r,e,t,o,n)};D().prototype.broadcastTo=function(r){return this.throwIfDisposed(),cs(this,r)};D().prototype.cast=function(r){return this.throwIfDisposed(),Y(this,r)};D().prototype.ceil=function(){return this.throwIfDisposed(),ix(this)};D().prototype.clipByValue=function(r,e){return this.throwIfDisposed(),qe(this,r,e)};D().prototype.concat=function(r,e){return this.throwIfDisposed(),r instanceof Bt&&(r=[r]),te([this,...r],e)};D().prototype.conv1d=function(r,e,t,o,n,s){return this.throwIfDisposed(),Oc(this,r,e,t,o,n,s)};D().prototype.conv2dTranspose=function(r,e,t,o,n){return this.throwIfDisposed(),Lc(this,r,e,t,o,n)};D().prototype.conv2d=function(r,e,t,o,n,s){return this.throwIfDisposed(),Fr(this,r,e,t,o,n,s)};D().prototype.cos=function(){return this.throwIfDisposed(),Ea(this)};D().prototype.cosh=function(){return this.throwIfDisposed(),Pc(this)};D().prototype.cumprod=function(r,e,t){return this.throwIfDisposed(),zc(this,r,e,t)};D().prototype.cumsum=function(r,e,t){return this.throwIfDisposed(),Dm(this,r,e,t)};D().prototype.depthToSpace=function(r,e){return this.throwIfDisposed(),qC(this,r,e)};D().prototype.depthwiseConv2d=function(r,e,t,o,n,s){return this.throwIfDisposed(),ms(this,r,e,t,o,n,s)};D().prototype.dilation2d=function(r,e,t,o,n){return this.throwIfDisposed(),KC(this,r,e,t,o,n)};D().prototype.divNoNan=function(r){return this.throwIfDisposed(),XC(this,r)};D().prototype.div=function(r){return this.throwIfDisposed(),ot(this,r)};D().prototype.dot=function(r){return this.throwIfDisposed(),YC(this,r)};D().prototype.elu=function(){return this.throwIfDisposed(),fs(this)};D().prototype.equal=function(r){return this.throwIfDisposed(),cr(this,r)};D().prototype.erf=function(){return this.throwIfDisposed(),Mc(this)};D().prototype.euclideanNorm=function(r,e){return this.throwIfDisposed(),JC(this,r,e)};D().prototype.exp=function(){return this.throwIfDisposed(),Le(this)};D().prototype.expandDims=function(r){return this.throwIfDisposed(),ve(this,r)};D().prototype.expm1=function(){return this.throwIfDisposed(),xx(this)};D().prototype.fft=function(){return this.throwIfDisposed(),Jc(this)};D().prototype.flatten=function(){return this.throwIfDisposed(),F(this,[this.size])};D().prototype.floor=function(){return this.throwIfDisposed(),hs(this)};D().prototype.floorDiv=function(r){return this.throwIfDisposed(),Am(this,r)};D().prototype.gather=function(r,e,t){return this.throwIfDisposed(),Aa(this,r,e,t)};D().prototype.greaterEqual=function(r){return this.throwIfDisposed(),Cr(this,r)};D().prototype.greater=function(r){return this.throwIfDisposed(),ge(this,r)};D().prototype.ifft=function(){return this.throwIfDisposed(),vu(this)};D().prototype.irfft=function(){return this.throwIfDisposed(),Fx(this)};D().prototype.isFinite=function(){return this.throwIfDisposed(),yx(this)};D().prototype.isInf=function(){return this.throwIfDisposed(),bx(this)};D().prototype.isNaN=function(){return this.throwIfDisposed(),wx(this)};D().prototype.leakyRelu=function(r){return this.throwIfDisposed(),$a(this,r)};D().prototype.lessEqual=function(r){return this.throwIfDisposed(),io(this,r)};D().prototype.less=function(r){return this.throwIfDisposed(),Da(this,r)};D().prototype.localResponseNormalization=function(r,e,t,o){return this.throwIfDisposed(),tS(this,r,e,t,o)};D().prototype.logSigmoid=function(){return this.throwIfDisposed(),Sx(this)};D().prototype.logSoftmax=function(r){return this.throwIfDisposed(),Gc(this,r)};D().prototype.logSumExp=function(r,e){return this.throwIfDisposed(),Wc(this,r,e)};D().prototype.log=function(){return this.throwIfDisposed(),pr(this)};D().prototype.log1p=function(){return this.throwIfDisposed(),Vc(this)};D().prototype.logicalAnd=function(r){return this.throwIfDisposed(),nr(this,r)};D().prototype.logicalNot=function(){return this.throwIfDisposed(),xu(this)};D().prototype.logicalOr=function(r){return this.throwIfDisposed(),Fm(this,r)};D().prototype.logicalXor=function(r){return this.throwIfDisposed(),eS(this,r)};D().prototype.matMul=function(r,e,t){return this.throwIfDisposed(),Mt(this,r,e,t)};D().prototype.maxPool=function(r,e,t,o){return this.throwIfDisposed(),Ra(this,r,e,t,o)};D().prototype.max=function(r,e){return this.throwIfDisposed(),Ke(this,r,e)};D().prototype.maximum=function(r){return this.throwIfDisposed(),Or(this,r)};D().prototype.mean=function(r,e){return this.throwIfDisposed(),ne(this,r,e)};D().prototype.min=function(r,e){return this.throwIfDisposed(),Pi(this,r,e)};D().prototype.minimum=function(r){return this.throwIfDisposed(),Qo(this,r)};D().prototype.mirrorPad=function(r,e){return this.throwIfDisposed(),rS(this,r,e)};D().prototype.mod=function(r){return this.throwIfDisposed(),oS(this,r)};D().prototype.mul=function(r){return this.throwIfDisposed(),R(this,r)};D().prototype.neg=function(){return this.throwIfDisposed(),Lt(this)};D().prototype.norm=function(r,e,t){return this.throwIfDisposed(),zi(this,r,e,t)};D().prototype.notEqual=function(r){return this.throwIfDisposed(),Mi(this,r)};D().prototype.oneHot=function(r,e=1,t=0){return this.throwIfDisposed(),bu(this,r,e,t)};D().prototype.onesLike=function(){return this.throwIfDisposed(),Pe(this)};D().prototype.pad=function(r,e){return this.throwIfDisposed(),Fa(this,r,e)};D().prototype.pool=function(r,e,t,o,n,s){return this.throwIfDisposed(),nS(this,r,e,t,o,n,s)};D().prototype.pow=function(r){return this.throwIfDisposed(),wr(this,r)};D().prototype.prelu=function(r){return this.throwIfDisposed(),_a(this,r)};D().prototype.prod=function(r,e){return this.throwIfDisposed(),sS(this,r,e)};D().prototype.reciprocal=function(){return this.throwIfDisposed(),Dx(this)};D().prototype.relu=function(){return this.throwIfDisposed(),Lr(this)};D().prototype.relu6=function(){return this.throwIfDisposed(),Pm(this)};D().prototype.reshapeAs=function(r){return this.throwIfDisposed(),F(this,r.shape)};D().prototype.reshape=function(r){return this.throwIfDisposed(),F(this,r)};D().prototype.resizeBilinear=function(r,e,t){return this.throwIfDisposed(),Hm(this,r,e,t)};D().prototype.resizeNearestNeighbor=function(r,e,t){return this.throwIfDisposed(),qm(this,r,e,t)};D().prototype.reverse=function(r){return this.throwIfDisposed(),Xr(this,r)};D().prototype.rfft=function(){return this.throwIfDisposed(),_x(this)};D().prototype.round=function(){return this.throwIfDisposed(),Hc(this)};D().prototype.rsqrt=function(){return this.throwIfDisposed(),qc(this)};D().prototype.selu=function(){return this.throwIfDisposed(),Kc(this)};D().prototype.separableConv2d=function(r,e,t,o,n,s){return this.throwIfDisposed(),jc(this,r,e,t,o,n,s)};D().prototype.sigmoid=function(){return this.throwIfDisposed(),so(this)};D().prototype.sign=function(){return this.throwIfDisposed(),Rx(this)};D().prototype.sin=function(){return this.throwIfDisposed(),Xc(this)};D().prototype.sinh=function(){return this.throwIfDisposed(),Yc(this)};D().prototype.slice=function(r,e){return this.throwIfDisposed(),Ft(this,r,e)};D().prototype.softmax=function(r){return this.throwIfDisposed(),Pa(this,r)};D().prototype.softplus=function(){return this.throwIfDisposed(),Zo(this)};D().prototype.spaceToBatchND=function(r,e){return this.throwIfDisposed(),wu(this,r,e)};D().prototype.split=function(r,e){return this.throwIfDisposed(),Re(this,r,e)};D().prototype.sqrt=function(){return this.throwIfDisposed(),jt(this)};D().prototype.square=function(){return this.throwIfDisposed(),At(this)};D().prototype.squaredDifference=function(r){return this.throwIfDisposed(),SS(this,r)};D().prototype.squeeze=function(r){return this.throwIfDisposed(),$o(this,r)};D().prototype.stack=function(r,e){this.throwIfDisposed();let t=r instanceof Bt?[this,r]:[this,...r];return $e(t,e)};D().prototype.step=function(r){return this.throwIfDisposed(),Do(this,r)};D().prototype.stridedSlice=function(r,e,t,o,n,s,i,a){return this.throwIfDisposed(),Ox(this,r,e,t,o,n,s,i,a)};D().prototype.sub=function(r){return this.throwIfDisposed(),lt(this,r)};D().prototype.sum=function(r,e){return this.throwIfDisposed(),it(this,r,e)};D().prototype.tan=function(){return this.throwIfDisposed(),Lx(this)};D().prototype.tanh=function(){return this.throwIfDisposed(),ka(this)};D().prototype.tile=function(r){return this.throwIfDisposed(),Qe(this,r)};D().prototype.toBool=function(){return this.throwIfDisposed(),Y(this,"bool")};D().prototype.toFloat=function(){return this.throwIfDisposed(),Y(this,"float32")};D().prototype.toInt=function(){return this.throwIfDisposed(),Y(this,"int32")};D().prototype.topk=function(r,e){return this.throwIfDisposed(),NS(this,r,e)};D().prototype.transpose=function(r){return this.throwIfDisposed(),Et(this,r)};D().prototype.unique=function(r){return this.throwIfDisposed(),IS(this,r)};D().prototype.unsortedSegmentSum=function(r,e){return this.throwIfDisposed(),Mm(this,r,e)};D().prototype.unstack=function(r){return this.throwIfDisposed(),sr(this,r)};D().prototype.where=function(r,e){return this.throwIfDisposed(),ee(r,this,e)};D().prototype.zerosLike=function(){return this.throwIfDisposed(),ht(this)};var Yr=class r extends Error{constructor(e){super(e),Object.setPrototypeOf(this,r.prototype)}},fr=class r extends Error{constructor(e){super(e),Object.setPrototypeOf(this,r.prototype)}},O=class r extends Error{constructor(e){super(e),Object.setPrototypeOf(this,r.prototype)}},bt=class r extends Error{constructor(e){super(e),Object.setPrototypeOf(this,r.prototype)}},ef=class r extends Error{constructor(e){super(e),Object.setPrototypeOf(this,r.prototype)}};var np=class{constructor(e){this.maxEntries=e||100,this.cache=new Map}get(e){let t;return this.cache.has(e)&&(t=this.cache.get(e),this.cache.delete(e),this.cache.set(e,t)),t}put(e,t){if(this.cache.has(e))this.cache.delete(e);else if(this.cache.size>=this.maxEntries){let o=this.cache.keys().next().value;this.cache.delete(o)}this.cache.set(e,t)}getMaxEntries(){return this.maxEntries}setMaxEntries(e){if(e<0)throw new Error(`The maxEntries of LRU caches must be at least 0, but got ${e}.`);if(this.maxEntries>e)for(let t=0;t<this.maxEntries-e;t++){let o=this.cache.keys().next().value;this.cache.delete(o)}this.maxEntries=e}};function po(r,e){if(Array.isArray(r)){let t=[];for(let o=0;o<e;o++)t=t.concat(r);return t}else{let t=new Array(e);return t.fill(r),t}}function Zr(r,e){if(!r)throw new ef(e)}function sy(r,e){let t=0;for(let o of r)o===e&&t++;return t}function Me(r){return r.length===1?r[0]:r}function Vt(r){return Array.isArray(r)?r:[r]}function mo(r){let t=r.replace(/(.)([A-Z][a-z0-9]+)/g,"$1_$2").replace(/([a-z])([A-Z])/g,"$1_$2").toLowerCase();return t[0]!=="_"?t:"private"+t}function xs(r){return r.length<=1||r.indexOf("_")===-1?r:r.replace(/[_]+(\w|$)/g,(e,t)=>t.toUpperCase())}var co={};function Du(r){if(r==null)return null;let e={};return e.className=r.getClassName(),e.config=r.getConfig(),e}function ny(r){if(!(r==null||typeof r!="object"))if(Array.isArray(r))r.forEach(e=>ny(e));else{let e=Object.keys(r);for(let t of e){let o=r[t];o!=null&&typeof o=="object"&&(!Array.isArray(o)&&o.type==="ndarray"&&typeof o.value=="number"?r[t]=o.value:ny(o))}}}function tn(r,e={},t={},o="object",n=!1){if(typeof r=="string"){let s=r,i;if(s in t)i=t[s];else if(s in co)i=co[s];else if(i=e[s],i==null)throw new O(`Unknown ${o}: ${r}. This may be due to one of the following reasons:
1. The ${o} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.
2. The custom ${o} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);return i}else{let s=r;if(s.className==null||s.config==null)throw new O(`${o}: Improper config format: ${JSON.stringify(s)}.
'className' and 'config' must set.`);let i=s.className,a,l;if(i in t?[a,l]=t[i]:i in co?[a,l]=co.className:i in e&&([a,l]=e[i]),a==null)throw new O(`Unknown ${o}: ${i}. This may be due to one of the following reasons:
1. The ${o} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.
2. The custom ${o} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);if(l!=null){let u={};for(let f of Object.keys(co))u[f]=co[f];for(let f of Object.keys(t))u[f]=t[f];let c=s.config;c.customObjects=u;let p=Object.assign({},co);for(let f of Object.keys(t))co[f]=t[f];ny(s.config);let m=l(a,s.config,t,n);return co=Object.assign({},p),m}else{let u=Object.assign({},co);for(let p of Object.keys(t))co[p]=t[p];let c=new a(s.config);return co=Object.assign({},u),c}}}function h3(r,e){return r<e?-1:r>e?1:0}function sp(r,e){return-1*h3(r,e)}function fo(r){if(r==null)return r;let e=[];for(let t of r)e.indexOf(t)===-1&&e.push(t);return e}function gI(r){if(r==null)throw new O(`Invalid value in obj: ${JSON.stringify(r)}`);for(let e in r)if(r.hasOwnProperty(e))return!1;return!0}function en(r,e,t){if(t!=null&&r.indexOf(t)<0)throw new O(`${t} is not a valid ${e}.  Valid values are ${r} or null/undefined.`)}function rf(r,e,t=0,o=1/0){return Zr(t>=0),Zr(o>=t),Array.isArray(r)&&r.length>=t&&r.length<=o&&r.every(n=>typeof n===e)}function be(r,e){Array.isArray(r)?(b.assert(r.length>0,()=>`${e} is unexpectedly an empty array.`),r.forEach((t,o)=>be(t,`element ${o+1} of ${e}`))):b.assert(Number.isInteger(r)&&r>0,()=>`Expected ${e} to be a positive integer, but got ${xI(r)}.`)}function xI(r){return r===null?"null":Array.isArray(r)?"["+r.map(e=>xI(e)).join(",")+"]":typeof r=="string"?`"${r}"`:`${r}`}function yI(r,e,t){let o=t!=null?t():b.now(),n;return(...i)=>{let a=t!=null?t():b.now();return a-o<e||(o=a,n=r(...i)),n}}function of(r){return r==="relu"?"relu":r==="linear"?"linear":r==="elu"?"elu":null}var d3=0;function sf(){return d3++}var nf={};function Vi(r=""){return r in nf||(nf[r]=0),nf[r]+=1,r+nf[r].toString()}var bI=["channelsFirst","channelsLast"],wI=["nearest","bilinear"],CI=["valid","same","causal"],SI=["max","avg"],vI=["sum","mul","concat","ave"];var Ru=new Map;function se(r){en(bI,"DataFormat",r)}function II(r){en(wI,"InterpolationFormat",r)}function hr(r){en(CI,"PaddingMode",r)}function iy(r){en(SI,"PoolMode",r)}var ip=[],NI="/";function Fo(r,e){ip.push(r);try{let t=e();return ip.pop(),t}catch(t){throw ip.pop(),t}}function g3(){return ip.length===0?"":ip.join(NI)+NI}function af(r){if(!TI(r))throw new Error("Not a valid tensor name: '"+r+"'");return g3()+r}function lf(r){if(!TI(r))throw new Error("Not a valid tensor name: '"+r+"'");Ru.has(r)||Ru.set(r,0);let e=Ru.get(r);if(Ru.set(r,Ru.get(r)+1),e>0){let t=`${r}_${e}`;return Ru.set(t,1),t}else return r}var x3=new RegExp(/^[A-Za-z0-9][-A-Za-z0-9\._\/]*$/);function TI(r){return!!r.match(x3)}function kI(r){return r===parseInt(r.toString(),10)}function ho(r,e,t){e==null&&(e=0),t==null&&(t=r.length);let o=1;for(let n=e;n<t;++n)o*=r[n];return o}function Wa(r){if(r.length===0)return Number.NaN;let e=Number.POSITIVE_INFINITY;for(let t=0;t<r.length;t++){let o=r[t];o<e&&(e=o)}return e}function _o(r){if(r.length===0)return Number.NaN;let e=Number.NEGATIVE_INFINITY;for(let t=0;t<r.length;t++){let o=r[t];o>e&&(e=o)}return e}function dr(r,e){if(e<r)throw new O(`end (${e}) < begin (${r}) is forbidden.`);let t=[];for(let o=r;o<e;++o)t.push(o);return t}var ay;function Ee(){return ay==null&&(ay=vm().epsilon()),ay}function gr(){return"channelsLast"}function ir(r,e){return Y(r,e)}function bs(r,e=-1){let t=r.shape.slice();return e<0&&(e=t.length+e+1),t.splice(e,0,1),F(r,t)}function EI(r,e){return z(()=>{if(r.shape.length!==2)throw new O(`repeat() expects a rank-2 tensor, but received a rank-${r.shape.length} tensor.`);let t=bs(r,1);return cf(t,[1,e,1])})}function AI(r){let e=[ho(r.shape)];return F(r,e)}function $I(r){if(r.rank<=1)throw new O(`batchFlatten requires a minimum rank of 2. Got rank: ${r.rank}.`);let e=[r.shape[0],ho(r.shape,1)];return F(r,e)}function ys(r,e,t){return z(()=>{switch(r.rank){case 1:return Zc(r,e,t);case 2:return zm(r,[e,0],[t,r.shape[1]]);case 3:return Qc(r,[e,0,0],[t,r.shape[1],r.shape[2]]);case 4:return Su(r,[e,0,0,0],[t,r.shape[1],r.shape[2],r.shape[3]]);case 5:return Ft(r,[e,0,0,0,0],[t,r.shape[1],r.shape[2],r.shape[3],r.shape[4]]);case 6:return Ft(r,[e,0,0,0,0,0],[t,r.shape[1],r.shape[2],r.shape[3],r.shape[4],r.shape[5]]);default:throw new O(`sliceAlongFirstAxis() received an unsupported tensor rank: ${r.rank}`)}})}function ly(r,e,t){return z(()=>{switch(r.rank){case 1:return Zc(r,e,t);case 2:return zm(r,[0,e],[r.shape[0],t]);case 3:return Qc(r,[0,0,e],[r.shape[0],r.shape[1],t]);case 4:return Su(r,[0,0,0,e],[r.shape[0],r.shape[1],r.shape[2],t]);default:throw new O(`sliceAlongLastAxis() received an unsupported tensor rank: ${r.rank}`)}})}function ap(r,e,t,o){return z(()=>{switch(r.rank){case 1:return Zc(r,e,t);case 2:switch(o){case 1:return ys(r,e,t);case 2:return ly(r,e,t);default:throw new O(`The axis is not within the rank of the tensor ${o}`)}case 3:switch(o){case 1:return ys(r,e,t);case 2:return Qc(r,[0,e,0],[r.shape[0],t,r.shape[2]]);case 3:return ly(r,e,t);default:throw new O(`The axis is not within the rank of the tensor ${o}`)}case 4:switch(o){case 1:return ys(r,e,t);case 2:return Su(r,[0,e,0,0],[r.shape[0],t,r.shape[2],r.shape[3]]);case 3:return Su(r,[0,0,e,0],[r.shape[0],r.shape[1],t,r.shape[3]]);case 4:return ly(r,e,t);default:throw new O(`The axis is not within the rank of the tensor ${o}`)}default:throw new O(`sliceAlongLastAxis() received an unsupported tensor rank: ${r.rank}`)}})}function Fu(r,e=-1){let t;return e<0&&(t=r[0].rank,t!==0?e=t:e=0),e===r[0].rank&&(e=-1),te(r,e)}function cy(r,e){switch(r.rank){case 1:return ax([r,e]);case 2:return lx([r,e],0);case 3:return ux([r,e],0);case 4:return cx([r,e],0);default:throw new O(`concatAlongFirstAxis() received an unsupported tensor rank: ${r.rank}`)}}function cf(r,e){if(Array.isArray(e)||(e=[e]),r.rank!==e.length)throw new O(`The length of input n (${e.length}) does not match the number of dimensions in input x (${r.rank})`);return Qe(r,e)}function _u(r,e=0,t=1,o,n){return Lm(r,e,t,o,n)}function go(r,e,t,o){if(r.rank<2||e.rank<2)throw new bt(`dot requires both inputs to be rank >= 2 but got x shape = ${r.shape} and y shape = ${e.shape}`);if(e.rank>=3){let n=r.shape.slice(-1)[0],s=e.shape.slice(-2)[0];if(n!==s)throw new bt(`If rank y >= 3, then the second last dim of y must equal the last dim of x but got x shape = ${r.shape} and  y shape = ${e.shape}`)}if(r.rank===2&&e.rank===2)return Ga.matMul({a:r,b:e,transposeA:!1,transposeB:!1,bias:o?uy(r.rank,o,gr()):null,activation:t});{let n=r.shape.slice(),s=n.pop();r=F(r,[-1,s]);let i=e.shape.slice(),a=i.pop(),l=i.pop(),u=[...i,a],c=Array.from({length:e.rank},(h,g)=>g===0?e.rank-2:g<=e.rank-2?g-1:g);e=F(Et(e,c),[l,-1]);let p=[...n,...u];return F(Ga.matMul({a:r,b:e,transposeA:!1,transposeB:!1,bias:o?uy(r.rank,o,gr()):null,activation:t}),p)}}function pf(r,e,t){return z(()=>(Array.isArray(e)?e=Ne(e,"int32"):e=Y(e,"int32"),Aa(r,e,t)))}function Ua(r){return R(r,r)}function uy(r,e,t){let o=e.shape;if(e.rank!==1&&e.rank!==r)throw new O(`Unexpected bias dimensions: ${e.rank}; expected it to be 1 or ${r}`);if(r===5){if(t==="channelsFirst")return o.length===1?F(e,[1,o[0],1,1,1]):F(e,[1,o[3],o[0],o[1],o[2]]);if(t==="channelsLast")return o.length===1?F(e,[1,1,1,1,o[0]]):F(e,[1].concat(o))}else if(r===4){if(t==="channelsFirst")return o.length===1?F(e,[1,o[0],1,1]):F(e,[1,o[2],o[0],o[1]]);if(t==="channelsLast")return o.length===1?F(e,[1,1,1,o[0]]):F(e,[1].concat(o))}else if(r===3){if(t==="channelsFirst")return o.length===1?F(e,[1,o[0],1]):F(e,[1,o[1],o[0]]);if(t==="channelsLast")return o.length===1?F(e,[1,1,o[0]]):F(e,[1].concat(o))}else if(r<3)return e;throw new O(`Unsupported input rank by biasAdd: ${e.rank}`)}function xr(r,e,t){return z(()=>(t==null&&(t=gr()),se(t),j(r,uy(r.rank,e,t))))}function DI(r,e=1){if(e!==1)throw new bt(`Support for alpha values other than 1 (${e}) is not implemented yet.`);return fs(r)}function RI(r){return z(()=>ot(r,j(ke(r),1)))}function mf(r,e,t,o){return z(()=>ES(r,e,t,o))}function FI(r){return z(()=>{let e=j(.5,R(.2,r));return qe(e,0,1)})}function Gi(r,e,t=!1){return t?r():e()}var _I=["fanIn","fanOut","fanAvg"],OI=["normal","uniform","truncatedNormal"];function y3(r){en(_I,"FanMode",r)}function b3(r){en(OI,"Distribution",r)}var yr=class extends H.Serializable{fromConfigUsesCustomObjects(){return!1}getConfig(){return{}}},zI=(()=>{class r extends yr{apply(t,o){return re(t,o)}}return r.className="Zeros",r})();H.registerClass(zI);var ff=(()=>{class r extends yr{apply(t,o){return mr(t,o)}}return r.className="Ones",r})();H.registerClass(ff);var MI=(()=>{class r extends yr{constructor(t){if(super(),typeof t!="object")throw new O(`Expected argument of type ConstantConfig but got ${t}`);if(t.value===void 0)throw new O(`config must have value set but got ${t}`);this.value=t.value}apply(t,o){return z(()=>R(xt(this.value),mr(t,o)))}getConfig(){return{value:this.value}}}return r.className="Constant",r})();H.registerClass(MI);var BI=(()=>{class r extends yr{constructor(t){super(),this.DEFAULT_MINVAL=-.05,this.DEFAULT_MAXVAL=.05,this.minval=t.minval||this.DEFAULT_MINVAL,this.maxval=t.maxval||this.DEFAULT_MAXVAL,this.seed=t.seed}apply(t,o){return Ao(t,this.minval,this.maxval,o,this.seed)}getConfig(){return{minval:this.minval,maxval:this.maxval,seed:this.seed}}}return r.className="RandomUniform",r})();H.registerClass(BI);var VI=(()=>{class r extends yr{constructor(t){super(),this.DEFAULT_MEAN=0,this.DEFAULT_STDDEV=.05,this.mean=t.mean||this.DEFAULT_MEAN,this.stddev=t.stddev||this.DEFAULT_STDDEV,this.seed=t.seed}apply(t,o){if(o=o||"float32",o!=="float32"&&o!=="int32")throw new bt(`randomNormal does not support dType ${o}.`);return _u(t,this.mean,this.stddev,o,this.seed)}getConfig(){return{mean:this.mean,stddev:this.stddev,seed:this.seed}}}return r.className="RandomNormal",r})();H.registerClass(VI);var GI=(()=>{class r extends yr{constructor(t){super(),this.DEFAULT_MEAN=0,this.DEFAULT_STDDEV=.05,this.mean=t.mean||this.DEFAULT_MEAN,this.stddev=t.stddev||this.DEFAULT_STDDEV,this.seed=t.seed}apply(t,o){if(o=o||"float32",o!=="float32"&&o!=="int32")throw new bt(`truncatedNormal does not support dType ${o}.`);return tp(t,this.mean,this.stddev,o,this.seed)}getConfig(){return{mean:this.mean,stddev:this.stddev,seed:this.seed}}}return r.className="TruncatedNormal",r})();H.registerClass(GI);var WI=(()=>{class r extends yr{constructor(t){super(),this.gain=t.gain!=null?t.gain:1}apply(t,o){return z(()=>{if(t.length!==2||t[0]!==t[1])throw new O("Identity matrix initializer can only be used for 2D square matrices.");return R(this.gain,du(t[0]))})}getConfig(){return{gain:this.gain}}}return r.className="Identity",r})();H.registerClass(WI);function w3(r,e="channelsLast"){let t,o;if(se(e),r.length===2)t=r[0],o=r[1];else if([3,4,5].indexOf(r.length)!==-1){if(e==="channelsFirst"){let n=ho(r,2);t=r[1]*n,o=r[0]*n}else if(e==="channelsLast"){let n=ho(r,0,r.length-2);t=r[r.length-2]*n,o=r[r.length-1]*n}}else{let n=ho(r);t=Math.sqrt(n),o=Math.sqrt(n)}return[t,o]}var zr=(()=>{class r extends yr{constructor(t){if(super(),t.scale<0)throw new O(`scale must be a positive float. Got: ${t.scale}`);this.scale=t.scale==null?1:t.scale,this.mode=t.mode==null?"fanIn":t.mode,y3(this.mode),this.distribution=t.distribution==null?"normal":t.distribution,b3(this.distribution),this.seed=t.seed}apply(t,o){let n=w3(t),s=n[0],i=n[1],a=this.scale;if(this.mode==="fanIn"?a/=Math.max(1,s):this.mode==="fanOut"?a/=Math.max(1,i):a/=Math.max(1,(s+i)/2),this.distribution==="normal"){let l=Math.sqrt(a);if(o=o||"float32",o!=="float32"&&o!=="int32")throw new bt(`${this.getClassName()} does not support dType ${o}.`);return tp(t,0,l,o,this.seed)}else{let l=Math.sqrt(3*a);return Ao(t,-l,l,o,this.seed)}}getConfig(){return{scale:this.scale,mode:this.mode,distribution:this.distribution,seed:this.seed}}}return r.className="VarianceScaling",r})();H.registerClass(zr);var py=(()=>{class r extends zr{constructor(t){super({scale:1,mode:"fanAvg",distribution:"uniform",seed:t==null?null:t.seed})}getClassName(){return zr.className}}return r.className="GlorotUniform",r})();H.registerClass(py);var my=(()=>{class r extends zr{constructor(t){super({scale:1,mode:"fanAvg",distribution:"normal",seed:t==null?null:t.seed})}getClassName(){return zr.className}}return r.className="GlorotNormal",r})();H.registerClass(my);var fy=(()=>{class r extends zr{constructor(t){super({scale:2,mode:"fanIn",distribution:"normal",seed:t==null?null:t.seed})}getClassName(){return zr.className}}return r.className="HeNormal",r})();H.registerClass(fy);var hy=(()=>{class r extends zr{constructor(t){super({scale:2,mode:"fanIn",distribution:"uniform",seed:t==null?null:t.seed})}getClassName(){return zr.className}}return r.className="HeUniform",r})();H.registerClass(hy);var dy=(()=>{class r extends zr{constructor(t){super({scale:1,mode:"fanIn",distribution:"normal",seed:t==null?null:t.seed})}getClassName(){return zr.className}}return r.className="LeCunNormal",r})();H.registerClass(dy);var gy=(()=>{class r extends zr{constructor(t){super({scale:1,mode:"fanIn",distribution:"uniform",seed:t==null?null:t.seed})}getClassName(){return zr.className}}return r.className="LeCunUniform",r})();H.registerClass(gy);var UI=(()=>{class r extends yr{constructor(t){super(),this.DEFAULT_GAIN=1,this.ELEMENTS_WARN_SLOW=2e3,this.gain=t.gain==null?this.DEFAULT_GAIN:t.gain,this.seed=t.seed}apply(t,o){return z(()=>{if(t.length<2)throw new bt("Shape must be at least 2D.");if(o!=="int32"&&o!=="float32"&&o!==void 0)throw new TypeError(`Unsupported data type ${o}.`);o=o;let n=b.sizeFromShape(t.slice(0,-1)),s=t[t.length-1],i=n*s;i>this.ELEMENTS_WARN_SLOW&&console.warn(`Orthogonal initializer is being called on a matrix with more than ${this.ELEMENTS_WARN_SLOW} (${i}) elements: Slowness may result.`);let a=[Math.max(s,n),Math.min(s,n)],l=_u(a,0,1,o,this.seed),u=ZS.qr(l,!1),c=u[0],m=u[1].flatten().stridedSlice([0],[Math.min(s,n)*Math.min(s,n)],[Math.min(s,n)+1]);return c=R(c,m.sign()),n<s&&(c=c.transpose()),R(xt(this.gain),c.reshape(t))})}getConfig(){return{gain:this.gain,seed:this.seed}}}return r.className="Orthogonal",r})();H.registerClass(UI);var LI={constant:"Constant",glorotNormal:"GlorotNormal",glorotUniform:"GlorotUniform",heNormal:"HeNormal",heUniform:"HeUniform",identity:"Identity",leCunNormal:"LeCunNormal",leCunUniform:"LeCunUniform",ones:"Ones",orthogonal:"Orthogonal",randomNormal:"RandomNormal",randomUniform:"RandomUniform",truncatedNormal:"TruncatedNormal",varianceScaling:"VarianceScaling",zeros:"Zeros"};function PI(r,e={}){return tn(r,H.SerializationMap.getMap().classNameMap,e,"initializer")}function Qt(r){return Du(r)}function qt(r){if(typeof r=="string"){let e=r in LI?LI[r]:r;if(e==="GlorotNormal")return new my;if(e==="GlorotUniform")return new py;if(e==="HeNormal")return new fy;if(e==="HeUniform")return new hy;if(e==="LeCunNormal")return new dy;if(e==="LeCunUniform")return new gy;{let t={};return t.className=e,t.config={},PI(t)}}else return r instanceof yr?r:PI(r)}function hf(r){return Array.isArray(r)&&Array.isArray(r[0])}function Ou(r){return r.length===0?[]:Array.isArray(r[0])?r:[r]}function dt(r){let e;if(Array.isArray(r)){if(r.length!==1)throw new O(`Expected Tensor length to be 1; got ${r.length}`);e=r[0]}else e=r;return e}function kt(r){if(Array.isArray(r)&&Array.isArray(r[0])){if(r.length===1)return r=r,r[0];throw new O(`Expected exactly 1 Shape; got ${r.length}`)}else return r}function Lu(r){let e=0;for(let t of r)t.shape.length===0?e+=1:e+=t.shape.reduce((o,n)=>o*n);return e}var qI="Variable",lp=class{constructor(e,t="float32",o=qI,n=!0,s=null){this.dtype=t??"float32",this.shape=e.shape,this.id=sf(),o=o??qI,this.originalName=af(o),this.name=lf(this.originalName),this.trainable_=n,this.constraint=s,this.val=Px(e,this.trainable_,this.name,this.dtype)}read(){return this.assertNotDisposed(),this.val}write(e){return this.assertNotDisposed(),S3(this.val,e),this.val.id!==e.id&&(this.val.assign(e),this.constraint!=null&&this.val.assign(this.constraint.apply(this.val))),this}dispose(){this.assertNotDisposed(),this.val.dispose()}assertNotDisposed(){if(this.val.isDisposed)throw new Error(`LayersVariable ${this.name} is already disposed.`)}get trainable(){return this.trainable_}set trainable(e){this.trainable_=e,this.val.trainable=e}};function S3(r,e){if(r.shape.toString()!==e.shape.toString())throw new Error("Shape mismatch: "+JSON.stringify(r.shape)+" vs. "+JSON.stringify(e.shape))}function up(r){return r.map(e=>e.read())}function Pu(r){r.forEach(e=>{e[0].write(e[1])})}var Xt=class{constructor(e){this.dtype=e.dtype,this.shape=e.shape,e.shape!=null?this.ndim=e.shape.length:this.ndim=e.ndim,this.maxNDim=e.maxNDim,this.minNDim=e.minNDim,this.axes=e.axes||{}}},ar=class{constructor(e,t,o,n,s,i,a){this.dtype=e,this.shape=t,this.sourceLayer=o,this.inputs=n,this.callArgs=s,this.outputTensorIndex=a,this.id=sf(),i!=null&&(this.originalName=af(i),this.name=lf(this.originalName)),this.rank=t.length}},v3=0,ws=class{constructor(e,t){this.callArgs=t,this.id=v3++,this.outboundLayer=e.outboundLayer,this.inboundLayers=e.inboundLayers,this.nodeIndices=e.nodeIndices,this.tensorIndices=e.tensorIndices,this.inputTensors=e.inputTensors,this.outputTensors=e.outputTensors,this.inputMasks=e.inputMasks,this.outputMasks=e.outputMasks,this.inputShapes=e.inputShapes,this.outputShapes=e.outputShapes;for(let o of e.inboundLayers)o?.outboundNodes.push(this);e.outboundLayer.inboundNodes.push(this)}getConfig(){let e=[];for(let t of this.inboundLayers)t!=null?e.push(t.name):e.push(null);return{outboundLayer:this.outboundLayer?this.outboundLayer.name:null,inboundLayers:e,nodeIndices:this.nodeIndices,tensorIndices:this.tensorIndices}}},N3=0,yt=class extends H.Serializable{constructor(e={}){super(),this._callHook=null,this._addedWeightNames=[],this._stateful=!1,this.id=N3++,this.activityRegularizer=null,this.inputSpec=null,this.supportsMasking=!1,this._trainableWeights=[],this._nonTrainableWeights=[],this._losses=[],this._updates=[],this._built=!1,this.inboundNodes=[],this.outboundNodes=[];let t=e.name;if(!t){let o=this.getClassName();t=mo(o)+"_"+Vi(o)}if(this.name=t,this.trainable_=e.trainable==null?!0:e.trainable,e.inputShape!=null||e.batchInputShape!=null){let o;if(e.batchInputShape!=null)o=e.batchInputShape;else if(e.inputShape!=null){let s=null;e.batchSize!=null&&(s=e.batchSize),o=[s].concat(e.inputShape)}this.batchInputShape=o;let n=e.dtype;n==null&&(n=e.inputDType),n==null&&(n="float32"),this.dtype=n}e.weights!=null?this.initialWeights=e.weights:this.initialWeights=null,this._refCount=null,this.fastWeightInitDuringBuild=!1}static nodeKey(e,t){return e.name+"_ib-"+t.toString()}getNodeAtIndex(e,t){if(this.inboundNodes.length===0)throw new fr(`The layer has never been called and thus has no defined ${t}.`);if(this.inboundNodes.length<=e)throw new O(`Asked to get ${t} at node ${e}, but the layer has only ${this.inboundNodes.length} inbound nodes.`);return this.inboundNodes[e]}getInputAt(e){return Me(this.getNodeAtIndex(e,"input").inputTensors)}getOutputAt(e){return Me(this.getNodeAtIndex(e,"output").outputTensors)}get input(){if(this.inboundNodes.length>1)throw new Yr(`Layer ${this.name} has multiple inbound nodes, hence the notion of "layer input" is ill-defined. Use \`getInputAt(nodeIndex)\` instead.`);if(this.inboundNodes.length===0)throw new Yr(`Layer ${this.name} is not connected, no input to return.`);return Me(this.getNodeAtIndex(0,"input").inputTensors)}get output(){if(this.inboundNodes.length===0)throw new Yr(`Layer ${this.name} has no inbound nodes.`);if(this.inboundNodes.length>1)throw new Yr(`Layer ${this.name} has multiple inbound nodes, hence the notion of "layer output" is ill-defined. Use \`getOutputAt(nodeIndex)\` instead.`);return Me(this.getNodeAtIndex(0,"output").outputTensors)}get losses(){return this._losses}calculateLosses(){return this.losses.map(e=>e())}get updates(){return this._updates}get built(){return this._built}set built(e){this._built=e}get trainable(){return this.trainable_}set trainable(e){this._trainableWeights.forEach(t=>t.trainable=e),this.trainable_=e}get trainableWeights(){return this.trainable_?this._trainableWeights.filter(e=>e.trainable):[]}set trainableWeights(e){this._trainableWeights=e}get nonTrainableWeights(){return this.trainable?this._trainableWeights.filter(e=>!e.trainable).concat(this._nonTrainableWeights):this._trainableWeights.concat(this._nonTrainableWeights)}set nonTrainableWeights(e){this._nonTrainableWeights=e}get weights(){return this.trainableWeights.concat(this.nonTrainableWeights)}get stateful(){return this._stateful}resetStates(){if(!this.stateful)throw new Error("Cannot call the resetStates() method of a non-stateful Layer object.")}assertInputCompatibility(e){let t=Vt(e);if(this.inputSpec==null||this.inputSpec.length===0)return;let o=Vt(this.inputSpec);if(t.length!==o.length)throw new O(`Layer ${this.name} expects ${o.length} inputs, but it received ${t.length} input tensors. Input received: ${e}`);for(let n=0;n<t.length;n++){let s=t[n],i=o[n];if(i==null)continue;let a=s.rank;if(i.ndim!=null&&a!==i.ndim)throw new O(`Input ${n} is incompatible with layer ${this.name}: expected ndim=${i.ndim}, found ndim=${a}`);if(i.maxNDim!=null&&a>i.maxNDim)throw new O(`Input ${n} is incompatible with layer ${this.name}: expected max_ndim=${i.maxNDim}, found ndim=${a}`);if(i.minNDim!=null&&a<i.minNDim)throw new O(`Input ${n} is incompatible with layer ${this.name}: expected min_ndim=${i.minNDim}, found ndim=${a}.`);if(i.dtype!=null&&s.dtype!==i.dtype)throw new O(`Input ${n} is incompatible with layer ${this.name} : expected dtype=${i.dtype}, found dtype=${s.dtype}.`);if(i.axes){let l=s.shape;for(let u in i.axes){let c=Number(u),p=i.axes[u],m=c>=0?l[c]:l[l.length+c];if(p!=null&&[p,null].indexOf(m)===-1)throw new O(`Input ${n} is incompatible with layer ${this.name}: expected axis ${c} of input shape to have value ${p} but got shape ${l}.`)}}if(i.shape!=null)for(let l=0;l<i.shape.length;++l){let u=i.shape[l],c=s.shape[l];if(u!=null&&c!=null&&u!==c)throw new O(`Input ${n} is incompatible with layer ${this.name}: expected shape=${i.shape}, found shape=${s.shape}.`)}}}call(e,t){return e}invokeCallHook(e,t){this._callHook!=null&&this._callHook(e,t)}setCallHook(e){this._callHook=e}clearCallHook(){this._callHook=null}apply(e,t){t=t||{},this.assertNotDisposed();let o=Vt(e),n=k3(e),s=E3(e);if(n===s)throw new O("Arguments to apply() must be all SymbolicTensors or all Tensors");return Fo(this.name,()=>{if(!this.built){this.assertInputCompatibility(e);let i=[];for(let a of Vt(e))i.push(a.shape);this.build(Me(i)),this.built=!0,this.initialWeights&&this.setWeights(this.initialWeights),this._refCount===null&&s&&(this._refCount=1)}if(this.assertInputCompatibility(e),s){let i=this.call(e,t);this.supportsMasking&&this.setMaskMetadata(e,i);let a=Vt(i),l=[];for(let u of a)o.indexOf(u)!==-1&&(u=u.clone()),l.push(u);if(i=Me(l),this.activityRegularizer!=null)throw new bt("Layer invocation in the presence of activity regularizer(s) is not supported yet.");return i}else{let i=I3(e),a=this.computeOutputShape(i),l,u=T3(e);if(this.warnOnIncompatibleInputShape(Array.isArray(e)?i[0]:i),a!=null&&a.length>0&&Array.isArray(a[0])?l=a.map((c,p)=>new ar(u,c,this,Vt(e),t,this.name,p)):l=new ar(u,a,this,Vt(e),t,this.name),this.addInboundNode(e,l,null,null,i,a,t),this._refCount++,this.activityRegularizer!=null)throw new bt("Layer invocation in the presence of activity regularizer(s) is not supported yet.");return l}})}warnOnIncompatibleInputShape(e){if(this.batchInputShape!=null)if(e.length!==this.batchInputShape.length)console.warn(`The rank of the input tensor provided (shape: ${JSON.stringify(e)}) does not match that of the batchInputShape (${JSON.stringify(this.batchInputShape)}) of the layer ${this.name}`);else{let t=!1;this.batchInputShape.forEach((o,n)=>{o!=null&&e[n]!=null&&e[n]!==o&&(t=!0)}),t&&console.warn(`The shape of the input tensor (${JSON.stringify(e)}) does not match the expectation of layer ${this.name}: ${JSON.stringify(this.batchInputShape)}`)}}get outputShape(){if(this.inboundNodes==null||this.inboundNodes.length===0)throw new Yr(`The layer ${this.name} has never been called and thus has no defined output shape.`);let e=[];for(let t of this.inboundNodes){let o=JSON.stringify(t.outputShapes);e.indexOf(o)===-1&&e.push(o)}if(e.length===1){let t=this.inboundNodes[0].outputShapes;return Array.isArray(t)&&Array.isArray(t[0])&&t.length===1?t[0]:t}else throw new Yr(`The layer ${this.name} has multiple inbound nodes with different output shapes. Hence the notion of "output shape" is ill-defined for the layer.`)}countParams(){if(!this.built)throw new fr(`You tried to call countParams() on ${this.name}, but the layer is not built yet. Build it first by calling build(batchInputShape).`);return Lu(this.weights)}build(e){this.built=!0}getWeights(e=!1){return up(e?this.trainableWeights:this.weights)}setWeights(e){z(()=>{let t=this.weights;if(t.length!==e.length)throw new O(`You called setWeights(weights) on layer "${this.name}" with a weight list of length ${e.length}, but the layer was expecting ${t.length} weights. Provided weights: ${e}...`);if(t.length===0)return;let o=[],n=up(t);for(let s=0;s<n.length;++s){let i=n[s],a=t[s],l=e[s];if(!b.arraysEqual(i.shape,l.shape))throw new O(`Layer weight shape ${i.shape} not compatible with provided weight shape ${l.shape}`);o.push([a,l])}Pu(o)})}addWeight(e,t,o,n,s,i,a,l){if(this._addedWeightNames.indexOf(e)!==-1)throw new O(`Duplicate weight name ${e} for layer ${this.name}`);this._addedWeightNames.push(e),o==null&&(o="float32"),this.fastWeightInitDuringBuild&&(n=l!=null?l():qt("zeros"));let u=n.apply(t,o),c=new lp(u,o,e,i,a);return u.dispose(),s!=null&&this.addLoss(()=>s.apply(c.read())),i==null&&(i=!0),i?this._trainableWeights.push(c):this._nonTrainableWeights.push(c),c}setFastWeightInitDuringBuild(e){this.fastWeightInitDuringBuild=e}addLoss(e){e==null||Array.isArray(e)&&e.length===0||(e=Vt(e),this._losses!==void 0&&this._losses!==null&&this.losses.push(...e))}computeOutputShape(e){return e}computeMask(e,t){if(!this.supportsMasking){if(t!=null)if(Array.isArray(t))t.forEach(o=>{if(o!=null)throw new TypeError(`Layer ${this.name} does not support masking, but was passed an inputMask.`)});else throw new TypeError(`Layer ${this.name} does not support masking, but was passed an inputMask.`);return null}return t}setMaskMetadata(e,t,o){if(!this.supportsMasking)return;let n=this.computeMask(e,o),s=Vt(t),i=Vt(n);if(s.length!==i.length)throw new Error(`${this.name} outputs ${s.length} tensors but ${s.length} masks for those tensors`);for(let a=0;a<s.length;a++)s[a].kerasMask=i[a]}addInboundNode(e,t,o,n,s,i,a=null){let l=Vt(e);t=Vt(t),o=Vt(o),n=Vt(n),s=Ou(s),i=Ou(i);let u=[],c=[],p=[];for(let m of l)u.push(m.sourceLayer),c.push(m.nodeIndex),p.push(m.tensorIndex);new ws({outboundLayer:this,inboundLayers:u,nodeIndices:c,tensorIndices:p,inputTensors:l,outputTensors:t,inputMasks:o,outputMasks:n,inputShapes:s,outputShapes:i},a);for(let m=0;m<t.length;m++)t[m].sourceLayer=this,t[m].nodeIndex=this.inboundNodes.length-1,t[m].tensorIndex=m}getConfig(){let e={name:this.name,trainable:this.trainable};return this.batchInputShape!=null&&(e.batchInputShape=this.batchInputShape),this.dtype!=null&&(e.dtype=this.dtype),e}disposeWeights(){return this.weights.forEach(e=>e.dispose()),this.weights.length}assertNotDisposed(){if(this._refCount===0)throw new Error(`Layer '${this.name}' is already disposed.`)}dispose(){if(!this.built)throw new Error(`Cannot dispose Layer ${this.name} because it has not been built yet.`);if(this._refCount===null)throw new Error(`Cannot dispose Layer ${this.name} because it has not been used yet.`);this.assertNotDisposed();let e=0;return--this._refCount===0&&(e=this.disposeWeights()),{refCountAfterDispose:this._refCount,numDisposedVariables:e}}};function I3(r){r=Vt(r);let e=[];for(let t of r)e.push(t.shape);return Me(e)}function T3(r){return"float32"}function xy(r,e,t){if((e==null||t!=null&&t>0)&&(e=r.sourceLayer,t=r.nodeIndex),e.inboundNodes.length===0)return[r];{let o=e.inboundNodes[t];if(o.inboundLayers.length===0)return o.inputTensors;{let n=[];for(let s=0;s<o.inboundLayers.length;s++){let i=o.inputTensors[s],a=o.inboundLayers[s],l=o.nodeIndices[s],u=xy(i,a,l);for(let c of u)n.indexOf(c)===-1&&n.push(c)}return n}}}function k3(r){let e=!0;for(let t of Vt(r))if(!(t instanceof ar)){e=!1;break}return e}function E3(r){let e=!0;for(let t of Vt(r))if(t instanceof ar){e=!1;break}return e}var Wi=(()=>{class r extends yt{constructor(t){if(super({dtype:t.dtype,name:t.name!=null?t.name:Vi("input").toString()}),t.batchSize==null&&(t.batchSize=null),t.sparse==null&&(t.sparse=!1),this.trainable=!1,this.built=!0,this.sparse=t.sparse,t.inputShape!=null&&t.batchInputShape!=null)throw new O("Only provide the inputShape OR batchInputShape argument to inputLayer, not both at the same time.");let o=t.batchInputShape;if(o==null){if(t.inputShape==null)throw new O("An InputLayer should be passed either a `batchInputShape` or an `inputShape`.");o=[t.batchSize].concat(t.inputShape)}else if(t.batchSize!=null)throw new O("Cannot specify batchSize if batchInputShape is specified when creating an InputLayer.");let n=t.dtype||"float32";this.batchInputShape=o,this.dtype=n,this.inputSpec=[{shape:o}];let s=new ar(this.dtype,this.batchInputShape,this,[],{},this.name);s.nodeIndex=0,s.tensorIndex=0,new ws({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:[s],outputTensors:[s],inputMasks:[null],outputMasks:[null],inputShapes:[o],outputShapes:[o]})}apply(t,o){throw new O(`Cannot pass any input to an InputLayer's apply() method. InputLayer name: ${this.name}`)}dispose(){return{refCountAfterDispose:this._refCount,numDisposedVariables:0}}getConfig(){return{batchInputShape:this.batchInputShape,dtype:this.dtype,sparse:this.sparse,name:this.name}}}return r.className="InputLayer",r})();H.registerClass(Wi);function df(r){if(r.batchShape==null&&r.shape==null)throw new Error("Please provide to Input either a `shape` or a `batchShape` argument. Note that `shape` does not include the batch dimension.");if(r.batchShape!=null&&r.shape!=null)throw new O("Please provide either a `shape` or `batchShape` argument to Input, but not both.");let e=r.batchShape;r.shape!=null&&e==null&&(e=[null].concat(r.shape));let t=r.dtype;return t==null&&(t="float32"),new Wi({batchInputShape:e,name:r.name,dtype:t,sparse:r.sparse}).inboundNodes[0].outputTensors[0]}function A3(r,e){if(r.dtype==null||r.dtype===e.dtype)return e;try{return Y(e,r.dtype)}catch{throw new O(`The dtype of the feed (${e.dtype}) can not be cast to the dtype of the key '${r.name}' (${r.dtype}).`)}}var rn=class r{constructor(e){if(this.id2Value={},this.id2Mask={},this.name2Id={},e instanceof r)for(let t in e.id2Value)this.id2Value[t]=e.id2Value[t],t in e.id2Mask&&(this.id2Mask[t]=e.id2Mask[t]);else{if(e==null)return;for(let t of e)this.add(t.key,t.value)}}add(e,t,o){if(this.id2Value[e.id]==null)this.id2Value[e.id]=A3(e,t),this.name2Id[e.name]=e.id,o!=null&&(this.id2Mask[e.id]=o);else throw new O(`Duplicate key: name=${e.name}, id=${e.id}`);return this}addFeed(e){this.add(e.key,e.value)}hasKey(e){return this.id2Value[e.id]!=null}names(){return Object.keys(this.name2Id)}getValue(e){if(e instanceof ar){if(this.id2Value[e.id]==null)throw new O(`Nonexistent key: ${e.name}`);return this.id2Value[e.id]}else{let t=this.name2Id[e];if(t==null)throw new O(`Feed dict has no SymbolicTensor name: ${e}`);return this.id2Value[t]}}getMask(e){if(e instanceof ar){if(this.id2Value[e.id]==null)throw new O(`Nonexistent key: ${e.name}`);return this.id2Mask[e.id]}else{let t=this.name2Id[e];if(t==null)throw new O(`Feed dict has no SymbolicTensor name: ${e}`);return this.id2Mask[t]}}disposeMasks(){this.id2Mask!=null&&Ct(this.id2Mask)}},gf=new np,xf=new np;function jI(r){gf?.setMaxEntries(r),xf?.setMaxEntries(r)}function Ha(r,e,t,o){let n=t==null?!1:t.training,s=Array.isArray(r),i=s?r:[r],a=i.map(h=>h.name),l=[],u=e.names();for(let h of a)u.indexOf(h)!==-1?l.push(e.getValue(h)):l.push(null);o!=null&&(o.maxNumTensors=-1/0,o.minNumTensors=1/0);let c=a.join(",")+"|"+e.names().sort().join(","),p=gf.get(c),m;if(p==null){let h=$3(i,e);p=h.sorted,m=h.recipientCounts,gf.put(c,p),xf.put(c,m)}m={},n||Object.assign(m,xf.get(c));let f=new rn(e);for(let h=0;h<p.length;++h){if(o!=null){let _=$c().numTensors;_>o.maxNumTensors&&(o.maxNumTensors=_),_<o.minNumTensors&&(o.minNumTensors=_)}let g=p[h],d=g.sourceLayer;if(d instanceof Wi)continue;let x=[],y=[],w=[],C=!1;for(let _ of g.inputs){let L=f.getValue(_),M=f.getMask(_);x.push(L),y.push(M),M!=null&&(C=!0),n||(m[_.name]--,m[_.name]===0&&!e.hasKey(_)&&a.indexOf(_.name)===-1&&!L.isDisposed&&_.sourceLayer.stateful!==!0&&w.push(L))}C&&(t=t||{},t.mask=y[0]);let S=Vt(d.apply(x,t)),E=null;d.supportsMasking&&(E=d.computeMask(x,y));let A=R3(g),$=Array.isArray(A)?A:[A];for(let _=0;_<$.length;++_){f.hasKey($[_])||f.add($[_],S[_],Array.isArray(E)?E[0]:E);let L=a.indexOf($[_].name);L!==-1&&(l[L]=S[_])}n||Ct(w)}return f.disposeMasks(),s?l:l[0]}function $3(r,e){b.assert(r!=null&&r.length>0,()=>"Expected at least one fetch, got none");let t=[],o={};if(r.length===1){let n=KI(r[0],e);t=n.sorted,o=n.recipientMap}else{let n=new Set;for(let s of r){let{sorted:i,recipientMap:a}=KI(s,e);for(let l of i)n.has(l.name)||(t.push(l),n.add(l.name));for(let l in a)o[l]==null&&(o[l]=new Set),a[l].forEach(u=>o[l].add(u))}}return{sorted:t,recipientCounts:D3(o)}}function D3(r){let e={};for(let t in r)e[t]=r[t].size;return e}function KI(r,e){let t=new Set,o=[],n={};for(let a of e.names())t.add(a);let s=[],i=[];for(s.push(r);s.length>0;){let a=s[s.length-1];if(t.has(a.name)){s.pop();continue}let l=i[i.length-1]===s.length-1;if(a.inputs.length===0||l)s.pop(),o.push(a),t.add(a.name),l&&i.pop();else{i.push(s.length-1);for(let u of a.inputs)n[u.name]==null&&(n[u.name]=new Set),n[u.name].add(a.name),!t.has(u.name)&&s.push(u)}}return{sorted:o,recipientMap:n}}function R3(r){let e;if(r.sourceLayer.inboundNodes.length===1)e=r.sourceLayer.output;else{let t=null;for(let o=0;o<r.sourceLayer.inboundNodes.length;++o)for(let n of r.sourceLayer.inboundNodes[o].outputTensors)if(n.id===r.id){t=o;break}e=r.sourceLayer.getOutputAt(t)}return e}var F3=P();F3.registerFlag("TOPOLOGICAL_SORT_CACHE_MAX_ENTRIES",()=>100,jI);function yy(r,e){return z(()=>jt(it(R(r,r),e,!0)))}var qa=class extends H.Serializable{getConfig(){return{}}},ZI=(()=>{class r extends qa{constructor(t){super(),this.defaultMaxValue=2,this.defaultAxis=0,this.maxValue=t.maxValue!=null?t.maxValue:this.defaultMaxValue,this.axis=t.axis!=null?t.axis:this.defaultAxis}apply(t){return z(()=>{let o=yy(t,this.axis),n=qe(o,0,this.maxValue);return R(t,ot(n,j(Ee(),o)))})}getConfig(){return{maxValue:this.maxValue,axis:this.axis}}}return r.className="MaxNorm",r})();H.registerClass(ZI);var QI=(()=>{class r extends qa{constructor(t){super(),this.defaultAxis=0,this.axis=t.axis!=null?t.axis:this.defaultAxis}apply(t){return z(()=>ot(t,j(Ee(),yy(t,this.axis))))}getConfig(){return{axis:this.axis}}}return r.className="UnitNorm",r})();H.registerClass(QI);var JI=(()=>{class r extends qa{apply(t){return Lr(t)}}return r.className="NonNeg",r})();H.registerClass(JI);var tT=(()=>{class r extends qa{constructor(t){super(),this.defaultMinValue=0,this.defaultMaxValue=1,this.defaultRate=1,this.defaultAxis=0,this.minValue=t.minValue!=null?t.minValue:this.defaultMinValue,this.maxValue=t.maxValue!=null?t.maxValue:this.defaultMaxValue,this.rate=t.rate!=null?t.rate:this.defaultRate,this.axis=t.axis!=null?t.axis:this.defaultAxis}apply(t){return z(()=>{let o=yy(t,this.axis),n=j(R(this.rate,qe(o,this.minValue,this.maxValue)),R(1-this.rate,o));return R(t,ot(n,j(Ee(),o)))})}getConfig(){return{minValue:this.minValue,maxValue:this.maxValue,rate:this.rate,axis:this.axis}}}return r.className="MinMaxNorm",r})();H.registerClass(tT);var XI={maxNorm:"MaxNorm",minMaxNorm:"MinMaxNorm",nonNeg:"NonNeg",unitNorm:"UnitNorm"};function ce(r){return Du(r)}function YI(r,e={}){return tn(r,H.SerializationMap.getMap().classNameMap,e,"constraint")}function pe(r){if(r==null)return null;if(typeof r=="string"){let t={className:r in XI?XI[r]:r,config:{}};return YI(t)}else return r instanceof qa?r:YI(r)}var Nr={};to(Nr,{Layer:()=>yt,RNN:()=>on,RNNCell:()=>vs,activation:()=>gV,add:()=>IV,alphaDropout:()=>lG,average:()=>TV,averagePooling1d:()=>Ob,averagePooling2d:()=>Lb,averagePooling3d:()=>Pb,avgPool1d:()=>OV,avgPool2d:()=>PV,avgPool3d:()=>MV,avgPooling1d:()=>LV,avgPooling2d:()=>zV,avgPooling3d:()=>BV,batchNormalization:()=>RV,bidirectional:()=>tG,categoryEncoding:()=>fG,centerCrop:()=>pG,concatenate:()=>kV,conv1d:()=>aV,conv2d:()=>lV,conv2dTranspose:()=>uV,conv3d:()=>cV,conv3dTranspose:()=>pV,convLstm2d:()=>YV,convLstm2dCell:()=>ZV,cropping2D:()=>fV,dense:()=>xV,depthwiseConv2d:()=>dV,dot:()=>DV,dropout:()=>yV,elu:()=>eV,embedding:()=>NV,flatten:()=>wV,gaussianDropout:()=>aG,gaussianNoise:()=>iG,globalAveragePooling1d:()=>VV,globalAveragePooling2d:()=>GV,globalMaxPool1d:()=>rG,globalMaxPool2d:()=>oG,globalMaxPooling1d:()=>ET,globalMaxPooling2d:()=>AT,gru:()=>UV,gruCell:()=>HV,input:()=>ky,inputLayer:()=>tV,layerNormalization:()=>FV,leakyReLU:()=>oV,lstm:()=>qV,lstmCell:()=>KV,masking:()=>uG,maxPool1d:()=>nG,maxPool2d:()=>sG,maxPooling1d:()=>$T,maxPooling2d:()=>DT,maxPooling3d:()=>WV,maximum:()=>EV,minimum:()=>AV,multiply:()=>$V,permute:()=>vV,prelu:()=>nV,randomWidth:()=>hG,reLU:()=>rV,repeatVector:()=>CV,rescaling:()=>cG,reshape:()=>SV,resizing:()=>mG,rnn:()=>QV,separableConv2d:()=>mV,simpleRNN:()=>jV,simpleRNNCell:()=>XV,softmax:()=>sV,spatialDropout1d:()=>bV,stackedRNNCells:()=>JV,thresholdedReLU:()=>iV,timeDistributed:()=>eG,upSampling2d:()=>hV,zeroPadding2d:()=>_V});function Cs(r){return B(this,null,function*(){if(r==null)return;let e=[],t=[],o=[];for(let n in r){let s=r[n];if(typeof s!="number"){let i=s;e.push(i.data()),t.push(n),o.push(i)}}if(e.length>0){let n=yield Promise.all(e);for(let s=0;s<n.length;++s)r[t[s]]=n[s][0];Ct(o)}})}function yf(r){if(r!=null)for(let e in r){let t=r[e];typeof t!="number"&&t.dispose()}}var L3=125,Ui=class{constructor(){this.validationData=null}setParams(e){this.params=e}onEpochBegin(e,t){return B(this,null,function*(){})}onEpochEnd(e,t){return B(this,null,function*(){})}onBatchBegin(e,t){return B(this,null,function*(){})}onBatchEnd(e,t){return B(this,null,function*(){})}onTrainBegin(e){return B(this,null,function*(){})}onTrainEnd(e){return B(this,null,function*(){})}setModel(e){}},bf=class{constructor(e,t=10){e==null&&(e=[]),this.callbacks=e,this.queueLength=t}append(e){this.callbacks.push(e)}setParams(e){for(let t of this.callbacks)t.setParams(e)}setModel(e){for(let t of this.callbacks)t.setModel(e)}onEpochBegin(e,t){return B(this,null,function*(){t==null&&(t={});for(let o of this.callbacks)yield o.onEpochBegin(e,t)})}onEpochEnd(e,t){return B(this,null,function*(){t==null&&(t={});for(let o of this.callbacks)yield o.onEpochEnd(e,t)})}onBatchBegin(e,t){return B(this,null,function*(){t==null&&(t={});for(let o of this.callbacks)yield o.onBatchBegin(e,t)})}onBatchEnd(e,t){return B(this,null,function*(){t==null&&(t={});for(let o of this.callbacks)yield o.onBatchEnd(e,t)})}onTrainBegin(e){return B(this,null,function*(){e==null&&(e={});for(let t of this.callbacks)yield t.onTrainBegin(e)})}onTrainEnd(e){return B(this,null,function*(){e==null&&(e={});for(let t of this.callbacks)yield t.onTrainEnd(e)})}},by=class extends Ui{constructor(){super()}onEpochBegin(e){return B(this,null,function*(){this.seen=0,this.totals={}})}onBatchEnd(e,t){return B(this,null,function*(){t==null&&(t={});let o=t.size==null?0:t.size;this.seen+=o;for(let n in t){let s=t[n];if(typeof s=="number")this.totals.hasOwnProperty(n)||(this.totals[n]=0),this.totals[n]=this.totals[n]+s*o;else{let i;n in this.totals?i=this.totals[n]:this.totals[n]=0;let a=z(()=>j(this.totals[n],R(s,o)));this.totals[n]=a,i?.dispose()}}})}onEpochEnd(e,t){return B(this,null,function*(){if(t!=null)for(let o of this.params.metrics)this.totals[o]!=null&&(typeof this.totals[o]=="number"?t[o]=this.totals[o]/this.seen:z(()=>{let n=R(ot(1,this.seen),this.totals[o]);t[o]=n,this.totals[o].dispose(),_e(t[o])}))})}},wf=class extends Ui{onTrainBegin(e){return B(this,null,function*(){this.epoch=[],this.history={}})}onEpochEnd(e,t){return B(this,null,function*(){t==null&&(t={}),this.epoch.push(e);for(let o in t)this.history[o]==null&&(this.history[o]=[]),this.history[o].push(t[o])})}syncData(){return B(this,null,function*(){let e=[],t=[],o=[];for(let s in this.history){let i=this.history[s];for(let a=0;a<i.length;++a)if(typeof i[a]!="number"){let l=i[a];e.push(l.data()),t.push(s),o.push(a)}}let n=yield Promise.all(e);for(let s=0;s<n.length;++s)this.history[t[s]][o[s]].dispose(),this.history[t[s]][o[s]]=n[s][0]})}},Cf=class extends Ui{constructor(e,t){if(super(),this.currentEpoch=0,this.nowFunc=e.nowFunc,this.nextFrameFunc=e.nextFrameFunc||op,this.yieldEvery=t||"auto",this.yieldEvery==="auto"&&(this.yieldEvery=L3),this.yieldEvery==="never"&&e.onYield!=null)throw new Error("yieldEvery is `never` but you provided an `onYield` callback. Either change `yieldEvery` or remove the callback");b.isNumber(this.yieldEvery)&&(this.maybeWait=yI(this.maybeWait.bind(this),this.yieldEvery,this.nowFunc)),this.trainBegin=e.onTrainBegin,this.trainEnd=e.onTrainEnd,this.epochBegin=e.onEpochBegin,this.epochEnd=e.onEpochEnd,this.batchBegin=e.onBatchBegin,this.batchEnd=e.onBatchEnd,this.yield=e.onYield}maybeWait(e,t,o){return B(this,null,function*(){let n=[];this.yield!=null&&(yield Cs(o),n.push(this.yield(e,t,o))),n.push(this.nextFrameFunc()),yield Promise.all(n)})}onEpochBegin(e,t){return B(this,null,function*(){this.currentEpoch=e,this.epochBegin!=null&&(yield Cs(t),yield this.epochBegin(e,t))})}onEpochEnd(e,t){return B(this,null,function*(){let o=[];this.epochEnd!=null&&(yield Cs(t),o.push(this.epochEnd(e,t))),this.yieldEvery==="epoch"&&o.push(this.nextFrameFunc()),yield Promise.all(o)})}onBatchBegin(e,t){return B(this,null,function*(){this.batchBegin!=null&&(yield Cs(t),yield this.batchBegin(e,t))})}onBatchEnd(e,t){return B(this,null,function*(){let o=[];this.batchEnd!=null&&(yield Cs(t),o.push(this.batchEnd(e,t))),this.yieldEvery==="batch"?o.push(this.nextFrameFunc()):b.isNumber(this.yieldEvery)&&o.push(this.maybeWait(this.currentEpoch,e,t)),yield Promise.all(o)})}onTrainBegin(e){return B(this,null,function*(){this.trainBegin!=null&&(yield Cs(e),yield this.trainBegin(e))})}onTrainEnd(e){return B(this,null,function*(){this.trainEnd!=null&&(yield Cs(e),yield this.trainEnd(e))})}};function Sf(r,e){return r==null&&(r={}),r instanceof Ui?[r]:Array.isArray(r)&&r[0]instanceof Ui?r:Vt(r).map(o=>new Cf(o,e))}var eT=(()=>{class r{constructor(){}static registerCallbackConstructor(t,o){b.assert(t>=0&&Number.isInteger(t),()=>`Verbosity level is expected to be an integer >= 0, but got ${t}`),r.checkForDuplicate(o),r.constructors[t]==null&&(r.constructors[t]=[]),r.constructors[t].push(o)}static checkForDuplicate(t){for(let o in r.constructors)r.constructors[+o].forEach(s=>{if(s===t)throw new O("Duplicate callback constructor.")})}static clear(){r.constructors={}}static createCallbacks(t){let o=[];for(let n in r.constructors){let s=+n;t>=s&&o.push(...r.constructors[s])}return o.map(n=>new n)}}return r.constructors={},r})();function vf(r,e,t,o,n,s,i,a,l){let u=new wf,c=[new by,...eT.createCallbacks(e)];r!=null&&c.push(...r),c.push(u);let p=new bf(c);return p.setParams({epochs:t,initialEpoch:o,samples:n,steps:s,batchSize:i,verbose:e,doValidation:a,metrics:l}),{callbackList:p,history:u}}function Sr(r,e={},t=!1){return tn(r,H.SerializationMap.getMap().classNameMap,e,"layer",t)}function cp(r,e){return z(()=>{r.dtype!=="float32"&&(r=Y(r,"float32"));let t=it(Ua(r),e,!0),o=ps(t.shape,Ee()),n=jt(Or(t,o));return ot(r,n)})}function Ka(r,e){return z(()=>ne(Ua(lt(e,r)),-1))}function mp(r,e){return z(()=>ne(ke(lt(e,r)),-1))}function fp(r,e){return z(()=>{let t=lt(r,e),o=qe(ke(r),Ee(),Number.MAX_VALUE),n=ke(ot(t,o));return R(100,ne(n,-1))})}function P3(r,e){return z(()=>{let t=qe(e,Ee(),Number.MAX_VALUE),o=pr(j(1,t)),n=qe(r,Ee(),Number.MAX_VALUE),s=pr(j(1,n));return ne(Ua(lt(o,s)),-1)})}function z3(r,e){return z(()=>{let t=Or(0,lt(1,R(r,e)));return ne(Ua(t),-1)})}function M3(r,e){return z(()=>{let t=Or(0,lt(1,R(r,e)));return ne(t,-1)})}function B3(r,e){return z(()=>{let t=it(R(r,e),-1),o=Ke(R(lt(1,r),e),-1);return Or(0,j(1,lt(o,t)))})}function V3(r,e){return z(()=>{let t=Math.log(2),o=lt(e,r),n=lt(j(o,Zo(R(-2,o))),t);return ne(n,-1)})}function ja(r,e,t=!1){return z(()=>{if(t)e=Pa(e);else{let o=it(e,e.shape.length-1,!0);e=ot(e,o)}return e=qe(e,Ee(),1-Ee()),Lt(it(R(Y(r,"float32"),pr(e)),e.shape.length-1))})}function zu(r,e,t=!1){return z(()=>{let o=Y(hs(AI(r)),"int32");e=qe(e,Ee(),1-Ee());let n=e.shape,s=F(bu(o,n[n.length-1]),n);return ja(s,e,t)})}function G3(r,e){if(!b.arraysEqual(r.shape,e.shape))throw new O(`logits and labels must have the same shape, but got shapes ${JSON.stringify(r.shape)} and ${JSON.stringify(e.shape)}`);return z(()=>{let t=Lr(e),o=Lt(ke(e));return j(lt(t,R(e,r)),Vc(Le(o)))})}function Mu(r,e){return z(()=>{let t;return t=qe(e,Ee(),1-Ee()),t=pr(ot(t,lt(1,t))),ne(G3(r,t),-1)})}function W3(r,e){return z(()=>{let t=qe(r,Ee(),1),o=qe(e,Ee(),1);return it(R(r,pr(ot(t,o))),-1)})}function U3(r,e){return z(()=>{let t=pr(j(Ee(),e));return ne(lt(e,R(r,t)),-1)})}function Nf(r,e){return z(()=>{let t=cp(r,-1),o=cp(e,-1),n=R(t,o);return Lt(it(n,-1))})}var pp={meanSquaredError:Ka,meanAbsoluteError:mp,meanAbsolutePercentageError:fp,meanSquaredLogarithmicError:P3,squaredHinge:z3,hinge:M3,categoricalHinge:B3,logcosh:V3,categoricalCrossentropy:ja,sparseCategoricalCrossentropy:zu,binaryCrossentropy:Mu,kullbackLeiblerDivergence:W3,poisson:U3,cosineProximity:Nf};function If(r){if(typeof r=="string"){if(r in pp)return pp[r];let e=`Unknown loss ${r}`;throw r.toLowerCase().includes("softmaxcrossentropy")&&(e=`Unknown loss ${r}. Use "categoricalCrossentropy" as the string name for tf.losses.softmaxCrossEntropy`),new O(e)}else return r}function kf(r,e){return z(()=>{let t=R(.5,Pe(e)),o=ir(ge(e,t),r.dtype);return ne(cr(r,o),-1)})}function Ef(r,e){return z(()=>ir(cr(us(r,-1),us(e,-1)),"float32"))}function H3(r,e){return z(()=>Y(it(nr(cr(r,1),cr(e,1))),"float32"))}function q3(r,e){return z(()=>Y(it(nr(cr(r,0),cr(e,1))),"float32"))}function oT(r,e){return z(()=>{let t=H3(r,e),o=q3(r,e),n=j(t,o);return Y(ee(ge(n,0),ot(t,n),0),"float32")})}function wy(r,e){return Mu(r,e)}function Cy(r,e){return r.rank===e.rank&&(r=$o(r,[r.rank-1])),e=us(e,-1),e.dtype!==r.dtype&&(e=Y(e,r.dtype)),Y(cr(r,e),"float32")}var K3=Ka,j3=Ka,X3=mp,Y3=mp,Z3=fp,Q3=fp,Af=ja,J3=Nf,Sy=zu,Tf={binaryAccuracy:kf,categoricalAccuracy:Ef,precision:oT,categoricalCrossentropy:Af,sparseCategoricalCrossentropy:Sy,mse:K3,MSE:j3,mae:X3,MAE:Y3,mape:Z3,MAPE:Q3,cosine:J3};function nT(r){if(typeof r=="string"&&r in Tf)return Tf[r];if(typeof r!="string"&&r!=null)return r;throw new O(`Unknown metric ${r}`)}function hp(r){if(Zr(r!==null,`Unknown LossOrMetricFn ${r}`),typeof r=="string")return r;{let e;for(let t of Object.keys(pp))if(pp[t]===r){e=t;break}if(e!==void 0)return e;for(let t of Object.keys(Tf))if(Tf[t]===r){e=t;break}return e!==void 0?e:r.name}}function iT(r){let e={Adagrad:()=>Jo.adagrad(.01),Adadelta:()=>Jo.adadelta(1,.95,Ee()),Adam:()=>Jo.adam(.001,.9,.999,Ee()),Adamax:()=>Jo.adamax(.002,.9,.999,Ee(),0),RMSProp:()=>Jo.rmsprop(.001,.9,0,Ee()),SGD:()=>Jo.sgd(.01)};if(e.adagrad=e.Adagrad,e.adadelta=e.Adadelta,e.adam=e.Adam,e.adamax=e.Adamax,e.rmsprop=e.RMSProp,e.sgd=e.SGD,r in e)return e[r]();throw new O(`Unknown Optimizer ${r}`)}function Ny(r,e,t=!1){if(r==null||typeof r!="object"||Object.getPrototypeOf(r)!==Object.prototype||!vy(r))throw new Error("User-defined metadata is expected to be a JSON object, but is not.");if(t){let o=JSON.stringify(r);o.length>1048576&&console.warn(`User-defined metadata of model "${e}" is too large in size (length=${o.length} when serialized). It is not recommended to store such large objects in user-defined metadata. Please make sure its serialized length is <= 1048576.`)}}function vy(r){if(r===null)return!0;if(typeof r=="object")if(Object.getPrototypeOf(r)===Object.prototype){let e=Object.keys(r);for(let t of e)if(typeof t!="string"||!vy(r[t]))return!1;return!0}else if(Array.isArray(r)){for(let e of r)if(!vy(e))return!1;return!0}else return!1;else{let e=typeof r;return e==="string"||e==="number"||e==="boolean"}}function aT(r,e,t,o=console.log){let n=rB(r),s=["Layer (type)","Input Shape","Output shape","Param #"];n?(e=e||90,t=t||[.32,.61,.89,1]):(e=e||115,t=t||[.24,.48,.7,.8,1]),t[t.length-1]<=1&&(t=t.map(c=>Math.floor(e*c)));let i;if(!n){s.push("Receives inputs"),i=[];for(let c in r.nodesByDepth)i.push(...r.nodesByDepth[c])}o("_".repeat(e)),$f(s,t,o),o("=".repeat(e));let a=r.layers;for(let c=0;c<a.length;++c)n?oB(a[c],t,o):nB(a[c],t,i,o),o((c===a.length-1?"=":"_").repeat(e));r.checkTrainableWeightsConsistency();let l=eB(r),u=Lu(r.nonTrainableWeights);o(`Total params: ${l+u}`),o(`Trainable params: ${l}`),o(`Non-trainable params: ${u}`),o("_".repeat(e))}function eB(r){let e;return r.collectedTrainableWeights!=null?e=Lu(r.collectedTrainableWeights):e=Lu(r.trainableWeights),e}function rB(r){let e=!0,t=[],o=[];for(let n in r.nodesByDepth)t.push(r.nodesByDepth[n]);for(let n of t){if(n.length>1||n.length===1&&n[0].inboundLayers.length>1){e=!1;break}o.push(...n)}if(e)for(let n of r.layers){let s=!1;for(let i of n.inboundNodes)if(o.indexOf(i)!==-1)if(s){e=!1;break}else s=!0;if(!e)break}return e}function $f(r,e,t=console.log){let o="";for(let n=0;n<r.length;++n)n>0&&(o=o.slice(0,o.length-1)+" "),o+=r[n],o=o.slice(0,e[n]),o+=" ".repeat(e[n]-o.length);t(o)}function oB(r,e,t){let o,n;try{n=r.inboundNodes.map(l=>JSON.stringify(l.inputShapes)).join(",")}catch{n="multiple"}try{o=JSON.stringify(r.outputShape)}catch{o="multiple"}let s=r.name,i=r.getClassName(),a=[`${s} (${i})`,n,o,r.countParams().toString()];$f(a,e,t)}function nB(r,e,t,o){let n,s;try{s=r.inboundNodes.map(p=>JSON.stringify(p.inputShapes)).join(",")}catch{s="multiple"}try{n=JSON.stringify(r.outputShape)}catch{n="multiple"}let i=[];for(let p of r.inboundNodes)if(!(t!=null&&t.length>0&&t.indexOf(p)===-1))for(let m=0;m<p.inboundLayers.length;++m){let f=p.inboundLayers[m].name,h=p.nodeIndices[m],g=p.tensorIndices[m];i.push(`${f}[${h}][${g}]`)}let a=r.name,l=r.getClassName(),u=i.length===0?"":i[0],c=[`${a} (${l})`,s,n,r.countParams().toString(),u];$f(c,e,o);for(let p=1;p<i.length;++p)$f(["","","","",i[p]],e,o)}function lT(r,e,t){return(r==="inboundNodes"||r==="outputLayers"||r==="inputLayers")&&e===0&&typeof t=="string"}function Bu(r,e){if(r===null)return null;if(typeof r=="string")return xs(r);if(typeof r=="number"||typeof r=="boolean")return r;if(r instanceof Array){let t=[],o=r.length;for(let n=0;n<o;++n){let s=r[n];lT(e,n,s)?t.push(s):t.push(Bu(s,e))}return t}else{let t={};for(let o of Object.keys(r)){let n=r[o];if(o==="name"&&typeof n=="string")t[o]=n;else{let s=xs(o);t[s]=Bu(n,s)}}return t}}function Df(r,e){if(r==null)return null;if(typeof r=="string")return mo(r);if(typeof r=="number"||typeof r=="boolean")return r;if(r instanceof Array){let t=[],o=r.length;for(let n=0;n<o;++n){let s=r[n];lT(e,n,s)?t.push(s):t.push(Df(s,e))}return t}else{let t={};for(let o of Object.keys(r)){let n=r[o],s=mo(o);(o==="name"||o==="className")&&typeof n=="string"?t[s]=n:t[s]=Df(n,o)}return t}}var Vu="4.22.0";var sB=r=>{let e=Object.keys(r);if(e.length===0)return!1;let t=e[0].split("/");return!isNaN(parseInt(t[t.length-1],10))},Rf=class r extends yt{constructor(e){if(super({}),this.containerNodes=new Set,this.name=e.name,this.name==null){let y=this.getClassName().toLowerCase();this.name=Vi(y)}if(this.supportsMasking=!1,this.trainable_=!0,Array.isArray(e.inputs)?this.inputs=e.inputs.slice():this.inputs=[e.inputs],Array.isArray(e.outputs)?this.outputs=e.outputs.slice():this.outputs=[e.outputs],fo(this.inputs).length!==this.inputs.length)throw new O(`The list of inputs passed to the model is redundant. All inputs should only appear once. Found: ${this.inputs.map(y=>y.name)}`);fo(this.outputs).length!==this.outputs.length&&console.warn(`The list of outputs passed to the model is redundant. All outputs should only appear once. Found: ${this.outputs.map(y=>y.name)}`),this.inputLayers=[],this.inputLayersNodeIndices=[],this.inputLayersTensorIndices=[],this.outputLayers=[],this.outputLayersNodeIndices=[],this.outputLayersTensorIndices=[],this.layers=[],this.internalContainerRefs=[];for(let y of this.outputs){let w=y.sourceLayer,C=y.nodeIndex,S=y.tensorIndex;this.outputLayers.push(w),this.outputLayersNodeIndices.push(C),this.outputLayersTensorIndices.push(S)}for(let y of this.inputs){let w=y.sourceLayer,C=y.nodeIndex,S=y.tensorIndex;Zr(C===0,"input layer has >1 nodes"),Zr(S===0,"input layer has >1 tensors"),this.inputLayers.push(w),this.inputLayersNodeIndices.push(C),this.inputLayersTensorIndices.push(S)}this.inputNames=[],this.outputNames=[],this.feedInputShapes=[],this.feedInputNames=[],this.feedOutputNames=[];for(let y=0;y<this.inputLayers.length;y++){let w=this.inputLayers[y];if(!(w instanceof Wi))throw new TypeError(`Input layers to a LayersModel must be InputLayer objects. Received inputs: ${e.inputs}. Input ${y} (0-based) originates from layer type ${w.getClassName()}.`);this.inputNames.push(w.name),this.feedInputShapes.push(w.batchInputShape),this.feedInputNames.push(w.name)}for(let y of this.outputLayers)this.outputNames.push(y.name);this.internalInputShapes=this.inputs.map(y=>y.shape),this.internalOutputShapes=this.outputs.map(y=>y.shape);let t={},o={},n={},s={},i={},a=[],l=(y,w,C,S,E,A)=>{(S==null||E==null||A==null)&&(S=y.sourceLayer,E=y.nodeIndex,A=y.tensorIndex);let $=S.inboundNodes[E];if(C.indexOf($)!==-1)throw new fr(`The tensor ${y.name} at layer "${S.name}" is part of a cycle.`);if(w.indexOf($)!==-1)return;this.containerNodes.add(r.nodeKey(S,E)),S.id in i||(i[S.id]=Object.keys(i).length),C.indexOf($)===-1&&C.push($);let _=$.inboundLayers.length;for(let L=0;L<_;L++){let M=$.inputTensors[L],V=$.inboundLayers[L],G=$.nodeIndices[L],W=$.tensorIndices[L];l(M,w,C,V,G,W)}for(w.push($);C.indexOf($)>=0;)C.splice(C.indexOf($),1);a.push($)},u=[],c=[];for(let y of this.outputs)l(y,u,c);let p=a.slice().reverse();for(let y of p){o[y.id]=y,y.id in t||(t[y.id]=0);let w=t[y.id],C=n[y.outboundLayer.id]==null?0:n[y.outboundLayer.id];w=Math.max(w,C),n[y.outboundLayer.id]=w,s[y.outboundLayer.id]=y.outboundLayer,t[y.id]=w;for(let S=0;S<y.inboundLayers.length;S++){let E=y.inboundLayers[S],A=y.nodeIndices[S],$=E.inboundNodes[A],_=t[$.id]==null?0:t[$.id];t[$.id]=Math.max(w+1,_),o[$.id]=$}}let m={};for(let y in t){let w=t[y];w in m||(m[w]=[]),m[w].push(o[y])}let f={};for(let y in n){let w=n[y];w in f||(f[w]=[]),f[w].push(s[y])}let h=Object.keys(f).map(y=>parseInt(y,10)).sort(sp);this.layers=[];for(let y of h){let w=f[y];w.sort((C,S)=>{let E=i[C.id],A=i[S.id];return E<A?-1:E>A?1:0});for(let C of w)C instanceof r&&this.internalContainerRefs.push(C),this.layers.push(C)}this.layersByDepth=f,h=Object.keys(m).map(y=>parseInt(y,10)).sort(sp);let g=this.inputs.slice(),d=[];for(let y of h)for(let w of m[y]){let C=w.outboundLayer;if(C!=null){for(let S of w.inputTensors)if(g.indexOf(S)===-1)throw new fr(`Graph disconnected: cannot obtain value for tensor ${S} at layer "${C.name}". The following previous layers were accessed without issue: ${d}`);for(let S of w.outputTensors)g.push(S);d.push(C.name)}}this.nodesByDepth=m;let x=this.layers.map(y=>y.name);for(let y of x){let w=x.filter(C=>C===y).length;if(w!==1)throw new fr(`The name "${y}" is used ${w} times in the model. All layer names should be unique. Layer names: `+JSON.stringify(x))}this.outboundNodes=[],this.inboundNodes=[],new ws({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:this.inputs,outputTensors:this.outputs,inputMasks:this.inputs.map(y=>null),outputMasks:this.outputs.map(y=>null),inputShapes:this.inputs.map(y=>y.shape),outputShapes:this.outputs.map(y=>y.shape)}),this.built=!0,this._refCount=1}assertNotDisposed(){if(this._refCount===0)throw new Error(`Container '${this.name}' is already disposed.`)}dispose(){this.assertNotDisposed();let e={refCountAfterDispose:null,numDisposedVariables:0};if(--this._refCount===0){for(let t of this.layers)e.numDisposedVariables+=t.dispose().numDisposedVariables;for(let t of this.internalContainerRefs)e.numDisposedVariables+=t.dispose().numDisposedVariables}return e.refCountAfterDispose=this._refCount,e}get trainable(){return this.trainable_}set trainable(e){this.layers.forEach(t=>{t._trainableWeights.forEach(o=>o.trainable=e)}),this.trainable_=e}get trainableWeights(){if(this._trainableWeights.length>0)throw new O("Container instance unexpectedly contains _trainableWeights.The trainable weights of a Container are a union of the trainable weights of its consituent Layers. Its own _trainableWeights must remain an empty Array.");if(!this.trainable)return[];let e=[];for(let t of this.layers)e=e.concat(t.trainableWeights);return e}get nonTrainableWeights(){let e=[];for(let t of this.layers)e.push(...t.nonTrainableWeights);if(!this.trainable){let t=[];for(let o of this.layers)t.push(...o.trainableWeights);return t.concat(e)}return e}get weights(){return this.trainableWeights.concat(this.nonTrainableWeights)}loadWeights(e,t=!0){let o={},n=0,s=sB(e);s&&this.parseWeights(e);for(let a of this.layers)for(let[l,u]of a.weights.entries()){let c=s?`${u.name.split("/").slice(0,-1).join("/")+"/"}${l}`:u.originalName;if(o[c]!=null)throw new O(`Duplicate weight name: ${c}`);o[c]=u,n++}let i=[];for(let a in e){let l=a;if(o[a]==null){let u=a.split("/");l=u.slice(0,-2).concat([u[u.length-1]]).join("/")}if(o[l]!=null)i.push([o[l],e[a]]);else if(t)throw new O(`Provided weight data has no target variable: ${a}`);delete o[l]}if(t){let a=[];for(let l in o)a.push(l);if(a.length>0)throw new O(`${a.length} of ${n} weights are not set: ${a}`)}Pu(i)}parseWeights(e){for(let t in Object.keys(e)){let o=t.split("/"),n=["vars","layer_checkpoint_dependencies"],s=o.map(i=>i.startsWith("_")?i.slice(1):i).filter(i=>!n.includes(i)).join("/");s!==t&&(e[s]=e[t],delete e[t])}}updatedConfig(){let e=this.getConfig(),t={};return t.className=this.getClassName(),t.config=e,t.kerasVersion=`tfjs-layers ${Vu}`,t.backend="TensorFlow.js",t}toJSON(e,t=!0){let o=Df(this.updatedConfig());return t?JSON.stringify(o):o}call(e,t){return z(()=>{e=Vt(e);let o=new rn;for(let n=0;n<this.inputs.length;++n)o.add(this.inputs[n],e[n]);return Ha(this.outputs,o,t)})}computeMask(e,t){return z(()=>{e=Vt(e);let o;return t==null?o=po(null,e.length):o=Vt(t),this.runInternalGraph(e,o)[1]})}computeOutputShape(e){let t=Ou(e);if(t.length!==this.inputLayers.length)throw new O(`Invalid inputShape argument ${e}: model has ${this.inputLayers.length} tensor inputs.`);let o={};for(let a=0;a<t.length;a++){let l=this.inputLayers[a],u=t[a],c=l.name+"_0_0";o[c]=u}let n=Object.keys(this.nodesByDepth).map(a=>parseInt(a,10)).sort(sp);if(n.length>1)for(let a of n){let l=this.nodesByDepth[a];for(let u of l){let c=u.outboundLayer;if(this.inputLayers.map(g=>g.id).indexOf(c.id)!==-1)continue;let p=[];for(let g=0;g<u.inboundLayers.length;g++){let d=u.inboundLayers[g],x=u.nodeIndices[g],y=u.tensorIndices[g],w=`${d.name}_${x}_${y}`,C=o[w];p.push(C)}let m=c.computeOutputShape(Me(p)),f=Ou(m),h=c.inboundNodes.indexOf(u);for(let g=0;g<f.length;g++){let d=`${c.name}_${h}_${g}`;o[d]=f[g]}}}let s=[],i=[];for(let a=0;a<this.outputLayers.length;a++){let l=this.outputLayers[a],u=this.outputLayersNodeIndices[a],c=this.outputLayersTensorIndices[a],p=`${l.name}_${u}_${c}`;i.push(p)}for(let a=0;a<i.length;a++){let l=i[a];Zr(l in o),s.push(o[l])}return Me(s)}runInternalGraph(e,t){t==null&&(t=po(null,e.length));let o={};for(let l=0;l<this.inputs.length;++l){let u=this.inputs[l],c=e[l],p=t[l];o[u.id]=[c,p]}let n=Object.keys(this.nodesByDepth).map(l=>parseInt(l,10)).sort(sp);for(let l of n){let u=this.nodesByDepth[l];for(let c of u){let p=c.outboundLayer,m=c.inputTensors,f=c.outputTensors,h=new Array;for(let g of m)g.id in o&&h.push(o[g.id]);if(h.length===m.length){let g={},d,x,y,w;if(c.callArgs!=null&&(g=c.callArgs),h.length===1){let[C,S]=h[0];g.mask==null&&(g.mask=S),y=Vt(p.call(C,g)),w=Vt(p.computeMask(C,S)),d=[C],x=[S]}else d=h.map(C=>C[0]),x=h.map(C=>C[1]),g.mask==null&&(g.mask=x),y=Vt(p.call(d,g)),w=Vt(p.computeMask(d,x));if(p.activityRegularizer)throw new bt("LayersModel invocation with concrete Tensor value(s) in the presence of activity regularizer(s) is not supported yet.");for(let C=0;C<f.length;++C){let S=f[C],E=y[C],A=w[C];o[S.id]=[E,A]}}}}let s=[],i=[],a=[];for(let l of this.outputs){Zr(l.id in o,`Could not compute output ${l.name} : ${l.id}`);let[u,c]=o[l.id];a.push(u.shape),s.push(u),i.push(c)}return[s,i,a]}buildNodeConversionMap(e){let t={},o;for(let n of this.layers){o=n instanceof r?1:0;for(let s=0;s<n.inboundNodes.length;s++){let i=r.nodeKey(n,s);this.containerNodes.has(i)&&(t[i]=o,o+=1)}}return t}getLayer(e,t){if(t!=null)return this.findLayer(t);if(e==null)throw new O("Provide either a layer name or layer index");if(typeof e=="number")return this.findLayer(e);for(let o of this.layers)if(o.name===e)return o;throw new O(`No such layer: ${e}`)}findLayer(e){if(this.layers.length<=e)throw new O(`Was asked to retrieve layer at index ${e}, but model only has ${this.layers.length} layer(s).`);return this.layers[e]}calculateLosses(){return z(()=>{let e=[];for(let t of this.layers)for(let o=0;o<t.inboundNodes.length;++o){let n=r.nodeKey(t,o);this.containerNodes.has(n)&&e.push(...t.calculateLosses())}return e})}getConfig(){let e={name:this.name},t=this.buildNodeConversionMap(this.layers),o=[];for(let i of this.layers){let a=i.getClassName(),l=i.getConfig(),u=[];for(let p=0;p<i.inboundNodes.length;p++){let m=i.inboundNodes[p],f=r.nodeKey(i,p),h={};if(this.containerNodes.has(f)){if(m.callArgs)try{JSON.stringify(m.callArgs),h=m.callArgs}catch{console.warn(`Layer ${i.name} was passed non-serializable keyword arguments: ${m.callArgs}. They will not be included in the serialized model (and thus will be missing at deserialization time).`),h={}}if(m.inboundLayers.length>0){let g=[];for(let d=0;d<m.inboundLayers.length;d++){let x=m.inboundLayers[d],y=m.nodeIndices[d],w=m.tensorIndices[d],C=r.nodeKey(x,y),S=t[C];S==null&&(S=0),g.push([x.name,S,w,h])}u.push(g)}}}let c={};c.name=i.name,c.className=a,c.config=l,c.inboundNodes=u,o.push(c)}e.layers=o;let n=[];for(let i=0;i<this.inputLayers.length;i++){let a=this.inputLayers[i],l=this.inputLayersNodeIndices[i],u=r.nodeKey(a,l);if(!this.containerNodes.has(u))continue;let c=t[u];c==null&&(c=0);let p=this.inputLayersTensorIndices[i];n.push([a.name,c,p])}e.inputLayers=n;let s=[];for(let i=0;i<this.outputLayers.length;i++){let a=this.outputLayers[i],l=this.outputLayersNodeIndices[i],u=r.nodeKey(a,l);if(!this.containerNodes.has(u))continue;let c=t[u];c==null&&(c=0);let p=this.outputLayersTensorIndices[i];s.push([a.name,c,p])}return e.outputLayers=s,e}static fromConfig(e,t,o={},n=!1){let s={},i={};function a(d,x){d.name in i?i[d.name].push(x):i[d.name]=[x]}function l(d,x){let y=[],w;for(let C of x){let S=C[0],E=C[1],A=C[2];if(w=C[3]==null?{}:C[3],!(S in s)){a(d,x);return}let $=s[S];if($.inboundNodes.length<=E){a(d,x);return}let _=$.inboundNodes[E];y.push(_.outputTensors[A])}y.length>0&&d.apply(Me(y),w)}function u(d){let x=d.name,y=Sr(d,t.customObjects!=null?t.customObjects:{});y.setFastWeightInitDuringBuild(n),s[x]=y,d.inboundNodes.forEach(C=>{if(!(C instanceof Array))throw new O(`Corrupted configuration, expected array for nodeData: ${C}`);a(y,C)})}let c=t.name,p=t.layers;for(let d of p)u(d);for(;!gI(i);)for(let d of p){let x=s[d.name];if(x.name in i){let y=i[x.name];delete i[x.name];for(let w of y)l(x,w)}}let m=[],f=[],h=t.inputLayers;for(let d of h){let x=d[0],y=d[1],w=d[2];Zr(x in s);let S=s[x].inboundNodes[y].outputTensors;m.push(S[w])}let g=t.outputLayers;for(let d of g){let x=d[0],y=d[1],w=d[2];Zr(x in s);let S=s[x].inboundNodes[y].outputTensors;f.push(S[w])}return new e({inputs:m,outputs:f,name:c})}get stateful(){if(this._stateful)throw new O("Container instance unexpectedly has _stateful = true. The statefulness of a Container is determined by the Layers it contains. Its _stateful property must remain the default false.");for(let e of this.layers)if(e.stateful)return!0;return!1}resetStates(){z(()=>{this.layers.forEach(e=>{e.stateful&&e.resetStates()})})}};function iB(r,e,t){let o=e.length;if(r==null||Array.isArray(r)&&r.length===0)return e.map(n=>null);if(o===1)return Array.isArray(r)&&r.length===1?r:typeof r=="object"&&e[0]in r?[r[e[0]]]:[r];if(Array.isArray(r)){if(r.length!==o)throw new Error(`Provided ${t} is an array of ${r.length} element(s), but the model has ${o} outputs. Make sure a set of weights is provided for each model output.`);return r}else if(typeof r=="object"&&Object.keys(r).length>0&&typeof r[Object.keys(r)[0]]=="object"){let n=[];return e.forEach(s=>{s in r?n.push(r[s]):n.push(null)}),n}else throw new Error(`The model has multiple (${o}) outputs, so ${t} must be either an array with ${o} elements or an object with ${e} keys. Provided ${t} not understood: ${JSON.stringify(r)}`)}function Ff(r,e){return iB(r,e,"classWeight")}function _f(r,e,t,o){return B(this,null,function*(){if(e!=null||o!=null)throw new Error("Support sampleWeight is not implemented yet");if(t!=null){let n=z(()=>{if(r.shape.length===1)return Rr(r);if(r.shape.length===2){if(r.shape[1]>1)return us(r,1);if(r.shape[1]===1)return F(r,[r.shape[0]]);throw new Error(`Encountered unexpected last-dimension size (${r.shape[1]}) during handling of class weights. The size is expected to be >= 1.`)}else throw new Error(`Unexpected rank of target (y) tensor (${r.rank}) during handling of class weights. The rank is expected to be 1 or 2.`)}),s=Array.from(yield n.data());Ct(n);let i=[];return s.forEach(a=>{if(t[a]==null)throw new Error(`classWeight must contain all classes in the training data. The class ${a} exists in the data but not in classWeight`);i.push(t[a])}),Ne(i,"float32")}else return null})}function uT(r,e){return R(r,e)}var aB=32;function mT(r,e){let t,o,n=e;t=n.xs,o=n.ys,b.assert(t!=null&&o!=null,()=>`A Dataset iterator for fitDataset() is expected to generate objects of the form \`{xs: xVal, ys: yVal}\`, where the two values may be \`tf.Tensor\`, an array of Tensors, or a map of string to Tensor.  The provided Dataset instead generates ${e}`);let s=cT("input",r.inputNames,t),i=cT("output",r.outputNames,o),a=s[0].shape[0];b.assert(s.length===r.inputs.length,()=>`LayersModel has ${r.inputs.length} inputs, but the dataset provides ${s.length} inputs.  (Expected input keys: ${JSON.stringify(r.inputNames)})`),b.assert(i.length===r.outputs.length,()=>`LayersModel has ${r.outputs.length} outputs, but the dataset provides ${i.length} outputs.  (Expected output keys: ${JSON.stringify(r.outputNames)})`);for(let l=0;l<s.length;l++)b.assert(s[l].shape[0]===a,()=>`Batch size mismatch: input ${r.inputNames[l]} has ${s[l].shape[0]}; expected  ${a} based on input ${r.inputNames[0]}.`);for(let l=0;l<i.length;l++)b.assert(i[l].shape[0]===a,()=>`Batch size mismatch: output ${r.outputNames[l]} has ${i[l].shape[0]}; expected  ${a} based on input ${r.inputNames[0]}.`);return{xs:s,ys:i}}function cT(r,e,t){if(t instanceof Bt)return[t];if(Array.isArray(t))return b.assert(t.length===e.length,()=>`Received an array of ${t.length} Tensors, but expected ${e.length} to match the ${r} keys ${e}.`),t;{let o=[];for(let n of e){if(t[n]==null)throw new O(`The feature data generated by the dataset lacks the required ${r} key '${n}'.`);o.push(t[n])}return o}}function lB(r){if(r.length===3)throw new bt("Validation with sample weights is not implemented yet.");return{xs:r[0],ys:r[1]}}function fT(r,e,t){return B(this,null,function*(){let o=t.batchesPerEpoch!=null;if(b.assert(r.optimizer!=null,()=>"You must compile a model before training/testing. Use LayersModel.compile(modelCompileConfig)."),b.assert(t!=null,()=>"For fitDataset(), the 2nd argument (config) is required, but it is not provided in this call."),b.assert(t.epochs!=null&&t.epochs>0&&Number.isInteger(t.epochs),()=>`For fitDataset(), config.epochs is expected to be a positive integer, but got ${t.epochs}`),b.assert(!o||t.batchesPerEpoch>0&&Number.isInteger(t.batchesPerEpoch),()=>`For fitDataset(), config.batchesPerEpoch is expected to be a positive integer if specified, but got ${t.batchesPerEpoch}`),b.assert(t.validationSplit==null,()=>"`validationSplit` is not supported by `fitDataset()`. Use validationData instead."),r.isTraining)throw new Error("Cannot start training because another fit() call is ongoing.");r.isTraining=!0;try{let n=t.validationData!=null,s,i;if(n)if(pT(t.validationData))b.assert(t.validationBatches==null||t.validationBatches>0&&Number.isInteger(t.validationBatches),()=>`For fitDataset() with dataset-based validation, config.validationBatches is expected not to be provided, or to be a positive integer, but got ${t.validationBatches}`);else{let d=lB(t.validationData);s=d.xs,i=d.ys}let a=r.makeTrainFunction(),l=r.getDedupedMetricsNames(),u;n?u=l.slice().concat(l.map(d=>"val_"+d)):u=l.slice();let c=Sf(t.callbacks,t.yieldEvery),p=t.verbose==null?1:t.verbose,{callbackList:m,history:f}=vf(c,p,t.epochs,null,null,uB(e,t),null,n,u);m.setModel(r),r.history=f,yield m.onTrainBegin(),r.stopTraining_=!1;let h=t.initialEpoch==null?0:t.initialEpoch,g=yield e.iterator();for(;h<t.epochs;){let d={};yield m.onEpochBegin(h);let x=0,y=0;for(o||(g=yield e.iterator());!o||x<t.batchesPerEpoch;){let w=yield g.next();if(o&&w.done){console.warn(`You provided \`batchesPerEpoch\` as ${t.batchesPerEpoch}, but your dataset iterator ran out of data after ${x} batches; interrupting training. Make sure that your dataset can generate at least \`batchesPerEpoch * epochs\` batches (in this case, ${t.batchesPerEpoch*t.epochs} batches). You may need to use the repeat() function when building your dataset.`);break}if(w.value!=null){let{xs:C,ys:S}=mT(r,w.value),E={};E.batch=y,E.size=C[0].shape[0],yield m.onBatchBegin(y,E);let A=[];if(t.classWeight!=null){let L=Ff(t.classWeight,r.outputNames);for(let M=0;M<L.length;++M)A.push(yield _f(S[M],null,L[M]))}let $=C.concat(S).concat(A),_=a($);Ct($);for(let L=0;L<l.length;++L){let M=l[L],V=_[L];E[M]=V,_e(V)}yield m.onBatchEnd(y,E),yf(E),y++,x++}if(o?x>=t.batchesPerEpoch:w.done){if(n){let C;pT(t.validationData)?C=Vt(yield r.evaluateDataset(t.validationData,{batches:t.validationBatches})):C=Vt(r.evaluate(s,i,{batchSize:t.validationBatchSize==null?aB:t.validationBatchSize,verbose:0}));for(let S=0;S<r.metricsNames.length;++S)d[`val_${r.metricsNames[S]}`]=C[S]}break}if(r.stopTraining_)break}if(yield m.onEpochEnd(h,d),h++,r.stopTraining_)break}return yield m.onTrainEnd(),yield r.history.syncData(),r.history}finally{r.isTraining=!1}})}function uB(r,e){let t=null;return e.batchesPerEpoch!=null?t=e.batchesPerEpoch:Number.isFinite(r.size)&&(t=r.size),t}function pT(r){return typeof r.iterator=="function"}function cB(r){return typeof r.next=="function"}function hT(r,e,t){return B(this,null,function*(){t=t||{};let o=t.batches!=null,n=r.testFunction,s=[];if(t.verbose>0)throw new bt("Verbose mode is not implemented yet.");b.assert(!o||t.batches>0&&Number.isInteger(t.batches),()=>`Test loop expects \`batches\` to be a positive integer, but received ${JSON.stringify(t.batches)}`);let i=cB(e)?e:yield e.iterator(),a=0,l=0;for(;!o||l<t.batches;){let u=yield i.next();if(s=z(()=>{if(u.value){let{xs:c,ys:p}=mT(r,u.value),m=c.concat(p),f=z(()=>n(m));if(Ct(m),l===0)for(let g=0;g<f.length;++g)s.push(xt(0));let h=m[0].shape[0];for(let g=0;g<f.length;++g){let d=f[g],x=s[g];s[g]=z(()=>j(s[g],R(h,d))),l>0&&Ct(x)}Ct(f),a+=h,++l}return s}),u.done){o&&console.warn(`Your dataset iterator ran out of data during evaluateDataset(). Interrupting evalution. Make sure that your dataset can generate at least \`batches\` batches (in this case, ${t.batches} batches). You may need to use the repeat() function when building your dataset.`);break}}for(let u=0;u<s.length;++u){let c=s[u];s[u]=ot(s[u],a),Ct(c)}return Me(s)})}function Of(r){b.assert(r>0&&Number.isInteger(r),()=>`batchSize is required to be a positive integer, but got ${r}`)}function Gu(r,e,t){return r==null?[null]:Array.isArray(r)?r.map(o=>ys(o,e,t-e)):ys(r,e,t-e)}function Lf(r,e){return z(()=>r==null?null:Array.isArray(r)?r.map(t=>Lf(t,e)):pf(r,e.dtype==="int32"?e:Y(e,"int32")))}function Pf(r,e){let t=[],o=0,n=null;for(;o<r;)n=o+e,n>=r&&(n=r),t.push([o,n]),o=n;return t}function Iy(r){let e=[];r instanceof Bt&&(r=[r]);for(let t=0;t<r.length;++t){let o=r[t];if(o.rank===1)e.push(bs(o,1));else{if(o.rank===0)throw new Error("Expected tensor to be at least 1D, but received a 0D tensor (scalar).");e.push(o)}}return e}function xo(r,e){if(r==null)return;let t=[];if(e instanceof Bt)t.push(e.id);else if(Array.isArray(e))e.forEach(n=>t.push(n.id));else if(e!=null)for(let n in e){let s=e[n];t.push(s.id)}let o=[];if(r instanceof Bt)t.indexOf(r.id)===-1&&o.push(r);else if(Array.isArray(r))r.forEach(n=>{t.indexOf(n.id)===-1&&o.push(n)});else if(r!=null)for(let n in r){let s=r[n];t.indexOf(s.id)===-1&&o.push(s)}o.forEach(n=>{n.isDisposed||n.dispose()})}function pB(r){return r instanceof Bt}function Ty(r){return Array.isArray(r)}function dT(r){return!pB(r)&&!Ty(r)}function gT(r,e,t,o=!0,n=""){if(e==null||e.length===0){if(r!=null){let i=!1;if(Ty(r)&&r.length>0)i=!0;else if(dT(r)){for(let a in r)if(r.hasOwnProperty(a)){i=!0;break}}else i=!0;if(i)throw new O(`Error when checking model ${n} expected no data, but got ${r}`)}return[]}if(r==null)return e.map(i=>null);let s;if(dT(r)){r=r,s=[];for(let i of e){if(r[i]==null)throw new O(`No data provided for "${i}". Need data for each key in: ${e}`);s.push(r[i])}}else if(Ty(r)){if(r=r,r.length!==e.length)throw new O(`Error when checking model ${n}: the Array of Tensors that you are passing to your model is not the size the model expected. Expected to see ${e.length} Tensor(s), but instead got the following list of Tensor(s): ${r}`);s=r}else{if(r=r,e.length>1)throw new O(`The model ${n} expects ${e.length} Tensor(s), but only received one Tensor. Found: Tensor with shape ${r.shape}`);s=[r]}if(s=Iy(s),t!=null)for(let i=0;i<e.length;++i){if(t[i]==null)continue;let a=s[i];if(a.shape.length!==t[i].length)throw new O(`Error when checking ${n}: expected ${e[i]} to have ${t[i].length} dimension(s). but got array with shape ${a.shape}`);for(let l=0;l<t[i].length;++l){if(l===0&&!o)continue;let u=a.shape[l],c=t[i][l];if(c!=null&&c>=0&&u!==c)throw new O(`${n} expected a batch of elements where each example has shape [${t[i].slice(1,t[i].length)}] (i.e.,tensor shape [*,${t[i].slice(1,t[i].length)}]) but the ${n} received an input with ${a.shape[0]} examples, each with shape [${a.shape.slice(1,a.shape.length)}] (tensor shape [${a.shape}])`)}}return s}function mB(r,e,t){let o=fo(r.map(s=>s.shape[0]));o.sort();let n=fo(e.map(s=>s.shape[0]));if(n.sort(),o.length>1)throw new O(`All input Tensors (x) should have the same number of samples. Got array shapes: ${JSON.stringify(r.map(s=>s.shape))}`);if(n.length>1)throw new O(`All target Tensors (y) should have the same number of samples. Got array shapes: ${JSON.stringify(e.map(s=>s.shape))}`);if(o.length>0&&n.length>0&&!b.arraysEqual(o,n))throw new O(`Input Tensors should have the same number of samples as target Tensors. Found ${o[0]} input sample(s) and ${n[0]} target sample(s).`)}function fB(r,e,t){let o=[Ka,Mu,ja];for(let n=0;n<r.length;++n){let s=r[n],i=e[n],a=t[n];if(i!=null){if(i===ja&&s.shape[s.shape.length-1]===1)throw new O(`You are passing a target array of shape ${s.shape} while using a loss 'categorical_crossentropy'. 'categorical_crossentropy'expects targets to be binary matrices (1s and 0s) of shape [samples, classes].`);if(o.indexOf(i)!==-1){let l=s.shape.slice(1),u=a.slice(1);for(let c=0;c<l.length;++c){let p=l[c],m=u[c];if(m!=null&&p!==m)throw new O(`A target Tensor with shape ${s.shape} was passed for an output of shape ${a}, while using a loss function that expects targets to have the same shape as the output.`)}}}}}function xT(r,e,t,o=!0,n=""){let s;if(Array.isArray(r)){if(r.length!==e.length)throw new O(`Error when checking model ${n}: the Array of Tensors that you are passing to your model is not the size the the model expected. Expected to see ${e.length} Tensor(s), but instead got ${r.length} Tensors(s).`);s=r}else{if(e.length>1)throw new O(`The model expects ${e.length} ${n} Tensors, but only received one Tensor. Found: array with shape ${JSON.stringify(r.shape)}.`);s=[r]}if(t!=null)for(let i=0;i<e.length;++i){if(t[i]==null)continue;let a=s[i];if(a.shape.length!==t[i].length)throw new O(`Error when checking ${n}: expected ${e[i]} to have ${t[i].length} dimension(s), but got array with shape ${JSON.stringify(a.shape)}`);for(let l=0;l<t[i].length;++l){if(l===0&&!o)continue;let u=a.shape[l],c=t[i][l];if(c!=null&&c!==u)throw new O(`Error when checking ${n}: expected ${e[i]} to have shape ${JSON.stringify(t[i])} but got array with shape ${JSON.stringify(a.shape)}.`)}}}function hB(r,e){if(r==null||Array.isArray(r)&&r.length===0)return e.map(o=>[]);let t;if(typeof r=="string"||typeof r=="function")t=[r];else if(Array.isArray(r)||typeof r=="object")t=r;else throw new TypeError(`Type of metrics argument not understood. Expected an string,function, Array, or Object, found: ${r}`);if(Array.isArray(t))return e.map(o=>t);{let o=[];for(let n of e){let s=t.hasOwnProperty(n)?t[n]:[];Array.isArray(s)||(s=[s]),o.push(s)}return o}}var dB="layers-model",Ss=(()=>{class r extends Rf{constructor(t){super(t),this.isTraining=!1}summary(t,o,n=console.log){if(!this.built)throw new O("This model has never been called, thus its weights have not been created yet. So no summary can be displayed. Build the model first (e.g., by calling it on some test data).");aT(this,t,o,n)}compile(t){if(t.loss==null&&(t.loss=[]),this.loss=t.loss,typeof t.optimizer=="string")this.optimizer_=iT(t.optimizer),this.isOptimizerOwned=!0;else{if(!(t.optimizer instanceof Je))throw new O("User-defined optimizer must be an instance of tf.Optimizer.");this.optimizer_=t.optimizer,this.isOptimizerOwned=!1}let o=[];if(!Array.isArray(t.loss)&&typeof t.loss!="string"&&typeof t.loss!="function"){t.loss=t.loss;for(let a in t.loss)if(this.outputNames.indexOf(a)===-1)throw new O(`Unknown entry in loss dictionary: "${a}". Only expected the following keys: ${this.outputNames}`);for(let a of this.outputNames)t.loss[a]==null&&console.warn(`Output "${a}" is missing from loss dictionary. We assume this was done on purpose, and we will not be expecting data to be passed to ${a} during training`),o.push(If(t.loss[a]))}else if(Array.isArray(t.loss)){if(t.loss.length!==this.outputs.length)throw new O(`When passing an Array as loss, it should have one entry per model output. The model has ${this.outputs.length} output(s), but you passed loss=${t.loss}.`);o=t.loss.map(l=>If(l))}else{let a=If(t.loss);this.outputs.forEach(l=>{o.push(a)})}this.lossFunctions=o,this.feedOutputNames=[],this.feedOutputShapes=[],this.feedLossFns=[];for(let a=0;a<this.outputs.length;++a){let l=this.internalOutputShapes[a],u=this.outputNames[a];this.feedOutputNames.push(u),this.feedOutputShapes.push(l),this.feedLossFns.push(this.lossFunctions[a])}let n=[];this.metrics=t.metrics,this.metricsNames=["loss"],this.metricsTensors=[],Fo("loss",()=>{for(let a=0;a<this.outputs.length;++a){if(n.indexOf(a)!==-1)continue;let l=this.lossFunctions[a];this.outputs.length>1&&(this.metricsTensors.push([l,a]),this.metricsNames.push(this.outputNames[a]+"_loss"))}});let s=hB(t.metrics,this.outputNames),i=(a,l,u)=>{this.outputNames.length>1&&(l=this.outputNames[a]+"_"+l),this.metricsNames.push(l),this.metricsTensors.push([u,a])};Fo("metric",()=>{for(let a=0;a<this.outputs.length;++a){if(n.indexOf(a)!==-1)continue;let l=s[a];(c=>{let p="",m,f,h;for(let g of c){if(typeof g=="string"&&["accuracy","acc","crossentropy","ce"].indexOf(g)!==-1){let x=this.internalOutputShapes[a];x[x.length-1]===1||this.lossFunctions[a]===Mu?["accuracy","acc"].indexOf(g)!==-1?f=kf:["crossentropy","ce"].indexOf(g)!==-1&&(f=wy):this.lossFunctions[a]===zu?["accuracy","acc"].indexOf(g)!==-1?f=Cy:["crossentropy","ce"].indexOf(g)!==-1&&(f=Sy):["accuracy","acc"].indexOf(g)!==-1?f=Ef:["crossentropy","ce"].indexOf(g)!==-1&&(f=Af);let y;["accuracy","acc"].indexOf(g)!==-1?y="acc":["crossentropy","ce"].indexOf(g)!==-1&&(y="ce"),h=f,m=p+y}else h=nT(g),m=p+hp(g);let d;Fo(m,()=>{d=h}),i(a,m,d)}})(l)}}),this.collectedTrainableWeights=this.trainableWeights}checkTrainableWeightsConsistency(){this.collectedTrainableWeights!=null&&this.trainableWeights.length!==this.collectedTrainableWeights.length&&console.warn("Discrepancy between trainableweights and collected trainable weights. Did you set `model.trainable` without calling `model.compile()` afterwards?")}evaluate(t,o,n={}){let s=n.batchSize==null?32:n.batchSize;Of(s);let a=this.standardizeUserDataXY(t,o,!0,s);try{let l=a[0].concat(a[1]);this.makeTestFunction();let u=this.testFunction,c=this.testLoop(u,l,s,n.verbose,n.steps);return Me(c)}finally{xo(a[0],t),xo(a[1],o)}}evaluateDataset(t,o){return B(this,null,function*(){return this.makeTestFunction(),hT(this,t,o)})}checkNumSamples(t,o,n,s="steps"){let i;if(n!=null){if(i=null,o!=null)throw new O(`If ${s} is set, batchSize must be null or undefined.Got batchSize = ${o}`)}else if(t!=null)Array.isArray(t)?i=t[0].shape[0]:i=t.shape[0];else throw new O(`Either the input data should have a defined shape, or ${s} shoud be specified.`);return i}execute(t,o){if(Array.isArray(o)&&o.length===0)throw new O("`outputs` is an empty Array, which is not allowed.");let n=Array.isArray(o),s=n?o:[o],i=this.retrieveSymbolicTensors(s),a=new rn;if(t instanceof Bt&&(t=[t]),Array.isArray(t)){if(t.length!==this.inputs.length)throw new O(`The number of inputs provided (${t.length}) does not match the number of inputs of this model (${this.inputs.length}).`);for(let u=0;u<this.inputs.length;++u)a.add(this.inputs[u],t[u])}else for(let u of this.inputs){let c=t[u.name];if(c==null)throw new O(`No value is provided for the model's input ${u.name}`);a.add(u,c)}let l=Ha(i,a);return n?l:l[0]}retrieveSymbolicTensors(t){let o=po(null,t.length),n=t.length;for(let s of this.layers){let i=Array.isArray(s.output)?s.output:[s.output],a=i.map(l=>l.name);for(let l=0;l<t.length;++l){let u=a.indexOf(t[l]);if(u!==-1&&(o[l]=i[u],n--),n===0)break}if(n===0)break}if(n>0){let s=[];throw o.forEach((i,a)=>{i==null&&s.push(t[a])}),new O(`Cannot find SymbolicTensors for output name(s): ${JSON.stringify(s)}`)}return o}predictLoop(t,o=32,n=!1){return z(()=>{let s=this.checkNumSamples(t);if(n)throw new bt("Verbose predictLoop() is not implemented yet.");let i=Pf(s,o),a=this.outputs.map(l=>[]);for(let l=0;l<i.length;++l)z(()=>{let c=i[l][0],p=i[l][1],m=Gu(t,c,p),f=[];if(Array.isArray(m))for(let g=0;g<m.length;++g)f.push({key:this.inputs[g],value:m[g]});else f.push({key:this.inputs[0],value:m});let h=new rn(f);return Ha(this.outputs,h)}).forEach((c,p)=>a[p].push(c));return Me(a.map(l=>te(l,0)))})}predict(t,o={}){let n=Iy(t);xT(n,this.inputNames,this.feedInputShapes,!1);try{let s=o.batchSize==null?32:o.batchSize;return Of(s),this.predictLoop(n,s)}finally{xo(n,t)}}predictOnBatch(t){xT(t,this.inputNames,this.feedInputShapes,!0);let o=(Array.isArray(t)?t[0]:t).shape[0];return this.predictLoop(t,o)}standardizeUserDataXY(t,o,n=!0,s){if(this.optimizer_==null)throw new fr("You must compile a model before training/testing. Use LayersModel.compile(modelCompileArgs).");let i=[];for(let a=0;a<this.feedOutputShapes.length;++a){let l=this.feedOutputShapes[a];this.feedLossFns[a]===zu?i.push(l.slice(0,l.length-1).concat([1])):i.push(l)}if(t=gT(t,this.feedInputNames,this.feedInputShapes,!1,"input"),o=gT(o,this.feedOutputNames,i,!1,"target"),mB(t,o,null),fB(o,this.feedLossFns,this.feedOutputShapes),this.stateful&&s!=null&&s>0&&t[0].shape[0]%s!==0)throw new O(`In a stateful network, you should only pass inputs with a number of samples that is divisible by the batch size ${s}. Found: ${t[0].shape[0]} sample(s).`);return[t,o]}standardizeUserData(t,o,n,s,i=!0,a){return B(this,null,function*(){let[l,u]=this.standardizeUserDataXY(t,o,i,a);if(n!=null)throw new Error("sample weight is not supported yet.");let c=null;if(s!=null){let p=Ff(s,this.outputNames);c=[];for(let m=0;m<p.length;++m)c.push(yield _f(u[m],null,p[m]))}return[l,u,c]})}testLoop(t,o,n,s=0,i){return z(()=>{let a=this.checkNumSamples(o,n,i,"steps"),l=[];if(s>0)throw new bt("Verbose mode is not implemented yet.");if(i!=null)throw new bt("steps mode in testLoop() is not implemented yet");{let u=Pf(a,n),c=Ne(dr(0,a));for(let p=0;p<u.length;++p){let m=u[p][0],f=u[p][1],h=ys(c,m,f-m),g=Lf(o,h),d=t(g);if(p===0)for(let x=0;x<d.length;++x)l.push(xt(0));for(let x=0;x<d.length;++x){let y=d[x];l[x]=j(l[x],R(f-m,y))}}for(let p=0;p<l.length;++p)l[p]=ot(l[p],a)}return l})}getDedupedMetricsNames(){let t=this.metricsNames,o=[];for(let n=0;n<t.length;++n){let s=t[n],i=s;if(sy(t,s)>1){let a=sy(t.slice(0,n),s);i+=`_${a}`}o.push(i)}return o}makeTrainFunction(){return t=>{let o=[],n=t.slice(0,this.inputs.length),s=t.slice(this.inputs.length,this.inputs.length+this.outputs.length),i=t.slice(this.inputs.length+this.outputs.length,this.inputs.length+this.outputs.length*2),a=[],l=()=>{let m=[];for(let d=0;d<this.inputs.length;++d)m.push({key:this.inputs[d],value:n[d]});let f=new rn(m),h=Ha(this.outputs,f,{training:!0}),g;for(let d=0;d<this.lossFunctions.length;++d){let x=this.lossFunctions[d],y=x(s[d],h[d]);i[d]!=null&&(y=uT(y,i[d]));let w=ne(y);o.push(w),d===0?g=y:g=j(g,y)}for(let d=0;d<this.metricsTensors.length;++d){let x;if(this.outputs.length>1&&d<this.outputs.length)x=o[d];else{let y=this.metricsTensors[d][0],w=this.metricsTensors[d][1];x=ne(y(s[w],h[w]))}_e(x),a.push(x)}return g=ne(g),this.calculateLosses().forEach(d=>{g=j(g,d)}),g},u=this.collectedTrainableWeights.map(m=>m.read());return[this.optimizer_.minimize(l,!0,u)].concat(a)}}makeTestFunction(){this.testFunction=t=>z(()=>{let o=[],n,s=t.slice(0,this.inputs.length),i=t.slice(this.inputs.length,this.inputs.length+this.outputs.length),a=[];for(let c=0;c<this.inputs.length;++c)a.push({key:this.inputs[c],value:s[c]});let l=new rn(a),u=Ha(this.outputs,l);for(let c=0;c<this.lossFunctions.length;++c){let p=this.lossFunctions[c],m=ne(p(i[c],u[c]));c===0?n=m:n=j(n,m),o.push(n)}for(let c=0;c<this.metricsTensors.length;++c){let p=this.metricsTensors[c][0],m=this.metricsTensors[c][1],f=ne(p(i[m],u[m]));o.push(f)}return o})}fit(s,i){return B(this,arguments,function*(t,o,n={}){if(this.isTraining)throw new Error("Cannot start training because another fit() call is ongoing.");this.isTraining=!0;let a,l,u,c,p,m,f,h,g;try{let d=n.batchSize==null?32:n.batchSize;Of(d);let y=yield this.standardizeUserData(t,o,n.sampleWeight,n.classWeight,!1,d);a=y[0],l=y[1],g=y[2];let w=!1,C;if(n.validationData!=null&&n.validationData.length>0){if(w=!0,n.validationData.length===2)p=n.validationData[0],m=n.validationData[1];else throw n.validationData.length===3?new bt("validationData including sample weights is not supported yet."):new O(`When passing validation data, it must contain 2 (valX, valY) or 3 (valX, valY, valSampleWeight) items; ${n.validationData} is invalid.`);let G=yield this.standardizeUserData(p,m,null,null,!0,d);f=G[0],h=G[1],C=f.concat(h)}else if(n.validationSplit!=null&&n.validationSplit>0&&n.validationSplit<1){w=!0;let V=Math.floor(a[0].shape[0]*(1-n.validationSplit)),G=a[0].shape[0];f=Gu(a,V,G),u=a,a=Gu(a,0,V),h=Gu(l,V,G),c=l,l=Gu(l,0,V),C=f.concat(h)}else n.validationSteps!=null&&(w=!0);let S=a.concat(l).concat(g);this.checkTrainableWeightsConsistency();let E=this.makeTrainFunction(),A=this.getDedupedMetricsNames(),$,_;w?(this.makeTestFunction(),$=this.testFunction,_=A.slice().concat(A.map(V=>"val_"+V))):($=null,C=[],_=A.slice());let L=Sf(n.callbacks,n.yieldEvery);return yield this.fitLoop(E,S,A,d,n.epochs,n.verbose,L,$,C,n.shuffle,_,n.initialEpoch,null,null)}finally{this.isTraining=!1,xo(a,t),xo(l,o),xo(u,t),xo(c,o),xo(f,p),xo(h,m),g!=null&&Ct(g)}})}fitLoop(t,o,n,s,i,a,l,u,c,p,m,f,h,g){return B(this,null,function*(){s==null&&(s=32),i==null&&(i=1),p==null&&(p=!0),f==null&&(f=0);let d=!1;if(u!=null&&c!=null&&(d=!0),g!=null&&(d=!0,h==null))throw new O("Can only use `validationSteps` when doing step-wise training, i.e., `stepsPerEpoch` must be set.");let x=this.checkNumSamples(o,s,h,"steps_per_epoch"),y;x!=null&&(y=dr(0,x)),a==null&&(a=1);let{callbackList:w,history:C}=vf(l,a,i,f,x,h,s,d,m);w.setModel(this),this.history=C,yield w.onTrainBegin(),this.stopTraining_=!1;for(let S=f;S<i;++S){yield w.onEpochBegin(S);let E={};if(h!=null)throw new bt("stepsPerEpoch mode is not implemented yet.");{if(p==="batch")throw new bt("batch shuffling is not implemneted yet");p&&b.shuffle(y);let A=Ne(y),$=Pf(x,s);for(let _=0;_<$.length;++_){let L={};if(yield w.onBatchBegin(_,L),z(()=>{let M=$[_][0],V=$[_][1],G=ys(A,M,V-M);L.batch=_,L.size=V-M;let W=Lf(o,G),U=t(W);for(let K=0;K<n.length;++K){let Z=n[K],q=U[K];L[Z]=q,_e(q)}if(_===$.length-1&&d){let K=this.testLoop(u,c,s);for(let Z=0;Z<n.length;++Z){let q=n[Z],Q=K[Z];_e(Q),E["val_"+q]=Q}}}),yield w.onBatchEnd(_,L),yf(L),this.stopTraining_)break}A.dispose()}if(yield w.onEpochEnd(S,E),this.stopTraining_)break}return yield w.onTrainEnd(),yield this.history.syncData(),this.history})}fitDataset(t,o){return B(this,null,function*(){return fT(this,t,o)})}trainOnBatch(t,o){return B(this,null,function*(){let n=yield this.standardizeUserData(t,o),s=n[0],i=n[1],l=this.makeTrainFunction()(s.concat(i)),u=[];for(let c of l){let p=yield c.data();u.push(p[0])}return Ct(l),xo(n[0],t),xo(n[1],o),Me(u)})}getNamedWeights(t){let o=[],n=t!=null&&t.trainableOnly,s=n?this.trainableWeights:this.weights,i=this.getWeights(n);for(let a=0;a<s.length;++a)n&&!s[a].trainable||o.push({name:s[a].originalName,tensor:i[a]});return o}set stopTraining(t){this.stopTraining_=t}get stopTraining(){return this.stopTraining_}get optimizer(){return this.optimizer_}set optimizer(t){this.optimizer_!==t&&(this.optimizer_=t,this.isOptimizerOwned=!1)}dispose(){let t=super.dispose();if(t.refCountAfterDispose===0&&this.optimizer!=null&&this.isOptimizerOwned){let o=$c().numTensors;this.optimizer_.dispose(),t.numDisposedVariables+=o-$c().numTensors}return t}getLossIdentifiers(){let t;if(typeof this.loss=="string")t=mo(this.loss);else if(Array.isArray(this.loss)){for(let o of this.loss)if(typeof o!="string")throw new Error("Serialization of non-string loss is not supported.");t=this.loss.map(o=>mo(o))}else{let o=Object.keys(this.loss);t={};let n=this.loss;for(let s of o)if(typeof n[s]=="string")t[s]=mo(n[s]);else throw new Error("Serialization of non-string loss is not supported.")}return t}getMetricIdentifiers(){if(typeof this.metrics=="string"||typeof this.metrics=="function")return[mo(hp(this.metrics))];if(Array.isArray(this.metrics))return this.metrics.map(t=>mo(hp(t)));{let t={};for(let o in this.metrics)t[o]=mo(hp(this.metrics[o]));return t}}getTrainingConfig(){return{loss:this.getLossIdentifiers(),metrics:this.getMetricIdentifiers(),optimizer_config:{class_name:this.optimizer.getClassName(),config:this.optimizer.getConfig()}}}loadTrainingConfig(t){if(t.weighted_metrics!=null)throw new Error("Loading weight_metrics is not supported yet.");if(t.loss_weights!=null)throw new Error("Loading loss_weights is not supported yet.");if(t.sample_weight_mode!=null)throw new Error("Loading sample_weight_mode is not supported yet.");let o=Bu(t.optimizer_config),n=Sr(o),s;if(typeof t.loss=="string")s=xs(t.loss);else if(Array.isArray(t.loss))s=t.loss.map(a=>xs(a));else if(t.loss!=null){s={};for(let a in t.loss)s[a]=xs(t.loss[a])}let i;if(Array.isArray(t.metrics))i=t.metrics.map(a=>xs(a));else if(t.metrics!=null){i={};for(let a in t.metrics)i[a]=xs(t.metrics[a])}this.compile({loss:s,metrics:i,optimizer:n})}save(t,o){return B(this,null,function*(){if(typeof t=="string"){let c=uo.getSaveHandlers(t);if(c.length===0)throw new O(`Cannot find any save handlers for URL '${t}'`);if(c.length>1)throw new O(`Found more than one (${c.length}) save handlers for URL '${t}'`);t=c[0]}if(t.save==null)throw new O("LayersModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");let n=yield uo.encodeWeights(this.getNamedWeights(o)),l={modelTopology:this.toJSON(null,!1),format:dB,generatedBy:`TensorFlow.js tfjs-layers v${Vu}`,convertedBy:null};if((o==null?!1:o.includeOptimizer)&&this.optimizer!=null){l.trainingConfig=this.getTrainingConfig();let c="optimizer",{data:p,specs:m}=yield uo.encodeWeights(yield this.optimizer.getWeights(),c);n.specs.push(...m),n.data=uo.concatenateArrayBuffers([n.data,p])}return this.userDefinedMetadata!=null&&(Ny(this.userDefinedMetadata,this.name,!0),l.userDefinedMetadata=this.userDefinedMetadata),l.weightData=n.data,l.weightSpecs=n.specs,t.save(l)})}setUserDefinedMetadata(t){Ny(t,this.name),this.userDefinedMetadata=t}getUserDefinedMetadata(){return this.userDefinedMetadata}}return r.className="Model",r})();H.registerClass(Ss);var gB=(()=>{class r extends Ss{}return r.className="Functional",r})();H.registerClass(gB);function zf(r,e){return B(this,null,function*(){if(e==null&&(e={}),typeof r=="string"){let t=uo.getLoadHandlers(r,e);if(t.length===0)t.push(uo.browserHTTPRequest(r,e));else if(t.length>1)throw new O(`Found more than one (${t.length}) load handlers for URL '${r}'`);r=t[0]}return xB(r,void 0,e)})}function xB(r,e,t){return B(this,null,function*(){if(t==null&&(t={}),r.load==null)throw new O("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");let o=yield r.load(),n=o.modelTopology;n.model_config!=null&&(n=n.model_config);let s=t.strict==null?!0:t.strict,i=o.weightData!=null&&o.weightSpecs!=null&&s,a=Sr(Bu(n),e,i),l=o.trainingConfig;if(l!=null&&a.loadTrainingConfig(l),o.userDefinedMetadata!=null&&a.setUserDefinedMetadata(o.userDefinedMetadata),o.weightData!=null){if(o.weightSpecs==null)throw new O("LayersModel artifacts contains weight data, but not weight specs. Therefore loading of weights cannot proceed.");let{modelWeights:u,optimizerWeights:c}=yB(o.weightData,o.weightSpecs);a.loadWeights(u,s),a.optimizer!=null&&c.length>0&&(yield a.optimizer.setWeights(c)),Ct(u),Ct(c.map(p=>p.tensor))}return a})}function yB(r,e){let t=uo.decodeWeights(r,e),o={},n=[];return e.forEach(s=>{s.group==="optimizer"?n.push({name:s.name,tensor:t[s.name]}):o[s.name]=t[s.name]}),{modelWeights:o,optimizerWeights:n}}var Mf=(()=>{class r extends Ss{constructor(t){if(super({inputs:[],outputs:[]}),t=t||{},this.trainable=!0,this.built=!1,this.name=t.name!=null?t.name:Vi("sequential_"),t.layers!=null)for(let o of t.layers)this.add(o)}checkShape(t){if(t.inboundNodes[0].outputTensors[0].shape.some(n=>n<0))throw new O(`Negative dimension size caused by adding layer ${t.name} with input shape [${t.inboundNodes[0].inputTensors[0].shape}]`)}add(t){let o=t instanceof r||t instanceof Ss,n;if(o){if(n=t,n.outputs.length!==1)throw new O("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");if(n.inputs.length!==1)throw new O("All layers in a Sequential model should have a single input tensor. For multi-input layers, use the functional API.")}if(this.outputs.length===0){if(t.inboundNodes.length===0){if(t.batchInputShape==null)throw new O("The first layer in a Sequential model must get an `inputShape` or `batchInputShape` argument.");let s=df({batchShape:t.batchInputShape,dtype:t.dtype,name:t.name+"_input"});t.apply(s)}if(o)this.outputs=n.outputs,this.inputs=n.inputs;else{if(t.inboundNodes.length!==1)throw new O(`A layer added to a Sequential model must not already be connected somewhere else. LayersModel received layer ${t.name} which has ${t.inboundNodes.length} pre-existing inbound connections.`);if(t.inboundNodes[0].outputTensors.length!==1)throw new O("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");this.checkShape(t),this.outputs=[t.inboundNodes[0].outputTensors[0]],this.inputs=xy(this.outputs[0])}this.inboundNodes=[],new ws({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:this.inputs,outputTensors:this.outputs,inputMasks:po(null,this.inputs.length),outputMasks:[null],inputShapes:this.inputs.map(s=>s.shape),outputShapes:this.outputs[0].shape})}else{let s=t.apply(this.outputs[0]);if(Array.isArray(s))throw new TypeError("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");this.checkShape(t),this.outputs=[s],this.inboundNodes[0].outputTensors=this.outputs,this.inboundNodes[0].outputShapes=[this.outputs[0].shape]}this.layers.push(t),this.built=!1}pop(){if(this.layers.length===0)throw new TypeError("There are no layers in the model.");if(this.layers.pop(),this.layers.length===0)this.outputs=[],this.inboundNodes=[],this.outboundNodes=[];else{let t=this.layers.length-1;this.layers[t].outboundNodes=[],this.outputs=[this.layers[t].output],this.inboundNodes[0].outputTensors=this.outputs,this.inboundNodes[0].outputShapes=[this.outputs[0].shape]}}call(t,o){return this.model==null&&this.build(),this.model.call(t,o)}build(t){if(kt(t),this.inputs.length===0||this.outputs.length===0)throw new TypeError("Sequential model cannot be built: model is empty. Add some layers first.");this.model=new Ss({inputs:this.inputs,outputs:this.outputs[0],name:this.name+"_model"}),this.model.trainable=this.trainable,this.supportsMasking=this.model.supportsMasking,this.inputLayers=this.model.inputLayers,this.inputLayersNodeIndices=this.model.inputLayersNodeIndices,this.inputLayersTensorIndices=this.model.inputLayersTensorIndices,this.outputLayers=this.model.outputLayers,this.outputLayersNodeIndices=this.model.outputLayersNodeIndices,this.outputLayersTensorIndices=this.model.outputLayersTensorIndices,this.nodesByDepth=this.model.nodesByDepth,this.containerNodes=this.model.containerNodes,this.outputNames=this.model.outputNames,this.inputNames=this.model.inputNames,this.built=!0}countParams(){return this.built||this.build(),super.countParams()}summary(t,o,n=console.log){this.built||this.build(),super.summary(t,o,n)}setWeights(t){this.model==null&&this.build(),this.model.setWeights(t)}evaluate(t,o,n={}){if(!this.built)throw new fr("The model needs to be compiled before being used.");return this.model.evaluate(t,o,n)}evaluateDataset(t,o){return B(this,null,function*(){if(!this.built)throw new fr("The model needs to be compiled before being used.");return this.model.evaluateDataset(t,o)})}predict(t,o={}){return this.model==null&&this.build(),this.model.predict(t,o)}predictOnBatch(t){return this.model==null&&this.build(),this.model.predictOnBatch(t)}compile(t){this.build(),this.model.compile(t),this.optimizer_=this.model.optimizer,this.isOptimizerOwned=this.model.isOptimizerOwned,this.loss=this.model.loss,this.metrics=this.model.metrics,this.metricsTensors=this.model.metricsTensors,this.metricsNames=this.model.metricsNames}get optimizer(){return this.model==null?void 0:this.model.optimizer}set optimizer(t){this.model.optimizer=t}fit(s,i){return B(this,arguments,function*(t,o,n={}){if(!this.built)throw new fr("The model needs to be compiled before being used.");return this.model.fit(t,o,n)})}fitDataset(t,o){return B(this,null,function*(){if(!this.built)throw new fr("The model needs to be compiled before being used.");return this.model.fitDataset(t,o)})}trainOnBatch(t,o){return B(this,null,function*(){return this.model.trainOnBatch(t,o)})}static fromConfig(t,o,n={},s=!1){let i,a={};if(o instanceof Array){if(o[0].className==null||o[0].className==="Merge")throw new O("Legacy serialization format not supported yet.");i=o}else b.assert(o.layers!=null,()=>"When the config data for a Sequential model is not an Array, it must be an Object that contains the 'layers' field."),i=o.layers,delete o.layers,a=o;let l=new t(a);if(!(l instanceof r))throw new bt(`Sequential.fromConfig called on non-Sequential input: ${l}`);for(let u of i){let p=Sr(u,void 0,s);s&&p.setFastWeightInitDuringBuild(!0),l.add(p)}return l}set stopTraining(t){if(this.model==null)throw new O("Cannot set the stopTraining property of a sequential model before it is compiled.");this.model.stopTraining=t}get stopTraining(){if(this.model==null)throw new O("Cannot get the stopTraining property of a sequential model before it is compiled.");return this.model.stopTraining}getConfig(){let t=[];for(let o of this.layers){let n={};n.className=o.getClassName(),n.config=o.getConfig(),t.push(n)}return{name:this.name,layers:t}}}return r.className="Sequential",r})();H.registerClass(Mf);function Bf(r){return new Mf(r)}function ky(r){return df(r)}var je=class extends H.Serializable{getConfig(){return{}}},bB=(()=>{class r extends je{apply(t,o=1){return DI(t,o)}}return r.className="elu",r})();H.registerClass(bB);var wB=(()=>{class r extends je{apply(t){return Kc(t)}}return r.className="selu",r})();H.registerClass(wB);var CB=(()=>{class r extends je{apply(t){return Lr(t)}}return r.className="relu",r})();H.registerClass(CB);var SB=(()=>{class r extends je{apply(t){return z(()=>Qo(6,Lr(t)))}}return r.className="relu6",r})();H.registerClass(SB);var vB=(()=>{class r extends je{apply(t){return t}}return r.className="linear",r})();H.registerClass(vB);var NB=(()=>{class r extends je{apply(t){return so(t)}}return r.className="sigmoid",r})();H.registerClass(NB);var IB=(()=>{class r extends je{apply(t){return FI(t)}}return r.className="hardSigmoid",r})();H.registerClass(IB);var TB=(()=>{class r extends je{apply(t){return Zo(t)}}return r.className="softplus",r})();H.registerClass(TB);var kB=(()=>{class r extends je{apply(t){return RI(t)}}return r.className="softsign",r})();H.registerClass(kB);var EB=(()=>{class r extends je{apply(t){return ka(t)}}return r.className="tanh",r})();H.registerClass(EB);var Ay=(()=>{class r extends je{apply(t,o=-1){return Pa(t,o)}}return r.className="softmax",r})();H.registerClass(Ay);var AB=(()=>{class r extends je{apply(t,o=-1){return Gc(t,o)}}return r.className="logSoftmax",r})();H.registerClass(AB);var $B=(()=>{class r extends je{apply(t){return z(()=>z(()=>{let o=Math.sqrt(2),n=R(.5,j(1,Mc(ot(t,o))));return R(t,n)}))}}return r.className="gelu",r})();H.registerClass($B);var DB=(()=>{class r extends je{apply(t){return z(()=>R(.5,R(t,j(1,ka(R(jt(ot(2,Math.PI)),j(t,R(.044715,wr(t,3)))))))))}}return r.className="gelu_new",r})();H.registerClass(DB);var RB=(()=>{class r extends je{apply(t){return z(()=>R(t,ka(Zo(t))))}}return r.className="mish",r})();H.registerClass(RB);var FB=(()=>{class r extends je{apply(t,o=1){return z(()=>R(so(R(t,o)),t))}}return r.className="swish",r})();H.registerClass(FB);function Oo(r){return r.getClassName()}function Ey(r,e={}){return tn(r,H.SerializationMap.getMap().classNameMap,e,"activation")}function Lo(r){if(r==null){let e={};return e.className="linear",e.config={},Ey(e)}if(typeof r=="string"){let e={};return e.className=r,e.config={},Ey(e)}else return r instanceof je?r:Ey(r)}function _B(r){if(r!=null&&typeof r!="object")throw new Error(`Argument to L1L2 regularizer's constructor is expected to be an object, but received: ${r}`)}var Vf=class extends H.Serializable{},wT=(()=>{class r extends Vf{constructor(t){super(),_B(t),this.l1=t==null||t.l1==null?.01:t.l1,this.l2=t==null||t.l2==null?.01:t.l2,this.hasL1=this.l1!==0,this.hasL2=this.l2!==0}apply(t){return z(()=>{let o=re([1]);return this.hasL1&&(o=j(o,it(R(this.l1,ke(t))))),this.hasL2&&(o=j(o,it(R(this.l2,Ua(t))))),F(o,[])})}getConfig(){return{l1:this.l1,l2:this.l2}}static fromConfig(t,o){return new t({l1:o.l1,l2:o.l2})}}return r.className="L1L2",r})();H.registerClass(wT);var yT={l1l2:"L1L2"};function Wt(r){return Du(r)}function bT(r,e={}){return tn(r,H.SerializationMap.getMap().classNameMap,e,"regularizer")}function Yt(r){if(r==null)return null;if(typeof r=="string"){let t={className:r in yT?yT[r]:r,config:{}};return bT(t)}else return r instanceof Vf?r:bT(r)}var $y=(()=>{class r extends yt{constructor(t){super(t??{}),this.supportsMasking=!0,t!=null&&(this.maxValue=t.maxValue)}call(t,o){t=dt(t);let n=Lr(t);return this.maxValue!=null&&(n=qe(n,0,this.maxValue)),n}computeOutputShape(t){return t}getConfig(){let t={maxValue:this.maxValue},o=super.getConfig();return Object.assign(t,o),t}}return r.className="ReLU",r})();H.registerClass($y);var Dy=(()=>{class r extends yt{constructor(t){super(t??{}),this.DEFAULT_ALPHA=.3,t==null&&(t={}),this.alpha=t.alpha==null?this.DEFAULT_ALPHA:t.alpha}call(t,o){let n=dt(t);return $a(n,this.alpha)}computeOutputShape(t){return t}getConfig(){let t={alpha:this.alpha},o=super.getConfig();return Object.assign(t,o),t}}return r.className="LeakyReLU",r})();H.registerClass(Dy);var Ry=(()=>{class r extends yt{constructor(t){if(super(t??{}),this.DEFAULT_ALPHA_INITIALIZER="zeros",t==null&&(t={}),this.supportsMasking=!0,this.alphaInitializer=qt(t.alphaInitializer||this.DEFAULT_ALPHA_INITIALIZER),this.alphaRegularizer=Yt(t.alphaRegularizer),this.alphaConstraint=pe(t.alphaConstraint),t.sharedAxes==null)this.sharedAxes=null;else if(Array.isArray(t.sharedAxes))this.sharedAxes=t.sharedAxes;else if(typeof t.sharedAxes=="number")this.sharedAxes=[t.sharedAxes];else throw new O(`Expected sharedAxes to be a number or an array of numbers, but got ${t.sharedAxes}`)}build(t){t=kt(t);let o=t.slice(1);if(this.sharedAxes!=null)for(let s of this.sharedAxes)o[s-1]=1;this.alpha=this.addWeight("alpha",o,"float32",this.alphaInitializer,this.alphaRegularizer,!0,this.alphaConstraint);let n={};if(this.sharedAxes!=null)for(let s=1;s<t.length;++s)n[s]=t[s];this.inputSpec=[new Xt({ndim:t.length,axes:n})],this.built=!0}call(t,o){return t=dt(t),_a(t,this.alpha.read())}getConfig(){let t={alphaInitializer:Qt(this.alphaInitializer),alphaRegularizer:Wt(this.alphaRegularizer),alphaConstraint:ce(this.alphaConstraint),sharedAxes:this.sharedAxes},o=super.getConfig();return Object.assign(t,o),t}}return r.className="PReLU",r})();H.registerClass(Ry);var Fy=(()=>{class r extends yt{constructor(t){if(super(t??{}),this.DEFAULT_ALPHA=1,t==null&&(t={}),t.alpha!=null&&t.alpha!==this.DEFAULT_ALPHA)throw new bt(`Non-default alpha value (${t.alpha}) is not supported by the ELU layer yet.`);this.alpha=t.alpha==null?this.DEFAULT_ALPHA:t.alpha}call(t,o){let n=dt(t);return fs(n)}computeOutputShape(t){return t}getConfig(){let t={alpha:this.alpha},o=super.getConfig();return Object.assign(t,o),t}}return r.className="ELU",r})();H.registerClass(Fy);var _y=(()=>{class r extends yt{constructor(t){super(t??{}),this.DEFAULT_THETA=1,t==null&&(t={}),this.theta=t.theta==null?this.DEFAULT_THETA:t.theta}call(t,o){let n=dt(t);return R(n,Y(ge(n,this.theta),"float32"))}computeOutputShape(t){return t}getConfig(){let t={theta:this.theta},o=super.getConfig();return Object.assign(t,o),t}}return r.className="ThresholdedReLU",r})();H.registerClass(_y);var Oy=(()=>{class r extends yt{constructor(t){super(t??{}),this.DEFAULT_AXIS=1,t==null&&(t={}),this.softmax=new Ay().apply,this.axis=t.axis==null?this.DEFAULT_AXIS:t.axis}call(t,o){return z(()=>{let n=dt(t),s=o.mask;if(s!=null){let i=R(lt(mr(n.shape),Y(s,n.dtype)),xt(-1e9));n=j(n,i)}return this.axis instanceof Array?this.axis.length>1?Le(lt(n,Wc(n,this.axis,!0))):this.softmax(n,this.axis[0]):this.softmax(n,this.axis)})}computeOutputShape(t){return t}getConfig(){let t={axis:this.axis},o=super.getConfig();return Object.assign(t,o),t}}return r.className="Softmax",r})();H.registerClass(Oy);function Hi(r,e,t){if(typeof r=="number")return po(r,e);if(r.length!==e)throw new O(`The ${t} argument must be an integer or tuple of ${e} integers. Received: ${r.length} elements.`);for(let o=0;o<e;++o){let n=r[o];if(!kI(n))throw new O(`The ${t} argument must be an integer or tuple of ${e} integers. Received: ${JSON.stringify(r)} including a non-integer number ${n}`)}return r}function vr(r,e,t,o,n=1){if(r==null)return r;let s=e+(e-1)*(n-1),i;return t==="same"?i=r:i=r-s+1,Math.floor((i+o-1)/o)}function Po(r,e,t,o){if(r==null)return null;if(o==="valid")r=r*e+_o([t-e,0]);else if(o==="same")r=r*e;else throw new O(`Unsupport padding mode: ${o}.`);return r}function gp(r,e){return z(()=>(se(e),e==="channelsFirst"?Et(r,[0,2,3,1]):r))}function Ly(r,e){return z(()=>(se(e),e==="channelsFirst"?Et(r,[0,2,3,4,1]):r))}function LB(r,e,t,o=1,n="valid",s,i=1){return z(()=>{if(s==null&&(s=gr()),se(s),r.shape.length!==3)throw new O(`The input of a conv1dWithBias operation should be 3, but is ${r.shape.length} instead.`);if(e.shape.length!==3)throw new O(`The kernel for a conv1dWithBias operation should be 3, but is ${e.shape.length} instead`);if(t!=null&&t.shape.length!==1)throw new O(`The bias for a conv1dWithBias operation should be 1, but is ${t.shape.length} instead`);if(s==="channelsFirst"&&(r=Et(r,[0,2,1])),n==="causal")throw new bt("The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.");let a=Oc(r,e,o,n==="same"?"same":"valid","NWC",i);return t!=null&&(a=xr(a,t)),a})}function CT(r,e,t,o=[1,1],n="valid",s,i,a=null){return z(()=>{if(s==null&&(s=gr()),se(s),r.rank!==3&&r.rank!==4)throw new O(`conv2dWithBiasActivation expects input to be of rank 3 or 4, but received ${r.rank}.`);if(e.rank!==3&&e.rank!==4)throw new O(`conv2dWithBiasActivation expects kernel to be of rank 3 or 4, but received ${r.rank}.`);let l=gp(r,s);if(n==="causal")throw new bt("The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.");return l=Ga.conv2d({x:l,filter:e,strides:o,pad:n==="same"?"same":"valid",dilations:i,dataFormat:"NHWC",bias:t,activation:a}),s==="channelsFirst"&&(l=Et(l,[0,3,1,2])),l})}function PB(r,e,t,o=[1,1,1],n="valid",s,i){return z(()=>{if(s==null&&(s=gr()),se(s),r.rank!==4&&r.rank!==5)throw new O(`conv3dWithBias expects input to be of rank 4 or 5, but received ${r.rank}.`);if(e.rank!==4&&e.rank!==5)throw new O(`conv3dWithBias expects kernel to be of rank 4 or 5, but received ${r.rank}.`);let a=Ly(r,s);if(n==="causal")throw new bt("The support for CAUSAL padding mode in conv3dWithBias is not implemented yet.");return a=px(a,e,o,n==="same"?"same":"valid","NDHWC",i),t!=null&&(a=xr(a,t)),s==="channelsFirst"&&(a=Et(a,[0,4,1,2,3])),a})}var dp=class r extends yt{constructor(e,t){if(super(t),this.bias=null,this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_BIAS_INITIALIZER="zeros",r.verifyArgs(t),this.rank=e,be(this.rank,"rank"),this.rank!==1&&this.rank!==2&&this.rank!==3)throw new bt(`Convolution layer for rank other than 1, 2, or 3 (${this.rank}) is not implemented yet.`);if(this.kernelSize=Hi(t.kernelSize,e,"kernelSize"),this.strides=Hi(t.strides==null?1:t.strides,e,"strides"),this.padding=t.padding==null?"valid":t.padding,hr(this.padding),this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,se(this.dataFormat),this.activation=Lo(t.activation),this.useBias=t.useBias==null?!0:t.useBias,this.biasInitializer=qt(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.biasConstraint=pe(t.biasConstraint),this.biasRegularizer=Yt(t.biasRegularizer),this.activityRegularizer=Yt(t.activityRegularizer),this.dilationRate=Hi(t.dilationRate==null?1:t.dilationRate,e,"dilationRate"),this.rank===1&&Array.isArray(this.dilationRate)&&this.dilationRate.length!==1)throw new O(`dilationRate must be a number or an array of a single number for 1D convolution, but received ${JSON.stringify(this.dilationRate)}`);if(this.rank===2){if(typeof this.dilationRate=="number")this.dilationRate=[this.dilationRate,this.dilationRate];else if(this.dilationRate.length!==2)throw new O(`dilationRate must be a number or array of two numbers for 2D convolution, but received ${JSON.stringify(this.dilationRate)}`)}else if(this.rank===3){if(typeof this.dilationRate=="number")this.dilationRate=[this.dilationRate,this.dilationRate,this.dilationRate];else if(this.dilationRate.length!==3)throw new O(`dilationRate must be a number or array of three numbers for 3D convolution, but received ${JSON.stringify(this.dilationRate)}`)}}static verifyArgs(e){if(Zr("kernelSize"in e,"required key 'kernelSize' not in config"),typeof e.kernelSize!="number"&&!rf(e.kernelSize,"number",1,3))throw new O(`BaseConv expects config.kernelSize to be number or number[] with length 1, 2, or 3, but received ${JSON.stringify(e.kernelSize)}.`)}getConfig(){let e={kernelSize:this.kernelSize,strides:this.strides,padding:this.padding,dataFormat:this.dataFormat,dilationRate:this.dilationRate,activation:Oo(this.activation),useBias:this.useBias,biasInitializer:Qt(this.biasInitializer),biasRegularizer:Wt(this.biasRegularizer),activityRegularizer:Wt(this.activityRegularizer),biasConstraint:ce(this.biasConstraint)},t=super.getConfig();return Object.assign(e,t),e}},Wu=class r extends dp{constructor(e,t){super(e,t),this.kernel=null,r.verifyArgs(t),this.filters=t.filters,be(this.filters,"filters"),this.kernelInitializer=qt(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.kernelConstraint=pe(t.kernelConstraint),this.kernelRegularizer=Yt(t.kernelRegularizer)}build(e){e=kt(e);let t=this.dataFormat==="channelsFirst"?1:e.length-1;if(e[t]==null)throw new O(`The channel dimension of the input should be defined. Found ${e[t]}`);let o=e[t],n=this.kernelSize.concat([o,this.filters]);this.kernel=this.addWeight("kernel",n,null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[{ndim:this.rank+2,axes:{[t]:o}}],this.built=!0}call(e,t){return z(()=>{e=dt(e);let o,n=this.bias==null?null:this.bias.read(),s=of(this.activation.getClassName());if(s!=null&&this.rank===2)o=CT(e,this.kernel.read(),n,this.strides,this.padding,this.dataFormat,this.dilationRate,s);else{if(this.rank===1)o=LB(e,this.kernel.read(),n,this.strides[0],this.padding,this.dataFormat,this.dilationRate[0]);else if(this.rank===2)o=CT(e,this.kernel.read(),n,this.strides,this.padding,this.dataFormat,this.dilationRate);else if(this.rank===3)o=PB(e,this.kernel.read(),n,this.strides,this.padding,this.dataFormat,this.dilationRate);else throw new bt("convolutions greater than 3D are not implemented yet.");this.activation!=null&&(o=this.activation.apply(o))}return o})}computeOutputShape(e){e=kt(e);let t=[],o=this.dataFormat==="channelsLast"?e.slice(1,e.length-1):e.slice(2);for(let s=0;s<o.length;++s){let i=vr(o[s],this.kernelSize[s],this.padding,this.strides[s],typeof this.dilationRate=="number"?this.dilationRate:this.dilationRate[s]);t.push(i)}let n=[e[0]];return this.dataFormat==="channelsLast"?(n=n.concat(t),n.push(this.filters)):(n.push(this.filters),n=n.concat(t)),n}getConfig(){let e={filters:this.filters,kernelInitializer:Qt(this.kernelInitializer),kernelRegularizer:Wt(this.kernelRegularizer),kernelConstraint:ce(this.kernelConstraint)},t=super.getConfig();return Object.assign(e,t),e}static verifyArgs(e){if(!("filters"in e)||typeof e.filters!="number"||e.filters<1)throw new O(`Convolution layer expected config.filters to be a 'number' > 0 but got ${JSON.stringify(e.filters)}`)}},Gf=(()=>{class r extends Wu{constructor(t){super(2,t),r.verifyArgs(t)}getConfig(){let t=super.getConfig();return delete t.rank,t}static verifyArgs(t){if(typeof t.kernelSize!="number"&&!rf(t.kernelSize,"number",1,2))throw new O(`Conv2D expects config.kernelSize to be number or number[] with length 1 or 2, but received ${JSON.stringify(t.kernelSize)}.`)}}return r.className="Conv2D",r})();H.registerClass(Gf);var Wf=(()=>{class r extends Wu{constructor(t){super(3,t),r.verifyArgs(t)}getConfig(){let t=super.getConfig();return delete t.rank,t}static verifyArgs(t){if(typeof t.kernelSize!="number"&&!(Array.isArray(t.kernelSize)&&(t.kernelSize.length===1||t.kernelSize.length===3)))throw new O(`Conv3D expects config.kernelSize to be number or [number, number, number], but received ${JSON.stringify(t.kernelSize)}.`)}}return r.className="Conv3D",r})();H.registerClass(Wf);var Py=(()=>{class r extends Gf{constructor(t){if(super(t),this.inputSpec=[new Xt({ndim:4})],this.padding!=="same"&&this.padding!=="valid")throw new O(`Conv2DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`)}build(t){if(t=kt(t),t.length!==4)throw new O("Input should have rank 4; Received input shape: "+JSON.stringify(t));let o=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[o]==null)throw new O("The channel dimension of the inputs should be defined. Found `None`.");let n=t[o],s=this.kernelSize.concat([this.filters,n]);this.kernel=this.addWeight("kernel",s,"float32",this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[new Xt({ndim:4,axes:{[o]:n}})],this.built=!0}call(t,o){return z(()=>{let n=dt(t);if(n.shape.length!==4)throw new O(`Conv2DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${n.shape.length}`);let s=n.shape,i=s[0],a,l;this.dataFormat==="channelsFirst"?(a=2,l=3):(a=1,l=2);let u=s[a],c=s[l],p=this.kernelSize[0],m=this.kernelSize[1],f=this.strides[0],h=this.strides[1],g=Po(u,f,p,this.padding),d=Po(c,h,m,this.padding),x=[i,g,d,this.filters];this.dataFormat!=="channelsLast"&&(n=Et(n,[0,2,3,1]));let y=Lc(n,this.kernel.read(),x,this.strides,this.padding);return this.dataFormat!=="channelsLast"&&(y=Et(y,[0,3,1,2])),this.bias!=null&&(y=xr(y,this.bias.read(),this.dataFormat)),this.activation!=null&&(y=this.activation.apply(y)),y})}computeOutputShape(t){t=kt(t);let o=t.slice(),n,s,i;this.dataFormat==="channelsFirst"?(n=1,s=2,i=3):(n=3,s=1,i=2);let a=this.kernelSize[0],l=this.kernelSize[1],u=this.strides[0],c=this.strides[1];return o[n]=this.filters,o[s]=Po(o[s],u,a,this.padding),o[i]=Po(o[i],c,l,this.padding),o}getConfig(){let t=super.getConfig();return delete t.dilationRate,t}}return r.className="Conv2DTranspose",r})();H.registerClass(Py);var zy=(()=>{class r extends Wf{constructor(t){if(super(t),this.inputSpec=[new Xt({ndim:5})],this.padding!=="same"&&this.padding!=="valid")throw new O(`Conv3DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`)}build(t){if(t=kt(t),t.length!==5)throw new O("Input should have rank 5; Received input shape: "+JSON.stringify(t));let o=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[o]==null)throw new O("The channel dimension of the inputs should be defined. Found `None`.");let n=t[o],s=this.kernelSize.concat([this.filters,n]);this.kernel=this.addWeight("kernel",s,"float32",this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[new Xt({ndim:5,axes:{[o]:n}})],this.built=!0}call(t,o){return z(()=>{let n=dt(t);if(n.shape.length!==5)throw new O(`Conv3DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${n.shape.length}`);let s=n.shape,i=s[0],a,l,u;this.dataFormat==="channelsFirst"?(u=2,a=3,l=4):(u=1,a=2,l=3);let c=s[u],p=s[a],m=s[l],f=this.kernelSize[0],h=this.kernelSize[1],g=this.kernelSize[2],d=this.strides[0],x=this.strides[1],y=this.strides[2],w=Po(c,d,f,this.padding),C=Po(p,x,h,this.padding),S=Po(m,y,g,this.padding),E=[i,w,C,S,this.filters];this.dataFormat!=="channelsLast"&&(n=Et(n,[0,2,3,4,1]));let A=mx(n,this.kernel.read(),E,this.strides,this.padding);return this.dataFormat!=="channelsLast"&&(A=Et(A,[0,4,1,2,3])),this.bias!==null&&(A=xr(A,this.bias.read(),this.dataFormat)),this.activation!==null&&(A=this.activation.apply(A)),A})}computeOutputShape(t){t=kt(t);let o=t.slice(),n,s,i,a;this.dataFormat==="channelsFirst"?(n=1,s=2,i=3,a=4):(n=4,s=1,i=2,a=3);let l=this.kernelSize[0],u=this.kernelSize[1],c=this.kernelSize[2],p=this.strides[0],m=this.strides[1],f=this.strides[2];return o[n]=this.filters,o[s]=Po(o[s],p,l,this.padding),o[i]=Po(o[i],m,u,this.padding),o[a]=Po(o[a],f,c,this.padding),o}getConfig(){let t=super.getConfig();return delete t.dilationRate,t}}return r.className="Conv3DTranspose",r})();H.registerClass(zy);var zB=(()=>{class r extends Wu{constructor(t,o){if(super(t,o),this.DEFAULT_DEPTHWISE_INITIALIZER="glorotUniform",this.DEFAULT_POINTWISE_INITIALIZER="glorotUniform",this.depthwiseKernel=null,this.pointwiseKernel=null,o.filters==null)throw new O("The `filters` configuration field is required by SeparableConv, but is unspecified.");if(o.kernelInitializer!=null||o.kernelRegularizer!=null||o.kernelConstraint!=null)throw new O("Fields kernelInitializer, kernelRegularizer and kernelConstraint are invalid for SeparableConv2D. Use depthwiseInitializer, depthwiseRegularizer, depthwiseConstraint, pointwiseInitializer, pointwiseRegularizer and pointwiseConstraint instead.");if(o.padding!=null&&o.padding!=="same"&&o.padding!=="valid")throw new O(`SeparableConv${this.rank}D supports only padding modes: 'same' and 'valid', but received ${JSON.stringify(o.padding)}`);this.depthMultiplier=o.depthMultiplier==null?1:o.depthMultiplier,this.depthwiseInitializer=qt(o.depthwiseInitializer||this.DEFAULT_DEPTHWISE_INITIALIZER),this.depthwiseRegularizer=Yt(o.depthwiseRegularizer),this.depthwiseConstraint=pe(o.depthwiseConstraint),this.pointwiseInitializer=qt(o.depthwiseInitializer||this.DEFAULT_POINTWISE_INITIALIZER),this.pointwiseRegularizer=Yt(o.pointwiseRegularizer),this.pointwiseConstraint=pe(o.pointwiseConstraint)}build(t){if(t=kt(t),t.length<this.rank+2)throw new O(`Inputs to SeparableConv${this.rank}D should have rank ${this.rank+2}, but received input shape: ${JSON.stringify(t)}`);let o=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[o]==null||t[o]<0)throw new O(`The channel dimension of the inputs should be defined, but found ${JSON.stringify(t[o])}`);let n=t[o],s=this.kernelSize.concat([n,this.depthMultiplier]),i=[];for(let l=0;l<this.rank;++l)i.push(1);i.push(n*this.depthMultiplier,this.filters);let a=!0;this.depthwiseKernel=this.addWeight("depthwise_kernel",s,"float32",this.depthwiseInitializer,this.depthwiseRegularizer,a,this.depthwiseConstraint),this.pointwiseKernel=this.addWeight("pointwise_kernel",i,"float32",this.pointwiseInitializer,this.pointwiseRegularizer,a,this.pointwiseConstraint),this.useBias?this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,a,this.biasConstraint):this.bias=null,this.inputSpec=[new Xt({ndim:this.rank+2,axes:{[o]:n}})],this.built=!0}call(t,o){return z(()=>{t=dt(t);let n;if(this.rank===1)throw new bt("1D separable convolution is not implemented yet.");return this.rank===2&&(this.dataFormat==="channelsFirst"&&(t=Et(t,[0,2,3,1])),n=jc(t,this.depthwiseKernel.read(),this.pointwiseKernel.read(),this.strides,this.padding,this.dilationRate,"NHWC")),this.useBias&&(n=xr(n,this.bias.read(),this.dataFormat)),this.activation!=null&&(n=this.activation.apply(n)),this.dataFormat==="channelsFirst"&&(n=Et(n,[0,3,1,2])),n})}getConfig(){let t=super.getConfig();return delete t.rank,delete t.kernelInitializer,delete t.kernelRegularizer,delete t.kernelConstraint,t.depthwiseInitializer=Qt(this.depthwiseInitializer),t.pointwiseInitializer=Qt(this.pointwiseInitializer),t.depthwiseRegularizer=Wt(this.depthwiseRegularizer),t.pointwiseRegularizer=Wt(this.pointwiseRegularizer),t.depthwiseConstraint=ce(this.depthwiseConstraint),t.pointwiseConstraint=ce(this.pointwiseConstraint),t}}return r.className="SeparableConv",r})();var My=(()=>{class r extends zB{constructor(t){super(2,t)}}return r.className="SeparableConv2D",r})();H.registerClass(My);var By=(()=>{class r extends Wu{constructor(t){super(1,t),r.verifyArgs(t),this.inputSpec=[{ndim:3}]}getConfig(){let t=super.getConfig();return delete t.rank,delete t.dataFormat,t}static verifyArgs(t){if(typeof t.kernelSize!="number"&&!rf(t.kernelSize,"number",1,1))throw new O(`Conv1D expects config.kernelSize to be number or number[] with length 1, but received ${JSON.stringify(t.kernelSize)}.`)}}return r.className="Conv1D",r})();H.registerClass(By);var Vy=(()=>{class r extends yt{constructor(t){super(t),typeof t.cropping=="number"?this.cropping=[[t.cropping,t.cropping],[t.cropping,t.cropping]]:typeof t.cropping[0]=="number"?this.cropping=[[t.cropping[0],t.cropping[0]],[t.cropping[1],t.cropping[1]]]:this.cropping=t.cropping,this.dataFormat=t.dataFormat===void 0?"channelsLast":t.dataFormat,this.inputSpec=[{ndim:4}]}computeOutputShape(t){return this.dataFormat==="channelsFirst"?[t[0],t[1],t[2]-this.cropping[0][0]-this.cropping[0][1],t[3]-this.cropping[1][0]-this.cropping[1][1]]:[t[0],t[1]-this.cropping[0][0]-this.cropping[0][1],t[2]-this.cropping[1][0]-this.cropping[1][1],t[3]]}call(t,o){return z(()=>{if(t=dt(t),this.dataFormat==="channelsLast"){let n=ap(t,this.cropping[0][0],t.shape[1]-this.cropping[0][0]-this.cropping[0][1],2);return ap(n,this.cropping[1][0],t.shape[2]-this.cropping[1][1]-this.cropping[1][0],3)}else{let n=ap(t,this.cropping[0][0],t.shape[2]-this.cropping[0][0]-this.cropping[0][1],3);return ap(n,this.cropping[1][0],t.shape[3]-this.cropping[1][1]-this.cropping[1][0],4)}})}getConfig(){let t={cropping:this.cropping,dataFormat:this.dataFormat},o=super.getConfig();return Object.assign(t,o),t}}return r.className="Cropping2D",r})();H.registerClass(Vy);var Gy=(()=>{class r extends yt{constructor(t){super(t),this.DEFAULT_SIZE=[2,2],this.inputSpec=[{ndim:4}],this.size=t.size==null?this.DEFAULT_SIZE:t.size,this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,se(this.dataFormat),this.interpolation=t.interpolation==null?"nearest":t.interpolation,II(this.interpolation)}computeOutputShape(t){if(this.dataFormat==="channelsFirst"){let o=t[2]==null?null:this.size[0]*t[2],n=t[3]==null?null:this.size[1]*t[3];return[t[0],t[1],o,n]}else{let o=t[1]==null?null:this.size[0]*t[1],n=t[2]==null?null:this.size[1]*t[2];return[t[0],o,n,t[3]]}}call(t,o){return z(()=>{let n=dt(t),s=n.shape;if(this.dataFormat==="channelsFirst"){n=Et(n,[0,2,3,1]);let i=this.size[0]*s[2],a=this.size[1]*s[3],l=this.interpolation==="nearest"?Pr.resizeNearestNeighbor(n,[i,a]):Pr.resizeBilinear(n,[i,a]);return Et(l,[0,3,1,2])}else{let i=this.size[0]*s[1],a=this.size[1]*s[2];return this.interpolation==="nearest"?Pr.resizeNearestNeighbor(n,[i,a]):Pr.resizeBilinear(n,[i,a])}})}getConfig(){let t={size:this.size,dataFormat:this.dataFormat,interpolation:this.interpolation},o=super.getConfig();return Object.assign(t,o),t}}return r.className="UpSampling2D",r})();H.registerClass(Gy);function MB(r,e,t=[1,1],o="valid",n,s){return z(()=>{n==null&&(n=gr()),se(n);let i=gp(r,n);if(r.rank!==4)throw new O(`Input for depthwiseConv2d is required to be 4-D, but is instead ${r.rank}-D`);if(e.rank!==4)throw new O(`depthwiseKernel is required to be 4-D, but is instead ${e.rank}-D`);return i=ms(i,e,t,o==="same"?"same":"valid","NHWC",s),n==="channelsFirst"&&(i=Et(i,[0,3,1,2])),i})}var Wy=(()=>{class r extends dp{constructor(t){super(2,t),this.depthwiseKernel=null,this.depthMultiplier=t.depthMultiplier==null?1:t.depthMultiplier,this.depthwiseInitializer=qt(t.depthwiseInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.depthwiseConstraint=pe(t.depthwiseConstraint),this.depthwiseRegularizer=Yt(t.depthwiseRegularizer)}build(t){if(t=kt(t),t.length<4)throw new O(`Inputs to DepthwiseConv2D should have rank 4. Received input shape: ${JSON.stringify(t)}.`);let o=this.dataFormat==="channelsFirst"?1:3;if(t[o]==null||t[o]<0)throw new O(`The channel dimension of the inputs to DepthwiseConv2D should be defined, but is not (${t[o]}).`);let n=t[o],s=[this.kernelSize[0],this.kernelSize[1],n,this.depthMultiplier];this.depthwiseKernel=this.addWeight("depthwise_kernel",s,null,this.depthwiseInitializer,this.depthwiseRegularizer,!0,this.depthwiseConstraint),this.useBias?this.bias=this.addWeight("bias",[n*this.depthMultiplier],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(t,o){return z(()=>{t=dt(t);let n=MB(t,this.depthwiseKernel.read(),this.strides,this.padding,this.dataFormat,null);return this.useBias&&(n=xr(n,this.bias.read(),this.dataFormat)),this.activation!=null&&(n=this.activation.apply(n)),n})}computeOutputShape(t){t=kt(t);let o=this.dataFormat==="channelsFirst"?t[2]:t[1],n=this.dataFormat==="channelsFirst"?t[3]:t[2],s=this.dataFormat==="channelsFirst"?t[1]*this.depthMultiplier:t[3]*this.depthMultiplier,i=vr(o,this.kernelSize[0],this.padding,this.strides[0]),a=vr(n,this.kernelSize[1],this.padding,this.strides[1]);return this.dataFormat==="channelsFirst"?[t[0],s,i,a]:[t[0],i,a,s]}getConfig(){let t=super.getConfig();return t.depthMultiplier=this.depthMultiplier,t.depthwiseInitializer=Qt(this.depthwiseInitializer),t.depthwiseRegularizer=Wt(this.depthwiseRegularizer),t.depthwiseConstraint=ce(this.depthwiseRegularizer),t}}return r.className="DepthwiseConv2D",r})();H.registerClass(Wy);function Uy(r,e,t,o){if(Array.isArray(r)){if(e!=null||t!=null)throw new O("When inputs is an array, neither initialState or constants should be provided");o!=null&&(t=r.slice(r.length-o,r.length),r=r.slice(0,r.length-o)),r.length>1&&(e=r.slice(1,r.length)),r=r[0]}function n(s){return s==null||Array.isArray(s)?s:[s]}return e=n(e),t=n(t),{inputs:r,initialState:e,constants:t}}function Hy(r,e,t,o=!1,n,s,i=!1,a=!1){return z(()=>{let l=e.shape.length;if(l<3)throw new O(`Input should be at least 3D, but is ${l}D.`);let u=[1,0].concat(dr(2,l));if(e=Et(e,u),s!=null)throw new bt("The rnn() functoin of the deeplearn.js backend does not support constants yet.");i&&console.warn("Backend rnn(): the unroll = true option is not applicable to the imperative deeplearn.js backend."),n!=null&&(n=Y(Y(n,"bool"),"float32"),n.rank===l-1&&(n=ve(n,-1)),n=Et(n,u)),o&&(e=Xr(e,0),n!=null&&(n=Xr(n,0)));let c=[],p,m=t,f=e.shape[0],h=sr(e),g;n!=null&&(g=sr(n));for(let x=0;x<f;++x){let y=h[x],w=z(()=>r(y,m));if(n==null)p=w[0],m=w[1];else{let C=z(()=>{let S=g[x],E=lt(Pe(S),S),A=j(R(w[0],S),R(m[0],E)),$=m.map((_,L)=>j(R(w[1][L],S),R(_,E)));return{output:A,newStates:$}});p=C.output,m=C.newStates}a&&c.push(p)}let d;return a&&(d=$e(c,1)),[p,d,m]})}var on=(()=>{class r extends yt{constructor(t){super(t);let o;if(t.cell==null)throw new O("cell property is missing for the constructor of RNN.");if(Array.isArray(t.cell)?o=new qf({cells:t.cell}):o=t.cell,o.stateSize==null)throw new O("The RNN cell should have an attribute `stateSize` (tuple of integers, one integer per RNN state).");this.cell=o,this.returnSequences=t.returnSequences==null?!1:t.returnSequences,this.returnState=t.returnState==null?!1:t.returnState,this.goBackwards=t.goBackwards==null?!1:t.goBackwards,this._stateful=t.stateful==null?!1:t.stateful,this.unroll=t.unroll==null?!1:t.unroll,this.supportsMasking=!0,this.inputSpec=[new Xt({ndim:3})],this.stateSpec=null,this.states_=null,this.numConstants=null,this.keptStates=[]}getStates(){if(this.states_==null){let t=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1;return dr(0,t).map(o=>null)}else return this.states_}setStates(t){this.states_=t}computeOutputShape(t){hf(t)&&(t=t[0]),t=t;let o=this.cell.stateSize;Array.isArray(o)||(o=[o]);let n=o[0],s;if(this.returnSequences?s=[t[0],t[1],n]:s=[t[0],n],this.returnState){let i=[];for(let a of o)i.push([t[0],a]);return[s].concat(i)}else return s}computeMask(t,o){return z(()=>{Array.isArray(o)&&(o=o[0]);let n=this.returnSequences?o:null;if(this.returnState){let s=this.states.map(i=>null);return[n].concat(s)}else return n})}get states(){if(this.states_==null){let t=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1,o=[];for(let n=0;n<t;++n)o.push(null);return o}else return this.states_}set states(t){this.states_=t}build(t){if(this.numConstants!=null)throw new bt("Constants support is not implemented in RNN yet.");hf(t)&&(t=t[0]),t=t;let n=this.stateful?t[0]:null,s=t.slice(2);this.inputSpec[0]=new Xt({shape:[n,null,...s]});let i=[t[0]].concat(t.slice(2));this.cell.build(i);let a;if(Array.isArray(this.cell.stateSize)?a=this.cell.stateSize:a=[this.cell.stateSize],this.stateSpec!=null){if(!b.arraysEqual(this.stateSpec.map(l=>l.shape[l.shape.length-1]),a))throw new O(`An initialState was passed that is not compatible with cell.stateSize. Received stateSpec=${this.stateSpec}; However cell.stateSize is ${this.cell.stateSize}`)}else this.stateSpec=a.map(l=>new Xt({shape:[null,l]}));this.stateful&&this.resetStates()}resetStates(t,o=!1){z(()=>{if(!this.stateful)throw new Yr("Cannot call resetStates() on an RNN Layer that is not stateful.");let n=this.inputSpec[0].shape[0];if(n==null)throw new O("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");if(this.states_==null)Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(s=>re([n,s])):this.states_=[re([n,this.cell.stateSize])];else if(t==null)Ct(this.states_),this.keptStates!=null&&(Ct(this.keptStates),this.keptStates=[]),Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(s=>re([n,s])):this.states_[0]=re([n,this.cell.stateSize]);else{if(Array.isArray(t)||(t=[t]),t.length!==this.states_.length)throw new O(`Layer ${this.name} expects ${this.states_.length} state(s), but it received ${t.length} state value(s). Input received: ${t}`);o===!0?this.keptStates.push(this.states_.slice()):Ct(this.states_);for(let s=0;s<this.states_.length;++s){let i=t[s],a=Array.isArray(this.cell.stateSize)?this.cell.stateSize[s]:this.cell.stateSize,l=[n,a];if(!b.arraysEqual(i.shape,l))throw new O(`State ${s} is incompatible with layer ${this.name}: expected shape=${l}, received shape=${i.shape}`);this.states_[s]=i}}this.states_=this.states_.map(s=>_e(s.clone()))})}apply(t,o){let n=o==null?null:o.initialState,s=o==null?null:o.constants;o==null&&(o={});let i=Uy(t,n,s,this.numConstants);t=i.inputs,n=i.initialState,s=i.constants;let a=[],l=[];if(n!=null){o.initialState=n,a=a.concat(n),this.stateSpec=[];for(let c of n)this.stateSpec.push(new Xt({shape:c.shape}));l=l.concat(this.stateSpec)}if(s!=null&&(o.constants=s,a=a.concat(s),this.numConstants=s.length),a[0]instanceof ar){let c=[t].concat(a),p=this.inputSpec.concat(l),m=this.inputSpec;this.inputSpec=p;let f=super.apply(c,o);return this.inputSpec=m,f}else return super.apply(t,o)}call(t,o){return z(()=>{let n=o==null?null:o.mask,s=o==null?null:o.training,i=o==null?null:o.initialState;t=dt(t),i==null&&(this.stateful?i=this.states_:i=this.getInitialState(t));let a=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1;if(i.length!==a)throw new O(`RNN Layer has ${a} state(s) but was passed ${i.length} initial state(s).`);this.unroll&&console.warn("Ignoring unroll = true for RNN layer, due to imperative backend.");let l={training:s},c=Hy((g,d)=>{let x=this.cell.call([g].concat(d),l);return[x[0],x.slice(1)]},t,i,this.goBackwards,n,null,this.unroll,this.returnSequences),p=c[0],m=c[1],f=c[2];this.stateful&&this.resetStates(f,s);let h=this.returnSequences?m:p;return this.returnState?[h].concat(f):h})}getInitialState(t){return z(()=>{let o=re(t.shape);return o=it(o,[1,2]),o=bs(o),Array.isArray(this.cell.stateSize)?this.cell.stateSize.map(n=>n>1?cf(o,[1,n]):o):this.cell.stateSize>1?[cf(o,[1,this.cell.stateSize])]:[o]})}get trainableWeights(){return this.trainable?this.cell.trainableWeights:[]}get nonTrainableWeights(){return this.trainable?this.cell.nonTrainableWeights:this.cell.weights}setFastWeightInitDuringBuild(t){super.setFastWeightInitDuringBuild(t),this.cell!=null&&this.cell.setFastWeightInitDuringBuild(t)}getConfig(){let t=super.getConfig(),o={returnSequences:this.returnSequences,returnState:this.returnState,goBackwards:this.goBackwards,stateful:this.stateful,unroll:this.unroll};this.numConstants!=null&&(o.numConstants=this.numConstants);let n=this.cell.getConfig();return this.getClassName()===r.className&&(o.cell={className:this.cell.getClassName(),config:n}),Object.assign(Object.assign(Object.assign({},n),t),o)}static fromConfig(t,o,n={}){let s=o.cell,i=Sr(s,n);return new t(Object.assign(o,{cell:i}))}}return r.className="RNN",r})();H.registerClass(on);var vs=class extends yt{},Uf=(()=>{class r extends vs{constructor(t){super(t),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",this.units=t.units,be(this.units,"units"),this.activation=Lo(t.activation==null?this.DEFAULT_ACTIVATION:t.activation),this.useBias=t.useBias==null?!0:t.useBias,this.kernelInitializer=qt(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=qt(t.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=qt(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelRegularizer=Yt(t.kernelRegularizer),this.recurrentRegularizer=Yt(t.recurrentRegularizer),this.biasRegularizer=Yt(t.biasRegularizer),this.kernelConstraint=pe(t.kernelConstraint),this.recurrentConstraint=pe(t.recurrentConstraint),this.biasConstraint=pe(t.biasConstraint),this.dropout=Wa([1,_o([0,t.dropout==null?0:t.dropout])]),this.recurrentDropout=Wa([1,_o([0,t.recurrentDropout==null?0:t.recurrentDropout])]),this.dropoutFunc=t.dropoutFunc,this.stateSize=this.units,this.dropoutMask=null,this.recurrentDropoutMask=null}build(t){t=kt(t),this.kernel=this.addWeight("kernel",[t[t.length-1],this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias?this.bias=this.addWeight("bias",[this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(t,o){return z(()=>{if(t=t,t.length!==2)throw new O(`SimpleRNNCell expects 2 input Tensors, got ${t.length}.`);let n=t[1];t=t[0];let s=o.training==null?!1:o.training;0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=Ns({ones:()=>Pe(t),rate:this.dropout,training:s,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=Ns({ones:()=>Pe(n),rate:this.recurrentDropout,training:s,dropoutFunc:this.dropoutFunc}));let i,a=this.dropoutMask,l=this.recurrentDropoutMask;a!=null?i=go(R(t,a),this.kernel.read()):i=go(t,this.kernel.read()),this.bias!=null&&(i=xr(i,this.bias.read())),l!=null&&(n=R(n,l));let u=j(i,go(n,this.recurrentKernel.read()));return this.activation!=null&&(u=this.activation.apply(u)),[u,u]})}getConfig(){let t=super.getConfig(),o={units:this.units,activation:Oo(this.activation),useBias:this.useBias,kernelInitializer:Qt(this.kernelInitializer),recurrentInitializer:Qt(this.recurrentInitializer),biasInitializer:Qt(this.biasInitializer),kernelRegularizer:Wt(this.kernelRegularizer),recurrentRegularizer:Wt(this.recurrentRegularizer),biasRegularizer:Wt(this.biasRegularizer),activityRegularizer:Wt(this.activityRegularizer),kernelConstraint:ce(this.kernelConstraint),recurrentConstraint:ce(this.recurrentConstraint),biasConstraint:ce(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout};return Object.assign(Object.assign({},t),o)}}return r.className="SimpleRNNCell",r})();H.registerClass(Uf);var qy=(()=>{class r extends on{constructor(t){t.cell=new Uf(t),super(t)}call(t,o){return z(()=>{this.cell.dropoutMask!=null&&(Ct(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(Ct(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);let n=o==null?null:o.mask,s=o==null?null:o.training,i=o==null?null:o.initialState;return super.call(t,{mask:n,training:s,initialState:i})})}static fromConfig(t,o){return new t(o)}}return r.className="SimpleRNN",r})();H.registerClass(qy);var Hf=(()=>{class r extends vs{constructor(t){if(super(t),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_RECURRENT_ACTIVATION="hardSigmoid",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",t.resetAfter)throw new O("GRUCell does not support reset_after parameter set to true.");this.units=t.units,be(this.units,"units"),this.activation=Lo(t.activation===void 0?this.DEFAULT_ACTIVATION:t.activation),this.recurrentActivation=Lo(t.recurrentActivation===void 0?this.DEFAULT_RECURRENT_ACTIVATION:t.recurrentActivation),this.useBias=t.useBias==null?!0:t.useBias,this.kernelInitializer=qt(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=qt(t.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=qt(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelRegularizer=Yt(t.kernelRegularizer),this.recurrentRegularizer=Yt(t.recurrentRegularizer),this.biasRegularizer=Yt(t.biasRegularizer),this.kernelConstraint=pe(t.kernelConstraint),this.recurrentConstraint=pe(t.recurrentConstraint),this.biasConstraint=pe(t.biasConstraint),this.dropout=Wa([1,_o([0,t.dropout==null?0:t.dropout])]),this.recurrentDropout=Wa([1,_o([0,t.recurrentDropout==null?0:t.recurrentDropout])]),this.dropoutFunc=t.dropoutFunc,this.implementation=t.implementation,this.stateSize=this.units,this.dropoutMask=null,this.recurrentDropoutMask=null}build(t){t=kt(t);let o=t[t.length-1];this.kernel=this.addWeight("kernel",[o,this.units*3],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units*3],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias?this.bias=this.addWeight("bias",[this.units*3],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(t,o){return z(()=>{if(t=t,t.length!==2)throw new O(`GRUCell expects 2 input Tensors (inputs, h, c), got ${t.length}.`);let n=o.training==null?!1:o.training,s=t[1];t=t[0],0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=Ns({ones:()=>Pe(t),rate:this.dropout,training:n,count:3,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=Ns({ones:()=>Pe(s),rate:this.recurrentDropout,training:n,count:3,dropoutFunc:this.dropoutFunc}));let i=this.dropoutMask,a=this.recurrentDropoutMask,l,u,c;0<this.dropout&&this.dropout<1&&(t=R(t,i[0]));let p=go(t,this.kernel.read());this.useBias&&(p=xr(p,this.bias.read())),0<this.recurrentDropout&&this.recurrentDropout<1&&(s=R(s,a[0]));let m=this.recurrentKernel.read(),[f,h]=Re(m,[2*this.units,this.units],m.rank-1),g=go(s,f),[d,x,y]=Re(p,3,p.rank-1),[w,C]=Re(g,2,g.rank-1);l=this.recurrentActivation.apply(j(d,w)),u=this.recurrentActivation.apply(j(x,C));let S=go(R(u,s),h);c=this.activation.apply(j(y,S));let E=j(R(l,s),R(j(1,Lt(l)),c));return[E,E]})}getConfig(){let t=super.getConfig(),o={units:this.units,activation:Oo(this.activation),recurrentActivation:Oo(this.recurrentActivation),useBias:this.useBias,kernelInitializer:Qt(this.kernelInitializer),recurrentInitializer:Qt(this.recurrentInitializer),biasInitializer:Qt(this.biasInitializer),kernelRegularizer:Wt(this.kernelRegularizer),recurrentRegularizer:Wt(this.recurrentRegularizer),biasRegularizer:Wt(this.biasRegularizer),activityRegularizer:Wt(this.activityRegularizer),kernelConstraint:ce(this.kernelConstraint),recurrentConstraint:ce(this.recurrentConstraint),biasConstraint:ce(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout,implementation:this.implementation,resetAfter:!1};return Object.assign(Object.assign({},t),o)}}return r.className="GRUCell",r})();H.registerClass(Hf);var Ky=(()=>{class r extends on{constructor(t){t.implementation===0&&console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."),t.cell=new Hf(t),super(t)}call(t,o){return z(()=>{this.cell.dropoutMask!=null&&(Ct(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(Ct(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);let n=o==null?null:o.mask,s=o==null?null:o.training,i=o==null?null:o.initialState;return super.call(t,{mask:n,training:s,initialState:i})})}static fromConfig(t,o){return o.implmentation===0&&(o.implementation=1),new t(o)}}return r.className="GRU",r})();H.registerClass(Ky);var Uu=(()=>{class r extends vs{constructor(t){super(t),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_RECURRENT_ACTIVATION="hardSigmoid",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",this.units=t.units,be(this.units,"units"),this.activation=Lo(t.activation===void 0?this.DEFAULT_ACTIVATION:t.activation),this.recurrentActivation=Lo(t.recurrentActivation===void 0?this.DEFAULT_RECURRENT_ACTIVATION:t.recurrentActivation),this.useBias=t.useBias==null?!0:t.useBias,this.kernelInitializer=qt(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=qt(t.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=qt(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.unitForgetBias=t.unitForgetBias,this.kernelRegularizer=Yt(t.kernelRegularizer),this.recurrentRegularizer=Yt(t.recurrentRegularizer),this.biasRegularizer=Yt(t.biasRegularizer),this.kernelConstraint=pe(t.kernelConstraint),this.recurrentConstraint=pe(t.recurrentConstraint),this.biasConstraint=pe(t.biasConstraint),this.dropout=Wa([1,_o([0,t.dropout==null?0:t.dropout])]),this.recurrentDropout=Wa([1,_o([0,t.recurrentDropout==null?0:t.recurrentDropout])]),this.dropoutFunc=t.dropoutFunc,this.implementation=t.implementation,this.stateSize=[this.units,this.units],this.dropoutMask=null,this.recurrentDropoutMask=null}build(t){var o;t=kt(t);let n=t[t.length-1];this.kernel=this.addWeight("kernel",[n,this.units*4],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units*4],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint);let s;if(this.useBias){if(this.unitForgetBias){let i=this.biasInitializer,a=this.units;s=new(o=class extends yr{apply(u,c){let p=i.apply([a]),m=new ff().apply([a]),f=i.apply([a*2]);return cy(cy(p,m),f)}},o.className="CustomInit",o)}else s=this.biasInitializer;this.bias=this.addWeight("bias",[this.units*4],null,s,this.biasRegularizer,!0,this.biasConstraint)}else this.bias=null;this.built=!0}call(t,o){return z(()=>{let n=o.training==null?!1:o.training;if(t=t,t.length!==3)throw new O(`LSTMCell expects 3 input Tensors (inputs, h, c), got ${t.length}.`);let s=t[1],i=t[2];t=t[0],0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=Ns({ones:()=>Pe(t),rate:this.dropout,training:n,count:4,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=Ns({ones:()=>Pe(s),rate:this.recurrentDropout,training:n,count:4,dropoutFunc:this.dropoutFunc}));let a=this.dropoutMask,l=this.recurrentDropoutMask,u,c,p,m;0<this.dropout&&this.dropout<1&&(t=R(t,a[0]));let f=go(t,this.kernel.read());0<this.recurrentDropout&&this.recurrentDropout<1&&(s=R(s,l[0])),f=j(f,go(s,this.recurrentKernel.read())),this.useBias&&(f=xr(f,this.bias.read()));let[h,g,d,x]=Re(f,4,f.rank-1);u=this.recurrentActivation.apply(h),c=this.recurrentActivation.apply(g),p=j(R(c,i),R(u,this.activation.apply(d))),m=this.recurrentActivation.apply(x);let y=R(m,this.activation.apply(p));return[y,y,p]})}getConfig(){let t=super.getConfig(),o={units:this.units,activation:Oo(this.activation),recurrentActivation:Oo(this.recurrentActivation),useBias:this.useBias,kernelInitializer:Qt(this.kernelInitializer),recurrentInitializer:Qt(this.recurrentInitializer),biasInitializer:Qt(this.biasInitializer),unitForgetBias:this.unitForgetBias,kernelRegularizer:Wt(this.kernelRegularizer),recurrentRegularizer:Wt(this.recurrentRegularizer),biasRegularizer:Wt(this.biasRegularizer),activityRegularizer:Wt(this.activityRegularizer),kernelConstraint:ce(this.kernelConstraint),recurrentConstraint:ce(this.recurrentConstraint),biasConstraint:ce(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout,implementation:this.implementation};return Object.assign(Object.assign({},t),o)}}return r.className="LSTMCell",r})();H.registerClass(Uu);var jy=(()=>{class r extends on{constructor(t){t.implementation===0&&console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."),t.cell=new Uu(t),super(t)}call(t,o){return z(()=>{this.cell.dropoutMask!=null&&(Ct(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(Ct(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);let n=o==null?null:o.mask,s=o==null?null:o.training,i=o==null?null:o.initialState;return super.call(t,{mask:n,training:s,initialState:i})})}static fromConfig(t,o){return o.implmentation===0&&(o.implementation=1),new t(o)}}return r.className="LSTM",r})();H.registerClass(jy);var qf=(()=>{class r extends vs{constructor(t){super(t),this.cells=t.cells}get stateSize(){let t=[];for(let o of this.cells.slice().reverse())Array.isArray(o.stateSize)?t.push(...o.stateSize):t.push(o.stateSize);return t}call(t,o){return z(()=>{t=t;let n=t.slice(1),s=[];for(let l of this.cells.slice().reverse())Array.isArray(l.stateSize)?s.push(n.splice(0,l.stateSize.length)):s.push(n.splice(0,1));s.reverse();let i=[],a;for(let l=0;l<this.cells.length;++l){let u=this.cells[l];n=s[l],l===0?a=[t[0]].concat(n):a=[a[0]].concat(n),a=u.call(a,o),i.push(a.slice(1))}n=[];for(let l of i.slice().reverse())n.push(...l);return[a[0]].concat(n)})}build(t){hf(t)&&(t=t[0]),t=t;let o;this.cells.forEach((n,s)=>{Fo(`RNNCell_${s}`,()=>{n.build(t),Array.isArray(n.stateSize)?o=n.stateSize[0]:o=n.stateSize,t=[t[0],o]})}),this.built=!0}getConfig(){let t=super.getConfig(),o=i=>({className:i.getClassName(),config:i.getConfig()}),s={cells:this.cells.map(o)};return Object.assign(Object.assign({},t),s)}static fromConfig(t,o,n={}){let s=[];for(let i of o.cells)s.push(Sr(i,n));return new t({cells:s})}get trainableWeights(){if(!this.trainable)return[];let t=[];for(let o of this.cells)t.push(...o.trainableWeights);return t}get nonTrainableWeights(){let t=[];for(let o of this.cells)t.push(...o.nonTrainableWeights);if(!this.trainable){let o=[];for(let n of this.cells)o.push(...n.trainableWeights);return o.concat(t)}return t}getWeights(){let t=[];for(let o of this.cells)t.push(...o.weights);return up(t)}setWeights(t){let o=[];for(let n of this.cells){let s=n.weights.length,i=t.splice(s);for(let a=0;a<n.weights.length;++a)o.push([n.weights[a],i[a]])}Pu(o)}}return r.className="StackedRNNCells",r})();H.registerClass(qf);function Ns(r){let{ones:e,rate:t,training:o=!1,count:n=1,dropoutFunc:s}=r,i=()=>s!=null?s(e(),t):mf(e(),t),a=()=>Gi(i,e,o);return!n||n<=1?_e(a().clone()):Array(n).fill(void 0).map(a).map(u=>_e(u.clone()))}var BB=function(r,e){var t={};for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&e.indexOf(o)<0&&(t[o]=r[o]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(r);n<o.length;n++)e.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(r,o[n])&&(t[o[n]]=r[o[n]]);return t};var VB=(()=>{class r extends on{constructor(t){if(t.unroll)throw new bt("Unrolling is not possible with convolutional RNNs.");if(Array.isArray(t.cell))throw new bt("It is not possible at the moment to stack convolutional cells.");super(t),this.inputSpec=[new Xt({ndim:5})]}call(t,o){return z(()=>{if(this.cell.dropoutMask!=null&&(Ct(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(Ct(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null),o&&o.constants)throw new O("ConvRNN2D cell does not support constants");let n=o==null?null:o.mask,s=o==null?null:o.training,i=o==null?null:o.initialState;return super.call(t,{mask:n,training:s,initialState:i})})}computeOutputShape(t){let o=this.computeSingleOutputShape(t);return this.returnSequences||(o=[o[0],...o.slice(2)]),this.returnState&&(o=[o,...Array(2).fill([t[0],...o.slice(-3)])]),o}getInitialState(t){return z(()=>{let{stateSize:o}=this.cell,n=t.shape,s=this.computeSingleOutputShape(n),i=[s[0],...s.slice(2)],a=re(i);return Array.isArray(o)?Array(o.length).fill(a):[a]})}resetStates(t,o=!1){z(()=>{if(!this.stateful)throw new Yr("Cannot call resetStates() on an RNN Layer that is not stateful.");let n=this.inputSpec[0].shape,s=this.computeSingleOutputShape(n),i=[s[0],...s.slice(2)];if(n[0]==null)throw new O("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");if(this.getStates()==null)Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(()=>re(i)):this.states_=[re(i)];else if(t==null)Ct(this.states_),this.keptStates!=null&&(Ct(this.keptStates),this.keptStates=[]),Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(()=>re(i)):this.states_[0]=re(i);else{if(Array.isArray(t)||(t=[t]),t.length!==this.states_.length)throw new O(`Layer ${this.name} expects ${this.states_.length} state(s), but it received ${t.length} state value(s). Input received: ${t}`);o?this.keptStates.push(this.states_.slice()):Ct(this.states_);for(let l=0;l<this.states_.length;++l){let u=t[l],c=i;if(!b.arraysEqual(u.shape,c))throw new O(`State ${l} is incompatible with layer ${this.name}: expected shape=${c}, received shape=${u.shape}`);this.states_[l]=u}}this.states_=this.states_.map(l=>_e(l.clone()))})}computeSingleOutputShape(t){let{dataFormat:o,filters:n,kernelSize:s,padding:i,strides:a,dilationRate:l}=this.cell,u=o==="channelsFirst",c=t[u?3:2],p=t[u?4:3],m=vr(c,s[0],i,a[0],l[0]),f=vr(p,s[1],i,a[1],l[1]);return[...t.slice(0,2),...u?[n,m,f]:[m,f,n]]}}return r.className="ConvRNN2D",r})(),Kf=(()=>{class r extends Uu{constructor(t){let{filters:o,kernelSize:n,strides:s,padding:i,dataFormat:a,dilationRate:l}=t;super(Object.assign(Object.assign({},t),{units:o})),this.filters=o,be(this.filters,"filters"),this.kernelSize=Hi(n,2,"kernelSize"),this.kernelSize.forEach(u=>be(u,"kernelSize")),this.strides=Hi(s||1,2,"strides"),this.strides.forEach(u=>be(u,"strides")),this.padding=i||"valid",hr(this.padding),this.dataFormat=a||"channelsLast",se(this.dataFormat),this.dilationRate=Hi(l||1,2,"dilationRate"),this.dilationRate.forEach(u=>be(u,"dilationRate"))}build(t){var o;t=kt(t);let n=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[n]==null)throw new O(`The channel dimension of the input should be defined. Found ${t[n]}`);let s=t[n],i=4,a=this.kernelSize.concat([s,this.filters*i]);this.kernel=this.addWeight("kernel",a,null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint);let l=this.kernelSize.concat([this.filters,this.filters*i]);if(this.recurrentKernel=this.addWeight("recurrent_kernel",l,null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias){let u;if(this.unitForgetBias){let c=this.biasInitializer,p=this.filters;u=new(o=class extends yr{apply(f,h){let g=c.apply([p]),d=mr([p]),x=c.apply([p*2]);return Fu([g,d,x])}},o.className="CustomInit",o)}else u=this.biasInitializer;this.bias=this.addWeight("bias",[this.filters*i],null,u,this.biasRegularizer,!0,this.biasConstraint)}this.built=!0}call(t,o){return z(()=>{if(t.length!==3)throw new O(`ConvLSTM2DCell expects 3 input Tensors (inputs, h, c), got ${t.length}.`);let n=o.training||!1,s=t[0],i=t[1],a=t[2],l=4;0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=Ns({ones:()=>Pe(s),rate:this.dropout,training:n,count:l,dropoutFunc:this.dropoutFunc}));let u=this.dropoutMask,c=(et,nt,rt)=>!nt||!nt[rt]?et:R(nt[rt],et),p=c(s,u,0),m=c(s,u,1),f=c(s,u,2),h=c(s,u,3);0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=Ns({ones:()=>Pe(i),rate:this.recurrentDropout,training:n,count:l,dropoutFunc:this.dropoutFunc}));let g=this.recurrentDropoutMask,d=c(i,g,0),x=c(i,g,1),y=c(i,g,2),w=c(i,g,3),C=3,[S,E,A,$]=Re(this.kernel.read(),l,C),[_,L,M,V]=this.useBias?Re(this.bias.read(),l):[null,null,null,null];p=this.inputConv(p,S,_,this.padding),m=this.inputConv(m,E,L,this.padding),f=this.inputConv(f,A,M,this.padding),h=this.inputConv(h,$,V,this.padding);let[G,W,U,K]=Re(this.recurrentKernel.read(),l,C);d=this.recurrentConv(d,G),x=this.recurrentConv(x,W),y=this.recurrentConv(y,U),w=this.recurrentConv(w,K);let Z=this.recurrentActivation.apply(j(p,d)),q=this.recurrentActivation.apply(j(m,x)),Q=j(R(q,a),R(Z,this.activation.apply(j(f,y)))),tt=R(this.recurrentActivation.apply(j(h,w)),this.activation.apply(Q));return[tt,tt,Q]})}getConfig(){let t=super.getConfig(),{units:o}=t,n=BB(t,["units"]),s={filters:this.filters,kernelSize:this.kernelSize,padding:this.padding,dataFormat:this.dataFormat,dilationRate:this.dilationRate,strides:this.strides};return Object.assign(Object.assign({},n),s)}inputConv(t,o,n,s){let i=Fr(t,o,this.strides,s||"valid",this.dataFormat==="channelsFirst"?"NCHW":"NHWC",this.dilationRate);return n?xr(i,n,this.dataFormat):i}recurrentConv(t,o){return Fr(t,o,1,"same",this.dataFormat==="channelsFirst"?"NCHW":"NHWC")}}return r.className="ConvLSTM2DCell",r})();H.registerClass(Kf);var Xy=(()=>{class r extends VB{constructor(t){let o=new Kf(t);super(Object.assign(Object.assign({},t),{cell:o}))}static fromConfig(t,o){return new t(o)}}return r.className="ConvLSTM2D",r})();H.registerClass(Xy);var jf=(()=>{class r extends yt{constructor(t){super(t),this.rate=Math.max(Math.min(t.rate,1),0),this.noiseShape=t.noiseShape,this.seed=t.seed,this.supportsMasking=!0}getNoiseShape(t){if(this.noiseShape==null)return this.noiseShape;let o=t.shape,n=[];for(let s=0;s<this.noiseShape.length;++s)n.push(this.noiseShape[s]==null?o[s]:this.noiseShape[s]);return n}call(t,o){return z(()=>{this.invokeCallHook(t,o);let n=dt(t);if(0<this.rate&&this.rate<1){let s=o.training==null?!1:o.training,i=this.getNoiseShape(n);return Gi(()=>mf(n,this.rate,i,this.seed),()=>n,s)}return t})}getConfig(){let t={rate:this.rate,noiseShape:this.noiseShape,seed:this.seed},o=super.getConfig();return Object.assign(t,o),t}dispose(){return super.dispose()}}return r.className="Dropout",r})();H.registerClass(jf);var Yy=(()=>{class r extends jf{constructor(t){super(t),this.inputSpec=[{ndim:3}]}getNoiseShape(t){let o=t.shape;return[o[0],1,o[2]]}}return r.className="SpatialDropout1D",r})();H.registerClass(Yy);var Zy=(()=>{class r extends yt{constructor(t){if(super(t),this.activation=null,this.useBias=!0,this.kernel=null,this.bias=null,this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_BIAS_INITIALIZER="zeros",t.batchInputShape==null&&t.inputShape==null&&t.inputDim!=null){let o=null;t.batchSize!=null&&(o=t.batchSize),this.batchInputShape=[o,t.inputDim]}this.units=t.units,be(this.units,"units"),this.activation=Lo(t.activation),t.useBias!=null&&(this.useBias=t.useBias),this.kernelInitializer=qt(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.biasInitializer=qt(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelConstraint=pe(t.kernelConstraint),this.biasConstraint=pe(t.biasConstraint),this.kernelRegularizer=Yt(t.kernelRegularizer),this.biasRegularizer=Yt(t.biasRegularizer),this.activityRegularizer=Yt(t.activityRegularizer),this.supportsMasking=!0,this.inputSpec=[{minNDim:2}]}build(t){t=kt(t);let o=t[t.length-1];this.kernel==null&&(this.kernel=this.addWeight("kernel",[o,this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint))),this.inputSpec=[{minNDim:2,axes:{[-1]:o}}],this.built=!0}computeOutputShape(t){t=kt(t);let o=t.slice();return o[o.length-1]=this.units,o}call(t,o){return z(()=>{this.invokeCallHook(t,o);let n=dt(t),s=of(this.activation.getClassName()),i;return s!=null?i=go(n,this.kernel.read(),s,this.bias?this.bias.read():null):(i=go(n,this.kernel.read()),this.bias!=null&&(i=xr(i,this.bias.read())),this.activation!=null&&(i=this.activation.apply(i))),i})}getConfig(){let t={units:this.units,activation:Oo(this.activation),useBias:this.useBias,kernelInitializer:Qt(this.kernelInitializer),biasInitializer:Qt(this.biasInitializer),kernelRegularizer:Wt(this.kernelRegularizer),biasRegularizer:Wt(this.biasRegularizer),activityRegularizer:Wt(this.activityRegularizer),kernelConstraint:ce(this.kernelConstraint),biasConstraint:ce(this.biasConstraint)},o=super.getConfig();return Object.assign(t,o),t}}return r.className="Dense",r})();H.registerClass(Zy);var Qy=(()=>{class r extends yt{constructor(t){t=t||{},super(t),this.inputSpec=[{minNDim:3}],this.dataFormat=t.dataFormat}computeOutputShape(t){t=kt(t);for(let o of t.slice(1))if(o==null)throw new O(`The shape of the input to "Flatten" is not fully defined (got ${t.slice(1)}). Make sure to pass a complete "input_shape" or "batch_input_shape" argument to the first layer in your model.`);return[t[0],ho(t,1)]}call(t,o){return z(()=>{this.invokeCallHook(t,o);let n=dt(t);if(this.dataFormat==="channelsFirst"&&n.rank>1){let s=[0];for(let i=2;i<n.rank;++i)s.push(i);s.push(1),n=Et(n,s)}return $I(n)})}getConfig(){let t={};this.dataFormat!=null&&(t.dataFormat=this.dataFormat);let o=super.getConfig();return Object.assign(t,o),t}}return r.className="Flatten",r})();H.registerClass(Qy);var Jy=(()=>{class r extends yt{constructor(t){super(t),this.supportsMasking=!0,this.activation=Lo(t.activation)}call(t,o){return z(()=>{this.invokeCallHook(t,o);let n=dt(t);return this.activation.apply(n)})}getConfig(){let t={activation:Oo(this.activation)},o=super.getConfig();return Object.assign(t,o),t}}return r.className="Activation",r})();H.registerClass(Jy);var tb=(()=>{class r extends yt{constructor(t){super(t),this.n=t.n,this.inputSpec=[{ndim:2}]}computeOutputShape(t){return[t[0],this.n,t[1]]}call(t,o){return z(()=>(t=dt(t),EI(t,this.n)))}getConfig(){let t={n:this.n},o=super.getConfig();return Object.assign(t,o),t}}return r.className="RepeatVector",r})();H.registerClass(tb);var eb=(()=>{class r extends yt{constructor(t){super(t),this.targetShape=t.targetShape;for(let o=0;o<this.targetShape.length;++o)this.isUnknown(this.targetShape[o])&&(this.targetShape[o]=null)}isUnknown(t){return t<0||t==null}fixUnknownDimension(t,o){let n="Total size of new array must be unchanged.",s=o.slice(),i=1,a=null;for(let u=0;u<s.length;++u){let c=s[u];if(this.isUnknown(c))if(a===null)a=u;else throw new O("Can only specifiy one unknown dimension.");else i*=c}let l=ho(t);if(a!==null){if(i===0||l%i!==0)throw new O(n);s[a]=l/i}else if(l!==i)throw new O(n);return s}computeOutputShape(t){let o=!1;for(let n=0;n<t.length;++n)if(this.isUnknown(t[n])){o=!0;break}return o?t.slice(0,1).concat(this.targetShape):t.slice(0,1).concat(this.fixUnknownDimension(t.slice(1),this.targetShape))}call(t,o){return z(()=>{this.invokeCallHook(t,o);let n=dt(t),s=n.shape,i=s.slice(0,1).concat(this.fixUnknownDimension(s.slice(1),this.targetShape));return F(n,i)})}getConfig(){let t={targetShape:this.targetShape},o=super.getConfig();return Object.assign(t,o),t}}return r.className="Reshape",r})();H.registerClass(eb);var rb=(()=>{class r extends yt{constructor(t){if(super(t),t.dims==null)throw new Error("Required configuration field `dims` is missing during Permute constructor call.");if(!Array.isArray(t.dims))throw new Error(`Permute constructor requires \`dims\` to be an Array, but received ${t.dims} instead.`);let o=dr(1,t.dims.length+1);if(!b.arraysEqual(t.dims.slice().sort(),o))throw new Error("Invalid permutation `dims`: "+JSON.stringify(t.dims)+" `dims` must contain consecutive integers starting from 1.");this.dims=t.dims,this.dimsIncludingBatch=[0].concat(this.dims),this.inputSpec=[new Xt({ndim:this.dims.length+1})]}computeOutputShape(t){t=kt(t);let o=t.slice();return this.dims.forEach((n,s)=>{o[s+1]=t[n]}),o}call(t,o){return Et(dt(t),this.dimsIncludingBatch)}getConfig(){let t={dims:this.dims},o=super.getConfig();return Object.assign(t,o),t}}return r.className="Permute",r})();H.registerClass(rb);var ob=(()=>{class r extends yt{constructor(t){super(t??{}),this.supportsMasking=!0,t!=null?this.maskValue=t.maskValue==null?0:t.maskValue:this.maskValue=0}computeOutputShape(t){return t}getConfig(){let t=super.getConfig(),o={maskValue:this.maskValue};return Object.assign(o,t),o}computeMask(t,o){let n=dt(t);return cu(Mi(n,this.maskValue),-1)}call(t,o){return z(()=>{this.invokeCallHook(t,o);let n=dt(t),a=cu(Mi(n,this.maskValue),-1,!0);return R(n,Y(a,n.dtype))})}}return r.className="Masking",r})();H.registerClass(ob);var nb=(()=>{class r extends yt{constructor(t){if(super(t),this.embeddings=null,this.DEFAULT_EMBEDDINGS_INITIALIZER="randomUniform",t.batchInputShape==null&&t.inputShape==null){let o=null;t.batchSize!=null&&(o=t.batchSize),t.inputLength==null?this.batchInputShape=[o,null]:this.batchInputShape=[o].concat(Vt(t.inputLength))}this.inputDim=t.inputDim,be(this.inputDim,"inputDim"),this.outputDim=t.outputDim,be(this.outputDim,"outputDim"),this.embeddingsInitializer=qt(t.embeddingsInitializer||this.DEFAULT_EMBEDDINGS_INITIALIZER),this.embeddingsRegularizer=Yt(t.embeddingsRegularizer),this.activityRegularizer=Yt(t.activityRegularizer),this.embeddingsConstraint=pe(t.embeddingsConstraint),this.maskZero=t.maskZero,this.supportsMasking=t.maskZero,this.inputLength=t.inputLength}build(t){this.embeddings=this.addWeight("embeddings",[this.inputDim,this.outputDim],this.dtype,this.embeddingsInitializer,this.embeddingsRegularizer,!0,this.embeddingsConstraint),this.built=!0}warnOnIncompatibleInputShape(t){}computeMask(t,o){return z(()=>this.maskZero?(t=dt(t),Mi(t,ht(t))):null)}computeOutputShape(t){if(t=kt(t),this.inputLength==null)return[...t,this.outputDim];let o=Vt(this.inputLength);if(o.length!==t.length-1)throw new O(`"inputLength" is ${this.inputLength}, but received input shape has shape ${t}`);{let n=0;for(let s=0;s<o.length;++s){let i=o[s],a=t[s+1];if(i!=null&&a!=null&&i!==a)throw new O(`"inputLength" is ${this.inputLength}, but received input shape has shape ${t}`);i==null&&(o[n]=a),n++}}return[t[0],...o,this.outputDim]}call(t,o){return z(()=>{this.invokeCallHook(t,o);let n=dt(t);n.dtype!=="int32"&&(n=ir(n,"int32"));let s=pf(this.embeddings.read(),F(n,[n.size]));return F(s,kt(this.computeOutputShape(n.shape)))})}getConfig(){let t={inputDim:this.inputDim,outputDim:this.outputDim,embeddingsInitializer:Qt(this.embeddingsInitializer),embeddingsRegularizer:Wt(this.embeddingsRegularizer),activityRegularizer:Wt(this.activityRegularizer),embeddingsConstraint:ce(this.embeddingsConstraint),maskZero:this.maskZero,inputLength:this.inputLength},o=super.getConfig();return Object.assign(t,o),t}}return r.className="Embedding",r})();H.registerClass(nb);var Is=class extends yt{constructor(e){super(e||{}),this.supportsMasking=!0}mergeFunction(e){throw new bt}computeElementwiseOpOutputShape(e,t){if(e==null||t==null)return null;if(e.length<t.length)return this.computeElementwiseOpOutputShape(t,e);if(t.length===0)return e;let o=e.slice(0,e.length-t.length);for(let n=0;n<t.length;++n){let s=e[e.length-t.length+n],i=t[n];if(s==null||i==null||s<0||i<0)o.push(null);else if(s===1)o.push(i);else if(i===1)o.push(s);else{if(s!==i)throw new O("Operands could not be broadcast together with shapes "+JSON.stringify(e)+" "+JSON.stringify(t));o.push(s)}}return o}build(e){if(Array.isArray(e)&&!Array.isArray(e[0])&&(e=[kt(e)]),e=e,e.length<2)throw new O(`A merge layer should be called on an Array of at least 2 inputs. Got ${e.length} input(s).`);let t=[];for(let s of e)s!=null&&s[0]!==null&&t.push(s[0]);if(t=fo(t),t.length>1)throw new O(`Can not merge tensors with different batch sizes. Got tensors with shapes: ${JSON.stringify(e)}.`);let o=e[0]==null?null:e[0].slice(1);for(let s=1;s<e.length;++s){let i=e[s]==null?null:e[s].slice(1);o=this.computeElementwiseOpOutputShape(o,i)}let n=e.map(s=>s.length);e.indexOf(null)===-1&&fo(n).length===1?this.reshapeRequired=!1:this.reshapeRequired=!0}call(e,t){return z(()=>{if(e=e,this.reshapeRequired){let o=[],n=e.map(s=>s.rank);if(n.indexOf(null)===-1){let s=_o(n);for(let i of e){let a=i.rank;for(let l=0;l<s-a;++l)i=bs(i,1);o.push(i)}return this.mergeFunction(o)}else{let s=!1;for(let l of e){let u=l.rank;if(u==null){let c=l.shape,p=c[0],m=c.slice(1).concat([p]),f=F(l,[p].concat(ho(c.slice(1))));f=Et(f,[1,0]),f=F(f,m),o.push(f),s=!0}else if(u>1){let c=dr(1,u).concat([0]);o.push(Et(l,c)),s=!0}else o.push(l)}let i=this.mergeFunction(o),a=i.rank;if(s){if(a==null){let l=i.shape,u=l.length,c=l[u-1],p=[c].concat(l.slice(0,l.length-1));i=F(Et(F(i,[-1,c]),[1,0]),p)}else if(a>1){let l=[a-1].concat(dr(0,a-1));i=Et(i,l)}}return i}}else return this.mergeFunction(e)})}computeOutputShape(e){e=e;let t;e[0]==null?t=null:t=e[0].slice(1);for(let n=1;n<e.length;++n){let s=e[n]==null?null:e[n].slice(1);t=this.computeElementwiseOpOutputShape(t,s)}let o=[];for(let n of e)n!=null&&n[0]!==null&&o.push(n[0]);return o=fo(o),o.length===1?t=o.concat(t):t=[null].concat(t),t}computeMask(e,t){return z(()=>{if(t==null)return null;if(!Array.isArray(t))throw new O("`mask` should be an Array");if(!Array.isArray(e))throw new O("`inputs` should be an Array");if(t.length!==e.length)throw new O(`The Array 'inputs' and 'mask' are expected to have the same length, but have different lengths (${e.length} vs ${t.length})`);if(t.every(n=>n==null))return null;t=t.map(n=>n==null?n:ve(n,0));let o=t[0];for(let n=1;n<t.length-1;++n)o=nr(o,t[n]);return o})}},sb=(()=>{class r extends Is{constructor(t){super(t)}mergeFunction(t){return z(()=>{let o=t[0].clone();for(let n=1;n<t.length;++n)o=j(o,t[n]);return o})}}return r.className="Add",r})();H.registerClass(sb);var ib=(()=>{class r extends Is{constructor(t){super(t)}mergeFunction(t){return z(()=>{let o=t[0].clone();for(let n=1;n<t.length;++n)o=R(o,t[n]);return o})}}return r.className="Multiply",r})();H.registerClass(ib);var ab=(()=>{class r extends Is{constructor(t){super(t)}mergeFunction(t){return z(()=>{let o=t[0].clone();for(let n=1;n<t.length;++n)o=j(o,t[n]);return R(1/t.length,o)})}}return r.className="Average",r})();H.registerClass(ab);var lb=(()=>{class r extends Is{constructor(t){super(t)}mergeFunction(t){return z(()=>{let o=t[0];for(let n=1;n<t.length;++n)o=Or(o,t[n]);return o})}}return r.className="Maximum",r})();H.registerClass(lb);var ub=(()=>{class r extends Is{constructor(t){super(t)}mergeFunction(t){return z(()=>{let o=t[0];for(let n=1;n<t.length;++n)o=Qo(o,t[n]);return o})}}return r.className="Minimum",r})();H.registerClass(ub);var cb=(()=>{class r extends Is{constructor(t){super(t),this.DEFAULT_AXIS=-1,t==null&&(t={}),this.axis=t.axis==null?this.DEFAULT_AXIS:t.axis,this.supportsMasking=!0,this.reshapeRequired=!1}build(t){if(!(Array.isArray(t)&&Array.isArray(t[0]))||t.length===1)throw new O("A `Concatenate` layer should be called on a list of at least 2 inputs");t=t;let o=!0;for(let s of t)if(s!=null){o=!1;break}if(o)return;let n=[];for(let s=0;s<t.length;++s){let i=t[s].slice();i.splice(this.axis,1);let a=!1;for(let l of n)if(b.arraysEqual(l,i)){a=!0;break}a||n.push(i)}if(n.length>1)throw new O("A `Concatenate` layer requires inputs with matching shapes except for the concat axis. Got input shapes: "+JSON.stringify(t))}mergeFunction(t){return z(()=>Fu(t,this.axis))}computeOutputShape(t){if(!(Array.isArray(t)&&Array.isArray(t[0])))throw new O("A `Concatenate` layer should be called on a list of inputs.");let o=t,n=o[0].slice(),s=this.axis<0?n.length+this.axis:this.axis;for(let i of o.slice(1)){if(n[s]==null||i[s]==null){n[s]=null;break}n[s]+=i[s]}return n}computeMask(t,o){if(o==null)return null;if(!Array.isArray(o))throw new O("`mask` should be an array for Concatenate");if(!Array.isArray(t))throw new O("`inputs` should be an array for Concatenate");if(o.length!==t.length)throw new O(`Mismatch in the length of mask (${o.length}) and the legnth of inputs (${t.length})`);return z(()=>{let n=!0;if(o.forEach(a=>{if(a!=null){n=!1;return}}),n)return null;let s=[];for(let a=0;a<t.length;++a)o[a]==null?s.push(Y(Pe(t[a]),"bool")):o[a].rank<t[a].rank?s.push(ve(o[a],-1)):s.push(o[a]);let i=te(s,this.axis);return Rc(i,-1,!1)})}getConfig(){let t={axis:this.axis},o=super.getConfig();return Object.assign(t,o),t}}return r.className="Concatenate",r})();H.registerClass(cb);function xp(r,e){for(;r<0;)r+=e;return r}function GB(r,e,t){if(r.shape.length>3||e.shape.length>3)throw new bt("batchDot is not implemented for tensors of 4D or higher rank yet");if(b.assert(r.shape.length>=2,()=>`batchDot requires the rank of x to be >= 2, but got ${r.shape.length}`),b.assert(r.shape.length>=2,()=>`batchDot requires the rank of y to be >= 2, but got ${e.shape.length}`),typeof t=="number"&&(t=[t,t]),r.dtype==="complex64"||e.dtype==="complex64")throw new bt("batchDot is not implemented for complex64-type Tensors yet.");let o=r.shape.length,n=e.shape.length;t==null&&(t=[o-1,n-2]);let s=t;return z(()=>{let i;if(o>n){i=o-n;let l=[];for(let u=0;u<i;++u)l.push(1);e=F(e,e.shape.concat(l))}else if(n>o){i=n-o;let l=[];for(let u=0;u<i;++u)l.push(1);r=F(r,r.shape.concat(l))}else i=0;let a;if(r.shape.length===2&&e.shape.length===2)s[0]===s[1]?a=it(R(r,e),s[0]):a=it(R(Et(r,[1,0]),e),s[1]);else{let l=s[0]!==r.shape.length-1,u=s[1]===e.shape.length-1;a=Mt(r,e,l,u)}if(i>0){let l;o>n?l=o+n-3:l=o-1;let u=[];for(let c=l;c<l+i;++c)u.push(c);a=$o(a,u)}return a.shape.length===1&&(a=ve(a,1)),a})}var pb=(()=>{class r extends Is{constructor(t){super(t),this.axes=t.axes,this.normalize=t.normalize==null?!1:t.normalize,this.supportsMasking=!0,this.reshapeRequired=!1}build(t){b.assert(Array.isArray(t)&&t.length===2&&Array.isArray(t[0])&&Array.isArray(t[1]),()=>"A `Dot` layer should be called on a list of exactly 2 inputs.");let o=t[0],n=t[1];if(o.length>3||n.length>3)throw new bt("Dot layer does not support tensors of 4D or higher rank yet.");let s=this.interpretAxes(o,n);if(o[s[0]]!==n[s[1]])throw new O(`Dimension incompatibility: ${o[s[0]]} !== ${n[s[1]]}`)}mergeFunction(t){if(t.length!==2)throw new O(`A \`Dot\` layer must be called on exactly 2 inputs, but received ${t.length} input(s).`);let o=t[0],n=t[1],s;return Array.isArray(this.axes)?s=this.axes.map((i,a)=>xp(i,t[a].shape.length)):s=[xp(this.axes,o.shape.length),xp(this.axes,n.shape.length)],this.normalize&&(o=cp(o,s[0]),n=cp(n,s[1])),GB(o,n,s)}interpretAxes(t,o){let n;return Array.isArray(this.axes)?n=this.axes:n=[xp(this.axes,t.length),xp(this.axes,o.length)],n}computeOutputShape(t){b.assert(Array.isArray(t)&&t.length===2&&Array.isArray(t[0])&&Array.isArray(t[1]),()=>"A `Dot` layer should be called on a list of exactly 2 inputs.");let o=t[0].slice(),n=t[1].slice();if(o.length>3||n.length>3)throw new bt("Dot layer does not support tensors of 4D or higher rank yet.");let s=this.interpretAxes(o,n);o.splice(s[0],1),n.splice(s[1],1),n.splice(0,1);let i=o.concat(n);return i.length===1&&i.push(1),i}computeMask(t,o){return null}getConfig(){let t={axes:this.axes,normalize:this.normalize},o=super.getConfig();return Object.assign(t,o),t}}return r.className="Dot",r})();H.registerClass(pb);var mb=(()=>{class r extends yt{constructor(t){super(t),this.supportsMasking=!0,this.stddev=t.stddev}computeOutputShape(t){return t}getConfig(){let t=super.getConfig(),o={stddev:this.stddev};return Object.assign(o,t),o}call(t,o){return z(()=>{this.invokeCallHook(t,o);let n=dt(t);return Gi(()=>j(_u(n.shape,0,this.stddev),n),()=>n,o.training||!1)})}}return r.className="GaussianNoise",r})();H.registerClass(mb);var fb=(()=>{class r extends yt{constructor(t){super(t),this.supportsMasking=!0,this.rate=t.rate}computeOutputShape(t){return t}getConfig(){let t=super.getConfig(),o={rate:this.rate};return Object.assign(o,t),o}call(t,o){return z(()=>{this.invokeCallHook(t,o);let n=dt(t);return this.rate>0&&this.rate<1?Gi(()=>{let i=Math.sqrt(this.rate/(1-this.rate));return R(n,_u(n.shape,1,i))},()=>n,o.training||!1):n})}}return r.className="GaussianDropout",r})();H.registerClass(fb);var hb=(()=>{class r extends yt{constructor(t){super(t),this.supportsMasking=!0,this.rate=t.rate,this.noiseShape=t.noiseShape}_getNoiseShape(t){return this.noiseShape||dt(t).shape}computeOutputShape(t){return t}getConfig(){let t=super.getConfig(),o={rate:this.rate};return Object.assign(o,t),o}call(t,o){return z(()=>{if(this.rate<1&&this.rate>0){let n=this._getNoiseShape(t);return Gi(()=>{let i=dt(t),u=-1.6732632423543772*1.0507009873554805,c=Cr(Ao(n),this.rate);c=ir(c,"float32");let p=((1-this.rate)*(1+this.rate*u**2))**-.5,m=-p*u*this.rate,f=j(R(i,c),R(j(c,-1),u));return j(R(f,p),m)},()=>dt(t),o.training||!1)}return t})}}return r.className="AlphaDropout",r})();H.registerClass(hb);function yp(r,e,t,o,n,s=.001){let i;if(r.rank===2)i=ox(r,e,t,o,n,s);else if(r.rank===3)i=nx(r,e,t,o,n,s);else if(r.rank===4)i=sx(r,e,t,o,n,s);else throw new bt(`batchNormalization is not implemented for array of rank ${r.rank} yet`);return i}function WB(r,e,t,o,n=.001){return z(()=>{let s=yu(r,o),i=s.mean,a=s.variance;return[yp(r,i,a,t,e,n),i,a]})}function UB(r,e,t,o,n=.001){return z(()=>{let s=yu(r,o),i=s.mean,a=s.variance,l=[];for(let h of dr(0,r.rank))o.indexOf(h)!==-1?l.push(1):l.push(r.shape[h]);let u=F(i,l),c=F(a,l),p=e==null?null:F(e,l),m=t==null?null:F(t,l);return[yp(r,u,c,m,p,n),i,a]})}function HB(r,e,t,o,n=.001){return b.arraysEqual(o.slice().sort(),dr(0,r.rank-1))?WB(r,e,t,o,n):UB(r,e,t,o,n)}var db=(()=>{class r extends yt{constructor(t){t==null&&(t={}),super(t),this.supportsMasking=!0,this.axis=t.axis==null?-1:t.axis,this.momentum=t.momentum==null?.99:t.momentum,this.epsilon=t.epsilon==null?.001:t.epsilon,this.center=t.center==null?!0:t.center,this.scale=t.scale==null?!0:t.scale,this.betaInitializer=qt(t.betaInitializer||"zeros"),this.gammaInitializer=qt(t.gammaInitializer||"ones"),this.movingMeanInitializer=qt(t.movingMeanInitializer||"zeros"),this.movingVarianceInitializer=qt(t.movingVarianceInitializer||"ones"),this.betaConstraint=pe(t.betaConstraint),this.gammaConstraint=pe(t.gammaConstraint),this.betaRegularizer=Yt(t.betaRegularizer),this.gammaRegularizer=Yt(t.gammaRegularizer)}build(t){t=kt(t);let o=this.axis>=0?this.axis:this.axis+t.length,n=t[o];if(n==null)throw new O(`Axis ${o} of input tensor should have a defined dimension but the layer received an input with shape ${JSON.stringify(t)}.`);this.inputSpec=[new Xt({ndim:t.length,axes:{[o]:n}})];let s=[n];this.scale&&(this.gamma=this.addWeight("gamma",s,null,this.gammaInitializer,this.gammaRegularizer,!0,this.gammaConstraint)),this.center&&(this.beta=this.addWeight("beta",s,null,this.betaInitializer,this.betaRegularizer,!0,this.betaConstraint)),this.movingMean=this.addWeight("moving_mean",s,null,this.movingMeanInitializer,null,!1),this.movingVariance=this.addWeight("moving_variance",s,null,this.movingVarianceInitializer,null,!1),this.built=!0}call(t,o){return z(()=>{let n=o.training==null?!1:o.training,s=dt(t),i=s.shape,a=i.length,l=dr(0,a),u=this.axis>=0?this.axis:this.axis+a;l.splice(u,1);let c=po(1,a);c[u]=i[u];let p=l.slice();p.sort();let m=!b.arraysEqual(p,dr(0,a).slice(0,a-1)),f=()=>{if(m){let w=F(this.movingMean.read(),c),C=F(this.movingVariance.read(),c),S=this.center?F(this.beta.read(),c):null,E=this.scale?F(this.gamma.read(),c):null;return yp(s,w,C,S,E,this.epsilon)}else return yp(s,this.movingMean.read(),this.movingVariance.read(),this.beta==null?null:this.beta.read(),this.gamma==null?null:this.gamma.read(),this.epsilon)};if(!n)return f();let[h,g,d]=HB(s,this.gamma.read(),this.beta.read(),l,this.epsilon),x=(w,C,S)=>{z(()=>{let E=1-S,A=w.read(),$=R(lt(A,C),E);w.write(lt(A,$))})};return(()=>{x(this.movingMean,g,this.momentum),x(this.movingVariance,d,this.momentum)})(),h})}getConfig(){let t={axis:this.axis,momentum:this.momentum,epsilon:this.epsilon,center:this.center,scale:this.scale,betaInitializer:Qt(this.betaInitializer),gammaInitializer:Qt(this.gammaInitializer),movingMeanInitializer:Qt(this.movingMeanInitializer),movingVarianceInitializer:Qt(this.movingVarianceInitializer),betaRegularizer:Wt(this.betaRegularizer),gammaRegularizer:Wt(this.gammaRegularizer),betaConstraint:ce(this.betaConstraint),gammaConstraint:ce(this.gammaConstraint)},o=super.getConfig();return Object.assign(t,o),t}}return r.className="BatchNormalization",r})();H.registerClass(db);var gb=(()=>{class r extends yt{constructor(t){if(t==null&&(t={}),super(t),this.axis=t.axis==null?-1:t.axis,typeof this.axis=="number"){if(!Number.isInteger(this.axis))throw new Error(`Expected axis to be an integer, but received ${this.axis}`)}else if(Array.isArray(this.axis)){for(let o of this.axis)if(!Number.isInteger(o))throw new Error(`Expected axis to be an array of integers, but received ${JSON.stringify(this.axis)}`)}else throw new Error(`Expected axis to be an integer or an array of integers, but received ${JSON.stringify(this.axis)}`);this.epsilon=t.epsilon==null?.001:t.epsilon,this.center=t.center==null?!0:t.center,this.scale=t.scale==null?!0:t.scale,this.betaInitializer=qt(t.betaInitializer||"zeros"),this.gammaInitializer=qt(t.gammaInitializer||"ones"),this.betaRegularizer=Yt(t.betaRegularizer),this.gammaRegularizer=Yt(t.gammaRegularizer),this.supportsMasking=!0}build(t){t=kt(t);let o=t.length;typeof this.axis=="number"&&(this.axis=[this.axis]);for(let i=0;i<this.axis.length;++i)this.axis[i]<0&&(this.axis[i]+=o);for(let i of this.axis)if(i<0||i>=o)throw new Error(`Invalid axis: ${i}`);if(this.axis.length!==fo(this.axis).length)throw new Error(`Found duplicate axes in: ${this.axis}`);let n=this.axis.map(i=>t[i]),s=!0;this.scale?this.gamma=this.addWeight("gamma",n,"float32",this.gammaInitializer,this.gammaRegularizer,s):this.gamma=null,this.center?this.beta=this.addWeight("beta",n,"float32",this.betaInitializer,this.betaRegularizer,s):this.beta=null,this.built=!0}call(t,o){let n=dt(t),s=n.shape,i=s.length;return z(()=>{let{mean:l,variance:u}=yu(n,this.axis,!0),c=po(1,i);for(let d of this.axis)c[d]=s[d];let p=d=>d!=null&&d.shape.length!==i?F(d,c):d,m=this.scale?p(this.gamma.read()):null,f=this.center?p(this.beta.read()):null,h=[],g=[];for(let d=0;d<i;++d)this.axis.indexOf(d)!==-1?(h.push(s[d]),g.push(1)):(h.push(1),g.push(s[d]));return l=Qe(l,h),u=Qe(u,h),m!=null&&(m=Qe(m,g)),f!=null&&(f=Qe(f,g)),yp(n,l,u,f,m,this.epsilon)})}getConfig(){let t={axis:this.axis,epsilon:this.epsilon,center:this.center,scale:this.scale,betaInitializer:Qt(this.betaInitializer),gammaInitializer:Qt(this.gammaInitializer),betaRegularizer:Wt(this.betaRegularizer),gammaRegularizer:Wt(this.gammaRegularizer)},o=super.getConfig();return Object.assign(t,o),t}}return r.className="LayerNormalization",r})();H.registerClass(gb);function qB(r,e,t){return z(()=>{if(r.rank!==4)throw new O(`temporalPadding expects input tensor to be 4-D, but received a ${r.rank}-D tensor.`);if(e==null&&(e=[[1,1],[1,1]]),e.length!==2||e[0].length!==2||e[1].length!==2)throw new O("spatial2dPadding expects `padding` to be an Array of two Arrays, each of which is an Array of two integers.");if(t==null&&(t=gr()),t!=="channelsLast"&&t!=="channelsFirst")throw new O(`Unknown data format: ${t}. Supported data formats are 'channelsLast' and 'channelsFirst.`);let o;return t==="channelsFirst"?o=[[0,0],[0,0],e[0],e[1]]:o=[[0,0],e[0],e[1],[0,0]],Fa(r,o)})}var xb=(()=>{class r extends yt{constructor(t){if(t==null&&(t={}),super(t),this.dataFormat=t.dataFormat==null?gr():t.dataFormat,t.padding==null)this.padding=[[1,1],[1,1]];else if(typeof t.padding=="number")this.padding=[[t.padding,t.padding],[t.padding,t.padding]];else{if(t.padding=t.padding,t.padding.length!==2)throw new O(`ZeroPadding2D expects padding to be a length-2 array, but received a length-${t.padding.length} array.`);let o,n;if(typeof t.padding[0]=="number")o=[t.padding[0],t.padding[0]],n=[t.padding[1],t.padding[1]];else{if(t.padding=t.padding,t.padding[0].length!==2)throw new O(`ZeroPadding2D expects height padding to be a length-2 array, but received a length-${t.padding[0].length} array.`);if(o=t.padding[0],t.padding[1].length!==2)throw new O(`ZeroPadding2D expects width padding to be a length-2 array, but received a length-${t.padding[1].length} array.`);n=t.padding[1]}this.padding=[o,n]}this.inputSpec=[new Xt({ndim:4})]}computeOutputShape(t){t=kt(t);let o,n;return this.dataFormat==="channelsFirst"?(t[2]!=null&&t[2]>=0?o=t[2]+this.padding[0][0]+this.padding[0][1]:o=null,t[3]!=null&&t[3]>=0?n=t[3]+this.padding[1][0]+this.padding[1][1]:n=null,[t[0],t[1],o,n]):(t[1]!=null&&t[1]>=0?o=t[1]+this.padding[0][0]+this.padding[0][1]:o=null,t[2]!=null&&t[2]>=0?n=t[2]+this.padding[1][0]+this.padding[1][1]:n=null,[t[0],o,n,t[3]])}call(t,o){return z(()=>qB(dt(t),this.padding,this.dataFormat))}getConfig(){let t={padding:this.padding,dataFormat:this.dataFormat},o=super.getConfig();return Object.assign(t,o),t}}return r.className="ZeroPadding2D",r})();H.registerClass(xb);function th(r,e,t,o,n,s){return z(()=>{se(n),iy(s),hr(o),t==null&&(t=[1,1]),o==null&&(o="valid"),n==null&&(n=gr()),s==null&&(s="max"),r=gp(r,n);let i,a=o==="same"?"same":"valid";return s==="max"?i=Ra(r,e,t,a):i=Ta(r,e,t,a),n==="channelsFirst"&&(i=Et(i,[0,3,1,2])),i})}function ST(r,e,t,o,n,s){return z(()=>{se(n),iy(s),hr(o),t==null&&(t=[1,1,1]),o==null&&(o="valid"),n==null&&(n=gr()),s==null&&(s="max"),r=Ly(r,n);let i,a=o==="same"?"same":"valid";return s==="max"?i=vx(r,e,t,a):i=rx(r,e,t,a),n==="channelsFirst"&&(i=Et(i,[0,4,1,2,3])),i})}var Xf=class extends yt{constructor(e){if(e.poolSize==null&&(e.poolSize=2),super(e),typeof e.poolSize=="number")this.poolSize=[e.poolSize];else if(Array.isArray(e.poolSize)&&e.poolSize.length===1&&typeof e.poolSize[0]=="number")this.poolSize=e.poolSize;else throw new O(`poolSize for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(e.poolSize)}`);if(be(this.poolSize,"poolSize"),e.strides==null)this.strides=this.poolSize;else if(typeof e.strides=="number")this.strides=[e.strides];else if(Array.isArray(e.strides)&&e.strides.length===1&&typeof e.strides[0]=="number")this.strides=e.strides;else throw new O(`strides for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(e.strides)}`);be(this.strides,"strides"),this.padding=e.padding==null?"valid":e.padding,hr(this.padding),this.inputSpec=[new Xt({ndim:3})]}computeOutputShape(e){e=kt(e);let t=vr(e[1],this.poolSize[0],this.padding,this.strides[0]);return[e[0],t,e[2]]}call(e,t){return z(()=>{this.invokeCallHook(e,t),e=bs(dt(e),2);let o=this.poolingFunction(dt(e),[this.poolSize[0],1],[this.strides[0],1],this.padding,"channelsLast");return $o(o,[2])})}getConfig(){let e={poolSize:this.poolSize,padding:this.padding,strides:this.strides},t=super.getConfig();return Object.assign(e,t),e}},yb=(()=>{class r extends Xf{constructor(t){super(t)}poolingFunction(t,o,n,s,i){return se(i),hr(s),th(t,o,n,s,i,"max")}}return r.className="MaxPooling1D",r})();H.registerClass(yb);var bb=(()=>{class r extends Xf{constructor(t){super(t)}poolingFunction(t,o,n,s,i){return se(i),hr(s),th(t,o,n,s,i,"avg")}}return r.className="AveragePooling1D",r})();H.registerClass(bb);var Yf=class extends yt{constructor(e){if(e.poolSize==null&&(e.poolSize=[2,2]),super(e),this.poolSize=Array.isArray(e.poolSize)?e.poolSize:[e.poolSize,e.poolSize],e.strides==null)this.strides=this.poolSize;else if(Array.isArray(e.strides)){if(e.strides.length!==2)throw new O(`If the strides property of a 2D pooling layer is an Array, it is expected to have a length of 2, but received length ${e.strides.length}.`);this.strides=e.strides}else this.strides=[e.strides,e.strides];be(this.poolSize,"poolSize"),be(this.strides,"strides"),this.padding=e.padding==null?"valid":e.padding,this.dataFormat=e.dataFormat==null?"channelsLast":e.dataFormat,se(this.dataFormat),hr(this.padding),this.inputSpec=[new Xt({ndim:4})]}computeOutputShape(e){e=kt(e);let t=this.dataFormat==="channelsFirst"?e[2]:e[1],o=this.dataFormat==="channelsFirst"?e[3]:e[2];return t=vr(t,this.poolSize[0],this.padding,this.strides[0]),o=vr(o,this.poolSize[1],this.padding,this.strides[1]),this.dataFormat==="channelsFirst"?[e[0],e[1],t,o]:[e[0],t,o,e[3]]}call(e,t){return z(()=>(this.invokeCallHook(e,t),this.poolingFunction(dt(e),this.poolSize,this.strides,this.padding,this.dataFormat)))}getConfig(){let e={poolSize:this.poolSize,padding:this.padding,strides:this.strides,dataFormat:this.dataFormat},t=super.getConfig();return Object.assign(e,t),e}},wb=(()=>{class r extends Yf{constructor(t){super(t)}poolingFunction(t,o,n,s,i){return se(i),hr(s),th(t,o,n,s,i,"max")}}return r.className="MaxPooling2D",r})();H.registerClass(wb);var Cb=(()=>{class r extends Yf{constructor(t){super(t)}poolingFunction(t,o,n,s,i){return se(i),hr(s),th(t,o,n,s,i,"avg")}}return r.className="AveragePooling2D",r})();H.registerClass(Cb);var Zf=class extends yt{constructor(e){if(e.poolSize==null&&(e.poolSize=[2,2,2]),super(e),this.poolSize=Array.isArray(e.poolSize)?e.poolSize:[e.poolSize,e.poolSize,e.poolSize],e.strides==null)this.strides=this.poolSize;else if(Array.isArray(e.strides)){if(e.strides.length!==3)throw new O(`If the strides property of a 3D pooling layer is an Array, it is expected to have a length of 3, but received length ${e.strides.length}.`);this.strides=e.strides}else this.strides=[e.strides,e.strides,e.strides];be(this.poolSize,"poolSize"),be(this.strides,"strides"),this.padding=e.padding==null?"valid":e.padding,this.dataFormat=e.dataFormat==null?"channelsLast":e.dataFormat,se(this.dataFormat),hr(this.padding),this.inputSpec=[new Xt({ndim:5})]}computeOutputShape(e){e=kt(e);let t=this.dataFormat==="channelsFirst"?e[2]:e[1],o=this.dataFormat==="channelsFirst"?e[3]:e[2],n=this.dataFormat==="channelsFirst"?e[4]:e[3];return t=vr(t,this.poolSize[0],this.padding,this.strides[0]),o=vr(o,this.poolSize[1],this.padding,this.strides[1]),n=vr(n,this.poolSize[2],this.padding,this.strides[2]),this.dataFormat==="channelsFirst"?[e[0],e[1],t,o,n]:[e[0],t,o,n,e[4]]}call(e,t){return z(()=>(this.invokeCallHook(e,t),this.poolingFunction(dt(e),this.poolSize,this.strides,this.padding,this.dataFormat)))}getConfig(){let e={poolSize:this.poolSize,padding:this.padding,strides:this.strides,dataFormat:this.dataFormat},t=super.getConfig();return Object.assign(e,t),e}},Sb=(()=>{class r extends Zf{constructor(t){super(t)}poolingFunction(t,o,n,s,i){return se(i),hr(s),ST(t,o,n,s,i,"max")}}return r.className="MaxPooling3D",r})();H.registerClass(Sb);var vb=(()=>{class r extends Zf{constructor(t){super(t)}poolingFunction(t,o,n,s,i){return se(i),hr(s),ST(t,o,n,s,i,"avg")}}return r.className="AveragePooling3D",r})();H.registerClass(vb);var Qf=class extends yt{constructor(e){super(e),this.inputSpec=[new Xt({ndim:3})]}computeOutputShape(e){return[e[0],e[2]]}call(e,t){throw new bt}},Nb=(()=>{class r extends Qf{constructor(t){super(t||{})}call(t,o){return z(()=>{let n=dt(t);return ne(n,1)})}}return r.className="GlobalAveragePooling1D",r})();H.registerClass(Nb);var Ib=(()=>{class r extends Qf{constructor(t){super(t||{})}call(t,o){return z(()=>{let n=dt(t);return Ke(n,1)})}}return r.className="GlobalMaxPooling1D",r})();H.registerClass(Ib);var Jf=class extends yt{constructor(e){super(e),this.dataFormat=e.dataFormat==null?"channelsLast":e.dataFormat,se(this.dataFormat),this.inputSpec=[new Xt({ndim:4})]}computeOutputShape(e){return e=e,this.dataFormat==="channelsLast"?[e[0],e[3]]:[e[0],e[1]]}call(e,t){throw new bt}getConfig(){let e={dataFormat:this.dataFormat},t=super.getConfig();return Object.assign(e,t),e}},Tb=(()=>{class r extends Jf{call(t,o){return z(()=>{let n=dt(t);return this.dataFormat==="channelsLast"?ne(n,[1,2]):ne(n,[2,3])})}}return r.className="GlobalAveragePooling2D",r})();H.registerClass(Tb);var kb=(()=>{class r extends Jf{call(t,o){return z(()=>{let n=dt(t);return this.dataFormat==="channelsLast"?Ke(n,[1,2]):Ke(n,[2,3])})}}return r.className="GlobalMaxPooling2D",r})();H.registerClass(kb);var eh=class extends yt{constructor(e){super(e),this.layer=e.layer}build(e){this.built=!0}get trainable(){return this.layer!=null?this.layer.trainable:!1}set trainable(e){this.layer!=null&&(this.layer.trainable=e)}get trainableWeights(){return this.layer.trainableWeights}get nonTrainableWeights(){return this.layer.nonTrainableWeights}get updates(){return this.layer._updates}get losses(){return this.layer.losses}getWeights(){return this.layer.getWeights()}setWeights(e){this.layer.setWeights(e)}getConfig(){let e={layer:{className:this.layer.getClassName(),config:this.layer.getConfig()}},t=super.getConfig();return Object.assign(e,t),e}setFastWeightInitDuringBuild(e){super.setFastWeightInitDuringBuild(e),this.layer!=null&&this.layer.setFastWeightInitDuringBuild(e)}static fromConfig(e,t,o={}){let n=t.layer,s=Sr(n,o);delete t.layer;let i={layer:s};return Object.assign(i,t),new e(i)}},Eb=(()=>{class r extends eh{constructor(t){super(t),this.supportsMasking=!0}build(t){if(t=kt(t),t.length<3)throw new O(`TimeDistributed layer expects an input shape >= 3D, but received input shape ${JSON.stringify(t)}`);this.inputSpec=[{shape:t}];let o=[t[0]].concat(t.slice(2));this.layer.built||(this.layer.build(o),this.layer.built=!0),super.build(t)}computeOutputShape(t){t=kt(t);let o=[t[0]].concat(t.slice(2)),n=this.layer.computeOutputShape(o),s=t[1];return[n[0],s].concat(n.slice(1))}call(t,o){return z(()=>(t=dt(t),Hy((a,l)=>[dt(this.layer.call(a,o)),[]],t,[],!1,null,null,!1,!0)[1]))}}return r.className="TimeDistributed",r})();H.registerClass(Eb);function KB(r){en(vI,"BidirectionalMergeMode",r)}var jB="concat",Ab=(()=>{class r extends eh{constructor(t){super(t);let o=t.layer.getConfig(),n={};n.className=t.layer.getClassName(),n.config=o,this.forwardLayer=Sr(n),o.goBackwards=o.goBackwards!==!0;let s={};if(s.className=t.layer.getClassName(),s.config=o,this.backwardLayer=Sr(s),this.forwardLayer.name="forward_"+this.forwardLayer.name,this.backwardLayer.name="backward_"+this.backwardLayer.name,this.mergeMode=t.mergeMode===void 0?jB:t.mergeMode,KB(this.mergeMode),t.weights)throw new bt("weights support is not implemented for Bidirectional layer yet.");this._stateful=t.layer.stateful,this.returnSequences=t.layer.returnSequences,this.returnState=t.layer.returnState,this.supportsMasking=!0,this._trainable=!0,this.inputSpec=t.layer.inputSpec,this.numConstants=null}get trainable(){return this._trainable}set trainable(t){this._trainable=t,this.forwardLayer!=null&&(this.forwardLayer.trainable=t),this.backwardLayer!=null&&(this.backwardLayer.trainable=t)}getWeights(){return this.forwardLayer.getWeights().concat(this.backwardLayer.getWeights())}setWeights(t){let o=t.length,n=Math.floor(o/2);this.forwardLayer.setWeights(t.slice(0,n)),this.backwardLayer.setWeights(t.slice(n))}computeOutputShape(t){let o=this.forwardLayer.computeOutputShape(t);Array.isArray(o)&&Array.isArray(o[0])||(o=[o]),o=o;let n,s,i;return this.returnState&&(i=o.slice(1)),n=o[0],n=n,this.mergeMode==="concat"?(n[n.length-1]*=2,s=[n]):this.mergeMode==null?s=[n,n.slice()]:s=[n],this.returnState?this.mergeMode==null?s.concat(i).concat(i.slice()):[n].concat(i).concat(i.slice()):Me(s)}apply(t,o){let n=o==null?null:o.initialState,s=o==null?null:o.constants;o==null&&(o={});let i=Uy(t,n,s,this.numConstants);if(t=i.inputs,n=i.initialState,s=i.constants,Array.isArray(t)&&(n=t.slice(1),t=t[0]),(n==null||n.length===0)&&s==null)return super.apply(t,o);let a=[],l=[];if(n!=null){let c=n.length;if(c%2>0)throw new O("When passing `initialState` to a Bidrectional RNN, the state should be an Array containing the states of the underlying RNNs.");o.initialState=n,a.push(...n);let p=n.map(m=>new Xt({shape:m.shape}));this.forwardLayer.stateSpec=p.slice(0,c/2),this.backwardLayer.stateSpec=p.slice(c/2),l.push(...p)}if(s!=null)throw new bt("Support for constants in Bidirectional layers is not implemented yet.");let u=a[0]instanceof ar;for(let c of a)if(c instanceof ar!==u)throw new O("The initial state of a Bidirectional layer cannot be specified as a mix of symbolic and non-symbolic tensors");if(u){let c=[t].concat(a),p=this.inputSpec.concat(l),m=this.inputSpec;this.inputSpec=p;let f=super.apply(c,o);return this.inputSpec=m,f}else return super.apply(t,o)}call(t,o){return z(()=>{let n=o.initialState,s,i;if(n==null)s=this.forwardLayer.call(t,o),i=this.backwardLayer.call(t,o);else{let u=n.slice(0,n.length/2),c=n.slice(n.length/2);s=this.forwardLayer.call(t,Object.assign(o,{initialState:u})),i=this.backwardLayer.call(t,Object.assign(o,{initialState:c}))}let a;this.returnState&&(Array.isArray(s)&&(a=s.slice(1).concat(i.slice(1))),s=s[0],i=i[0]),this.returnSequences&&(i=Xr(i,1));let l;return this.mergeMode==="concat"?l=Fu([s,i]):this.mergeMode==="sum"?l=j(s,i):this.mergeMode==="ave"?l=R(.5,j(s,i)):this.mergeMode==="mul"?l=R(s,i):this.mergeMode==null&&(l=[s,i]),this.returnState?this.mergeMode==null?l.concat(a):[l].concat(a):l})}resetStates(t){this.forwardLayer.resetStates(),this.backwardLayer.resetStates()}build(t){Fo(this.forwardLayer.name,()=>{this.forwardLayer.build(t)}),Fo(this.backwardLayer.name,()=>{this.backwardLayer.build(t)}),this.built=!0}computeMask(t,o){Array.isArray(o)&&(o=o[0]);let n;if(this.returnSequences?this.mergeMode==null?n=[o,o]:n=o:this.mergeMode==null?n=[null,null]:n=null,this.returnState){let i=this.forwardLayer.states.map(a=>null);return Array.isArray(n)?n.concat(i).concat(i):[n].concat(i).concat(i)}else return n}get trainableWeights(){return this.forwardLayer.trainableWeights.concat(this.backwardLayer.trainableWeights)}get nonTrainableWeights(){return this.forwardLayer.nonTrainableWeights.concat(this.backwardLayer.nonTrainableWeights)}setFastWeightInitDuringBuild(t){super.setFastWeightInitDuringBuild(t),this.forwardLayer!=null&&this.forwardLayer.setFastWeightInitDuringBuild(t),this.backwardLayer!=null&&this.backwardLayer.setFastWeightInitDuringBuild(t)}getConfig(){let t={mergeMode:this.mergeMode},o=super.getConfig();return Object.assign(t,o),t}static fromConfig(t,o){let n=Sr(o.layer);if(delete o.layer,o.numConstants!=null)throw new bt("Deserialization of a Bidirectional layer with numConstants present is not supported yet.");let s=o;return s.layer=n,new t(s)}}return r.className="Bidirectional",r})();H.registerClass(Ab);var $b=(()=>{class r extends yt{constructor(t){super(t),this.scale=t.scale,t.offset?this.offset=t.offset:this.offset=0}getConfig(){let t={scale:this.scale,offset:this.offset},o=super.getConfig();return Object.assign(t,o),t}call(t,o){return z(()=>(t=dt(t),t.dtype!=="float32"&&(t=ir(t,"float32")),j(R(t,this.scale),this.offset)))}}return r.className="Rescaling",r})();H.registerClass($b);var{resizeBilinear:XB,cropAndResize:YB}=Pr,Db=(()=>{class r extends yt{constructor(t){super(t),this.height=t.height,this.width=t.width}centerCrop(t,o,n,s,i,a,l,u){return z(()=>{let c,p=!1,m=o/a,f=n/l,h=(s+o)/a,g=(i+n)/l,d=[m,f,h,g],x=[];t.rank===3?(p=!0,c=$e([t])):c=t;for(let E=0;E<c.shape[0];E++)x.push(d);let y=Hr(x,[x.length,4]),w=ds(0,x.length,1,"int32"),S=YB(c,y,w,[s,i],"nearest");return p?ir(dt(sr(S)),u):ir(S,u)})}upsize(t,o,n,s){return z(()=>{let i=XB(t,[o,n]);return ir(i,s)})}call(t,o){return z(()=>{let n=dt(t),s=n.dtype,i=n.shape,a=i[i.length-3],l=i[i.length-2],u=0;a!==this.height&&(u=Math.floor((a-this.height)/2));let c=0;return l!==this.width&&(c=Math.floor((l-this.width)/2),c===0&&(c=1)),u>=0&&c>=0?this.centerCrop(n,u,c,this.height,this.width,a,l,s):this.upsize(t,this.height,this.width,s)})}getConfig(){let t={height:this.height,width:this.width},o=super.getConfig();return Object.assign(t,o),t}computeOutputShape(t){t=kt(t);let o=t.length-3,n=t.length-2;return t[o]=this.height,t[n]=this.width,t}}return r.className="CenterCrop",r})();H.registerClass(Db);function vT(r,e,t,o){let n=dt(r);if(n.dtype!=="int32"&&(n=ir(n,"int32")),e==="int")return n;let s=n.shape;if(n.rank===0&&(n=ve(n,-1)),e==="oneHot"&&n.shape[n.shape.length-1]!==1&&(n=ve(n,-1)),n.rank>2)throw new O(`When outputMode is not int, maximum output rank is 2 Received outputMode ${e} and input shape ${s} which would result in output rank ${n.rank}.`);let i=["multiHot","oneHot"].includes(e),a=n,l;if(typeof o<"u"&&e==="count"?l=Rm(a,o,t,i):l=Rm(a,[],t,i),e!=="tfIdf")return l;if(o)return R(l,o);throw new O("When outputMode is 'tfIdf', weights must be provided.")}var Rb=(()=>{class r extends yt{constructor(t){super(t),this.numTokens=t.numTokens,t.outputMode?this.outputMode=t.outputMode:this.outputMode="multiHot"}getConfig(){let t={numTokens:this.numTokens,outputMode:this.outputMode},o=super.getConfig();return Object.assign(t,o),t}computeOutputShape(t){return t=kt(t),t==null?[this.numTokens]:this.outputMode==="oneHot"&&t[t.length-1]!==1?(t.push(this.numTokens),t):(t[t.length-1]=this.numTokens,t)}call(t,o){return z(()=>{t=dt(t),t.dtype!=="int32"&&(t=ir(t,"int32"));let n;if(typeof o.countWeights<"u"){if(this.outputMode!=="count")throw new O(`countWeights is not used when outputMode !== count.
              Received countWeights=${o.countWeights}`);n=dt(o.countWeights)}let s=Ke(t),i=Pi(t),a=ge(this.numTokens,s).bufferSync().get(0),l=Cr(i,0).bufferSync().get(0);if(!(a&&l))throw new O(`Input values must be between 0 < values <= numTokens with numTokens=${this.numTokens}`);return vT(t,this.outputMode,this.numTokens,n)})}}return r.className="CategoryEncoding",r})();H.registerClass(Rb);var QB=["bilinear","nearest"],NT=new Set(QB),Fb=(()=>{class r extends yt{constructor(t){if(super(t),this.height=t.height,this.width=t.width,t.interpolation)if(NT.has(t.interpolation))this.interpolation=t.interpolation;else throw new O(`Invalid interpolation parameter: ${t.interpolation} is not implemented`);else this.interpolation="bilinear";this.cropToAspectRatio=!!t.cropToAspectRatio}computeOutputShape(t){t=kt(t);let o=t[2];return[this.height,this.width,o]}getConfig(){let t={height:this.height,width:this.width,interpolation:this.interpolation,cropToAspectRatio:this.cropToAspectRatio},o=super.getConfig();return Object.assign(t,o),t}call(t,o){return z(()=>{let n=[this.height,this.width];if(this.interpolation==="bilinear")return Pr.resizeBilinear(t,n,!this.cropToAspectRatio);if(this.interpolation==="nearest")return Pr.resizeNearestNeighbor(t,n,!this.cropToAspectRatio);throw new Error(`Interpolation is ${this.interpolation} but only ${[...NT]} are supported`)})}}return r.className="Resizing",r})();H.registerClass(Fb);var IT=(()=>{class r{constructor(t){this.seed=t}next(){if(this.seed!==void 0)return this.seed++}}return r.className="RandomSeed",r})();var TT=(()=>{class r extends yt{constructor(t){super(t),this.randomGenerator=new IT(t.seed)}getConfig(){let t={seed:this.randomGenerator.seed},o=super.getConfig();return Object.assign(t,o),t}}return r.className="BaseRandomLayer",r})();var JB=["bilinear","nearest"],kT=new Set(JB),_b=(()=>{class r extends TT{constructor(t){super(t);let{factor:o,interpolation:n="bilinear"}=t;if(this.factor=o,Array.isArray(this.factor)&&this.factor.length===2)this.widthLower=this.factor[0],this.widthUpper=this.factor[1];else if(!Array.isArray(this.factor)&&this.factor>0)this.widthLower=-this.factor,this.widthUpper=this.factor;else throw new O(`Invalid factor: ${this.factor}. Must be positive number or tuple of 2 numbers`);if(this.widthLower<-1||this.widthUpper<-1)throw new O(`factor must have values larger than -1. Got: ${this.factor}`);if(this.widthUpper<this.widthLower)throw new O(`factor cannot have upper bound less than lower bound.
        Got upper bound: ${this.widthUpper}.
        Got lower bound: ${this.widthLower}
      `);if(n)if(kT.has(n))this.interpolation=n;else throw new O(`Invalid interpolation parameter: ${n} is not implemented`)}getConfig(){let t={factor:this.factor,interpolation:this.interpolation},o=super.getConfig();return Object.assign(t,o),t}computeOutputShape(t){t=kt(t);let o=t[2];return[this.imgHeight,-1,o]}call(t,o){return z(()=>{let n=dt(t);this.imgHeight=n.shape[n.shape.length-3];let s=n.shape[n.shape.length-2];this.widthFactor=Ao([1],1+this.widthLower,1+this.widthUpper,"float32",this.randomGenerator.next());let i=this.widthFactor.dataSync()[0]*s;i=Math.round(i);let a=[this.imgHeight,i];switch(this.interpolation){case"bilinear":return Pr.resizeBilinear(t,a);case"nearest":return Pr.resizeNearestNeighbor(t,a);default:throw new Error(`Interpolation is ${this.interpolation}
          but only ${[...kT]} are supported`)}})}}return r.className="RandomWidth",r})();H.registerClass(_b);function tV(r){return new Wi(r)}function eV(r){return new Fy(r)}function rV(r){return new $y(r)}function oV(r){return new Dy(r)}function nV(r){return new Ry(r)}function sV(r){return new Oy(r)}function iV(r){return new _y(r)}function aV(r){return new By(r)}function lV(r){return new Gf(r)}function uV(r){return new Py(r)}function cV(r){return new Wf(r)}function pV(r){return new zy(r)}function mV(r){return new My(r)}function fV(r){return new Vy(r)}function hV(r){return new Gy(r)}function dV(r){return new Wy(r)}function gV(r){return new Jy(r)}function xV(r){return new Zy(r)}function yV(r){return new jf(r)}function bV(r){return new Yy(r)}function wV(r){return new Qy(r)}function CV(r){return new tb(r)}function SV(r){return new eb(r)}function vV(r){return new rb(r)}function NV(r){return new nb(r)}function IV(r){return new sb(r)}function TV(r){return new ab(r)}function kV(r){return new cb(r)}function EV(r){return new lb(r)}function AV(r){return new ub(r)}function $V(r){return new ib(r)}function DV(r){return new pb(r)}function RV(r){return new db(r)}function FV(r){return new gb(r)}function _V(r){return new xb(r)}function Ob(r){return new bb(r)}function OV(r){return Ob(r)}function LV(r){return Ob(r)}function Lb(r){return new Cb(r)}function PV(r){return Lb(r)}function zV(r){return Lb(r)}function Pb(r){return new vb(r)}function MV(r){return Pb(r)}function BV(r){return Pb(r)}function VV(r){return new Nb(r)}function GV(r){return new Tb(r)}function ET(r){return new Ib(r)}function AT(r){return new kb(r)}function $T(r){return new yb(r)}function DT(r){return new wb(r)}function WV(r){return new Sb(r)}function UV(r){return new Ky(r)}function HV(r){return new Hf(r)}function qV(r){return new jy(r)}function KV(r){return new Uu(r)}function jV(r){return new qy(r)}function XV(r){return new Uf(r)}function YV(r){return new Xy(r)}function ZV(r){return new Kf(r)}function QV(r){return new on(r)}function JV(r){return new qf(r)}function tG(r){return new Ab(r)}function eG(r){return new Eb(r)}var rG=ET,oG=AT,nG=$T,sG=DT;function iG(r){return new mb(r)}function aG(r){return new fb(r)}function lG(r){return new hb(r)}function uG(r){return new ob(r)}function cG(r){return new $b(r)}function pG(r){return new Db(r)}function mG(r){return new Fb(r)}function fG(r){return new Rb(r)}function hG(r){return new _b(r)}var yG=P();yG.registerFlag("KEEP_INTERMEDIATE_TENSORS",()=>!1,r=>{r&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")});var RT;(function(r){let e;(function(t){t[t.LEGACY=0]="LEGACY",t[t.V1=1]="V1",t[t.V2=2]="V2"})(e=r.CheckpointFormatVersion||(r.CheckpointFormatVersion={}))})(RT||(RT={}));var gW=xc(Uc());var hW=xc(Uc());var yqt=Symbol("out"),bqt=Symbol("field"),wqt=Symbol("quote"),Cqt=Symbol("quoteafterquote"),Sqt=Symbol("quoteinquote");function X(r,e){Array.isArray(r)||(r=[r]),r.forEach(t=>{t!=null&&b.assert(t.dtype!=="complex64",()=>`${e} does not support complex64 tensors in the CPU backend.`)})}var kW=tr.whereImpl,_T=(()=>{class r extends mn{nextDataId(){return r.nextDataId++}constructor(){super(),this.blockSize=48,this.firstUse=!0,this.data=new Ji(this,no())}write(t,o,n){this.firstUse&&(this.firstUse=!1,P().get("IS_NODE")&&v.warn(`
============================
Hi, looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, visit https://github.com/tensorflow/tfjs-node for more details. 
============================`));let s={id:this.nextDataId()};return this.data.set(s,{values:t,dtype:n,refCount:1}),s}makeTensorInfo(t,o,n){let s;if(o==="string"&&n!=null&&n.length>0&&b.isString(n[0])){let i=n.map(a=>b.encodeString(a));s=this.write(i,t,o)}else s=this.write(n,t,o);return{dataId:s,shape:t,dtype:o}}refCount(t){return this.data.has(t)?this.data.get(t).refCount:0}incRef(t){let o=this.data.get(t);o.refCount++}decRef(t){if(this.data.has(t)){let o=this.data.get(t);o.refCount--}}move(t,o,n,s,i){this.data.set(t,{values:o,dtype:s,refCount:i})}numDataIds(){return this.data.numDataIds()}read(t){return B(this,null,function*(){return this.readSync(t)})}readSync(t){let{dtype:o,complexTensorInfos:n}=this.data.get(t);if(o==="complex64"){let s=this.readSync(n.real.dataId),i=this.readSync(n.imag.dataId);return v.mergeRealAndImagArrays(s,i)}return b.convertBackendValuesAndArrayBuffer(this.data.get(t).values,o)}bufferSync(t){let o=this.readSync(t.dataId);if(t.dtype==="string")try{let n=o.map(s=>b.decodeString(s));return ft(t.shape,t.dtype,n)}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return ft(t.shape,t.dtype,o)}makeOutput(t,o,n){return no().makeTensorFromTensorInfo(this.makeTensorInfo(o,n,t),this)}disposeData(t,o=!1){if(this.data.has(t)){if(this.data.get(t).refCount--,!o&&this.data.get(t).refCount>0)return!1;let{complexTensorInfos:n}=this.data.get(t);n!=null&&(this.disposeData(n.real.dataId,!0),this.disposeData(n.imag.dataId,!0)),this.data.delete(t)}return!0}disposeIntermediateTensorInfo(t){this.disposeData(t.dataId)}time(t){return B(this,null,function*(){let o=b.now();return t(),{kernelMs:b.now()-o}})}memory(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}}where(t){X([t],"where");let o=this.readSync(t.dataId);return kW(t.shape,o)}dispose(){}floatPrecision(){return 32}epsilon(){return super.epsilon()}}return r.nextDataId=0,r})();var dw={};to(dw,{addImpl:()=>Vb,bincountImpl:()=>Ku,bincountReduceImpl:()=>oh,bitwiseAndImpl:()=>Gb,castImpl:()=>Bb,ceilImpl:()=>Wb,concatImpl:()=>nh,equalImpl:()=>Ub,expImpl:()=>qb,expm1Impl:()=>jb,floorDivImpl:()=>Yb,floorImpl:()=>Xb,gatherNdImpl:()=>sh,gatherV2Impl:()=>ih,greaterEqualImpl:()=>Qb,greaterImpl:()=>Zb,lessEqualImpl:()=>tw,lessImpl:()=>Jb,linSpaceImpl:()=>ah,logImpl:()=>ew,maxImpl:()=>lh,maximumImpl:()=>rw,minimumImpl:()=>ow,multiplyImpl:()=>bp,negImpl:()=>nw,notEqualImpl:()=>sw,prodImpl:()=>iw,raggedGatherImpl:()=>uh,raggedRangeImpl:()=>ch,raggedTensorToTensorImpl:()=>ph,rangeImpl:()=>mh,rsqrtImpl:()=>lw,scatterImpl:()=>zo,sigmoidImpl:()=>p1,simpleAbsImpl:()=>Mb,sliceImpl:()=>cw,sparseFillEmptyRowsImpl:()=>fh,sparseReshapeImpl:()=>hh,sparseSegmentReductionImpl:()=>Xu,sqrtImpl:()=>h1,squaredDifferenceImpl:()=>pw,staticRegexReplaceImpl:()=>mw,stridedSliceImpl:()=>dh,stringNGramsImpl:()=>gh,stringSplitImpl:()=>xh,stringToHashBucketFastImpl:()=>yh,subImpl:()=>hw,tileImpl:()=>bh,topKImpl:()=>wh,transposeImpl:()=>ju,uniqueImpl:()=>Ch});function Mb(r){let e=new Float32Array(r.length);for(let t=0;t<r.length;++t)e[t]=Math.abs(r[t]);return e}var EW=r=>{let{x:e}=r.inputs,t=r.backend;X(e,"abs");let o=new Float32Array(b.sizeFromShape(e.shape)),n=t.data.get(e.dataId).values;return o=Mb(n),t.makeOutput(o,e.shape,e.dtype)},OT={kernelName:zs,backendName:"cpu",kernelFunc:EW};function Dt(r){return(e,t,o,n,s)=>{let i=v.assertAndGetBroadcastShape(e,t),a=i.length,l=b.computeStrides(i),u=b.sizeFromShape(i),c=b.getTypedArrayFromDType(s,u),p=e.length,m=t.length,f=b.computeStrides(e),h=b.computeStrides(t),g=v.getBroadcastDims(e,i),d=v.getBroadcastDims(t,i);if(g.length+d.length===0)for(let x=0;x<c.length;++x)c[x]=r(o[x%o.length],n[x%n.length]);else for(let x=0;x<c.length;++x){let y=b.indexToLoc(x,a,l),w=y.slice(-p);g.forEach(A=>w[A]=0);let C=b.locToIndex(w,p,f),S=y.slice(-m);d.forEach(A=>S[A]=0);let E=b.locToIndex(S,m,h);c[x]=r(o[C],n[E])}return[c,i]}}function Fe(r){let{inputs:e,backend:t}=r,{real:o,imag:n}=e,s=t.data.get(o.dataId).values,i=t.data.get(n.dataId).values,a=t.makeTensorInfo(o.shape,"complex64"),l=t.data.get(a.dataId);return l.complexTensorInfos={real:t.makeTensorInfo(o.shape,"float32",s),imag:t.makeTensorInfo(n.shape,"float32",i)},a}var LT={kernelName:Cl,backendName:"cpu",kernelFunc:Fe};function Hu(r,e,t="float32"){if(t==="complex64"){let n=Hu(r,e,"float32"),s=Hu(r,e,"float32");return Fe({inputs:{real:n,imag:s},backend:r})}let o=b.makeZerosTypedArray(b.sizeFromShape(e),t);return r.makeTensorInfo(e,t,o)}function er(r){let{inputs:e,backend:t}=r,{x:o}=e;return t.incRef(o.dataId),{dataId:o.dataId,shape:o.shape,dtype:o.dtype}}var PT={kernelName:Uo,backendName:"cpu",kernelFunc:er};function yo(r){let{inputs:e,backend:t}=r,{input:o}=e,n=t.data.get(o.dataId).complexTensorInfos.real,s=t.data.get(n.dataId).values;return t.makeTensorInfo(n.shape,n.dtype,s)}var zT={kernelName:Hl,backendName:"cpu",kernelFunc:yo};function Bb(r,e,t,o){if(o==="int32"){let n=Int32Array.from(r);return[e,"int32",n]}if(o==="bool"){let n=b.toTypedArray([0],t),[s,i]=Dt((a,l)=>a!==l?1:0)(e,[],r,n,"bool");return[i,"bool",s]}throw new Error(`Error in Cast: failed to cast ${t} to ${o}`)}function bo(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{dtype:s}=o;if(s==="complex64"){if(n.dtype==="complex64")return er({inputs:{x:n},backend:t});let c=Hu(t,n.shape,n.dtype),p=bo({inputs:{x:n},backend:t,attrs:{dtype:"float32"}}),m=Fe({inputs:{real:p,imag:c},backend:t});return t.disposeIntermediateTensorInfo(c),t.disposeIntermediateTensorInfo(p),m}if(n.dtype==="complex64"){let c=yo({inputs:{input:n},backend:t}),p=bo({inputs:{x:c},backend:t,attrs:{dtype:s}});return t.disposeIntermediateTensorInfo(c),p}if(!b.hasEncodingLoss(n.dtype,s)){let c=er({inputs:{x:n},backend:t});return{dataId:c.dataId,shape:c.shape,dtype:s}}let i=t.data.get(n.dataId).values,[a,l,u]=Bb(i,n.shape,n.dtype,s);return t.makeTensorInfo(a,l,u)}var MT={kernelName:Wo,backendName:"cpu",kernelFunc:bo};function Pt(r,e,t,o){return t==null?({inputs:n,backend:s})=>{let{a:i,b:a}=n,l=s;X([i,a],r);let u=l.data.get(i.dataId).values,c=l.data.get(a.dataId).values,p=i.dtype==="string"?v.fromUint8ToStringArray(u):u,m=i.dtype==="string"?v.fromUint8ToStringArray(c):c,f=o||i.dtype,[h,g]=e(i.shape,a.shape,p,m,f);return l.makeTensorInfo(g,f,h)}:({inputs:n,backend:s})=>{let{a:i,b:a}=n,l=s;if(i.dtype==="complex64"||a.dtype==="complex64"){let u=bo({inputs:{x:i},backend:l,attrs:{dtype:"complex64"}}),c=l.data.get(u.dataId),p=c.complexTensorInfos.real,m=c.complexTensorInfos.imag,f=l.data.get(p.dataId).values,h=l.data.get(m.dataId).values,g=bo({inputs:{x:a},backend:l,attrs:{dtype:"complex64"}}),d=l.data.get(g.dataId),x=d.complexTensorInfos.real,y=d.complexTensorInfos.imag,w=l.data.get(x.dataId).values,C=l.data.get(y.dataId).values,[S,E,A]=t(i.shape,a.shape,f,h,w,C),$=l.makeTensorInfo(A,"float32",S),_=l.makeTensorInfo(A,"float32",E),L=Fe({inputs:{real:$,imag:_},backend:l});return l.disposeIntermediateTensorInfo(u),l.disposeIntermediateTensorInfo(g),l.disposeIntermediateTensorInfo($),l.disposeIntermediateTensorInfo(_),L}else{let u=l.data.get(i.dataId).values,c=l.data.get(a.dataId).values,p=o||i.dtype,[m,f]=e(i.shape,a.shape,u,c,p);return l.makeTensorInfo(f,p,m)}}}function qu(r){return(e,t,o,n,s,i)=>{let a=v.assertAndGetBroadcastShape(e,t),l=b.sizeFromShape(a),u=a.length,c=b.computeStrides(a),p=b.getTypedArrayFromDType("float32",l),m=b.getTypedArrayFromDType("float32",l),f=v.getBroadcastDims(e,a),h=v.getBroadcastDims(t,a),g=v.mergeRealAndImagArrays(o,n),d=v.mergeRealAndImagArrays(s,i),x=e.length,y=b.computeStrides(e),w=t.length,C=b.computeStrides(t);if(f.length+h.length===0)for(let S=0;S<p.length;S++){let E=S%g.length,A=S%d.length,$=r(g[E*2],g[E*2+1],d[A*2],d[A*2+1]);p[S]=$.real,m[S]=$.imag}else for(let S=0;S<p.length;S++){let E=b.indexToLoc(S,u,c),A=E.slice(-x);f.forEach(V=>A[V]=0);let $=b.locToIndex(A,x,y),_=E.slice(-w);h.forEach(V=>_[V]=0);let L=b.locToIndex(_,w,C),M=r(g[$*2],g[$*2+1],d[L*2],d[L*2+1]);p[S]=M.real,m[S]=M.imag}return[p,m,a]}}var Vb=Dt((r,e)=>r+e),AW=qu((r,e,t,o)=>({real:r+t,imag:e+o})),nn=Pt(Io,Vb,AW),BT={kernelName:Io,backendName:"cpu",kernelFunc:nn};function Ku(r,e,t,o,n){let s=b.sizeFromShape(o),i=b.makeZerosTypedArray(n,t);for(let a=0;a<r.length;a++){let l=r[a];if(l<0)throw new Error("Input x must be non-negative!");l>=n||(s>0?i[l]+=e[a]:i[l]+=1)}return i}function oh(r,e,t,o=!1){let n=r.shape[0],s=r.shape[1],i=ft([n,t],e.dtype);for(let a=0;a<n;a++)for(let l=0;l<s;l++){let u=r.get(a,l);if(u<0)throw new Error("Input x must be non-negative!");u>=t||(o?i.set(1,a,u):e.size>0?i.set(i.get(a,u)+e.get(a,l),a,u):i.set(i.get(a,u)+1,a,u))}return i}var Gb=Dt((r,e)=>r&e),$W=Pt(Sc,Gb),VT={kernelName:Sc,backendName:"cpu",kernelFunc:$W};function Ge(r){return(e,t,o)=>{let n=b.getArrayFromDType(t,e.length);for(let s=0;s<e.length;++s)n[s]=r(e[s],o);return n}}function wt(r,e,t){let o=Ge(e);return Ir(r,o,t)}function Ir(r,e,t){return({inputs:o,attrs:n,backend:s})=>{let{x:i}=o;X(i,r);let a=s,l=a.data.get(i.dataId).values,u;if(i.dtype==="string"){if(!Array.isArray(l))throw new Error("String tensor's value was not an instance of Array");u=v.fromUint8ToStringArray(l)}else u=l;let c=t||i.dtype,p=e(u,c,n);return a.makeTensorInfo(i.shape,c,p)}}var Wb=Ge(r=>Math.ceil(r)),DW=Ir(Cn,Wb),GT={kernelName:Cn,backendName:"cpu",kernelFunc:DW};function nh(r,e,t,o){let n=b.getArrayFromDType(t,b.sizeFromShape(e));if(o&&t!=="string"){let s=0;r.forEach(i=>{let a=b.sizeFromShape(i.shape);n.set(i.vals,s),s+=a})}else{let s=0;r.forEach(i=>{let a=t==="string"?v.fromUint8ToStringArray(i.vals):i.vals,l=0;for(let u=0;u<i.shape[0];++u){let c=u*e[1]+s;for(let p=0;p<i.shape[1];++p)n[c+p]=a[l++]}s+=i.shape[1]})}return n}var Ub=Dt((r,e)=>r===e?1:0),Hb=Pt(oa,Ub,null,"bool"),WT={kernelName:oa,backendName:"cpu",kernelFunc:Hb};var qb=Ge(r=>Math.exp(r)),Kb=Ir(En,qb,"float32"),UT={kernelName:En,backendName:"cpu",kernelFunc:Kb};var jb=Ge(r=>Math.expm1(r)),RW=Ir(An,jb),HT={kernelName:An,backendName:"cpu",kernelFunc:RW};var Xb=Ge(r=>Math.floor(r)),FW=Ir($n,Xb),qT={kernelName:$n,backendName:"cpu",kernelFunc:FW};var Yb=Dt((r,e)=>Math.floor(r/e)),_W=Pt(Dn,Yb,null,"int32"),KT={kernelName:Dn,backendName:"cpu",kernelFunc:_W};function sh(r,e,t,o,n,s,i,a,l){let u=ft([o,s],t);for(let c=0;c<o;c++){let p=[],m=0;for(let f=0;f<n;f++){let h=r[c*n+f];m+=h*i[f],p.push(h)}if(m<0||m>=l/s)throw new Error(`Invalid indices: ${p} does not index into ${a}`);for(let f=0;f<s;f++)u.values[c*s+f]=e.get(...e.indexToLoc(m*s+f))}return u}function ih(r,e,t){let o=ft(t,r.dtype);for(let n=0;n<o.size;++n){let i=o.indexToLoc(n).slice(),a=i[0],l=i[2],u=e.locToIndex([a,l]);i[2]=e.values[u];let c=r.locToIndex(i);0<=c&&c<r.values.length&&(o.values[n]=r.values[c])}return o}var Zb=Dt((r,e)=>r>e?1:0),OW=Pt(na,Zb,null,"bool"),jT={kernelName:na,backendName:"cpu",kernelFunc:OW};var Qb=Dt((r,e)=>r>=e?1:0),LW=Pt(Rn,Qb,null,"bool"),XT={kernelName:Rn,backendName:"cpu",kernelFunc:LW};var Jb=Dt((r,e)=>r<e?1:0),PW=Pt(sa,Jb,null,"bool"),YT={kernelName:sa,backendName:"cpu",kernelFunc:PW};var tw=Dt((r,e)=>r<=e?1:0),zW=Pt(ia,tw,null,"bool"),ZT={kernelName:ia,backendName:"cpu",kernelFunc:zW};function ah(r,e,t){let o=(e-r)/(t-1),n=b.makeZerosTypedArray(t,"float32");n[0]=r;for(let s=1;s<n.length;s++)n[s]=n[s-1]+o;return n}var ew=Ge(r=>Math.log(r)),MW=Ir(Ln,ew),QT={kernelName:Ln,backendName:"cpu",kernelFunc:MW};function lh(r,e,t,o){let n=b.getTypedArrayFromDType(o,b.sizeFromShape(t));for(let s=0;s<n.length;++s){let i=s*e,a=r[i];for(let l=0;l<e;++l){let u=r[i+l];(Number.isNaN(u)||u>a)&&(a=u)}n[s]=a}return n}var rw=Dt((r,e)=>Math.max(r,e)),BW=Pt(zn,rw),JT={kernelName:zn,backendName:"cpu",kernelFunc:BW};var ow=Dt((r,e)=>Math.min(r,e)),VW=Pt(Mn,ow),t1={kernelName:Mn,backendName:"cpu",kernelFunc:VW};var bp=Dt((r,e)=>r*e),GW=qu((r,e,t,o)=>({real:r*t-e*o,imag:r*o+e*t})),Xa=Pt(Vn,bp,GW),e1={kernelName:Vn,backendName:"cpu",kernelFunc:Xa};function nw(r,e,t){let o=b.createScalarValue(-1,t);return bp([],e,o,r,t)}function WW(r){let{inputs:e,backend:t}=r,{x:o}=e;X(o,"neg");let n=t.data.get(o.dataId).values,[s,i]=nw(n,o.shape,o.dtype);return t.makeTensorInfo(i,o.dtype,s)}var r1={kernelName:ci,backendName:"cpu",kernelFunc:WW};var sw=Dt((r,e)=>r!==e?1:0),UW=Pt(ca,sw,null,"bool"),o1={kernelName:ca,backendName:"cpu",kernelFunc:UW};function ju(r,e,t,o,n){let s=e.length,i=b.sizeFromShape(e),a=b.computeStrides(e),l=b.computeStrides(n),u=b.getTypedArrayFromDType(t,b.sizeFromShape(n));for(let c=0;c<i;++c){let p=b.indexToLoc(c,s,a),m=new Array(p.length);for(let h=0;h<m.length;h++)m[h]=p[o[h]];let f=b.locToIndex(m,s,l);u[f]=r[c]}return u}function me(r){let{inputs:e,attrs:t,backend:o}=r,{x:n}=e,{perm:s}=t;X(n,"transpose");let i=n.shape.length,a=new Array(i);for(let p=0;p<a.length;p++)a[p]=n.shape[s[p]];let l=o.data.get(n.dataId).values,u=ju(l,n.shape,n.dtype,s,a);return{dataId:o.write(u,a,n.dtype),shape:a,dtype:n.dtype}}var n1={kernelName:qo,backendName:"cpu",kernelFunc:me};function iw(r,e,t,o){let[n,s]=v.computeOutAndReduceShapes(r,o),i=Te(e,"int32"),a=b.makeZerosTypedArray(b.sizeFromShape(n),i),l=b.sizeFromShape(s);for(let u=0;u<a.length;++u){let c=u*l,p=1;for(let m=0;m<l;++m)p*=t[c+m];a[u]=p}return{outVals:a,outShape:n,outDtype:i}}function HW(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{axis:s,keepDims:i}=o;X(n,"prod");let a=n.shape.length,l=b.parseAxisParam(s,n.shape),u=v.getAxesPermutation(l,a),c=l,p=n,m=[];u!=null&&(p=me({inputs:{x:n},backend:t,attrs:{perm:u}}),m.push(p),c=v.getInnerMostAxes(c.length,a));let f=t.data.get(p.dataId).values,{outVals:h,outShape:g,outDtype:d}=iw(p.shape,p.dtype,f,c),x=g;return i&&(x=v.expandShapeToKeepDim(g,l)),m.forEach(y=>t.disposeIntermediateTensorInfo(y)),t.makeTensorInfo(x,d,h)}var s1={kernelName:gi,backendName:"cpu",kernelFunc:HW};function qW(r,e,t){r.forEach((o,n)=>{if(o<0||o>=t){let s=b.indexToLoc(n,e.length,b.computeStrides(e)).join(",");throw new Error(`indices[${s}] = ${o} is not in [0, ${t})`)}})}function KW(r,e){for(let t=0;t<r.length;++t){let o=r[t],n=t===r.length-1?e:r[t+1].length;if(o.length===0)throw new Error("Ragged splits may not be empty");if(o[0]<0)throw new Error("Ragged splits must be non-negative");if(o[o.length-1]>n)throw new Error("Ragged splits must not point past values");for(let s=1;s<o.length;++s)if(o[s-1]>o[s])throw new Error("Ragged splits must be sorted in ascending order")}}function jW(r,e,t,o){let n=[],s=0,i=e.length-1+t.length,a=new Array(i).fill(null).map(()=>[0]);KW(t,o);let l=1;for(let u=0;u<e.length-1;++u){l*=e[u];let c=e[u+1];for(let p=1;p<l+1;++p)a[u].push(p*c)}for(let u=0;u<r.length;++u){let c=r[u],p=r[u]+1;for(let m=0;m<t.length;++m){let f=t[m],h=m+e.length-1;if(h>=0){let g=a[h],d=g[g.length-1]-f[c];for(let x=c;x<p;++x)a[h].push(f[x+1]+d)}c=f[c],p=f[p]}p!==c&&(n.push([c,p]),s+=p-c)}return{outSplits:a,valueSlices:n,numValues:s}}function XW(r){let e=[];for(let t=0;t<r.length;++t){let o=r[t].length,n=b.getArrayFromDType("int32",o);e.push(n),r[t].forEach((s,i)=>n[i]=s)}return e}function i1(r,e){let t=r.slice(0,e);for(;t.length<e;)t.push(1);for(let o=e;o<r.length;o++)t[e-1]*=r[o];return t}function YW(r,e,t,o,n,s){let i=i1(e,2)[1],a=i1(s,2)[1],l=0;for(let u of t)for(let c=u[0];c<u[1];++c){for(let p=0;p<o;++p)n[l*a+p]=r[c*i+p];++l}}function ZW(r,e,t,o,n){let s=e.slice();s[0]=n;let i=b.getArrayFromDType(t,b.sizeFromShape(s)),a=r.length,l=a===0?0:a/e[0];return YW(r,e,o,l,i,s),[i,s]}function uh(r,e,t,o,n,s,i,a){if(r.length===0)throw new Error("paramsNestedSplits must be non empty");if(e[0].length===0)throw new Error("Split tensors must not be scalars");let l=e[0][0]-1;if(qW(s,i,l),o.length===0)throw new Error("params.rank must be nonzero");let u=o[0],{outSplits:c,valueSlices:p,numValues:m}=jW(s,i,r,u),f=XW(c),h=ZW(t,o,n,p,m);return[f,h[0],h[1]]}var a1=2147483647;function ch(r,e,t,o,n,s,i){if(e.length>1)throw new Error("starts must be a scalar or vector");if(n.length>1)throw new Error("limits must be a scalar or vector");if(i.length>1)throw new Error("deltas must be a scalar or vector");let a=e.length===0,l=n.length===0,u=i.length===0,c=[];a||c.push(e[0]),l||c.push(n[0]),u||c.push(i[0]);for(let d=1;d<c.length;++d)if(c[d]!==c[d-1])throw new Error("starts, limits, and deltas must have the same shape");let p=c.length===0?1:c[0],m=b.getArrayFromDType("int32",p+1);m[0]=0;for(let d=0;d<p;++d){let x=a?r[0]:r[d],y=l?o[0]:o[d],w=u?s[0]:s[d];if(w===0)throw new Error("Requires delta != 0");let C;if(w>0&&y<x||w<0&&y>x)C=0;else if(C=Math.ceil(Math.abs((y-x)/w)),C>a1)throw new Error(`Requires ((limit - start) / delta) <= ${a1}`);m[d+1]=m[d]+C}let f=m[p],h=b.getArrayFromDType(t,f),g=0;for(let d=0;d<p;++d){let x=m[d+1]-m[d],y=a?r[0]:r[d],w=u?s[0]:s[d];for(let C=0;C<x;++C)h[g++]=y,y+=w}return[m,h]}var wo=v.RowPartitionType,aw=class r{constructor(e,t,o,n,s,i,a,l,u,c){this.shape=e,this.shapeShape=t,this.values=o,this.valuesShape=n,this.valuesDType=s,this.defaultValue=i,this.defaultValueShape=a,this.rowPartitionValues=l,this.rowPartitionValuesShapes=u,this.rowPartitionTypes=v.getRowPartitionTypesHelper(c),this.raggedRank=v.getRaggedRank(this.rowPartitionTypes)}getRowPartitionTypeByDimension(e){return this.rowPartitionTypes[0]===wo.FIRST_DIM_SIZE?this.rowPartitionTypes[e+1]:this.rowPartitionTypes[e]}getRowPartitionTensor(e){return this.rowPartitionTypes[0]===wo.FIRST_DIM_SIZE?this.rowPartitionValues[e+1]:this.rowPartitionValues[e]}getMaxWidth(e){let t=this.getRowPartitionTensor(e-1);switch(this.getRowPartitionTypeByDimension(e-1)){case wo.VALUE_ROWIDS:return r.getMaxWidthValueRowID(t);case wo.ROW_SPLITS:return r.getMaxWidthRowSplit(t);default:throw new Error(`Cannot handle partition type ${wo[this.getRowPartitionTypeByDimension(e-1)]}`)}}static getMaxWidthRowSplit(e){let t=e.length;if(t===0||t===1)return 0;let o=0;for(let n=0;n<t-1;++n){let s=e[n+1]-e[n];s>o&&(o=s)}return o}static getMaxWidthValueRowID(e){let t=e.length;if(t===0)return 0;let o=0,n=e[0],s=0;for(let i=1;i<t;++i){let a=e[i];a!==n&&(n=a,s=Math.max(i-o,s),o=i)}return Math.max(t-o,s)}tensorShapeFromTensor(e,t,o=!0){if(t.length===0){if(e[0]===-1)return[];throw new Error("The only valid scalar shape tensor is the fully unknown shape specified as -1.")}return u1(e,o)}calculateOutputSize(e){let t=this.valuesShape,o=this.defaultValueShape;v.validateDefaultValueShape(o,t);let n=this.tensorShapeFromTensor(this.shape,this.shapeShape),i=v.combineRaggedTensorToTensorShapes(this.raggedRank,n,t);i[0]<0&&(i[0]=e);for(let a=1;a<=this.raggedRank;++a)i[a]<0&&(i[a]=this.getMaxWidth(a));return i}calculateFirstParentOutputIndex(e,t,o){let n=Math.min(e,o),s=[],i=0;for(let a=0;a<n;++a,i+=t)s.push(i);for(let a=n;a<e;++a)s.push(-1);return b.assert(s.length===e,()=>"Final length of result must be equal to firstDimension."),s}calculateOutputIndexRowSplit(e,t,o,n){let s=e.length,i=[];for(let a=0;a<s-1;++a){let l=e[a+1]-e[a],u=Math.min(n,l),c=t[a];c===-1&&(u=0);for(let p=0;p<u;++p)i.push(c),c+=o;for(let p=0;p<l-u;++p)i.push(-1)}if(s>0&&i.length!==e[s-1])throw new Error("Invalid row split size.");return i}calculateOutputIndexValueRowID(e,t,o,n){let s=e.length,i=[];if(s===0)return[];let a=0,l=e[0];if(l>=t.length)throw new Error(`Got currentValueRowId=${l}, which is not less than ${t.length}`);let u=t[l];i.push(u);for(let c=1;c<s;++c){let p=e[c];if(p===l)u>=0&&(++a,a<n?u+=o:u=-1);else{if(a=0,l=p,p>=t.length)throw new Error(`Got nextValueRowId=${p} which is not less than ${t.length}`);u=t[p]}i.push(u)}if(i.length!==e.length)throw new Error("Invalid row ids.");return i}calculateOutputIndex(e,t,o,n){let s=this.getRowPartitionTensor(e),i=this.getRowPartitionTypeByDimension(e);switch(i){case wo.VALUE_ROWIDS:return this.calculateOutputIndexValueRowID(s,t,o,n);case wo.ROW_SPLITS:if(s.length-1>t.length)throw new Error(`Row partition size is greater than output size: ${s.length-1} > ${t.length}`);return this.calculateOutputIndexRowSplit(s,t,o,n);default:throw new Error(`Unsupported partition type: ${wo[i]}`)}}getFirstDimensionSize(){let e=this.rowPartitionValues[0];if(this.rowPartitionTypes.length===0)throw new Error("No row_partition_types given.");let t=this.rowPartitionTypes[0];switch(t){case wo.FIRST_DIM_SIZE:return e[0];case wo.VALUE_ROWIDS:throw new Error("Cannot handle VALUE_ROWIDS in first dimension.");case wo.ROW_SPLITS:return this.rowPartitionValuesShapes[0][0]-1;default:throw new Error(`Cannot handle type ${wo[t]}`)}}compute(){if(this.rowPartitionValues[0].length<=0)throw new Error("Invalid first partition input. Tensor requires at least one element.");let t=this.getFirstDimensionSize(),o=this.calculateOutputSize(t),n=new Array(this.raggedRank+1);n[n.length-1]=1;for(let l=n.length-2;l>=0;--l)n[l]=n[l+1]*o[l+1];let s=u1(o,!1),i=b.getArrayFromDType(this.valuesDType,b.sizeFromShape(s));if(n[0]*o[0]>0){let l=this.calculateFirstParentOutputIndex(t,n[0],o[0]);for(let u=1;u<=this.raggedRank;++u)l=this.calculateOutputIndex(u-1,l,n[u],o[u]);this.setOutput(this.raggedRank,l,i,s)}return[s,i]}setOutput(e,t,o,n){if(o.length===0)return;let s=this.values,i=o,a=n.slice();a=a.slice(e+1);let l=b.sizeFromShape(a),u=t.length,c=this.defaultValue;if(c.length!==l&&c.length!==1){let h=this.defaultValueShape;z(()=>{let g=F(c,h);c=cs(g,a).dataSync()})}let p=0,m=0,f=0;for(let h=0;h<=u;++h){let g=h<u?t[h]:-1;if(g===f){++f;continue}if(m<f){let d=s.subarray(p*l),x=i.subarray(m*l),y=(f-m)*l;l1(x,d,y)}if(h>=u){let d=o.length;g=Math.floor(d/l)}if(g>f)if(this.defaultValue.length===1)i.subarray(f*l,g*l).fill(this.defaultValue[0]),f=g;else for(;g>f;){let d=i.slice(f*l);l1(d,c,l),++f}g<0?(p=h+1,m=f):(p=h,m=f,f=m+1)}}};function l1(r,e,t){for(let o=0;o<t;o++)r[o]=e[o]}function u1(r,e){let t=[];for(let o of r){if(o<0){if(!e)throw new Error(`Dimension ${o} must be >= 0`);if(o<-1)throw new Error(`Dimension ${o} must be >= -1`);o=-1}t.push(o)}return t}function ph(r,e,t,o,n,s,i,a,l,u){return new aw(r,e,t,o,n,s,i,a,l,u).compute()}function mh(r,e,t,o){let n=r===e,s=r<e&&t<0,i=e<r&&t>1;if(n||s||i)return b.makeZerosTypedArray(0,o);let a=Math.abs(Math.ceil((e-r)/t)),l=b.makeZerosTypedArray(a,o);e<r&&t===1&&(t=-1),l[0]=r;for(let u=1;u<l.length;u++)l[u]=l[u-1]+t;return l}var lw=Ge(r=>1/Math.sqrt(r)),QW=Ir(Kn,lw),c1={kernelName:Kn,backendName:"cpu",kernelFunc:QW};function zo(r,e,t,o,n,s,i,a,l,u){let c=[o/n,n],p=r.values,m=e.values;if(o===0)return ft(t,e.dtype);let f=l instanceof Ut?l:ft(c,e.dtype);typeof l=="string"||typeof l=="number"?f.values.fill(l):typeof l=="boolean"&&f.values.fill(+l);for(let h=0;h<s;h++){let g=[],d=0;for(let x=0;x<i;x++){let y=p[h*i+x];g.push(y),d+=y*a[x]}if(d<0||d>=o/n)throw new Error(`Invalid indices: ${g} does not index into ${t}`);for(let x=0;x<n;x++)u?f.values[d*n+x]+=m[h*n+x]:f.values[d*n+x]=e.rank===0?m[0]:m[h*n+x]}return f}var p1=Ge(r=>1/(1+Math.exp(-r))),uw=wt(Qn,r=>1/(1+Math.exp(-r))),m1={kernelName:Qn,backendName:"cpu",kernelFunc:uw};function cw(r,e,t,o,n){let s=ze.isSliceContinous(o,e,t),i=b.sizeFromShape(t),a=b.computeStrides(o);if(s){let p=ze.computeFlatOffset(e,a);return n==="string"?r.slice(p,p+i):r.subarray(p,p+i)}let l=n==="string"?v.fromUint8ToStringArray(r):r,u=ft(o,n,l),c=ft(t,n);for(let p=0;p<c.size;++p){let m=c.indexToLoc(p),f=m.map((h,g)=>h+e[g]);c.set(u.get(...f),...m)}return n==="string"?v.fromStringArrayToUint8(c.values):c.values}function Co(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{begin:s,size:i}=o;X(n,"slice");let[a,l]=ze.parseSliceParams(n,s,i);ze.assertParamsValid(n,a,l);let u=t.data.get(n.dataId).values,c=cw(u,a,l,n.shape,n.dtype);return t.makeTensorInfo(l,n.dtype,c)}var f1={kernelName:Si,backendName:"cpu",kernelFunc:Co};function fh(r,e,t,o,n,s,i){let a=e[0],l=s[0],u=new Array(l),c=new Array(a),p=e[1];if(l===0){if(a!==0)throw new Error(v.getSparseFillEmptyRowsIndicesDenseShapeMismatch(a));let d=b.getArrayFromDType(t,0),x=b.getArrayFromDType(n,0);return[d,[0,p],x,u,c]}let m=!0,f=0,h=new Array(l).fill(0);for(let d=0;d<a;++d){let x=r[d*p];if(x<0)throw new Error(v.getSparseFillEmptyRowsNegativeIndexErrorMessage(d,x));if(x>=l)throw new Error(v.getSparseFillEmptyRowsOutOfRangeIndexErrorMessage(d,x,l));++h[x],m=m&&x>=f,f=x}let g=!0;for(let d=0;d<l;++d){let x=h[d]===0;u[d]=x,g=g&&!x,h[d]=Math.max(h[d],1),d>0&&(h[d]+=h[d-1])}if(g&&m){let d=r,x=o;for(let y=0;y<a;++y)c[y]=y;return[d,[a,p],x,u,c]}else{let d=h[l-1],x=b.getArrayFromDType(t,d*p),y=b.getArrayFromDType(n,d),w=new Array(l).fill(0);for(let C=0;C<a;++C){let S=r[C*p],E=w[S],A=(S===0?0:h[S-1])+E;w[S]++;for(let $=0;$<p;++$)x[A*p+$]=r[C*p+$];y[A]=o[C],c[C]=A}for(let C=0;C<l;++C)if(w[C]===0){let E=C===0?0:h[C-1];x[E*p+0]=C;for(let A=1;A<p;++A)x[E*p+A]=0;y[E]=i}return[x,[d,p],y,u,c]}}function hh(r,e,t,o,n){let s=b.sizeFromShape(o),i=e[0],a=n.length,l=[],u=1,c=-1;for(let d=0;d<a;++d){let x=n[d];if(x===-1){if(c!==-1)throw new Error(v.getSparseReshapeMultipleNegativeOneOutputDimErrorMessage(c,d));c=d,l.push(1)}else{if(x<0)throw new Error(v.getSparseReshapeNegativeOutputDimErrorMessage(d,x));u*=x,l.push(x)}}if(c!==-1){if(u<=0)throw new Error(v.getSparseReshapeEmptyTensorZeroOutputDimErrorMessage());let d=Math.trunc(s/u);if(u*d!==s)throw new Error(v.getSparseReshapeInputOutputMultipleErrorMessage(o,l));l[c]=d}if(b.sizeFromShape(l)!==s)throw new Error(v.getSparseReshapeInputOutputMismatchErrorMessage(o,l));let m=o.length,f=[];if(m>0){f[m-1]=1;for(let d=m-2;d>=0;--d)f[d]=f[d+1]*o[d+1]}let h=[];if(a>0){h[a-1]=1;for(let d=a-2;d>=0;--d)h[d]=h[d+1]*l[d+1]}let g=b.getArrayFromDType(t,i*a);for(let d=0;d<i;++d){let x=0;for(let y=0;y<m;++y)x+=r[d*m+y]*f[y];for(let y=0;y<a;++y)g[d*a+y]=Math.trunc(x/h[y]),x%=h[y]}return[g,[i,a],l]}function Xu(r,e,t,o,n,s=!1,i=0){let a=o.length,l=[e[0],r.length/e[0]],u=l[1],p=a>0?n[a-1]+1:0;if(p<0)throw new Error(v.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());let m=e.slice();m[0]=p;let f=m.reduce((w,C)=>w*C,1),h=b.getArrayFromDType(t,f);if(a===0)return p>0&&h.fill(i),[h,m];if(p<=0)throw new Error(v.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());let g=0,d=1,x=0,y=n[g];for(;;){let w=0;if(d<a){if(w=n[d],y===w){++d;continue}if(y>=w)throw new Error(v.getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage())}if(y<0||y>=p)throw new Error(v.getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage(y,p));y>x&&h.fill(i,x*u,y*u);for(let C=g;C<d;++C){let S=o[C];if(S<0||S>=l[0])throw new Error(v.getSparseSegmentReductionIndicesOutOfRangeErrorMessage(C,o[C],l[0]));for(let E=0;E<u;E++)h[y*u+E]+=r[S*u+E]}if(s)for(let C=0;C<u;C++)h[y*u+C]/=d-g;if(g=d,++d,x=y+1,y=w,d>a)break}return x<p&&h.fill(i,x*u,p*u),[h,m]}var h1=Ge(r=>Math.sqrt(r)),JW=wt(ts,r=>Math.sqrt(r)),d1={kernelName:ts,backendName:"cpu",kernelFunc:JW};var pw=Dt((r,e)=>{let t=r-e;return t*t}),tU=Pt(es,pw),g1={kernelName:es,backendName:"cpu",kernelFunc:tU};var mw=Ge((r,e)=>{let{pattern:t,replaceGlobal:o,rewrite:n}=e;return r.replace(new RegExp(t,o?"g":""),n)}),eU=Ir(Ic,mw),x1={kernelName:Ic,backendName:"cpu",kernelFunc:eU};function dh(r,e,t,o){let n=ft(r,e.dtype);for(let s=0;s<n.size;s++){let i=n.indexToLoc(s),a=new Array(i.length);for(let l=0;l<a.length;l++)a[l]=i[l]*t[l]+o[l];n.set(e.get(...a),...i)}return n}var fw=class{constructor(e,t,o,n,s,i){this.separator=b.encodeString(e),this.nGramWidths=t,this.leftPad=b.encodeString(o),this.rightPad=b.encodeString(n),this.padWidth=s,this.preserveShort=i}getPadWidth(e){return Math.min(this.padWidth<0?e-1:this.padWidth,e-1)}getNumNGrams(e,t){let o=this.getPadWidth(t);return Math.max(0,e+2*o-t+1)}createNGrams(e,t,o,n,s,i){for(let a=0;a<s;++a){let l=this.getPadWidth(i),u=Math.max(0,l-a),c=Math.max(0,l-(s-(a+1))),p=i-(u+c),m=t+(u>0?0:a-l),f=0;f+=u*this.leftPad.length;for(let y=0;y<p;++y)f+=e[m+y].length;f+=c*this.rightPad.length;let h=u+c+p-1;f+=h*this.separator.length,o[n+a]=new Uint8Array(f);let g=o[n+a],d=0,x=y=>y.forEach(w=>g[d++]=w);for(let y=0;y<u;++y)x(this.leftPad),x(this.separator);for(let y=0;y<p-1;++y)x(e[m+y]),x(this.separator);if(p>0){x(e[m+p-1]);for(let y=0;y<c;++y)x(this.separator),x(this.rightPad)}else{for(let y=0;y<c-1;++y)x(this.rightPad),x(this.separator);x(this.rightPad)}}}compute(e,t){let o=e.length,n=t.length;if(n>0){let l=t[0];if(l!==0)throw new Error(`First split value must be 0, got ${l}`);for(let u=1;u<n;++u){let c=t[u]>=l;if(c=c&&t[u]<=o,!c)throw new Error(`Invalid split value ${t[u]}, must be in [${l}, ${o}]`);l=t[u]}if(l!==o)throw new Error(`Last split value must be data size. Expected ${o}, got ${l}`)}let s=n-1,i=b.getArrayFromDType("int32",n);if(o===0||n===0){let l=new Array(o);for(let u=0;u<=s;++u)i[u]=0;return[l,i]}i[0]=0;for(let l=1;l<=s;++l){let u=t[l]-t[l-1],c=0;this.nGramWidths.forEach(p=>{c+=this.getNumNGrams(u,p)}),this.preserveShort&&u>0&&c===0&&(c=1),i[l]=i[l-1]+c}let a=new Array(i[s]);for(let l=0;l<s;++l){let u=t[l],c=i[l];if(this.nGramWidths.forEach(p=>{let m=t[l+1]-t[l],f=this.getNumNGrams(m,p);this.createNGrams(e,u,a,c,f,p),c+=f}),this.preserveShort&&c===i[l]){let p=t[l+1]-t[l];if(p===0)continue;let m=p+2*this.padWidth;this.createNGrams(e,u,a,c,1,m)}}return[a,i]}};function gh(r,e,t,o,n,s,i,a){return new fw(t,o,n,s,i,a).compute(r,e)}function rU(r,e,t,o){if(!r.length)return;if(e.length===0){for(let s=0;s<r.length;++s)o.push(r.subarray(s,s+1));return}if(e.length===1){let s=e[0],i=r.indexOf(s);for(;i!==-1;){let a=r.subarray(0,i);(!t||a.length!==0)&&o.push(a),r=r.subarray(i+1),i=r.indexOf(s)}(!t||r.length!==0)&&o.push(r);return}let n=0;for(let s=0;s<r.length+1;s++)if(s===r.length||e.indexOf(r[s])!==-1){let i=r.subarray(n,s);(!t||i.length!==0)&&o.push(i),n=s+1}}function xh(r,e,t){let o=r.length,n=[],s=0,i=0,a=new Array(o);for(let m=0;m<o;++m){let f=n.length;rU(r[m],e,t,n);let h=n.length-f;a[m]=h,s+=h,i=Math.max(i,h)}let l=b.getArrayFromDType("int32",s*2),u=new Array(s),c=[o,i],p=0;for(let m=0;m<o;++m)for(let f=0;f<a[m];++f)l[p*2]=m,l[p*2+1]=f,u[p]=n[p],++p;return[l,u,c]}function yh(r,e){let t=b.getArrayFromDType("int32",r.length);for(let o=0;o<r.length;++o)t[o]=b.fingerPrint64(r[o]).modulo(e).getLowBitsUnsigned();return t}var hw=Dt((r,e)=>r-e),oU=qu((r,e,t,o)=>({real:r-t,imag:e-o})),wp=Pt(rs,hw,oU),y1={kernelName:rs,backendName:"cpu",kernelFunc:wp};function bh(r,e){let t=new Array(r.rank);for(let n=0;n<t.length;n++)t[n]=r.shape[n]*e[n];let o=ft(t,r.dtype);for(let n=0;n<o.values.length;++n){let s=o.indexToLoc(n),i=new Array(r.rank);for(let l=0;l<i.length;l++)i[l]=s[l]%r.shape[l];let a=r.locToIndex(i);o.values[n]=r.values[a]}return o}var Cp=(r,e)=>{let t=e.value-r.value;return t===0?r.index-e.index:t};function b1(r,e,t=0,o=r.length-1){for(;o>t;){if(o-t>600){let a=o-t+1,l=e-t+1,u=Math.log(a),c=.5*Math.exp(2*u/3),p=.5*Math.sqrt(u*c*(a-c)/a)*Math.sign(l-a/2),m=Math.max(t,Math.floor(e-l*c/a+p)),f=Math.min(o,Math.floor(e+(a-l)*c/a+p));b1(r,e,m,f)}let n=r[e],s=t,i=o;for(b.swap(r,t,e),Cp(r[o],n)>0&&b.swap(r,t,o);s<i;){for(b.swap(r,s,i),s++,i--;Cp(r[s],n)<0;)s=s+1;for(;Cp(r[i],n)>0;)i=i-1}Cp(r[t],n)===0?b.swap(r,t,i):(i=i+1,b.swap(r,i,o)),i<=e&&(t=i+1),e<=i&&(o=i-1)}}function wh(r,e,t,o,n){let s=e[e.length-1],[i,a]=[r.length/s,s],l=b.getTypedArrayFromDType(t,i*o),u=b.getTypedArrayFromDType("int32",i*o);for(let p=0;p<i;p++){let m=p*a,f=r.subarray(m,m+a),h=new Array(f.length);f.forEach((y,w)=>h[w]={value:y,index:w}),o<h.length&&(b1(h,o),h=h.slice(0,o)),n&&h.sort(Cp);let g=p*o,d=l.subarray(g,g+o),x=u.subarray(g,g+o);for(let y=0;y<o;y++)d[y]=h[y].value,x[y]=h[y].index}let c=e.slice();return c[c.length-1]=o,[ft(c,t,l),ft(c,"int32",u)]}function Ch(r,e,t,o){let n=b.parseAxisParam(e,t)[0],s=[1,t[0],1];for(let h=0;h<n;h++)s[0]*=t[h];s[1]=t[n];for(let h=n+1;h<t.length;h++)s[2]*=t[h];let i=new Map,a=new Int32Array(t[n]),l=new Ut(s,o,r),u=[],c=s[0]===1&&s[2]===1;for(let h=0;h<t[n];h++){let g;if(c)g=r[h].toString();else{let x=[];for(let y=0;y<s[0];y++)for(let w=0;w<s[2];w++)x.push(l.get(y,h,w));g=x.join(",")}let d=i.get(g);if(d!=null)a[h]=d;else{let x=i.size;i.set(g,x),a[h]=x,u.push(h)}}let p=s.slice();p[1]=i.size;let m=new Ut(p,o);u.forEach((h,g)=>{for(let d=0;d<s[0];d++)for(let x=0;x<s[2];x++)m.set(l.get(d,h,x),d,g,x)});let f=t.slice();return f[n]=p[1],{outputValues:m.values,outputShape:f,indices:a}}Sm("cpu",()=>new _T,1);var gw=wt(Tn,r=>r>=0?r:Math.exp(r)-1),w1={kernelName:Tn,backendName:"cpu",kernelFunc:gw};function xw(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{alpha:s}=o;X([n],"leakyRelu");let i=b.sizeFromShape(n.shape),a=t.data.get(n.dataId).values,l=b.getTypedArrayFromDType("float32",i);for(let u=0;u<a.length;u++)l[u]=a[u]<0?s*a[u]:a[u];return t.makeTensorInfo(n.shape,"float32",l)}var C1={kernelName:ri,backendName:"cpu",kernelFunc:xw};var nU=Dt((r,e)=>r<0?e*r:r);function yw(r){let{inputs:e,backend:t}=r,{x:o,alpha:n}=e;X([o,n],"prelu");let s=t.data.get(o.dataId).values,i=t.data.get(n.dataId).values,[a,l]=nU(o.shape,n.shape,s,i,"float32");return t.makeTensorInfo(l,"float32",a)}var S1={kernelName:di,backendName:"cpu",kernelFunc:yw};var bw=wt(Un,r=>Math.max(0,r)),v1={kernelName:Un,backendName:"cpu",kernelFunc:bw};var ww=wt(Hn,r=>Math.min(Math.max(0,r),6)),N1={kernelName:Hn,backendName:"cpu",kernelFunc:ww};function Ya(r,e,t,o,n){if(t==="linear")return er({inputs:{x:e},backend:r});if(t==="relu")return bw({inputs:{x:e},backend:r});if(t==="elu")return gw({inputs:{x:e},backend:r});if(t==="relu6")return ww({inputs:{x:e},backend:r});if(t==="prelu")return yw({inputs:{x:e,alpha:o},backend:r});if(t==="leakyrelu")return xw({inputs:{x:e},backend:r,attrs:{alpha:n}});if(t==="sigmoid")return uw({inputs:{x:e},backend:r});throw new Error(`Activation ${t} has not been implemented for the CPU backend.`)}function Rt(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{shape:s}=o,i=b.sizeFromShape(n.shape),a=b.inferFromImplicitShape(s,i),l=b.sizeFromShape(a);b.assert(i===l,()=>`The new shape (${a}) has ${l} elements and the old shape (${n.shape}) has ${i} elements. The new shape and old shape must have the same number of elements.`),t.incRef(n.dataId);let u=t.data.get(n.dataId);if(u.complexTensorInfos!=null){let c=u.complexTensorInfos.real,p=u.complexTensorInfos.imag;c.shape=a,p.shape=a}return{dataId:n.dataId,shape:a,dtype:n.dtype}}var I1={kernelName:xi,backendName:"cpu",kernelFunc:Rt};function Cw(r){let{inputs:e,backend:t,attrs:o}=r,{a:n,b:s}=e,{transposeA:i,transposeB:a}=o;X([n,s],"matMul");let l=n.shape.length,u=s.shape.length,c=i?n.shape[l-2]:n.shape[l-1],p=a?s.shape[u-1]:s.shape[u-2],m=i?n.shape[l-1]:n.shape[l-2],f=a?s.shape[u-2]:s.shape[u-1],h=n.shape.slice(0,-2),g=s.shape.slice(0,-2),d=b.sizeFromShape(h),x=b.sizeFromShape(g),w=_r.assertAndGetBroadcastShape(n.shape.slice(0,-2),s.shape.slice(0,-2)).concat([m,f]);b.assert(c===p,()=>`Error in matMul: inner shapes (${c}) and (${p}) of Tensors with shapes ${n.shape} and ${s.shape} and transposeA=${i} and transposeB=${a} must match.`);let C=i?[d,c,m]:[d,m,c],S=a?[x,f,p]:[x,p,f],E=Rt({inputs:{x:n},backend:t,attrs:{shape:C}}),A=Rt({inputs:{x:s},backend:t,attrs:{shape:S}}),$=i?E.shape[1]:E.shape[2],_=i?E.shape[2]:E.shape[1],L=a?A.shape[1]:A.shape[2],M=Math.max(d,x),V=t.data.get(E.dataId).values,G=t.data.get(A.dataId).values,W=b.computeStrides(E.shape),U=b.computeStrides(A.shape),[K,Z,q]=i?[W[0],1,W[1]]:[W[0],W[1],1],[Q,tt,et]=a?[1,U[1],U[0]]:[U[1],1,U[0]],nt=_*L,rt=ft([M,_,L],E.dtype),ut=rt.values,st=t.blockSize;for(let pt=0;pt<M;pt++){let St=pt%d,Tt=pt%x;for(let vt=0;vt<_;vt+=st){let _t=Math.min(vt+st,_);for(let Ot=0;Ot<L;Ot+=st){let Jt=Math.min(Ot+st,L);for(let ae=0;ae<$;ae+=st){let Ie=Math.min(ae+st,$);for(let le=vt;le<_t;le++)for(let oe=Ot;oe<Jt;oe++){let Se=0;for(let xe=ae;xe<Ie;xe++){let cn=V[St*K+le*Z+xe*q],Ye=G[xe*Q+oe*tt+Tt*et];Se+=cn*Ye}ut[pt*nt+(le*L+oe)]+=Se}}}}}return t.disposeIntermediateTensorInfo(E),t.disposeIntermediateTensorInfo(A),t.makeTensorInfo(w,rt.dtype,rt.values)}var T1={kernelName:Ws,backendName:"cpu",kernelFunc:Cw};function sU(r){let{inputs:e,backend:t,attrs:o}=r,{a:n,b:s,bias:i,preluActivationWeights:a}=e,{transposeA:l,transposeB:u,activation:c,leakyreluAlpha:p}=o,m,f,h,g=[];m=Cw({inputs:{a:n,b:s},attrs:{transposeA:l,transposeB:u},backend:t}),i&&(f=nn({inputs:{a:m,b:i},backend:t}),g.push(m),m=f),c&&(h=Ya(t,m,c,a,p),g.push(m),m=h);for(let x of g)t.disposeIntermediateTensorInfo(x);return m}var k1={kernelName:pa,backendName:"cpu",kernelFunc:sU};var iU=wt(hn,r=>Math.acos(r)),E1={kernelName:hn,backendName:"cpu",kernelFunc:iU};var aU=wt(dn,r=>Math.acosh(r)),A1={kernelName:dn,backendName:"cpu",kernelFunc:aU};function lU(r){let{inputs:e,backend:t}=r,o=e;X(e,"addN");let n=o.map(a=>t.data.get(a.dataId).values),s=ft(o[0].shape,o[0].dtype),i=s.values;for(let a=0;a<o.length;a++){let l=n[a];for(let u=0;u<i.length;u++)i[u]+=l[u]}return t.makeTensorInfo(s.shape,s.dtype,s.values)}var $1={kernelName:dl,backendName:"cpu",kernelFunc:lU};function uU(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{axis:s,keepDims:i}=o;X(n,"all");let a=b.parseAxisParam(s,n.shape),l=a,u=v.getAxesPermutation(l,n.shape.length),c=n;u!=null&&(c=me({inputs:{x:n},backend:t,attrs:{perm:u}}),l=v.getInnerMostAxes(l.length,n.shape.length)),v.assertAxesAreInnerMostDims("all",l,c.shape.length);let[p,m]=v.computeOutAndReduceShapes(c.shape,l),f=b.sizeFromShape(m),h=b.makeZerosTypedArray(b.sizeFromShape(p),c.dtype),g=t.data.get(c.dataId).values;for(let x=0;x<h.length;++x){let y=x*f,w=g[y];for(let C=0;C<f;++C){let S=g[y+C];w=w&&S}h[x]=w}u!=null&&t.disposeIntermediateTensorInfo(c);let d=t.makeTensorInfo(p,c.dtype,h);if(i){let x=v.expandShapeToKeepDim(p,a),y=Rt({inputs:{x:d},backend:t,attrs:{shape:x}});return t.disposeIntermediateTensorInfo(d),y}return d}var D1={kernelName:gl,backendName:"cpu",kernelFunc:uU};function cU(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{axis:s,keepDims:i}=o;X(n,"any");let a=b.parseAxisParam(s,n.shape),l=a,u=v.getAxesPermutation(l,n.shape.length),c=n;u!=null&&(c=me({inputs:{x:n},backend:t,attrs:{perm:u}}),l=v.getInnerMostAxes(l.length,n.shape.length)),v.assertAxesAreInnerMostDims("any",l,c.shape.length);let[p,m]=v.computeOutAndReduceShapes(c.shape,l),f=b.sizeFromShape(m),h=b.makeZerosTypedArray(b.sizeFromShape(p),c.dtype),g=t.data.get(c.dataId).values;for(let x=0;x<h.length;++x){let y=x*f,w=g[y];for(let C=0;C<f;++C){let S=g[y+C];w=w||S}h[x]=w}u!=null&&t.disposeIntermediateTensorInfo(c);let d=t.makeTensorInfo(p,c.dtype,h);if(i){let x=v.expandShapeToKeepDim(p,a),y=Rt({inputs:{x:d},backend:t,attrs:{shape:x}});return t.disposeIntermediateTensorInfo(d),y}return d}var R1={kernelName:xl,backendName:"cpu",kernelFunc:cU};function pU(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{axis:s}=o;X(n,"argMax");let i=b.parseAxisParam(s,n.shape),a=v.getAxesPermutation(i,n.shape.length),l=n,u=[];a!=null&&(l=me({inputs:{x:n},backend:t,attrs:{perm:a}}),u.push(l),i=v.getInnerMostAxes(i.length,l.shape.length)),i=[i[0]],v.assertAxesAreInnerMostDims("argMax",i,l.shape.length);let[c,p]=v.computeOutAndReduceShapes(l.shape,i),m=b.sizeFromShape(c),f=b.makeZerosTypedArray(m,"int32"),h=b.sizeFromShape(p),g=t.data.get(l.dataId).values;for(let d=0;d<f.length;++d){let x=d*h,y=g[x],w=0;for(let C=0;C<h;++C){let S=g[x+C];S>y&&(y=S,w=C)}f[d]=w}return u.forEach(d=>t.disposeIntermediateTensorInfo(d)),t.makeTensorInfo(c,"int32",f)}var F1={kernelName:Ms,backendName:"cpu",kernelFunc:pU};function mU(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{axis:s}=o;X(n,"argMin");let i=b.parseAxisParam(s,n.shape),a=v.getAxesPermutation(i,n.shape.length),l=n,u=[];a!=null&&(l=me({inputs:{x:n},backend:t,attrs:{perm:a}}),u.push(l),i=v.getInnerMostAxes(i.length,l.shape.length)),i=[i[0]],v.assertAxesAreInnerMostDims("argMin",i,l.shape.length);let[c,p]=v.computeOutAndReduceShapes(l.shape,i),m=b.sizeFromShape(c),f=b.makeZerosTypedArray(m,"int32"),h=b.sizeFromShape(p),g=t.data.get(l.dataId).values;for(let d=0;d<f.length;++d){let x=d*h,y=g[x],w=0;for(let C=0;C<h;++C){let S=g[x+C];S<y&&(y=S,w=C)}f[d]=w}return u.forEach(d=>t.disposeIntermediateTensorInfo(d)),t.makeTensorInfo(c,"int32",f)}var _1={kernelName:Bs,backendName:"cpu",kernelFunc:mU};var fU=wt(gn,r=>Math.asin(r)),O1={kernelName:gn,backendName:"cpu",kernelFunc:fU};var hU=wt(xn,r=>Math.asinh(r)),L1={kernelName:xn,backendName:"cpu",kernelFunc:hU};var dU=wt(yn,r=>Math.atan(r)),P1={kernelName:yn,backendName:"cpu",kernelFunc:dU};var gU=Dt((r,e)=>Math.atan2(r,e)),xU=Pt(wn,gU),z1={kernelName:wn,backendName:"cpu",kernelFunc:xU};var yU=wt(bn,r=>Math.atanh(r)),M1={kernelName:bn,backendName:"cpu",kernelFunc:yU};function Yu(r,e,t,o,n,s){let i=n.strideHeight,a=n.strideWidth,l=n.dilationHeight,u=n.dilationWidth,c=n.effectiveFilterHeight,p=n.effectiveFilterWidth,m=n.padInfo.top,f=n.padInfo.left,h=s==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,g=ft(n.outShape,t),d=g.values,x=n.outShape[1]*n.outShape[2]*n.outShape[3],y=n.outShape[2]*n.outShape[3],w=n.outShape[3];for(let C=0;C<n.batchSize;++C){let S=C*x,E=C*o[0];for(let A=0;A<n.inChannels;++A)for(let $=0;$<n.outHeight;++$){let _=$*i-m,L=Math.max(0,_),M=Math.min(n.inHeight,c+_),V=S+$*y;for(let G=0;G<n.outWidth;++G){let W=G*a-f,U=Math.max(0,W),K=Math.min(n.inWidth,p+W),Z=h,q=0,Q=0;for(let et=L;et<M;et+=l){let nt=E+et*o[1];for(let rt=U;rt<K;rt+=u){let ut=nt+rt*o[2],st=r[ut+A];s==="max"&&st>Z?Z=st:s==="avg"&&(q+=st,Q++)}if(isNaN(Z))break}let tt=V+G*w+A;d[tt]=s==="avg"?q/Q:Z}}}return g}function Sh(r,e,t,o,n=!1,s=!1){let i=ft(o.outShape,"int32"),a=o.strideHeight,l=o.strideWidth,u=o.dilationHeight,c=o.dilationWidth,p=o.effectiveFilterHeight,m=o.effectiveFilterWidth,f=o.padInfo.top,h=o.padInfo.left,g=ft(e,t,r);for(let d=0;d<o.batchSize;++d)for(let x=0;x<o.inChannels;++x)for(let y=0;y<o.outHeight;++y){let w=y*a-f,C=w;for(;C<0;)C+=u;let S=Math.min(o.inHeight,p+w);for(let E=0;E<o.outWidth;++E){let A=E*l-h,$=A;for(;$<0;)$+=c;let _=Math.min(o.inWidth,m+A),L=Number.NEGATIVE_INFINITY,M=-1;for(let V=C;V<S;V+=u){let G=V-w;for(let W=$;W<_;W+=c){let U=W-A,K=g.get(d,V,W,x);K>L&&(L=K,n?M=s?((d*o.inHeight+V)*o.inWidth+W)*o.inChannels+x:(V*o.inWidth+W)*o.inChannels+x:M=G*m+U)}}i.set(M,d,y,E,x)}}return i}function vh(r,e,t,o,n,s){let i=n.strideDepth,a=n.strideHeight,l=n.strideWidth,u=n.dilationDepth,c=n.dilationHeight,p=n.dilationWidth,m=n.effectiveFilterDepth,f=n.effectiveFilterHeight,h=n.effectiveFilterWidth,g=n.padInfo.front,d=n.padInfo.top,x=n.padInfo.left,y=s==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,w=ft(n.outShape,t),C=w.values,S=n.outShape[1]*n.outShape[2]*n.outShape[3]*n.outShape[4],E=n.outShape[2]*n.outShape[3]*n.outShape[4],A=n.outShape[3]*n.outShape[4],$=n.outShape[4];for(let _=0;_<n.batchSize;++_){let L=_*S,M=_*o[0];for(let V=0;V<n.inChannels;++V)for(let G=0;G<n.outDepth;++G){let W=G*i-g,U=W;for(;U<0;)U+=u;let K=Math.min(n.inDepth,m+W),Z=L+G*E;for(let q=0;q<n.outHeight;++q){let Q=q*a-d,tt=Q;for(;tt<0;)tt+=c;let et=Math.min(n.inHeight,f+Q),nt=Z+q*A;for(let rt=0;rt<n.outWidth;++rt){let ut=rt*l-x,st=ut;for(;st<0;)st+=p;let pt=Math.min(n.inWidth,h+ut),St=nt+rt*$,Tt=y,vt=0,_t=0;for(let Jt=U;Jt<K;Jt+=u){let ae=M+Jt*o[1];for(let Ie=tt;Ie<et;Ie+=c){let le=ae+Ie*o[2];for(let oe=st;oe<pt;oe+=p){let Se=le+oe*o[3],xe=r[Se+V];if(s==="max"&&xe>Tt?Tt=xe:s==="avg"&&(vt+=xe,_t++),isNaN(Tt))break}if(isNaN(Tt))break}if(isNaN(Tt))break}let Ot=St+V;C[Ot]=s==="avg"?vt/Math.max(_t,1):Tt}}}}return w}function B1(r,e){let t=ft(e.outShape,"int32"),o=e.strideDepth,n=e.strideHeight,s=e.strideWidth,i=e.dilationDepth,a=e.dilationHeight,l=e.dilationWidth,u=e.effectiveFilterDepth,c=e.effectiveFilterHeight,p=e.effectiveFilterWidth,m=e.padInfo.front,f=e.padInfo.top,h=e.padInfo.left;for(let g=0;g<e.batchSize;++g)for(let d=0;d<e.inChannels;++d)for(let x=0;x<e.outDepth;++x){let y=x*o-m,w=y;for(;w<0;)w+=i;let C=Math.min(e.inDepth,u+y);for(let S=0;S<e.outHeight;++S){let E=S*n-f,A=E;for(;A<0;)A+=a;let $=Math.min(e.inHeight,c+E);for(let _=0;_<e.outWidth;++_){let L=_*s-h,M=L;for(;M<0;)M+=l;let V=Math.min(e.inWidth,p+L),G=Number.NEGATIVE_INFINITY,W=-1;for(let U=w;U<C;U+=i){let K=U-y;for(let Z=A;Z<$;Z+=a){let q=Z-E;for(let Q=M;Q<V;Q+=l){let tt=Q-L,et=r.get(g,U,Z,Q,d);et>=G&&(G=et,W=K*c*p+q*c+tt)}}}t.set(W,g,x,S,_,d)}}}return t}function bU(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e;X(n,"avgPool");let{filterSize:s,strides:i,pad:a,dimRoundingMode:l}=o,u=1;b.assert(v.eitherStridesOrDilationsAreOne(i,u),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${u}'`);let c=v.computePool2DInfo(n.shape,s,i,u,a,l),p;if(c.filterWidth===1&&c.filterHeight===1&&b.arraysEqual(c.inShape,c.outShape))p=er({inputs:{x:n},backend:t});else{let m=t.data.get(n.dataId).values,f=b.computeStrides(n.shape),h=Yu(m,n.shape,n.dtype,f,c,"avg");p=t.makeTensorInfo(c.outShape,n.dtype,h.values)}return p}var V1={kernelName:Vs,backendName:"cpu",kernelFunc:bU};function wU(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{filterSize:s,strides:i,pad:a,dimRoundingMode:l,dataFormat:u}=o;X(n,"avgPool3d");let c=v.computePool3DInfo(n.shape,s,i,1,a,l,u),p=t.data.get(n.dataId).values,m=vh(p,n.shape,n.dtype,b.computeStrides(n.shape),c,"avg");return t.makeTensorInfo(m.shape,"float32",m.values)}var G1={kernelName:Gs,backendName:"cpu",kernelFunc:wU};function CU(r){let{inputs:e,backend:t,attrs:o}=r,{dy:n,input:s}=e,{filterSize:i,strides:a,pad:l,dimRoundingMode:u}=o;X([n,s],"avgPool3DGrad");let c=v.computePool3DInfo(s.shape,i,a,1,l,u),p=c.strideDepth,m=c.strideHeight,f=c.strideWidth,h=c.filterDepth,g=c.filterHeight,d=c.filterWidth,x=c.dilationDepth,y=c.dilationHeight,w=c.dilationWidth,C=c.effectiveFilterDepth,S=c.effectiveFilterHeight,E=c.effectiveFilterWidth,A=C-1-c.padInfo.front,$=E-1-c.padInfo.left,_=S-1-c.padInfo.top,L=ft(s.shape,"float32"),M=1/(h*g*d),V=t.bufferSync(n);for(let G=0;G<c.batchSize;++G)for(let W=0;W<c.inChannels;++W)for(let U=0;U<c.inDepth;++U)for(let K=0;K<c.inHeight;++K)for(let Z=0;Z<c.inWidth;++Z){let q=U-A,Q=K-_,tt=Z-$,et=0;for(let nt=0;nt<C;nt+=x){let rt=(q+nt)/p;if(!(rt<0||rt>=c.outDepth||Math.floor(rt)!==rt))for(let ut=0;ut<S;ut+=y){let st=(Q+ut)/m;if(!(st<0||st>=c.outHeight||Math.floor(st)!==st))for(let pt=0;pt<E;pt+=w){let St=(tt+pt)/f;if(St<0||St>=c.outWidth||Math.floor(St)!==St)continue;let Tt=V.get(G,rt,st,St,W);et+=Tt}}}L.set(et*M,G,U,K,Z,W)}return t.makeTensorInfo(L.shape,L.dtype,L.values)}var W1={kernelName:bl,backendName:"cpu",kernelFunc:CU};function SU(r){let{inputs:e,backend:t,attrs:o}=r,{dy:n,input:s}=e,i=s;X([n,s],"avgPoolGrad");let{filterSize:a,strides:l,pad:u}=o,c=v.computePool2DInfo(i.shape,a,l,1,u),p=c.strideHeight,m=c.strideWidth,f=c.filterHeight,h=c.filterWidth,g=c.dilationHeight,d=c.dilationWidth,x=c.effectiveFilterHeight,y=c.effectiveFilterWidth,w=y-1-c.padInfo.left,C=x-1-c.padInfo.top,S=ft(i.shape,"float32"),E=1/(f*h),A=t.data.get(n.dataId).values,$=ft(n.shape,"float32",A);for(let _=0;_<c.batchSize;++_)for(let L=0;L<c.inChannels;++L)for(let M=0;M<c.inHeight;++M)for(let V=0;V<c.inWidth;++V){let G=M-C,W=V-w,U=0;for(let K=0;K<x;K+=g){let Z=(G+K)/p;if(!(Z<0||Z>=c.outHeight||Math.floor(Z)!==Z))for(let q=0;q<y;q+=d){let Q=(W+q)/m;if(Q<0||Q>=c.outWidth||Math.floor(Q)!==Q)continue;let tt=$.get(_,Z,Q,L);U+=tt}}S.set(U*E,_,M,V,L)}return t.makeTensorInfo(S.shape,S.dtype,S.values)}var U1={kernelName:yl,backendName:"cpu",kernelFunc:SU};function vU(r){let{inputs:e,backend:t,attrs:o}=r,{x:n,scale:s,offset:i,mean:a,variance:l}=e;b.assert(a.shape.length===l.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),b.assert(i==null||a.shape.length===i.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),b.assert(s==null||a.shape.length===s.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks."),X([n,a,l,s,i],"batchNorm");let{varianceEpsilon:u}=o;u==null&&(u=.001);let c=t.data.get(n.dataId).values,p=t.data.get(a.dataId).values,m=t.data.get(l.dataId).values,f=s?t.data.get(s.dataId).values:new Float32Array([1]),h=i?t.data.get(i.dataId).values:new Float32Array([0]),g=new Float32Array(c.length),d=h.length,x=f.length,y=m.length,w=p.length,C=0,S=0,E=0,A=0;for(let $=0;$<c.length;++$)g[$]=h[C++]+(c[$]-p[S++])*f[E++]/Math.sqrt(m[A++]+u),C>=d&&(C=0),S>=w&&(S=0),E>=x&&(E=0),A>=y&&(A=0);return t.makeTensorInfo(n.shape,n.dtype,g)}var H1={kernelName:ti,backendName:"cpu",kernelFunc:vU};function NU(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{blockShape:s,crops:i}=o;X([n],"batchToSpaceND");let a=s.reduce((x,y)=>x*y),l=v.getReshaped(n.shape,s,a),u=v.getPermuted(l.length,s.length),c=v.getReshapedPermuted(n.shape,s,a),p=v.getSliceBeginCoords(i,s.length),m=v.getSliceSize(c,i,s.length),f=Rt({inputs:{x:n},backend:t,attrs:{shape:l}}),h=me({inputs:{x:f},backend:t,attrs:{perm:u}}),g=Rt({inputs:{x:h},backend:t,attrs:{shape:c}}),d=Co({inputs:{x:g},backend:t,attrs:{begin:p,size:m}});return t.disposeIntermediateTensorInfo(f),t.disposeIntermediateTensorInfo(h),t.disposeIntermediateTensorInfo(g),d}var q1={kernelName:Us,backendName:"cpu",kernelFunc:NU};function IU(r){let{inputs:e,backend:t,attrs:o}=r,{x:n,weights:s}=e,{size:i}=o,a=t.data.get(n.dataId).values,l=t.data.get(s.dataId).values,u=Ku(a,l,s.dtype,s.shape,i);return t.makeTensorInfo([i],s.dtype,u)}var K1={kernelName:wl,backendName:"cpu",kernelFunc:IU};function TU(r){let{inputs:e,backend:t}=r,{s0:o,s1:n}=e,s=t.data.get(o.dataId).values,i=t.data.get(n.dataId).values,a=v.assertAndGetBroadcastShape(Array.from(s),Array.from(i));return t.makeTensorInfo([a.length],"int32",Int32Array.from(a))}var j1={kernelName:Up,backendName:"cpu",kernelFunc:TU};var kU=wt(Sn,(r,e)=>{let t=e;return r>t.clipValueMax?t.clipValueMax:r<t.clipValueMin?t.clipValueMin:r}),X1={kernelName:Sn,backendName:"cpu",kernelFunc:kU};var EU=r=>{let{x:e}=r.inputs,t=r.backend,o=new Float32Array(b.sizeFromShape(e.shape)),n=t.data.get(e.dataId),s=n.complexTensorInfos.real,i=n.complexTensorInfos.imag,a=t.data.get(s.dataId).values,l=t.data.get(i.dataId).values;for(let u=0;u<a.length;u++){let c=a[u],p=l[u];o[u]=Math.hypot(c,p)}return t.makeOutput(o,e.shape,"float32")},Y1={kernelName:Hs,backendName:"cpu",kernelFunc:EU};function sn(r){let{inputs:e,backend:t}=r,{input:o}=e,n=t.data.get(o.dataId).complexTensorInfos.imag,s=t.data.get(n.dataId).values;return t.makeTensorInfo(n.shape,n.dtype,s)}var Z1={kernelName:Pl,backendName:"cpu",kernelFunc:sn};function qi(r){let{inputs:e,backend:t,attrs:o}=r,{axis:n}=o,s=b.parseAxisParam(n,e[0].shape)[0],i=e.map(g=>g.shape);v.assertParamsConsistent(i,s);let a=v.computeOutShape(e.map(g=>g.shape),s);if(b.sizeFromShape(a)===0)return t.makeTensorInfo(a,e[0].dtype,[]);let l=e.filter(g=>b.sizeFromShape(g.shape)>0);if(l.length===1)return er({inputs:{x:l[0]},backend:t});if(l[0].dtype==="complex64"){let g=l.map(C=>yo({inputs:{input:C},backend:t})),d=l.map(C=>sn({inputs:{input:C},backend:t})),x=qi({inputs:g,backend:t,attrs:{axis:s}}),y=qi({inputs:d,backend:t,attrs:{axis:s}}),w=Fe({inputs:{real:x,imag:y},backend:t});return g.forEach(C=>t.disposeIntermediateTensorInfo(C)),d.forEach(C=>t.disposeIntermediateTensorInfo(C)),t.disposeIntermediateTensorInfo(x),t.disposeIntermediateTensorInfo(y),w}let u=l.map(g=>{let x=[-1,b.sizeFromShape(g.shape.slice(s))];return Rt({inputs:{x:g},backend:t,attrs:{shape:x}})}),c=u.map(g=>({vals:t.data.get(g.dataId).values,shape:g.shape}));a=v.computeOutShape(u.map(g=>g.shape),1);let p=u[0].shape[0]===1,m=nh(c,a,e[0].dtype,p),f=v.computeOutShape(l.map(g=>g.shape),s),h=t.makeTensorInfo(f,e[0].dtype,m);return u.forEach(g=>t.disposeIntermediateTensorInfo(g)),h}var Q1={kernelName:qs,backendName:"cpu",kernelFunc:qi};function Sw(r){let{inputs:e,backend:t,attrs:o}=r,{x:n,filter:s}=e,{strides:i,pad:a,dataFormat:l,dilations:u,dimRoundingMode:c}=o;X([n,s],"conv2d");let p=v.convertConv2DDataFormat(l),m=v.computeConv2DInfo(n.shape,s.shape,i,u,a,c,!1,p),f=m.filterHeight,h=m.filterWidth,g=m.dilationHeight,d=m.dilationWidth,x=m.padInfo.left,y=m.padInfo.top,w=m.dataFormat==="channelsLast",C=new Ut(m.outShape,n.dtype),S=b.computeStrides(n.shape),E=b.computeStrides(s.shape),A=S[0],$=w?S[1]:S[2],_=w?S[2]:1,L=w?1:S[1],M=C.strides[0],V=w?C.strides[1]:C.strides[2],G=w?C.strides[2]:1,W=w?1:C.strides[1],U=t.data.get(n.dataId).values,K=t.data.get(s.dataId).values,Z=C.values;for(let q=0;q<m.batchSize;++q){let Q=q*A,tt=q*M;for(let et=0;et<m.outHeight;++et){let nt=tt+et*V,rt=et*m.strideHeight-y;for(let ut=0;ut<f;++ut){let st=rt+ut*g;if(st<0||st>=m.inHeight)continue;let pt=ut*E[0],St=Q+st*$;for(let Tt=0;Tt<m.outWidth;++Tt){let vt=nt+Tt*G,_t=Tt*m.strideWidth-x;for(let Ot=0;Ot<h;++Ot){let Jt=_t+Ot*d;if(Jt<0||Jt>=m.inWidth)continue;let ae=pt+Ot*E[1],Ie=St+Jt*_,le=ae;for(let oe=0;oe<m.inChannels;++oe){let Se=U[Ie+oe*L];for(let xe=0;xe<m.outChannels;++xe)Z[vt+xe*W]+=Se*K[le+xe];le+=m.outChannels}}}}}}return t.makeTensorInfo(C.shape,C.dtype,Z)}var J1={kernelName:Ks,backendName:"cpu",kernelFunc:Sw};function AU(r){let{inputs:e,backend:t,attrs:o}=r,{x:n,dy:s}=e,{strides:i,pad:a,dataFormat:l,dimRoundingMode:u,filterShape:c}=o;X([n,s],"conv2dBackpropFilter");let p=v.convertConv2DDataFormat(l),m=v.computeConv2DInfo(n.shape,c,i,1,a,u,!1,p),{strideHeight:f,strideWidth:h,filterHeight:g,filterWidth:d}=m,x=m.dataFormat==="channelsLast",y=new Ut(m.filterShape,"float32"),w=m.padInfo.left,C=m.padInfo.top,S=t.data.get(n.dataId).values,E=t.data.get(s.dataId).values,A=new Ut(n.shape,n.dtype,S),$=new Ut(s.shape,s.dtype,E);for(let _=0;_<g;++_){let L=Math.max(0,Math.ceil((C-_)/f)),M=Math.min(m.outHeight,(m.inHeight+C-_)/f);for(let V=0;V<d;++V){let G=Math.max(0,Math.ceil((w-V)/h)),W=Math.min(m.outWidth,(m.inWidth+w-V)/h);for(let U=0;U<m.inChannels;++U)for(let K=0;K<m.outChannels;++K){let Z=0;for(let q=0;q<m.batchSize;++q)for(let Q=L;Q<M;++Q){let tt=_+Q*f-C;for(let et=G;et<W;++et){let nt=V+et*h-w;x?Z+=A.get(q,tt,nt,U)*$.get(q,Q,et,K):Z+=A.get(q,U,tt,nt)*$.get(q,K,Q,et)}}y.set(Z,_,V,U,K)}}}return t.makeTensorInfo(y.shape,y.dtype,y.values)}var tk={kernelName:Sl,backendName:"cpu",kernelFunc:AU};function $U(r){let{inputs:e,backend:t,attrs:o}=r,{dy:n,filter:s}=e,{inputShape:i,strides:a,pad:l,dataFormat:u,dimRoundingMode:c}=o;X([n,s],"conv2dBackpropInput");let p=b.computeStrides(s.shape),m=b.computeStrides(n.shape),f=v.convertConv2DDataFormat(u),h=v.computeConv2DInfo(i,s.shape,a,1,l,c,!1,f),g=new Ut(h.inShape,"float32"),d=g.values,x=t.data.get(n.dataId).values,y=t.data.get(s.dataId).values,[w,C,S]=p,{batchSize:E,filterHeight:A,filterWidth:$,inChannels:_,inHeight:L,inWidth:M,outChannels:V,outHeight:G,outWidth:W,strideHeight:U,strideWidth:K}=h;f=h.dataFormat;let Z=A-1-h.padInfo.top,q=$-1-h.padInfo.left,Q=f==="channelsLast",tt=g.strides[0],et=Q?g.strides[1]:g.strides[2],nt=Q?g.strides[2]:1,rt=Q?1:g.strides[1],ut=m[0],st=Q?m[1]:m[2],pt=Q?m[2]:1,St=Q?1:m[1];for(let Tt=0;Tt<E;++Tt)for(let vt=0;vt<_;++vt)for(let _t=0;_t<L;++_t){let Ot=_t-Z,Jt=Math.max(0,Math.ceil(Ot/U)),ae=Math.min(G,(A+Ot)/U);for(let Ie=0;Ie<M;++Ie){let le=Ie-q,oe=Math.max(0,Math.ceil(le/K)),Se=Math.min(W,($+le)/K),xe=0;for(let Ye=Jt;Ye<ae;++Ye){let Ds=Ye*U-Ot;for(let Wr=oe;Wr<Se;++Wr){let Qi=Wr*K-le,vo=ut*Tt+st*Ye+pt*Wr,pn=w*(A-1-Ds)+C*($-1-Qi)+S*vt;for(let Rs=0;Rs<V;++Rs){let Fs=x[vo+St*Rs],_s=y[pn+Rs];xe+=Fs*_s}}}let cn=tt*Tt+et*_t+nt*Ie+rt*vt;d[cn]=xe}}return t.makeTensorInfo(g.shape,g.dtype,g.values)}var ek={kernelName:js,backendName:"cpu",kernelFunc:$U};function DU(r){let{inputs:e,backend:t,attrs:o}=r,{x:n,filter:s}=e,{strides:i,pad:a,dilations:l}=o;X([n,s],"conv3d");let u=v.computeConv3DInfo(n.shape,s.shape,i,l,a),{filterDepth:c,filterHeight:p,filterWidth:m,dilationDepth:f,dilationHeight:h,dilationWidth:g,padInfo:d}=u,x=d.front,y=d.left,w=d.top,C=new Ut(u.outShape,n.dtype),S=t.data.get(n.dataId).values,E=t.data.get(s.dataId).values,A=C.values,$=b.computeStrides(n.shape),_=b.computeStrides(s.shape);for(let L=0;L<u.batchSize;++L){let M=L*$[0],V=L*C.strides[0];for(let G=0;G<u.outDepth;++G){let W=V+G*C.strides[1],U=G*u.strideDepth-x;for(let K=0;K<c;++K){let Z=U+K*f;if(Z<0||Z>=u.inDepth)continue;let q=K*_[0],Q=M+Z*$[1];for(let tt=0;tt<u.outHeight;++tt){let et=W+tt*C.strides[2],nt=tt*u.strideHeight-w;for(let rt=0;rt<p;++rt){let ut=nt+rt*h;if(ut<0||ut>=u.inHeight)continue;let st=q+rt*_[1],pt=Q+ut*$[2];for(let St=0;St<u.outWidth;++St){let Tt=et+St*u.outChannels,vt=St*u.strideWidth-y;for(let _t=0;_t<m;++_t){let Ot=vt+_t*g;if(Ot<0||Ot>=u.inWidth)continue;let Jt=st+_t*_[2],ae=pt+Ot*u.inChannels,Ie=Jt;for(let le=0;le<u.inChannels;++le){let oe=S[ae+le];for(let Se=0;Se<u.outChannels;++Se)A[Tt+Se]+=oe*E[Ie+Se];Ie+=u.outChannels}}}}}}}}return t.makeTensorInfo(C.shape,C.dtype,C.values)}var rk={kernelName:Xs,backendName:"cpu",kernelFunc:DU};function RU(r){let{inputs:e,backend:t,attrs:o}=r,{x:n,dy:s}=e,{strides:i,pad:a,filterShape:l}=o;X([n,s],"conv3dBackpropFilterV2");let u=b.computeStrides(n.shape),c=b.computeStrides(s.shape),p=v.computeConv3DInfo(n.shape,l,i,1,a),m=p.strideDepth,f=p.strideHeight,h=p.strideWidth,g=p.filterDepth,d=p.filterHeight,x=p.filterWidth,y=new Ut(p.filterShape,"float32"),w=y.values,[C,S,E,A]=y.strides,$=t.data.get(s.dataId).values,[_,L,M,V]=c,G=t.data.get(n.dataId).values,[W,U,K,Z]=u,q=p.padInfo.front,Q=p.padInfo.left,tt=p.padInfo.top;for(let et=0;et<g;++et){let nt=Math.max(0,Math.ceil((q-et)/m)),rt=Math.min(p.outDepth,(p.inDepth+q-et)/m),ut=et*C;for(let st=0;st<d;++st){let pt=Math.max(0,Math.ceil((tt-st)/f)),St=Math.min(p.outHeight,(p.inHeight+tt-st)/f),Tt=st*S+ut;for(let vt=0;vt<x;++vt){let _t=Math.max(0,Math.ceil((Q-vt)/h)),Ot=Math.min(p.outWidth,(p.inWidth+Q-vt)/h),Jt=vt*E+Tt;for(let ae=0;ae<p.inChannels;++ae){let Ie=ae*A+Jt;for(let le=0;le<p.outChannels;++le){let oe=0;for(let Se=0;Se<p.batchSize;++Se){let xe=Se*W,cn=Se*_;for(let Ye=nt;Ye<rt;++Ye){let Wr=(et+Ye*m-q)*U+xe,Qi=Ye*L+cn;for(let vo=pt;vo<St;++vo){let Rs=(st+vo*f-tt)*K+Wr,Fs=vo*M+Qi;for(let _s=_t;_s<Ot;++_s){let fg=(vt+_s*h-Q)*Z+Rs,hg=_s*V+Fs;oe+=G[fg+ae]*$[hg+le]}}}}w[Ie+le]=oe}}}}}return t.makeTensorInfo(y.shape,y.dtype,y.values)}var ok={kernelName:vl,backendName:"cpu",kernelFunc:RU};function FU(r){let{inputs:e,backend:t,attrs:o}=r,{dy:n,filter:s}=e,{pad:i,strides:a,inputShape:l}=o;X([n],"conv3dBackpropInputV2");let u=b.computeStrides(n.shape),c=b.computeStrides(s.shape),p=v.computeConv3DInfo(l,s.shape,a,1,i),m=new Ut(p.inShape,"float32"),f=m.values,[h,g,d,x]=m.strides,y=t.data.get(n.dataId).values,[w,C,S,E]=u,A=t.data.get(s.dataId).values,[$,_,L,M]=c,{batchSize:V,filterDepth:G,filterHeight:W,filterWidth:U,inChannels:K,inDepth:Z,inHeight:q,inWidth:Q,outChannels:tt,outDepth:et,outHeight:nt,outWidth:rt,strideDepth:ut,strideHeight:st,strideWidth:pt}=p,St=G-1-p.padInfo.front,Tt=W-1-p.padInfo.top,vt=U-1-p.padInfo.left;for(let _t=0;_t<V;++_t)for(let Ot=0;Ot<K;++Ot)for(let Jt=0;Jt<Z;++Jt){let ae=Jt-St,Ie=Math.max(0,Math.ceil(ae/ut)),le=Math.min(et,(G+ae)/ut);for(let oe=0;oe<q;++oe){let Se=oe-Tt,xe=Math.max(0,Math.ceil(Se/st)),cn=Math.min(nt,(W+Se)/st);for(let Ye=0;Ye<Q;++Ye){let Ds=Ye-vt,Wr=Math.max(0,Math.ceil(Ds/pt)),Qi=Math.min(rt,(U+Ds)/pt),vo=0;for(let pn=Ie;pn<le;++pn){let Rs=pn*ut-ae;for(let Fs=xe;Fs<cn;++Fs){let _s=Fs*st-Se;for(let gc=Wr;gc<Qi;++gc){let fg=gc*pt-Ds,hg=w*_t+C*pn+S*Fs+E*gc,LF=$*(G-1-Rs)+_*(W-1-_s)+L*(U-1-fg)+M*Ot;for(let Bp=0;Bp<tt;++Bp){let PF=y[hg+Bp],zF=A[LF+Bp];vo+=PF*zF}}}}f[h*_t+g*Jt+d*oe+x*Ye+Ot]=vo}}}return t.makeTensorInfo(m.shape,m.dtype,m.values)}var nk={kernelName:Nl,backendName:"cpu",kernelFunc:FU};var _U=wt(vn,r=>Math.cos(r)),sk={kernelName:vn,backendName:"cpu",kernelFunc:_U};var OU=wt(Nn,r=>Math.cosh(r)),ik={kernelName:Nn,backendName:"cpu",kernelFunc:OU};function LU(r){let{inputs:e,backend:t,attrs:o}=r,{image:n,boxes:s,boxInd:i}=e,{cropSize:a,method:l,extrapolationValue:u}=o,[c,p,m,f]=n.shape,h=s.shape[0],[g,d]=a,x=ft([h,g,d,f],"float32"),y=t.data.get(s.dataId).values,w=t.data.get(i.dataId).values,C=t.data.get(n.dataId).values,S=b.computeStrides(n.shape),E=b.computeStrides(x.shape);for(let A=0;A<h;A++){let $=A*4,_=y[$],L=y[$+1],M=y[$+2],V=y[$+3],G=w[A];if(G>=c)continue;let W=g>1?(M-_)*(p-1)/(g-1):0,U=d>1?(V-L)*(m-1)/(d-1):0;for(let K=0;K<g;K++){let Z=g>1?_*(p-1)+K*W:.5*(_+M)*(p-1);if(Z<0||Z>p-1){for(let q=0;q<d;q++)for(let Q=0;Q<f;Q++){let tt=Q+q*E[2]+K*E[1]+A*E[0];x.values[tt]=u}continue}if(l==="bilinear"){let q=Math.floor(Z),Q=Math.ceil(Z),tt=Z-q;for(let et=0;et<d;et++){let nt=d>1?L*(m-1)+et*U:.5*(L+V)*(m-1);if(nt<0||nt>m-1){for(let pt=0;pt<f;pt++){let St=pt+et*E[2]+K*E[1]+A*E[0];x.values[St]=u}continue}let rt=Math.floor(nt),ut=Math.ceil(nt),st=nt-rt;for(let pt=0;pt<f;pt++){let St=pt+rt*S[2]+q*S[1]+G*S[0],Tt=C[St];St=pt+ut*S[2]+q*S[1]+G*S[0];let vt=C[St];St=pt+rt*S[2]+Q*S[1]+G*S[0];let _t=C[St];St=pt+ut*S[2]+Q*S[1]+G*S[0];let Ot=C[St],Jt=Tt+(vt-Tt)*st,ae=_t+(Ot-_t)*st;St=pt+et*E[2]+K*E[1]+A*E[0],x.values[St]=Jt+(ae-Jt)*tt}}}else for(let q=0;q<d;++q){let Q=d>1?L*(m-1)+q*U:.5*(L+V)*(m-1);if(Q<0||Q>m-1){for(let nt=0;nt<f;nt++){let rt=nt+q*E[2]+K*E[1]+A*E[0];x.values[rt]=u}continue}let tt=Math.round(Q),et=Math.round(Z);for(let nt=0;nt<f;nt++){let rt=nt+tt*S[2]+et*S[1]+G*S[0],ut=nt+q*E[2]+K*E[1]+A*E[0];x.values[ut]=C[rt]}}}}return t.makeTensorInfo(x.shape,x.dtype,x.values)}var ak={kernelName:Tl,backendName:"cpu",kernelFunc:LU};function PU(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{axis:s,exclusive:i,reverse:a}=o;X(n,"cumprod");let l=v.getAxesPermutation([s],n.shape.length),u=n;l!=null&&(u=me({inputs:{x:n},backend:t,attrs:{perm:l}}));let c=v.getInnerMostAxes(1,n.shape.length)[0];if(c!==u.shape.length-1)throw new Error(`backend.cumprod in CPU expects an inner-most axis=${u.shape.length-1} but got axis=${c}`);let p=Te(u.dtype,"int32"),m=b.makeOnesTypedArray(b.sizeFromShape(u.shape),p),f=t.data.get(u.dataId).values,h=u.shape[u.shape.length-1],g=a?(x,y)=>x+h-y-1:(x,y)=>x+y;for(let x=0;x<f.length;x+=h)for(let y=0;y<h;y++){let w=g(x,y);if(y===0)m[w]=i?1:f[w];else{let C=g(x,y-1);m[w]=i?f[C]*m[C]:f[w]*m[C]}}let d=t.makeTensorInfo(u.shape,p,m);if(l!=null){let x=v.getUndoAxesPermutation(l),y=me({inputs:{x:d},backend:t,attrs:{perm:x}});return t.disposeIntermediateTensorInfo(d),t.disposeIntermediateTensorInfo(u),y}return d}var lk={kernelName:Il,backendName:"cpu",kernelFunc:PU};function zU(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{axis:s,exclusive:i,reverse:a}=o;X(n,"cumsum");let l=v.getAxesPermutation([s],n.shape.length),u=n;l!=null&&(u=me({inputs:{x:n},backend:t,attrs:{perm:l}}));let c=v.getInnerMostAxes(1,n.shape.length)[0];if(c!==u.shape.length-1)throw new Error(`backend.cumsum in CPU expects an inner-most axis=${u.shape.length-1} but got axis=${c}`);let p=Te(u.dtype,"int32"),m=b.makeZerosTypedArray(b.sizeFromShape(u.shape),p),f=t.data.get(u.dataId).values,h=u.shape[u.shape.length-1],g=a?(x,y)=>x+h-y-1:(x,y)=>x+y;for(let x=0;x<f.length;x+=h)for(let y=0;y<h;y++){let w=g(x,y);if(y===0)m[w]=i?0:f[w];else{let C=g(x,y-1);m[w]=i?f[C]+m[C]:f[w]+m[C]}}let d=t.makeTensorInfo(u.shape,p,m);if(l!=null){let x=v.getUndoAxesPermutation(l),y=me({inputs:{x:d},backend:t,attrs:{perm:x}});return t.disposeIntermediateTensorInfo(d),t.disposeIntermediateTensorInfo(u),y}return d}var uk={kernelName:Ys,backendName:"cpu",kernelFunc:zU};function MU(r){let{inputs:e,backend:t,attrs:o}=r,{x:n,weights:s}=e,{size:i,binaryOutput:a}=o;if(n.shape.length===1){let l=t.data.get(n.dataId).values,u=t.data.get(s.dataId).values,c=Ku(l,u,s.dtype,s.shape,i);return t.makeTensorInfo([i],s.dtype,c)}else if(n.shape.length===2){let l=t.bufferSync(n),u=t.bufferSync(s),c=oh(l,u,i,a);return t.makeTensorInfo(c.shape,s.dtype,c.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${n.shape.length}.`)}var ck={kernelName:kl,backendName:"cpu",kernelFunc:MU};function BU(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{blockSize:s,dataFormat:i}=o;b.assert(i==="NHWC",()=>`Only NHWC dataFormat supported on CPU for depthToSpace. Got ${i}`);let a=n.shape[0],l=n.shape[1],u=n.shape[2],c=n.shape[3],p=l*s,m=u*s,f=c/(s*s),h=t.data.get(n.dataId).values,g=new Float32Array(a*p*m*f),d=0;for(let x=0;x<a;++x)for(let y=0;y<p;++y){let w=Math.floor(y/s),C=y%s;for(let S=0;S<m;++S){let E=Math.floor(S/s),A=S%s,$=(C*s+A)*f;for(let _=0;_<f;++_){let M=_+$+c*(E+u*(w+l*x));g[d++]=h[M]}}}return t.makeTensorInfo([a,p,m,f],n.dtype,g)}var pk={kernelName:El,backendName:"cpu",kernelFunc:BU};function vw(r){let{inputs:e,backend:t,attrs:o}=r,{x:n,filter:s}=e,{strides:i,pad:a,dilations:l,dimRoundingMode:u}=o;X([n,s],"depthwiseConv2DNative");let c=b.computeStrides(n.shape),p=b.computeStrides(s.shape),m=l;m==null&&(m=[1,1]),b.assert(v.eitherStridesOrDilationsAreOne(i,m),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${i} and dilations '${m}'`);let f=v.computeConv2DInfo(n.shape,s.shape,i,m,a,u,!0),{filterHeight:h,filterWidth:g,dilationHeight:d,dilationWidth:x,padInfo:y}=f,w=y.left,C=y.top,S=f.outChannels/f.inChannels,E=new Ut(f.outShape,n.dtype),A=t.data.get(n.dataId).values,$=t.data.get(s.dataId).values,_=E.values;for(let L=0;L<f.batchSize;++L){let M=L*c[0],V=L*E.strides[0];for(let G=0;G<f.outHeight;++G){let W=V+G*E.strides[1],U=G*f.strideHeight-C;for(let K=0;K<h;++K){let Z=U+K*d;if(Z<0||Z>=f.inHeight)continue;let q=K*p[0],Q=M+Z*c[1];for(let tt=0;tt<f.outWidth;++tt){let et=W+tt*E.strides[2],nt=tt*f.strideWidth-w;for(let rt=0;rt<g;++rt){let ut=nt+rt*x;if(ut<0||ut>=f.inWidth)continue;let st=q+rt*p[1],pt=Q+ut*f.inChannels,St=et,Tt=st;for(let vt=0;vt<f.inChannels;++vt){let _t=A[pt+vt];for(let Ot=0;Ot<S;++Ot)_[St+Ot]+=_t*$[Tt+Ot];St+=S,Tt+=S}}}}}}return t.makeTensorInfo(E.shape,E.dtype,E.values)}var mk={kernelName:Zs,backendName:"cpu",kernelFunc:vw};function VU(r){let{inputs:e,backend:t,attrs:o}=r,{x:n,dy:s}=e,{strides:i,dilations:a,pad:l,dimRoundingMode:u,filterShape:c}=o;X([n,s],"depthwiseConv2dNativeBackpropFilter");let p=v.computeConv2DInfo(n.shape,c,i,a,l,u,!0),{strideHeight:m,strideWidth:f,filterHeight:h,filterWidth:g}=p,d=new Ut(p.filterShape,"float32"),x=p.padInfo.left,y=p.padInfo.top,w=p.outChannels/p.inChannels,C=t.data.get(n.dataId).values,S=new Ut(n.shape,n.dtype,C),E=t.data.get(s.dataId).values,A=new Ut(s.shape,s.dtype,E);for(let $=0;$<h;++$){let _=Math.max(0,Math.ceil((y-$)/m)),L=Math.min(p.outHeight,(p.inHeight+y-$)/m);for(let M=0;M<g;++M){let V=Math.max(0,Math.ceil((x-M)/f)),G=Math.min(p.outWidth,(p.inWidth+x-M)/f);for(let W=0;W<p.outChannels;++W){let U=Math.trunc(W/w),K=W%w,Z=0;for(let q=0;q<p.batchSize;++q)for(let Q=_;Q<L;++Q){let tt=$+Q*m-y;for(let et=V;et<G;++et){let nt=M+et*f-x;Z+=S.get(q,tt,nt,U)*A.get(q,Q,et,W)}}d.set(Z,$,M,U,K)}}}return t.makeTensorInfo(d.shape,d.dtype,d.values)}var fk={kernelName:Al,backendName:"cpu",kernelFunc:VU};function GU(r){let{inputs:e,backend:t,attrs:o}=r,{dy:n,filter:s}=e,{strides:i,dilations:a,pad:l,dimRoundingMode:u,inputShape:c}=o;X([n,s],"depthwiseConv2DNativeBackpropInput");let p=b.computeStrides(n.shape),m=b.computeStrides(s.shape),f=v.computeConv2DInfo(c,s.shape,i,a,l,u,!0),h=new Ut(f.inShape,"float32"),g=h.values,[d,x,y]=h.strides,w=t.data.get(n.dataId).values,[C,S,E]=p,A=t.data.get(s.dataId).values,[$,_,L]=m,{batchSize:M,filterHeight:V,filterWidth:G,inChannels:W,inHeight:U,inWidth:K,outChannels:Z,outHeight:q,outWidth:Q,strideHeight:tt,strideWidth:et}=f,nt=V-1-f.padInfo.top,rt=G-1-f.padInfo.left,ut=Z/W;for(let st=0;st<M;++st)for(let pt=0;pt<W;++pt)for(let St=0;St<U;++St){let Tt=St-nt,vt=Math.max(0,Math.ceil(Tt/tt)),_t=Math.min(q,(V+Tt)/tt);for(let Ot=0;Ot<K;++Ot){let Jt=Ot-rt,ae=Math.max(0,Math.ceil(Jt/et)),Ie=Math.min(Q,(G+Jt)/et),le=0;for(let oe=vt;oe<_t;++oe){let Se=oe*tt-Tt;for(let xe=ae;xe<Ie;++xe){let cn=xe*et-Jt,Ye=C*st+S*oe+E*xe,Ds=$*(V-1-Se)+_*(G-1-cn)+L*pt;for(let Wr=0;Wr<ut;++Wr){let Qi=pt*ut+Wr,vo=w[Ye+Qi],pn=A[Ds+Wr];le+=vo*pn}}}g[d*st+x*St+y*Ot+pt]=le}}return t.makeTensorInfo(h.shape,h.dtype,h.values)}var hk={kernelName:$l,backendName:"cpu",kernelFunc:GU};function WU(r){let{inputs:e,backend:t}=r,{x:o}=e,n=b.sizeFromShape(o.shape),s=t.data.get(o.dataId).values,i=ft([n,n],o.dtype),a=i.values;for(let u=0;u<s.length;u++)a[u*n+u]=s[u];let l=[...o.shape,...o.shape];return t.makeTensorInfo(l,i.dtype,i.values)}var dk={kernelName:Hp,backendName:"cpu",kernelFunc:WU};var gk={kernelName:Qs,backendName:"cpu",kernelFunc:({inputs:r,backend:e,attrs:t})=>{let{x:o,filter:n}=r,{strides:s,pad:i,dilations:a}=t,l=e,u=l.data.get(o.dataId).values,c=o.shape.length,p=l.data.get(n.dataId).values,m=n.shape.length,{batchSize:f,inHeight:h,inWidth:g,inChannels:d,outHeight:x,outWidth:y,padInfo:w,strideHeight:C,strideWidth:S,filterHeight:E,filterWidth:A,dilationHeight:$,dilationWidth:_,outShape:L}=v.computeDilation2DInfo(o.shape,n.shape,s,i,"NHWC",a),M=b.sizeFromShape(L),V=L.length,G=b.getArrayFromDType(o.dtype,M);for(let U=0;U<f;++U)for(let K=0;K<x;++K){let Z=K*C-w.top;for(let q=0;q<y;++q){let Q=q*S-w.left;for(let tt=0;tt<d;++tt){let et=Number.MIN_SAFE_INTEGER;for(let rt=0;rt<E;++rt){let ut=Z+rt*$;if(ut>=0&&ut<h)for(let st=0;st<A;++st){let pt=Q+st*_;if(pt>=0&&pt<g){let St=b.locToIndex([U,ut,pt,tt],c,b.computeStrides(o.shape)),Tt=b.locToIndex([rt,st,tt],m,b.computeStrides(n.shape)),vt=u[St]+p[Tt];vt>et&&(et=vt)}}}let nt=b.locToIndex([U,K,q,tt],V,b.computeStrides(L));G[nt]=et}}}return{dataId:l.write(b.toTypedArray(G,o.dtype),L,o.dtype),shape:L,dtype:o.dtype}}};var xk={kernelName:Nc,backendName:"cpu",kernelFunc:({inputs:r,backend:e,attrs:t})=>{let{x:o,filter:n,dy:s}=r,{strides:i,pad:a,dilations:l}=t,u=e,c=b.toNestedArray(o.shape,u.data.get(o.dataId).values),p=b.toNestedArray(n.shape,u.data.get(n.dataId).values),{batchSize:m,inHeight:f,inWidth:h,inChannels:g,outHeight:d,outWidth:x,padInfo:y,strideHeight:w,strideWidth:C,filterHeight:S,filterWidth:E,dilationHeight:A,dilationWidth:$,outShape:_}=v.computeDilation2DInfo(o.shape,n.shape,i,a,"NHWC",l);b.assert(s.rank===_.length,()=>`Error in ${Nc}, dy must have the same rank as output ${_.length}, but got ${s.rank}`);let L=b.toNestedArray(_,u.data.get(s.dataId).values),M=b.makeZerosNestedTypedArray(n.shape,n.dtype);for(let G=0;G<m;++G)for(let W=0;W<d;++W){let U=W*w-y.top;for(let K=0;K<x;++K){let Z=K*C-y.left;for(let q=0;q<g;++q){let Q=Number.MIN_SAFE_INTEGER,tt=0,et=0;for(let nt=0;nt<S;++nt){let rt=U+nt*A;if(rt>=0&&rt<f)for(let ut=0;ut<E;++ut){let st=Z+ut*$;if(st>=0&&st<h){let pt=c[G][rt][st][q]+p[nt][ut][q];pt>Q&&(Q=pt,tt=nt,et=ut)}}}M[tt][et][q]+=L[G][W][K][q]}}}return{dataId:u.write(b.toTypedArray(M,o.dtype),n.shape,n.dtype),shape:n.shape,dtype:n.dtype}}};var yk={kernelName:vc,backendName:"cpu",kernelFunc:({inputs:r,backend:e,attrs:t})=>{let{x:o,filter:n,dy:s}=r,{strides:i,pad:a,dilations:l}=t,u=e,c=b.toNestedArray(o.shape,u.data.get(o.dataId).values),p=b.toNestedArray(n.shape,u.data.get(n.dataId).values),{batchSize:m,inHeight:f,inWidth:h,inChannels:g,outHeight:d,outWidth:x,padInfo:y,strideHeight:w,strideWidth:C,filterHeight:S,filterWidth:E,dilationHeight:A,dilationWidth:$,outShape:_}=v.computeDilation2DInfo(o.shape,n.shape,i,a,"NHWC",l);b.assert(s.rank===_.length,()=>`Error in ${vc}, dy must have the same rank as output ${_.length}, but got ${s.rank}`);let L=b.toNestedArray(_,u.data.get(s.dataId).values),M=b.makeZerosNestedTypedArray(o.shape,o.dtype);for(let G=0;G<m;++G)for(let W=0;W<d;++W){let U=W*w-y.top;for(let K=0;K<x;++K){let Z=K*C-y.left;for(let q=0;q<g;++q){let Q=Number.MIN_SAFE_INTEGER,tt=U<0?0:U,et=Z<0?0:Z;for(let nt=0;nt<S;++nt){let rt=U+nt*A;if(rt>=0&&rt<f)for(let ut=0;ut<E;++ut){let st=Z+ut*$;if(st>=0&&st<h){let pt=c[G][rt][st][q]+p[nt][ut][q];pt>Q&&(Q=pt,tt=rt,et=st)}}}M[G][tt][et][q]+=L[G][W][K][q]}}}return{dataId:u.write(b.toTypedArray(M,o.dtype),o.shape,o.dtype),shape:o.shape,dtype:o.dtype}}};function UU(r){let{inputs:e,backend:t,attrs:o}=r,{image:n}=e,{canvas:s,options:i}=o,{contextOptions:a,imageOptions:l}=i||{},u=l?.alpha||1,c=a?.contextType||"2d";if(c!=="2d")throw new Error(`Context type ${a.contextType} is not supported by the CPU backend.`);let p=s.getContext(c,a?.contextAttributes||{});if(p==null)throw new Error(`Could not get the context with ${c} type.`);let[m,f]=n.shape.slice(0,2),h=n.shape.length===2?1:n.shape[2],g=t.data.get(n.dataId).values,d=n.dtype==="float32"?255:1,x=new Uint8ClampedArray(f*m*4);for(let w=0;w<m*f;++w){let C=[0,0,0,255*u];for(let E=0;E<h;E++){let A=g[w*h+E];if(n.dtype==="float32"){if(A<0||A>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${A}.`)}else if(n.dtype==="int32"&&(A<0||A>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${A}.`);h===1?(C[0]=A*d,C[1]=A*d,C[2]=A*d):C[E]=A*d}let S=w*4;x[S+0]=Math.round(C[0]),x[S+1]=Math.round(C[1]),x[S+2]=Math.round(C[2]),x[S+3]=Math.round(C[3])}s.width=f,s.height=m;let y=new ImageData(x,f,m);return p.putImageData(y,0,0),n}var bk={kernelName:R0,backendName:"cpu",kernelFunc:UU};function Ts(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{axis:s,keepDims:i}=o;X(n,"sum");let a;n.dtype==="bool"?a=bo({inputs:{x:n},backend:t,attrs:{dtype:"int32"}}):a=er({inputs:{x:n},backend:t});let l=a.shape.length,u=b.parseAxisParam(s,a.shape),c=v.getAxesPermutation(u,l),p=u,m=a;c!=null&&(m=me({inputs:{x:a},backend:t,attrs:{perm:c}}),p=v.getInnerMostAxes(p.length,l)),v.assertAxesAreInnerMostDims("sum",p,m.shape.length);let[f,h]=v.computeOutAndReduceShapes(m.shape,p),g=v.upcastType(m.dtype,"int32"),d=Hu(t,f,g),x=b.sizeFromShape(h),y=t.data.get(d.dataId).values,w=t.data.get(m.dataId).values;for(let C=0;C<y.length;++C){let S=C*x,E=0;for(let A=0;A<x;++A)E+=w[S+A];y[C]=E}if(i){let C=v.expandShapeToKeepDim(d.shape,u),S=d;d=Rt({inputs:{x:d},backend:t,attrs:{shape:C}}),t.disposeIntermediateTensorInfo(S)}return t.disposeIntermediateTensorInfo(a),c!=null&&t.disposeIntermediateTensorInfo(m),d}var wk={kernelName:vi,backendName:"cpu",kernelFunc:Ts};function HU(r){let{inputs:e,backend:t,attrs:o}=r,{equation:n}=o,s=e,{allDims:i,summedDims:a,idDims:l}=v.decodeEinsumEquation(n,s.length);v.checkEinsumDimSizes(i.length,l,s);let{path:u,steps:c}=v.getEinsumComputePath(a,l),p=c.length,m=null,f=i.length,h=[];for(let g=0;g<p;++g){for(let d of c[g]){let{permutationIndices:x,expandDims:y}=v.getEinsumPermutation(f,l[d]),w;v.isIdentityPermutation(x)?w=s[d]:(w=me({inputs:{x:s[d]},backend:t,attrs:{perm:x}}),h.push(w));let C=w.shape.slice();for(let S=0;S<y.length;++S)C.splice(y[S],0,1);b.arraysEqual(w.shape,C)||(w=Rt({inputs:{x:w},backend:t,attrs:{shape:C}}),h.push(w)),m===null?m=w:(m=Xa({inputs:{a:w,b:m},backend:t}),h.push(m))}g<p-1&&(u[g]>=0&&(m=Ts({inputs:{x:m},backend:t,attrs:{axis:u[g]-(i.length-f),keepDims:!1}}),h.push(m)),f--)}for(let g of h)g!==m&&t.disposeIntermediateTensorInfo(g);return m}var Ck={kernelName:Dl,backendName:"cpu",kernelFunc:HU};function qU(r){let{inputs:e,backend:t}=r,{dy:o,y:n}=e;X([o,n],"eluGrad");let s=new Float32Array(b.sizeFromShape(n.shape)),i=t.data.get(n.dataId).values,a=t.data.get(o.dataId).values;for(let l=0;l<i.length;++l){let u=i[l];u>=0?s[l]=a[l]:s[l]=a[l]*(u+1)}return t.makeTensorInfo(n.shape,"float32",s)}var Sk={kernelName:Rl,backendName:"cpu",kernelFunc:qU};var KU=v.ERF_P,jU=v.ERF_A1,XU=v.ERF_A2,YU=v.ERF_A3,ZU=v.ERF_A4,QU=v.ERF_A5,JU=wt(kn,r=>{let e=Math.sign(r),t=Math.abs(r),o=1/(1+KU*t);return e*(1-((((QU*o+ZU)*o+YU)*o+XU)*o+jU)*o*Math.exp(-t*t))}),vk={kernelName:kn,backendName:"cpu",kernelFunc:JU};function Zu(r){let{inputs:e,backend:t,attrs:o}=r,{input:n}=e,{dim:s}=o,i=n.shape.length,a=n.shape.slice(),l=s;return s<0&&(b.assert(-(i+1)<=s,()=>`Axis must be in the interval [${-(i+1)}, ${i}]`),l=i+s+1),a.splice(l,0,1),Rt({inputs:{x:n},backend:t,attrs:{shape:a}})}var Nk={kernelName:Js,backendName:"cpu",kernelFunc:Zu};var t4=Dt((r,e)=>r/e),Sp=Pt(In,t4),vp={kernelName:In,backendName:"cpu",kernelFunc:Sp};function Nh(r,e,t){let o=r.shape,n=o[0],s=o[1],i=t.data.get(r.dataId),a=i.complexTensorInfos.real,l=i.complexTensorInfos.imag,u=[n,s],c=b.sizeFromShape(u),p=b.getTypedArrayFromDType("float32",c),m=b.getTypedArrayFromDType("float32",c);for(let d=0;d<n;d++){let x=Co({inputs:{x:a},backend:t,attrs:{begin:[d,0],size:[1,s]}}),y=Co({inputs:{x:l},backend:t,attrs:{begin:[d,0],size:[1,s]}}),w=Fe({inputs:{real:x,imag:y},backend:t}),{real:C,imag:S}=e4(w,e,t),E=v.mergeRealAndImagArrays(C,S);for(let A=0;A<s;A++){let $=v.getComplexWithIndex(E,A);p[d*s+A]=$.real,m[d*s+A]=$.imag}t.disposeIntermediateTensorInfo(x),t.disposeIntermediateTensorInfo(y),t.disposeIntermediateTensorInfo(w)}let f=t.makeTensorInfo(u,"float32",p),h=t.makeTensorInfo(u,"float32",m),g=Fe({inputs:{real:f,imag:h},backend:t});return t.disposeIntermediateTensorInfo(f),t.disposeIntermediateTensorInfo(h),g}function e4(r,e,t){let o=b.sizeFromShape(r.shape),n=t.data.get(r.dataId),s=t.data.get(n.complexTensorInfos.real.dataId).values,i=t.data.get(n.complexTensorInfos.imag.dataId).values;if(r4(o)){let a=Nw(s,i,o,e,t),l=[r.shape[0],r.shape[1]];if(e){let u=t.makeTensorInfo(l,"float32",a.real),c=t.makeTensorInfo(l,"float32",a.imag),p=t.makeTensorInfo([],"float32",b.createScalarValue(o,"float32")),m=er({inputs:{x:p},backend:t}),f=vp.kernelFunc({inputs:{a:u,b:p},backend:t}),h=vp.kernelFunc({inputs:{a:c,b:m},backend:t}),g=t.data.get(f.dataId).values,d=t.data.get(h.dataId).values;return t.disposeIntermediateTensorInfo(u),t.disposeIntermediateTensorInfo(c),t.disposeIntermediateTensorInfo(p),t.disposeIntermediateTensorInfo(m),t.disposeIntermediateTensorInfo(f),t.disposeIntermediateTensorInfo(h),{real:g,imag:d}}return a}else{let a=v.mergeRealAndImagArrays(s,i),l=o4(a,o,e);return v.splitRealAndImagArrays(l)}}function r4(r){return(r&r-1)===0}function Nw(r,e,t,o,n){if(t===1)return{real:r,imag:e};let s=v.mergeRealAndImagArrays(r,e),i=t/2,a=v.complexWithEvenIndex(s),l=a.real,u=a.imag,c=[l.length],p=n.makeTensorInfo(c,"float32",l),m=n.makeTensorInfo(c,"float32",u),f=Fe({inputs:{real:p,imag:m},backend:n}),h=v.complexWithOddIndex(s),g=h.real,d=h.imag,x=[g.length],y=n.makeTensorInfo(x,"float32",g),w=n.makeTensorInfo(x,"float32",d),C=Fe({inputs:{real:y,imag:w},backend:n}),S=Nw(l,u,i,o,n),E=S.real,A=S.imag,$=[E.length],_=n.makeTensorInfo($,"float32",E),L=n.makeTensorInfo($,"float32",A),M=Fe({inputs:{real:_,imag:L},backend:n}),V=Nw(g,d,i,o,n),G=V.real,W=V.imag,U=[G.length],K=n.makeTensorInfo(U,"float32",G),Z=n.makeTensorInfo(U,"float32",W),q=Fe({inputs:{real:K,imag:Z},backend:n}),Q=v.exponents(t,o),tt=[Q.real.length],et=n.makeTensorInfo(tt,"float32",Q.real),nt=n.makeTensorInfo(tt,"float32",Q.imag),rt=Fe({inputs:{real:et,imag:nt},backend:n}),ut=Xa({inputs:{a:rt,b:q},backend:n}),st=nn({inputs:{a:M,b:ut},backend:n}),pt=wp({inputs:{a:M,b:ut},backend:n}),St=yo({inputs:{input:st},backend:n}),Tt=yo({inputs:{input:pt},backend:n}),vt=sn({inputs:{input:st},backend:n}),_t=sn({inputs:{input:pt},backend:n}),Ot=qi({inputs:[St,Tt],backend:n,attrs:{axis:0}}),Jt=qi({inputs:[vt,_t],backend:n,attrs:{axis:0}}),ae=n.data.get(Ot.dataId).values,Ie=n.data.get(Jt.dataId).values;return n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(y),n.disposeIntermediateTensorInfo(w),n.disposeIntermediateTensorInfo(C),n.disposeIntermediateTensorInfo(_),n.disposeIntermediateTensorInfo(L),n.disposeIntermediateTensorInfo(M),n.disposeIntermediateTensorInfo(K),n.disposeIntermediateTensorInfo(Z),n.disposeIntermediateTensorInfo(q),n.disposeIntermediateTensorInfo(et),n.disposeIntermediateTensorInfo(nt),n.disposeIntermediateTensorInfo(rt),n.disposeIntermediateTensorInfo(ut),n.disposeIntermediateTensorInfo(st),n.disposeIntermediateTensorInfo(pt),n.disposeIntermediateTensorInfo(St),n.disposeIntermediateTensorInfo(vt),n.disposeIntermediateTensorInfo(Tt),n.disposeIntermediateTensorInfo(_t),n.disposeIntermediateTensorInfo(Ot),n.disposeIntermediateTensorInfo(Jt),{real:ae,imag:Ie}}function o4(r,e,t){let o=new Float32Array(e*2);for(let n=0;n<e;n++){let s=0,i=0;for(let a=0;a<e;a++){let l=v.exponent(n*a,e,t),u=v.getComplexWithIndex(r,a);s+=u.real*l.real-u.imag*l.imag,i+=u.real*l.imag+u.imag*l.real}t&&(s/=e,i/=e),v.assignToTypedArray(o,s,i,n)}return o}function n4(r){let{inputs:e,backend:t}=r,{input:o}=e,n=b.sizeFromShape(o.shape),s=o.shape[o.shape.length-1],i=n/s,a=Rt({inputs:{x:o},backend:t,attrs:{shape:[i,s]}}),l=Nh(a,!1,t),u=Rt({inputs:{x:l},backend:t,attrs:{shape:o.shape}});return t.disposeIntermediateTensorInfo(a),t.disposeIntermediateTensorInfo(l),u}var Ik={kernelName:Fl,backendName:"cpu",kernelFunc:n4};function Np(r){let{backend:e,attrs:t}=r,{shape:o,value:n,dtype:s}=t,i=s||b.inferDtype(n),a=b.getArrayFromDType(i,b.sizeFromShape(o));return s4(a,n,i),e.makeTensorInfo(o,i,a)}var Tk={kernelName:_l,backendName:"cpu",kernelFunc:Np};function s4(r,e,t){r.fill(e)}var kk={kernelName:Ol,backendName:"cpu",kernelFunc:({inputs:r,attrs:e,backend:t})=>{let{image:o}=r,n=t,s=b.getTypedArrayFromDType(o.dtype,b.sizeFromShape(o.shape)),[i,a,l,u]=o.shape,c=n.data.get(o.dataId).values;for(let m=0;m<i;m++){let f=m*l*a*u;for(let h=0;h<a;h++){let g=h*(l*u);for(let d=0;d<l;d++){let x=d*u;for(let y=0;y<u;y++){let w=Math.round(l-d-1),C=f+g+x+y,S=c[C];if(w>=0&&w<l){let E=w*u,A=f+g+E+y;S=c[A]}s[C]=S}}}}return{dataId:n.write(s,o.shape,o.dtype),shape:o.shape,dtype:o.dtype}}};function i4(r){let{inputs:e,backend:t,attrs:o}=r,{x:n,filter:s,bias:i,preluActivationWeights:a}=e,{strides:l,pad:u,dataFormat:c,dilations:p,dimRoundingMode:m,activation:f,leakyreluAlpha:h}=o,g=Sw({inputs:{x:n,filter:s},backend:t,attrs:{strides:l,pad:u,dataFormat:c,dilations:p,dimRoundingMode:m}});if(i){let d=g;if(c==="NCHW"&&i.shape.length===1&&i.shape[0]!==1){let x=Rt({inputs:{x:i},backend:t,attrs:{shape:[i.shape[0],1,1]}});g=nn({inputs:{a:g,b:x},backend:t}),t.disposeIntermediateTensorInfo(x)}else g=nn({inputs:{a:g,b:i},backend:t});t.disposeIntermediateTensorInfo(d)}if(f){let d=g;if(c==="NCHW"&&f==="prelu"&&a.shape.length===1&&a.shape[0]!==1){let x=Rt({inputs:{x:a},backend:t,attrs:{shape:[a.shape[0],1,1]}});g=Ya(t,g,f,x,h),t.disposeIntermediateTensorInfo(x)}else g=Ya(t,g,f,a,h);t.disposeIntermediateTensorInfo(d)}return g}var Ek={kernelName:ma,backendName:"cpu",kernelFunc:i4};function a4(r){let{inputs:e,backend:t,attrs:o}=r,{x:n,filter:s,bias:i,preluActivationWeights:a}=e,{strides:l,pad:u,dataFormat:c,dilations:p,dimRoundingMode:m,activation:f,leakyreluAlpha:h}=o,g=vw({inputs:{x:n,filter:s},backend:t,attrs:{strides:l,pad:u,dataFormat:c,dilations:p,dimRoundingMode:m}});if(i){let d=g;g=nn({inputs:{a:g,b:i},backend:t}),t.disposeIntermediateTensorInfo(d)}if(f){let d=g;g=Ya(t,g,f,a,h),t.disposeIntermediateTensorInfo(d)}return g}var Ak={kernelName:fa,backendName:"cpu",kernelFunc:a4};function l4(r){let{inputs:e,backend:t}=r,{params:o,indices:n}=e,s=b.sizeFromShape(o.shape),i=n.shape,a=i[i.length-1],[l,u,c,p]=v.prepareAndValidate(o,n);if(u===0)return t.makeTensorInfo(l,o.dtype,[]);let m=t.data.get(n.dataId).values,f=t.bufferSync(o),h=sh(m,f,o.dtype,u,a,c,p,o.shape,s);return t.makeTensorInfo(l,o.dtype,h.values)}var $k={kernelName:qp,backendName:"cpu",kernelFunc:l4};function u4(r){let{inputs:e,backend:t,attrs:o}=r,{x:n,indices:s}=e,{axis:i,batchDims:a}=o;X([n,s],"gatherV2");let l=b.parseAxisParam(i,n.shape)[0],u=t.data.get(s.dataId).values,c=n.shape[l];for(let C=0;C<u.length;++C){let S=u[C];b.assert(S<=c-1&&S>=0,()=>`GatherV2: the index value ${S} is not in [0, ${c-1}]`)}let p=a;a==null&&(p=0);let m=b.sizeFromShape(s.shape),f=v.segment_util.collectGatherOpShapeInfo(n,s,l,p),h=Rt({inputs:{x:n},backend:t,attrs:{shape:[f.batchSize,f.outerSize,f.dimSize,f.sliceSize]}}),g=Rt({inputs:{x:s},backend:t,attrs:{shape:[f.batchSize,m/f.batchSize]}}),d=[f.batchSize,f.outerSize,m/f.batchSize,f.sliceSize],x=t.bufferSync(g),y=t.bufferSync(h),w=ih(y,x,d);return t.disposeIntermediateTensorInfo(h),t.disposeIntermediateTensorInfo(g),t.makeTensorInfo(f.outputShape,w.dtype,w.values)}var Dk={kernelName:ei,backendName:"cpu",kernelFunc:u4};function c4(r){let{inputs:e,backend:t}=r,{input:o}=e,n=b.sizeFromShape(o.shape),s=o.shape[o.shape.length-1],i=n/s,a=Rt({inputs:{x:o},backend:t,attrs:{shape:[i,s]}}),l=Nh(a,!0,t),u=Rt({inputs:{x:l},backend:t,attrs:{shape:o.shape}});return t.disposeIntermediateTensorInfo(a),t.disposeIntermediateTensorInfo(l),u}var Rk={kernelName:Ll,backendName:"cpu",kernelFunc:c4};var p4=wt(Fn,r=>Number.isFinite(r)?1:0,"bool"),Fk={kernelName:Fn,backendName:"cpu",kernelFunc:p4};var m4=wt(_n,r=>Math.abs(r)===1/0?1:0,"bool"),_k={kernelName:_n,backendName:"cpu",kernelFunc:m4};var f4=wt(On,r=>Number.isNaN(r)?1:0,"bool"),Ok={kernelName:On,backendName:"cpu",kernelFunc:f4};function h4(r){let{backend:e,attrs:t}=r,{start:o,stop:n,num:s}=t,i=ah(o,n,s);return e.makeTensorInfo([i.length],"float32",i)}var Lk={kernelName:Kp,backendName:"cpu",kernelFunc:h4};var d4=wt(Pn,r=>Math.log1p(r)),Pk={kernelName:Pn,backendName:"cpu",kernelFunc:d4};var g4=Dt((r,e)=>r&&e),x4=Pt(aa,g4,null,"bool"),zk={kernelName:aa,backendName:"cpu",kernelFunc:x4};var y4=wt(la,r=>r?0:1,"bool"),Mk={kernelName:la,backendName:"cpu",kernelFunc:y4};var b4=Dt((r,e)=>r||e),w4=Pt(ua,b4,null,"bool"),Bk={kernelName:ua,backendName:"cpu",kernelFunc:w4};function C4(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{depthRadius:s,bias:i,alpha:a,beta:l}=o;X(n,"LRN");let u=n.shape[3],c=u-1,p=t.data.get(n.dataId).values,m=b.sizeFromShape(n.shape),f=new Float32Array(m);function h(g){let d=g%u,x=g-d+Math.max(0,d-s),y=g-d+Math.min(d+s,c),w=0;for(;x<=y;x++){let C=p[x];w+=C*C}return w}for(let g=0;g<m;g++){let d=h(g),x=p[g]*Math.pow(i+a*d,-l);f[g]=x}return t.makeTensorInfo(n.shape,n.dtype,f)}var Vk={kernelName:oi,backendName:"cpu",kernelFunc:C4};function S4(r){let{inputs:e,backend:t,attrs:o}=r,{x:n,y:s,dy:i}=e,{depthRadius:a,bias:l,alpha:u,beta:c}=o;X(i,"LRNGrad");let p=b.sizeFromShape(i.shape),m=i.shape[3],f=t.data.get(i.dataId).values,h=t.data.get(n.dataId).values,g=t.data.get(s.dataId).values,d=new Float32Array(p),x=p;for(let y=0;y<x;y++){let w=y%m,C=y-w+Math.max(0,w-a),S=y-w+Math.min(m,w+a+1),E=0;for(let A=C;A<S;A++)E+=Math.pow(h[A],2);E=u*E+l;for(let A=C;A<S;A++){let $=-2*u*c*h[A]*g[y]/E;y===A&&($+=Math.pow(E,-c)),$*=f[y],d[A]+=$}}return t.makeTensorInfo(i.shape,n.dtype,d)}var Gk={kernelName:zl,backendName:"cpu",kernelFunc:S4};function Iw(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{reductionIndices:s,keepDims:i}=o,a=t,l=n.shape,u=l.length,c=b.parseAxisParam(s,l),p=c,m=v.getAxesPermutation(p,u),f=a.data.get(n.dataId).values;if(m!=null){let C=new Array(u);for(let S=0;S<C.length;S++)C[S]=l[m[S]];f=ju(f,l,n.dtype,m,C),p=v.getInnerMostAxes(p.length,u),l=C}X(n,"max"),v.assertAxesAreInnerMostDims("max",p,u);let[h,g]=v.computeOutAndReduceShapes(l,p),d=b.sizeFromShape(g),x=lh(f,d,h,n.dtype),y=a.write(x,h,n.dtype),w=h;return i&&(w=v.expandShapeToKeepDim(h,c)),{dataId:y,shape:w,dtype:n.dtype}}var Wk={kernelName:ni,backendName:"cpu",kernelFunc:Iw};function v4(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e;X(n,"maxPool");let{filterSize:s,strides:i,pad:a,dimRoundingMode:l}=o,u=1;b.assert(v.eitherStridesOrDilationsAreOne(i,u),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${u}'`);let c=v.computePool2DInfo(n.shape,s,i,u,a,l),p;if(c.filterWidth===1&&c.filterHeight===1&&b.arraysEqual(c.inShape,c.outShape))p=er({inputs:{x:n},backend:t});else{let m=t.data.get(n.dataId).values,f=b.computeStrides(n.shape),h=Yu(m,n.shape,n.dtype,f,c,"max");p=t.makeTensorInfo(c.outShape,n.dtype,h.values)}return p}var Uk={kernelName:si,backendName:"cpu",kernelFunc:v4};function N4(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{filterSize:s,strides:i,pad:a,dimRoundingMode:l,dataFormat:u}=o;X(n,"maxPool3d");let c=v.computePool3DInfo(n.shape,s,i,1,a,l,u),p=t.data.get(n.dataId).values,m=vh(p,n.shape,n.dtype,b.computeStrides(n.shape),c,"max");return t.makeTensorInfo(m.shape,"float32",m.values)}var Hk={kernelName:ii,backendName:"cpu",kernelFunc:N4};function I4(r){let{inputs:e,backend:t,attrs:o}=r,{dy:n,input:s}=e,{filterSize:i,strides:a,pad:l,dimRoundingMode:u}=o;X([n,s],"maxPool3DGrad");let c=v.computePool3DInfo(s.shape,i,a,1,l,u),p=t.bufferSync(s),m=B1(p,c),f=c.strideDepth,h=c.strideHeight,g=c.strideWidth,d=c.dilationDepth,x=c.dilationHeight,y=c.dilationWidth,w=c.effectiveFilterDepth,C=c.effectiveFilterHeight,S=c.effectiveFilterWidth,E=w-1-c.padInfo.front,A=S-1-c.padInfo.left,$=C-1-c.padInfo.top,_=ft(s.shape,"float32"),L=t.bufferSync(n);for(let M=0;M<c.batchSize;++M)for(let V=0;V<c.inChannels;++V)for(let G=0;G<c.inDepth;++G)for(let W=0;W<c.inHeight;++W)for(let U=0;U<c.inWidth;++U){let K=G-E,Z=W-$,q=U-A,Q=0;for(let tt=0;tt<w;tt+=d){let et=(K+tt)/f;if(!(et<0||et>=c.outDepth||Math.floor(et)!==et))for(let nt=0;nt<C;nt+=x){let rt=(Z+nt)/h;if(!(rt<0||rt>=c.outHeight||Math.floor(rt)!==rt))for(let ut=0;ut<S;ut+=y){let st=(q+ut)/g;if(st<0||st>=c.outWidth||Math.floor(st)!==st)continue;let pt=w*C*S-1-m.get(M,et,rt,st,V),St=tt*C*S+nt*S+ut,Tt=pt===St?1:0;if(Tt===0)continue;let vt=L.get(M,et,rt,st,V);Q+=vt*Tt}}}_.set(Q,M,G,W,U,V)}return t.makeTensorInfo(_.shape,_.dtype,_.values)}var qk={kernelName:Bl,backendName:"cpu",kernelFunc:I4};function T4(r){let{inputs:e,backend:t,attrs:o}=r,{dy:n,input:s,output:i}=e,a=s;X([s,i],"maxPoolGrad");let{filterSize:l,strides:u,pad:c,dimRoundingMode:p}=o,m=v.computePool2DInfo(a.shape,l,u,1,c,p),f=t.data.get(a.dataId).values,h=ft(m.outShape,a.dtype,Sh(f,a.shape,a.dtype,m).values),g=m.strideHeight,d=m.strideWidth,x=m.dilationHeight,y=m.dilationWidth,w=m.effectiveFilterHeight,C=m.effectiveFilterWidth,S=C-1-m.padInfo.left,E=w-1-m.padInfo.top,A=ft(a.shape,"float32"),$=t.data.get(n.dataId).values,_=ft(n.shape,"float32",$);for(let L=0;L<m.batchSize;++L)for(let M=0;M<m.inChannels;++M)for(let V=0;V<m.inHeight;++V)for(let G=0;G<m.inWidth;++G){let W=V-E,U=G-S,K=0;for(let Z=0;Z<w;Z+=x){let q=(W+Z)/g;if(!(q<0||q>=m.outHeight||Math.floor(q)!==q))for(let Q=0;Q<C;Q+=y){let tt=(U+Q)/d;if(tt<0||tt>=m.outWidth||Math.floor(tt)!==tt)continue;let et=w*C-1-h.get(L,q,tt,M),nt=Z*C+Q,rt=et===nt?1:0;if(rt===0)continue;let ut=_.get(L,q,tt,M);K+=ut*rt}}A.set(K,L,V,G,M)}return t.makeTensorInfo(A.shape,A.dtype,A.values)}var Kk={kernelName:Ml,backendName:"cpu",kernelFunc:T4};function jk(r,e,t,o,n){let s=b.computeStrides(e),i=Yu(r,e,t,s,n,"max"),a=Sh(r,e,t,n,!0,o);return[i.values,a.values]}var Xk={kernelName:jp,backendName:"cpu",kernelFunc:({inputs:r,attrs:e,backend:t})=>{let{x:o}=r,{filterSize:n,strides:s,pad:i,includeBatchInIndex:a}=e,l=t;X(o,"MaxPoolWithArgmax");let u=l.data.get(o.dataId).values,c=v.computePool2DInfo(o.shape,n,s,[1,1],i),[p,m]=jk(u,o.shape,o.dtype,a,c),f=l.write(p,c.outShape,o.dtype),h=l.write(m,c.outShape,o.dtype);return[{dataId:f,shape:c.outShape,dtype:o.dtype},{dataId:h,shape:c.outShape,dtype:"int32"}]}};function k4(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{axis:s,keepDims:i}=o,a=b.parseAxisParam(s,n.shape),u=v.computeOutAndReduceShapes(n.shape,a)[1],c=b.sizeFromShape(u),p=[],m=t.makeTensorInfo([],"float32",new Float32Array([c]));p.push(m);let f=bo({inputs:{x:n},backend:t,attrs:{dtype:"float32"}});p.push(f);let h=Sp({inputs:{a:f,b:m},backend:t});p.push(h);let g=Ts({inputs:{x:h},backend:t,attrs:{axis:s,keepDims:i}});return p.forEach(d=>t.disposeIntermediateTensorInfo(d)),g}var Yk={kernelName:ai,backendName:"cpu",kernelFunc:k4};function E4(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{axis:s,keepDims:i}=o;X(n,"min");let a=b.parseAxisParam(s,n.shape),l=a,u=v.getAxesPermutation(l,n.shape.length),c=n;u!=null&&(c=me({inputs:{x:n},backend:t,attrs:{perm:u}}),l=v.getInnerMostAxes(l.length,n.shape.length)),v.assertAxesAreInnerMostDims("min",l,c.shape.length);let[p,m]=v.computeOutAndReduceShapes(c.shape,l),f=b.sizeFromShape(m),h=b.makeZerosTypedArray(b.sizeFromShape(p),c.dtype),g=t.data.get(c.dataId).values;for(let x=0;x<h.length;++x){let y=x*f,w=g[y];for(let C=0;C<f;++C){let S=g[y+C];(Number.isNaN(S)||S<w)&&(w=S)}h[x]=w}u!=null&&t.disposeIntermediateTensorInfo(c);let d=t.makeTensorInfo(p,c.dtype,h);if(i){let x=v.expandShapeToKeepDim(p,a),y=Rt({inputs:{x:d},backend:t,attrs:{shape:x}});return t.disposeIntermediateTensorInfo(d),y}return d}var Zk={kernelName:li,backendName:"cpu",kernelFunc:E4};function A4(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{paddings:s,mode:i}=o;X(n,"mirrorPad");let a=s.map((w,C)=>w[0]+n.shape[C]+w[1]),l=s.map(w=>w[0]),u=s.map((w,C)=>w[0]+n.shape[C]),c=i==="reflect"?0:1,p=t.data.get(n.dataId).values,m=n.shape.length,f=b.computeStrides(n.shape),h=b.sizeFromShape(a),g=a.length,d=b.computeStrides(a),x=b.getTypedArrayFromDType(n.dtype,h);for(let w=0;w<h;w++){let C=b.indexToLoc(w,g,d);for(let E=0;E<g;E++)C[E]<l[E]?C[E]=l[E]*2-C[E]-c:C[E]>=u[E]&&(C[E]=(u[E]-1)*2-C[E]+c);C=C.map((E,A)=>E-l[A]);let S=b.locToIndex(C,m,f);x[w]=p[S]}return{dataId:t.write(x,a,n.dtype),shape:a,dtype:n.dtype}}var Qk={kernelName:ui,backendName:"cpu",kernelFunc:A4};var $4=Dt((r,e)=>{let t=r%e;return r<0&&e<0||r>=0&&e>=0?t:(t+e)%e}),D4=Pt(Bn,$4),Jk={kernelName:Bn,backendName:"cpu",kernelFunc:D4};var eE=xc(Uc());function Tw(r){let{inputs:e,backend:t,attrs:o}=r,{logits:n}=e,{dim:s}=o,i=n.shape.length,a=s;if(a===-1&&(a=i-1),a!==i-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${i} and dim was ${a}`);let l=b.parseAxisParam([a],n.shape),u=Iw({inputs:{x:n},backend:t,attrs:{reductionIndices:l,keepDims:!1}}),c=v.expandShapeToKeepDim(u.shape,l),p=Rt({inputs:{x:u},backend:t,attrs:{shape:c}}),m=wp({inputs:{a:n,b:p},backend:t}),f=Kb({inputs:{x:m},backend:t}),h=Ts({inputs:{x:f},backend:t,attrs:{axis:l,keepDims:!1}}),g=Rt({inputs:{x:h},backend:t,attrs:{shape:c}}),d=Sp({inputs:{a:f,b:g},backend:t});return t.disposeIntermediateTensorInfo(u),t.disposeIntermediateTensorInfo(p),t.disposeIntermediateTensorInfo(m),t.disposeIntermediateTensorInfo(f),t.disposeIntermediateTensorInfo(h),t.disposeIntermediateTensorInfo(g),d}var tE={kernelName:Ti,backendName:"cpu",kernelFunc:Tw};function R4(r){let{inputs:e,backend:t,attrs:o}=r,{logits:n}=e,{numSamples:s,seed:i,normalized:a}=o;X(n,"multinomial");let l=a?n:Tw({inputs:{logits:n},backend:t,attrs:{dim:-1}}),u=l.shape[0],c=l.shape[1],p=t.data.get(l.dataId).values,m=[u,s],f=b.makeZerosTypedArray(b.sizeFromShape(m),"int32");for(let h=0;h<u;++h){let g=h*c,d=new Float32Array(c-1);d[0]=p[g];for(let w=1;w<d.length;++w)d[w]=d[w-1]+p[g+w];let x=eE.alea(i.toString()),y=h*s;for(let w=0;w<s;++w){let C=x();f[y+w]=d.length;for(let S=0;S<d.length;S++)if(C<d[S]){f[y+w]=S;break}}}return a||t.disposeIntermediateTensorInfo(l),t.makeTensorInfo(m,"int32",f)}var rE={kernelName:Xp,backendName:"cpu",kernelFunc:R4};var F4=tr.nonMaxSuppressionV3Impl;function _4(r){let{inputs:e,backend:t,attrs:o}=r,{boxes:n,scores:s}=e,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l}=o;X(n,"NonMaxSuppression");let u=t.data.get(n.dataId).values,c=t.data.get(s.dataId).values,{selectedIndices:p}=F4(u,c,i,a,l);return t.makeTensorInfo([p.length],"int32",new Int32Array(p))}var oE={kernelName:Vl,backendName:"cpu",kernelFunc:_4};var O4=tr.nonMaxSuppressionV4Impl;function L4(r){let{inputs:e,backend:t,attrs:o}=r,{boxes:n,scores:s}=e,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,padToMaxOutputSize:u}=o;X(n,"NonMaxSuppressionPadded");let c=t.data.get(n.dataId).values,p=t.data.get(s.dataId).values,{selectedIndices:m,validOutputs:f}=O4(c,p,i,a,l,u);return[t.makeTensorInfo([m.length],"int32",new Int32Array(m)),t.makeTensorInfo([],"int32",new Int32Array([f]))]}var nE={kernelName:Gl,backendName:"cpu",kernelFunc:L4};var P4=tr.nonMaxSuppressionV5Impl;function z4(r){let{inputs:e,backend:t,attrs:o}=r,{boxes:n,scores:s}=e,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,softNmsSigma:u}=o;X(n,"NonMaxSuppressionWithScore");let c=t.data.get(n.dataId).values,p=t.data.get(s.dataId).values,m=i,f=a,h=l,g=u,{selectedIndices:d,selectedScores:x}=P4(c,p,m,f,h,g);return[t.makeTensorInfo([d.length],"int32",new Int32Array(d)),t.makeTensorInfo([x.length],"float32",new Float32Array(x))]}var sE={kernelName:Wl,backendName:"cpu",kernelFunc:z4};function M4(r){let{inputs:e,backend:t,attrs:o}=r,{indices:n}=e,{dtype:s,depth:i,onValue:a,offValue:l}=o;X(n,"oneHot");let u=b.sizeFromShape(n.shape),c=new Float32Array(u*i);c.fill(l);let p=t.data.get(n.dataId).values;for(let m=0;m<u;++m)p[m]>=0&&p[m]<i&&(c[m*i+p[m]]=a);return t.makeTensorInfo([...n.shape,i],s,c)}var iE={kernelName:mi,backendName:"cpu",kernelFunc:M4};function Ip(r){let{inputs:e,backend:t}=r,{x:o}=e;if(o.dtype==="string")throw new Error("zerosLike is not supported for string tensors");if(o.dtype==="complex64"){let n=yo({inputs:{input:o},backend:t}),s=Ip({inputs:{x:n},backend:t}),i=sn({inputs:{input:o},backend:t}),a=Ip({inputs:{x:i},backend:t}),l=Fe({inputs:{real:s,imag:a},backend:t});return t.disposeIntermediateTensorInfo(n),t.disposeIntermediateTensorInfo(s),t.disposeIntermediateTensorInfo(i),t.disposeIntermediateTensorInfo(a),l}else return Np({backend:t,attrs:{shape:o.shape,value:0,dtype:o.dtype}})}var aE={kernelName:Ai,backendName:"cpu",kernelFunc:Ip};function lE(r){let{inputs:e,backend:t}=r,{x:o}=e;if(o.dtype==="string")throw new Error("onesLike is not supported for string tensors");if(o.dtype==="complex64"){let n=yo({inputs:{input:o},backend:t}),s=lE({inputs:{x:n},backend:t}),i=sn({inputs:{input:o},backend:t}),a=Ip({inputs:{x:i},backend:t}),l=Fe({inputs:{real:s,imag:a},backend:t});return t.disposeIntermediateTensorInfo(n),t.disposeIntermediateTensorInfo(s),t.disposeIntermediateTensorInfo(i),t.disposeIntermediateTensorInfo(a),l}else return Np({backend:t,attrs:{shape:o.shape,value:1,dtype:o.dtype}})}var uE={kernelName:pi,backendName:"cpu",kernelFunc:lE};function kw(r){let{inputs:e,backend:t,attrs:o}=r,{axis:n}=o;if(e.length===1)return Zu({inputs:{input:e[0]},backend:t,attrs:{dim:n}});let s=e[0].shape,i=e[0].dtype;e.forEach(c=>{b.assertShapesMatch(s,c.shape,"All tensors passed to stack must have matching shapes"),b.assert(i===c.dtype,()=>"All tensors passed to stack must have matching dtypes")});let a=[],l=e.map(c=>{let p=Zu({inputs:{input:c},backend:t,attrs:{dim:n}});return a.push(p),p}),u=qi({inputs:l,backend:t,attrs:{axis:n}});return a.forEach(c=>t.disposeIntermediateTensorInfo(c)),u}var cE={kernelName:fi,backendName:"cpu",kernelFunc:kw};function B4(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{paddings:s,constantValue:i}=o;X(n,"pad");let a=s.map((y,w)=>y[0]+n.shape[w]+y[1]),l=s.map(y=>y[0]),u=t.data.get(n.dataId).values,c=b.sizeFromShape(n.shape),p=n.shape.length,m=b.computeStrides(n.shape),f=b.sizeFromShape(a),h=a.length,g=b.computeStrides(a),d=b.getTypedArrayFromDType(n.dtype,f);i!==0&&d.fill(i);for(let y=0;y<c;y++){let C=b.indexToLoc(y,p,m).map((E,A)=>E+l[A]),S=b.locToIndex(C,h,g);d[S]=u[y]}return{dataId:t.write(d,a,n.dtype),shape:a,dtype:n.dtype}}var Ih={kernelName:hi,backendName:"cpu",kernelFunc:B4};var V4=Dt((r,e)=>Math.pow(r,e)),G4=Pt(Gn,V4),pE={kernelName:Gn,backendName:"cpu",kernelFunc:G4};function W4(r){let{inputs:e,backend:t,attrs:o}=r,{paramsNestedSplits:n,paramsDenseValues:s,indices:i}=e,{outputRaggedRank:a}=o,l=n.map(x=>t.data.get(x.dataId).values),u=n.map(x=>x.shape),c=t.data.get(s.dataId).values,p=t.data.get(i.dataId).values,[m,f,h]=uh(l,u,c,s.shape,s.dtype,p,i.shape,a),g=m.map(x=>t.makeTensorInfo([x.length],"int32",x)),d=t.makeTensorInfo(h,s.dtype,f);return g.concat([d])}var mE={kernelName:Yp,backendName:"cpu",kernelFunc:W4};function U4(r){let{inputs:e,backend:t}=r,{starts:o,limits:n,deltas:s}=e,i=t.data.get(o.dataId).values,a=t.data.get(n.dataId).values,l=t.data.get(s.dataId).values,[u,c]=ch(i,o.shape,o.dtype,a,n.shape,l,s.shape),p=t.makeTensorInfo([u.length],"int32",u),m=t.makeTensorInfo([c.length],o.dtype,c);return[p,m]}var fE={kernelName:Zp,backendName:"cpu",kernelFunc:U4};function H4(r){let{inputs:e,backend:t,attrs:o}=r,{shape:n,values:s,defaultValue:i,rowPartitionTensors:a}=e,{rowPartitionTypes:l}=o,u=t.data.get(n.dataId).values,c=t.data.get(s.dataId).values,p=t.data.get(i.dataId).values,m=a.map(d=>t.data.get(d.dataId).values),f=a.map(d=>d.shape),[h,g]=ph(u,n.shape,c,s.shape,s.dtype,p,i.shape,m,f,l);return t.makeTensorInfo(h,s.dtype,g)}var hE={kernelName:Qp,backendName:"cpu",kernelFunc:H4};function q4(r){let{backend:e,attrs:t}=r,{start:o,stop:n,dtype:s,step:i}=t,a=mh(o,n,i,s);return e.makeTensorInfo([a.length],s,a)}var dE={kernelName:Ul,backendName:"cpu",kernelFunc:q4};var K4=wt(Wn,r=>1/r),gE={kernelName:Wn,backendName:"cpu",kernelFunc:K4};function j4(r){let{inputs:e,backend:t,attrs:o}=r,{images:n}=e,{alignCorners:s,halfPixelCenters:i,size:a}=o;X(n,"resizeBilinear");let l=b.computeStrides(n.shape),[u,c]=a,[p,m,f,h]=n.shape,g=t.data.get(n.dataId).values,d=new Float32Array(b.sizeFromShape([p,u,c,h])),x=[s&&u>1?m-1:m,s&&c>1?f-1:f],y=[s&&u>1?u-1:u,s&&c>1?c-1:c],w=0,C=x[0]/y[0],S=x[1]/y[1];for(let E=0;E<p;E++)for(let A=0;A<u;A++){let $;i?$=C*(A+.5)-.5:$=C*A;let _=Math.max(0,Math.floor($)),L=$-_,M=Math.min(m-1,Math.ceil($)),V=E*l[0]+_*l[1],G=E*l[0]+M*l[1];for(let W=0;W<c;W++){let U;i?U=S*(W+.5)-.5:U=S*W;let K=Math.max(0,Math.floor(U)),Z=U-K,q=Math.min(f-1,Math.ceil(U)),Q=V+K*l[2],tt=G+K*l[2],et=V+q*l[2],nt=G+q*l[2];for(let rt=0;rt<h;rt++){let ut=g[Q+rt],st=g[tt+rt],pt=g[et+rt],St=g[nt+rt],Tt=ut+(pt-ut)*Z,vt=st+(St-st)*Z,_t=Tt+(vt-Tt)*L;d[w++]=_t}}}return t.makeTensorInfo([p,u,c,h],"float32",d)}var xE={kernelName:bi,backendName:"cpu",kernelFunc:j4};function X4(r){let{inputs:e,backend:t,attrs:o}=r,{images:n,dy:s}=e,{alignCorners:i}=o;X([s,n],"resizeBilinearGrad");let a=b.computeStrides(n.shape),[l,u,c,p]=n.shape,[,m,f]=s.shape,h=new Float32Array(l*u*c*p),g=[i&&m>1?u-1:u,i&&f>1?c-1:c],d=[i&&m>1?m-1:m,i&&f>1?f-1:f],x=g[0]/d[0],y=g[1]/d[1],w=t.data.get(s.dataId).values,C=0;for(let S=0;S<l;S++){let E=S*a[0];for(let A=0;A<m;A++){let $=A*x,_=Math.floor($),L=Math.min(Math.ceil($),u-1),M=E+_*a[1],V=E+L*a[1],G=$-_,W=1-G;for(let U=0;U<f;U++){let K=U*y,Z=Math.floor(K),q=Math.min(Math.ceil(K),c-1),Q=K-Z,tt=1-Q,et=M+Z*a[2],nt=M+q*a[2],rt=V+Z*a[2],ut=V+q*a[2],st=W*tt,pt=W*Q,St=G*tt,Tt=G*Q;for(let vt=0;vt<p;vt++){let _t=w[C++];h[et+vt]+=_t*st,h[nt+vt]+=_t*pt,h[rt+vt]+=_t*St,h[ut+vt]+=_t*Tt}}}}return t.makeTensorInfo([l,c,u,p],"float32",h)}var yE={kernelName:Kl,backendName:"cpu",kernelFunc:X4};function Y4(r){let{inputs:e,backend:t,attrs:o}=r,{images:n}=e,{alignCorners:s,halfPixelCenters:i,size:a}=o;X(n,"resizeNearestNeighbor");let l=b.computeStrides(n.shape),[u,c]=a,[p,m,f,h]=n.shape,g=t.data.get(n.dataId).values,d=new Float32Array(p*u*c*h),x=[s&&u>1?m-1:m,s&&c>1?f-1:f],y=[s&&u>1?u-1:u,s&&c>1?c-1:c],w=x[0]/y[0],C=x[1]/y[1],S=0;for(let E=0;E<p;E++){let A=E*l[0];for(let $=0;$<u;$++){let _=i?w*($+.5):w*$,L=Math.min(m-1,s?Math.round(_):Math.floor(_));i&&(L=Math.max(0,L));let M=A+L*l[1];for(let V=0;V<c;V++){let G=i?C*(V+.5):C*V,W=Math.min(f-1,s?Math.round(G):Math.floor(G));i&&(W=Math.max(0,W));let U=M+W*l[2];for(let K=0;K<h;K++){let Z=g[U+K];d[S++]=Z}}}}return t.makeTensorInfo([p,u,c,h],n.dtype,d)}var bE={kernelName:yi,backendName:"cpu",kernelFunc:Y4};function Z4(r){let{inputs:e,backend:t,attrs:o}=r,{images:n,dy:s}=e,{alignCorners:i}=o;X([s,n],"resizeNearestNeighborGrad");let a=b.computeStrides(n.shape),l=b.computeStrides(s.shape),[u,c,p,m]=n.shape,[,f,h]=s.shape,g=new Float32Array(u*c*p*m),d=t.data.get(s.dataId).values,x=[i&&f>1?c-1:c,i&&h>1?p-1:p],y=[i&&f>1?f-1:f,i&&h>1?h-1:h],w=x[0]/y[0],C=x[1]/y[1],S=1/w,E=1/C,A=Math.ceil(S)*2+2,$=Math.ceil(E)*2+2;for(let _=0;_<u;_++){let L=_*a[0];for(let M=0;M<c;M++){let V=L+M*a[1],G=Math.floor(M*S),W=Math.floor(G-A/2);for(let U=0;U<p;U++){let K=V+U*a[2],Z=Math.floor(U*E),q=Math.floor(Z-$/2);for(let Q=0;Q<m;Q++){let tt=0;for(let et=0;et<A;et++){let nt=et+W;if(nt<0||nt>=f)continue;let rt=L+nt*l[1],ut=nt*w,st=Math.min(c-1,i?Math.round(ut):Math.floor(ut));if(M===st)for(let pt=0;pt<$;pt++){let St=pt+q;if(St<0||St>=h)continue;let Tt=rt+St*l[2],vt=St*C,_t=Math.min(p-1,i?Math.round(vt):Math.floor(vt));U===_t&&(tt+=d[Tt+Q])}}g[K+Q]=tt}}}}return t.makeTensorInfo(n.shape,n.dtype,g)}var wE={kernelName:ql,backendName:"cpu",kernelFunc:Z4};function Q4(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{dims:s}=o;X(n,"reverse");let i=n.shape.length,a=b.parseAxisParam(s,n.shape);if(i===0)return er({inputs:{x:n},backend:t});let l=new Ut(n.shape,n.dtype),u=t.bufferSync(n);for(let c=0;c<l.size;c++){let p=l.indexToLoc(c),m=p.slice();a.forEach(f=>m[f]=n.shape[f]-1-m[f]),l.set(u.get(...m),...p)}return t.makeTensorInfo(l.shape,l.dtype,l.values)}var CE={kernelName:wi,backendName:"cpu",kernelFunc:Q4};var SE={kernelName:Jl,backendName:"cpu",kernelFunc:({inputs:r,attrs:e,backend:t})=>{let{image:o}=r,{radians:n,fillValue:s,center:i}=e,a=t,l=b.getTypedArrayFromDType(o.dtype,b.sizeFromShape(o.shape)),[u,c,p,m]=o.shape,[f,h]=v.getImageCenter(i,c,p),g=255,d=Math.sin(n),x=Math.cos(n),y=a.data.get(o.dataId).values;for(let C=0;C<u;C++){let S=C*p*c*m;for(let E=0;E<c;E++){let A=E*(p*m);for(let $=0;$<p;$++){let _=$*m;for(let L=0;L<m;L++){let M=[u,E,$,L],V=M[2],G=M[1],W=(V-f)*x-(G-h)*d,U=(V-f)*d+(G-h)*x;W=Math.round(W+f),U=Math.round(U+h);let K=s;if(typeof s!="number"&&(L===3?K=g:K=s[L]),W>=0&&W<p&&U>=0&&U<c){let q=U*(p*m),Q=W*m,tt=S+q+Q+L;K=y[tt]}let Z=S+A+_+L;l[Z]=K}}}}return{dataId:a.write(l,o.shape,o.dtype),shape:o.shape,dtype:o.dtype}}};var J4=wt(qn,r=>{let e=Math.floor(r);return r-e<.5?Math.floor(r):r-e>.5?Math.ceil(r):e%2===0?e:e+1}),vE={kernelName:qn,backendName:"cpu",kernelFunc:J4};function tH(r){let{inputs:e,backend:t,attrs:o}=r,{indices:n,updates:s}=e,{shape:i}=o,{sliceRank:a,numUpdates:l,sliceSize:u,strides:c,outputSize:p}=v.calculateShapes(s,n,i),m=!0,f=t.bufferSync(n),h=t.bufferSync(s),g=zo(f,h,i,p,u,l,a,c,0,m);return t.makeTensorInfo(i,g.dtype,g.values)}var NE={kernelName:Jp,backendName:"cpu",kernelFunc:tH};function eH(r,e){let t=0,o=r.length,n=0;for(;t<o;)n=Math.floor((t+o)/2),r[n]<e?t=n+1:o=n;return o}function rH(r,e){let t=0,o=r.length,n=0;for(;t<o;)n=Math.floor((t+o)/2),r[n]<=e?t=n+1:o=n;return o}function IE(r,e,t,o,n,s){let i=b.getArrayFromDType("int32",t*n);for(let a=0;a<t;++a){let l=r.slice(a*o,(a+1)*o),u=a*n;for(let c=0;c<n;++c)i[u+c]=s==="left"?eH(l,e[c+u]):rH(l,e[c+u])}return i}function oH(r){let{inputs:e,backend:t,attrs:o}=r,{sortedSequence:n,values:s}=e,{side:i}=o,a=t.data.get(n.dataId).values,l=t.data.get(s.dataId).values,u=IE(a,l,n.shape[0],n.shape[1],s.shape[1],i);return t.makeTensorInfo(s.shape,"int32",u)}var TE={kernelName:em,backendName:"cpu",kernelFunc:oH};function nH(r){let{inputs:e,backend:t}=r,{condition:o,t:n,e:s}=e;X([o,n,s],"select");let i=o.shape.length,a=t.data.get(o.dataId).values,l=t.data.get(n.dataId).values,u=t.data.get(s.dataId).values,c=Te(n.dtype,s.dtype),p=b.makeZerosTypedArray(b.sizeFromShape(n.shape),c),m=0,f=i===0||i>1||n.shape.length===1?1:b.sizeFromShape(n.shape.slice(1));for(let h=0;h<a.length;h++)for(let g=0;g<f;g++)a[h]===1?p[m++]=l[h]:p[m++]=u[h];return t.makeTensorInfo(n.shape,c,p)}var kE={kernelName:Ci,backendName:"cpu",kernelFunc:nH};var sH=v.SELU_SCALEALPHA,iH=v.SELU_SCALE,aH=wt(jn,r=>r>=0?iH*r:sH*(Math.exp(r)-1)),EE={kernelName:jn,backendName:"cpu",kernelFunc:aH};var lH=wt(Zn,r=>r<0?-1:r>0?1:0),AE={kernelName:Zn,backendName:"cpu",kernelFunc:lH};var uH=wt(Xn,r=>Math.sin(r)),$E={kernelName:Xn,backendName:"cpu",kernelFunc:uH};var cH=wt(Yn,r=>Math.sinh(r)),DE={kernelName:Yn,backendName:"cpu",kernelFunc:cH};var pH=11920928955078125e-23,RE=Math.log(pH)+2,mH=wt(Jn,r=>{let e=r>-RE,t=r<RE,o=Math.exp(r),n;return t?n=o:e?n=r:n=Math.log(1+o),n}),FE={kernelName:Jn,backendName:"cpu",kernelFunc:mH};function fH(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{blockShape:s,paddings:i}=o;X([n],"spaceToBatchND");let a=b.sizeFromShape(s),l=[[0,0]];l.push(...i);for(let E=1+s.length;E<n.shape.length;++E)l.push([0,0]);let u=Ih.kernelFunc({inputs:{x:n},backend:t,attrs:{paddings:l,constantValue:0}}),c=v.getReshaped(u.shape,s,a,!1),p=v.getPermuted(c.length,s.length,!1),m=v.getReshapedPermuted(u.shape,s,a,!1),g=Rt({inputs:{x:u},backend:t,attrs:{shape:c}}),y=me({inputs:{x:g},backend:t,attrs:{perm:p}}),S=Rt({inputs:{x:y},backend:t,attrs:{shape:m}});return t.disposeIntermediateTensorInfo(u),t.disposeIntermediateTensorInfo(g),t.disposeIntermediateTensorInfo(y),S}var _E={kernelName:Ni,backendName:"cpu",kernelFunc:fH};function hH(r){let{inputs:e,backend:t}=r,{indices:o,values:n,denseShape:s,defaultValue:i}=e;if(s.shape.length!==1)throw new Error(`Dense shape must be a vector, saw:
        ${s.shape}`);if(o.shape.length!==2)throw new Error(`Indices must be a matrix, saw:
        ${o.shape}`);if(n.shape.length!==1)throw new Error(`Values must be a vector, saw:
        ${n.shape}`);if(i.shape.length!==0)throw new Error(`Default value must be a scalar, saw:
        ${i.shape}`);let a=t.data.get(o.dataId).values,l=t.data.get(n.dataId).values,u=t.data.get(s.dataId).values,c=t.data.get(i.dataId).values[0],[p,m,f,h,g]=fh(a,o.shape,o.dtype,l,n.dtype,u,c);return[t.makeTensorInfo(m,o.dtype,p),t.makeTensorInfo([m[0]],n.dtype,f),t.makeTensorInfo([h.length],"bool",new Uint8Array(h.map(d=>Number(d)))),t.makeTensorInfo([g.length],o.dtype,new Int32Array(g))]}var OE={kernelName:rm,backendName:"cpu",kernelFunc:hH};function dH(r){let{inputs:e,backend:t}=r,{inputIndices:o,inputShape:n,newShape:s}=e;if(o.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape
        ${o.shape}`);if(n.shape.length!==1)throw new Error(`Input shape should be a vector but received shape
        ${n.shape}`);if(s.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${s.shape}`);let i=Array.from(t.data.get(n.dataId).values),a=t.data.get(o.dataId).values,l=Array.from(t.data.get(s.dataId).values),[u,c,p]=hh(a,o.shape,o.dtype,i,l);return[t.makeTensorInfo(c,o.dtype,u),t.makeTensorInfo([p.length],s.dtype,new Int32Array(p))]}var LE={kernelName:om,backendName:"cpu",kernelFunc:dH};function gH(r){let{inputs:e,backend:t}=r,{data:o,indices:n,segmentIds:s}=e;if(o.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(n.shape.length!==1)throw new Error(`Indices should be a vector but received shape
          ${n.shape}`);if(s.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
          ${s.shape}`);if(n.shape[0]!==s.shape[0])throw new Error("segmentIds and indices should have same size.");let i=t.data.get(o.dataId).values,a=t.data.get(n.dataId).values,l=t.data.get(s.dataId).values,[u,c]=Xu(i,o.shape,o.dtype,a,l,!0);return t.makeTensorInfo(c,o.dtype,u)}var PE={kernelName:nm,backendName:"cpu",kernelFunc:gH};function xH(r){let{inputs:e,backend:t}=r,{data:o,indices:n,segmentIds:s}=e;if(o.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(n.shape.length!==1)throw new Error(`Indices should be a vector but received shape
         ${n.shape}`);if(s.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
         ${s.shape}`);if(n.shape[0]!==s.shape[0])throw new Error("segmentIds and indices should have same size.");let i=t.data.get(o.dataId).values,a=t.data.get(n.dataId).values,l=t.data.get(s.dataId).values,[u,c]=Xu(i,o.shape,o.dtype,a,l);return t.makeTensorInfo(c,o.dtype,u)}var zE={kernelName:sm,backendName:"cpu",kernelFunc:xH};function yH(r){let{inputs:e,backend:t,attrs:o}=r,{sparseIndices:n,sparseValues:s,defaultValue:i}=e,{outputShape:a}=o,{sliceRank:l,numUpdates:u,sliceSize:c,strides:p,outputSize:m}=v.calculateShapes(s,n,a),f=!1,h=t.bufferSync(n),g;switch(s.dtype){case"bool":{let d=t.bufferSync(s),x=!!t.data.get(i.dataId).values[0];g=zo(h,d,a,m,c,u,l,p,x,f);break}case"float32":{let d=t.bufferSync(s),x=t.data.get(i.dataId).values[0];g=zo(h,d,a,m,c,u,l,p,x,f);break}case"int32":{let d=t.bufferSync(s),x=t.data.get(i.dataId).values[0];g=zo(h,d,a,m,c,u,l,p,x,f);break}case"string":{let d=t.bufferSync(s),x=b.decodeString(t.data.get(i.dataId).values[0]);g=zo(h,d,a,m,c,u,l,p,x,f);break}default:throw new Error(`Unsupported type ${s.dtype}`)}return t.makeTensorInfo(a,g.dtype,g.values)}var ME={kernelName:im,backendName:"cpu",kernelFunc:yH};function bH(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{numOrSizeSplits:s,axis:i}=o,a=b.parseAxisParam(i,n.shape)[0],l=v.prepareSplitSize(n,s,a),u=new Array(n.shape.length).fill(0),c=n.shape.slice();return l.map(p=>{let m=[...c];m[a]=p;let f=Co({inputs:{x:n},backend:t,attrs:{begin:u,size:m}});return u[a]+=p,f})}var BE={kernelName:Ii,backendName:"cpu",kernelFunc:bH};var VE={kernelName:jl,backendName:"cpu",kernelFunc:({inputs:r,backend:e})=>{let{x:t}=r,o=e;X(t,"square");let n=o.data.get(t.dataId).values,s=new Float32Array(n.length);for(let a=0;a<n.length;++a){let l=n[a];s[a]=l*l}return{dataId:o.write(s,t.shape,t.dtype),shape:t.shape,dtype:t.dtype}}};var wH=wt(ss,(r,e)=>{let t=e;return isNaN(r)?NaN:r>0?1:t.alpha}),GE={kernelName:ss,backendName:"cpu",kernelFunc:wH};function CH(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{begin:s,end:i,strides:a,beginMask:l,endMask:u,ellipsisMask:c,newAxisMask:p,shrinkAxisMask:m}=o;X(n,"stridedSlice");let{finalShapeSparse:f,finalShape:h,isIdentity:g,sliceDim0:d,isSimpleSlice:x,begin:y,end:w,strides:C}=ze.sliceInfo(n.shape,s,i,a,l,u,c,p,m),S;if(g)S=Rt({inputs:{x:n},backend:t,attrs:{shape:h}});else if(d||x){b.assert(n.shape.length>=1,()=>`Input must have rank at least 1, got: ${n.shape.length}`);let E=ze.computeOutShape(y,w,C),A=Co({inputs:{x:n},backend:t,attrs:{begin:y,size:E}});S=Rt({inputs:{x:A},backend:t,attrs:{shape:h}}),t.disposeIntermediateTensorInfo(A)}else{let E=t.bufferSync(n),A=dh(f,E,C,y);S=t.makeTensorInfo(h,A.dtype,A.values)}return S}var WE={kernelName:Xl,backendName:"cpu",kernelFunc:CH};function SH(r){let{inputs:e,backend:t,attrs:o}=r,{separator:n,nGramWidths:s,leftPad:i,rightPad:a,padWidth:l,preserveShortSequences:u}=o,{data:c,dataSplits:p}=e,m=t.data.get(c.dataId).values,f=t.data.get(p.dataId).values,[h,g]=gh(m,f,n,s,i,a,l,u);return[t.makeTensorInfo([h.length],"string",h),t.makeTensorInfo(p.shape,"int32",g)]}var UE={kernelName:am,backendName:"cpu",kernelFunc:SH};function vH(r){let{inputs:e,backend:t,attrs:o}=r,{skipEmpty:n}=o,{input:s,delimiter:i}=e;if(s.dtype!=="string")throw new Error("Input must be of datatype string");if(s.shape.length!==1)throw new Error(`Input must be a vector, got shape: ${s.shape}`);if(i.shape.length!==0)throw new Error(`Delimiter must be a scalar, got shape: ${i.shape}`);let a=t.data.get(s.dataId).values,l=t.data.get(i.dataId).values[0],[u,c,p]=xh(a,l,n),m=c.length;return[t.makeTensorInfo([m,2],"int32",u),t.makeTensorInfo([m],"string",c),t.makeTensorInfo([2],"int32",new Int32Array(p))]}var HE={kernelName:lm,backendName:"cpu",kernelFunc:vH};function NH(r){let{inputs:e,backend:t,attrs:o}=r,{numBuckets:n}=o,{input:s}=e;if(s.dtype!=="string")throw new Error("Input must be of datatype string");if(n<=0)throw new Error("Number of buckets must be at least 1");let i=t.data.get(s.dataId).values,a=yh(i,n);return t.makeTensorInfo(s.shape,"int32",a)}var qE={kernelName:um,backendName:"cpu",kernelFunc:NH};var IH=wt(os,r=>Math.tan(r)),KE={kernelName:os,backendName:"cpu",kernelFunc:IH};var TH=wt(ns,r=>Math.tanh(r)),jE={kernelName:ns,backendName:"cpu",kernelFunc:TH};function kH(r){let{inputs:e,backend:t}=r,{tensor:o,indices:n,updates:s}=e,{sliceRank:i,numUpdates:a,sliceSize:l,strides:u,outputSize:c}=v.calculateShapes(s,n,o.shape),p=!1,m=t.bufferSync(n),f=t.bufferSync(s),h=t.bufferSync(o),g=zo(m,f,o.shape,c,l,a,i,u,h,p);return t.makeTensorInfo(o.shape,g.dtype,g.values)}var XE={kernelName:tm,backendName:"cpu",kernelFunc:kH};function EH(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{reps:s}=o;X(n,"tile");let i=bh(t.bufferSync(n),s);return t.makeTensorInfo(i.shape,i.dtype,i.values)}var YE={kernelName:Ho,backendName:"cpu",kernelFunc:EH};function AH(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{k:s,sorted:i}=o;X(n,"topk");let a=t.data.get(n.dataId).values,[l,u]=wh(a,n.shape,n.dtype,s,i);return[t.makeTensorInfo(l.shape,l.dtype,l.values),t.makeTensorInfo(u.shape,u.dtype,u.values)]}var ZE={kernelName:Yl,backendName:"cpu",kernelFunc:AH};function $H(r){let{inputs:e,attrs:t,backend:o}=r,{image:n,transforms:s}=e,{interpolation:i,fillMode:a,fillValue:l,outputShape:u}=t,[c,p,m,f]=n.shape,[h,g]=u??[p,m],d=[c,h,g,f],x=b.computeStrides(n.shape),y=x[0],w=x[1],C=x[2],S=b.computeStrides(d),E=S[0],A=S[1],$=S[2],_=b.getTypedArrayFromDType(n.dtype,b.sizeFromShape(d));_.fill(l);let L=o.data.get(n.dataId).values,M=o.data.get(s.dataId).values;for(let G=0;G<c;++G){let W=s.shape[0]===1?M:M.subarray(G*8,G*8+8);for(let U=0;U<h;++U)for(let K=0;K<g;++K)for(let Z=0;Z<f;++Z){let q,Q=W[6]*K+W[7]*U+1;if(Q===0)continue;let tt=(W[0]*K+W[1]*U+W[2])/Q,et=(W[3]*K+W[4]*U+W[5])/Q,nt=QE(tt,m,a),rt=QE(et,p,a);switch(i){case"nearest":q=OH(L,p,m,y,w,C,G,rt,nt,Z,l);break;case"bilinear":q=LH(L,p,m,y,w,C,G,rt,nt,Z,l);break;default:throw new Error(`Error in Transform: Expect 'nearest' or 'bilinear', but got ${i}`)}let ut=G*E+U*A+K*$+Z;_[ut]=q}return o.makeTensorInfo(d,n.dtype,_)}return{dataId:o.write(_,d,n.dtype),shape:n.shape,dtype:n.dtype}}var JE={kernelName:Zl,backendName:"cpu",kernelFunc:$H};function QE(r,e,t){switch(t){case"reflect":return DH(r,e);case"wrap":return RH(r,e);case"nearest":return _H(r,e);case"constant":default:return FH(r,e)}}function DH(r,e){let t=r;if(t<0)if(e<=1)t=0;else{let o=2*e;t<o&&(t=o*Math.trunc(-t/o)+t),t=t<-e?t+o:-t-1}else if(t>e-1)if(e<=1)t=0;else{let o=2*e;t-=o*Math.trunc(t/o),t>=e&&(t=o-t-1)}return b.clamp(0,t,e-1)}function RH(r,e){let t=r;if(t<0)if(e<=1)t=0;else{let o=e-1;t+=e*(Math.trunc(-t/o)+1)}else if(t>e-1)if(e<=1)t=0;else{let o=e-1;t-=e*Math.trunc(t/o)}return b.clamp(0,t,e-1)}function FH(r,e){return r}function _H(r,e){return b.clamp(0,r,e-1)}function Tp(r,e,t,o,n,s,i,a,l,u,c){let p=i*o+a*n+l*s+u;return 0<=a&&a<e&&0<=l&&l<t?r[p]:c}function OH(r,e,t,o,n,s,i,a,l,u,c){let p=Math.round(a),m=Math.round(l);return Tp(r,e,t,o,n,s,i,p,m,u,c)}function LH(r,e,t,o,n,s,i,a,l,u,c){let p=Math.floor(a),m=Math.floor(l),f=p+1,h=m+1,g=(h-l)*Tp(r,e,t,o,n,s,i,p,m,u,c)+(l-m)*Tp(r,e,t,o,n,s,i,p,h,u,c),d=(h-l)*Tp(r,e,t,o,n,s,i,f,m,u,c)+(l-m)*Tp(r,e,t,o,n,s,i,f,h,u,c);return(f-a)*g+(a-p)*d}function PH(r){let{inputs:e,attrs:t,backend:o}=r,{axis:n}=t,{x:s}=e;X(s,"unique");let i=o.data.get(s.dataId).values,{outputValues:a,outputShape:l,indices:u}=Ch(i,n,s.shape,s.dtype);return[o.makeTensorInfo(l,s.dtype,a),o.makeTensorInfo([u.length],"int32",u)]}var tA={kernelName:Ql,backendName:"cpu",kernelFunc:PH};function zH(r){let{inputs:e,backend:t,attrs:o}=r,{value:n}=e,{axis:s}=o;s<0&&(s+=n.shape.length);let i=n.shape.length,a=n.shape[s],l=new Array(i-1),u=0;for(let f=0;f<i;f++)f!==s&&(l[u++]=n.shape[f]);let c=new Array(i).fill(0),p=n.shape.slice();p[s]=1;let m=new Array(a);for(let f=0;f<m.length;f++){c[s]=f;let h=Co({inputs:{x:n},backend:t,attrs:{begin:c,size:p}});m[f]=Rt({inputs:{x:h},backend:t,attrs:{shape:l}}),t.disposeIntermediateTensorInfo(h)}return m}var eA={kernelName:ki,backendName:"cpu",kernelFunc:zH};function MH(r){let{inputs:e,backend:t,attrs:o}=r,{x:n,segmentIds:s}=e,{numSegments:i}=o;X(n,"unsortedSegmentSum");let a=n.shape.length,l=s.shape.length,u=[],c=[],p=a-l,m=s;for(let h=0;h<p;++h){let g=Zu({inputs:{input:m},backend:t,attrs:{dim:h+1}});m=g,c.push(g)}for(let h=0;h<i;++h){let g=b.createScalarValue(h,"int32"),d=t.makeTensorInfo([],"int32",g),x=Hb({inputs:{a:d,b:m},backend:t}),y=bo({inputs:{x},backend:t,attrs:{dtype:"float32"}}),w=Xa({inputs:{a:y,b:n},backend:t}),C=Ts({inputs:{x:w},backend:t,attrs:{axis:0,keepDims:!1}});u.push(C),c.push(d),c.push(x),c.push(y),c.push(w),c.push(C)}let f=kw({inputs:u,backend:t,attrs:{axis:0}});return c.forEach(h=>t.disposeIntermediateTensorInfo(h)),f}var rA={kernelName:Ei,backendName:"cpu",kernelFunc:MH};var BH=[k1,OT,E1,A1,BT,$1,D1,R1,F1,_1,O1,L1,P1,z1,M1,V1,G1,W1,U1,T1,H1,q1,K1,VT,j1,MT,GT,X1,LT,Y1,Q1,J1,tk,ek,rk,ok,nk,sk,ik,ak,lk,uk,ck,pk,mk,fk,hk,dk,gk,xk,yk,bk,Ck,w1,Sk,WT,vk,UT,Nk,HT,Ik,Tk,kk,qT,KT,Ek,Ak,$k,Dk,jT,XT,PT,Rk,Z1,Fk,_k,Ok,C1,YT,ZT,Lk,QT,Pk,zk,Mk,Bk,Vk,Gk,Wk,JT,Uk,Hk,qk,Kk,Xk,Yk,Zk,t1,Qk,Jk,rE,e1,r1,oE,nE,sE,o1,iE,uE,cE,Ih,pE,S1,s1,mE,fE,hE,dE,zT,vp,gE,v1,N1,I1,xE,yE,bE,wE,CE,SE,vE,c1,NE,TE,kE,EE,m1,AE,$E,DE,f1,tE,FE,_E,OE,LE,PE,zE,ME,BE,d1,VE,g1,x1,GE,WE,UE,HE,qE,y1,wk,KE,jE,XE,YE,ZE,JE,n1,tA,eA,rA,aE];for(let r of BH)pm(r);var Za={},Th={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function oA(r,e){Za[r]=e}function Mr(r,e){if(!(r in Za)||e!=null){let o=GH(r,e);if(o!==null)Za[r]=o;else return console.log("Could not get context for WebGL version",r),null}let t=Za[r];return t==null||t.isContextLost()?(delete Za[r],Mr(r)):(t.disable(t.DEPTH_TEST),t.disable(t.STENCIL_TEST),t.disable(t.BLEND),t.disable(t.DITHER),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SAMPLE_COVERAGE),t.enable(t.SCISSOR_TEST),t.enable(t.CULL_FACE),t.cullFace(t.BACK),Za[r])}function VH(r){if(!P().getBool("IS_SAFARI")&&typeof OffscreenCanvas<"u"&&r===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}function GH(r,e){if(r!==1&&r!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");let t=e??VH(r);return t.addEventListener("webglcontextlost",o=>{o.preventDefault(),delete Za[r]},!1),P().getBool("SOFTWARE_WEBGL_ENABLED")&&(Th.failIfMajorPerformanceCaveat=!1),r===1?t.getContext("webgl",Th)||t.getContext("experimental-webgl",Th):t.getContext("webgl2",Th)}var Qa=function(r){return r[r.DENSE=0]="DENSE",r[r.SHARED_BATCH=1]="SHARED_BATCH",r}(Qa||{}),lr=function(r){return r[r.RENDER=0]="RENDER",r[r.UPLOAD=1]="UPLOAD",r[r.PIXELS=2]="PIXELS",r[r.DOWNLOAD=3]="DOWNLOAD",r}(lr||{}),rr=function(r){return r[r.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",r[r.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",r[r.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",r[r.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",r[r.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16",r}(rr||{});function Ja(r,e){return[e,r]}function nA(r,e){return r*e}function kp(r){let e=b.sizeFromShape(r),t=Math.ceil(e/4);return b.sizeToSquarishShape(t)}function an(r,e){return[Math.max(1,Math.ceil(e/2)),Math.max(1,Math.ceil(r/2))]}function sA(r,e){let[t,o]=an(r,e);return t*o*4}function Ep(r,e){let t=r,o,n,s,i,a,l,u,c,p,m;return P().getNumber("WEBGL_VERSION")===2?(o=t.R32F,n=t.R16F,s=t.RGBA16F,i=t.RGBA32F,a=t.RED,u=4,c=1,p=t.HALF_FLOAT,m=t.FLOAT,l=t.RGBA8):(o=r.RGBA,n=r.RGBA,s=r.RGBA,i=t.RGBA,a=r.RGBA,u=4,c=4,p=e!=null?e.HALF_FLOAT_OES:null,m=r.FLOAT,l=r.RGBA),{internalFormatFloat:o,internalFormatHalfFloat:n,internalFormatPackedHalfFloat:s,internalFormatPackedFloat:i,textureFormatFloat:a,downloadTextureFormat:l,downloadUnpackNumChannels:u,defaultNumChannels:c,textureTypeHalfFloat:p,textureTypeFloat:m}}function ct(r,e){let t=e();return P().getBool("DEBUG")&&WH(r),t}function WH(r){let e=r.getError();if(e!==r.NO_ERROR)throw new Error("WebGL Error: "+qH(r,e))}var UH=596e-10,HH=65504;function iA(r){return!!(P().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||r===0||UH<Math.abs(r)&&Math.abs(r)<HH)}function qH(r,e){switch(e){case r.NO_ERROR:return"NO_ERROR";case r.INVALID_ENUM:return"INVALID_ENUM";case r.INVALID_VALUE:return"INVALID_VALUE";case r.INVALID_OPERATION:return"INVALID_OPERATION";case r.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case r.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case r.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return`Unknown error code ${e}`}}function Ap(r,e){return ks(r,()=>r.getExtension(e),'Extension "'+e+'" not supported on this browser.')}function aA(r,e){let t=ks(r,()=>r.createShader(r.VERTEX_SHADER),"Unable to create vertex WebGLShader.");if(ct(r,()=>r.shaderSource(t,e)),ct(r,()=>r.compileShader(t)),r.getShaderParameter(t,r.COMPILE_STATUS)===!1)throw console.log(r.getShaderInfoLog(t)),new Error("Failed to compile vertex shader.");return t}function lA(r,e){let t=ks(r,()=>r.createShader(r.FRAGMENT_SHADER),"Unable to create fragment WebGLShader.");if(ct(r,()=>r.shaderSource(t,e)),ct(r,()=>r.compileShader(t)),P().get("ENGINE_COMPILE_ONLY"))return t;if(r.getShaderParameter(t,r.COMPILE_STATUS)===!1)throw Rw(e,r.getShaderInfoLog(t)),new Error("Failed to compile fragment shader.");return t}var KH=/ERROR: [0-9]+:([0-9]+):/g;function Rw(r,e){let t=KH.exec(e);if(t==null){console.log(`Couldn't parse line number in error: ${e}`),console.log(r);return}let o=+t[1],n=r.split(`
`),s=n.length.toString().length+2,i=n.map((p,m)=>b.rightPad((m+1).toString(),s)+p),a=0;for(let p=0;p<i.length;p++)a=Math.max(i[p].length,a);let l=i.slice(0,o-1),u=i.slice(o-1,o),c=i.slice(o);console.log(l.join(`
`)),console.log(e.split(`
`)[0]),console.log(`%c ${b.rightPad(u[0],a)}`,"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(c.join(`
`))}function uA(r){return ks(r,()=>r.createProgram(),"Unable to create WebGLProgram.")}function cA(r,e){if(ct(r,()=>r.linkProgram(e)),!P().get("ENGINE_COMPILE_ONLY")&&r.getProgramParameter(e,r.LINK_STATUS)===!1)throw console.log(r.getProgramInfoLog(e)),new Error("Failed to link vertex and fragment shaders.")}function Eh(r,e){if(ct(r,()=>r.validateProgram(e)),r.getProgramParameter(e,r.VALIDATE_STATUS)===!1)throw console.log(r.getProgramInfoLog(e)),new Error("Shader program validation failed.")}function pA(r,e){let t=ks(r,()=>r.createBuffer(),"Unable to create WebGLBuffer");return ct(r,()=>r.bindBuffer(r.ARRAY_BUFFER,t)),ct(r,()=>r.bufferData(r.ARRAY_BUFFER,e,r.STATIC_DRAW)),t}function mA(r,e){let t=ks(r,()=>r.createBuffer(),"Unable to create WebGLBuffer");return ct(r,()=>r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t)),ct(r,()=>r.bufferData(r.ELEMENT_ARRAY_BUFFER,e,r.STATIC_DRAW)),t}function fA(r){return ks(r,()=>r.createTexture(),"Unable to create WebGLTexture.")}function hA(r,e){let t=P().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(r<=0||e<=0){let o=`[${r}x${e}]`;throw new Error("Requested texture size "+o+" is invalid.")}if(r>t||e>t){let o=`[${r}x${e}]`,n=`[${t}x${t}]`;throw new Error("Requested texture size "+o+" greater than WebGL maximum on this browser / GPU "+n+".")}}function dA(r){return ks(r,()=>r.createFramebuffer(),"Unable to create WebGLFramebuffer.")}function Fw(r,e,t,o,n,s,i){let a=r.getAttribLocation(e,t);return a===-1?!1:(ct(r,()=>r.bindBuffer(r.ARRAY_BUFFER,o)),ct(r,()=>r.vertexAttribPointer(a,n,r.FLOAT,!1,s,i)),ct(r,()=>r.enableVertexAttribArray(a)),!0)}function jH(r,e,t){YH(r,t),ct(r,()=>r.activeTexture(r.TEXTURE0+t)),ct(r,()=>r.bindTexture(r.TEXTURE_2D,e))}function gA(r,e,t){return ks(r,()=>r.getUniformLocation(e,t),'uniform "'+t+'" not present in program.')}function xA(r,e,t){return r.getUniformLocation(e,t)}function yA(r,e,t,o){ct(r,()=>jH(r,e,o)),ct(r,()=>r.uniform1i(t,o))}function Ah(r,e,t){ct(r,()=>r.bindFramebuffer(r.FRAMEBUFFER,t)),ct(r,()=>r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,e,0))}function _w(r,e){ct(r,()=>r.bindFramebuffer(r.FRAMEBUFFER,e)),ct(r,()=>r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,null,0))}function $p(r){let e=r.checkFramebufferStatus(r.FRAMEBUFFER);if(e!==r.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+XH(r,e))}function XH(r,e){switch(e){case r.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case r.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return`unknown error ${e}`}}function ks(r,e,t){let o=ct(r,()=>e());if(o==null)throw new Error(t);return o}function YH(r,e){let t=r.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,o=e+r.TEXTURE0;if(o<r.TEXTURE0||o>t){let n=`[gl.TEXTURE0, gl.TEXTURE${t}]`;throw new Error(`textureUnit must be in ${n}.`)}}function Ki(r,e=2){return b.sizeFromShape(r.slice(0,r.length-e))}function ji(r){if(r.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[r.length>1?r[r.length-2]:1,r[r.length-1]]}function Dp(r){let e=[1,1,1];return r.length===0||r.length===1&&r[0]===1||(e=[Ki(r),...ji(r)]),e}function bA(r,e=!1){let t=P().getNumber("WEBGL_MAX_TEXTURE_SIZE"),o=P().getNumber("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE");o===1/0&&P().getBool("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE")&&(o=t/2),e&&(t=t*2,o=o*2,r=r.map((a,l)=>l>=r.length-2?b.nearestLargerEven(r[l]):r[l]),r.length===1&&(r=[2,r[0]])),r.length!==2&&(r=b.squeezeShape(r).newShape);let n=b.sizeFromShape(r),s=null;r.length<=1&&n<=t?s=[1,n]:r.length===2&&r[0]<=t&&r[1]<=t?s=r:r.length===3&&r[0]*r[1]<=t&&r[2]<=t?s=[r[0]*r[1],r[2]]:r.length===3&&r[0]<=t&&r[1]*r[2]<=t?s=[r[0],r[1]*r[2]]:r.length===4&&r[0]*r[1]*r[2]<=t&&r[3]<=t?s=[r[0]*r[1]*r[2],r[3]]:r.length===4&&r[0]<=t&&r[1]*r[2]*r[3]<=t&&(s=[r[0],r[1]*r[2]*r[3]]);let i=s!=null&&Math.max(...s)>o&&Math.min(...s)<=(e?2:1)&&Math.min(...s)>0;if(s==null||i)if(e){let a=Ki(r),l=2,u=2;r.length&&([l,u]=ji(r)),n=a*(l/2)*(u/2),s=b.sizeToSquarishShape(n).map(c=>c*2)}else s=b.sizeToSquarishShape(n);return s}function kh(r){return r%2===0}function tl(r,e){if(r=r.slice(-2),e=e.slice(-2),b.arraysEqual(r,e)||!r.length||!e.length||r[0]===0||r[1]===0||e[0]===0||e[1]===0)return!0;if(r.length!==e.length){let t=r[r.length-1],o=e[e.length-1];if(t===o||kh(t)&&kh(o)&&(r[0]===1||e[0]===1))return!0}return r[1]===e[1]&&kh(r[0])&&kh(e[0])}var Aw,$w;function wA(r){if(Aw==null){let e=Mr(r);Aw=e.getParameter(e.MAX_TEXTURE_SIZE)}return Aw}function CA(r){if($w==null){let e=Mr(r);$w=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,$w)}function SA(r){if(r===0)return 0;let e,t=Mr(r);return Qr(t,"EXT_disjoint_timer_query_webgl2")&&r===2?e=2:Qr(t,"EXT_disjoint_timer_query")?e=1:e=0,e}function Qr(r,e){return r.getExtension(e)!=null}function Ow(r){try{if(Mr(r)!=null)return!0}catch(e){return console.log("Error when getting WebGL context: ",e),!1}return!1}function vA(r){if(r===0)return!1;let e=Mr(r);if(r===1){if(!Qr(e,"OES_texture_float"))return!1}else if(!Qr(e,"EXT_color_buffer_float"))return!1;return Dw(e)}function NA(r){if(r===0)return!1;let e=Mr(r);if(r===1){if(!Qr(e,"OES_texture_float")||!Qr(e,"WEBGL_color_buffer_float"))return!1}else{if(Qr(e,"EXT_color_buffer_float"))return Dw(e);let o="EXT_color_buffer_half_float";if(Qr(e,o)){let n=e.getExtension(o);return ZH(e,n)}return!1}return Dw(e)}function Dw(r){let e=Ep(r),t=r.createTexture();r.bindTexture(r.TEXTURE_2D,t),r.texImage2D(r.TEXTURE_2D,0,e.internalFormatFloat,1,1,0,e.textureFormatFloat,e.textureTypeFloat,null);let s=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,s),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,t,0);let i=r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE;return r.bindTexture(r.TEXTURE_2D,null),r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(t),r.deleteFramebuffer(s),i}function ZH(r,e){let t=Ep(r,e),o=r.createTexture();r.bindTexture(r.TEXTURE_2D,o),r.texImage2D(r.TEXTURE_2D,0,t.internalFormatHalfFloat,1,1,0,t.textureFormatFloat,t.textureTypeHalfFloat,null);let i=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,i),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,o,0);let a=r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE;return r.bindTexture(r.TEXTURE_2D,null),r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(o),r.deleteFramebuffer(i),a}function IA(r){return r!==2?!1:Mr(r).fenceSync!=null}function ln(r,e){Array.isArray(r)||(r=[r]),r.forEach(t=>{t!=null&&b.assert(t.dtype!=="complex64",()=>`${e} does not support complex64 tensors in the WebGL backend.`)})}var gt=P();gt.registerFlag("HAS_WEBGL",()=>gt.getNumber("WEBGL_VERSION")>0);gt.registerFlag("WEBGL_VERSION",()=>Ow(2)?2:Ow(1)?1:0);gt.registerFlag("WEBGL_CHECK_NUMERICAL_PROBLEMS",()=>!1);gt.registerFlag("WEBGL_BUFFER_SUPPORTED",()=>gt.get("WEBGL_VERSION")===2);gt.registerFlag("WEBGL_CPU_FORWARD",()=>!0);gt.registerFlag("WEBGL_FORCE_F16_TEXTURES",()=>!1);gt.registerFlag("WEBGL_PACK",()=>gt.getBool("HAS_WEBGL"));gt.registerFlag("WEBGL_PACK_NORMALIZATION",()=>gt.getBool("WEBGL_PACK"));gt.registerFlag("WEBGL_PACK_CLIP",()=>gt.getBool("WEBGL_PACK"));gt.registerFlag("WEBGL_PACK_DEPTHWISECONV",()=>gt.getBool("WEBGL_PACK"));gt.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",()=>gt.getBool("WEBGL_PACK"));gt.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",()=>gt.getBool("WEBGL_PACK"));gt.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",()=>gt.getBool("WEBGL_PACK"));gt.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",()=>gt.getBool("WEBGL_PACK"));gt.registerFlag("WEBGL_PACK_REDUCE",()=>gt.getBool("WEBGL_PACK"));gt.registerFlag("WEBGL_LAZILY_UNPACK",()=>gt.getBool("WEBGL_PACK"));gt.registerFlag("WEBGL_CONV_IM2COL",()=>gt.getBool("WEBGL_PACK"));gt.registerFlag("WEBGL_PACK_CONV2DTRANSPOSE",()=>gt.getBool("WEBGL_PACK"));gt.registerFlag("WEBGL_MAX_TEXTURE_SIZE",()=>wA(gt.getNumber("WEBGL_VERSION")));gt.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",()=>CA(gt.getNumber("WEBGL_VERSION")));gt.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",()=>{let r=gt.getNumber("WEBGL_VERSION");return r===0?0:SA(r)});gt.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",()=>gt.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&!Ri.isMobile());gt.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",()=>vA(gt.getNumber("WEBGL_VERSION")));gt.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",()=>gt.getBool("WEBGL_FORCE_F16_TEXTURES")?!1:gt.getBool("WEBGL_RENDER_FLOAT32_CAPABLE"));gt.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",()=>NA(gt.getNumber("WEBGL_VERSION")));gt.registerFlag("WEBGL_FENCE_API_ENABLED",()=>IA(gt.getNumber("WEBGL_VERSION")));gt.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",()=>gt.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0);gt.registerFlag("WEBGL_DELETE_TEXTURE_THRESHOLD",()=>-1,r=>{if(typeof r!="number")throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be a number but got ${r}.`);if(r<0&&r!==-1)throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${r}.`)});gt.registerFlag("WEBGL_FLUSH_THRESHOLD",()=>Ri.isMobile()?1:-1,r=>{if(typeof r!="number")throw new Error(`WEBGL_FLUSH_THRESHOLD must be a number but got ${r}.`);if(r<0&&r!==-1)throw new Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${r}.`)});gt.registerFlag("CPU_HANDOFF_SIZE_THRESHOLD",()=>128);gt.registerFlag("WEBGL_USE_SHAPES_UNIFORMS",()=>!1);gt.registerFlag("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD",()=>1e5);gt.registerFlag("TOPK_K_CPU_HANDOFF_THRESHOLD",()=>128);gt.registerFlag("WEBGL_EXP_CONV",()=>!1);gt.registerFlag("SOFTWARE_WEBGL_ENABLED",()=>gt.getBool("IS_TEST"));gt.registerFlag("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE",()=>1/0);gt.registerFlag("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE",()=>!1);gt.registerFlag("WEBGL2_ISNAN_CUSTOM",()=>!1);gt.registerFlag("ENGINE_COMPILE_ONLY",()=>!1);function fe(){let r,e,t,o,n,s,i,a,l,u;return P().getNumber("WEBGL_VERSION")===2?(r="#version 300 es",e="in",t="out",o="in",n="texture",s="outputColor",i="out vec4 outputColor;",a=P().getBool("WEBGL2_ISNAN_CUSTOM")?`
      bool isnan_custom(float val) {
        uint floatToUint = floatBitsToUint(val);
        return (floatToUint & 0x7fffffffu) > 0x7f800000u;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `:"",l="",u=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(r="",e="attribute",t="varying",o="varying",n="texture2D",s="gl_FragColor",i="",a=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,l=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,u=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:r,attribute:e,varyingVs:t,varyingFs:o,texture2D:n,output:s,defineOutput:i,defineSpecialNaN:a,defineSpecialInf:l,defineRound:u}}function Mo(r,e,t="index"){let o=b.computeStrides(e);return o.map((n,s)=>{let i=`int ${r[s]} = ${t} / ${n}`,a=s===o.length-1?`int ${r[s+1]} = ${t} - ${r[s]} * ${n}`:`index -= ${r[s]} * ${n}`;return`${i}; ${a};`}).join("")}function el(r,e,t="index"){let o=b.computeStrides(e);return o.map((n,s)=>{let i=`int ${r[s]} = ${t} / outShapeStrides[${s}]`,a=s===o.length-1?`int ${r[s+1]} = ${t} - ${r[s]} * outShapeStrides[${s}]`:`index -= ${r[s]} * outShapeStrides[${s}]`;return`${i}; ${a};`}).join("")}function QH(r,e){let t=r.length,o=r.map(s=>`${e}[${s}]`),n=new Array(t-1);n[t-2]=o[t-1];for(let s=t-3;s>=0;--s)n[s]=`(${n[s+1]} * ${o[s+1]})`;return n}function TA(r,e,t="index"){let o=r.map((s,i)=>i),n=QH(o,e);return n.map((s,i)=>{let a=`int ${r[i]} = ${t} / ${n[i]}`,l=i===n.length-1?`int ${r[i+1]} = ${t} - ${r[i]} * ${n[i]}`:`index -= ${r[i]} * ${n[i]}`;return`${a}; ${l};`}).join("")}function Qu(r){let e=b.computeStrides(r).map(t=>t.toString());return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * ${e[0]} + coords.y * ${e[1]} + coords.z;
  }
`}function Ju(){return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;
  }
`}var Dh=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;var{getBroadcastDims:kA}=v;function EA(r,e,t){let o=[];if(r.forEach(f=>{let h=b.sizeFromShape(f.shapeInfo.logicalShape);if(f.shapeInfo.isUniform?o.push(`uniform float ${f.name}${h>1?`[${h}]`:""};`):(o.push(`uniform sampler2D ${f.name};`),o.push(`uniform int offset${f.name};`)),t.enableShapeUniforms){let{uniformShape:g}=Rh(t.packedInputs,f.shapeInfo.logicalShape,f.shapeInfo.texShape);switch(g.length){case 1:o.push(`uniform int ${f.name}Shape;`);break;case 2:o.push(`uniform ivec2 ${f.name}Shape;`);break;case 3:o.push(`uniform ivec3 ${f.name}Shape;`);break;case 4:o.push(`uniform ivec4 ${f.name}Shape;`);break;default:break}o.push(`uniform ivec2 ${f.name}TexShape;`)}}),t.enableShapeUniforms){switch(e.logicalShape.length){case 1:o.push("uniform int outShape;");break;case 2:o.push("uniform ivec2 outShape;"),o.push("uniform int outShapeStrides;");break;case 3:o.push("uniform ivec3 outShape;"),o.push("uniform ivec2 outShapeStrides;");break;case 4:o.push("uniform ivec4 outShape;"),o.push("uniform ivec3 outShapeStrides;");break;default:break}o.push("uniform ivec2 outTexShape;")}t.customUniforms&&t.customUniforms.forEach(f=>{o.push(`uniform ${f.type} ${f.name}${f.arrayIndex?`[${f.arrayIndex}]`:""};`)});let n=o.join(`
`),s=r.map(f=>JH(f,e,t.packedInputs,t.enableShapeUniforms)).join(`
`),i=e.texShape,a=fe(),l=rq(a),u,c,p=sq(a);return e.isPacked?(u=tq(e.logicalShape,i,t.enableShapeUniforms),c=nq(a)):(u=eq(e.logicalShape,i,t.enableShapeUniforms),c=oq(a)),t.packedInputs&&(p+=uq),[p,l,c,n,u,s,t.userCode].join(`
`)}function ec(r,e=!1){let t=r.shapeInfo.logicalShape;switch(t.length){case 0:return Cq(r,e);case 1:return vq(r,e);case 2:return Iq(r,e);case 3:return kq(r,e);case 4:return Aq(r,e);case 5:return $q(r);case 6:return Dq(r);default:throw new Error(`${t.length}-D input sampling is not yet supported`)}}function AA(r,e){switch(r.shapeInfo.logicalShape.length){case 0:return wq(r);case 1:return Sq(r,e);case 2:return Nq(r,e);case 3:return Tq(r,e);default:return Eq(r,e)}}function JH(r,e,t=!1,o){let n="";t?n+=AA(r,o):n+=ec(r,o);let s=r.shapeInfo.logicalShape,i=e.logicalShape;return s.length<=i.length&&(t?n+=Rq(r,e):n+=Fq(r,e)),n}function tq(r,e,t){switch(r.length){case 0:return $A();case 1:return cq(r,e,t);case 2:return yq(r,e,t);case 3:return mq(r,e,t);default:return hq(r,e,t)}}function eq(r,e,t){switch(r.length){case 0:return $A();case 1:return pq(r,e,t);case 2:return bq(r,e,t);case 3:return fq(r,e,t);case 4:return dq(r,e,t);case 5:return gq(r,e);case 6:return xq(r,e);default:throw new Error(`${r.length}-D output sampling is not yet supported`)}}function rq(r){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return ${r.texture2D}(textureSampler, uv).r;
    }
  `}function oq(r){return`
    void setOutput(float val) {
      ${r.output} = vec4(val, 0, 0, 0);
    }
  `}function nq(r){return`
    void setOutput(vec4 val) {
      ${r.output} = val;
    }
  `}function sq(r){return`${r.version}
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    ${r.varyingFs} vec2 resultUV;
    ${r.defineOutput}
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    ${r.defineSpecialNaN}
    ${r.defineSpecialInf}
    ${r.defineRound}

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    ${iq}
    ${aq}
    ${lq}
  `}var iq=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,aq=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,lq=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,uq=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function $A(){return`
    int getOutputCoords() {
      return 0;
    }
  `}function cq(r,e,t){let o=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)];return o[0]===1?t?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ceil(float(outTexShape[1]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ${o[1]}.0);
      }
    `:o[1]===1?t?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ceil(float(outTexShape[0]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ${o[0]}.0);
      }
    `:t?`
    int getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      return 2 * (resTexRC.x * packedTexShape[1] + resTexRC.y);
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${o[0]}, ${o[1]}));
      return 2 * (resTexRC.x * ${o[1]} + resTexRC.y);
    }
  `}function pq(r,e,t){return e[0]===1?t?`
      int getOutputCoords() {
        return int(resultUV.x * float(outTexShape[1]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.x * ${e[1]}.0);
      }
    `:e[1]===1?t?`
      int getOutputCoords() {
        return int(resultUV.y * float(outTexShape[0]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.y * ${e[0]}.0);
      }
    `:t?`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      return resTexRC.x * outTexShape[1] + resTexRC.y;
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${e[0]}, ${e[1]}));
      return resTexRC.x * ${e[1]} + resTexRC.y;
    }
  `}function mq(r,e,t){if(t)return`
    ivec3 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec3(b, r, c);
    }
  `;let o=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)],n=Math.ceil(r[2]/2),s=n*Math.ceil(r[1]/2);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${o[0]}, ${o[1]}));
      int index = resTexRC.x * ${o[1]} + resTexRC.y;

      int b = index / ${s};
      index -= b * ${s};

      int r = 2 * (index / ${n});
      int c = imod(index, ${n}) * 2;

      return ivec3(b, r, c);
    }
  `}function fq(r,e,t){if(t)return`
  ivec3 getOutputCoords() {
    ivec2 resTexRC = ivec2(resultUV.yx *
                           vec2(outTexShape[0], outTexShape[1]));
    int index = resTexRC.x * outTexShape[1] + resTexRC.y;
    ${el(["r","c","d"],r)}
    return ivec3(r, c, d);
  }
`;let o=Mo(["r","c","d"],r);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;
      ${o}
      return ivec3(r, c, d);
    }
  `}function hq(r,e,t){if(t)return`
    ivec4 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int texelsInLogicalRow = int(ceil(float(outShape[3]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatchN = texelsInBatch * outShape[1];

      int b2 = index / texelsInBatchN;
      index -= b2 * texelsInBatchN;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec4(b2, b, r, c);
    }
  `;let o=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)],n=Math.ceil(r[r.length-1]/2),s=n*Math.ceil(r[r.length-2]/2),i=s,a="",l="b, r, c";for(let u=2;u<r.length-1;u++)i*=r[r.length-u-1],a=`
      int b${u} = index / ${i};
      index -= b${u} * ${i};
    `+a,l=`b${u}, `+l;return`
    ivec${r.length} getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${o[0]}, ${o[1]}));
      int index = resTexRC.x * ${o[1]} + resTexRC.y;

      ${a}

      int b = index / ${s};
      index -= b * ${s};

      int r = 2 * (index / ${n});
      int c = imod(index, ${n}) * 2;

      return ivec${r.length}(${l});
    }
  `}function dq(r,e,t){if(t)return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      ${el(["r","c","d","d2"],r)}
      return ivec4(r, c, d, d2);
    }
  `;let o=Mo(["r","c","d","d2"],r);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;
      ${o}
      return ivec4(r, c, d, d2);
    }
  `}function gq(r,e){let t=Mo(["r","c","d","d2","d3"],r);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(${e[0]},
                             ${e[1]}));

      int index = resTexRC.x * ${e[1]} + resTexRC.y;

      ${t}

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}function xq(r,e){let t=Mo(["r","c","d","d2","d3","d4"],r);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;

      ${t}

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}function yq(r,e,t){let o=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)];if(b.arraysEqual(r,e))return t?`
      ivec2 getOutputCoords() {
        ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
        return 2 * ivec2(resultUV.yx * vec2(packedTexShape[0], packedTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(${o[0]}, ${o[1]}));
      }
    `;let n=Math.ceil(r[1]/2);return t?`
    ivec2 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));

      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;
      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${o[0]}, ${o[1]}));

      int index = resTexRC.x * ${o[1]} + resTexRC.y;
      int r = 2 * (index / ${n});
      int c = imod(index, ${n}) * 2;

      return ivec2(r, c);
    }
  `}function bq(r,e,t){return b.arraysEqual(r,e)?t?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(outTexShape[0], outTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(${e[0]}, ${e[1]}));
      }
    `:r[1]===1?t?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(index, 0);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${e[0]}, ${e[1]}));
        int index = resTexRC.x * ${e[1]} + resTexRC.y;
        return ivec2(index, 0);
      }
    `:r[0]===1?t?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${e[0]}, ${e[1]}));
        int index = resTexRC.x * ${e[1]} + resTexRC.y;
        return ivec2(0, index);
      }
    `:t?`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      int r = index / outShape[1];
      int c = index - r * outShape[1];
      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;
      int r = index / ${r[1]};
      int c = index - r * ${r[1]};
      return ivec2(r, c);
    }
  `}function rl(r){return`offset${r}`}function wq(r){let e=r.name,t="get"+e.charAt(0).toUpperCase()+e.slice(1),o=fe();return`
    vec4 ${t}() {
      return ${o.texture2D}(${e}, halfCR);
    }
  `}function Cq(r,e){let t=r.name,o="get"+t.charAt(0).toUpperCase()+t.slice(1);if(r.shapeInfo.isUniform)return`float ${o}() {return ${t};}`;let[n,s]=r.shapeInfo.texShape;if(n===1&&s===1)return`
      float ${o}() {
        return sampleTexture(${t}, halfCR);
      }
    `;let i=rl(t);if(e)return`
    float ${o}() {
      vec2 uv = uvFromFlat(${t}TexShape[0], ${t}TexShape[1], ${i});
      return sampleTexture(${t}, uv);
    }
  `;let[a,l]=r.shapeInfo.texShape;return`
    float ${o}() {
      vec2 uv = uvFromFlat(${a}, ${l}, ${i});
      return sampleTexture(${t}, uv);
    }
  `}function Sq(r,e){let t=r.name,o="get"+t.charAt(0).toUpperCase()+t.slice(1),n=r.shapeInfo.texShape,s=fe();if(e)return`
    vec4 ${o}(int index) {
      ivec2 packedTexShape = ivec2(ceil(float(${t}TexShape[0]) / 2.0), ceil(float(${t}TexShape[1]) / 2.0));
      vec2 uv = packedUVfrom1D(
        packedTexShape[0], packedTexShape[1], index);
      return ${s.texture2D}(${t}, uv);
    }
  `;let i=[Math.ceil(n[0]/2),Math.ceil(n[1]/2)];return`
    vec4 ${o}(int index) {
      vec2 uv = packedUVfrom1D(
        ${i[0]}, ${i[1]}, index);
      return ${s.texture2D}(${t}, uv);
    }
  `}function vq(r,e){let t=r.name,o="get"+t.charAt(0).toUpperCase()+t.slice(1);if(r.shapeInfo.isUniform)return`
      float ${o}(int index) {
        ${rc(r)}
      }
    `;let n=r.shapeInfo.texShape,s=n[0],i=n[1];if(i===1&&s===1)return`
      float ${o}(int index) {
        return sampleTexture(${t}, halfCR);
      }
    `;let a=rl(t);return i===1?e?`
      float ${o}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${a}) + 0.5) / float(${t}TexShape[0]));
        return sampleTexture(${t}, uv);
      }
    `:`
      float ${o}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${a}) + 0.5) / ${s}.0);
        return sampleTexture(${t}, uv);
      }
    `:s===1?e?`
      float ${o}(int index) {
        vec2 uv = vec2((float(index + ${a}) + 0.5) / float(${t}TexShape[1]), 0.5);
        return sampleTexture(${t}, uv);
      }
    `:`
      float ${o}(int index) {
        vec2 uv = vec2((float(index + ${a}) + 0.5) / ${i}.0, 0.5);
        return sampleTexture(${t}, uv);
      }
    `:e?`
    float ${o}(int index) {
      vec2 uv = uvFromFlat(${t}TexShape[0], ${t}TexShape[1], index + ${a});
      return sampleTexture(${t}, uv);
    }
  `:`
    float ${o}(int index) {
      vec2 uv = uvFromFlat(${s}, ${i}, index + ${a});
      return sampleTexture(${t}, uv);
    }
  `}function Nq(r,e){let t=r.shapeInfo.logicalShape,o=r.name,n="get"+o.charAt(0).toUpperCase()+o.slice(1),s=r.shapeInfo.texShape,i=s[0],a=s[1],l=fe();if(s!=null&&b.arraysEqual(t,s))return e?`
      vec4 ${n}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${o}TexShape[1], ${o}TexShape[0]);

        return ${l.texture2D}(${o}, uv);
      }
    `:`
      vec4 ${n}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${a}.0, ${i}.0);

        return ${l.texture2D}(${o}, uv);
      }
    `;if(e)return`
    vec4 ${n}(int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${o}TexShape[0]) / 2.0), ceil(float(${o}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${o}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom2D(valuesPerRow, packedTexShape[0], packedTexShape[1], row, col);
      return ${l.texture2D}(${o}, uv);
    }
  `;let u=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)],c=Math.ceil(t[1]/2);return`
    vec4 ${n}(int row, int col) {
      vec2 uv = packedUVfrom2D(${c}, ${u[0]}, ${u[1]}, row, col);
      return ${l.texture2D}(${o}, uv);
    }
  `}function Iq(r,e){let t=r.shapeInfo.logicalShape,o=r.name,n="get"+o.charAt(0).toUpperCase()+o.slice(1),s=r.shapeInfo.texShape;if(s!=null&&b.arraysEqual(t,s)){if(e)return`
      float ${n}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${o}TexShape[1], ${o}TexShape[0]);
        return sampleTexture(${o}, uv);
      }
    `;let m=s[0],f=s[1];return`
    float ${n}(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(${f}.0, ${m}.0);
      return sampleTexture(${o}, uv);
    }
  `}let{newShape:i,keptDims:a}=b.squeezeShape(t),l=i;if(l.length<t.length){let m=oc(r,l),f=["row","col"];return`
      ${ec(m,e)}
      float ${n}(int row, int col) {
        return ${n}(${nc(f,a)});
      }
    `}if(r.shapeInfo.isUniform)return`
      float ${n}(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(${t[1]}, 1)));
        ${rc(r)}
      }
    `;let u=s[0],c=s[1],p=rl(o);return c===1?e?`
      float ${n}(int row, int col) {
        float index = dot(vec3(row, col, ${p}), vec3(${o}Shape[1], 1, 1));
        vec2 uv = vec2(0.5, (index + 0.5) / float(${o}TexShape[0]));
        return sampleTexture(${o}, uv);
      }
    `:`
    float ${n}(int row, int col) {
      float index = dot(vec3(row, col, ${p}), vec3(${t[1]}, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / ${u}.0);
      return sampleTexture(${o}, uv);
    }
  `:u===1?e?`
      float ${n}(int row, int col) {
        float index = dot(vec3(row, col, ${p}), vec3(${o}Shape[1], 1, 1));
        vec2 uv = vec2((index + 0.5) / float(${o}TexShape[1]), 0.5);
        return sampleTexture(${o}, uv);
      }
    `:`
    float ${n}(int row, int col) {
      float index = dot(vec3(row, col, ${p}), vec3(${t[1]}, 1, 1));
      vec2 uv = vec2((index + 0.5) / ${c}.0, 0.5);
      return sampleTexture(${o}, uv);
    }
  `:e?`
      float ${n}(int row, int col) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${o}Shape[1] + col + ${p};
        vec2 uv = uvFromFlat(${o}TexShape[0], ${o}TexShape[1], index);
        return sampleTexture(${o}, uv);
      }
    `:`
  float ${n}(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * ${t[1]} + col + ${p};
    vec2 uv = uvFromFlat(${u}, ${c}, index);
    return sampleTexture(${o}, uv);
  }
`}function Tq(r,e){let t=r.shapeInfo.logicalShape,o=r.name,n="get"+o.charAt(0).toUpperCase()+o.slice(1),s=r.shapeInfo.texShape,i=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)];if(t[0]===1){let m=t.slice(1),f=[1,2],h=oc(r,m),g=["b","row","col"];return`
        ${AA(h,e)}
        vec4 ${n}(int b, int row, int col) {
          return ${n}(${nc(g,f)});
        }
      `}let a=fe();if(e)return`
    vec4 ${n}(int b, int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${o}TexShape[0]) / 2.0), ceil(float(${o}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${o}Shape[2]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${o}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom3D(
        packedTexShape[0], packedTexShape[1], texelsInBatch, valuesPerRow, b, row, col);
      return ${a.texture2D}(${o}, uv);
    }
  `;let l=i[0],u=i[1],c=Math.ceil(t[2]/2),p=c*Math.ceil(t[1]/2);return`
    vec4 ${n}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${l}, ${u}, ${p}, ${c}, b, row, col);
      return ${a.texture2D}(${o}, uv);
    }
  `}function kq(r,e){let t=r.shapeInfo.logicalShape,o=r.name,n="get"+o.charAt(0).toUpperCase()+o.slice(1),s=t[1]*t[2],i=t[2],{newShape:a,keptDims:l}=b.squeezeShape(t),u=a;if(u.length<t.length){let g=oc(r,u),d=["row","col","depth"];return`
        ${ec(g,e)}
        float ${n}(int row, int col, int depth) {
          return ${n}(${nc(d,l)});
        }
      `}if(r.shapeInfo.isUniform)return`
      float ${n}(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(${s}, ${i}, 1)));
        ${rc(r)}
      }
    `;let c=r.shapeInfo.texShape,p=c[0],m=c[1],f=r.shapeInfo.flatOffset;if(m===s&&f==null)return e?`
      float ${n}(int row, int col, int depth) {
        int stride1 = ${o}Shape[2];
        float texR = float(row);
        float texC = dot(vec2(col, depth), vec2(stride1, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${o}TexShape[1], ${o}TexShape[0]);
        return sampleTexture(${o}, uv);
      }
    `:`
        float ${n}(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(${i}, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(${m}.0, ${p}.0);
          return sampleTexture(${o}, uv);
        }
      `;if(m===i&&f==null)return e?`
      float ${n}(int row, int col, int depth) {
        float texR = dot(vec2(row, col), vec2(${o}Shape[1], 1));
        float texC = float(depth);
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${o}TexShape[1], ${o}TexShape[0]);
        return sampleTexture(${o}, uv);
      }
    `:`
    float ${n}(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(${t[1]}, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${m}.0, ${p}.0);
      return sampleTexture(${o}, uv);
    }
  `;let h=rl(o);return e?`
    float ${n}(int row, int col, int depth) {
      // Explicitly use integer operations as dot() only works on floats.
      int stride0 = ${o}Shape[1] * ${o}Shape[2];
      int stride1 = ${o}Shape[2];
      int index = row * stride0 + col * stride1 + depth + ${h};
      vec2 uv = uvFromFlat(${o}TexShape[0], ${o}TexShape[1], index);
      return sampleTexture(${o}, uv);
    }
    `:`
      float ${n}(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${s} + col * ${i} + depth + ${h};
        vec2 uv = uvFromFlat(${p}, ${m}, index);
        return sampleTexture(${o}, uv);
      }
  `}function Eq(r,e){let t=r.name,o="get"+t.charAt(0).toUpperCase()+t.slice(1),n=fe();if(e)return`
    vec4 ${o}(int b2, int b, int row, int col) {
      int valuesPerRow = int(ceil(float(${t}Shape[3]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${t}Shape[2]) / 2.0));
      int index = b * texelsInBatch + (row / 2) * valuesPerRow + (col / 2);
      texelsInBatch *= ${t}Shape[1];
      index = b2 * texelsInBatch + index;
      ivec2 packedTexShape = ivec2(ceil(float(${t}TexShape[0]) / 2.0), ceil(float(${t}TexShape[1]) / 2.0));
      int texR = index / packedTexShape[1];
      int texC = index - texR * packedTexShape[1];
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(packedTexShape[1], packedTexShape[0]); return ${n.texture2D}(${t}, uv);
    }
  `;let s=r.shapeInfo.logicalShape,i=s.length,a=r.shapeInfo.texShape,l=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)],u=l[0],c=l[1],p=Math.ceil(s[i-1]/2),m=p*Math.ceil(s[i-2]/2),f="int b, int row, int col",h=`b * ${m} + (row / 2) * ${p} + (col / 2)`;for(let g=2;g<i-1;g++)f=`int b${g}, `+f,m*=s[i-g-1],h=`b${g} * ${m} + `+h;return`
    vec4 ${o}(${f}) {
      int index = ${h};
      int texR = index / ${c};
      int texC = index - texR * ${c};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${c}, ${u});
      return ${n.texture2D}(${t}, uv);
    }
  `}function Aq(r,e){let t=r.shapeInfo.logicalShape,o=r.name,n="get"+o.charAt(0).toUpperCase()+o.slice(1),s=t[3],i=t[2]*s,a=t[1]*i,{newShape:l,keptDims:u}=b.squeezeShape(t);if(l.length<t.length){let y=oc(r,l),w=["row","col","depth","depth2"];return`
      ${ec(y,e)}
      float ${n}(int row, int col, int depth, int depth2) {
        return ${n}(${nc(w,u)});
      }
    `}if(r.shapeInfo.isUniform)return`
      float ${n}(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(${a}, ${i}, ${s}, 1)));
        ${rc(r)}
      }
    `;let c=r.shapeInfo.flatOffset,p=r.shapeInfo.texShape,m=p[0],f=p[1],h=`int stride2 = ${o}Shape[3];`,g=`int stride1 = ${o}Shape[2] * stride2;`,d=`int stride0 = ${o}Shape[1] * stride1;`;if(f===a&&c==null)return e?`
      float ${n}(int row, int col, int depth, int depth2) {
        ${h}
        ${g}
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(stride1, stride2, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${o}TexShape[1], ${o}TexShape[0]);
        return sampleTexture(${o}, uv);
      }
    `:`
      float ${n}(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(${i}, ${s}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${f}.0, ${m}.0);
        return sampleTexture(${o}, uv);
      }
    `;if(f===s&&c==null)return e?`
      float ${n}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${o}Shape[1] * ${o}Shape[2], ${o}Shape[2], 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${o}TexShape[1], ${o}TexShape[0]);
        return sampleTexture(${o}, uv);
      }
    `:`
      float ${n}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${t[1]*t[2]}, ${t[2]}, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${f}.0, ${m}.0);
        return sampleTexture(${o}, uv);
      }
    `;let x=rl(o);return e?`
    float ${n}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      ${h}
      ${g}
      ${d}
      int index = row * stride0 + col * stride1 +
          depth * stride2 + depth2;
      vec2 uv = uvFromFlat(${o}TexShape[0], ${o}TexShape[1], index + ${x});
      return sampleTexture(${o}, uv);
    }
  `:`
    float ${n}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${a} + col * ${i} +
          depth * ${s} + depth2;
      vec2 uv = uvFromFlat(${m}, ${f}, index + ${x});
      return sampleTexture(${o}, uv);
    }
  `}function $q(r){let e=r.shapeInfo.logicalShape,t=r.name,o="get"+t.charAt(0).toUpperCase()+t.slice(1),n=e[4],s=e[3]*n,i=e[2]*s,a=e[1]*i,{newShape:l,keptDims:u}=b.squeezeShape(e);if(l.length<e.length){let g=oc(r,l),d=["row","col","depth","depth2","depth3"];return`
      ${ec(g)}
      float ${o}(int row, int col, int depth, int depth2, int depth3) {
        return ${o}(${nc(d,u)});
      }
    `}if(r.shapeInfo.isUniform)return`
      float ${o}(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(${a}, ${i}, ${s}, ${n})) +
          depth3;
        ${rc(r)}
      }
    `;let c=r.shapeInfo.flatOffset,p=r.shapeInfo.texShape,m=p[0],f=p[1];if(f===a&&c==null)return`
      float ${o}(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(${i}, ${s}, ${n}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${f}.0, ${m}.0);
        return sampleTexture(${t}, uv);
      }
    `;if(f===n&&c==null)return`
      float ${o}(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(${e[1]*e[2]*e[3]},
               ${e[2]*e[3]}, ${e[3]}, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${f}.0, ${m}.0);
        return sampleTexture(${t}, uv);
      }
    `;let h=rl(t);return`
    float ${o}(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${a} + col * ${i} + depth * ${s} +
          depth2 * ${n} + depth3 + ${h};
      vec2 uv = uvFromFlat(${m}, ${f}, index);
      return sampleTexture(${t}, uv);
    }
  `}function Dq(r){let e=r.shapeInfo.logicalShape,t=r.name,o="get"+t.charAt(0).toUpperCase()+t.slice(1),{newShape:n,keptDims:s}=b.squeezeShape(e);if(n.length<e.length){let d=oc(r,n),x=["row","col","depth","depth2","depth3","depth4"];return`
      ${ec(d)}
      float ${o}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return ${o}(${nc(x,s)});
      }
    `}let i=e[5],a=e[4]*i,l=e[3]*a,u=e[2]*l,c=e[1]*u;if(r.shapeInfo.isUniform)return`
      float ${o}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(${c}, ${u}, ${l}, ${a})) +
          dot(
            vec2(depth3, depth4),
            vec2(${i}, 1)));
        ${rc(r)}
      }
    `;let p=r.shapeInfo.flatOffset,m=r.shapeInfo.texShape,f=m[0],h=m[1];if(h===c&&p==null)return`
      float ${o}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(${u}, ${l}, ${a}, ${i})) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${h}.0, ${f}.0);
        return sampleTexture(${t}, uv);
      }
    `;if(h===i&&p==null)return`
      float ${o}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(${e[1]*e[2]*e[3]*e[4]},
               ${e[2]*e[3]*e[4]},
               ${e[3]*e[4]},
               ${e[4]})) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${h}.0, ${f}.0);
        return sampleTexture(${t}, uv);
      }
    `;let g=rl(t);return`
    float ${o}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${c} + col * ${u} + depth * ${l} +
          depth2 * ${a} + depth3 * ${i} + depth4 + ${g};
      vec2 uv = uvFromFlat(${f}, ${h}, index);
      return sampleTexture(${t}, uv);
    }
  `}function rc(r){let e=r.name,t=b.sizeFromShape(r.shapeInfo.logicalShape);return t<2?`return ${e};`:`
    for (int i = 0; i < ${t}; i++) {
      if (i == index) {
        return ${e}[i];
      }
    }
  `}function Rq(r,e){let t=r.name,o=t.charAt(0).toUpperCase()+t.slice(1),n="get"+o+"AtOutCoords",s=r.shapeInfo.logicalShape.length,i=e.logicalShape.length,a=kA(r.shapeInfo.logicalShape,e.logicalShape),l=It(i),u=i-s,c,p=["x","y","z","w","u","v"];s===0?c="":i<2&&a.length>=1?c="coords = 0;":c=a.map(y=>`coords.${p[y+u]} = 0;`).join(`
`);let m="";i<2&&s>0?m="coords":m=r.shapeInfo.logicalShape.map((y,w)=>`coords.${p[w+u]}`).join(", ");let f="return outputValue;",g=b.sizeFromShape(r.shapeInfo.logicalShape)===1,x=b.sizeFromShape(e.logicalShape)===1;if(s===1&&!g&&!x)f=`
      return vec4(outputValue.xy, outputValue.xy);
    `;else if(g&&!x)i===1?f=`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:f=`
        return vec4(outputValue.x);
      `;else if(a.length){let y=s-2,w=s-1;a.indexOf(y)>-1&&a.indexOf(w)>-1?f="return vec4(outputValue.x);":a.indexOf(y)>-1?f="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":a.indexOf(w)>-1&&(f="return vec4(outputValue.xx, outputValue.zz);")}return`
    vec4 ${n}() {
      ${l} coords = getOutputCoords();
      ${c}
      vec4 outputValue = get${o}(${m});
      ${f}
    }
  `}function Fq(r,e){let t=r.name,o=t.charAt(0).toUpperCase()+t.slice(1),n="get"+o+"AtOutCoords",s=e.texShape,i=r.shapeInfo.texShape,a=r.shapeInfo.logicalShape.length,l=e.logicalShape.length;if(!r.shapeInfo.isUniform&&a===l&&r.shapeInfo.flatOffset==null&&b.arraysEqual(i,s))return`
      float ${n}() {
        return sampleTexture(${t}, resultUV);
      }
    `;let u=It(l),c=kA(r.shapeInfo.logicalShape,e.logicalShape),p=l-a,m,f=["x","y","z","w","u","v"];a===0?m="":l<2&&c.length>=1?m="coords = 0;":m=c.map(g=>`coords.${f[g+p]} = 0;`).join(`
`);let h="";return l<2&&a>0?h="coords":h=r.shapeInfo.logicalShape.map((g,d)=>`coords.${f[d+p]}`).join(", "),`
    float ${n}() {
      ${u} coords = getOutputCoords();
      ${m}
      return get${o}(${h});
    }
  `}function It(r){if(r<=1)return"int";if(r===2)return"ivec2";if(r===3)return"ivec3";if(r===4)return"ivec4";if(r===5)return"ivec5";if(r===6)return"ivec6";throw Error(`GPU for rank ${r} is not yet supported`)}function Rh(r,e,t){let{newShape:o,keptDims:n}=b.squeezeShape(e),s=e.length,i=r&&s===3&&e[0]===1,a=i?e.slice(1):o,l=!r&&s>1&&!b.arraysEqual(e,t)&&o.length<s||i;return{useSqueezeShape:l,uniformShape:l?a:e,keptDims:n}}function oc(r,e){let t=JSON.parse(JSON.stringify(r));return t.shapeInfo.logicalShape=e,t}function nc(r,e){return e.map(t=>r[t]).join(", ")}function RA(r,e,t,o){let n=t.map((c,p)=>{let m={logicalShape:c.shape,texShape:c.isUniform?null:c.texData.texShape,isUniform:c.isUniform,isPacked:c.isUniform?!1:c.texData.isPacked,flatOffset:null};return c.texData!=null&&c.texData.slice!=null&&c.texData.slice.flatOffset>0&&(m.flatOffset=c.texData.slice.flatOffset),{name:e.variableNames[p],shapeInfo:m}}),s=n.map(c=>c.shapeInfo),i={logicalShape:o.shape,texShape:o.texData.texShape,isUniform:!1,isPacked:o.texData.isPacked,flatOffset:null},a=EA(n,i,e),l=lA(r.gl,a),u=r.createProgram(l);return P().get("ENGINE_COMPILE_ONLY")?{program:e,fragmentShader:l,source:a,webGLProgram:u,inShapeInfos:s,outShapeInfo:i,variablesLocations:null,customUniformLocations:null,infLoc:null,nanLoc:null,outShapeLocation:null,outShapeStridesLocation:null,outTexShapeLocation:null}:(r.buildVao(u),Object.assign({program:e,fragmentShader:l,source:a,webGLProgram:u,inShapeInfos:s,outShapeInfo:i},Lw(r,e,u)))}function Lw(r,e,t){let o=[],n=[],s,i,a,l=null,u=null;u=r.getUniformLocation(t,"NAN",!1),P().getNumber("WEBGL_VERSION")===1&&(l=r.getUniformLocation(t,"INFINITY",!1));let c=!1;for(let p of e.variableNames){let m={name:p,uniform:r.getUniformLocation(t,p,c),offset:r.getUniformLocation(t,`offset${p}`,c)};e.enableShapeUniforms&&(m.shape=r.getUniformLocation(t,`${p}Shape`,c),m.texShape=r.getUniformLocation(t,`${p}TexShape`,c)),o.push(m)}if(e.enableShapeUniforms&&(s=r.getUniformLocation(t,"outShape",c),a=r.getUniformLocation(t,"outShapeStrides",c),i=r.getUniformLocation(t,"outTexShape",c)),e.customUniforms)for(let p of e.customUniforms)n.push(r.getUniformLocation(t,p.name,c));return{variablesLocations:o,customUniformLocations:n,infLoc:l,nanLoc:u,outShapeLocation:s,outShapeStridesLocation:a,outTexShapeLocation:i}}function DA(r,e){if(r.length!==e.length)throw Error(`Binary was compiled with ${r.length} inputs, but was executed with ${e.length} inputs`);r.forEach((t,o)=>{let n=t.logicalShape,s=e[o],i=s.shape;if(!b.arraysEqual(n,i))throw Error(`Binary was compiled with different shapes than the current args. Shapes ${n} and ${i} must match`);if(t.isUniform&&s.isUniform)return;let a=t.texShape,l=s.isUniform?null:s.texData.texShape;if(!b.arraysEqual(a,l))throw Error(`Binary was compiled with different texture shapes than the current args. Shape ${a} and ${l} must match`)})}function FA(r,e,t,o,n){e.program.enableShapeUniforms||(DA(e.inShapeInfos,t),DA([e.outShapeInfo],[o]));let s=o.texData.texture,i=o.texData.texShape;o.texData.isPacked?r.setOutputPackedMatrixTexture(s.texture,i[0],i[1]):r.setOutputMatrixTexture(s.texture,i[0],i[1]),r.setProgram(e.webGLProgram),r.bindVertexArray(e.webGLProgram.vao),P().getNumber("WEBGL_VERSION")===1&&e.infLoc!==null&&r.gl.uniform1f(e.infLoc,1/0),e.nanLoc!==null&&r.gl.uniform1f(e.nanLoc,NaN);for(let l=0;l<t.length;++l){let u=t[l],{uniform:c,offset:p,shape:m,texShape:f}=e.variablesLocations[l];if(m){let{uniformShape:h}=Rh(e.program.packedInputs,u.shape,u.texData.texShape);switch(h.length){case 1:r.gl.uniform1iv(m,new Int32Array(h));break;case 2:r.gl.uniform2iv(m,new Int32Array(h));break;case 3:r.gl.uniform3iv(m,new Int32Array(h));break;case 4:r.gl.uniform4iv(m,new Int32Array(h));break;default:break}}if(f&&r.gl.uniform2i(f,u.texData.texShape[0],u.texData.texShape[1]),c!=null){if(u.isUniform){if(b.sizeFromShape(u.shape)<2)r.gl.uniform1f(c,u.uniformValues[0]);else{let h=u.uniformValues;h instanceof Float32Array||(h=new Float32Array(h)),r.gl.uniform1fv(c,h)}continue}u.texData.slice!=null&&p!=null&&r.gl.uniform1i(p,u.texData.slice.flatOffset),r.setInputMatrixTexture(u.texData.texture.texture,c,l)}}let a=e.outShapeLocation;if(a)switch(o.shape.length){case 1:r.gl.uniform1iv(a,new Int32Array(o.shape));break;case 2:r.gl.uniform2iv(a,new Int32Array(o.shape));break;case 3:r.gl.uniform3iv(a,new Int32Array(o.shape));break;case 4:r.gl.uniform4iv(a,new Int32Array(o.shape));break;default:break}if(e.outShapeStridesLocation){let l=b.computeStrides(o.shape);switch(o.shape.length){case 2:r.gl.uniform1iv(e.outShapeStridesLocation,new Int32Array(l));break;case 3:r.gl.uniform2iv(e.outShapeStridesLocation,new Int32Array(l));break;case 4:r.gl.uniform3iv(e.outShapeStridesLocation,new Int32Array(l));break;default:break}}if(e.outTexShapeLocation&&r.gl.uniform2i(e.outTexShapeLocation,o.texData.texShape[0],o.texData.texShape[1]),e.program.customUniforms&&n)for(let l=0;l<e.program.customUniforms.length;++l){let u=e.program.customUniforms[l],c=e.customUniformLocations[l],p=n[l];if(u.type==="float")r.gl.uniform1fv(c,p);else if(u.type==="vec2")r.gl.uniform2fv(c,p);else if(u.type==="vec3")r.gl.uniform3fv(c,p);else if(u.type==="vec4")r.gl.uniform4fv(c,p);else if(u.type==="int")r.gl.uniform1iv(c,p);else if(u.type==="ivec2")r.gl.uniform2iv(c,p);else if(u.type==="ivec3")r.gl.uniform3iv(c,p);else if(u.type==="ivec4")r.gl.uniform4iv(c,p);else throw Error(`uniform type ${u.type} is not supported yet.`)}r.executeProgram()}function _A(r,e,t){let o="";e.concat(t).forEach(i=>{let a=i.texData!=null&&i.texData.slice!=null&&i.texData.slice.flatOffset>0;if(r.enableShapeUniforms&&!i.isUniform){let l=i.texData.texShape,{useSqueezeShape:u,uniformShape:c,keptDims:p}=Rh(r.packedInputs,i.shape,l),m="",f="",h="";if(c.length===1&&r.packedInputs){let S=[Math.ceil(l[0]/2),Math.ceil(l[1]/2)];m=`${S[0]>1}_${S[1]>1}`}else if(c.length===2&&!r.packedInputs)f=`${c[0]>1}_${c[1]>1}`;else if(c.length>2&&!r.packedInputs){let S=b.computeStrides(c);h=`${S[0]===l[1]}_${S[S.length-1]===l[1]}`}let g=i.shape.length,d=c.length===2&&b.arraysEqual(i.shape,l),x=b.sizeFromShape(i.shape)===1,y=v.getBroadcastDims(i.shape,t.shape),w=!r.packedInputs&&g===t.shape.length&&b.arraysEqual(l,t.texData.texShape),C=r.packedInputs||c.length>2?"":`${l[0]>1}_${l[1]>1}`;o+=`${g}_${w}_${u?p:""}_${c.length}_${x}_${y}_${d}_${m}_${f}_${h}_${C}_${a}`}else{let l=i.isUniform?"uniform":i.texData.texShape;o+=`${i.shape}_${l}_${a}`}});let n=r.userCode,s=r.constructor.name;return s+="_"+o+"_"+n+`${P().getNumber("WEBGL_VERSION")}`,s}function Ht(r){return P().getBool("WEBGL_USE_SHAPES_UNIFORMS")&&r<=4}var Fh=class{constructor(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=Qa.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];let t=fe();this.outputShape=e,this.enableShapeUniforms=Ht(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?el(["r","c","d"],e):Mo(["r","c","d"],e)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        ${t.output} = result;
      }
    `}};var _h=class{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=Qa.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];let t=fe();this.outputShape=e,this.enableShapeUniforms=Ht(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?el(["r","c","d"],e):Mo(["r","c","d"],e)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        ${t.output} = result;
      }
    `}};var Oh=class{constructor(e){this.variableNames=["A"],this.outTexUsage=lr.DOWNLOAD;let t=fe();this.outputShape=e,this.userCode=`
      ${Dh}

      void main() {
        float x = getAAtOutCoords();
        ${t.output} = encode_float(x);
      }
    `}};var Lh=class{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=lr.DOWNLOAD;let t=fe();this.outputShape=e,this.userCode=`
      ${Dh}

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        ${t.output} = encode_float(x);
      }
    `}};var Lq={R:0,G:1,B:2,A:3},Rp=class{constructor(e,t=!1,o="RGBA"){this.variableNames=["A"],this.customUniforms=[{name:"texShape",type:"ivec2"}];let n=fe();this.outputShape=e,this.enableShapeUniforms=Ht(this.outputShape.length);let s="result";t&&(s="floor(result * 255. + 0.5)");let i="";for(let a=0;a<o.length;a++){let l=o[a];i+=`
          if(offset == ${a}) {
            result = values[${Lq[l]}];
          }`}this.userCode=`
      ${this.enableShapeUniforms?Ju():Qu(e)}

      void main() {
        ivec3 coords = getOutputCoords();
        int flatIndex = getFlatIndex(coords);
        float result = 0.;
        int offset = imod(flatIndex, ${o.length});

        flatIndex = idiv(flatIndex, ${o.length}, 1.);

        int r = flatIndex / texShape[1];
        if (r < texShape[0]) {
          int c = imod(flatIndex, texShape[1]);
          vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
          vec4 values = ${n.texture2D}(A, uv);
          ${i}
        }
        ${n.output} = vec4(${s}, 0., 0., 0.);
      }
    `}};var Ph=class{constructor(e,t=!1){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.customUniforms=[{name:"texShape",type:"ivec2"}];let o=fe();this.outputShape=e,this.enableShapeUniforms=Ht(this.outputShape.length);let n="",s="result";t&&(s="floor(result * 255. + 0.5)");for(let i=0;i<=1;i++)for(let a=0;a<=1;a++){let l=i*2+a;n+=`
          localCoords = coords;
          if(localCoords[2] + ${a} < ${this.enableShapeUniforms?"outShape[2]":`${e[2]}`}) {
          localCoords[2] += ${a};
          if (localCoords[1] + ${i} < ${this.enableShapeUniforms?"outShape[1]":`${e[1]}`}) {
            localCoords[1] += ${i};

            flatIndex = getFlatIndex(localCoords);
            offset = imod(flatIndex, 4);

            flatIndex = idiv(flatIndex, 4, 1.);

            int r = flatIndex / texShape[1];
            int c = imod(flatIndex, texShape[1]);
            vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
            values = ${o.texture2D}(A, uv);

            if (offset == 0) {
              result[${l}] = values[0];
            } else if (offset == 1) {
              result[${l}] = values[1];
            } else if (offset == 2) {
              result[${l}] = values[2];
            } else {
              result[${l}] = values[3];
            }
          }
        }
        `}this.userCode=`
        ${this.enableShapeUniforms?Ju():Qu(e)}

        void main() {
          ivec3 coords = getOutputCoords();

          vec4 result = vec4(0.);
          int flatIndex, r, c, offset;
          ivec3 localCoords;
          vec2 uv;
          vec4 values;

          ${n}

          ${o.output} = ${s};
        }
    `}};function OA(r){let e=fe(),t=`${e.version}
    precision highp float;
    ${e.attribute} vec3 clipSpacePos;
    ${e.attribute} vec2 uv;
    ${e.varyingVs} vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`;return aA(r,t)}function LA(r){let e=new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]);return pA(r,e)}function PA(r){let e=new Uint16Array([0,1,2,2,1,3]);return mA(r,e)}function Fp(r,e,t,o,n,s){hA(e,t);let i=fA(r),a=r.TEXTURE_2D;return ct(r,()=>r.bindTexture(a,i)),ct(r,()=>r.texParameteri(a,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE)),ct(r,()=>r.texParameteri(a,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)),ct(r,()=>r.texParameteri(a,r.TEXTURE_MIN_FILTER,r.NEAREST)),ct(r,()=>r.texParameteri(a,r.TEXTURE_MAG_FILTER,r.NEAREST)),P().getNumber("WEBGL_VERSION")===1?ct(r,()=>r.texImage2D(a,0,o,e,t,0,n,s,null)):ct(r,()=>r.texStorage2D(a,1,o,e,t)),ct(r,()=>r.bindTexture(r.TEXTURE_2D,null)),{texture:i,texShape:[t,e]}}function Pw(r){return r.internalFormatFloat}function zA(r,e,t,o){let[n,s]=Ja(e,t);return Fp(r,n,s,Pw(o),o.textureFormatFloat,r.FLOAT)}function zw(r){return r.internalFormatHalfFloat}function MA(r,e,t,o){let[n,s]=Ja(e,t);return Fp(r,n,s,zw(o),o.textureFormatFloat,o.textureTypeHalfFloat)}function Mw(r){return r.downloadTextureFormat}function BA(r,e,t,o){let[n,s]=Ja(e,t);return Fp(r,n,s,Mw(o),r.RGBA,r.UNSIGNED_BYTE)}function Bw(r){return r.internalFormatPackedFloat}function VA(r,e,t,o){let[n,s]=an(e,t);return Fp(r,n,s,Bw(o),r.RGBA,r.FLOAT)}function Vw(r){return r.internalFormatPackedHalfFloat}function GA(r,e,t,o){let[n,s]=an(e,t);return Fp(r,n,s,Vw(o),r.RGBA,o.textureTypeHalfFloat)}function WA(r,e,t){return ct(r,()=>r.bindBuffer(r.ARRAY_BUFFER,t)),Fw(r,e,"clipSpacePos",t,3,20,0)&&Fw(r,e,"uv",t,2,20,12)}function UA(r,e,t,o,n,s){ct(r,()=>r.bindTexture(r.TEXTURE_2D,e));let i,a,l;n instanceof Uint8Array?(i=new Uint8Array(t*o*4),a=r.UNSIGNED_BYTE,l=r.RGBA):(i=new Float32Array(t*o*4),a=r.FLOAT,l=s.internalFormatPackedFloat),i.set(n),P().getNumber("WEBGL_VERSION")===2?ct(r,()=>r.texSubImage2D(r.TEXTURE_2D,0,0,0,t,o,r.RGBA,a,i)):ct(r,()=>r.texImage2D(r.TEXTURE_2D,0,l,t,o,0,r.RGBA,a,i)),ct(r,()=>r.bindTexture(r.TEXTURE_2D,null))}function HA(r,e,t){ct(r,()=>r.bindTexture(r.TEXTURE_2D,e)),t.data instanceof Uint8Array?P().getNumber("WEBGL_VERSION")===2?ct(r,()=>r.texSubImage2D(r.TEXTURE_2D,0,0,0,t.width,t.height,r.RGBA,r.UNSIGNED_BYTE,t.data)):ct(r,()=>r.texImage2D(r.TEXTURE_2D,0,r.RGBA,t.width,t.height,0,r.RGBA,r.UNSIGNED_BYTE,t.data)):P().getNumber("WEBGL_VERSION")===2?ct(r,()=>r.texSubImage2D(r.TEXTURE_2D,0,0,0,r.RGBA,r.UNSIGNED_BYTE,t)):ct(r,()=>r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,t)),ct(r,()=>r.bindTexture(r.TEXTURE_2D,null))}function qA(r,e,t,o){let n=r.createBuffer();ct(r,()=>r.bindBuffer(r.PIXEL_PACK_BUFFER,n));let a=4*4*e*t;return ct(r,()=>r.bufferData(r.PIXEL_PACK_BUFFER,a,r.STREAM_READ)),ct(r,()=>r.readPixels(0,0,t,e,r.RGBA,r.FLOAT,0)),ct(r,()=>r.bindBuffer(r.PIXEL_PACK_BUFFER,null)),n}function KA(r,e,t){let o=r,n=new Float32Array(t);return o.bindBuffer(o.PIXEL_PACK_BUFFER,e),o.getBufferSubData(o.PIXEL_PACK_BUFFER,0,n),o.bindBuffer(o.PIXEL_PACK_BUFFER,null),n}function jA(r,e,t,o){let[n,s]=Ja(e,t),i=4,a=new Uint8Array(nA(e*t,i));return ct(r,()=>r.readPixels(0,0,n,s,o.downloadTextureFormat,r.UNSIGNED_BYTE,a)),new Float32Array(a.buffer)}function XA(r,e,t,o,n,s,i,a){let l=r,u=new Float32Array(sA(s,i));return l.bindBuffer(l.PIXEL_PACK_BUFFER,e),l.getBufferSubData(l.PIXEL_PACK_BUFFER,0,u),l.bindBuffer(l.PIXEL_PACK_BUFFER,null),u}function YA(r,e,t){let o=new Float32Array(e*t*4);return ct(r,()=>r.readPixels(0,0,t,e,r.RGBA,r.FLOAT,o)),o}var sc=class{constructor(e){this.outputTexture=null,this.program=null,this.disposed=!1,this.itemsToPoll=[];let t=P().getNumber("WEBGL_VERSION");if(e!=null?(this.gl=e,oA(t,e)):this.gl=Mr(t),e=this.gl,P().getNumber("WEBGL_VERSION")===2){let s=e;this.createVertexArray=()=>ct(s,()=>s.createVertexArray()),this.bindVertexArray=i=>ct(s,()=>s.bindVertexArray(i)),this.deleteVertexArray=i=>ct(s,()=>s.deleteVertexArray(i)),this.getVertexArray=()=>ct(s,()=>s.getParameter(s.VERTEX_ARRAY_BINDING))}else if(e!=null){let s=e.getExtension("OES_vertex_array_object");if(s==null)throw new Error("All WebGL1 implementations are expected to offer OES_vertex_array_object.");this.createVertexArray=()=>ct(e,()=>s.createVertexArrayOES()),this.bindVertexArray=i=>ct(e,()=>s.bindVertexArrayOES(i)),this.deleteVertexArray=i=>ct(e,()=>s.deleteVertexArrayOES(i)),this.getVertexArray=()=>ct(e,()=>e.getParameter(s.VERTEX_ARRAY_BINDING_OES))}let o="WEBGL_color_buffer_float",n="EXT_color_buffer_half_float";if(this.parallelCompilationExtension=this.gl.getExtension("KHR_parallel_shader_compile"),P().getNumber("WEBGL_VERSION")===1){let s="OES_texture_float",i="OES_texture_half_float";if(this.textureFloatExtension=Ap(this.gl,s),Qr(this.gl,i))this.textureHalfFloatExtension=Ap(this.gl,i);else if(P().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(o),Qr(this.gl,n))this.colorBufferHalfFloatExtension=Ap(this.gl,n);else if(P().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(o="EXT_color_buffer_float",Qr(this.gl,o))this.colorBufferFloatExtension=this.gl.getExtension(o);else if(Qr(this.gl,n))this.colorBufferHalfFloatExtension=this.gl.getExtension(n);else throw new Error("GL context does not support color renderable floats");this.vertexBuffer=LA(this.gl),this.indexBuffer=PA(this.gl),this.framebuffer=dA(this.gl),this.textureConfig=Ep(this.gl,this.textureHalfFloatExtension)}get debug(){return P().getBool("DEBUG")}dispose(){if(this.disposed)return;this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");let e=this.gl;ct(e,()=>e.finish()),ct(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,null)),ct(e,()=>e.deleteFramebuffer(this.framebuffer)),ct(e,()=>e.bindBuffer(e.ARRAY_BUFFER,null)),ct(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)),ct(e,()=>e.deleteBuffer(this.indexBuffer)),this.disposed=!0}createFloat32MatrixTexture(e,t){return this.throwIfDisposed(),zA(this.gl,e,t,this.textureConfig)}createFloat16MatrixTexture(e,t){return this.throwIfDisposed(),MA(this.gl,e,t,this.textureConfig)}createUnsignedBytesMatrixTexture(e,t){return this.throwIfDisposed(),BA(this.gl,e,t,this.textureConfig)}uploadPixelDataToTexture(e,t){this.throwIfDisposed(),HA(this.gl,e,t)}uploadDenseMatrixToTexture(e,t,o,n){this.throwIfDisposed(),UA(this.gl,e,t,o,n,this.textureConfig)}createFloat16PackedMatrixTexture(e,t){return this.throwIfDisposed(),GA(this.gl,e,t,this.textureConfig)}createPackedMatrixTexture(e,t){return this.throwIfDisposed(),VA(this.gl,e,t,this.textureConfig)}deleteMatrixTexture(e){this.throwIfDisposed(),this.outputTexture===e&&(_w(this.gl,this.framebuffer),this.outputTexture=null),ct(this.gl,()=>this.gl.deleteTexture(e))}downloadByteEncodedFloatMatrixFromOutputTexture(e,t,o){return this.downloadMatrixDriver(e,()=>jA(this.gl,t,o,this.textureConfig))}downloadPackedMatrixFromBuffer(e,t,o,n,s,i){return XA(this.gl,e,t,o,n,s,i,this.textureConfig)}downloadFloat32MatrixFromBuffer(e,t){return KA(this.gl,e,t)}createBufferFromTexture(e,t,o){this.bindTextureToFrameBuffer(e);let n=qA(this.gl,t,o,this.textureConfig);return this.unbindTextureToFrameBuffer(),n}createAndWaitForFence(){let e=this.createFence(this.gl);return this.pollFence(e)}createFence(e){let t,o;if(P().getBool("WEBGL_FENCE_API_ENABLED")){let n=e,s=n.fenceSync(n.SYNC_GPU_COMMANDS_COMPLETE,0);e.flush(),o=()=>{let i=n.clientWaitSync(s,0,0);return i===n.ALREADY_SIGNALED||i===n.CONDITION_SATISFIED},t=s}else P().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(t=this.beginQuery(),this.endQuery(),o=()=>this.isQueryAvailable(t,P().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))):o=()=>!0;return{query:t,isFencePassed:o}}downloadMatrixFromPackedTexture(e,t,o){return this.downloadMatrixDriver(e,()=>YA(this.gl,t,o))}createProgram(e){this.throwIfDisposed();let t=this.gl;this.vertexShader==null&&(this.vertexShader=OA(t));let o=uA(t);ct(t,()=>t.attachShader(o,this.vertexShader)),ct(t,()=>t.attachShader(o,e)),cA(t,o);let n=Object.assign(o,{vao:this.createVertexArray()});return this.debug&&Eh(t,n),n}buildVao(e){this.setProgram(e),this.bindVertexArray(e.vao);let t=this.gl;ct(t,()=>t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer)),WA(t,e,this.vertexBuffer)}deleteProgram(e){this.throwIfDisposed(),e===this.program&&(this.program=null),e!=null&&(ct(this.gl,()=>this.gl.deleteProgram(e)),this.deleteVertexArray(e.vao))}setProgram(e){this.throwIfDisposed(),this.program=e,this.program!=null&&this.debug&&Eh(this.gl,this.program),ct(this.gl,()=>this.gl.useProgram(e))}getUniformLocation(e,t,o=!0){return this.throwIfDisposed(),o?gA(this.gl,e,t):xA(this.gl,e,t)}getAttributeLocation(e,t){return this.throwIfDisposed(),ct(this.gl,()=>this.gl.getAttribLocation(e,t))}getUniformLocationNoThrow(e,t){return this.throwIfDisposed(),this.gl.getUniformLocation(e,t)}setInputMatrixTexture(e,t,o){this.throwIfDisposed(),this.throwIfNoProgram(),yA(this.gl,e,t,o)}setOutputMatrixTexture(e,t,o){this.setOutputMatrixTextureDriver(e,o,t)}setOutputPackedMatrixTexture(e,t,o){this.throwIfDisposed();let[n,s]=an(t,o);this.setOutputMatrixTextureDriver(e,n,s)}setOutputMatrixWriteRegion(e,t,o,n){this.setOutputMatrixWriteRegionDriver(o,e,n,t)}setOutputPackedMatrixWriteRegion(e,t,o,n){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")}debugValidate(){this.program!=null&&Eh(this.gl,this.program),$p(this.gl)}executeProgram(){this.throwIfDisposed(),this.throwIfNoProgram();let e=this.gl;if(this.debug){let t=this.getVertexArray();console.assert(t===this.program.vao,"VAO changed between setProgram and executeProgram!"),this.debugValidate()}ct(e,()=>e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0))}blockUntilAllProgramsCompleted(){this.throwIfDisposed(),ct(this.gl,()=>this.gl.finish())}getQueryTimerExtension(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=Ap(this.gl,P().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension}getQueryTimerExtensionWebGL2(){return this.getQueryTimerExtension()}getQueryTimerExtensionWebGL1(){return this.getQueryTimerExtension()}beginQuery(){if(P().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){let o=this.gl,n=this.getQueryTimerExtensionWebGL2(),s=o.createQuery();return o.beginQuery(n.TIME_ELAPSED_EXT,s),s}let e=this.getQueryTimerExtensionWebGL1(),t=e.createQueryEXT();return e.beginQueryEXT(e.TIME_ELAPSED_EXT,t),t}endQuery(){if(P().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){let t=this.gl,o=this.getQueryTimerExtensionWebGL2();t.endQuery(o.TIME_ELAPSED_EXT);return}let e=this.getQueryTimerExtensionWebGL1();e.endQueryEXT(e.TIME_ELAPSED_EXT)}waitForQueryAndGetTime(e){return B(this,null,function*(){return yield b.repeatedTry(()=>this.disposed||this.isQueryAvailable(e,P().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))),this.getQueryTime(e,P().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))})}getQueryTime(e,t){if(t===0)return null;if(t===2){let o=this.gl;return o.getQueryParameter(e,o.QUERY_RESULT)/1e6}else{let o=this.getQueryTimerExtensionWebGL1();return o.getQueryObjectEXT(e,o.QUERY_RESULT_EXT)/1e6}}isQueryAvailable(e,t){if(t===0)return!0;if(t===2){let o=this.gl,n=this.getQueryTimerExtensionWebGL2(),s=o.getQueryParameter(e,o.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(n.GPU_DISJOINT_EXT)),s&&!this.disjoint}else{let o=this.getQueryTimerExtensionWebGL1(),n=o.getQueryObjectEXT(e,o.QUERY_RESULT_AVAILABLE_EXT);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),n&&!this.disjoint}}pollFence(e){return new Promise(t=>{this.addItemToPoll(()=>e.isFencePassed(),()=>t())})}pollItems(){let e=zq(this.itemsToPoll.map(t=>t.isDoneFn));for(let t=0;t<=e;++t){let{resolveFn:o}=this.itemsToPoll[t];o()}this.itemsToPoll=this.itemsToPoll.slice(e+1)}addItemToPoll(e,t){if(this.itemsToPoll.push({isDoneFn:e,resolveFn:t}),this.itemsToPoll.length>1)return;let o;"setTimeoutCustom"in P().platform&&(o=P().platform.setTimeoutCustom.bind(P().platform)),b.repeatedTry(()=>(this.pollItems(),this.itemsToPoll.length===0),()=>0,null,o)}bindTextureToFrameBuffer(e){this.throwIfDisposed(),Ah(this.gl,e,this.framebuffer),this.debug&&$p(this.gl)}unbindTextureToFrameBuffer(){this.outputTexture!=null?(Ah(this.gl,this.outputTexture,this.framebuffer),this.debug&&$p(this.gl)):_w(this.gl,this.framebuffer)}downloadMatrixDriver(e,t){this.bindTextureToFrameBuffer(e);let o=t();return this.unbindTextureToFrameBuffer(),o}setOutputMatrixTextureDriver(e,t,o){this.throwIfDisposed();let n=this.gl;Ah(n,e,this.framebuffer),this.debug&&$p(n),this.outputTexture=e,ct(n,()=>n.viewport(0,0,t,o)),ct(n,()=>n.scissor(0,0,t,o))}setOutputMatrixWriteRegionDriver(e,t,o,n){this.throwIfDisposed(),ct(this.gl,()=>this.gl.scissor(e,t,o,n))}throwIfDisposed(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")}throwIfNoProgram(){if(this.program==null)throw new Error("No GPU program is currently set.")}};function zq(r){let e=0;for(;e<r.length&&r[e]();++e);return e-1}var{addImpl:ZA,bincountImpl:zh,bincountReduceImpl:QA,bitwiseAndImpl:JA,castImpl:t2,ceilImpl:e2,concatImpl:r2,equalImpl:o2,expImpl:n2,expm1Impl:s2,floorImpl:i2,gatherNdImpl:a2,gatherV2Impl:l2,greaterImpl:u2,greaterEqualImpl:c2,lessImpl:p2,lessEqualImpl:m2,linSpaceImpl:f2,logImpl:h2,maxImpl:d2,maximumImpl:g2,minimumImpl:x2,multiplyImpl:y2,negImpl:b2,notEqualImpl:w2,prodImpl:C2,raggedGatherImpl:S2,raggedRangeImpl:v2,raggedTensorToTensorImpl:N2,rangeImpl:I2,rsqrtImpl:T2,scatterImpl:k2,sigmoidImpl:E2,simpleAbsImpl:Mh,sliceImpl:A2,sparseFillEmptyRowsImpl:$2,sparseReshapeImpl:D2,sparseSegmentReductionImpl:Bh,sqrtImpl:R2,staticRegexReplaceImpl:F2,stridedSliceImpl:_2,stringNGramsImpl:O2,stringSplitImpl:L2,stringToHashBucketFastImpl:P2,subImpl:z2,tileImpl:M2,topKImpl:B2,transposeImpl:ol,uniqueImpl:V2}=dw;function Gw(r,e){return["x","y","z","w","u","v"].slice(0,e).map(t=>`${r}.${t}`)}function we(r,e){return e===1?[r]:Gw(r,e)}function G2(r,e){if(r===1)return"rc";let t="";for(let o=0;o<r;o++)t+=e[o],o<r-1&&(t+=",");return t}var Vh=class{constructor(e){if(this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.enableShapeUniforms=Ht(this.outputShape.length),this.rank===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{let t=we("rc",this.rank),o=It(this.rank),n=this.getOutOfBoundsCondition(t),s=this.getSetup(t),i=this.getOutput(t);this.userCode=`
        void main() {
          ${o} rc = getOutputCoords();

          if(${n}) {
            setOutput(vec4(0));
          } else {
            ${s}

            setOutput(vec4(${i}));
          }
        }
      `}}getSourceCoordsArr(e){let t=[];for(let o=0;o<=1;o++)for(let n=0;n<=1;n++){let s=`${o===0?"r":"rp1"}, ${n===0?"c":"cp1"}`;for(let i=2;i<this.rank;i++)s=`${e[e.length-1-i]},`+s;t.push(s)}return t}getOutOfBoundsCondition(e){if(this.rank===1)return`rc > ${this.enableShapeUniforms?"outShape":this.outputShape[0]}`;let t="";for(let o=this.rank-2;o<this.rank;o++)t+=`${e[o]} >= ${this.enableShapeUniforms?`outShape[${o}]`:this.outputShape[o]}`,o<this.rank-1&&(t+="||");return t}getSetup(e){if(this.rank===1)return"";let t=e.slice(-2),o=this.enableShapeUniforms?`outShape[${this.rank} - 1]`:this.outputShape[this.rank-1],n=this.enableShapeUniforms?`outShape[${this.rank} - 2]`:this.outputShape[this.rank-2];return`
      int r = ${t[0]};
      int c = ${t[1]};
      int rp1 = r + 1;
      int cp1 = c + 1;

      bool cEdge = cp1 >= ${o};
      bool rEdge = rp1 >= ${n};
    `}getOutput(e){let t=this.getSourceCoordsArr(e);return this.rank===1?`getA(rc), (rc + 1 >= ${this.enableShapeUniforms?"outShape":this.outputShape[0]} ? 0. : getA(rc + 1)), 0, 0`:`getA(${t[0]}),
            cEdge ? 0. : getA(${t[1]}),
            rEdge ? 0. : getA(${t[2]}),
            rEdge || cEdge ? 0. : getA(${t[3]})`}};var ic=class{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec3"}],this.outputShape=e,this.enableShapeUniforms=Ht(this.outputShape.length);let o="";for(let n=0;n<4;n++){let s="thisRC = rc;";n%2===1&&(s+="thisRC.z += 1;"),n>1&&(s+="thisRC.y += 1;"),o+=`
        ${s}
        ${n>0?"if(thisRC.y < rows && thisRC.z < cols){":""}
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${n}] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        ${n>0?"}":""}
      `}this.userCode=`
      ${Mq(t,this.enableShapeUniforms)}
      ${this.enableShapeUniforms?Ju():Qu(e)}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = ${this.enableShapeUniforms?"outShape[1]":e[1]};
        int cols = ${this.enableShapeUniforms?"outShape[2]":e[2]};

        ${o}

        setOutput(result);
      }
    `}};function Mq(r,e){return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${e?TA(["r","c","d"],"inputShape"):Mo(["r","c","d"],r)}
      return ivec3(r, c, d);
    }
  `}var Gh=class{constructor(e){this.gpgpu=e,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0,this.freeTextures={},this.usedTextures={},this.logEnabled=!1}acquireTexture(e,t,o){let n=U2(t,o),s=H2(e,n,o);s in this.freeTextures||(this.freeTextures[s]=[]),s in this.usedTextures||(this.usedTextures[s]=[]);let i=W2(e,n,this.gpgpu.gl,this.gpgpu.textureConfig,o);if(this.freeTextures[s].length>0){this.numFreeTextures--,this.numUsedTextures++,this._numBytesFree-=i,this.log();let l=this.freeTextures[s].pop();return this.usedTextures[s].push(l),l}let a;return n===rr.PACKED_2X2_FLOAT32?a=this.gpgpu.createPackedMatrixTexture(e[0],e[1]):n===rr.PACKED_2X2_FLOAT16?a=this.gpgpu.createFloat16PackedMatrixTexture(e[0],e[1]):n===rr.UNPACKED_FLOAT32?a=this.gpgpu.createFloat32MatrixTexture(e[0],e[1]):n===rr.UNPACKED_FLOAT16?a=this.gpgpu.createFloat16MatrixTexture(e[0],e[1]):n===rr.PACKED_4X1_UNSIGNED_BYTE&&(a=this.gpgpu.createUnsignedBytesMatrixTexture(e[0],e[1])),this.usedTextures[s].push(a),this.numUsedTextures++,this._numBytesAllocated+=i,this.log(),a}releaseTexture(e,t,o,n){if(this.freeTextures==null)return;let s=U2(o,n),i=H2(t,s,n);i in this.freeTextures||(this.freeTextures[i]=[]);let a=W2(t,s,this.gpgpu.gl,this.gpgpu.textureConfig,n),l=P().getNumber("WEBGL_DELETE_TEXTURE_THRESHOLD");l!==-1&&this._numBytesAllocated>l?(this.gpgpu.deleteMatrixTexture(e.texture),this._numBytesAllocated-=a):(this.freeTextures[i].push(e),this.numFreeTextures++,this._numBytesFree+=a),this.numUsedTextures--;let u=this.usedTextures[i],c=u&&u.indexOf(e);if(c==null||c<0)throw new Error("Cannot release a texture that was never provided by this texture manager");u[c]=u[u.length-1],u.pop(),this.log()}log(){if(!this.logEnabled)return;let e=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",`${this.numFreeTextures} / ${this.numUsedTextures}`,`(${e})`);let t=this._numBytesFree/this._numBytesAllocated;console.log(`Bytes allocated: ${this._numBytesAllocated}`),console.log(`Bytes unused: ${this._numBytesFree} (${Math.round(100*t)}%)`)}get numBytesAllocated(){return this._numBytesAllocated}get numBytesFree(){return this._numBytesFree}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){if(this.freeTextures!=null){for(let e in this.freeTextures)this.freeTextures[e].forEach(t=>{this.gpgpu.deleteMatrixTexture(t.texture)});for(let e in this.usedTextures)this.usedTextures[e].forEach(t=>{this.gpgpu.deleteMatrixTexture(t.texture)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0}}};function Bq(r,e){let t=r;if(e===t.R32F)return 4;if(e===t.R16F)return 2;if(e===t.RGBA32F)return 16;if(e===r.RGBA)return 16;if(e===t.RGBA16F)return 8;if(e===t.RGBA8)return 4;throw new Error(`Unknown internal format ${e}`)}function W2(r,e,t,o,n){let s=Vq(e,o),i;if(n){let[l,u]=an(r[0],r[1]);i=l*u}else{let[l,u]=Ja(r[0],r[1]);i=l*u}let a=Bq(t,s);return i*a}function Vq(r,e){switch(r){case rr.PACKED_2X2_FLOAT32:return Bw(e);case rr.PACKED_2X2_FLOAT16:return Vw(e);case rr.UNPACKED_FLOAT32:return Pw(e);case rr.UNPACKED_FLOAT16:return zw(e);case rr.PACKED_4X1_UNSIGNED_BYTE:return Mw(e);default:throw new Error(`Unknown physical texture type ${r}`)}}function Gq(r){return P().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?r?rr.PACKED_2X2_FLOAT32:rr.UNPACKED_FLOAT32:r?rr.PACKED_2X2_FLOAT16:rr.UNPACKED_FLOAT16}function U2(r,e){if(r===lr.UPLOAD)return rr.PACKED_2X2_FLOAT32;if(r===lr.RENDER||r==null)return Gq(e);if(r===lr.DOWNLOAD||r===lr.PIXELS)return rr.PACKED_4X1_UNSIGNED_BYTE;throw new Error(`Unknown logical texture type ${r}`)}function H2(r,e,t){return`${r[0]}_${r[1]}_${e}_${t}`}var Xe=class{constructor(e,t){this.variableNames=["A"],this.outputShape=e,this.enableShapeUniforms=Ht(this.outputShape.length),this.userCode=`
      float unaryOperation(float x) {
        ${t}
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `}},De="if (isnan(x)) return x;",q2="return x;",Ww="return abs(x);";var K2="return (x >= 0.0) ? x : (exp(x) - 1.0);",j2=De+`
  return (x < 0.0) ? 0.0 : x;
`,X2=De+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,un="return x;",Y2="return 1.0 / (1.0 + exp(-1.0 * x));";var Q2="return x;",J2=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,t$=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,e$=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,r$="return 1.0 / (1.0 + exp(-1.0 * x));",Tr=class{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.enableShapeUniforms=Ht(this.outputShape.length),this.userCode=`
      vec4 unaryOperation(vec4 x) {
        ${t}
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `}};var Wh=class{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=e,this.enableShapeUniforms=Ht(this.outputShape.length);let t=e.length,o=we("rc",t),n=It(t),s=G2(t,o),i=o.slice(-2),a=t<=1?"rc":`vec2(${i.join(",")})`;this.userCode=`
      void main() {
        ${n} rc = getOutputCoords();
        vec4 packedInput = getA(${s});

        setOutput(getChannel(packedInput, ${a}));
      }
    `}};var Uq=tr.whereImpl,Hq=1e-7,qq=1e-4,Uh={};function Kq(r){return r in Uh||(Uh[r]={}),Uh[r]}var jq=P().getNumber("CPU_HANDOFF_SIZE_THRESHOLD"),Xq=600;function Yq(){return P().global.screen==null?1024:P().global.screen.height*P().global.screen.width*window.devicePixelRatio*Xq/1024/1024}var o$=(()=>{class r extends mn{nextDataId(){return r.nextDataId++}constructor(t){if(super(),this.pendingRead=new WeakMap,this.pendingDisposal=new WeakSet,this.dataRefCount=new WeakMap,this.numBytesInGPU=0,this.uploadWaitMs=0,this.downloadWaitMs=0,this.lastGlFlushTime=0,this.warnedAboutMemory=!1,this.pendingDeletes=0,this.disposed=!1,!P().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");let o;if(t!=null){if(t instanceof sc)o=t;else{let n=Mr(P().getNumber("WEBGL_VERSION"),t);o=new sc(n)}this.binaryCache={},this.gpgpuCreatedLocally=!1}else{let n=Mr(P().getNumber("WEBGL_VERSION"));o=new sc(n),this.binaryCache=Kq(P().getNumber("WEBGL_VERSION")),this.gpgpuCreatedLocally=!0}this.gpgpu=o,this.canvas=this.gpgpu.gl.canvas,this.textureManager=new Gh(this.gpgpu),this.numMBBeforeWarning=Yq(),this.texData=new Ji(this,no())}numDataIds(){return this.texData.numDataIds()-this.pendingDeletes}writeTexture(t,o,n,s,i,a){let l=this.makeTensorInfo(o,n),u=this.texData.get(l.dataId);u.isPacked=!1,u.texture={texture:t,texShape:[s,i]},u.texShape=[s,i];let c=Dp(o),p=new Rp(c,!1,a),m=this.runWebGLProgram(p,[l],n,[[s,i]]);return m.shape=o,u.texture=null,this.disposeIntermediateTensorInfo(l),m.dataId}write(t,o,n){if((P().getBool("WEBGL_CHECK_NUMERICAL_PROBLEMS")||P().getBool("DEBUG"))&&this.checkNumericalProblems(t),n==="complex64"&&t!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");let s={id:this.nextDataId()};return this.texData.set(s,{shape:o,dtype:n,values:t,usage:lr.UPLOAD,refCount:1}),s}refCount(t){return this.texData.has(t)?this.texData.get(t).refCount:0}incRef(t){let o=this.texData.get(t);o.refCount++}decRef(t){if(this.texData.has(t)){let o=this.texData.get(t);o.refCount--}}move(t,o,n,s,i){if(P().getBool("DEBUG")&&this.checkNumericalProblems(o),s==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(t,{shape:n,dtype:s,values:o,usage:lr.UPLOAD,refCount:i})}disposeIntermediateTensorInfo(t){this.disposeData(t.dataId)}readSync(t){let o=this.texData.get(t),{values:n,dtype:s,complexTensorInfos:i,slice:a,shape:l,isPacked:u}=o;if(a!=null){let f;u?f=new Tr(l,un):f=new Xe(l,un);let h=this.runWebGLProgram(f,[{dataId:t,shape:l,dtype:s}],s),g=this.readSync(h.dataId);return this.disposeIntermediateTensorInfo(h),g}if(n!=null)return this.convertAndCacheOnCPU(t);if(s==="string")return n;let c=this.activeTimers!=null,p;c&&(p=b.now());let m;if(s==="complex64"){let f=this.readSync(i.real.dataId),h=this.readSync(i.imag.dataId);m=v.mergeRealAndImagArrays(f,h)}else m=this.getValuesFromTexture(t);return c&&(this.downloadWaitMs+=b.now()-p),this.convertAndCacheOnCPU(t,m)}read(t){return B(this,null,function*(){if(this.pendingRead.has(t)){let g=this.pendingRead.get(t);return new Promise(d=>g.push(d))}let o=this.texData.get(t),{values:n,shape:s,slice:i,dtype:a,complexTensorInfos:l,isPacked:u}=o;if(i!=null){let g;u?g=new Tr(s,un):g=new Xe(s,un);let d=this.runWebGLProgram(g,[{dataId:t,shape:s,dtype:a}],a),x=this.read(d.dataId);return this.disposeIntermediateTensorInfo(d),x}if(n!=null)return this.convertAndCacheOnCPU(t);if(P().getBool("DEBUG")&&!P().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&P().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");let c=null,p;if(a!=="complex64"&&P().get("WEBGL_BUFFER_SUPPORTED")){p=this.decode(t);let g=this.texData.get(p.dataId);c=this.gpgpu.createBufferFromTexture(g.texture.texture,...kp(s))}this.pendingRead.set(t,[]),a!=="complex64"&&(yield this.gpgpu.createAndWaitForFence());let m;if(a==="complex64"){let g=yield Promise.all([this.read(l.real.dataId),this.read(l.imag.dataId)]),d=g[0],x=g[1];m=v.mergeRealAndImagArrays(d,x)}else if(c==null)m=this.getValuesFromTexture(t);else{let g=b.sizeFromShape(s);m=this.gpgpu.downloadFloat32MatrixFromBuffer(c,g)}if(p!=null&&this.disposeIntermediateTensorInfo(p),c!=null){let g=this.gpgpu.gl;ct(g,()=>g.deleteBuffer(c))}let f=this.convertAndCacheOnCPU(t,m),h=this.pendingRead.get(t);return this.pendingRead.delete(t),h.forEach(g=>g(f)),this.pendingDisposal.has(t)&&(this.pendingDisposal.delete(t),this.disposeData(t)&&no().removeDataId(t,this),this.pendingDeletes--),f})}readToGPU(t,o={}){let n=this.texData.get(t),{values:s,shape:i,slice:a,dtype:l,isPacked:u,texture:c}=n;if(l==="complex64")throw new Error("Does not support reading texture for complex64 dtype.");if(a!=null){let h;u?h=new Tr(i,un):h=new Xe(i,un);let g=this.runWebGLProgram(h,[{dataId:t,shape:i,dtype:l}],l),d=this.readToGPU(g,o);return this.disposeIntermediateTensorInfo(g),d}if(c==null)throw s!=null?new Error("Data is not on GPU but on CPU."):new Error("There is no data on GPU or CPU.");let p=this.decode(t,o.customTexShape),m=no().makeTensorFromTensorInfo(p),f=this.texData.get(p.dataId);return Object.assign({tensorRef:m},f.texture)}bufferSync(t){let o=this.readSync(t.dataId);if(t.dtype==="string")try{let n=o.map(s=>b.decodeString(s));return ft(t.shape,t.dtype,n)}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return ft(t.shape,t.dtype,o)}checkNumericalProblems(t){if(t!=null)for(let o=0;o<t.length;o++){let n=t[o];if(!iA(n))throw P().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error(`The value ${n} cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'`):Error(`The value ${n} cannot be represented on this device.`)}}getValuesFromTexture(t){let{shape:o,dtype:n,isPacked:s}=this.texData.get(t),i=b.sizeFromShape(o);if(P().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){let f=this.decode(t),h=this.texData.get(f.dataId),g=this.gpgpu.downloadMatrixFromPackedTexture(h.texture.texture,...kp(o)).subarray(0,i);return this.disposeIntermediateTensorInfo(f),g}let a=P().getBool("WEBGL_PACK")&&s===!0,l=a?Dp(o):o,u=a?new Lh(l):new Oh(l),c=this.runWebGLProgram(u,[{shape:l,dtype:n,dataId:t}],"float32"),p=this.texData.get(c.dataId),m=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(p.texture.texture,p.texShape[0],p.texShape[1]).subarray(0,i);return this.disposeIntermediateTensorInfo(c),m}timerAvailable(){return P().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0}time(t){let o=this.activeTimers,n=[],s=!1;this.programTimersStack==null?(this.programTimersStack=n,s=!0):this.activeTimers.push(n),this.activeTimers=n,t();let i=b.flatten(this.activeTimers.map(u=>u.query)).filter(u=>u!=null),a=b.flatten(this.activeTimers.map(u=>u.name)).filter(u=>u!=null);this.activeTimers=o,s&&(this.programTimersStack=null);let l={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null};return B(this,null,function*(){if(P().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0){let u=yield Promise.all(i);l.kernelMs=b.sum(u),l.getExtraProfileInfo=()=>u.map((c,p)=>({name:a[p],ms:c})).map(c=>`${c.name}: ${c.ms}`).join(", ")}else l.kernelMs={error:"WebGL query timers are not supported in this environment."};return this.uploadWaitMs=0,this.downloadWaitMs=0,l})}memory(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU,numBytesInGPUAllocated:this.textureManager.numBytesAllocated,numBytesInGPUFree:this.textureManager.numBytesFree}}startTimer(){return P().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:b.now(),endMs:null}}endTimer(t){return P().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),t):(t.endMs=b.now(),t)}getQueryTime(t){return B(this,null,function*(){if(P().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0)return this.gpgpu.waitForQueryAndGetTime(t);let o=t;return o.endMs-o.startMs})}disposeData(t,o=!1){if(this.pendingDisposal.has(t))return!1;if(!this.texData.has(t))return!0;if(o?this.texData.get(t).refCount=0:this.texData.get(t).refCount--,!o&&this.texData.get(t).refCount>0)return!1;if(this.pendingRead.has(t))return this.pendingDisposal.add(t),this.pendingDeletes++,!1;this.releaseGPUData(t);let{complexTensorInfos:n}=this.texData.get(t);return n!=null&&(this.disposeData(n.real.dataId,o),this.disposeData(n.imag.dataId,o)),this.texData.delete(t),!0}releaseGPUData(t){let{texture:o,dtype:n,texShape:s,usage:i,isPacked:a,slice:l}=this.texData.get(t),u=l&&l.origDataId||t,c=this.dataRefCount.get(u);c>1?this.dataRefCount.set(u,c-1):(this.dataRefCount.delete(u),o!=null&&(this.numBytesInGPU-=this.computeBytes(s,n),this.textureManager.releaseTexture(o,s,i,a)));let p=this.texData.get(t);p.texture=null,p.texShape=null,p.isPacked=!1,p.slice=null}getTexture(t){return this.uploadToGPU(t),this.texData.get(t).texture.texture}getDataInfo(t){return this.texData.get(t)}shouldExecuteOnCPU(t,o=jq){return P().getBool("WEBGL_CPU_FORWARD")&&t.every(n=>this.texData.get(n.dataId).texture==null&&b.sizeFromShape(n.shape)<o)}getGPGPUContext(){return this.gpgpu}where(t){v.warn("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");let o=t.dataSync();return Uq(t.shape,o)}packedUnaryOp(t,o,n){let s=new Tr(t.shape,o),i=this.compileAndRun(s,[t],n);return no().makeTensorFromTensorInfo(i)}abs(t){if(this.shouldExecuteOnCPU([t])&&t.dtype!=="complex64"){let s=Mh(this.texData.get(t.dataId).values);return this.makeOutput(t.shape,t.dtype,s)}if(P().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,Ww,t.dtype);let o=new Xe(t.shape,Ww),n=this.compileAndRun(o,[t]);return no().makeTensorFromTensorInfo(n)}makeTensorInfo(t,o,n){let s;if(o==="string"&&n!=null&&n.length>0&&b.isString(n[0])){let i=n.map(a=>b.encodeString(a));s=this.write(i,t,o)}else s=this.write(n,t,o);return this.texData.get(s).usage=null,{dataId:s,shape:t,dtype:o}}makeOutput(t,o,n){return no().makeTensorFromTensorInfo(this.makeTensorInfo(t,o,n),this)}unpackTensor(t){let o=new Wh(t.shape);return this.runWebGLProgram(o,[t],t.dtype)}packTensor(t){let o=new Vh(t.shape);return this.runWebGLProgram(o,[t],t.dtype,null,!0)}packedReshape(t,o){let n=[Ki(t.shape),...ji(t.shape)],s={dtype:t.dtype,shape:n,dataId:t.dataId},i=[Ki(o),...ji(o)],a=new ic(i,n),l=!0,u=[n],c=this.runWebGLProgram(a,[s],t.dtype,u,l);return{dataId:c.dataId,shape:o,dtype:c.dtype}}decode(t,o){let n=this.texData.get(t),{isPacked:s,shape:i,dtype:a}=n;if(o!=null){let f=b.sizeFromShape(i),h=o[0]*o[1]*4;b.assert(f<=h,()=>"customTexShape is too small. Row * Column * 4 should be equal or larger than the size of the tensor data.")}let l=Dp(i),u;s?u=new _h(l):u=new Fh(l);let c=!0,p=[o??kp(l)],m=this.runWebGLProgram(u,[{shape:l,dtype:a,dataId:t}],a,p,c,o);return{dtype:a,shape:i,dataId:m.dataId}}runWebGLProgram(t,o,n,s,i=!1,a){let l=this.makeTensorInfo(t.outputShape,n),u=this.texData.get(l.dataId);if(t.packedOutput&&(u.isPacked=!0),t.outPackingScheme===Qa.DENSE){let y=a??kp(t.outputShape);u.texShape=y.map(w=>w*2)}if(t.outTexUsage!=null&&(u.usage=t.outTexUsage),b.sizeFromShape(l.shape)===0)return u.values=b.getTypedArrayFromDType(l.dtype,0),l;let c=[],p=o.map(y=>{if(y.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");let w=this.texData.get(y.dataId);if(w.texture==null){if(!t.packedInputs&&b.sizeFromShape(y.shape)<=P().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:y.shape,texData:null,isUniform:!0,uniformValues:w.values};t.packedInputs&&(w.isPacked=!0,w.shape=y.shape)}if(this.uploadToGPU(y.dataId),!!w.isPacked!=!!t.packedInputs)y=w.isPacked?this.unpackTensor(y):this.packTensor(y),c.push(y),w=this.texData.get(y.dataId);else if(w.isPacked&&!tl(w.shape,y.shape)){let C=y,S=y.shape;y.shape=w.shape,y=this.packedReshape(y,S),c.push(y),w=this.texData.get(y.dataId),C.shape=S}return{shape:y.shape,texData:w,isUniform:!1}});this.uploadToGPU(l.dataId);let m={shape:l.shape,texData:u,isUniform:!1},f=_A(t,p,m),h=this.getAndSaveBinary(f,()=>RA(this.gpgpu,t,p,m)),g=this.activeTimers!=null,d;g&&(d=this.startTimer()),P().get("ENGINE_COMPILE_ONLY")||FA(this.gpgpu,h,p,m,s),c.forEach(y=>this.disposeIntermediateTensorInfo(y)),g&&(d=this.endTimer(d),this.activeTimers.push({name:t.constructor.name,query:this.getQueryTime(d)}));let x=P().getNumber("WEBGL_FLUSH_THRESHOLD");if(x>0){let y=b.now();y-this.lastGlFlushTime>x&&(this.gpgpu.gl.flush(),this.lastGlFlushTime=y)}if(!P().getBool("WEBGL_LAZILY_UNPACK")&&u.isPacked&&i===!1){let y=this.unpackTensor(l);return this.disposeIntermediateTensorInfo(l),y}return l}compileAndRun(t,o,n,s,i=!1){return n=n||o[0].dtype,this.runWebGLProgram(t,o,n,s,i)}getAndSaveBinary(t,o){return t in this.binaryCache||(this.binaryCache[t]=o()),this.binaryCache[t]}getTextureManager(){return this.textureManager}dispose(){this.disposed||(P().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(o=>{this.gpgpu.deleteProgram(this.binaryCache[o].webGLProgram),delete this.binaryCache[o]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)}floatPrecision(){return this.floatPrecisionValue==null&&(this.floatPrecisionValue=z(()=>{if(!P().get("WEBGL_RENDER_FLOAT32_ENABLED")){let t=P().getBool("DEBUG");P().set("DEBUG",!1);let o=this.abs(xt(1e-8)).dataSync()[0];if(P().set("DEBUG",t),o>0)return 32}return 16})),this.floatPrecisionValue}epsilon(){return this.floatPrecision()===32?Hq:qq}uploadToGPU(t){let o=this.texData.get(t),{shape:n,dtype:s,values:i,texture:a,usage:l,isPacked:u}=o;if(a!=null)return;let c=this.activeTimers!=null,p;c&&(p=b.now());let m=o.texShape;if(m==null&&(m=bA(n,u),o.texShape=m),i!=null){let f=Dp(n),h,g=m[1],d=m[0],x=i instanceof Uint8Array||i instanceof Uint8ClampedArray;(u||!x)&&([g,d]=an(m[0],m[1])),u?h=new Ph(f,x):h=new Rp(f,x);let y=x?[d,g]:m,w=this.makeTensorInfo(y,s),C=this.texData.get(w.dataId);x?C.usage=lr.PIXELS:C.usage=lr.UPLOAD,C.texShape=y,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(w.dataId),g,d,i);let S=[[d,g]],A=this.runWebGLProgram(h,[w],s,S,!0),$=this.texData.get(A.dataId);o.texShape=$.texShape,o.isPacked=$.isPacked,o.usage=$.usage,P().get("ENGINE_COMPILE_ONLY")?this.disposeData(A.dataId):(o.texture=$.texture,o.values=null,this.texData.delete(A.dataId)),this.disposeIntermediateTensorInfo(w),c&&(this.uploadWaitMs+=b.now()-p)}else{let f=this.acquireTexture(m,l,s,u);o.texture=f}}convertAndCacheOnCPU(t,o){let n=this.texData.get(t),{dtype:s}=n;return o!=null&&(n.values=Zq(o,s)),n.values}acquireTexture(t,o,n,s){if(this.numBytesInGPU+=this.computeBytes(t,n),!this.warnedAboutMemory&&this.numBytesInGPU>this.numMBBeforeWarning*1024*1024){let i=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn(`High memory usage in GPU: ${i} MB, most likely due to a memory leak`)}return this.textureManager.acquireTexture(t,o,s)}computeBytes(t,o){return t[0]*t[1]*b.bytesPerElement(o)}checkCompileCompletion(){for(let[,t]of Object.entries(this.binaryCache))this.checkCompletion_(t)}checkCompileCompletionAsync(){return B(this,null,function*(){let t=[];if(this.gpgpu.parallelCompilationExtension){for(let[,o]of Object.entries(this.binaryCache))t.push(this.checkCompletionAsync_(o));return Promise.all(t)}else{for(let[,o]of Object.entries(this.binaryCache)){let n=new Promise(s=>{try{this.checkCompletion_(o),s(!0)}catch(i){throw i}});t.push(n)}return Promise.all(t)}})}checkCompletionAsync_(t){return B(this,null,function*(){return this.gpgpu.gl.getProgramParameter(t.webGLProgram,this.gpgpu.parallelCompilationExtension.COMPLETION_STATUS_KHR)?this.checkCompletion_(t):(yield op(),this.checkCompletionAsync_(t))})}checkCompletion_(t){if(this.gpgpu.gl.getProgramParameter(t.webGLProgram,this.gpgpu.gl.LINK_STATUS)===!1)throw console.log(this.gpgpu.gl.getProgramInfoLog(t.webGLProgram)),this.gpgpu.gl.getShaderParameter(t.fragmentShader,this.gpgpu.gl.COMPILE_STATUS)===!1?(Rw(t.source,this.gpgpu.gl.getShaderInfoLog(t.fragmentShader)),new Error("Failed to compile fragment shader.")):new Error("Failed to link vertex and fragment shaders.");return!0}getUniformLocations(){for(let t of Object.values(this.binaryCache)){this.gpgpu.buildVao(t.webGLProgram);let{variablesLocations:o,customUniformLocations:n,infLoc:s,nanLoc:i,outShapeLocation:a,outShapeStridesLocation:l,outTexShapeLocation:u}=Lw(this.gpgpu,t.program,t.webGLProgram);t.variablesLocations=o,t.customUniformLocations=n,t.infLoc=s,t.nanLoc=i,t.outShapeLocation=a,t.outShapeStridesLocation=l,t.outTexShapeLocation=u}}createTensorFromGPUData(t,o,n){t.channels=t.channels||"RGBA";let{texture:s,height:i,width:a,channels:l}=t,u=no().backend;if(!u.gpgpu.gl.isTexture(s))throw new Error("The texture is invalid. Also, please make sure the texture and the TFJS WebGL backend are using the same canvas. If you want to use your own custom canvas, you have to create and use the custom TFJS WebGL backend created from the canvas through 'new tf.MathBackendWebGL(customCanvas)'.");let c=u.writeTexture(s,o,n,i,a,l);return no().makeTensorFromDataId(c,o,n,u)}}return r.nextDataId=0,r})();function Zq(r,e){if(e==="float32"||e==="complex64")return r;if(e==="int32"||e==="bool"){let t=e==="int32"?new Int32Array(r.length):new Uint8Array(r.length);for(let o=0;o<t.length;++o)t[o]=Math.round(r[o]);return t}else throw new Error(`Unknown dtype ${e}`)}Ri.isBrowser()&&Sm("webgl",()=>new o$,2);var ac=`
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`;var kr=class{constructor(e,t,o){this.variableNames=["A","B"],this.outputShape=v.assertAndGetBroadcastShape(t,o),this.enableShapeUniforms=Ht(this.outputShape.length),this.userCode=`
      float binaryOperation(float a, float b) {
        ${e}
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `}};var Vr=`
  result.r = isNaN.r ? NAN : result.r;
  result.g = isNaN.g ? NAN : result.g;
  result.b = isNaN.b ? NAN : result.b;
  result.a = isNaN.a ? NAN : result.a;
`;var Br=class{constructor(e,t,o,n=!1){this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=v.assertAndGetBroadcastShape(t,o);let s=this.outputShape.length;this.enableShapeUniforms=Ht(s);let i="";if(n)if(s===0||b.sizeFromShape(this.outputShape)===1)i=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(i=`
          ${It(s)} coords = getOutputCoords();
        `,s===1)this.enableShapeUniforms?i+=`
            result.y = (coords + 1) >= outShape ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `:i+=`
            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{let l=we("coords",s);this.enableShapeUniforms?i+=`
            bool nextRowOutOfBounds =
              (${l[s-2]} + 1) >= outShape[${s} - 2];
            bool nextColOutOfBounds =
              (${l[s-1]} + 1) >= outShape[${s} - 1];
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `:i+=`
            bool nextRowOutOfBounds =
              (${l[s-2]} + 1) >= ${this.outputShape[s-2]};
            bool nextColOutOfBounds =
              (${l[s-1]} + 1) >= ${this.outputShape[s-1]};
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        ${e}
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        ${i}

        setOutput(result);
      }
    `}};function Ce(r){let{inputs:e,backend:t}=r,{x:o}=e;return t.incRef(o.dataId),{dataId:o.dataId,shape:o.shape,dtype:o.dtype}}var n$={kernelName:Uo,backendName:"webgl",kernelFunc:Ce};function Er(r){let{inputs:e,backend:t}=r,{real:o,imag:n}=e,s=t.makeTensorInfo(o.shape,"complex64"),i=t.texData.get(s.dataId),a=Ce({inputs:{x:o},backend:t}),l=Ce({inputs:{x:n},backend:t});return i.complexTensorInfos={real:a,imag:l},s}var s$={kernelName:Cl,backendName:"webgl",kernelFunc:Er};var Uw="return (a < 0.) ? b * a : a;",Hw=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function Qq(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{alpha:s}=o,i=t.makeTensorInfo([],"float32",b.createScalarValue(s,"float32")),a=P().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Br(Hw,n.shape,i.shape):new kr(Uw,n.shape,i.shape),l=t.runWebGLProgram(a,[n,i],"float32");return t.disposeIntermediateTensorInfo(i),l}var i$={kernelName:ri,backendName:"webgl",kernelFunc:Qq};var qw="return (a < 0.) ? b * a : a;",Kw=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function Jq(r){let{inputs:e,backend:t}=r,{x:o,alpha:n}=e,s=P().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Br(Kw,o.shape,n.shape):new kr(qw,o.shape,n.shape);return t.runWebGLProgram(s,[o,n],"float32")}var a$={kernelName:di,backendName:"webgl",kernelFunc:Jq};var So="if (isnan(x)) return x;";function mt({opSnippet:r,packedOpSnippet:e,cpuKernelImpl:t,dtype:o}){return({inputs:n,backend:s})=>{let{x:i}=n,a=s,l=o||i.dtype;if(a.shouldExecuteOnCPU([i])&&t!=null){let p=a.texData.get(i.dataId),m=t(p.values,l);return a.makeTensorInfo(i.shape,l,m)}let u=P().getBool("WEBGL_PACK_UNARY_OPERATIONS")&&e!=null,c;return u?c=new Tr(i.shape,e):c=new Xe(i.shape,r),a.runWebGLProgram(c,[i],l)}}function Gt({opSnippet:r,packedOpSnippet:e,checkOutOfBounds:t=!1,supportsComplex:o=!1,cpuKernelImpl:n,dtype:s}){return({inputs:i,backend:a})=>{let{a:l,b:u}=i,c=a;if(o&&l.dtype==="complex64"){let h=c.texData.get(l.dataId),g=c.texData.get(u.dataId),[d,x]=[[h.complexTensorInfos.real,g.complexTensorInfos.real],[h.complexTensorInfos.imag,g.complexTensorInfos.imag]].map(w=>{let[C,S]=w,E={dataId:C.dataId,dtype:C.dtype,shape:l.shape},A={dataId:S.dataId,dtype:S.dtype,shape:u.shape},$=new kr(r,l.shape,u.shape);return c.runWebGLProgram($,[E,A],Te(C.dtype,S.dtype))}),y=Er({inputs:{real:d,imag:x},backend:c});return c.disposeIntermediateTensorInfo(d),c.disposeIntermediateTensorInfo(x),y}let p=s||Te(l.dtype,u.dtype);if((l.dtype==="string"||u.dtype==="string"||c.shouldExecuteOnCPU([l,u]))&&n!=null){let h=c.texData.get(l.dataId).values,g=c.texData.get(u.dataId).values,d=l.dtype==="string"?v.fromUint8ToStringArray(h):h,x=l.dtype==="string"?v.fromUint8ToStringArray(g):g,[y,w]=n(l.shape,u.shape,d,x,p),C=c.makeTensorInfo(w,p),S=c.texData.get(C.dataId);return S.values=y,C}let m=P().getBool("WEBGL_PACK_BINARY_OPERATIONS")&&e!=null,f;return m?f=new Br(e,l.shape,u.shape,t):f=new kr(r,l.shape,u.shape),c.runWebGLProgram(f,[l,u],p)}}function Es(r,e=!1){if(r==="linear")return e?Q2:q2;if(r==="relu")return e?t$:j2;if(r==="elu")return e?J2:K2;if(r==="relu6")return e?e$:X2;if(r==="prelu")return e?Kw:qw;if(r==="leakyrelu")return e?Hw:Uw;if(r==="sigmoid")return e?r$:Y2;throw new Error(`Activation ${r} has not been implemented for the WebGL backend.`)}var lc=class{constructor(e,t,o,n=!1,s=!1,i=!1,a=null,l=!1,u=!1){this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=o,this.enableShapeUniforms=Ht(this.outputShape.length);let c=n?e[1]:e[2],p=Math.ceil(c/2),m=n?"i * 2, rc.y":"rc.y, i * 2",f=s?"rc.z, i * 2":"i * 2, rc.z",h=n?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],g=s?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"],d="",x="";a&&(l?d=`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${a}
        }`:u?d=`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${a}
        }`:d=`vec4 activation(vec4 x) {
          ${a}
        }`,x="result = activation(result);");let y=i?"result += getBiasAtOutCoords();":"";i&&this.variableNames.push("bias"),l&&this.variableNames.push("preluActivationWeights"),u&&this.variableNames.push("leakyreluAlpha");let w="rc.x",C="rc.x";e[0]<t[0]?w=`imod(rc.x, ${e[0]})`:t[0]<e[0]&&(C=`imod(rc.x, ${t[0]})`),this.userCode=`
      ${d}
      // Don't use uniform for sharedDimensionPacked for performance.
      const float sharedDimension = ${p}.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        int batchA = ${w};
        int batchB = ${C};
        for (int i = 0; i < ${p}; i++) {
          vec4 a = getMatrixA(batchA, ${m});
          vec4 b = getMatrixB(batchB, ${f});

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (${h[0]} * ${g[0]});
          result += (${h[1]} * ${g[1]});
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        ${y}

        ${x}

        setOutput(result);
      }
    `}};var jw={REAL:"return areal * breal - aimag * bimag;",IMAG:"return areal * bimag + aimag * breal;"},_p=class{constructor(e,t,o){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=v.assertAndGetBroadcastShape(t,o),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        ${e}
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `}};var l$="return a * b;";function Op(r){let{inputs:e,backend:t}=r,{a:o,b:n}=e,s=v.upcastType(o.dtype,n.dtype);if(o.dtype==="complex64"){let a=t.texData.get(o.dataId),l=t.texData.get(n.dataId),u=new _p(jw.REAL,o.shape,n.shape),c=new _p(jw.IMAG,o.shape,n.shape),p=[{dataId:a.complexTensorInfos.real.dataId,dtype:a.complexTensorInfos.real.dtype,shape:o.shape},{dataId:a.complexTensorInfos.imag.dataId,dtype:a.complexTensorInfos.imag.dtype,shape:o.shape},{dataId:l.complexTensorInfos.real.dataId,dtype:l.complexTensorInfos.real.dtype,shape:n.shape},{dataId:l.complexTensorInfos.imag.dataId,dtype:l.complexTensorInfos.imag.dtype,shape:n.shape}],m=t.runWebGLProgram(u,p,"float32"),f=t.runWebGLProgram(c,p,"float32"),h=Er({inputs:{real:m,imag:f},backend:t});return t.disposeIntermediateTensorInfo(m),t.disposeIntermediateTensorInfo(f),h}if(t.shouldExecuteOnCPU([o,n])){let a=t.texData.get(o.dataId),l=t.texData.get(n.dataId),[u,c]=y2(o.shape,n.shape,a.values,l.values,s),p=t.makeTensorInfo(c,s),m=t.texData.get(p.dataId);return m.values=u,p}let i;return P().getBool("WEBGL_PACK_BINARY_OPERATIONS")?i=new Br(l$,o.shape,n.shape):i=new kr(l$,o.shape,n.shape),t.runWebGLProgram(i,[o,n],s)}var u$={kernelName:Vn,backendName:"webgl",kernelFunc:Op};function c$(r,e,t){let o=[Ki(r.shape),...ji(r.shape)],n={dtype:r.dtype,shape:o,dataId:r.dataId},s=[Ki(e),...ji(e)],i=new ic(s,o),a=!0,l=[o],u=t.runWebGLProgram(i,[n],r.dtype,l,a);return{dataId:u.dataId,shape:e,dtype:u.dtype}}function J(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{shape:s}=o,i=t,a=b.sizeFromShape(n.shape),l=b.inferFromImplicitShape(s,a),u=b.sizeFromShape(l);b.assert(a===u,()=>`The new shape (${l}) has ${u} elements and the old shape (${n.shape}) has ${a} elements. The new shape and old shape must have the same number of elements.`);let c=i.texData.get(n.dataId);return c.isPacked&&!tl(n.shape,l)&&!(c.texture!==null&&tl(c.shape,l))?c$(n,l,i):(i.incRef(n.dataId),{dataId:n.dataId,shape:l,dtype:n.dtype})}var p$={kernelName:xi,backendName:"webgl",kernelFunc:J};var Lp=class{constructor(e,t){this.variableNames=["x"];let{windowSize:o,batchSize:n,inSize:s,outSize:i}=e;this.outputShape=[n,i];let a=Math.floor(o/4)*4,l=o%4,u="sumValue += dot(values, ones);";if(t!=null){let p=1/t;u=`sumValue += dot(values * ${b.isInt(p)?p.toPrecision(2):p}, ones);`}let c="";s%o>0&&(c=`
        if (inIdx < 0 || inIdx >= ${s}) {
          return 0.0;
        }
      `),this.userCode=`
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${c}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${o};

        float sumValue = 0.0;

        for (int i = 0; i < ${a}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${u}
        }

        int inIdx = inOffset + ${a};
        if (${l===1}) {
          vec4 values = vec4(getValue(batch, inIdx), 0.0, 0.0, 0.0);

          ${u}
        } else if (${l===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1), 0.0, 0.0);

          ${u}
        } else if (${l===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2), 0.0);

          ${u}
        }
        setOutput(sumValue);
      }
    `}};var Hh=class{constructor(e,t){this.variableNames=["x"];let{windowSize:o,batchSize:n,inSize:s,outSize:i}=e;this.outputShape=[n,i];let a="0.0",l="";t==="prod"?a="1.0":t==="min"?(a="1.0 / 1e-20",l="min"):t==="max"&&(a="-1.0 / 1e-20",l="max");let u=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t==="sum"?u="sumValue":t==="prod"?u="prodValue":t==="all"?u="allValue":t==="any"&&(u="anyValue");let c=Math.floor(o/4)*4,p=o%4,m=`
      if (${t==="sum"}) {
        sumValue += dot(values, ones);
      } else if (${t==="prod"}) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = ${l}(values, minMaxValue);
        if (${t==="min"} || ${t==="max"}) {
          minMaxValue = ${l}(values, minMaxValue);
          bvec4 isNaN = isnan(values);
          if (isNaN.r || isNaN.g || isNaN.b || isNaN.a) {
            minMaxValue = vec4(NAN);
          }
        }
      }
    `,f="vec4";t==="all"?(a="1.0",m=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,f="bvec4"):t==="any"&&(a="0.0",m=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,f="bvec4");let h="";s%o>0&&(h=`
        if (inIdx < 0 || inIdx >= ${s}) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = ${a};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${h}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${o};

        vec4 minMaxValue = vec4(${a});
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < ${c}; i += 4) {
          int inIdx = inOffset + i;
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${m}
        }

        int inIdx = inOffset + ${c};
        if (${p===1}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          ${m}
        } else if (${p===2}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          ${m}
        } else if (${p===3}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          ${m}
        }
        setOutput(${u});
      }
    `}};function eK(r){let e=[];for(;e.length===0||e[e.length-1].outSize!==1;){let t=e.length?e[e.length-1].outSize:r[1],o=v.computeOptimalWindowSize(t);e.push({inSize:t,windowSize:o,outSize:Math.ceil(t/o)})}return e}function Gr(r,e,t,o){let n=eK(r.shape),s=r;for(let i=0;i<n.length;i++){let{inSize:a,windowSize:l,outSize:u}=n[i],c,p;t==="mean"?c=i===0?new Lp({windowSize:l,inSize:a,batchSize:r.shape[0],outSize:u},a):new Lp({windowSize:l,inSize:a,batchSize:r.shape[0],outSize:u}):c=new Hh({windowSize:l,inSize:a,batchSize:r.shape[0],outSize:u},t),p=s,s=o.runWebGLProgram(c,[s],e),p.dataId!==r.dataId&&o.disposeIntermediateTensorInfo(p)}return s}var qh=class{constructor(e,t){this.variableNames=["A"];let o=new Array(e.length);for(let i=0;i<o.length;i++)o[i]=e[t[i]];this.outputShape=o,this.rank=o.length;let n=It(this.rank),s=rK(t);this.userCode=`
    void main() {
      ${n} resRC = getOutputCoords();
      setOutput(getA(${s}));
    }
    `}};function rK(r){let e=r.length;if(e>6)throw Error(`Transpose for rank ${e} is not yet supported`);let t=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],o=new Array(e);for(let n=0;n<r.length;n++)o[r[n]]=t[n];return o.join()}var Kh=class{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;let o=new Array(e.length);for(let c=0;c<o.length;c++)o[c]=e[t[c]];if(this.outputShape=o,this.rank=o.length,this.rank>6)throw Error(`Packed transpose for rank ${this.rank} is not yet supported.`);let n=It(this.rank),s=Gw("rc",this.rank),i=new Array(this.rank);for(let c=0;c<t.length;c++)i[t[c]]=s[c];let a=`vec2(${i.slice(-2).join()})`,l=`++${s[this.rank-1]} < ${o[this.rank-1]}`,u=`getChannel(getA(${i.join()}), ${a})`;this.userCode=`
    void main() {
      ${n} rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = ${u};
      if(${l}) {
        result[1] = ${u};
      }
      --${s[this.rank-1]};
      if(++${s[this.rank-2]} < ${o[this.rank-2]}) {
        result[2] = ${u};
        if(${l}) {
          result[3] = ${u};
        }
      }
      setOutput(result);
    }
    `}};function Xi(r,e,t){let o=P().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Kh(r.shape,e):new qh(r.shape,e);return t.runWebGLProgram(o,[r],r.dtype)}function m$(r,e,t,o){let n=e,s=r.shape.length,i=b.parseAxisParam(n,r.shape),a=i,l=v.getAxesPermutation(a,s),u=l!=null,c=r;u&&(c=Xi(r,l,o),a=v.getInnerMostAxes(a.length,s)),v.assertAxesAreInnerMostDims("sum",a,s);let[p,m]=v.computeOutAndReduceShapes(c.shape,a),f=p;t&&(f=v.expandShapeToKeepDim(p,i));let h=b.sizeFromShape(m),d=b.sizeFromShape(r.shape)/h,x=J({inputs:{x:c},attrs:{shape:[d,h]},backend:o}),y=ba(r.dtype),w=Gr(x,y,"sum",o),C=J({inputs:{x:w},attrs:{shape:f},backend:o});return o.disposeIntermediateTensorInfo(x),o.disposeIntermediateTensorInfo(w),u&&o.disposeIntermediateTensorInfo(c),C}function nl(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{axis:s,keepDims:i}=o;return m$(n,s,i,t)}var f$={kernelName:vi,backendName:"webgl",kernelFunc:nl};function ie(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{perm:s}=o,i=t,a=n.shape.length,l=new Array(a);for(let c=0;c<l.length;c++)l[c]=n.shape[s[c]];let u;if(i.shouldExecuteOnCPU([n])){let p=i.texData.get(n.dataId).values,m=ol(p,n.shape,n.dtype,s,l);u=i.makeTensorInfo(l,n.dtype);let f=i.texData.get(u.dataId);f.values=m}else u=Xi(n,s,i);return u}var h$={kernelName:qo,backendName:"webgl",kernelFunc:ie};var Xw=1e3;function sl({a:r,b:e,transposeA:t,transposeB:o,backend:n,bias:s=null,preluActivationWeights:i=null,leakyreluAlpha:a=0,activation:l=null}){let u=r.shape.length,c=e.shape.length,p=t?r.shape[u-2]:r.shape[u-1],m=o?e.shape[c-1]:e.shape[c-2],f=t?r.shape[u-1]:r.shape[u-2],h=o?e.shape[c-2]:e.shape[c-1],g=r.shape.slice(0,-2),d=e.shape.slice(0,-2),x=b.sizeFromShape(g),y=b.sizeFromShape(d),C=_r.assertAndGetBroadcastShape(r.shape.slice(0,-2),e.shape.slice(0,-2)).concat([f,h]);b.assert(p===m,()=>`Error in matMul: inner shapes (${p}) and (${m}) of Tensors with shapes ${r.shape} and ${e.shape} and transposeA=${t} and transposeB=${o} must match.`);let S=t?[x,p,f]:[x,f,p],E=o?[y,h,m]:[y,m,h],A=J({inputs:{x:r},backend:n,attrs:{shape:S}}),$=J({inputs:{x:e},backend:n,attrs:{shape:E}}),_=[A,$],L=Math.max(x,y),M=t?A.shape[1]:A.shape[2],V=s!=null,G=i!=null,W=l==="leakyrelu",U=l!=null?Es(l,!0):null,K=V||G||W||U!=null,Z;if((f===1||h===1)&&M>Xw&&K===!1){let Q=A,tt=$;t&&(Q=ie({inputs:{x:A},backend:n,attrs:{perm:[0,2,1]}}),_.push(Q)),o&&(tt=ie({inputs:{x:$},backend:n,attrs:{perm:[0,2,1]}}),_.push(tt));let et=h!==1,nt=h===1,rt=Q;et&&(rt=J({inputs:{x:Q},backend:n,attrs:{shape:[L,M,1]}}),_.push(rt));let ut=h===1?2:1,st=tt;nt&&(st=J({inputs:{x:tt},backend:n,attrs:{shape:[L,1,M]}}),_.push(st));let pt=Op({inputs:{a:rt,b:st},backend:n});Z=nl({inputs:{x:pt},backend:n,attrs:{axis:ut,keepDims:!0}}),_.push(pt)}else{let Q=Te(r.dtype,e.dtype),tt=new lc(S,E,[L,f,h],t,o,V,U,G,W),et=[A,$];if(s!=null&&et.push(s),G&&et.push(i),W){let nt=n.makeTensorInfo([],"float32",b.createScalarValue(a,"float32"));et.push(nt),_.push(nt)}Z=n.runWebGLProgram(tt,et,Q)}let q=J({inputs:{x:Z},backend:n,attrs:{shape:C}});_.push(Z);for(let Q of _)n.disposeIntermediateTensorInfo(Q);return q}function oK(r){let{inputs:e,backend:t,attrs:o}=r,{a:n,b:s,bias:i,preluActivationWeights:a}=e,{transposeA:l,transposeB:u,activation:c,leakyreluAlpha:p}=o;return sl({a:n,b:s,transposeA:l,transposeB:u,backend:t,bias:i,preluActivationWeights:a,leakyreluAlpha:p,activation:c})}var d$={kernelName:pa,backendName:"webgl",kernelFunc:oK};var g$="return abs(x);";function nK(r){let{inputs:e,backend:t}=r,{x:o}=e;if(t.shouldExecuteOnCPU([o])&&o.dtype!=="complex64"){let s=t.texData.get(o.dataId),i=Mh(s.values);return t.makeTensorInfo(o.shape,o.dtype,i)}let n;return P().getBool("WEBGL_PACK_UNARY_OPERATIONS")?n=new Tr(o.shape,g$):n=new Xe(o.shape,g$),t.runWebGLProgram(n,[o],o.dtype)}var x$={kernelName:zs,backendName:"webgl",kernelFunc:nK};var sK=De+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,iK=mt({opSnippet:sK}),y$={kernelName:hn,backendName:"webgl",kernelFunc:iK};var aK=De+`
  if (x < 1.0) return NAN;
return log(x + sqrt(x * x - 1.0));`,lK=mt({opSnippet:aK}),b$={kernelName:dn,backendName:"webgl",kernelFunc:lK};var w$="return a + b;",uK=Gt({opSnippet:w$,packedOpSnippet:w$,supportsComplex:!0,cpuKernelImpl:ZA}),C$={kernelName:Io,backendName:"webgl",kernelFunc:uK};var jh=class{constructor(e,t){this.outputShape=[],this.outputShape=e,this.variableNames=t.map((s,i)=>`T${i}`);let o=[];this.variableNames.forEach(s=>{o.push(`float v${s} = get${s}AtOutCoords();`)});let n=this.variableNames.map(s=>`v${s}`).join(" + ");this.userCode=`
      void main() {
        ${o.join(`
        `)}

        float result = ${n};
        setOutput(result);
      }
    `}};var Xh=class{constructor(e,t){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.variableNames=t.map((s,i)=>`T${i}`);let o=[];this.variableNames.forEach(s=>{o.push(`vec4 v${s} = get${s}AtOutCoords();`)});let n=this.variableNames.map(s=>`v${s}`).join(" + ");this.userCode=`
      void main() {
        ${o.join(`
        `)}

        vec4 result = ${n};
        setOutput(result);
      }
    `}};function Yh(r){let{inputs:e,backend:t}=r,o=e;if(o.length===1)return Ce({inputs:{x:o[0]},backend:t});if(o.length>P().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){let l=Math.floor(o.length/2),u=Yh({inputs:o.slice(0,l),backend:t}),c=Yh({inputs:o.slice(l),backend:t});return Yh({inputs:[u,c],backend:t})}let n=o.map(l=>l.dtype).reduce((l,u)=>Te(l,u)),s=o.map(l=>l.shape),a=P().getBool("WEBGL_PACK")?new Xh(o[0].shape,s):new jh(o[0].shape,s);return t.runWebGLProgram(a,o,n)}var S$={kernelName:dl,backendName:"webgl",kernelFunc:Yh};function cK(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{axis:s,keepDims:i}=o,a=n.shape.length,l=b.parseAxisParam(s,n.shape),u=l,c=v.getAxesPermutation(u,a),p=n;c!=null&&(p=ie({inputs:{x:n},backend:t,attrs:{perm:c}}),u=v.getInnerMostAxes(u.length,a)),v.assertAxesAreInnerMostDims("all",u,a);let[m,f]=v.computeOutAndReduceShapes(p.shape,u),h=b.sizeFromShape(f),g=J({inputs:{x:p},backend:t,attrs:{shape:[-1,h]}}),d=Gr(g,g.dtype,"all",t),x;if(i){let y=v.expandShapeToKeepDim(m,l);x=J({inputs:{x:d},backend:t,attrs:{shape:y}})}else x=J({inputs:{x:d},backend:t,attrs:{shape:m}});return t.disposeIntermediateTensorInfo(g),t.disposeIntermediateTensorInfo(d),c!=null&&t.disposeIntermediateTensorInfo(p),x}var v$={kernelName:gl,backendName:"webgl",kernelFunc:cK};function pK(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{axis:s,keepDims:i}=o,a=n.shape.length,l=b.parseAxisParam(s,n.shape),u=l,c=v.getAxesPermutation(u,a),p=n;c!=null&&(p=ie({inputs:{x:n},backend:t,attrs:{perm:c}}),u=v.getInnerMostAxes(u.length,a)),v.assertAxesAreInnerMostDims("any",u,a);let[m,f]=v.computeOutAndReduceShapes(p.shape,u),h=b.sizeFromShape(f),g=J({inputs:{x:p},backend:t,attrs:{shape:[-1,h]}}),d=Gr(g,g.dtype,"any",t),x;if(i){let y=v.expandShapeToKeepDim(m,l);x=J({inputs:{x:d},backend:t,attrs:{shape:y}})}else x=J({inputs:{x:d},backend:t,attrs:{shape:m}});return t.disposeIntermediateTensorInfo(g),t.disposeIntermediateTensorInfo(d),c!=null&&t.disposeIntermediateTensorInfo(p),x}var N$={kernelName:xl,backendName:"webgl",kernelFunc:pK};var Zh=class{constructor(e,t,o){this.variableNames=["A"];let{windowSize:n,batchSize:s,outSize:i}=e;o||this.variableNames.push("bestIndicesA"),this.outputShape=[s,i];let a=t==="max"?">":"<",l=o?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${n};

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < ${n}; i++) {
          int inIdx = ${l};
          float candidate = getA(batch, inIdx);
          if (candidate ${a} bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `}};var Qh=class{constructor(e,t,o,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,b.assert(e.length>2,()=>`Packed arg${o.charAt(0).toUpperCase()+o.slice(1)} supports only inputs with rank above 2.`);let s=e[e.length-1],i=Math.ceil(s/t);this.outputShape=e.slice(0,-1),i>1&&this.outputShape.push(i),n||this.variableNames.push("bestIndicesA");let a=this.outputShape,l=a.length,u=It(l),c=we("coords",l),p,m;if(i===1){m=l+1;let $=It(m);p=`
        ${$} sourceLocR = ${$}(${c.join()}, 0);
        ++${c[l-1]};
        ${$} sourceLocG = ${$}(${c.join()}, 0);
        ++${c[l-2]};
        ${$} sourceLocA = ${$}(${c.join()}, 0);
        --${c[l-1]};
        ${$} sourceLocB = ${$}(${c.join()}, 0);
        --${c[l-2]};`}else m=l,p=`
        ${u} sourceLocR = coords;
        ++${c[l-1]};
        ${u} sourceLocG = coords;
        ++${c[l-2]};
        ${u} sourceLocA = coords;
        --${c[l-1]};
        ${u} sourceLocB = coords;
        --${c[l-2]};`;let f=["x","y","z","w","u","v"].slice(0,m),h="."+f[m-1],g=f.map($=>"int "+$),d=we("sourceLocR",m-1).concat("inIdx.r"),x=we("sourceLocG",m-1).concat("inIdx.g"),y=we("sourceLocB",m-1).concat("inIdx.b"),w=we("sourceLocA",m-1).concat("inIdx.a"),C=o==="max"?"greaterThan":"lessThan",S=n?"":`
          inIdx = round(vec4(getBestIndicesAChannel(${d.join()}),
                             getBestIndicesAChannel(${x.join()}),
                             getBestIndicesAChannel(${y.join()}),
                             getBestIndicesAChannel(${w.join()})));`,E=`vec4(
            getAChannel(${d.join()}),
            hasNextCol ? getAChannel(${x.join()}) : 0.,
            hasNextRow ? getAChannel(${y.join()}) : 0.,
            hasNextRow && hasNextCol ? getAChannel(${w.join()}) : 0.)`,A=n?"":`
      float getBestIndicesAChannel(${g.join()}) {
        return getChannel(getBestIndicesA(${f.join()}),
                                          vec2(${f.slice(-2).join()}));
      }`;this.userCode=`
      float getAChannel(${g.join()}) {
        return getChannel(getA(${f.join()}),
                               vec2(${f.slice(-2).join()}));
      }
      ${A}
      void main() {
        ${u} coords = getOutputCoords();
        bool hasNextCol = ${c[l-1]} < ${a[l-1]-1};
        bool hasNextRow = ${c[l-2]} < ${a[l-2]-1};
        ${p}
        ivec4 srcIdx = ivec4(sourceLocR${h}, sourceLocG${h},
          sourceLocB${h}, sourceLocA${h}) * ${t};
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = ${E};

        for (int i = 0; i < ${t}; i++) {
          inIdx = srcIdx;
          ${S}
          vec4 candidate = ${E};
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(${C}(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `}};function I$(r,e,t,o=null){let n=e.shape[0],s=e.shape[1];o!=null&&(n=o.shape[0],s=o.shape[1]);let i=v.computeOptimalWindowSize(s),a={windowSize:i,inSize:s,batchSize:n,outSize:Math.ceil(s/i)},l=new Zh(a,t,o==null),u=[e];o!=null&&u.push(o);let c=r.runWebGLProgram(l,u,"int32");if(c.shape[1]===1)return c;let p=I$(r,e,t,c);return r.disposeIntermediateTensorInfo(c),p}function T$(r,e,t,o=null){let n=o!=null?o.shape:e.shape,s=n[n.length-1],i=v.computeOptimalWindowSize(s),a=new Qh(n,i,t,o==null),l=o==null?[e]:[e,o],u=r.runWebGLProgram(a,l,"int32");if(u.shape.length===e.shape.length){let c=T$(r,e,t,u);return r.disposeIntermediateTensorInfo(u),c}return u}function Jh(r,e,t,o){let n=[t];if(v.assertAxesAreInnerMostDims("arg"+o.charAt(0).toUpperCase()+o.slice(1),n,e.shape.length),!P().getBool("WEBGL_PACK_REDUCE")||e.shape.length<=2){let s=[],i=r.texData.get(e.dataId),a=i!==null&&i.isPacked,l=e;a&&(l=r.unpackTensor(e),s.push(l));let[u,c]=v.computeOutAndReduceShapes(l.shape,n),p=b.sizeFromShape(c),m=J({inputs:{x:l},backend:r,attrs:{shape:[-1,p]}});s.push(m);let f=I$(r,m,o);s.push(f);let h=J({inputs:{x:f},backend:r,attrs:{shape:u}});return s.forEach(g=>r.disposeIntermediateTensorInfo(g)),h}return T$(r,e,o)}function mK(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{axis:s}=o,i=b.parseAxisParam(s,n.shape),a=v.getAxesPermutation(i,n.shape.length),l=n,u=[];a!=null&&(l=ie({inputs:{x:n},backend:t,attrs:{perm:a}}),u.push(l),i=v.getInnerMostAxes(i.length,l.shape.length)),v.assertAxesAreInnerMostDims("argMax",[i[0]],l.shape.length);let c=Jh(t,l,i[0],"max");return u.forEach(p=>t.disposeIntermediateTensorInfo(p)),c}var k$={kernelName:Ms,backendName:"webgl",kernelFunc:mK};function fK(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{axis:s}=o,i=b.parseAxisParam(s,n.shape),a=v.getAxesPermutation(i,n.shape.length),l=n,u=[];a!=null&&(l=ie({inputs:{x:n},backend:t,attrs:{perm:a}}),u.push(l),i=v.getInnerMostAxes(i.length,l.shape.length)),v.assertAxesAreInnerMostDims("argMin",[i[0]],l.shape.length);let c=Jh(t,l,i[0],"min");return u.forEach(p=>t.disposeIntermediateTensorInfo(p)),c}var E$={kernelName:Bs,backendName:"webgl",kernelFunc:fK};var hK=De+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,dK=mt({opSnippet:hK}),A$={kernelName:gn,backendName:"webgl",kernelFunc:dK};var gK=De+"return log(x + sqrt(x * x + 1.0));",xK=mt({opSnippet:gK}),$$={kernelName:xn,backendName:"webgl",kernelFunc:xK};var yK=De+`
  return atan(x);
`,bK=mt({opSnippet:yK}),D$={kernelName:yn,backendName:"webgl",kernelFunc:bK};var wK=ac+`
  return atan(a, b);
`,CK=`
  vec4 result = atan(a, b);
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+Vr+`
  return result;
`,SK=Gt({opSnippet:wK,packedOpSnippet:CK}),R$={kernelName:wn,backendName:"webgl",kernelFunc:SK};var vK=De+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,NK=mt({opSnippet:vK}),F$={kernelName:bn,backendName:"webgl",kernelFunc:NK};var Bo=class{constructor(e,t,o,n=!1,s=!1){if(this.variableNames=["x"],t==="avg"&&o)throw new Error("Cannot compute positions for average pool.");let i=e.filterWidth,a=e.strideHeight,l=e.strideWidth,u=e.dilationHeight,c=e.dilationWidth,p=e.effectiveFilterHeight,m=e.effectiveFilterWidth,f=e.padInfo.top,h=e.padInfo.left;this.outputShape=e.outShape;let g=t==="avg",d=`((batch  * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + d`,x=`(xR * ${e.inWidth} + xC) * ${e.inChannels} + d`,y="0.0";if(g||(y="-1.0 / 1e-20"),o){let $=">=";this.userCode=`
        const ivec2 strides = ivec2(${a}, ${l});
        const ivec2 pads = ivec2(${f}, ${h});

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < ${p};
              wR += ${u}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${m};
                wC += ${c}) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value ${$} currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = ${n?s?d:x:`wR * ${m} + wC`};
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}let w="max",C=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t==="avg"&&(C="avgValue / max(count, 1.0)");let S=Math.floor(i/4)*4,E=i%4,A=`
      if (${g}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${w}(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(${a}, ${l});
      const ivec2 pads = ivec2(${f}, ${h});
      const float initializationValue = ${y};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= ${e.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(${y});
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < ${p};
            wR += ${u}) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= ${e.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${S}; wC += 4) {
            int xC = xCCorner + wC * ${c};

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${c}, d),
              getValue(batch, xR, xC + 2 * ${c}, d),
              getValue(batch, xR, xC + 3 * ${c}, d)
            );

            ${A}
          }

          int xC = xCCorner + ${S};
          if (${E===1}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            ${A}
          } else if (${E===2}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${c}, d),
              initializationValue,
              initializationValue
            );

            ${A}
          } else if (${E===3}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${c}, d),
              getValue(batch, xR, xC + 2 * ${c}, d),
              initializationValue
            );

            ${A}
          }
        }
        setOutput(${C});
      }
    `}},Yi=class{constructor(e,t,o,n=!1,s=!1){if(this.variableNames=["x"],t==="avg"&&o)throw new Error("Cannot compute positions for average pool.");let i=e.filterWidth,a=e.strideDepth,l=e.strideHeight,u=e.strideWidth,c=e.dilationDepth,p=e.dilationHeight,m=e.dilationWidth,f=e.effectiveFilterDepth,h=e.effectiveFilterHeight,g=e.effectiveFilterWidth,d=e.padInfo.front,x=e.padInfo.top,y=e.padInfo.left;this.outputShape=e.outShape;let w=t==="avg",C="0.0";if(w||(C="-1.0 / 1e-20"),o){let L=">=";this.userCode=`
        const ivec3 strides =
            ivec3(${a}, ${l}, ${u});
        const ivec3 pads = ivec3(${d}, ${x}, ${y});

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < ${f};
              wD += ${c}) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= ${e.inDepth}) {
              continue;
            }

            for (int wR = 0; wR < ${h};
                wR += ${p}) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int wC = 0; wC < ${g};
                  wC += ${m}) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= ${e.inWidth}) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value ${L} currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition = ${n?s?`(((batch * ${e.inDepth} + xD) * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`((xD * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`wD * ${h} * ${g} +
                      wR * ${g} + wC`};
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}let S="max",E=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t==="avg"&&(E="avgValue / max(count, 1.0)");let A=Math.floor(i/4)*4,$=i%4,_=`
      if (${w}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${S}(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(${a}, ${l}, ${u});
      const ivec3 pads = ivec3(${d}, ${x}, ${y});
      const float initializationValue = ${C};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= ${e.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(${C});
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < ${f};
            wD += ${c}) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${h};
            wR += ${p}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${A}; wC += 4) {
              int xC = xCCorner + wC * ${m};

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${m}, ch),
                getValue(batch, xD, xR, xC + 2 * ${m}, ch),
                getValue(batch, xD, xR, xC + 3 * ${m}, ch)
              );

              ${_}
            }

            int xC = xCCorner + ${A};
            if (${$===1}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              ${_}
            } else if (${$===2}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${m}, ch),
                initializationValue,
                initializationValue
              );

              ${_}
            } else if (${$===3}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${m}, ch),
                getValue(batch, xD, xR, xC + 2 * ${m}, ch),
                initializationValue
              );

              ${_}
            }
          }
        }
        setOutput(${E});
      }
    `}};function IK(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e;ln(n,"avgPool");let{filterSize:s,strides:i,pad:a,dimRoundingMode:l}=o,u=1;b.assert(v.eitherStridesOrDilationsAreOne(i,u),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${u}'`);let c=v.computePool2DInfo(n.shape,s,i,u,a,l);if(c.filterWidth===1&&c.filterHeight===1&&b.arraysEqual(c.inShape,c.outShape))return Ce({inputs:{x:n},backend:t});let p=new Bo(c,"avg",!1);return t.runWebGLProgram(p,[n],"float32")}var _$={kernelName:Vs,backendName:"webgl",kernelFunc:IK};function TK(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{filterSize:s,strides:i,pad:a,dimRoundingMode:l,dataFormat:u}=o,c=[1,1,1],p=v.computePool3DInfo(n.shape,s,i,c,a,l,u),m=new Yi(p,"avg",!1);return t.runWebGLProgram(m,[n],"float32")}var O$={kernelName:Gs,backendName:"webgl",kernelFunc:TK};var td=class{constructor(e){this.variableNames=["dy"],this.outputShape=e.inShape;let t=e.filterHeight,o=e.filterWidth,n=e.strideHeight,s=e.strideWidth,i=e.dilationHeight,a=e.dilationWidth,l=e.effectiveFilterHeight,u=e.effectiveFilterWidth,c=l-1-e.padInfo.top,p=u-1-e.padInfo.left,m=1/(t*o);this.userCode=`
      const ivec2 pads = ivec2(${c}, ${p});
      const float avgMultiplier = float(${m});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${l};
            wR += ${i}) {
          float dyR = float(dyRCorner + wR) / ${n}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${u};
            wC+= ${a}) {
            float dyC = float(dyCCorner + wC) / ${s}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `}},ed=class{constructor(e){this.variableNames=["dy"],this.outputShape=e.inShape;let t=e.filterDepth,o=e.filterHeight,n=e.filterWidth,s=e.strideDepth,i=e.strideHeight,a=e.strideWidth,l=e.dilationDepth,u=e.dilationHeight,c=e.dilationWidth,p=e.effectiveFilterDepth,m=e.effectiveFilterHeight,f=e.effectiveFilterWidth,h=p-1-e.padInfo.front,g=m-1-e.padInfo.top,d=f-1-e.padInfo.left,x=1/(t*o*n);this.userCode=`
      const ivec3 pads = ivec3(${h}, ${g}, ${d});
      const float avgMultiplier = float(${x});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${p};
            wD += ${l}) {
          float dyD = float(dyDCorner + wD) / ${s}.0;

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${m};
              wR += ${u}) {
            float dyR = float(dyRCorner + wR) / ${i}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${f};
                wC += ${c}) {
              float dyC = float(dyCCorner + wC) / ${a}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `}};function kK(r){let{inputs:e,backend:t,attrs:o}=r,{dy:n,input:s}=e,i=s,{filterSize:a,strides:l,pad:u,dimRoundingMode:c}=o,p=[1,1,1],m=v.computePool3DInfo(i.shape,a,l,p,u,c),f=new ed(m);return t.runWebGLProgram(f,[n],i.dtype)}var L$={kernelName:bl,backendName:"webgl",kernelFunc:kK};function EK(r){let{inputs:e,backend:t,attrs:o}=r,{dy:n,input:s}=e,i=s;ln([n,s],"avgPoolGrad");let{filterSize:a,strides:l,pad:u}=o,c=v.computePool2DInfo(i.shape,a,l,1,u),p=new td(c);return t.runWebGLProgram(p,[n],i.dtype)}var P$={kernelName:yl,backendName:"webgl",kernelFunc:EK};function AK(r){let{inputs:e,backend:t,attrs:o}=r,{a:n,b:s}=e,{transposeA:i,transposeB:a}=o;return sl({a:n,b:s,transposeA:i,transposeB:a,backend:t})}var z$={kernelName:Ws,backendName:"webgl",kernelFunc:AK};var rd=class{constructor(e,t,o,n,s,i){this.outputShape=[],this.variableNames=["x","mean","variance"],v.assertAndGetBroadcastShape(e,t),v.assertAndGetBroadcastShape(e,o);let a="0.0";n!=null&&(v.assertAndGetBroadcastShape(e,n),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");let l="1.0";s!=null&&(v.assertAndGetBroadcastShape(e,s),this.variableNames.push("scale"),l="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = ${a};
        float scale = ${l};
        float inv = scale * inversesqrt(variance + float(${i}));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `}};var od=class{constructor(e,t,o,n,s,i){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],v.assertAndGetBroadcastShape(e,t),v.assertAndGetBroadcastShape(e,o);let a="vec4(0.0)";n!=null&&(v.assertAndGetBroadcastShape(e,n),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");let l="vec4(1.0)";s!=null&&(v.assertAndGetBroadcastShape(e,s),this.variableNames.push("scale"),l="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`
      void main() {
        vec4 offset = ${a};
        vec4 scale = ${l};

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(${i}));

        setOutput((x - mean) * inv + offset);
      }
    `}};var $K=({inputs:r,backend:e,attrs:t})=>{let{x:o,mean:n,variance:s,offset:i,scale:a}=r;b.assert(n.shape.length===s.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),b.assert(i==null||n.shape.length===i.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),b.assert(a==null||n.shape.length===a.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");let{varianceEpsilon:l}=t;l==null&&(l=.001);let u=[o,n,s],c=null;i!=null&&(c=i.shape,u.push(i));let p=null;a!=null&&(p=a.shape,u.push(a));let m=P().getBool("WEBGL_PACK_NORMALIZATION")?new od(o.shape,n.shape,s.shape,c,p,l):new rd(o.shape,n.shape,s.shape,c,p,l);return e.runWebGLProgram(m,u,u[0].dtype)},M$={kernelName:ti,backendName:"webgl",kernelFunc:$K};var nd=class{constructor(e){this.variableNames=["source"],this.outputShape=e,this.rank=e.length;let t=It(this.rank);this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];let o=DK(this.rank),n,s=e.map((i,a)=>`sourceLoc.${Yw[a]} = start[${a}] + coords.${Yw[a]};`);n=`
        ${t} sourceLoc;
        ${t} coords = getOutputCoords();
        ${s.join(`
`)}
      `,this.userCode=`
      void main() {
        ${n}
        setOutput(getSource(${o}));
      }
    `}},Yw=["x","y","z","w","u","v"];function DK(r){if(r===1)return"sourceLoc";if(r<=6)return Yw.slice(0,r).map(e=>"sourceLoc."+e).join(",");throw Error(`Slicing for rank ${r} is not yet supported`)}var sd=class{constructor(e){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];let t=It(this.rank),o=we("coords",this.rank),n=we("sourceLoc",this.rank),s=this.rank===1?"sourceLoc":`vec2(${n.slice(-2).join()})`,i=`getChannel(getSource(${n.join()}), ${s})`,a=`
      result.x = ${i};
      if (++${o[this.rank-1]} < ${e[this.rank-1]}) {
        ++${n[this.rank-1]};
        result.y = ${i};
        --${n[this.rank-1]};
      }
    `,l=this.rank===1?"":`
      --${o[this.rank-1]};
      if (++${o[this.rank-2]} < ${e[this.rank-2]}) {
        ++${n[this.rank-2]};
        result.z = ${i};
        if (++${o[this.rank-1]} < ${e[this.rank-1]}) {
          ++${n[this.rank-1]};
          result.w = ${i};
        }
      }
    `,u=this.rank<=4?`sourceLoc = coords +
            ${t}(${e.map((c,p)=>`start[${p}]`).join()});`:e.map((c,p)=>`${n[p]} = ${o[p]} + start[${p}];`).join(`
`);this.userCode=`
      void main() {
        ${t} coords = getOutputCoords();
        ${t} sourceLoc;
        ${u}
        vec4 result = vec4(0.);
        ${a}
        ${l}
        setOutput(result);
      }
    `}};function RK(r,e,t,o){let n=o.texData.get(r.dataId),s=o.makeTensorInfo(t,r.dtype),i=o.texData.get(s.dataId);Object.assign(i,n),i.refCount=1,i.shape=t,i.dtype=r.dtype;let a=ze.computeFlatOffset(e,b.computeStrides(r.shape));n.slice&&(a+=n.slice.flatOffset),i.slice={flatOffset:a,origDataId:n.slice&&n.slice.origDataId||r.dataId};let l=o.dataRefCount.get(i.slice.origDataId)||1;return o.dataRefCount.set(i.slice.origDataId,l+1),s}function Vo(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{begin:s,size:i}=o,[a,l]=ze.parseSliceParams(n,s,i);if(ze.assertParamsValid(n,a,l),b.sizeFromShape(l)===0)return t.makeTensorInfo(l,n.dtype,[]);if(t.shouldExecuteOnCPU([n])||n.dtype==="string"){let p=t.texData.get(n.dataId),m=A2(p.values,a,l,n.shape,n.dtype);return t.makeTensorInfo(l,n.dtype,m)}let{isPacked:u}=t.texData.get(n.dataId),c=ze.isSliceContinous(n.shape,a,l);if(u||!c){let p=P().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new sd(l):new nd(l),m=[a];return t.runWebGLProgram(p,[n],n.dtype,m)}return t.uploadToGPU(n.dataId),RK(n,a,l,t)}var B$={kernelName:Si,backendName:"webgl",kernelFunc:Vo};var FK=r=>{let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{blockShape:s,crops:i}=o;b.assert(n.shape.length<=4,()=>"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet");let a=s.reduce((y,w)=>y*w),l=v.getReshaped(n.shape,s,a),u=v.getPermuted(l.length,s.length),c=v.getReshapedPermuted(n.shape,s,a),p=v.getSliceBeginCoords(i,s.length),m=v.getSliceSize(c,i,s.length),f=[],h=J({inputs:{x:n},backend:t,attrs:{shape:l}}),g=ie({inputs:{x:h},backend:t,attrs:{perm:u}}),d=J({inputs:{x:g},backend:t,attrs:{shape:c}}),x=Vo({inputs:{x:d},backend:t,attrs:{begin:p,size:m}});return f.push(h),f.push(g),f.push(d),f.forEach(y=>t.disposeIntermediateTensorInfo(y)),x},V$={kernelName:Us,backendName:"webgl",kernelFunc:FK};function _K(r){let{inputs:e,backend:t,attrs:o}=r,{x:n,weights:s}=e,{size:i}=o,a=t.readSync(n.dataId),l=t.readSync(s.dataId),u=zh(a,l,s.dtype,s.shape,i);return t.makeTensorInfo([i],s.dtype,u)}var G$={kernelName:wl,backendName:"webgl",kernelFunc:_K};var OK=`
  int r = int(a.r) & int(b.r);
  int g = int(a.g) & int(b.g);
  int rb = int(a.b) & int(b.b);
  int ra = int(a.a) & int(b.a);
  return vec4(r, g, rb, ra);
`,LK=`
  return float(int(a.r) & int(b.r));
`;function PK(r){let{inputs:e,backend:t}=r,{a:o,b:n}=e,s=P().getBool("WEBGL_PACK_BINARY_OPERATIONS"),i=P().getNumber("WEBGL_VERSION");if(t.shouldExecuteOnCPU([o,n])||i===1){let l=t.texData.get(o.dataId).values,u=t.texData.get(n.dataId).values,[c,p]=JA(o.shape,n.shape,l,u,o.dtype),m=t.makeTensorInfo(p,o.dtype),f=t.texData.get(m.dataId);return f.values=c,m}let a;return s?a=new Br(OK,o.shape,n.shape,!1):a=new kr(LK,o.shape,n.shape),t.runWebGLProgram(a,[o,n],o.dtype)}var W$={kernelName:Sc,backendName:"webgl",kernelFunc:PK};function zK(r){let{inputs:e,backend:t}=r,{s0:o,s1:n}=e,s=t.readSync(o.dataId),i=t.readSync(n.dataId),a=v.assertAndGetBroadcastShape(Array.from(s),Array.from(i));return t.makeTensorInfo([a.length],"int32",Int32Array.from(a))}var U$={kernelName:Up,backendName:"webgl",kernelFunc:zK};var MK="return float(a != b);",Zw=Gt({opSnippet:MK,cpuKernelImpl:w2,dtype:"bool"}),H$={kernelName:ca,backendName:"webgl",kernelFunc:Zw};function As(r){let{inputs:e,backend:t}=r,{input:o}=e,n=t.texData.get(o.dataId);return Ce({inputs:{x:n.complexTensorInfos.real},backend:t})}var q$={kernelName:Hl,backendName:"webgl",kernelFunc:As};var BK="return float(int(x));";function K$(r,e){let t=new Xe(r.shape,BK),o=e.runWebGLProgram(t,[r],"int32");return{dataId:o.dataId,shape:o.shape,dtype:o.dtype}}function Qw(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{dtype:s}=o;if(s==="complex64"){if(n.dtype==="complex64")return Ce({inputs:{x:n},backend:t});let i=re(n.shape),a=Qw({inputs:{x:n},backend:t,attrs:{dtype:"float32"}}),l=Er({inputs:{real:a,imag:i},backend:t});return i.dispose(),t.disposeIntermediateTensorInfo(a),l}if(n.dtype==="complex64"){let i=As({inputs:{input:n},backend:t}),a=Qw({inputs:{x:i},backend:t,attrs:{dtype:s}});return t.disposeIntermediateTensorInfo(i),a}if(!b.hasEncodingLoss(n.dtype,s)){let i=Ce({inputs:{x:n},backend:t});return{dataId:i.dataId,shape:i.shape,dtype:s}}if(t.shouldExecuteOnCPU([n])){let i=t.texData.get(n.dataId).values,[a,l,u]=t2(i,n.shape,n.dtype,s);return t.makeTensorInfo(a,l,u)}if(s==="int32")return K$(n,t);if(s==="bool"){let i=t.makeTensorInfo([],"bool",b.getTypedArrayFromDType("bool",1)),l=Zw({inputs:{a:n,b:i},backend:t});return t.disposeIntermediateTensorInfo(i),l}throw new Error(`Error in Cast: failed to cast ${n.dtype} to ${s}`)}var j$={kernelName:Wo,backendName:"webgl",kernelFunc:Qw};var X$="return ceil(x);",VK=mt({opSnippet:X$,packedOpSnippet:X$,cpuKernelImpl:e2}),Y$={kernelName:Cn,backendName:"webgl",kernelFunc:VK};var id=class{constructor(e){this.variableNames=["A"],this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=e,this.userCode=`

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}};var ad=class{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=e,this.userCode=`
      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}};function GK(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{clipValueMin:s,clipValueMax:i}=o,a;P().getBool("WEBGL_PACK_CLIP")?a=new ad(n.shape):a=new id(n.shape);let l=[[s],[i]];return t.runWebGLProgram(a,[n],n.dtype,l)}var Z$={kernelName:Sn,backendName:"webgl",kernelFunc:GK};var ld=class{constructor(e){this.variableNames=["real","imag"],this.outputShape=e,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `}};function Q$(r,e){return{dataId:e.dataId,dtype:e.dtype,shape:r.shape}}function WK(r){let{inputs:e,backend:t}=r,{x:o}=e,n=t.texData.get(o.dataId),s=new ld(o.shape),i=[Q$(o,n.complexTensorInfos.real),Q$(o,n.complexTensorInfos.imag)];return t.runWebGLProgram(s,i,i[0].dtype)}var J$={kernelName:Hs,backendName:"webgl",kernelFunc:WK};var ud=class{constructor(e){this.outputShape=[],this.outputShape=v.computeOutShape(e,1),this.variableNames=e.map((i,a)=>`T${a}`);let t=new Array(e.length-1);t[0]=e[0][1];for(let i=1;i<t.length;i++)t[i]=t[i-1]+e[i][1];let o=[`if (yC < ${t[0]}) setOutput(getT0(yR, yC));`];for(let i=1;i<t.length;i++){let a=t[i-1];o.push(`else if (yC < ${t[i]}) setOutput(getT${i}(yR, yC-${a}));`)}let n=t.length,s=t[t.length-1];o.push(`else setOutput(getT${n}(yR, yC-${s}));`),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        ${o.join(`
        `)}
      }
    `}};var pd=class{constructor(e,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=v.computeOutShape(e,t);let o=this.outputShape,n=o.length,s=It(n),i=we("coords",n),a=["x","y","z","w","u","v"].slice(0,n);this.variableNames=e.map((g,d)=>`T${d}`);let l=new Array(e.length-1);l[0]=e[0][t];for(let g=1;g<l.length;g++)l[g]=l[g-1]+e[g][t];let u=a[t],c=a.slice(-2),p=a.join(),m=`if (${u} < ${l[0]}) {
        return getChannel(
            getT0(${p}), vec2(${c.join()}));
        }`;for(let g=1;g<l.length;g++){let d=l[g-1];m+=`
        if (${u} < ${l[g]}  && ${u} >= ${l[g-1]}) {
          return getChannel(
            getT${g}(${cd(a,u,d)}),
            vec2(${cd(c,u,d)}));
        }`}let f=l.length,h=l[l.length-1];m+=`
        return getChannel(
          getT${f}(${cd(a,u,h)}),
          vec2(${cd(c,u,h)}));`,this.userCode=`
      float getValue(${a.map(g=>"int "+g)}) {
        ${m}
      }

      void main() {
        ${s} coords = getOutputCoords();
        vec4 result = vec4(getValue(${i}), 0., 0., 0.);

        ${i[n-1]} = ${i[n-1]} + 1;
        if (${i[n-1]} < ${o[n-1]}) {
          result.g = getValue(${i});
        }

        ${i[n-2]} = ${i[n-2]} + 1;
        if (${i[n-2]} < ${o[n-2]}) {
          result.a = getValue(${i});
        }

        ${i[n-1]} = ${i[n-1]} - 1;
        if (${i[n-2]} < ${o[n-2]} &&
            ${i[n-1]} < ${o[n-1]}) {
          result.b = getValue(${i});
        }
        setOutput(result);
      }
    `}};function cd(r,e,t){let o=r.indexOf(e);return r.map((s,i)=>i===o?`${s} - ${t}`:s).join()}function il(r){let{inputs:e,backend:t}=r,{input:o}=e,n=t.texData.get(o.dataId);return Ce({inputs:{x:n.complexTensorInfos.imag},backend:t})}var tD={kernelName:Pl,backendName:"webgl",kernelFunc:il};function uc(r,e,t){let o=r[0].dtype;if(o==="complex64"){let f=r.map(y=>As({inputs:{input:y},backend:t})),h=r.map(y=>il({inputs:{input:y},backend:t})),g=uc(f,e,t),d=uc(h,e,t),x=Er({inputs:{real:g,imag:d},backend:t});return f.forEach(y=>t.disposeIntermediateTensorInfo(y)),h.forEach(y=>t.disposeIntermediateTensorInfo(y)),t.disposeIntermediateTensorInfo(g),t.disposeIntermediateTensorInfo(d),x}let n=t.shouldExecuteOnCPU(r);if(o==="string"&&(n=!0),n){let f=r.map(C=>{let E=[-1,b.sizeFromShape(C.shape.slice(e))];return J({inputs:{x:C},backend:t,attrs:{shape:E}})}),h=f.map(C=>({vals:t.readSync(C.dataId),shape:C.shape})),g=v.computeOutShape(f.map(C=>C.shape),1),d=f[0].shape[0]===1,x=r2(h,g,o,d),y=v.computeOutShape(r.map(C=>C.shape),e),w=t.makeTensorInfo(y,o,x);return f.forEach(C=>t.disposeIntermediateTensorInfo(C)),w}let s=r.filter(f=>b.sizeFromShape(f.shape)>0),i=P().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&s[0].shape.length>1;if(s.length===1){let f=i?new Xe(r[0].shape,un):new Tr(r[0].shape,un);return t.runWebGLProgram(f,r,o)}let a=P().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER");if(s.length>a){let f=[];for(let g=0;g<s.length;g+=a){let d=s.slice(g,g+a);f.push(uc(d,e,t))}let h=uc(f,e,t);for(let g of f)t.disposeIntermediateTensorInfo(g);return h}if(i){let f=new pd(s.map(h=>h.shape),e);return t.runWebGLProgram(f,s,o)}let{tensors2D:l,outShape:u}=UK(s,e,t),c=new ud(l.map(f=>f.shape)),p=t.runWebGLProgram(c,l,o);l.forEach(f=>t.disposeIntermediateTensorInfo(f));let m=J({inputs:{x:p},attrs:{shape:u},backend:t});return t.disposeIntermediateTensorInfo(p),m}function UK(r,e,t){let o=v.computeOutShape(r.map(s=>s.shape),e);return{tensors2D:r.map(s=>J({inputs:{x:s},attrs:{shape:[-1,b.sizeFromShape(s.shape.slice(e))]},backend:t})),outShape:o}}function Jw(r){let{inputs:e,backend:t,attrs:o}=r,{axis:n}=o,s=b.parseAxisParam(n,e[0].shape)[0],i=e.map(u=>u.shape);v.assertParamsConsistent(i,s);let a=v.computeOutShape(e.map(u=>u.shape),s);if(b.sizeFromShape(a)===0)return t.makeTensorInfo(a,e[0].dtype,[]);let l=e.filter(u=>b.sizeFromShape(u.shape)>0);return l.length===1?Ce({inputs:{x:l[0]},backend:t}):uc(l,s,t)}var eD={kernelName:qs,backendName:"webgl",kernelFunc:Jw};var cc=class{constructor(e,t=!1,o=null,n=!1,s=!1){this.variableNames=["x","W"],this.outputShape=e.outShape;let i=e.padInfo.top,a=e.padInfo.left,l=e.strideHeight,u=e.strideWidth,c=e.dilationHeight,p=e.dilationWidth,m=e.filterHeight,f=e.filterWidth,h=Math.floor(e.inChannels/4)*4,g=e.inChannels%4,d=e.dataFormat==="channelsLast",x=d?1:2,y=d?2:3,w=d?3:1,C="",S="";o&&(n?C=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${o}
        }`:s?C=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${o}
        }`:C=`
          float activation(float x) {
            ${o}
          }
        `,S="result = activation(result);");let E=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),s&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${C}

      const ivec2 strides = ivec2(${l}, ${u});
      const ivec2 pads = ivec2(${i}, ${a});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[${w}];

        ivec2 xRCCorner =
            ivec2(coords[${x}], coords[${y}]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${m}; wR++) {
          int xR = xRCorner + wR * ${c};

          if (xR < 0 || xR >= ${e.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${f}; wC++) {
            int xC = xCCorner + wC * ${p};

            if (xC < 0 || xC >= ${e.inWidth}) {
              continue;
            }

            for (int d1 = 0; d1 < ${h}; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (${d}) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (${g===1}) {

              if (${d}) {
                dotProd +=
                    getX(batch, xR, xC, ${h}) *
                    getW(wR, wC, ${h}, d2);
              } else {
                dotProd +=
                    getX(batch, ${h}, xR, xC) *
                    getW(wR, wC, ${h}, d2);
              }

            } else if (${g===2}) {
              vec2 wValues = vec2(
                getW(wR, wC, ${h}, d2),
                getW(wR, wC, ${h} + 1, d2)
              );

              if (${d}) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, ${h}),
                  getX(batch, xR, xC, ${h} + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, ${h}, xR, xC),
                  getX(batch, ${h} + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (${g===3}) {
              vec3 wValues = vec3(
                getW(wR, wC, ${h}, d2),
                getW(wR, wC, ${h} + 1, d2),
                getW(wR, wC, ${h} + 2, d2)
              );

              if (${d}) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, ${h}),
                  getX(batch, xR, xC, ${h} + 1),
                  getX(batch, xR, xC, ${h} + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, ${h}, xR, xC),
                  getX(batch, ${h} + 1, xR, xC),
                  getX(batch, ${h} + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        ${E}
        ${S}
        setOutput(result);
      }
    `}},md=class{constructor(e){this.variableNames=["x","W"],this.outputShape=e.outShape;let t=e.padInfo.front,o=e.padInfo.top,n=e.padInfo.left,s=e.strideDepth,i=e.strideHeight,a=e.strideWidth,l=e.dilationDepth,u=e.dilationHeight,c=e.dilationWidth,p=e.filterDepth,m=e.filterHeight,f=e.filterWidth,h=Math.floor(e.inChannels/4)*4,g=e.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(${s}, ${i}, ${a});
      const ivec3 pads = ivec3(${t}, ${o}, ${n});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < ${p}; wF++) {
          int xF = xFCorner + wF * ${l};

          if (xF < 0 || xF >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${m}; wR++) {
            int xR = xRCorner + wR * ${u};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${f}; wC++) {
              int xC = xCCorner + wC * ${c};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              for (int d1 = 0; d1 < ${h}; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (${g===1}) {
                dotProd +=
                  getX(batch, xF, xR, xC, ${h}) *
                  getW(wF, wR, wC, ${h}, d2);
              } else if (${g===2}) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, ${h}),
                  getX(batch, xF, xR, xC, ${h} + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, ${h}, d2),
                  getW(wF, wR, wC, ${h} + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (${g===3}) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, ${h}),
                  getX(batch, xF, xR, xC, ${h} + 1),
                  getX(batch, xF, xR, xC, ${h} + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, ${h}, d2),
                  getW(wF, wR, wC, ${h} + 1, d2),
                  getW(wF, wR, wC, ${h} + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}};var pc=class{constructor(e,t=!1,o=null,n=!1,s=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=Ht(this.outputShape.length);let i=e.padInfo.left,a=e.strideWidth,l=e.dilationWidth,u=e.filterHeight,c=e.filterWidth,p=c,m=`
       int xR; int xC; int xCOffset;
       vec4 wTexel; vec4 previous; vec4 final;`;for(let d=0;d<c;d++)m+=`
           vec4 xTexelC${d*2};
           int xTexelC${d*2}Ready;
           vec4 xTexelC${d*2+1};
           int xTexelC${d*2+1}Ready;
           vec4 xC${d};`;m+=`
     for (int r = 0; r < ${u}; r++) {
      for (int d1 = 0; d1 < ${e.inChannels}; d1 += 2) {
       `;for(let d=0;d<c;d++)m+=`
           xTexelC${d*2} = vec4(0.0);
           xTexelC${d*2}Ready = 0;
           xTexelC${d*2+1} = vec4(0.0);
           xTexelC${d*2+1}Ready = 0;
           xC${d} = vec4(0.0);`;m+=`
         xR = xRCorner + r * dilations[0];
         if (xR >=0 && xR < inDims[0]) {
       `;for(let d=0;d<(p+1)/2;d++){let x=d*2;if(m+=`
           xC = xCCorner + ${x*l};
           `,a===1){if(x<c&&(i%2===1?(m+=`
                 xCOffset = xC + 1;
                 if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xCOffset, d1);

                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }
               `,l===1&&x>0?m+=`
                 xC${x} = vec4(xTexelC${x-2}.zw, xTexelC${x}.xy);
                 `:m+=`
                   xCOffset = xC + 1 - 2;

                   if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       previous.zw = vec2(0.0);
                     }

                     xC${x} = vec4(previous.zw, xTexelC${x}.xy);
                   } else {
                     xC${x} = vec4(0.0, 0.0, xTexelC${x}.xy);
                   }
                   `):m+=`
                 if (xC >= 0 && xC < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }

                 xC${x} = xTexelC${x};
                 `,x+1<c)){let y=i%2===0?b.nearestLargerEven(l):l;l%2===0&&i%2===1||l%2!==0&&i%2!==1?(m+=`
                   xCOffset = xC + imod(pads[1], 2) + ${y};

                   if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x+1}Ready == 0) {
                     xTexelC${x+1} = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       xTexelC${x+1}.zw = vec2(0.0);
                     }
                     xTexelC${x+1}Ready = 1;
                   }
                   `,l>1?m+=`
                     xCOffset -= 2;
                     if (xCOffset >= 0 && xCOffset < inDims[1]) {
                      previous = getX(batch, xR, xCOffset, d1);
                      xC${x+1} = vec4(previous.zw, xTexelC${x+1}.xy);
                     } else {
                      xC${x+1} = vec4(0.0, 0.0, xTexelC${x+1}.xy);
                     }
                     `:m+=`
                     xC${x+1} = vec4(xTexelC${x}.zw, xTexelC${x+1}.xy);
                     `):y===1?m+=`
                     xC${x+1} = xTexelC${x};
                     `:m+=`
                     xCOffset = xC + ${y};

                     if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x+1}Ready == 0) {
                       xTexelC${x+1} = getX(batch, xR, xCOffset, d1);
                       if (xCOffset + 1 >= inDims[1]) {
                         xTexelC${x+1}.zw = vec2(0.0);
                       }
                       xTexelC${x+1}Ready = 1;
                     }

                     xC${x+1} = xTexelC${x+1};
                     `}}else x<c&&(i%2===1?(m+=`
                 xCOffset = xC + 1 - strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xCOffset, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }

                 if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${x+1}Ready == 0) {
                   xTexelC${x+1} = getX(batch, xR, xC + 1, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xC + 2 >= inDims[1]) {
                     xTexelC${x+1}.zw = vec2(0.0);
                   }
                   xTexelC${x+1}Ready = 1;
                 }

                 xC${x} = vec4(xTexelC${x}.zw, xTexelC${x+1}.zw);
               `,x+1<c&&(m+=`
                   final = vec4(0.0);
                   xCOffset = xC + 1 + strides[1];
                   if(xCOffset >= 0 && xCOffset < inDims[1]) {
                     final = getX(batch, xR, xCOffset, d1);
                   }
                   xC${x+1} = vec4(xTexelC${x+1}.xy, final.xy);
                 `)):(m+=`
                 if(xC >= 0 && xC < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }

                 xCOffset = xC + strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x+1}Ready == 0) {
                   xTexelC${x+1} = getX(batch, xR, xCOffset, d1);
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${x+1}.zw = vec2(0.);
                   }
                   xTexelC${x+1}Ready = 1;
                 }

                 xC${x} = vec4(
                   xTexelC${x}.xy, xTexelC${x+1}.xy);
               `,x+1<c&&(m+=`
                   xC${x+1} = vec4(xTexelC${x}.zw, xTexelC${x+1}.zw);
                 `)));x<c&&(m+=`
             wTexel = getW(r, ${x}, d1, d2);
             dotProd += xC${x}.xxzz * vec4(wTexel.xy, wTexel.xy);
             if(d1 + 1 < ${e.inChannels}) {
               dotProd += xC${x}.yyww * vec4(wTexel.zw, wTexel.zw);
             }
           `,x+1<c&&(m+=`
               wTexel = getW(r, ${x+1}, d1, d2);
               dotProd += xC${x+1}.xxzz * vec4(wTexel.xy, wTexel.xy);
               if(d1 + 1 < ${e.inChannels}) {
                 dotProd += xC${x+1}.yyww * vec4(wTexel.zw, wTexel.zw);
               }
             `))}m+=`
     }
   `,m+=`
     }
   `,m+=`
     }
   `;let f="",h="";o&&(n?f=`vec4 activation(vec4 a) {
           vec4 b = getPreluActivationWeightsAtOutCoords();
           ${o}
         }`:s?f=`vec4 activation(vec4 a) {
           vec4 b = getLeakyreluAlphaAtOutCoords();
           ${o}
         }`:f=`vec4 activation(vec4 x) {
           ${o}
         }`,h="result = activation(result);");let g=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),s&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
       ${f}

       void main() {
         ivec4 coords = getOutputCoords();
         int batch = coords.x;
         ivec2 xRCCorner = coords.yz * strides - pads;
         int d2 = coords.w;
         int xRCorner = xRCCorner.x;
         int xCCorner = xRCCorner.y;

         //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
         vec4 dotProd = vec4(0.000000000000001);

         ${m}

         vec4 result = dotProd - vec4(0.000000000000001);
         ${g}
         ${h}
         setOutput(result);
       }
     `}};var fd=class{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec4"},{name:"pad",type:"ivec2"},{name:"stride",type:"ivec2"},{name:"dilation",type:"ivec2"},{name:"inChannels",type:"int"},{name:"itemsPerBlockRow",type:"int"},{name:"outWidth",type:"int"}],this.outputShape=e,this.enableShapeUniforms=Ht(this.outputShape.length);let{dataFormat:o}=t,n=fe(),s=o==="channelsLast",i=s?1:2,a=s?2:3,l=this.enableShapeUniforms?"if(blockIndex < outShape[2] && pos < outShape[1]) {":`if(blockIndex < ${e[2]} && pos < ${e[1]}) {`,u="";for(let c=0;c<=1;c++)for(let p=0;p<=1;p++)u+=`
          blockIndex = rc.z + ${p};
          pos = rc.y + ${c};

          ${l}
            offsetY = int(blockIndex / outWidth) * stride[0] - pad[0];
            d0 = offsetY + dilation[0] * (pos / itemsPerBlockRow);

            if(d0 < inputShape[${i}] && d0 >= 0) {
              // Use custom imod instead mod. On Intel GPU, mod may generate
              // unexpected value.
              // https://github.com/tensorflow/tfjs/issues/5447
              offsetX = imod(blockIndex, outWidth) * stride[1] - pad[1];
              d1 = offsetX + dilation[1] * (imod(pos, itemsPerBlockRow) /
                  inChannels);

              if(d1 < inputShape[${a}] && d1 >= 0) {

                ch = imod(pos, inChannels);

                if (${s}) {
                  innerDims = vec2(d1, ch);
                  result[${c*2+p}] = getChannel(
                    getA(rc.x, d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[${c*2+p}] = getChannel(
                    getA(rc.x, ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        ${u}

        ${n.output} = result;
      }
    `}};function hd(r,e){let t=r.length;return t>=3?e?[...r.slice(0,-3),r[t-3]*r[t-2],r[t-1]]:[...r.slice(0,-3),r[t-3],r[t-2]*r[t-1]]:!e&&t===1&&r[0]>1?[r[0],1]:null}function dd({x:r,filter:e,convInfo:t,backend:o,bias:n=null,preluActivationWeights:s=null,leakyreluAlpha:i=0,activation:a=null}){let l=r.shape,u=o.texData.get(r.dataId),c=t.inChannels,p=l[0]*l[1]*l[2],m=t.outChannels,f=t.dataFormat==="channelsLast",h=!1,g=!1,d,x=[];if(s!=null){let C=hd(s.shape,f);C!=null&&(s=J({inputs:{x:s},backend:o,attrs:{shape:C}}),x.push(s))}if(n!=null){let C=hd(n.shape,f);C!=null&&(n=J({inputs:{x:n},backend:o,attrs:{shape:C}}),x.push(n))}if(!((p===1||m===1)&&c>Xw)&&u.isPacked&&f&&u.texture!=null&&l[2]%2!==0&&b.arraysEqual(u.shape.slice(-3),l.slice(-3))){let C=l[0]*l[1]*(l[2]+1),S={dataId:r.dataId,shape:[1,C,t.inChannels],dtype:r.dtype},E=u.shape;u.shape=u.shape.slice(),u.shape[u.shape.length-2]++,b.assert(tl(u.shape,S.shape),()=>`packed reshape ${u.shape} to ${S.shape} isn't free`);let A=J({inputs:{x:e},backend:o,attrs:{shape:[1,t.inChannels,t.outChannels]}});x.push(A);let $=sl({a:S,b:A,backend:o,transposeA:h,transposeB:g,bias:n,activation:a,preluActivationWeights:s,leakyreluAlpha:i}),_=o.texData.get($.dataId);b.assert(_.isPacked,()=>"batchMatMul result is expected to be packed"),u.shape=E,_.shape=t.outShape,d=Ce({inputs:{x:$},backend:o}),d.shape=t.outShape,x.push($)}else{let C=t.outHeight*t.outWidth,S=J({inputs:{x:r},backend:o,attrs:{shape:f?[t.batchSize,C,t.inChannels]:[t.batchSize,t.inChannels,C]}}),E=J({inputs:{x:e},backend:o,attrs:{shape:[1,t.inChannels,t.outChannels]}}),A=sl({a:f?S:E,b:f?E:S,transposeA:!f,transposeB:g,backend:o,bias:n,activation:a,preluActivationWeights:s,leakyreluAlpha:i});d=J({inputs:{x:A},backend:o,attrs:{shape:t.outShape}}),x.push(S),x.push(E),x.push(A)}for(let C of x)o.disposeIntermediateTensorInfo(C);return d}function gd({x:r,filter:e,convInfo:t,backend:o,bias:n=null,preluActivationWeights:s=null,leakyreluAlpha:i=0,activation:a=null}){let{filterWidth:l,filterHeight:u,inChannels:c,outWidth:p,outHeight:m,dataFormat:f}=t,h=f==="channelsLast",g=l*u*c,d=m*p,x=[t.batchSize,g,d],y=!0,w=!1,C=[];if(s!=null){let q=hd(s.shape,h);q!=null&&(s=J({inputs:{x:s},backend:o,attrs:{shape:q}}),C.push(s))}if(n!=null){let q=hd(n.shape,h);q!=null&&(n=J({inputs:{x:n},backend:o,attrs:{shape:q}}),C.push(n))}let S=J({inputs:{x:e},backend:o,attrs:{shape:[1,g,b.sizeFromShape(e.shape)/g]}});C.push(S);let E=new fd(x,t),A=[r.shape,[t.padInfo.top,t.padInfo.left],[t.strideHeight,t.strideWidth],[t.dilationHeight,t.dilationWidth],[t.inChannels],[t.filterWidth*t.inChannels],[t.outWidth]],$=o.runWebGLProgram(E,[r],"float32",A),_=J({inputs:{x:$},backend:o,attrs:{shape:x}});C.push($),C.push(_);let L=n!=null,M=s!=null,V=a==="leakyrelu",G=a?Es(a,!0):null,W=new lc(h?_.shape:S.shape,h?S.shape:_.shape,h?[t.batchSize,d,t.outChannels]:[t.batchSize,t.outChannels,d],y,w,L,G,M,V),U=h?[_,S]:[S,_];if(n&&U.push(n),M&&U.push(s),V){let q=o.makeTensorInfo([],"float32",b.createScalarValue(i,"float32"));U.push(q),C.push(q)}let K=o.runWebGLProgram(W,U,"float32"),Z=J({inputs:{x:K},backend:o,attrs:{shape:t.outShape}});C.push(K);for(let q of C)o.disposeIntermediateTensorInfo(q);return Z}function HK(r){let{inputs:e,backend:t,attrs:o}=r,{x:n,filter:s}=e,{strides:i,pad:a,dataFormat:l,dilations:u,dimRoundingMode:c}=o,p=v.convertConv2DDataFormat(l),m=v.computeConv2DInfo(n.shape,s.shape,i,u,a,c,!1,p),f;if(m.filterHeight===1&&m.filterWidth===1&&m.dilationHeight===1&&m.dilationWidth===1&&m.strideHeight===1&&m.strideWidth===1&&(m.padInfo.type==="SAME"||m.padInfo.type==="VALID"))f=dd({x:n,filter:s,convInfo:m,backend:t});else if(m.strideWidth<=2&&p==="channelsLast"&&P().getBool("WEBGL_EXP_CONV")){let g=new pc(m),d=[[m.padInfo.top,m.padInfo.left],[m.strideHeight,m.strideWidth],[m.dilationHeight,m.dilationWidth],[m.inHeight,m.inWidth]];f=t.runWebGLProgram(g,[n,s],"float32",d)}else if(P().getBool("WEBGL_CONV_IM2COL"))f=gd({x:n,filter:s,convInfo:m,backend:t});else{let g=new cc(m);f=t.runWebGLProgram(g,[n,s],"float32")}let h=J({inputs:{x:f},backend:t,attrs:{shape:m.outShape}});return t.disposeIntermediateTensorInfo(f),h}var rD={kernelName:Ks,backendName:"webgl",kernelFunc:HK};var xd=class{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;let t=e.strideHeight,o=e.strideWidth,n=e.padInfo.top,s=e.padInfo.left,i=e.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yR = 0; yR < ${e.outHeight}; yR++) {
            int xR = wR + yR * ${t} - ${n};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${o} - ${s};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              ${i?`float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);`:`float dyValue = getDy(b, d2, yR, yC);
              float xValue = getX(b, d1, xR, xC);
              dotProd += (xValue * dyValue);`}
            }
          }
        }
        setOutput(dotProd);
      }
    `}},yd=class{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;let t=e.filterHeight,o=e.filterWidth,n=e.strideHeight,s=e.strideWidth,i=e.dataFormat==="channelsLast",a=t-1-e.padInfo.top,l=o-1-e.padInfo.left,u=i?1:2,c=i?2:3,p=i?3:1;this.userCode=`
      const ivec2 pads = ivec2(${a}, ${l});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[${p}];

        ivec2 dyCorner = ivec2(coords[${u}], coords[${c}]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / ${n}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${o}; wC++) {
            float dyC = float(dyCCorner + wC) / ${s}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${o} - 1 - wC;

            for (int d2 = 0; d2 < ${e.outChannels}; d2++) {

              if (${i}) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `}},bd=class{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;let t=e.strideDepth,o=e.strideHeight,n=e.strideWidth,s=e.padInfo.front,i=e.padInfo.top,a=e.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yF = 0; yF < ${e.outDepth}; yF++) {
            int xF = wF + yF * ${t} - ${s};

            if (xF < 0 || xF >= ${e.inDepth}) {
              continue;
            }

            for (int yR = 0; yR < ${e.outHeight}; yR++) {
              int xR = wR + yR * ${o} - ${i};

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int yC = 0; yC < ${e.outWidth}; yC++) {
                int xC = wC + yC * ${n} - ${a};

                if (xC < 0 || xC >= ${e.inWidth}) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}},wd=class{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;let t=e.filterDepth,o=e.filterHeight,n=e.filterWidth,s=e.strideDepth,i=e.strideHeight,a=e.strideWidth,l=t-1-e.padInfo.front,u=o-1-e.padInfo.top,c=n-1-e.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(${l}, ${u}, ${c});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < ${t}; wF++) {
          float dyF = float(dyFCorner + wF) / ${s}.0;

          if (dyF < 0.0 || dyF >= ${e.outDepth}.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = ${t} - 1 - wF;

          for (int wR = 0; wR < ${o}; wR++) {
            float dyR = float(dyRCorner + wR) / ${i}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = ${o} - 1 - wR;

            for (int wC = 0; wC < ${n}; wC++) {
              float dyC = float(dyCCorner + wC) / ${a}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = ${n} - 1 - wC;

              for (int d2 = 0; d2 < ${e.outChannels}; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}};function qK(r){let{inputs:e,backend:t,attrs:o}=r,{x:n,dy:s}=e,{strides:i,pad:a,dataFormat:l,dimRoundingMode:u,filterShape:c}=o,p=v.convertConv2DDataFormat(l),m=v.computeConv2DInfo(n.shape,c,i,1,a,u,!1,p),f=new xd(m);return t.runWebGLProgram(f,[n,s],"float32")}var oD={kernelName:Sl,backendName:"webgl",kernelFunc:qK};var Cd=class{constructor(e){this.variableNames=["dy","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"strides",type:"vec2"}],this.outputShape=e.inShape,this.enableShapeUniforms=Ht(this.outputShape.length);let t=e.filterHeight,o=e.filterWidth,n=t-1-e.padInfo.top,s=o-1-e.padInfo.left;this.userCode=`
      const ivec2 pads = ivec2(${n}, ${s});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];

        ivec2 dyCorner = ivec2(coords[1], coords[2]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        vec4 result = vec4(0.);
        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / strides[0];
          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);
          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${o}; wC++) {
            int wCPerm = ${o} - 1 - wC;

            float dyC = float(dyCCorner + wC) / strides[1];
            bool idyCVal = (dyC >= 0.0) && (dyC < ${e.outWidth}.0)
              && (fract(dyC) == 0.0);
            int idyC = int(dyC);

            float dyC2 = float(dyCCorner + wC + 1) / strides[1];
            bool idyCVal2 = (dyC2 >= 0.0) && (dyC2 < ${e.outWidth}.0)
              && (fract(dyC2) == 0.0);
            int idyC2 = int(dyC2);

            if (idyCVal && idyCVal2) {
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC, d2);
                vec4 dySample2 = (idyC / 2 == idyC2 / 2) ?
                  dySample : getDy(batch, idyR, idyC2, d2);

                vec2 dyValue = mod(float(idyC), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.xy += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));

                dyValue = mod(float(idyC2), 2.) == 0. ?
                  dySample2.xy : dySample2.zw;
                result.zw += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            } else if (idyCVal) {
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC, d2);
                vec2 dyValue = mod(float(idyC), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.xy += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            } else if (idyCVal2) {
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC2, d2);
                vec2 dyValue = mod(float(idyC2), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.zw += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            }
          }
        }
        setOutput(result);
      }
    `}};function KK(r){let{inputs:e,backend:t,attrs:o}=r,{dy:n,filter:s}=e,{inputShape:i,strides:a,pad:l,dataFormat:u,dimRoundingMode:c}=o,p=v.convertConv2DDataFormat(u),m=v.computeConv2DInfo(i,s.shape,a,1,l,c,!1,p);if(P().getBool("WEBGL_PACK_CONV2DTRANSPOSE")&&p==="channelsLast"){let f=[[m.strideHeight,m.strideWidth]],h=new Cd(m);return t.runWebGLProgram(h,[n,s],"float32",f)}else{let f=new yd(m);return t.runWebGLProgram(f,[n,s],"float32")}}var nD={kernelName:js,backendName:"webgl",kernelFunc:KK};function jK(r){let{inputs:e,backend:t,attrs:o}=r,{x:n,filter:s}=e,{strides:i,pad:a,dilations:l}=o,u=v.computeConv3DInfo(n.shape,s.shape,i,l,a),c=new md(u);return t.runWebGLProgram(c,[n,s],"float32")}var sD={kernelName:Xs,backendName:"webgl",kernelFunc:jK};function XK(r){let{inputs:e,backend:t,attrs:o}=r,{x:n,dy:s}=e,{strides:i,pad:a,filterShape:l}=o,u=v.computeConv3DInfo(n.shape,l,i,1,a),c=new bd(u);return t.runWebGLProgram(c,[n,s],"float32")}var iD={kernelName:vl,backendName:"webgl",kernelFunc:XK};function YK(r){let{inputs:e,backend:t,attrs:o}=r,{dy:n,filter:s}=e,{pad:i,strides:a,inputShape:l}=o,u=v.computeConv3DInfo(l,s.shape,a,1,i),c=new wd(u);return t.runWebGLProgram(c,[n,s],"float32")}var aD={kernelName:Nl,backendName:"webgl",kernelFunc:YK};var ZK=So+`
  return cos(x);
`,QK=`
  vec4 result = cos(x);
  bvec4 isNaN = isnan(x);
  ${Vr}
  return result;
`,JK=mt({opSnippet:ZK,packedOpSnippet:QK}),lD={kernelName:vn,backendName:"webgl",kernelFunc:JK};var tj=`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`,ej=mt({opSnippet:tj}),uD={kernelName:Nn,backendName:"webgl",kernelFunc:ej};var Sd=class{constructor(e,t,o,n,s){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];let[i,a,l,u]=e,[c]=t,[p,m]=o;this.outputShape=[c,p,m,u];let f=n==="bilinear"?1:0,[h,g]=[`${a-1}.0`,`${l-1}.0`],[d,x,y]=p>1?[`${(a-1)/(p-1)}`,"(y2-y1) * height_ratio",`y1*${h} + float(y)*(height_scale)`]:["0.0","0.0",`0.5 * (y1+y2) * ${h}`],[w,C,S]=m>1?[`${(l-1)/(m-1)}`,"(x2-x1) * width_ratio",`x1*${g} + float(x)*(width_scale)`]:["0.0","0.0",`0.5 * (x1+x2) * ${g}`];this.userCode=`
      const float height_ratio = float(${d});
      const float width_ratio = float(${w});
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= ${i}) {
          return;
        }

        float height_scale = ${x};
        float width_scale = ${C};

        float in_y = ${y};
        if( in_y < 0.0 || in_y > ${h} ) {
          setOutput(float(${s}));
          return;
        }
        float in_x = ${S};
        if( in_x < 0.0 || in_x > ${g} ) {
          setOutput(float(${s}));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(${f} == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `}};var rj=r=>{let{inputs:e,backend:t,attrs:o}=r,{image:n,boxes:s,boxInd:i}=e,{cropSize:a,method:l,extrapolationValue:u}=o,c=new Sd(n.shape,s.shape,a,l,u);return t.runWebGLProgram(c,[n,s,i],"float32")},cD={kernelName:Tl,backendName:"webgl",kernelFunc:rj};var mc=function(r){return r.Prod="*",r.Sum="+",r}(mc||{}),Pp=class{constructor(e,t,o,n){this.op=e,this.outputShape=t,this.variableNames=["x"],this.customUniforms=[{name:"index",type:"float"}];let s=this.outputShape.length,i=this.op===mc.Prod?"1.0":"0.0",a=o?i:`getX(${pD(s,"coords",this.op)})`,l=this.outputShape[this.outputShape.length-1],u="",c="";o?(u=n?`end != ${l-1}`:"end != 0",c=n?"end + 1":"end - 1"):(u=n?`end + pow2 < ${l}`:"end >= pow2",c=n?"end + pow2":"end - pow2"),this.userCode=`
      void main() {
        ${It(s)} coords = getOutputCoords();
        int end = ${mD(s,"coords",this.op)};
        float val = ${a};
        int pow2 = int(pow(2.0, index));
        if (${u}) {
          int idx = ${c};
          ${mD(s,"coords",this.op)} = idx;
          val ${this.op}= getX(${pD(s,"coords",this.op)});
        }
        setOutput(val);
      }
    `}};function pD(r,e,t){if(r===1)return`${e}`;if(r===2)return`${e}.x, ${e}.y`;if(r===3)return`${e}.x, ${e}.y, ${e}.z`;if(r===4)return`${e}.x, ${e}.y, ${e}.z, ${e}.w`;throw new Error(`Cumulative ${t} for rank ${r} is not yet supported`)}function mD(r,e,t){if(r===1)return`${e}`;if(r===2)return`${e}.y`;if(r===3)return`${e}.z`;if(r===4)return`${e}.w`;throw new Error(`Cumulative ${t} for rank ${r} is not yet supported`)}function vd(r,e,t,o,n,s){let i=e.shape.length,a=v.getAxesPermutation([o],i),l=e;a!=null&&(l=ie({inputs:{x:e},backend:t,attrs:{perm:a}}));let u=v.getInnerMostAxes(1,i)[0];if(u!==i-1)throw new Error(`WebGL cumprod shader expects an inner-most axis=${e.shape.length-1} but got axis=${o}`);let c=l.shape[u],p=Ce({inputs:{x:l},backend:t});for(let m=0;m<=Math.ceil(Math.log2(c))-1;m++){let f=new Pp(r,l.shape,!1,s),h=[[m]],g=p;p=t.runWebGLProgram(f,[p],p.dtype,h),t.disposeIntermediateTensorInfo(g)}if(n){let m=new Pp(r,l.shape,n,s),f=p;p=t.runWebGLProgram(m,[p],p.dtype),t.disposeIntermediateTensorInfo(f)}if(a!=null){let m=v.getUndoAxesPermutation(a),f=ie({inputs:{x:p},backend:t,attrs:{perm:m}});return t.disposeIntermediateTensorInfo(p),t.disposeIntermediateTensorInfo(l),f}return p}function oj(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{axis:s,exclusive:i,reverse:a}=o;return vd(mc.Prod,n,t,s,i,a)}var fD={kernelName:Il,backendName:"webgl",kernelFunc:oj};function nj(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{axis:s,exclusive:i,reverse:a}=o;return vd(mc.Sum,n,t,s,i,a)}var hD={kernelName:Ys,backendName:"webgl",kernelFunc:nj};function sj(r){let{inputs:e,backend:t,attrs:o}=r,{x:n,weights:s}=e,{size:i,binaryOutput:a}=o;if(n.shape.length===1){let l=t.readSync(n.dataId),u=t.readSync(s.dataId),c=zh(l,u,s.dtype,s.shape,i);return t.makeTensorInfo([i],s.dtype,c)}else if(n.shape.length===2){let l=t.bufferSync(n),u=t.bufferSync(s),c=QA(l,u,i,a);return t.makeTensorInfo(c.shape,s.dtype,c.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${n.shape.length}.`)}var dD={kernelName:kl,backendName:"webgl",kernelFunc:sj};var Nd=class{constructor(e,t,o){this.variableNames=["x"],this.outputShape=[],this.outputShape=e,this.blockSize=t,this.dataFormat=o,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = ${this.getHeightCoordString()};
      int w = ${this.getWidthCoordString()};
      int d = ${this.getDepthCoordString()};

      int in_h = h / ${t};
      int offset_h = imod(h, ${t});
      int in_w = w / ${t};
      int offset_w = imod(w, ${t});
      int offset_d = (offset_h * ${t} + offset_w) *
        ${this.getOutputDepthSize()};
      int in_d = d + offset_d;

      float result = ${this.getInputSamplingString()};
      setOutput(result);
    }
  `}getHeightCoordString(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"}getWidthCoordString(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"}getDepthCoordString(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"}getOutputDepthSize(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]}getInputSamplingString(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"}};function ij(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{blockSize:s,dataFormat:i}=o,a=n.shape[0],l=i==="NHWC"?n.shape[1]:n.shape[2],u=i==="NHWC"?n.shape[2]:n.shape[3],c=i==="NHWC"?n.shape[3]:n.shape[1],p=l*s,m=u*s,f=c/(s*s),h=i==="NHWC"?[a,p,m,f]:[a,f,p,m],g=new Nd(h,s,i);return t.runWebGLProgram(g,[n],n.dtype)}var gD={kernelName:El,backendName:"webgl",kernelFunc:ij};var fc=class{constructor(e,t=!1,o=null,n=!1,s=!1){this.variableNames=["x","W"],this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=Ht(this.outputShape.length);let i=e.filterHeight,a=e.filterWidth,l=e.outChannels/e.inChannels,u="",c="";o&&(n?u=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${o}
        }`:s?u=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${o}
        }`:u=`
          float activation(float x) {
            ${o}
          }
        `,c="result = activation(result);");let p=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),s&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${u}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${l};
        int q = d2 - d1 * ${l};

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < ${i}; wR++) {
          int xR = xRCorner + wR * dilations[0];

          if (xR < 0 || xR >= inDims[0]) {
            continue;
          }

          for (int wC = 0; wC < ${a}; wC++) {
            int xC = xCCorner + wC * dilations[1];

            if (xC < 0 || xC >= inDims[1]) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        ${p}
        ${c}
        setOutput(result);
      }
    `}};var hc=class{constructor(e,t=!1,o=null,n=!1,s=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=Ht(this.outputShape.length);let i=e.outChannels/e.inChannels,a=e.padInfo.left,l=e.strideWidth,u=e.dilationWidth,c=e.filterHeight,p=e.filterWidth,m=p,f=`
      int xR; int xC; int xCOffset;
      vec4 wTexel; vec4 previous; vec4 final;`;for(let x=0;x<p;x++)f+=`
          vec4 xTexelC${x*2};
          int xTexelC${x*2}Ready;
          vec4 xTexelC${x*2+1};
          int xTexelC${x*2+1}Ready;
          vec4 xC${x};`;f+=`
    for (int r = 0; r < ${c}; r++) {
      `;for(let x=0;x<p;x++)f+=`
          xTexelC${x*2} = vec4(0.0);
          xTexelC${x*2}Ready = 0;
          xTexelC${x*2+1} = vec4(0.0);
          xTexelC${x*2+1}Ready = 0;
          xC${x} = vec4(0.0);`;f+=`
        xR = xRCorner + r * dilations[0];
        if (xR >=0 && xR < inDims[0]) {
      `;for(let x=0;x<(m+1)/2;x++){let y=x*2;if(f+=`
          xC = xCCorner + ${y*u};
          `,l===1){if(y<p&&(a%2===1?(f+=`
                xCOffset = xC + 1;
                if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${y}Ready == 0) {
                  xTexelC${y} = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${y}.zw = vec2(0.0);
                  }
                  xTexelC${y}Ready = 1;
                }
              `,u===1&&y>0?f+=`
                xC${y} = vec4(xTexelC${y-2}.zw, xTexelC${y}.xy);
                `:f+=`
                  xCOffset = xC + 1 - 2;

                  if (xCOffset >= 0 && xCOffset < inDims[1]) {
                    previous = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      previous.zw = vec2(0.0);
                    }

                    xC${y} = vec4(previous.zw, xTexelC${y}.xy);
                  } else {
                    xC${y} = vec4(0.0, 0.0, xTexelC${y}.xy);
                  }
                  `):f+=`
                if (xC >= 0 && xC < inDims[1] && xTexelC${y}Ready == 0) {
                  xTexelC${y} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${y}.zw = vec2(0.0);
                  }
                  xTexelC${y}Ready = 1;
                }

                xC${y} = xTexelC${y};
                `,y+1<p)){let w=a%2===0?b.nearestLargerEven(u):u;u%2===0&&a%2===1||u%2!==0&&a%2!==1?(f+=`
                  xCOffset = xC + imod(pads[1], 2) + ${w};

                  if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${y+1}Ready == 0) {
                    xTexelC${y+1} = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      xTexelC${y+1}.zw = vec2(0.0);
                    }
                    xTexelC${y+1}Ready = 1;
                  }
                  `,u>1?f+=`
                    xCOffset -= 2;
                    if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);
                     xC${y+1} = vec4(previous.zw, xTexelC${y+1}.xy);
                    } else {
                     xC${y+1} = vec4(0.0, 0.0, xTexelC${y+1}.xy);
                    }
                    `:f+=`
                    xC${y+1} = vec4(xTexelC${y}.zw, xTexelC${y+1}.xy);
                    `):w===1?f+=`
                    xC${y+1} = xTexelC${y};
                    `:f+=`
                    xCOffset = xC + ${w};

                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${y+1}Ready == 0) {
                      xTexelC${y+1} = getX(batch, xR, xCOffset, d1);
                      if (xCOffset + 1 >= inDims[1]) {
                        xTexelC${y+1}.zw = vec2(0.0);
                      }
                      xTexelC${y+1}Ready = 1;
                    }

                    xC${y+1} = xTexelC${y+1};
                    `}}else y<p&&(a%2===1?(f+=`
                xCOffset = xC + 1 - strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${y}Ready == 0) {
                  xTexelC${y} = getX(batch, xR, xCOffset, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${y}.zw = vec2(0.0);
                  }
                  xTexelC${y}Ready = 1;
                }

                if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${y+1}Ready == 0) {
                  xTexelC${y+1} = getX(batch, xR, xC + 1, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xC + 2 >= inDims[1]) {
                    xTexelC${y+1}.zw = vec2(0.0);
                  }
                  xTexelC${y+1}Ready = 1;
                }

                xC${y} = vec4(xTexelC${y}.zw, xTexelC${y+1}.zw);
              `,y+1<p&&(f+=`
                  final = vec4(0.0);
                  xCOffset = xC + 1 + strides[1];
                  if(xCOffset >= 0 && xCOffset < inDims[1]) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xC${y+1} = vec4(xTexelC${y+1}.xy, final.xy);
                `)):(f+=`
                if(xC >= 0 && xC < inDims[1] && xTexelC${y}Ready == 0) {
                  xTexelC${y} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${y}.zw = vec2(0.0);
                  }
                  xTexelC${y}Ready = 1;
                }

                xCOffset = xC + strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${y+1}Ready == 0) {
                  xTexelC${y+1} = getX(batch, xR, xCOffset, d1);
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${y+1}.zw = vec2(0.);
                  }
                  xTexelC${y+1}Ready = 1;
                }

                xC${y} = vec4(
                  xTexelC${y}.xy, xTexelC${y+1}.xy);
              `,y+1<p&&(f+=`
                  xC${y+1} = vec4(xTexelC${y}.zw, xTexelC${y+1}.zw);
                `)));y<p&&(f+=`
            wTexel = getW(r, ${y}, d1, q);
            dotProd += xC${y} * vec4(wTexel.xz, wTexel.xz);
          `,y+1<p&&(f+=`
              wTexel = getW(r, ${y+1}, d1, q);
              dotProd += xC${y+1} * vec4(wTexel.xz, wTexel.xz);
            `))}f+=`
    }
  `,f+=`
      }
    `;let h="",g="";o&&(n?h=`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${o}
        }`:s?h=`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${o}
        }`:h=`vec4 activation(vec4 x) {
          ${o}
        }`,g="result = activation(result);");let d=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),s&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${h}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${i};
        int q = d2 - d1 * ${i};
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
        vec4 dotProd = vec4(0.000000000000001);

        ${f}

        vec4 result = dotProd - vec4(0.000000000000001);
        ${d}
        ${g}
        setOutput(result);
      }
    `}};function aj(r){let{inputs:e,backend:t,attrs:o}=r,{x:n,filter:s}=e,{strides:i,pad:a,dilations:l,dimRoundingMode:u}=o,c=l;c==null&&(c=[1,1]),b.assert(v.eitherStridesOrDilationsAreOne(i,c),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);let p=v.computeConv2DInfo(n.shape,s.shape,i,c,a,u,!0),m;P().getBool("WEBGL_PACK_DEPTHWISECONV")&&p.strideWidth<=2&&p.outChannels/p.inChannels===1?m=new hc(p):m=new fc(p);let f=[[p.padInfo.top,p.padInfo.left],[p.strideHeight,p.strideWidth],[p.dilationHeight,p.dilationWidth],[p.inHeight,p.inWidth]];return t.runWebGLProgram(m,[n,s],"float32",f)}var xD={kernelName:Zs,backendName:"webgl",kernelFunc:aj};var Id=class{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;let t=e.strideHeight,o=e.strideWidth,n=e.padInfo.top,s=e.padInfo.left,i=e.outChannels/e.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * ${i} + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yR = 0; yR < ${e.outHeight}; yR++) {
            int xR = wR + yR * ${t} - ${n};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${o} - ${s};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `}},Td=class{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;let t=e.filterHeight,o=e.filterWidth,n=e.strideHeight,s=e.strideWidth,i=t-1-e.padInfo.top,a=o-1-e.padInfo.left,l=e.outChannels/e.inChannels;this.userCode=`
      const ivec2 pads = ivec2(${i}, ${a});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / ${n}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${o}; wC++) {
            float dyC = float(dyCCorner + wC) / ${s}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${o} - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < ${l}; dm++) {
              int d2 = d1 * ${l} + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `}};function lj(r){let{inputs:e,backend:t,attrs:o}=r,{x:n,dy:s}=e,{strides:i,dilations:a,pad:l,dimRoundingMode:u,filterShape:c}=o,p=v.computeConv2DInfo(n.shape,c,i,a,l,u,!0),m=new Id(p);return t.runWebGLProgram(m,[n,s],"float32")}var yD={kernelName:Al,backendName:"webgl",kernelFunc:lj};function uj(r){let{inputs:e,backend:t,attrs:o}=r,{dy:n,filter:s}=e,{strides:i,dilations:a,pad:l,dimRoundingMode:u,inputShape:c}=o,p=v.computeConv2DInfo(c,s.shape,i,a,l,u,!0),m=new Td(p);return t.runWebGLProgram(m,[n,s],"float32")}var bD={kernelName:$l,backendName:"webgl",kernelFunc:uj};var kd=class{constructor(e){this.variableNames=["X"],this.outputShape=[e,e],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `}};function cj(r){let{inputs:e,backend:t}=r,{x:o}=e,n=[...o.shape,...o.shape],s=b.sizeFromShape(o.shape),i=J({inputs:{x:o},backend:t,attrs:{shape:[s]}}),a=new kd(s),l=t.runWebGLProgram(a,[i],i.dtype),u=J({inputs:{x:l},backend:t,attrs:{shape:n}});return t.disposeIntermediateTensorInfo(i),t.disposeIntermediateTensorInfo(l),u}var wD={kernelName:Hp,backendName:"webgl",kernelFunc:cj};var Ed=class{constructor(e){this.variableNames=["x","W"],this.outputShape=e.outShape;let{inHeight:t,inWidth:o,padInfo:n,strideHeight:s,strideWidth:i,filterHeight:a,filterWidth:l,dilationHeight:u,dilationWidth:c}=e,{top:p,left:m}=n;this.userCode=`
      const ivec2 strides = ivec2(${s}, ${i});
      const ivec2 pads = ivec2(${p}, ${m});
      const float neg_infinity = -3.4e38;

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.w;
        ivec2 outTopLeftCorner =
            coords.yz * strides - pads;
        int hBeg = outTopLeftCorner.x;
        int wBeg = outTopLeftCorner.y;

        float curVal = neg_infinity;
        for (int h = 0; h < ${a}; h++) {
          int hIn = hBeg + h * ${u};

          if (hIn >= 0 && hIn < ${t}) {
            for (int w = 0; w < ${l}; w++) {
              int wIn = wBeg + w * ${c};

              if (wIn >= 0 && wIn < ${o}) {
                float xVal = getX(batch, hIn, wIn, d1);
                float wVal = getW(h, w, d1);

                float val = xVal + wVal;
                if (val > curVal) {
                  curVal = val;
                }
              }
            }
          }
        }

        float result = curVal;
        setOutput(result);
      }
    `}};function pj(r){let{inputs:e,backend:t,attrs:o}=r,{x:n,filter:s}=e,{strides:i,pad:a,dilations:l}=o,u=v.computeDilation2DInfo(n.shape,s.shape,i,a,"NHWC",l),c,p=new Ed(u);c=t.runWebGLProgram(p,[n,s],"float32");let m=J({inputs:{x:c},backend:t,attrs:{shape:u.outShape}});return t.disposeIntermediateTensorInfo(c),m}var CD={kernelName:Qs,backendName:"webgl",kernelFunc:pj};function mj(r){let{inputs:e,backend:t,attrs:o}=r,{equation:n}=o,s=e,{allDims:i,summedDims:a,idDims:l}=v.decodeEinsumEquation(n,s.length);v.checkEinsumDimSizes(i.length,l,s);let{path:u,steps:c}=v.getEinsumComputePath(a,l),p=c.length,m=null,f=i.length,h=[];for(let g=0;g<p;++g){for(let d of c[g]){let{permutationIndices:x,expandDims:y}=v.getEinsumPermutation(f,l[d]),w;v.isIdentityPermutation(x)?w=s[d]:(w=ie({inputs:{x:s[d]},backend:t,attrs:{perm:x}}),h.push(w));let C=w.shape.slice();for(let S=0;S<y.length;++S)C.splice(y[S],0,1);b.arraysEqual(w.shape,C)||(w=J({inputs:{x:w},backend:t,attrs:{shape:C}}),h.push(w)),m===null?m=w:(m=Op({inputs:{a:w,b:m},backend:t}),h.push(m))}g<p-1&&(u[g]>=0&&(m=nl({inputs:{x:m},backend:t,attrs:{axis:u[g]-(i.length-f),keepDims:!1}}),h.push(m)),f--)}for(let g of h)g!==m&&t.disposeIntermediateTensorInfo(g);return m}var SD={kernelName:Dl,backendName:"webgl",kernelFunc:mj};var fj="return (x >= 0.0) ? x : (exp(x) - 1.0);",hj=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,dj=mt({opSnippet:fj,packedOpSnippet:hj}),vD={kernelName:Tn,backendName:"webgl",kernelFunc:dj};var gj="return (b >= 0.0) ? a : a * (b + 1.0);",xj=`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,yj=r=>{let{inputs:e,backend:t}=r,{dy:o,y:n}=e,s=P().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Br(xj,o.shape,n.shape):new kr(gj,o.shape,n.shape);return t.runWebGLProgram(s,[o,n],o.dtype)},ND={kernelName:Rl,backendName:"webgl",kernelFunc:yj};var bj=`
  return vec4(equal(a, b));
`,wj="return float(a == b);",Cj=Gt({opSnippet:wj,packedOpSnippet:bj,dtype:"bool",cpuKernelImpl:o2}),ID={kernelName:oa,backendName:"webgl",kernelFunc:Cj};var Sj=`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = ${v.ERF_P};
  float a1 = ${v.ERF_A1};
  float a2 = ${v.ERF_A2};
  float a3 = ${v.ERF_A3};
  float a4 = ${v.ERF_A4};
  float a5 = ${v.ERF_A5};

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`,vj=mt({opSnippet:Sj}),TD={kernelName:kn,backendName:"webgl",kernelFunc:vj};var Nj=So+`
  return exp(x);
`,Ij=`
  vec4 result = exp(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,t0=mt({opSnippet:Nj,packedOpSnippet:Ij,cpuKernelImpl:n2,dtype:"float32"}),kD={kernelName:En,backendName:"webgl",kernelFunc:t0};function Ad(r){let{inputs:e,attrs:t,backend:o}=r,{dim:n}=t,{input:s}=e,i=s.shape.length,a=s.shape.slice(),l=n;return n<0&&(b.assert(-(i+1)<=n,()=>`Axis must be in the interval [${-(i+1)}, ${i}]`),l=i+n+1),a.splice(l,0,1),J({inputs:{x:s},backend:o,attrs:{shape:a}})}var ED={kernelName:Js,backendName:"webgl",kernelFunc:Ad};var AD="return exp(x) - 1.0;",Tj=mt({opSnippet:AD,packedOpSnippet:AD,cpuKernelImpl:s2}),$D={kernelName:An,backendName:"webgl",kernelFunc:Tj};var zp=class{constructor(e,t,o){this.variableNames=["real","imag"];let n=t[1];this.outputShape=t;let s=o?`2.0 * ${Math.PI}`:`-2.0 * ${Math.PI}`,i=o?`${n}.0`:"1.0",a;if(e==="real")a="return real * expR - imag * expI;";else if(e==="imag")a="return real * expI + imag * expR;";else throw new Error(`FFT component must be either "real" or "imag", got ${e}.`);this.userCode=`
      const float exponentMultiplier = ${s};

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        ${a}
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(${n});
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < ${n}; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / ${i};
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `}};function $d(r,e,t){let o=t.texData.get(r.dataId),n=b.sizeFromShape(r.shape),s=r.shape[r.shape.length-1],i=n/s,a=J({inputs:{x:r},backend:t,attrs:{shape:[i,s]}}),l=a.shape,u=new zp("real",l,e),c=new zp("imag",l,e),p=[{dataId:o.complexTensorInfos.real.dataId,dtype:o.complexTensorInfos.real.dtype,shape:l},{dataId:o.complexTensorInfos.imag.dataId,dtype:o.complexTensorInfos.imag.dtype,shape:l}],m=t.runWebGLProgram(u,p,"float32"),f=t.runWebGLProgram(c,p,"float32"),h=Er({inputs:{real:m,imag:f},backend:t});t.disposeIntermediateTensorInfo(m),t.disposeIntermediateTensorInfo(f);let g=J({inputs:{x:h},backend:t,attrs:{shape:r.shape}});return t.disposeIntermediateTensorInfo(a),t.disposeIntermediateTensorInfo(h),g}function kj(r){let{inputs:e,backend:t}=r,{input:o}=e;return $d(o,!1,t)}var DD={kernelName:Fl,backendName:"webgl",kernelFunc:kj};var Dd=class{constructor(e,t){this.outputShape=[],this.customUniforms=[{name:"value",type:"float"}],this.variableNames=["x"],this.outputShape=e,this.userCode=`
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}};function $s(r){let{backend:e,attrs:t}=r,{shape:o,value:n}=t,{dtype:s}=t;if(s=s||b.inferDtype(n),s==="string"){let i=b.getArrayFromDType(s,b.sizeFromShape(o));return i.fill(n),e.makeTensorInfo(o,s,i)}else{let i=new Dd(o,n),a=[[n]];return e.runWebGLProgram(i,[],s,a)}}var RD={kernelName:_l,backendName:"webgl",kernelFunc:$s};var Rd=class{constructor(e){this.variableNames=["Image"],this.outputShape=[];let t=e[2];this.outputShape=e,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];

          int coordX = ${t} - x - 1;
          float outputValue;
          if(coordX >= 0 && coordX < ${t}) {
            outputValue = getImage(coords[0], coords[1], coordX, coords[3]);
          } else {
            outputValue = getImage(coords[0], coords[1], coords[2], coords[3]);
          }
          setOutput(outputValue);
        }
    `}};var FD={kernelName:Ol,backendName:"webgl",kernelFunc:({inputs:r,backend:e})=>{let{image:t}=r,o=e,n=new Rd(t.shape);return o.runWebGLProgram(n,[t],t.dtype)}};var _D="return floor(x);",Ej=mt({opSnippet:_D,packedOpSnippet:_D,cpuKernelImpl:i2}),OD={kernelName:$n,backendName:"webgl",kernelFunc:Ej};var Aj=`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,$j=`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,Dj=Gt({opSnippet:Aj,packedOpSnippet:$j,dtype:"int32"}),LD={kernelName:Dn,backendName:"webgl",kernelFunc:Dj};var Fd=class{constructor(e){this.variableNames=["A"];let t=fe(),[o,n]=e;this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${n}.0, ${o}.0);

        vec4 values = ${t.texture2D}(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `}};var _d=class{constructor(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;let t=fe(),[o,n]=e;this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(${n}.0, ${o}.0);
            vec4 values = ${t.texture2D}(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        ${t.output} = result;
      }
    `}};var PD={kernelName:_0,backendName:"webgl",kernelFunc:Rj},dc,e0=P().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");function Rj(r){let{inputs:e,backend:t,attrs:o}=r,{pixels:n}=e,{numChannels:s}=o,i=typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement,a=typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement,[l,u]=i?[n.videoWidth,n.videoHeight]:[n.width,n.height],c=[u,l],p=[u,l,s];if(a||i){let g=P().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");(dc==null||g!==e0)&&(e0=g,dc=document.createElement("canvas").getContext("2d",{willReadFrequently:e0})),dc.canvas.width=l,dc.canvas.height=u,dc.drawImage(n,0,0,l,u),n=dc.canvas}let m=t.makeTensorInfo(c,"int32");t.texData.get(m.dataId).usage=lr.PIXELS,t.gpgpu.uploadPixelDataToTexture(t.getTexture(m.dataId),n);let f=P().getBool("WEBGL_PACK")?new _d(p):new Fd(p),h=t.runWebGLProgram(f,[m],"int32");return t.disposeData(m.dataId),h}function Fj(r){let{inputs:e,backend:t,attrs:o}=r,{x:n,filter:s,bias:i,preluActivationWeights:a}=e,{strides:l,pad:u,dataFormat:c,dilations:p,dimRoundingMode:m,activation:f,leakyreluAlpha:h}=o,g=v.convertConv2DDataFormat(c),d=v.computeConv2DInfo(n.shape,s.shape,l,p,u,m,!1,g),x,y=[],w=i!=null,C=a!=null,S=f==="leakyrelu",E=()=>{let $=[n,s],_=(L,M)=>{if(M==="NCHW"&&L.shape.length===1&&L.shape[0]!==1){let V=J({inputs:{x:L},backend:t,attrs:{shape:[L.shape[0],1,1]}});return y.push(V),V}return L};if(w&&$.push(_(i,c)),C&&$.push(_(a,c)),S){let L=t.makeTensorInfo([],"float32",b.createScalarValue(h,"float32"));$.push(L),y.push(L)}return $};if(d.filterHeight===1&&d.filterWidth===1&&d.dilationHeight===1&&d.dilationWidth===1&&d.strideHeight===1&&d.strideWidth===1&&(d.padInfo.type==="SAME"||d.padInfo.type==="VALID"))x=dd({x:n,filter:s,convInfo:d,backend:t,bias:i,activation:f,preluActivationWeights:a,leakyreluAlpha:h});else if(d.strideWidth<=2&&g==="channelsLast"&&P().getBool("WEBGL_EXP_CONV")){let $=f?Es(f,!0):null,_=new pc(d,w,$,C,S),L=[[d.padInfo.top,d.padInfo.left],[d.strideHeight,d.strideWidth],[d.dilationHeight,d.dilationWidth],[d.inHeight,d.inWidth]],M=E();x=t.runWebGLProgram(_,M,"float32",L)}else if(P().getBool("WEBGL_CONV_IM2COL"))x=gd({x:n,filter:s,convInfo:d,backend:t,bias:i,activation:f,preluActivationWeights:a,leakyreluAlpha:h});else{let $=f?Es(f,!1):null,_=new cc(d,w,$,C,S),L=E();x=t.runWebGLProgram(_,L,"float32")}let A=J({inputs:{x},backend:t,attrs:{shape:d.outShape}});return y.push(x),y.forEach($=>t.disposeIntermediateTensorInfo($)),A}var zD={kernelName:ma,backendName:"webgl",kernelFunc:Fj};function _j(r){let{inputs:e,backend:t,attrs:o}=r,{x:n,filter:s,bias:i,preluActivationWeights:a}=e,{strides:l,pad:u,dilations:c,dimRoundingMode:p,activation:m,leakyreluAlpha:f}=o,h=[],g=c;g==null&&(g=[1,1]),b.assert(v.eitherStridesOrDilationsAreOne(l,g),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${l} and dilations '${g}'`);let d=v.computeConv2DInfo(n.shape,s.shape,l,g,u,p,!0),x=P().getBool("WEBGL_PACK_DEPTHWISECONV")&&d.strideWidth<=2&&d.outChannels/d.inChannels===1,y=m?Es(m,x):null,w=[n,s],C=i!=null,S=a!=null,E=m==="leakyrelu";if(C&&w.push(i),S&&w.push(a),E){let L=t.makeTensorInfo([],"float32",b.createScalarValue(f,"float32"));w.push(L),h.push(L)}let A;x?A=new hc(d,C,y,S,E):A=new fc(d,C,y,S,E);let $=[[d.padInfo.top,d.padInfo.left],[d.strideHeight,d.strideWidth],[d.dilationHeight,d.dilationWidth],[d.inHeight,d.inWidth]],_=t.runWebGLProgram(A,w,"float32",$);return h.forEach(L=>t.disposeIntermediateTensorInfo(L)),_}var MD={kernelName:fa,backendName:"webgl",kernelFunc:_j};var Od=class{constructor(e,t,o,n){this.sliceDim=e,this.strides=t,this.paramsShape=n,this.variableNames=["x","indices"],this.outputShape=o;let s=It(o.length),i=`
    int index;`;for(let a=0;a<this.sliceDim;a++)i+=`
          index = round(getIndices(coords[0], ${a}));
          out_of_bounds = out_of_bounds || index < 0;
          out_of_bounds = out_of_bounds || index >= ${this.paramsShape[a]};
          flattenIndex += index * ${this.strides[a]};`;this.userCode=`
         void main() {
          ${s} coords = getOutputCoords();
          int flattenIndex = 0;
          bool out_of_bounds = false;

          ${i}

          setOutput(out_of_bounds ? 0.0 : getX(flattenIndex, coords[1]));
        }
      `}};function Oj(r){let{inputs:e,backend:t}=r,{params:o,indices:n}=e,s=n.shape,i=s[s.length-1],a=b.sizeFromShape(o.shape),[l,u,c,p]=v.prepareAndValidate(o,n),m=J({inputs:{x:n},backend:t,attrs:{shape:[u,i]}}),f=J({inputs:{x:o},backend:t,attrs:{shape:[b.sizeFromShape(o.shape)/c,c]}});if(t.shouldExecuteOnCPU([o,n])||o.dtype==="string"){let x=t.readSync(n.dataId),y=t.bufferSync(o),w=a2(x,y,o.dtype,u,i,c,p,o.shape,a);return t.makeTensorInfo(l,o.dtype,w.values)}let h=new Od(i,p,[u,c],o.shape),g=t.runWebGLProgram(h,[f,m],f.dtype),d=J({inputs:{x:g},backend:t,attrs:{shape:l}});return t.disposeIntermediateTensorInfo(m),t.disposeIntermediateTensorInfo(f),t.disposeIntermediateTensorInfo(g),d}var BD={kernelName:qp,backendName:"webgl",kernelFunc:Oj};var Ld=class{constructor(e,t){this.variableNames=["A","indices"],this.outputShape=t,this.rank=t.length;let o=It(this.rank),n=Lj(e,2);this.userCode=`
      void main() {
        ${o} resRC = getOutputCoords();
        int index = int(getIndices(resRC.x, resRC.z));
        float inBounds = (index >= 0) && (index < ${e[2]}) ? 1.0 : 0.0;
        setOutput(inBounds * getA(${n}));
      }
    `}};function Lj(r,e){let t=["resRC.x","resRC.y","resRC.z","resRC.w"],o=[];for(let n=0;n<r.length;n++)n===2?o.push("index"):o.push(`${t[n]}`);return o.join()}function r0(r){let{inputs:e,backend:t,attrs:o}=r,{x:n,indices:s}=e,{axis:i,batchDims:a}=o,l=b.parseAxisParam(i,n.shape)[0];if(P().get("DEBUG")){let y=t.readSync(s.dataId),w=n.shape[l];for(let C=0;C<y.length;++C){let S=y[C];b.assert(S<=w-1&&S>=0,()=>`GatherV2: the index value ${S} is not in [0, ${w-1}]`)}}let u=v.segment_util.collectGatherOpShapeInfo(n,s,l,a),c=b.sizeFromShape(s.shape),p=[],m=J({inputs:{x:n},backend:t,attrs:{shape:[u.batchSize,u.outerSize,u.dimSize,u.sliceSize]}}),f=J({inputs:{x:s},backend:t,attrs:{shape:[u.batchSize,c/u.batchSize]}});p.push(m),p.push(f);let h=[u.batchSize,u.outerSize,c/u.batchSize,u.sliceSize];if(t.shouldExecuteOnCPU([n,s])||n.dtype==="string"){let y=t.bufferSync(f),w=t.bufferSync(m),C=l2(w,y,h);return p.forEach(S=>t.disposeIntermediateTensorInfo(S)),t.makeTensorInfo(u.outputShape,C.dtype,C.values)}let g=new Ld(m.shape,h),d=t.runWebGLProgram(g,[m,f],m.dtype);p.push(d);let x=J({inputs:{x:d},backend:t,attrs:{shape:u.outputShape}});return p.forEach(y=>t.disposeIntermediateTensorInfo(y)),x}var VD={kernelName:ei,backendName:"webgl",kernelFunc:r0};var Pj="return float(a > b);",zj=`
  return vec4(greaterThan(a, b));
`,Mj=Gt({opSnippet:Pj,packedOpSnippet:zj,cpuKernelImpl:u2,dtype:"bool"}),GD={kernelName:na,backendName:"webgl",kernelFunc:Mj};var Bj="return float(a >= b);",Vj=`
  return vec4(greaterThanEqual(a, b));
`,Gj=Gt({opSnippet:Bj,packedOpSnippet:Vj,dtype:"bool",cpuKernelImpl:c2}),WD={kernelName:Rn,backendName:"webgl",kernelFunc:Gj};function Wj(r){let{inputs:e,backend:t}=r,{input:o}=e;return $d(o,!0,t)}var UD={kernelName:Ll,backendName:"webgl",kernelFunc:Wj};var Uj="return float(!isnan(x) && !isinf(x));",Hj=mt({opSnippet:Uj,dtype:"bool"}),HD={kernelName:Fn,backendName:"webgl",kernelFunc:Hj};var qj="return float(isinf(x));",Kj=mt({opSnippet:qj,dtype:"bool"}),qD={kernelName:_n,backendName:"webgl",kernelFunc:Kj};var jj="return float(isnan(x));",Xj=mt({opSnippet:jj,dtype:"bool"}),KD={kernelName:On,backendName:"webgl",kernelFunc:Xj};var Yj="return float(a < b);",Zj=`
  return vec4(lessThan(a, b));
`,Qj=Gt({opSnippet:Yj,packedOpSnippet:Zj,cpuKernelImpl:p2,dtype:"bool"}),jD={kernelName:sa,backendName:"webgl",kernelFunc:Qj};var Jj="return float(a <= b);",t6=`
  return vec4(lessThanEqual(a, b));
`,e6=Gt({opSnippet:Jj,packedOpSnippet:t6,cpuKernelImpl:m2,dtype:"bool"}),XD={kernelName:ia,backendName:"webgl",kernelFunc:e6};function r6(r){let{backend:e,attrs:t}=r,{start:o,stop:n,num:s}=t,i=f2(o,n,s);return e.makeTensorInfo([i.length],"float32",i)}var YD={kernelName:Kp,backendName:"webgl",kernelFunc:r6};var o6=So+`
  return x < 0.0 ? 0./0. : log(x);
`,n6=`
  vec4 result = log(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);
  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);
  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);
  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);
  return result;
`,s6=mt({opSnippet:o6,packedOpSnippet:n6,cpuKernelImpl:h2}),ZD={kernelName:Ln,backendName:"webgl",kernelFunc:s6};var i6=So+`
  return log(1.0 + x);
`,a6=mt({opSnippet:i6}),QD={kernelName:Pn,backendName:"webgl",kernelFunc:a6};var l6="return float(a >= 1.0 && b >= 1.0);",u6=`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,c6=Gt({opSnippet:l6,packedOpSnippet:u6,dtype:"bool"}),JD={kernelName:aa,backendName:"webgl",kernelFunc:c6};var p6="return float(!(x >= 1.0));",m6=mt({opSnippet:p6}),tR={kernelName:la,backendName:"webgl",kernelFunc:m6};var f6="return float(a >= 1.0 || b >= 1.0);",h6=`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,d6=Gt({opSnippet:f6,packedOpSnippet:h6,dtype:"bool"}),eR={kernelName:ua,backendName:"webgl",kernelFunc:d6};var Pd=class{constructor(e,t,o,n,s){this.variableNames=["x"],this.outputShape=[];let i=t,a=e[3]-1;this.outputShape=e;let l,u=`float(${o}) + float(${n}) * sum`;s===.5?l=`inversesqrt(${u})`:s===1?l=`1.0/(${u})`:l=`exp(log(${u}) * float(-${s}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -${i}; j <= ${i}; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  ${a}) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * ${l};
        setOutput(val);
      }
    `}};var zd=class{constructor(e,t,o,n,s){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;let i=t,a=e[3]-1;this.outputShape=e;let l,u=`float(${o}) + float(${n}) * sum`;s===.5?l=`inversesqrt(${u})`:s===1?l=`1.0/(${u})`:l=`exp(log(${u}) * float(-${s}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < ${this.outputShape[3]};
        bool hasNextRow = c < ${this.outputShape[2]};

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - ${i};
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - ${i}; j <= ${i}; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(${a}));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * ${l};
        setOutput(result);
      }
    `}};var g6=r=>{let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{depthRadius:s,bias:i,alpha:a,beta:l}=o,u=P().getBool("WEBGL_PACK_NORMALIZATION")?new zd(n.shape,s,i,a,l):new Pd(n.shape,s,i,a,l);return t.runWebGLProgram(u,[n],n.dtype)},rR={kernelName:oi,backendName:"webgl",kernelFunc:g6};var Md=class{constructor(e,t,o,n,s){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=e,this.depth=e[3],this.depthRadius=t,this.bias=o,this.alpha=n,this.beta=s,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < ${this.depth}; ++d) {
          int depthBegin = int(max(0.0, float(d - ${t})));
          int depthEnd = int(min(float(${this.depth}),
              float(d + ${t} + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = ${this.depth};

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(${n}) * norm + float(${o});

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(${n})
                * float(${s})
                * getInputImage(b, r, c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * ${s});
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `}};var x6=r=>{let{inputs:e,backend:t,attrs:o}=r,{x:n,y:s,dy:i}=e,{depthRadius:a,bias:l,alpha:u,beta:c}=o,p=new Md(n.shape,a,l,u,c);return t.runWebGLProgram(p,[n,s,i],n.dtype)},oR={kernelName:zl,backendName:"webgl",kernelFunc:x6};function nR(r,e,t,o){let n=b.sizeFromShape(e),i=b.sizeFromShape(r.shape)/n,a=J({inputs:{x:r},attrs:{shape:[i,n]},backend:o}),l=Gr(a,r.dtype,"max",o),u=J({inputs:{x:l},attrs:{shape:t},backend:o});return o.disposeIntermediateTensorInfo(a),o.disposeIntermediateTensorInfo(l),u}function o0(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{reductionIndices:s,keepDims:i}=o,a=n.shape.length,l=b.parseAxisParam(s,n.shape),u=l,c=v.getAxesPermutation(u,a),p=c!=null,m=t.shouldExecuteOnCPU([n]),f=n;if(p){if(m){let w=t.texData.get(f.dataId).values,C=new Array(a);for(let A=0;A<C.length;A++)C[A]=n.shape[c[A]];let S=ol(w,n.shape,n.dtype,c,C);f=t.makeTensorInfo(C,n.dtype);let E=t.texData.get(f.dataId);E.values=S}else f=Xi(n,c,t);u=v.getInnerMostAxes(u.length,a)}v.assertAxesAreInnerMostDims("max",u,a);let[h,g]=v.computeOutAndReduceShapes(f.shape,u),d=h;i&&(d=v.expandShapeToKeepDim(h,l));let x;if(m){let w=t.texData.get(f.dataId).values,C=d2(w,b.sizeFromShape(g),d,n.dtype);x=t.makeTensorInfo(d,n.dtype);let S=t.texData.get(x.dataId);S.values=C}else x=nR(f,g,d,t);return p&&t.disposeIntermediateTensorInfo(f),x}var sR={kernelName:ni,backendName:"webgl",kernelFunc:o0};var y6=ac+`
  return max(a, b);
`,b6=`
  vec4 result = vec4(max(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+Vr+`
  return result;
`,w6=Gt({opSnippet:y6,packedOpSnippet:b6,cpuKernelImpl:g2}),iR={kernelName:zn,backendName:"webgl",kernelFunc:w6};function C6(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e;ln(n,"maxPool");let{filterSize:s,strides:i,pad:a,dimRoundingMode:l}=o,u=1;b.assert(v.eitherStridesOrDilationsAreOne(i,u),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${u}'`);let c=v.computePool2DInfo(n.shape,s,i,u,a,l);if(c.filterWidth===1&&c.filterHeight===1&&b.arraysEqual(c.inShape,c.outShape))return Ce({inputs:{x:n},backend:t});let p=new Bo(c,"max",!1);return t.runWebGLProgram(p,[n],n.dtype)}var aR={kernelName:si,backendName:"webgl",kernelFunc:C6};function S6(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{filterSize:s,strides:i,pad:a,dataFormat:l,dimRoundingMode:u}=o,c=[1,1,1],p=v.computePool3DInfo(n.shape,s,i,c,a,u,l),m=new Yi(p,"max",!1);return t.runWebGLProgram(m,[n],n.dtype)}var lR={kernelName:ii,backendName:"webgl",kernelFunc:S6};var Bd=class{constructor(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;let t=e.strideHeight,o=e.strideWidth,n=e.dilationHeight,s=e.effectiveFilterHeight,i=e.effectiveFilterWidth,a=s-1-e.padInfo.top,l=i-1-e.padInfo.left,u=s*i-1;this.userCode=`
      const ivec2 pads = ivec2(${a}, ${l});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${s};
          wR += ${n}) {
          float dyR = float(dyRCorner + wR) / ${t}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${i}; wC++) {
            float dyC = float(dyCCorner + wC) / ${o}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = ${u} - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * ${i} + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `}},Vd=class{constructor(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;let t=e.strideDepth,o=e.strideHeight,n=e.strideWidth,s=e.dilationDepth,i=e.dilationHeight,a=e.dilationWidth,l=e.effectiveFilterDepth,u=e.effectiveFilterHeight,c=e.effectiveFilterWidth,p=l-1-e.padInfo.front,m=u-1-e.padInfo.top,f=c-1-e.padInfo.left,h=l*u*c-1;this.userCode=`
      const ivec3 pads = ivec3(${p}, ${m}, ${f});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${l};
           wD += ${s}) {
          float dyD = float(dyDCorner + wD) / ${t}.0;

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${u};
              wR += ${i}) {
            float dyR = float(dyRCorner + wR) / ${o}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${c};
                wC += ${a}) {
              float dyC = float(dyCCorner + wC) / ${n}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = ${h} -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * ${u} * ${c} +
                  wR * ${c} + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `}};function v6(r){let{inputs:e,backend:t,attrs:o}=r,{dy:n,input:s}=e,i=s,{filterSize:a,strides:l,pad:u,dimRoundingMode:c}=o,p=[1,1,1],m=v.computePool3DInfo(i.shape,a,l,p,u,c),f=new Yi(m,"max",!0),h=t.runWebGLProgram(f,[i],i.dtype),g=new Vd(m),d=t.runWebGLProgram(g,[n,h],i.dtype);return t.disposeIntermediateTensorInfo(h),d}var uR={kernelName:Bl,backendName:"webgl",kernelFunc:v6};function N6(r){let{inputs:e,backend:t,attrs:o}=r,{dy:n,input:s,output:i}=e,a=s;ln([s,i],"maxPoolGrad");let{filterSize:l,strides:u,pad:c,dimRoundingMode:p}=o,m=v.computePool2DInfo(a.shape,l,u,1,c,p),f=!0,h=new Bo(m,"max",f),g=t.runWebGLProgram(h,[a],a.dtype),d=new Bd(m),x=t.runWebGLProgram(d,[n,g],a.dtype);return t.disposeIntermediateTensorInfo(g),x}var cR={kernelName:Ml,backendName:"webgl",kernelFunc:N6};function pR(r,e,t,o){let n=new Bo(t,"max",!1),s=o.runWebGLProgram(n,[r],"float32");n=new Bo(t,"max",!0,!0,e);let i=o.runWebGLProgram(n,[r],"float32");return[s,i]}var mR={kernelName:jp,backendName:"webgl",kernelFunc:({inputs:r,attrs:e,backend:t})=>{let{x:o}=r,{filterSize:n,strides:s,pad:i,includeBatchInIndex:a}=e,l=t;b.assert(o.shape.length===4,()=>`Error in maxPool: input must be rank 4 but got rank ${o.shape.length}.`);let u=[1,1];b.assert(v.eitherStridesOrDilationsAreOne(s,u),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${s} and dilations '${u}'`);let c=v.computePool2DInfo(o.shape,n,s,u,i),[p,m]=pR(o,a,c,l);return[p,m]}};function fR(r,e,t,o){let n=b.sizeFromShape(e),i=b.sizeFromShape(r.shape)/n,a=J({inputs:{x:r},attrs:{shape:[i,n]},backend:o}),l=Gr(a,"float32","mean",o),u=J({inputs:{x:l},attrs:{shape:t},backend:o});return o.disposeIntermediateTensorInfo(a),o.disposeIntermediateTensorInfo(l),u}var hR={kernelName:ai,backendName:"webgl",kernelFunc:({inputs:r,attrs:e,backend:t})=>{let{x:o}=r,{keepDims:n,axis:s}=e,i=t,a=o.shape.length,l=b.parseAxisParam(s,o.shape),u=l,c=v.getAxesPermutation(u,a),p=c!=null,m=i.shouldExecuteOnCPU([o]),f=[],h=o;if(p){if(m){let C=i.texData.get(h.dataId).values,S=new Array(a);for(let $=0;$<S.length;$++)S[$]=o.shape[c[$]];let E=ol(C,o.shape,o.dtype,c,S);h=i.makeTensorInfo(S,o.dtype);let A=i.texData.get(h.dataId);A.values=E}else h=Xi(o,c,i);f.push(h),u=v.getInnerMostAxes(u.length,a)}v.assertAxesAreInnerMostDims("sum",u,a);let[g,d]=v.computeOutAndReduceShapes(h.shape,u),x=g;n&&(x=v.expandShapeToKeepDim(g,l));let y=fR(h,d,x,i);for(let w of f)i.disposeIntermediateTensorInfo(w);return y}};function I6(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{axis:s,keepDims:i}=o,a=n.shape.length,l=b.parseAxisParam(s,n.shape),u=l,c=v.getAxesPermutation(u,a),p=n;c!=null&&(p=ie({inputs:{x:n},backend:t,attrs:{perm:c}}),u=v.getInnerMostAxes(u.length,n.shape.length)),v.assertAxesAreInnerMostDims("min",u,a);let[m,f]=v.computeOutAndReduceShapes(p.shape,u),h=b.sizeFromShape(f),g=J({inputs:{x:p},backend:t,attrs:{shape:[-1,h]}}),d=Gr(g,g.dtype,"min",t),x;if(i){let y=v.expandShapeToKeepDim(m,l);x=J({inputs:{x:d},backend:t,attrs:{shape:y}})}else x=J({inputs:{x:d},backend:t,attrs:{shape:m}});return t.disposeIntermediateTensorInfo(g),t.disposeIntermediateTensorInfo(d),c!=null&&t.disposeIntermediateTensorInfo(p),x}var dR={kernelName:li,backendName:"webgl",kernelFunc:I6};var T6=ac+`
  return min(a, b);
`,k6=`
  vec4 result = vec4(min(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+Vr+`
  return result;
`,E6=Gt({opSnippet:T6,packedOpSnippet:k6,cpuKernelImpl:x2}),gR={kernelName:Mn,backendName:"webgl",kernelFunc:E6};var Gd=class{constructor(e,t,o){this.variableNames=["x"],this.outputShape=t.map((c,p)=>c[0]+e[p]+c[1]);let n=e.length,s=It(n),i=t.map(c=>c[0]).join(","),a=t.map((c,p)=>c[0]+e[p]).join(","),l=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,n),u=o==="reflect"?0:1;if(n===1){this.userCode=`
        int start = ${i};
        int end = ${a};

        void main() {
          int outC = getOutputCoords();
          if (outC < start) {
            outC = start * 2 - outC - ${u};
          } else if(outC >= end) {
            outC = (end - 1) * 2 - outC + ${u};
          }
          setOutput(getX(outC - start));
        }
      `;return}this.userCode=`
      ${s} start = ${s}(${i});
      ${s} end = ${s}(${a});

      void main() {
        ${s} outC = getOutputCoords();
        for (int i = 0; i < ${n}; i++) {
          if (outC[i] < start[i]) {
            outC[i] = start[i] * 2 - outC[i] - ${u};
          } else if(outC[i] >= end[i]) {
            outC[i] = (end[i] - 1) * 2 - outC[i] + ${u};
          }
        }
        ${s} coords = outC - start;
        setOutput(getX(${l}));
      }
    `}};var Wd=class{constructor(e,t,o){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.map((h,g)=>h[0]+e[g]+h[1]);let n=e.length,s=It(n),i=t.map(h=>h[0]).join(","),a=t.map((h,g)=>h[0]+e[g]).join(","),l=we("rc",n),u=we("source",n),c=`${l[n-1]} < ${this.outputShape[n-1]}`,p=n===1?"source":`vec2(${u.slice(-2).join()})`,m=o==="reflect"?0:1,f="";if(n===1){let h=`
        ${s} source = rc;
        if (source < start) {
          source = start * 2 - source - ${m};
        } else if (source >= end) {
          source = (end - 1) * 2 - source + ${m};
        }
        source -= start;
      `;f=`
        ${s} rc = outputLoc;
        ${h}
        result[0] = getChannel(getX(${u.join()}), ${p});
        ${l[n-1]} += 1;
        if(${c}) {
          ${h}
          result[1] = getChannel(getX(${u.join()}), ${p});
        }
      `}else{let h=`
        ${s} source = rc;
        ${s} lt = ${s}(lessThan(source, start));
        ${s} gte = ${s}(greaterThanEqual(source, end));
        ${s} orig = 1 - (lt + gte);
        source = orig * source +
                lt * (start * 2 - source - ${m}) +
                gte * ((end - 1) * 2 - source + ${m});
        source -= start;
      `;f=`
        ${s} rc = outputLoc;
        ${h}
        result[0] = getChannel(getX(${u.join()}), ${p});
        ${l[n-1]} += 1;
        if(${c}) {
          ${h}
          result[1] = getChannel(getX(${u.join()}), ${p});
        }
        rc = outputLoc;
        ${l[n-2]} += 1;
        if(${l[n-2]} < ${this.outputShape[n-2]}) {
          ${h}
          result[2] = getChannel(getX(${u.join()}), ${p});
          ${l[n-1]} += 1;
          if(${c}) {
            ${h}
            result[3] = getChannel(getX(${u.join()}), ${p});
          }
        }
      `}this.userCode=`
      const ${s} start = ${s}(${i});
      const ${s} end = ${s}(${a});

      void main() {
        ${s} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${f}
        setOutput(result);
      }
    `}};var A6=({inputs:r,backend:e,attrs:t})=>{let{x:o}=r,{paddings:n,mode:s}=t,i=P().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Wd(o.shape,n,s):new Gd(o.shape,n,s);return e.runWebGLProgram(i,[o],o.dtype)},xR={kernelName:ui,backendName:"webgl",kernelFunc:A6};var $6=`if (b == 0.0) return NAN;
  return mod(a, b);`,D6=`
  vec4 result = mod(a, b);
  bvec4 isNaN = equal(b, vec4(0.0));
  `+Vr+`
  return result;
`,R6=Gt({opSnippet:$6,packedOpSnippet:D6}),yR={kernelName:Bn,backendName:"webgl",kernelFunc:R6};var Ud=class{constructor(e,t,o){this.variableNames=["probs"],this.customUniforms=[{name:"seed",type:"float"}],this.outputShape=[e,o],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < ${t-1}; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(${t-1}));
      }
    `}};var F6=`
if (a == b) {
  return 1.0;
};
return a / b;`,_6=`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,n0=Gt({opSnippet:F6,packedOpSnippet:_6,checkOutOfBounds:!0}),bR={kernelName:In,backendName:"webgl",kernelFunc:n0};var wR="return a - b;",s0=Gt({opSnippet:wR,packedOpSnippet:wR,supportsComplex:!0,cpuKernelImpl:z2}),CR={kernelName:rs,backendName:"webgl",kernelFunc:s0};function i0(r){let{inputs:e,backend:t,attrs:o}=r,{logits:n}=e,{dim:s}=o,i=b.parseAxisParam([s],n.shape),a=o0({inputs:{x:n},backend:t,attrs:{reductionIndices:i,keepDims:!1}}),l=v.expandShapeToKeepDim(a.shape,i),u=J({inputs:{x:a},backend:t,attrs:{shape:l}}),c=s0({inputs:{a:n,b:u},backend:t}),p=t0({inputs:{x:c},backend:t}),m=nl({inputs:{x:p},backend:t,attrs:{axis:i,keepDims:!1}}),f=J({inputs:{x:m},backend:t,attrs:{shape:l}}),h=n0({inputs:{a:p,b:f},backend:t});return t.disposeIntermediateTensorInfo(a),t.disposeIntermediateTensorInfo(u),t.disposeIntermediateTensorInfo(c),t.disposeIntermediateTensorInfo(p),t.disposeIntermediateTensorInfo(m),t.disposeIntermediateTensorInfo(f),h}var SR={kernelName:Ti,backendName:"webgl",kernelFunc:i0};function O6(r){let{inputs:e,backend:t,attrs:o}=r,{logits:n}=e,{numSamples:s,seed:i,normalized:a}=o,l=a?n:i0({inputs:{logits:n},backend:t,attrs:{dim:n.shape.length-1}}),u=l.shape[0],c=l.shape[1],p=new Ud(u,c,s),m=[[i]],f=t.runWebGLProgram(p,[l],"int32",m);return a||t.disposeIntermediateTensorInfo(l),f}var vR={kernelName:Xp,backendName:"webgl",kernelFunc:O6};var L6=De+`
  return -x;
`,P6=`
  vec4 result = -x;
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;function z6(r){let{inputs:e,backend:t}=r,{x:o}=e;if(t.shouldExecuteOnCPU([o])){let s=t.texData.get(o.dataId),[i,a]=b2(s.values,o.shape,o.dtype);return t.makeTensorInfo(a,o.dtype,i)}let n;return P().getBool("WEBGL_PACK_UNARY_OPERATIONS")?n=new Tr(o.shape,P6):n=new Xe(o.shape,L6),t.runWebGLProgram(n,[o],o.dtype)}var NR={kernelName:ci,backendName:"webgl",kernelFunc:z6};var M6=tr.nonMaxSuppressionV3Impl;function B6(r){v.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");let{inputs:e,backend:t,attrs:o}=r,{boxes:n,scores:s}=e,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l}=o,u=t.readSync(n.dataId),c=t.readSync(s.dataId),{selectedIndices:p}=M6(u,c,i,a,l);return t.makeTensorInfo([p.length],"int32",new Int32Array(p))}var IR={kernelName:Vl,backendName:"webgl",kernelFunc:B6};var V6=tr.nonMaxSuppressionV4Impl;function G6(r){v.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");let{inputs:e,backend:t,attrs:o}=r,{boxes:n,scores:s}=e,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,padToMaxOutputSize:u}=o,c=t.readSync(n.dataId),p=t.readSync(s.dataId),{selectedIndices:m,validOutputs:f}=V6(c,p,i,a,l,u);return[t.makeTensorInfo([m.length],"int32",new Int32Array(m)),t.makeTensorInfo([],"int32",new Int32Array([f]))]}var TR={kernelName:Gl,backendName:"webgl",kernelFunc:G6};var W6=tr.nonMaxSuppressionV5Impl;function U6(r){v.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");let{inputs:e,backend:t,attrs:o}=r,{boxes:n,scores:s}=e,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,softNmsSigma:u}=o,c=t.readSync(n.dataId),p=t.readSync(s.dataId),m=i,f=a,h=l,g=u,{selectedIndices:d,selectedScores:x}=W6(c,p,m,f,h,g);return[t.makeTensorInfo([d.length],"int32",new Int32Array(d)),t.makeTensorInfo([x.length],"float32",new Float32Array(x))]}var kR={kernelName:Wl,backendName:"webgl",kernelFunc:U6};var Hd=class{constructor(e,t,o,n){this.variableNames=["indices"],this.outputShape=[e,t],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(${n}), float(${o}),
                      float(index == coords.y)));
      }
    `}};var H6=r=>{let{inputs:e,backend:t,attrs:o}=r,{indices:n}=e,{dtype:s,depth:i,onValue:a,offValue:l}=o,u=b.sizeFromShape(n.shape),c=new Hd(u,i,a,l),p=J({inputs:{x:n},backend:t,attrs:{shape:[u]}}),m=t.runWebGLProgram(c,[p],s);t.disposeIntermediateTensorInfo(p);let f=[...n.shape,i],h=J({inputs:{x:m},backend:t,attrs:{shape:f}});return t.disposeIntermediateTensorInfo(m),h},ER={kernelName:mi,backendName:"webgl",kernelFunc:H6};function Mp(r){let{inputs:e,backend:t}=r,{x:o}=e;if(o.dtype==="complex64"){let n=As({inputs:{input:o},backend:t}),s=Mp({inputs:{x:n},backend:t}),i=il({inputs:{input:o},backend:t}),a=Mp({inputs:{x:i},backend:t}),l=Er({inputs:{real:s,imag:a},backend:t});return t.disposeIntermediateTensorInfo(n),t.disposeIntermediateTensorInfo(s),t.disposeIntermediateTensorInfo(i),t.disposeIntermediateTensorInfo(a),l}else return $s({attrs:{shape:o.shape,dtype:o.dtype,value:o.dtype==="string"?"":0},backend:t})}var AR={kernelName:Ai,backendName:"webgl",kernelFunc:Mp};function $R(r){let{inputs:e,backend:t}=r,{x:o}=e;if(o.dtype==="string")throw new Error("onesLike is not supported under string dtype");if(o.dtype==="complex64"){let n=As({inputs:{input:o},backend:t}),s=$R({inputs:{x:n},backend:t}),i=il({inputs:{input:o},backend:t}),a=Mp({inputs:{x:i},backend:t}),l=Er({inputs:{real:s,imag:a},backend:t});return t.disposeIntermediateTensorInfo(n),t.disposeIntermediateTensorInfo(s),t.disposeIntermediateTensorInfo(i),t.disposeIntermediateTensorInfo(a),l}else return $s({attrs:{shape:o.shape,dtype:o.dtype,value:1},backend:t})}var DR={kernelName:pi,backendName:"webgl",kernelFunc:$R};function q6(r){let{inputs:e,backend:t,attrs:o}=r,{axis:n}=o;if(e.length===1)return Ad({inputs:{input:e[0]},backend:t,attrs:{dim:n}});let s=e[0].shape,i=e[0].dtype;e.forEach(c=>{b.assertShapesMatch(s,c.shape,"All tensors passed to stack must have matching shapes"),b.assert(i===c.dtype,()=>"All tensors passed to stack must have matching dtypes")});let a=[],l=e.map(c=>{let p=Ad({inputs:{input:c},backend:t,attrs:{dim:n}});return a.push(p),p}),u=Jw({inputs:l,backend:t,attrs:{axis:n}});return a.forEach(c=>t.disposeIntermediateTensorInfo(c)),u}var RR={kernelName:fi,backendName:"webgl",kernelFunc:q6};var qd=class{constructor(e,t,o){this.variableNames=["x"],this.customUniforms=[{name:"value",type:"float"}],this.outputShape=t.map((u,c)=>u[0]+e[c]+u[1]);let n=e.length,s=It(n),i=t.map(u=>u[0]).join(","),a=t.map((u,c)=>u[0]+e[c]).join(","),l=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,n);if(n===1){this.userCode=`
        int start = ${i};
        int end = ${a};

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(value);
          } else {
            setOutput(getX(outC - start));
          }
        }
      `;return}this.userCode=`
      ${s} start = ${s}(${i});
      ${s} end = ${s}(${a});

      void main() {
        ${s} outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(value);
        } else {
          ${s} coords = outC - start;
          setOutput(getX(${l}));
        }
      }
    `}};var Kd=class{constructor(e,t,o){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"value",type:"float"}],this.outputShape=t.map((g,d)=>g[0]+e[d]+g[1]);let n=e.length,s=It(n),i=t.map(g=>g[0]).join(","),a=t.map((g,d)=>g[0]+e[d]).join(","),l=we("rc",n),u=we("source",n),c=`${l[n-1]} < ${this.outputShape[n-1]}`,p=n===1?"source":`vec2(${u.slice(-2).join()})`,m=[`${s} rc = outputLoc;`,`${l[n-1]} += 1;
       if(${c}) {
      `,n===1?"":`}
       rc = outputLoc;
       ${l[n-2]} += 1;
       if(${l[n-2]} < ${this.outputShape[n-2]}) {`,n===1?"":`  ${l[n-1]} += 1;
         if(${c}) {`],f=n===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))",h="";for(let g=0,d=n===1?2:4;g<d;g++)h+=`
        ${m[g]}
        if (${f}) {
          result[${g}] = float(value);
        } else {
          ${s} source = rc - start;
          result[${g}] = getChannel(getX(${u.join()}), ${p});
        }
      `;h+=n===1?"} ":"}}",this.userCode=`
      const ${s} start = ${s}(${i});
      const ${s} end = ${s}(${a});

      void main() {
        ${s} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${h}
        setOutput(result);
      }
    `}};var a0=r=>{let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{paddings:s,constantValue:i}=o;if(b.sizeFromShape(n.shape)===0){let u=s.map((c,p)=>c[0]+n.shape[p]+c[1]);return $s({backend:t,attrs:{shape:u,value:i,dtype:n.dtype}})}let a=P().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Kd(n.shape,s,i):new qd(n.shape,s,i),l=[[i]];return t.runWebGLProgram(a,[n],n.dtype,l)},FR={kernelName:hi,backendName:"webgl",kernelFunc:a0};var K6=`
  if(a < 0.0 && floor(b) < b){
    return NAN;
  }
  if (b == 0.0) {
    return 1.0;
  }
  return (round(mod(b, 2.0)) != 1) ?
      pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,j6=`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  bvec4 isNaN1 = lessThan(a, vec4(0.0));
  bvec4 isNaN2 = lessThan(floor(b), b);
  bvec4 isNaN = bvec4(isNaN1.x && isNaN2.x, isNaN1.y && isNaN2.y, isNaN1.z && isNaN2.z, isNaN1.w && isNaN2.w);
  `+Vr+`
  return result;
`,X6=Gt({opSnippet:K6,packedOpSnippet:j6}),_R={kernelName:Gn,backendName:"webgl",kernelFunc:X6};function Y6(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{axis:s,keepDims:i}=o,a=n.shape.length,l=[],u=b.parseAxisParam(s,n.shape),c=u,p=v.getAxesPermutation(c,a),m=n;p!=null&&(m=ie({inputs:{x:n},backend:t,attrs:{perm:p}}),c=v.getInnerMostAxes(c.length,a),l.push(m)),v.assertAxesAreInnerMostDims("prod",c,a);let f;if(t.shouldExecuteOnCPU([m])){let h=t.texData.get(m.dataId).values,{outVals:g,outShape:d,outDtype:x}=C2(m.shape,m.dtype,h,c);f=t.makeTensorInfo(d,x,g)}else{let[h,g]=v.computeOutAndReduceShapes(m.shape,c),d=b.sizeFromShape(g),x=J({inputs:{x:m},backend:t,attrs:{shape:[-1,d]}}),y=ba(n.dtype),w=Gr(x,y,"prod",t);f=J({inputs:{x:w},backend:t,attrs:{shape:h}}),l.push(x),l.push(w)}if(i){l.push(f);let h=v.expandShapeToKeepDim(f.shape,u);f=J({inputs:{x:f},backend:t,attrs:{shape:h}})}return l.forEach(h=>t.disposeIntermediateTensorInfo(h)),f}var OR={kernelName:gi,backendName:"webgl",kernelFunc:Y6};function Z6(r){let{inputs:e,backend:t,attrs:o}=r,{paramsNestedSplits:n,paramsDenseValues:s,indices:i}=e,{outputRaggedRank:a}=o,l=n.map(x=>t.readSync(x.dataId)),u=n.map(x=>x.shape),c=t.readSync(s.dataId),p=t.readSync(i.dataId),[m,f,h]=S2(l,u,c,s.shape,s.dtype,p,i.shape,a),g=m.map(x=>t.makeTensorInfo([x.length],"int32",x)),d=t.makeTensorInfo(h,s.dtype,f);return g.concat([d])}var LR={kernelName:Yp,backendName:"webgl",kernelFunc:Z6};function Q6(r){let{inputs:e,backend:t}=r,{starts:o,limits:n,deltas:s}=e,i=t.readSync(o.dataId),a=t.readSync(n.dataId),l=t.readSync(s.dataId),[u,c]=v2(i,o.shape,o.dtype,a,n.shape,l,s.shape),p=t.makeTensorInfo([u.length],"int32",u),m=t.makeTensorInfo([c.length],o.dtype,c);return[p,m]}var PR={kernelName:Zp,backendName:"webgl",kernelFunc:Q6};function J6(r){let{inputs:e,backend:t,attrs:o}=r,{shape:n,values:s,defaultValue:i,rowPartitionTensors:a}=e,{rowPartitionTypes:l}=o,u=t.readSync(n.dataId),c=t.readSync(s.dataId),p=t.readSync(i.dataId),m=a.map(d=>t.readSync(d.dataId)),f=a.map(d=>d.shape),[h,g]=N2(u,n.shape,c,s.shape,s.dtype,p,i.shape,m,f,l);return t.makeTensorInfo(h,s.dtype,g)}var zR={kernelName:Qp,backendName:"webgl",kernelFunc:J6};var l0=r=>{let{backend:e,attrs:t}=r,{start:o,stop:n,step:s,dtype:i}=t,a=I2(o,n,s,i);return e.makeTensorInfo([a.length],i,a)},MR={kernelName:Ul,backendName:"webgl",kernelFunc:l0};var tX="return 1.0 / x;",eX=mt({opSnippet:tX}),BR={kernelName:Wn,backendName:"webgl",kernelFunc:eX};var rX=De+`
  return (x < 0.0) ? 0.0 : x;
`,oX=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,nX=mt({opSnippet:rX,packedOpSnippet:oX}),VR={kernelName:Un,backendName:"webgl",kernelFunc:nX};var sX=De+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,iX=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,aX=mt({opSnippet:sX,packedOpSnippet:iX}),GR={kernelName:Hn,backendName:"webgl",kernelFunc:aX};var jd=class{constructor(e,t,o,n,s){this.variableNames=["A"],this.outputShape=[];let[i,a,l,u]=e;this.outputShape=[i,t,o,u];let c=[n&&t>1?a-1:a,n&&o>1?l-1:l],p=[n&&t>1?t-1:t,n&&o>1?o-1:o],m;s?m="(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)":m="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${c[0]/p[0]},
          ${c[1]/p[1]});
      const vec2 inputShapeRC = vec2(${a}.0, ${l}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${m};

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(max(sourceFracIndexRC, vec2(0.0)));
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `}};var Xd=class{constructor(e,t,o,n,s){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];let[i,a,l,u]=e;this.outputShape=[i,t,o,u];let c=[n&&t>1?a-1:a,n&&o>1?l-1:l],p=[n&&t>1?t-1:t,n&&o>1?o-1:o],m;s?m="(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)":m="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${c[0]/p[0]},
          ${c[1]/p[1]},
          ${c[1]/p[1]});
      const vec3 inputShapeRC = vec3(${a}.0, ${l}.0,
                                     ${l}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${m};

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(max(sourceFracIndexRC, vec3(0.0)));
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${u-1};
        bool hasNextRow = coords.z < ${o-1};

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `}};function lX(r){let{inputs:e,backend:t,attrs:o}=r,{images:n}=e,{alignCorners:s,halfPixelCenters:i,size:a}=o,[l,u]=a,c=P().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new Xd(n.shape,l,u,s,i):new jd(n.shape,l,u,s,i);return t.runWebGLProgram(c,[n],"float32")}var WR={kernelName:bi,backendName:"webgl",kernelFunc:lX};var Yd=class{constructor(e,t,o){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t;let[,n,s]=t,[,i,a]=e,l=[o&&i>1?n-1:n,o&&a>1?s-1:s],u=[o&&i>1?i-1:i,o&&a>1?a-1:a],c=l[0]/u[0],p=l[1]/u[1],m=1/c,f=1/p,h=Math.ceil(m)*2+2,g=Math.ceil(f)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${c});
        const float widthScale = float(${p});

        const float invHeightScale = float(${m});
        const float invWidthScale = float(${f});

        const int winHeight = int(${h});
        const int winWidth = int(${g});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${i}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${a}) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), ${n-1}.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), ${s-1}.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}};function uX(r){let{inputs:e,backend:t,attrs:o}=r,{images:n,dy:s}=e,{alignCorners:i}=o,a=new Yd(s.shape,n.shape,i);return t.runWebGLProgram(a,[s],s.dtype)}var UR={kernelName:Kl,backendName:"webgl",kernelFunc:uX};var Zd=class{constructor(e,t,o,n,s){this.variableNames=["A"],this.outputShape=[];let[i,a,l,u]=e;this.outputShape=[i,t,o,u];let c=[n&&t>1?a-1:a,n&&o>1?l-1:l],p=[n&&t>1?t-1:t,n&&o>1?o-1:o],m=n?"0.5":"0.0",f;s?f="max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))":f="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${c[0]/p[0]},
          ${c[1]/p[1]});
      const vec2 inputShapeRC = vec2(${a}.0, ${l}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${f};

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${m})));
        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `}};var Qd=class{constructor(e,t,o,n,s){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];let[i,a,l,u]=e;this.outputShape=[i,t,o,u];let c=[n&&t>1?a-1:a,n&&o>1?l-1:l],p=[n&&t>1?t-1:t,n&&o>1?o-1:o],m=n?"0.5":"0.0",f;s?f="max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))":f="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${c[0]/p[0]},
          ${c[1]/p[1]},
          ${c[1]/p[1]});
      const vec3 inputShapeRC = vec3(${a}.0, ${l}.0,
                                     ${l}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${f};

        // Compute the coordinators of nearest neighbor point.
        ivec3 sourceNearestRC = ivec3(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${m})));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${u-1};
        bool hasNextRow = coords.z < ${o-1};

        vec4 newValue = vec4(
          getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d),
          hasNextCol ? getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d + 1) : 0.0);

        setOutput(newValue);
      }
    `}};function cX(r){let{inputs:e,backend:t,attrs:o}=r,{images:n}=e,{alignCorners:s,halfPixelCenters:i,size:a}=o,[l,u]=a,c=P().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new Qd(n.shape,l,u,s,i):new Zd(n.shape,l,u,s,i);return t.runWebGLProgram(c,[n],n.dtype)}var HR={kernelName:yi,backendName:"webgl",kernelFunc:cX};var Jd=class{constructor(e,t,o){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t;let[,n,s]=t,[,i,a]=e,l=[o&&i>1?n-1:n,o&&a>1?s-1:s],u=[o&&i>1?i-1:i,o&&a>1?a-1:a],c=l[0]/u[0],p=l[1]/u[1],m=1/c,f=1/p,h=Math.ceil(m)*2+2,g=Math.ceil(f)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${c});
        const float widthScale = float(${p});

        const float invHeightScale = float(${m});
        const float invWidthScale = float(${f});

        const int winHeight = int(${h});
        const int winWidth = int(${g});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${i}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${a}) {
              continue;
            }

            float sourceFracRow =
              float(${l[0]}) *
                (float(dyR) / float(${u[0]}));

            float sourceFracCol =
                float(${l[1]}) *
                  (float(dyC) / float(${u[1]}));

            int sourceNearestRow = int(min(
                float(int(${n}) - 1),
                ${o} ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(${s}) - 1),
                ${o} ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}};function pX(r){let{inputs:e,backend:t,attrs:o}=r,{images:n,dy:s}=e,{alignCorners:i}=o,a=new Jd(s.shape,n.shape,i);return t.runWebGLProgram(a,[s],s.dtype)}var qR={kernelName:ql,backendName:"webgl",kernelFunc:pX};var tg=class{constructor(e,t){this.variableNames=["x"];let o=e.length;if(o>4)throw new Error(`WebGL backend: Reverse of rank-${o} tensor is not yet supported`);if(this.outputShape=e,o===1){this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(${e[0]} - coord - 1));
        }
      `;return}let n=a=>t.indexOf(a)!==-1&&e[a]!==1?`${e[a]} - coords[${a}] - 1`:`coords[${a}]`,s=e.map((a,l)=>n(l)).join(","),i=It(o);this.userCode=`
      void main() {
        ${i} coords = getOutputCoords();
        setOutput(getX(${s}));
      }
    `}};var eg=class{constructor(e,t){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;let o=e.length;if(o>4)throw new Error(`WebGL backend: Reverse of rank-${o} tensor is not yet supported`);this.outputShape=e;let n=we("rc",o),s=`${n[o-1]} + 1 < ${this.outputShape[o-1]}`,i=`${n[o-2]} + 1 < ${this.outputShape[o-2]}`,a=It(o);o===1?this.userCode=`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(${e[0]} - rc - 1),
            ${e[0]} - rc - 1);
          if(${s}){
              result.g = getChannel(getX(${e[0]} - (rc  + 1) - 1),
                ${e[0]} - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:this.userCode=`
        void main() {
          ${a} rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = ${l(n.slice())};
          if(${s}){
            result.g = ${u(n.slice())};
          }
          if(${i}) {
            result.b = ${c(n.slice())};
            if(${s}) {
              result.a = ${p(n.slice())};
            }
          }
          setOutput(result);
        }
    `;function l(h){return m(h)}function u(h){return h[o-1]="("+h[o-1]+" + 1)",m(h)}function c(h){return h[o-2]="("+h[o-2]+" + 1)",m(h)}function p(h){return h[o-1]="("+h[o-1]+" + 1)",h[o-2]="("+h[o-2]+" + 1)",m(h)}function m(h){let g=e.map((y,w)=>f(w,h)),d=g.join(","),x=g.slice(-2).join(",");return`getChannel(getX(${d}), vec2(${x}))`}function f(h,g){return t.indexOf(h)!==-1&&e[h]!==1?`${e[h]} - ${g[h]} - 1`:`${g[h]}`}}};function mX(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{dims:s}=o,i=n.shape.length,a=b.parseAxisParam(s,n.shape);if(i===0)return Ce({inputs:{x:n},backend:t});let l=P().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new eg(n.shape,a):new tg(n.shape,a);return t.runWebGLProgram(l,[n],n.dtype)}var KR={kernelName:wi,backendName:"webgl",kernelFunc:mX};var rg=class{constructor(e,t){this.variableNames=["Image"],this.outputShape=[],this.customUniforms=[{name:"params",type:"vec4"}];let o=e[1],n=e[2];this.outputShape=e;let s="";typeof t=="number"?s=`float outputValue = ${t.toFixed(2)};`:s=`
        vec3 fill = vec3(${t.join(",")});
        float outputValue = fill[coords[3]];`,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];
          int y = coords[1];
          float coordXFloat = (float(x) - params[0]) * params[3] -
            (float(y) - params[1]) * params[2];
          float coordYFloat = (float(x) - params[0]) * params[2] +
            (float(y) - params[1]) * params[3];
          int coordX = int(round(coordXFloat + params[0]));
          int coordY = int(round(coordYFloat + params[1]));
          ${s}
          if(coordX >= 0 && coordX < ${n} && coordY >= 0 && coordY < ${o}) {
            outputValue = getImage(coords[0], coordY, coordX, coords[3]);
          }
          setOutput(outputValue);
        }
    `}};var jR={kernelName:Jl,backendName:"webgl",kernelFunc:({inputs:r,attrs:e,backend:t})=>{let{image:o}=r,{radians:n,fillValue:s,center:i}=e,a=t,l=new rg(o.shape,s),[u,c]=v.getImageCenter(i,o.shape[1],o.shape[2]),p=[[u,c,Math.sin(n),Math.cos(n)]];return a.runWebGLProgram(l,[o],o.dtype,p)}};var fX=`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`,hX=mt({opSnippet:fX}),XR={kernelName:qn,backendName:"webgl",kernelFunc:hX};var dX="return inversesqrt(x);",gX=mt({opSnippet:dX,cpuKernelImpl:T2}),YR={kernelName:Kn,backendName:"webgl",kernelFunc:gX};var Zi=class{constructor(e,t,o,n,s,i,a=!0,l=!1){this.variableNames=["updates","indices","defaultValue"],this.outputShape=i;let u=It(s.length),c=It(i.length),p="";o===1?p="i":o===2&&(p="i, j");let m=`getIndices(${p})`,f="";n===1?f="i":n===2&&(f="i, coords[1]");let h=`getUpdates(${f})`,g="";l&&(g="coords[0], coords[1]");let d=`getDefaultValue(${g})`,x=t>1?"strides[j]":"strides";this.userCode=`
        ${u} strides = ${u}(${s});

        void main() {
          ${c} coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < ${e}; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < ${t}; j++) {
              int index = round(${m});
              flattenedIndex += index * ${x};
            }
            if (flattenedIndex == coords[0]) {
              sum += ${h};
              found = true;
            }
          }
          setOutput(mix(${d}, sum, float(found)));
        }
      `}};var og=class{constructor(e,t,o,n,s,i,a=!0,l=!1){this.variableNames=["updates","indices","defaultValue"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=i;let u=It(s.length),c=It(i.length),p="";o===1?p="i":o===2&&(p="i, j");let m=`getIndices(${p})`,f="";n===1?f="i":n===2&&(f="i, coords[1]");let h=`getUpdates(${f})`,g="";l&&(g="coords[0], coords[1]");let d=`getDefaultValue(${g})`,x=t>1?"strides[j]":"strides",y=t>1?"strides[j + 1]":"strides";this.userCode=`
        ${u} strides = ${u}(${s});

        void main() {
          ${c} coords = getOutputCoords();
          vec4 sum = vec4(0.);
          vec4 found = vec4(0.);
          for (int i = 0; i < ${e}; i+=2) {
            ivec2 flattenedIndex = ivec2(0);
            for (int j = 0; j < ${t}; j+=2) {
              ivec4 index = round(${m});
              flattenedIndex += index.xz * ${x};
              if (j + 1 < ${t}) {
                flattenedIndex += index.yw * ${y};
              }
            }
            if (flattenedIndex[0] == coords[0] || flattenedIndex[1] == coords[0] ||
                flattenedIndex[0] == coords[0] + 1 || flattenedIndex[1] == coords[0] + 1) {
              vec4 updVals = ${h};
              if (flattenedIndex[0] == coords[0]) {
                sum.xy += updVals.xy;
                found.xy = vec2(1.);
              } else if (flattenedIndex[0] == coords[0] + 1) {
                sum.zw += updVals.xy;
                found.zw = vec2(1.);
              }
              if (flattenedIndex[1] == coords[0]) {
                sum.xy += updVals.zw;
                found.xy = vec2(1.);
              } else if (flattenedIndex[1] == coords[0] + 1) {
                sum.zw += updVals.zw;
                found.zw = vec2(1.);
              }
            }
          }
          setOutput(mix(${d}, sum, found));
        }
      `}};function xX(r){let{inputs:e,backend:t,attrs:o}=r,{indices:n,updates:s}=e,{shape:i}=o,{sliceRank:a,numUpdates:l,sliceSize:u,strides:c,outputSize:p}=v.calculateShapes(s,n,i),m=[p/u,u];if(p===0)return t.makeTensorInfo(i,n.dtype);let f=J({inputs:{x:n},backend:t,attrs:{shape:[l,a]}}),h=J({inputs:{x:s},backend:t,attrs:{shape:[l,u]}}),g=t.makeTensorInfo([],"float32",new Float32Array([0])),d;P().getBool("WEBGL_PACK")?d=new og(l,a,f.shape.length,h.shape.length,c,m):d=new Zi(l,a,f.shape.length,h.shape.length,c,m);let x=t.runWebGLProgram(d,[h,f,g],h.dtype),y=J({inputs:{x},backend:t,attrs:{shape:i}});return t.disposeIntermediateTensorInfo(f),t.disposeIntermediateTensorInfo(h),t.disposeIntermediateTensorInfo(x),t.disposeIntermediateTensorInfo(g),y}var ZR={kernelName:Jp,backendName:"webgl",kernelFunc:xX};var ng=class{constructor(e,t,o,n){this.variableNames=["sortedSequence","values"],this.customUniforms=[{name:"numInputs",type:"int"}],this.outputShape=[e,o];let s="while (left < right) {",i=`for (int i = 0; i < ${Math.ceil(Math.log2(t+1))}; ++i) { if (left >= right) break;`,a=P().getNumber("WEBGL_VERSION")===2?s:i,l=n==="left"?"<":"<=";this.userCode=`
       int findBound(int batch, float value) {
         int left = 0;
         int right = numInputs;
         int mid;
         ${a}
           mid = (left + right) / 2;
           if (getSortedSequence(batch, mid) ${l} value) {
             left = mid + 1;
           } else {
             right = mid;
           }
         }
         return right;
       }

       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int valueIndex = coords[1];

         float value = getValues(batch, valueIndex);

         setOutput(float(findBound(batch, value)));
       }
     `}};function yX(r){let{inputs:e,backend:t,attrs:o}=r,{sortedSequence:n,values:s}=e,{side:i}=o,a=new ng(n.shape[0],n.shape[1],s.shape[1],i),l=[[n.shape[1]]];return t.runWebGLProgram(a,[n,s],"int32",l)}var QR={kernelName:em,backendName:"webgl",kernelFunc:yX};var sg=class{constructor(e,t,o){this.variableNames=["c","a","b"],this.outputShape=t;let n,s;if(o>4)throw Error(`Where for rank ${o} is not yet supported`);if(o===1)s="resRC",n="resRC";else{let a=["resRC.x","resRC.y","resRC.z","resRC.w"],l=[],u=[];for(let c=0;c<t.length;c++)u.push(`${a[c]}`),c<e&&l.push(`${a[c]}`);n=l.join(),s=u.join()}let i=It(o);this.userCode=`
      void main() {
        ${i} resRC = getOutputCoords();
        float cVal = getC(${n});
        if (cVal >= 1.0) {
          setOutput(getA(${s}));
        } else {
          setOutput(getB(${s}));
        }
      }
    `}};function bX(r){let{inputs:e,backend:t}=r,{condition:o,t:n,e:s}=e,i=new sg(o.shape.length,n.shape,n.shape.length);return t.runWebGLProgram(i,[o,n,s],Te(n.dtype,s.dtype))}var JR={kernelName:Ci,backendName:"webgl",kernelFunc:bX};var wX=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = ${v.SELU_SCALEALPHA};
  float scale = ${v.SELU_SCALE};
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,CX=mt({opSnippet:wX}),tF={kernelName:jn,backendName:"webgl",kernelFunc:CX};var SX=So+`
  return 1.0 / (1.0 + exp(-1.0 * x));
`,vX=`
  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,NX=mt({opSnippet:SX,packedOpSnippet:vX,cpuKernelImpl:E2}),eF={kernelName:Qn,backendName:"webgl",kernelFunc:NX};var IX=`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`,TX=mt({opSnippet:IX}),rF={kernelName:Zn,backendName:"webgl",kernelFunc:TX};var kX=So+`
  return sin(x);
`,EX=`
  vec4 result = sin(x);
  bvec4 isNaN = isnan(x);
  ${Vr}
  return result;
`,AX=mt({opSnippet:kX,packedOpSnippet:EX}),oF={kernelName:Xn,backendName:"webgl",kernelFunc:AX};var $X=`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`,DX=mt({opSnippet:$X}),nF={kernelName:Yn,backendName:"webgl",kernelFunc:DX};var RX=`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`,FX=mt({opSnippet:RX}),sF={kernelName:Jn,backendName:"webgl",kernelFunc:FX};var _X=r=>{let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{blockShape:s,paddings:i}=o;b.assert(n.shape.length<=4,()=>"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet");let a=s.reduce((x,y)=>x*y),l=[[0,0]];l.push(...i);for(let x=1+s.length;x<n.shape.length;++x)l.push([0,0]);let u=[],c=a0({inputs:{x:n},backend:t,attrs:{paddings:l,constantValue:0}}),p=v.getReshaped(c.shape,s,a,!1),m=v.getPermuted(p.length,s.length,!1),f=v.getReshapedPermuted(c.shape,s,a,!1),h=J({inputs:{x:c},backend:t,attrs:{shape:p}}),g=ie({inputs:{x:h},backend:t,attrs:{perm:m}}),d=J({inputs:{x:g},backend:t,attrs:{shape:f}});return u.push(c),u.push(h),u.push(g),u.forEach(x=>t.disposeIntermediateTensorInfo(x)),d},iF={kernelName:Ni,backendName:"webgl",kernelFunc:_X};function OX(r){let{inputs:e,backend:t}=r,{indices:o,values:n,denseShape:s,defaultValue:i}=e;if(s.shape.length!==1)throw new Error(`Dense shape must be a vector, saw:
         ${s.shape}`);if(o.shape.length!==2)throw new Error(`Indices must be a matrix, saw:
         ${o.shape}`);if(n.shape.length!==1)throw new Error(`Values must be a vector, saw:
         ${n.shape}`);if(i.shape.length!==0)throw new Error(`Default value must be a scalar, saw:
        ${i.shape}`);let a=t.readSync(o.dataId),l=t.readSync(n.dataId),u=t.readSync(s.dataId),c=t.readSync(i.dataId)[0],[p,m,f,h,g]=$2(a,o.shape,o.dtype,l,n.dtype,u,c);return[t.makeTensorInfo(m,o.dtype,p),t.makeTensorInfo([m[0]],n.dtype,f),t.makeTensorInfo([h.length],"bool",new Uint8Array(h.map(d=>Number(d)))),t.makeTensorInfo([g.length],o.dtype,new Int32Array(g))]}var aF={kernelName:rm,backendName:"webgl",kernelFunc:OX};function LX(r){let{inputs:e,backend:t}=r,{inputIndices:o,inputShape:n,newShape:s}=e;if(o.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape ${o.shape}`);if(n.shape.length!==1)throw new Error(`Input shape should be a vector but received shape ${n.shape}`);if(s.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${s.shape}`);let i=Array.from(t.readSync(n.dataId)),a=t.readSync(o.dataId),l=Array.from(t.readSync(s.dataId)),[u,c,p]=D2(a,o.shape,o.dtype,i,l);return[t.makeTensorInfo(c,o.dtype,u),t.makeTensorInfo([p.length],s.dtype,new Int32Array(p))]}var lF={kernelName:om,backendName:"webgl",kernelFunc:LX};function PX(r){let{inputs:e,backend:t}=r,{data:o,indices:n,segmentIds:s}=e;if(o.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(n.shape.length!==1)throw new Error(`Indices should be a vector but received shape
              ${n.shape}`);if(s.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
              ${s.shape}`);let i=t.readSync(o.dataId),a=t.readSync(n.dataId),l=t.readSync(s.dataId),[u,c]=Bh(i,o.shape,o.dtype,a,l,!0);return t.makeTensorInfo(c,o.dtype,u)}var uF={kernelName:nm,backendName:"webgl",kernelFunc:PX};function zX(r){let{inputs:e,backend:t}=r,{data:o,indices:n,segmentIds:s}=e;if(o.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(n.shape.length!==1)throw new Error(`Indices should be a vector but received shape
             ${n.shape}`);if(s.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
             ${s.shape}`);let i=t.readSync(o.dataId),a=t.readSync(n.dataId),l=t.readSync(s.dataId),[u,c]=Bh(i,o.shape,o.dtype,a,l);return t.makeTensorInfo(c,o.dtype,u)}var cF={kernelName:sm,backendName:"webgl",kernelFunc:zX};function MX(r){let{inputs:e,backend:t,attrs:o}=r,{sparseIndices:n,sparseValues:s,defaultValue:i}=e,{outputShape:a}=o,{sliceRank:l,numUpdates:u,sliceSize:c,strides:p,outputSize:m}=v.calculateShapes(s,n,a),f=!1;if(s.dtype==="string"){let x=t.bufferSync(n),y=t.bufferSync(s),w=b.decodeString(t.readSync(i.dataId)[0]),C=k2(x,y,a,m,c,u,l,p,w,f);return t.makeTensorInfo(a,C.dtype,C.values)}let h=new Zi(u,l,n.shape.length,s.shape.length,p,[m,1],f),g=t.runWebGLProgram(h,[s,n,i],s.dtype),d=J({inputs:{x:g},backend:t,attrs:{shape:a}});return t.disposeIntermediateTensorInfo(g),d}var pF={kernelName:im,backendName:"webgl",kernelFunc:MX};function BX(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{numOrSizeSplits:s,axis:i}=o,a=b.parseAxisParam(i,n.shape)[0],l=v.prepareSplitSize(n,s,a),u=n.shape.length,c=new Array(u).fill(0),p=n.shape.slice();return l.map(m=>{let f=[...p];f[a]=m;let h=Vo({inputs:{x:n},backend:t,attrs:{begin:c,size:f}});return c[a]+=m,h})}var mF={kernelName:Ii,backendName:"webgl",kernelFunc:BX};var fF="return sqrt(x);",VX=mt({opSnippet:fF,packedOpSnippet:fF,cpuKernelImpl:R2}),hF={kernelName:ts,backendName:"webgl",kernelFunc:VX};var GX="return x * x;",WX=mt({opSnippet:GX}),dF={kernelName:jl,backendName:"webgl",kernelFunc:WX};var gF="return (a - b) * (a - b);",UX=Gt({opSnippet:gF,packedOpSnippet:gF}),xF={kernelName:es,backendName:"webgl",kernelFunc:UX};function HX(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e;if(n.dtype!=="string")throw new Error("Input must be of datatype string");let s=t.readSync(n.dataId),i=v.fromUint8ToStringArray(s),a=F2(i,"string",o);return t.makeTensorInfo(n.shape,"string",a)}var yF={kernelName:Ic,backendName:"webgl",kernelFunc:HX};function qX({inputs:r,attrs:e,backend:t}){let{x:o}=r,n=De+`
    return x > 0.0 ? 1.0 : float(${e.alpha});
  `,s=new Xe(o.shape,n);return t.runWebGLProgram(s,[o],o.dtype)}var bF={kernelName:ss,backendName:"webgl",kernelFunc:qX};var ig=class{constructor(e,t,o){this.variableNames=["x"],this.outputShape=o;let n=o.length,s=It(o.length),i=It(o.length),a="";if(n===1)a="coords * strides + begin";else{let l=0;a=o.map((u,c)=>(l++,o.length===1?`coords * strides[${c}] + begin[${c}]`:`coords[${l-1}] * strides[${c}] + begin[${c}]`)).join(",")}this.userCode=`
      ${s} begin = ${s}(${e});
      ${s} strides = ${s}(${t});

      void main() {
        ${i} coords = getOutputCoords();
        setOutput(getX(${a}));
      }
    `}};function KX(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{begin:s,end:i,strides:a,beginMask:l,endMask:u,ellipsisMask:c,newAxisMask:p,shrinkAxisMask:m}=o,{finalShapeSparse:f,finalShape:h,isIdentity:g,sliceDim0:d,isSimpleSlice:x,begin:y,end:w,strides:C}=ze.sliceInfo(n.shape,s,i,a,l,u,c,p,m),S;if(g)S=J({inputs:{x:n},backend:t,attrs:{shape:h}});else if(d||x){b.assert(n.shape.length>=1,()=>`Input must have rank at least 1, got: ${n.shape.length}`);let A=ze.computeOutShape(y,w,C),$=Vo({inputs:{x:n},backend:t,attrs:{begin:y,size:A}});S=J({inputs:{x:$},backend:t,attrs:{shape:h}}),t.disposeIntermediateTensorInfo($)}else if(t.shouldExecuteOnCPU([n])){let $=t.readSync(n.dataId),_=ft(n.shape,n.dtype,$),L=_2(f,_,C,y);S=t.makeTensorInfo(h,n.dtype,L.values)}else{let $=new ig(y,C,f);S=t.runWebGLProgram($,[n],n.dtype)}let E=J({inputs:{x:S},backend:t,attrs:{shape:h}});return t.disposeIntermediateTensorInfo(S),E}var wF={kernelName:Xl,backendName:"webgl",kernelFunc:KX};function jX(r){let{inputs:e,backend:t,attrs:o}=r,{separator:n,nGramWidths:s,leftPad:i,rightPad:a,padWidth:l,preserveShortSequences:u}=o,{data:c,dataSplits:p}=e,m=t.readSync(c.dataId),f=t.readSync(p.dataId),[h,g]=O2(m,f,n,s,i,a,l,u);return[t.makeTensorInfo([h.length],"string",h),t.makeTensorInfo(p.shape,"int32",g)]}var CF={kernelName:am,backendName:"webgl",kernelFunc:jX};function XX(r){let{inputs:e,backend:t,attrs:o}=r,{skipEmpty:n}=o,{input:s,delimiter:i}=e;if(s.dtype!=="string")throw new Error("Input must be of datatype string");if(s.shape.length!==1)throw new Error(`Input must be a vector, got shape: ${s.shape}`);if(i.shape.length!==0)throw new Error(`Delimiter must be a scalar, got shape: ${i.shape}`);let a=t.readSync(s.dataId),l=t.readSync(i.dataId)[0],[u,c,p]=L2(a,l,n),m=c.length;return[t.makeTensorInfo([m,2],"int32",u),t.makeTensorInfo([m],"string",c),t.makeTensorInfo([2],"int32",new Int32Array(p))]}var SF={kernelName:lm,backendName:"webgl",kernelFunc:XX};function YX(r){let{inputs:e,backend:t,attrs:o}=r,{numBuckets:n}=o,{input:s}=e;if(s.dtype!=="string")throw new Error("Input must be of datatype string");if(n<=0)throw new Error("Number of buckets must be at least 1");let i=t.readSync(s.dataId),a=P2(i,n);return t.makeTensorInfo(s.shape,"int32",a)}var vF={kernelName:um,backendName:"webgl",kernelFunc:YX};var ZX="return tan(x);",QX=mt({opSnippet:ZX}),NF={kernelName:os,backendName:"webgl",kernelFunc:QX};var JX=`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`,t5=mt({opSnippet:JX}),IF={kernelName:ns,backendName:"webgl",kernelFunc:t5};function e5(r){let{inputs:e,backend:t,attrs:o}=r,{tensor:n,indices:s,updates:i}=e,{}=o,{sliceRank:a,numUpdates:l,sliceSize:u,strides:c,outputSize:p}=v.calculateShapes(i,s,n.shape),m=[p/u,u];if(p===0)return t.makeTensorInfo(n.shape,s.dtype);let f=J({inputs:{x:s},backend:t,attrs:{shape:[l,a]}}),h=J({inputs:{x:i},backend:t,attrs:{shape:[l,u]}}),g=J({inputs:{x:n},backend:t,attrs:{shape:m}}),d=new Zi(l,a,f.shape.length,h.shape.length,c,m,!1,!0),x=t.runWebGLProgram(d,[h,f,g],g.dtype),y=J({inputs:{x},backend:t,attrs:{shape:n.shape}});return t.disposeIntermediateTensorInfo(f),t.disposeIntermediateTensorInfo(h),t.disposeIntermediateTensorInfo(g),t.disposeIntermediateTensorInfo(x),y}var TF={kernelName:tm,backendName:"webgl",kernelFunc:e5};var ag=class{constructor(e,t){this.variableNames=["A"];let o=new Array(e.length);for(let i=0;i<o.length;i++)o[i]=e[i]*t[i];this.outputShape=o,this.rank=o.length;let n=It(this.rank),s=r5(e);this.userCode=`
      void main() {
        ${n} resRC = getOutputCoords();
        setOutput(getA(${s}));
      }
    `}};function r5(r){let e=r.length;if(e>5)throw Error(`Tile for rank ${e} is not yet supported`);if(e===1)return`imod(resRC, ${r[0]})`;let t=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],o=[];for(let n=0;n<r.length;n++)o.push(`imod(${t[n]}, ${r[n]})`);return o.join()}function u0(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{reps:s}=o;if(n.dtype==="string"||n.shape.length>5){let l=t.readSync(n.dataId),u=n.dtype==="string"?l.map(m=>b.decodeString(m)):l,c=ft(n.shape,n.dtype,u),p=M2(c,s);return t.makeTensorInfo(p.shape,p.dtype,p.values)}let i=new ag(n.shape,s);return t.runWebGLProgram(i,[n],n.dtype)}var kF={kernelName:Ho,backendName:"webgl",kernelFunc:u0};var lg=class{constructor(e){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"negativeInf",type:"float"},{name:"dir",type:"int"},{name:"inc",type:"int"}],this.outputShape=e,this.userCode=`
       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // We compare elements pair-wise within a group of size 2 * inc.
         // The comparing rule for each group alternates between ascending
         // and descending. Within each group, we compare each pair at
         // positions i and i+inc. To decide whether an element at position i
         // is x0 or x1, we mod it by 2 * inc, if the result is smaller than
         // inc, it is in the first half of the group, we denote it as x0,
         // otherwise we denote it as x1.
         // For example, as shown in the Bitonic top K paper referenced above,
         // Figure5(a) shows that element[1] is in the
         // second half of the group when group size is 2, but it is in the
         // first half of the group when group size is 4.

         bool isFirstInPair = imod(elemIdx, 2 * inc) < inc;
         int i = isFirstInPair ? elemIdx : elemIdx - inc;

         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + inc : int(getIndices(batch, i + inc));
         float x0 = i0 < n ? getX(batch, i0) : negativeInf;
         float x1 = i1 < n ? getX(batch, i1) : negativeInf;

         // Denotes which direction indices are in (ascending or descending).
         bool reverse = imod(elemIdx, 2 * dir) >= dir;
         bool isGreater = x0 > x1 || (x0 == x1 && i1 > i0);
         if (reverse == isGreater) { // Elements in opposite order of direction
           int iTemp = i0;
           i0 = i1;
           i1 = iTemp;
         }
         if (isFirstInPair) {
            setOutput(float(i0));
         } else {
            setOutput(float(i1));
         }
       }
     `}},ug=class{constructor(e){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"k",type:"int"}],this.outputShape=e,this.userCode=`
    void main() {
         // Takes max of indices (0, k), (1, k + 1), (2, k + 2) ...
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // The output size is half of the previous size.
         // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _ (k=4),
         // we only need to output the indices at positions |, the indices at
         // positions _ can be thrown away, see Figure5(b) After Phase 2
         // (Merge phase) in the Bitonic Top K paper referenced above.
         // For example, the paper shows we only need to output the orange bars.
         // The output sequence should look like this | | | | | | | |.
         // Because the sequence is halved, to map the output index back
         // to the previous sequence to find the corresponding value,
         // we need to double the index. When we double the index,
         // we basically interpolate a position, so 2i looks like
         // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k position
         // of each 2k positions by - elemIdx % k. E.g. for output at
         // index 4,5,6,7, we want to get the corresponding element at
         // original index 8,9,10,11, for output at index 8,9,10,11,
         // we want to get the corresponding element at original index
         // 16,17,18,19, so on and so forth.

         int i = elemIdx < k ? elemIdx : (elemIdx * 2 - imod(elemIdx, k));
         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + k : int(getIndices(batch, i + k));

         float x0 = getX(batch, i0);
         float x1 = i1 < n ? getX(batch, i1) : x0;

         setOutput(x0 >= x1 ? float(i0) : float(i1));
       }
     `}};function al(r,e){e!==null&&r.disposeIntermediateTensorInfo(e)}function EF(r){let e=1;for(;e<r;)e*=2;return e}function o5(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{k:s,sorted:i}=o,a=P().getNumber("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD"),l=P().getNumber("TOPK_K_CPU_HANDOFF_THRESHOLD"),u=n.shape,c=u[u.length-1];if(t.shouldExecuteOnCPU([n])||c<a||s>l){let L=t.readSync(n.dataId),[M,V]=B2(L,u,n.dtype,s,i);return[t.makeTensorInfo(M.shape,M.dtype,M.values),t.makeTensorInfo(V.shape,V.dtype,V.values)]}if(s===0)return u[u.length-1]=0,[t.makeTensorInfo(u,n.dtype,[]),t.makeTensorInfo(u,"int32",[])];if(c===1)return[n,$s({attrs:{shape:u,dtype:"int32",value:0},backend:t})];let p=t.texData.get(n.dataId),m=p!==null&&p.isPacked,f=m?t.unpackTensor(n):n,g=b.sizeFromShape(u)/c,d=J({inputs:{x:f},attrs:{shape:[g,c]},backend:t});m&&al(t,f);let x=EF(s),y=EF(c),w=null,C=()=>w===null?[d,d]:[d,w],S=(L,M,V)=>{let G=C(),W=new lg(V),K=[[c],[w===null?1:0],[Number.NEGATIVE_INFINITY],[L],[M]],Z=w;w=t.runWebGLProgram(W,G,"int32",K),al(t,Z)};for(let L=1;L<x;L*=2){let M=L*2;for(let V=L;V>=1;V/=2)S(M,V,[g,y])}for(let L=y;L>x;L/=2){let M=C(),V=new ug([g,L/2]),W=[[c],[w===null?1:0],[x]],U=w;w=t.runWebGLProgram(V,M,"int32",W),al(t,U);let K=x/2,Z=K*2;for(let q=K;q>=1;q/=2)S(Z,q,w.shape)}let E=w;w=Vo({inputs:{x:w},backend:t,attrs:{begin:0,size:[g,s]}}),al(t,E);let A=r0({inputs:{x:d,indices:w},backend:t,attrs:{axis:1,batchDims:1}});al(t,d);let $=u.slice(0,-1);$.push(s),E=w,w=J({inputs:{x:w},attrs:{shape:$},backend:t}),al(t,E);let _=A;return A=J({inputs:{x:A},attrs:{shape:$},backend:t}),al(t,_),[A,w]}var AF={kernelName:Yl,backendName:"webgl",kernelFunc:o5};var cg=class{constructor(e,t,o,n,s,i){this.variableNames=["Image","Transforms"],this.outputShape=i;let a=o==="nearest"?1:2,l;switch(n){case"constant":l=1;break;case"reflect":l=2;break;case"wrap":l=3;break;case"nearest":l=4;break;default:l=1;break}this.userCode=`
            float mapCoord(float outCoord, float len) {
              float inCoord = outCoord;
              if(${l} == 2) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    if (inCoord < sz2) {
                      inCoord = sz2 * float(int(float(-inCoord / sz2))) +
                      inCoord;
                    }
                    inCoord = inCoord < -len ? inCoord + sz2 : -inCoord - 1.0;
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    inCoord -= sz2 * float(int(float(inCoord / sz2)));
                    if (inCoord >= len) {
                      inCoord = sz2 - inCoord - 1.0;
                    }
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${l} == 3) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord += len * (float(int(float(-inCoord / sz))) + 1.0);
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord -= len * float(int(float(inCoord / sz)));
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${l} == 4) {
                return clamp(outCoord, 0.0, len - 1.0);
              } else {
                return outCoord;
              }
            }

            float readWithFillValue(int batch, int coordY, int coordX,
              int channel) {
              float outputValue;
              if (0 <= coordY && coordY < ${e} && 0 <= coordX && coordX < ${t}) {
                  outputValue = getImage(batch, coordY, coordX, channel);
              } else {
                outputValue = float(${s});
              }
              return outputValue;
            }

            void main() {
              ivec4 coords = getOutputCoords();
              float outputValue;
              int batch = coords[0];
              int x = coords[2];
              int y = coords[1];
              int channel = coords[3];
              float xf = float(x);
              float yf = float(y);
              float a1 = getTransforms(batch, 0);
              float a2 = getTransforms(batch, 1);
              float a3 = getTransforms(batch, 2);
              float b1 = getTransforms(batch, 3);
              float b2 = getTransforms(batch, 4);
              float b3 = getTransforms(batch, 5);
              float c1 = getTransforms(batch, 6);
              float c2 = getTransforms(batch, 7);
              float projection = c1 * xf + c2 * yf + 1.0;
              if (projection == 0.0) {
                outputValue = float(${s});
              } else {
                float inX = (a1 * xf + a2 * yf + a3) / projection;
                float inY = (b1 * xf + b2 * yf + b3) / projection;
                float mapX = mapCoord(inX, float(${t}));
                float mapY = mapCoord(inY, float(${e}));

                if (${a} == 1) {
                  int coordY = int(round(mapY));
                  int coordX = int(round(mapX));
                  outputValue = readWithFillValue(batch, coordY, coordX,
                    channel);
                } else {
                  float yFloor = floor(mapY);
                  float xFloor = floor(mapX);
                  float yCeil = yFloor + 1.0;
                  float xCeil = xFloor + 1.0;
                  float valueYFloor = (xCeil - mapX) *
                  readWithFillValue(batch, int(yFloor), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yFloor), int(xCeil), channel);
                  float valueYCeil = (xCeil - mapX) *
                  readWithFillValue(batch, int(yCeil), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yCeil), int(xCeil), channel);
                  outputValue = (yCeil - mapY) * valueYFloor +
                  (mapY - yFloor) * valueYCeil;
                }
              }
              setOutput(outputValue);
            }
        `}};function n5(r){let{inputs:e,backend:t,attrs:o}=r,{image:n,transforms:s}=e,{interpolation:i,fillMode:a,fillValue:l,outputShape:u}=o,[c,p,m,f]=n.shape,[h,g]=u??[p,m],d=[c,h,g,f],x=new cg(p,m,i,a,l,d);return t.runWebGLProgram(x,[n,s],"float32")}var $F={kernelName:Zl,backendName:"webgl",kernelFunc:n5};function s5(r){let{inputs:e,attrs:t,backend:o}=r,{axis:n}=t,{x:s}=e;ln(s,"unique"),console.warn("WARNING: ","UI might be locked temporarily as data is being downloaded");let i=o.readSync(s.dataId),{outputValues:a,outputShape:l,indices:u}=V2(i,n,s.shape,s.dtype);return[o.makeTensorInfo(l,s.dtype,a),o.makeTensorInfo([u.length],"int32",u)]}var DF={kernelName:Ql,backendName:"webgl",kernelFunc:s5};function i5(r){let{inputs:e,backend:t,attrs:o}=r,{value:n}=e,{axis:s}=o;s<0&&(s+=n.shape.length);let i=n,a=i.shape.length,l=n.shape[s],u=new Array(a-1),c=0;for(let g=0;g<a;g++)g!==s&&(u[c++]=i.shape[g]);let p=[],m=new Array(a).fill(0),f=i.shape.slice();f[s]=1;let h=new Array(l);for(let g=0;g<h.length;g++){m[s]=g;let d=Vo({inputs:{x:i},backend:t,attrs:{begin:m,size:f}}),x=J({inputs:{x:d},backend:t,attrs:{shape:u}});h[g]=x,p.push(d)}return p.forEach(g=>t.disposeIntermediateTensorInfo(g)),h}var RF={kernelName:ki,backendName:"webgl",kernelFunc:i5};var pg=class{constructor(e,t){this.variableNames=["x","segmentIds"];let o=e.windowSize,n=e.batchSize,s=e.inSize,i=e.numSegments,a=i*Math.ceil(s/o);this.outputShape=[n,a];let l="0.0",u="sumValue",c=Math.floor(o/4)*4,p=o%4,m=`
        sumValue += dot(values, segFilter);
    `,f="";s%o>0&&(f=`
        if (inIdx < 0 || inIdx >= ${s}) {
          return initializationValue;
        }
      `);let h="";s%o>0&&(h=`
        if (inIdx < 0 || inIdx >= ${s}) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = ${l};

      float getValue(int batch, int inIdx) {
        ${f}
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        ${h}
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          ${i})) * float(${o}));
        int currentSeg = int(mod(float(outIdx), float(${i})));

        float sumValue = 0.0;

        for (int i = 0; i < ${c}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          ${m}
        }

        int inIdx = inOffset + ${c};
        if (${p===1}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          ${m}
        } else if (${p===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          ${m}
        } else if (${p===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          ${m}
        }
        setOutput(${u});
      }
    `}};function a5(r){let{inputs:e,backend:t,attrs:o}=r,{x:n,segmentIds:s}=e,{numSegments:i}=o,a=n.shape.length,l=[],u=0,c=v.getAxesPermutation([u],a),p=n;c!=null&&(p=ie({inputs:{x:n},backend:t,attrs:{perm:c}}),l.push(p),u=v.getInnerMostAxes(1,a)[0]);let m=v.segment_util.computeOutShape(p.shape,u,i),f=b.sizeFromShape([p.shape[u]]),h=J({inputs:{x:p},backend:t,attrs:{shape:[-1,f]}});l.push(h);let g=ba(n.dtype),d=(C,S,E,A,$)=>{let _=C.shape[0],L=C.shape[1],M=v.segment_util.segOpComputeOptimalWindowSize(L,$),V={windowSize:M,inSize:L,batchSize:_,numSegments:$},G=new pg(V,S),W=t.compileAndRun(G,[C,E],A);if(l.push(W),W.shape[1]===$)return W;let U=l0({backend:t,attrs:{start:0,stop:$,step:1,dtype:"float32"}}),K=u0({inputs:{x:U},backend:t,attrs:{reps:[L/M]}});return l.push(U),l.push(K),d(W,S,K,A,$)},x=d(h,"unsortedSegmentSum",s,g,i),y=J({inputs:{x},backend:t,attrs:{shape:m}}),w=y;if(c!=null){l.push(y);let C=v.getUndoAxesPermutation(c);w=ie({inputs:{x:w},backend:t,attrs:{perm:C}})}return l.forEach(C=>t.disposeIntermediateTensorInfo(C)),w}var FF={kernelName:Ei,backendName:"webgl",kernelFunc:a5};var l5=[d$,x$,y$,b$,C$,S$,v$,N$,k$,E$,A$,$$,D$,R$,F$,_$,O$,L$,P$,z$,M$,V$,G$,W$,U$,j$,Y$,Z$,s$,J$,eD,rD,oD,nD,sD,iD,aD,lD,uD,cD,fD,hD,dD,gD,xD,yD,bD,wD,CD,SD,vD,ND,ID,TD,kD,ED,$D,DD,RD,FD,OD,LD,PD,zD,MD,BD,VD,GD,WD,n$,UD,tD,HD,qD,KD,i$,jD,XD,YD,ZD,QD,JD,tR,eR,rR,oR,sR,iR,aR,lR,uR,cR,mR,hR,dR,gR,xR,yR,vR,u$,NR,IR,TR,kR,H$,ER,DR,RR,FR,_R,a$,OR,LR,PR,zR,MR,q$,bR,BR,VR,GR,p$,WR,UR,HR,qR,KR,jR,XR,YR,ZR,QR,JR,tF,eF,rF,oF,nF,B$,SR,sF,iF,aF,lF,uF,cF,pF,mF,hF,dF,xF,yF,bF,wF,CF,SF,vF,CR,f$,NF,IF,TF,kF,AF,$F,h$,DF,RF,FF,AR];for(let r of l5)pm(r);var mg=class r{mainModel=null;targetModel=null;memory=[];step=0;config={learningRate:.001,gamma:.95,epsilon:1,epsilonDecay:.995,epsilonMin:.01,batchSize:32,memorySize:1e4,targetUpdateFreq:100};constructor(){this.initializeModels()}initializeModels(){this.mainModel=Bf({layers:[Nr.dense({inputShape:[6],units:64,activation:"relu"}),Nr.dropout({rate:.2}),Nr.dense({units:64,activation:"relu"}),Nr.dropout({rate:.2}),Nr.dense({units:32,activation:"relu"}),Nr.dense({units:3,activation:"linear"})]}),this.mainModel.compile({optimizer:Jo.adam(this.config.learningRate),loss:"meanSquaredError",metrics:["mse"]}),this.createTargetModel()}createTargetModel(){if(this.mainModel)try{this.targetModel=Bf({layers:[Nr.dense({inputShape:[6],units:64,activation:"relu"}),Nr.dropout({rate:.2}),Nr.dense({units:64,activation:"relu"}),Nr.dropout({rate:.2}),Nr.dense({units:32,activation:"relu"}),Nr.dense({units:3,activation:"linear"})]});let o=this.mainModel.getWeights();this.targetModel.setWeights(o)}catch(e){console.error("Error creating target model:",e),this.targetModel=null}}selectAction(e){if(Math.random()<this.config.epsilon)return Math.floor(Math.random()*3);let t=ao([e]),o=this.mainModel.predict(t),n=o.argMax(1).dataSync()[0];return t.dispose(),o.dispose(),n}remember(e){this.memory.push(e),this.memory.length>this.config.memorySize&&this.memory.shift()}replay(){return B(this,null,function*(){if(this.memory.length<this.config.batchSize)return 0;let e=this.sampleBatch(),t=e.map(m=>m.state),o=e.map(m=>m.nextState),n=ao(t),s=ao(o),i=this.mainModel.predict(n),l=(this.targetModel||this.mainModel).predict(s),u=l.max(1),c=yield this.updateQValues(i,e,u),p=yield this.mainModel.fit(n,c,{batchSize:this.config.batchSize,epochs:1,verbose:0});return n.dispose(),s.dispose(),i.dispose(),l.dispose(),u.dispose(),c.dispose(),this.config.epsilon>this.config.epsilonMin&&(this.config.epsilon*=this.config.epsilonDecay),this.step++,this.step%this.config.targetUpdateFreq===0&&this.updateTargetModel(),p.history.loss[0]})}sampleBatch(){let e=[],t=Math.min(this.config.batchSize,this.memory.length);for(let o=0;o<t;o++){let n=Math.floor(Math.random()*this.memory.length);e.push(this.memory[n])}return e}updateQValues(e,t,o){return B(this,null,function*(){let n=yield e.array(),s=yield o.array();return t.forEach((i,a)=>{let l=i.reward;i.done||(l+=this.config.gamma*s[a]),n[a][i.action]=l}),ao(n)})}updateTargetModel(){!this.mainModel||!this.targetModel||this.targetModel.setWeights(this.mainModel.getWeights())}getQValues(e){return B(this,null,function*(){if(!this.mainModel)return[0,0,0];let t=ao([e]),o=this.mainModel.predict(t),n=yield o.data();return t.dispose(),o.dispose(),Array.from(n)})}saveModel(){return B(this,null,function*(){this.mainModel&&(yield this.mainModel.save("localstorage://traffic-dqn-model"))})}loadModel(){return B(this,null,function*(){try{this.mainModel=yield zf("localstorage://traffic-dqn-model"),this.createTargetModel()}catch(e){console.warn("No saved model found, using initialized model:",e),this.initializeModels()}})}updateConfig(e){this.config=No(No({},this.config),e),e.learningRate&&this.mainModel&&this.mainModel.compile({optimizer:Jo.adam(this.config.learningRate),loss:"meanSquaredError",metrics:["mse"]})}getConfig(){return No({},this.config)}getMemoryStats(){return{size:this.memory.length,capacity:this.config.memorySize,utilizationPercent:this.memory.length/this.config.memorySize*100}}clearMemory(){this.memory=[]}resetEpsilon(){this.config.epsilon=1}getModelSummary(){return this.mainModel?{layers:this.mainModel.layers.length,trainableParams:this.mainModel.countParams(),config:this.mainModel.getConfig()}:null}dispose(){this.mainModel&&(this.mainModel.dispose(),this.mainModel=null),this.targetModel&&(this.targetModel.dispose(),this.targetModel=null),this.memory=[]}static \u0275fac=function(t){return new(t||r)};static \u0275prov=ll({token:r,factory:r.\u0275fac,providedIn:"root"})};var _F=class r{constructor(e){this.dqnService=e}canvas;ctx;initialized=!1;_isRunning$=new Os(!1);_state$=new Os({queueLengths:[0,0,0,0],currentPhase:0,phaseTimeRemaining:30,totalTime:0});_metrics$=new Os({totalReward:0,avgQueueLength:0,totalVehicles:0,avgWaitTime:0,episode:0});animationId;savingModel=!1;loadingModel=!1;simulationTimer;stepCount=0;currentEpisode=0;totalReward=0;lastStepTime=0;previousState=null;previousAction=null;totalTrainingLoss=0;trainingSteps=0;config={arrivalRates:[.1,.08,.12,.09],episodeLength:200,timestepDuration:1,maxQueueLength:50,minPhaseDuration:15,maxPhaseDuration:60,clearanceTime:3,pedestrianPhaseEnabled:!1,pedestrianPhaseDuration:20,gridSize:10};get state$(){return this._state$.asObservable()}get metrics$(){return this._metrics$.asObservable()}get isRunning$(){return this._isRunning$.asObservable()}get isRunning(){return this._isRunning$.asObservable()}get trafficState(){return this._state$.asObservable()}get isInitialized(){return this.initialized}initialize(){this.initialized=!0,this.lastStepTime=Date.now(),console.log("Traffic simulation initialized")}start(){return B(this,null,function*(){if(!this.initialized){console.error("Simulation not initialized");return}console.log("Starting RL simulation..."),this._isRunning$.next(!0),this.startSimulationLoop()})}stop(){console.log("Stopping RL simulation..."),console.trace("Stop called from:"),this.animationId&&(cancelAnimationFrame(this.animationId),this.animationId=void 0),this.simulationTimer&&(clearInterval(this.simulationTimer),this.simulationTimer=void 0),this._isRunning$.next(!1)}startSimulation(){this.start()}stopSimulation(){this.stop()}reset(){this.stop(),this.stepCount=0,this.currentEpisode=0,this.totalReward=0,this._state$.next({queueLengths:[0,0,0,0],currentPhase:0,phaseTimeRemaining:30,totalTime:0}),this._metrics$.next({totalReward:0,avgQueueLength:0,totalVehicles:0,avgWaitTime:0,episode:0}),console.log("RL simulation reset")}setCanvas(e){this.canvas=e,this.ctx=e.getContext("2d")||void 0}updateConfig(e){this.config=No(No({},this.config),e)}getConfig(){return No({},this.config)}getDQNMemoryStats(){return this.dqnService.getMemoryStats()}getCurrentEpsilon(){return this.dqnService.getConfig().epsilon}getTrainingLoss(){return this.trainingSteps>0?this.totalTrainingLoss/this.trainingSteps:0}updateDQNConfig(e){this.dqnService.updateConfig(e),console.log("DQN config updated:",e)}saveModel(){return B(this,null,function*(){this.savingModel=!0;try{console.log("Saving DQN model..."),yield this.dqnService.saveModel(),console.log("DQN model saved successfully")}catch(e){console.error("Failed to save DQN model:",e)}finally{this.savingModel=!1}})}loadModel(){return B(this,null,function*(){this.loadingModel=!0;try{console.log("Loading DQN model..."),yield this.dqnService.loadModel(),console.log("DQN model loaded successfully")}catch(e){console.error("Failed to load DQN model:",e)}finally{this.loadingModel=!1}})}startSimulationLoop(){console.log("Starting simulation loop with timestep:",this.config.timestepDuration*1e3,"ms"),this.simulationTimer=window.setInterval(()=>{this._isRunning$.value&&this.runSimulationStep()},this.config.timestepDuration*1e3)}runSimulationStep(){let e=this._state$.value,t=this.stateToVector(e),o=this.dqnService.selectAction(t),n=this.executeAction(e,o),s=this.calculateReward(e,n,o);if(this.totalReward+=s,this.previousState&&this.previousAction!==null){let i={state:this.stateToVector(this.previousState),action:this.previousAction,reward:s,nextState:t,done:!1};this.dqnService.remember(i)}this.stepCount%4===0&&this.trainModel(),console.log(`Step ${this.stepCount}: Action=${o}, Reward=${s.toFixed(2)}, Queues=[${n.queueLengths.map(i=>i.toFixed(1)).join(",")}]`),this._state$.next(n),this.updateMetrics(n,s),this.previousState=e,this.previousAction=o,this.stepCount++,this.stepCount>=this.config.episodeLength&&this.endEpisode()}stateToVector(e){return[...e.queueLengths,e.currentPhase,e.phaseTimeRemaining/60]}calculateReward(e,t,o){let n=-t.queueLengths.reduce((u,c)=>u+c,0)*.1,s=e.queueLengths.reduce((u,c)=>u+c,0),i=t.queueLengths.reduce((u,c)=>u+c,0),a=(s-i)*.5,l=o!==e.currentPhase?-.1:0;return n+a+l}trainModel(){return B(this,null,function*(){try{let e=yield this.dqnService.replay();if(e>0&&(this.totalTrainingLoss+=e,this.trainingSteps++,this.trainingSteps%20===0)){let t=this.totalTrainingLoss/this.trainingSteps;console.log(`Training: Avg Loss = ${t.toFixed(4)}, Episodes = ${this.currentEpisode}, Epsilon = ${this.dqnService.getConfig().epsilon.toFixed(3)}`)}}catch(e){console.error("Training error:",e)}})}updateMetrics(e,t){let o=e.queueLengths.reduce((s,i)=>s+i,0),n={totalReward:this.totalReward,avgQueueLength:o/4,totalVehicles:this.stepCount,avgWaitTime:o>0?o*2:0,episode:this.currentEpisode};this._metrics$.next(n)}endEpisode(){if(this.previousState&&this.previousAction!==null){let t={state:this.stateToVector(this.previousState),action:this.previousAction,reward:0,nextState:this.stateToVector(this._state$.value),done:!0};this.dqnService.remember(t)}this.trainModel(),this.currentEpisode++,this.stepCount=0,this.totalReward=0,this.previousState=null,this.previousAction=null;let e={queueLengths:[0,0,0,0],currentPhase:0,phaseTimeRemaining:this.config.minPhaseDuration,totalTime:0};this._state$.next(e),console.log(`\u{1F3AF} Episode ${this.currentEpisode} completed! Starting episode ${this.currentEpisode+1}`),console.log(`\u{1F4CA} Memory: ${this.dqnService.getMemoryStats().size}/${this.dqnService.getMemoryStats().capacity} experiences`)}executeAction(e,t){let o={queueLengths:[...e.queueLengths],currentPhase:t,phaseTimeRemaining:this.config.minPhaseDuration,totalTime:e.totalTime+this.config.timestepDuration};for(let n=0;n<4;n++){let s=this.poissonRandom(this.config.arrivalRates[n]*this.config.timestepDuration);o.queueLengths[n]=Math.min(o.queueLengths[n]+s,this.config.maxQueueLength)}return this.processTrafficFlow(o),o}processTrafficFlow(e){let o=.5*this.config.timestepDuration;switch(e.currentPhase){case 0:e.queueLengths[0]=Math.max(0,e.queueLengths[0]-o),e.queueLengths[2]=Math.max(0,e.queueLengths[2]-o);break;case 1:e.queueLengths[1]=Math.max(0,e.queueLengths[1]-o),e.queueLengths[3]=Math.max(0,e.queueLengths[3]-o);break;case 2:case 3:break}}poissonRandom(e){let t=Math.exp(-e),o=0,n=1;do o++,n*=Math.random();while(n>t);return o-1}static \u0275fac=function(t){return new(t||r)(f0(mg))};static \u0275prov=ll({token:r,factory:r.\u0275fac,providedIn:"root"})};var OF=class r{destroy$=new c0;config={arrivalRates:[.1,.08,.12,.09],episodeLength:1e3,timestepDuration:1,maxQueueLength:50,minPhaseDuration:15,maxPhaseDuration:60,clearanceTime:3,pedestrianPhaseEnabled:!1,pedestrianPhaseDuration:20,gridSize:10};currentState$;initialState;metrics$;isRunning$;currentEpisode=0;stepCount=0;phaseTimer=0;totalWaitTime=0;vehicleCount=0;constructor(){this.initialState={queueLengths:[0,0,0,0],currentPhase:0,phaseTimeRemaining:this.config.minPhaseDuration,totalTime:0},this.currentState$=new Os(this.initialState),this.metrics$=new Os({totalReward:0,avgQueueLength:0,totalVehicles:0,avgWaitTime:0,episode:0}),this.isRunning$=new Os(!1)}get state$(){return this.currentState$.asObservable()}startSimulation(){this.isRunning$.value||(this.isRunning$.next(!0),this.runSimulationLoop())}stopSimulation(){this.isRunning$.next(!1),this.destroy$.next()}runSimulationLoop(){p0(this.config.timestepDuration*1e3).pipe(m0(this.destroy$)).subscribe(()=>{this.isRunning$.value&&this.simulationStep()})}simulationStep(){let e=this.currentState$.value,t=this.getBaselineAction(e),o=this.executeAction(e,t),n=-o.queueLengths.reduce((s,i)=>s+i,0);this.currentState$.next(o),this.updateMetrics(n),this.stepCount++,this.phaseTimer++,this.stepCount>=this.config.episodeLength&&this.endEpisode()}getBaselineAction(e){let t=this.config.minPhaseDuration*2;return this.phaseTimer%t<this.config.minPhaseDuration?0:1}executeAction(e,t){let o={queueLengths:[...e.queueLengths],currentPhase:t,phaseTimeRemaining:this.config.minPhaseDuration,totalTime:e.totalTime+this.config.timestepDuration};for(let n=0;n<4;n++){let s=this.poissonRandom(this.config.arrivalRates[n]*this.config.timestepDuration);o.queueLengths[n]+=s}return this.processTrafficFlow(o),o}processTrafficFlow(e){let o=.5*this.config.timestepDuration;switch(e.currentPhase){case 0:e.queueLengths[0]=Math.max(0,e.queueLengths[0]-o),e.queueLengths[2]=Math.max(0,e.queueLengths[2]-o);break;case 1:e.queueLengths[1]=Math.max(0,e.queueLengths[1]-o),e.queueLengths[3]=Math.max(0,e.queueLengths[3]-o);break;case 2:case 3:break}}poissonRandom(e){let t=Math.exp(-e),o=0,n=1;do o++,n*=Math.random();while(n>t);return o-1}endEpisode(){this.currentEpisode++,this.stepCount=0,this.phaseTimer=0,this.currentState$.next(this.getInitialState())}updateMetrics(e){let t=this.metrics$.value,n=this.currentState$.value.queueLengths.reduce((i,a)=>i+a,0);this.totalWaitTime+=n*this.config.timestepDuration,this.vehicleCount+=n;let s={totalReward:t.totalReward+e,avgQueueLength:n/4,totalVehicles:t.totalVehicles+1,avgWaitTime:this.vehicleCount>0?this.totalWaitTime/this.vehicleCount:0,episode:this.currentEpisode};this.metrics$.next(s)}getInitialState(){return{queueLengths:[0,0,0,0],currentPhase:0,phaseTimeRemaining:this.config.minPhaseDuration,totalTime:0}}getInitialMetrics(){return{totalReward:0,avgQueueLength:0,totalVehicles:0,avgWaitTime:0,episode:0}}updateConfig(e){this.config=No(No({},this.config),e)}reset(){this.currentEpisode=0,this.stepCount=0,this.phaseTimer=0,this.currentState$.next(this.getInitialState()),this.metrics$.next(this.getInitialMetrics())}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}static \u0275fac=function(t){return new(t||r)};static \u0275prov=ll({token:r,factory:r.\u0275fac,providedIn:"root"})};export{N0 as a,mg as b,_F as c,OF as d};
