"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[802],{5802:function(e,s,a){a.r(s),a.d(s,{default:function(){return w}});var i=a(885),t=a(2791),c=a(6871),n=a(4390),r=a(501),_="Movie_movie__zJ9SX",o="Movie_image__WTy9W",l="Movie_wrap__3Qyy+",v="Movie_title__HKvwH",m="Movie_year__ucQBa",u="Movie_vote__yab5k",h="Movie_voteValue__7dxm-",d="Movie_subtitle__VOgv7",x="Movie_text__WOUue",j="Movie_btn__KxuZ1",p=a(184);function N(e){var s=e.movie;return s&&(0,p.jsxs)("div",{className:_,children:[(0,p.jsx)("img",{className:o,src:"https://image.tmdb.org/t/p/w500/"+s.poster_path,alt:s.title}),(0,p.jsxs)("div",{className:l,children:[(0,p.jsxs)("h2",{className:v,children:[s.title,(0,p.jsxs)("span",{className:m,children:["(",s.release_date.slice(0,4),")"]})]}),(0,p.jsxs)("p",{className:u,children:["User score:",(0,p.jsxs)("span",{className:h,children:[10*s.vote_average,"%"]})]}),(0,p.jsx)("h3",{className:d,children:"Overview"}),(0,p.jsx)("p",{className:x,children:s.overview}),(0,p.jsx)("h3",{className:d,children:"Genres"}),(0,p.jsx)("p",{className:x,children:s.genres.map((function(e){return e.name})).join(", ")}),(0,p.jsx)(r.rU,{to:"cast",className:j,children:"Cast"}),(0,p.jsx)(r.rU,{to:"reviews",className:j,children:"Reviews"})]})]})}var f="Goback_wrap__EtgEJ",g="Goback_btn__m30X-";function b(e){var s=e.goBack;return(0,p.jsx)("div",{className:f,children:(0,p.jsx)("button",{className:g,type:"button",onClick:s,children:"Go back"})})}function w(){var e=(0,t.useState)(null),s=(0,i.Z)(e,2),a=s[0],r=s[1],_=(0,c.UO)().movieId,o=(0,c.s0)();return(0,t.useEffect)((function(){(0,n.TP)(_).then((function(e){return r(e)}))}),[_]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(b,{goBack:function(){o(-1)}}),(0,p.jsx)(N,{movie:a}),(0,p.jsx)(c.j3,{})]})}}}]);
//# sourceMappingURL=802.b3122fcc.chunk.js.map