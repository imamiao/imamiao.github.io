(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{DVng:function(e,t,a){e.exports={pagination:"pagination-module--pagination--FYUjj"}},OZsj:function(e,t,a){e.exports={postlist:"postlist-module--postlist--1MM_l",item:"postlist-module--item--WHPfB",postlist__item_wrapper:"postlist-module--postlist__item_wrapper--2ew9A",item__info__title:"postlist-module--item__info__title--2EFf1",item__info:"postlist-module--item__info--3HEVW",item__info__description:"postlist-module--item__info__description--24sTL",item__info__date:"postlist-module--item__info__date--1pjrQ",item__info_compact:"postlist-module--item__info_compact--sqMig",item__info_compact__title:"postlist-module--item__info_compact__title--2s3IY",item__info_compact__date:"postlist-module--item__info_compact__date--MoRNB",item__image:"postlist-module--item__image--_5L10"}},"RjI+":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var i=a("Wbzz"),n=a("q1tI"),o=a.n(n),_=a("DVng"),m=a.n(_),s=function(e){var t=e.prevText,a=e.prevLink,n=e.nextText,_=e.nextLink,s=e.currentText;return o.a.createElement("nav",{className:m.a.pagination},o.a.createElement("div",{className:m.a.pagination__prev},a&&o.a.createElement(i.Link,{to:a,rel:"prev"},t)),o.a.createElement("div",{className:m.a.pagination__current},s),o.a.createElement("div",{className:m.a.pagination__next},_&&o.a.createElement(i.Link,{to:_,rel:"next"},n)))};s.defaultProps={prevText:"← PREV",nextText:"NEXT →",currentText:""};var r=s},Uf8T:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var i=a("Wbzz"),n=a("q1tI"),o=a.n(n),_=a("OZsj"),m=a.n(_),s=function(e){var t=e.posts,a=e.compact;return o.a.createElement("div",{className:m.a.postlist},t.map((function(e){var t=e.node;return o.a.createElement("div",{className:m.a.postlist__item_wrapper,key:t.fields.slug},o.a.createElement(i.Link,{to:t.fields.slug,className:m.a.item},o.a.createElement("div",{className:a?m.a.item__info_compact:m.a.item__info},o.a.createElement("h2",{className:a?m.a.item__info_compact__title:m.a.item__info__title},t.frontmatter.title),!a&&o.a.createElement("div",{className:m.a.item__info__description},t.frontmatter.description||t.excerpt),o.a.createElement("div",{className:a?m.a.item__info_compact__date:m.a.item__info__date},t.fields.date)),!a&&t.frontmatter.image&&o.a.createElement("div",{className:m.a.item__image,style:{backgroundImage:"url("+t.frontmatter.image+")"}})))})))}},Vazz:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return l}));var i=a("I/Ru"),n=a("8b0t"),o=a("RjI+"),_=a("Uf8T"),m=a("q1tI"),s=a.n(m),r=a("sZJX");t.default=function(e){var t=e.data,a=e.pageContext,m=t.allMarkdownRemark.edges,l=a.totalPage,c=a.currentPage,p=c>1?"本站文章列表：第 "+c+" 页，共 "+l+" 页。":"";return s.a.createElement(i.a,{title:"Posts",description:p},s.a.createElement(r.a,null),s.a.createElement(n.a,null,s.a.createElement(_.a,{posts:m}),s.a.createElement(o.a,{prevLink:1!==c&&(2===c?"/":"/page/"+(c-1)),nextLink:c!==l&&"/page/"+(c+1),currentText:"Page "+c})))};var l="2108486285"}}]);
//# sourceMappingURL=component---src-templates-post-list-paginated-js-c1cc3631a736a4bb4dbc.js.map