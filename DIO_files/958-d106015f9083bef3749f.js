"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[958],{5585:function(n,t,e){var r=e(7294);function o(){return(o=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function i(n,t){var e={start:function(){return 0},center:function(n){return r(n)/2},end:r};function r(n){return t-n}return{measure:function(r){return"number"===typeof n?t*Number(n):e[n](r)}}}function u(n,t){var e=Math.abs(n-t);function r(t){return t<n}function o(n){return n>t}function i(n){return r(n)||o(n)}return{constrain:function(e){return i(e)?r(e)?n:t:e},length:e,max:t,min:n,reachedAny:i,reachedMax:o,reachedMin:r,removeOffset:function(n){return e?n-e*Math.ceil((n-t)/e):n}}}function a(n,t,e){var r=u(0,n),o=r.min,i=r.constrain,c=n+1,s=f(t);function f(n){return e?Math.abs((c+n)%c):i(n)}function l(){return s}function d(n){return s=f(n),p}var p={add:function(n){return d(l()+n)},clone:function(){return a(n,l(),e)},get:l,set:d,min:o,max:n};return p}function c(){var n=[];var t={add:function(e,r,o,i){return void 0===i&&(i=!1),e.addEventListener(r,o,i),n.push((function(){return e.removeEventListener(r,o,i)})),t},removeAll:function(){return n=n.filter((function(n){return n()})),t}};return t}function s(n){var t=n;function e(n){return t/=n,o}function r(n){return"number"===typeof n?n:n.get()}var o={add:function(n){return t+=r(n),o},divide:e,get:function(){return t},multiply:function(n){return t*=n,o},normalize:function(){return 0!==t&&e(t),o},set:function(n){return t=r(n),o},subtract:function(n){return t-=r(n),o}};return o}function f(n){return n?n/Math.abs(n):0}function l(n,t){return Math.abs(n-t)}function d(n,t){for(var e=[],r=0;r<n.length;r+=t)e.push(n.slice(r,r+t));return e}function p(n){return Object.keys(n).map(Number)}function g(n){return n[v(n)]}function v(n){return Math.max(0,n.length-1)}function m(n,t){var e=n.classList;t&&e.contains(t)&&e.remove(t)}function h(n,t){var e=n.classList;t&&!e.contains(t)&&e.add(t)}function y(n,t,e,r,o,i,u,a,d,p,g,v,m,h,y){var x=n.scroll,b=n.cross,w=["INPUT","SELECT","TEXTAREA"],M=s(0),S=s(0),E=s(0),A=c(),T=c(),C={mouse:2.5,touch:3.5},O={mouse:5,touch:7},P=o?5:16,k=!1,D=!1,I=!1,B=!1;function L(n){if(!(B="mousedown"===n.type)||0===n.button){var t=l(r.get(),u.get())>=2,o=B||!t,a=!function(n){var t=n.nodeName||"";return w.indexOf(t)>-1}(n.target),c=t||B&&a;k=!0,i.pointerDown(n),E.set(r),r.set(u),p.useBaseMass().useSpeed(80),function(){var n=B?document:e;T.add(n,"touchmove",z).add(n,"touchend",N).add(n,"mousemove",z).add(n,"mouseup",N)}(),M.set(i.readPoint(n,x)),S.set(i.readPoint(n,b)),m.emit("pointerDown"),o&&(I=!1),c&&n.preventDefault()}}function z(n){if(!D&&!B){if(!n.cancelable)return N();var e=i.readPoint(n,x).get(),o=i.readPoint(n,b).get(),u=l(e,M.get()),c=l(o,S.get());if(!(D=u>c)&&!I)return N()}var s=i.pointerMove(n);!I&&s&&(I=!0),a.start(),r.add(t.applyTo(s)),n.preventDefault()}function N(){var n=g.byDistance(0,!1).index!==v.get(),e=i.pointerUp()*(o?O:C)[B?"mouse":"touch"],u=function(n,t){var e=v.clone().add(-1*f(n)),r=e.get()===v.min||e.get()===v.max,i=g.byDistance(n,!o).distance;return o||Math.abs(n)<20?i:!h&&r?.6*i:y&&t?.5*i:g.byIndex(e.get(),0).distance}(t.applyTo(e),n),a=function(n,t){if(0===n||0===t)return 0;if(Math.abs(n)<=Math.abs(t))return 0;var e=l(Math.abs(n),Math.abs(t));return Math.abs(e/n)}(e,u),c=l(r.get(),E.get())>=.5,s=n&&a>.75,x=Math.abs(e)<20,b=s?10:P,w=s?1+2.5*a:1;c&&!B&&(I=!0),D=!1,k=!1,T.removeAll(),p.useSpeed(x?9:b).useMass(w),d.distance(u,!o),B=!1,m.emit("pointerUp")}function j(n){I&&n.preventDefault()}return{addActivationEvents:function(){var n=e;A.add(n,"touchmove",(function(){})).add(n,"touchend",(function(){})).add(n,"touchstart",L).add(n,"mousedown",L).add(n,"touchcancel",N).add(n,"contextmenu",N).add(n,"click",j)},clickAllowed:function(){return!I},pointerDown:function(){return k},removeAllEvents:function(){A.removeAll(),T.removeAll()}}}function x(n,t,e){var r=function(n){var t=Math.pow(10,n);return function(n){return Math.round(n*t)/t}}(2),o=s(0),i=s(0),u=s(0),a=0,c=t,l=e;function d(n){return c=n,g}function p(n){return l=n,g}var g={direction:function(){return a},seek:function(t){u.set(t).subtract(n);var e,r,s,d=(e=u.get(),(s=0)+(e-(r=0))/(100-r)*(c-s));return a=f(u.get()),u.normalize().multiply(d).subtract(o),function(n){n.divide(l),i.add(n)}(u),g},settle:function(t){var e=t.get()-n.get(),o=!r(e);return o&&n.set(t),o},update:function(){o.add(i),n.add(o),i.multiply(0)},useBaseMass:function(){return p(e)},useBaseSpeed:function(){return d(t)},useMass:p,useSpeed:d};return g}function b(n,t,e,r){var o=!1;return{constrain:function(i){if(!o&&n.reachedAny(e.get())&&n.reachedAny(t.get())){var u=i?.7:.45,a=e.get()-t.get();e.subtract(a*u),!i&&Math.abs(a)<10&&(e.set(n.constrain(e.get())),r.useSpeed(10).useMass(3))}},toggleActive:function(n){o=!n}}}function w(n,t,e,r,o){var i=u(-t+n,e[0]),a=r.map(i.constrain);return{snapsContained:function(){if(t<=n)return[i.max];if("keepSnaps"===o)return a;var e=function(){var n=a[0],t=g(a),e=a.lastIndexOf(n),r=a.indexOf(t)+1;return u(e,r)}(),r=e.min,c=e.max;return a.slice(r,c)}()}}function M(n,t,e,r,o){var i=u(e.min+t.measure(.1),e.max+t.measure(.1)),a=i.reachedMin,c=i.reachedMax;return{loop:function(t){if(function(n){return 1===n?c(r.get()):-1===n&&a(r.get())}(t)){var e=n*(-1*t);o.forEach((function(n){return n.add(e)}))}}}}function S(n){var t=n.max,e=n.length;return{get:function(n){return(n-t)/-e}}}function E(n,t,e,r,o,i){var u=n.startEdge,a=n.endEdge,c=o.map((function(n){return r[u]-n[u]})).map(e.measure).map((function(n){return-Math.abs(n)})),s=function(){var n=d(c,i).map((function(n){return n[0]})),r=d(o,i).map((function(n){return g(n)[a]-n[0][u]})).map(e.measure).map(Math.abs).map(t.measure);return n.map((function(n,t){return n+r[t]}))}();return{snaps:c,snapsAligned:s}}function A(n,t,e,r,o){var i=r.reachedAny,u=r.removeOffset,a=r.constrain;function c(n,t){return Math.abs(n)<Math.abs(t)?n:t}function s(t,r){var o=t,i=t+e,u=t-e;if(!n)return o;if(!r)return c(c(o,i),u);var a=c(o,1===r?i:u);return Math.abs(a)*r}return{byDistance:function(e,r){var c=o.get()+e,f=function(e){var r=n?u(e):a(e);return{index:t.map((function(n){return n-r})).map((function(n){return s(n,0)})).map((function(n,t){return{diff:n,index:t}})).sort((function(n,t){return Math.abs(n.diff)-Math.abs(t.diff)}))[0].index,distance:r}}(c),l=f.index,d=f.distance,p=!n&&i(c);return!r||p?{index:l,distance:e}:{index:l,distance:e+s(t[l]-d,0)}},byIndex:function(n,e){return{index:n,distance:s(t[n]-o.get(),e)}},shortcut:s}}function T(n,t,e,r,o,i,u,a){var c=p(r),s=p(r).reverse(),f=function(){var n=o[0]-1;return g(d(s,n),"end")}().concat(function(){var n=t-o[0]-1;return g(d(c,n),"start")}());function l(n,t){return n.reduce((function(n,t){return n-r[t]}),t)}function d(n,t){return n.reduce((function(n,e){return l(n,t)>0?n.concat([e]):n}),[])}function g(n,t){var r="start"===t,o=r?-e:e,a=i.findSlideBounds(o);return n.map((function(n){var t=r?0:-e,o=r?e:0,i=a.filter((function(t){return t.index===n}))[0][r?"end":"start"];return{point:i,getTarget:function(){return u.get()>i?t:o},index:n,location:-1}}))}return{canLoop:function(){return f.every((function(n){var e=n.index;return l(c.filter((function(n){return n!==e})),t)<=0}))},clear:function(){f.forEach((function(t){var e=t.index;a[e].style[n.startEdge]=""}))},loop:function(){f.forEach((function(t){var e=t.getTarget,r=t.location,o=t.index,i=e();i!==r&&(a[o].style[n.startEdge]=i+"%",t.location=i)}))},loopPoints:f}}function C(n,t,e){var r=c(),o=r.removeAll,i=0;function u(n){9===n.keyCode&&(i=(new Date).getTime())}function a(o,u){r.add(o,"focus",(function(){if(!((new Date).getTime()-i>10)){n.scrollLeft=0;var r=Math.floor(u/e);t.index(r,0)}}),!0)}return{addActivationEvents:function(n){r.add(document,"keydown",u,!1),n.forEach(a)},removeAllEvents:o}}function O(n,t,e){var r=e.style,o="x"===n.scroll?function(n){return"translate3d("+n+"%,0px,0px)"}:function(n){return"translate3d(0px,"+n+"%,0px)"},i=!1;return{clear:function(){r.transform=""},to:function(n){i||(r.transform=o(t.applyTo(n.get())))},toggleActive:function(n){i=!n}}}function P(n,t,e,r,o){var c,f=r.align,l=r.axis,d=r.direction,m=r.startIndex,h=r.inViewThreshold,P=r.loop,k=r.speed,D=r.dragFree,I=r.slidesToScroll,B=r.skipSnaps,L=r.containScroll,z=t.getBoundingClientRect(),N=e.map((function(n){return n.getBoundingClientRect()})),j=function(n){var t="rtl"===n?-1:1;return{applyTo:function(n){return n*t}}}(d),U=function(n,t){var e="y"===n?"y":"x";return{scroll:e,cross:"y"===n?"x":"y",startEdge:"y"===e?"top":"rtl"===t?"right":"left",endEdge:"y"===e?"bottom":"rtl"===t?"left":"right",measureSize:function(n){var t=n.width,r=n.height;return"x"===e?t:r}}}(l,d),F=(c=U.measureSize(z),{measure:function(n){return 0===c?0:n/c*100},totalPercent:100}),V=F.totalPercent,H=i(f,V),R=function(n,t,e,r,o){var i=n.measureSize,u=n.startEdge,a=n.endEdge,c=r.map(i);return{slideSizes:c.map(t.measure),slideSizesWithGaps:r.map((function(n,t,r){var i=t===v(r),s=window.getComputedStyle(g(e)),f=parseFloat(s.getPropertyValue("margin-"+a));return i?c[t]+(o?f:0):r[t+1][u]-n[u]})).map(t.measure).map(Math.abs)}}(U,F,e,N,P),_=R.slideSizes,q=R.slideSizesWithGaps,G=E(U,H,F,z,N,I),Z=G.snaps,W=G.snapsAligned,X=-g(Z)+g(q),J=w(V,X,Z,W,L).snapsContained,Y=!P&&""!==L?J:W,$=function(n,t,e){return{limit:function(){var r=t[0],o=g(t);return u(e?r-n:o,r)}()}}(X,Y,P).limit,K=a(v(Y),m,P),Q=K.clone(),nn=p(e),tn=function(n){var t=0;function e(n,e){return function(){n===!!t&&e()}}function r(){t=window.requestAnimationFrame(n)}return{proceed:e(!0,r),start:e(!1,r),stop:e(!0,(function(){window.cancelAnimationFrame(t),t=0}))}}((function(){P||fn.scrollBounds.constrain(fn.dragHandler.pointerDown()),fn.scrollBody.seek(on).update();var n=fn.scrollBody.settle(on);n&&!fn.dragHandler.pointerDown()&&(fn.animation.stop(),o.emit("settle")),n||o.emit("scroll"),P&&(fn.scrollLooper.loop(fn.scrollBody.direction()),fn.slideLooper.loop()),fn.translate.to(rn),fn.animation.proceed()})),en=Y[K.get()],rn=s(en),on=s(en),un=x(rn,k,1),an=A(P,Y,X,$,on),cn=function(n,t,e,r,o,i){function u(r){var u=r.distance,a=r.index!==t.get();u&&(n.start(),o.add(u)),a&&(e.set(t.get()),t.set(r.index),i.emit("select"))}return{distance:function(n,t){u(r.byDistance(n,t))},index:function(n,e){var o=t.clone().set(n);u(r.byIndex(o.get(),e))}}}(tn,K,Q,an,on,o),sn=function(n,t,e,r,o,i){var u=Math.min(Math.max(i,.01),.99),a=(o?[0,t,-t]:[0]).reduce((function(n,t){return n.concat(c(t,u))}),[]);function c(t,o){var i=e.map((function(n){return n*(o||0)}));return r.map((function(r,o){return{start:r-e[o]+i[o]+t,end:r+n-i[o]+t,index:o}}))}return{check:function(n){return a.reduce((function(t,e){var r=e.index,o=e.start,i=e.end;return-1===t.indexOf(r)&&o<n&&i>n?t.concat([r]):t}),[])},findSlideBounds:c}}(V,X,_,Z,P,h),fn={animation:tn,axis:U,direction:j,dragHandler:y(U,j,n,on,D,function(n,t){var e=n.scroll,r={x:"clientX",y:"clientY"},o=s(0),i=s(0),u=s(0),a=s(0),c=[],f=(new Date).getTime(),l=!1;function d(n,t){l=!n.touches;var e=r[t],o=l?n[e]:n.touches[0][e];return a.set(o)}return{pointerDown:function(n){var r=d(n,e);return o.set(r),u.set(r),t.measure(o.get())},pointerMove:function(n){var r=d(n,e),o=(new Date).getTime(),a=o-f;return a>=10&&(a>=100&&(c=[]),c.push(r.get()),f=o),i.set(r).subtract(u),u.set(r),t.measure(i.get())},pointerUp:function(){var n=(new Date).getTime()-f,e=u.get(),r=c.slice(-5).map((function(n){return e-n})).sort((function(n,t){return Math.abs(n)<Math.abs(t)?1:-1}))[0];return u.set(n>100||!r?0:r),c=[],t.measure(u.get())},readPoint:d}}(U,F),rn,tn,cn,un,an,K,o,P,B),pxToPercent:F,index:K,indexPrevious:Q,limit:$,location:rn,options:r,scrollBody:un,scrollBounds:b($,rn,on,un),scrollLooper:M(X,F,$,rn,[rn,on]),scrollProgress:S($),scrollSnaps:Y,scrollTarget:an,scrollTo:cn,slideFocus:C(n,cn,I),slideLooper:T(U,V,X,q,Y,sn,rn,e),slidesInView:sn,slideIndexes:nn,target:on,translate:O(U,j,t)};return fn}var k={align:"center",axis:"x",containScroll:"",direction:"ltr",dragFree:!1,draggable:!0,draggableClass:"is-draggable",draggingClass:"is-dragging",inViewThreshold:0,loop:!1,skipSnaps:!0,selectedClass:"is-selected",slidesToScroll:1,speed:10,startIndex:0};function D(n,t){var e,r,i,u,a=function(){var n={};function t(t){return n[t]||[]}var e={emit:function(n){return t(n).forEach((function(t){return t(n)})),e},off:function(r,o){return n[r]=t(r).filter((function(n){return n!==o})),e},on:function(r,o){return n[r]=t(r).concat([o]),e}};return e}(),s=c(),f=function(n,t){var e=0;return function(){window.clearTimeout(e),e=window.setTimeout(n,t)||0}}((function(){if(!g)return;var t=e.axis.measureSize(n.getBoundingClientRect());x!==t&&A();a.emit("resize")}),500),l=A,d=a.on,p=a.off,g=!1,v=o({},k),y=o({},v),x=0;function b(){if(!n)throw new Error("Missing root node \ud83d\ude22");var t=n.querySelector("*");if(!t)throw new Error("Missing container node \ud83d\ude22");i=t,u=Array.prototype.slice.call(i.children),r=function(n){var t=getComputedStyle(n,":before").content;return{get:function(){try{return JSON.parse(t.slice(1,-1).replace(/\\/g,""))}catch(n){}return{}}}}(n)}function w(t){if(b(),v=o({},v,t),y=o({},v,r.get()),e=P(n,i,u,y,a),s.add(window,"resize",f),e.translate.to(e.location),x=e.axis.measureSize(n.getBoundingClientRect()),y.loop){if(!e.slideLooper.canLoop())return E(),w({loop:!1});e.slideLooper.loop()}y.draggable&&i.offsetParent&&u.length&&(e.dragHandler.addActivationEvents(),y.draggableClass&&h(n,y.draggableClass),y.draggingClass&&a.on("pointerDown",M).on("pointerUp",M)),u.length&&e.slideFocus.addActivationEvents(u),y.selectedClass&&(S(),a.on("select",S).on("pointerUp",S)),g||(setTimeout((function(){return a.emit("init")}),0),g=!0)}function M(t){var e=y.draggingClass;"pointerDown"===t?h(n,e):m(n,e)}function S(){var n=y.selectedClass,t=T(!0);C(!0).forEach((function(t){return m(u[t],n)})),t.forEach((function(t){return h(u[t],n)}))}function E(){e.dragHandler.removeAllEvents(),e.slideFocus.removeAllEvents(),e.animation.stop(),s.removeAll(),e.translate.clear(),e.slideLooper.clear(),m(n,y.draggableClass),u.forEach((function(n){return m(n,y.selectedClass)})),a.off("select",S).off("pointerUp",S).off("pointerDown",M).off("pointerUp",M)}function A(n){if(g){var t=o({startIndex:D()},n);E(),w(t),a.emit("reInit")}}function T(n){var t=e[n?"target":"location"].get(),r=y.loop?"removeOffset":"constrain";return e.slidesInView.check(e.limit[r](t))}function C(n){var t=T(n);return e.slideIndexes.filter((function(n){return-1===t.indexOf(n)}))}function O(n,t,r){e.scrollBody.useBaseMass().useSpeed(t?100:y.speed),g&&e.scrollTo.index(n,r||0)}function D(){return e.index.get()}return w(t),{canScrollNext:function(){return e.index.clone().add(1).get()!==D()},canScrollPrev:function(){return e.index.clone().add(-1).get()!==D()},clickAllowed:function(){return e.dragHandler.clickAllowed()},containerNode:function(){return i},dangerouslyGetEngine:function(){return e},destroy:function(){g&&(E(),g=!1,a.emit("destroy"))},off:p,on:d,previousScrollSnap:function(){return e.indexPrevious.get()},reInit:l,rootNode:function(){return n},scrollNext:function(n){O(e.index.clone().add(1).get(),!0===n,-1)},scrollPrev:function(n){O(e.index.clone().add(-1).get(),!0===n,1)},scrollProgress:function(){return e.scrollProgress.get(e.location.get())},scrollSnapList:function(){return e.scrollSnaps.map(e.scrollProgress.get)},scrollTo:O,selectedScrollSnap:D,slideNodes:function(){return u},slidesInView:T,slidesNotInView:C}}t.Z=function(n){void 0===n&&(n={});var t=(0,r.useState)(),e=t[0],o=t[1],i=(0,r.useState)(),u=i[0],a=i[1],c=(0,r.useRef)(n),s=(0,r.useMemo)((function(){var t,e;return t=c.current,e=n,Object.keys(t).length===Object.keys(e).length&&Object.keys(t).every((function(n){return!!Object.prototype.hasOwnProperty.call(e,n)&&t[n]===e[n]}))||(c.current=n),c.current}),[c,n]);return(0,r.useEffect)((function(){if("undefined"!==typeof window&&window.document&&window.document.createElement&&u){var n=D(u,s);return o(n),function(){return n.destroy()}}o(void 0)}),[u,s,o]),[a,e]}},9920:function(n,t,e){e.d(t,{animated:function(){return r.q}});var r=e(1472);e.o(r,"useTransition")&&e.d(t,{useTransition:function(){return r.useTransition}})},159:function(n,t,e){function r(){return(r=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}e.d(t,{Z:function(){return r}})},6311:function(n,t,e){function r(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function o(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,o,i=[],u=!0,a=!1;try{for(e=e.call(n);!(u=(r=e.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(c){a=!0,o=c}finally{try{u||null==e.return||e.return()}finally{if(a)throw o}}return i}}(n,t)||function(n,t){if(n){if("string"===typeof n)return r(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(n,t):void 0}}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.d(t,{Z:function(){return o}})}}]);