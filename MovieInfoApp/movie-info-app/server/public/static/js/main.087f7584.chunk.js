(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(8),o=a.n(i),r=(a(15),a(2)),l=a(3),c=a(6),m=a(4),u=a(5),d=a(1),h=(a(16),function(e){var t=e.onLoginButton,a=e.onLogin,s=e.disabled,i=e.loggedInUser;return n.a.createElement("div",{className:"login"},n.a.createElement("form",{onSubmit:t},n.a.createElement("input",{className:"loginBox",name:"text",onChange:function(e){return a(e.target.value)},value:i}),n.a.createElement("button",{className:"loginButton",disabled:s},"Login")))}),p=function(e){var t=e.movies,a=e.onMoreInfoClick,s=e.user;return n.a.createElement("ol",{className:"movieList"},t.map(function(e){return n.a.createElement("li",{className:"movie",key:e.id},n.a.createElement("div",{className:"moviePoster"},null!==e.poster_path?n.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/"+e.poster_path,alt:"Poster not available",width:"200",height:"300"}):n.a.createElement("img",{src:"https://in.bmscdn.com/iedb/movies/images/website/poster/large/the-mighty-mimalayan-man-et00009785-24-03-2017-19-30-07.jpg",alt:"Poster not available",width:"200",height:"300"})),n.a.createElement("div",{className:"movieInfo"},n.a.createElement("p",{className:"movieTitle"},e.title),n.a.createElement("p",{className:"movieRelDate"},e.release_date),n.a.createElement("p",{className:"popularity"},"Popularity: ",e.popularity),n.a.createElement("button",{className:"moreInfoButton",onClick:function(){return a(e.id,s)}},"More Info")))}))},g=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"movieResults"},n.a.createElement("div",{className:"mListError"},n.a.createElement("p",{className:"mListErrorStatus"},this.props.status)),n.a.createElement("div",{className:"mListLoading"},n.a.createElement("p",{className:"mListLoadingMsg"},this.props.loading)),n.a.createElement("div",{className:"userDetails"},n.a.createElement("div",{className:"title"},n.a.createElement("p",{className:"appTitle"},"MovieFlixDB")),n.a.createElement("div",{className:"user"},n.a.createElement("p",{className:"username"},this.props.user)),n.a.createElement("div",{className:"displayWatchList"},n.a.createElement("button",{className:"watchListButton",onClick:this.props.onWatchListButtonClick},"Watch List")),n.a.createElement("div",{className:"logout"},n.a.createElement("button",{className:"logoutButton",onClick:this.props.onLogoutClick},"Logout"))),n.a.createElement("div",{className:"searchAndFilter"},n.a.createElement("div",{className:"searchMovie"},n.a.createElement("input",{className:"searchBox",name:"text",onKeyDown:this.props.onEnter,placeholder:"Search for your desired movie"})),n.a.createElement("div",{className:this.props.class},"Filter ",n.a.createElement("select",{value:this.value,onChange:this.props.onFilter},n.a.createElement("option",{value:"popularity"},"Popularity"),n.a.createElement("option",{value:"mostRecent"},"Newest"),n.a.createElement("option",{value:"leastRecent"},"Oldest")))),n.a.createElement("div",{className:"emptyList"},n.a.createElement("p",{className:"emptyListMsg"},this.props.isEmptyMessage)),n.a.createElement("div",{className:"movies"},n.a.createElement(p,{movies:this.props.movies,onMoreInfoClick:function(t,a){return e.props.onMoreInfoButtonClick(t,a)},user:this.props.user})))}}]),t}(n.a.Component),v=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"movieDetails"},n.a.createElement("div",{className:"mDetailsError"},n.a.createElement("p",{className:"mDetailsErrorStatus"},this.props.status)),n.a.createElement("div",{className:"mListLoading"},n.a.createElement("p",{className:"mListLoadingMsg"},this.props.loading)),n.a.createElement("div",{className:"moreInfoToHome"},n.a.createElement("button",{className:"moreInfoToHomeButton",onClick:this.props.onDetailsToHomeButtonClick},"Home")),n.a.createElement("div",{className:"moreInfo"},n.a.createElement("div",{className:"moreInfoPoster"},null!==this.props.movie.poster_path?n.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/"+this.props.movie.poster_path,alt:"Poster not available",width:"300",height:"500"}):n.a.createElement("img",{src:"https://in.bmscdn.com/iedb/movies/images/website/poster/large/the-mighty-mimalayan-man-et00009785-24-03-2017-19-30-07.jpg",alt:"Poster not available",width:"300",height:"500"})),n.a.createElement("div",{className:"moreDetails"},n.a.createElement("div",{className:"otherDetails"},n.a.createElement("p",{className:"mDetailsTitle"},this.props.movie.title),n.a.createElement("p",{className:"mDetailsRelDate"},this.props.movie.release_date),n.a.createElement("p",{className:"mDetailsOverview"},this.props.movie.overview),n.a.createElement("p",{className:"mDetailsVoteCount"},"Vote Count: ",this.props.movie.vote_count),n.a.createElement("p",{className:"mDetailsVoteAvg"},"Vote Avg: ",this.props.movie.vote_average)),n.a.createElement("div",{className:"extraDetails"},0!==this.props.details.length&&n.a.createElement("a",{className:"trailer",href:"https://www.youtube.com/watch?v="+this.props.details[0].key,target:"_blank",rel:"noopener noreferrer"},"Trailer"),n.a.createElement("button",{className:this.props.class,onClick:function(){return e.props.onAddWatchListClick(e.props.movie.id,e.props.movie.title,e.props.movie.release_date,e.props.movie.poster,e.props.movie.vote_count,e.props.movie.vote_average,e.props.movie.overview)},disabled:this.props.addDisabled},"Add to Watchlist"),n.a.createElement("button",{className:"removeWatchList",onClick:function(){return e.props.onRemoveWatchListClick(e.props.movie.id)},disabled:this.props.removeDisabled},"Remove From Watchlist")))))}}]),t}(n.a.Component),f=function(e){var t=e.list,a=e.onRemoveClick;return n.a.createElement("ol",{className:"movieWatchList"},t.map(function(e){return n.a.createElement("li",{className:"watchListMovie",key:e.id},n.a.createElement("div",{className:"poster"},void 0!==e.poster?n.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/"+e.poster,alt:"Poster not available",width:"300",height:"450"}):n.a.createElement("img",{src:"https://in.bmscdn.com/iedb/movies/images/website/poster/large/the-mighty-mimalayan-man-et00009785-24-03-2017-19-30-07.jpg",alt:"Poster not available",width:"300",height:"450"})),n.a.createElement("div",{className:"details"},n.a.createElement("p",{className:"wListTitle"},e.title),n.a.createElement("p",{className:"wListRelDate"},e.relDate),n.a.createElement("p",{className:"wListOverview"},e.overview),n.a.createElement("p",{className:"wListVoteCount"},"Vote Count: ",e.voteCount),n.a.createElement("p",{className:"wListVoteAvg"},"Vote Avg: ",e.voteAvg),n.a.createElement("button",{className:"remove",onClick:function(){return a(e.id)}},"Remove")))}))},E=function(e){var t=e.list,a=e.onRemoveButtonClick,s=e.onWatchListToHomeButtonClick,i=e.isWatchListEmptyMessage,o=e.loading,r=e.status;return n.a.createElement("div",{className:"watchList"},n.a.createElement("div",{className:"wListError"},n.a.createElement("p",{className:"wListErrorStatus"},r)),n.a.createElement("div",{className:"wListLoading"},n.a.createElement("p",{className:"wListLoadingMsg"},o)),n.a.createElement("div",{className:"homeButton"},n.a.createElement("button",{className:"watchListToHome",onClick:s},"Home")),n.a.createElement("div",{className:"isListEmpty"},n.a.createElement("p",{className:"watchListEmpty"},i)),n.a.createElement("div",{className:"list"},n.a.createElement(f,{list:t,onRemoveClick:function(e){return a(e)}})))},L=function(e){return fetch("/movies/".concat(e)).catch(function(e){return Promise.reject({error:"network",err:e})}).then(function(e){return e.ok?e.json():Promise.reject({error:"notFound",err:e.statusText})})},w=function(e){return fetch("/movieDetails/".concat(e)).catch(function(e){return Promise.reject({error:"network",err:e})}).then(function(e){return e.ok?e.json():Promise.reject({error:"unknown",err:e.statusText})})},k=function(e,t,a,s,n,i,o,r){return fetch("/watchList/",{method:"POST",headers:new Headers({"content-type":"application/json"}),body:JSON.stringify({id:e,user:t,title:a,relDate:s,poster:n,voteCount:i,voteAvg:o,overview:r})}).catch(function(e){return Promise.reject({error:"network",err:e})}).then(function(e){return e.ok?e.json():Promise.reject({error:"unknown",err:e.statusText})})},b=function(e,t){return fetch("/notWatchList/",{method:"POST",headers:new Headers({"content-type":"application/json"}),body:JSON.stringify({id:e,user:t})}).catch(function(e){return Promise.reject({error:"network",err:e})}).then(function(e){return e.ok?e.json():Promise.reject({error:"unknown",err:e.statusText})})},y=function(e,t){return fetch("/watchList/".concat(e,"&").concat(t)).catch(function(e){return Promise.reject({error:"network",err:e})}).then(function(e){return e.ok?e.json():Promise.reject({error:"unknown",err:e.statusText})})},N=function(e){return fetch("/userWatchList/".concat(e)).catch(function(e){return Promise.reject({error:"network",err:e})}).then(function(e){return e.ok?e.json():Promise.reject({error:"unknown",err:e.statusText})})},C=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).displayMovies=function(t){L(t).then(function(t){var a=t.results;0===a.length?e.setState({movies:[],isEmptyMessage:"No results found",status:""}):(a.sort(function(e,t){return t.popularity-e.popularity}),e.setState({movies:a,isEmptyMessage:"",status:""}))}).catch(function(t){"network"===t.error&&e.setState({status:"The network failed, please try again"}),"notFound"===t.error&&e.setState({movies:[],isEmptyMessage:"No results found",status:""})})},e.handleLogin=function(t){e.setState({loggedInUser:t,status:""})},e.handleLoginButton=function(t){e.setState({loggedIn:!0}),t.preventDefault()},e.handleKeyPress=function(t){13!==t.keyCode||t.target.value.replace(/\s/g,"").length?13===t.keyCode&&""!==t.target.value&&(e.displayMovies(t.target.value),t.target.value=""):e.setState({isEmptyMessage:"Please enter a movie title"})},e.handleFilter=function(t){if("mostRecent"===t.target.value){var a=e.state.movies;a.sort(function(e,t){return new Date(t.release_date)-new Date(e.release_date)}),e.setState({movies:a})}else if("leastRecent"===t.target.value){var s=e.state.movies;s.sort(function(e,t){return new Date(e.release_date)-new Date(t.release_date)}),e.setState({movies:s})}else if("popularity"===t.target.value){var n=e.state.movies;n.sort(function(e,t){return t.popularity-e.popularity}),e.setState({movies:n})}},e.handleMoreInfoClick=function(t,a){e.setState({loading:"Loading..."},function(){w(t).then(function(t){var a=t.results,s=t.id,n=e.state.movies.find(function(e){return e.id===s});e.setState({details:a,selectedMovie:n,showDetails:!0,status:"",loading:""})}).catch(function(t){"network"===t.error&&e.setState({status:"The network failed, please try again",loading:""}),"unknown"===t.error&&e.setState({status:"An error occured, please try again",loading:""})}),y(t,a).then(function(a){for(var s=a.length-1;s>=0;s--)a.title===t?e.setState({isAddedToWatchList:!0,status:"",loading:""}):e.setState({isAddedToWatchList:!1,status:"",loading:""})}).catch(function(t){"network"===t.error&&e.setState({status:"The network failed, please try again",loading:""}),"unknown"===t.error&&e.setState({status:"An error occured, please try again",loading:""})})})},e.handleDetailsToHomeClick=function(){e.setState({showDetails:!1})},e.handleWatchListToHomeButtonClick=function(){e.setState({showDetails:!1,showWatchList:!1,isEmptyMessage:""})},e.handleAddWatchListClick=function(t,a,s,n,i,o,r){var l=e.state.loggedInUser;k(t,l,a,s,n,i,o,r).then(function(){e.setState({status:""})}).catch(function(t){"network"===t.error&&e.setState({isAddedToWatchList:!1,status:"The network failed, please try again"}),"unknown"===t.error&&e.setState({isAddedToWatchList:!1,status:"An error occured, please try again"})}),e.setState({isAddedToWatchList:!0,status:""})},e.handleRemoveWatchListClick=function(t){var a=e.state.loggedInUser;b(t,a).then(function(){e.setState({status:""})}).catch(function(t){"network"===t.error&&e.setState({isAddedToWatchList:!0,status:"The network failed, please try again"}),"unknown"===t.error&&e.setState({isAddedToWatchList:!0,status:"An error occured, please try again"})}),e.setState({isAddedToWatchList:!1,status:""})},e.handleRemoveButtonClick=function(t){var a=e.state.loggedInUser;e.setState({loading:"Loading..."},function(){b(t,a).then(function(){e.setState({status:""})}).catch(function(t){"network"===t.error&&e.setState({status:"The network failed, please try again",loading:""}),"unknown"===t.error&&e.setState({status:"An error occured, please try again",loading:""})}),y(t,a).then(function(t){0===t.length?e.setState({watchList:t,showWatchList:!0,showDetails:!1,isAddedToWatchList:!1,isWatchListEmptyMessage:"Watchlist is Empty",loading:"",status:""}):e.setState({watchList:t,showWatchList:!0,showDetails:!1,isAddedToWatchList:!1,isWatchListEmptyMessage:"",loading:"",status:""})}).catch(function(t){"network"===t.error&&e.setState({status:"The network failed, please try again",loading:""}),"unknown"===t.error&&e.setState({status:"An error occured, please try again",loading:""})})})},e.handleWatchListButtonClick=function(){var t=e.state.loggedInUser;e.setState({loading:"Loading..."},function(){N(t).then(function(t){0===t.length?e.setState({watchList:t,showWatchList:!0,showDetails:!1,isWatchListEmptyMessage:"Watchlist is Empty",loading:"",status:""}):e.setState({watchList:t,showWatchList:!0,showDetails:!1,isWatchListEmptyMessage:"",loading:"",status:""})}).catch(function(t){"network"===t.error&&e.setState({status:"The network failed, please try again",loading:""}),"unknown"===t.error&&e.setState({status:"An error occured, please try again",loading:""})})})},e.handleLogoutClick=function(){e.setState({loggedIn:!1,loggedInUser:"",movies:[]})},e.state={movies:[],details:[],watchList:[],selectedMovie:{},showDetails:!1,showWatchList:!1,loggedIn:!1,loggedInUser:"",isAddedToWatchList:!1,isEmptyMessage:"",isWatchListEmptyMessage:"",loading:"",status:""},e.handleLogin=e.handleLogin.bind(Object(d.a)(Object(d.a)(e))),e.handleLoginButton=e.handleLoginButton.bind(Object(d.a)(Object(d.a)(e))),e.handleKeyPress=e.handleKeyPress.bind(Object(d.a)(Object(d.a)(e))),e.handleFilter=e.handleFilter.bind(Object(d.a)(Object(d.a)(e))),e.handleMoreInfoClick=e.handleMoreInfoClick.bind(Object(d.a)(Object(d.a)(e))),e.handleDetailsToHomeClick=e.handleDetailsToHomeClick.bind(Object(d.a)(Object(d.a)(e))),e.handleAddWatchListClick=e.handleAddWatchListClick.bind(Object(d.a)(Object(d.a)(e))),e.handleWatchListButtonClick=e.handleWatchListButtonClick.bind(Object(d.a)(Object(d.a)(e))),e.handleRemoveWatchListClick=e.handleRemoveWatchListClick.bind(Object(d.a)(Object(d.a)(e))),e.handleLogoutClick=e.handleLogoutClick.bind(Object(d.a)(Object(d.a)(e))),e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.showDetails,a=this.state.loggedIn,s=this.state.showWatchList;if(!a)return n.a.createElement("div",{className:"loginPage"},n.a.createElement(h,{onLoginButton:this.handleLoginButton,onLogin:this.handleLogin,disabled:!this.state.loggedInUser,loggedInUser:this.state.loggedInUser}));if(!t&&a&&!s){var i=this.state.movies.length?"filterVisible":"filterNotVisible";return n.a.createElement("div",{className:"movieSearchResults"},n.a.createElement(g,{movies:this.state.movies,user:this.state.loggedInUser,onEnter:this.handleKeyPress,onMoreInfoButtonClick:function(t,a){return e.handleMoreInfoClick(t,a)},onWatchListButtonClick:this.handleWatchListButtonClick,onLogoutClick:this.handleLogoutClick,onFilter:this.handleFilter,class:i,isEmptyMessage:this.state.isEmptyMessage,loading:this.state.loading,status:this.state.status}))}if(t&&a){var o=this.state.isAddedToWatchList?"addedToWatchList":"notAddedToWatchList";return n.a.createElement("div",{className:"movieSearchDetails"},n.a.createElement(v,{movie:this.state.selectedMovie,details:this.state.details,onDetailsToHomeButtonClick:this.handleDetailsToHomeClick,onAddWatchListClick:function(t,a,s,n,i,o,r){return e.handleAddWatchListClick(t,a,s,n,i,o,r)},onRemoveWatchListClick:function(t){return e.handleRemoveWatchListClick(t)},class:o,removeDisabled:!this.state.isAddedToWatchList,addDisabled:this.state.isAddedToWatchList,status:this.state.status,loading:this.state.loading}))}return s&&a?n.a.createElement("div",{className:"userWatchList"},n.a.createElement(E,{list:this.state.watchList,onRemoveButtonClick:function(t){return e.handleRemoveButtonClick(t)},onWatchListToHomeButtonClick:this.handleWatchListToHomeButtonClick,isWatchListEmptyMessage:this.state.isWatchListEmptyMessage,loading:this.state.loading,status:this.state.status})):void 0}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.087f7584.chunk.js.map