!function(t,e,i,n){"use strict";function r(t,e,i){return setTimeout(u(t,i),e)}function s(t,e,i){return!!Array.isArray(t)&&(o(t,i[e],i),!0)}function o(t,e,i){var r;if(t)if(t.forEach)t.forEach(e,i);else if(t.length!==n)for(r=0;r<t.length;)e.call(i,t[r],r,t),r++;else for(r in t)t.hasOwnProperty(r)&&e.call(i,t[r],r,t)}function a(e,i,n){var r="DEPRECATED METHOD: "+i+"\n"+n+" AT \n";return function(){var i=new Error("get-stack-trace"),n=i&&i.stack?i.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",s=t.console&&(t.console.warn||t.console.log);return s&&s.call(t.console,r,n),e.apply(this,arguments)}}function h(t,e,i){var n,r=e.prototype;(n=t.prototype=Object.create(r)).constructor=t,n._super=r,i&&Q(n,i)}function u(t,e){return function(){return t.apply(e,arguments)}}function c(t,e){return typeof t==it?t.apply(e&&e[0]||n,e):t}function l(t,e){return t===n?e:t}function p(t,e,i){o(m(e),function(e){t.addEventListener(e,i,!1)})}function f(t,e,i){o(m(e),function(e){t.removeEventListener(e,i,!1)})}function d(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function v(t,e){return t.indexOf(e)>-1}function m(t){return t.trim().split(/\s+/g)}function g(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var n=0;n<t.length;){if(i&&t[n][i]==e||!i&&t[n]===e)return n;n++}return-1}function y(t){return Array.prototype.slice.call(t,0)}function T(t,e,i){for(var n=[],r=[],s=0;s<t.length;){var o=e?t[s][e]:t[s];g(r,o)<0&&n.push(t[s]),r[s]=o,s++}return i&&(n=e?n.sort(function(t,i){return t[e]>i[e]}):n.sort()),n}function E(t,e){for(var i,r,s=e[0].toUpperCase()+e.slice(1),o=0;o<tt.length;){if((r=(i=tt[o])?i+s:e)in t)return r;o++}return n}function I(e){var i=e.ownerDocument||e;return i.defaultView||i.parentWindow||t}function A(t,e){var i=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){c(t.options.enable,[t])&&i.handler(e)},this.init()}function _(t,e,i){var n=i.pointers.length,r=i.changedPointers.length,s=e&vt&&n-r==0,o=e&(mt|gt)&&n-r==0;i.isFirst=!!s,i.isFinal=!!o,s&&(t.session={}),i.eventType=e,function(t,e){var i=t.session,n=e.pointers,r=n.length;i.firstInput||(i.firstInput=S(e)),r>1&&!i.firstMultiple?i.firstMultiple=S(e):1===r&&(i.firstMultiple=!1);var s=i.firstInput,o=i.firstMultiple,a=o?o.center:s.center,h=e.center=P(n);e.timeStamp=st(),e.deltaTime=e.timeStamp-s.timeStamp,e.angle=O(a,h),e.distance=w(a,h),function(t,e){var i=e.center,n=t.offsetDelta||{},r=t.prevDelta||{},s=t.prevInput||{};e.eventType!==vt&&s.eventType!==mt||(r=t.prevDelta={x:s.deltaX||0,y:s.deltaY||0},n=t.offsetDelta={x:i.x,y:i.y}),e.deltaX=r.x+(i.x-n.x),e.deltaY=r.y+(i.y-n.y)}(i,e),e.offsetDirection=x(e.deltaX,e.deltaY);var u=D(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=u.x,e.overallVelocityY=u.y,e.overallVelocity=rt(u.x)>rt(u.y)?u.x:u.y,e.scale=o?function(t,e){return w(n[0],n[1],Dt)/w(t[0],t[1],Dt)}(o.pointers):1,e.rotation=o?function(t,e){return O(n[1],n[0],Dt)+O(t[1],t[0],Dt)}(o.pointers):0,e.maxPointers=i.prevInput?e.pointers.length>i.prevInput.maxPointers?e.pointers.length:i.prevInput.maxPointers:e.pointers.length,C(i,e);var c=t.element;d(e.srcEvent.target,c)&&(c=e.srcEvent.target),e.target=c}(t,i),t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}function C(t,e){var i,r,s,o,a=t.lastInterval||e,h=e.timeStamp-a.timeStamp;if(e.eventType!=gt&&(h>dt||a.velocity===n)){var u=e.deltaX-a.deltaX,c=e.deltaY-a.deltaY,l=D(h,u,c);r=l.x,s=l.y,i=rt(l.x)>rt(l.y)?l.x:l.y,o=x(u,c),t.lastInterval=e}else i=a.velocity,r=a.velocityX,s=a.velocityY,o=a.direction;e.velocity=i,e.velocityX=r,e.velocityY=s,e.direction=o}function S(t){for(var e=[],i=0;i<t.pointers.length;)e[i]={clientX:nt(t.pointers[i].clientX),clientY:nt(t.pointers[i].clientY)},i++;return{timeStamp:st(),pointers:e,center:P(e),deltaX:t.deltaX,deltaY:t.deltaY}}function P(t){var e=t.length;if(1===e)return{x:nt(t[0].clientX),y:nt(t[0].clientY)};for(var i=0,n=0,r=0;e>r;)i+=t[r].clientX,n+=t[r].clientY,r++;return{x:nt(i/e),y:nt(n/e)}}function D(t,e,i){return{x:e/t||0,y:i/t||0}}function x(t,e){return t===e?yt:rt(t)>=rt(e)?0>t?Tt:Et:0>e?It:At}function w(t,e,i){i||(i=Pt);var n=e[i[0]]-t[i[0]],r=e[i[1]]-t[i[1]];return Math.sqrt(n*n+r*r)}function O(t,e,i){return i||(i=Pt),180*Math.atan2(e[i[1]]-t[i[1]],e[i[0]]-t[i[0]])/Math.PI}function R(){this.evEl=wt,this.evWin=Ot,this.pressed=!1,A.apply(this,arguments)}function M(){this.evEl=zt,this.evWin=Nt,A.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function z(){this.evTarget=Yt,this.evWin=Ft,this.started=!1,A.apply(this,arguments)}function N(){this.evTarget=bt,this.targetIds={},A.apply(this,arguments)}function X(){A.apply(this,arguments);var t=u(this.handler,this);this.touch=new N(this.manager,t),this.mouse=new R(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function Y(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var i={x:e.clientX,y:e.clientY};this.lastTouches.push(i);var n=this.lastTouches;setTimeout(function(){var t=n.indexOf(i);t>-1&&n.splice(t,1)},Lt)}}function F(t,e){this.manager=t,this.set(e)}function W(t){this.options=Q({},this.defaults,t||{}),this.id=ht++,this.manager=null,this.options.enable=l(this.options.enable,!0),this.state=$t,this.simultaneous={},this.requireFail=[]}function b(t){return t&te?"cancel":t&Kt?"end":t&Jt?"move":t&Gt?"start":""}function L(t){return t==At?"down":t==It?"up":t==Tt?"left":t==Et?"right":""}function q(t,e){var i=e.manager;return i?i.get(t):t}function H(){W.apply(this,arguments)}function U(){H.apply(this,arguments),this.pX=null,this.pY=null}function V(){H.apply(this,arguments)}function k(){W.apply(this,arguments),this._timer=null,this._input=null}function Z(){H.apply(this,arguments)}function j(){H.apply(this,arguments)}function B(){W.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function $(t,e){return(e=e||{}).recognizers=l(e.recognizers,$.defaults.preset),new G(t,e)}function G(t,e){this.options=Q({},$.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=function(t){return new(t.options.inputClass||(ct?M:lt?N:ut?X:R))(t,_)}(this),this.touchAction=new F(this,this.options.touchAction),J(this,!0),o(this.options.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function J(t,e){var i,n=t.element;n.style&&(o(t.options.cssProps,function(r,s){i=E(n.style,s),e?(t.oldCssProps[i]=n.style[i],n.style[i]=r):n.style[i]=t.oldCssProps[i]||""}),e||(t.oldCssProps={}))}function K(t,i){var n=e.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=i,i.target.dispatchEvent(n)}var Q,tt=["","webkit","Moz","MS","ms","o"],et=e.createElement("div"),it="function",nt=Math.round,rt=Math.abs,st=Date.now;Q="function"!=typeof Object.assign?function(t){if(t===n||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),i=1;i<arguments.length;i++){var r=arguments[i];if(r!==n&&null!==r)for(var s in r)r.hasOwnProperty(s)&&(e[s]=r[s])}return e}:Object.assign;var ot=a(function(t,e,i){for(var r=Object.keys(e),s=0;s<r.length;)(!i||i&&t[r[s]]===n)&&(t[r[s]]=e[r[s]]),s++;return t},"extend","Use `assign`."),at=a(function(t,e){return ot(t,e,!0)},"merge","Use `assign`."),ht=1,ut="ontouchstart"in t,ct=E(t,"PointerEvent")!==n,lt=ut&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),pt="touch",ft="mouse",dt=25,vt=1,mt=4,gt=8,yt=1,Tt=2,Et=4,It=8,At=16,_t=Tt|Et,Ct=It|At,St=_t|Ct,Pt=["x","y"],Dt=["clientX","clientY"];A.prototype={handler:function(){},init:function(){this.evEl&&p(this.element,this.evEl,this.domHandler),this.evTarget&&p(this.target,this.evTarget,this.domHandler),this.evWin&&p(I(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&f(this.element,this.evEl,this.domHandler),this.evTarget&&f(this.target,this.evTarget,this.domHandler),this.evWin&&f(I(this.element),this.evWin,this.domHandler)}};var xt={mousedown:vt,mousemove:2,mouseup:mt},wt="mousedown",Ot="mousemove mouseup";h(R,A,{handler:function(t){var e=xt[t.type];e&vt&&0===t.button&&(this.pressed=!0),2&e&&1!==t.which&&(e=mt),this.pressed&&(e&mt&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:ft,srcEvent:t}))}});var Rt={pointerdown:vt,pointermove:2,pointerup:mt,pointercancel:gt,pointerout:gt},Mt={2:pt,3:"pen",4:ft,5:"kinect"},zt="pointerdown",Nt="pointermove pointerup pointercancel";t.MSPointerEvent&&!t.PointerEvent&&(zt="MSPointerDown",Nt="MSPointerMove MSPointerUp MSPointerCancel"),h(M,A,{handler:function(t){var e=this.store,i=!1,n=t.type.toLowerCase().replace("ms",""),r=Rt[n],s=Mt[t.pointerType]||t.pointerType,o=s==pt,a=g(e,t.pointerId,"pointerId");r&vt&&(0===t.button||o)?0>a&&(e.push(t),a=e.length-1):r&(mt|gt)&&(i=!0),0>a||(e[a]=t,this.callback(this.manager,r,{pointers:e,changedPointers:[t],pointerType:s,srcEvent:t}),i&&e.splice(a,1))}});var Xt={touchstart:vt,touchmove:2,touchend:mt,touchcancel:gt},Yt="touchstart",Ft="touchstart touchmove touchend touchcancel";h(z,A,{handler:function(t){var e=Xt[t.type];if(e===vt&&(this.started=!0),this.started){var i=(function(t,e){var i=y(t.touches),n=y(t.changedTouches);return e&(mt|gt)&&(i=T(i.concat(n),"identifier",!0)),[i,n]}).call(this,t,e);e&(mt|gt)&&i[0].length-i[1].length==0&&(this.started=!1),this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:pt,srcEvent:t})}}});var Wt={touchstart:vt,touchmove:2,touchend:mt,touchcancel:gt},bt="touchstart touchmove touchend touchcancel";h(N,A,{handler:function(t){var e=Wt[t.type],i=(function(t,e){var i=y(t.touches),n=this.targetIds;if(e&(2|vt)&&1===i.length)return n[i[0].identifier]=!0,[i,i];var r,s,o=y(t.changedTouches),a=[],h=this.target;if(s=i.filter(function(t){return d(t.target,h)}),e===vt)for(r=0;r<s.length;)n[s[r].identifier]=!0,r++;for(r=0;r<o.length;)n[o[r].identifier]&&a.push(o[r]),e&(mt|gt)&&delete n[o[r].identifier],r++;return a.length?[T(s.concat(a),"identifier",!0),a]:void 0}).call(this,t,e);i&&this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:pt,srcEvent:t})}});var Lt=2500;h(X,A,{handler:function(t,e,i){var n=i.pointerType==ft;if(!(n&&i.sourceCapabilities&&i.sourceCapabilities.firesTouchEvents)){if(i.pointerType==pt)(function(t,e){t&vt?(this.primaryTouch=e.changedPointers[0].identifier,Y.call(this,e)):t&(mt|gt)&&Y.call(this,e)}).call(this,e,i);else if(n&&(function(t){for(var e=t.srcEvent.clientX,i=t.srcEvent.clientY,n=0;n<this.lastTouches.length;n++){var r=this.lastTouches[n],s=Math.abs(e-r.x),o=Math.abs(i-r.y);if(25>=s&&25>=o)return!0}return!1}).call(this,i))return;this.callback(t,e,i)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var qt=E(et.style,"touchAction"),Ht=qt!==n,Ut="compute",Vt="manipulation",kt="none",Zt="pan-x",jt="pan-y",Bt=function(){if(!Ht)return!1;var e={},i=t.CSS&&t.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(n){e[n]=!i||t.CSS.supports("touch-action",n)}),e}();F.prototype={set:function(t){t==Ut&&(t=this.compute()),Ht&&this.manager.element.style&&Bt[t]&&(this.manager.element.style[qt]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return o(this.manager.recognizers,function(e){c(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),function(t){if(v(t,kt))return kt;var e=v(t,Zt),i=v(t,jt);return e&&i?kt:e||i?e?Zt:jt:v(t,Vt)?Vt:"auto"}(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,i=t.offsetDirection;if(!this.manager.session.prevented){var n=this.actions,r=v(n,kt)&&!Bt[kt],s=v(n,jt)&&!Bt[jt],o=v(n,Zt)&&!Bt[Zt];if(r&&1===t.pointers.length&&t.distance<2&&t.deltaTime<250)return;return o&&s?void 0:r||s&&i&_t||o&&i&Ct?this.preventSrc(e):void 0}e.preventDefault()},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var $t=1,Gt=2,Jt=4,Kt=8,Qt=Kt,te=16;W.prototype={defaults:{},set:function(t){return Q(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(s(t,"recognizeWith",this))return this;var e=this.simultaneous;return e[(t=q(t,this)).id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return s(t,"dropRecognizeWith",this)?this:(t=q(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(s(t,"requireFailure",this))return this;var e=this.requireFail;return-1===g(e,t=q(t,this))&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(s(t,"dropRequireFailure",this))return this;t=q(t,this);var e=g(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){function e(e){i.manager.emit(e,t)}var i=this,n=this.state;Kt>n&&e(i.options.event+b(n)),e(i.options.event),t.additionalEvent&&e(t.additionalEvent),n>=Kt&&e(i.options.event+b(n))},tryEmit:function(t){return this.canEmit()?this.emit(t):void(this.state=32)},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(32|$t)))return!1;t++}return!0},recognize:function(t){var e=Q({},t);return c(this.options.enable,[this,e])?(this.state&(Qt|te|32)&&(this.state=$t),this.state=this.process(e),void(this.state&(Gt|Jt|Kt|te)&&this.tryEmit(e))):(this.reset(),void(this.state=32))},process:function(t){},getTouchAction:function(){},reset:function(){}},h(H,W,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,i=t.eventType,n=e&(Gt|Jt),r=this.attrTest(t);return n&&(i&gt||!r)?e|te:n||r?i&mt?e|Kt:e&Gt?e|Jt:Gt:32}}),h(U,H,{defaults:{event:"pan",threshold:10,pointers:1,direction:St},getTouchAction:function(){var t=this.options.direction,e=[];return t&_t&&e.push(jt),t&Ct&&e.push(Zt),e},directionTest:function(t){var e=this.options,i=!0,n=t.distance,r=t.direction,s=t.deltaX,o=t.deltaY;return r&e.direction||(e.direction&_t?(r=0===s?yt:0>s?Tt:Et,i=s!=this.pX,n=Math.abs(t.deltaX)):(r=0===o?yt:0>o?It:At,i=o!=this.pY,n=Math.abs(t.deltaY))),t.direction=r,i&&n>e.threshold&&r&e.direction},attrTest:function(t){return H.prototype.attrTest.call(this,t)&&(this.state&Gt||!(this.state&Gt)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=L(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),h(V,H,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[kt]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&Gt)},emit:function(t){1!==t.scale&&(t.additionalEvent=this.options.event+(t.scale<1?"in":"out")),this._super.emit.call(this,t)}}),h(k,W,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return["auto"]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,s=t.deltaTime>e.time;if(this._input=t,!n||!i||t.eventType&(mt|gt)&&!s)this.reset();else if(t.eventType&vt)this.reset(),this._timer=r(function(){this.state=Qt,this.tryEmit()},e.time,this);else if(t.eventType&mt)return Qt;return 32},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===Qt&&(t&&t.eventType&mt?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=st(),this.manager.emit(this.options.event,this._input)))}}),h(Z,H,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[kt]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&Gt)}}),h(j,H,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:_t|Ct,pointers:1},getTouchAction:function(){return U.prototype.getTouchAction.call(this)},attrTest:function(t){var e,i=this.options.direction;return i&(_t|Ct)?e=t.overallVelocity:i&_t?e=t.overallVelocityX:i&Ct&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&i&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&rt(e)>this.options.velocity&&t.eventType&mt},emit:function(t){var e=L(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),h(B,W,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[Vt]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,s=t.deltaTime<e.time;if(this.reset(),t.eventType&vt&&0===this.count)return this.failTimeout();if(n&&s&&i){if(t.eventType!=mt)return this.failTimeout();var o=!this.pTime||t.timeStamp-this.pTime<e.interval,a=!this.pCenter||w(this.pCenter,t.center)<e.posThreshold;if(this.pTime=t.timeStamp,this.pCenter=t.center,a&&o?this.count+=1:this.count=1,this._input=t,0==this.count%e.taps)return this.hasRequireFailures()?(this._timer=r(function(){this.state=Qt,this.tryEmit()},e.interval,this),Gt):Qt}return 32},failTimeout:function(){return this._timer=r(function(){this.state=32},this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==Qt&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),$.VERSION="2.0.7",$.defaults={domEvents:!1,touchAction:Ut,enable:!0,inputTarget:null,inputClass:null,preset:[[Z,{enable:!1}],[V,{enable:!1},["rotate"]],[j,{direction:_t}],[U,{direction:_t},["swipe"]],[B],[B,{event:"doubletap",taps:2},["tap"]],[k]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},G.prototype={set:function(t){return Q(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var i,n=this.recognizers,r=e.curRecognizer;(!r||r&&r.state&Qt)&&(r=e.curRecognizer=null);for(var s=0;s<n.length;)i=n[s],2===e.stopped||r&&i!=r&&!i.canRecognizeWith(r)?i.reset():i.recognize(t),!r&&i.state&(Gt|Jt|Kt)&&(r=e.curRecognizer=i),s++}},get:function(t){if(t instanceof W)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event==t)return e[i];return null},add:function(t){if(s(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(s(t,"remove",this))return this;if(t=this.get(t)){var e=this.recognizers,i=g(e,t);-1!==i&&(e.splice(i,1),this.touchAction.update())}return this},on:function(t,e){if(t!==n&&e!==n){var i=this.handlers;return o(m(t),function(t){i[t]=i[t]||[],i[t].push(e)}),this}},off:function(t,e){if(t!==n){var i=this.handlers;return o(m(t),function(t){e?i[t]&&i[t].splice(g(i[t],e),1):delete i[t]}),this}},emit:function(t,e){this.options.domEvents&&K(t,e);var i=this.handlers[t]&&this.handlers[t].slice();if(i&&i.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var n=0;n<i.length;)i[n](e),n++}},destroy:function(){this.element&&J(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},Q($,{INPUT_START:vt,INPUT_MOVE:2,INPUT_END:mt,INPUT_CANCEL:gt,STATE_POSSIBLE:$t,STATE_BEGAN:Gt,STATE_CHANGED:Jt,STATE_ENDED:Kt,STATE_RECOGNIZED:Qt,STATE_CANCELLED:te,STATE_FAILED:32,DIRECTION_NONE:yt,DIRECTION_LEFT:Tt,DIRECTION_RIGHT:Et,DIRECTION_UP:It,DIRECTION_DOWN:At,DIRECTION_HORIZONTAL:_t,DIRECTION_VERTICAL:Ct,DIRECTION_ALL:St,Manager:G,Input:A,TouchAction:F,TouchInput:N,MouseInput:R,PointerEventInput:M,TouchMouseInput:X,SingleTouchInput:z,Recognizer:W,AttrRecognizer:H,Tap:B,Pan:U,Swipe:j,Pinch:V,Rotate:Z,Press:k,on:p,off:f,each:o,merge:at,extend:ot,assign:Q,inherit:h,bindFn:u,prefixed:E}),(void 0!==t?t:"undefined"!=typeof self?self:{}).Hammer=$,"function"==typeof define&&define.amd?define(function(){return $}):"undefined"!=typeof module&&module.exports?module.exports=$:t.Hammer=$}(window,document);