"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[171],{6171:function(e,t,i){i.r(t),i.d(t,{default:function(){return b}});var n=i(907);var a=i(181);function r(e){return function(e){if(Array.isArray(e))return(0,n.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,a.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s=i(5861),c=i(885),o=i(7757),l=i.n(o),u=i(2791),d=i(501),p=i(6871),v=i(5146),f={container:"MovieDetailsPage_container__VyXai",button:"MovieDetailsPage_button__IlAfH",filmWrapper:"MovieDetailsPage_filmWrapper__BElxu",poster:"MovieDetailsPage_poster__Q+ne9",filmInfo:"MovieDetailsPage_filmInfo__u1grk",subTitle:"MovieDetailsPage_subTitle__jzIGn",linkWrapper:"MovieDetailsPage_linkWrapper__OWTgI",detailLink:"MovieDetailsPage_detailLink__f8tV7",activeDetailLink:"MovieDetailsPage_activeDetailLink__MpchJ"},h=i(184),_=(0,u.lazy)((function(){return i.e(275).then(i.bind(i,275))})),m=(0,u.lazy)((function(){return i.e(234).then(i.bind(i,7234))})),j=new v.Z;function b(){var e=(0,p.UO)().movieId,t=(0,u.useState)(e),i=(0,c.Z)(t,1)[0],n=(0,u.useState)((function(){})),a=(0,c.Z)(n,2),o=a[0],v=a[1],b=(0,u.useState)(-1),k=(0,c.Z)(b,2),x=k[0],g=k[1],w=(0,p.s0)();function y(){return y=(0,s.Z)(l().mark((function e(t){var i;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.getMovieDetail(t);case 2:i=e.sent,v(i.data);case 4:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}function D(e){e.currentTarget.classList.contains("active")||g(x-1)}if((0,u.useEffect)((function(){!function(e){y.apply(this,arguments)}(i)}),[i]),!o)return(0,h.jsx)("h1",{children:"Loading..."});var L=o.original_title,M=o.backdrop_path,N=o.poster_path,I=o.vote_average,P=o.overview,W=o.genres;return(0,h.jsxs)("div",{className:f.container,children:[(0,h.jsx)("button",{className:f.button,type:"button",onClick:function(){w(x)},children:"\u2190 Go back"}),(0,h.jsxs)("div",{className:f.filmWrapper,children:[(0,h.jsx)("img",{className:f.poster,src:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2".concat(null!==M&&void 0!==M?M:N),alt:L,width:"360"}),(0,h.jsxs)("div",{className:f.filmInfo,children:[(0,h.jsx)("h1",{children:L}),(0,h.jsxs)("p",{children:["User Score: ",I]}),(0,h.jsx)("p",{className:f.subTitle,children:"Overview"}),(0,h.jsx)("p",{children:P}),(0,h.jsx)("p",{className:f.subTitle,children:"Genres"}),(0,h.jsx)("p",{children:W.reduce((function(e,t){return[].concat(r(e),[t.name])}),[]).join(", ")})]})]}),(0,h.jsxs)("div",{className:f.linkWrapper,children:[(0,h.jsx)(d.OL,{className:function(e){return e.isActive?["active",f.activeDetailLink].join(" "):f.detailLink},to:"/movies/".concat(i,"/reviews"),onClick:D,children:"Reviews"}),(0,h.jsx)(d.OL,{className:function(e){return e.isActive?["active",f.activeDetailLink].join(" "):f.detailLink},to:"/movies/".concat(i,"/credits"),onClick:D,children:"Cast"})]}),(0,h.jsx)(u.Suspense,{fallback:(0,h.jsx)("p",{children:"Loading..."}),children:(0,h.jsxs)(p.Z5,{children:[(0,h.jsx)(p.AW,{path:"credits",element:(0,h.jsx)(_,{})}),(0,h.jsx)(p.AW,{path:"reviews",element:(0,h.jsx)(m,{})})]})})]})}}}]);
//# sourceMappingURL=171.3fe4582a.chunk.js.map