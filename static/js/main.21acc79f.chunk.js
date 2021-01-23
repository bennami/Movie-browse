(this["webpackJsonpnetflix-react"]=this["webpackJsonpnetflix-react"]||[]).push([[0],{108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},116:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),o=a.n(c),i=(a(50),a(12)),l=(a(51),"?api_key=67b347978ffe14fc5d6f8a664a1829f2"),u="https://api.themoviedb.org/3",s="https://api.themoviedb.org/3/movie/",m=a(9),p=a(1),h=a.n(p),d=a(10),f=a.n(d),g=a(14),v=a(13),E=a(44),b=a(3),R="LOAD_TRENDY_MOVIES_SUCCESS ",P="LOAD_POPULAR_MOVIES_SUCCESS ",M="BEGIN_API_CALL",y="API_CALL_ERROR",O="SET_CURRENT_MOVIE",S="SEARCH_INPUT",w="SEARCH_RESULTS_SUCCESS",j="SET_CURRENT_PAGE",C="SEARCH_GENRE_SUCCESS";function _(e){return N.apply(this,arguments)}function N(){return(N=Object(g.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.ok){e.next=3;break}return console.log("fetch success"),e.abrupt("return",t.json());case 3:if(400!==t.status){e.next=9;break}return e.next=6,t.text();case 6:throw a=e.sent,console.log(a),new Error("404 error");case 9:throw new Error("response failed");case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){throw console.error("API call failed. "+e),e}function k(){return{type:M}}function q(){return{type:y}}function x(e){return function(t){t(function(e){return{type:O,currentMovie:e}}(e))}}function T(e){return function(t){t(function(e){return{type:S,payload:e}}(e))}}function A(e,t){return function(a){return a(k()),function(e,t){return fetch("".concat(u,"/search/movie").concat(l,"&query=").concat(e,"&page=").concat(t)).then(_).catch(I)}(e,t).then((function(e){a(function(e){return{type:w,searchResults:e}}(e))})).catch((function(e){throw a(q()),e}))}}function L(e){return function(t){t(function(e){return{type:j,currentPage:e}}(e))}}a(57);var U=a(117);function D(e){var t=e.setSearch,a=e.loadSearchResults,c=(e.searchInput,e.searchResults,e.currentPage,e.setMovie),o=Object(E.a)(e,["setSearch","loadSearchResults","searchInput","searchResults","currentPage","setMovie"]),l=Object(n.useState)(""),u=Object(v.a)(l,2),s=u[0],m=u[1],p=Object(b.f)(),h=function(){var e=Object(g.a)(f.a.mark((function e(n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),""===s?alert("please enter a movie title"):(t(s),c([]),a(s).catch((function(e){alert("loading popular"+e)})),p.push("/search/".concat(s)));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"search"},r.a.createElement("form",{action:r.a.createElement(i.b,{to:"/search"},"search"),onSubmit:h},r.a.createElement("input",{onChange:function(e){m(e.target.value)},type:"text",value:s,placeholder:"search for a movie"}),r.a.createElement("button",{type:"submit",onClick:h},r.a.createElement(i.b,{to:"/search"},r.a.createElement(U.b,null)))),r.a.createElement("p",null,o.searchInput))}D.prototypes={setSearch:h.a.func.isRequired,setMovie:h.a.func.isRequired,currentPage:h.a.number.isRequired,loadSearchResults:h.a.func.isRequired,searchInput:h.a.string.isRequired,searchResults:h.a.array.isRequired,actions:h.a.object.isRequired};var F={setSearch:T,setMovie:x,loadSearchResults:A},G=Object(m.b)((function(e){return{currentPage:e.homePageReducer.currentPage,searchInput:e.homePageReducer.searchInput,searchResults:e.homePageReducer.searchResults}}),F)(D);function B(e){var t=e.setMovie;function a(){t([])}return r.a.createElement("div",null,r.a.createElement("nav",{className:"nav"},r.a.createElement("div",{className:"nav-links"},r.a.createElement("img",{src:"https://www.themoviedb.org/assets/1/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg",alt:""}),r.a.createElement("ul",null,r.a.createElement("li",{onClick:a},r.a.createElement(i.b,{to:"/home"},"home")),r.a.createElement("li",{onClick:a},r.a.createElement(i.b,{to:"/login"},"login")),r.a.createElement("li",{onClick:a,className:"hide"},r.a.createElement("i",null,"search")))),r.a.createElement("div",{className:"nav-search"},r.a.createElement(G,null))))}B.prototypes={setMovie:h.a.func.isRequired};var H={setMovie:x},V=Object(m.b)(null,H)(B),z=(a(59),function(e){return r.a.createElement("div",{onClick:function(){return e.viewMovieInfo(e.movieId)}},r.a.createElement("div",{className:"cardMovie",style:{backgroundImage:"url(".concat(e.img,")")}}),r.a.createElement("p",{className:"titleMovie"},e.title))}),J=function(e){var t=e.movieList,a=e.viewMovieInfo;return r.a.createElement("div",{className:"list"},t.map((function(e,t){return r.a.createElement(z,{key:t,img:"".concat("https://image.tmdb.org/t/p/w200/").concat(e.poster_path),title:e.original_title,description:e.overview,viewMovieInfo:a,movieId:e.id})})))},W=(a(60),function(){return r.a.createElement("div",{className:"loader"},"Loading...")}),X=a(22),Y=a.n(X);function $(e){var t=e.setMovie,a=e.searchInput,c=e.searchResults,o=e.loadSearchResults,i=e.setCurrentPage,l=(e.currentMovie,e.currentPage),u=e.setSearch,s=e.totalPages,m=Object(n.useState)([]),p=(Object(v.a)(m,1)[0],Object(b.f)()),h=Object(b.g)().name;Object(n.useEffect)((function(){u(h),""===a&&1===l||(o(a,l).catch((function(e){alert("loading search results failed"+e)})),p.push("/search/".concat(a)))}),[a,l,h,o,p,u]);return r.a.createElement("div",null,r.a.createElement(r.a.Fragment,null,void 0===c?r.a.createElement(r.a.Fragment,null,r.a.createElement(W,null)):0===c.length?r.a.createElement("p",null,"no movies found"):r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Results for: ",a),r.a.createElement(J,{movieList:c,viewMovieInfo:function(e){var a=c.filter((function(t){return t.id===e})),n=a.length>0?a[0]:null;t(n),p.push("/home/".concat(n.title))}}),r.a.createElement(Y.a,{pageCount:s,pageRangeDisplayed:4,marginPagesDisplayed:0,onPageChange:function(e){(e=e.selected+1)!==l&&(i(e),o(l))},containerClassName:"container",breakClassName:"break"}))))}$.prototypes={loadSearchResults:h.a.func.isRequired,setCurrentPage:h.a.func.isRequired,setSearch:h.a.func.isRequired,searchInput:h.a.string.isRequired,searchResults:h.a.array.isRequired,currentMovie:h.a.array.isRequired,actions:h.a.object.isRequired,setMovie:h.a.func.isRequired};var K={loadSearchResults:A,setSearch:T,setMovie:x,setCurrentPage:L},Q=Object(m.b)((function(e){return{searchInput:e.homePageReducer.searchInput,searchResults:e.homePageReducer.searchResults,currentMovie:e.homePageReducer.currentMovie,currentPage:e.homePageReducer.currentPage,totalPages:e.homePageReducer.totalPages}}),K)($);var Z=function(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),a=t[0],c=t[1],o="https://cors-anywhere.herokuapp.com/";return Object(n.useEffect)((function(){function e(){return(e=Object(g.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o,"https://api.themoviedb.org/3/movie/popular?api_key=67b347978ffe14fc5d6f8a664a1829f2&language=en-US&page=1\n "));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c(a.results);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("div",{className:"popular-container"},r.a.createElement("h1",null,"Popular movies"),r.a.createElement(J,{movieList:a}))},ee=(a(64),a(39)),te=a.n(ee),ae=a(40),ne=a.n(ae);a(90);function re(e){var t=e.closeMovieInfo,a=e.currentMovie,c=e.genres,o=(e.searchTrailer,a.vote_average),i=a.id,u=a.release_date,m=a.backdrop_path,p=a.overview,h=a.poster_path,d=(a.genre_ids,a.title),E=Object(n.useState)(""),b=Object(v.a)(E,2),R=b[0],P=b[1],M=Object(n.useState)(!1),y=Object(v.a)(M,2),O=y[0],S=y[1];function w(){return(w=Object(g.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:""===R&&(t="".concat(s).concat(i,"/videos").concat(l),te.a.get(t).then((function(e){P(e.data.results[0].key)}))),S(!0);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return console.log(R),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container-profile",style:{backgroundImage:"url(https://image.tmdb.org/t/p/w1280/".concat(m,")")}},O?r.a.createElement(ne.a,{channel:"youtube",isOpen:O,videoId:R,onClose:function(){return S(!1)}}):r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"cross"},r.a.createElement("ion-icon",{size:"large",name:"close-outline",onClick:t,style:{color:"whitesmoke",cursor:"pointer"}})),r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"profile-img"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/".concat(h),alt:d}))),r.a.createElement("div",{className:"profile-text"},r.a.createElement("h2",null,d),r.a.createElement("ul",{className:"sub-title"},r.a.createElement("li",null,r.a.createElement("small",null,0===o?"No ratings yet":"Rating: ".concat(o)," ")),r.a.createElement("li",null," ",r.a.createElement("small",null,"Year: ",u.substr(0,4)," "))),r.a.createElement("br",null),r.a.createElement("ul",{className:"genres"},r.a.createElement("li",null,c.genres[0].name),r.a.createElement("li",null,c.genres[1].name),r.a.createElement("li",null,c.genres[2].name)),r.a.createElement("p",{className:"description"},p),r.a.createElement("ul",null,r.a.createElement("li",{className:"trailer-btn",onClick:function(){return w.apply(this,arguments)}},"trailer",r.a.createElement(U.a,null))))))))}re.prototypes={trailer:h.a.array.isRequired,searchTrailer:h.a.func.isRequired,currentMovie:h.a.array.isRequired};var ce,oe={searchTrailer:function(e){return e(k()),function(e){return fetch("".concat(s).concat(e,"/videos/").concat(l)).then(_).catch(I)}(ce).then((function(t){e(function(e){return{type:"SEARCH_TRAILER_SUCCESS",trailer:e}}(t))})).catch((function(t){throw e(q()),t}))}},ie=Object(m.b)((function(e){return{trailer:e.homePageReducer.trailer,currentMovie:e.homePageReducer.currentMovie,genres:e.homePageReducer.genres}}),oe)(re),le=(a(91),a(92),a(41)),ue=a.n(le);a(108);var se=function(e){var t=e.popularMovies,a={dots:!1,fade:!0,speed:200,slidesToShow:1,autoplay:!0,arrows:!1,className:"slides"};return r.a.createElement("div",{className:"App"},r.a.createElement(ue.a,a,t.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("div",{className:"carousel-item",key:t,style:{backgroundImage:"url(https://image.tmdb.org/t/p/w1280/".concat(e.backdrop_path,")")}},r.a.createElement("div",{className:"slider-text"},r.a.createElement("h1",null,"Movie DB"),r.a.createElement("h3",null,"browse through the biggest movie library"),r.a.createElement("a",{href:"#popularSection"},r.a.createElement("ion-icon",{size:"large",name:"arrow-down"})))))}))))};a(109);function me(e){var t=e.loadPopularMovies,a=e.loadTrendingMovies,c=e.loadGenres,o=e.genres,i=e.setMovie,l=e.popularMovies,u=e.trendingMovies,s=e.currentPage,m=e.setCurrentPage,p=e.totalPages;Object(n.useEffect)((function(){void 0!==o&&0!==o.length||c().catch((function(e){alert("loading trending movies"+e)}))}),[c,o,s]),Object(n.useEffect)((function(){void 0!==l&&0!==l.length||t(s).catch((function(e){alert("loading popular"+e)})),void 0!==u&&0!==u.length||a().catch((function(e){alert("loading trending movies"+e)}))}),[u,l,a,t,s]);var h=Object(b.f)();return r.a.createElement(r.a.Fragment,null,void 0===l||void 0===u?r.a.createElement(W,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(se,{popularMovies:l}),r.a.createElement("h1",{id:"popularSection"},"Popular movies"),r.a.createElement(J,{movieList:l,viewMovieInfo:function(e){var t=l.filter((function(t){return t.id===e})),a=t.length>0?t[0]:null;i(a),h.push("/home/".concat(a.title))}}),r.a.createElement(Y.a,{pageCount:p,pageRangeDisplayed:4,marginPagesDisplayed:0,onPageChange:function(e){console.log(s),console.log(e.selected+1),(e=e.selected+1)!==s&&(m(e),t(s))},containerClassName:"container",breakClassName:"break"})))}me.prototypes={loadPopularMovies:h.a.func.isRequired,loadTrendingMovies:h.a.func.isRequired,loadGenres:h.a.func.isRequired,setMovie:h.a.func.isRequired,popularMovies:h.a.array.isRequired,trendingMovies:h.a.object.isRequired,apiStatusReducer:h.a.number.isRequired,loading:h.a.bool.isRequired,currentMovie:h.a.array.isRequired,currentPage:h.a.number.isRequired,totalPages:h.a.number.isRequired};var pe={loadPopularMovies:function(e){return function(t){return t(k()),function(e){return fetch("".concat(u,"/movie/popular").concat(l,"&language=en-US&page=").concat(e)).then(_).catch(I)}(e).then((function(e){t(function(e){return{type:P,popularMovies:e}}(e))})).catch((function(e){throw t(q()),e}))}},loadTrendingMovies:function(){return function(e){return e(k()),fetch("".concat(u,"/trending/all/day").concat(l)).then(_).catch(I).then((function(t){e(function(e){return{type:R,trendingMovies:e}}(t))})).catch((function(t){throw e(q()),t}))}},loadGenres:function(){return function(e){return e(k()),fetch("".concat(u,"/genre/movie/list").concat(l,"&language=en-US")).then(_).catch(I).then((function(t){e(function(e){return{type:C,genres:e}}(t))})).catch((function(t){throw e(q()),t}))}},setMovie:x,setCurrentPage:L},he=Object(m.b)((function(e){return{trendingMovies:e.homePageReducer.trendingMovies,popularMovies:e.homePageReducer.popularMovies,currentMovie:e.homePageReducer.currentMovie,currentPage:e.homePageReducer.currentPage,totalPages:e.homePageReducer.totalPages,loading:e.apiCallsInProgress>0}}),pe)(me),de=function(){return r.a.createElement("h1",null,"Oops! page not found.")},fe=function(){return r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/",component:he}),r.a.createElement(b.a,{exact:!0,path:"/home",component:he}),r.a.createElement(b.a,{path:"/home/:currentMovie",component:ie}),r.a.createElement(b.a,{exact:!0,path:"/Movie-browse",component:he}),r.a.createElement(b.a,{exact:!0,path:"/popular",component:Z}),r.a.createElement(b.a,{exact:!0,path:"/top5"}),r.a.createElement(b.a,{path:"/search/:name",component:Q}),r.a.createElement(b.a,{path:"/movieProfile/:currentMovie",component:ie}),r.a.createElement(b.a,{component:de}))};a(110);function ge(){return r.a.createElement("div",{className:"App"},r.a.createElement(V,null),r.a.createElement(fe,null))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ve=a(15),Ee=a(4),be={searchInput:"",currentPage:1,currentMovieProfile:null,apiCallsInProgress:0,currentMovie:[],loading:!1};function Re(e){return"_SUCCESS"===e.substring(e.length-8)}var Pe=Object(ve.c)({homePageReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(Ee.a)(Object(Ee.a)({},e),{},{trendingMovies:t.trendingMovies.results,totalPages:t.trendingMovies.total_pages});case O:return Object(Ee.a)(Object(Ee.a)({},e),{},{currentMovie:t.currentMovie});case P:return Object(Ee.a)(Object(Ee.a)({},e),{},{popularMovies:t.popularMovies.results,totalPages:t.popularMovies.total_pages});case S:return Object(Ee.a)(Object(Ee.a)({},e),{},{searchInput:t.payload});case w:return Object(Ee.a)(Object(Ee.a)({},e),{},{searchResults:t.searchResults.results,totalPages:t.searchResults.total_pages});case j:return Object(Ee.a)(Object(Ee.a)({},e),{},{currentPage:t.currentPage});case C:return Object(Ee.a)(Object(Ee.a)({},e),{},{genres:t.genres});default:return e}},apiStatusReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be.apiCallsInProgress,t=arguments.length>1?arguments[1]:void 0;return t.type===M?e+1:Re(t.type)||t.type===y?e-1:e}}),Me=a(42),ye=a.n(Me),Oe=a(43);a(115);var Se=function(e){var t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ve.d;return Object(ve.e)(Pe,e,t(Object(ve.a)(Oe.a,ye()())))}();o.a.render(r.a.createElement(i.a,null,r.a.createElement(m.a,{store:Se},r.a.createElement(ge,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},50:function(e,t,a){},51:function(e,t,a){},57:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},64:function(e,t,a){}},[[116,1,2]]]);
//# sourceMappingURL=main.21acc79f.chunk.js.map