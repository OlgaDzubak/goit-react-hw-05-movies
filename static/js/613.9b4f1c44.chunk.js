"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[613],{854:function(t,e,n){n.d(e,{a:function(){return i}});var r=n(9856),a=n(184),i=function(){return(0,a.jsx)(r.NB,{colors:["#34659D","#34659D","#34659D","#51E5FF","#429EA6"]})};e.Z=i},5658:function(t,e,n){n.d(e,{Z:function(){return c}});var r=n(7689),a=n(1087),i=n(6249),u={movieList:"movieList_movieList__vnqzm",movieList_item:"movieList_movieList_item__A9R4M",navLink1:"movieList_navLink1__23ZXL"},s=n(184),c=function(t){var e=t.movies,n=(0,r.TH)();return(0,s.jsx)("ul",{className:u.movieList,children:e.map((function(t){var e=t.title,r=t.id,c=t.year;return(0,s.jsx)("li",{className:u.movieList_item,children:(0,s.jsxs)(a.rU,{to:"".concat(i.H.MOVIES,"/").concat(r),className:u.link,state:{from:n},children:[e," ",c]})},r)}))})}},7957:function(t,e,n){n.d(e,{N:function(){return r}});var r=function(t){return t.map((function(t){var e=t.id,n=t.title,r=t.release_date;return{id:e,title:n,year:new Date(r).getFullYear()}}))}},5613:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r=n(9439),a=n(828),i=n(2791),u="searchForm_icon__2owrV",s=n(184),c=function(t){var e=t.onSubmit,n=(0,i.useState)(""),c=(0,r.Z)(n,2),o=c[0],f=c[1];return(0,s.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),!o.trim())return alert("The query is empty! Please, point what do you want to find!");e(o),f("")},children:[(0,s.jsx)("button",{type:"submit",children:(0,s.jsx)("span",{children:(0,s.jsx)(a.Yfv,{className:u})})}),(0,s.jsx)("input",{type:"text",placeholder:"Search movie",id:"input",value:o,onChange:function(t){f(t.target.value)}})]})},o=n(854),f=n(5658),l=n(4165),v=n(5861),p=n(1087),m=n(5963),d=n(7957),h=function(){var t=function(){var t=(0,i.useState)([]),e=(0,r.Z)(t,2),n=e[0],a=e[1],u=(0,i.useState)(!1),s=(0,r.Z)(u,2),c=s[0],o=s[1],f=(0,i.useState)(null),h=(0,r.Z)(f,2),Z=h[0],x=h[1],g=(0,p.lr)(),j=(0,r.Z)(g,2),_=j[0],w=j[1];return(0,i.useEffect)((function(){var t=_.get("query");o(!0);var e=function(){var e=(0,v.Z)((0,l.Z)().mark((function e(){var n,r;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,m.qF)(t);case 3:n=e.sent,r=(0,d.N)(n),a(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),x(e.t0);case 11:return e.prev=11,o(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[_]),{list:n,isLoading:c,error:Z,onChangeParams:function(t){return w({query:t})}}}(),e=t.list,n=t.isLoading,a=t.error,u=t.onChangeParams;return(0,s.jsx)("main",{children:(0,s.jsx)("section",{children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)(c,{onSubmit:u}),0!==e.length&&(0,s.jsx)(f.Z,{movies:e}),n&&(0,s.jsx)(o.Z,{}),a&&(0,s.jsx)("p",{children:"error"})]})})})}},5963:function(t,e,n){n.d(e,{Df:function(){return u},Hx:function(){return f},Y5:function(){return c},qF:function(){return s},uV:function(){return o}});var r=n(4165),a=n(5861),i=n(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3",i.Z.defaults.headers={accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2VjMjUzMmU5NmU2NDg0MjM3MGY5MmIxMTU2MGI5OSIsInN1YiI6IjY0OWVlNjVkMDkxZTYyMDEwYzExYTc1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.INMvJ5-VALOPV-eJTE5a1aj3iJDUP-1HRPAGZ7gUOkg"},i.Z.defaults.params={language:"en-US"};var u=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e,n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("/trending/movie/day");case 2:return e=t.sent,n=e.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i.Z.defaults.params={query:e,include_adult:"false",page:"1"},t.next=3,i.Z.get("/search/movie");case 3:return n=t.sent,a=n.data,t.abrupt("return",a.results);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),c=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("/movie/".concat(e));case 2:return n=t.sent,a=n.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("/movie/".concat(e,"/credits"));case 2:return n=t.sent,a=n.data,t.abrupt("return",a.cast);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i.Z.defaults.params={page:"1"},t.next=3,i.Z.get("/movie/".concat(e,"/reviews"));case 3:return n=t.sent,a=n.data,t.abrupt("return",a.results);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=613.9b4f1c44.chunk.js.map