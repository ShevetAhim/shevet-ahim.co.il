(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9081:function(e,t,r){"use strict";r(7294);var n=r(9583),i=r(3313),s=r(5893);t.Z=function(e){var t=e.item;return(0,s.jsx)(i.Z,{item:t,children:(0,s.jsxs)("ul",{children:[t.frontmatter.duration&&(0,s.jsxs)("li",{children:[(0,s.jsx)(n.qyc,{})," ",t.frontmatter.duration]}),t.frontmatter.price&&(0,s.jsxs)("li",{children:[(0,s.jsx)(n.pgo,{})," ",t.frontmatter.price]})]})})}},9654:function(e,t,r){"use strict";var n=r(2809),i=(r(7294),r(5675)),s=r(4184),c=r.n(s),a=r(5231),o=r.n(a),l=r(437),d=r(2872),u=r(6228),m=r(5893);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t=e.item,r=e.children;return(0,m.jsxs)("div",{className:c()("media",o().card),children:[(0,m.jsx)("div",{className:"media-left",children:(0,m.jsx)("figure",{className:"image is-128x128",children:(0,m.jsx)(i.default,j(j({},(0,d.lw)(t.frontmatter.image,128,128)),{},{alt:t.frontmatter.title}))})}),(0,m.jsx)("div",{className:"media-content",children:(0,m.jsxs)(l.Z,{item:t,children:[(0,m.jsx)("div",{className:c()("subtitle","is-4","mb-1",o().title),children:t.frontmatter.title}),(0,m.jsxs)("div",{className:c()("content",o().content),children:[t.frontmatter.date&&(0,m.jsx)("time",{className:"mb-1",children:(0,u.p)(t.frontmatter.date)}),(0,m.jsx)("div",{children:r})]})]})})]})}},3313:function(e,t,r){"use strict";r.d(t,{Z:function(){return v}});r(7294);var n=r(4184),i=r.n(n),s=r(5302),c=r.n(s),a=r(437),o=r(2809),l=r(5675),d=r(7410),u=r.n(d),m=r(5893),f=function(e){var t=e.title,r=e.id,n="https://www.youtube.com/embed/".concat(r);return(0,m.jsx)("div",{className:u().video,children:(0,m.jsx)("iframe",{src:n,title:t,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",frameBorder:"0",allowFullScreen:!0})})},j=r(2872);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=function(e){var t=e.item,r=e.width,n=e.height;return t.frontmatter.youtube_id?(0,m.jsx)(f,{id:t.frontmatter.youtube_id,title:t.frontmatter.title}):(0,m.jsx)(l.default,x(x({},(0,j.lw)(t.frontmatter.image,r,n)),{},{alt:t.frontmatter.title}))},b=r(6228),v=function(e){var t=e.item,r=e.children;return(0,m.jsx)("div",{className:i()("column","is-one-third",c().card),children:(0,m.jsx)("div",{className:"box",children:(0,m.jsxs)(a.Z,{item:t,children:[(0,m.jsx)("div",{className:c().unboxTop,children:(0,m.jsx)(p,{item:t,width:800,height:450})}),(0,m.jsx)("div",{className:i()("subtitle","is-4","mb-2","mt-3",c().title),children:t.frontmatter.title}),(0,m.jsxs)("div",{className:c().content,children:[t.frontmatter.date&&(0,m.jsx)("time",{className:"mb-1",children:(0,b.p)(t.frontmatter.date)}),r]})]})})})}},437:function(e,t,r){"use strict";r(7294);var n=r(1664),i=r(5893);t.Z=function(e){var t=e.item,r=e.children;return t.frontmatter.link?(0,i.jsx)("a",{href:t.frontmatter.link,target:"_blank",rel:"noreferrer",children:r}):t.frontmatter.youtube_id?(0,i.jsx)("a",{href:"https://www.youtube.com/watch/".concat(t.frontmatter.youtube_id),target:"_blank",rel:"noreferrer",children:r}):t.fields&&t.fields.category&&t.fields.slug?(0,i.jsx)(n.default,{href:"/".concat(t.fields.category,"/").concat(t.fields.slug),children:(0,i.jsx)("a",{children:r})}):(0,i.jsx)(i.Fragment,{children:r})}},7306:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return h},default:function(){return x}});var n=r(7821),i=r(3313),s=r(9081),c=r(9654),a=(r(7294),r(1664)),o=r(4184),l=r.n(o),d=r(3889),u=r.n(d),m=r(5893),f=function(e){var t=e.title,r=e.subtitle,n=e.moreText,i=e.moreHref,s=e.moreSizeClass;return(0,m.jsxs)("div",{className:u().container,children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{className:"title",children:t}),r&&(0,m.jsx)("div",{className:"subtitle",children:r})]}),(0,m.jsx)(a.default,{href:i,children:(0,m.jsx)("a",{className:l()("button",s,u().button),children:n})})]})},j=JSON.parse('{"TN":"\u05e9\u05d1\u05d8 \u05d0\u05d7\u05d9\u05dd","Oc":"\u05de\u05ea\u05d7\u05dd \u05d0\u05d9\u05e8\u05d5\u05d7 \u05dc\u05e7\u05d1\u05d5\u05e6\u05d5\u05ea \u05d5\u05d9\u05d7\u05d9\u05d3\u05d9\u05dd \u05d0\u05d9\u05e8\u05d5\u05e2\u05d9\u05dd \u05d5\u05e1\u05d3\u05e0\u05d0\u05d5\u05ea","LG":"\u05de\u05d2\u05d5\u05d5\u05df \u05d0\u05e4\u05e9\u05e8\u05d5\u05d9\u05d5\u05ea \u05d0\u05d9\u05e8\u05d5\u05d7","Eo":"\u05e4\u05e2\u05d9\u05dc\u05d5\u05d9\u05d5\u05ea \u05e1\u05d9\u05d5\u05e8\u05d9\u05dd \u05d5\u05d4\u05e8\u05e6\u05d0\u05d5\u05ea","oP":"\u05e9\u05dc\u05dc \u05e1\u05d3\u05e0\u05d0\u05d5\u05ea, \u05e4\u05e2\u05d9\u05dc\u05d5\u05d9\u05d5\u05ea \u05d9\u05d5\u05dd, \u05d9\u05de\u05d9 \u05d2\u05d9\u05d1\u05d5\u05e9 \u05dc\u05e7\u05d1\u05d5\u05e6\u05d5\u05ea, \u05d7\u05d1\u05e8\u05d5\u05ea, \u05de\u05e0\u05d4\u05dc\u05d9\u05dd \u05d5\u05de\u05ea\u05e2\u05e0\u05d9\u05d9\u05e0\u05d9\u05dd.","tn":"\u05dc\u05db\u05dc \u05d4\u05e4\u05e2\u05d9\u05dc\u05d5\u05d9\u05d5\u05ea","I2":"\u05e2\u05dc\u05d9\u05e0\u05d5 \u05d1\u05ea\u05e7\u05e9\u05d5\u05e8\u05ea","Yd":"\u05e2\u05d5\u05d3 \u05de\u05d4\u05ea\u05e7\u05e9\u05d5\u05e8\u05ea","HX":"\u05de\u05d4\u05d1\u05dc\u05d5\u05d2","d$":"\u05e2\u05d5\u05d3 \u05de\u05d4\u05d1\u05dc\u05d5\u05d2"}'),h=!0,x=function(e){return(0,m.jsxs)(n.Z,{top:{type:"header",title:j.TN,subtitle:j.Oc,image:"header.jpg"},children:[(0,m.jsxs)("section",{className:"section",children:[(0,m.jsx)("div",{className:"title",children:j.LG}),(0,m.jsx)("div",{className:"columns is-multiline",children:e.accommodations.map((function(e){return(0,m.jsx)(i.Z,{item:e,children:e.frontmatter.summary},e.fields.slug)}))})]}),(0,m.jsxs)("section",{className:"section",children:[(0,m.jsx)(f,{title:j.Eo,subtitle:j.oP,moreText:j.tn,moreSizeClass:"is-large",moreHref:"/activities"}),(0,m.jsx)("div",{className:"columns is-multiline",children:e.activities.map((function(e){return(0,m.jsx)(s.Z,{item:e},e.fields.slug)}))})]}),(0,m.jsx)("section",{className:"section",children:(0,m.jsxs)("div",{className:"columns is-variable is-8",children:[(0,m.jsxs)("div",{className:"column",children:[(0,m.jsx)(f,{title:j.HX,moreText:j.d$,moreSizeClass:"is-medium",moreHref:"/blog"}),e.blog.map((function(e){return(0,m.jsx)(c.Z,{item:e,children:e.frontmatter.summary},e.fields.slug)}))]}),(0,m.jsxs)("div",{className:"column",children:[(0,m.jsx)(f,{title:j.I2,moreText:j.Yd,moreSizeClass:"is-medium",moreHref:"/news"}),e.news.map((function(e){return(0,m.jsx)(c.Z,{item:e,children:(0,m.jsx)("div",{dangerouslySetInnerHTML:{__html:e.html}})},e.fields.slug)}))]})]})})]})}},5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(7306)}])},5231:function(e){e.exports={title:"ArticleSummary_title__3x21d",card:"ArticleSummary_card__1afVn",content:"ArticleSummary_content__1ap3F"}},5302:function(e){e.exports={title:"Card_title__3heSv",card:"Card_card__uZ6RZ",content:"Card_content__2-o66",unboxTop:"Card_unboxTop__2yekJ"}},3889:function(e){e.exports={container:"TitleAndMore_container__3zNnV",button:"TitleAndMore_button__y4nYU"}},7410:function(e){e.exports={video:"Video_video__3JeL1"}}},function(e){e.O(0,[445,109,882,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);