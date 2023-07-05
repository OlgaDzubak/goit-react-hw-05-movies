"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[831],{854:function(t,e,n){n.d(e,{a:function(){return i}});var r=n(9856),a=n(184),i=function(){return(0,a.jsx)(r.NB,{colors:["#34659D","#34659D","#34659D","#51E5FF","#429EA6"]})};e.Z=i},5658:function(t,e,n){n.d(e,{Z:function(){return c}});var r=n(7689),a=n(1087),i=n(6249),u={movieList:"movieList_movieList__vnqzm",movieList_item:"movieList_movieList_item__A9R4M",navLink1:"movieList_navLink1__23ZXL"},s=n(184),c=function(t){var e=t.movies,n=(0,r.TH)();return(0,s.jsx)("ul",{className:u.movieList,children:e.map((function(t){var e=t.title,r=t.id,c=t.year;return(0,s.jsx)("li",{className:u.movieList_item,children:(0,s.jsxs)(a.rU,{to:"".concat(i.H.MOVIES,"/").concat(r),className:u.link,state:{from:n},children:[e," ",c]})},r)}))})}},7957:function(t,e,n){n.d(e,{N:function(){return r}});var r=function(t){return t.map((function(t){var e=t.id,n=t.title,r=t.release_date;return{id:e,title:n,year:new Date(r).getFullYear()}}))}},4831:function(t,e,n){n.r(e),n.d(e,{Home:function(){return l},default:function(){return p}});var r=n(854),a=n(5658),i=n(4165),u=n(5861),s=n(9439),c=n(2791),o=n(5963),f=n(7957),v=n(184),l=function(){var t=function(){var t=(0,c.useState)([]),e=(0,s.Z)(t,2),n=e[0],r=e[1],a=(0,c.useState)(!1),v=(0,s.Z)(a,2),l=v[0],p=v[1],d=(0,c.useState)(null),m=(0,s.Z)(d,2),h=m[0],Z=m[1];return(0,c.useEffect)((function(){p(!0);var t=function(){var t=(0,u.Z)((0,i.Z)().mark((function t(){var e,n;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.Df)();case 3:e=t.sent,0===(n=(0,f.N)(e)).length&&Z("Oops! Somethig went wrong! Try reload the page!"),r(n),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),Z(t.t0);case 12:return t.prev=12,p(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),{list:n,isLoading:l,error:h}}(),e=t.list,n=t.isLoading,l=t.error;return(0,v.jsx)("main",{children:(0,v.jsxs)("section",{children:[0!==e.length&&(0,v.jsxs)("div",{className:"container",children:[(0,v.jsx)("h1",{children:"Trending today"}),(0,v.jsx)(a.Z,{movies:e})]}),n&&(0,v.jsx)(r.a,{}),l&&(0,v.jsx)("p",{children:l})]})})},p=l},5963:function(t,e,n){n.d(e,{Df:function(){return u},Hx:function(){return f},Y5:function(){return c},qF:function(){return s},uV:function(){return o}});var r=n(4165),a=n(5861),i=n(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3",i.Z.defaults.headers={accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2VjMjUzMmU5NmU2NDg0MjM3MGY5MmIxMTU2MGI5OSIsInN1YiI6IjY0OWVlNjVkMDkxZTYyMDEwYzExYTc1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.INMvJ5-VALOPV-eJTE5a1aj3iJDUP-1HRPAGZ7gUOkg"},i.Z.defaults.params={language:"en-US"};var u=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e,n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("/trending/movie/day");case 2:return e=t.sent,n=e.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i.Z.defaults.params={query:e,include_adult:"false",page:"1"},t.next=3,i.Z.get("/search/movie");case 3:return n=t.sent,a=n.data,t.abrupt("return",a.results);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),c=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("/movie/".concat(e));case 2:return n=t.sent,a=n.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("/movie/".concat(e,"/credits"));case 2:return n=t.sent,a=n.data,t.abrupt("return",a.cast);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i.Z.defaults.params={page:"1"},t.next=3,i.Z.get("/movie/".concat(e,"/reviews"));case 3:return n=t.sent,a=n.data,t.abrupt("return",a.results);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=831.1f60eb4b.chunk.js.map