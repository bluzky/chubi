!function(e){function t(t){for(var n,c,a=t[0],u=t[1],i=t[2],s=0,p=[];s<a.length;s++)c=a[s],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(f&&f(t);p.length;)p.shift()();return l.push.apply(l,i||[]),r()}function r(){for(var e,t=0;t<l.length;t++){for(var r=l[t],n=!0,a=1;a<r.length;a++){var u=r[a];0!==o[u]&&(n=!1)}n&&(l.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={admin:0},l=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var i=0;i<a.length;i++)t(a[i]);var f=u;l.push([212,"commons"]),r()}({194:function(e,t,r){},197:function(e,t){e.exports=window},198:function(e,t,r){(function(e){e(document).ready(function(){e('[data-toggle="tooltip"]').tooltip(),e('[data-toggle="popover"]').popover({html:!0}),e('[data-toggle="card-remove"]').on("click",function(t){return e(this).closest("div.card").remove(),t.preventDefault(),!1}),e('[data-toggle="card-collapse"]').on("click",function(t){return e(this).closest("div.card").toggleClass("card-collapsed"),t.preventDefault(),!1}),e('[data-toggle="card-fullscreen"]').on("click",function(t){return e(this).closest("div.card").toggleClass("card-fullscreen").removeClass("card-collapsed"),t.preventDefault(),!1})})}).call(this,r(2))},212:function(e,t,r){"use strict";r.r(t);r(194);var n=r(2);r(195),r(198),r(199);window.$=n}});