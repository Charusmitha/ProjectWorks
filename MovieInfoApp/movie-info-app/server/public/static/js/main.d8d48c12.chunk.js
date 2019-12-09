(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var s=a(0),o=a.n(s),n=a(8),i=a.n(n),r=(a(15),a(2)),l=a(3),c=a(6),m=a(4),d=a(5),u=a(1),h=(a(16),function(e){var t=e.onLoginButton,a=e.onLogin,s=e.disabled,n=e.loggedInUser;return o.a.createElement("div",{className:"login"},o.a.createElement("form",{onSubmit:t},o.a.createElement("input",{className:"loginBox",name:"text",onChange:function(e){return a(e.target.value)},value:n}),o.a.createElement("button",{className:"loginButton",disabled:s},"Login")))}),v=function(e){var t=e.movies,a=e.onMoreInfoClick,s=e.user;return o.a.createElement("ol",{className:"movieList"},t.map(function(e){return o.a.createElement("li",{className:"movie",key:e.id},o.a.createElement("div",{className:"moviePoster"},o.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/"+e.poster_path,onError:function(e){e.target.src="https://in.bmscdn.com/iedb/movies/images/website/poster/large/the-mighty-mimalayan-man-et00009785-24-03-2017-19-30-07.jpg"},alt:"Poster not available",width:"200",height:"300"})),o.a.createElement("div",{className:"movieInfo"},o.a.createElement("p",{className:"movieTitle"},e.title),o.a.createElement("p",{className:"movieRelDate"},e.release_date),o.a.createElement("p",{className:"popularity"},"Popularity: ",e.popularity),o.a.createElement("button",{className:"moreInfoButton",onClick:function(){return a(e.id,s)}},"More Info")))}))},p=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"movieResults"},o.a.createElement("div",{className:"mListError"},o.a.createElement("p",{className:"mListErrorStatus"},this.props.status)),o.a.createElement("div",{className:"mListLoading"},o.a.createElement("p",{className:"mListLoadingMsg"},this.props.loading)),o.a.createElement("div",{className:"userDetails"},o.a.createElement("div",{className:"title"},o.a.createElement("p",{className:"appTitle"},"Movie Collection")),o.a.createElement("div",{className:"user"},o.a.createElement("p",{className:"username"},this.props.user)),o.a.createElement("div",{className:"displayWatchList"},o.a.createElement("button",{className:"watchListButton",onClick:this.props.onWatchListButtonClick},"Watch List")),o.a.createElement("div",{className:"logout"},o.a.createElement("button",{className:"logoutButton",onClick:this.props.onLogoutClick},"Logout"))),o.a.createElement("div",{className:"searchAndFilter"},o.a.createElement("div",{className:"searchMovie"},o.a.createElement("input",{className:"searchBox",name:"text",onKeyDown:this.props.onEnter,placeholder:"Search for your desired movie"})),o.a.createElement("div",{className:this.props.class},"Filter ",o.a.createElement("select",{value:this.value,onChange:this.props.onFilter},o.a.createElement("option",{value:"popularity"},"Popularity"),o.a.createElement("option",{value:"mostRecent"},"Most Recent"),o.a.createElement("option",{value:"leastRecent"},"Least Recent")))),o.a.createElement("div",{className:"emptyList"},o.a.createElement("p",{className:"emptyListMsg"},this.props.isEmptyMessage)),o.a.createElement("div",{className:"movies"},o.a.createElement(v,{movies:this.props.movies,onMoreInfoClick:function(t,a){return e.props.onMoreInfoButtonClick(t,a)},user:this.props.user})))}}]),t}(o.a.Component),g=function(e){var t=e.id,a=e.status,s=e.loading,n=e.onDetailsToHomeButton,i=e.title,r=e.relDate,l=e.overview,c=e.voteCount,m=e.voteAvg,d=e.trailerLink,u=e.classTitle,h=e.onAddWatchList,v=e.addButtonDisabled,p=e.onRemoveWatchList,g=e.removeButtonDisabled,E=e.poster;return o.a.createElement("div",{className:"movieDetails"},o.a.createElement("div",{className:"mDetailsError"},o.a.createElement("p",{className:"mDetailsErrorStatus"},a)),o.a.createElement("div",{className:"mListLoading"},o.a.createElement("p",{className:"mListLoadingMsg"},s)),o.a.createElement("div",{className:"moreInfoToHome"},o.a.createElement("button",{className:"moreInfoToHomeButton",onClick:n},"Home")),o.a.createElement("div",{className:"moreInfo"},o.a.createElement("div",{className:"moreInfoPoster"},o.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/"+E,onError:function(e){e.target.src="https://in.bmscdn.com/iedb/movies/images/website/poster/large/the-mighty-mimalayan-man-et00009785-24-03-2017-19-30-07.jpg"},alt:"Poster not available",width:"300",height:"500"})),o.a.createElement("div",{className:"moreDetails"},o.a.createElement("div",{className:"otherDetails"},o.a.createElement("p",{className:"mDetailsTitle"},i),o.a.createElement("p",{className:"mDetailsRelDate"},r),o.a.createElement("p",{className:"mDetailsOverview"},l),o.a.createElement("p",{className:"mDetailsVoteCount"},"Vote Count: ",c),o.a.createElement("p",{className:"mDetailsVoteAvg"},"Vote Avg: ",m)),o.a.createElement("div",{className:"extraDetails"},o.a.createElement("a",{className:"trailer",href:"https://www.youtube.com/watch?v="+d,target:"_blank",rel:"noopener noreferrer"},"Trailer"),o.a.createElement("button",{className:u,onClick:function(){return h(t,i,r,E,c,m,l)},disabled:v},"Add to Watchlist"),o.a.createElement("button",{className:"removeWatchList",onClick:function(){return p(t)},disabled:g},"Remove From Watchlist")))))},E=function(e){var t=e.id,a=e.status,s=e.loading,n=e.onDetailsToHomeButton,i=e.title,r=e.relDate,l=e.overview,c=e.voteCount,m=e.voteAvg,d=e.classTitle,u=e.onAddWatchList,h=e.addButtonDisabled,v=e.onRemoveWatchList,p=e.removeButtonDisabled,g=e.poster;return o.a.createElement("div",{className:"movieDetails"},o.a.createElement("div",{className:"mDetailsError"},o.a.createElement("p",{className:"mDetailsErrorStatus"},a)),o.a.createElement("div",{className:"mListLoading"},o.a.createElement("p",{className:"mListLoadingMsg"},s)),o.a.createElement("div",{className:"moreInfoToHome"},o.a.createElement("button",{className:"moreInfoToHomeButton",onClick:n},"Home")),o.a.createElement("div",{className:"moreInfo"},o.a.createElement("div",{className:"moreInfoPoster"},o.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/"+g,onError:function(e){e.target.src="https://in.bmscdn.com/iedb/movies/images/website/poster/large/the-mighty-mimalayan-man-et00009785-24-03-2017-19-30-07.jpg"},alt:"Poster not available",width:"300",height:"500"})),o.a.createElement("div",{className:"moreDetails"},o.a.createElement("div",{className:"otherDetails"},o.a.createElement("p",{className:"mDetailsTitle"},i),o.a.createElement("p",{className:"mDetailsRelDate"},r),o.a.createElement("p",{className:"mDetailsOverview"},l),o.a.createElement("p",{className:"mDetailsVoteCount"},"Vote Count: ",c),o.a.createElement("p",{className:"mDetailsVoteAvg"},"Vote Avg: ",m)),o.a.createElement("div",{className:"extraDetails"},o.a.createElement("button",{className:d,onClick:function(){return u(t,i,r,g,c,m,l)},disabled:h},"Add to Watchlist"),o.a.createElement("button",{className:"removeWatchList",onClick:function(){return v(t)},disabled:p},"Remove From Watchlist")))))},f=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return void 0!==this.props.details[0]?o.a.createElement("div",{className:"movieDetails"},o.a.createElement(g,{id:this.props.movie.id,title:this.props.movie.title,relDate:this.props.movie.release_date,poster:this.props.movie.poster_path,overview:this.props.movie.overview,voteCount:this.props.movie.vote_count,voteAvg:this.props.movie.vote_average,status:this.props.status,loading:this.props.loading,onDetailsToHomeButton:this.props.onDetailsToHomeButtonClick,onAddWatchList:function(t,a,s,o,n,i,r){return e.props.onAddWatchListClick(t,a,s,o,n,i,r)},onRemoveWatchList:function(t){return e.props.onRemoveWatchListClick(t)},addButtonDisabled:this.props.addDisabled,removeButtonDisabled:this.props.removeDisabled,trailerLink:this.props.details[0].key,classTitle:this.props.class})):o.a.createElement("div",{className:"movieDetails"},o.a.createElement(E,{id:this.props.movie.id,title:this.props.movie.title,relDate:this.props.movie.release_date,poster:this.props.movie.poster_path,overview:this.props.movie.overview,voteCount:this.props.movie.vote_count,voteAvg:this.props.movie.vote_average,status:this.props.status,loading:this.props.loading,onDetailsToHomeButton:this.props.onDetailsToHomeButtonClick,onAddWatchList:function(t,a,s,o,n,i,r){return e.props.onAddWatchListClick(t,a,s,o,n,i,r)},onRemoveWatchList:function(t){return e.props.onRemoveWatchListClick(t)},addButtondisabled:this.props.addDisabled,removeButtonDisabled:this.props.removeDisabled,classTitle:this.props.class}),"/>")}}]),t}(o.a.Component),L=function(e){var t=e.list,a=e.onRemoveClick;return o.a.createElement("ol",{className:"movieWatchList"},t.map(function(e){return o.a.createElement("li",{className:"watchListMovie",key:e.id},o.a.createElement("div",{className:"poster"},o.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/"+e.poster,onError:function(e){e.target.src="https://in.bmscdn.com/iedb/movies/images/website/poster/large/the-mighty-mimalayan-man-et00009785-24-03-2017-19-30-07.jpg"},alt:"Poster not available",width:"300",height:"400"})),o.a.createElement("div",{className:"details"},o.a.createElement("p",{className:"wListTitle"},e.title),o.a.createElement("p",{className:"wListRelDate"},e.relDate),o.a.createElement("p",{className:"wListOverview"},e.overview),o.a.createElement("p",{className:"wListVoteCount"},"Vote Count: ",e.voteCount),o.a.createElement("p",{className:"wListVoteAvg"},"Vote Avg: ",e.voteAvg),o.a.createElement("button",{className:"remove",onClick:function(){return a(e.id)}},"Remove")))}))},w=function(e){var t=e.list,a=e.onRemoveButtonClick,s=e.onWatchListToHomeButtonClick,n=e.isWatchListEmptyMessage,i=e.loading,r=e.status;return o.a.createElement("div",{className:"watchList"},o.a.createElement("div",{className:"wListError"},o.a.createElement("p",{className:"wListErrorStatus"},r)),o.a.createElement("div",{className:"wListLoading"},o.a.createElement("p",{className:"wListLoadingMsg"},i)),o.a.createElement("div",{className:"homeButton"},o.a.createElement("button",{className:"watchListToHome",onClick:s},"Home")),o.a.createElement("div",{className:"isListEmpty"},o.a.createElement("p",{className:"watchListEmpty"},n)),o.a.createElement("div",{className:"list"},o.a.createElement(L,{list:t,onRemoveClick:function(e){return a(e)}})))},k=function(e){return fetch("/movie/".concat(e)).catch(function(e){return Promise.reject({error:"network",err:e})}).then(function(e){return e.ok?e.json():Promise.reject({error:"notFound",err:e.statusText})})},b=function(e){return fetch("/movieDetails/".concat(e)).catch(function(e){return Promise.reject({error:"network",err:e})}).then(function(e){return e.ok?e.json():Promise.reject({error:"unknown",err:e.statusText})})},N=function(e,t,a,s,o,n,i,r){return fetch("/watchList/",{method:"POST",headers:new Headers({"content-type":"application/json"}),body:JSON.stringify({id:e,user:t,title:a,relDate:s,poster:o,voteCount:n,voteAvg:i,overview:r})}).catch(function(e){return Promise.reject({error:"network",err:e})}).then(function(e){return e.ok?e.json():Promise.reject({error:"unknown",err:e.statusText})})},y=function(e,t){return fetch("/notWatchList/",{method:"POST",headers:new Headers({"content-type":"application/json"}),body:JSON.stringify({id:e,user:t})}).catch(function(e){return Promise.reject({error:"network",err:e})}).then(function(e){return e.ok?e.json():Promise.reject({error:"unknown",err:e.statusText})})},C=function(){return fetch("/watchList/").catch(function(e){return Promise.reject({error:"network",err:e})}).then(function(e){return e.ok?e.json():Promise.reject({error:"unknown",err:e.statusText})})},W=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).displayMovies=function(t){k(t).then(function(t){var a=t.results;0===a.length?e.setState({movies:[],isEmptyMessage:"No results found",status:""}):(a.sort(function(e,t){return t.popularity-e.popularity}),e.setState({movies:a,isEmptyMessage:"",status:""}))}).catch(function(t){"network"===t.error&&e.setState({status:"The network failed, please try again"}),"notFound"===t.error&&e.setState({movies:[],isEmptyMessage:"No results found",status:""})})},e.handleLogin=function(t){e.setState({loggedInUser:t,status:""})},e.handleLoginButton=function(t){e.setState({loggedIn:!0}),t.preventDefault()},e.handleKeyPress=function(t){13!==t.keyCode||t.target.value.replace(/\s/g,"").length?13===t.keyCode&&""!==t.target.value&&(e.displayMovies(t.target.value),t.target.value=""):e.setState({isEmptyMessage:"Please enter a movie title"})},e.handleFilter=function(t){if("mostRecent"===t.target.value){var a=e.state.movies;a.sort(function(e,t){return new Date(t.release_date)-new Date(e.release_date)}),e.setState({movies:a})}else if("leastRecent"===t.target.value){var s=e.state.movies;s.sort(function(e,t){return new Date(e.release_date)-new Date(t.release_date)}),e.setState({movies:s})}else if("popularity"===t.target.value){var o=e.state.movies;o.sort(function(e,t){return t.popularity-e.popularity}),e.setState({movies:o})}},e.handleMoreInfoClick=function(t,a){e.setState({loading:"Loading..."},function(){b(t).then(function(t){var a=t.results,s=t.id,o=e.state.movies.find(function(e){return e.id===s});e.setState({details:a,selectedMovie:o,showDetails:!0,status:"",loading:""})}).catch(function(t){"network"===t.error&&e.setState({status:"The network failed, please try again",loading:""}),"unknown"===t.error&&e.setState({status:"An error occured, please try again",loading:""})}),C().then(function(s){for(var o=s.length-1;o>=0;o--){if(s[o].id===t&&s[o].user===a){e.setState({isAddedToWatchList:!0,status:"",loading:""});break}e.setState({isAddedToWatchList:!1,status:"",loading:""})}}).catch(function(t){"network"===t.error&&e.setState({status:"The network failed, please try again",loading:""}),"unknown"===t.error&&e.setState({status:"An error occured, please try again",loading:""})})})},e.handleDetailsToHomeClick=function(){e.setState({showDetails:!1})},e.handleWatchListToHomeButtonClick=function(){e.setState({showDetails:!1,showWatchList:!1,isEmptyMessage:""})},e.handleAddWatchListClick=function(t,a,s,o,n,i,r){var l=e.state.loggedInUser;N(t,l,a,s,o,n,i,r).then(function(){e.setState({status:""})}).catch(function(t){"network"===t.error&&e.setState({isAddedToWatchList:!1,status:"The network failed, please try again"}),"unknown"===t.error&&e.setState({isAddedToWatchList:!1,status:"An error occured, please try again"})}),e.setState({isAddedToWatchList:!0,status:""})},e.handleRemoveWatchListClick=function(t){var a=e.state.loggedInUser;y(t,a).then(function(){e.setState({status:""})}).catch(function(t){"network"===t.error&&e.setState({isAddedToWatchList:!0,status:"The network failed, please try again"}),"unknown"===t.error&&e.setState({isAddedToWatchList:!0,status:"An error occured, please try again"})}),e.setState({isAddedToWatchList:!1,status:""})},e.handleRemoveButtonClick=function(t){var a=e.state.loggedInUser;e.setState({loading:"Loading..."},function(){y(t,a).then(function(){e.setState({status:""})}).catch(function(t){"network"===t.error&&e.setState({status:"The network failed, please try again",loading:""}),"unknown"===t.error&&e.setState({status:"An error occured, please try again",loading:""})}),C().then(function(t){for(var s=t.length-1;s>=0;s--)t[s].user!==a&&t.splice(s,1);0===t.length?e.setState({watchList:t,showWatchList:!0,showDetails:!1,isAddedToWatchList:!1,isWatchListEmptyMessage:"Watchlist is Empty",loading:"",status:""}):e.setState({watchList:t,showWatchList:!0,showDetails:!1,isAddedToWatchList:!1,isWatchListEmptyMessage:"",loading:"",status:""})}).catch(function(t){"network"===t.error&&e.setState({status:"The network failed, please try again",loading:""}),"unknown"===t.error&&e.setState({status:"An error occured, please try again",loading:""})})})},e.handleWatchListButtonClick=function(){var t=e.state.loggedInUser;e.setState({loading:"Loading..."},function(){C().then(function(a){for(var s=a.length-1;s>=0;s--)a[s].user!==t&&a.splice(s,1);0===a.length?e.setState({watchList:a,showWatchList:!0,showDetails:!1,isWatchListEmptyMessage:"Watchlist is Empty",loading:"",status:""}):e.setState({watchList:a,showWatchList:!0,showDetails:!1,isWatchListEmptyMessage:"",loading:"",status:""})}).catch(function(t){"network"===t.error&&e.setState({status:"The network failed, please try again",loading:""}),"unknown"===t.error&&e.setState({status:"An error occured, please try again",loading:""})})})},e.handleLogoutClick=function(){e.setState({loggedIn:!1,loggedInUser:"",movies:[]})},e.state={movies:[],details:[],watchList:[],selectedMovie:{},showDetails:!1,showWatchList:!1,loggedIn:!1,loggedInUser:"",isAddedToWatchList:!1,isEmptyMessage:"",isWatchListEmptyMessage:"",loading:"",status:""},e.handleLogin=e.handleLogin.bind(Object(u.a)(Object(u.a)(e))),e.handleLoginButton=e.handleLoginButton.bind(Object(u.a)(Object(u.a)(e))),e.handleKeyPress=e.handleKeyPress.bind(Object(u.a)(Object(u.a)(e))),e.handleFilter=e.handleFilter.bind(Object(u.a)(Object(u.a)(e))),e.handleMoreInfoClick=e.handleMoreInfoClick.bind(Object(u.a)(Object(u.a)(e))),e.handleDetailsToHomeClick=e.handleDetailsToHomeClick.bind(Object(u.a)(Object(u.a)(e))),e.handleAddWatchListClick=e.handleAddWatchListClick.bind(Object(u.a)(Object(u.a)(e))),e.handleWatchListButtonClick=e.handleWatchListButtonClick.bind(Object(u.a)(Object(u.a)(e))),e.handleRemoveWatchListClick=e.handleRemoveWatchListClick.bind(Object(u.a)(Object(u.a)(e))),e.handleLogoutClick=e.handleLogoutClick.bind(Object(u.a)(Object(u.a)(e))),e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.showDetails,a=this.state.loggedIn,s=this.state.showWatchList;if(!a)return o.a.createElement("div",{className:"loginPage"},o.a.createElement(h,{onLoginButton:this.handleLoginButton,onLogin:this.handleLogin,disabled:!this.state.loggedInUser,loggedInUser:this.state.loggedInUser}));if(!t&&a&&!s){var n=this.state.movies.length?"filterVisible":"filterNotVisible";return o.a.createElement("div",{className:"movieSearchResults"},o.a.createElement(p,{movies:this.state.movies,user:this.state.loggedInUser,onEnter:this.handleKeyPress,onMoreInfoButtonClick:function(t,a){return e.handleMoreInfoClick(t,a)},onWatchListButtonClick:this.handleWatchListButtonClick,onLogoutClick:this.handleLogoutClick,onFilter:this.handleFilter,class:n,isEmptyMessage:this.state.isEmptyMessage,loading:this.state.loading,status:this.state.status}))}if(t&&a){var i=this.state.isAddedToWatchList?"addedToWatchList":"notAddedToWatchList";return o.a.createElement("div",{className:"movieSearchDetails"},o.a.createElement(f,{movie:this.state.selectedMovie,details:this.state.details,onDetailsToHomeButtonClick:this.handleDetailsToHomeClick,onAddWatchListClick:function(t,a,s,o,n,i,r){return e.handleAddWatchListClick(t,a,s,o,n,i,r)},onRemoveWatchListClick:function(t){return e.handleRemoveWatchListClick(t)},class:i,removeDisabled:!this.state.isAddedToWatchList,addDisabled:this.state.isAddedToWatchList,status:this.state.status,loading:this.state.loading}))}return s&&a?o.a.createElement("div",{className:"userWatchList"},o.a.createElement(w,{list:this.state.watchList,onRemoveButtonClick:function(t){return e.handleRemoveButtonClick(t)},onWatchListToHomeButtonClick:this.handleWatchListToHomeButtonClick,isWatchListEmptyMessage:this.state.isWatchListEmptyMessage,loading:this.state.loading,status:this.state.status})):void 0}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.d8d48c12.chunk.js.map