(this["webpackJsonpnetflix-react"]=this["webpackJsonpnetflix-react"]||[]).push([[0],{20:function(e,t,a){e.exports=a(33)},25:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),o=a.n(c),l=(a(25),a(6)),i=a.n(l),s=a(10),u=a(7),m=a(3);var p=function(e){return r.a.createElement("div",{className:"search"},r.a.createElement("form",{action:r.a.createElement(m.b,{to:"/search"},"search"),onSubmit:e.handleSubmit,method:"GET"},r.a.createElement("input",{onChange:e.handleChange,type:"text",placeholder:"search for a movie"}),r.a.createElement("button",{type:"submit",onClick:e.handleSubmit},r.a.createElement(m.b,{to:"/search"},"search"))))};var f=function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"nav"},r.a.createElement("img",{src:"//www.themoviedb.org/assets/1/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg",alt:""}),r.a.createElement("div",{className:"navlist"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(m.b,{to:"/"},"home")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/popular"},"popular")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/top 10"},"top 10"))))))},h=a(8),v=function(e){return r.a.createElement("div",{className:"card",style:{backgroundImage:"url(".concat(e.img,")")}},r.a.createElement("p",{className:"titleMovie"},e.title))};var b=function(e){return r.a.createElement("div",{className:"list"},e.movieList.map((function(e,t){return r.a.createElement(v,{key:t,img:"http://image.tmdb.org/t/p/w185/".concat(e.poster_path),title:e.original_title,description:e.overview})})))};var E=function(){var e=Object(n.useState)(["hey"]),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),l=Object(u.a)(o,2),m=l[0],p=l[1],f=Object(h.g)().name;return Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/search/movie/?api_key=67b347978ffe14fc5d6f8a664a1829f2&query=".concat(f));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c(a.results),p(f);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[f]),r.a.createElement("div",null,r.a.createElement("h3",null,"Results for: ",m),r.a.createElement(b,{movieList:a}))};var d=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/popular?api_key=67b347978ffe14fc5d6f8a664a1829f2&language=en-US&page=1");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c(a.results);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("div",{className:"popular-container"},r.a.createElement("h1",null,"Popular movies"),r.a.createElement(b,{movieList:a}))},g=function(){return r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:d}),r.a.createElement(h.a,{exact:!0,path:"/popular",component:d}),r.a.createElement(h.a,{exact:!0,path:"/top5"}),r.a.createElement(h.a,{exact:!0,path:"/search/:name",component:E}))};a(32);var j=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),l=Object(u.a)(o,2),m=(l[0],l[1]),v=Object(h.f)(),b=function(){var e=Object(s.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==a){e.next=5;break}alert("please enter a movie title"),e.next=13;break;case 5:return e.next=7,fetch("https://api.themoviedb.org/3/search/movie/?api_key=67b347978ffe14fc5d6f8a664a1829f2&query=".concat(a));case 7:return n=e.sent,e.next=10,n.json();case 10:r=e.sent,m(r.results),v.push("/search/".concat(a));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement(f,null),r.a.createElement(p,{handleSubmit:b,handleChange:function(e){console.log(e.target.value),c(e.target.value)}}),r.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m.a,null,r.a.createElement(j,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.41190fdc.chunk.js.map