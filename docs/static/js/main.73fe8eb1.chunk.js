(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(7),a=n.n(r),i=(n(15),n(2)),s=n(9),u=n(0),o=function(t){var e=t.setCategorias,n=Object(c.useState)(""),r=Object(i.a)(n,2),a=r[0],o=r[1],j=function(t){t.preventDefault(),a.trim().length>2&&(e((function(t){return[a].concat(Object(s.a)(t))})),o(""))};return Object(u.jsxs)("form",{onSubmit:j,children:[Object(u.jsx)("input",{type:"text",value:a,onChange:function(t){o(t.target.value)}}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{onClick:j,children:"Agregar categoria"})]})},j=n(10),d=function(t){t.id;var e=t.title,n=t.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(u.jsx)("img",{src:n,alt:e}),Object(u.jsx)("p",{children:e})]})},l=n(6),b=n.n(l),f=n(8),p=function(){var t=Object(f.a)(b.a.mark((function t(e){var n,c,r,a,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=").concat(9,"&api_key=").concat("VfnD9GXKb2ShnDFMzlznNlLC1f89WdFQ"),t.next=3,fetch(n);case 3:return c=t.sent,t.next=6,c.json();case 6:return r=t.sent,a=r.data,i=a.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(t){var e=t.category,n=function(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){p(t).then((function(t){console.log(t),setTimeout((function(){a({data:t,loading:!1})}),2e3)}))}),[t]),r}(e),r=n.data,a=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:e}),a&&Object(u.jsx)("p",{children:"Loading"}),Object(u.jsx)("div",{className:"card-grid",children:r.map((function(t,e){return Object(u.jsx)(d,Object(j.a)({},t),t.id)}))})]})},g=function(){var t=Object(c.useState)(["Owl House"]),e=Object(i.a)(t,2),n=e[0],r=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(o,{setCategorias:r}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(t,e){return Object(u.jsx)(O,{category:t},t.trim())}))})]})},h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),r(t),a(t),i(t)}))};a.a.render(Object(u.jsx)(g,{}),document.getElementById("root")),h()}},[[18,1,2]]]);
//# sourceMappingURL=main.73fe8eb1.chunk.js.map