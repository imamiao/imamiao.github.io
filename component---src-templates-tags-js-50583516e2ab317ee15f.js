(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{MN1z:function(e,t,a){"use strict";a.r(t);var i=a("I/Ru"),n=a("8b0t"),_=a("ukDn"),o=a("Uf8T"),m=a("q1tI"),l=a.n(m),s=a("sZJX");t.default=function(e){var t=e.pageContext,a=e.data,m=t.tag,c=a.allMarkdownRemark,r=c.edges,d=c.totalCount,p="Tag: "+m;return l.a.createElement(i.a,{title:p,description:"「"+m+"」标签下共有 "+d+" 篇文章。"},l.a.createElement(s.a,null),l.a.createElement(n.a,null,l.a.createElement(_.a,{title:p,nopadding:!0},l.a.createElement(o.a,{posts:r}))))}},OZsj:function(e,t,a){e.exports={postlist:"postlist-module--postlist--2j0CY",item:"postlist-module--item--21vL1",postlist__item_wrapper:"postlist-module--postlist__item_wrapper--YdbhM",item__info__title:"postlist-module--item__info__title--2genc",item__info:"postlist-module--item__info--1NhvD",item__info__description:"postlist-module--item__info__description--3Q0xu",item__info__date:"postlist-module--item__info__date--gj-Dx",item__info_compact:"postlist-module--item__info_compact--qObi8",item__info_compact__title:"postlist-module--item__info_compact__title--3s1Sz",item__info_compact__date:"postlist-module--item__info_compact__date--2vYqp",item__image:"postlist-module--item__image--3h6N1"}},Uf8T:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var i=a("Wbzz"),n=a("q1tI"),_=a.n(n),o=a("OZsj"),m=a.n(o),l=function(e){var t=e.posts,a=e.compact;return _.a.createElement("div",{className:m.a.postlist},t.map((function(e){var t=e.node;return _.a.createElement("div",{className:m.a.postlist__item_wrapper,key:t.fields.slug},_.a.createElement(i.Link,{to:t.fields.slug,className:m.a.item},_.a.createElement("div",{className:a?m.a.item__info_compact:m.a.item__info},_.a.createElement("h2",{className:a?m.a.item__info_compact__title:m.a.item__info__title},t.frontmatter.title),!a&&_.a.createElement("div",{className:m.a.item__info__description},t.frontmatter.description||t.excerpt),_.a.createElement("div",{className:a?m.a.item__info_compact__date:m.a.item__info__date},t.fields.date)),!a&&t.frontmatter.image&&_.a.createElement("div",{className:m.a.item__image,style:{backgroundImage:"url("+t.frontmatter.image+")"}})))})))}},V9FI:function(e,t,a){e.exports={header__image:"page-module--header__image--5QocD",header__title:"page-module--header__title--dt-iz",content:"page-module--content--NsxoX"}},ukDn:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var i=a("q1tI"),n=a.n(i),_=a("V9FI"),o=a.n(_),m=function(e){var t=e.title,a=e.image,i=e.children,_=e.nopadding;return n.a.createElement("div",null,n.a.createElement("header",{className:o.a.header},a&&n.a.createElement("div",{className:o.a.header__image,style:{backgroundImage:"url("+a+")"}}),n.a.createElement("h1",{className:o.a.header__title},t)),n.a.createElement("section",{className:o.a.content,style:_&&{paddingRight:0,paddingLeft:0}},i))}}}]);
//# sourceMappingURL=component---src-templates-tags-js-50583516e2ab317ee15f.js.map